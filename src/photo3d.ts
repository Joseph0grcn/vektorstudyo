import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as ort from 'onnxruntime-web';

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

let sourceImage: HTMLImageElement | null = null;
let modelSession: ort.InferenceSession | null = null;
let modelUrl: string | null = null;
let mesh: THREE.Mesh | null = null;
let geometry: THREE.BufferGeometry | null = null;
const MODEL_URL = 'https://huggingface.co/Xenova/depth-anything-small-hf/resolve/main/onnx/model_quantized.onnx';
const MODEL_NAME = 'depth-anything-small-quantized.onnx';
const MODEL_CACHE = 'vektorstudyo-models-v1';
let modelDirectoryHandle: FileSystemDirectoryHandle | null = null;

const viewer = $('viewer');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1a1d24');
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1000);
camera.position.set(0, 0, 180);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
viewer.append(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
scene.add(new THREE.HemisphereLight(0xffffff, 0x263248, 2.4));
const key = new THREE.DirectionalLight(0xffffff, 2.2);
key.position.set(100, 120, 180);
scene.add(key);
scene.add(new THREE.GridHelper(180, 18, 0x5a6677, 0x343b48));

function resizeViewer() {
  const width = viewer.clientWidth;
  const height = viewer.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resizeViewer);
resizeViewer();

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

$<HTMLButtonElement>('backButton').onclick = () => window.open('/', '_self');

function setStatus(id: string, text: string) {
  $(id).textContent = text;
}

function loadImage(file: File) {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    sourceImage = img;
    const preview = $<HTMLImageElement>('sourcePreview');
    preview.src = url;
    preview.parentElement?.classList.add('visible');
    setStatus('photoStatus', `${file.name} · ${img.naturalWidth} × ${img.naturalHeight}`);
    $<HTMLButtonElement>('generate').disabled = false;
  };
  img.onerror = () => setStatus('photoStatus', 'Fotoğraf okunamadı.');
  img.src = url;
}

const drop = $('dropZone');
drop.onclick = () => $<HTMLInputElement>('photoFile').click();
$<HTMLInputElement>('photoFile').onchange = event => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) loadImage(file);
};
for (const type of ['dragenter', 'dragover']) {
  drop.addEventListener(type, event => {
    event.preventDefault();
    drop.classList.add('drag');
  });
}
for (const type of ['dragleave', 'drop']) {
  drop.addEventListener(type, event => {
    event.preventDefault();
    drop.classList.remove('drag');
  });
}
drop.addEventListener('drop', event => {
  const file = (event as DragEvent).dataTransfer?.files[0];
  if (file?.type.startsWith('image/')) loadImage(file);
});

$<HTMLInputElement>('modelFile').onchange = async event => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  await loadModelFile(file);
};

async function loadModelFile(file: File) {
  if (modelUrl) URL.revokeObjectURL(modelUrl);
  modelUrl = URL.createObjectURL(file);
  setStatus('modelStatus', 'ONNX modeli hazırlanıyor…');
  try {
    modelSession = await ort.InferenceSession.create(modelUrl, {
      executionProviders: ['webgl', 'wasm'],
      graphOptimizationLevel: 'all'
    });
    setStatus('modelStatus', `${file.name} hazır`);
  } catch (error) {
    modelSession = null;
    setStatus('modelStatus', `Model yüklenemedi: ${(error as Error).message}`);
  }
}

async function readOpfsModel() {
  const root = await navigator.storage.getDirectory();
  const cache = await root.getDirectoryHandle(MODEL_CACHE, { create: true });
  try {
    const handle = await cache.getFileHandle(MODEL_NAME);
    return await handle.getFile();
  } catch {
    return null;
  }
}

async function writeOpfsModel(file: File) {
  const root = await navigator.storage.getDirectory();
  const cache = await root.getDirectoryHandle(MODEL_CACHE, { create: true });
  const handle = await cache.getFileHandle(MODEL_NAME, { create: true });
  const writable = await handle.createWritable();
  await writable.write(file);
  await writable.close();
}

async function readFolderModel() {
  if (!modelDirectoryHandle) return null;
  try {
    const handle = await modelDirectoryHandle.getFileHandle(MODEL_NAME);
    return await handle.getFile();
  } catch {
    return null;
  }
}

async function writeFolderModel(file: File) {
  if (!modelDirectoryHandle) return;
  const handle = await modelDirectoryHandle.getFileHandle(MODEL_NAME, { create: true });
  const writable = await handle.createWritable();
  await writable.write(file);
  await writable.close();
}

$<HTMLButtonElement>('chooseModelFolder').onclick = async () => {
  const picker = (window as unknown as {
    showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle>;
  }).showDirectoryPicker;
  if (!picker) {
    setStatus('modelStatus', 'Bu tarayıcı klasör seçimini desteklemiyor. OPFS otomatik kullanılacak.');
    return;
  }
  try {
    modelDirectoryHandle = await picker.call(window);
    setStatus('modelStatus', `Model klasörü seçildi: ${modelDirectoryHandle.name}`);
  } catch {
    setStatus('modelStatus', 'Model klasörü seçimi iptal edildi.');
  }
};

$<HTMLButtonElement>('downloadModel').onclick = ensureDefaultModel;

async function ensureDefaultModel() {
  const button = $<HTMLButtonElement>('downloadModel');
  button.disabled = true;
  try {
    let file = await readFolderModel();
    if (!file) file = await readOpfsModel();
    if (!file) {
      setStatus('modelStatus', 'Depth Anything Small indiriliyor…');
      const response = await fetch(MODEL_URL);
      if (!response.ok) throw new Error(`Hugging Face HTTP ${response.status}`);
      const blob = await response.blob();
      file = new File([blob], MODEL_NAME, { type: 'application/octet-stream' });
      if (file.size < 20 * 1024 * 1024) throw new Error(`Beklenenden küçük model dosyası: ${file.size} bayt`);
      await writeOpfsModel(file);
      await writeFolderModel(file);
      setStatus('modelStatus', `İndirildi ve önbelleğe kaydedildi: ${(file.size / 1024 / 1024).toFixed(1)} MB`);
    } else {
      setStatus('modelStatus', `Model bulundu: ${(file.size / 1024 / 1024).toFixed(1)} MB`);
    }
    await loadModelFile(file);
  } catch (error) {
    setStatus('modelStatus', `Model indirilemedi: ${(error as Error).message}`);
  } finally {
    button.disabled = false;
  }
}

ensureDefaultModel();

for (const id of ['height', 'base', 'contrast', 'smooth']) {
  $(id).addEventListener('input', () => {
    $<HTMLOutputElement>(`${id}Value`).value =
      id === 'height' ? $<HTMLInputElement>(id).value :
      id === 'base' ? $<HTMLInputElement>(id).value :
      id === 'contrast' ? $<HTMLInputElement>(id).value :
      $<HTMLInputElement>(id).value;
  });
}

function readImagePixels(image: HTMLImageElement, width: number, height: number) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true })!;
  context.drawImage(image, 0, 0, width, height);
  return context.getImageData(0, 0, width, height).data;
}

function fallbackDepth(pixels: Uint8ClampedArray, width: number, height: number) {
  const output = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    const offset = i * 4;
    const luminance = (pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722) / 255;
    const x = i % width / (width - 1);
    const y = Math.floor(i / width) / (height - 1);
    const vignette = 1 - 0.12 * (Math.hypot(x - 0.5, y - 0.5) / 0.707);
    output[i] = luminance * vignette;
  }
  return output;
}

function normalizeDepth(depth: Float32Array) {
  let min = Infinity;
  let max = -Infinity;
  for (const value of depth) {
    if (Number.isFinite(value)) {
      min = Math.min(min, value);
      max = Math.max(max, value);
    }
  }
  const range = max - min || 1;
  for (let i = 0; i < depth.length; i++) {
    depth[i] = Number.isFinite(depth[i]) ? (depth[i] - min) / range : 0;
  }
  return depth;
}

async function inferDepth(image: HTMLImageElement, width: number, height: number) {
  const pixels = readImagePixels(image, width, height);
  if (!modelSession) return fallbackDepth(pixels, width, height);

  const rgb = new Float32Array(width * height * 3);
  for (let i = 0, j = 0; i < pixels.length; i += 4, j += 3) {
    rgb[j] = pixels[i] / 255;
    rgb[j + 1] = pixels[i + 1] / 255;
    rgb[j + 2] = pixels[i + 2] / 255;
  }
  const chw = new Float32Array(width * height * 3);
  for (let channel = 0; channel < 3; channel++) {
    for (let i = 0; i < width * height; i++) chw[channel * width * height + i] = rgb[i * 3 + channel];
  }

  const inputName = modelSession.inputNames[0];
  const tensor = new ort.Tensor('float32', chw, [1, 3, height, width]);
  const output = await modelSession.run({ [inputName]: tensor });
  const result = output[modelSession.outputNames[0]];
  const depth = new Float32Array(result.data as Float32Array);
  return normalizeDepth(depth.length === width * height ? depth : fallbackDepth(pixels, width, height));
}

function smoothDepth(depth: Float32Array, width: number, height: number, passes: number) {
  let source = depth;
  for (let pass = 0; pass < passes; pass++) {
    const result = new Float32Array(source);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = y * width + x;
        result[i] = (
          source[i] * 4 +
          source[i - 1] + source[i + 1] + source[i - width] + source[i + width]
        ) / 8;
      }
    }
    source = result;
  }
  return source;
}

function makeMesh(depth: Float32Array, width: number, height: number) {
  const geometry = new THREE.BufferGeometry();
  const vertices: number[] = [];
  const indices: number[] = [];
  const maxHeight = Number($<HTMLInputElement>('height').value);
  const baseHeight = Number($<HTMLInputElement>('base').value);
  const contrast = Number($<HTMLInputElement>('contrast').value);
  const physicalWidth = 120;
  const physicalHeight = physicalWidth * height / width;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const z = (Math.pow(depth[i], contrast) * maxHeight) + baseHeight;
      vertices.push(
        (x / (width - 1) - 0.5) * physicalWidth,
        (0.5 - y / (height - 1)) * physicalHeight,
        z
      );
    }
  }
  const topCount = width * height;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      vertices.push(
        (x / (width - 1) - 0.5) * physicalWidth,
        (0.5 - y / (height - 1)) * physicalHeight,
        0
      );
    }
  }
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 1; x++) {
      const a = y * width + x;
      const b = a + 1;
      const c = a + width;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  for (let y = 0; y < height - 1; y++) {
    for (let x = 0; x < width - 1; x++) {
      const a = topCount + y * width + x;
      const b = a + 1;
      const c = a + width;
      const d = c + 1;
      indices.push(a, b, c, b, d, c);
    }
  }
  for (let x = 0; x < width - 1; x++) {
    const topBackA = x;
    const topBackB = x + 1;
    const bottomBackA = topCount + x;
    const bottomBackB = topCount + x + 1;
    indices.push(topBackA, bottomBackA, topBackB, topBackB, bottomBackA, bottomBackB);
  }
  for (let x = 0; x < width - 1; x++) {
    const topFrontA = (height - 1) * width + x;
    const topFrontB = topFrontA + 1;
    const bottomFrontA = topCount + (height - 1) * width + x;
    const bottomFrontB = bottomFrontA + 1;
    indices.push(topFrontA, topFrontB, bottomFrontA, bottomFrontB, bottomFrontA, topFrontB);
  }
  for (let y = 0; y < height - 1; y++) {
    const topLeftA = y * width;
    const topLeftB = (y + 1) * width;
    const bottomLeftA = topCount + y * width;
    const bottomLeftB = topCount + (y + 1) * width;
    indices.push(topLeftA, topLeftB, bottomLeftA, bottomLeftB, bottomLeftA, topLeftB);
  }
  for (let y = 0; y < height - 1; y++) {
    const topRightA = y * width + width - 1;
    const topRightB = (y + 1) * width + width - 1;
    const bottomRightA = topCount + y * width + width - 1;
    const bottomRightB = topCount + (y + 1) * width + width - 1;
    indices.push(topRightA, bottomRightA, topRightB, topRightB, bottomRightA, bottomRightB);
  }

  const positions = new Float32Array(vertices);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.rotateX(-Math.PI);
  geometry.computeBoundingSphere();
  return geometry;
}

$<HTMLButtonElement>('generate').onclick = async () => {
  if (!sourceImage) return;
  const button = $<HTMLButtonElement>('generate');
  button.disabled = true;
  setStatus('modelStatusBar', 'Derinlik haritası oluşturuluyor…');
  try {
    const size = Number($<HTMLSelectElement>('resolution').value);
    let depth = await inferDepth(sourceImage, size, size);
    depth = smoothDepth(depth, size, size, Number($<HTMLInputElement>('smooth').value));
    const nextGeometry = makeMesh(depth, size, size);
    if (mesh) {
      scene.remove(mesh);
      geometry?.dispose();
    }
    geometry = nextGeometry;
    mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        color: '#d7dbe4',
        roughness: 0.7,
        metalness: 0.05,
        side: THREE.DoubleSide
      })
    );
    scene.add(mesh);
    const box = new THREE.Box3().setFromObject(mesh);
    const center = box.getCenter(new THREE.Vector3());
    controls.target.copy(center);
    camera.position.set(center.x, center.y - 10, center.z + box.getSize(new THREE.Vector3()).length() * 0.75);
    controls.update();
    $<HTMLElement>('emptyViewer').style.display = 'none';
    $<HTMLButtonElement>('downloadObj').disabled = false;
    $<HTMLButtonElement>('downloadStl').disabled = false;
    setStatus('modelStatusBar', '3B model hazır');
    setStatus('meshStats', `${size * size} düğüm · ${(size - 1) * (size - 1) * 2} üçgen`);
  } catch (error) {
    setStatus('modelStatusBar', `Hata: ${(error as Error).message}`);
  } finally {
    button.disabled = false;
  }
};

function downloadText(text: string, name: string) {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function objExport() {
  if (!geometry) return '';
  const position = geometry.getAttribute('position');
  const index = geometry.getIndex();
  const lines = ['# VektorStudyo OBJ', '# Tarayici tabanli mesh'];
  for (let i = 0; i < position.count; i++) {
    lines.push(`v ${position.getX(i)} ${position.getY(i)} ${position.getZ(i)}`);
  }
  if (index) {
    for (let i = 0; i < index.count; i += 3) {
      lines.push(`f ${index.getX(i) + 1} ${index.getX(i + 1) + 1} ${index.getX(i + 2) + 1}`);
    }
  }
  return lines.join('\n');
}

function stlExport() {
  if (!geometry) return new ArrayBuffer(84);
  const position = geometry.getAttribute('position');
  const index = geometry.getIndex();
  const triangleCount = index ? index.count / 3 : position.count / 3;
  const buffer = new ArrayBuffer(84 + triangleCount * 50);
  const view = new DataView(buffer);
  view.setUint32(80, triangleCount, true);
  let offset = 84;
  const normal = new THREE.Vector3();
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  for (let i = 0; i < triangleCount; i++) {
    const ia = index ? index.getX(i * 3) : i * 3;
    const ib = index ? index.getX(i * 3 + 1) : i * 3 + 1;
    const ic = index ? index.getX(i * 3 + 2) : i * 3 + 2;
    a.set(position.getX(ia), position.getY(ia), position.getZ(ia));
    b.set(position.getX(ib), position.getY(ib), position.getZ(ib));
    c.set(position.getX(ic), position.getY(ic), position.getZ(ic));
    ab.subVectors(b, a);
    ac.subVectors(c, a);
    normal.crossVectors(ab, ac).normalize();
    view.setFloat32(offset, normal.x, true); view.setFloat32(offset + 4, normal.y, true); view.setFloat32(offset + 8, normal.z, true); offset += 12;
    for (const point of [a, b, c]) {
      view.setFloat32(offset, point.x, true); view.setFloat32(offset + 4, point.y, true); view.setFloat32(offset + 8, point.z, true); offset += 12;
    }
    view.setUint16(offset, 0, true); offset += 2;
  }
  return buffer;
}

$<HTMLButtonElement>('downloadObj').onclick = () => downloadText(objExport(), 'vektorstudyo-3b.obj');
$<HTMLButtonElement>('downloadStl').onclick = () => {
  if (!geometry) return;
  const url = URL.createObjectURL(new Blob([stlExport()], { type: 'model/stl' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'vektorstudyo-3b.stl';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
