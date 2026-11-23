var pS=Object.defineProperty;var mS=(t,e,n)=>e in t?pS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var of=(t,e,n)=>mS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="187",is={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gS=0,lf=1,_S=2,ao=1,vS=2,qs=3,Ar=0,Rn=1,_i=2,rs=0,js=1,uf=2,df=3,cf=4,yS=5,Jr=100,xS=101,bS=102,wS=103,SS=104,MS=200,ES=201,TS=202,AS=203,Y_=204,Z_=205,RS=206,CS=207,IS=208,DS=209,PS=210,$S=211,LS=212,NS=213,US=214,Nu=0,Uu=1,Ou=2,Qs=3,ku=4,Fu=5,Bu=6,zu=7,j_=0,OS=1,kS=2,Bi=0,J_=1,Q_=2,e0=3,t0=4,n0=5,i0=6,r0=7,s0=300,as=301,ea=302,nl=303,il=304,Gu=1e3,Fi=1001,Hu=1002,fn=1003,FS=1004,ya=1005,An=1006,rl=1007,tr=1008,Nn=1009,a0=1010,o0=1011,ta=1012,Gd=1013,bi=1014,vi=1015,wi=1016,Hd=1017,Vd=1018,os=1020,l0=35902,u0=35899,d0=1021,c0=1022,yi=1023,rr=1026,nr=1027,h0=1028,Wd=1029,Rr=1030,qd=1031,Xd=1033,oo=33776,lo=33777,uo=33778,co=33779,Vu=35840,Wu=35841,qu=35842,Xu=35843,Ku=36196,Yu=37492,Zu=37496,ju=37488,Ju=37489,_o=37490,Qu=37491,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,ad=37814,od=37815,ld=37816,ud=37817,dd=37818,cd=37819,hd=37820,fd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,vo=36285,yd=36286,BS=3200,xd=0,zS=1,er="",Gn="srgb",yo="srgb-linear",xo="linear",$t="srgb",sl=7680,GS=519,HS=512,VS=513,WS=514,f0=515,qS=516,XS=517,p0=518,m0=519,KS=35044,hf="300 es",oi=2e3,na=2001;function YS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZS(){const t=bo("canvas");return t.style.display="block",t}const ff={};function pf(...t){const e="THREE."+t.shift();console.log(e,...t)}function g0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ze(...t){t=g0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function At(...t){t=g0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ho(...t){const e=t.join(" ");e in ff||(ff[e]=!0,Ze(...t))}function jS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const JS={[Nu]:Nu,[Ou]:Bu,[ku]:ku,[Qs]:Fu,[Uu]:Uu,[Bu]:Ou,[zu]:zu,[Fu]:Qs};class ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,bd=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function mt(t,e,n){return Math.max(e,Math.min(n,t))}function QS(t,e){return(t%e+e)%e}function al(t,e,n){return(1-n)*t+n*e}function e1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Kd(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function t1(t,e){if(e.constructor===Float32Array)return t;const n=Kd(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function n1(t,e){if(e.constructor===Float32Array)return t;const n=Kd(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const i1={DEG2RAD:fo},Lc=class Lc{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lc.prototype.isVector2=!0;let nt=Lc;class sr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3],c=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(h!==x||l!==c||u!==p||d!==m){let _=l*c+u*p+d*m+h*x;_<0&&(c=-c,p=-p,m=-m,x=-x,_=-_);let g=1-o;if(_<.9995){const y=Math.acos(_),T=Math.sin(y);g=Math.sin(g*y)/T,o=Math.sin(o*y)/T,l=l*g+c*o,u=u*g+p*o,d=d*g+m*o,h=h*g+x*o}else{l=l*g+c*o,u=u*g+p*o,d=d*g+m*o,h=h*g+x*o;const y=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=y,u*=y,d*=y,h*=y}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a],c=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+d*h+l*p-u*c,e[n+1]=l*m+d*c+u*h-o*p,e[n+2]=u*m+d*p+o*c-l*h,e[n+3]=d*m-o*h-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),h=o(s/2),c=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=c*d*h+u*p*m,this._y=u*p*h-c*d*m,this._z=u*d*m+c*p*h,this._w=u*d*h-c*p*m;break;case"YXZ":this._x=c*d*h+u*p*m,this._y=u*p*h-c*d*m,this._z=u*d*m-c*p*h,this._w=u*d*h+c*p*m;break;case"ZXY":this._x=c*d*h-u*p*m,this._y=u*p*h+c*d*m,this._z=u*d*m+c*p*h,this._w=u*d*h-c*p*m;break;case"ZYX":this._x=c*d*h-u*p*m,this._y=u*p*h+c*d*m,this._z=u*d*m-c*p*h,this._w=u*d*h+c*p*m;break;case"YZX":this._x=c*d*h+u*p*m,this._y=u*p*h+c*d*m,this._z=u*d*m-c*p*h,this._w=u*d*h-c*p*m;break;case"XZY":this._x=c*d*h-u*p*m,this._y=u*p*h-c*d*m,this._z=u*d*m+c*p*h,this._w=u*d*h+c*p*m;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],h=n[10],c=i+o+h;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nc=class Nc{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*d,this.y=i+l*d+o*u-s*h,this.z=r+l*h+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nc.prototype.isVector3=!0;let Z=Nc;const ol=new Z,mf=new sr,Uc=class Uc{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],h=i[7],c=i[2],p=i[5],m=i[8],x=r[0],_=r[3],g=r[6],y=r[1],T=r[4],E=r[7],A=r[2],R=r[5],w=r[8];return s[0]=a*x+o*y+l*A,s[3]=a*_+o*T+l*R,s[6]=a*g+o*E+l*w,s[1]=u*x+d*y+h*A,s[4]=u*_+d*T+h*R,s[7]=u*g+d*E+h*w,s[2]=c*x+p*y+m*A,s[5]=c*_+p*T+m*R,s[8]=c*g+p*E+m*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=d*a-o*u,c=o*l-d*s,p=u*s-a*l,m=n*h+i*c+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=h*x,e[1]=(r*u-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=c*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uc.prototype.isMatrix3=!0;let tt=Uc;const ll=new tt,gf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r1(){const t={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$t&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yo]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:$t,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const wt=r1();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class s1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{kr===void 0&&(kr=bo("canvas")),kr.width=e.width,kr.height=e.height;const r=kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=kr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a1=0;class Yd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ul(r[a].image)):s.push(ul(r[a]))}else s=ul(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ul(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?s1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let o1=0;const dl=new Z;class wn extends ur{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=Fi,r=Fi,s=An,a=tr,o=yi,l=Nn,u=wn.DEFAULT_ANISOTROPY,d=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=aa(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gu:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gu:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=s0;wn.DEFAULT_ANISOTROPY=1;const Oc=class Oc{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],c=l[1],p=l[5],m=l[9],x=l[2],_=l[6],g=l[10];if(Math.abs(d-c)<.01&&Math.abs(h-x)<.01&&Math.abs(m-_)<.01){if(Math.abs(d+c)<.1&&Math.abs(h+x)<.1&&Math.abs(m+_)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(u+1)/2,E=(p+1)/2,A=(g+1)/2,R=(d+c)/4,w=(h+x)/4,b=(m+_)/4;return T>E&&T>A?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=w/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=b/s),this.set(i,r,s,n),this}let y=Math.sqrt((_-m)*(_-m)+(h-x)*(h-x)+(c-d)*(c-d));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(h-x)/y,this.z=(c-d)/y,this.w=Math.acos((u+p+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oc.prototype.isVector4=!0;let qt=Oc;class l1 extends ur{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new wn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Yd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends l1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _0 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u1 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Lo=class Lo{constructor(e,n,i,r,s,a,o,l,u,d,h,c,p,m,x,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,h,c,p,m,x,_)}set(e,n,i,r,s,a,o,l,u,d,h,c,p,m,x,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=d,g[10]=h,g[14]=c,g[3]=p,g[7]=m,g[11]=x,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const c=a*d,p=a*h,m=o*d,x=o*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+m*u,n[5]=c-x*u,n[9]=-o*l,n[2]=x-c*u,n[6]=m+p*u,n[10]=a*l}else if(e.order==="YXZ"){const c=l*d,p=l*h,m=u*d,x=u*h;n[0]=c+x*o,n[4]=m*o-p,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-m,n[6]=x+c*o,n[10]=a*l}else if(e.order==="ZXY"){const c=l*d,p=l*h,m=u*d,x=u*h;n[0]=c-x*o,n[4]=-a*h,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*d,n[9]=x-c*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const c=a*d,p=a*h,m=o*d,x=o*h;n[0]=l*d,n[4]=m*u-p,n[8]=c*u+x,n[1]=l*h,n[5]=x*u+c,n[9]=p*u-m,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const c=a*l,p=a*u,m=o*l,x=o*u;n[0]=l*d,n[4]=x-c*h,n[8]=m*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=p*h+m,n[10]=c-x*h}else if(e.order==="XZY"){const c=a*l,p=a*u,m=o*l,x=o*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=c*h+x,n[5]=a*d,n[9]=p*h-m,n[2]=m*h-p,n[6]=o*d,n[10]=x*h+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,c1)}lookAt(e,n,i){const r=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),qi.crossVectors(i,Dn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),qi.crossVectors(i,Dn)),qi.normalize(),xa.crossVectors(Dn,qi),r[0]=qi.x,r[4]=xa.x,r[8]=Dn.x,r[1]=qi.y,r[5]=xa.y,r[9]=Dn.y,r[2]=qi.z,r[6]=xa.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],h=i[5],c=i[9],p=i[13],m=i[2],x=i[6],_=i[10],g=i[14],y=i[3],T=i[7],E=i[11],A=i[15],R=r[0],w=r[4],b=r[8],N=r[12],$=r[1],O=r[5],B=r[9],V=r[13],D=r[2],H=r[6],Y=r[10],W=r[14],ne=r[3],q=r[7],ie=r[11],k=r[15];return s[0]=a*R+o*$+l*D+u*ne,s[4]=a*w+o*O+l*H+u*q,s[8]=a*b+o*B+l*Y+u*ie,s[12]=a*N+o*V+l*W+u*k,s[1]=d*R+h*$+c*D+p*ne,s[5]=d*w+h*O+c*H+p*q,s[9]=d*b+h*B+c*Y+p*ie,s[13]=d*N+h*V+c*W+p*k,s[2]=m*R+x*$+_*D+g*ne,s[6]=m*w+x*O+_*H+g*q,s[10]=m*b+x*B+_*Y+g*ie,s[14]=m*N+x*V+_*W+g*k,s[3]=y*R+T*$+E*D+A*ne,s[7]=y*w+T*O+E*H+A*q,s[11]=y*b+T*B+E*Y+A*ie,s[15]=y*N+T*V+E*W+A*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],h=e[6],c=e[10],p=e[14],m=e[3],x=e[7],_=e[11],g=e[15],y=l*p-u*c,T=o*p-u*h,E=o*c-l*h,A=a*p-u*d,R=a*c-l*d,w=a*h-o*d;return n*(x*y-_*T+g*E)-i*(m*y-_*A+g*R)+r*(m*T-x*A+g*w)-s*(m*E-x*R+_*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return n*(a*d-o*u)-i*(s*d-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=e[9],c=e[10],p=e[11],m=e[12],x=e[13],_=e[14],g=e[15],y=n*o-i*a,T=n*l-r*a,E=n*u-s*a,A=i*l-r*o,R=i*u-s*o,w=r*u-s*l,b=d*x-h*m,N=d*_-c*m,$=d*g-p*m,O=h*_-c*x,B=h*g-p*x,V=c*g-p*_,D=y*V-T*B+E*O+A*$-R*N+w*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return e[0]=(o*V-l*B+u*O)*H,e[1]=(r*B-i*V-s*O)*H,e[2]=(x*w-_*R+g*A)*H,e[3]=(c*R-h*w-p*A)*H,e[4]=(l*$-a*V-u*N)*H,e[5]=(n*V-r*$+s*N)*H,e[6]=(_*E-m*w-g*T)*H,e[7]=(d*w-c*E+p*T)*H,e[8]=(a*B-o*$+u*b)*H,e[9]=(i*$-n*B-s*b)*H,e[10]=(m*R-x*E+g*y)*H,e[11]=(h*E-d*R-p*y)*H,e[12]=(o*N-a*O-l*b)*H,e[13]=(n*O-i*N+r*b)*H,e[14]=(x*T-m*A-_*y)*H,e[15]=(d*A-h*T+c*y)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,h=o+o,c=s*u,p=s*d,m=s*h,x=a*d,_=a*h,g=o*h,y=l*u,T=l*d,E=l*h,A=i.x,R=i.y,w=i.z;return r[0]=(1-(x+g))*A,r[1]=(p+E)*A,r[2]=(m-T)*A,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(c+g))*R,r[6]=(_+y)*R,r[7]=0,r[8]=(m+T)*w,r[9]=(_-y)*w,r[10]=(1-(c+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),l=Fr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);const u=1/a,d=1/o,h=1/l;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,n.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const u=this.elements,d=2*s/(n-e),h=2*s/(i-r),c=(n+e)/(n-e),p=(i+r)/(i-r);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===oi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===na)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const u=this.elements,d=2/(n-e),h=2/(i-r),c=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===oi)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===na)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Lo.prototype.isMatrix4=!0;let Ht=Lo;const Fr=new Z,Yn=new Ht,d1=new Z(0,0,0),c1=new Z(1,1,1),qi=new Z,xa=new Z,Dn=new Z,vf=new Ht,yf=new sr;class ar{constructor(e=0,n=0,i=0,r=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],h=r[2],c=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const xf=new Z,Br=new sr,Ci=new Ht,ba=new Z,Rs=new Z,f1=new Z,p1=new sr,bf=new Z(1,0,0),wf=new Z(0,1,0),Sf=new Z(0,0,1),Mf={type:"added"},m1={type:"removed"},zr={type:"childadded",child:null},cl={type:"childremoved",child:null};class cn extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new Z,n=new ar,i=new sr,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new tt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(wf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,n){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(wf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Rs,ba,this.up):Ci.lookAt(ba,Rs,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Ci),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),zr.child=e,this.dispatchEvent(zr),zr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m1),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,f1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,p1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),c=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.DEFAULT_UP=new Z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wa extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const _=n.getJointPose(x,i),g=this._getHandJoint(u,x);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],c=d.position.distanceTo(h.position),p=.02,m=.005;u.inputState.pinching&&c>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function fl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=wt.workingColorSpace){return this.r=e,this.g=n,this.b=i,wt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=wt.workingColorSpace){if(e=QS(e,1),n=mt(n,0,1),i=mt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=y0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return wt.workingToColorSpace(mn.copy(this),e),Math.round(mt(mn.r*255,0,255))*65536+Math.round(mt(mn.g*255,0,255))*256+Math.round(mt(mn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(mn.copy(this),n);const i=mn.r,r=mn.g,s=mn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Gn){wt.workingToColorSpace(mn.copy(this),e);const n=mn.r,i=mn.g,r=mn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Sa);const i=al(Xi.h,Sa.h,n),r=al(Xi.s,Sa.s,n),s=al(Xi.l,Sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new pt;pt.NAMES=y0;class _1 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new Z,Ii=new Z,pl=new Z,Di=new Z,Gr=new Z,Hr=new Z,Ef=new Z,ml=new Z,gl=new Z,_l=new Z,vl=new qt,yl=new qt,xl=new qt;class si{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ii.subVectors(i,n),pl.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(Ii),l=Zn.dot(pl),u=Ii.dot(Ii),d=Ii.dot(pl),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const c=1/h,p=(u*l-o*d)*c,m=(a*d-o*l)*c;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return vl.setScalar(0),yl.setScalar(0),xl.setScalar(0),vl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vl,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(xl,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ii.subVectors(e,n),Zn.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Zn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),Hr.subVectors(s,i),ml.subVectors(e,i);const l=Gr.dot(ml),u=Hr.dot(ml);if(l<=0&&u<=0)return n.copy(i);gl.subVectors(e,r);const d=Gr.dot(gl),h=Hr.dot(gl);if(d>=0&&h<=d)return n.copy(r);const c=l*h-d*u;if(c<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),n.copy(i).addScaledVector(Gr,a);_l.subVectors(e,s);const p=Gr.dot(_l),m=Hr.dot(_l);if(m>=0&&p<=m)return n.copy(s);const x=p*u-l*m;if(x<=0&&u>=0&&m<=0)return o=u/(u-m),n.copy(i).addScaledVector(Hr,o);const _=d*m-p*h;if(_<=0&&h-d>=0&&p-m>=0)return Ef.subVectors(s,r),o=(h-d)/(h-d+(p-m)),n.copy(r).addScaledVector(Ef,o);const g=1/(_+x+c);return a=x*g,o=c*g,n.copy(i).addScaledVector(Gr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ms{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Ea.subVectors(this.max,Cs),Vr.subVectors(e.a,Cs),Wr.subVectors(e.b,Cs),qr.subVectors(e.c,Cs),Ki.subVectors(Wr,Vr),Yi.subVectors(qr,Wr),hr.subVectors(Vr,qr);let n=[0,-Ki.z,Ki.y,0,-Yi.z,Yi.y,0,-hr.z,hr.y,Ki.z,0,-Ki.x,Yi.z,0,-Yi.x,hr.z,0,-hr.x,-Ki.y,Ki.x,0,-Yi.y,Yi.x,0,-hr.y,hr.x,0];return!bl(n,Vr,Wr,qr,Ea)||(n=[1,0,0,0,1,0,0,0,1],!bl(n,Vr,Wr,qr,Ea))?!1:(Ta.crossVectors(Ki,Yi),n=[Ta.x,Ta.y,Ta.z],bl(n,Vr,Wr,qr,Ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],jn=new Z,Ma=new ms,Vr=new Z,Wr=new Z,qr=new Z,Ki=new Z,Yi=new Z,hr=new Z,Cs=new Z,Ea=new Z,Ta=new Z,fr=new Z;function bl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){fr.fromArray(t,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),u=n.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Jt=new Z,Aa=new nt;let v1=0;class ir extends ur{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=KS,this.updateRanges=[],this.gpuType=vi,this.version=0,this._normalizationScale=e!==void 0?Kd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):t1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):n1(e,this.array)}}class x0 extends ir{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b0 extends ir{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Un extends ir{constructor(e,n,i){super(new Float32Array(e),n,i)}}const y1=new ms,Is=new Z,wl=new Z;class No{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):y1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(wl)),this.expandByPoint(Is.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let x1=0;const zn=new Ht,Sl=new cn,Xr=new Z,Pn=new ms,Ds=new ms,ln=new Z;class Si extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YS(e)?b0:x0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Un(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Pn.min,Ds.min),Pn.expandByPoint(ln),ln.addVectors(Pn.max,Ds.max),Pn.expandByPoint(ln)):(Pn.expandByPoint(Ds.min),Pn.expandByPoint(Ds.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)ln.fromBufferAttribute(o,u),l&&(Xr.fromBufferAttribute(e,u),ln.add(Xr)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ir(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],u=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new Z,l[N]=new Z;const d=new Z,h=new Z,c=new Z,p=new nt,m=new nt,x=new nt,_=new Z,g=new Z;function y(N,$,O){u[N]=u[$]=u[O]=1,d.fromBufferAttribute(i,N),h.fromBufferAttribute(i,$),c.fromBufferAttribute(i,O),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,$),x.fromBufferAttribute(s,O),h.sub(d),c.sub(d),m.sub(p),x.sub(p);const B=1/(m.x*x.y-x.x*m.y);isFinite(B)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(c,-m.y).multiplyScalar(B),g.copy(c).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(B),o[N].add(_),o[$].add(_),o[O].add(_),l[N].add(g),l[$].add(g),l[O].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,$=T.length;N<$;++N){const O=T[N],B=O.start,V=O.count;for(let D=B,H=B+V;D<H;D+=3)y(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const E=new Z,A=new Z,R=new Z,w=new Z;function b(N){R.fromBufferAttribute(r,N),w.copy(R);const $=o[N];E.copy($),E.sub(R.multiplyScalar(R.dot($))).normalize(),A.crossVectors(w,$);const B=A.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,B)}for(let N=0,$=i.count;N<$;++N)u[N]&&b(N);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ir(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,u=new Z,d=new Z,h=new Z;if(e)for(let c=0,p=e.count;c<p;c+=3){const m=e.getX(c+0),x=e.getX(c+1),_=e.getX(c+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,_),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,_),o.add(d),l.add(d),u.add(d),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(c+0,d.x,d.y,d.z),i.setXYZ(c+1,d.x,d.y,d.z),i.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,h=o.normalized,c=new u.constructor(l.length*d);let p=0,m=0;for(let x=0,_=l.length;x<_;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let g=0;g<d;g++)c[m++]=u[p++]}return new ir(c,d,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,h=u.length;d<h;d++){const c=u[d],p=e(c,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,c=u.length;h<c;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let c=0,p=h.length;c<p;c++)d.push(h[c].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new Z,b1=new Z,w1=new tt;class Oi{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ml.subVectors(i,n).cross(b1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ml),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||w1.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let S1=0;class gs extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=js,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Y_,this.blendDst=Z_,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=GS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new Z,El=new Z,Ra=new Z,Ca=new Z;class Zd{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){El.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Ca.copy(this.origin).sub(El);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ra),o=Ca.dot(this.direction),l=-Ca.dot(Ra),u=Ca.lengthSq(),d=Math.abs(1-a*a);let h,c,p,m;if(d>0)if(h=a*l-o,c=a*o-l,m=s*d,h>=0)if(c>=-m)if(c<=m){const x=1/d;h*=x,c*=x,p=h*(h+a*c+2*o)+c*(a*h+c+2*l)+u}else c=s,h=Math.max(0,-(a*c+o)),p=-h*h+c*(c+2*l)+u;else c=-s,h=Math.max(0,-(a*c+o)),p=-h*h+c*(c+2*l)+u;else c<=-m?(h=Math.max(0,-(-a*s+o)),c=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+c*(c+2*l)+u):c<=m?(h=0,c=Math.min(Math.max(-s,-l),s),p=c*(c+2*l)+u):(h=Math.max(0,-(a*s+o)),c=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+c*(c+2*l)+u);else c=a>0?-s:s,h=Math.max(0,-(a*c+o)),p=-h*h+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(El).addScaledVector(Ra,c),p}intersectSphere(e,n){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),r=$i.dot($i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),d>=0?(s=(e.min.y-c.y)*d,a=(e.max.y-c.y)*d):(s=(e.max.y-c.y)*d,a=(e.min.y-c.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-c.z)*h,l=(e.max.z-c.z)*h):(o=(e.max.z-c.z)*h,l=(e.min.z-c.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,u=o.y,d=o.z,h=e.x-a.x,c=e.y-a.y,p=e.z-a.z,m=n.x-a.x,x=n.y-a.y,_=n.z-a.z,g=i.x-a.x,y=i.y-a.y,T=i.z-a.z,E=Math.abs(l),A=Math.abs(u),R=Math.abs(d);let w,b,N,$,O,B,V,D,H,Y,W,ne;if(E>=A&&E>=R?(N=l,B=h,H=m,ne=g,l>=0?(w=u,b=d,$=c,O=p,V=x,D=_,Y=y,W=T):(w=d,b=u,$=p,O=c,V=_,D=x,Y=T,W=y)):A>=R?(N=u,B=c,H=x,ne=y,u>=0?(w=d,b=l,$=p,O=h,V=_,D=m,Y=T,W=g):(w=l,b=d,$=h,O=p,V=m,D=_,Y=g,W=T)):(N=d,B=p,H=_,ne=T,d>=0?(w=l,b=u,$=h,O=c,V=m,D=x,Y=g,W=y):(w=u,b=l,$=c,O=h,V=x,D=m,Y=y,W=g)),N===0)return null;const q=w/N,ie=b/N,k=1/N,le=$-q*B,he=O-ie*B,z=V-q*H,fe=D-ie*H,_e=Y-q*ne,Ce=W-ie*ne,xe=_e*fe-Ce*z,He=le*Ce-he*_e,Lt=z*he-fe*le;if(r){if(xe<0||He<0||Lt<0)return null}else if((xe<0||He<0||Lt<0)&&(xe>0||He>0||Lt>0))return null;const We=xe+He+Lt;if(We===0)return null;const lt=k*(xe*B+He*H+Lt*ne);return(We>0?lt<0:lt>0)?null:this.at(lt/We,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class M1 extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tf=new Ht,pr=new Zd,Ia=new No,Af=new Z,Da=new Z,Pa=new Z,$a=new Z,Tl=new Z,La=new Z,Rf=new Z,Na=new Z;class or extends cn{constructor(e=new Si,n=new M1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){La.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],h=s[l];d!==0&&(Tl.fromBufferAttribute(h,e),a?La.addScaledVector(Tl,d):La.addScaledVector(Tl.sub(n),d))}n.add(La)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Ia.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Ia,Af)===null||pr.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,c=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=c.length;m<x;m++){const _=c[m],g=a[_.materialIndex],y=Math.max(_.start,p.start),T=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let E=y,A=T;E<A;E+=3){const R=o.getX(E),w=o.getX(E+1),b=o.getX(E+2);r=Ua(this,g,e,i,u,d,h,R,w,b),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let _=m,g=x;_<g;_+=3){const y=o.getX(_),T=o.getX(_+1),E=o.getX(_+2);r=Ua(this,a,e,i,u,d,h,y,T,E),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=c.length;m<x;m++){const _=c[m],g=a[_.materialIndex],y=Math.max(_.start,p.start),T=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let E=y,A=T;E<A;E+=3){const R=E,w=E+1,b=E+2;r=Ua(this,g,e,i,u,d,h,R,w,b),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=m,g=x;_<g;_+=3){const y=_,T=_+1,E=_+2;r=Ua(this,a,e,i,u,d,h,y,T,E),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function E1(t,e,n,i,r,s,a,o){let l;if(e.side===Rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ar,o),l===null)return null;Na.copy(o),Na.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Na);return u<n.near||u>n.far?null:{distance:u,point:Na.clone(),object:t}}function Ua(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Da),t.getVertexPosition(l,Pa),t.getVertexPosition(u,$a);const d=E1(t,e,n,i,Da,Pa,$a,Rf);if(d){const h=new Z;si.getBarycoord(Rf,Da,Pa,$a,h),r&&(d.uv=si.getInterpolatedAttribute(r,o,l,u,h,new nt)),s&&(d.uv1=si.getInterpolatedAttribute(s,o,l,u,h,new nt)),a&&(d.normal=si.getInterpolatedAttribute(a,o,l,u,h,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new Z,materialIndex:0};si.getNormal(Da,Pa,$a,c.normal),d.face=c,d.barycoord=h}return d}class T1 extends wn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=fn,d=fn,h,c){super(null,a,o,l,u,d,r,s,h,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mr=new No,A1=new nt(.5,.5),Oa=new Z;class ia{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],h=s[5],c=s[6],p=s[7],m=s[8],x=s[9],_=s[10],g=s[11],y=s[12],T=s[13],E=s[14],A=s[15];if(r[0].setComponents(u-a,p-d,g-m,A-y).normalize(),r[1].setComponents(u+a,p+d,g+m,A+y).normalize(),r[2].setComponents(u+o,p+h,g+x,A+T).normalize(),r[3].setComponents(u-o,p-h,g-x,A-T).normalize(),i)r[4].setComponents(l,c,_,E).normalize(),r[5].setComponents(u-l,p-c,g-_,A-E).normalize();else if(r[4].setComponents(u-l,p-c,g-_,A-E).normalize(),n===oi)r[5].setComponents(u+l,p+c,g+_,A+E).normalize();else if(n===na)r[5].setComponents(l,c,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=A1.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cf=new Ht;class jd{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Cf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new ia),i[r].setFromProjectionMatrix(Cf,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new ia),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new jd().copy(this)}}class w0 extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new Z,So=new Z,If=new Ht,Ps=new Zd,ka=new No,Al=new Z,Df=new Z;class R1 extends cn{constructor(e=new Si,n=new w0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wo.fromBufferAttribute(n,r-1),So.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wo.distanceTo(So);e.setAttribute("lineDistance",new Un(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;If.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(If);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=i.index,c=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,_=m-1;x<_;x+=u){const g=d.getX(x),y=d.getX(x+1),T=Fa(this,e,Ps,l,g,y,x);T&&n.push(T)}if(this.isLineLoop){const x=d.getX(m-1),_=d.getX(p),g=Fa(this,e,Ps,l,x,_,m-1);g&&n.push(g)}}else{const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=p,_=m-1;x<_;x+=u){const g=Fa(this,e,Ps,l,x,x+1,x);g&&n.push(g)}if(this.isLineLoop){const x=Fa(this,e,Ps,l,m-1,p,m-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fa(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(wo.fromBufferAttribute(o,r),So.fromBufferAttribute(o,s),n.distanceSqToSegment(wo,So,Al,Df)>i)return;Al.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Al);if(!(u<e.near||u>e.far))return{distance:u,point:Df.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Pf=new Z,$f=new Z;class C1 extends R1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Pf.fromBufferAttribute(n,r),$f.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pf.distanceTo($f);e.setAttribute("lineDistance",new Un(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class S0 extends wn{constructor(e=[],n=as,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ls extends wn{constructor(e,n,i=bi,r,s,a,o=fn,l=fn,u,d=rr,h=1){if(d!==rr&&d!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:h};super(c,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class M0 extends ls{constructor(e,n=bi,i=as,r,s,a=fn,o=fn,l,u=rr){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E0 extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oa extends Si{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let c=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(u,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(h,2));function m(x,_,g,y,T,E,A,R,w,b,N){const $=E/w,O=A/b,B=E/2,V=A/2,D=R/2,H=w+1,Y=b+1;let W=0,ne=0;const q=new Z;for(let ie=0;ie<Y;ie++){const k=ie*O-V;for(let le=0;le<H;le++){const he=le*$-B;q[x]=he*y,q[_]=k*T,q[g]=D,u.push(q.x,q.y,q.z),q[x]=0,q[_]=0,q[g]=R>0?1:-1,d.push(q.x,q.y,q.z),h.push(le/w),h.push(1-ie/b),W+=1}}for(let ie=0;ie<b;ie++)for(let k=0;k<w;k++){const le=c+k+H*ie,he=c+k+H*(ie+1),z=c+(k+1)+H*(ie+1),fe=c+(k+1)+H*ie;l.push(le,he,fe),l.push(he,z,fe),ne+=6}o.addGroup(p,ne,N),p+=ne,c+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Uo extends Si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,h=e/o,c=n/l,p=[],m=[],x=[],_=[];for(let g=0;g<d;g++){const y=g*c-a;for(let T=0;T<u;T++){const E=T*h-s;m.push(E,-y,0),x.push(0,0,1),_.push(T/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const T=y+u*g,E=y+u*(g+1),A=y+1+u*(g+1),R=y+1+u*g;p.push(T,E,R),p.push(E,A,R)}this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Lf(r))r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Lf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function bn(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const r in i)e[r]=i[r]}return e}function Lf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function I1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function T0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const D1={clone:us,merge:bn};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=I1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new pt().setHex(r.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ht().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class L1 extends Cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class N1 extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U1 extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O1 extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class A0 extends cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class k1 extends A0{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Rl=new Ht,Nf=new Z,Uf=new Z;class F1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Nf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nf),Uf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Uf),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===na||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ba=new Z,za=new sr,hi=new Z;class R0 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,za,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ba,za,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,za,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new Z,Of=new nt,kf=new nt;class ii extends R0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,Of,kf),n.subVectors(kf,Of)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class C0 extends R0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class B1 extends F1{constructor(){super(new C0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z1 extends A0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new B1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Kr=-90,Yr=1;class wd extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(Kr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new ii(Kr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new ii(Kr,Yr,e,n);a.layers=this.layers,this.add(a);const o=new ii(Kr,Yr,e,n);o.layers=this.layers,this.add(o);const l=new ii(Kr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new ii(Kr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,h=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,c,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class G1 extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Ff{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H1 extends C1{constructor(e=10,n=10,i=4473924,r=8947848){i=new pt(i),r=new pt(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let c=0,p=0,m=-o;c<=n;c++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const x=c===s?i:r;x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3}const d=new Si;d.setAttribute("position",new Un(l,3)),d.setAttribute("color",new Un(u,3));const h=new w0({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class V1 extends ur{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bf(t,e,n,i){const r=W1(i);switch(n){case d0:return t*e;case h0:return t*e/r.components*r.byteLength;case Wd:return t*e/r.components*r.byteLength;case Rr:return t*e*2/r.components*r.byteLength;case qd:return t*e*2/r.components*r.byteLength;case c0:return t*e*3/r.components*r.byteLength;case yi:return t*e*4/r.components*r.byteLength;case Xd:return t*e*4/r.components*r.byteLength;case oo:case lo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uo:case co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wu:case Xu:return Math.max(t,16)*Math.max(e,8)/4;case Vu:case qu:return Math.max(t,8)*Math.max(e,8)/2;case Ku:case Yu:case ju:case Ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zu:case _o:case Qu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case dd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pd:case md:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _d:case vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vo:case yd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function W1(t){switch(t){case Nn:case a0:return{byteLength:1,components:1};case ta:case o0:case wi:return{byteLength:2,components:1};case Hd:case Vd:return{byteLength:2,components:4};case bi:case Gd:case vi:return{byteLength:4,components:1};case l0:case u0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function q1(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,h=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,d);else{h.sort((p,m)=>p.start-m.start);let c=0;for(let p=1;p<h.length;p++){const m=h[c],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++c,h[c]=x)}h.length=c+1;for(let p=0,m=h.length;p<m;p++){const x=h[p];t.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aE=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:X1,alphahash_pars_fragment:K1,alphamap_fragment:Y1,alphamap_pars_fragment:Z1,alphatest_fragment:j1,alphatest_pars_fragment:J1,aomap_fragment:Q1,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:oM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:cM,color_fragment:hM,color_pars_fragment:fM,color_pars_vertex:pM,color_vertex:mM,common:gM,defaultnormal_vertex:_M,displacementmap_pars_vertex:vM,displacementmap_vertex:yM,emissivemap_fragment:xM,emissivemap_pars_fragment:bM,colorspace_fragment:wM,colorspace_pars_fragment:SM,envmap_fragment:MM,envmap_common_pars_fragment:EM,envmap_pars_fragment:TM,envmap_pars_vertex:AM,envmap_physical_pars_fragment:kM,envmap_vertex:RM,fog_vertex:CM,fog_pars_vertex:IM,fog_fragment:DM,fog_pars_fragment:PM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:LM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:UM,lights_pars_begin:OM,lights_toon_fragment:FM,lights_toon_pars_fragment:BM,lights_phong_fragment:zM,lights_phong_pars_fragment:GM,lights_physical_fragment:HM,lights_physical_pars_fragment:VM,lights_fragment_begin:WM,lights_fragment_maps:qM,lights_fragment_end:XM,lightprobes_pars_fragment:KM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:JM,map_fragment:QM,map_pars_fragment:eE,map_particle_fragment:tE,map_particle_pars_fragment:nE,metalnessmap_fragment:iE,metalnessmap_pars_fragment:rE,morphinstance_vertex:sE,morphcolor_vertex:aE,morphnormal_vertex:oE,morphtarget_pars_vertex:lE,morphtarget_vertex:uE,normal_fragment_begin:dE,normal_fragment_maps:cE,normal_pars_fragment:hE,normal_pars_vertex:fE,normal_vertex:pE,normalmap_pars_fragment:mE,clearcoat_normal_fragment_begin:gE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:vE,iridescence_pars_fragment:yE,opaque_fragment:xE,packing:bE,premultiplied_alpha_fragment:wE,project_vertex:SE,dithering_fragment:ME,dithering_pars_fragment:EE,roughnessmap_fragment:TE,roughnessmap_pars_fragment:AE,shadowmap_pars_fragment:RE,shadowmap_pars_vertex:CE,shadowmap_vertex:IE,shadowmask_pars_fragment:DE,skinbase_vertex:PE,skinning_pars_vertex:$E,skinning_vertex:LE,skinnormal_vertex:NE,specularmap_fragment:UE,specularmap_pars_fragment:OE,tonemapping_fragment:kE,tonemapping_pars_fragment:FE,transmission_fragment:BE,transmission_pars_fragment:zE,uv_pars_fragment:GE,uv_pars_vertex:HE,uv_vertex:VE,worldpos_vertex:WE,background_vert:qE,background_frag:XE,backgroundCube_vert:KE,backgroundCube_frag:YE,cube_vert:ZE,cube_frag:jE,depth_vert:JE,depth_frag:QE,distance_vert:eT,distance_frag:tT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:rT,linedashed_frag:sT,meshbasic_vert:aT,meshbasic_frag:oT,meshlambert_vert:lT,meshlambert_frag:uT,meshmatcap_vert:dT,meshmatcap_frag:cT,meshnormal_vert:hT,meshnormal_frag:fT,meshphong_vert:pT,meshphong_frag:mT,meshphysical_vert:gT,meshphysical_frag:_T,meshtoon_vert:vT,meshtoon_frag:yT,points_vert:xT,points_frag:bT,shadow_vert:wT,shadow_frag:ST,sprite_vert:MT,sprite_frag:ET},Pe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},gi={basic:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:bn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:bn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:bn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:bn([Pe.lights,Pe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};gi.physical={uniforms:bn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ga={r:0,b:0,g:0},TT=new Ht,D0=new tt;D0.set(-1,0,0,0,1,0,0,0,1);function AT(t,e,n,i,r,s){const a=new pt(0);let o=r===!0?0:1,l,u,d=null,h=0,c=null;function p(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const E=y.backgroundBlurriness>0;T=e.get(T,E)}return T}function m(y){let T=!1;const E=p(y);E===null?_(a,o):E&&E.isColor&&(_(E,1),T=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(y,T){const E=p(T);E&&E.isCubeTexture?(u===void 0&&(u=new or(new oa(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:us(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(D0),u.material.toneMapped=wt.getTransfer(E.colorSpace)!==$t,(d!==E||h!==E.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,c=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new or(new Uo(2,2),new Cr({name:"BackgroundMaterial",uniforms:us(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=wt.getTransfer(E.colorSpace)!==$t,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,c=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,T){y.getRGB(Ga,T0(t)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,T,s)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,_(a,o)},render:m,addToRenderList:x,dispose:g}}function RT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,a=!1;function o(O,B,V,D,H){let Y=!1;const W=h(O,D,V,B);s!==W&&(s=W,u(s.object)),Y=p(O,D,V,H),Y&&m(O,D,V,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(O,B,V,D),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function u(O){return t.bindVertexArray(O)}function d(O){return t.deleteVertexArray(O)}function h(O,B,V,D){const H=D.wireframe===!0;let Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);const W=O.isInstancedMesh===!0?O.id:0;let ne=Y[W];ne===void 0&&(ne={},Y[W]=ne);let q=ne[V.id];q===void 0&&(q={},ne[V.id]=q);let ie=q[H];return ie===void 0&&(ie=c(l()),q[H]=ie),ie}function c(O){const B=[],V=[],D=[];for(let H=0;H<n;H++)B[H]=0,V[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:D,object:O,attributes:{},index:null}}function p(O,B,V,D){const H=s.attributes,Y=B.attributes;let W=0;const ne=V.getAttributes();for(const q in ne)if(ne[q].location>=0){const k=H[q];let le=Y[q];if(le===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),k===void 0||k.attribute!==le||le&&k.data!==le.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function m(O,B,V,D){const H={},Y=B.attributes;let W=0;const ne=V.getAttributes();for(const q in ne)if(ne[q].location>=0){let k=Y[q];k===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const le={};le.attribute=k,k&&k.data&&(le.data=k.data),H[q]=le,W++}s.attributes=H,s.attributesNum=W,s.index=D}function x(){const O=s.newAttributes;for(let B=0,V=O.length;B<V;B++)O[B]=0}function _(O){g(O,0)}function g(O,B){const V=s.newAttributes,D=s.enabledAttributes,H=s.attributeDivisors;V[O]=1,D[O]===0&&(t.enableVertexAttribArray(O),D[O]=1),H[O]!==B&&(t.vertexAttribDivisor(O,B),H[O]=B)}function y(){const O=s.newAttributes,B=s.enabledAttributes;for(let V=0,D=B.length;V<D;V++)B[V]!==O[V]&&(t.disableVertexAttribArray(V),B[V]=0)}function T(O,B,V,D,H,Y,W){W===!0?t.vertexAttribIPointer(O,B,V,H,Y):t.vertexAttribPointer(O,B,V,D,H,Y)}function E(O,B,V,D){x();const H=D.attributes,Y=V.getAttributes(),W=B.defaultAttributeValues;for(const ne in Y){const q=Y[ne];if(q.location>=0){let ie=H[ne];if(ie===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){const k=ie.normalized,le=ie.itemSize,he=e.get(ie);if(he===void 0)continue;const z=he.buffer,fe=he.type,_e=he.bytesPerElement,Ce=fe===t.INT||fe===t.UNSIGNED_INT||ie.gpuType===Gd;if(ie.isInterleavedBufferAttribute){const xe=ie.data,He=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Lt=ie.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let We=0;We<q.locationSize;We++)g(q.location+We,xe.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let We=0;We<q.locationSize;We++)_(q.location+We);t.bindBuffer(t.ARRAY_BUFFER,z);for(let We=0;We<q.locationSize;We++)T(q.location+We,le/q.locationSize,fe,k,He*_e,(Lt+le/q.locationSize*We)*_e,Ce)}else{if(ie.isInstancedBufferAttribute){for(let xe=0;xe<q.locationSize;xe++)g(q.location+xe,ie.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<q.locationSize;xe++)_(q.location+xe);t.bindBuffer(t.ARRAY_BUFFER,z);for(let xe=0;xe<q.locationSize;xe++)T(q.location+xe,le/q.locationSize,fe,k,le*_e,le/q.locationSize*xe*_e,Ce)}}else if(W!==void 0){const k=W[ne];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(q.location,k);break;case 3:t.vertexAttrib3fv(q.location,k);break;case 4:t.vertexAttrib4fv(q.location,k);break;default:t.vertexAttrib1fv(q.location,k)}}}}y()}function A(){N();for(const O in i){const B=i[O];for(const V in B){const D=B[V];for(const H in D){const Y=D[H];for(const W in Y)d(Y[W].object),delete Y[W];delete D[H]}}delete i[O]}}function R(O){if(i[O.id]===void 0)return;const B=i[O.id];for(const V in B){const D=B[V];for(const H in D){const Y=D[H];for(const W in Y)d(Y[W].object),delete Y[W];delete D[H]}}delete i[O.id]}function w(O){for(const B in i){const V=i[B];for(const D in V){const H=V[D];if(H[O.id]===void 0)continue;const Y=H[O.id];for(const W in Y)d(Y[W].object),delete Y[W];delete H[O.id]}}}function b(O){for(const B in i){const V=i[B],D=O.isInstancedMesh===!0?O.id:0,H=V[D];if(H!==void 0){for(const Y in H){const W=H[Y];for(const ne in W)d(W[ne].object),delete W[ne];delete H[Y]}delete V[D],Object.keys(V).length===0&&delete i[B]}}}function N(){$(),a=!0,s!==r&&(s=r,u(s.object))}function $(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:$,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:_,disableUnusedAttributes:y}}function CT(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let c=0;for(let p=0;p<d;p++)c+=u[p];n.update(c,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function IT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==yi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Nn&&w!==vi&&!b&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(Ze("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=n.logarithmicDepthBuffer===!0&&h===!1;n.reversedDepthBuffer===!0&&h===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&h===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:E,maxSamples:A,samples:R}}function DT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Oi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,c){const p=h.length!==0||c||i!==0||r;return r=c,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,c){n=d(h,c,0)},this.setState=function(h,c,p){const m=h.clippingPlanes,x=h.clipIntersection,_=h.clipShadows,g=t.get(h);if(!r||m===null||m.length===0||s&&!_)s?d(null):u();else{const y=s?0:i,T=y*4;let E=g.clippingState||null;l.value=E,E=d(m,c,T,p);for(let A=0;A!==T;++A)E[A]=n[A];g.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,c,p,m){const x=h!==null?h.length:0;let _=null;if(x!==0){if(_=l.value,m!==!0||_===null){const g=p+x*4,y=c.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<g)&&(_=new Float32Array(g));for(let T=0,E=p;T!==x;++T,E+=4)a.copy(h[T]).applyMatrix4(y,o),a.normal.toArray(_,E),_[E+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}class Jd extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new S0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:rs});s.uniforms.tEquirect.value=n;const a=new or(r,s),o=n.minFilter;return n.minFilter===tr&&(n.minFilter=An),new wd(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const zf=256,PT=3,$T=20,P0=256,$0=16,LT=3,NT=new Z,UT=new pt;class Mo{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wd(1,10,null),this._boxMesh=new or(new oa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=NT}=s,l=this._renderer;this._setSize(a);const u=this._allocateTarget(),d=this._getSourceTarget(!0);n>0&&(d.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,c=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(UT));const _=new wd(i,r,d);return _.position.copy(o),_.update(l,e),l.autoClear=h,l.autoClearColor=c,l.autoClearDepth=p,l.autoClearStencil=m,e.background=x,n>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(zf,e1(e))}_fromTexture(e,n){e.mapping===as||e.mapping===ea?this._setSize(e.image.length===0?zf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Gf(e,!1,!1),i=Math.log2(e)-PT;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Gf(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===as||e.mapping===ea?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hf()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=OT(),this._integrationMaterial=kT());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/$0);for(let a=0;a<=i;a++){const o=Mo.lodToRoughness(a,i);if(a>i-LT)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(P0*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=FT());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Gf(t,e,n){return new Jd(t,{minFilter:tr,generateMipmaps:e,type:wi,colorSpace:yo,depthBuffer:n})}function la(t,e,n){return new Cr({name:t,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:n,side:Rn,blending:rs,depthTest:!1,depthWrite:!1})}function OT(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${P0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kT(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function FT(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$T}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hf(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vf(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function BT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(c,p=!1){return c==null?null:p?a(c):s(c)}function s(c){if(c&&c.isTexture){const p=c.mapping;if(p===nl||p===il)if(e.has(c)){const m=e.get(c).texture;return o(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const x=new Jd(m.height);return x.fromEquirectangularTexture(t,c),e.set(c,x),c.addEventListener("dispose",u),o(x.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){const p=c.mapping,m=p===nl||p===il,x=p===as||p===ea;if(m||x){let _=n.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return i===null&&(i=new Mo(t)),_=m?i.fromEquirectangular(c,_):i.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,n.set(c,_),_.texture;if(_!==void 0)return _.texture;{const y=c.image;return m&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Mo(t)),_=m?i.fromEquirectangular(c):i.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,n.set(c,_),c.addEventListener("dispose",d),_.texture):null}}}return c}function o(c,p){return p===nl?c.mapping=as:p===il&&(c.mapping=ea),c}function l(c){let p=0;const m=6;for(let x=0;x<m;x++)c[x]!==void 0&&p++;return p===m}function u(c){const p=c.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(c){const p=c.target;p.removeEventListener("dispose",d);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function zT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ho("WebGLRenderer: "+i+" extension not supported."),r}}}function GT(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(m=>delete r[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete r[m.id],a.unregister(m);const x=s.get(m);x&&(e.remove(x),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function u(m,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),n.memory.geometries++),x}function d(m){const x=m.attributes;for(const _ in x)e.update(x[_],t.ARRAY_BUFFER)}function h(m){const x=m.index,_=m.attributes.position;let g=0;if(_===void 0)return;const y=x!==null?x.array.length:_.array.length/3-1,T=_.count>=65535?b0:x0,E=new T(Math.ceil(y/3)*6,1),A=E.array;if(x!==null){const w=x.array;g=x.version;for(let b=0,N=0;b<y;b+=3){const $=w[b+0],O=w[b+1],B=w[b+2];A[N++]=$,A[N++]=O,A[N++]=O,A[N++]=B,A[N++]=B,A[N++]=$}}else{g=_.version;for(let w=0,b=0;w<y;w+=3){const N=w+0,$=w+1,O=w+2;A[b++]=N,A[b++]=$,A[b++]=$,A[b++]=O,A[b++]=O,A[b++]=N}}E.version=g;const R=s.get(m);R&&e.remove(R),s.set(m,E)}function c(m){const x=s.get(m);if(x){const _=m.index;_!==null&&x.version<_.version&&h(m)}else h(m);return s.get(m)}function p(){for(const m in r){const x=r[m].deref();x!==void 0&&l(x)}}return{get:u,update:d,getWireframeAttribute:c,dispose:p}}function HT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,c){t.drawElements(i,c,s,h*a),n.update(c,i,1)}function u(h,c,p){p!==0&&(t.drawElementsInstanced(i,c,s,h*a,p),n.update(c,i,p))}function d(h,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,h,0,p);let x=0;for(let _=0;_<p;_++)x+=c[_];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function VT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:At("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WT(t,e,n){const i=new WeakMap,r=new qt;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let c=i.get(o);if(c===void 0||c.count!==h){let N=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",N)};c!==void 0&&c.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let E=o.attributes.position.count*T,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*A*4*h),w=new _0(R,E,A,h);w.type=vi,w.needsUpdate=!0;const b=T*4;for(let $=0;$<h;$++){const O=_[$],B=g[$],V=y[$],D=E*A*4*$;for(let H=0;H<O.count;H++){const Y=H*b;p===!0&&(r.fromBufferAttribute(O,H),R[D+Y+0]=r.x,R[D+Y+1]=r.y,R[D+Y+2]=r.z,R[D+Y+3]=0),m===!0&&(r.fromBufferAttribute(B,H),R[D+Y+4]=r.x,R[D+Y+5]=r.y,R[D+Y+6]=r.z,R[D+Y+7]=0),x===!0&&(r.fromBufferAttribute(V,H),R[D+Y+8]=r.x,R[D+Y+9]=r.y,R[D+Y+10]=r.z,R[D+Y+11]=V.itemSize===4?r.w:1)}}c={count:h,texture:w,size:new nt(E,A)},i.set(o,c),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function qT(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,h=u.geometry,c=e.get(u,h);if(s.get(c)!==d&&(e.update(c),s.set(c,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return c}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const XT={[J_]:"LINEAR_TONE_MAPPING",[Q_]:"REINHARD_TONE_MAPPING",[e0]:"CINEON_TONE_MAPPING",[t0]:"ACES_FILMIC_TONE_MAPPING",[i0]:"AGX_TONE_MAPPING",[r0]:"NEUTRAL_TONE_MAPPING",[n0]:"CUSTOM_TONE_MAPPING"};function KT(t,e,n,i,r,s){const a=new xi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,u=null;const d=new Si;d.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Un([0,2,0,0,2,0],2));const h=new L1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new or(d,h),p=new C0(-1,1,1,-1,0,1);let m=null,x=null,_=!1,g,y=null,T=[],E=!1;this.setSize=function(A,R){a.setSize(A,R),o!==null&&o.setSize(A,R),l!==null&&l.setSize(A,R);for(let w=0;w<T.length;w++){const b=T[w];b.setSize&&b.setSize(A,R)}},this.setEffects=function(A){T=A,E=T.length>0&&T[0].isRenderPass===!0;const R=a.width,w=a.height;T.length>0&&o===null&&(o=new xi(R,w,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new xi(R,w,{type:wi,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&T.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&u===null&&(u=new ls(R,w),s===!0&&(u.format=nr,u.type=os)),a.dispose(),a.depthTexture=b?u:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<T.length;N++){const $=T[N];$.setSize&&$.setSize(R,w),b&&$.needsDepthTexture===!0&&$.setDepthTexture&&$.setDepthTexture(u)}},this.begin=function(A,R){if(_||A.toneMapping===Bi&&T.length===0)return!1;if(y=R,R!==null){const w=R.width,b=R.height;(a.width!==w||a.height!==b)&&this.setSize(w,b)}return E===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Bi,!0},this.hasRenderPass=function(){return E},this.end=function(A,R){A.toneMapping=g,_=!0;let w=a,b=o;for(let N=0;N<T.length;N++){const $=T[N];$.enabled!==!1&&($.render(A,b,w,R),$.needsSwap!==!1&&(w=b,b=b===o?l:o))}if(m!==A.outputColorSpace||x!==A.toneMapping){m=A.outputColorSpace,x=A.toneMapping,h.defines={},wt.getTransfer(m)===$t&&(h.defines.SRGB_TRANSFER="");const N=XT[x];N&&(h.defines[N]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(y),A.render(c,p),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}const L0=new wn,N0=new ls(1,1),U0=new M0(1),O0=new _0,k0=new u1,F0=new S0,Wf=[],qf=[],Xf=new Float32Array(16),Kf=new Float32Array(9),Yf=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wf[r];if(s===void 0&&(s=new Float32Array(r),Wf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function rn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Oo(t,e){let n=qf[e];n===void 0&&(n=new Int32Array(e),qf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function QT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;Yf.set(i),t.uniformMatrix2fv(this.addr,!1,Yf),sn(n,i)}}function e2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;Kf.set(i),t.uniformMatrix3fv(this.addr,!1,Kf),sn(n,i)}}function t2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;Xf.set(i),t.uniformMatrix4fv(this.addr,!1,Xf),sn(n,i)}}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function a2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function ko(t){return t.version===0&&(t.compareFunction=m0,t.needsUpdate=!0),t}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=ko(N0):s=L0,n.setTexture2D(e||s,r)}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||k0,r)}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=ko(U0):s=F0,n.setTextureCube(e||s,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||O0,r)}function p2(t){switch(t){case 5126:return YT;case 35664:return ZT;case 35665:return jT;case 35666:return JT;case 35674:return QT;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return a2;case 36294:return o2;case 36295:return l2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return f2}}function m2(t,e){t.uniform1fv(this.addr,e)}function g2(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function _2(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function v2(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function y2(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function x2(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function b2(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function w2(t,e){t.uniform1iv(this.addr,e)}function S2(t,e){t.uniform2iv(this.addr,e)}function M2(t,e){t.uniform3iv(this.addr,e)}function E2(t,e){t.uniform4iv(this.addr,e)}function T2(t,e){t.uniform1uiv(this.addr,e)}function A2(t,e){t.uniform2uiv(this.addr,e)}function R2(t,e){t.uniform3uiv(this.addr,e)}function C2(t,e){t.uniform4uiv(this.addr,e)}function I2(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=ko(N0):a=L0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function D2(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||k0,s[a])}function P2(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=ko(U0):a=F0;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function $2(t,e,n){const i=this.cache,r=e.length,s=Oo(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||O0,s[a])}function L2(t){switch(t){case 5126:return m2;case 35664:return g2;case 35665:return _2;case 35666:return v2;case 35674:return y2;case 35675:return x2;case 35676:return b2;case 5124:case 35670:return w2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return E2;case 5125:return T2;case 36294:return A2;case 36295:return R2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return $2}}class N2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p2(n.type)}}class U2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=L2(n.type)}}class O2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function Zf(t,e){t.seq.push(e),t.map[e.id]=e}function k2(t,e,n){const i=t.name,r=i.length;for(Cl.lastIndex=0;;){const s=Cl.exec(i),a=Cl.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Zf(n,u===void 0?new N2(o,t,e):new U2(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new O2(o),Zf(n,h)),n=h}}}class po{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);k2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function jf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const F2=37297;let B2=0;function z2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Jf=new tt;function G2(t){wt._getMatrix(Jf,wt.workingColorSpace,t);const e=`mat3( ${Jf.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(t)){case xo:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+z2(t.getShaderSource(e),o)}else return s}function H2(t,e){const n=G2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const V2={[J_]:"Linear",[Q_]:"Reinhard",[e0]:"Cineon",[t0]:"ACESFilmic",[i0]:"AgX",[r0]:"Neutral",[n0]:"Custom"};function W2(t,e){const n=V2[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ha=new Z;function q2(){wt.getLuminanceCoefficients(Ha);const t=Ha.x.toFixed(4),e=Ha.y.toFixed(4),n=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function K2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Y2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xs(t){return t!==""}function ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(t){return t.replace(Z2,j2)}function j2(t,e){const n=ct[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sd(n)}const J2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(t){return t.replace(J2,Q2)}function Q2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ip(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const eA={[ao]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function tA(t){return eA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nA={[ea]:"ENVMAP_MODE_REFRACTION"};function iA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rA={[j_]:"ENVMAP_BLENDING_MULTIPLY",[OS]:"ENVMAP_BLENDING_MIX",[kS]:"ENVMAP_BLENDING_ADD"};function sA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rA[t.combine]||"ENVMAP_BLENDING_NONE"}function aA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=tA(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=iA(n),h=sA(n),c=X2(n),p=K2(s),m=r.createProgram();let x,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Xs).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Xs).join(`
`),_.length>0&&(_+=`
`)):(x=[ip(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),_=[ip(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?ct.tonemapping_pars_fragment:"",n.toneMapping!==Bi?W2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),q2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Sd(a),a=ep(a,n),a=tp(a,n),o=Sd(o),o=ep(o,n),o=tp(o,n),a=np(a),o=np(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",n.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=g+x+a,T=g+_+o,E=jf(r,r.VERTEX_SHADER,y),A=jf(r,r.FRAGMENT_SHADER,T);r.attachShader(m,E),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function R($){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(m)||"",B=r.getShaderInfoLog(E)||"",V=r.getShaderInfoLog(A)||"",D=O.trim(),H=B.trim(),Y=V.trim();let W=!0,ne=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,E,A);else{const q=Qf(r,E,"vertex"),ie=Qf(r,A,"fragment");At("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+D+`
`+q+`
`+ie)}else D!==""?Ze("WebGLProgram: Program Info Log:",D):(H===""||Y==="")&&(ne=!1);ne&&($.diagnostics={runnable:W,programLog:D,vertexShader:{log:H,prefix:x},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(E),r.deleteShader(A),w=new po(r,m),b=Y2(r,m)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,F2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uA(e),n.set(e,i)),i}}class uA{constructor(e){this.id=oA++,this.code=e,this.usedTimes=0}}function dA(t){return t===Rr||t===_o||t===vo}function cA(t,e,n,i,r,s){const a=new v0,o=new lA,l=new Set,u=[],d=new Map,h=i.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,b,N,$,O,B){const V=$.fog,D=O.geometry,H=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,Y=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,W=e.get(w.envMap||H,Y),ne=c[w.type];let q=i.precision;w.precision!==null&&(q=i.getMaxPrecision(w.precision),q!==w.precision&&Ze("WebGLProgram.getParameters:",w.precision,"not supported, using",q,"instead."));const ie=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=ie!==void 0?ie.length:0;let le=0;D.morphAttributes.position!==void 0&&(le=1),D.morphAttributes.normal!==void 0&&(le=2),D.morphAttributes.color!==void 0&&(le=3);let he,z,fe,_e;if(ne){const Ie=gi[ne];he=Ie.vertexShader,z=Ie.fragmentShader}else{he=w.vertexShader,z=w.fragmentShader;const Ie=o.getVertexShaderStage(w),Tt=o.getFragmentShaderStage(w);o.update(w,Ie,Tt),fe=Ie.id,_e=Tt.id}const Ce=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),He=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,We=!!w.map,lt=!!w.matcap,et=!!W,Le=et&&W.isPMREMTexture===!0,dt=!!w.aoMap,it=!!w.lightMap,Nt=!!w.bumpMap&&w.wireframe===!1,St=!!w.normalMap,an=!!w.displacementMap,Kt=!!w.emissiveMap,Zt=!!w.metalnessMap,_n=!!w.roughnessMap,vn=w.anisotropy>0,X=w.clearcoat>0,yn=w.diffuseRoughness>0,Et=w.dispersion>0,kt=w.retroreflectivity>0,Te=w.iridescence>0,zt=w.sheen>0,Ke=w.transmission>0,Ye=vn&&!!w.anisotropyMap,L=X&&!!w.clearcoatMap,C=X&&!!w.clearcoatNormalMap,J=X&&!!w.clearcoatRoughnessMap,me=yn&&!!w.diffuseRoughnessMap,ce=Te&&!!w.iridescenceMap,Se=Te&&!!w.iridescenceThicknessMap,Ae=zt&&!!w.sheenColorMap,oe=zt&&!!w.sheenRoughnessMap,ue=!!w.specularMap,Me=!!w.specularColorMap,F=!!w.specularIntensityMap,de=Ke&&!!w.transmissionMap,re=Ke&&!!w.thicknessMap,Ee=!!w.gradientMap,ve=!!w.alphaMap,we=w.alphaTest>0,Ve=!!w.alphaHash,ze=!!w.extensions;let ge=Bi;w.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(ge=t.toneMapping);const qe=Le?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,rt={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:he,fragmentShader:z,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:q,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:He,instancingColor:He&&O.instanceColor!==null,instancingMorph:He&&O.morphTexture!==null,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:lt,envMap:et,envMapMode:et&&W.mapping,envMapPMREM:Le,envMapMaxLod:Le?qe.length-1:null,envMapSize:Le?qe[0].width:null,aoMap:dt,lightMap:it,bumpMap:Nt,normalMap:St,displacementMap:an,emissiveMap:Kt,normalMapObjectSpace:St&&w.normalMapType===zS,normalMapTangentSpace:St&&w.normalMapType===xd,packedNormalMap:St&&w.normalMapType===xd&&dA(w.normalMap.format),metalnessMap:Zt,roughnessMap:_n,anisotropy:vn,anisotropyMap:Ye,clearcoat:X,clearcoatMap:L,clearcoatNormalMap:C,clearcoatRoughnessMap:J,diffuseRoughness:yn,diffuseRoughnessMap:me,dispersion:Et,retroreflection:kt,iridescence:Te,iridescenceMap:ce,iridescenceThicknessMap:Se,sheen:zt,sheenColorMap:Ae,sheenRoughnessMap:oe,specularMap:ue,specularColorMap:Me,specularIntensityMap:F,transmission:Ke,transmissionMap:de,thicknessMap:re,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===js&&w.alphaToCoverage===!1,alphaMap:ve,alphaTest:we,alphaHash:Ve,combine:w.combine,mapUv:We&&p(w.map.channel),aoMapUv:dt&&p(w.aoMap.channel),lightMapUv:it&&p(w.lightMap.channel),bumpMapUv:Nt&&p(w.bumpMap.channel),normalMapUv:St&&p(w.normalMap.channel),displacementMapUv:an&&p(w.displacementMap.channel),emissiveMapUv:Kt&&p(w.emissiveMap.channel),metalnessMapUv:Zt&&p(w.metalnessMap.channel),roughnessMapUv:_n&&p(w.roughnessMap.channel),anisotropyMapUv:Ye&&p(w.anisotropyMap.channel),clearcoatMapUv:L&&p(w.clearcoatMap.channel),clearcoatNormalMapUv:C&&p(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&p(w.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&p(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&p(w.sheenColorMap.channel),sheenRoughnessMapUv:oe&&p(w.sheenRoughnessMap.channel),specularMapUv:ue&&p(w.specularMap.channel),specularColorMapUv:Me&&p(w.specularColorMap.channel),specularIntensityMapUv:F&&p(w.specularIntensityMap.channel),transmissionMapUv:de&&p(w.transmissionMap.channel),thicknessMapUv:re&&p(w.thicknessMap.channel),alphaMapUv:ve&&p(w.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(St||vn),vertexNormals:!!D.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(We||ve),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||D.attributes.normal===void 0&&St===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===$t,decodeVideoTextureEmissive:Kt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===$t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_i,flipSided:w.side===Rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function x(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)b.push(N),b.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(_(b,w),g(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapPMREM),w.push(b.envMapMaxLod),w.push(b.envMapSize),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.diffuseRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.numSunLights),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numSunLightShadows),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.numLightProbeGrids),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function g(w,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),w.push(a.mask)}function y(w){const b=c[w.type];let N;if(b){const $=gi[b];N=D1.clone($.uniforms)}else N=w.uniforms;return N}function T(w,b){let N=d.get(b);return N!==void 0?++N.usedTimes:(N=new aA(t,b,w,r),u.push(N),d.set(b,N)),N}function E(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),d.delete(w.cacheKey),w.destroy()}}function A(w){o.remove(w)}function R(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:R}}function hA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function rp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,m,x,_,g){let y=t[e];return y===void 0?(y={id:c.id,object:c,geometry:p,material:m,materialVariant:a(c),groupOrder:x,renderOrder:c.renderOrder,z:_,group:g},t[e]=y):(y.id=c.id,y.object=c,y.geometry=p,y.material=m,y.materialVariant=a(c),y.groupOrder=x,y.renderOrder=c.renderOrder,y.z=_,y.group=g),e++,y}function l(c,p,m,x,_,g,y){y.reversedDepth===!0&&(_=-_);const T=o(c,p,m,x,_,g);m.transmission>0?i.push(T):m.transparent===!0?r.push(T):n.push(T)}function u(c,p,m,x,_,g){const y=o(c,p,m,x,_,g);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):n.unshift(y)}function d(c,p){n.length>1&&n.sort(c||fA),i.length>1&&i.sort(p||rp),r.length>1&&r.sort(p||rp)}function h(){for(let c=e,p=t.length;c<p;c++){const m=t[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:d}}function pA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new sp,t.set(i,[a])):r>=s.length?(a=new sp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function mA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Z,color:new pt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _A=0;function vA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yA(t){const e=new mA,n=gA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Z);const r=new Z,s=new Ht,a=new Ht;function o(u){let d=0,h=0,c=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,m=0,x=0,_=0,g=0,y=0,T=0,E=0,A=0,R=0,w=0,b=0,N=0,$=0;u.sort(vA);for(let B=0,V=u.length;B<V;B++){const D=u[B],H=D.color,Y=D.intensity,W=D.distance;let ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Rr?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=H.r*Y,h+=H.g*Y,c+=H.b*Y;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],Y);$++}else if(D.isSunLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,k=n.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[m]=k,i.sunShadowMap[m]=ne;const le=ie.getViewportCount();for(let he=0;he<le;he++)i.sunShadowMatrix[x+he]=ie.getMatrix(he),i.sunShadowCascade[x+he]=ie._cascadeData[he];x+=le,m++}i.sun[p]=q,p++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,k=n.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.directionalShadow[_]=k,i.directionalShadowMap[_]=ne,i.directionalShadowMatrix[_]=D.shadow.matrix,A++}i.directional[_]=q,_++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(H).multiplyScalar(Y),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[y]=q;const ie=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,ie.updateMatrices(D),D.castShadow&&N++),i.spotLightMatrix[y]=ie.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=ne,w++}y++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(H).multiplyScalar(Y),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=q,T++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const ie=D.shadow,k=n.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=D.shadow.matrix,R++}i.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(Y),q.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[E]=q,E++}}T>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=c;const O=i.hash;(O.sunLength!==p||O.directionalLength!==_||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==T||O.hemiLength!==E||O.numSunShadows!==m||O.numDirectionalShadows!==A||O.numPointShadows!==R||O.numSpotShadows!==w||O.numSpotMaps!==b||O.numLightProbes!==$)&&(i.sun.length=p,i.directional.length=_,i.spot.length=y,i.rectArea.length=T,i.point.length=g,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=$,O.sunLength=p,O.directionalLength=_,O.pointLength=g,O.spotLength=y,O.rectAreaLength=T,O.hemiLength=E,O.numSunShadows=m,O.numDirectionalShadows=A,O.numPointShadows=R,O.numSpotShadows=w,O.numSpotMaps=b,O.numLightProbes=$,i.version=_A++)}function l(u,d){let h=0,c=0,p=0,m=0,x=0,_=0;const g=d.matrixWorldInverse;for(let y=0,T=u.length;y<T;y++){const E=u[y];if(E.isSunLight){const A=i.sun[h];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(g),h++}else if(E.isDirectionalLight){const A=i.directional[c];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),c++}else if(E.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),m++}else if(E.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),p++}else if(E.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function ap(t){const e=new yA(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):n.push(h)}function o(h){i.push(h)}function l(){e.setup(n),r.sort((h,c)=>h.priority-c.priority||h.id-c.id)}function u(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function xA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ap(t),e.set(r,[o])):s>=a.length?(o=new ap(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],MA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],op=new Ht,$s=new Z,Il=new Z;function EA(t,e,n){let i=new ia;const r=new nt,s=new nt,a=new qt,o=new U1,l=new O1,u={},d=n.maxTextureSize,h={[Ar]:Rn,[Rn]:Ar,[_i]:_i},c=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:bA,fragmentShader:wA}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const m=new Si;m.setAttribute("position",new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new or(m,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let g=this.type;this.render=function(R,w,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===vS&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);const N=t.getRenderTarget(),$=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),B=t.state;B.setBlending(rs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=g!==this.type;V&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=R.length;D<H;D++){const Y=R[D],W=Y.shadow;if(W===void 0){Ze("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ne=W.getFrameExtents();r.multiply(ne),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ne.x),r.x=s.x*ne.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ne.y),r.y=s.y*ne.y,W.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qs){if(Y.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new xi(r.x,r.y,{format:Rr,type:wi,minFilter:An,magFilter:An,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new ls(r.x,r.y,vi),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=rr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn}else Y.isPointLight?(W.map=new Jd(r.x),W.map.depthTexture=new M0(r.x,bi)):(W.map=new xi(r.x,r.y),W.map.depthTexture=new ls(r.x,r.y,bi)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=rr,this.type===ao?(W.map.depthTexture.compareFunction=q?p0:f0,W.map.depthTexture.minFilter=An,W.map.depthTexture.magFilter=An):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const ie=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,b);const k=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let le=0;le<ie;le++){const he=W.getCamera(le);if(Y.isPointLight){const z=W.camera,fe=W.matrix,_e=Y.distance||z.far;_e!==z.far&&(z.far=_e,z.updateProjectionMatrix()),$s.setFromMatrixPosition(Y.matrixWorld),z.position.copy($s),Il.copy(z.position),Il.add(SA[le]),z.up.copy(MA[le]),z.lookAt(Il),z.updateMatrixWorld(),fe.makeTranslation(-$s.x,-$s.y,-$s.z),op.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(op,z.coordinateSystem,z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,le),t.clear();else{le===0&&(t.setRenderTarget(W.map),t.clear());const z=W.getViewport(le);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),B.viewport(a)}i=W.getFrustum(le),E(w,b,he,Y,k,this.type)}W.isPointLightShadow!==!0&&this.type===qs&&y(W,b),W.needsUpdate=!1}g=this.type,_.needsUpdate=!1,t.setRenderTarget(N,$,O)};function y(R,w){const b=e.update(x);c.defines.VSM_SAMPLES!==R.blurSamples&&(c.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new xi(r.x,r.y,{format:Rr,type:wi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),c.uniforms.shadow_pass.value=R.map.depthTexture,c.uniforms.resolution.value.set(R.map.width,R.map.height),c.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,b,c,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,b,p,x,null)}function T(R,w,b,N){let $=null;const O=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)$=O;else if($=b.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=$.uuid,V=w.uuid;let D=u[B];D===void 0&&(D={},u[B]=D);let H=D[V];H===void 0&&(H=$.clone(),D[V]=H,w.addEventListener("dispose",A)),$=H}if($.visible=w.visible,$.wireframe=w.wireframe,N===qs?$.side=w.shadowSide!==null?w.shadowSide:w.side:$.side=w.shadowSide!==null?w.shadowSide:h[w.side],$.alphaMap=w.alphaMap,$.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,$.map=w.map,$.clipShadows=w.clipShadows,$.clippingPlanes=w.clippingPlanes,$.clipIntersection=w.clipIntersection,$.displacementMap=w.displacementMap,$.displacementScale=w.displacementScale,$.displacementBias=w.displacementBias,$.wireframeLinewidth=w.wireframeLinewidth,$.linewidth=w.linewidth,b.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const B=t.properties.get($);B.light=b}return $}function E(R,w,b,N,$,O){if(R.visible===!1)return;if(R.layers.test($)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===qs)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const D=e.update(R),H=R.material;if(Array.isArray(H)){const Y=D.groups;for(let W=0,ne=Y.length;W<ne;W++){const q=Y[W],ie=H[q.materialIndex];if(ie&&ie.visible){const k=T(R,ie,N,O);R.onBeforeShadow(t,R,w,b,D,k,q),t.renderBufferDirect(b,null,D,k,R,q),R.onAfterShadow(t,R,w,b,D,k,q)}}}else if(H.visible){const Y=T(R,H,N,O);R.onBeforeShadow(t,R,w,b,D,Y,null),t.renderBufferDirect(b,null,D,Y,R,null),R.onAfterShadow(t,R,w,b,D,Y,null)}}const V=R.children;for(let D=0,H=V.length;D<H;D++)E(V[D],w,b,N,$,O)}function A(R){R.target.removeEventListener("dispose",A);for(const b in u){const N=u[b],$=R.target.uuid;$ in N&&(N[$].dispose(),delete N[$])}}}function TA(t,e){function n(){let F=!1;const de=new qt;let re=null;const Ee=new qt(0,0,0,0);return{setMask:function(ve){re!==ve&&!F&&(t.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){F=ve},setClear:function(ve,we,Ve,ze,ge){ge===!0&&(ve*=ze,we*=ze,Ve*=ze),de.set(ve,we,Ve,ze),Ee.equals(de)===!1&&(t.clearColor(ve,we,Ve,ze),Ee.copy(de))},reset:function(){F=!1,re=null,Ee.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,re=null,Ee=null,ve=null;return{setReversed:function(we){if(de!==we){const Ve=e.get("EXT_clip_control");we?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),de=we;const ze=ve;ve=null,this.setClear(ze)}},getReversed:function(){return de},setTest:function(we){we?xe(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(we){re!==we&&!F&&(t.depthMask(we),re=we)},setFunc:function(we){if(de&&(we=JS[we]),Ee!==we){switch(we){case Nu:t.depthFunc(t.NEVER);break;case Uu:t.depthFunc(t.ALWAYS);break;case Ou:t.depthFunc(t.LESS);break;case Qs:t.depthFunc(t.LEQUAL);break;case ku:t.depthFunc(t.EQUAL);break;case Fu:t.depthFunc(t.GEQUAL);break;case Bu:t.depthFunc(t.GREATER);break;case zu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=we}},setLocked:function(we){F=we},setClear:function(we){ve!==we&&(ve=we,de&&(we=1-we),t.clearDepth(we))},reset:function(){F=!1,re=null,Ee=null,ve=null,de=!1}}}function r(){let F=!1,de=null,re=null,Ee=null,ve=null,we=null,Ve=null,ze=null,ge=null;return{setTest:function(qe){F||(qe?xe(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(qe){de!==qe&&!F&&(t.stencilMask(qe),de=qe)},setFunc:function(qe,rt,Ie){(re!==qe||Ee!==rt||ve!==Ie)&&(t.stencilFunc(qe,rt,Ie),re=qe,Ee=rt,ve=Ie)},setOp:function(qe,rt,Ie){(we!==qe||Ve!==rt||ze!==Ie)&&(t.stencilOp(qe,rt,Ie),we=qe,Ve=rt,ze=Ie)},setLocked:function(qe){F=qe},setClear:function(qe){ge!==qe&&(t.clearStencil(qe),ge=qe)},reset:function(){F=!1,de=null,re=null,Ee=null,ve=null,we=null,Ve=null,ze=null,ge=null}}}const s=new n,a=new i,o=new r;let l={};const u=new WeakMap;let d={},h={},c={},p=new WeakMap,m=[],x=null,_=!1,g=null,y=null,T=null,E=null,A=null,R=null,w=null,b=new pt(0,0,0),N=0,$=!1,O=null,B=null,V=null,D=null,H=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ne>=2);let ie=null,k={};const le=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),z=new qt().fromArray(le),fe=new qt().fromArray(he);function _e(F,de,re,Ee){const ve=new Uint8Array(4),we=t.createTexture();t.bindTexture(F,we),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<re;Ve++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(de+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return we}const Ce={};Ce[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Ce[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ce[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),a.setFunc(Qs),Nt(!1),St(lf),xe(t.CULL_FACE),dt(rs);function xe(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function He(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Lt(F,de){return c[F]!==de?(t.bindFramebuffer(F,de),c[F]=de,F===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=de),F===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=de),!0):!1}function We(F,de){let re=m,Ee=!1;if(F){re=p.get(de),re===void 0&&(re=[],p.set(de,re));const ve=F.textures;if(re.length!==ve.length||re[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ve=ve.length;we<Ve;we++)re[we]=t.COLOR_ATTACHMENT0+we;re.length=ve.length,Ee=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(re)}function lt(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const et={[Jr]:t.FUNC_ADD,[xS]:t.FUNC_SUBTRACT,[bS]:t.FUNC_REVERSE_SUBTRACT};et[wS]=t.MIN,et[SS]=t.MAX;const Le={[MS]:t.ZERO,[ES]:t.ONE,[TS]:t.SRC_COLOR,[Y_]:t.SRC_ALPHA,[PS]:t.SRC_ALPHA_SATURATE,[IS]:t.DST_COLOR,[RS]:t.DST_ALPHA,[AS]:t.ONE_MINUS_SRC_COLOR,[Z_]:t.ONE_MINUS_SRC_ALPHA,[DS]:t.ONE_MINUS_DST_COLOR,[CS]:t.ONE_MINUS_DST_ALPHA,[$S]:t.CONSTANT_COLOR,[LS]:t.ONE_MINUS_CONSTANT_COLOR,[NS]:t.CONSTANT_ALPHA,[US]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(F,de,re,Ee,ve,we,Ve,ze,ge,qe){if(F===rs){_===!0&&(He(t.BLEND),_=!1);return}if(_===!1&&(xe(t.BLEND),_=!0),F!==yS){if(F!==g||qe!==$){if((y!==Jr||A!==Jr)&&(t.blendEquation(t.FUNC_ADD),y=Jr,A=Jr),qe)switch(F){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uf:t.blendFunc(t.ONE,t.ONE);break;case df:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:At("WebGLState: Invalid blending: ",F);break}else switch(F){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case df:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cf:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",F);break}T=null,E=null,R=null,w=null,b.set(0,0,0),N=0,g=F,$=qe}return}ve=ve||de,we=we||re,Ve=Ve||Ee,(de!==y||ve!==A)&&(t.blendEquationSeparate(et[de],et[ve]),y=de,A=ve),(re!==T||Ee!==E||we!==R||Ve!==w)&&(t.blendFuncSeparate(Le[re],Le[Ee],Le[we],Le[Ve]),T=re,E=Ee,R=we,w=Ve),(ze.equals(b)===!1||ge!==N)&&(t.blendColor(ze.r,ze.g,ze.b,ge),b.copy(ze),N=ge),g=F,$=!1}function it(F,de){F.side===_i?He(t.CULL_FACE):xe(t.CULL_FACE);let re=F.side===Rn;de&&(re=!re),Nt(re),F.blending===js&&F.transparent===!1?dt(rs):dt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ee=F.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(F){O!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),O=F)}function St(F){F!==gS?(xe(t.CULL_FACE),F!==B&&(F===lf?t.cullFace(t.BACK):F===_S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),B=F}function an(F){F!==V&&(W&&t.lineWidth(F),V=F)}function Kt(F,de,re){F?(xe(t.POLYGON_OFFSET_FILL),(D!==de||H!==re)&&(D=de,H=re,a.getReversed()&&(de=-de,re=-re),t.polygonOffset(de,re))):He(t.POLYGON_OFFSET_FILL)}function Zt(F){F?xe(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function _n(F){F===void 0&&(F=t.TEXTURE0+Y-1),ie!==F&&(t.activeTexture(F),ie=F)}function vn(F,de,re){re===void 0&&(ie===null?re=t.TEXTURE0+Y-1:re=ie);let Ee=k[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},k[re]=Ee),(Ee.type!==F||Ee.texture!==de)&&(ie!==re&&(t.activeTexture(re),ie=re),t.bindTexture(F,de||Ce[F]),Ee.type=F,Ee.texture=de)}function X(){const F=k[ie];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function yn(){try{t.compressedTexImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function Et(){try{t.compressedTexImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function kt(){try{t.texSubImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function Te(){try{t.texSubImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function zt(){try{t.compressedTexSubImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function Ke(){try{t.compressedTexSubImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function Ye(){try{t.texStorage2D(...arguments)}catch(F){At("WebGLState:",F)}}function L(){try{t.texStorage3D(...arguments)}catch(F){At("WebGLState:",F)}}function C(){try{t.texImage2D(...arguments)}catch(F){At("WebGLState:",F)}}function J(){try{t.texImage3D(...arguments)}catch(F){At("WebGLState:",F)}}function me(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function ce(F,de){h[F]!==de&&(t.pixelStorei(F,de),h[F]=de)}function Se(F){z.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),z.copy(F))}function Ae(F){fe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function oe(F,de){let re=u.get(de);re===void 0&&(re=new WeakMap,u.set(de,re));let Ee=re.get(F);Ee===void 0&&(Ee=t.getUniformBlockIndex(de,F.name),t.uniformBlockBinding(de,Ee,Ee),re.set(F,Ee))}function ue(F,de,re){const ve=u.get(de).get(F);l[ve]!==re&&(t.bindBufferBase(t.UNIFORM_BUFFER,ve,re),l[ve]=re)}function Me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},ie=null,k={},c={},l={},p=new WeakMap,m=[],x=null,_=!1,g=null,y=null,T=null,E=null,A=null,R=null,w=null,b=new pt(0,0,0),N=0,$=!1,O=null,B=null,V=null,D=null,H=null,z.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xe,disable:He,bindFramebuffer:Lt,drawBuffers:We,useProgram:lt,setBlending:dt,setMaterial:it,setFlipSided:Nt,setCullFace:St,setLineWidth:an,setPolygonOffset:Kt,setScissorTest:Zt,activeTexture:_n,bindTexture:vn,unbindTexture:X,compressedTexImage2D:yn,compressedTexImage3D:Et,texImage2D:C,texImage3D:J,pixelStorei:ce,getParameter:me,updateUBOMapping:oe,uniformBlockBinding:ue,texStorage2D:Ye,texStorage3D:L,texSubImage2D:kt,texSubImage3D:Te,compressedTexSubImage2D:zt,compressedTexSubImage3D:Ke,scissor:Se,viewport:Ae,reset:Me}}function AA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,d=new WeakMap,h=new Set;let c;const p=new WeakMap,m=new Set,x=new FinalizationRegistry(L=>m.delete(L));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return _?new OffscreenCanvas(L,C):bo("canvas")}function y(L,C,J){let me=1;const ce=Ye(L);if((ce.width>J||ce.height>J)&&(me=J/Math.max(ce.width,ce.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Se=Math.floor(me*ce.width),Ae=Math.floor(me*ce.height);c===void 0&&(c=g(Se,Ae));const oe=C?g(Se,Ae):c;return oe.width=Se,oe.height=Ae,oe.getContext("2d").drawImage(L,0,0,Se,Ae),Ze("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Se+"x"+Ae+")."),oe}else return"data"in L&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function T(L){return L.generateMipmaps}function E(L){t.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function R(L,C,J,me,ce,Se=!1){if(L!==null){if(t[L]!==void 0)return t[L];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ae;me&&(Ae=e.get("EXT_texture_norm16"),Ae||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=C;if(C===t.RED&&(J===t.FLOAT&&(oe=t.R32F),J===t.HALF_FLOAT&&(oe=t.R16F),J===t.UNSIGNED_BYTE&&(oe=t.R8),J===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.R16_EXT),J===t.SHORT&&Ae&&(oe=Ae.R16_SNORM_EXT)),C===t.RED_INTEGER&&(J===t.UNSIGNED_BYTE&&(oe=t.R8UI),J===t.UNSIGNED_SHORT&&(oe=t.R16UI),J===t.UNSIGNED_INT&&(oe=t.R32UI),J===t.BYTE&&(oe=t.R8I),J===t.SHORT&&(oe=t.R16I),J===t.INT&&(oe=t.R32I)),C===t.RG&&(J===t.FLOAT&&(oe=t.RG32F),J===t.HALF_FLOAT&&(oe=t.RG16F),J===t.UNSIGNED_BYTE&&(oe=t.RG8),J===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.RG16_EXT),J===t.SHORT&&Ae&&(oe=Ae.RG16_SNORM_EXT)),C===t.RG_INTEGER&&(J===t.UNSIGNED_BYTE&&(oe=t.RG8UI),J===t.UNSIGNED_SHORT&&(oe=t.RG16UI),J===t.UNSIGNED_INT&&(oe=t.RG32UI),J===t.BYTE&&(oe=t.RG8I),J===t.SHORT&&(oe=t.RG16I),J===t.INT&&(oe=t.RG32I)),C===t.RGB_INTEGER&&(J===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),J===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),J===t.UNSIGNED_INT&&(oe=t.RGB32UI),J===t.BYTE&&(oe=t.RGB8I),J===t.SHORT&&(oe=t.RGB16I),J===t.INT&&(oe=t.RGB32I)),C===t.RGBA_INTEGER&&(J===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),J===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),J===t.UNSIGNED_INT&&(oe=t.RGBA32UI),J===t.BYTE&&(oe=t.RGBA8I),J===t.SHORT&&(oe=t.RGBA16I),J===t.INT&&(oe=t.RGBA32I)),C===t.RGB&&(J===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.RGB16_EXT),J===t.SHORT&&Ae&&(oe=Ae.RGB16_SNORM_EXT),J===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),J===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),C===t.RGBA){const ue=Se?xo:wt.getTransfer(ce);J===t.FLOAT&&(oe=t.RGBA32F),J===t.HALF_FLOAT&&(oe=t.RGBA16F),J===t.UNSIGNED_BYTE&&(oe=ue===$t?t.SRGB8_ALPHA8:t.RGBA8),J===t.UNSIGNED_SHORT&&Ae&&(oe=Ae.RGBA16_EXT),J===t.SHORT&&Ae&&(oe=Ae.RGBA16_SNORM_EXT),J===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),J===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(L,C){let J;return L?C===null||C===bi||C===os?J=t.DEPTH24_STENCIL8:C===vi?J=t.DEPTH32F_STENCIL8:C===ta&&(J=t.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===bi||C===os?J=t.DEPTH_COMPONENT24:C===vi?J=t.DEPTH_COMPONENT32F:C===ta&&(J=t.DEPTH_COMPONENT16),J}function b(L,C){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==An?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function N(L){const C=new WeakRef(L);i.get(L).__ref=C,m.add(C),x.register(L,C,C)}function $(L){const C=i.get(L).__ref;C!==void 0&&(m.delete(C),x.unregister(C))}function O(L){V(L.target)}function B(L){D(L.target)}function V(L){L.removeEventListener("dispose",O),$(L),Y(L),L.isVideoTexture&&d.delete(L),L.isHTMLTexture&&h.delete(L)}function D(L){L.removeEventListener("dispose",B),$(L),ne(L)}function H(){for(const L of m){const C=L.deref();C!==void 0&&(C.isRenderTarget===!0?D(C):V(C))}m.clear(),h.clear()}function Y(L){const C=i.get(L);if(C.__webglInit===void 0)return;const J=L.source,me=p.get(J);if(me){const ce=me[C.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&W(L),Object.keys(me).length===0&&p.delete(J)}i.remove(L)}function W(L){const C=i.get(L);t.deleteTexture(C.__webglTexture);const J=L.source,me=p.get(J);delete me[C.__cacheKey],a.memory.textures--}function ne(L){const C=i.get(L);C.__depthDisposeCallback&&C.__depthDisposeCallback();const J=L.depthTexture;if(J&&J.renderTarget===L&&V(J),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(C.__webglFramebuffer[ce]))for(let Se=0;Se<C.__webglFramebuffer[ce].length;Se++)t.deleteFramebuffer(C.__webglFramebuffer[ce][Se]);else t.deleteFramebuffer(C.__webglFramebuffer[ce]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[ce])}else{if(Array.isArray(C.__webglFramebuffer))for(let ce=0;ce<C.__webglFramebuffer.length;ce++)t.deleteFramebuffer(C.__webglFramebuffer[ce]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ce=0;ce<C.__webglColorRenderbuffer.length;ce++)C.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[ce]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const me=L.textures;for(let ce=0,Se=me.length;ce<Se;ce++){const Ae=i.get(me[ce]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(me[ce])}i.remove(L)}let q=0;function ie(){q=0}function k(){return q}function le(L){q=L}function he(){const L=q;return L>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),q+=1,L}function z(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.mipmapsAutoUpdate),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function fe(L,C){const J=i.get(L);if(L.isVideoTexture&&zt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const me=L.image;if(me===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{it(J,L,C);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,J.__webglTexture,t.TEXTURE0+C)}function _e(L,C){const J=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){it(J,L,C);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,J.__webglTexture,t.TEXTURE0+C)}function Ce(L,C){const J=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){it(J,L,C);return}n.bindTexture(t.TEXTURE_3D,J.__webglTexture,t.TEXTURE0+C)}function xe(L,C){const J=i.get(L);if(L.version>0&&J.__version!==L.version){Nt(J,L,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture,t.TEXTURE0+C)}const He={[Gu]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Hu]:t.MIRRORED_REPEAT},Lt={[fn]:t.NEAREST,[FS]:t.NEAREST_MIPMAP_NEAREST,[ya]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[rl]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},We={[HS]:t.NEVER,[m0]:t.ALWAYS,[VS]:t.LESS,[f0]:t.LEQUAL,[WS]:t.EQUAL,[p0]:t.GEQUAL,[qS]:t.GREATER,[XS]:t.NOTEQUAL};function lt(L,C){if(C.type===vi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===An||C.magFilter===rl||C.magFilter===ya||C.magFilter===tr||C.minFilter===An||C.minFilter===rl||C.minFilter===ya||C.minFilter===tr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,He[C.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,He[C.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,He[C.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Lt[C.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Lt[C.minFilter]),C.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,We[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===fn||C.minFilter!==ya&&C.minFilter!==tr||C.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function et(L,C){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",O),N(C));const me=C.source;let ce=p.get(me);ce===void 0&&(ce={},p.set(me,ce));const Se=z(C);if(Se!==L.__cacheKey){ce[Se]===void 0&&(ce[Se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ce[Se].usedTimes++;const Ae=ce[L.__cacheKey];Ae!==void 0&&(ce[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&W(C)),L.__cacheKey=Se,L.__webglTexture=ce[Se].texture}return J}function Le(L,C,J){return Math.floor(Math.floor(L/J)/C)}function dt(L,C,J,me){const Se=L.updateRanges;if(Se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,C.width,C.height,J,me,C.data);else{Se.sort((F,de)=>F.start-de.start);let Ae=0;for(let F=1;F<Se.length;F++){const de=Se[Ae],re=Se[F],Ee=de.start+de.count,ve=Le(re.start,C.width,4),we=Le(de.start,C.width,4);re.start<=Ee+1&&ve===we&&Le(re.start+re.count-1,C.width,4)===ve?de.count=Math.max(de.count,re.start+re.count-de.start):(++Ae,Se[Ae]=re)}Se.length=Ae+1;const oe=n.getParameter(t.UNPACK_ROW_LENGTH),ue=n.getParameter(t.UNPACK_SKIP_PIXELS),Me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,C.width);for(let F=0,de=Se.length;F<de;F++){const re=Se[F],Ee=Math.floor(re.start/4),ve=Math.ceil(re.count/4),we=Ee%C.width,Ve=Math.floor(Ee/C.width),ze=ve,ge=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,we),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ve),n.texSubImage2D(t.TEXTURE_2D,0,we,Ve,ze,ge,J,me,C.data)}L.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,oe),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function it(L,C,J){let me=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=t.TEXTURE_3D);const ce=et(L,C),Se=C.source;n.bindTexture(me,L.__webglTexture,t.TEXTURE0+J);const Ae=i.get(Se);if(Se.version!==Ae.__version||ce===!0){if(n.activeTexture(t.TEXTURE0+J),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const ge=wt.getPrimaries(wt.workingColorSpace),qe=C.colorSpace===er?null:wt.getPrimaries(C.colorSpace),rt=C.colorSpace===er||ge===qe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}n.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment);let ue=y(C.image,!1,r.maxTextureSize);ue=Ke(C,ue);const Me=s.convert(C.format,C.colorSpace),F=s.convert(C.type);let de=R(C.internalFormat,Me,F,C.normalized,C.colorSpace,C.isVideoTexture);lt(me,C);let re;const Ee=C.mipmaps,ve=C.isVideoTexture!==!0,we=Ae.__version===void 0||ce===!0,Ve=Se.dataReady,ze=b(C,ue);if(C.isDepthTexture)de=w(C.format===nr,C.type),we&&(ve?n.texStorage2D(t.TEXTURE_2D,1,de,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,de,ue.width,ue.height,0,Me,F,null));else if(C.isDataTexture)if(Ee.length>0){ve&&we&&n.texStorage2D(t.TEXTURE_2D,ze,de,Ee[0].width,Ee[0].height);for(let ge=0,qe=Ee.length;ge<qe;ge++)re=Ee[ge],ve?Ve&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,re.width,re.height,Me,F,re.data):n.texImage2D(t.TEXTURE_2D,ge,de,re.width,re.height,0,Me,F,re.data);C.generateMipmaps=!1}else ve?(we&&n.texStorage2D(t.TEXTURE_2D,ze,de,ue.width,ue.height),Ve&&dt(C,ue,Me,F)):n.texImage2D(t.TEXTURE_2D,0,de,ue.width,ue.height,0,Me,F,ue.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ve&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,de,Ee[0].width,Ee[0].height,ue.depth);for(let ge=0,qe=Ee.length;ge<qe;ge++)if(re=Ee[ge],C.format!==yi)if(Me!==null)if(ve){if(Ve)if(C.layerUpdates.size>0){const rt=Bf(re.width,re.height,C.format,C.type);for(const Ie of C.layerUpdates){const Tt=re.data.subarray(Ie*rt/re.data.BYTES_PER_ELEMENT,(Ie+1)*rt/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,Ie,re.width,re.height,1,Me,Tt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,re.width,re.height,ue.depth,Me,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,de,re.width,re.height,ue.depth,0,re.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,re.width,re.height,ue.depth,Me,F,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,de,re.width,re.height,ue.depth,0,Me,F,re.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{ve&&we&&n.texStorage2D(t.TEXTURE_2D,ze,de,Ee[0].width,Ee[0].height);for(let ge=0,qe=Ee.length;ge<qe;ge++)re=Ee[ge],C.format!==yi?Me!==null?ve?Ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,re.width,re.height,Me,re.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,de,re.width,re.height,0,re.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ve&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,re.width,re.height,Me,F,re.data):n.texImage2D(t.TEXTURE_2D,ge,de,re.width,re.height,0,Me,F,re.data)}else if(C.isDataArrayTexture)if(ve){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,de,ue.width,ue.height,ue.depth),Ve)if(C.layerUpdates.size>0){const ge=Bf(ue.width,ue.height,C.format,C.type);for(const qe of C.layerUpdates){const rt=ue.data.subarray(qe*ge/ue.data.BYTES_PER_ELEMENT,(qe+1)*ge/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,qe,ue.width,ue.height,1,Me,F,rt)}C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,F,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,ue.width,ue.height,ue.depth,0,Me,F,ue.data);else if(C.isData3DTexture)ve?(we&&n.texStorage3D(t.TEXTURE_3D,ze,de,ue.width,ue.height,ue.depth),Ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,F,ue.data)):n.texImage3D(t.TEXTURE_3D,0,de,ue.width,ue.height,ue.depth,0,Me,F,ue.data);else if(C.isFramebufferTexture){if(we)if(ve)n.texStorage2D(t.TEXTURE_2D,ze,de,ue.width,ue.height);else{let ge=ue.width,qe=ue.height;for(let rt=0;rt<ze;rt++)n.texImage2D(t.TEXTURE_2D,rt,de,ge,qe,0,Me,F,null),ge>>=1,qe>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in t){const ge=t.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ue.parentNode!==ge){ge.appendChild(ue),h.add(C),ge.onpaint=qe=>{const rt=qe.changedElements;for(const Ie of h)rt.includes(Ie.image)&&(Ie.needsUpdate=!0)},ge.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ue);else{const rt=t.RGBA,Ie=t.RGBA,Tt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,rt,Ie,Tt,ue)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ve&&we){const ge=Ye(Ee[0]);n.texStorage2D(t.TEXTURE_2D,ze,de,ge.width,ge.height)}for(let ge=0,qe=Ee.length;ge<qe;ge++)re=Ee[ge],ve?Ve&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Me,F,re):n.texImage2D(t.TEXTURE_2D,ge,de,Me,F,re);C.generateMipmaps=!1}else if(ve){if(we){const ge=Ye(ue);n.texStorage2D(t.TEXTURE_2D,ze,de,ge.width,ge.height)}Ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,F,ue)}else n.texImage2D(t.TEXTURE_2D,0,de,Me,F,ue);T(C)&&C.mipmapsAutoUpdate===!0&&E(me),Ae.__version=Se.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Nt(L,C,J){if(C.image.length!==6)return;const me=et(L,C),ce=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+J);const Se=i.get(ce);if(ce.version!==Se.__version||me===!0){n.activeTexture(t.TEXTURE0+J);const Ae=wt.getPrimaries(wt.workingColorSpace),oe=C.colorSpace===er?null:wt.getPrimaries(C.colorSpace),ue=C.colorSpace===er||Ae===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Me=C.isCompressedTexture||C.image[0].isCompressedTexture,F=C.image[0]&&C.image[0].isDataTexture,de=[];for(let Ie=0;Ie<6;Ie++)!Me&&!F?de[Ie]=y(C.image[Ie],!0,r.maxCubemapSize):de[Ie]=F?C.image[Ie].image:C.image[Ie],de[Ie]=Ke(C,de[Ie]);const re=de[0],Ee=s.convert(C.format,C.colorSpace),ve=s.convert(C.type);let we=R(C.internalFormat,Ee,ve,C.normalized,C.colorSpace);const Ve=C.isVideoTexture!==!0,ze=Se.__version===void 0||me===!0,ge=ce.dataReady;let qe=b(C,re);lt(t.TEXTURE_CUBE_MAP,C);let rt;if(C.isDepthTexture){if(we=w(C.format===nr,C.type),ze)if(Ve)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,we,re.width,re.height);else for(let Ie=0;Ie<6;Ie++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,re.width,re.height,0,Ee,ve,null)}else if(Me){Ve&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,qe,we,re.width,re.height);for(let Ie=0;Ie<6;Ie++){rt=de[Ie].mipmaps;for(let Tt=0;Tt<rt.length;Tt++){const Yt=rt[Tt];C.format!==yi?Ee!==null?Ve?ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,0,0,Yt.width,Yt.height,Ee,Yt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,we,Yt.width,Yt.height,0,Yt.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,0,0,Yt.width,Yt.height,Ee,ve,Yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt,we,Yt.width,Yt.height,0,Ee,ve,Yt.data)}}}else{if(rt=C.mipmaps,Ve&&ze){rt.length>0&&qe++;const Ie=Ye(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,qe,we,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(F){Ve?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,de[Ie].width,de[Ie].height,Ee,ve,de[Ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,de[Ie].width,de[Ie].height,0,Ee,ve,de[Ie].data);for(let Tt=0;Tt<rt.length;Tt++){const Wn=rt[Tt].image[Ie].image;Ve?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,0,0,Wn.width,Wn.height,Ee,ve,Wn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,we,Wn.width,Wn.height,0,Ee,ve,Wn.data)}}else{Ve?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,Ee,ve,de[Ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,Ee,ve,de[Ie]);for(let Tt=0;Tt<rt.length;Tt++){const Yt=rt[Tt];Ve?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,0,0,Ee,ve,Yt.image[Ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Tt+1,we,Ee,ve,Yt.image[Ie])}}}T(C)&&C.mipmapsAutoUpdate===!0&&E(t.TEXTURE_CUBE_MAP),Se.__version=ce.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function St(L,C,J,me,ce,Se){const Ae=s.convert(J.format,J.colorSpace),oe=s.convert(J.type),ue=R(J.internalFormat,Ae,oe,J.normalized,J.colorSpace),Me=i.get(C),F=i.get(J);if(F.__renderTarget=C,!Me.__hasExternalTextures){const de=Math.max(1,C.width>>Se),re=Math.max(1,C.height>>Se);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,Se,ue,de,re,C.depth,0,Ae,oe,null):n.texImage2D(ce,Se,ue,de,re,0,Ae,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Te(C)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,ce,F.__webglTexture,0,kt(C)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,ce,F.__webglTexture,Se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function an(L,C,J){if(t.bindRenderbuffer(t.RENDERBUFFER,L),C.depthBuffer){const me=C.depthTexture,ce=me&&me.isDepthTexture?me.type:null,Se=w(C.stencilBuffer,ce),Ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Te(C)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(C),Se,C.width,C.height):J?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(C),Se,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,Se,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,L)}else{const me=C.textures;for(let ce=0;ce<me.length;ce++){const Se=me[ce],Ae=s.convert(Se.format,Se.colorSpace),oe=s.convert(Se.type),ue=R(Se.internalFormat,Ae,oe,Se.normalized,Se.colorSpace);Te(C)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(C),ue,C.width,C.height):J?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(C),ue,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,ue,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Kt(L,C,J){const me=C.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(C.depthTexture);ce.__renderTarget=C;const Se=me?C.depthTexture.image[0]:C.depthTexture.image;(!ce.__webglTexture||Se.width!==C.width||Se.height!==C.height)&&(Se.width=C.width,Se.height=C.height,C.depthTexture.needsUpdate=!0),me?xe(C.depthTexture,0):fe(C.depthTexture,0);const Ae=ce.__webglTexture,oe=kt(C),ue=me?t.TEXTURE_CUBE_MAP_POSITIVE_X+J:t.TEXTURE_2D,Me=C.depthTexture.format===nr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(C.depthTexture.format===rr)Te(C)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,ue,Ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Me,ue,Ae,0);else if(C.depthTexture.format===nr)Te(C)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,ue,Ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Me,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(L){const C=i.get(L),J=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const ce=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",ce)};me.addEventListener("dispose",ce),C.__depthDisposeCallback=ce}C.__boundDepthTexture=me}if(L.depthTexture&&!C.__autoAllocateDepthBuffer)if(J)for(let me=0;me<6;me++)Kt(C.__webglFramebuffer[me],L,me);else L.texture.mipmaps.length>0?Kt(C.__webglFramebuffer[0],L,0):Kt(C.__webglFramebuffer,L,0);else if(J){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=t.createRenderbuffer(),an(C.__webglDepthbuffer[me],L,!1);else{const ce=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=C.__webglDepthbuffer[me];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,Se)}}else if(L.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=t.createRenderbuffer(),an(C.__webglDepthbuffer,L,!1);else{const ce=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=C.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,Se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _n(L,C,J){const me=i.get(L);C!==void 0&&St(me.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),J!==void 0&&Zt(L)}function vn(L){const C=L.texture,J=i.get(L),me=i.get(C);L.addEventListener("dispose",B),N(L);const ce=L.textures,Se=L.isWebGLCubeRenderTarget===!0,Ae=ce.length>1;if(Ae||(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=C.version,a.memory.textures++),Se){J.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps.length>0){J.__webglFramebuffer[oe]=[];for(let ue=0;ue<C.mipmaps.length;ue++)J.__webglFramebuffer[oe][ue]=t.createFramebuffer()}else J.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(C.mipmaps.length>0){J.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)J.__webglFramebuffer[oe]=t.createFramebuffer()}else J.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let oe=0,ue=ce.length;oe<ue;oe++){const Me=i.get(ce[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&Te(L)===!1){J.__webglMultisampledFramebuffer=t.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let oe=0;oe<ce.length;oe++){const ue=ce[oe];J.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,J.__webglColorRenderbuffer[oe]);const Me=s.convert(ue.format,ue.colorSpace),F=s.convert(ue.type),de=R(ue.internalFormat,Me,F,ue.normalized,ue.colorSpace,L.isXRRenderTarget===!0),re=kt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,de,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,J.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=t.createRenderbuffer(),an(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),lt(t.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)St(J.__webglFramebuffer[oe][ue],L,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else St(J.__webglFramebuffer[oe],L,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);T(C)?E(t.TEXTURE_CUBE_MAP):C.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),n.unbindTexture()}else if(Ae){for(let oe=0,ue=ce.length;oe<ue;oe++){const Me=ce[oe],F=i.get(Me);let de=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,F.__webglTexture),lt(de,Me),St(J.__webglFramebuffer,L,Me,t.COLOR_ATTACHMENT0+oe,de,0),T(Me)&&E(de)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,me.__webglTexture),lt(oe,C),C.mipmaps.length>0)for(let ue=0;ue<C.mipmaps.length;ue++)St(J.__webglFramebuffer[ue],L,C,t.COLOR_ATTACHMENT0,oe,ue);else St(J.__webglFramebuffer,L,C,t.COLOR_ATTACHMENT0,oe,0);T(C)?E(oe):C.mipmaps.length>0&&t.texParameteri(oe,t.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),n.unbindTexture()}L.depthBuffer&&Zt(L)}function X(L){const C=L.textures;for(let J=0,me=C.length;J<me;J++){const ce=C[J];if(T(ce)&&ce.mipmapsAutoUpdate===!0){const Se=A(L),Ae=i.get(ce).__webglTexture;n.bindTexture(Se,Ae),E(Se),n.unbindTexture()}}}const yn=[];function Et(L){if(L.samples>0){if(Te(L)===!1){const C=L.textures,J=L.width,me=L.height;let ce=t.COLOR_BUFFER_BIT;const Se=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(L),oe=C.length>1;if(oe)for(let Me=0;Me<C.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<C.length;Me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const F=i.get(C[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,F,0)}t.blitFramebuffer(0,0,J,me,0,0,J,me,ce,t.NEAREST),l===!0&&(yn.length=0,yn.push(t.COLOR_ATTACHMENT0+Me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&yn.push(Se),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<C.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const F=i.get(C[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,F,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const C=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function kt(L){return Math.min(r.maxSamples,L.samples)}function Te(L){const C=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function zt(L){const C=a.render.frame;d.get(L)!==C&&(d.set(L,C),L.update())}function Ke(L,C){const J=L.colorSpace,me=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==yo&&J!==er&&(wt.getTransfer(J)===$t?(me!==yi||ce!==Nn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",J)),C}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=he,this.resetTextureUnits=ie,this.getTextureUnits=k,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=_e,this.setTexture3D=Ce,this.setTextureCube=xe,this.rebindTextures=_n,this.setupRenderTarget=vn,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Te,this.dispose=H}function RA(t,e){function n(i,r=er){let s;const a=wt.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Hd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===l0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===u0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===a0)return t.BYTE;if(i===o0)return t.SHORT;if(i===ta)return t.UNSIGNED_SHORT;if(i===Gd)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===wi)return t.HALF_FLOAT;if(i===d0)return t.ALPHA;if(i===c0)return t.RGB;if(i===yi)return t.RGBA;if(i===rr)return t.DEPTH_COMPONENT;if(i===nr)return t.DEPTH_STENCIL;if(i===h0)return t.RED;if(i===Wd)return t.RED_INTEGER;if(i===Rr)return t.RG;if(i===qd)return t.RG_INTEGER;if(i===Xd)return t.RGBA_INTEGER;if(i===oo||i===lo||i===uo||i===co)if(a===$t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Wu||i===qu||i===Xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ku||i===Yu||i===Zu||i===ju||i===Ju||i===_o||i===Qu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ku||i===Yu)return a===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zu)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ju)return s.COMPRESSED_R11_EAC;if(i===Ju)return s.COMPRESSED_SIGNED_R11_EAC;if(i===_o)return s.COMPRESSED_RG11_EAC;if(i===Qu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===ad||i===od||i===ld||i===ud||i===dd||i===cd||i===hd||i===fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ed)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===td)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===id)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ad)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ld)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ud)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fd)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pd||i===md||i===gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pd)return a===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===md)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_d||i===vd||i===vo||i===yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_d)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new E0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cr({vertexShader:CA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new or(new Uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends ur{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,h=null,c=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",_=new DA,g={},y=n.getContextAttributes();let T=null,E=null;const A=[],R=[],w=new nt;let b=null,N=null;const $=new ii;$.viewport=new qt;const O=new ii;O.viewport=new qt;const B=[$,O],V=new G1;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let fe=A[z];return fe===void 0&&(fe=new hl,A[z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(z){let fe=A[z];return fe===void 0&&(fe=new hl,A[z]=fe),fe.getGripSpace()},this.getHand=function(z){let fe=A[z];return fe===void 0&&(fe=new hl,A[z]=fe),fe.getHandSpace()};function Y(z){const fe=R.indexOf(z.inputSource);if(fe===-1)return;const _e=A[fe];_e!==void 0&&(_e.update(z.inputSource,z.frame,u||a),_e.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let z=0;z<A.length;z++){const fe=R[z];fe!==null&&(R[z]=null,A[z].disconnect(fe))}D=null,H=null,_.reset();for(const z in g)delete g[z];if(e.setRenderTarget(T),p=null,c=null,h=null,r=null,E=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),N!==null){const z=N.camera;z.fov=N.fov,z.zoom=N.zoom,z.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ce=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=y.stencil?nr:rr,Ce=y.stencil?os:bi);const He={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),c=h.createProjectionLayer(He),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),E=new xi(c.textureWidth,c.textureHeight,{format:yi,type:Nn,depthTexture:new ls(c.textureWidth,c.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new xi(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(z){for(let fe=0;fe<z.removed.length;fe++){const _e=z.removed[fe],Ce=R.indexOf(_e);Ce>=0&&(R[Ce]=null,A[Ce].disconnect(_e))}for(let fe=0;fe<z.added.length;fe++){const _e=z.added[fe];let Ce=R.indexOf(_e);if(Ce===-1){for(let He=0;He<A.length;He++)if(He>=R.length){R.push(_e),Ce=He;break}else if(R[He]===null){R[He]=_e,Ce=He;break}if(Ce===-1)break}const xe=A[Ce];xe&&xe.connect(_e)}}function q(z,fe){fe===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(fe.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let fe=z.near,_e=z.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),V.near=O.near=$.near=fe,V.far=O.far=$.far=_e,(D!==V.near||H!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,H=V.far),V.layers.mask=z.layers.mask|6,$.layers.mask=V.layers.mask&-5,O.layers.mask=V.layers.mask&-3;const Ce=z.parent,xe=V.cameras;q(V,Ce);for(let He=0;He<xe.length;He++)q(xe[He],Ce);V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),N===null&&z.isPerspectiveCamera&&(N={camera:z,fov:z.fov,zoom:z.zoom}),ie(z,V,Ce)};function ie(z,fe,_e){_e===null?z.matrix.copy(fe.matrixWorld):(z.matrix.copy(_e.matrixWorld),z.matrix.invert(),z.matrix.multiply(fe.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(fe.projectionMatrix),z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=bd*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(z){l=z,c!==null&&(c.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(z){return g[z]};let k=null;function le(z,fe){if(d=fe.getViewerPose(u||a),m=fe,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ce=!1;_e.length!==V.cameras.length&&(V.cameras.length=0,Ce=!0);for(let We=0;We<_e.length;We++){const lt=_e[We];let et=null;if(p!==null)et=p.getViewport(lt);else{const dt=h.getViewSubImage(c,lt);et=dt.viewport,We===0&&(e.setRenderTargetTextures(E,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(E))}let Le=B[We];Le===void 0&&(Le=new ii,Le.layers.enable(We),Le.viewport=new qt,B[We]=Le),Le.matrix.fromArray(lt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(lt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(et.x,et.y,et.width,et.height),We===0&&(V.matrix.copy(Le.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ce===!0&&V.cameras.push(Le)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const We=h.getDepthInformation(_e[0]);We&&We.isValid&&We.texture&&_.init(We,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<_e.length;We++){const lt=_e[We].camera;if(lt){let et=g[lt];et||(et=new E0,g[lt]=et);const Le=h.getCameraImage(lt);et.sourceTexture=Le}}}}for(let _e=0;_e<A.length;_e++){const Ce=R[_e],xe=A[_e];Ce!==null&&xe!==void 0&&xe.update(Ce,fe,u||a)}k&&k(z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}const he=new I0;he.setAnimationLoop(le),this.setAnimationLoop=function(z){k=z},this.dispose=function(){}}}const $A=new Ht,B0=new tt;B0.set(-1,0,0,0,1,0,0,0,1);function LA(t,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,T0(t)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,y,T,E){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(_,g):g.isMeshLambertMaterial?(s(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(_,g),h(_,g)):g.isMeshPhongMaterial?(s(_,g),d(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(_,g),c(_,g),g.isMeshPhysicalMaterial&&p(_,g,E)):g.isMeshMatcapMaterial?(s(_,g),m(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),x(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,y,T):g.isSpriteMaterial?u(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Rn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Rn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const y=e.get(g),T=y.envMap,E=y.envMapRotation;T&&(_.envMap.value=T,_.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(B0),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,y,T){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*y,_.scale.value=T*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function c(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,y){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,n(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,g){g.matcap&&(_.matcap.value=g.matcap)}function x(_,g){const y=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NA(t,e,n,i){let r={},s={};function a(y,T){const E=T.program;i.uniformBlockBinding(y,E,r[y.id])}function o(y,T){let E=r[y.id];E===void 0&&(m(y),E=l(y),r[y.id]=E,y.addEventListener("dispose",_));const A=T.program;i.updateUBOMapping(y,A);const R=e.render.frame;s[y.id]!==R&&(u(y),s[y.id]=R)}function l(y){const T=t.createBuffer(),E=y.__size,A=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),T}function u(y){const T=r[y.id],E=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,w=E.length;R<w;R++){const b=E[R];if(Array.isArray(b))for(let N=0,$=b.length;N<$;N++)d(b[N],R,N,A);else d(b,R,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(y,T,E,A){if(c(y,T,E,A)===!0){const R=y.__offset,w=y.value;if(Array.isArray(w)){let b=0;for(let N=0;N<w.length;N++){const $=w[N],O=x($,!0);h($,y.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else h(w,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,y.__data)}}function h(y,T,E){typeof y=="number"||typeof y=="boolean"?T[E]=y:y.isMatrix3?(T[E]=y.elements[0],T[E+1]=y.elements[1],T[E+2]=y.elements[2],T[E+3]=0,T[E+4]=y.elements[3],T[E+5]=y.elements[4],T[E+6]=y.elements[5],T[E+7]=0,T[E+8]=y.elements[6],T[E+9]=y.elements[7],T[E+10]=y.elements[8],T[E+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-E),E):y.toArray(T,E)}function c(y,T,E,A){const R=y.value,w=T+"_"+E;if(Array.isArray(R)){A[w]===void 0&&(A[w]=[]);const b=A[w];let N=!1;for(let $=0;$<R.length;$++)p(R[$],b,$)===!0&&(N=!0);return N}return p(R,A,w)}function p(y,T,E){if(T[E]===void 0)return typeof y=="number"||typeof y=="boolean"?T[E]=y:ArrayBuffer.isView(y)?T[E]=y.slice():T[E]=y.clone(),!0;{const A=T[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return T[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(y){const T=y.uniforms;let E=0;const A=16;for(let w=0,b=T.length;w<b;w++){const N=Array.isArray(T[w])?T[w]:[T[w]];for(let $=0,O=N.length;$<O;$++){const B=N[$],V=Array.isArray(B.value)?B.value:[B.value],D=Array.isArray(T[w])||Array.isArray(B.value);let H=E;for(let W=0,ne=V.length;W<ne;W++){const q=V[W],ie=x(q,D),k=E%A,le=k%ie.boundary,he=k+le;E+=le,he!==0&&A-he<ie.storage&&(E+=A-he),W===0&&(H=E),E+=ie.storage}const Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((E-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}const R=E%A;return R>0&&(E+=A-R),y.__size=E,y.__cache={},this}function x(y,T){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function _(y){const T=y.target;T.removeEventListener("dispose",_),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function g(){for(const y in r)t.deleteBuffer(r[y]);r={},s={}}return{bind:a,update:o,dispose:g}}const UA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function OA(){return fi===null&&(fi=new T1(UA,16,16,Rr,wi),fi.name="DFG_LUT",fi.minFilter=An,fi.magFilter=An,fi.wrapS=Fi,fi.wrapT=Fi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class kA{constructor(e={}){const{canvas:n=ZS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:c=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=p,_=new Set([Xd,qd,Wd]),g=new Set([Nn,bi,ta,os,Hd,Vd]),y=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let A=null,R=null;const w=[],b=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const $=this;let O=!1,B=null,V=null,D=null,H=null;this._outputColorSpace=Gn;let Y=0,W=0,ne=null,q=-1,ie=null;const k=new qt,le=new qt;let he=null;const z=new pt(0);let fe=0,_e=n.width,Ce=n.height,xe=1,He=null,Lt=null;const We=new qt(0,0,_e,Ce),lt=new qt(0,0,_e,Ce);let et=!1;const Le=new ia,dt=new jd;let it=!1,Nt=!1;const St=new Ht,an=new Z,Kt=new qt,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _n=!1;function vn(){return ne===null?xe:1}let X=i;function yn(I,G){return n.getContext(I,G)}let Et,kt,Te,zt,Ke,Ye,L,C,J,me,ce,Se,Ae,oe,ue,Me,F,de,re,Ee,ve,we,Ve;try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const G="webgl2";if(X=yn(G,I),X===null)throw yn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(I){throw n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),At("WebGLRenderer: "+I.message),I}function ze(){Et=new zT(X),Et.init(),ve=new RA(X,Et),kt=new IT(X,Et,e,ve),Te=new TA(X,Et),kt.reversedDepthBuffer&&c&&Te.buffers.depth.setReversed(!0),V=X.createFramebuffer(),D=X.createFramebuffer(),H=X.createFramebuffer(),zt=new VT(X),Ke=new hA,Ye=new AA(X,Et,Te,Ke,kt,ve,zt),L=new BT($),C=new q1(X),we=new RT(X,C),J=new GT(X,C,zt,we),me=new qT(X,J,C,we,zt),de=new WT(X,kt,Ye),ue=new DT(Ke),ce=new cA($,L,Et,kt,we,ue),Se=new LA($,Ke),Ae=new pA,oe=new xA(Et),F=new AT($,L,Te,me,m,l),Me=new EA($,me,kt),Ve=new NA(X,zt,kt,Te),re=new CT(X,Et,zt),Ee=new HT(X,Et,zt),zt.programs=ce.programs,$.capabilities=kt,$.extensions=Et,$.properties=Ke,$.renderLists=Ae,$.shadowMap=Me,$.state=Te,$.info=zt}x!==Nn&&(N=new KT(x,n.width,n.height,o,r,s));const ge=new PA($,X);this.xr=ge,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const I=Et.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Et.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(I){I!==void 0&&(xe=I,this.setSize(_e,Ce,!1))},this.getSize=function(I){return I.set(_e,Ce)},this.setSize=function(I,G,te=!0){if(ge.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=I,Ce=G,n.width=Math.floor(I*xe),n.height=Math.floor(G*xe),te===!0&&(n.style.width=I+"px",n.style.height=G+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(_e*xe,Ce*xe).floor()},this.setDrawingBufferSize=function(I,G,te){_e=I,Ce=G,xe=te,n.width=Math.floor(I*te),n.height=Math.floor(G*te),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(x===Nn){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(We)},this.setViewport=function(I,G,te,j){I.isVector4?We.set(I.x,I.y,I.z,I.w):We.set(I,G,te,j),Te.viewport(k.copy(We).multiplyScalar(vn()).round())},this.getScissor=function(I){return I.copy(lt)},this.setScissor=function(I,G,te,j){I.isVector4?lt.set(I.x,I.y,I.z,I.w):lt.set(I,G,te,j),Te.scissor(le.copy(lt).multiplyScalar(vn()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(I){Te.setScissorTest(et=I)},this.setOpaqueSort=function(I){He=I},this.setTransparentSort=function(I){Lt=I},this.getClearColor=function(I){return I.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,te=!0){let j=0;if(I){let Q=!1;if(ne!==null){const Re=ne.texture.format;Q=_.has(Re)}if(Q){const Re=ne.texture.type,Ue=g.has(Re),ye=F.getClearColor(),De=F.getClearAlpha(),Ge=ye.r,Je=ye.g,ht=ye.b;Ue?(y[0]=Ge,y[1]=Je,y[2]=ht,y[3]=De,X.clearBufferuiv(X.COLOR,0,y)):(T[0]=Ge,T[1]=Je,T[2]=ht,T[3]=De,X.clearBufferiv(X.COLOR,0,T))}else j|=X.COLOR_BUFFER_BIT}G&&(j|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),B=I},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),F.dispose(),Ae.dispose(),oe.dispose(),Ye.dispose(),Ke.dispose(),L.dispose(),me.dispose(),J.dispose(),we.dispose(),Ve.dispose(),ce.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",xs),ge.removeEventListener("sessionend",bs),li.stop()};function qe(I){I.preventDefault(),pf("WebGLRenderer: Context Lost."),O=!0}function rt(){pf("WebGLRenderer: Context Restored."),O=!1;const I=zt.autoReset,G=Me.enabled,te=Me.autoUpdate,j=Me.needsUpdate,Q=Me.type;ze(),zt.autoReset=I,Me.enabled=G,Me.autoUpdate=te,Me.needsUpdate=j,Me.type=Q}function Ie(I){At("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Tt(I){const G=I.target;G.removeEventListener("dispose",Tt),Yt(G)}function Yt(I){Wn(I),Ke.remove(I)}function Wn(I){const G=Ke.get(I).programs;G!==void 0&&(G.forEach(function(te){ce.releaseProgram(te)}),I.isShaderMaterial&&ce.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,te,j,Q,Re){G===null&&(G=Zt);const Ue=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,ye=Ei(I,G,te,j,Q);Te.setMaterial(j,Ue);let De=te.index,Ge=1;if(j.wireframe===!0){if(De=J.getWireframeAttribute(te),De===void 0)return;Ge=2}const Je=te.drawRange,ht=te.attributes.position;let Oe=Je.start*Ge,ft=(Je.start+Je.count)*Ge;Re!==null&&(Oe=Math.max(Oe,Re.start*Ge),ft=Math.min(ft,(Re.start+Re.count)*Ge)),De!==null?(Oe=Math.max(Oe,0),ft=Math.min(ft,De.count)):ht!=null&&(Oe=Math.max(Oe,0),ft=Math.min(ft,ht.count));const Xt=ft-Oe;if(Xt<0||Xt===1/0)return;we.setup(Q,j,ye,te,De);let Ut,Dt=re;if(De!==null&&(Ut=C.get(De),Dt=Ee,Dt.setIndex(Ut)),Q.isMesh)j.wireframe===!0?(Te.setLineWidth(j.wireframeLinewidth*vn()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(Q.isLine){let on=j.linewidth;on===void 0&&(on=1),Te.setLineWidth(on*vn()),Q.isLineSegments?Dt.setMode(X.LINES):Q.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else Q.isPoints?Dt.setMode(X.POINTS):Q.isSprite&&Dt.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const on=Q._multiDrawStarts,ke=Q._multiDrawCounts,hn=Q._multiDrawCount,gt=De?C.get(De).bytesPerElement:1,Ti=Ke.get(j).currentProgram.getUniforms();for(let jt=0;jt<hn;jt++)Ti.setValue(X,"_gl_DrawID",jt),Dt.render(on[jt]/gt,ke[jt])}else if(Q.isInstancedMesh)Dt.renderInstances(Oe,Xt,Q.count);else if(te.isInstancedBufferGeometry){const on=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,on);Dt.renderInstances(Oe,Xt,ke)}else Dt.render(Oe,Xt)};function ys(I,G,te,j){B!==null&&I.isNodeMaterial&&B.setObject(j,I),it===!0&&ue.setState(I,te,!1),I.transparent===!0&&I.side===_i&&I.forceSinglePass===!1?(I.side=Rn,I.needsUpdate=!0,Vi(I,G,j),I.side=Ar,I.needsUpdate=!0,Vi(I,G,j),I.side=_i):Vi(I,G,j)}this.compile=function(I,G,te=null){te===null&&(te=I),B!==null&&B.renderStart(I,G,te),R=oe.get(te),R.init(G),b.push(R),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),I!==te&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights(),B!==null&&B.updateLights(R.state.lightsArray),Nt=this.localClippingEnabled,it=ue.init(this.clippingPlanes,Nt),it===!0&&ue.setGlobalState(this.clippingPlanes,G),B!==null&&Me.render(R.state.shadowsArray,te,G);const j=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const ye=Re[Ue];ys(ye,te,G,Q),j.add(ye)}else ys(Re,te,G,Q),j.add(Re)}),R=b.pop(),B!==null&&B.renderEnd(),j},this.compileAsync=function(I,G,te=null){const j=this.compile(I,G,te);return new Promise(Q=>{function Re(){if(j.forEach(function(Ue){const De=Ke.get(Ue).currentProgram;(De===void 0||De.isReady())&&j.delete(Ue)}),j.size===0){Q(I);return}setTimeout(Re,10)}Et.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ur=null;function ca(I){Ur&&Ur(I)}function xs(){li.stop()}function bs(){li.start()}const li=new I0;li.setAnimationLoop(ca),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(I){Ur=I,ge.setAnimationLoop(I),I===null?li.stop():li.start()},ge.addEventListener("sessionstart",xs),ge.addEventListener("sessionend",bs),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(I,G);const te=ge.enabled===!0&&ge.isPresenting===!0,j=N!==null&&(ne===null||te)&&N.begin($,ne);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(G),G=ge.getCamera()),I.isScene===!0&&I.onBeforeRender($,I,G,ne),R=oe.get(I,b.length),R.init(G),R.state.textureUnits=Ye.getTextureUnits(),b.push(R),St.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?dt.setFromArrayCamera(G):Le.setFromProjectionMatrix(St,oi,G.reversedDepth),Nt=this.localClippingEnabled,it=ue.init(this.clippingPlanes,Nt),A=Ae.get(I,w.length),A.init(),w.push(A),this.info.render.frame++,ge.enabled===!0&&ge.isPresenting===!0){const Ue=$.xr.getDepthSensingMesh();Ue!==null&&ws(Ue,G,-1/0,$.sortObjects)}ws(I,G,0,$.sortObjects),A.finish(),B!==null&&B.updateLights(R.state.lightsArray),$.sortObjects===!0&&A.sort(He,Lt),_n=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,_n&&F.addToRenderList(A,I),this.info.autoReset===!0&&this.info.reset(),it===!0&&ue.beginShadows();const Q=R.state.shadowsArray;if(Me.render(Q,I,G),it===!0&&ue.endShadows(),(j&&N.hasRenderPass())===!1){const Ue=A.opaque,ye=A.transmissive;if(R.setupLights(),G.isArrayCamera){const De=G.cameras;if(ye.length>0)for(let Ge=0,Je=De.length;Ge<Je;Ge++){const ht=De[Ge];Or(Ue,ye,I,ht)}_n&&F.render(I);for(let Ge=0,Je=De.length;Ge<Je;Ge++){const ht=De[Ge];Cn(A,I,ht,ht.viewport)}}else ye.length>0&&Or(Ue,ye,I,G),_n&&F.render(I),Cn(A,I,G)}ne!==null&&W===0&&(Ye.updateMultisampleRenderTarget(ne),Ye.updateRenderTargetMipmap(ne)),j&&N.end($),I.isScene===!0&&I.onAfterRender($,I,G),we.resetDefaultState(),q=-1,ie=null,b.pop(),b.length>0?(R=b[b.length-1],Ye.setTextureUnits(R.state.textureUnits),it===!0&&ue.setGlobalState($.clippingPlanes,R.state.camera)):R=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,B!==null&&B.renderEnd()};function ws(I,G,te,j){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)te=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)R.pushLight(I),I.castShadow&&R.pushShadow(I);else if(I.isSprite){const Ue=G.isArrayCamera?dt:Le;if(!I.frustumCulled||I.intersectsFrustum(Ue)){j&&Kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(St);const ye=me.update(I),De=I.material;De.visible&&A.push(I,ye,De,te,Kt.z,null,G)}}else if(I.isMesh||I.isLine||I.isPoints){const Ue=G.isArrayCamera?dt:Le;if(!I.frustumCulled||I.intersectsFrustum(Ue)){const ye=me.update(I),De=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Kt.copy(I.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Kt.copy(ye.boundingSphere.center)),Kt.applyMatrix4(I.matrixWorld).applyMatrix4(St)),Array.isArray(De)){const Ge=ye.groups;for(let Je=0,ht=Ge.length;Je<ht;Je++){const Oe=Ge[Je],ft=De[Oe.materialIndex];ft&&ft.visible&&A.push(I,ye,ft,te,Kt.z,Oe,G)}}else De.visible&&A.push(I,ye,De,te,Kt.z,null,G)}}}const Re=I.children;for(let Ue=0,ye=Re.length;Ue<ye;Ue++)ws(Re[Ue],G,te,j)}function Cn(I,G,te,j){const{opaque:Q,transmissive:Re,transparent:Ue}=I;R.setupLightsView(te),it===!0&&ue.setGlobalState($.clippingPlanes,te),j&&Te.viewport(k.copy(j)),Q.length>0&&Hi(Q,G,te),Re.length>0&&Hi(Re,G,te),Ue.length>0&&Hi(Ue,G,te),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Or(I,G,te,j){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){const Oe=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new xi(1,1,{generateMipmaps:!0,type:Oe?wi:Nn,minFilter:tr,samples:Math.max(4,kt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Re=R.state.transmissionRenderTarget[j.id],Ue=j.viewport||k;Re.setSize(Ue.z*$.transmissionResolutionScale,Ue.w*$.transmissionResolutionScale);const ye=$.getRenderTarget(),De=$.getActiveCubeFace(),Ge=$.getActiveMipmapLevel();$.setRenderTarget(Re),$.getClearColor(z),fe=$.getClearAlpha(),fe<1&&$.setClearColor(16777215,.5),$.clear(),_n&&F.render(te);const Je=$.toneMapping;$.toneMapping=Bi;const ht=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),it===!0&&ue.setGlobalState($.clippingPlanes,j),Hi(I,te,j),Ye.updateMultisampleRenderTarget(Re),Ye.updateRenderTargetMipmap(Re),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ft=0,Xt=G.length;ft<Xt;ft++){const Ut=G[ft],{object:Dt,geometry:on,material:ke,group:hn}=Ut;if(ke.side===_i&&Dt.layers.test(j.layers)){const gt=ke.side;ke.side=Rn,ke.needsUpdate=!0,Mi(Dt,te,j,on,ke,hn),ke.side=gt,ke.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ye.updateMultisampleRenderTarget(Re),Ye.updateRenderTargetMipmap(Re))}$.setRenderTarget(ye,De,Ge),$.setClearColor(z,fe),ht!==void 0&&(j.viewport=ht),$.toneMapping=Je}function Hi(I,G,te){const j=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Re=I.length;Q<Re;Q++){const Ue=I[Q],{object:ye,geometry:De,group:Ge}=Ue;let Je=Ue.material;Je.allowOverride===!0&&j!==null&&(Je=j),ye.layers.test(te.layers)&&Mi(ye,G,te,De,Je,Ge)}}function Mi(I,G,te,j,Q,Re){B!==null&&Q.isNodeMaterial&&B.setObject(I,Q),I.onBeforeRender($,G,te,j,Q,Re),I.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender($,G,te,j,I,Re),Q.transparent===!0&&Q.side===_i&&Q.forceSinglePass===!1?(Q.side=Rn,Q.needsUpdate=!0,$.renderBufferDirect(te,G,j,Q,I,Re),Q.side=Ar,Q.needsUpdate=!0,$.renderBufferDirect(te,G,j,Q,I,Re),Q.side=_i):$.renderBufferDirect(te,G,j,Q,I,Re),I.onAfterRender($,G,te,j,Q,Re)}function Bn(I){let G=0;for(const te of I)te.texture!==null&&G++;return G}function Vi(I,G,te){G.isScene!==!0&&(G=Zt);const j=Ke.get(I),Q=R.state.lights,Re=R.state.shadowsArray,Ue=Q.state.version,ye=ce.getParameters(I,Q.state,Re,G,te,R.state.lightProbeGridArray),De=ce.getProgramCacheKey(ye);let Ge=j.programs;j.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?G.environment:null,j.fog=G.fog;const Je=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;j.envMap=L.get(I.envMap||j.environment,Je),j.envMapRotation=j.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Ge===void 0&&(I.addEventListener("dispose",Tt),Ge=new Map,j.programs=Ge,j.programVariants=new Map);let ht=Ge.get(De);if(ht!==void 0){if(j.currentProgram===ht&&j.lightsStateVersion===Ue)return Ss(I,ye),ht}else ye.uniforms=ce.getUniforms(I),B!==null&&I.isNodeMaterial&&B.build(I,te,ye),I.onBeforeCompile(ye,$),ht=ce.acquireProgram(ye,De),Ge.set(De,ht),j.uniforms=ye.uniforms;const Oe=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Oe.clippingPlanes=ue.uniform),Ss(I,ye),j.needsLights=Sn(I),j.lightsStateVersion=Ue,j.needsLights&&(Oe.ambientLightColor.value=Q.state.ambient,Oe.lightProbe.value=Q.state.probe,Oe.sunLights.value=Q.state.sun,Oe.sunLightShadows.value=Q.state.sunShadow,Oe.directionalLights.value=Q.state.directional,Oe.directionalLightShadows.value=Q.state.directionalShadow,Oe.spotLights.value=Q.state.spot,Oe.spotLightShadows.value=Q.state.spotShadow,Oe.rectAreaLights.value=Q.state.rectArea,Oe.ltc_1.value=Q.state.rectAreaLTC1,Oe.ltc_2.value=Q.state.rectAreaLTC2,Oe.pointLights.value=Q.state.point,Oe.pointLightShadows.value=Q.state.pointShadow,Oe.hemisphereLights.value=Q.state.hemi,Oe.sunShadowMatrix.value=Q.state.sunShadowMatrix,Oe.sunShadowCascade.value=Q.state.sunShadowCascade,Oe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Q.state.spotLightMatrix,Oe.spotLightMap.value=Q.state.spotLightMap,Oe.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.numLightProbeGrids=Bn(R.state.lightProbeGridArray),j.currentProgram=ht,j.uniformsList=null,ht}function zo(I,G,te,j,Q){const Re=Ke.get(I),Ue=Re.currentProgram.id+","+j+","+Q;let ye=Re.programVariants.get(Ue);return ye===void 0?(ye=Vi(I,G,te),Re.programVariants.set(Ue,ye)):(Re.currentProgram=ye,Re.uniformsList=null,Re.outputColorSpace=j,Re.toneMapping=Q),ye}function ha(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=po.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Ss(I,G){const te=Ke.get(I);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Ei(I,G,te,j,Q){G.isScene!==!0&&(G=Zt),Ye.resetTextureUnits();const Re=G.fog,Ue=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?G.environment:null,ye=ne===null?$.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wt.workingColorSpace,De=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ge=L.get(j.envMap||Ue,De),Je=j.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ht=!!te.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!te.morphAttributes.position,ft=!!te.morphAttributes.normal,Xt=!!te.morphAttributes.color;let Ut=Bi;j.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ut=$.toneMapping);const Dt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,on=Dt!==void 0?Dt.length:0,ke=Ke.get(j),hn=R.state.lights;if(it===!0&&(Nt===!0||I!==ie)){const Bt=I===ie&&j.id===q;ue.setState(j,I,Bt)}let gt=!1,Ti=!1;j.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==hn.state.version||Q.isBatchedMesh&&ke.batching===!1||!Q.isBatchedMesh&&ke.batching===!0||Q.isBatchedMesh&&ke.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&ke.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||Q.isInstancedMesh&&ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ke.instancingMorph===!1&&Q.morphTexture!==null||ke.envMap!==Ge||j.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ue.numPlanes||ke.numIntersection!==ue.numIntersection)||ke.vertexAlphas!==Je||ke.vertexTangents!==ht||ke.morphTargets!==Oe||ke.morphNormals!==ft||ke.morphColors!==Xt||ke.morphTargetsCount!==on||ke.numLightProbeGrids!==Bn(R.state.lightProbeGridArray)?gt=!0:(ke.outputColorSpace!==ye||ke.toneMapping!==Ut)&&(Ti=!0):(gt=!0,ke.__version=j.version);let jt=ke.currentProgram;(gt===!0||Ti===!0)&&(jt=Ti===!0?zo(j,G,Q,ye,Ut):Vi(j,G,Q),B&&j.isNodeMaterial&&B.onUpdateProgram(j,jt,ke));let Ai=!1,ui=!1,qn=!1;const vt=jt.getUniforms(),Qt=ke.uniforms;if(Te.useProgram(jt.program)&&(Ai=!0,ui=!0,qn=!0),j.id!==q&&(q=j.id,ui=!0),Ai||ie!==I){Te.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),vt.setValue(X,"projectionMatrix",I.projectionMatrix),vt.setValue(X,"viewMatrix",I.matrixWorldInverse);const Wt=vt.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,an.setFromMatrixPosition(I.matrixWorld)),kt.logarithmicDepthBuffer&&vt.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),ie!==I&&(ie=I,ui=!0,qn=!0)}if(ke.needsLights&&(hn.state.sunShadowMap.length>0&&vt.setValue(X,"sunShadowMap",hn.state.sunShadowMap,Ye),hn.state.directionalShadowMap.length>0&&vt.setValue(X,"directionalShadowMap",hn.state.directionalShadowMap,Ye),hn.state.spotShadowMap.length>0&&vt.setValue(X,"spotShadowMap",hn.state.spotShadowMap,Ye),hn.state.pointShadowMap.length>0&&vt.setValue(X,"pointShadowMap",hn.state.pointShadowMap,Ye)),Q.isSkinnedMesh){vt.setOptional(X,Q,"bindMatrix"),vt.setOptional(X,Q,"bindMatrixInverse");const Bt=Q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(X,"boneTexture",Bt.boneTexture,Ye))}Q.isBatchedMesh&&(vt.setOptional(X,Q,"batchingTexture"),vt.setValue(X,"batchingTexture",Q._matricesTexture,Ye),vt.setOptional(X,Q,"batchingIdTexture"),vt.setValue(X,"batchingIdTexture",Q._indirectTexture,Ye),vt.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&vt.setValue(X,"batchingColorTexture",Q._colorsTexture,Ye));const In=te.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&de.update(Q,te,jt),(ui||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,vt.setValue(X,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&G.environment!==null&&(Qt.envMapIntensity.value=G.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=OA()),ui){if(vt.setValue(X,"toneMappingExposure",$.toneMappingExposure),ke.needsLights&&Ms(Qt,qn),Re&&j.fog===!0&&Se.refreshFogUniforms(Qt,Re),Se.refreshMaterialUniforms(Qt,j,xe,Ce,R.state.transmissionRenderTarget[I.id]),ke.needsLights&&ke.numLightProbeGrids>0){const Bt=E;let Wt=0;for(const Xn of R.state.lightProbeGridArray)Xn.texture!==null&&(Bt.textures[Wt]=Xn.texture,Bt.min[Wt]=Xn.boundingBox.min,Bt.max[Wt]=Xn.boundingBox.max,Bt.resolution[Wt]=Xn.resolution,Wt++);for(const Xn in Bt)Bt[Xn].length=Wt;Qt.probesSH.value=Bt.textures,Qt.probesMin.value=Bt.min,Qt.probesMax.value=Bt.max,Qt.probesResolution.value=Bt.resolution}po.upload(X,ha(ke),Qt,Ye)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(po.upload(X,ha(ke),Qt,Ye),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(X,"center",Q.center),vt.setValue(X,"modelViewMatrix",Q.modelViewMatrix),vt.setValue(X,"normalMatrix",Q.normalMatrix),vt.setValue(X,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){const Bt=j.uniformsGroups;for(let Wt=0,Xn=Bt.length;Wt<Xn;Wt++){const Kn=Bt[Wt];Ve.update(Kn,jt),Ve.bind(Kn,jt)}}return jt}function Ms(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.sunLights.needsUpdate=G,I.sunLightShadows.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function Sn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(I,G,te){const j=Ke.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ke.get(I.texture).__webglTexture=G,Ke.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:te,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){const te=Ke.get(I);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,te=0){ne=I,Y=G,W=te;let j=null,Q=!1,Re=!1;if(I){const ye=Ke.get(I);if(ye.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(X.FRAMEBUFFER,ye.__webglFramebuffer),k.copy(I.viewport),le.copy(I.scissor),he=I.scissorTest,Te.viewport(k),Te.scissor(le),Te.setScissorTest(he),q=-1;return}else if(ye.__webglFramebuffer===void 0)Ye.setupRenderTarget(I);else if(ye.__hasExternalTextures)Ye.rebindTextures(I,Ke.get(I.texture).__webglTexture,Ke.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Je=I.depthTexture;if(ye.__boundDepthTexture!==Je){if(Je!==null&&Ke.has(Je)&&(I.width!==Je.image.width||I.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(I)}}const De=I.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);const Ge=Ke.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?j=Ge[G][te]:j=Ge[G],Q=!0):I.samples>0&&Ye.useMultisampledRTT(I)===!1?j=Ke.get(I).__webglMultisampledFramebuffer:Array.isArray(Ge)?j=Ge[te]:j=Ge,k.copy(I.viewport),le.copy(I.scissor),he=I.scissorTest}else k.copy(We).multiplyScalar(xe).floor(),le.copy(lt).multiplyScalar(xe).floor(),he=et;if(te!==0&&(j=V),Te.bindFramebuffer(X.FRAMEBUFFER,j)&&Te.drawBuffers(I,j),Te.viewport(k),Te.scissor(le),Te.setScissorTest(he),Q){const ye=Ke.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,te)}else if(Re){const ye=G;for(let De=0;De<I.textures.length;De++){const Ge=Ke.get(I.textures[De]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+De,Ge.__webglTexture,te,ye)}}else if(I!==null&&te!==0){const ye=Ke.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ye.__webglTexture,te)}q=-1};function Mn(I){const G=Ke.get(I);return(G.__readFormat!==I.format||G.__readType!==I.type)&&(G.__readFormat=I.format,G.__readType=I.type,G.__formatReadable=kt.textureFormatReadable(I.format),G.__typeReadable=kt.textureTypeReadable(I.type)),G}this.readRenderTargetPixels=function(I,G,te,j,Q,Re,Ue,ye=0){if(!(I&&I.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){Te.bindFramebuffer(X.FRAMEBUFFER,De);try{const Ge=I.textures[ye],Je=Ge.format,ht=Ge.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ye);const Oe=Mn(Ge);if(Oe.__formatReadable===!1){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-j&&te>=0&&te<=I.height-Q&&X.readPixels(G,te,j,Q,ve.convert(Je),ve.convert(ht),Re)}finally{const Ge=ne!==null?Ke.get(ne).__webglFramebuffer:null;Te.bindFramebuffer(X.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,G,te,j,Q,Re,Ue,ye=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(G>=0&&G<=I.width-j&&te>=0&&te<=I.height-Q){Te.bindFramebuffer(X.FRAMEBUFFER,De);const Ge=I.textures[ye],Je=Ge.format,ht=Ge.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ye);const Oe=Mn(Ge);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),X.readPixels(G,te,j,Q,ve.convert(Je),ve.convert(ht),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Xt=ne!==null?Ke.get(ne).__webglFramebuffer:null;Te.bindFramebuffer(X.FRAMEBUFFER,Xt);const Ut=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await jS(X,Ut,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ft),X.deleteSync(Ut),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,te=0){const j=Math.pow(2,-te),Q=Math.floor(I.image.width*j),Re=Math.floor(I.image.height*j),Ue=G!==null?G.x:0,ye=G!==null?G.y:0;Ye.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Ue,ye,Q,Re),Te.unbindTexture()},this.copyTextureToTexture=function(I,G,te=null,j=null,Q=0,Re=0){let Ue,ye,De,Ge,Je,ht,Oe,ft,Xt;const Ut=I.isCompressedTexture?I.mipmaps[Re]:I.image;if(te!==null)Ue=te.max.x-te.min.x,ye=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,Ge=te.min.x,Je=te.min.y,ht=te.isBox3?te.min.z:0;else{const vt=Math.pow(2,-Q);Ue=Math.floor(Ut.width*vt),ye=Math.floor(Ut.height*vt),I.isDataArrayTexture?De=Ut.depth:I.isData3DTexture?De=Math.floor(Ut.depth*vt):De=1,Ge=0,Je=0,ht=0}j!==null?(Oe=j.x,ft=j.y,Xt=j.z):(Oe=0,ft=0,Xt=0);const Dt=ve.convert(G.format),on=ve.convert(G.type);let ke;G.isData3DTexture?(Ye.setTexture3D(G,0),ke=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ye.setTexture2DArray(G,0),ke=X.TEXTURE_2D_ARRAY):(Ye.setTexture2D(G,0),ke=X.TEXTURE_2D),Te.activeTexture(X.TEXTURE0),Te.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),Te.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Te.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const hn=Te.getParameter(X.UNPACK_ROW_LENGTH),gt=Te.getParameter(X.UNPACK_IMAGE_HEIGHT),Ti=Te.getParameter(X.UNPACK_SKIP_PIXELS),jt=Te.getParameter(X.UNPACK_SKIP_ROWS),Ai=Te.getParameter(X.UNPACK_SKIP_IMAGES);Te.pixelStorei(X.UNPACK_ROW_LENGTH,Ut.width),Te.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ut.height),Te.pixelStorei(X.UNPACK_SKIP_PIXELS,Ge),Te.pixelStorei(X.UNPACK_SKIP_ROWS,Je),Te.pixelStorei(X.UNPACK_SKIP_IMAGES,ht);const ui=I.isDataArrayTexture||I.isData3DTexture,qn=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){const vt=Ke.get(I),Qt=Ke.get(G),In=Ke.get(vt.__renderTarget),Bt=Ke.get(Qt.__renderTarget);Te.bindFramebuffer(X.READ_FRAMEBUFFER,In.__webglFramebuffer),Te.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Wt=0;Wt<De;Wt++)ui&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ke.get(I).__webglTexture,Q,ht+Wt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ke.get(G).__webglTexture,Re,Xt+Wt)),X.blitFramebuffer(Ge,Je,Ge+Ue,Je+ye,Oe,ft,Oe+Ue,ft+ye,X.DEPTH_BUFFER_BIT,X.NEAREST);Te.bindFramebuffer(X.READ_FRAMEBUFFER,null),Te.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||I.isRenderTargetTexture||Ke.has(I)){const vt=Ke.get(I),Qt=Ke.get(G);Te.bindFramebuffer(X.READ_FRAMEBUFFER,D),Te.bindFramebuffer(X.DRAW_FRAMEBUFFER,H);for(let In=0;In<De;In++)ui?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vt.__webglTexture,Q,ht+In):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vt.__webglTexture,Q),qn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qt.__webglTexture,Re,Xt+In):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qt.__webglTexture,Re),Q!==0?X.blitFramebuffer(Ge,Je,Ge+Ue,Je+ye,Oe,ft,Oe+Ue,ft+ye,X.COLOR_BUFFER_BIT,X.NEAREST):qn?X.copyTexSubImage3D(ke,Re,Oe,ft,Xt+In,Ge,Je,Ue,ye):X.copyTexSubImage2D(ke,Re,Oe,ft,Ge,Je,Ue,ye);Te.bindFramebuffer(X.READ_FRAMEBUFFER,null),Te.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else qn?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(ke,Re,Oe,ft,Xt,Ue,ye,De,Dt,on,Ut.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Re,Oe,ft,Xt,Ue,ye,De,Dt,Ut.data):X.texSubImage3D(ke,Re,Oe,ft,Xt,Ue,ye,De,Dt,on,Ut):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Re,Oe,ft,Ue,ye,Dt,on,Ut.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Re,Oe,ft,Ut.width,Ut.height,Dt,Ut.data):X.texSubImage2D(X.TEXTURE_2D,Re,Oe,ft,Ue,ye,Dt,on,Ut);Te.pixelStorei(X.UNPACK_ROW_LENGTH,hn),Te.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt),Te.pixelStorei(X.UNPACK_SKIP_PIXELS,Ti),Te.pixelStorei(X.UNPACK_SKIP_ROWS,jt),Te.pixelStorei(X.UNPACK_SKIP_IMAGES,Ai),Re===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&X.generateMipmap(ke),Te.unbindTexture()},this.initRenderTarget=function(I){Ke.get(I).__webglFramebuffer===void 0&&Ye.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ye.setTextureCube(I,0):I.isData3DTexture?Ye.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ye.setTexture2DArray(I,0):Ye.setTexture2D(I,0),Te.unbindTexture()},this.resetState=function(){Y=0,W=0,ne=null,Te.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const lp={type:"change"},Qd={type:"start"},z0={type:"end"},Va=new Zd,up=new Oi,FA=Math.cos(70*i1.DEG2RAD),en=new Z,En=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dl=1e-6;class BA extends V1{constructor(e,n=null){super(e,n),this.state=Rt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new sr,this._lastTargetPosition=new Z,this._quat=new sr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new Z,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new Z,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GA.bind(this),this._onPointerDown=zA.bind(this),this._onPointerUp=HA.bind(this),this._onContextMenu=ZA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=XA.bind(this),this._onTouchStart=KA.bind(this),this._onTouchMove=YA.bind(this),this._onMouseDown=VA.bind(this),this._onMouseMove=WA.bind(this),this._interceptControlDown=jA.bind(this),this._interceptControlUp=JA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lp),this.update(),this.state=Rt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;en.copy(n).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),r<-Math.PI?r+=En:r>Math.PI&&(r-=En),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),n.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=en.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new Z(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Va.origin.copy(this.object.position),Va.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Va.direction))<FA?this.object.lookAt(this.target):(up.setFromNormalAndCoplanarPoint(this.object.up,this.target),Va.intersectPlane(up,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dl||this._lastTargetPosition.distanceToSquared(this.target)>Dl?(this.dispatchEvent(lp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){en.setFromMatrixColumn(n,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,n){this.screenSpacePanning===!0?en.setFromMatrixColumn(n,1):(en.setFromMatrixColumn(n,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;en.copy(r).sub(this.target);let s=en.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new nt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function zA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function GA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function HA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(z0),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function VA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Rt.DOLLY;break;case is.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Rt.ROTATE}break;case is.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Qd)}function WA(t){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function qA(t){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(t.preventDefault(),this.dispatchEvent(Qd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(z0))}function XA(t){this.enabled!==!1&&this._handleKeyDown(t)}function KA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(t),this.state=Rt.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(t),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Rt.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Qd)}function YA(t){switch(this._trackPointer(t),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Rt.NONE}}function ZA(t){this.enabled!==!1&&t.preventDefault()}function jA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
 * ONNX Runtime Web v1.31.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ec=Object.defineProperty,QA=Object.getOwnPropertyDescriptor,e3=Object.getOwnPropertyNames,t3=Object.prototype.hasOwnProperty,n3=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),pe=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(i){throw n=[i],i}},vs=(t,e)=>{for(var n in e)ec(t,n,{get:e[n],enumerable:!0})},i3=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of e3(e))!t3.call(t,r)&&r!==n&&ec(t,r,{get:()=>e[r],enumerable:!(i=QA(e,r))||i.enumerable});return t},ra=t=>i3(ec({},"__esModule",{value:!0}),t),Zr,Li,Pl,es,$l,G0,H0,tc=pe(()=>{"use strict";Zr=new Map,Li=[],Pl=new WeakMap,es=(t,e,n)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let i=Zr.get(t);if(i===void 0)Zr.set(t,{backend:e,priority:n});else{if(i.priority>n)return;if(i.priority===n&&i.backend!==e)throw new Error(`cannot register backend "${t}" using priority ${n}`)}if(n>=0){let r=Li.indexOf(t);r!==-1&&Li.splice(r,1);for(let s=0;s<Li.length;s++)if(Zr.get(Li[s]).priority<=n){Li.splice(s,0,t);return}Li.push(t)}return}throw new TypeError("not a valid backend")},$l=async t=>{let e=Zr.get(t);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let n=!!e.initPromise;try{if(!n){let i=e.backend,r=Pl.get(i);e.initPromise=r?r.then(async()=>i.init(t),async()=>i.init(t)):i.init(t),Pl.set(i,e.initPromise)}return await e.initPromise,e.initialized=!0,e.backend}catch(i){return n||(e.error=`${i}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},G0=async t=>{let e=t.executionProviders||[],n=e.map(l=>typeof l=="string"?l:l.name),i=n.length===0?Li:n,r,s=[],a=new Set;for(let l of i){let u=await $l(l);typeof u=="string"?s.push({name:l,err:u}):(r||(r=u),r===u&&a.add(l))}if(!r)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:u}of s)n.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${u}`);let o=e.filter(l=>a.has(typeof l=="string"?l:l.name));return[r,new Proxy(t,{get:(l,u)=>u==="executionProviders"?o:Reflect.get(l,u)})]},H0=async()=>{let t=[];for(let n of Li){if(typeof Zr.get(n).backend.createLoraAdapterHandler!="function")continue;let i=await $l(n);if(typeof i!="string")return i;t.push({name:n,err:i})}let e=t.length===0?"":` ERR: ${t.map(n=>`[${n.name}] ${n.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${e}`)}}),r3=pe(()=>{"use strict";tc()}),V0,s3=pe(()=>{"use strict";V0="1.31.1"}),Ll,un,W0=pe(()=>{"use strict";s3(),Ll="warning",un={wasm:{},webgl:{},webgpu:{},versions:{common:V0},set logLevel(t){if(t!==void 0){if(typeof t!="string"||["verbose","info","warning","error","fatal"].indexOf(t)===-1)throw new Error(`Unsupported logging level: ${t}`);Ll=t}},get logLevel(){return Ll}},Object.defineProperty(un,"logLevel",{enumerable:!0})}),Ft,a3=pe(()=>{"use strict";W0(),Ft=un}),Eo,Nl,Vn,On,Er,Tr,nc=pe(()=>{"use strict";W0(),Eo=(t,e)=>{(typeof un.trace>"u"?!un.wasm.trace:!un.trace)||console.timeStamp(`${t}::ORT::${e}`)},Nl=(t,e)=>{var r;let n=((r=new Error().stack)==null?void 0:r.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<n.length;s++){if(i&&!n[s].includes("TRACE_FUNC")){let a=`FUNC_${t}::${n[s].trim().split(" ")[1]}`;e&&(a+=`::${e}`),Eo("CPU",a);return}n[s].includes("TRACE_FUNC")&&(i=!0)}},Vn=t=>{(typeof un.trace>"u"?!un.wasm.trace:!un.trace)||Nl("BEGIN",t)},On=t=>{(typeof un.trace>"u"?!un.wasm.trace:!un.trace)||Nl("END",t)},Er=t=>{(typeof un.trace>"u"?!un.wasm.trace:!un.trace)||console.time(`ORT::${t}`)},Tr=t=>{(typeof un.trace>"u"?!un.wasm.trace:!un.trace)||console.timeEnd(`ORT::${t}`)}}),ic,q0=pe(()=>{"use strict";tc(),nc(),ic=class X0{constructor(e,n){this.backend=e,this.handler=n}static async create(e){if(Vn(),typeof e!="string"&&!(e instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let n=await H0(),i=await n.createLoraAdapterHandler(e);return On(),new X0(n,i)}async release(){return this.handler.dispose()}}}),K0,Y0,o3=pe(()=>{"use strict";K0=(t,e)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=t.dims[3],n.height=t.dims[2];let i=n.getContext("2d");if(i!=null){let r,s;(e==null?void 0:e.tensorLayout)!==void 0&&e.tensorLayout==="NHWC"?(r=t.dims[2],s=t.dims[3]):(r=t.dims[3],s=t.dims[2]);let a=(e==null?void 0:e.format)!==void 0?e.format:"RGB",o=e==null?void 0:e.norm,l,u;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?u=[0,0,0,0]:typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:(u=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(u[3]=o.bias[3]));let d=s*r,h=0,c=d,p=d*2,m=-1;a==="RGBA"?(h=0,c=d,p=d*2,m=d*3):a==="RGB"?(h=0,c=d,p=d*2):a==="RBG"&&(h=0,p=d,c=d*2);for(let x=0;x<s;x++)for(let _=0;_<r;_++){let g=(t.data[h++]-u[0])*l[0],y=(t.data[c++]-u[1])*l[1],T=(t.data[p++]-u[2])*l[2],E=m===-1?255:(t.data[m++]-u[3])*l[3];i.fillStyle="rgba("+g+","+y+","+T+","+E+")",i.fillRect(_,x,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Y0=(t,e)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(n!=null){let r,s,a;(e==null?void 0:e.tensorLayout)!==void 0&&e.tensorLayout==="NHWC"?(r=t.dims[2],s=t.dims[1],a=t.dims[3]):(r=t.dims[3],s=t.dims[2],a=t.dims[1]);let o=e!==void 0&&e.format!==void 0?e.format:"RGB",l=e==null?void 0:e.norm,u,d;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?d=[0,0,0,0]:typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:(d=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(d[3]=l.bias[3]));let h=s*r;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,p=0,m=1,x=2,_=3,g=0,y=h,T=h*2,E=-1;o==="RGBA"?(g=0,y=h,T=h*2,E=h*3):o==="RGB"?(g=0,y=h,T=h*2):o==="RBG"&&(g=0,T=h,y=h*2),i=n.createImageData(r,s);for(let A=0;A<s*r;p+=c,m+=c,x+=c,_+=c,A++)i.data[p]=(t.data[g++]-d[0])*u[0],i.data[m]=(t.data[y++]-d[1])*u[1],i.data[x]=(t.data[T++]-d[2])*u[2],i.data[_]=E===-1?255:(t.data[E++]-d[3])*u[3]}else throw new Error("Can not access image data");return i}}),Wa,Z0,j0,J0,Q0,ev,l3=pe(()=>{"use strict";rc(),Wa=(t,e)=>{if(t===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:i}=e,r=e.norm??{mean:255,bias:0},s,a;typeof r.mean=="number"?s=[r.mean,r.mean,r.mean,r.mean]:s=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?a=[r.bias,r.bias,r.bias,r.bias]:a=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let o=e.format!==void 0?e.format:"RGBA",l=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",u=n*i,d=l==="RGBA"?new Float32Array(u*4):new Float32Array(u*3),h=4,c=0,p=1,m=2,x=3,_=0,g=u,y=u*2,T=-1;o==="RGB"&&(h=3,c=0,p=1,m=2,x=-1),l==="RGBA"?T=u*3:l==="RBG"?(_=0,y=u,g=u*2):l==="BGR"&&(y=0,g=u,_=u*2);for(let E=0;E<u;E++,c+=h,m+=h,p+=h,x+=h)d[_++]=(t[c]+a[0])/s[0],d[g++]=(t[p]+a[1])/s[1],d[y++]=(t[m]+a[2])/s[2],T!==-1&&x!==-1&&(d[T++]=(t[x]+a[3])/s[3]);return l==="RGBA"?new Ln("float32",d,[1,4,n,i]):new Ln("float32",d,[1,3,n,i])},Z0=async(t,e)=>{let n=typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement,i=typeof ImageData<"u"&&t instanceof ImageData,r=typeof ImageBitmap<"u"&&t instanceof ImageBitmap,s=typeof t=="string",a,o=e??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},u=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=l();d.width=t.width,d.height=t.height;let h=u(d);if(h!=null){let c=t.height,p=t.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(c=e.resizedHeight,p=e.resizedWidth),e!==void 0){if(o=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=c,o.width=p}else o.tensorFormat="RGBA",o.height=c,o.width=p;h.drawImage(t,0,0),a=h.getImageData(0,0,p,c).data}else throw new Error("Can not access image data")}else if(i){let d,h;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(d=e.resizedHeight,h=e.resizedWidth):(d=t.height,h=t.width),e!==void 0&&(o=e),o.format="RGBA",o.height=d,o.width=h,e!==void 0){let c=l();c.width=h,c.height=d;let p=u(c);if(p!=null)p.putImageData(t,0,0),a=p.getImageData(0,0,h,d).data;else throw new Error("Can not access image data")}else a=t.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=l();d.width=t.width,d.height=t.height;let h=u(d);if(h!=null){let c=t.height,p=t.width;return h.drawImage(t,0,0,p,c),a=h.getImageData(0,0,p,c).data,o.height=c,o.width=p,Wa(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((d,h)=>{let c=l(),p=u(c);if(!t||!p)return h();let m=new Image;m.crossOrigin="Anonymous",m.src=t,m.onload=()=>{c.width=m.width,c.height=m.height,p.drawImage(m,0,0,c.width,c.height);let x=p.getImageData(0,0,c.width,c.height);o.height=c.height,o.width=c.width,d(Wa(x.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Wa(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},j0=(t,e)=>{let{width:n,height:i,download:r,dispose:s}=e,a=[1,i,n,4];return new Ln({location:"texture",type:"float32",texture:t,dims:a,download:r,dispose:s})},J0=(t,e)=>{let{dataType:n,dims:i,download:r,dispose:s}=e;return new Ln({location:"gpu-buffer",type:n??"float32",gpuBuffer:t,dims:i,download:r,dispose:s})},Q0=(t,e)=>{let{dataType:n,dims:i,download:r,dispose:s}=e;return new Ln({location:"ml-tensor",type:n??"float32",mlTensor:t,dims:i,download:r,dispose:s})},ev=(t,e,n)=>new Ln({location:"cpu-pinned",type:t,data:e,dims:n??[e.length]})}),wr,Ks,Ul,tv,u3=pe(()=>{"use strict";wr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ks=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ul=!1,tv=()=>{if(!Ul){Ul=!0;let t=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,i=typeof n<"u"&&n.from;t&&(wr.set("int64",BigInt64Array),Ks.set(BigInt64Array,"int64")),e&&(wr.set("uint64",BigUint64Array),Ks.set(BigUint64Array,"uint64")),i?(wr.set("float16",n),Ks.set(n,"float16")):wr.set("float16",Uint16Array)}}}),nv,iv,d3=pe(()=>{"use strict";rc(),nv=t=>{let e=1;for(let n=0;n<t.length;n++){let i=t[n];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${n}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${i}`);e*=i}return e},iv=(t,e)=>{switch(t.location){case"cpu":return new Ln(t.type,t.data,e);case"cpu-pinned":return new Ln({location:"cpu-pinned",data:t.data,type:t.type,dims:e});case"texture":return new Ln({location:"texture",texture:t.texture,type:t.type,dims:e});case"gpu-buffer":return new Ln({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:e});case"ml-tensor":return new Ln({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),Ln,rc=pe(()=>{"use strict";o3(),l3(),u3(),d3(),Ln=class{constructor(t,e,n){tv();let i,r;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,i=t.type,r=t.dims,t.location){case"cpu-pinned":{let a=wr.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(t.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=t.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof t=="string")if(i=t,o=n,t==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");a=e}else{let l=wr.get(t);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(e)){if(t==="float16"&&l===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${l.name} as data.`);t==="uint64"||t==="int64"?a=l.from(e,BigInt):a=l.from(e)}else if(e instanceof l)a=e;else if(e instanceof Uint8ClampedArray)if(t==="uint8")a=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&e instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=e,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof t[0];if(l==="string")i="string",a=t;else if(l==="boolean")i="bool",a=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(t instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(t);else{let l=Ks.get(t.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);i=l,a=t}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");r=o,this.cpuData=a,this.dataLocation="cpu"}let s=nv(r);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=r,this.size=s}static async fromImage(t,e){return Z0(t,e)}static fromTexture(t,e){return j0(t,e)}static fromGpuBuffer(t,e){return J0(t,e)}static fromMLTensor(t,e){return Q0(t,e)}static fromPinnedBuffer(t,e,n){return ev(t,e,n)}toDataURL(t){return K0(this,t)}toImageData(t){return Y0(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,t&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return iv(this,t)}}}),ai,rv=pe(()=>{"use strict";rc(),ai=Ln}),sv,c3=pe(()=>{"use strict";tc(),q0(),rv(),nc(),sv=class av{constructor(e,n){this.handler=e,this.backend=n}async run(e,n,i){Vn(),Er("InferenceSession.run");let r={},s={};if(typeof e!="object"||e===null||e instanceof ai||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof ai)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);r[d]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof ai)&&(d=!0,a=!1,r[c]=p)}if(d){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof e[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)r[d]=null;let o;if(s.activeLoraAdapters!==void 0){if(!Array.isArray(s.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");o=s.activeLoraAdapters.map(d=>{if(!(d instanceof ic))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(d.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return d.handler})}let l=await this.handler.run(e,r,s,o),u={};for(let d in l)if(Object.hasOwnProperty.call(l,d)){let h=l[d];h instanceof ai?u[d]=h:u[d]=new ai(h.type,h.data,h.dims)}return Tr("InferenceSession.run"),On(),u}async release(){return this.handler.dispose()}static async create(e,n,i,r){Vn(),Er("InferenceSession.create");let s,a={};if(typeof e=="string"){if(s=e,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(s=e,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let d=e,h=0,c=e.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(c=e.byteLength-h,typeof i=="number"){if(c=i,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||h+c>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-h}].`);if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(d,h,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await G0(a),u=await o.createInferenceSessionHandler(s,l);return Tr("InferenceSession.create"),On(),new av(u,o)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),sc,h3=pe(()=>{"use strict";c3(),sc=sv}),ov,f3=pe(()=>{"use strict";q0(),ov=ic}),p3=pe(()=>{"use strict"}),m3=pe(()=>{"use strict"}),g3=pe(()=>{"use strict"}),_3=pe(()=>{"use strict"}),v3={};vs(v3,{InferenceSession:()=>sc,LoraAdapter:()=>ov,TRACE:()=>Eo,TRACE_EVENT_BEGIN:()=>Er,TRACE_EVENT_END:()=>Tr,TRACE_FUNC_BEGIN:()=>Vn,TRACE_FUNC_END:()=>On,Tensor:()=>ai,env:()=>Ft,registerBackend:()=>es});var Fn=pe(()=>{"use strict";r3(),a3(),h3(),f3(),rv(),p3(),m3(),nc(),g3(),_3()}),ac=pe(()=>{"use strict"}),lv={};vs(lv,{default:()=>uv});var Ol,kl,uv,y3=pe(()=>{"use strict";var t;vb(),Lr(),oc(),Ol="ort-wasm-proxy-worker",kl=((t=globalThis.self)==null?void 0:t.name)===Ol,kl&&(self.onmessage=e=>{let{type:n,in:i}=e.data;try{switch(n){case"init-wasm":lc(i.wasm).then(()=>{Ec(i).then(()=>{postMessage({type:n})},r=>{postMessage({type:n,err:r})})},r=>{postMessage({type:n,err:r})});break;case"init-ep":{let{epName:r,env:s}=i;Tc(s,r).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:r}=i,s=Po(r);postMessage({type:n,out:s});break}case"create":{let{model:r,options:s}=i;Ac(r,s).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":Rc(i),postMessage({type:n});break;case"run":{let{sessionId:r,inputIndices:s,inputs:a,outputIndices:o,options:l}=i;Cc(r,s,a,o,new Array(o.length).fill(null),l).then(u=>{u.some(d=>d[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:u},Dc([...a,...u]))},u=>{postMessage({type:n,err:u})});break}case"end-profiling":Ic(i),postMessage({type:n});break;default:}}catch(r){postMessage({type:n,err:r})}}),uv=kl?null:e=>new Worker(e??$n,{type:"module",name:Ol})}),dv={};vs(dv,{default:()=>cv});async function dp(t={}){var sf,af;var e=t,n=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,r=i&&((sf=self.name)==null?void 0:sf.startsWith("em-pthread"));e.mountExternalData=(f,v)=>{f.startsWith("./")&&(f=f.substring(2)),(e.jd||(e.jd=new Map)).set(f,v)},e.unmountExternalData=()=>{delete e.jd,delete e.ke,delete e.je,delete e.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=f=>async(...v)=>{var M;try{if(e.hd)throw Error("Session already started");let S=e.hd={Vd:v[0],errors:[]},P=await f(...v);if(e.hd!==S)throw Error("Session mismatch");(M=e.pd)==null||M.flush();let U=S.errors;if(0<U.length){let K=await Promise.all(U);if(K=K.filter(se=>se),0<K.length)throw Error(K.join(`
`))}return P}finally{e.hd=null}};e.jsepInit=(f,v)=>{if(f==="webgpu"){[e.pd,e.Ld,e.Pd,e.rd,e.Od,e.ic,e.Qd,e.Sd,e.Md,e.Nd,e.Rd]=v;let M=e.pd;e.jsepRegisterBuffer=(S,P,U,K)=>M.registerBuffer(S,P,U,K),e.jsepGetBuffer=S=>M.getBuffer(S),e.jsepCreateDownloader=(S,P,U)=>M.createDownloader(S,P,U),e.jsepOnCreateSession=S=>{M.onCreateSession(S)},e.jsepOnReleaseSession=S=>{M.onReleaseSession(S)},e.jsepOnRunStart=S=>M.onRunStart(S),e.Td=(S,P)=>{M.upload(S,P)}}else if(f==="webnn"){let M=v[0];[e.ce,e.Cd,e.webnnEnsureTensor,e.Dd,e.webnnDownloadTensor,e.be,e.webnnEnableTraceEvent]=v.slice(1),e.webnnReleaseTensorId=e.Cd,e.webnnUploadTensor=e.Dd,e.webnnRegisterMLContext=e.be,e.webnnOnRunStart=S=>M.onRunStart(S),e.webnnOnRunEnd=M.onRunEnd.bind(M),e.webnnOnReleaseSession=S=>{M.onReleaseSession(S)},e.webnnCreateMLTensorDownloader=(S,P)=>M.createMLTensorDownloader(S,P),e.webnnRegisterMLTensor=(S,P,U,K)=>M.registerMLTensor(S,P,U,K),e.webnnCreateMLContext=S=>M.createMLContext(S),e.webnnRegisterGraphInput=M.registerGraphInput.bind(M),e.webnnIsGraphInput=M.isGraphInput.bind(M),e.webnnRegisterGraphOutput=M.registerGraphOutput.bind(M),e.webnnIsGraphOutput=M.isGraphOutput.bind(M),e.webnnCreateTemporaryTensor=M.createTemporaryTensor.bind(M),e.webnnIsGraphInputOutputTypeSupported=M.isGraphInputOutputTypeSupported.bind(M)}};let a=()=>{let f=v=>(...M)=>{let S=di;return M=v(...M),di!=S?new Promise((P,U)=>{Ho={resolve:P,reject:U}}):M};(v=>{for(let M of v)e[M]=f(e[M])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),s!==void 0&&(e._OrtRun=s(e._OrtRun),e._OrtRunWithBinding=s(e._OrtRunWithBinding)),a=void 0};e.asyncInit=()=>{a==null||a()};var o,l,u=(f,v)=>{throw v},d=import.meta.url,h="";if(n||i){try{h=new URL(".",d).href}catch{}i&&(l=f=>{var v=new XMLHttpRequest;return v.open("GET",f,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),o=async f=>{if(w(f))return new Promise((M,S)=>{var P=new XMLHttpRequest;P.open("GET",f,!0),P.responseType="arraybuffer",P.onload=()=>{P.status==200||P.status==0&&P.response?M(P.response):S(P.status)},P.onerror=S,P.send(null)});var v=await fetch(f,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw Error(v.status+" : "+v.url)}}var c,p,m,x,_,g,y=console.log.bind(console),T=console.error.bind(console),E=y,A=T,R=!1,w=f=>f.startsWith("file://");function b(){Et.buffer!=$.buffer&&le()}if(r){let f=function(v){try{var M=v.data,S=M.bd;if(S==="load"){let P=[];self.onmessage=U=>P.push(U),g=()=>{postMessage({bd:"loaded"});for(let U of P)f(U);self.onmessage=f};for(let U of M.Hd)e[U]&&!e[U].proxy||(e[U]=(...K)=>{postMessage({bd:"callHandler",Fd:U,args:K})},U=="print"&&(E=e[U]),U=="printErr"&&(A=e[U]));Et=M.Zd,le(),p=M.$d,_e(),va()}else if(S==="run"){(function(P){var U=(b(),H)[P+52>>>2>>>0];P=(b(),H)[P+56>>>2>>>0],hh(U,U-P),at(U)})(M.ad),Ko(M.ad,0,0,1,0,0),vn(),jt(M.ad),N||(ah(),N=!0);try{kt(M.Xd,M.nd)}catch(P){if(P!="unwind")throw P}}else M.target!=="setimmediate"&&(S==="checkMailbox"?N&&Ai():S&&(A(`worker: received unknown command ${S}`),A(M)))}catch(P){throw oh(),P}};var N=!1;self.onunhandledrejection=v=>{throw v.reason||v},self.onmessage=f}var $,O,B,V,D,H,Y,W,ne,q,ie,k=!1;function le(){var f=Et.buffer;e.HEAP8=$=new Int8Array(f),B=new Int16Array(f),e.HEAPU8=O=new Uint8Array(f),V=new Uint16Array(f),e.HEAP32=D=new Int32Array(f),e.HEAPU32=H=new Uint32Array(f),Y=new Float32Array(f),W=new Float64Array(f),ne=new BigInt64Array(f),q=new BigUint64Array(f)}function he(){k=!0,r?g():Ri.vb()}function z(f){throw A(f="Aborted("+f+")"),R=!0,f=new WebAssembly.RuntimeError(f+". Build with -sASSERTIONS for more info."),_==null||_(f),f}function fe(){return{a:{na:Aw,jb:Tw,g:Ke,G:L,f:Se,o:Ae,h:oe,$:ue,b:Me,S:F,Ja:re,n:Ee,aa:ge,_a:qe,Fa:rt,Ha:Ie,$a:Tt,Ya:Yt,Ra:Wn,Xa:ys,la:Ur,Ga:ca,Da:xs,Za:bs,Ea:li,eb:ws,ga:zo,ya:ha,wa:te,fa:Q,N:Re,I:Ue,xa:Ge,_:on,za:ke,Ua:hn,Ba:ui,Ka:vt,ua:Qt,ha:In,Ta:jt,bb:Bt,Q:Gb,r:Xb,c:Ms,kb:Kb,y:Yb,M:Zb,D:jb,m:Jb,s:Gc,lb:Qb,J:ew,R:tw,j:nw,u:iw,q:rw,k:sw,Oa:aw,Pa:ow,Qa:lw,Ma:qc,Na:Xc,va:Kc,gb:dw,db:hw,v:fw,ba:pw,ia:mw,cb:cw,V:gw,ab:_w,Ca:vw,F:uw,U:yw,ma:ga,Aa:bw,ib:xw,hb:ww,Va:Jc,Wa:Qc,Ia:Nt,T:eh,La:th,ka:nh,Sa:ih,ja:rh,nb:cS,oa:aS,ob:dS,pa:sS,H:Kw,e:Dw,t:Cw,w:Rw,B:Gw,pb:nS,Z:tS,x:Nw,qa:iS,X:oS,ca:eS,qb:Qw,ea:$w,O:Hw,sb:Zw,ra:Jw,tb:Yw,L:qw,Y:rS,d:Iw,A:Lw,l:Pw,mb:hS,p:Ow,z:kw,C:Uw,E:Fw,K:Vw,sa:Xw,P:lS,da:Ww,W:uS,ub:zw,ta:Bw,rb:jw,i:Mw,a:Et,fb:dt}}}async function _e(){function f(S,P){var U=Ri=S.exports;S={};for(let[K,se]of Object.entries(U))typeof se=="function"?(U=Xn(se),S[K]=U):S[K]=se;return Ri=S,Ri=(function(){var K=Ri,se=$e=>st=>$e(st)>>>0,be=$e=>()=>$e()>>>0;return(K=Object.assign({},K)).wb=se(K.wb),K.ec=be(K.ec),K.gc=se(K.gc),K.uc=se(K.uc),K.vc=be(K.vc),K.zc=se(K.zc),K})(),Kt.push(Ri.hc),sh=(S=Ri).wb,ah=S.xb,e._OrtInit=S.yb,e._OrtGetLastError=S.zb,e._OrtCreateSessionOptions=S.Ab,e._OrtAppendExecutionProvider=S.Bb,e._OrtGetEpDevices=S.Cb,e._OrtEpDevice_EpName=S.Db,e._OrtAppendExecutionProviderV2=S.Eb,e._OrtAddFreeDimensionOverride=S.Fb,e._OrtAddSessionConfigEntry=S.Gb,e._OrtReleaseSessionOptions=S.Hb,e._OrtCreateSession=S.Ib,e._OrtReleaseSession=S.Jb,e._OrtGetInputOutputCount=S.Kb,e._OrtGetInputOutputMetadata=S.Lb,e._OrtFree=S.Mb,e._OrtCreateTensor=S.Nb,e._OrtGetTensorData=S.Ob,e._OrtReleaseTensor=S.Pb,e._OrtCreateLoraAdapter=S.Qb,e._OrtReleaseLoraAdapter=S.Rb,e._OrtCreateRunOptions=S.Sb,e._OrtAddRunConfigEntry=S.Tb,e._OrtRunOptionsAddActiveLoraAdapter=S.Ub,e._OrtReleaseRunOptions=S.Vb,e._OrtCreateBinding=S.Wb,e._OrtBindInput=S.Xb,e._OrtBindOutput=S.Yb,e._OrtClearBoundOutputs=S.Zb,e._OrtReleaseBinding=S._b,e._OrtRunWithBinding=S.$b,e._OrtRun=S.ac,e._OrtEndProfiling=S.bc,e._JsepOutput=S.cc,e._JsepGetNodeName=S.dc,_a=S.ec,ci=e._free=S.fc,Ts=e._malloc=S.gc,Ko=S.jc,oh=S.kc,lh=S.lc,uh=S.mc,Yo=S.nc,dh=S.oc,ch=S.pc,ut=S.qc,As=S.rc,hh=S.sc,at=S.tc,Zo=S.uc,ot=S.vc,fh=S.wc,jo=S.xc,ph=S.yc,mh=S.zc,gh=S.Ac,Jo=S.Bc,_h=S.Cc,vh=S.Dc,yh=S.Ec,xh=S.Fc,bh=S.Gc,wh=S.Hc,Sh=S.Ic,Mh=S.Jc,Eh=S.Kc,Th=S.Lc,Ah=S.Mc,Rh=S.Nc,Ch=S.Oc,Ih=S.Pc,Dh=S.Qc,Ph=S.Rc,$h=S.Sc,Lh=S.Tc,Nh=S.Uc,Uh=S.Vc,Oh=S.Wc,kh=S.Xc,Fh=S.Yc,Bh=S._c,zh=S.$c,Gh=S.kd,Hh=S.ld,Vh=S.qd,Wh=S.vd,qh=S.wd,Xh=S.xd,Kh=S.yd,Yh=S.zd,Zh=S.Ad,jh=S.Bd,Jh=S.Gd,Qh=S.Jd,ef=S.fe,tf=S.ge,nf=S.he,rf=S.ie,p=P,Ri}var v,M=fe();return e.instantiateWasm?new Promise(S=>{e.instantiateWasm(M,(P,U)=>{S(f(P,U))})}):r?f(new WebAssembly.Instance(p,fe()),p):(ie??(ie=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href),v=await(async function(S){var P=ie;if(!c&&!w(P))try{var U=fetch(P,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(U,S)}catch(K){A(`wasm streaming compile failed: ${K}`),A("falling back to ArrayBuffer instantiation")}return(async function(K,se){try{var be=await(async function($e){if(!c)try{var st=await o($e);return new Uint8Array(st)}catch{}if($e==ie&&c)$e=new Uint8Array(c);else{if(!l)throw"both async and sync fetching of the wasm failed";$e=l($e)}return $e})(K);return await WebAssembly.instantiate(be,se)}catch($e){A(`failed to asynchronously prepare wasm: ${$e}`),z($e)}})(P,S)})(M),f(v.instance,v.module))}class Ce{constructor(v){of(this,"name","ExitStatus");this.message=`Program terminated with exit(${v})`,this.status=v}}var xe=f=>{f.terminate(),f.onmessage=()=>{}},He=[],Lt=0,We=null,lt=f=>{St.length==0&&(yn(),X(St[0]));var v=St.pop();if(!v)return 6;an.push(v),Zt[f.ad]=v,v.ad=f.ad;var M={bd:"run",Xd:f.Wd,nd:f.nd,ad:f.ad};return v.postMessage(M,f.ud),0},et=0,Le=(f,v,...M)=>{var S,P=16*M.length,U=ot(),K=Zo(P),se=K>>>3;for(S of M)typeof S=="bigint"?((b(),ne)[se++>>>0]=1n,(b(),ne)[se++>>>0]=S):((b(),ne)[se++>>>0]=0n,(b(),W)[se++>>>0]=S);return f=lh(f,0,P,K,v),at(U),f};function dt(f){if(r)return Le(0,1,f);if(m=f,!(0<et)){for(var v of an)xe(v);for(v of St)xe(v);St=[],an=[],Zt={},R=!0}u(0,new Ce(f))}function it(f){if(r)return Le(1,0,f);Nt(f)}var Nt=f=>{if(m=f,r)throw it(f),"unwind";dt(f)},St=[],an=[],Kt=[],Zt={},_n=f=>{var v=f.ad;delete Zt[v],St.push(f),an.splice(an.indexOf(f),1),f.ad=0,uh(v)};function vn(){Kt.forEach(f=>f())}var X=f=>new Promise(v=>{f.onmessage=P=>{var U=P.data;if(P=U.bd,U.md&&U.md!=_a()){var K=Zt[U.md];K?K.postMessage(U,U.ud):A(`Internal error! Worker sent a message "${P}" to target pthread ${U.md}, but that thread no longer exists!`)}else P==="checkMailbox"?Ai():P==="spawnThread"?lt(U):P==="cleanupThread"?gt(()=>{_n(Zt[U.Yd])}):P==="loaded"?(f.loaded=!0,v(f)):U.target==="setimmediate"?f.postMessage(U):P==="uncaughtException"?f.onerror(U.error):P==="callHandler"?e[U.Fd](...U.args):P&&A(`worker sent an unknown command ${P}`)},f.onerror=P=>{throw A(`worker sent an error! ${P.filename}:${P.lineno}: ${P.message}`),P};var M,S=[];for(M of[])e.propertyIsEnumerable(M)&&S.push(M);f.postMessage({bd:"load",Hd:S,Zd:Et,$d:p})});function yn(){var f=new Worker((()=>{let v=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new v("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});St.push(f)}var Et,kt=(f,v)=>{et=0,f=Jo(f,v),0<et?m=f:Yo(f)},Te=[],zt=0;function Ke(f){var v=new me(f>>>=0);return(b(),$)[v.cd+12>>>0]==0&&(C(v,!0),zt--),J(v,!1),Te.push(v),mh(f)}var Ye=0,L=()=>{ut(0,0);var f=Te.pop();fh(f.od),Ye=0};function C(f,v){v=v?1:0,(b(),$)[f.cd+12>>>0]=v}function J(f,v){v=v?1:0,(b(),$)[f.cd+13>>>0]=v}class me{constructor(v){this.od=v,this.cd=v-24}}var ce=f=>{var v=Ye;if(!v)return As(0),0;var M=new me(v);(b(),H)[M.cd+16>>>2>>>0]=v;var S=(b(),H)[M.cd+4>>>2>>>0];if(!S)return As(0),v;for(var P of f){if(P===0||P===S)break;if(ph(P,S,M.cd+16))return As(P),v}return As(S),v};function Se(){return ce([])}function Ae(f){return ce([f>>>0])}function oe(f,v,M,S){return ce([f>>>0,v>>>0,M>>>0,S>>>0])}var ue=()=>{var f=Te.pop();f||z("no exception to throw");var v=f.od;throw(b(),$)[f.cd+13>>>0]==0&&(Te.push(f),J(f,!0),C(f,!1),zt++),jo(v),Ye=v};function Me(f,v,M){var S=new me(f>>>=0);throw v>>>=0,M>>>=0,(b(),H)[S.cd+16>>>2>>>0]=0,(b(),H)[S.cd+4>>>2>>>0]=v,(b(),H)[S.cd+8>>>2>>>0]=M,jo(f),zt++,Ye=f}var F=()=>zt;function de(f,v,M,S){return r?Le(2,1,f,v,M,S):re(f,v,M,S)}function re(f,v,M,S){if(f>>>=0,v>>>=0,M>>>=0,S>>>=0,!globalThis.SharedArrayBuffer)return 6;var P=[];return r&&P.length===0?de(f,v,M,S):(f={Wd:M,ad:f,nd:S,ud:P},r?(f.bd="spawnThread",postMessage(f,P),0):lt(f))}function Ee(f){throw Ye||(Ye=f>>>0),Ye}var ve=globalThis.TextDecoder&&new TextDecoder,we=(f,v,M,S)=>{if(M=v+M,S)return M;for(;f[v]&&!(v>=M);)++v;return v},Ve=(f,v=0,M,S)=>{if(16<(M=we(f,v>>>=0,M,S))-v&&f.buffer&&ve)return ve.decode(f.buffer instanceof ArrayBuffer?f.subarray(v,M):f.slice(v,M));for(S="";v<M;){var P=f[v++];if(128&P){var U=63&f[v++];if((224&P)==192)S+=String.fromCharCode((31&P)<<6|U);else{var K=63&f[v++];65536>(P=(240&P)==224?(15&P)<<12|U<<6|K:(7&P)<<18|U<<12|K<<6|63&f[v++])?S+=String.fromCharCode(P):(P-=65536,S+=String.fromCharCode(55296|P>>10,56320|1023&P))}}else S+=String.fromCharCode(P)}return S},ze=(f,v,M)=>(f>>>=0)?Ve((b(),O),f,v,M):"";function ge(f,v,M){return r?Le(3,1,f,v,M):0}function qe(f,v){if(r)return Le(4,1,f,v)}function rt(f,v){if(r)return Le(5,1,f,v)}function Ie(f,v,M){if(r)return Le(6,1,f,v,M)}function Tt(f,v,M){return r?Le(7,1,f,v,M):0}function Yt(f,v){if(r)return Le(8,1,f,v)}function Wn(f,v,M){if(r)return Le(9,1,f,v,M)}function ys(f,v,M,S){if(r)return Le(10,1,f,v,M,S)}function Ur(f,v,M,S){if(r)return Le(11,1,f,v,M,S)}function ca(f,v,M,S){if(r)return Le(12,1,f,v,M,S)}function xs(f){if(r)return Le(13,1,f)}function bs(f,v){if(r)return Le(14,1,f,v)}function li(f,v,M){if(r)return Le(15,1,f,v,M)}var ws=()=>z(""),Cn=f=>{f>>>=0;for(var v="";;){var M=(b(),O)[f++>>>0];if(!M)return v;v+=String.fromCharCode(M)}},Or={},Hi={},Mi=class extends Error{constructor(f){super(f),this.name="BindingError"}};function Bn(f,v,M={}){return(function(S,P,U={}){var K=P.name;if(!S)throw new Mi(`type "${K}" must have a positive integer typeid pointer`);if(Hi.hasOwnProperty(S)){if(U.Id)return;throw new Mi(`Cannot register type '${K}' twice`)}Hi[S]=P,Or.hasOwnProperty(S)&&(P=Or[S],delete Or[S],P.forEach(se=>se()))})(f,v,M)}var Vi=(f,v,M)=>{switch(v){case 1:return M?S=>(b(),$)[S>>>0]:S=>(b(),O)[S>>>0];case 2:return M?S=>(b(),B)[S>>>1>>>0]:S=>(b(),V)[S>>>1>>>0];case 4:return M?S=>(b(),D)[S>>>2>>>0]:S=>(b(),H)[S>>>2>>>0];case 8:return M?S=>(b(),ne)[S>>>3>>>0]:S=>(b(),q)[S>>>3>>>0];default:throw new TypeError(`invalid integer width (${v}): ${f}`)}};function zo(f,v,M,S,P){f>>>=0,M>>>=0,v=Cn(v>>>0);let U=K=>K;if(S=S===0n){let K=8*M;U=se=>BigInt.asUintN(K,se),P=U(P)}Bn(f,{name:v,Zc:U,ed:(K,se)=>(typeof se=="number"&&(se=BigInt(se)),se),dd:Vi(v,M,!S),gd:null})}function ha(f,v,M,S){Bn(f>>>=0,{name:v=Cn(v>>>0),Zc:function(P){return!!P},ed:function(P,U){return U?M:S},dd:function(P){return this.Zc((b(),O)[P>>>0])},gd:null})}var Ss=[],Ei=[0,1,,1,null,1,!0,1,!1,1];function Ms(f){9<(f>>>=0)&&--Ei[f+1]===0&&(Ei[f]=void 0,Ss.push(f))}var Sn=f=>{if(!f)throw new Mi(`Cannot use deleted val. handle = ${f}`);return Ei[f]},Mn=f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let v=Ss.pop()||Ei.length;return Ei[v]=f,Ei[v+1]=1,v}};function I(f){return this.Zc((b(),H)[f>>>2>>>0])}var G={name:"emscripten::val",Zc:f=>{var v=Sn(f);return Ms(f),v},ed:(f,v)=>Mn(v),dd:I,gd:null};function te(f){return Bn(f>>>0,G)}var j=(f,v)=>{switch(v){case 4:return function(M){return this.Zc((b(),Y)[M>>>2>>>0])};case 8:return function(M){return this.Zc((b(),W)[M>>>3>>>0])};default:throw new TypeError(`invalid float width (${v}): ${f}`)}};function Q(f,v,M){M>>>=0,Bn(f>>>=0,{name:v=Cn(v>>>0),Zc:S=>S,ed:(S,P)=>P,dd:j(v,M),gd:null})}function Re(f,v,M,S,P){f>>>=0,M>>>=0,v=Cn(v>>>0);let U=se=>se;if(S===0){var K=32-8*M;U=se=>se<<K>>>K,P=U(P)}Bn(f,{name:v,Zc:U,ed:(se,be)=>be,dd:Vi(v,M,S!==0),gd:null})}function Ue(f,v,M){function S(U){var K=(b(),H)[U>>>2>>>0];return U=(b(),H)[U+4>>>2>>>0],new P((b(),$).buffer,U,K)}var P=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][v];Bn(f>>>=0,{name:M=Cn(M>>>0),Zc:S,dd:S},{Id:!0})}var ye=(f,v,M)=>{var S=(b(),O);if(v>>>=0,0<M){var P=v;M=v+M-1;for(var U=0;U<f.length;++U){var K=f.codePointAt(U);if(127>=K){if(v>=M)break;S[v++>>>0]=K}else if(2047>=K){if(v+1>=M)break;S[v++>>>0]=192|K>>6,S[v++>>>0]=128|63&K}else if(65535>=K){if(v+2>=M)break;S[v++>>>0]=224|K>>12,S[v++>>>0]=128|K>>6&63,S[v++>>>0]=128|63&K}else{if(v+3>=M)break;S[v++>>>0]=240|K>>18,S[v++>>>0]=128|K>>12&63,S[v++>>>0]=128|K>>6&63,S[v++>>>0]=128|63&K,U++}}S[v>>>0]=0,f=v-P}else f=0;return f},De=f=>{for(var v=0,M=0;M<f.length;++M){var S=f.charCodeAt(M);127>=S?v++:2047>=S?v+=2:55296<=S&&57343>=S?(v+=4,++M):v+=3}return v};function Ge(f,v){Bn(f>>>=0,{name:v=Cn(v>>>0),Zc(M){var S=(b(),H)[M>>>2>>>0];return S=ze(M+4,S,!0),ci(M),S},ed(M,S){S instanceof ArrayBuffer&&(S=new Uint8Array(S));var P=typeof S=="string";if(!(P||ArrayBuffer.isView(S)&&S.BYTES_PER_ELEMENT==1))throw new Mi("Cannot pass non-string to std::string");var U=P?De(S):S.length,K=Ts(4+U+1),se=K+4;return(b(),H)[K>>>2>>>0]=U,P?ye(S,se,U+1):(b(),O).set(S,se>>>0),M!==null&&M.push(ci,K),K},dd:I,gd(M){ci(M)}})}var Je=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,ht=(f,v,M)=>{if(f>>>=1,16<(v=we((b(),V),f,v/2,M))-f&&Je)return Je.decode((b(),V).slice(f,v));for(M="";f<v;++f){var S=(b(),V)[f>>>0];M+=String.fromCharCode(S)}return M},Oe=(f,v,M)=>{if(M??(M=2147483647),2>M)return 0;var S=v;M=(M-=2)<2*f.length?M/2:f.length;for(var P=0;P<M;++P){var U=f.charCodeAt(P);(b(),B)[v>>>1>>>0]=U,v+=2}return(b(),B)[v>>>1>>>0]=0,v-S},ft=f=>2*f.length,Xt=(f,v,M)=>{var S="";f>>>=2;for(var P=0;!(P>=v/4);P++){var U=(b(),H)[f+P>>>0];if(!U&&!M)break;S+=String.fromCodePoint(U)}return S},Ut=(f,v,M)=>{if(v>>>=0,M??(M=2147483647),4>M)return 0;var S=v;M=S+M-4;for(var P=0;P<f.length;++P){var U=f.codePointAt(P);if(65535<U&&P++,(b(),D)[v>>>2>>>0]=U,(v+=4)+4>M)break}return(b(),D)[v>>>2>>>0]=0,v-S},Dt=f=>{for(var v=0,M=0;M<f.length;++M)65535<f.codePointAt(M)&&M++,v+=4;return v};function on(f,v,M){if(f>>>=0,v>>>=0,M=Cn(M>>>=0),v===2)var S=ht,P=Oe,U=ft;else S=Xt,P=Ut,U=Dt;Bn(f,{name:M,Zc:K=>{var se=(b(),H)[K>>>2>>>0];return se=S(K+4,se*v,!0),ci(K),se},ed:(K,se)=>{if(typeof se!="string")throw new Mi(`Cannot pass non-string to C++ string type ${M}`);var be=U(se),$e=Ts(4+be+v);return(b(),H)[$e>>>2>>>0]=be/v,P(se,$e+4,be+v),K!==null&&K.push(ci,$e),$e},dd:I,gd(K){ci(K)}})}function ke(f,v){Bn(f>>>=0,{Kd:!0,name:v=Cn(v>>>0),Zc:()=>{},ed:()=>{}})}function hn(f){Ko(f>>>0,!i,1,!n,131072,!1),vn()}var gt=f=>{if(!R)try{if(f(),!(0<et))try{r?_a()&&Yo(m):Nt(m)}catch(v){v instanceof Ce||v=="unwind"||u(0,v)}}catch(v){v instanceof Ce||v=="unwind"||u(0,v)}},Ti=!Atomics.waitAsync||((af=globalThis.navigator)==null?void 0:af.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function jt(f){f>>>=0,Ti||(Atomics.waitAsync((b(),D),f>>>2,f).value.then(Ai),f+=128,Atomics.store((b(),D),f>>>2,1))}var Ai=()=>gt(()=>{var f=_a();f&&(jt(f),ch())});function ui(f,v){(f>>>=0)==v>>>0?setTimeout(Ai):r?postMessage({md:f,bd:"checkMailbox"}):(f=Zt[f])&&f.postMessage({bd:"checkMailbox"})}var qn=[];function vt(f,v,M,S,P){for(v>>>=0,P>>>=0,qn.length=0,M=P>>>3,S=P+S>>>3;M<S;){var U;U=(b(),ne)[M++>>>0]?(b(),ne)[M++>>>0]:(b(),W)[M++>>>0],qn.push(U)}return(v?Qo[v]:Ew[f])(...qn)}var Qt=()=>{et=0};function In(f){f>>>=0,r?postMessage({bd:"cleanupThread",Yd:f}):_n(Zt[f])}function Bt(f){}var Wt=f=>{try{f()}catch(v){z(v)}};function Xn(f){var v=(...M)=>{fa.push(f);try{return f(...M)}finally{R||(fa.pop(),di&&Kn===1&&fa.length===0&&(Kn=0,et+=1,Wt(tf),typeof Fibers<"u"&&Fibers.ne()))}};return Bc.set(f,v),v}var Kn=0,di=null,kc=0,fa=[],Go=new Map,Fc=new Map,Bc=new Map,Bb=0,Ho=null,zb=[],zc=f=>(function(v){if(!R){if(Kn===0){var M=!1,S=!1;v((P=0)=>{if(!R&&(kc=P,M=!0,S)){Kn=2,Wt(()=>nf(di)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),P=!1;try{var U=(function(){var be=(b(),D)[di+8>>>2>>>0];return be=Fc.get(be),be=Bc.get(be),--et,be()})()}catch(be){U=be,P=!0}var K=!1;if(!di){var se=Ho;se&&(Ho=null,(P?se.reject:se.resolve)(U),K=!0)}if(P&&!K)throw U}}),S=!0,M||(Kn=1,di=(function(){var P=Ts(65548),U=P+12;if((b(),H)[P>>>2>>>0]=U,(b(),H)[P+4>>>2>>>0]=U+65536,U=fa[0],!Go.has(U)){var K=Bb++;Go.set(U,K),Fc.set(K,U)}return U=Go.get(U),(b(),D)[P+8>>>2>>>0]=U,P})(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),Wt(()=>ef(di)))}else Kn===2?(Kn=0,Wt(rf),ci(di),di=null,zb.forEach(gt)):z(`invalid state: ${Kn}`);return kc}})(v=>{f().then(v)});function Gb(f){return f>>>=0,zc(async()=>{var v=await Sn(f);return Mn(v)})}var Vo=[],Hb=f=>{var v=Vo.length;return Vo.push(f),v},Vb=(f,v)=>{for(var M=Array(f),S=0;S<f;++S){var P=S,U=(b(),H)[v+4*S>>>2>>>0],K=Hi[U];if(K===void 0)throw f=`parameter ${S}`,U=sh(U),v=Cn(U),ci(U),new Mi(`${f} has unknown type ${v}`);M[P]=K}return M},Wb=(f,v,M)=>{var S=[];return f=f(S,M),S.length&&((b(),H)[v>>>2>>>0]=Mn(S)),f},qb={},pa=f=>{var v=qb[f];return v===void 0?Cn(f):v};function Xb(f,v,M){var[S,...P]=Vb(f,v>>>0);v=S.ed.bind(S);var U=P.map(be=>be.dd.bind(be));f--;var K={toValue:Sn};switch(f=U.map((be,$e)=>{var st=`argFromPtr${$e}`;return K[st]=be,`${st}(args${$e?"+"+8*$e:""})`}),M){case 0:var se="toValue(handle)";break;case 2:se="new (toValue(handle))";break;case 3:se="";break;case 1:K.getStringOrSymbol=pa,se="toValue(handle)[getStringOrSymbol(methodName)]"}return se+=`(${f})`,S.Kd||(K.toReturnWire=v,K.emval_returnValue=Wb,se=`return emval_returnValue(toReturnWire, destructorsRef, ${se})`),se=`return function (handle, methodName, destructorsRef, args) {
  ${se}
  }`,M=new Function(Object.keys(K),se)(...Object.values(K)),se=`methodCaller<(${P.map(be=>be.name)}) => ${S.name}>`,Hb(Object.defineProperty(M,"name",{value:se}))}function Kb(f,v){return v>>>=0,(f=Sn(f>>>0))==Sn(v)}function Yb(f){return(f>>>=0)?(f=pa(f),Mn(globalThis[f])):Mn(globalThis)}function Zb(f){return f=pa(f>>>0),Mn(e[f])}function jb(f,v){return v>>>=0,f=Sn(f>>>0),v=Sn(v),Mn(f[v])}function Jb(f){9<(f>>>=0)&&(Ei[f+1]+=1)}function Gc(f,v,M,S,P){return Vo[f>>>0](v>>>0,M>>>0,S>>>0,P>>>0)}function Qb(f,v,M,S,P){return Gc(f>>>0,v>>>0,M>>>0,S>>>0,P>>>0)}function ew(){return Mn([])}function tw(f){f=Sn(f>>>0);for(var v=Array(f.length),M=0;M<f.length;M++)v[M]=f[M];return Mn(v)}function nw(f){return Mn(pa(f>>>0))}function iw(){return Mn({})}function rw(f){for(var v=Sn(f>>>=0);v.length;){var M=v.pop();v.pop()(M)}Ms(f)}function sw(f,v,M){v>>>=0,M>>>=0,f=Sn(f>>>0),v=Sn(v),M=Sn(M),f[v]=M}function aw(f,v){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),v>>>=0,f=new Date(1e3*f),(b(),D)[v>>>2>>>0]=f.getUTCSeconds(),(b(),D)[v+4>>>2>>>0]=f.getUTCMinutes(),(b(),D)[v+8>>>2>>>0]=f.getUTCHours(),(b(),D)[v+12>>>2>>>0]=f.getUTCDate(),(b(),D)[v+16>>>2>>>0]=f.getUTCMonth(),(b(),D)[v+20>>>2>>>0]=f.getUTCFullYear()-1900,(b(),D)[v+24>>>2>>>0]=f.getUTCDay(),f=(f.getTime()-Date.UTC(f.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(b(),D)[v+28>>>2>>>0]=f}var Hc=f=>f%4==0&&(f%100!=0||f%400==0),Vc=[0,31,60,91,121,152,182,213,244,274,305,335],Wc=[0,31,59,90,120,151,181,212,243,273,304,334];function ow(f,v){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),v>>>=0,f=new Date(1e3*f),(b(),D)[v>>>2>>>0]=f.getSeconds(),(b(),D)[v+4>>>2>>>0]=f.getMinutes(),(b(),D)[v+8>>>2>>>0]=f.getHours(),(b(),D)[v+12>>>2>>>0]=f.getDate(),(b(),D)[v+16>>>2>>>0]=f.getMonth(),(b(),D)[v+20>>>2>>>0]=f.getFullYear()-1900,(b(),D)[v+24>>>2>>>0]=f.getDay();var M=(Hc(f.getFullYear())?Vc:Wc)[f.getMonth()]+f.getDate()-1|0;(b(),D)[v+28>>>2>>>0]=M,(b(),D)[v+36>>>2>>>0]=-60*f.getTimezoneOffset(),M=new Date(f.getFullYear(),6,1).getTimezoneOffset();var S=new Date(f.getFullYear(),0,1).getTimezoneOffset();f=0|(M!=S&&f.getTimezoneOffset()==Math.min(S,M)),(b(),D)[v+32>>>2>>>0]=f}function lw(f){f>>>=0;var v=new Date((b(),D)[f+20>>>2>>>0]+1900,(b(),D)[f+16>>>2>>>0],(b(),D)[f+12>>>2>>>0],(b(),D)[f+8>>>2>>>0],(b(),D)[f+4>>>2>>>0],(b(),D)[f>>>2>>>0],0),M=(b(),D)[f+32>>>2>>>0],S=v.getTimezoneOffset(),P=new Date(v.getFullYear(),6,1).getTimezoneOffset(),U=new Date(v.getFullYear(),0,1).getTimezoneOffset(),K=Math.min(U,P);return 0>M?(b(),D)[f+32>>>2>>>0]=+(P!=U&&K==S):0<M!=(K==S)&&(P=Math.max(U,P),v.setTime(v.getTime()+6e4*((0<M?K:P)-S))),(b(),D)[f+24>>>2>>>0]=v.getDay(),M=(Hc(v.getFullYear())?Vc:Wc)[v.getMonth()]+v.getDate()-1|0,(b(),D)[f+28>>>2>>>0]=M,(b(),D)[f>>>2>>>0]=v.getSeconds(),(b(),D)[f+4>>>2>>>0]=v.getMinutes(),(b(),D)[f+8>>>2>>>0]=v.getHours(),(b(),D)[f+12>>>2>>>0]=v.getDate(),(b(),D)[f+16>>>2>>>0]=v.getMonth(),(b(),D)[f+20>>>2>>>0]=v.getYear(),f=v.getTime(),BigInt(isNaN(f)?-1:f/1e3)}function qc(f,v,M,S,P,U,K){return r?Le(16,1,f,v,M,S,P,U,K):-52}function Xc(f,v,M,S,P,U){if(r)return Le(17,1,f,v,M,S,P,U)}var Es={},uw=()=>performance.timeOrigin+performance.now();function Kc(f,v){if(r)return Le(18,1,f,v);if(Es[f]&&(clearTimeout(Es[f].id),delete Es[f]),!v)return 0;var M=setTimeout(()=>{delete Es[f],gt(()=>dh(f,performance.timeOrigin+performance.now()))},v);return Es[f]={id:M,me:v},0}function dw(f,v,M,S){f>>>=0,v>>>=0,M>>>=0,S>>>=0;var P=new Date().getFullYear(),U=new Date(P,0,1).getTimezoneOffset();P=new Date(P,6,1).getTimezoneOffset();var K=Math.max(U,P);(b(),H)[f>>>2>>>0]=60*K,(b(),D)[v>>>2>>>0]=+(U!=P),f=(v=se=>{var be=Math.abs(se);return`UTC${0<=se?"-":"+"}${String(Math.floor(be/60)).padStart(2,"0")}${String(be%60).padStart(2,"0")}`})(U),v=v(P),P<U?(ye(f,M,17),ye(v,S,17)):(ye(f,S,17),ye(v,M,17))}var cw=()=>Date.now();function hw(f,v,M){return M>>>=0,0<=f&&3>=f?(f===0?f=Date.now():f=performance.timeOrigin+performance.now(),f=Math.round(1e6*f),(b(),ne)[M>>>3>>>0]=BigInt(f),0):28}var Wo=[],Yc=(f,v)=>{Wo.length=0;for(var M;M=(b(),O)[f++>>>0];){var S=M!=105;v+=(S&=M!=112)&&v%8?4:0,Wo.push(M==112?(b(),H)[v>>>2>>>0]:M==106?(b(),ne)[v>>>3>>>0]:M==105?(b(),D)[v>>>2>>>0]:(b(),W)[v>>>3>>>0]),v+=S?8:4}return Wo};function fw(f,v,M){return f>>>=0,v=Yc(v>>>0,M>>>0),Qo[f](...v)}function pw(f,v,M){return f>>>=0,v=Yc(v>>>0,M>>>0),Qo[f](...v)}var mw=()=>{};function gw(f,v){return A(ze(f>>>0,v>>>0))}var _w=()=>{throw et+=1,"unwind"};function vw(){return 4294901760}var yw=()=>navigator.hardwareConcurrency,cr={},ma=f=>{var v;return(v=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(f))?+v[1]:(v=/:(\d+):\d+(?:\)|$)/.exec(f))?2147483648|+v[1]:0},Zc=f=>{for(var v of f)(f=ma(v))&&(cr[f]=v)};function xw(){var f=Error().stack.toString().split(`
`);return f[0]=="Error"&&f.shift(),Zc(f),cr.sd=ma(f[3]),cr.Ud=f,cr.sd}function ga(f){if(!(f=cr[f>>>0]))return 0;var v;if(v=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(f))f=v[1];else if(v=/^\s+at (.*) \(.*\)$/.exec(f))f=v[1];else{if(!(v=/^(.+?)@/.exec(f)))return 0;f=v[1]}ci(ga.td??0),v=De(f)+1;var M=Ts(v);return M&&ye(f,M,v),ga.td=M,ga.td}function bw(f){f>>>=0;var v=(b(),O).length;if(f<=v||4294901760<f)return!1;for(var M=1;4>=M;M*=2){var S=v*(1+.2/M);S=Math.min(S,f+100663296);e:{S=(Math.min(4294901760,65536*Math.ceil(Math.max(f,S)/65536))-Et.buffer.byteLength+65535)/65536|0;try{Et.grow(S),le();var P=1;break e}catch{}P=void 0}if(P)return!0}return!1}function ww(f,v,M){if(f>>>=0,v>>>=0,cr.sd==f)var S=cr.Ud;else(S=Error().stack.toString().split(`
`))[0]=="Error"&&S.shift(),Zc(S);for(var P=3;S[P]&&ma(S[P])!=f;)++P;for(f=0;f<M&&S[f+P];++f)(b(),D)[v+4*f>>>2>>>0]=ma(S[f+P]);return f}var qo,Xo={},jc=()=>{var S;if(!qo){var f,v={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((S=globalThis.navigator)==null?void 0:S.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(f in Xo)Xo[f]===void 0?delete v[f]:v[f]=Xo[f];var M=[];for(f in v)M.push(`${f}=${v[f]}`);qo=M}return qo};function Jc(f,v){if(r)return Le(19,1,f,v);f>>>=0,v>>>=0;var M,S=0,P=0;for(M of jc()){var U=v+S;(b(),H)[f+P>>>2>>>0]=U,S+=ye(M,U,1/0)+1,P+=4}return 0}function Qc(f,v){if(r)return Le(20,1,f,v);f>>>=0,v>>>=0;var M=jc();for(var S of((b(),H)[f>>>2>>>0]=M.length,f=0,M))f+=De(S)+1;return(b(),H)[v>>>2>>>0]=f,0}function eh(f){return r?Le(21,1,f):52}function th(f,v,M,S,P){return r?Le(22,1,f,v,M,S,P):52}function nh(f,v,M,S){return r?Le(23,1,f,v,M,S):52}function ih(f,v,M,S){return r?Le(24,1,f,v,M,S):70}var Sw=[null,[],[]];function rh(f,v,M,S){if(r)return Le(25,1,f,v,M,S);v>>>=0,M>>>=0,S>>>=0;for(var P=0,U=0;U<M;U++){var K=(b(),H)[v>>>2>>>0],se=(b(),H)[v+4>>>2>>>0];v+=8;for(var be=0;be<se;be++){var $e=f,st=(b(),O)[K+be>>>0],yt=Sw[$e];st===0||st===10?(($e===1?E:A)(Ve(yt)),yt.length=0):yt.push(st)}P+=se}return(b(),H)[S>>>2>>>0]=P,0}function Mw(f){return f>>>0}r||(function(){for(var f=e.numThreads-1;f--;)yn();He.push(async()=>{var v=(async function(){if(!r)return Promise.all(St.map(X))})();Lt++,await v,--Lt==0&&We&&(v=We,We=null,v())})})(),r||(Et=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),le()),e.wasmBinary&&(c=e.wasmBinary),e.stackSave=()=>ot(),e.stackRestore=f=>at(f),e.stackAlloc=f=>Zo(f),e.setValue=function(f,v,M="i8"){switch(M.endsWith("*")&&(M="*"),M){case"i1":case"i8":(b(),$)[f>>>0]=v;break;case"i16":(b(),B)[f>>>1>>>0]=v;break;case"i32":(b(),D)[f>>>2>>>0]=v;break;case"i64":(b(),ne)[f>>>3>>>0]=BigInt(v);break;case"float":(b(),Y)[f>>>2>>>0]=v;break;case"double":(b(),W)[f>>>3>>>0]=v;break;case"*":(b(),H)[f>>>2>>>0]=v;break;default:z(`invalid type for setValue: ${M}`)}},e.getValue=function(f,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":case"i8":return(b(),$)[f>>>0];case"i16":return(b(),B)[f>>>1>>>0];case"i32":return(b(),D)[f>>>2>>>0];case"i64":return(b(),ne)[f>>>3>>>0];case"float":return(b(),Y)[f>>>2>>>0];case"double":return(b(),W)[f>>>3>>>0];case"*":return(b(),H)[f>>>2>>>0];default:z(`invalid type for getValue: ${v}`)}},e.UTF8ToString=ze,e.stringToUTF8=ye,e.lengthBytesUTF8=De;var sh,ah,_a,ci,Ts,Ko,oh,lh,uh,Yo,dh,ch,ut,As,hh,at,Zo,ot,fh,jo,ph,mh,gh,Jo,_h,vh,yh,xh,bh,wh,Sh,Mh,Eh,Th,Ah,Rh,Ch,Ih,Dh,Ph,$h,Lh,Nh,Uh,Oh,kh,Fh,Bh,zh,Gh,Hh,Vh,Wh,qh,Xh,Kh,Yh,Zh,jh,Jh,Qh,ef,tf,nf,rf,Ri,Ew=[dt,it,de,ge,qe,rt,Ie,Tt,Yt,Wn,ys,Ur,ca,xs,bs,li,qc,Xc,Kc,Jc,Qc,eh,th,nh,ih,rh],Qo={1124124:(f,v,M,S,P)=>{if(e===void 0||!e.jd)return 1;if((f=ze(Number(f>>>0))).startsWith("./")&&(f=f.substring(2)),!(f=e.jd.get(f)))return 2;if(v=Number(v>>>0),M=Number(M>>>0),S=Number(S>>>0),v+M>f.byteLength)return 3;try{let U=f.subarray(v,v+M);switch(P){case 0:(b(),O).set(U,S>>>0);break;case 1:e.ae?e.ae(S,U):e.Td(S,U);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(f,v,M)=>{e.Dd(f,(b(),O).subarray(v>>>0,v+M>>>0))},1125084:()=>e.ce(),1125126:f=>{e.Cd(f)},1125163:()=>{e.Md()},1125194:()=>{e.Nd()},1125223:()=>{e.Rd()},1125248:f=>e.Ld(f),1125281:f=>e.Pd(f),1125313:(f,v,M)=>{e.rd(Number(f),Number(v),Number(M),!0)},1125376:(f,v,M)=>{e.rd(Number(f),Number(v),Number(M))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:f=>{e.ic("Abs",f,void 0)},1125541:f=>{e.ic("Neg",f,void 0)},1125592:f=>{e.ic("Floor",f,void 0)},1125645:f=>{e.ic("Ceil",f,void 0)},1125697:f=>{e.ic("Reciprocal",f,void 0)},1125755:f=>{e.ic("Sqrt",f,void 0)},1125807:f=>{e.ic("Exp",f,void 0)},1125858:f=>{e.ic("Erf",f,void 0)},1125909:f=>{e.ic("Sigmoid",f,void 0)},1125964:(f,v,M)=>{e.ic("HardSigmoid",f,{alpha:v,beta:M})},1126043:f=>{e.ic("HardSwish",f,void 0)},1126100:f=>{e.ic("Log",f,void 0)},1126151:f=>{e.ic("Sin",f,void 0)},1126202:f=>{e.ic("Cos",f,void 0)},1126253:f=>{e.ic("Tan",f,void 0)},1126304:f=>{e.ic("Asin",f,void 0)},1126356:f=>{e.ic("Acos",f,void 0)},1126408:f=>{e.ic("Atan",f,void 0)},1126460:f=>{e.ic("Sinh",f,void 0)},1126512:f=>{e.ic("Cosh",f,void 0)},1126564:f=>{e.ic("Asinh",f,void 0)},1126617:f=>{e.ic("Acosh",f,void 0)},1126670:f=>{e.ic("Atanh",f,void 0)},1126723:f=>{e.ic("Tanh",f,void 0)},1126775:f=>{e.ic("Not",f,void 0)},1126826:(f,v,M)=>{e.ic("Clip",f,{min:v,max:M})},1126895:f=>{e.ic("Clip",f,void 0)},1126947:(f,v)=>{e.ic("Elu",f,{alpha:v})},1127005:f=>{e.ic("Gelu",f,void 0)},1127057:f=>{e.ic("Relu",f,void 0)},1127109:(f,v)=>{e.ic("LeakyRelu",f,{alpha:v})},1127173:(f,v)=>{e.ic("ThresholdedRelu",f,{alpha:v})},1127243:(f,v)=>{e.ic("Cast",f,{to:v})},1127301:f=>{e.ic("Add",f,void 0)},1127352:f=>{e.ic("Sub",f,void 0)},1127403:f=>{e.ic("Mul",f,void 0)},1127454:f=>{e.ic("Div",f,void 0)},1127505:f=>{e.ic("Pow",f,void 0)},1127556:f=>{e.ic("Equal",f,void 0)},1127609:f=>{e.ic("Greater",f,void 0)},1127664:f=>{e.ic("GreaterOrEqual",f,void 0)},1127726:f=>{e.ic("Less",f,void 0)},1127778:f=>{e.ic("LessOrEqual",f,void 0)},1127837:(f,v,M,S,P)=>{e.ic("ReduceMean",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1128012:(f,v,M,S,P)=>{e.ic("ReduceMax",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1128186:(f,v,M,S,P)=>{e.ic("ReduceMin",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1128360:(f,v,M,S,P)=>{e.ic("ReduceProd",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1128535:(f,v,M,S,P)=>{e.ic("ReduceSum",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1128709:(f,v,M,S,P)=>{e.ic("ReduceL1",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1128882:(f,v,M,S,P)=>{e.ic("ReduceL2",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1129055:(f,v,M,S,P)=>{e.ic("ReduceLogSum",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1129232:(f,v,M,S,P)=>{e.ic("ReduceSumSquare",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1129412:(f,v,M,S,P)=>{e.ic("ReduceLogSumExp",f,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1129592:f=>{e.ic("Where",f,void 0)},1129645:(f,v,M)=>{e.ic("Transpose",f,{perm:v?Array.from((b(),D).subarray(Number(v)>>>0,Number(M)>>>0)):[]})},1129769:(f,v,M,S)=>{e.ic("DepthToSpace",f,{blocksize:v,mode:ze(M),format:S?"NHWC":"NCHW"})},1129902:(f,v,M,S)=>{e.ic("DepthToSpace",f,{blocksize:v,mode:ze(M),format:S?"NHWC":"NCHW"})},1130035:(f,v,M,S)=>{e.ic("DFT",f,{axis:v,inverse:M,onesided:S})},1130127:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot,Wi)=>{e.ic("ConvTranspose",f,{format:be?"NHWC":"NCHW",autoPad:v,dilations:[M],group:S,kernelShape:[P],pads:[U,K],strides:[se],wIsConst:()=>!!(b(),$)[$e>>>0],outputPadding:st?Array.from((b(),D).subarray(Number(st)>>>0,Number(yt)>>>0)):[],outputShape:Pt?Array.from((b(),D).subarray(Number(Pt)>>>0,Number(Ot)>>>0)):[],activation:ze(Wi)})},1130560:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot)=>{e.ic("ConvTranspose",f,{format:se?"NHWC":"NCHW",autoPad:v,dilations:Array.from((b(),D).subarray(Number(M)>>>0,(Number(M)>>>0)+2>>>0)),group:S,kernelShape:Array.from((b(),D).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),pads:Array.from((b(),D).subarray(Number(U)>>>0,(Number(U)>>>0)+4>>>0)),strides:Array.from((b(),D).subarray(Number(K)>>>0,(Number(K)>>>0)+2>>>0)),wIsConst:()=>!!(b(),$)[be>>>0],outputPadding:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],outputShape:yt?Array.from((b(),D).subarray(Number(yt)>>>0,Number(Pt)>>>0)):[],activation:ze(Ot)})},1131221:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot,Wi)=>{e.ic("ConvTranspose",f,{format:be?"NHWC":"NCHW",autoPad:v,dilations:[M],group:S,kernelShape:[P],pads:[U,K],strides:[se],wIsConst:()=>!!(b(),$)[$e>>>0],outputPadding:st?Array.from((b(),D).subarray(Number(st)>>>0,Number(yt)>>>0)):[],outputShape:Pt?Array.from((b(),D).subarray(Number(Pt)>>>0,Number(Ot)>>>0)):[],activation:ze(Wi)})},1131654:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot)=>{e.ic("ConvTranspose",f,{format:se?"NHWC":"NCHW",autoPad:v,dilations:Array.from((b(),D).subarray(Number(M)>>>0,(Number(M)>>>0)+2>>>0)),group:S,kernelShape:Array.from((b(),D).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),pads:Array.from((b(),D).subarray(Number(U)>>>0,(Number(U)>>>0)+4>>>0)),strides:Array.from((b(),D).subarray(Number(K)>>>0,(Number(K)>>>0)+2>>>0)),wIsConst:()=>!!(b(),$)[be>>>0],outputPadding:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],outputShape:yt?Array.from((b(),D).subarray(Number(yt)>>>0,Number(Pt)>>>0)):[],activation:ze(Ot)})},1132315:(f,v)=>{e.ic("GlobalAveragePool",f,{format:v?"NHWC":"NCHW"})},1132406:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot)=>{e.ic("AveragePool",f,{format:Ot?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:P,dilations:U?Array.from((b(),D).subarray(Number(U)>>>0,Number(K)>>>0)):[],kernel_shape:se?Array.from((b(),D).subarray(Number(se)>>>0,Number(be)>>>0)):[],pads:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],strides:yt?Array.from((b(),D).subarray(Number(yt)>>>0,Number(Pt)>>>0)):[]})},1132885:(f,v)=>{e.ic("GlobalAveragePool",f,{format:v?"NHWC":"NCHW"})},1132976:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot)=>{e.ic("AveragePool",f,{format:Ot?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:P,dilations:U?Array.from((b(),D).subarray(Number(U)>>>0,Number(K)>>>0)):[],kernel_shape:se?Array.from((b(),D).subarray(Number(se)>>>0,Number(be)>>>0)):[],pads:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],strides:yt?Array.from((b(),D).subarray(Number(yt)>>>0,Number(Pt)>>>0)):[]})},1133455:(f,v)=>{e.ic("GlobalMaxPool",f,{format:v?"NHWC":"NCHW"})},1133542:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot)=>{e.ic("MaxPool",f,{format:Ot?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:P,dilations:U?Array.from((b(),D).subarray(Number(U)>>>0,Number(K)>>>0)):[],kernel_shape:se?Array.from((b(),D).subarray(Number(se)>>>0,Number(be)>>>0)):[],pads:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],strides:yt?Array.from((b(),D).subarray(Number(yt)>>>0,Number(Pt)>>>0)):[]})},1134017:(f,v)=>{e.ic("GlobalMaxPool",f,{format:v?"NHWC":"NCHW"})},1134104:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot)=>{e.ic("MaxPool",f,{format:Ot?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:P,dilations:U?Array.from((b(),D).subarray(Number(U)>>>0,Number(K)>>>0)):[],kernel_shape:se?Array.from((b(),D).subarray(Number(se)>>>0,Number(be)>>>0)):[],pads:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],strides:yt?Array.from((b(),D).subarray(Number(yt)>>>0,Number(Pt)>>>0)):[]})},1134579:(f,v,M,S,P)=>{e.ic("Gemm",f,{alpha:v,beta:M,transA:S,transB:P})},1134683:f=>{e.ic("MatMul",f,void 0)},1134737:(f,v,M,S)=>{e.ic("ArgMax",f,{keepDims:!!v,selectLastIndex:!!M,axis:S})},1134845:(f,v,M,S)=>{e.ic("ArgMin",f,{keepDims:!!v,selectLastIndex:!!M,axis:S})},1134953:(f,v)=>{e.ic("Softmax",f,{axis:v})},1135016:(f,v)=>{e.ic("Concat",f,{axis:v})},1135076:(f,v,M,S,P)=>{e.ic("Split",f,{axis:v,numOutputs:M,splitSizes:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1135232:f=>{e.ic("Expand",f,void 0)},1135286:(f,v)=>{e.ic("Gather",f,{axis:Number(v)})},1135357:(f,v)=>{e.ic("GatherElements",f,{axis:Number(v)})},1135436:(f,v)=>{e.ic("GatherND",f,{batch_dims:Number(v)})},1135515:(f,v,M,S,P,U,K,se,be,$e,st)=>{e.ic("Resize",f,{antialias:v,axes:M?Array.from((b(),D).subarray(Number(M)>>>0,Number(S)>>>0)):[],coordinateTransformMode:ze(P),cubicCoeffA:U,excludeOutside:K,extrapolationValue:se,keepAspectRatioPolicy:ze(be),mode:ze($e),nearestMode:ze(st)})},1135877:(f,v,M,S,P,U,K)=>{e.ic("Slice",f,{starts:v?Array.from((b(),D).subarray(Number(v)>>>0,Number(M)>>>0)):[],ends:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[],axes:U?Array.from((b(),D).subarray(Number(U)>>>0,Number(K)>>>0)):[]})},1136141:f=>{e.ic("Tile",f,void 0)},1136193:(f,v,M)=>{e.ic("InstanceNormalization",f,{epsilon:v,format:M?"NHWC":"NCHW"})},1136307:(f,v,M)=>{e.ic("InstanceNormalization",f,{epsilon:v,format:M?"NHWC":"NCHW"})},1136421:f=>{e.ic("Range",f,void 0)},1136474:(f,v)=>{e.ic("Einsum",f,{equation:ze(v)})},1136555:(f,v,M,S,P)=>{e.ic("Pad",f,{mode:v,value:M,pads:S?Array.from((b(),D).subarray(Number(S)>>>0,Number(P)>>>0)):[]})},1136698:(f,v,M,S,P,U)=>{e.ic("BatchNormalization",f,{epsilon:v,momentum:M,spatial:!!P,trainingMode:!!S,format:U?"NHWC":"NCHW"})},1136867:(f,v,M,S,P,U)=>{e.ic("BatchNormalization",f,{epsilon:v,momentum:M,spatial:!!P,trainingMode:!!S,format:U?"NHWC":"NCHW"})},1137036:(f,v,M)=>{e.ic("CumSum",f,{exclusive:Number(v),reverse:Number(M)})},1137133:(f,v,M)=>{e.ic("DequantizeLinear",f,{axis:v,blockSize:M})},1137223:(f,v,M,S,P)=>{e.ic("GridSample",f,{align_corners:v,mode:ze(M),padding_mode:ze(S),format:P?"NHWC":"NCHW"})},1137393:(f,v,M,S,P)=>{e.ic("GridSample",f,{align_corners:v,mode:ze(M),padding_mode:ze(S),format:P?"NHWC":"NCHW"})},1137563:(f,v)=>{e.ic("ScatterND",f,{reduction:ze(v)})},1137648:(f,v,M,S,P,U,K,se,be)=>{e.ic("Attention",f,{numHeads:v,isUnidirectional:M,maskFilterValue:S,scale:P,doRotary:U,qkvHiddenSizes:K?Array.from((b(),D).subarray(Number(se)>>>0,Number(se)+K>>>0)):[],pastPresentShareBuffer:!!be})},1137920:f=>{e.ic("BiasAdd",f,void 0)},1137975:f=>{e.ic("BiasSplitGelu",f,void 0)},1138036:f=>{e.ic("FastGelu",f,void 0)},1138092:(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot,Wi,el)=>{e.ic("Conv",f,{format:yt?"NHWC":"NCHW",auto_pad:v,dilations:M?Array.from((b(),D).subarray(Number(M)>>>0,Number(S)>>>0)):[],group:P,kernel_shape:U?Array.from((b(),D).subarray(Number(U)>>>0,Number(K)>>>0)):[],pads:se?Array.from((b(),D).subarray(Number(se)>>>0,Number(be)>>>0)):[],strides:$e?Array.from((b(),D).subarray(Number($e)>>>0,Number(st)>>>0)):[],w_is_const:()=>!!(b(),$)[Number(Pt)>>>0],activation:ze(Ot),activation_params:Wi?Array.from((b(),Y).subarray(Number(Wi)>>>0,Number(el)>>>0)):[]})},1138676:f=>{e.ic("Gelu",f,void 0)},1138728:(f,v,M,S,P,U,K,se,be)=>{e.ic("GroupQueryAttention",f,{numHeads:v,kvNumHeads:M,scale:S,softcap:P,doRotary:U,rotaryInterleaved:K,smoothSoftmax:se,localWindowSize:be})},1138945:(f,v,M,S)=>{e.ic("LayerNormalization",f,{axis:v,epsilon:M,simplified:!!S})},1139056:(f,v,M,S)=>{e.ic("LayerNormalization",f,{axis:v,epsilon:M,simplified:!!S})},1139167:(f,v,M,S,P,U)=>{e.ic("MatMulNBits",f,{k:v,n:M,accuracyLevel:S,bits:P,blockSize:U})},1139294:(f,v,M,S,P,U)=>{e.ic("MultiHeadAttention",f,{numHeads:v,isUnidirectional:M,maskFilterValue:S,scale:P,doRotary:U})},1139453:(f,v)=>{e.ic("QuickGelu",f,{alpha:v})},1139517:(f,v,M,S,P)=>{e.ic("RotaryEmbedding",f,{interleaved:!!v,numHeads:M,rotaryEmbeddingDim:S,scale:P})},1139656:(f,v,M)=>{e.ic("SkipLayerNormalization",f,{epsilon:v,simplified:!!M})},1139758:(f,v,M)=>{e.ic("SkipLayerNormalization",f,{epsilon:v,simplified:!!M})},1139860:(f,v,M,S)=>{e.ic("GatherBlockQuantized",f,{gatherAxis:v,quantizeAxis:M,blockSize:S})},1139981:f=>{e.Qd(f)},1140015:(f,v)=>e.Sd(Number(f),Number(v),e.hd.Vd,e.hd.errors)};function Tw(f,v,M){return zc(async()=>{await e.Od(Number(f),Number(v),Number(M))})}function Aw(){return typeof wasmOffsetConverter<"u"}function Rw(f,v,M,S){var P=ot();try{return Eh(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function Cw(f,v,M){var S=ot();try{return Sh(f,v,M)}catch(P){if(at(S),P!==P+0)throw P;ut(1,0)}}function Iw(f){var v=ot();try{bh(f)}catch(M){if(at(v),M!==M+0)throw M;ut(1,0)}}function Dw(f,v){var M=ot();try{return Jo(f,v)}catch(S){if(at(M),S!==S+0)throw S;ut(1,0)}}function Pw(f,v,M){var S=ot();try{gh(f,v,M)}catch(P){if(at(S),P!==P+0)throw P;ut(1,0)}}function $w(f,v,M,S){var P=ot();try{return Ih(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function Lw(f,v){var M=ot();try{Th(f,v)}catch(S){if(at(M),S!==S+0)throw S;ut(1,0)}}function Nw(f,v,M,S,P,U,K){var se=ot();try{return Mh(f,v,M,S,P,U,K)}catch(be){if(at(se),be!==be+0)throw be;ut(1,0)}}function Uw(f,v,M,S,P,U){var K=ot();try{_h(f,v,M,S,P,U)}catch(se){if(at(K),se!==se+0)throw se;ut(1,0)}}function Ow(f,v,M,S){var P=ot();try{yh(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function kw(f,v,M,S,P){var U=ot();try{wh(f,v,M,S,P)}catch(K){if(at(U),K!==K+0)throw K;ut(1,0)}}function Fw(f,v,M,S,P,U,K){var se=ot();try{Rh(f,v,M,S,P,U,K)}catch(be){if(at(se),be!==be+0)throw be;ut(1,0)}}function Bw(f,v,M,S,P,U,K){var se=ot();try{Ch(f,v,M,S,P,U,K)}catch(be){if(at(se),be!==be+0)throw be;ut(1,0)}}function zw(f,v,M,S,P,U,K,se){var be=ot();try{Lh(f,v,M,S,P,U,K,se)}catch($e){if(at(be),$e!==$e+0)throw $e;ut(1,0)}}function Gw(f,v,M,S,P){var U=ot();try{return Ah(f,v,M,S,P)}catch(K){if(at(U),K!==K+0)throw K;ut(1,0)}}function Hw(f,v,M){var S=ot();try{return xh(f,v,M)}catch(P){if(at(S),P!==P+0)throw P;ut(1,0)}}function Vw(f,v,M,S,P,U,K,se){var be=ot();try{Nh(f,v,M,S,P,U,K,se)}catch($e){if(at(be),$e!==$e+0)throw $e;ut(1,0)}}function Ww(f,v,M,S,P,U,K,se,be,$e,st,yt){var Pt=ot();try{Dh(f,v,M,S,P,U,K,se,be,$e,st,yt)}catch(Ot){if(at(Pt),Ot!==Ot+0)throw Ot;ut(1,0)}}function qw(f,v,M){var S=ot();try{return Uh(f,v,M)}catch(P){if(at(S),P!==P+0)throw P;return ut(1,0),0n}}function Xw(f,v,M,S,P,U,K,se,be){var $e=ot();try{vh(f,v,M,S,P,U,K,se,be)}catch(st){if(at($e),st!==st+0)throw st;ut(1,0)}}function Kw(f){var v=ot();try{return Oh(f)}catch(M){if(at(v),M!==M+0)throw M;ut(1,0)}}function Yw(f,v){var M=ot();try{return Jh(f,v)}catch(S){if(at(M),S!==S+0)throw S;return ut(1,0),0n}}function Zw(f,v,M,S){var P=ot();try{return kh(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function jw(f,v,M,S,P,U,K){var se=ot();try{Qh(f,v,M,S,P,U,K)}catch(be){if(at(se),be!==be+0)throw be;ut(1,0)}}function Jw(f){var v=ot();try{return Fh(f)}catch(M){if(at(v),M!==M+0)throw M;return ut(1,0),0n}}function Qw(f,v,M,S,P){var U=ot();try{return Wh(f,v,M,S,P)}catch(K){if(at(U),K!==K+0)throw K;ut(1,0)}}function eS(f,v,M,S,P,U){var K=ot();try{return qh(f,v,M,S,P,U)}catch(se){if(at(K),se!==se+0)throw se;ut(1,0)}}function tS(f,v,M,S,P,U){var K=ot();try{return Ph(f,v,M,S,P,U)}catch(se){if(at(K),se!==se+0)throw se;ut(1,0)}}function nS(f,v,M,S,P,U){var K=ot();try{return Xh(f,v,M,S,P,U)}catch(se){if(at(K),se!==se+0)throw se;ut(1,0)}}function iS(f,v,M,S,P,U,K,se){var be=ot();try{return $h(f,v,M,S,P,U,K,se)}catch($e){if(at(be),$e!==$e+0)throw $e;ut(1,0)}}function rS(f,v,M,S,P){var U=ot();try{return Kh(f,v,M,S,P)}catch(K){if(at(U),K!==K+0)throw K;return ut(1,0),0n}}function sS(f,v,M,S){var P=ot();try{return Yh(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function aS(f,v,M,S){var P=ot();try{return Zh(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function oS(f,v,M,S,P,U,K,se,be,$e,st,yt){var Pt=ot();try{return jh(f,v,M,S,P,U,K,se,be,$e,st,yt)}catch(Ot){if(at(Pt),Ot!==Ot+0)throw Ot;ut(1,0)}}function lS(f,v,M,S,P,U,K,se,be,$e,st){var yt=ot();try{Hh(f,v,M,S,P,U,K,se,be,$e,st)}catch(Pt){if(at(yt),Pt!==Pt+0)throw Pt;ut(1,0)}}function uS(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot,Wi,el){var fS=ot();try{Vh(f,v,M,S,P,U,K,se,be,$e,st,yt,Pt,Ot,Wi,el)}catch(tl){if(at(fS),tl!==tl+0)throw tl;ut(1,0)}}function dS(f,v,M){var S=ot();try{return Bh(f,v,M)}catch(P){if(at(S),P!==P+0)throw P;ut(1,0)}}function cS(f,v,M){var S=ot();try{return zh(f,v,M)}catch(P){if(at(S),P!==P+0)throw P;ut(1,0)}}function hS(f,v,M,S){var P=ot();try{Gh(f,v,M,S)}catch(U){if(at(P),U!==U+0)throw U;ut(1,0)}}function va(){if(0<Lt)We=va;else if(r)x==null||x(e),he();else{for(var f=He;0<f.length;)f.shift()(e);0<Lt?We=va:(e.calledRun=!0,R||(he(),x==null||x(e)))}}return r||(Ri=await _e(),va()),e.PTR_SIZE=4,k?e:new Promise((f,v)=>{x=f,_=v})}var cv,cp,x3=pe(()=>{"use strict";var t,e;cv=dp,cp=(e=(t=globalThis.self)==null?void 0:t.name)==null?void 0:e.startsWith("em-pthread"),cp&&dp()}),Fl,Md,hp,$n,hv,qa,fp,pp,Bl,mp,zl,fv,Gl,pv,oc=pe(()=>{"use strict";ac(),Fl=typeof location>"u"?void 0:location.origin,Md=import.meta.url>"file:"&&import.meta.url<"file;",hp=()=>{if(Md){let t=URL;return new URL(new t("ort.bundle.min.mjs",import.meta.url).href,Fl).href}return import.meta.url},$n=hp(),hv=()=>{if($n&&!$n.startsWith("blob:"))return $n.substring(0,$n.lastIndexOf("/")+1)},qa=(t,e)=>{try{let n=e??$n;return(n?new URL(t,n):new URL(t)).origin===Fl}catch{return!1}},fp=(t,e)=>{let n=e??$n;try{return(n?new URL(t,n):new URL(t)).href}catch{return}},pp=(t,e)=>`${e??"./"}${t}`,Bl=async t=>{let e=await(await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},mp=async t=>(await import(t)).default,zl=(y3(),ra(lv)).default,fv=async()=>{if(!$n)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(qa($n))return[void 0,zl()];let t=await Bl($n);return[t,zl(t)]},Gl=(x3(),ra(dv)).default,pv=async(t,e,n,i)=>{let r=Gl&&!(t||e);if(r)if($n)r=qa($n)||i&&!n;else if(i&&!n)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,Gl];{let s="ort-wasm-simd-threaded.jsep.mjs",a=t??fp(s,e),o=n&&a&&!qa(a,e),l=o?await Bl(a):a??pp(s,e);return[o?l:void 0,await mp(l)]}}}),Hl,Xa,Ls,Vl,gp,_p,vp,lc,Ct,Lr=pe(()=>{"use strict";oc(),Xa=!1,Ls=!1,Vl=!1,gp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_p=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},vp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},lc=async t=>{if(Xa)return Promise.resolve();if(Ls)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Vl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ls=!0;let e=t.initTimeout,n=t.numThreads;if(t.simd!==!1){if(t.simd==="relaxed"){if(!vp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!_p())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=gp();n>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=n=1);let r=t.wasmPaths,s=typeof r=="string"?r:void 0,a=r==null?void 0:r.mjs,o=(a==null?void 0:a.href)??a,l=r==null?void 0:r.wasm,u=(l==null?void 0:l.href)??l,d=t.wasmBinary,[h,c]=await pv(o,s,n>1,!!d||!!u),p=!1,m=[];if(e>0&&m.push(new Promise(x=>{setTimeout(()=>{p=!0,x()},e)})),m.push(new Promise((x,_)=>{let g={numThreads:n};if(d)g.wasmBinary=d,g.locateFile=y=>y;else if(u||s)g.locateFile=y=>u??s+y;else if(o&&o.indexOf("blob:")!==0)g.locateFile=y=>new URL(y,o).href;else if(h){let y=hv();y&&(g.locateFile=T=>y+T)}c(g).then(y=>{Ls=!1,Xa=!0,Hl=y,x(),h&&URL.revokeObjectURL(h)},y=>{Ls=!1,Vl=!0,_(y)})})),await Promise.race(m),p)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},Ct=()=>{if(Xa&&Hl)return Hl;throw new Error("WebAssembly is not initialized yet.")}}),ri,To,bt,uc=pe(()=>{"use strict";Lr(),ri=(t,e)=>{let n=Ct(),i=n.lengthBytesUTF8(t)+1,r=n._malloc(i);return n.stringToUTF8(t,r,i),e.push(r),r},To=(t,e,n,i)=>{if(typeof t=="object"&&t!==null){if(n.has(t))throw new Error("Circular reference in options");n.add(t)}Object.entries(t).forEach(([r,s])=>{let a=e?e+r:r;if(typeof s=="object")To(s,a+".",n,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},bt=t=>{let e=Ct(),n=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetLastError(r,r+i);let s=Number(e.getValue(r,i===4?"i32":"i64")),a=e.getValue(r+i,"*"),o=a?e.UTF8ToString(a):"";throw new Error(`${t} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{e.stackRestore(n)}}}),mv,b3=pe(()=>{"use strict";Lr(),uc(),mv=(t,e)=>{let n=Ct(),i=0,r=[],s=t||{};try{if((t==null?void 0:t.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof t.logSeverityLevel!="number"||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${t.logSeverityLevel}`);if((t==null?void 0:t.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof t.logVerbosityLevel!="number"||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);(t==null?void 0:t.terminate)===void 0&&(s.terminate=!1);let a=0;(t==null?void 0:t.tag)!==void 0&&(a=ri(t.tag,r)),i=n._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,a),i===0&&bt("Can't create run options."),(t==null?void 0:t.extra)!==void 0&&To(t.extra,"",new WeakSet,(o,l)=>{let u=ri(o,r),d=ri(l,r);n._OrtAddRunConfigEntry(i,u,d)!==0&&bt(`Can't set a run config entry: ${o} - ${l}.`)});for(let o of e)n._OrtRunOptionsAddActiveLoraAdapter(i,o)!==0&&bt("Can't add an active LoRA adapter.");return[i,r]}catch(a){throw i!==0&&n._OrtReleaseRunOptions(i),r.forEach(o=>n._free(o)),a}}}),yp,xp,bp,gr,wp,gv,w3=pe(()=>{"use strict";Lr(),uc(),yp=t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${t}`)}},xp=t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${t}`)}},bp=t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let e=t.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(t.enableMemPattern=!1)},gr=(t,e,n,i)=>{let r=ri(e,i),s=ri(n,i);Ct()._OrtAddSessionConfigEntry(t,r,s)!==0&&bt(`Can't set a session config entry: ${e} - ${n}.`)},wp=async(t,e,n)=>{let i=e.executionProviders;for(let r of i){let s=typeof r=="string"?r:r.name,a=[],o;switch(s){case"webnn":if(s="WEBNN",gr(t,"session.disable_quant_qdq","1",n),gr(t,"session.disable_qdq_constant_folding","1",n),typeof r!="string"){let c=r==null?void 0:r.deviceType;c&&gr(t,"deviceType",c,n)}break;case"webgpu":if(s="JS",typeof r!="string"){let c=r;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);gr(t,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let l=a.length,u=0,d=0;if(l>0){u=Ct()._malloc(l*Ct().PTR_SIZE),n.push(u),d=Ct()._malloc(l*Ct().PTR_SIZE),n.push(d);for(let c=0;c<l;c++)Ct().setValue(u+c*Ct().PTR_SIZE,a[c][0],"*"),Ct().setValue(d+c*Ct().PTR_SIZE,a[c][1],"*")}let h;if(o===void 0){let c=ri(s,n);h=await Ct()._OrtAppendExecutionProvider(t,c,u,d,l)}h!==0&&bt(`Can't append execution provider: ${s}.`)}},gv=async t=>{let e=Ct(),n=0,i=[],r=t||{};bp(r);try{let s=yp(r.graphOptimizationLevel??"all"),a=xp(r.executionMode??"sequential"),o=typeof r.logId=="string"?ri(r.logId,i):0,l=r.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let u=r.logVerbosityLevel??0;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log verbosity level is not valid: ${u}`);let d=typeof r.optimizedModelFilePath=="string"?ri(r.optimizedModelFilePath,i):0;if(n=e._OrtCreateSessionOptions(s,!!r.enableCpuMemArena,!!r.enableMemPattern,a,!!r.enableProfiling,0,o,l,u,d),n===0&&bt("Can't create session options."),r.executionProviders&&await wp(n,r,i),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);gr(n,"enableGraphCapture",r.enableGraphCapture.toString(),i)}if(r.freeDimensionOverrides)for(let[h,c]of Object.entries(r.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let p=ri(h,i);e._OrtAddFreeDimensionOverride(n,p,c)!==0&&bt(`Can't set a free dimension override: ${h} - ${c}.`)}return r.extra!==void 0&&To(r.extra,"",new WeakSet,(h,c)=>{gr(n,h,c,i)}),[n,i]}catch(s){throw n!==0&&e._OrtReleaseSessionOptions(n)!==0&&bt("Can't release session options."),i.forEach(a=>e._free(a)),s}}}),Sr,ki,Mr,Fo,Ao,dc,cc,Ed,Xe=pe(()=>{"use strict";Sr=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${t}`)}},ki=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${t}`)}},Mr=(t,e)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],i=typeof e=="number"?e:e.reduce((r,s)=>r*s,1);return n>0?Math.ceil(i*n):void 0},Fo=t=>{switch(t){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${t}`)}},Ao=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${t}`)}},dc=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",cc=t=>t==="float32"||t==="float16"||t==="int32"||t==="int64"||t==="uint32"||t==="uint64"||t==="int8"||t==="uint8"||t==="bool"||t==="uint4"||t==="int4",Ed=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${t}`)}}}),Bo,hc=pe(()=>{"use strict";ac(),Bo=async t=>{if(typeof t=="string"){let e=await fetch(t);if(!e.ok)throw new Error(`failed to load external data file: ${t}`);let n=e.headers.get("Content-Length"),i=n?parseInt(n,10):0;if(i<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${t}, no response body.`);let r=e.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await r.read();if(o)break;let u=l.byteLength;new Uint8Array(s,a,u).set(l),a+=u}return new Uint8Array(s,0,i)}}else return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t)}}),Sp,Mp,Ep,Tp,fc,Ap,_t,Gi=pe(()=>{"use strict";Xe(),Sp=["V","I","W","E","F"],Mp=(t,e)=>{console.log(`[${Sp[t]},${new Date().toISOString()}]${e}`)},fc=(t,e)=>{Ep=t,Tp=e},Ap=(t,e)=>{let n=Ao(t),i=Ao(Ep);n>=i&&Mp(n,typeof e=="function"?e():e)},_t=(...t)=>{Tp&&Ap(...t)}}),Rp,ds,ee,Ro,_v,vv,yv,je=pe(()=>{"use strict";Rp=class{static calcMatMulShape(t,e){return t[1]!==e[0]?void 0:[t[0],e[1]]}},ds=class{static calcShape(t,e,n=!1){let i=t.length,r=e.length;if(i===0)return e;if(r===0)return t;let s=Math.max(t.length,e.length),a=new Array(s);if(n){if(i<2||r<2)return;let o=Rp.calcMatMulShape([t[i-2],t[i-1]],[e[r-2],e[r-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=n?3:1;o<=s;o++){let l=i-o<0?1:t[i-o],u=r-o<0?1:e[r-o];if(l!==u&&l>1&&u>1)return;let d=Math.max(l,u);if(l&&u)a[s-o]=Math.max(l,u);else{if(d>1)return;a[s-o]=0}}return a}static isValidBroadcast(t,e){let n=t.length,i=e.length;if(n>i)return!1;for(let r=1;r<=n;r++)if(t[n-r]!==1&&t[n-r]!==e[i-r])return!1;return!0}},ee=class mo{static size(e){return mo.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,n=4){let i=e.length;if(i===0)return[];let r=new Array(i),s=i-1;for(;s>=0;){if(e[s]%n===0){r[s]=e[s]/n;break}if(n%e[s]!==0)throw new Error("cannot convert shape");r[s]=1,n/=e[s],s--}for(s--;s>=0;s--)r[s]=e[s];return r}static sizeFromDimension(e,n){if(n<0||n>e.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return mo.getSizeFromDimensionRange(e,n,e.length)}static sizeToDimension(e,n){if(n<0||n>e.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${e.length} dimensions.`);return mo.getSizeFromDimensionRange(e,0,n)}static getSizeFromDimensionRange(e,n,i){let r=1;for(let s=n;s<i;s++){if(e[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");r*=Number(e[s])}return r}static computeStrides(e){let n=e.length;if(n===0)return[];if(n===1)return[1];let i=new Array(n);i[n-1]=1,i[n-2]=e[n-1];for(let r=n-3;r>=0;--r)i[r]=i[r+1]*e[r+1];return i}static normalizeAxis(e,n){if(e<-n&&e>=n)throw new Error("unsupported axis for this operation.");return e<0?e+n:e}static normalizeAxes(e,n){return e.map(i=>this.normalizeAxis(i,n??e.length))}static sortBasedOnPerm(e,n){return n?n.map(i=>e[i]):e.slice().reverse()}static padShape(e,n){let i=e.length;return e.map((r,s)=>r+n[s]+n[s+i])}static areEqual(e,n){return e.length!==n.length?!1:e.every((i,r)=>i===n[r])}},Ro=class Qi{static adjustPoolAttributes(e,n,i,r,s,a){if(!e&&i.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let o=0;o<n.length-2;o++)o>=i.length?i.push(n[o+2]):i[o]=n[o+2];for(let o=0;o<i.length;o++)if(o<r.length){if(r[o]<0)throw new Error("strides should be greater than or equal to 1")}else r.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,n,i,r,s,a,o){if(o){if(s.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<e.length-2;l++)Qi.adjustPadAndReturnShape(e[l+(a?1:2)],n[l],i[l],r[l],s,l,l+e.length-2,o)}}static computePoolOutputShape(e,n,i,r,s,a,o,l=0){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Qi.computeShapeHelper(e,n,u,i,r,s,a,o,l),u}static computeConvOutputShape(e,n,i,r,s,a,o){if(e.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[e[0],n[0]];return Qi.computeShapeHelper(!1,e,l,i,r,s,a,o),l}static computeShapeHelper(e,n,i,r,s,a,o,l,u=0){if(e)for(let d=0;d<n.length-2;d++)i.push(1);else for(let d=0;d<n.length-2;d++)i.push(Qi.adjustPadAndReturnShape(n[d+2],r[d],s[d],a[d],o,d,d+n.length-2,l,u))}static computeOutputSize(e,n,i,r,s){let a=Math.floor(e/n)+1;return s===1&&(a=Math.ceil(e/n)+1,(a-1)*n>=i+r&&(a-=1)),a}static adjustPadAndReturnShape(e,n,i,r,s,a,o,l,u=0){let d=i*(r-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Qi.computeOutputSize(e-d,n,e,0,u);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=(Math.floor((e+n-1)/n)-1)*n+r-e;return s[a]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),s[o]=h-s[a],Qi.computeOutputSize(e+s[a]+s[o]-d,n,e,s[a],u)}default:throw new Error("Unsupported AutoPad type")}else return Qi.computeOutputSize(e+s[a]+s[o]-d,n,e,s[a],u)}},_v=class{static getShapeOfGemmResult(t,e,n,i,r){if(t.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let s,a,o;e?(s=t[1],a=t[0]):(s=t[0],a=t[1]);let l=-1;if(i?(o=n[0],l=1):(o=n[1],l=0),n[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(r&&!ds.isValidBroadcast(r,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},vv=-34028234663852886e22,yv=34028234663852886e22}),pc,xv=pe(()=>{"use strict";Xe(),pc=(t,e)=>new(Fo(e))(t)}),Wl,Cp,ql,Ip,Xl,Dp,Kl,Yl,Zl,Pp,bv,S3=pe(()=>{"use strict";Xe(),Gi(),Wl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Cp=(t,e)=>{if(e==="int32")return t;let n=Wl.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);let i=n/8;if(t.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let r=t.byteLength/i,s=new(Fo(e))(t.buffer,t.byteOffset,r);switch(e){case"int64":case"uint64":{let a=new Int32Array(r);for(let o=0;o<r;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(e==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${e} to 'int32'`)}},ql=(t,e)=>{if(e==="int32")return t;if(t.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=t.byteLength/4,i=new Int32Array(t.buffer,t.byteOffset,n);switch(e){case"int64":{let r=BigInt64Array.from(i,BigInt);return new Uint8Array(r.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let r=BigUint64Array.from(i,BigInt);return new Uint8Array(r.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let r=Int8Array.from(i,Number);return new Uint8Array(r.buffer)}case"uint8":{if(i.some(r=>r<0||r>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let r=Uint32Array.from(i,Number);return new Uint8Array(r.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${e}`)}},Ip=1,Xl=()=>Ip++,Dp=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Kl=(t,e)=>{let n=Wl.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);return e.length>0?Math.ceil(e.reduce((i,r)=>i*r)*n/8):0},Yl=class{constructor(t){this.isDataConverted=!1;let{sessionId:e,context:n,tensor:i,dataType:r,shape:s,fallbackDataType:a}=t;this.sessionId=e,this.mlContext=n,this.mlTensor=i,this.dataType=r,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Kl(this.dataType,this.tensorShape)}destroy(){_t("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(this.fallbackDataType){let e=await this.mlContext.readTensor(this.mlTensor),n=ql(new Uint8Array(e),this.dataType);if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,e,n){return this.mlContext===t&&this.dataType===e&&this.tensorShape.length===n.length&&this.tensorShape.every((i,r)=>i===n[r])}setIsDataConverted(t){this.isDataConverted=t}},Zl=class{constructor(t,e){this.tensorManager=t,this.wrapper=e}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,e,n,i){let r=this.tensorManager.getMLContext(t),s=this.tensorManager.getMLOpSupportLimits(t),a;if(!(s!=null&&s.input.dataTypes.includes(e))){if(a=Dp.get(e),!a||!(s!=null&&s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${e}`);_t("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${e} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(r,e,n))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Kl(e,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,e,n,o,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let e=t;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")e=Cp(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else _t("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(t){var e,n;if(this.activeUpload){let i=(e=this.wrapper)!=null&&e.isDataConverted?ql(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(i):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},Pp=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(t){let e=this.backend.getMLContext(t);if(!e)throw new Error("MLContext not found for session.");return e}getMLOpSupportLimits(t){return this.backend.getMLOpSupportLimits(t)}reserveTensorId(){let t=Xl();return this.tensorTrackersById.set(t,new Zl(this)),t}releaseTensorId(t){let e=this.tensorTrackersById.get(t);e&&(this.tensorTrackersById.delete(t),e.tensorWrapper&&this.releaseTensor(e.tensorWrapper))}async ensureTensor(t,e,n,i,r){_t("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${n}, shape: ${i}, copyOld: ${r}}`);let s=this.tensorTrackersById.get(e);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(t,n,i,r)}upload(t,e){let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");n.upload(e)}async download(t,e){_t("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${e==null?void 0:e.byteLength}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.download(e)}releaseTensorsForSession(t){for(let e of this.freeTensors)e.sessionId===t&&e.destroy();this.freeTensors=this.freeTensors.filter(e=>e.sessionId!==t)}registerTensor(t,e,n,i){let r=this.getMLContext(t),s=Xl(),a=new Yl({sessionId:t,context:r,tensor:e,dataType:n,shape:i});return this.tensorTrackersById.set(s,new Zl(this,a)),this.externalTensors.add(a),s}async getCachedTensor(t,e,n,i,r,s,a){let o=this.getMLContext(t);for(let[u,d]of this.freeTensors.entries())if(d.canReuseTensor(o,e,n)){_t("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let h=this.freeTensors.splice(u,1)[0];return h.sessionId=t,h}_t("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let l=await o.createTensor({dataType:a??e,shape:n,dimensions:n,usage:i,writable:r,readable:s});return new Yl({sessionId:t,context:o,tensor:l,dataType:e,shape:n,fallbackDataType:a})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},bv=(...t)=>new Pp(...t)}),Ns,$p,wv,M3=pe(()=>{"use strict";Xe(),Lr(),xv(),S3(),Gi(),Ns=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),$p=(t,e)=>{if(t===e)return!0;if(t===void 0||e===void 0)return!1;let n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((r,s)=>r===i[s]&&t[r]===e[r])},wv=class{constructor(t){this.tensorManager=bv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,fc(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){_t("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){_t("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let e=this.temporarySessionTensorIds.get(t);if(e){for(let n of e)_t("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let n=this.mlContextCache.findIndex(i=>i.gpuDevice===t);if(n!==-1)return this.mlContextCache[n].mlContext;{let i=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:i}),i}}else if(t===void 0){let n=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let e=this.mlContextCache.findIndex(n=>$p(n.options,t));if(e!==-1)return this.mlContextCache[e].mlContext;{let n=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:n}),n}}registerMLContext(t,e){this.mlContextBySessionId.set(t,e);let n=this.sessionIdsByMLContext.get(e);n||(n=new Set,this.sessionIdsByMLContext.set(e,n)),n.add(t),this.mlOpSupportLimitsBySessionId.has(t)||this.mlOpSupportLimitsBySessionId.set(t,e.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let e=this.mlContextBySessionId.get(t);if(!e)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t),this.mlOpSupportLimitsBySessionId.delete(t);let n=this.sessionIdsByMLContext.get(e);if(n.delete(t),n.size===0){this.sessionIdsByMLContext.delete(e);let i=this.mlContextCache.findIndex(r=>r.mlContext===e);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}getMLOpSupportLimits(t){return this.mlOpSupportLimitsBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){_t("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,e,n,i,r){let s=Ns.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,e,s,i,r)}async createTemporaryTensor(t,e,n){_t("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${e}, shape: ${n}}`);let i=Ns.get(e);if(!i)throw new Error(`Unsupported ONNX data type: ${e}`);let r=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,r,i,n,!1);let s=this.temporarySessionTensorIds.get(t);return s?s.push(r):this.temporarySessionTensorIds.set(t,[r]),r}uploadTensor(t,e){if(!Ct().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");_t("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${e.byteLength}}`),this.tensorManager.upload(t,e)}async downloadTensor(t,e){return this.tensorManager.download(t,e)}createMLTensorDownloader(t,e){return async()=>{let n=await this.tensorManager.download(t);return pc(n,e)}}registerMLTensor(t,e,n,i){let r=Ns.get(n);if(!r)throw new Error(`Unsupported ONNX data type: ${n}`);let s=this.tensorManager.registerTensor(t,e,r,i);return _t("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${r}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,e){let n=this.sessionGraphInputs.get(t);return n?n.includes(e):!1}isGraphOutput(t,e){let n=this.sessionGraphOutputs.get(t);return n?n.includes(e):!1}isGraphInputOutputTypeSupported(t,e,n=!0){let i=Ns.get(Sr(e)),r=this.mlOpSupportLimitsBySessionId.get(t);return typeof i>"u"?!1:n?!!(r!=null&&r.input.dataTypes.includes(i)):!!(r!=null&&r.output.dataTypes.includes(i))}flush(){}}}),mc=pe(()=>{"use strict"}),jl,Ka,Ya,Lp,Np,Jl,Td,Up,Sv,E3=pe(()=>{"use strict";Gi(),mc(),jl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ka=[],Ya=t=>Math.ceil(Number(t)/16)*16,Lp=t=>{for(let e=0;e<Ka.length;e++){let n=Ka[e];if(t<=n)return n}return Math.ceil(t/16)*16},Np=1,Jl=()=>Np++,Td=async(t,e,n,i)=>{let r=Ya(n),s=t.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=t.getCommandEncoder();t.endComputePass(),a.copyBufferToBuffer(e,0,s,0,r),t.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,n)),l}else return new Uint8Array(o.slice(0,n))}finally{s.destroy()}},Up=class{constructor(t){this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of jl)Ka.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(t,e){let n=e.buffer,i=e.byteOffset,r=e.byteLength,s=Ya(r),a=this.storageCache.get(t);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==r)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${r}`);if(s===r&&i%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,n,i,r);else{let o=new Uint8Array(s);o.set(e),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}_t("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,e){let n=this.storageCache.get(t);if(!n)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(e);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let r=Ya(n.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(n.gpuData.buffer,0,i.gpuData.buffer,0,r)}registerExternalBuffer(t,e,n){let i;if(n){if(i=n[0],t===n[1])return _t("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Jl();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:t},originalSize:e}),_t("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, registered.`),i}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),_t("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Lp(t),i,r=(e&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(e&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(r||s){let o=(r?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:n,usage:e}):i=this.backend.device.createBuffer({size:n,usage:e})}else i=this.backend.device.createBuffer({size:n,usage:e});let a={id:Jl(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(t)}),_t("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${a.id}`),a}get(t){var e;return(e=this.storageCache.get(t))==null?void 0:e.gpuData}release(t){let e=typeof t=="bigint"?Number(t):t,n=this.storageCache.get(e);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return _t("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(t,e){let n=this.storageCache.get(Number(t));if(!n)throw new Error("data does not exist");await Td(this.backend,n.gpuData.buffer,n.originalSize,e)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let e=jl.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(t.size)||[];e===void 0||n.length>=e?t.destroy():n.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(t.size)||[];e===void 0||n.length>=e?t.destroy():n.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let e of this.buffersPending)t.push(e);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let e=this.capturedPendingBuffers.get(t);e&&(e.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(_t("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Sv=(...t)=>new Up(...t)}),Op,Mt,Vt=pe(()=>{"use strict";Op=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},Mt=t=>new Op(t)}),cs,Za,nn,tn,Be,Gt,Ad,ts,lr,Fe,Us,ae,Ne,Mv,gc,kp,Ev,Qe=pe(()=>{"use strict";Xe(),je(),cs=64,Za=(t,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${t}`)}},nn=(t,e=1)=>{let n=Za(t,e);return typeof n=="string"?n:n[0]},tn=(t,e=1)=>{let n=Za(t,e);return typeof n=="string"?n:n[1]},Be=(...t)=>{let e=[];return t.forEach(n=>{n.length!==0&&e.push({type:12,data:n},{type:12,data:ee.computeStrides(n)})}),e},Gt=t=>t%4===0?4:t%2===0?2:1,Ad=(t="f32",e,n="0")=>!e||e===1?`${t}(${n})`:`vec${e}<${t}>(${n})`,ts=(t,e,n)=>t==="f32"?n:e===1?`f32(${n})`:`vec${e}<f32>(${n})`,lr=(t,e)=>e===4?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:e===2?`(${t}.x + ${t}.y)`:e===3?`(${t}.x + ${t}.y + ${t}.z)`:t,Fe=(t,e,n,i)=>t.startsWith("uniforms.")&&n>4?typeof e=="string"?i==="f16"?`${t}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${t}[(${e}) / 4][(${e}) % 4]`:i==="f16"?`${t}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${t}[${Math.floor(e/4)}][${e%4}]`:n>1?`${t}[${e}]`:t,Us=(t,e,n,i,r)=>{let s=typeof n=="number",a=s?n:n.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,u=Za(e,r),d=typeof u=="string"?u:u[1],h=typeof u=="string"?u:u[0],c={indices:l,value:d,storage:h,tensor:e},p=k=>typeof k=="string"?k:`${k}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},x=s?"uniforms.":"",_=`${x}${t}_shape`,g=`${x}${t}_strides`,y="";for(let k=0;k<a-1;k++)y+=`
    let dim${k} = current / ${Fe(g,k,a)};
    let rest${k} = current % ${Fe(g,k,a)};
    indices[${k}] = dim${k};
    current = rest${k};
    `;y+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${t}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${y}
    return indices;
  }`,E=k=>(m.offsetToIndices=!0,a<2?k:`o2i_${t}(${k})`),A=[];if(a>=2)for(let k=a-1;k>=0;k--)A.push(`${Fe(g,k,a)} * (indices[${k}])`);let R=a<2?"":`
  fn i2o_${t}(indices: ${c.indices}) -> u32 {
    return ${A.join("+")};
  }`,w=k=>(m.indicesToOffset=!0,a<2?k:`i2o_${t}(${k})`),b=(...k)=>a===0?"0u":`${c.indices}(${k.map(p).join(",")})`,N=(k,le)=>a<2?`${k}`:`${Fe(k,le,a)}`,$=(k,le,he)=>a<2?`${k}=${he};`:`${Fe(k,le,a)}=${he};`,O={},B=(k,le)=>{m.broadcastedIndicesToOffset=!0;let he=`${le.name}broadcastedIndicesTo${t}Offset`;if(he in O)return`${he}(${k})`;let z=[];for(let fe=a-1;fe>=0;fe--){let _e=le.indicesGet("outputIndices",fe+le.rank-a);z.push(`${N(g,fe)} * (${_e} % ${N(_,fe)})`)}return O[he]=`fn ${he}(outputIndices: ${le.type.indices}) -> u32 {
             return ${z.length>0?z.join("+"):"0u"};
           }`,`${he}(${k})`},V=(k,le)=>(()=>{if(c.storage===c.value)return`${t}[${k}]=${le};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${t}[${k}]=vec2<u32>(u32(${le}), select(0u, 0xFFFFFFFFu, ${le} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${t}[${k}]=vec2<u32>(u32(${le}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${t}[${k}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${le}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),D=k=>(()=>{if(c.storage===c.value)return`${t}[${k}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${t}[${k}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${t}[${k}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${t}[${k}] & 0xFFu), bool(${t}[${k}] & 0xFF00u), bool(${t}[${k}] & 0xFF0000u), bool(${t}[${k}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),H=a<2?"":`
  fn get_${t}ByIndices(indices: ${c.indices}) -> ${d} {
    return ${D(`i2o_${t}(indices)`)};
  }`,Y=a<2?"":(()=>{let k=o.map(he=>`d${he}: u32`).join(", "),le=o.map(he=>`d${he}`).join(", ");return`
  fn get_${t}(${k}) -> ${d} {
    return get_${t}ByIndices(${b(le)});
  }`})(),W=(...k)=>{if(k.length!==a)throw new Error(`indices length must be ${a}`);let le=k.map(p).join(",");return a===0?D("0u"):a===1?D(le[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${t}(${le})`)},ne=k=>a<2?D(k):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${t}ByIndices(${k})`),q=a<2?"":`
  fn set_${t}ByIndices(indices: ${c.indices}, value: ${d}) {
    ${V(`i2o_${t}(indices)`,"value")}
  }`,ie=a<2?"":(()=>{let k=o.map(he=>`d${he}: u32`).join(", "),le=o.map(he=>`d${he}`).join(", ");return`
  fn set_${t}(${k}, value: ${d}) {
    set_${t}ByIndices(${b(le)}, value);
  }`})();return{impl:()=>{let k=[],le=!1;return m.offsetToIndices&&(k.push(T),le=!0),m.indicesToOffset&&(k.push(R),le=!0),m.broadcastedIndicesToOffset&&(Object.values(O).forEach(he=>k.push(he)),le=!0),m.set&&(k.push(ie),le=!0),m.setByIndices&&(k.push(q),le=!0),m.get&&(k.push(Y),le=!0),m.getByIndices&&(k.push(H),le=!0),!s&&le&&k.unshift(`const ${_} = ${c.indices}(${n.join(",")});`,`const ${g} = ${c.indices}(${ee.computeStrides(n).join(",")});`),k.join(`
`)},type:c,offsetToIndices:E,indicesToOffset:w,broadcastedIndicesToOffset:B,indices:b,indicesGet:N,indicesSet:$,set:(...k)=>{if(k.length!==a+1)throw new Error(`indices length must be ${a}`);let le=k[a];if(typeof le!="string")throw new Error("value must be string");let he=k.slice(0,a).map(p).join(",");return a===0?V("0u",le):a===1?V(he[0],le):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${t}(${he}, ${le})`)},setByOffset:V,setByIndices:(k,le)=>a<2?V(k,le):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${t}ByIndices(${k}, ${le});`),get:W,getByOffset:D,getByIndices:ne,usage:i,name:t,strides:g,shape:_,rank:a}},ae=(t,e,n,i=1)=>Us(t,e,n,"input",i),Ne=(t,e,n,i=1)=>Us(t,e,n,"output",i),Mv=(t,e,n)=>Us(t,e,n,"atomicOutput",1),gc=(t,e,n,i=1)=>Us(t,e,n,"internal",i),kp=class{constructor(t,e){this.normalizedDispatchGroup=t,this.limits=e,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=cs){let e=typeof t=="number"?t:t[0],n=typeof t=="number"?1:t[1],i=typeof t=="number"?1:t[2];if(e>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${e}, ${n}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(e*n*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${e}, ${n}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let r=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=r?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=r?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${e*n*i}u + local_idx;`;return`@compute @workgroup_size(${e}, ${n}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,e){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let n=t.usage==="input"?"read":"read_write",i=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${e}) var<storage, ${n}> ${t.name}: array<${i}>;`}declareVariables(...t){return t.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(t,e,n=1){return this.uniforms.push({name:t,type:e,length:n}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:e,type:n,length:i}of this.uniforms)if(i&&i>4)n==="f16"?t.push(`@align(16) ${e}:array<mat2x4<${n}>, ${Math.ceil(i/8)}>`):t.push(`${e}:array<vec4<${n}>, ${Math.ceil(i/4)}>`);else{let r=i==null||i===1?n:`vec${i}<${n}>`;t.push(`${e}:${r}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=e=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(e)];return this.uniforms.map(e=>[t(e.type),e.length??1])}},Ev=(t,e)=>new kp(t,e)}),Fp,Ql,Bp,zp,Gp,Hp,kn,Tv,Av,dr=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Fp=(t,e)=>{if(!t||t.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==t[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${t[0].dims.length}`)},Ql=(t,e)=>e.length!==0?e:[...new Array(t).keys()].reverse(),Bp=(t,e)=>ee.sortBasedOnPerm(t,Ql(t.length,e)),zp=(t,e,n,i)=>{let r=`fn perm(i: ${i.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let s=0;s<e;++s)r+=`a[${t[s]}]=i[${s}];`;return r+="return a;}"},Gp=(t,e)=>{let n=[],i=[];for(let r=0;r<t.length;++r)t[r]!==1&&n.push(t[r]),t[e[r]]!==1&&i.push(e[r]);return{newShape:n,newPerm:i}},Hp=(t,e)=>{let n=0;for(let i=0;i<t.length;++i)if(e[t[i]]!==1){if(t[i]<n)return!1;n=t[i]}return!0},kn=(t,e)=>{let n=t.dataType,i=t.dims.length,r=Ql(i,e),s=Bp(t.dims,r),a=t.dims,o=s,l=i<2||Hp(r,t.dims),u;if(l)return u=m=>{let x=ae("input",n,a,4),_=Ne("output",n,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(x,_)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=ee.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:u};let{newShape:d,newPerm:h}=Gp(t.dims,r),c=ee.areEqual(h,[2,3,1]),p=ee.areEqual(h,[3,1,2]);if(d.length===2||c||p){a=c?[d[0],d[1]*d[2]]:p?[d[0]*d[1],d[2]]:d,o=[a[1],a[0]];let m=16;return u=x=>{let _=ae("a",n,a.length),g=Ne("output",n,o.length);return`
  ${x.registerUniform("output_size","u32").declareVariables(_,g)}
  var<workgroup> tile : array<array<${g.type.value}, ${m+1}>, ${m}>;
  ${x.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${_.getByIndices(`${_.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${g.setByIndices(`${g.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let x=ee.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:x},...Be(a,o)]}},getShaderSource:u}}return u=m=>{let x=ae("a",n,a.length),_=Ne("output",n,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(x,_)}

  ${zp(r,i,x,_)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let m=ee.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Be(a,o)]}},getShaderSource:u}},Tv=(t,e)=>{Fp(t.inputs,e.perm),t.compute(kn(t.inputs[0],e.perm))},Av=t=>Mt({perm:t.perm})}),Vp,Wp,qp,Xp,Kp,Yp,Zp,jp,Jp,Qp,Jn,Rv,Cv,Iv,Dv,Pv,$v,Lv,Nv,Uv,Ov,T3=pe(()=>{"use strict";Xe(),je(),Qe(),_c(),dr(),Vp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},qp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Kp=(t,e)=>{let n=[];for(let i=e-t;i<e;++i)n.push(i);return n},Yp=(t,e)=>{let n=[],i=t.length;for(let s=0;s<i;s++)e.indexOf(s)===-1&&n.push(t[s]);let r=e.map(s=>t[s]);return[n,r]},Zp=(t,e)=>{let n=t.length+e.length,i=[],r=0;for(let s=0;s<n;s++)e.indexOf(s)===-1?i.push(t[r++]):i.push(1);return i},jp=(t,e)=>{for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0},Jp=(t,e)=>{let n=[];if(!jp(t,e)){for(let i=0;i<e;++i)t.indexOf(i)===-1&&n.push(i);t.forEach(i=>n.push(i))}return n},Qp=(t,e,n,i,r,s,a)=>{let o=n[0].dims,l=ee.size(s),u=ee.size(a),d=ae("_A",n[0].dataType,o),h=Ne("output",r,s),c=64;l===1&&(c=256);let p=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `,m=x=>`
        ${x.registerUniform("reduceSize","u32").declareVariables(d,h)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${x.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${qp[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${Vp[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wp[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Xp[i]})`}`)};
         }
        }`;return{name:t,shaderCache:{hint:`${e};${c}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:l},programUniforms:[{type:12,data:u}]})}},Jn=(t,e,n,i)=>{let r=t.inputs.length===1?n:Rd(t.inputs,n),s=r.axes;s.length===0&&!r.noopWithEmptyAxes&&(s=t.inputs[0].dims.map((p,m)=>m));let a=ee.normalizeAxes(s,t.inputs[0].dims.length),o=a,l=t.inputs[0],u=Jp(o,t.inputs[0].dims.length);u.length>0&&(l=t.compute(kn(t.inputs[0],u),{inputs:[0],outputs:[-1]})[0],o=Kp(o.length,l.dims.length));let[d,h]=Yp(l.dims,o),c=d;r.keepDims&&(c=Zp(d,a)),t.compute(Qp(e,r.cacheKey,[l],i,t.inputs[0].dataType,c,h),{inputs:[l]})},Rv=(t,e)=>{Jn(t,"ReduceMeanShared",e,"mean")},Cv=(t,e)=>{Jn(t,"ReduceL1Shared",e,"l1")},Iv=(t,e)=>{Jn(t,"ReduceL2Shared",e,"l2")},Dv=(t,e)=>{Jn(t,"ReduceLogSumExpShared",e,"logSumExp")},Pv=(t,e)=>{Jn(t,"ReduceMaxShared",e,"max")},$v=(t,e)=>{Jn(t,"ReduceMinShared",e,"min")},Lv=(t,e)=>{Jn(t,"ReduceProdShared",e,"prod")},Nv=(t,e)=>{Jn(t,"ReduceSumShared",e,"sum")},Uv=(t,e)=>{Jn(t,"ReduceSumSquareShared",e,"sumSquare")},Ov=(t,e)=>{Jn(t,"ReduceLogSumShared",e,"logSum")}}),Qn,em,Co,Rd,ei,tm,nm,im,rm,sm,am,om,lm,um,dm,ti,kv,Fv,Bv,zv,Gv,Hv,Vv,Wv,qv,Xv,_c=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),T3(),Qn=t=>{if(!t||t.length===0||t.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(t.length===2&&t[1].dims.length!==1)throw new Error("Invalid axes input dims.")},em=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],Co=(t,e,n,i,r,s,a=!1,o=!1)=>{let l=[],u=n[0].dims,d=u.length,h=ee.normalizeAxes(r,d),c=!o&&h.length===0;u.forEach((x,_)=>{c||h.indexOf(_)>=0?a&&l.push(1):l.push(x)});let p=l.length,m=ee.size(l);return{name:t,shaderCache:e,getShaderSource:x=>{let _=[],g=ae("_A",n[0].dataType,d),y=Ne("output",s,p),T=i(g,y,h),E=T[2];for(let A=0,R=0;A<d;A++)c||h.indexOf(A)>=0?(a&&R++,E=`for(var j${A}: u32 = 0; j${A} < ${u[A]}; j${A}++) {
                  ${T[2].includes("last_index")?`let last_index = j${A};`:""}
                  ${g.indicesSet("input_indices",A,`j${A}`)}
                  ${E}
                }`):(_.push(`${g.indicesSet("input_indices",A,y.indicesGet("output_indices",R))};`),R++);return`

        ${x.registerUniform("output_size","u32").declareVariables(g,y)}

        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${g.type.indices};
          let output_indices = ${y.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${E}
          ${T[3]}
          ${T.length===4?y.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Be(u,l)]})}},Rd=(t,e)=>{let n=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(i=>n.push(Number(i))),Mt({axes:n,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},ei=(t,e,n,i)=>{let r=t.inputs,s=r.length===1?n:Rd(r,n);t.compute(Co(e,{hint:s.cacheKey,inputDependencies:["rank"]},[r[0]],s.noopWithEmptyAxes&&s.axes.length===0?em:i,s.axes,r[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},tm=(t,e)=>{Qn(t.inputs),ei(t,"ReduceLogSum",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},nm=(t,e)=>{Qn(t.inputs),ei(t,"ReduceL1",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},im=(t,e)=>{Qn(t.inputs),ei(t,"ReduceL2",e,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},rm=(t,e)=>{Qn(t.inputs),ei(t,"ReduceLogSumExp",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},sm=(t,e)=>{Qn(t.inputs),ei(t,"ReduceMax",e,(n,i,r)=>{let s=[];for(let a=0;a<n.rank;a++)(r.indexOf(a)>=0||r.length===0)&&s.push(n.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},am=(t,e)=>{Qn(t.inputs),ei(t,"ReduceMean",e,(n,i,r)=>{let s=1;for(let a=0;a<n.rank;a++)(r.indexOf(a)>=0||r.length===0)&&(s*=t.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},om=(t,e)=>{Qn(t.inputs),ei(t,"ReduceMin",e,(n,i,r)=>{let s=[];for(let a=0;a<n.rank;a++)(r.indexOf(a)>=0||r.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},lm=(t,e)=>{Qn(t.inputs),ei(t,"ReduceProd",e,(n,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},um=(t,e)=>{Qn(t.inputs),ei(t,"ReduceSum",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},dm=(t,e)=>{Qn(t.inputs),ei(t,"ReduceSumSquare",e,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},ti=(t,e,n)=>{if(e.length===0)return n;let i=1,r=1;for(let s=0;s<e.length;s++)e.indexOf(s)===-1?i*=t[s]:r*=t[s];return r<32&&i>1024},kv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?am(t,e):Rv(t,e)},Fv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?nm(t,e):Cv(t,e)},Bv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?im(t,e):Iv(t,e)},zv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?rm(t,e):Dv(t,e)},Gv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?sm(t,e):Pv(t,e)},Hv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?om(t,e):$v(t,e)},Vv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?lm(t,e):Lv(t,e)},Wv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?um(t,e):Nv(t,e)},qv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?dm(t,e):Uv(t,e)},Xv=(t,e)=>{ti(t.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?tm(t,e):Ov(t,e)}}),eu,Kv,Yv,Cd,A3=pe(()=>{"use strict";Xe(),Vt(),_c(),eu=t=>{if(!t||t.length===0||t.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(t[0].dataType!==1)throw new Error("Invalid input type.")},Kv=(t,e)=>{eu(t.inputs);let n=(i,r,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]};t.compute(Co("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],n,[e.axis],7,e.keepDims),{inputs:[0]})},Yv=(t,e)=>{eu(t.inputs);let n=(i,r,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]};t.compute(Co("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],n,[e.axis],7,e.keepDims),{inputs:[0]})},Cd=t=>Mt(t)}),cm,ja,hm,fm,pm,sa,mm,Zv,vc=pe(()=>{"use strict";Xe(),je(),mc(),Qe(),cm=(t,e)=>{let n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=n.dims[0],u=n.dims[1],d=n.dims[2];if(r.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(r.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=r.dims[0]/3,c=h,p=c;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of e.qkvHiddenSizes)if(T%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=e.qkvHiddenSizes[0],c=e.qkvHiddenSizes[1],p=e.qkvHiddenSizes[2]}let m=u;if(h!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(r.dims[0]!==h+c+p)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let x=0;if(a){if(c!==p)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==c/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(x=a.dims[3])}let _=m+x,g=-1,y=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==e.numHeads||o.dims[2]!==u||o.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:x,kvSequenceLength:m,totalSequenceLength:_,maxSequenceLength:g,inputHiddenSize:d,hiddenSize:h,vHiddenSize:p,headSize:Math.floor(h/e.numHeads),vHeadSize:Math.floor(p/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:y,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ja=(t,e,n)=>e&&t?`
      let total_sequence_length_input = u32(${e.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t==null?void 0:t.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,hm=(t,e,n,i,r,s,a,o)=>{let l=Gt(a?1:s),u=64,d=s/l;d<u&&(u=32);let h=Math.ceil(s/l/u),c=[{type:12,data:e},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:d},{type:12,data:h}],p=nn(t.dataType,l),m=tn(1,l),x=["type"];a&&x.push("type"),o&&x.push("type");let _=g=>{let y=Ne("x",t.dataType,t.dims,l),T=[y],E=a?ae("seq_lens",a.dataType,a.dims):void 0;E&&T.push(E);let A=o?ae("total_sequence_length_input",o.dataType,o.dims):void 0;A&&T.push(A);let R=tn(t.dataType),w=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${g.registerUniforms(w).declareVariables(...T)}
  ${g.mainStart([u,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ja(E,A,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${y.type.value}(${R}(1.0) / ${R}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${y.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${y.type.value}(${R}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${p};${l}`,inputDependencies:x},getShaderSource:_,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:r,z:e*n},programUniforms:c})}},fm=(t,e,n,i,r,s,a,o,l)=>{let u=a+s.kvSequenceLength,d=[s.batchSize,s.numHeads,s.sequenceLength,u],h=t>1&&i,c=s.kvNumHeads?s.kvNumHeads:s.numHeads,p=h?[s.batchSize,c,u,s.headSize]:void 0,m=s.nReps?s.nReps:1,x=s.scale===0?1/Math.sqrt(s.headSize):s.scale,_=Gt(s.headSize),g=s.headSize/_,y=12,T={x:Math.ceil(u/y),y:Math.ceil(s.sequenceLength/y),z:s.batchSize*s.numHeads},E=[{type:12,data:s.sequenceLength},{type:12,data:g},{type:12,data:u},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:x},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:m}],A=h&&i&&ee.size(i.dims)>0,R=["type","type"];A&&R.push("type"),r&&R.push("type"),o&&R.push("type"),l&&R.push("type");let w=[{dims:d,dataType:e.dataType,gpuDataType:0}];h&&w.push({dims:p,dataType:e.dataType,gpuDataType:0});let b=N=>{let $=ae("q",e.dataType,e.dims,_),O=ae("key",n.dataType,n.dims,_),B=[$,O];if(A){let q=ae("past_key",i.dataType,i.dims,_);B.push(q)}r&&B.push(ae("attention_bias",r.dataType,r.dims));let V=o?ae("seq_lens",o.dataType,o.dims):void 0;V&&B.push(V);let D=l?ae("total_sequence_length_input",l.dataType,l.dims):void 0;D&&B.push(D);let H=Ne("output",e.dataType,d),Y=[H];h&&Y.push(Ne("present_key",e.dataType,p,_));let W=tn(1,_),ne=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;

  var<workgroup> tileQ: array<${$.type.storage}, ${y*y}>;
  var<workgroup> tileK: array<${$.type.storage}, ${y*y}>;
  ${N.registerUniforms(ne).declareVariables(...B,...Y)}
  ${N.mainStart([y,y,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ja(V,D,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${A&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${W}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${A&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${W}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(_){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${_}`)}})()};
        output[outputIdx] = ${H.type.value} (sum * uniforms.alpha) + ${r?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${_};${r!==void 0};${i!==void 0};${t}`,inputDependencies:R},getRunData:()=>({outputs:w,dispatchGroup:T,programUniforms:E}),getShaderSource:b}},pm=(t,e,n,i,r,s,a=void 0,o=void 0)=>{let l=s+r.kvSequenceLength,u=r.nReps?r.nReps:1,d=r.vHiddenSize*u,h=t>1&&i,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=h?[r.batchSize,c,l,r.headSize]:void 0,m=[r.batchSize,r.sequenceLength,d],x=12,_={x:Math.ceil(r.vHeadSize/x),y:Math.ceil(r.sequenceLength/x),z:r.batchSize*r.numHeads},g=[{type:12,data:r.sequenceLength},{type:12,data:l},{type:12,data:r.vHeadSize},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:d},{type:12,data:s},{type:12,data:r.kvSequenceLength},{type:12,data:u}],y=h&&i&&ee.size(i.dims)>0,T=["type","type"];y&&T.push("type"),a&&T.push("type"),o&&T.push("type");let E=[{dims:m,dataType:e.dataType,gpuDataType:0}];h&&E.push({dims:p,dataType:e.dataType,gpuDataType:0});let A=R=>{let w=ae("probs",e.dataType,e.dims),b=ae("v",n.dataType,n.dims),N=[w,b];y&&N.push(ae("past_value",i.dataType,i.dims));let $=a?ae("seq_lens",a.dataType,a.dims):void 0;a&&N.push($);let O=o?ae("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(O);let B=[Ne("output",e.dataType,m)];h&&B.push(Ne("present_value",e.dataType,p));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;
  var<workgroup> tileQ: array<${w.type.value}, ${x*x}>;
  var<workgroup> tileV: array<${w.type.value}, ${x*x}>;
  ${R.registerUniforms(V).declareVariables(...N,...B)}
  ${R.mainStart([x,x,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${u===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${u===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ja($,O,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${y&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${w.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${t}`,inputDependencies:T},getRunData:()=>({outputs:E,dispatchGroup:_,programUniforms:g}),getShaderSource:A}},sa=(t,e,n,i,r,s,a,o,l,u,d=void 0,h=void 0)=>{let c=Math.min(t.outputCount,1+(a?1:0)+(o?1:0)),p=c>1?a:void 0,m=c>1?o:void 0,x=c>1?u.pastSequenceLength:0,_=x+u.kvSequenceLength,g=l&&ee.size(l.dims)>0?l:void 0,y=[e,n];p&&ee.size(p.dims)>0&&y.push(p),g&&y.push(g),d&&y.push(d),h&&y.push(h);let T=t.compute(fm(c,e,n,p,g,u,x,d,h),{inputs:y,outputs:c>1?[-1,1]:[-1]})[0];t.compute(hm(T,u.batchSize,u.numHeads,x,u.sequenceLength,_,d,h),{inputs:d&&h?[T,d,h]:[T],outputs:[]});let E=[T,i];m&&ee.size(m.dims)>0&&E.push(m),d&&E.push(d),h&&E.push(h),t.compute(pm(c,T,i,m,u,x,d,h),{inputs:E,outputs:c>1?[0,2]:[0]})},mm=(t,e)=>{let n=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],i=e.sequenceLength,r=e.inputHiddenSize,s=e.headSize,a=12,o={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},l=[t.inputs[0],t.inputs[1],t.inputs[2]],u=[{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],d=h=>{let c=Ne("output_q",l[0].dataType,n),p=Ne("output_k",l[0].dataType,n),m=Ne("output_v",l[0].dataType,n),x=ae("input",l[0].dataType,l[0].dims),_=ae("weight",l[1].dataType,l[1].dims),g=ae("bias",l[2].dataType,l[2].dims),y=x.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${y}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${y}, ${a*a}>;
  var<workgroup> tileWeightK: array<${y}, ${a*a}>;
  var<workgroup> tileWeightV: array<${y}, ${a*a}>;
  ${h.registerUniforms(T).declareVariables(x,_,g,c,p,m)}
  ${h.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${y}(0);
    var valueK = ${y}(0);
    var valueV = ${y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:u}),getShaderSource:d},{inputs:l,outputs:[-1,-1,-1]})},Zv=(t,e)=>{let n=cm(t.inputs,e),[i,r,s]=mm(t,n);return sa(t,i,r,s,t.inputs[4],void 0,void 0,void 0,t.inputs[5],n)}}),gm,_m,vm,jv,R3=pe(()=>{"use strict";Fn(),Xe(),je(),Vt(),Qe(),gm=(t,e)=>{if(!t||t.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(i,r,s)=>{let a=r.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);r.forEach((o,l)=>{if(o!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(t[0].dims.length>1){let i=e.format==="NHWC"?e.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,e.spatial?2:void 0);n(t[1].dims,i,"Invalid input scale"),n(t[2].dims,i,"Invalid input B"),n(t[3].dims,i,"Invalid input mean"),n(t[4].dims,i,"Invalid input var")}else n(t[1].dims,[1],"Invalid input scale"),n(t[2].dims,[1],"Invalid input B"),n(t[3].dims,[1],"Invalid input mean"),n(t[4].dims,[1],"Invalid input var")},_m=(t,e)=>{let{epsilon:n,spatial:i,format:r}=e,s=t[0].dims,a=i?Gt(s[s.length-1]):1,o=r==="NHWC"&&s.length>1?a:1,l=ee.size(s)/a,u=i,d=u?s.length:s,h=ae("x",t[0].dataType,t[0].dims,a),c=ae("scale",t[1].dataType,t[1].dims,o),p=ae("bias",t[2].dataType,t[2].dims,o),m=ae("inputMean",t[3].dataType,t[3].dims,o),x=ae("inputVar",t[4].dataType,t[4].dims,o),_=Ne("y",t[0].dataType,d,a),g=()=>{let T="";if(i)T=`let cOffset = ${s.length===1?"0u":r==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(r==="NCHW")T=`
            ${_.indicesSet("outputIndices","0","0")}
            let cOffset = ${_.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let E=1;E<c.rank;E++)T+=`cIndices[${E}] = outputIndices[${E}];`;T+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return T},y=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(h,c,p,m,x,_)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${_.offsetToIndices(`global_idx * ${a}`)};
    ${g()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${p.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${x.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${_.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${i}_${a}`,inputDependencies:u?["rank","type","type","type","type"]:void 0},getShaderSource:y,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u?[{type:12,data:l},...Be(s)]:[{type:12,data:l}]})}},vm=t=>Mt(t),jv=(t,e)=>{let{inputs:n,outputCount:i}=t,r=vm({...e,outputCount:i});if(Ft.webgpu.validateInputContent&&gm(n,r),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");t.compute(_m(n,r))}}),ym,xm,Jv,C3=pe(()=>{"use strict";je(),Qe(),ym=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xm=t=>{let e=t[0].dims,n=t[0].dims[2],i=ee.size(e)/4,r=t[0].dataType,s=ae("input",r,e,4),a=ae("bias",r,[n],4),o=ae("residual",r,e,4),l=Ne("output",r,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const channels = ${n}u / 4;
  ${u.declareVariables(s,a,o,l)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Jv=t=>{ym(t.inputs),t.compute(xm(t.inputs))}}),bm,xt,Qv,ey,ty,ny,iy,ry,sy,ay,oy,wm,ly,uy,dy,cy,Ys,hy,go,fy,py,my,gy,_y,vy,yy,xy,by,wy,Sy,My,Ey,Ty,Ay,Ry,Cy,tu,Iy,Id,Dd,Dy,Py,$y,Sm,Mm,Ly,yc=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),bm=(t,e,n,i,r,s,a)=>{let o=Math.ceil(e/4),l="";typeof r=="string"?l=`${r}(a)`:l=r("a");let u=ae("inputData",n,[o],4),d=Ne("outputData",i,[o],4),h=[{name:"vec_size",type:"u32"}];return a&&h.push(...a),`
      ${t.registerUniforms(h).declareVariables(u,d)}

  ${s??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${u.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",l)}
  }`},xt=(t,e,n,i,r,s=t.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(ee.size(t.dims)/4)}];return a&&l.push(...a),{name:e,shaderCache:{hint:r,inputDependencies:["type"]},getShaderSource:u=>bm(u,ee.size(t.dims),t.dataType,s,n,i,o),getRunData:u=>({outputs:[{dims:t.dims,dataType:s}],dispatchGroup:{x:Math.ceil(ee.size(u[0].dims)/64/4)},programUniforms:l})}},Qv=t=>{t.compute(xt(t.inputs[0],"Abs","abs"))},ey=t=>{t.compute(xt(t.inputs[0],"Acos","acos"))},ty=t=>{t.compute(xt(t.inputs[0],"Acosh","acosh"))},ny=t=>{t.compute(xt(t.inputs[0],"Asin","asin"))},iy=t=>{t.compute(xt(t.inputs[0],"Asinh","asinh"))},ry=t=>{t.compute(xt(t.inputs[0],"Atan","atan"))},sy=t=>{t.compute(xt(t.inputs[0],"Atanh","atanh"))},ay=t=>Mt(t),oy=(t,e)=>{let n;switch(e.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}t.compute(xt(t.inputs[0],"Cast",n,void 0,e.cacheKey,e.to))},wm=t=>{let e,n,i=t.length>=2&&t[1].data!==0,r=t.length>=3&&t[2].data!==0;switch(t[0].dataType){case 1:e=i?t[1].getFloat32Array()[0]:-34028234663852886e22,n=r?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=i?t[1].getUint16Array()[0]:64511,n=r?t[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Mt({min:e,max:n})},ly=(t,e)=>{let n=e||wm(t.inputs),i=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"Clip",r=>`clamp(${r}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:t.inputs[0].dataType,data:n.min},{type:t.inputs[0].dataType,data:n.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},uy=t=>{t.compute(xt(t.inputs[0],"Ceil","ceil"))},dy=t=>{t.compute(xt(t.inputs[0],"Cos","cos"))},cy=t=>{t.compute(xt(t.inputs[0],"Cosh","cosh"))},Ys=t=>Mt(t),hy=(t,e)=>{let n=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${n}(${e.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},go=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,fy=t=>{let e=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"Erf",n=>`erf_vf32(${n})`,go(e)))},py=t=>{t.compute(xt(t.inputs[0],"Exp","exp"))},my=t=>{t.compute(xt(t.inputs[0],"Floor","floor"))},gy=t=>{let e=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,go(e)))},_y=(t,e)=>{let n=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${e.alpha});`,e.cacheKey))},vy=t=>{t.compute(xt(t.inputs[0],"Not",e=>`!${e}`))},yy=t=>{t.compute(xt(t.inputs[0],"Neg",e=>`-${e}`))},xy=t=>{t.compute(xt(t.inputs[0],"Reciprocal",e=>`1.0/${e}`))},by=t=>{let e=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"Relu",n=>`select(vec4<${e}>(0.0), ${n}, ${n} > vec4<${e}>(0.0))`))},wy=t=>{t.compute(xt(t.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},Sy=t=>Mt(t),My=(t,e)=>{let n=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"HardSigmoid",i=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${e.alpha} * ${i} + vec4<${n}>(${e.beta})))`,void 0,e.cacheKey))},Ey=t=>{let e=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"HardSwish",n=>`${n} * max(vec4<${e}>(0.0), min(vec4<${e}>(1.0), vec4<${e}>(${e}(1.0 / 6.0)) * ${n} + vec4<${e}>(0.5)))`))},Ty=t=>{t.compute(xt(t.inputs[0],"Sin","sin"))},Ay=t=>{t.compute(xt(t.inputs[0],"Sinh","sinh"))},Ry=t=>{t.compute(xt(t.inputs[0],"Sqrt","sqrt"))},Cy=t=>{t.compute(xt(t.inputs[0],"Tan","tan"))},tu=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,Iy=t=>{t.compute(xt(t.inputs[0],"Tanh",tu))},Id=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${tu("v")};
}
`,Dd=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,Dy=t=>{let e=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"FastGelu",Dd,Id(e),void 0,t.inputs[0].dataType))},Py=(t,e)=>{let n=tn(t.inputs[0].dataType);return t.compute(xt(t.inputs[0],"ThresholdedRelu",i=>`select(vec4<${n}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${e.alpha});`,e.cacheKey)),0},$y=t=>{t.compute(xt(t.inputs[0],"Log","log"))},Sm=(t,e)=>`
const alpha = vec4<${t}>(${e});
const one = ${t}(1.0);
const zero = ${t}(0.0);

fn quick_gelu_impl(x: vec4<${t}>) -> vec4<${t}> {
  let v = x *alpha;
  var x1 : vec4<${t}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Mm=t=>`quick_gelu_impl(${t})`,Ly=(t,e)=>{let n=tn(t.inputs[0].dataType);t.compute(xt(t.inputs[0],"QuickGelu",Mm,Sm(n,e.alpha),e.cacheKey,t.inputs[0].dataType))}}),Em,Tm,Ny,I3=pe(()=>{"use strict";je(),Qe(),yc(),Em=t=>{if(t[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(t[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tm=t=>{let e=t[0].dims.slice();e[2]=e[2]/2;let n=ae("input",t[0].dataType,t[0].dims,4),i=ae("bias",t[0].dataType,[t[0].dims[2]],4),r=Ne("output",t[0].dataType,e,4),s=ee.size(e)/4,a=nn(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${o.declareVariables(n,i,r)}

  ${go(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${r.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ny=t=>{Em(t.inputs),t.compute(Tm(t.inputs))}}),Am,Rm,ni,Uy,Oy,ky,Fy,By,zy,Gy,Hy,Vy,Wy,D3=pe(()=>{"use strict";Xe(),je(),Qe(),Am=(t,e,n,i,r,s,a,o,l,u,d,h)=>{let c,p;typeof o=="string"?c=p=(y,T)=>`${o}((${y}),(${T}))`:typeof o=="function"?c=p=o:(c=o.scalar,p=o.vector);let m=Ne("outputData",d,i.length,4),x=ae("aData",l,e.length,4),_=ae("bData",u,n.length,4),g;if(r)if(s){let y=ee.size(e)===1,T=ee.size(n)===1,E=e.length>0&&e[e.length-1]%4===0,A=n.length>0&&n[n.length-1]%4===0;y||T?g=m.setByOffset("global_idx",p(y?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"),T?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"))):g=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${x.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${_.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",p(a||E?x.getByOffset("offsetA / 4u"):`${x.type.value}(${x.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||A?_.getByOffset("offsetB / 4u"):`${_.type.value}(${_.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else g=m.setByOffset("global_idx",p(x.getByOffset("global_idx"),_.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let y=(T,E,A="")=>{let R=`aData[indexA${E}][componentA${E}]`,w=`bData[indexB${E}][componentB${E}]`;return`
            let outputIndices${E} = ${m.offsetToIndices(`global_idx * 4u + ${E}u`)};
            let offsetA${E} = ${x.broadcastedIndicesToOffset(`outputIndices${E}`,m)};
            let offsetB${E} = ${_.broadcastedIndicesToOffset(`outputIndices${E}`,m)};
            let indexA${E} = offsetA${E} / 4u;
            let indexB${E} = offsetB${E} / 4u;
            let componentA${E} = offsetA${E} % 4u;
            let componentB${E} = offsetB${E} % 4u;
            ${T}[${E}] = ${A}(${c(R,w)});
          `};d===9?g=`
            var data = vec4<u32>(0);
            ${y("data",0,"u32")}
            ${y("data",1,"u32")}
            ${y("data",2,"u32")}
            ${y("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${y("outputData[global_idx]",0)}
            ${y("outputData[global_idx]",1)}
            ${y("outputData[global_idx]",2)}
            ${y("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(x,_,m)}

        ${h??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},Rm=(t,e,n,i,r,s,a=n.dataType)=>{let o=n.dims.map(Number),l=i.dims.map(Number),u=!ee.areEqual(o,l),d=o,h=ee.size(o),c=!1,p=!1,m=[u];if(u){let x=ds.calcShape(o,l,!1);if(!x)throw new Error("Can't perform binary op on the given tensors");d=x.slice(),h=ee.size(d);let _=ee.size(o)===1,g=ee.size(l)===1,y=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;m.push(_),m.push(g),m.push(y),m.push(T);let E=1;for(let A=1;A<d.length;A++){let R=o[o.length-A],w=l[l.length-A];if(R===w)E*=R;else break}E%4===0?(p=!0,c=!0):(_||g||y||T)&&(c=!0)}else c=!0;return m.push(c),{name:t,shaderCache:{hint:e+m.map(x=>x.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:x=>Am(x,o,l,d,c,u,p,r,n.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(ee.size(d)/4)},...Be(o,l,d)]})}},ni=(t,e,n,i,r,s)=>{t.compute(Rm(e,r??"",t.inputs[0],t.inputs[1],n,i,s))},Uy=t=>{ni(t,"Add",(e,n)=>`${e}+${n}`)},Oy=t=>{ni(t,"Div",(e,n)=>`${e}/${n}`)},ky=t=>{ni(t,"Equal",{scalar:(e,n)=>`u32(${e}==${n})`,vector:(e,n)=>`vec4<u32>(${e}==${n})`},void 0,void 0,9)},Fy=t=>{ni(t,"Mul",(e,n)=>`${e}*${n}`)},By=t=>{let e=ae("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;ni(t,"Pow",{scalar:(n,i)=>`pow_custom(${n},${i})`,vector:(n,i)=>`pow_vector_custom(${n},${i})`},`
    fn pow_custom(a : ${e}, b : ${e}) -> ${e} {
      if (b == ${e}(0.0)) {
        return ${e}(1.0);
      } else if (a < ${e}(0.0) && f32(b) != floor(f32(b))) {
        return ${e}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${e}(1.0), round(f32(abs(b) % ${e}(2.0))) != 1.0) * ${e}(${e==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${e}>, b : vec4<${e}>) -> vec4<${e}> {
      // TODO: implement vectorized pow
      return vec4<${e}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},zy=t=>{ni(t,"Sub",(e,n)=>`${e}-${n}`)},Gy=t=>{ni(t,"Greater",{scalar:(e,n)=>`u32(${e}>${n})`,vector:(e,n)=>`vec4<u32>(${e}>${n})`},void 0,void 0,9)},Hy=t=>{ni(t,"Less",{scalar:(e,n)=>`u32(${e}<${n})`,vector:(e,n)=>`vec4<u32>(${e}<${n})`},void 0,void 0,9)},Vy=t=>{ni(t,"GreaterOrEqual",{scalar:(e,n)=>`u32(${e}>=${n})`,vector:(e,n)=>`vec4<u32>(${e}>=${n})`},void 0,void 0,9)},Wy=t=>{ni(t,"LessOrEqual",{scalar:(e,n)=>`u32(${e}<=${n})`,vector:(e,n)=>`vec4<u32>(${e}<=${n})`},void 0,void 0,9)}}),Cm,Im,qy,Xy,P3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Cm=(t,e)=>{if(!t||t.length<1)throw new Error("too few inputs");let n=0,i=t[n],r=i.dataType,s=i.dims.length;t.forEach((a,o)=>{if(o!==n){if(a.dataType!==r)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,u)=>{if(u!==e&&l!==i.dims[u])throw new Error("non concat dimensions must match")})}})},Im=(t,e,n,i,r=0)=>{let s=t.reduce((g,y)=>g+ee.size(y.dims),0),a=new Array(t.length),o=new Array(t.length),l=new Array(t.length),u=0,d=r,h=[],c=[],p=[{type:12,data:s}];for(let g=0;g<t.length;++g)a[g]=u,o[g]=d,u+=ee.size(t[g].dims),d+=t[g].dims[e],c.push(t[g].dims.length),l[g]=ae(`input${g}`,i,c[g]),h.push("rank"),p.push({type:12,data:a[g]}),p.push({type:12,data:o[g]});for(let g=0;g<t.length;++g)p.push(...Be(t[g].dims));p.push(...Be(n));let m=Ne("output",i,n.length),x=l.map((g,y)=>{let T=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${y}`};
        var outputIndices = ${g.offsetToIndices("inputOffset")};
        ${m.indicesGet("outputIndices",e)} += uniforms.outputAxisOffset${y};
        ${m.setByIndices("outputIndices",g.getByOffset("inputOffset"))}`;return t.length===1?T:y===0?`if (inputIndex == 0u) {${T}}`:y===t.length-1?`else {${T}}`:`else if (inputIndex == ${y}u) {${T}}`}).join(`
`),_=g=>`

  ${(()=>{g.registerUniform("outputSize","u32");for(let y=0;y<t.length;y++)g.registerUniform(`inputOffset${y}`,"u32"),g.registerUniform(`outputAxisOffset${y}`,"u32");return g.declareVariables(...l,m)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${l.slice(1).map((y,T)=>`if (global_idx < uniforms.inputOffset${T+1}) {
      return ${T}u;
    }`).join(`
`)}
    return ${t.length-1}u;
  }

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${x}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:_}},qy=(t,e)=>{let n=t.inputs,i=n[0].dims,r=ee.normalizeAxis(e.axis,i.length);Cm(n,r);let s=i.slice();s[r]=n.reduce((u,d)=>u+(d.dims.length>r?d.dims[r]:0),0);let a=n.filter(u=>ee.size(u.dims)>0);if(a.length===0){t.output(0,s);return}let o=t.deviceLimits.maxStorageBuffersPerShaderStage-1,l=0;for(let u=0;u<a.length;u+=o){let d=a.slice(u,u+o);t.compute(Im(d,r,s,n[0].dataType,l),{inputs:d,outputs:[0]}),l+=d.reduce((h,c)=>h+c.dims[r],0)}},Xy=t=>Mt({axis:t.axis})}),Ir,Dr,Pr,xc,Nr=pe(()=>{"use strict";Xe(),je(),Ir=(t,e,n="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${n}(uniforms.clip_min)), ${e}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${t.activation}`)}},Dr=(t,e)=>{t.activation==="Clip"?e.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):t.activation==="HardSigmoid"?e.push({type:1,data:t.alpha},{type:1,data:t.beta}):t.activation==="LeakyRelu"&&e.push({type:1,data:t.alpha})},Pr=(t,e)=>{t.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):t.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):t.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},xc=t=>{let e=(t==null?void 0:t.activation)||"";if(e==="HardSigmoid"){let[n,i]=(t==null?void 0:t.activation_params)||[.2,.5];return{activation:e,alpha:n,beta:i}}else if(e==="Clip"){let[n,i]=(t==null?void 0:t.activation_params)||[vv,yv];return{activation:e,clipMax:i,clipMin:n}}else if(e==="LeakyRelu"){let[n]=(t==null?void 0:t.activation_params)||[.01];return{activation:e,alpha:n}}return{activation:e}}}),dn,Ky,bc=pe(()=>{"use strict";dn=(t,e)=>{switch(t){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${t}-component is not supported.`)}},Ky=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Yy,$3=pe(()=>{"use strict";Yy=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),Js,wc,Sc=pe(()=>{"use strict";Xe(),je(),Qe(),Nr(),Js=(t,e,n,i,r)=>{let s=i-n;return`
      ${Array.from({length:n}).map((a,o)=>`
      if (${Fe(e.shape,o,e.rank)} != 1) {
        ${e.indicesSet(t,o,Fe(r,o+s,i))}
      } else {
        ${e.indicesSet(t,o,0)}
      }`).join("")}
`},wc=(t,e,n,i,r=!1,s)=>{let a=t[0].dims,o=t[1].dims,l=a[a.length-2],u=o[o.length-1],d=a[a.length-1],h=Gt(u),c=Gt(d),p=Gt(l),m=ee.size(n)/h/p,x=t.length>2,_=i?i.slice(0,-2):n.slice(0,-2),g=[ee.size(_),l,u],y=[{type:12,data:m},{type:12,data:l},{type:12,data:u},{type:12,data:d}];Dr(e,y),y.push(...Be(_,a,o)),x&&y.push(...Be(t[2].dims)),y.push(...Be(g));let T=E=>{let A=gc("batch_dims",t[0].dataType,_.length),R=ae("a",t[0].dataType,a.length,c),w=ae("b",t[1].dataType,o.length,h),b=Ne("output",t[0].dataType,g.length,h),N=nn(b.type.tensor),$=Ir(e,b.type.value,N),O=[R,w],B="";if(x){let H=r?h:1;O.push(ae("bias",t[2].dataType,t[2].dims.length,H)),B=`${r?`value += bias[col / ${H}];`:`value += ${b.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Pr(e,V);let D=()=>{let H=`var a_data: ${R.type.value};`;for(let Y=0;Y<c;Y++)H+=`
              let b_data${Y} = b[(b_offset + (k + ${Y}) * uniforms.N + col) / ${h}];`;for(let Y=0;Y<p;Y++){H+=`a_data = a[(a_offset + (row + ${Y}) * uniforms.K + k) / ${c}];`;for(let W=0;W<c;W++)H+=`
            values[${Y}] = fma(${w.type.value}(a_data${c===1?"":`[${W}]`}), b_data${W}, values[${Y}]);
`}return H};return`
  ${E.registerUniforms(V).registerInternalVariables(A).declareVariables(...O,b)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${A.offsetToIndices("batch")};`}

    var a_indices: ${R.type.indices};
    ${Js("a_indices",R,R.rank-2,A.rank,"batch_indices")}
    ${R.indicesSet("a_indices",R.rank-2,0)}
    ${R.indicesSet("a_indices",R.rank-1,0)}
    let a_offset = ${R.indicesToOffset("a_indices")};

    var b_indices: ${w.type.indices};
    ${Js("b_indices",w,w.rank-2,A.rank,"batch_indices")}
    ${w.indicesSet("b_indices",w.rank-2,0)}
    ${w.indicesSet("b_indices",w.rank-1,0)}
    let b_offset = ${w.indicesToOffset("b_indices")};
    var values: array<${b.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${D()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${B}
      ${$}
      let cur_indices = ${b.type.indices}(batch, row + i, col);
      let offset = ${b.indicesToOffset("cur_indices")};
      ${b.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${h};${c};${p};${r}`,inputDependencies:x?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:T}}}),Dm,Pm,Pd,nu,$m,$d,Lm,Io,Mc=pe(()=>{"use strict";Xe(),je(),Qe(),Nr(),Sc(),bc(),Dm=(t,e)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,Pm=(t,e)=>t?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${e===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Pd=(t,e,n="f32",i,r=!1,s=32,a=!1,o=32)=>{let l=e[1]*t[1],u=e[0]*t[0],d=r?l:s,h=r?s:l,c=d/e[0],p=s/e[1];if(!((r&&c===4&&t[1]===4||!r&&(c===3||c===4))&&d%e[0]===0&&s%e[1]===0&&t[0]===4))throw new Error(`If transposeA ${r} is true, innerElementSize ${c} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${e[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${n}>, ${d/c}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${u/t[0]}>, ${s}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${c};
const tileInner = ${s};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Dm(r,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${c===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Pm(r,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},nu=(t,e)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,$m=t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",$d=(t,e,n="f32",i,r=!1,s=32,a=!1,o=32,l=!1)=>{let u=t[1]*e[1],d=t[0]*e[0],h=r?u:s,c=r?s:u;if(!(c%e[1]===0&&h%e[0]===0&&s%e[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${e[0]}, tileInner ${s} must be divisible by workgroupSize[1]${e[1]}`);let p=c/e[1],m=h/e[0],x=s/e[1],_=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${u};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${e[0]}) {
          ${nu(r,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${e[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${e[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${r?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${e[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${e[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${u};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${x};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${nu(r,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${$m(r)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${h}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${d}>, ${s}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${s};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${_}
  }
`},Lm=(t,e,n,i,r=!1)=>{let[s,a,o,l]=i,u=nn(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${dn(t,u)} {
      var value = ${dn(t,u)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Js("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${dn(t,u)} {
      var value = ${dn(t,u)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Js("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${dn(t,u)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${r?"bias[colIn]":`${dn(t,u)}(bias[row])`};`:""}
        ${n}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Io=(t,e,n,i,r=!1,s)=>{let a=t[0].dims,o=t[1].dims,l=a.slice(0,-2),u=o.slice(0,-2),d=i?i.slice(0,-2):n.slice(0,-2),h=ee.size(d),c=a[a.length-2],p=a[a.length-1],m=o[o.length-1],x=p%4===0&&m%4===0,_=c<=8?[4,1,1]:[4,4,1],g=[8,8,1],y=[Math.ceil(m/g[0]/_[0]),Math.ceil(c/g[1]/_[1]),Math.ceil(h/g[2]/_[2])],T=x?4:1,E=[...l,c,p/T],A=E.length,R=[...u,p,m/T],w=R.length,b=[h,c,m/T],N=[{type:6,data:c},{type:6,data:m},{type:6,data:p}];Dr(e,N),N.push(...Be(d,E,R));let $=["rank","rank"],O=t.length>2;O&&(N.push(...Be(t[2].dims)),$.push("rank")),N.push(...Be(b));let B=V=>{let D=d.length,H=gc("batchDims",t[0].dataType,D,1),Y=nn(t[0].dataType),W=ae("a",t[0].dataType,A,T),ne=ae("b",t[1].dataType,w,T),q=Ne("result",t[0].dataType,b.length,T),ie=[W,ne];if(O){let fe=r?T:1;ie.push(ae("bias",t[2].dataType,t[2].dims.length,fe))}let k=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Pr(e,k);let le=nn(q.type.tensor),he=Ir(e,q.type.value,le),z=Lm(T,O,he,[H,W,ne,q],r);return`
  ${V.registerUniforms(k).registerInternalVariables(H).declareVariables(...ie,q)}
  ${z}
  ${x?Pd(_,g,Y,H):$d(_,g,Y,H)}
                   `};return{name:"MatMul",shaderCache:{hint:`${_};${e.activation};${x};${r}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:t[0].dataType}],dispatchGroup:{x:y[0],y:y[1],z:y[2]},programUniforms:N}),getShaderSource:B}}}),Nm,Zy,L3=pe(()=>{"use strict";Xe(),Gi(),Qe(),Nr(),bc(),$3(),Mc(),Nm=(t,e,n,i,r=!1,s,a=4,o=4,l=4,u="f32")=>{let d=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${u}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},c=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",x=t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=t?"row":"col",g=t?"col":"row",y=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${_} / outWidth;
    let outCol = ${_} % outWidth;

    let WRow = ${g} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${g} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${g} % inChannels;
    var resData = ${dn(a,u)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${x}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(a)}
    }
    return resData;`,T=t?e&&i?`
    let col = colIn * ${a};
    ${y}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${y}
    }
    return ${dn(a,u)}(0.0);`:i&&n?`
    let col = colIn * ${a};
    ${y}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${y}
    }
    return ${dn(a,u)}(0.0);`,E=t?i&&n?h(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(o)}
    }
    return ${dn(o,u)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(o)}
    }
    return ${dn(o,u)}(0.0);`,A=dn(l,u),R=dn(t?a:o,u),w=dn(t?o:a,u),b=Ir(s,A,u);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${R} {
      ${t?T:E}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${w} {
      ${t?E:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${A}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${p}
      ${Ky(r)}
      ${b}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Zy=(t,e,n,i,r,s,a,o,l)=>{let u=e.format==="NHWC",d=u?t[0].dims[3]:t[0].dims[1],h=n[0],c=u?n[2]:n[3],p=u?n[1]:n[2],m=u?n[3]:n[1],x=u&&(d%4===0||d%3===0)&&m%4===0,_=u?m:c*p,g=u?c*p:m,y=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],E=[Math.ceil(_/y[0]/T[0]),Math.ceil(g/y[1]/T[1]),Math.ceil(h/y[2]/T[2])];_t("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${E}`);let A=x?u&&d%4!==0?3:4:1,R=y[1]*T[1],w=y[0]*T[0],b=Math.max(y[0]*A,y[1]),N=i%R===0,$=r%w===0,O=s%b===0,B=x?[A,4,4]:[1,1,1],V=[{type:6,data:i},{type:6,data:r},{type:6,data:s},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];Dr(e,V),V.push(...Be(t[0].dims,t[1].dims));let D=["rank","rank"];a&&(V.push(...Be(t[2].dims)),D.push("rank")),V.push(...Be(n));let H=Y=>{let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Pr(e,W);let ne=x?4:1,q=nn(t[0].dataType),ie=`
      fn setOutputAtIndex(flatIndex : i32, value : ${x?`vec4<${q}>`:q}) {
        result[flatIndex] = ${x?`vec4<${q}>`:q}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${x?`vec4<${q}>`:q}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${x?"/ 4":""}, value);
      }`,k=ae("x",t[0].dataType,t[0].dims.length,A===3?1:A),le=ae("w",t[1].dataType,t[1].dims.length,ne),he=[k,le],z=Ne("result",t[0].dataType,n.length,ne);if(a){let fe=ae("bias",t[2].dataType,t[2].dims.length,ne);he.push(fe),ie+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${x?`vec4<${q}>`:q} {
          return bias[coords.${u?"w":"y"}${x?"/ 4":""}];
        }`}return`
        ${Yy("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Y.registerUniforms(W).declareVariables(...he,z)}
        ${ie}
        ${Nm(u,N,$,O,a,e,B[0],B[1],B[2],q)}
        ${x?Pd(T,y,q,void 0,!u,b):$d(T,y,q,void 0,!u,b,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${A};${x};${N};${$};${O};${R};${w};${b}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:l?l(n):n,dataType:t[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:V}),getShaderSource:H}}}),Um,iu,Os,Om,ru,km,jy,Jy,N3=pe(()=>{"use strict";Xe(),Gi(),je(),Qe(),Nr(),bc(),Um=t=>{let e=1;for(let n=0;n<t.length;n++)e*=t[n];return e},iu=t=>typeof t=="number"?[t,t,t]:t,Os=(t,e)=>e<=1?t:t+(t-1)*(e-1),Om=(t,e,n,i=1)=>{let r=Os(e,i);return Math.floor((t[0]*(n-1)-n+r)/2)},ru=(t,e,n,i,r)=>{r==null&&(r=Om(t,e[0],i[0]));let s=[0,0,0,n];for(let a=0;a<3;a++)t[a]+2*r>=e[a]&&(s[a]=Math.trunc((t[a]-e[a]+2*r)/i[a]+1));return s},km=(t,e,n,i,r,s,a,o,l,u)=>{let d,h,c,p;if(t==="VALID"&&(t=0),typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t};let m=ru([e,n,i,1],[o,l,u],1,[r,s,a],t);h=m[0],c=m[1],p=m[2]}else if(Array.isArray(t)){if(!t.every((x,_,g)=>x===g[0]))throw Error(`Unsupported padding parameter: ${t}`);d={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let m=ru([e,n,i,1],[o,l,u],1,[r,s,a],t[0]);h=m[0],c=m[1],p=m[2]}else if(t==="SAME_UPPER"){h=Math.ceil(e/r),c=Math.ceil(n/s),p=Math.ceil(i/a);let m=(h-1)*r+o-e,x=(c-1)*s+l-n,_=(p-1)*a+u-i,g=Math.floor(m/2),y=m-g,T=Math.floor(x/2),E=x-T,A=Math.floor(_/2),R=_-A;d={top:T,bottom:E,left:A,right:R,front:g,back:y}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:h,outHeight:c,outWidth:p}},jy=(t,e,n,i,r,s=!1,a="channelsLast")=>{let o,l,u,d,h;if(a==="channelsLast")[o,l,u,d,h]=t;else if(a==="channelsFirst")[o,h,l,u,d]=t;else throw new Error(`Unknown dataFormat ${a}`);let[c,,p,m,x]=e,[_,g,y]=iu(n),[T,E,A]=iu(i),R=Os(p,T),w=Os(m,E),b=Os(x,A),{padInfo:N,outDepth:$,outHeight:O,outWidth:B}=km(r,l,u,d,_,g,y,R,w,b),V=s?c*h:c,D=[0,0,0,0,0];return a==="channelsFirst"?D=[o,V,$,O,B]:a==="channelsLast"&&(D=[o,$,O,B,V]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:$,outHeight:O,outWidth:B,outChannels:V,padInfo:N,strideDepth:_,strideHeight:g,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:x,effectiveFilterDepth:R,effectiveFilterHeight:w,effectiveFilterWidth:b,dilationDepth:T,dilationHeight:E,dilationWidth:A,inShape:t,outShape:D,filterShape:e}},Jy=(t,e,n,i,r,s)=>{let a=s==="channelsLast",o=a?t[0].dims[3]:t[0].dims[1],l=!1,u=[64,1,1],d={x:n.map((y,T)=>T)},h=[Math.ceil(Um(d.x.map(y=>n[y]))/u[0]),1,1];_t("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${h}`);let c=l?a&&o%4!==0?3:4:1,p=ee.size(n),m=[{type:12,data:p},{type:12,data:i},{type:12,data:r},{type:12,data:e.strides},{type:12,data:e.dilations}];Dr(e,m),m.push(...Be(t[0].dims,t[1].dims));let x=["rank","rank"],_=t.length===3;_&&(m.push(...Be(t[2].dims)),x.push("rank")),m.push(...Be(n));let g=y=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:r.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];Pr(e,T);let E=l?4:1,A=nn(t[0].dataType),R=ae("x",t[0].dataType,t[0].dims.length,c===3?1:c),w=ae("W",t[1].dataType,t[1].dims.length,E),b=[R,w],N=Ne("result",t[0].dataType,n.length,E),$="";if(_){let V=ae("bias",t[2].dataType,t[2].dims.length,E);b.push(V),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${A}>`:A} {
          return bias[${a?Fe("coords",4,5):Fe("coords",1,5)}${l?"/ 4":""}];
        }`}let O=dn(c,A),B=Ir(e,O,A);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${A} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${R.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${A} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${w.getByIndices("aIndices")};
            }
          ${y.registerUniforms(T).declareVariables(...b,N)}
          ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${N.offsetToIndices("global_idx")};
              let batch = ${Fe("coords",0,R.rank)};
              let d2 = ${a?Fe("coords",R.rank-1,R.rank):Fe("coords",1,R.rank)};
              let xFRCCorner = vec3<u32>(${a?Fe("coords",1,R.rank):Fe("coords",2,R.rank)},
              ${a?Fe("coords",2,R.rank):Fe("coords",3,R.rank)},
              ${a?Fe("coords",3,R.rank):Fe("coords",4,R.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Fe("uniforms.x_shape",1,R.rank):Fe("uniforms.x_shape",2,R.rank)};
              let xShapeZ = ${a?Fe("uniforms.x_shape",2,R.rank):Fe("uniforms.x_shape",3,R.rank)};
              let xShapeW = ${a?Fe("uniforms.x_shape",3,R.rank):Fe("uniforms.x_shape",4,R.rank)};
              let xShapeU = ${a?Fe("uniforms.x_shape",4,R.rank):Fe("uniforms.x_shape",1,R.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${A}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<${A}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${A}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${A}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<${A}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${A}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${A}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<${A}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${A}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${A}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${B}
              result[global_idx] = ${A}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${c};${_}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:h[0],y:h[1],z:h[2]},programUniforms:m}),getShaderSource:g}}}),Qy,ex,U3=pe(()=>{"use strict";Xe(),je(),Qe(),Nr(),Qy=(t,e,n,i)=>{let r=t.length>2,s=r?"value += b[output_channel];":"",a=t[0].dims,o=t[1].dims,l=e.format==="NHWC",u=l?n[3]:n[1],d=u/e.group,h=l&&d>=4?Gt(u):1,c=ee.size(n)/h,p=[{type:12,data:c},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:d}];Dr(e,p),p.push(...Be(a,[o[0],o[1],o[2],o[3]/h]));let m=r?["rank","rank","rank"]:["rank","rank"];p.push(...Be([n[0],n[1],n[2],n[3]/h]));let x=_=>{let g=Ne("output",t[0].dataType,n.length,h),y=nn(g.type.tensor),T=Ir(e,g.type.value,y),E=ae("x",t[0].dataType,a.length),A=ae("w",t[1].dataType,o.length,h),R=[E,A];r&&R.push(ae("b",t[2].dataType,t[2].dims,h));let w=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Pr(e,w);let b=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${E.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${A.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${E.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${A.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${_.registerUniforms(w).declareVariables(...R,g)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${g.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${g.type.value} = ${g.type.value}(0);
    ${b}
    ${s}
    ${T}
    ${g.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${h}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:p}),getShaderSource:x}},ex=(t,e,n,i)=>{let r=t.length>2,s=Gt(n[3]),a=Gt(n[2]),o=ee.size(n)/s/a,l=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/s],u=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/s],d=[n[0],n[1],n[2],n[3]/s],h=[{type:12,data:o},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];Dr(e,h),h.push(...Be(l,u,d));let c=(a-1)*e.strides[1]+u[1],p=m=>{let x=Ne("output",t[0].dataType,d.length,s),_=nn(x.type.tensor),g=Ir(e,x.type.value,_),y=ae("x",t[0].dataType,l.length,s),T=ae("w",t[1].dataType,u.length,s),E=[y,T];r&&E.push(ae("b",t[2].dataType,t[2].dims,s));let A=r?"value += b[output_channel];":"",R=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Pr(e,R),`
  ${m.registerUniforms(R).declareVariables(...E,x)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${y.type.value}, ${c}>;
    var values: array<${x.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${u[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${y.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${y.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${u[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${A}
      ${g}
      ${x.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${s};${a};${c};${u[0]};${u[1]}`,inputDependencies:r?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}),getShaderSource:p}}}),Fm,Ja,Bm,Qa,Ld,su,zm,Gm,Nd,O3=pe(()=>{"use strict";je(),L3(),N3(),Mc(),U3(),Nr(),Sc(),dr(),Fm=(t,e,n,i,r,s)=>{let a=t[0],o=t.slice(s?1:2,s?3:4),l=o.length,u=e[0],d=e.slice(2).map((c,p)=>c+(c-1)*(n[p]-1)),h=o.map((c,p)=>c+i[p]+i[p+l]).map((c,p)=>Math.floor((c-d[p]+r[p])/r[p]));return h.splice(0,0,a),h.splice(s?3:1,0,u),h},Ja=[2,3,1,0],Bm=(t,e)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw new Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let n=t[0].dims[e.format==="NHWC"?t[0].dims.length-1:1],i=t[1].dims[1]*e.group;if(n!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(t.length===3&&(t[2].dims.length!==1||t[1].dims[0]!==t[2].dims[0]))throw new Error("invalid bias");let r=t[0].dims.length-2;if(e.dilations.length!==r)throw new Error(`dilations should be ${r}D`);if(e.strides.length!==r)throw new Error(`strides should be ${r}D`);if(e.pads.length!==r*2)throw new Error(`pads should be ${r*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape")},Qa=(t,e)=>{let n=t.kernelShape.slice();n.length<e[1].dims.length-2&&n.push(...Array(e[1].dims.length-2-n.length).fill(0));for(let s=2;s<e[1].dims.length;++s)n[s-2]===0&&(n[s-2]=e[1].dims[s]);let i=t.pads.slice();Ro.adjustPadsBasedOnAutoPad(e[0].dims,t.strides,t.dilations,n,i,t.format==="NHWC",t.autoPad);let r=Object.assign({},t);return Object.assign(r,{kernelShape:n,pads:i}),r},Ld=t=>{let e=xc(t),n=t.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],r=t.dilations,s=t.group,a=t.kernel_shape,o=t.pads,l=t.strides,u=t.w_is_const();return{autoPad:i,format:n,dilations:r,group:s,kernelShape:a,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${t.format};${e.activation};`}},su=(t,e,n,i)=>{let r=n.format==="NHWC",s=Fm(e[0].dims,e[1].dims,n.dilations,n.pads,n.strides,r);if(n.group!==1){let R=[e[0]];if(r){let w=t.kernelCustomData.wT??t.compute(kn(e[1],Ja),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=w),R.push(w)}else R.push(e[1]);e.length===3&&R.push(e[2]),!t.adapterInfo.isArchitecture("ampere")&&r&&e[1].dims[0]===n.group&&e[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?t.compute(ex(R,n,s,i),{inputs:R}):t.compute(Qy(R,n,s,i),{inputs:R});return}let a=e.length===3,o=e[0].dims[r?1:2],l=e[0].dims[r?2:3],u=e[0].dims[r?3:1],d=e[1].dims[2],h=e[1].dims[3],c=s[r?1:2],p=s[r?2:3],m=s[r?3:1],x=r&&d===o&&h===l&&n.pads[0]===0&&n.pads[1]===0;if(x||d===1&&h===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let R=s[0],w,b,N,$=[];if(r){let V=t.kernelCustomData.wT??t.compute(kn(e[1],Ja),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=V),x){let D=o*l*u;w=e[0].reshape([1,R,D]),b=V.reshape([1,D,m]),N=[1,R,m]}else w=e[0].reshape([R,o*l,u]),b=V.reshape([1,u,m]),N=[R,c*p,m];$.push(w),$.push(b)}else w=e[0].reshape([R,u,o*l]),b=e[1].reshape([1,m,u]),N=[R,m,c*p],$.push(b),$.push(w);a&&$.push(e[2]);let O=N[2],B=$[0].dims[$[0].dims.length-1];O<8&&B<8?t.compute(wc($,n,s,N,r,i),{inputs:$}):t.compute(Io($,n,s,N,r,i),{inputs:$});return}let _=!0,g=t.kernelCustomData.wT??t.compute(kn(e[1],Ja),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=g);let y=[e[0],g];a&&y.push(e[2]);let T=r?c*p:m,E=r?m:c*p,A=d*h*u;t.compute(Zy(y,n,s,T,E,A,a,_,i),{inputs:y})},zm=(t,e)=>{let n=e.format==="NHWC",i=[t.inputs[0].reshape(n?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&i.push(t.inputs[2]);let r=[0,e.pads[0],0,e.pads[1]],s=[1].concat(e.strides),a=[1].concat(e.dilations),o=[1].concat(e.kernelShape),l=Qa({...e,pads:r,strides:s,dilations:a,kernelShape:o},i);su(t,i,l,u=>n?[u[0],u[2],u[3]]:[u[0],u[1],u[3]])},Gm=(t,e,n)=>{let i=n.format==="NHWC"?"channelsLast":"channelsFirst",r=Qa(n,e),s=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=jy(e[0].dims,e[1].dims,n.strides,n.dilations,s,!1,i);t.compute(Jy(e,r,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},Nd=(t,e)=>{if(Bm(t.inputs,e),t.inputs[0].dims.length===3)zm(t,e);else if(t.inputs[0].dims.length===5)Gm(t,t.inputs,e);else{let n=Qa(e,t.inputs);su(t,t.inputs,n)}}}),tx,k3=pe(()=>{"use strict";Xe(),Gi(),je(),Qe(),tx=(t,e,n)=>{let i=t.length>2,r=e.outputShape,s=e.format==="NHWC",a=e.group,o=t[1].dims,l=o[2]/a,u=o[3],d=s?Gt(l):1,h=s&&u===1&&l>=4,c=h?Math.floor(l/4)*4:Math.floor(l/d)*d,p=l-c,m=s?Gt(u):1,x=s?u===1?d:m:1,_=ee.size(r)/m,g=[Math.ceil(_/64),1,1];_t("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${g}`);let y=["rank","rank"],T=[e.strides[0],e.strides[1]],E=[e.kernelShape[s?1:2],e.kernelShape[s?2:3]],A=[e.dilations[0],e.dilations[1]],R=[E[0]+(e.dilations[0]<=1?0:(e.kernelShape[s?1:2]-1)*(e.dilations[0]-1)),E[1]+(e.dilations[1]<=1?0:(e.kernelShape[s?2:3]-1)*(e.dilations[1]-1))],w=[R[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),R[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],b=[{type:12,data:_},{type:12,data:T},{type:12,data:E},{type:12,data:A},{type:12,data:R},{type:6,data:w},{type:12,data:c},{type:12,data:l},{type:12,data:u},...Be(t[0].dims,t[1].dims)];i&&(b.push(...Be(t[2].dims)),y.push("rank")),b.push(...Be(r));let N=$=>{let O=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:E.length},{name:"dilations",type:"u32",length:E.length},{name:"effective_filter_dims",type:"u32",length:R.length},{name:"pads",type:"i32",length:w.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],B=nn(t[0].dataType),V=s?1:2,D=s?2:3,H=s?3:1,Y=ae("W",t[1].dataType,t[1].dims.length,x),W=ae("Dy",t[0].dataType,t[0].dims.length,d),ne=[W,Y];i&&ne.push(ae("bias",t[2].dataType,[r[H]].length,m));let q=Ne("result",t[0].dataType,r.length,m),ie=()=>{let he="";if(h)d===4?he+=`
        let xValue = ${W.getByOffset("x_offset")};
        let wValue = ${Y.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?he+=`
          dotProd = dotProd + dot(vec4<${B}>(${W.getByOffset("x_offset")}, ${W.getByOffset("x_offset + 1u")}), vec4<${B}>(${Y.getByOffset("w_offset")}, ${Y.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(he+=`
          dotProd = dotProd + dot(vec4<${B}>(${W.getByOffset("x_offset")}, ${W.getByOffset("x_offset + 1u")}, ${W.getByOffset("x_offset + 2u")}, ${W.getByOffset("x_offset + 3u")}), vec4<${B}>(${Y.getByOffset("w_offset")}, ${Y.getByOffset("w_offset + 1u")}, ${Y.getByOffset("w_offset + 2u")}, ${Y.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(he+=`
                  let xValue = ${s?W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):W.get("batch","inputChannel","idyR","idyC")};
        `,d===1)he+=`
          let w_offset = ${Y.indicesToOffset(`${Y.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Y.getByOffset(`w_offset / ${x}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let z=0;z<d;z++)he+=`
            let wValue${z} = ${Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${z}, wOutChannel)`)} / ${x}`)};
            dotProd = dotProd + xValue[${z}] * wValue${z};`;return he},k=()=>{if(p===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let he="";if(d===1){he+="dotProd = dotProd";for(let z=0;z<p;z++)he+=`
            + ${W.getByOffset(`x_offset + ${z}`)} * ${Y.getByOffset(`w_offset + ${z}`)}`;he+=";"}else if(d===2){if(p!==2)throw new Error(`Invalid inputChannelsRemainder ${p}.`);he+=`
          let xValue = ${W.getByOffset("x_offset")};
          let wValue = ${Y.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return he},le=`
            let outputIndices = ${q.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${q.indicesGet("outputIndices",0)};
            let d1 = ${q.indicesGet("outputIndices",H)};
            let r = ${q.indicesGet("outputIndices",V)};
            let c = ${q.indicesGet("outputIndices",D)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${B}(dyRCorner) + ${B}(wR)) / ${B}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${B}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${B}(dyCCorner) + ${B}(wC)) / ${B}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${B}(uniforms.Dy_shape[${D}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${W.indicesToOffset(`${W.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${Y.indicesToOffset(`${Y.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${x};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:d}) {
                  ${ie()}
                  inputChannel = inputChannel + ${h?4:d};
                }
                ${k()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${m}]`:""};
            ${q.setByOffset("global_idx","value")};
          `;return`
    ${$.registerUniforms(O).declareVariables(...ne,q)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${le}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${d}${x}${m}${h}${p}`,inputDependencies:y},getRunData:()=>({dispatchGroup:{x:g[0],y:g[1],z:g[2]},outputs:[{dims:n?n(r):r,dataType:t[0].dataType}],programUniforms:b}),getShaderSource:N}}}),Hm,Vm,Wm,au,nx,qm,ou,Xm,ix,F3=pe(()=>{"use strict";k3(),Nr(),dr(),Hm=(t,e,n,i,r,s)=>(t-1)*e+n+(i-1)*r+1-s,Vm=(t,e,n,i,r)=>{let s=Math.floor(t/2);e==="SAME_UPPER"?(n[i]=s,n[r]=t-s):e==="SAME_LOWER"&&(n[i]=t-s,n[r]=s)},Wm=(t,e,n,i,r,s,a,o,l,u)=>{let d=t.length-2,h=u.length===0;l.length<d&&l.push(...Array(d-l.length).fill(0));let c=t[0],p=e[o?3:1]*r;for(let m=0,x=t.length-d-(o?1:0);m<d;++m,++x){let _=t[x],g=h?_*a[m]:u[m],y=Hm(_,a[m],s[m],e[x],n[m],g);Vm(y,i,s,m,m+d),h&&u.push(a[m]*(_-1)+l[m]+(e[x]-1)*n[m]+1-s[m]-s[m+d])}u.splice(0,0,c),u.splice(o?3:1,0,p)},au=(t,e)=>{let n=t.kernelShape.slice();if(t.kernelShape.length===0||t.kernelShape.reduce((h,c)=>h*c,1)===0){n.length=0;for(let h=2;h<e[1].dims.length;++h)n.push(e[1].dims[h])}let i=t.format==="NHWC";n.splice(0,0,e[1].dims[0]),n.splice(i?3:1,0,e[1].dims[1]);let r=t.pads.slice(),s=t.outputShape.slice(),a=t.outputPadding.slice(),o=e[0].dims,l=t.dilations.slice();if(l.reduce((h,c)=>h+c,0)===0){let h=e[0].dims.length-2;l=new Array(h).fill(1)}let u=t.strides.slice();if(u.reduce((h,c)=>h+c,0)===0){let h=e[0].dims.length-2;u=new Array(h).fill(1)}Wm(o,n,l,t.autoPad,t.group,r,u,i,a,s);let d=Object.assign({},t);return Object.assign(d,{kernelShape:n,pads:r,outputPadding:a,outputShape:s,dilations:l,strides:u}),d},nx=t=>{let e=xc(t),n=t.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],r=t.dilations,s=t.group??1,a=t.kernelShape,o=t.pads,l=t.strides,u=t.wIsConst(),d=t.outputPadding,h=t.outputShape;return{autoPad:i,format:n,dilations:r,group:s,kernelShape:a,outputPadding:d,outputShape:h,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${t.format};${e.activation};`}},qm=(t,e)=>{if(!t||t.length!==2&&t.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(t[0].dims.length!==4&&t[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw new Error("filter does not have same dimension as input");let n=t[0].dims[e.format==="NHWC"?t[0].dims.length-1:1],i=t[1].dims[0];if(n!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let r=t[1].dims[1]*e.group;if(t.length===3&&(t[2].dims.length!==1||t[2].dims[0]!==r))throw new Error("invalid bias");let s=t[0].dims.length-2;if(e.dilations.reduce((a,o)=>a+o,0)>0&&e.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(e.strides.reduce((a,o)=>a+o,0)>0&&e.strides.length!==s)throw new Error(`strides should be ${s}D`);if(e.pads.reduce((a,o)=>a+o,0)>0&&e.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(e.outputPadding.length!==s&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(e.kernelShape.reduce((a,o)=>a+o,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==t[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==t[0].dims.length-2)throw new Error("invalid output shape")},ou=(t,e,n,i)=>{let r=t.kernelCustomData.wT??t.compute(kn(e[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=r);let s=[e[0],r];e.length===3&&s.push(e[2]),t.compute(tx(s,n,i),{inputs:s})},Xm=(t,e)=>{let n=e.format==="NHWC",i=[t.inputs[0].reshape(n?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];t.inputs.length===3&&i.push(t.inputs[2]);let r=e.kernelShape;(r.length===0||r[0]===0)&&(r=[t.inputs[1].dims[2]]);let s=e.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=e.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),r=[1].concat(r);let l=e.outputPadding;l=[0].concat(l);let u=au({...e,pads:o,strides:a,dilations:s,kernelShape:r,outputPadding:l},i);ou(t,i,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ix=(t,e)=>{if(qm(t.inputs,e),t.inputs[0].dims.length===3)Xm(t,e);else{let n=au(e,t.inputs);ou(t,t.inputs,n)}}}),Km,rx,sx,B3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Km=(t,e,n,i)=>{let r=ee.size(e),s=e.length,a=ae("input",t,s),o=Ne("output",t,s),l=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),u=ee.normalizeAxis(l,s),d=h=>{let c=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,p=Fe("uniforms.input_shape","uniforms.axis",s),m=i.reverse?c+(i.exclusive?" + 1":""):"0",x=i.reverse?p:c+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${x};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:t}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},{type:12,data:u},...Be(e,e)]}),getShaderSource:d}},rx=(t,e)=>{let n=t.inputs[0].dims,i=t.inputs[0].dataType,r=t.inputs[1];t.compute(Km(i,n,r,e),{inputs:[0]})},sx=t=>{let e=t.exclusive===1,n=t.reverse===1;return Mt({exclusive:e,reverse:n})}}),Ym,Zm,jm,ax,ox,z3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Ym=t=>{if(!t||t.length!==1)throw new Error("DepthToSpace requires 1 input.");if(t[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Zm=(t,e,n,i)=>{let r=[];r.push(`fn perm(i: ${i.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let s=0;s<e;++s)r.push(n.indicesSet("a",t[s],`i[${s}]`));return r.push("return a;}"),r.join(`
`)},jm=(t,e)=>{let n,i,r,s,a,o,l=e.format==="NHWC",u=e.blocksize,d=e.mode==="DCR";l?([n,i,r,s]=t.dims,a=d?[n,i,r,u,u,s/u**2]:[n,i,r,s/u**2,u,u],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,i,r,s]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],a=d?[n,u,u,s/u**2,i,r]:[n,s/u**2,u,u,i,r],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=t.reshape(a),c=h.dims.length,p=t.dataType,m=ae("a",p,c),x=Ne("output",p,c),_=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(m,x)}

  ${Zm(o,c,m,x)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:g=>{let y=l?[n,i*u,r*u,s/u**2]:[n,s/u**2,i*u,r*u],T=ee.size(y),E=h.dims,A=ee.sortBasedOnPerm(E,o);return{outputs:[{dims:y,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Be(E,A)]}},getShaderSource:_}},ax=(t,e)=>{Ym(t.inputs),t.compute(jm(t.inputs[0],e))},ox=t=>Mt({blocksize:t.blocksize,mode:t.mode,format:t.format})}),Ni,ks,eo,lu,ji,Jm,Qm,eg,uu,du,cu,tg,ng,hu,ig,lx,ux,G3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Ni=256,ks=512,eo=2*Math.PI,lu=t=>{let e=[],n=t;for(let i of[4,2,3,5])for(;n%i===0;)e.push(i),n/=i;return n===1?e:void 0},ji=t=>{let e=t.toPrecision(9);return/[.eE]/.test(e)?e:`${e}.0`},Jm=(t,e,n,i,r)=>{let s=n/t,a=ks-i,o=u=>`smem[${a}u + base + ${u*e}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${Ni}u) {
`;l+=`    let twiddleIndex = t % ${e}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let u=0;u<t;u++){let d=`${i}u + t + ${u*s}u`;if(u===0)l+=`    leg[0] = smem[${d}];
`;else{let h=r*eo*u/(t*e);l+=`    { let a = ${ji(h)} * angleUnit; leg[${u}] = cmul(smem[${d}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${e}u) * ${e*t}u + twiddleIndex;
`,t===2)l+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(t===4){let u=r<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${u};
`,l+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,l+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let u=0;u<t;u++){let d=["leg[0]"];for(let h=1;h<t;h++){let c=r*eo*(h*u)/t,p=ji(Math.cos(c)),m=ji(Math.sin(c));d.push(`vec2<f32>(leg[${h}].x*${p} - leg[${h}].y*${m}, leg[${h}].x*${m} + leg[${h}].y*${p})`)}l+=`    ${o(u)} = ${d.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Qm=(t,e,n)=>{let i="",r=1,s=0;for(let a of t)i+=Jm(a,r,e,s,n),r*=a,s=ks-s;return{code:i,resultOffset:s}},eg=(t,e,n,i,r)=>{let s=t.dims,a=s.length,o=s[a-1],l=s[e],u=n&&i?(l-1)*2:l;r!==void 0&&(u=r);let d=n&&i?1:2,h=i&&!n?Math.floor(u/2)+1:u,c=s.slice();c[e]=h,c[a-1]=d;let p=1;for(let x=e+1;x<a-1;x++)p*=s[x];let m=ee.size(s)/o/l;return{dataType:t.dataType,outputDims:c,length:u,signalLength:l,inner:p,batch:m,inputComponents:o,outputComponents:d,outputLength:h,inverse:n,onesided:i}},uu=(t,e)=>[e,t.length,t.inputComponents,t.outputComponents,t.inverse,t.onesided].join(";"),du=t=>[{type:12,data:t.batch},{type:12,data:t.signalLength},{type:12,data:t.inner},{type:12,data:t.outputLength}],cu=(t,e,n)=>t.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(e,n),tg=t=>{let{dataType:e,length:n,inputComponents:i,outputComponents:r,inverse:s,onesided:a}=t,o=tn(e),l=s?1:-1,u=s?1/n:1,d=lu(n),h=c=>{let p=ae("x",e,[1]),m=Ne("y",e,[1]),x=A=>{let R=`inBase + (${A}) * uniforms.inner * ${i}u`,w=`f32(${p.getByOffset(R)})`,b=i===2?`f32(${p.getByOffset(`${R} + 1u`)})`:"0.0";return`vec2<f32>(${w}, ${b})`},_;if(s&&a){let A=Math.floor(n/2)+1,R=n%2===0?`select(provided, provided - 1u, provided == ${A}u)`:"provided";_=`
    let provided = min(uniforms.signalLength, ${A}u);
    for (var i = local_idx; i < ${n}u; i += ${Ni}u) {
      if (i < provided) { smem[i] = ${x("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${R}; k += ${Ni}u) {
      let h = smem[k];
      smem[${n}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else _=`
    let loadCount = min(uniforms.signalLength, ${n}u);
    for (var i = local_idx; i < ${n}u; i += ${Ni}u) {
      if (i < loadCount) { smem[i] = ${x("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:g,resultOffset:y}=Qm(d,n,l),T=u===1?`smem[${y}u + i]`:`smem[${y}u + i] * ${ji(u)}`,E=r===2?m.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${cu(c,p,m)}
  var<workgroup> smem: array<vec2<f32>, ${2*ks}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${c.mainStart(Ni)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${r}u;
    ${_}
${g}    for (var i = local_idx; i < uniforms.outputLength; i += ${Ni}u) {
      let v = ${T};
      let off = outBase + i * uniforms.inner * ${r}u;
      ${m.setByOffset("off",`${o}(v.x)`)}
      ${E}
    }
  }`};return{name:"DFT",shaderCache:{hint:uu(t,"fft"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:t.outputDims,dataType:e}],programUniforms:du(t),dispatchGroup:{x:t.batch}})}},ng=t=>{let{dataType:e,length:n,inputComponents:i,outputComponents:r,inverse:s,onesided:a}=t,o=tn(e),l=s?1:-1,u=s?1/n:1,d=h=>{let c=ae("x",e,[1]),p=Ne("y",e,[1]),m=T=>{let E=`inBase + (${T}) * uniforms.inner * ${i}u`,A=`f32(${c.getByOffset(E)})`,R=i===2?`f32(${c.getByOffset(`${E} + 1u`)})`:"0.0";return`vec2<f32>(${A}, ${R})`},x=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(n/2)+1}u);
    if (k < provided) { return ${m("k")}; }
    let m = ${n}u - k;
    if (m < provided) {
      let h = ${m("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${m("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,_=`
      let angle = ${ji(l*eo)} * f32(knMod) / ${ji(n)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${n}u) { knMod -= ${n}u; }`,g=r===2?p.setByOffset("off + 1u",`${o}(v.y)`):"",y=u===1?"acc":`acc * ${ji(u)}`;return`
  ${cu(h,c,p)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${x}
  ${h.mainStart(Ni)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${r}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${Ni}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${n}u; n++) {${_}
      }
      let v = ${y};
      let off = outBase + k * uniforms.inner * ${r}u;
      ${p.setByOffset("off",`${o}(v.x)`)}
      ${g}
    }
  }`};return{name:"DFT",shaderCache:{hint:uu(t,"direct"),inputDependencies:["type"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:t.outputDims,dataType:e}],programUniforms:du(t),dispatchGroup:{x:t.batch}})}},hu=t=>{if(!t||t.dataType===0)return;if(ee.size(t.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(t.dataType===6)return t.getInt32Array()[0];let e=Number(t.getBigInt64Array()[0]);if(!Number.isSafeInteger(e))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return e},ig=t=>{if(!t||t.length<1)throw new Error("DFT requires at least 1 input.");let e=t[0].dims;if(e.length<2)throw new Error("DFT input must have at least 2 dimensions.");let n=e[e.length-1];if(n!==1&&n!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},lx=(t,e)=>{ig(t.inputs);let n=t.inputs[0],i=n.dims.length,r=e.inverse!==0,s=e.onesided!==0,a=hu(t.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=ee.normalizeAxis(hu(t.inputs[2])??e.axis,i);if(o===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(r&&s&&n.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=eg(n,o,r,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let u=l.length<=ks&&lu(l.length)!==void 0?tg(l):ng(l);t.compute(u,{inputs:[0]})},ux=t=>Mt({axis:t.axis??1,inverse:t.inverse??0,onesided:t.onesided??0})}),to,Fs,fu,rg,sg,ag,og,pu,lg,dx,cx,H3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),to="[a-zA-Z]|\\.\\.\\.",Fs="("+to+")+",fu="^"+Fs+"$",rg="("+Fs+",)*"+Fs,sg="^"+rg+"$",ag=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,e){let n=this.symbolToIndices.get(t);n===void 0?n=[e]:n.push(e),this.symbolToIndices.set(t,n)}},og=class{constructor(t,e){var r;this.equation=e,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,i]=e.includes("->")?e.split("->",2):[e,""];if(!n.match(RegExp(sg)))throw new Error("Invalid LHS term");if(n.split(",").forEach((s,a)=>{let o=t[a].dims.slice();if(!s.match(RegExp(fu)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,a);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(Fs)))throw new Error("Invalid RHS");(r=i.match(RegExp(to,"g")))==null||r.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(t,e,n){let i=this.symbolToInfo.get(t);if(i!==void 0){if(i.dimValue!==e&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(n)}else i={count:1,dimValue:e,inputIndices:[n]};this.symbolToInfo.set(t,i)}processTerm(t,e,n,i=-1){let r=n.length,s=!1,a=[],o=0;if(!t.match(RegExp(fu))&&!e&&t!=="")throw new Error("Invalid LHS term");let l=t.match(RegExp(to,"g")),u=new ag(i);return l==null||l.forEach((d,h)=>{if(d==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let c=r-l.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+c),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(e)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let p=0;p<a.length;p++){let m=String.fromCharCode(48+p);u.addSymbol(m,h+p),this.addSymbol(m,n[o++],i)}}else u.addSymbol(d,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[o++],i)}),u}},pu=t=>t+"_max",lg=(t,e,n,i)=>{let r=t.map(u=>u.length).map((u,d)=>ae(`input${d}`,e,u)),s=ee.size(i),a=Ne("output",e,i.length),o=[...n.symbolToInfo.keys()].filter(u=>!n.rhs.symbolToIndices.has(u)),l=u=>{let d=[],h="var prod = 1.0;",c="var sum = 0.0;",p="sum += prod;",m=[],x=[],_=[],g=[],y=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((E,A)=>{var R;if(n.rhs.symbolToIndices.has(A)){let w=(R=n.rhs.symbolToIndices.get(A))==null?void 0:R[0];w!==void 0&&n.lhs.forEach((b,N)=>{if(E.inputIndices.includes(N)){let $=b.symbolToIndices.get(A);if($===void 0)throw new Error("Invalid symbol error");$.forEach(O=>{d.push(`${r[N].indicesSet(`input${N}Indices`,O,a.indicesGet("outputIndices",w))}`)})}})}else n.lhs.forEach((w,b)=>{if(E.inputIndices.includes(b)){let N=w.symbolToIndices.get(A);if(N===void 0)throw new Error("Invalid symbol error");N.forEach($=>{m.push(`${r[b].indicesSet(`input${b}Indices`,$,`${A}`)}`)}),g.push(`prod *= ${r[b].getByIndices(`input${b}Indices`)};`)}}),x.push(`for(var ${A}: u32 = 0; ${A} < uniforms.${pu(A)}; ${A}++) {`),_.push("}")});let T=y?[...d,`let sum = ${r.map((E,A)=>E.getByIndices(`input${A}Indices`)).join(" * ")};`]:[...d,c,...x,...m,h,...g,p,..._];return`
            ${u.registerUniforms(o.map(E=>({name:`${pu(E)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...r,a)}

            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${r.map((E,A)=>`var input${A}Indices: ${r[A].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let u=o.filter(h=>n.symbolToInfo.has(h)).map(h=>{var c;return{type:12,data:((c=n.symbolToInfo.get(h))==null?void 0:c.dimValue)||0}});u.push({type:12,data:s});let d=t.map((h,c)=>[...Be(h)]).reduce((h,c)=>h.concat(c),u);return d.push(...Be(i)),{outputs:[{dims:i,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}},getShaderSource:l}},dx=(t,e)=>{let n=new og(t.inputs,e.equation),i=n.outputDims,r=t.inputs.map((s,a)=>s.dims);t.compute(lg(r,t.inputs[0].dataType,n,i))},cx=t=>{let e=t.equation.replace(/\s+/g,"");return Mt({equation:e})}}),ug,mu,dg,cg,hx,V3=pe(()=>{"use strict";Xe(),je(),Qe(),ug=t=>{if(!t||t.length!==2)throw new Error("Expand requires 2 input.");let e=t[0].dims,n=Array.from(t[1].getBigInt64Array(),Number),i=n.length<e.length?0:n.length-e.length,r=e.length<n.length?0:e.length-n.length;for(;i<n.length&&r<e.length;++i,++r)if(n[i]!==e[r]&&n[i]!==1&&e[r]!==1)throw new Error("Expand requires shape to be broadcastable to input")},mu=(t,e)=>{let n=t.length-e.length,i=[];for(let r=0;r<n;++r)i.push(t[r]);for(let r=0;r<e.length;++r)i.push(e[r]===1?t[r+n]:e[r]);return i},dg=(t,e)=>t.length>e.length?mu(t,e):mu(e,t),cg=t=>{let e=t[0].dims,n=Array.from(t[1].getBigInt64Array(),Number),i=dg(e,n),r=t[0].dataType,s=r===9||ee.size(e)===1,a=r===9||e.length>0&&e[e.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(ee.size(i)/o),u=h=>{let c=ae("input",r,e.length,a),p=Ne("output",r,i.length,o),m;if(r===9){let x=(_,g,y="")=>`
          let outputIndices${g} = ${p.offsetToIndices(`outputOffset + ${g}u`)};
          let offset${g} = ${c.broadcastedIndicesToOffset(`outputIndices${g}`,p)};
          let index${g} = offset${g} / 4u;
          let component${g} = offset${g} % 4u;
          ${_}[${g}] = ${y}(${c.getByOffset(`index${g}`)}[component${g}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${x("data",0,"u32")}
        ${x("data",1,"u32")}
        ${x("data",2,"u32")}
        ${x("data",3,"u32")}
        ${p.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${p.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${c.broadcastedIndicesToOffset("outputIndices",p)};
        let data = ${p.type.value}(${c.getByOffset(`inputOffset / ${a}`)});
        ${p.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(c,p)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:l},...Be(e,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d})}},hx=t=>{ug(t.inputs),t.compute(cg(t.inputs),{inputs:[0]})}}),hg,fx,W3=pe(()=>{"use strict";Xe(),je(),Qe(),yc(),hg=t=>{let e=t[0].dataType,n=ee.size(t[0].dims),i=ee.size(t[1].dims),r=i%4===0,s=a=>{let o=ae("x",e,[1],4),l=ae("bias",e,[1],4),u=Ne("y",e,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=p=>`
      let bias${p}_offset: u32 = (global_idx * 4 + ${p}) % uniforms.bias_size;
      let bias${p} = ${l.getByOffset(`bias${p}_offset / 4`)}[bias${p}_offset % 4];`,c=r?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(d).declareVariables(o,l,u)}

    ${Id(tn(e))}

    ${a.mainStart(cs)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${u.setByOffset("global_idx",Dd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${r}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(n/cs/4)}})}},fx=t=>{t.inputs.length<2||ee.size(t.inputs[1].dims)===0?Dy(t):t.compute(hg(t.inputs))}}),fg,pg,px,mx,q3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),fg=t=>{if(!t||t.length!==2)throw new Error("Gather requires 2 inputs.")},pg=(t,e)=>{let n=t[0].dims,i=t[1].dims,r=n.length,s=ee.normalizeAxis(e.axis,r),a=n.slice(0);a.splice(s,1,...i);let o=n[s],l=t[0].dataType===9?4:1,u=Math.ceil(ee.size(a)/l),d=[{type:12,data:u},{type:6,data:o},{type:12,data:s},...Be(t[0].dims,t[1].dims,a)],h=c=>{let p=ae("data",t[0].dataType,t[0].dims.length,l),m=ae("inputIndices",t[1].dataType,t[1].dims.length),x=Ne("output",t[0].dataType,a.length,l),_=y=>{let T=i.length,E=`var indicesIndices${y}  = ${m.type.indices}(0);`;for(let A=0;A<T;A++)E+=`${T>1?`indicesIndices${y}[${A}]`:`indicesIndices${y}`} = ${a.length>1?`outputIndices${y}[uniforms.axis + ${A}]`:`outputIndices${y}`};`;E+=`
          var idx${y} = ${m.getByIndices(`indicesIndices${y}`)};
          if (idx${y} < 0) {
            idx${y} = idx${y} + uniforms.axisDimLimit;
          }
          var dataIndices${y} : ${p.type.indices};
        `;for(let A=0,R=0;A<r;A++)A===s?(E+=`${r>1?`dataIndices${y}[${A}]`:`dataIndices${y}`} = u32(idx${y});`,R+=T):(E+=`${r>1?`dataIndices${y}[${A}]`:`dataIndices${y}`} = ${a.length>1?`outputIndices${y}[${R}]`:`outputIndices${y}`};`,R++);return E},g;if(t[0].dataType===9){let y=(T,E,A="")=>`
          let outputIndices${E} = ${x.offsetToIndices(`outputOffset + ${E}u`)};
          ${_(E)};
          let offset${E} = ${p.indicesToOffset(`dataIndices${E}`)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${T}[${E}] = ${A}(${p.getByOffset(`index${E}`)}[component${E}]);
        `;g=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${y("value",0,"u32")}
        ${y("value",1,"u32")}
        ${y("value",2,"u32")}
        ${y("value",3,"u32")}
        ${x.setByOffset("global_idx","value")}
      `}else g=`
      let outputIndices = ${x.offsetToIndices("global_idx")};
      ${_("")};
      let value = ${p.getByIndices("dataIndices")};
      ${x.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,m,x)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${g}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h}},px=t=>Mt({axis:t.axis}),mx=(t,e)=>{let n=t.inputs;fg(n),t.compute(pg(t.inputs,e))}}),mg,gx,_x,X3=pe(()=>{"use strict";Xe(),je(),Qe(),mg=(t,e,n,i,r,s,a,o,l)=>{let u=[{type:12,data:s},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:l}],d=[s];u.push(...Be(e.dims,d));let h=c=>{let p=ae("indices_data",e.dataType,e.dims.length),m=Ne("input_slice_offsets_data",12,1,1),x=[p,m],_=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:r.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(...x)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${r.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${r.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:h},{inputs:[e],outputs:[-1]})[0]},gx=(t,e)=>{let n=t.inputs,i=n[0].dims,r=n[0].dataType,s=n[1].dims,a=s[s.length-1],o=ee.sizeToDimension(s,s.length-1),l=ee.sizeFromDimension(i,e.batchDims+a),u=ee.sizeToDimension(i,e.batchDims),d=ee.sizeFromDimension(i,e.batchDims),h=o/u,c=new Array(a),p=l;for(let E=0;E<a;++E)c[a-1-E]=p,p*=i[e.batchDims+a-1-E];let m=mg(t,n[1],c,e.batchDims,i,o,h,d,a),x=e.batchDims+a;if(x>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let _=s.slice(0,-1).concat(i.slice(x)),g=ee.size(_),y=[{type:12,data:g},{type:12,data:l},...Be(n[0].dims,m.dims,_)],T=E=>{let A=ae("data",n[0].dataType,n[0].dims.length),R=ae("slice_offsets",12,m.dims.length),w=Ne("output",n[0].dataType,_.length);return`
          ${E.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(A,R,w)}
            ${E.mainStart()}
            ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};t.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:_,dataType:r}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:T},{inputs:[n[0],m]})},_x=t=>({batchDims:t.batch_dims,cacheKey:""})}),gg,_g,vx,yx,K3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),gg=(t,e)=>{if(t.length<3||t.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=ee.normalizeAxis(e.quantizeAxis,t[0].dims.length),i=e.blockSize,r=t[0],s=t[2],a=t.length===4?t[3]:void 0;if(s.dims.length!==r.dims.length||!r.dims.map((o,l)=>l===n?Math.ceil(o/i)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==r.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},_g=(t,e)=>{let n=t[0].dims,i=t[1].dims,r=n.length,s=ee.normalizeAxis(e.gatherAxis,r),a=ee.normalizeAxis(e.quantizeAxis,r),o=n.slice(0);o.splice(s,1,...i);let l=ee.size(o),u=t[2].dataType,d=t[0].dataType===22,h=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:e.blockSize},...Be(...t.map((p,m)=>p.dims),o)],c=p=>{let m=ae("data",t[0].dataType,t[0].dims.length),x=ae("inputIndices",t[1].dataType,t[1].dims.length),_=ae("scales",t[2].dataType,t[2].dims.length),g=t.length>3?ae("zeroPoint",t[3].dataType,t[3].dims.length):void 0,y=Ne("output",u,o.length),T=[m,x,_];g&&T.push(g);let E=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${p.registerUniforms(E).declareVariables(...T,y)}
        ${p.mainStart()}
        let output_indices = ${y.offsetToIndices("global_idx")};
        var indices_indices = ${x.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${y.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${x.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${y.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${y.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${x.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[s]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${y.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${g?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${g.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${g.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${tn(u)}(quantized_data - zero_point) * scale;
        ${y.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${t.filter((p,m)=>m!==1).map(p=>p.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(p,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},vx=(t,e)=>{let n=t.inputs;gg(n,e),t.compute(_g(t.inputs,e))},yx=t=>Mt({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),vg,yg,xx,bx,Y3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),vg=t=>{if(!t||t.length!==2)throw new Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},yg=(t,e)=>{let n=t[0].dims,i=t[0].dataType,r=n.length,s=t[1].dims,a=t[1].dataType,o=ee.normalizeAxis(e.axis,r),l=n[o],u=s.slice(0),d=ee.size(u),h=ae("input",i,r),c=ae("indicesInput",a,s.length),p=Ne("output",i,u.length),m=[{type:12,data:d},{type:6,data:l},{type:12,data:o}];return m.push(...Be(n,s,u)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:x=>`
      ${x.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,c,p)}
      ${x.mainStart()}
      ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${p.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${p.setByOffset("global_idx","value")};
  }`}},xx=t=>Mt({axis:t.axis}),bx=(t,e)=>{let n=t.inputs;vg(n),t.compute(yg(t.inputs,e))}}),xg,bg,wx,Sx,Z3=pe(()=>{"use strict";Xe(),je(),Qe(),xg=t=>{if(!t)throw new Error("Input is missing");if(t.length<2||t.length>3)throw new Error("Invaid input number.");if(t.length===3&&t[2].dims.length>2)throw new Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("Input types are mismatched")},bg=(t,e)=>{let n=t[0].dims.slice(),i=t[1].dims.slice(),[r,s,a]=_v.getShapeOfGemmResult(n,e.transA,i,e.transB,t.length===3?t[2].dims:void 0),o=[r,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,u=Math.ceil(s/l),d=Math.ceil(r/l),h=!0,c=ee.size(o),p=[{type:12,data:h?u:c},{type:12,data:r},{type:12,data:s},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],m=["type","type"];t.length===3&&(p.push(...Be(t[2].dims)),m.push("rank")),p.push(...Be(o));let x=g=>{let y="";e.transA&&e.transB?y="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?y="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?y="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&(y="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=e.alpha===1?"":"value *= uniforms.alpha;",E=ae("a",t[0].dataType,t[0].dims),A=ae("b",t[1].dataType,t[1].dims),R=E.type.value,w=null,b=[E,A];t.length===3&&(w=ae("c",t[2].dataType,t[2].dims.length),b.push(w));let N=Ne("output",t[0].dataType,o.length);b.push(N);let $=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${g.registerUniforms($).declareVariables(...b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${R}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${y}
    }

    ${T}
    ${w!=null?`let cOffset = ${w.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${R}(uniforms.beta) * ${w.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},_=g=>{let y=ae("a",t[0].dataType,t[0].dims),T=ae("b",t[1].dataType,t[1].dims),E=null,A=[y,T];t.length===3&&(E=ae("c",t[2].dataType,t[2].dims.length),A.push(E));let R=Ne("output",t[0].dataType,o.length);A.push(R);let w=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],b="",N="";e.transA&&e.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):e.transA&&!e.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!e.transA&&e.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!e.transA&&!e.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let $=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${g.registerUniforms(w).declareVariables(...A)}
  var<workgroup> tile_a: array<array<${y.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${g.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${R.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${b}
      }
      workgroupBarrier();
    }

    ${$}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${R.type.value}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:u*d},programUniforms:p}),getShaderSource:_}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:p}),getShaderSource:x}},wx=t=>{let e=t.transA,n=t.transB,i=t.alpha,r=t.beta;return{transA:e,transB:n,alpha:i,beta:r,cacheKey:`${t.transA};${t.transB};${t.alpha===1}`}},Sx=(t,e)=>{xg(t.inputs),t.compute(bg(t.inputs,e))}}),pi,Ui,_r,vr,wg,Sg,Mg,Eg,Tg,Ag,Rg,Cg,Mx,Ex,j3=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),[pi,Ui,_r,vr]=[0,1,2,3],wg=t=>{if(t[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw new Error("grid batch size must match input batch size")},Sg=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Mg=t=>`
  fn gs_bicubic_interpolate(p: mat4x4<${t}>, x: f32, y: f32) -> ${t} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${t}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Eg=t=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${t.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Tg=t=>`
  ${t.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ag=(t,e,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${pi}] = batch;
     indices[${Ui}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_r}] = u32(r);
            indices[${vr}] = u32(c);
          } else {
            return ${e}(0);
          }
        `;case"border":return`
          indices[${_r}] = u32(clamp(r, 0, H - 1));
          indices[${vr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_r}] = gs_reflect(r, border[1], border[3]);
          indices[${vr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`,Rg=(t,e,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${pi}], indices[${Ui}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${pi}], indices[${Ui}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${pi}], indices[${Ui}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${pi}], indices[${Ui}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${pi}], indices[${Ui}], border);

          let dx2 = ${e}(f32(x2) - x);
          let dx1 = ${e}(x - f32(x1));
          let dy2 = ${e}(f32(y2) - y);
          let dy1 = ${e}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${e}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${pi}], indices[${Ui}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`,Cg=(t,e)=>{let n=ae("x",t[0].dataType,t[0].dims.length),i=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],r=ae("grid",t[1].dataType,i.length,2),s=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];e.format==="NHWC"&&(s=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[pi,Ui,_r,vr]=[0,3,1,2]);let a=Ne("output",t[0].dataType,s.length),o=n.type.value,l=ee.size(s),u=[{type:12,data:l},...Be(t[0].dims,i,s)],d=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(n,r,a)}
  ${Sg}
  ${Mg(o)}
  ${Eg(e)}
  ${Tg(e)}
  ${Ag(n,o,e)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_r}]);
      let W_in = i32(uniforms.x_shape[${vr}]);

      ${e.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${pi}], indices[${_r}], indices[${vr}]);
      let nxy = ${r.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Rg(a,o,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let c=ee.size(s);return{outputs:[{dims:s,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u}},getShaderSource:d}},Mx=(t,e)=>{wg(t.inputs),t.compute(Cg(t.inputs,e))},Ex=t=>Mt({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),xn,Ig,Tx,gu,Dg,Zs,Ax,Rx=pe(()=>{"use strict";Xe(),je(),Vt(),mc(),vc(),Qe(),dr(),xn=(t,e)=>t.length>e&&t[e].dims.length>0?t[e]:void 0,Ig=(t,e)=>{let n=t[0],i=xn(t,1),r=xn(t,2),s=xn(t,3),a=xn(t,4),o=xn(t,5),l=xn(t,6),u=xn(t,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],h=n.dims[1],c=n.dims.length===3?n.dims[2]:e.numHeads*n.dims[4],p=h,m=0,x=0,_=Math.floor(c/e.numHeads);if(l&&u&&ee.size(l.dims)&&ee.size(u.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==e.numHeads||l.dims[3]!==_)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[0]!==d||u.dims[1]!==e.numHeads||u.dims[3]!==_)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=l.dims[2],x=l.dims[2]}else if(l&&ee.size(l.dims)||u&&ee.size(u.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g;if(i&&ee.size(i.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');g=2,p=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(r)throw new Error('Expect "value" be none when "key" has packed kv format.');g=5,p=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=0,p=i.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==e.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}if(s&&ee.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let y=m+p,T=0;if(a&&ee.size(a.dims)>0){T=8;let w=a.dims;throw w.length===1?w[0]===d?T=1:w[0]===3*d+2&&(T=3):w.length===2&&w[0]===d&&w[1]===y&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let E=!1,A=c;if(r&&ee.size(r.dims)>0){if(r.dims.length!==3&&r.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(r.dims.length===3){if(p!==r.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');A=r.dims[2]}else{if(p!==r.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');A=r.dims[1]*r.dims[3],E=!0}}let R=!1;if(a&&ee.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&ee.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==e.numHeads||o.dims[2]!==h||o.dims[3]!==y)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:h,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:y,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:c,vHiddenSize:A,headSize:_,vHeadSize:Math.floor(A/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:T,scale:e.scale,broadcastResPosBias:R,passPastInKv:E,qkvFormat:g}},Tx=t=>Mt({...t}),gu=Mt({perm:[0,2,1,3]}),Dg=(t,e,n,i,r,s,a)=>{let o=[i,r,s],l=ee.size(o),u=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],d=h=>{let c=Ne("qkv_with_bias",e.dataType,o),p=ae("qkv",e.dataType,o),m=ae("bias",n.dataType,o),x=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(x).declareVariables(p,m,c)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:d},{inputs:[e,n],outputs:[-1]})[0]},Zs=(t,e,n,i,r,s,a,o)=>{let l=s;if(a&&ee.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Dg(t,s,a,e,i,n*r,o),l=l.reshape([e,i,n,r]),n===1||i===1?l:t.compute(kn(l,gu.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([e,i,n,r])),n===1||i===1?l:t.compute(kn(l,gu.perm),{inputs:[l],outputs:[-1]})[0]},Ax=(t,e)=>{let n=Ig(t.inputs,e),i=t.inputs[0],r=xn(t.inputs,1),s=xn(t.inputs,2),a=xn(t.inputs,3),o=xn(t.inputs,4),l=xn(t.inputs,5),u=xn(t.inputs,6),d=xn(t.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((r==null?void 0:r.dims.length)===5)throw new Error("Packed KV is not implemented");let h=r&&s&&r.dims.length===4&&s.dims.length===4,c=Zs(t,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,i,a,0);if(h)return sa(t,c,r,s,o,void 0,u,d,l,n);if(!r||!s)throw new Error("key and value must be provided");let p=Zs(t,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,r,a,n.hiddenSize),m=Zs(t,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,s,a,2*n.hiddenSize);sa(t,c,p,m,o,void 0,u,d,l,n)}}),Pg,$g,Lg,Ng,Ud,Cx,Ix,Dx=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Pg=t=>{if(!t||t.length<1)throw new Error("too few inputs")},$g=(t,e)=>{let n=[],i=e.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(r=>n.push(Number(r))),i=n.length),Mt({numOutputs:i,axis:e.axis,splitSizes:n})},Lg=t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${Fe("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`,Ng=t=>{let e=t.length,n=[];for(let i=0;i<e;++i){let r=t[i].setByIndices("indices","input[global_idx]");e===1?n.push(r):i===0?n.push(`if (output_number == ${i}u) { ${r} }`):i===e-1?n.push(`else { ${r} }`):n.push(`else if (output_number == ${i}) { ${r} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ud=(t,e)=>{let n=t[0].dims,i=ee.size(n),r=t[0].dataType,s=ee.normalizeAxis(e.axis,n.length),a=new Array(e.numOutputs),o=ae("input",r,n.length),l=new Array(e.numOutputs),u=[],d=[],h=0,c=[{type:12,data:i}];for(let m=0;m<e.numOutputs;m++){h+=e.splitSizes[m],l[m]=h;let x=n.slice();x[s]=e.splitSizes[m],d.push(x),a[m]=Ne(`output${m}`,r,x.length),u.push({dims:d[m],dataType:t[0].dataType})}c.push({type:12,data:l},...Be(n,...d));let p=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Lg(l.length)}
  ${Ng(a)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Fe("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:u,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c})}},Cx=(t,e)=>{Pg(t.inputs);let n=t.inputs.length===1?e:$g(t.inputs,e);t.compute(Ud(t.inputs,n),{inputs:[0]})},Ix=t=>{let e=t.axis,n=t.splitSizes,i=t.numOutputs<0?n.length:t.numOutputs;if(i!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Mt({axis:e,numOutputs:i,splitSizes:n})}}),Ug,Do,Px,$x=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Ug=(t,e)=>{let[n,i,r,s]=t,{numHeads:a,rotaryEmbeddingDim:o}=e;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!ee.areEqual(i.dims,[])&&!ee.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(r.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${r.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!ee.areEqual(r.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=n.dims[0],u=n.dims[n.dims.length-2],d=r.dims[0],h=ee.sizeFromDimension(n.dims,1)/u,c=o===0?r.dims[1]*2:h/a;if(o>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(u!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(u>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(c/2!==r.dims[1]&&o/2!==r.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${r.dims[1]}`)},Do=(t,e)=>{let{interleaved:n,numHeads:i,rotaryEmbeddingDim:r,scale:s}=e,a=t[0].dims[0],o=ee.sizeFromDimension(t[0].dims,1),l=t[0].dims[t[0].dims.length-2],u=o/l,d=t[2].dims[1],h=r===0?d*2:u/i,c=new Array(a,l,u/h,h-d),p=ee.computeStrides(c),m=[{type:1,data:s},{type:12,data:c},{type:12,data:p},...t[0].dims.length===3?new Array({type:12,data:[o,u,h,1]}):[],...t[0].dims.length===4?new Array({type:12,data:[o,h,l*h,1]}):[],...Be(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)],x=_=>{let g=ae("input",t[0].dataType,t[0].dims.length),y=ae("position_ids",t[1].dataType,t[1].dims.length),T=ae("cos_cache",t[2].dataType,t[2].dims.length),E=ae("sin_cache",t[3].dataType,t[3].dims.length),A=Ne("output",t[0].dataType,t[0].dims.length);return _.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:p.length},{name:"input_output_strides",type:"u32",length:p.length}]),`
        ${_.declareVariables(g,y,T,E,A)}

        ${_.mainStart(cs)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${y.broadcastedIndicesToOffset("bsnh.xy",Ne("",y.type.tensor,2))};
            let position_id =
                u32(${y.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${g.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${g.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${A.setByOffset("i","re")}
            let im = ${g.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} +
                ${g.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${A.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${A.setByOffset("k",g.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Mt({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(ee.size(c)/cs)},programUniforms:m})}},Px=(t,e)=>{Ug(t.inputs,e),t.compute(Do(t.inputs,e))}}),Og,kg,_u,Fg,Lx,J3=pe(()=>{"use strict";Vt(),Xe(),vc(),Rx(),Dx(),dr(),$x(),Qe(),Og=(t,e)=>{if(e.doRotary&&t.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=t[0],i=t[1],r=t[2],s=t[3],a=t[4];if(e.doRotary!==0&&t.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=n.dims[0],u=n.dims[1],d=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:e.numHeads*n.dims[4],h=u,c=0,p=!i||i.dims.length===0,m=Math.floor(p?d/(e.numHeads+2*e.kvNumHeads):d/e.numHeads);p&&(d=m*e.numHeads);let x=s&&s.dims.length!==0,_=a&&a.dims.length!==0;if(x&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==e.kvNumHeads&&s.dims[2]===e.kvNumHeads&&s.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(x&&_){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');c=s.dims[2]}else if(x||_)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let g=1;if(i&&i.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(n.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(r)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==e.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');g=3}let y=0,T=!1,E=e.kvNumHeads?m*e.kvNumHeads:d;if(r&&r.dims.length>0){if(r.dims.length!==3&&r.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(r.dims.length===3){if(h!==r.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=r.dims[2]}else{if(h!==r.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=r.dims[1]*r.dims[3],T=!0}}let A=t.length>4?t[5]:void 0;if(A){if(A.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let R=A.dims.reduce((w,b)=>w*b,1);if(R!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${R}.`);for(let w=0;w<A.dims.length;w++)if(A.dims[w]!==1&&A.dims[w]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${w}] = ${A.dims[w]}.`)}return{batchSize:l,sequenceLength:u,pastSequenceLength:c,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:E,headSize:m,vHeadSize:Math.floor(E/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:y,scale:e.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:g}},kg=Mt({perm:[0,2,1,3]}),_u=(t,e,n)=>{let i=e,r=n.kvNumHeads;return e.dims.length===3&&n.kvSequenceLength!==0&&(i=e.reshape([n.batchSize,n.kvSequenceLength,r,n.headSize]),i=t.compute(kn(i,kg.perm),{inputs:[i],outputs:[-1]})[0]),i},Fg=(t,e,n,i)=>{let r=7,s=["type","type"],a=[t*e],o=t*e,l=[{type:12,data:o},{type:12,data:e},{type:12,data:t}],u=d=>{let h=ae("seq_lens",n.dataType,n.dims),c=ae("total_seq_lens",i.dataType,i.dims),p=Ne("pos_ids",r,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(h,c,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${c.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${p.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${p.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${p.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${t};${e}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:u}},Lx=(t,e)=>{var E;if(t.inputs.length>14&&t.inputs[14]||t.inputs.length>15&&t.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let n=Og(t.inputs,e);if(t.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((E=t.inputs[1])==null?void 0:E.dims.length)===5)throw new Error("Packed KV is not implemented");let i=t.inputs[0],r=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,s=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,a=t.inputs[3]&&t.inputs[3].dims.length!==0?t.inputs[3]:void 0,o=t.inputs[4]&&t.inputs[4].dims.length!==0?t.inputs[4]:void 0,l=t.inputs.length>4?t.inputs[5]:void 0,u=t.inputs.length>5?t.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,h=Mt({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[c,p,m]=!r&&!s?t.compute(Ud([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,r,s],x,_;if(e.doRotary){let A=t.compute(Fg(n.batchSize,n.sequenceLength,l,u),{inputs:[l,u],outputs:[-1]})[0],R=t.inputs[7],w=t.inputs[8],b=Mt({interleaved:e.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:e.scale}),N=[c,A,R,w],$=[-1];x=t.compute(Do(N,b),{inputs:N,outputs:$})[0],N.splice(0,1,p);let O=Mt({interleaved:e.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:e.scale});_=t.compute(Do(N,O),{inputs:N,outputs:$})[0]}let g=Zs(t,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,e.doRotary?x:c,void 0,0),y=_u(t,e.doRotary?_:p,n),T=_u(t,m,n);sa(t,g,y,T,void 0,void 0,a,o,void 0,n,l,u)}}),vu,Bg,zg,Nx,Q3=pe(()=>{"use strict";Xe(),je(),dr(),Qe(),vu=(t,e,n,i,r,s,a,o)=>{let l=Gt(s),u=l===1?"f32":`vec${l}f`,d=l===1?"vec2f":`mat2x${l}f`,h=r*a,c=64;h===1&&(c=256);let p=[r,a,s/l],m=[r,a,2],x=["rank","type","type"],_=[];_.push(...Be(p,m));let g=y=>{let T=ae("x",e.dataType,3,l),E=ae("scale",n.dataType,n.dims),A=ae("bias",i.dataType,i.dims),R=Ne("output",1,3,2),w=[T,E,A,R];return`
  var<workgroup> workgroup_shared : array<${d}, ${c}>;
  const workgroup_size = ${c}u;
  ${y.declareVariables(...w)}
  ${y.mainStart(c)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${u}(0);
    var squared_sum = ${u}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${u}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${lr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${lr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${c}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:h},programUniforms:_}),getShaderSource:g},{inputs:[e,n,i],outputs:[-1]})[0]},Bg=(t,e,n)=>{let i=e[0].dims,r=i,s=2,a=i[0],o=i[1],l=ee.sizeFromDimension(i,s),u=Gt(l),d=ee.size(r)/u,h=vu(t,e[0],e[1],e[2],a,l,o,n.epsilon),c=[a,o,l/u],p=[a,o],m=["type","none"],x=_=>{let g=ae("x",e[0].dataType,c.length,u),y=ae("scale_shift",1,p.length,2),T=Ne("output",e[0].dataType,c.length,u),E=[g,y,T];return`
  ${_.registerUniform("output_size","u32").declareVariables(...E)}
  ${_.mainStart()}
  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${y.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${g.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};t.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...Be(c,p,c)]}),getShaderSource:x},{inputs:[e[0],h]})},zg=(t,e,n)=>{let i=e[0].dims,r=i,s=i[0],a=i[i.length-1],o=ee.sizeFromDimension(i,1)/a,l=Gt(a),u=ee.size(r)/l,d=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],h=["type","type"],c=!1,p=[0,i.length-1];for(let g=0;g<i.length-2;g++)c=c||i[g+1]!==1,p.push(g+1);c=c&&i[i.length-1]!==1;let m=c?t.compute(kn(t.inputs[0],p),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:i.length},(g,y)=>i[p[y]])),x=vu(t,m,e[1],e[2],s,o,a,n.epsilon),_=g=>{let y=nn(e[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,E=w=>{let b=w===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${y}(${N}(scale.${b}))`;case 2:return`vec2<${y}>(${N}(scale[0].${b}, scale[1].${b}))`;case 4:return`vec4<${y}>(${N}(scale[0].${b}, scale[1].${b}, scale[2].${b}, scale[3].${b}))`;default:throw new Error(`Not supported compoents ${l}`)}},A=ae("input",e[0].dataType,e[0].dims,l),R=Ne("output",e[0].dataType,r,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${A.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${R.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${g.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${E(0)}, ${E(1)});
  }`};t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:_},{inputs:[e[0],x]})},Nx=(t,e)=>{e.format==="NHWC"?zg(t,t.inputs,e):Bg(t,t.inputs,e)}}),Gg,Hg,Ux,eR=pe(()=>{"use strict";Xe(),je(),Qe(),Gg=t=>{if(!t||t.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Hg=(t,e,n)=>{let i=e.simplified,r=t[0].dims,s=t[1],a=!i&&t[2],o=r,l=ee.normalizeAxis(e.axis,r.length),u=ee.sizeToDimension(r,l),d=ee.sizeFromDimension(r,l),h=ee.size(s.dims),c=a?ee.size(a.dims):0;if(h!==d||a&&c!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${c}`);let p=[];for(let A=0;A<r.length;++A)A<l?p.push(r[A]):p.push(1);let m=Gt(d),x=["type","type"],_=[{type:12,data:u},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:e.epsilon}];a&&x.push("type");let g=n>1,y=n>2,T=A=>{let R=nn(t[0].dataType),w=[ae("x",t[0].dataType,t[0].dims,m),ae("scale",s.dataType,s.dims,m)];a&&w.push(ae("bias",a.dataType,a.dims,m)),w.push(Ne("output",t[0].dataType,o,m)),g&&w.push(Ne("mean_data_output",1,p)),y&&w.push(Ne("inv_std_output",1,p));let b=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${A.registerUniforms(b).declareVariables(...w)}
  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ad("f32",m)};
    var mean_square_vector = ${Ad("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ts(R,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${lr("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${lr("mean_square_vector",m)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ts(R,m,"x[j + offset]")};
      let f32scale = ${ts(R,m,"scale[j]")};
      output[j + offset] = ${w[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${ts(R,m,"bias[j]")}`:""}
      );
    }

    ${g?"mean_data_output[global_idx] = mean":""};
    ${y?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},E=[{dims:o,dataType:t[0].dataType}];return g&&E.push({dims:p,dataType:1}),y&&E.push({dims:p,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${i}`,inputDependencies:x},getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(u/64)},programUniforms:_}),getShaderSource:T}},Ux=(t,e)=>{Gg(t.inputs),t.compute(Hg(t.inputs,e,t.outputCount))}}),Vg,Ox,tR=pe(()=>{"use strict";je(),Sc(),Mc(),Vg=t=>{if(!t||t.length!==2)throw new Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw new Error("shared dimension does not match.")},Ox=t=>{Vg(t.inputs);let e=ds.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let n=e[e.length-1],i=t.inputs[0].dims[t.inputs[0].dims.length-1];if(n<8&&i<8)t.compute(wc(t.inputs,{activation:""},e));else{let r=e[e.length-2],s=ee.size(t.inputs[0].dims.slice(0,-2)),a=ee.size(t.inputs[1].dims.slice(0,-2));if(s!==1&&r===1&&a===1){let o=t.inputs[0].reshape([1,s,i]),l=t.inputs[1].reshape([1,i,n]),u=[1,s,n],d=[o,l];t.compute(Io(d,{activation:""},e,u),{inputs:d})}else t.compute(Io(t.inputs,{activation:""},e))}}}),Wg,qg,Xg,kx,Fx,nR=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),Wg=(t,e)=>{if(t.length<3||t.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=t[0],i=n.dims.length;if(n.dims[i-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let r=Math.floor((e.k+e.blockSize-1)/e.blockSize),s=e.blockSize/8*e.bits,a=t[1];if(!ee.areEqual(a.dims,[e.n,r,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=t[2].dims;if(ee.size(o)!==e.n*r)throw new Error("scales input size error.");if(t.length===4){let l=t[3].dims,u=e.n*(e.bits===8?r:Math.floor((r*e.bits+7)/8));if(ee.size(l)!==u)throw new Error("zeroPoints input size error.")}},qg=(t,e)=>{let n=t[0].dims,i=n.length,r=n[i-2],s=e.k,a=e.n,o=n.slice(0,i-2),l=ee.size(o),u=t[1].dims[2]/4,d=t[0].dataType,h=Gt(e.k),c=Gt(u),p=Gt(a),m=o.concat([r,a]),x=r>1&&a/p%2===0?2:1,_=ee.size(m)/p/x,g=64,y=[],T=[l,r,s/h],E=ee.convertShape(t[1].dims).slice();E.splice(-1,1,u/c),y.push(...Be(T)),y.push(...Be(E)),y.push(...Be(t[2].dims)),t.length===4&&y.push(...Be(ee.convertShape(t[3].dims)));let A=[l,r,a/p];y.push(...Be(A));let R=w=>{let b=T.length,N=ae("a",t[0].dataType,b,h),$=ae("b",12,E.length,c),O=ae("scales",t[2].dataType,t[2].dims.length),B=[N,$,O],V=t.length===4?ae("zero_points",12,t[3].dims.length):void 0;V&&B.push(V);let D=A.length,H=Ne("output",t[0].dataType,D,p),Y=nn(t[0].dataType),W=(()=>{switch(h){case 1:return`array<${Y}, 8>`;case 2:return`mat4x2<${Y}>`;case 4:return`mat2x4<${Y}>`;default:throw new Error(`${h}-component is not supported.`)}})(),ne=Math.floor(32/e.bits),q=Math.floor(ne/8),ie=()=>{let he="";for(let z=0;z<q;z++){let fe=z*e.bits*4,_e=fe+e.bits;he+=`
          // reuse a data (pass ${z})
            var input_offset${z>0?z:""} = ${z===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${z>0?z:""}: ${W};
            for (var j${z>0?z:""}: u32 = 0; j${z>0?z:""} < ${8/h}; j${z>0?z:""}++) {
              a_data${z>0?z:""}[j${z>0?z:""}] = ${N.getByOffset(`input_offset${z>0?z:""}`)};
              input_offset${z>0?z:""}++;
            }
          `;for(let Ce=0;Ce<p*x;Ce++)he+=`
            b_value = ${c===1?`b${Ce}_data`:`b${Ce}_data[i]`};
            ${e.bits===2?`{
              let half_word = b_value >> ${z*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${fe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${_e}u) & b_mask);`}
            b_quantized_values = ${W}(${Array.from({length:4},(xe,He)=>`${Y}(b_value_lower[${He}]), ${Y}(b_value_upper[${He}])`).join(", ")});
            b_dequantized_values = ${h===1?`${W}(${Array.from({length:8},(xe,He)=>`(b_quantized_values[${He}] - ${V?`zero_point${Ce}`:"zero_point"}) * scale${Ce}`).join(", ")});`:`(b_quantized_values - ${W}(${Array(8).fill(`${V?`zero_point${Ce}`:"zero_point"}`).join(",")})) * scale${Ce};`};
            workgroup_shared[local_id.x * ${x} + ${Math.floor(Ce/p)}]${p>1?`[${Ce%p}]`:""} += ${Array.from({length:8/h},(xe,He)=>`${h===1?`a_data${z>0?z:""}[${He}] * b_dequantized_values[${He}]`:`dot(a_data${z>0?z:""}[${He}], b_dequantized_values[${He}])`}`).join(" + ")};
          `}return he},k=()=>{let he=`
            var col_index = col * ${p};
            ${V?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/e.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,e.bits-1)} for unsigned ${e.bits}-bit quantization.
            let zero_point = ${Y}(${Math.pow(2,e.bits-1).toFixed(1)});`}
            `;for(let z=0;z<p*x;z++)he+=`
            let scale${z} = ${O.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${e.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${z} = ${Y}((zero_point_word) & ${e.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return he},le=()=>{let he=`col_index = col * ${p};`;for(let z=0;z<p*x;z++)he+=`
            let b${z}_data = ${$.getByIndices(`${$.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return he+=`
            var b_value: u32;
            let b_mask: u32 = ${e.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${W};
            var b_dequantized_values: ${W};`,he};return`
        var<workgroup> workgroup_shared: array<${H.type.value}, ${x*g}>;
        ${w.declareVariables(...B,H)}
        ${w.mainStart([g,1,1])}
          let output_indices = ${H.offsetToIndices(`(global_idx / ${g}) * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${g}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/h};
            ${k()}
            for (var word: u32 = 0; word < ${u}; word += ${c}) {
              ${le()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${ie()}
                word_offset += ${ne/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${x}) {
            var output_value: ${H.type.value} = ${H.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${g}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${x};
            }
            ${H.setByIndices(`${H.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${h};${c};${p};${x};${g}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:_},programUniforms:y}),getShaderSource:R}},Xg=(t,e)=>{let n=t[0].dims,i=n.length,r=n[i-2],s=e.k,a=e.n,o=n.slice(0,i-2),l=ee.size(o),u=t[1].dims[2]/4,d=t[0].dataType,h=Gt(e.k),c=Gt(u),p=o.concat([r,a]),m=128,x=a%8===0?8:a%4===0?4:1,_=m/x,g=Math.floor(32/e.bits),y=_*c*g,T=y/h,E=y/e.blockSize,A=ee.size(p)/x,R=[],w=[l,r,s/h],b=ee.convertShape(t[1].dims).slice();b.splice(-1,1,u/c),R.push(...Be(w)),R.push(...Be(b)),R.push(...Be(t[2].dims)),t.length===4&&R.push(...Be(ee.convertShape(t[3].dims)));let N=[l,r,a];R.push(...Be(N));let $=O=>{let B=w.length,V=ae("a",t[0].dataType,B,h),D=ae("b",12,b.length,c),H=ae("scales",t[2].dataType,t[2].dims.length),Y=[V,D,H],W=t.length===4?ae("zero_points",12,t[3].dims.length):void 0;W&&Y.push(W);let ne=N.length,q=Ne("output",t[0].dataType,ne),ie=nn(t[0].dataType),k=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${q.type.value}, ${_}>, ${x}>;
        ${O.declareVariables(...Y,q)}
        ${O.mainStart([_,x,1])}
          let output_indices = ${q.offsetToIndices(`workgroup_index * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${V.getByIndices(`${V.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${V.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${E} + local_id.x;
            ${W?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/e.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${e.bits}u);
            let zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ie}((zero_point_word) & ${e.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,e.bits-1)} for unsigned ${e.bits}-bit quantization.
            let zero_point = ${ie}(${Math.pow(2,e.bits-1).toFixed(1)});`}
            let scale = ${H.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${D.getByIndices(`${D.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/h};
            for (var i: u32 = 0; i < ${c}; i++) {
              let b_value = ${c===1?"b_data":"b_data[i]"};
              ${(()=>{let le=Math.floor(g/8),he="";for(let z=0;z<le;z++){let fe=z*e.bits*4,_e=fe+e.bits;he+=`
              ${k()}
              {${e.bits===2?`
                let half_word = b_value >> ${z*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${fe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${_e}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ie}>(${Array.from({length:4},(Ce,xe)=>`${ie}(b_value_lower[${xe}]), ${ie}(b_value_upper[${xe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ie}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ce,xe)=>`${`dot(a_data${xe}, b_dequantized_values[${xe}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return he})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${x}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${q.setByIndices(`${q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${h};${c};${_};${x}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:p,dataType:d}],dispatchGroup:{x:A},programUniforms:R}),getShaderSource:$}},kx=(t,e)=>{Wg(t.inputs,e),e.blockSize===32&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(Xg(t.inputs,e)):t.compute(qg(t.inputs,e))},Fx=t=>Mt(t)}),Kg,Yg,Zg,jg,Jg,Qg,e_,t_,Bx,iR=pe(()=>{"use strict";Xe(),je(),Qe(),Kg=t=>{if(!t||t.length<1)throw new Error("Too few inputs");if(t[0].dataType!==1&&t[0].dataType!==10)throw new Error("Input type must be float or float16.");if(t.length>=2){let e=t[0].dims.length*2===t[1].dims[0];if(t.length===4&&(e=t[3].dims[0]*2===t[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Yg=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
            k = i32(${t.indicesGet("indices",r)}) - ${Fe("uniforms.pads",r,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Fe("uniforms.x_shape",r,e)})) {
              break;
            }
            offset += k * i32(${Fe("uniforms.x_strides",r,e)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Zg=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${t.indicesGet("indices",r)}) - ${Fe("uniforms.pads",r,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Fe("uniforms.x_shape",r,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Fe("uniforms.x_shape",r,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Fe("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jg=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${t.indicesGet("indices",r)}) - ${Fe("uniforms.pads",r,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Fe("uniforms.x_shape",r,e)})) {
                  k = i32(${Fe("uniforms.x_shape",r,e)}) - 1;
                }
                offset += k * i32(${Fe("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Jg=(t,e,n)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${t.indicesGet("indices",r)}) - ${Fe("uniforms.pads",r,n)};
                if (k < 0)  {
                  k += i32(${Fe("uniforms.x_shape",r,e)}]);
                }
                if (k >= i32(${Fe("uniforms.x_shape",r,e)})) {
                  k -= i32(${Fe("uniforms.x_shape",r,e)});
                }
                offset += k * i32(${Fe("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Qg=(t,e,n)=>{switch(n.mode){case 0:return Yg(t,e,n.pads.length);case 1:return Zg(t,e,n.pads.length);case 2:return jg(t,e,n.pads.length);case 3:return Jg(t,e,n.pads.length);default:throw new Error("Invalid mode")}},e_=(t,e)=>{let n=ee.padShape(t[0].dims.slice(),e.pads),i=t[0].dims,r=ee.size(n),s=[{type:12,data:r},{type:6,data:e.pads}],a=t.length>=3&&t[2].data;e.mode===0&&s.push({type:a?t[2].dataType:1,data:e.value}),s.push(...Be(t[0].dims,n));let o=["rank"],l=u=>{let d=Ne("output",t[0].dataType,n.length),h=ae("x",t[0].dataType,i.length),c=h.type.value,p=Qg(d,i.length,e),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&m.push({name:"constant_value",type:a?c:"f32"}),`
            ${u.registerUniforms(m).declareVariables(h,d)}
            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${p}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(ee.size(n)/64)},programUniforms:s}),getShaderSource:l}},t_=(t,e)=>{if(t.length>1){let n=t[1].getBigInt64Array(),i=t.length>=3&&t[2].data?t[2].dataType===10?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,r=t[0].dims.length,s=new Int32Array(2*r).fill(0);if(t.length>=4){let o=t[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(n[l]),s[Number(o[l])+r]=Number(n[l+o.length])}else n.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:e.mode,value:i,pads:a}}else return e},Bx=(t,e)=>{Kg(t.inputs);let n=t_(t.inputs,e);t.compute(e_(t.inputs,n),{inputs:[0]})}}),Bs,yu,xu,bu,wu,n_,i_,Su,Mu,zx,Gx,Eu,Hx,Vx,Tu,Wx,qx,Xx,Kx,rR=pe(()=>{"use strict";Fn(),Xe(),je(),Qe(),Bs=t=>{if(Ft.webgpu.validateInputContent&&(!t||t.length!==1))throw new Error("Pool ops requires 1 input.")},yu=(t,e,n)=>{let i=e.format==="NHWC",r=t.dims.slice();i&&r.splice(1,0,r.pop());let s=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),o=e.strides.slice(),l=s?e.dilations.slice():[],u=e.pads.slice();Ro.adjustPoolAttributes(n,r,a,o,l,u);let d=Ro.computePoolOutputShape(n,r,o,l,a,u,e.autoPad,e.ceilMode),h=Object.assign({},e);s?Object.assign(h,{kernelShape:a,strides:o,pads:u,dilations:l,cacheKey:e.cacheKey}):Object.assign(h,{kernelShape:a,strides:o,pads:u,cacheKey:e.cacheKey});let c=d.slice();return c.push(c.splice(1,1)[0]),[h,i?c:d]},xu=(t,e)=>{let n=e.format==="NHWC",i=ee.size(t),r=ee.size(e.kernelShape),s=[{type:12,data:i},{type:12,data:r}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let o=e.kernelShape[e.kernelShape.length-1],l=e.strides[e.strides.length-1],u=e.pads[e.pads.length/2-1],d=e.pads[e.pads.length-1],h=!!(u+d);s.push({type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:d}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(e.kernelShape.length===2){let p=e.kernelShape[e.kernelShape.length-2],m=e.strides[e.strides.length-2],x=e.pads[e.pads.length/2-2],_=e.pads[e.pads.length-2];c=!!(x+_),s.push({type:12,data:p},{type:12,data:m},{type:12,data:x},{type:12,data:_}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,h,c]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=ee.computeStrides(e.kernelShape);s.push({type:12,data:o},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let l=e.pads.reduce((u,d)=>u+d);return[s,a,!!l,!1,!1]}},bu=(t,e,n,i,r,s,a,o,l,u,d,h)=>{let c=r.format==="NHWC",p=e.type.value,m=Ne("output",e.type.tensor,i);if(r.kernelShape.length<=2){let x="",_="",g="",y=n-(c?2:1);if(d?x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${y}] < 0 || xIndices[${y}]
                      >= uniforms.x_shape[${y}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${s}
                }`:x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${s}
                }`,r.kernelShape.length===2){let T=n-(c?3:2);h?_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${t.registerUniforms(l).declareVariables(e,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${p}(${o});
              var pad = 0;
              ${_}
              ${x}
              ${g}
              ${a}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let x=r.kernelShape.length,_=r.pads.length,g="";return u?g=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${s}
              }`:g=`
              }
              let x_val = x[${e.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${t.registerUniforms(l).declareVariables(e,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${x}>;

              var value = ${p}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${x-1}u; j++) {
                  offsets[j] = offset / ${Fe("uniforms.kernelStrides","j",x)};
                  offset -= offsets[j] * ${Fe("uniforms.kernelStrides","j",x)};
                }
                offsets[${x-1}] = offset;

                isPad = false;
                for (var j = ${n-x}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${Fe("uniforms.strides",`j - ${n-x}u`,x)}
                    + offsets[j - ${n-x}u] - ${Fe("uniforms.pads","j - 2u",_)};
                  ${g}
              }
              ${a}

              output[global_idx] = value;
            }`}},wu=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,n_=t=>`${wu(t)};${t.countIncludePad}`,i_=t=>`${wu(t)};${t.storageOrder};${t.dilations}`,Su=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),Mu=(t,e,n,i)=>{let[r,s]=yu(e,i,n),a=ae("x",e.dataType,e.dims.length),o=a.type.value,l="value += x_val;",u="";r.countIncludePad?u+=`value /= ${o}(uniforms.kernelSize);`:u+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,h,c,p,m]=xu(s,r);d.push(...Be(e.dims,s));let x=["rank"];return{name:t,shaderCache:{hint:`${i.cacheKey};${c};${p};${m}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(ee.size(s)/64)},programUniforms:d}),getShaderSource:_=>bu(_,a,e.dims.length,s.length,r,l,u,0,h,c,p,m)}},zx=t=>{let e=t.count_include_pad!==0,n=Su(t);if(n.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:e,...n,cacheKey:""};return{...i,cacheKey:n_(i)}},Gx=(t,e)=>{Bs(t.inputs),t.compute(Mu("AveragePool",t.inputs[0],!1,e))},Eu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Hx=t=>{let e=t.format;return{format:e,...Eu,cacheKey:e}},Vx=(t,e)=>{Bs(t.inputs),t.compute(Mu("GlobalAveragePool",t.inputs[0],!0,e))},Tu=(t,e,n,i)=>{let[r,s]=yu(e,i,n),a=`
      value = max(x_val, value);
    `,o="",l=ae("x",e.dataType,e.dims.length),u=["rank"],[d,h,c,p,m]=xu(s,r);return d.push(...Be(e.dims,s)),{name:t,shaderCache:{hint:`${i.cacheKey};${c};${p};${m}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(ee.size(s)/64)},programUniforms:d}),getShaderSource:x=>bu(x,l,e.dims.length,s.length,r,a,o,e.dataType===10?-65504:-1e5,h,c,p,m)}},Wx=(t,e)=>{Bs(t.inputs),t.compute(Tu("MaxPool",t.inputs[0],!1,e))},qx=t=>{let e=t.storage_order,n=t.dilations,i=Su(t);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let r={storageOrder:e,dilations:n,...i,cacheKey:""};return{...r,cacheKey:i_(r)}},Xx=t=>{let e=t.format;return{format:e,...Eu,cacheKey:e}},Kx=(t,e)=>{Bs(t.inputs),t.compute(Tu("GlobalMaxPool",t.inputs[0],!0,e))}}),r_,s_,Yx,Zx,sR=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),r_=(t,e)=>{if(t.length<2||t.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(t.length===3&&t[1].dims===t[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(t.length===3&&t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==0&&t[1].dims.length!==1&&t[1].dims.length!==t[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((n,i)=>n===t[2].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(t[1].dims.length===0||t[1].dims.length===1&&t[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((r,s)=>s===e.axis||r===t[0].dims[s]).reduce((r,s)=>r&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=t[0].dims[e.axis],i=t[1].dims[e.axis];if(e.blockSize<Math.ceil(n/i)||e.blockSize>Math.ceil(n/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},s_=(t,e)=>{let n=ee.normalizeAxis(e.axis,t[0].dims.length),i=t[0].dataType,r=i===3,s=t[0].dims,a=t[1].dataType,o=ee.size(s),l=i===3||i===2,u=l?[Math.ceil(ee.size(t[0].dims)/4)]:t[0].dims,d=t[1].dims,h=t.length>2?t[2]:void 0,c=h?l?[Math.ceil(ee.size(h.dims)/4)]:h.dims:void 0,p=d.length===0||d.length===1&&d[0]===1,m=p===!1&&d.length===1,x=Gt(o),_=p&&(!l||x===4),g=_?x:1,y=_&&!l?x:1,T=ae("input",l?12:i,u.length,y),E=ae("scale",a,d.length),A=h?ae("zero_point",l?12:i,c.length):void 0,R=Ne("output",a,s.length,g),w=[T,E];A&&w.push(A);let b=[u,d];h&&b.push(c);let N=[{type:12,data:o/g},{type:12,data:n},{type:12,data:e.blockSize},...Be(...b,s)],$=O=>{let B=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${O.registerUniforms(B).declareVariables(...w,R)}
      ${O.mainStart()}
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${R.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${r?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${g===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${p?`let scale_value= ${E.getByOffset("0")}`:m?`
            let scale_index = ${R.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${E.getByOffset("scale_index")};`:`
            var scale_indices: ${E.type.indices} = output_indices;
            let index = ${E.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${E.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${E.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${A?p?l?`
                let zero_point_input = ${A.getByOffset("0")};
                let zero_point_vec =  ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${A.getByOffset("0")}`:m?l?`
                let zero_point_index = ${R.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${A.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${R.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${A.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${E.indicesToOffset("scale_indices")};
                let zero_point_input = ${A.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${A.getByIndices("scale_indices")};`:`let zero_point_value = ${l?r?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${R.setByOffset("global_idx",`${R.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:A?["rank","rank","rank"]:["rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/g/64),y:1,z:1},programUniforms:N})}},Yx=(t,e)=>{r_(t.inputs,e),t.compute(s_(t.inputs,e))},Zx=t=>Mt({axis:t.axis,blockSize:t.blockSize})}),a_,o_,jx,aR=pe(()=>{"use strict";Fn(),Xe(),Qe(),a_=(t,e,n)=>{let i=t===e,r=t<e&&n<0,s=t>e&&n>0;if(i||r||s)throw new Error("Range these inputs' contents are invalid.")},o_=(t,e,n,i)=>{let r=Math.abs(Math.ceil((e-t)/n)),s=[r],a=r,o=[{type:12,data:a},{type:i,data:t},{type:i,data:n},...Be(s)],l=u=>{let d=Ne("output",i,s.length),h=d.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${u.registerUniforms(c).declareVariables(d)}
        ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},jx=t=>{let e=0,n=0,i=0;t.inputs[0].dataType===6?(e=t.inputs[0].getInt32Array()[0],n=t.inputs[1].getInt32Array()[0],i=t.inputs[2].getInt32Array()[0]):t.inputs[0].dataType===1&&(e=t.inputs[0].getFloat32Array()[0],n=t.inputs[1].getFloat32Array()[0],i=t.inputs[2].getFloat32Array()[0]),Ft.webgpu.validateInputContent&&a_(e,n,i),t.compute(o_(e,n,i,t.inputs[0].dataType),{inputs:[]})}}),l_,u_,Jx,Qx,oR=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),l_=(t,e,n,i)=>{if(t!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${t}.`);let r=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${e}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${e}=${n};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${e}, bitcast<${i}>(${n}));`:`
              ${r}bitcast<${i}>(oldValue) + (${n})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${e}, bitcast<${i}>(${n}));`:`
                ${r}max(bitcast<f32>(oldValue), (${n}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${e}, bitcast<${i}>(${n}));`:`${r}min(bitcast<${i}>(oldValue), (${n}))${s}`;case"mul":return`${r}(bitcast<${i}>(oldValue) * (${n}))${s}`;default:throw new Error(`Reduction ${t} is not supported.`)}},u_=(t,e)=>{let n=t[0].dims,i=t[1].dims,r=n,s=1,a=Math.ceil(ee.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],l=ee.sizeFromDimension(n,o),u=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Be(t[1].dims,t[2].dims,r)],d=h=>{let c=ae("indices",t[1].dataType,t[1].dims.length),p=ae("updates",t[2].dataType,t[2].dims.length,s),m=e.reduction!=="none"&&e.reduction!==""?Mv("output",t[0].dataType,r.length):Ne("output",t[0].dataType,r.length,s);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(c,p,m)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${t[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${l_(e.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:d}},Jx=t=>Mt({reduction:t.reduction}),Qx=(t,e)=>{t.compute(u_(t.inputs,e),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),d_,c_,h_,Au,f_,p_,m_,g_,__,v_,y_,x_,Ru,b_,w_,S_,M_,E_,eb,tb,lR=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),d_=(t,e)=>{if(t.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),t.length>0){if(e.mode==="linear"){if(!(t.length===2||t.length===3||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1||t.length===5&&t[0]===1&&t[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(t.length===2||t.length===4&&t[0]===1&&t[1]===1||t.length===4&&t[0]===1&&t[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},c_=(t,e,n)=>{e.every(r=>r>=0&&r<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(n).fill(1);return e.forEach((r,s)=>i[r]=t[s]),i},h_=(t,e,n,i,r,s)=>{let[a,o,l]=n>10?[1,2,3]:[-1,t.length>1?1:-1,-1],u=t[0].dims.length;if(a>0&&t.length>a&&t[a].dims.length>0)t[a].getFloat32Array().forEach(d=>s.push(d));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&t.length>o&&t[o].dims.length===1&&t[o].dims[0]>0){if(t[o].getFloat32Array().forEach(d=>i.push(d)),i.length!==0&&i.length!==u&&n>=18&&i.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");d_(i,e),e.axes.length>0&&c_(i,e.axes,u).forEach((d,h)=>i[h]=d)}if(l>0&&t.length>l&&t[l].dims.length===1&&t[l].dims[0]>0&&(t[l].getBigInt64Array().forEach(d=>r.push(Number(d))),r.length!==0&&r.length!==u&&n>=18&&r.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(i.length!==0&&i.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(r.length!==0&&r.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof r<"u"&&i.length>0&&r.length>u)throw new Error("Resize requires only of scales or sizes to be specified")},Au=(t,e,n,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${t}) * (${e});
  let whole = ${i}(big / (${n}));
  let fract = ${i}(big % (${n})) / ${i}(${n});
  return whole + fract;
`,f_=(t,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(t){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${Au("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Au("xResized","lengthOriginal - 1","lengthResized - 1",e)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${e}(roiStart) * ${e}(lengthOriginal - 1) +
                        (${e}(xResized) * ${e}(roiEnd - roiStart) * ${e}(lengthOriginal - 1)) /
                        ${e}(lengthResized - 1);
                  } else {
                    return 0.5 * ${e}(roiStart + roiEnd) * ${e}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${e}xScale * ${e}(lengthResized);
                  const adjustment = ${e}(lengthResized) / outputWidth;
                  const center = ${e}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${t} is not supported`)}})()+"}",p_=(t,e,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${t} is not supported`)}})()+"}",m_=(t,e,n)=>{let i=new Array(n).fill(0).concat(new Array(n).fill(1)),r=t.length===0?i:t.slice();return e.length>0?(e.forEach((s,a)=>{i[s]=r[a],i[a+n]=r[e.length+a]}),i):r},g_=(t,e,n,i)=>{let r=[];if(n.length>0)if(i.length>0){if(t.forEach(s=>r.push(s)),Math.max(...i)>t.length)throw new Error("axes is out of bound");i.forEach((s,a)=>r[s]=n[a])}else n.forEach(s=>r.push(s));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");r=t.map((s,a)=>Math.round(s*e[a]))}return r},__=(t,e,n)=>{let i=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(s=>e[s]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(s=>e[s]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let r=t.slice();return n.axes.length>0?(n.axes.forEach(s=>e[s]=i),n.axes.forEach(s=>r[s]=Math.round(t[s]*e[s]))):(e.fill(i,0,e.length),r.forEach((s,a)=>r[a]=Math.round(s*e[a]))),r},v_=(t,e,n,i,r)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${n.length}> {
      var original_indices: array<${t.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${Fe("uniforms.scales","i",i)};
        var roi_low = ${Fe("uniforms.roi","i",r)};
        var roi_hi = ${Fe("uniforms.roi",`i + ${e.length}`,r)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${Fe("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${Fe("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,y_=(t,e,n,i,r,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Fe("uniforms.scales","i",r)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Fe("uniforms.roi","i",s)};
          var roi_hi = ${Fe("uniforms.roi",`i + ${n.length}`,s)};
          var input_shape_i = ${Fe("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${Fe("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${e.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${e.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${t.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,x_=(t,e)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Fe("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,Ru=(t,e,n,i)=>t.rank>i?`
    ${t.indicesSet("input_indices",e,"channel")};
    ${t.indicesSet("input_indices",n,"batch")};
`:"",b_=(t,e,n,i,r)=>{let[s,a,o,l]=n.length===2?[-1,0,1,-1]:[0,2,3,1],u=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${u} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${t.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Ru(t,l,s,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${e.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${u} = originalIndices[${a}];
      var col:${u} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${r};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${u} = getInputValue(batch, channel, row1, col1);
      var x12: ${u} = getInputValue(batch, channel, row1, col2);
      var x21: ${u} = getInputValue(batch, channel, row2, col1);
      var x22: ${u} = getInputValue(batch, channel, row2, col2);
      var dx1: ${u} = abs(row - ${u}(row1));
      var dx2: ${u} = abs(${u}(row2) - row);
      var dy1: ${u} = abs(col - ${u}(col1));
      var dy2: ${u} = abs(${u}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},w_=(t,e,n,i,r,s,a,o,l,u)=>{let d=n.length===2,h=!0,[c,p]=d?[0,1]:h?[2,3]:[1,2],m=t.type.value,x=_=>{let g=_===c?"row":"col";return`
      fn ${g}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${e.type.indices}) -> ${m} {
        var output_index = ${e.indicesGet("output_indices",_)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${r[_]},
        ${i[_]}, ${n[_]}, ${s[_]}, ${s[_]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[_]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${g}: ${m} = originalIdx + ${m}(i);
          if (${g} < 0 || ${g} >= ${n[_]}) {
            ${u?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${g} = max(0, min(${g}, ${n[_]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",_,`u32(${g})`)};
          data[i + 1] = ${_===c?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${x(c)};
    ${x(p)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${e.type.indices}) -> ${m} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},S_=(t,e,n,i,r)=>{let[s,a,o,l,u]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${t.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${t.indicesSet("input_indices",l,`max(0, min(width, ${n[l]} - 1))`)};
      ${Ru(t,u,s,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${a}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[l]} - 1)) {
      return ${r};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},M_=(t,e,n,i,r,s)=>{let a=t.dims,o=m_(s,e.axes,a.length),l=g_(a,i,r,e.axes),u=i.slice();i.length===0&&(u=a.map((y,T)=>y===0?1:l[T]/y),e.keepAspectRatioPolicy!=="stretch"&&(l=__(a,u,e)));let d=Ne("output",t.dataType,l.length),h=ae("input",t.dataType,a.length),c=ee.size(l),p=a.length===l.length&&a.every((y,T)=>y===l[T]),m=e.coordinateTransformMode==="tf_crop_and_resize",x=e.extrapolationValue,_=h.type.value,g=y=>`
      ${p?"":`
      ${f_(e.coordinateTransformMode,_)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${x_(h,a)};
              ${p_(e.nearestMode,n,_)};
              ${y_(h,d,a,l,u.length,o.length,m)};
              `;case"linear":return`
              ${v_(d,a,l,u.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${b_(h,d,a,m,x)}`;if(a.length===3||a.length===5)return`${S_(h,d,a,m,x)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${w_(h,d,a,l,u,o,e.cubicCoeffA,m,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${y.registerUniform("output_size","u32").registerUniform("scales","f32",u.length).registerUniform("roi","f32",o.length).declareVariables(h,d)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${p?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${n}|${u.length>0?e.mode==="cubic"?u:u.length:""}|${r.length>0?r:""}|${o.length>0?o:""}|${p}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:u},{type:1,data:o},...Be(a,l)]})}},E_=t=>{let e=t.customDataBuffer;return new Uint32Array(e.buffer,e.byteOffset,1)[0]},eb=(t,e)=>{let n=[],i=[],r=[],s=E_(t);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");h_(t.inputs,e,s,n,i,r),t.compute(M_(t.inputs[0],e,s,n,i,r),{inputs:[0]})},tb=t=>{let e=t.antialias,n=t.axes,i=t.coordinateTransformMode,r=t.cubicCoeffA,s=t.excludeOutside!==0,a=t.extrapolationValue,o=t.keepAspectRatioPolicy,l=t.mode,u=t.nearestMode===""?"simple":t.nearestMode;return Mt({antialias:e,axes:n,coordinateTransformMode:i,cubicCoeffA:r,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:u})}}),T_,A_,nb,uR=pe(()=>{"use strict";Xe(),je(),Qe(),T_=t=>{if(!t||t.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=t[0],n=t[1],i=t[2];if(e.dataType!==n.dataType||e.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let r=e.dims[e.dims.length-1],s=e.dims[e.dims.length-2];if(n.dims[n.dims.length-1]!==r)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==r)throw new Error("Gamma must have the same hidden size as input");if(t.length>3){let a=t[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==r)throw new Error("Beta must have the same hidden size as input")}if(t.length>4){let a=t[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==r)throw new Error("Bias must have the same hidden size as input")}},A_=(t,e,n,i)=>{let r=e.simplified,s=t[0].dims,a=ee.size(s),o=s,l=a,u=s.slice(-1)[0],d=i?s.slice(0,-1).concat(1):[],h=!r&&t.length>3,c=t.length>4,p=i&&n>1,m=i&&n>2,x=n>3,_=64,g=Gt(u),y=[{type:12,data:l},{type:12,data:g},{type:12,data:u},{type:1,data:e.epsilon}],T=A=>{let R=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],w=[ae("x",t[0].dataType,t[0].dims,g),ae("skip",t[1].dataType,t[1].dims,g),ae("gamma",t[2].dataType,t[2].dims,g)];h&&w.push(ae("beta",t[3].dataType,t[3].dims,g)),c&&w.push(ae("bias",t[4].dataType,t[4].dims,g)),w.push(Ne("output",t[0].dataType,o,g)),p&&w.push(Ne("mean_output",1,d)),m&&w.push(Ne("inv_std_output",1,d)),x&&w.push(Ne("input_skip_bias_sum",t[0].dataType,o,g));let b=nn(t[0].dataType),N=nn(1,g);return`

      ${A.registerUniforms(R).declareVariables(...w)}
      var<workgroup> sum_shared : array<${N}, ${_}>;
      var<workgroup> sum_squared_shared : array<${N}, ${_}>;

      ${A.mainStart([_,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${_};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${_};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${_-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":b+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${x?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ts(b,g,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${_};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${lr("sum",g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${lr("square_sum",g)} / f32(uniforms.hidden_size) ${r?"":"- mean * mean"} + uniforms.epsilon);
        ${p?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${r?"":`- ${b}(mean)`}) *
            ${b}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},E=[{dims:o,dataType:t[0].dataType}];return n>1&&E.push({dims:d,dataType:1}),n>2&&E.push({dims:d,dataType:1}),n>3&&E.push({dims:s,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${g};${p};${m};${x}`,inputDependencies:t.map((A,R)=>"type")},getShaderSource:T,getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(l/u)},programUniforms:y})}},nb=(t,e)=>{T_(t.inputs);let n=[0];t.outputCount>1&&n.push(-3),t.outputCount>2&&n.push(-3),t.outputCount>3&&n.push(3),t.compute(A_(t.inputs,e,t.outputCount,!1),{outputs:n})}}),R_,zs,C_,Cu,I_,D_,ib,rb,dR=pe(()=>{"use strict";Xe(),je(),Vt(),Qe(),R_=(t,e)=>{if(!t||t.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");t.slice(1).forEach((n,i)=>{if(t[i+1].dataType!==6&&t[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},zs=(t,e)=>{let n=[];if(t.length>e)if(t[e].dataType===7)t[e].getBigInt64Array().forEach(i=>n.push(Number(i)));else if(t[e].dataType===6)t[e].getInt32Array().forEach(i=>n.push(Number(i)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return n},C_=(t,e)=>{if(t.length>1){let n=zs(t,1),i=zs(t,2),r=zs(t,3);return r.length===0&&(r=[...Array(t[0].dims.length).keys()]),Mt({starts:n,ends:i,axes:r})}else return e},Cu=(t,e,n,i,r)=>{let s=t;return t<0&&(s+=n[i[e]]),r[e]<0?Math.max(0,Math.min(s,n[i[e]]-1)):Math.max(0,Math.min(s,n[i[e]]))},I_=(t,e,n)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${Fe("uniforms.input_shape","i",n.length)};
            let steps_i = ${Fe("uniforms.steps","i",n.length)};
            let signs_i = ${Fe("uniforms.signs","i",n.length)};
            let starts_i = ${Fe("uniforms.starts","i",n.length)};
            var output_index = ${e.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${t.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,D_=(t,e)=>{let n=t[0].dims,i=ee.size(n),r=e.axes.length>0?ee.normalizeAxes(e.axes,n.length):[...Array(n.length).keys()],s=zs(t,4);s.forEach(g=>g!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(r.length).fill(1));let a=e.starts.map((g,y)=>Cu(g,y,n,r,s)),o=e.ends.map((g,y)=>Cu(g,y,n,r,s));if(r.length!==a.length||r.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(r.length!==n.length)for(let g=0;g<n.length;++g)r.includes(g)||(a.splice(g,0,0),o.splice(g,0,n[g]),s.splice(g,0,1));let l=s.map(g=>Math.sign(g));s.forEach((g,y,T)=>{if(g<0){let E=(o[y]-a[y])/g,A=a[y],R=A+E*s[y];a[y]=R,o[y]=A,T[y]=-g}});let u=n.slice(0);r.forEach((g,y)=>{u[g]=Math.ceil((o[g]-a[g])/s[g])});let d={dims:u,dataType:t[0].dataType},h=Ne("output",t[0].dataType,u.length),c=ae("input",t[0].dataType,t[0].dims.length),p=ee.size(u),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],x=[{type:12,data:p},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Be(t[0].dims,u)],_=g=>`
      ${g.registerUniforms(m).declareVariables(c,h)}
        ${I_(c,h,n)}
        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:x})}},ib=(t,e)=>{R_(t.inputs,e);let n=C_(t.inputs,e);t.compute(D_(t.inputs,n),{inputs:[0]})},rb=t=>{let e=t.starts,n=t.ends,i=t.axes;return Mt({starts:e,ends:n,axes:i})}}),P_,$_,sb,ab,cR=pe(()=>{"use strict";Xe(),je(),Vt(),dr(),Qe(),P_=t=>{if(!t||t.length!==1)throw new Error("Softmax op requires 1 input.")},$_=(t,e)=>{let n=t.inputs[0],i=n.dims,r=ee.size(i),s=i.length,a=ee.normalizeAxis(e.axis,s),o=a<i.length-1,l,u=[];o?(u=Array.from({length:s},(w,b)=>b),u[a]=s-1,u[s-1]=a,l=t.compute(kn(n,u),{inputs:[n],outputs:[-1]})[0]):l=n;let d=l.dims,h=d[s-1],c=r/h,p=Gt(h),m=h/p,x=64;c===1&&(x=256);let _=(w,b)=>b===4?`max(max(${w}.x, ${w}.y), max(${w}.z, ${w}.w))`:b===2?`max(${w}.x, ${w}.y)`:b===3?`max(max(${w}.x, ${w}.y), ${w}.z)`:w,g=ae("x",l.dataType,l.dims,p),y=Ne("result",l.dataType,l.dims,p),T=g.type.value,E=nn(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,A=w=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${x}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${w.registerUniform("packedCols","i32").declareVariables(g,y)}
      ${w.mainStart(x)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${x};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${E}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${_("threadShared[0]",p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${lr("threadShared[0]",p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,R=t.compute({name:"Softmax",shaderCache:{hint:`${p};${x}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:l.dataType}],dispatchGroup:{x:c},programUniforms:[{type:6,data:m}]}),getShaderSource:A},{inputs:[l],outputs:[o?-1:0]})[0];o&&t.compute(kn(R,u),{inputs:[R]})},sb=(t,e)=>{P_(t.inputs),$_(t,e)},ab=t=>Mt({axis:t.axis})}),Iu,L_,N_,U_,ob,hR=pe(()=>{"use strict";Xe(),je(),Qe(),Iu=t=>Array.from(t.getBigInt64Array(),Number),L_=t=>{if(!t||t.length!==2)throw new Error("Tile requires 2 inputs.");if(t[0].dataType!==1&&t[0].dataType!==10&&t[0].dataType!==6&&t[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(t[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(t[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Iu(t[1]).length!==t[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},N_=(t,e)=>{let n=[];for(let i=0;i<t.length;++i)n.push(t[i]*e[i]);return n},U_=(t,e)=>{let n=t[0].dims,i=e??Iu(t[1]),r=N_(n,i),s=ee.size(r),a=t[0].dataType,o=ae("input",a,n.length),l=Ne("output",a,r.length),u=d=>`
      const inputShape = ${o.indices(...n)};
      ${d.registerUniform("output_size","u32").declareVariables(o,l)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Be(t[0].dims,r)]}),getShaderSource:u}},ob=t=>{L_(t.inputs),t.compute(U_(t.inputs),{inputs:[0]})}}),O_,k_,lb,fR=pe(()=>{"use strict";Xe(),je(),Qe(),O_=(t,e,n,i,r)=>{let s=Ne("output_data",r,n.length,4),a=ae("a_data",e[1].dataType,e[1].dims.length,4),o=ae("b_data",e[2].dataType,e[2].dims.length,4),l=ae("c_data",e[0].dataType,e[0].dims.length,4),u,d=(h,c,p)=>`select(${c}, ${h}, ${p})`;if(!i)u=s.setByOffset("global_idx",d(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(c,p,m="")=>{let x=`a_data[index_a${p}][component_a${p}]`,_=`b_data[index_b${p}][component_b${p}]`,g=`bool(c_data[index_c${p}] & (0xffu << (component_c${p} * 8)))`;return`
            let output_indices${p} = ${s.offsetToIndices(`global_idx * 4u + ${p}u`)};
            let offset_a${p} = ${a.broadcastedIndicesToOffset(`output_indices${p}`,s)};
            let offset_b${p} = ${o.broadcastedIndicesToOffset(`output_indices${p}`,s)};
            let offset_c${p} = ${l.broadcastedIndicesToOffset(`output_indices${p}`,s)};
            let index_a${p} = offset_a${p} / 4u;
            let index_b${p} = offset_b${p} / 4u;
            let index_c${p} = offset_c${p} / 4u;
            let component_a${p} = offset_a${p} % 4u;
            let component_b${p} = offset_b${p} % 4u;
            let component_c${p} = offset_c${p} % 4u;
            ${c}[${p}] = ${m}(${d(x,_,g)});
          `};r===9?u=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:u=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${u}
      }`},k_=t=>{let e=t[1].dims,n=t[2].dims,i=t[0].dims,r=t[1].dataType,s=!(ee.areEqual(e,n)&&ee.areEqual(n,i)),a=e,o=ee.size(e);if(s){let u=ds.calcShape(ds.calcShape(e,n,!1),i,!1);if(!u)throw new Error("Can't perform where op on the given tensors");a=u,o=ee.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:u=>O_(u,t,a,s,r),getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Be(i,e,n,a)]})}},lb=t=>{t.compute(k_(t.inputs))}}),ub,pR=pe(()=>{"use strict";A3(),vc(),R3(),C3(),I3(),D3(),P3(),O3(),F3(),B3(),z3(),G3(),H3(),V3(),W3(),q3(),X3(),K3(),Y3(),Z3(),j3(),J3(),Q3(),eR(),tR(),nR(),Rx(),iR(),rR(),sR(),aR(),oR(),_c(),lR(),$x(),uR(),dR(),cR(),Dx(),hR(),dr(),yc(),fR(),ub=new Map([["Abs",[Qv]],["Acos",[ey]],["Acosh",[ty]],["Add",[Uy]],["ArgMax",[Yv,Cd]],["ArgMin",[Kv,Cd]],["Asin",[ny]],["Asinh",[iy]],["Atan",[ry]],["Atanh",[sy]],["Attention",[Zv]],["AveragePool",[Gx,zx]],["BatchNormalization",[jv]],["BiasAdd",[Jv]],["BiasSplitGelu",[Ny]],["Cast",[oy,ay]],["Ceil",[uy]],["Clip",[ly]],["Concat",[qy,Xy]],["Conv",[Nd,Ld]],["ConvTranspose",[ix,nx]],["Cos",[dy]],["Cosh",[cy]],["CumSum",[rx,sx]],["DepthToSpace",[ax,ox]],["DequantizeLinear",[Yx,Zx]],["DFT",[lx,ux]],["Div",[Oy]],["Einsum",[dx,cx]],["Elu",[hy,Ys]],["Equal",[ky]],["Erf",[fy]],["Exp",[py]],["Expand",[hx]],["FastGelu",[fx]],["Floor",[my]],["FusedConv",[Nd,Ld]],["Gather",[mx,px]],["GatherElements",[bx,xx]],["GatherBlockQuantized",[vx,yx]],["GatherND",[gx,_x]],["Gelu",[gy]],["Gemm",[Sx,wx]],["GlobalAveragePool",[Vx,Hx]],["GlobalMaxPool",[Kx,Xx]],["Greater",[Gy]],["GreaterOrEqual",[Vy]],["GridSample",[Mx,Ex]],["GroupQueryAttention",[Lx]],["HardSigmoid",[My,Sy]],["HardSwish",[Ey]],["InstanceNormalization",[Nx]],["LayerNormalization",[Ux]],["LeakyRelu",[_y,Ys]],["Less",[Hy]],["LessOrEqual",[Wy]],["Log",[$y]],["MatMul",[Ox]],["MatMulNBits",[kx,Fx]],["MaxPool",[Wx,qx]],["Mul",[Fy]],["MultiHeadAttention",[Ax,Tx]],["Neg",[yy]],["Not",[vy]],["Pad",[Bx]],["Pow",[By]],["QuickGelu",[Ly,Ys]],["Range",[jx]],["Reciprocal",[xy]],["ReduceMin",[Hv]],["ReduceMean",[kv]],["ReduceMax",[Gv]],["ReduceSum",[Wv]],["ReduceProd",[Vv]],["ReduceL1",[Fv]],["ReduceL2",[Bv]],["ReduceLogSum",[Xv]],["ReduceLogSumExp",[zv]],["ReduceSumSquare",[qv]],["Relu",[by]],["Resize",[eb,tb]],["RotaryEmbedding",[Px]],["ScatterND",[Qx,Jx]],["Sigmoid",[wy]],["Sin",[Ty]],["Sinh",[Ay]],["Slice",[ib,rb]],["SkipLayerNormalization",[nb]],["Split",[Cx,Ix]],["Sqrt",[Ry]],["Softmax",[sb,ab]],["Sub",[zy]],["Tan",[Cy]],["Tanh",[Iy]],["ThresholdedRelu",[Py,Ys]],["Tile",[ob]],["Transpose",[Tv,Av]],["Where",[lb]]])}),db,mR=pe(()=>{"use strict";Fn(),Gi(),Qe(),db=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,e){this.repo.set(t,e)}run(t,e,n,i,r){Vn(t.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let u of e)o.push({binding:o.length,resource:{buffer:u.buffer}});for(let u of n)o.push({binding:o.length,resource:{buffer:u.buffer}});r&&o.push({binding:o.length,resource:r});let l=s.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:o,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let u={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(u)}a.setPipeline(t.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),On(t.programInfo.name)}dispose(){}build(t,e){Vn(t.name);let n=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(u=>{n.features.has(u.feature)&&i.push(`enable ${u.extension};`)});let r=Ev(e,this.backend.device.limits),s=t.getShaderSource(r),a=`${i.join(`
`)}
${r.additionalImplementations}
${s}`,o=n.createShaderModule({code:a,label:t.name});_t("verbose",()=>`[WebGPU] ${t.name} shader code: ${a}`);let l=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:t.name});return On(t.name),{programInfo:t,computePipeline:l,uniformVariablesInfo:r.variablesInfo}}normalizeDispatchGroupSize(t){let e=typeof t=="number"?t:t.x,n=typeof t=="number"?1:t.y||1,i=typeof t=="number"?1:t.z||1,r=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(e<=r&&n<=r&&i<=r)return[e,n,i];let s=e*n*i,a=Math.ceil(Math.sqrt(s));if(a>r){if(a=Math.ceil(Math.cbrt(s)),a>r)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),cb={};vs(cb,{WebGpuBackend:()=>hb});var F_,B_,z_,hb,gR=pe(()=>{"use strict";Fn(),Xe(),Gi(),xv(),E3(),pR(),mR(),F_=(t,e)=>{if(e.length!==t.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${t.length}.`);let n=[];for(let i=0;i<t.length;++i){let r=t[i].dataType;switch(e[i]){case"none":{n.push("");break}case"type":{n.push(`${r}`);break}case"rank":{let s=t[i].dims.length;n.push(`${r};${s}`);break}case"dims":{let s=t[i].dims.join(",");n.push(`${r};${s}`);break}default:throw new Error(`unsupported input dependency: ${e[i]}`)}}return n.join("|")},B_=(t,e,n)=>{var r,s;let i=t.name;return(r=t.shaderCache)!=null&&r.hint&&(i+="["+t.shaderCache.hint+"]"),i+=":"+n+`:${F_(e,((s=t.shaderCache)==null?void 0:s.inputDependencies)??new Array(e.length).fill("dims"))}`,i},z_=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},hb=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,e){this.env=t;let n=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:e.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:e.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:e.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:e.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:e.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:e.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},r=o=>e.features.has(o)&&n.push(o)&&!0;r("chromium-experimental-timestamp-query-inside-passes")||r("timestamp-query"),r("shader-f16"),r("subgroups"),this.device=await e.requestDevice(i);let s=e,a=e.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new z_(a),this.gpuDataManager=Sv(this),this.programManager=new db(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,fc(t.logLevel,!!t.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:e,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var t;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((t=this.env)!=null&&t.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),e={};this.queryType==="at-passes"&&(e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(e)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Vn(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{var i;let e=new BigUint64Array(t.getMappedRange()),n=this.pendingQueries.get(t);for(let r=0;r<e.length/2;r++){let s=n[r],a=s.kernelId,o=this.kernels.get(a),l=o.kernelType,u=o.kernelName,d=s.programName,h=s.inputTensorViews,c=s.outputTensorViews,p=e[r*2],m=e[r*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=p);let x=Number(p-this.queryTimeBase),_=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(x)||!Number.isSafeInteger(_))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(g=>({dims:g.dims,dataType:ki(g.dataType)})),outputsMetadata:c.map(g=>({dims:g.dims,dataType:ki(g.dataType)})),kernelId:a,kernelType:l,kernelName:u,programName:d,startTime:x,endTime:_});else{let g="";h.forEach((T,E)=>{g+=`input[${E}]: [${T.dims}] | ${ki(T.dataType)}, `});let y="";c.forEach((T,E)=>{y+=`output[${E}]: [${T.dims}] | ${ki(T.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${u}|${d}" ${g}${y}start time: ${x} ns, execution time: ${_-x} ns`)}Eo("GPU",`${d}::${p}::${m}`)}t.unmap(),this.pendingQueries.delete(t)}),On()}run(t,e,n,i,r,s){Vn(t.name);let a=[];for(let y=0;y<e.length;++y){let T=e[y].data;if(T===0)continue;let E=this.gpuDataManager.get(T);if(!E)throw new Error(`no GPU data for input: ${T}`);a.push(E)}let{outputs:o,dispatchGroup:l,programUniforms:u}=t.getRunData(e),d=n.length===0?o.map((y,T)=>T):n;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let h=[],c=[];for(let y=0;y<o.length;++y){if(!Number.isInteger(d[y])||d[y]<-3||d[y]>=s)throw new Error(`Invalid output index: ${d[y]}`);if(d[y]===-3)continue;let T=d[y]===-1,E=d[y]===-2,A=T||E?r(o[y].dataType,o[y].dims):i(d[y],o[y].dataType,o[y].dims);if(h.push(A),A.data===0)continue;let R=this.gpuDataManager.get(A.data);if(!R)throw new Error(`no GPU data for output: ${A.data}`);if(T&&this.temporaryData.push(R),E){let w=this.kernelPersistentData.get(this.currentKernelId);w||(w=[],this.kernelPersistentData.set(this.currentKernelId,w)),w.push(R)}c.push(R)}if(a.length!==e.length||c.length!==h.length){if(c.length===0)return On(t.name),h;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(u){let y=0,T=[];u.forEach(w=>{let b=typeof w.data=="number"?[w.data]:w.data;if(b.length===0)return;let N=w.type===10?2:4,$,O;w.type===10?(O=b.length>4?16:b.length>2?8:b.length*N,$=b.length>4?16:N*b.length):(O=b.length<=2?b.length*N:16,$=16),y=Math.ceil(y/O)*O,T.push(y);let B=w.type===10?8:4;y+=b.length>4?Math.ceil(b.length/B)*$:b.length*N});let E=16;y=Math.ceil(y/E)*E;let A=new ArrayBuffer(y);u.forEach((w,b)=>{let N=T[b],$=typeof w.data=="number"?[w.data]:w.data;if(w.type===6)new Int32Array(A,N,$.length).set($);else if(w.type===12)new Uint32Array(A,N,$.length).set($);else if(w.type===10)new Uint16Array(A,N,$.length).set($);else if(w.type===1)new Float32Array(A,N,$.length).set($);else throw new Error(`Unsupported uniform type: ${ki(w.type)}`)});let R=this.gpuDataManager.create(y,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(R.buffer,0,A,0,y),this.gpuDataManager.release(R.id),p={offset:0,size:y,buffer:R.buffer}}let m=this.programManager.normalizeDispatchGroupSize(l),x=m[1]===1&&m[2]===1,_=B_(t,e,x),g=this.programManager.getArtifact(_);if(g||(g=this.programManager.build(t,m),this.programManager.setArtifact(_,g),_t("info",()=>`[artifact] key: ${_}, programName: ${t.name}`)),u&&g.uniformVariablesInfo){if(u.length!==g.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${g.uniformVariablesInfo.length}, got ${u.length} in program "${g.programInfo.name}".`);for(let y=0;y<u.length;y++){let T=u[y],E=T.type,A=typeof T.data=="number"?1:T.data.length,[R,w]=g.uniformVariablesInfo[y];if(E!==R||A!==w)throw new Error(`Uniform variable ${y} mismatch: expect type ${R} with size ${w}, got type ${E} with size ${A} in program "${g.programInfo.name}".`)}}if(_t("info",()=>`[ProgramManager] run "${t.name}" (key=${_}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let y={kernelId:this.currentKernelId,programName:g.programInfo.name,inputTensorViews:e,outputTensorViews:h};this.pendingKernels.push(y),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(y)}return this.programManager.run(g,a,c,m,p),On(t.name),h}upload(t,e){this.gpuDataManager.upload(t,e)}memcpy(t,e){this.gpuDataManager.memcpy(t,e)}async download(t,e){await this.gpuDataManager.download(t,e)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,e,n,i){let r=ub.get(t);if(!r)throw new Error(`kernel not implemented: ${t}`);let s={kernelType:t,kernelName:i,kernelEntry:r[0],attributes:[r[1],n]};this.kernels.set(e,s)}releaseKernel(t){let e=this.kernelPersistentData.get(t);if(e){for(let n of e)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,e,n){let i=this.kernels.get(t);if(!i)throw new Error(`kernel not created: ${t}`);let r=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${r}] ${s}" is not allowed to be called recursively`);this.currentKernelId=t,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),_t("info",()=>`[WebGPU] Start to run kernel "[${r}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(e,o[1]),0}catch(u){return n.push(Promise.resolve(`[WebGPU] Kernel "[${r}] ${s}" failed. ${u}`)),1}finally{l&&n.push(this.device.popErrorScope().then(u=>u?`GPU validation error for kernel "[${r}] ${s}": ${u.message}`:null));for(let u of this.temporaryData)this.gpuDataManager.release(u.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,e,n,i){let r=this.sessionExternalDataMapping.get(t);r||(r=new Map,this.sessionExternalDataMapping.set(t,r));let s=r.get(e),a=this.gpuDataManager.registerExternalBuffer(n,i,s);return r.set(e,[a,n]),a}unregisterBuffers(t){let e=this.sessionExternalDataMapping.get(t);e&&(e.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let e=this.gpuDataManager.get(t);if(!e)throw new Error(`no GPU data for buffer: ${t}`);return e.buffer}createDownloader(t,e,n){return async()=>{let i=await Td(this,t,e);return pc(i.buffer,n)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){var t;this.queryType="none",(((t=this.env.webgpu.profiling)==null?void 0:t.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){_t("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){_t("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){_t("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),e=this.capturedPendingKernels.get(this.currentSessionId),n=t.length;this.pendingKernels=[];for(let i=0;i<n;i++){let r=this.getComputePassEncoder(),s=t[i];this.writeTimestamp(this.pendingDispatchNumber*2),r.setPipeline(s.computePipeline),r.setBindGroup(0,s.bindGroup),r.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(e[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),fb={};vs(fb,{init:()=>pb});var no,G_,pb,_R=pe(()=>{"use strict";Xe(),Gi(),je(),M3(),no=class mb{constructor(e,n,i,r){this.module=e,this.dataType=n,this.data=i,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=ee.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=ee.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=ee.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=ee.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(ee.size(e)!==ee.size(this.dims))throw new Error("Invalid new shape");return new mb(this.module,this.dataType,this.data,e)}},G_=class{constructor(t,e,n){this.module=t,this.backend=e,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=e.adapterInfo,this.deviceLimits=e.device.limits;let i=t.PTR_SIZE,r=n/t.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(t.getValue(i*r++,s));let a=Number(t.getValue(i*r++,s));this.outputCount=Number(t.getValue(i*r++,s)),this.customDataOffset=Number(t.getValue(i*r++,"*")),this.customDataSize=Number(t.getValue(i*r++,s));let o=[];for(let l=0;l<a;l++){let u=Number(t.getValue(i*r++,s)),d=Number(t.getValue(i*r++,"*")),h=Number(t.getValue(i*r++,s)),c=[];for(let p=0;p<h;p++)c.push(Number(t.getValue(i*r++,s)));o.push(new no(t,u,d,c))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,e){var a;let n=((a=e==null?void 0:e.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(e==null?void 0:e.outputs)??[],r=(o,l,u)=>new no(this.module,l,this.output(o,u),u),s=(o,l)=>{let u=Mr(o,l);if(!u)throw new Error(`Unsupported data type: ${o}`);let d=u>0?this.backend.gpuDataManager.create(u).id:0;return new no(this.module,o,d,l)};return this.backend.run(t,n,i,r,s,this.outputCount)}output(t,e){let n=this.module.stackSave();try{let i=this.module.PTR_SIZE,r=i===4?"i32":"i64",s=this.module.stackAlloc((1+e.length)*i);this.module.setValue(s,e.length,r);for(let a=0;a<e.length;a++)this.module.setValue(s+i*(a+1),e[a],r);return this.module._JsepOutput(this.opKernelContext,t,s)}catch(i){throw new Error(`Failed to generate kernel's output[${t}] with dims [${e}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(n)}}},pb=async(t,e,n,i)=>{let r=e.jsepInit;if(!r)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(t==="webgpu"){let s=(gR(),ra(cb)).WebGpuBackend,a=new s;await a.initialize(n,i),r("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,u,d=!1)=>{if(d)_t("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(u)}`),a.memcpy(Number(o),Number(l));else{_t("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let h=e.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(u));a.upload(Number(l),h)}},async(o,l,u)=>{_t("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${u}`),await a.download(Number(o),()=>e.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(o,l,u)=>a.createKernel(o,Number(l),u,e.UTF8ToString(e._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,u,d)=>{_t("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${o}, contextDataOffset=${l}`);let h=new G_(e,a,Number(l));return a.computeKernel(Number(o),h,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new wv(n);r("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,u,d)=>s.ensureTensor(a,o,l,u,d),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!n.trace])}}}),H_,Ec,Tc,Ji,V_,Du,Po,Ac,Rc,Gs,W_,yr,gb,_b,Pu,Cc,Ic,Dc,vb=pe(()=>{"use strict";Fn(),b3(),w3(),Xe(),Lr(),uc(),hc(),H_=(t,e)=>{Ct()._OrtInit(t,e)!==0&&bt("Can't initialize onnxruntime.")},Ec=async t=>{H_(t.wasm.numThreads,Ao(t.logLevel))},Tc=async(t,e)=>{var i,r;(r=(i=Ct()).asyncInit)==null||r.call(i);let n=t.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=t.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=t.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(_R(),ra(fb)).init;e==="webgpu"&&await s("webgpu",Ct(),t,n),e==="webnn"&&await s("webnn",Ct(),t)}},Ji=new Map,V_=t=>{let e=Ct(),n=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetInputOutputCount(t,r,r+i)!==0&&bt("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(e.getValue(r,s)),Number(e.getValue(r+i,s))]}finally{e.stackRestore(n)}},Du=(t,e)=>{let n=Ct(),i=n.stackSave(),r=0;try{let s=n.PTR_SIZE,a=n.stackAlloc(2*s);n._OrtGetInputOutputMetadata(t,e,a,a+s)!==0&&bt("Can't get session input/output metadata.");let o=Number(n.getValue(a,"*"));r=Number(n.getValue(a+s,"*"));let l=n.HEAP32[r/4];if(l===0)return[o,0];let u=n.HEAPU32[r/4+1],d=[];for(let h=0;h<u;h++){let c=Number(n.getValue(r+8+h*s,"*"));d.push(c!==0?n.UTF8ToString(c):Number(n.getValue(r+8+(h+u)*s,"*")))}return[o,l,d]}finally{n.stackRestore(i),r!==0&&n._OrtFree(r)}},Po=t=>{let e=Ct(),n=e._malloc(t.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return e.HEAPU8.set(t,n),[n,t.byteLength]},Ac=async(t,e)=>{var h,c,p,m;let n,i,r=Ct();Array.isArray(t)?[n,i]=t:t.buffer===r.HEAPU8.buffer?[n,i]=[t.byteOffset,t.byteLength]:[n,i]=Po(t);let s=0,a=0,o=0,l=[],u=[],d=[];try{if([a,l]=await gv(e),(e==null?void 0:e.externalData)&&r.mountExternalData){let b=[];for(let N of e.externalData){let $=typeof N=="string"?N:N.path,O=typeof N=="string"?N:N.data;b.push(Bo(O).then(B=>{r.mountExternalData($,B)}))}await Promise.all(b)}for(let b of(e==null?void 0:e.executionProviders)??[])if((typeof b=="string"?b:b.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof b!="string"){let N=b,$=N==null?void 0:N.context,O=N==null?void 0:N.gpuDevice,B=N==null?void 0:N.deviceType,V=N==null?void 0:N.powerPreference;$?r.currentContext=$:O?r.currentContext=await r.webnnCreateMLContext(O):r.currentContext=await r.webnnCreateMLContext({deviceType:B,powerPreference:V})}else r.currentContext=await r.webnnCreateMLContext();break}s=await r._OrtCreateSession(n,i,a),(h=r.webgpuOnCreateSession)==null||h.call(r,s),s===0&&bt("Can't create a session."),(c=r.jsepOnCreateSession)==null||c.call(r),r.currentContext&&(r.webnnRegisterMLContext(s,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[x,_]=V_(s),g=!!(e!=null&&e.enableGraphCapture),y=[],T=[],E=[],A=[],R=[];for(let b=0;b<x;b++){let[N,$,O]=Du(s,b);N===0&&bt("Can't get an input name."),u.push(N);let B=r.UTF8ToString(N);y.push(B),E.push($===0?{name:B,isTensor:!1}:{name:B,isTensor:!0,type:ki($),shape:O})}for(let b=0;b<_;b++){let[N,$,O]=Du(s,b+x);N===0&&bt("Can't get an output name."),d.push(N);let B=r.UTF8ToString(N);T.push(B),A.push($===0?{name:B,isTensor:!1}:{name:B,isTensor:!0,type:ki($),shape:O});{if(g&&(e==null?void 0:e.preferredOutputLocation)===void 0){R.push("gpu-buffer");continue}let V=typeof(e==null?void 0:e.preferredOutputLocation)=="string"?e.preferredOutputLocation:((p=e==null?void 0:e.preferredOutputLocation)==null?void 0:p[B])??"cpu",D=r.webnnIsGraphOutput;if(V==="cpu"&&D&&D(s,B)){R.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(g&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);R.push(V)}}let w=null;return R.some(b=>b==="gpu-buffer"||b==="ml-tensor"||b==="ml-tensor-cpu-output")&&(o=r._OrtCreateBinding(s),o===0&&bt("Can't create IO binding."),w={handle:o,outputPreferredLocations:R,outputPreferredLocationsEncoded:R.map(b=>b==="ml-tensor-cpu-output"?"ml-tensor":b).map(b=>Ed(b))}),Ji.set(s,[s,u,d,w,g,!1]),[s,y,T,E,A]}catch(x){throw u.forEach(_=>r._OrtFree(_)),d.forEach(_=>r._OrtFree(_)),o!==0&&r._OrtReleaseBinding(o)!==0&&bt("Can't release IO binding."),s!==0&&r._OrtReleaseSession(s)!==0&&bt("Can't release session."),x}finally{r._free(n),a!==0&&r._OrtReleaseSessionOptions(a)!==0&&bt("Can't release session options."),l.forEach(x=>r._free(x)),(m=r.unmountExternalData)==null||m.call(r)}},Rc=t=>{var l,u,d;let e=Ct(),n=Ji.get(t);if(!n)throw new Error(`cannot release session. invalid session id: ${t}`);let[i,r,s,a,o]=n;a&&(o&&e._OrtClearBoundOutputs(a.handle)!==0&&bt("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&bt("Can't release IO binding.")),(l=e.jsepOnReleaseSession)==null||l.call(e,t),(u=e.webnnOnReleaseSession)==null||u.call(e,t),(d=e.webgpuOnReleaseSession)==null||d.call(e,t),r.forEach(h=>e._OrtFree(h)),s.forEach(h=>e._OrtFree(h)),e._OrtReleaseSession(i)!==0&&bt("Can't release session."),Ji.delete(t)},Gs=new Map,W_=1,yr=new Map,gb=t=>{let e=Ct(),n=e._malloc(t.byteLength);if(n===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${t.byteLength}.`);try{e.HEAPU8.set(t,n);let i=e._OrtCreateLoraAdapter(n,t.byteLength);i===0&&bt("Can't create a LoRA adapter.");let r=W_++;return Gs.set(r,i),r}finally{e._free(n)}},_b=t=>{let e=Ct(),n=Gs.get(t);if(n===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${t}`);if(yr.has(t))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${t}`);e._OrtReleaseLoraAdapter(n)!==0&&bt("Can't release LoRA adapter."),Gs.delete(t)},Pu=async(t,e,n,i,r,s,a=!1)=>{if(!t){e.push(0);return}let o=Ct(),l=o.PTR_SIZE,u=t[0],d=t[1],h=t[3],c=h,p,m;if(u==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let g=t[2].gpuBuffer;m=Mr(Sr(u),d);{let y=o.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');p=y(i,s,g,m)}}else if(h==="ml-tensor"){let g=t[2].mlTensor;m=Mr(Sr(u),d);let y=o.webnnRegisterMLTensor;if(!y)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');p=y(i,g,Sr(u),d)}else{let g=t[2];if(Array.isArray(g)){m=l*g.length,p=o._malloc(m),n.push(p);for(let y=0;y<g.length;y++){if(typeof g[y]!="string")throw new TypeError(`tensor data at index ${y} is not a string`);o.setValue(p+y*l,ri(g[y],n),"*")}}else{let y=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(u!=="string"&&y&&T){let E=o.UTF8ToString(r);if(y(i,E)||T(i,E)){let A=Sr(u);m=Mr(A,d),c="ml-tensor";let R=o.webnnCreateTemporaryTensor,w=o.webnnUploadTensor;if(!R||!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let b=await R(i,A,d);w(b,new Uint8Array(g.buffer,g.byteOffset,g.byteLength)),p=b}else m=g.byteLength,p=o._malloc(m),n.push(p),o.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,m),p)}else m=g.byteLength,p=o._malloc(m),n.push(p),o.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,m),p)}}let x=o.stackSave(),_=o.stackAlloc(4*d.length);try{d.forEach((y,T)=>o.setValue(_+T*l,y,l===4?"i32":"i64"));let g=o._OrtCreateTensor(Sr(u),p,m,_,d.length,Ed(c));g===0&&bt(`Can't create tensor for input/output. session=${i}, index=${s}.`),e.push(g)}finally{o.stackRestore(x)}},Cc=async(t,e,n,i,r,s,a=[])=>{var D,H,Y,W;let o=Ct(),l=o.PTR_SIZE,u=Ji.get(t);if(!u)throw new Error(`cannot run inference. invalid session id: ${t}`);let d=u[0],h=u[1],c=u[2],p=u[3],m=u[4],x=u[5],_=[];if(a.length>0){if(p)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let ne of a){let q=Gs.get(ne);if(q===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${ne}`);_.push(q)}}let g=e.length,y=i.length,T=0,E=[],A=[],R=[],w=[],b=[],N=o.stackSave(),$=o.stackAlloc(g*l),O=o.stackAlloc(g*l),B=o.stackAlloc(y*l),V=o.stackAlloc(y*l);try{for(let k of a)yr.set(k,(yr.get(k)??0)+1);[T,E]=mv(s,_),Er("wasm prepareInputOutputTensor");for(let k=0;k<g;k++)await Pu(n[k],A,w,t,h[e[k]],e[k],m);for(let k=0;k<y;k++)await Pu(r[k],R,w,t,c[i[k]],g+i[k],m);Tr("wasm prepareInputOutputTensor");for(let k=0;k<g;k++)o.setValue($+k*l,A[k],"*"),o.setValue(O+k*l,h[e[k]],"*");for(let k=0;k<y;k++)o.setValue(B+k*l,R[k],"*"),o.setValue(V+k*l,c[i[k]],"*");if(p&&!x){let{handle:k,outputPreferredLocations:le,outputPreferredLocationsEncoded:he}=p;if(h.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${h.length}).`);Er("wasm bindInputsOutputs");for(let z=0;z<g;z++){let fe=e[z];await o._OrtBindInput(k,h[fe],A[z])!==0&&bt(`Can't bind input[${z}] for session=${t}.`)}for(let z=0;z<y;z++){let fe=i[z];(D=r[z])!=null&&D[3]?(b.push(R[z]),o._OrtBindOutput(k,c[fe],R[z],0)!==0&&bt(`Can't bind pre-allocated output[${z}] for session=${t}.`)):o._OrtBindOutput(k,c[fe],0,he[fe])!==0&&bt(`Can't bind output[${z}] to ${le[z]} for session=${t}.`)}Tr("wasm bindInputsOutputs"),Ji.set(t,[d,h,c,p,m,!0])}(H=o.jsepOnRunStart)==null||H.call(o,d),(Y=o.webnnOnRunStart)==null||Y.call(o,d);let ne;p?ne=await o._OrtRunWithBinding(d,p.handle,y,B,T):ne=await o._OrtRun(d,O,$,g,V,y,B,T),ne!==0&&bt("failed to call OrtRun().");let q=[],ie=[];Er("wasm ProcessOutputTensor");for(let k=0;k<y;k++){let le=Number(o.getValue(B+k*l,"*"));if(le===R[k]||b.includes(R[k])){q.push(r[k]),le!==R[k]&&o._OrtReleaseTensor(le)!==0&&bt("Can't release tensor.");continue}let he=o.stackSave(),z=o.stackAlloc(4*l),fe=!1,_e,Ce=0;try{o._OrtGetTensorData(le,z,z+l,z+2*l,z+3*l)!==0&&bt(`Can't access output tensor data on index ${k}.`);let xe=l===4?"i32":"i64",He=Number(o.getValue(z,xe));Ce=o.getValue(z+l,"*");let Lt=o.getValue(z+l*2,"*"),We=Number(o.getValue(z+l*3,xe)),lt=[];for(let dt=0;dt<We;dt++)lt.push(Number(o.getValue(Lt+dt*l,xe)));o._OrtFree(Lt)!==0&&bt("Can't free memory for tensor dims.");let et=lt.reduce((dt,it)=>dt*it,1);_e=ki(He);let Le=p==null?void 0:p.outputPreferredLocations[i[k]];if(_e==="string"){if(Le==="gpu-buffer"||Le==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let dt=[];for(let it=0;it<et;it++){let Nt=o.getValue(Ce+it*l,"*"),St=o.getValue(Ce+(it+1)*l,"*"),an=it===et-1?void 0:St-Nt;dt.push(o.UTF8ToString(Nt,an))}q.push([_e,lt,dt,"cpu"])}else if(Le==="gpu-buffer"&&et>0){let dt=o.jsepGetBuffer;if(!dt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let it=dt(Ce),Nt=Mr(He,et);if(Nt===void 0||!dc(_e))throw new Error(`Unsupported data type: ${_e}`);fe=!0,q.push([_e,lt,{gpuBuffer:it,download:o.jsepCreateDownloader(it,Nt,_e),dispose:()=>{o._OrtReleaseTensor(le)!==0&&bt("Can't release tensor.")}},"gpu-buffer"])}else if(Le==="ml-tensor"&&et>0){let dt=o.webnnEnsureTensor,it=o.webnnIsGraphInputOutputTypeSupported;if(!dt||!it)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Mr(He,et)===void 0||!cc(_e))throw new Error(`Unsupported data type: ${_e}`);if(!it(t,_e,!1))throw new Error(`preferredLocation "ml-tensor" for ${_e} output is not supported by current WebNN Context.`);let Nt=await dt(t,Ce,He,lt,!1);fe=!0,q.push([_e,lt,{mlTensor:Nt,download:o.webnnCreateMLTensorDownloader(Ce,_e),dispose:()=>{o.webnnReleaseTensorId(Ce),o._OrtReleaseTensor(le)}},"ml-tensor"])}else if(Le==="ml-tensor-cpu-output"&&et>0){let dt=o.webnnCreateMLTensorDownloader(Ce,_e)(),it=q.length;fe=!0,ie.push((async()=>{let Nt=[it,await dt];return o.webnnReleaseTensorId(Ce),o._OrtReleaseTensor(le),Nt})()),q.push([_e,lt,[],"cpu"])}else{let dt=Fo(_e),it=new dt(et);new Uint8Array(it.buffer,it.byteOffset,it.byteLength).set(o.HEAPU8.subarray(Ce,Ce+it.byteLength)),q.push([_e,lt,it,"cpu"])}}finally{o.stackRestore(he),_e==="string"&&Ce&&o._free(Ce),fe||o._OrtReleaseTensor(le)}}p&&!m&&(o._OrtClearBoundOutputs(p.handle)!==0&&bt("Can't clear bound outputs."),Ji.set(t,[d,h,c,p,m,!1]));for(let[k,le]of await Promise.all(ie))q[k][2]=le;return Tr("wasm ProcessOutputTensor"),q}finally{(W=o.webnnOnRunEnd)==null||W.call(o,d),o.stackRestore(N),A.forEach(ne=>o._OrtReleaseTensor(ne)),R.forEach(ne=>o._OrtReleaseTensor(ne)),w.forEach(ne=>o._free(ne)),T!==0&&o._OrtReleaseRunOptions(T),E.forEach(ne=>o._free(ne));for(let ne of a){let q=yr.get(ne)-1;q===0?yr.delete(ne):yr.set(ne,q)}}},Ic=t=>{let e=Ct(),n=Ji.get(t);if(!n)throw new Error("invalid session id");let i=n[0],r=e._OrtEndProfiling(i);r===0&&bt("Can't get an profile file name."),e._OrtFree(r)},Dc=t=>{let e=[];for(let n of t){let i=n[2];!Array.isArray(i)&&"buffer"in i&&e.push(i.buffer)}return e}}),mi,Tn,jr,Hs,Vs,io,$u,ro,xr,br,q_,yb,xb,bb,wb,Sb,Mb,Eb,Tb,Ab,Pc=pe(()=>{"use strict";Fn(),vb(),Lr(),oc(),hc(),mi=()=>!!Ft.wasm.proxy&&typeof document<"u",jr=!1,Hs=!1,Vs=!1,ro=new Map,xr=(t,e)=>{let n=ro.get(t);n?n.push(e):ro.set(t,[e])},br=()=>{if(jr||!Hs||Vs||!Tn)throw new Error("worker not ready")},q_=t=>{switch(t.data.type){case"init-wasm":jr=!1,t.data.err?(Vs=!0,$u[1](t.data.err)):(Hs=!0,$u[0]()),io&&(URL.revokeObjectURL(io),io=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=ro.get(t.data.type);t.data.err?e.shift()[1](t.data.err):e.shift()[0](t.data.out);break}default:}},yb=async()=>{if(!Hs){if(jr)throw new Error("multiple calls to 'initWasm()' detected.");if(Vs)throw new Error("previous call to 'initWasm()' failed.");if(jr=!0,mi())return new Promise((t,e)=>{Tn==null||Tn.terminate(),fv().then(([n,i])=>{try{Tn=i,Tn.onerror=s=>e(s),Tn.onmessage=q_,$u=[t,e];let r={type:"init-wasm",in:Ft};!r.in.wasm.wasmPaths&&(n||Md)&&(r.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href}),Tn.postMessage(r),io=n}catch(r){e(r)}},e)});try{await lc(Ft.wasm),await Ec(Ft),Hs=!0}catch(t){throw Vs=!0,t}finally{jr=!1}}},xb=async t=>{if(mi())return br(),new Promise((e,n)=>{xr("init-ep",[e,n]);let i={type:"init-ep",in:{epName:t,env:Ft}};Tn.postMessage(i)});await Tc(Ft,t)},bb=async t=>mi()?(br(),new Promise((e,n)=>{xr("copy-from",[e,n]);let i={type:"copy-from",in:{buffer:t}};Tn.postMessage(i,[t.buffer])})):Po(t),wb=async(t,e)=>{if(mi()){if(e!=null&&e.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return br(),new Promise((n,i)=>{xr("create",[n,i]);let r={type:"create",in:{model:t,options:{...e}}},s=[];t instanceof Uint8Array&&s.push(t.buffer),Tn.postMessage(r,s)})}else return Ac(t,e)},Sb=async t=>{if(mi())return br(),new Promise((e,n)=>{xr("release",[e,n]);let i={type:"release",in:t};Tn.postMessage(i)});Rc(t)},Mb=async t=>{if(mi())throw new Error("LoRA adapter is not supported for proxy.");let e=typeof t=="string"?await Bo(t):t;return gb(e)},Eb=async t=>{if(mi())throw new Error("LoRA adapter is not supported for proxy.");_b(t)},Tb=async(t,e,n,i,r,s,a)=>{if(mi()){if(a.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return br(),new Promise((o,l)=>{xr("run",[o,l]);let u=n,d={type:"run",in:{sessionId:t,inputIndices:e,inputs:u,outputIndices:i,options:s}};Tn.postMessage(d,Dc(u))})}else return Cc(t,e,n,i,r,s,a)},Ab=async t=>{if(mi())return br(),new Promise((e,n)=>{xr("end-profiling",[e,n]);let i={type:"end-profiling",in:t};Tn.postMessage(i)});Ic(t)}}),$c,Rb=pe(()=>{"use strict";Fn(),Pc(),$c=class{async loadAdapter(t){Vn(),this.adapterId=await Mb(t),On()}async dispose(){return Eb(this.adapterId)}}}),Lu,X_,Cb,vR=pe(()=>{"use strict";Fn(),Rb(),Pc(),Xe(),ac(),hc(),Lu=(t,e)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${t.location} for ${e()}`)}},X_=t=>{switch(t[3]){case"cpu":return new ai(t[0],t[2],t[1]);case"gpu-buffer":{let e=t[0];if(!dc(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:n,download:i,dispose:r}=t[2];return ai.fromGpuBuffer(n,{dataType:e,dims:t[1],download:i,dispose:r})}case"ml-tensor":{let e=t[0];if(!cc(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:n,download:i,dispose:r}=t[2];return ai.fromMLTensor(n,{dataType:e,dims:t[1],download:i,dispose:r})}default:throw new Error(`invalid data location: ${t[3]}`)}},Cb=class{async fetchModelAndCopyToWasmMemory(t){return bb(await Bo(t))}async loadModel(t,e){Vn();let n;typeof t=="string"?n=await this.fetchModelAndCopyToWasmMemory(t):n=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wb(n,e),On()}async dispose(){return Sb(this.sessionId)}async run(t,e,n,i=[]){Vn();let r=i.map(p=>{if(!(p instanceof $c))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return p.adapterId}),s=[],a=[];Object.entries(t).forEach(p=>{let m=p[0],x=p[1],_=this.inputNames.indexOf(m);if(_===-1)throw new Error(`invalid input '${m}'`);s.push(x),a.push(_)});let o=[],l=[];Object.entries(e).forEach(p=>{let m=p[0],x=p[1],_=this.outputNames.indexOf(m);if(_===-1)throw new Error(`invalid output '${m}'`);o.push(x),l.push(_)});let u=s.map((p,m)=>Lu(p,()=>`input "${this.inputNames[a[m]]}"`)),d=o.map((p,m)=>p?Lu(p,()=>`output "${this.outputNames[l[m]]}"`):null),h=await Tb(this.sessionId,a,u,l,d,n,r),c={};for(let p=0;p<h.length;p++)c[this.outputNames[l[p]]]=o[p]??X_(h[p]);return On(),c}startProfiling(){}endProfiling(){Ab(this.sessionId)}}}),Ib,yR=pe(()=>{"use strict";Ib=t=>{if(t!=null&&t.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),Db={};vs(Db,{OnnxruntimeWebAssemblyBackend:()=>kd,initializeFlags:()=>Od,wasmBackend:()=>Pb});var Od,kd,Pb,xR=pe(()=>{"use strict";Fn(),Rb(),Pc(),vR(),yR(),Od=()=>{(typeof Ft.wasm.initTimeout!="number"||Ft.wasm.initTimeout<0)&&(Ft.wasm.initTimeout=0);let t=Ft.wasm.simd;if(typeof t!="boolean"&&t!==void 0&&t!=="fixed"&&t!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${t}". Reset it to \`false\` and ignore SIMD feature checking.`),Ft.wasm.simd=!1),typeof Ft.wasm.proxy!="boolean"&&(Ft.wasm.proxy=!1),typeof Ft.wasm.trace!="boolean"&&(Ft.wasm.trace=!1),typeof Ft.wasm.numThreads!="number"||!Number.isInteger(Ft.wasm.numThreads)||Ft.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ft.wasm.numThreads=1;else{let e=typeof navigator>"u"?n3("node:os").cpus().length:navigator.hardwareConcurrency;Ft.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},kd=class{async init(t){Od(),await yb(),await xb(t)}async createInferenceSessionHandler(t,e){Ib(e);let n=new Cb;return await n.loadModel(t,e),n}async createLoraAdapterHandler(t){let e=new $c;return await e.loadAdapter(t),e}},Pb=new kd});Fn();Fn();Fn();var bR="1.31.1";{let t=(xR(),ra(Db)).wasmBackend;es("webgpu",t,5),es("webnn",t,5),es("cpu",t,10),es("wasm",t,10)}Object.defineProperty(Ft.versions,"web",{value:bR,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const It=t=>document.getElementById(t);let Fd=null,ns=null,so=null,Ws=null,Hn=null;const wR="https://huggingface.co/Xenova/depth-anything-small-hf/resolve/main/onnx/model_quantized.onnx",ua="depth-anything-small-quantized.onnx",$b="vektorstudyo-models-v1";let hs=null;const Bd=It("viewer"),$r=new _1;$r.background=new pt("#1a1d24");const fs=new ii(38,1,.1,1e3);fs.position.set(0,0,180);const da=new kA({antialias:!0});da.setPixelRatio(Math.min(devicePixelRatio,2));Bd.append(da.domElement);const $o=new BA(fs,da.domElement);$o.enableDamping=!0;$r.add(new k1(16777215,2503240,2.4));const Lb=new z1(16777215,2.2);Lb.position.set(100,120,180);$r.add(Lb);$r.add(new H1(180,18,5924471,3423048));function Nb(){const t=Bd.clientWidth,e=Bd.clientHeight;da.setSize(t,e,!1),fs.aspect=t/e,fs.updateProjectionMatrix()}window.addEventListener("resize",Nb);Nb();function Ub(){$o.update(),da.render($r,fs),requestAnimationFrame(Ub)}Ub();It("backButton").onclick=()=>window.open("/","_self");function gn(t,e){It(t).textContent=e}function Ob(t){const e=URL.createObjectURL(t),n=new Image;n.onload=()=>{var r;Fd=n;const i=It("sourcePreview");i.src=e,(r=i.parentElement)==null||r.classList.add("visible"),gn("photoStatus",`${t.name} · ${n.naturalWidth} × ${n.naturalHeight}`),It("generate").disabled=!1},n.onerror=()=>gn("photoStatus","Fotoğraf okunamadı."),n.src=e}const ps=It("dropZone");ps.onclick=()=>It("photoFile").click();It("photoFile").onchange=t=>{var n;const e=(n=t.target.files)==null?void 0:n[0];e&&Ob(e)};for(const t of["dragenter","dragover"])ps.addEventListener(t,e=>{e.preventDefault(),ps.classList.add("drag")});for(const t of["dragleave","drop"])ps.addEventListener(t,e=>{e.preventDefault(),ps.classList.remove("drag")});ps.addEventListener("drop",t=>{var n;const e=(n=t.dataTransfer)==null?void 0:n.files[0];e!=null&&e.type.startsWith("image/")&&Ob(e)});It("modelFile").onchange=async t=>{var n;const e=(n=t.target.files)==null?void 0:n[0];e&&await kb(e)};async function kb(t){so&&URL.revokeObjectURL(so),so=URL.createObjectURL(t),gn("modelStatus","ONNX modeli hazırlanıyor…");try{ns=await sc.create(so,{executionProviders:["webgl","wasm"],graphOptimizationLevel:"all"}),gn("modelStatus",`${t.name} hazır`)}catch(e){ns=null,gn("modelStatus",`Model yüklenemedi: ${e.message}`)}}async function SR(){const e=await(await navigator.storage.getDirectory()).getDirectoryHandle($b,{create:!0});try{return await(await e.getFileHandle(ua)).getFile()}catch{return null}}async function MR(t){const r=await(await(await(await navigator.storage.getDirectory()).getDirectoryHandle($b,{create:!0})).getFileHandle(ua,{create:!0})).createWritable();await r.write(t),await r.close()}async function ER(){if(!hs)return null;try{return await(await hs.getFileHandle(ua)).getFile()}catch{return null}}async function TR(t){if(!hs)return;const n=await(await hs.getFileHandle(ua,{create:!0})).createWritable();await n.write(t),await n.close()}It("chooseModelFolder").onclick=async()=>{const t=window.showDirectoryPicker;if(!t){gn("modelStatus","Bu tarayıcı klasör seçimini desteklemiyor. OPFS otomatik kullanılacak.");return}try{hs=await t.call(window),gn("modelStatus",`Model klasörü seçildi: ${hs.name}`)}catch{gn("modelStatus","Model klasörü seçimi iptal edildi.")}};It("downloadModel").onclick=Fb;async function Fb(){const t=It("downloadModel");t.disabled=!0;try{let e=await ER();if(e||(e=await SR()),e)gn("modelStatus",`Model bulundu: ${(e.size/1024/1024).toFixed(1)} MB`);else{gn("modelStatus","Depth Anything Small indiriliyor…");const n=await fetch(wR);if(!n.ok)throw new Error(`Hugging Face HTTP ${n.status}`);const i=await n.blob();if(e=new File([i],ua,{type:"application/octet-stream"}),e.size<20*1024*1024)throw new Error(`Beklenenden küçük model dosyası: ${e.size} bayt`);await MR(e),await TR(e),gn("modelStatus",`İndirildi ve önbelleğe kaydedildi: ${(e.size/1024/1024).toFixed(1)} MB`)}await kb(e)}catch(e){gn("modelStatus",`Model indirilemedi: ${e.message}`)}finally{t.disabled=!1}}Fb();for(const t of["height","base","contrast","smooth"])It(t).addEventListener("input",()=>{It(`${t}Value`).value=It(t).value});function AR(t,e,n){const i=document.createElement("canvas");i.width=e,i.height=n;const r=i.getContext("2d",{willReadFrequently:!0});return r.drawImage(t,0,0,e,n),r.getImageData(0,0,e,n).data}function K_(t,e,n){const i=new Float32Array(e*n);for(let r=0;r<e*n;r++){const s=r*4,a=(t[s]*.2126+t[s+1]*.7152+t[s+2]*.0722)/255,o=r%e/(e-1),l=Math.floor(r/e)/(n-1),u=1-.12*(Math.hypot(o-.5,l-.5)/.707);i[r]=a*u}return i}function RR(t){let e=1/0,n=-1/0;for(const r of t)Number.isFinite(r)&&(e=Math.min(e,r),n=Math.max(n,r));const i=n-e||1;for(let r=0;r<t.length;r++)t[r]=Number.isFinite(t[r])?(t[r]-e)/i:0;return t}async function CR(t,e,n){const i=AR(t,e,n);if(!ns)return K_(i,e,n);const r=new Float32Array(e*n*3);for(let h=0,c=0;h<i.length;h+=4,c+=3)r[c]=i[h]/255,r[c+1]=i[h+1]/255,r[c+2]=i[h+2]/255;const s=new Float32Array(e*n*3);for(let h=0;h<3;h++)for(let c=0;c<e*n;c++)s[h*e*n+c]=r[c*3+h];const a=ns.inputNames[0],o=new ai("float32",s,[1,3,n,e]),u=(await ns.run({[a]:o}))[ns.outputNames[0]],d=new Float32Array(u.data);return RR(d.length===e*n?d:K_(i,e,n))}function IR(t,e,n,i){let r=t;for(let s=0;s<i;s++){const a=new Float32Array(r);for(let o=1;o<n-1;o++)for(let l=1;l<e-1;l++){const u=o*e+l;a[u]=(r[u]*4+r[u-1]+r[u+1]+r[u-e]+r[u+e])/8}r=a}return r}function DR(t,e,n){const i=new Si,r=[],s=[],a=Number(It("height").value),o=Number(It("base").value),l=Number(It("contrast").value),u=120,d=u*n/e;for(let p=0;p<n;p++)for(let m=0;m<e;m++){const x=p*e+m,_=Math.pow(t[x],l)*a+o;r.push((m/(e-1)-.5)*u,(.5-p/(n-1))*d,_)}const h=e*n;for(let p=0;p<n;p++)for(let m=0;m<e;m++)r.push((m/(e-1)-.5)*u,(.5-p/(n-1))*d,0);for(let p=0;p<n-1;p++)for(let m=0;m<e-1;m++){const x=p*e+m,_=x+1,g=x+e,y=g+1;s.push(x,g,_,_,g,y)}for(let p=0;p<n-1;p++)for(let m=0;m<e-1;m++){const x=h+p*e+m,_=x+1,g=x+e,y=g+1;s.push(x,_,g,_,y,g)}for(let p=0;p<e-1;p++){const m=p,x=p+1,_=h+p,g=h+p+1;s.push(m,_,x,x,_,g)}for(let p=0;p<e-1;p++){const m=(n-1)*e+p,x=m+1,_=h+(n-1)*e+p,g=_+1;s.push(m,x,_,g,_,x)}for(let p=0;p<n-1;p++){const m=p*e,x=(p+1)*e,_=h+p*e,g=h+(p+1)*e;s.push(m,x,_,g,_,x)}for(let p=0;p<n-1;p++){const m=p*e+e-1,x=(p+1)*e+e-1,_=h+p*e+e-1,g=h+(p+1)*e+e-1;s.push(m,_,x,x,_,g)}const c=new Float32Array(r);return i.setAttribute("position",new ir(c,3)),i.setIndex(s),i.computeVertexNormals(),i.rotateX(-Math.PI),i.computeBoundingSphere(),i}It("generate").onclick=async()=>{if(!Fd)return;const t=It("generate");t.disabled=!0,gn("modelStatusBar","Derinlik haritası oluşturuluyor…");try{const e=Number(It("resolution").value);let n=await CR(Fd,e,e);n=IR(n,e,e,Number(It("smooth").value));const i=DR(n,e,e);Ws&&($r.remove(Ws),Hn==null||Hn.dispose()),Hn=i,Ws=new or(Hn,new N1({color:"#d7dbe4",roughness:.7,metalness:.05,side:_i})),$r.add(Ws);const r=new ms().setFromObject(Ws),s=r.getCenter(new Z);$o.target.copy(s),fs.position.set(s.x,s.y-10,s.z+r.getSize(new Z).length()*.75),$o.update(),It("emptyViewer").style.display="none",It("downloadObj").disabled=!1,It("downloadStl").disabled=!1,gn("modelStatusBar","3B model hazır"),gn("meshStats",`${e*e} düğüm · ${(e-1)*(e-1)*2} üçgen`)}catch(e){gn("modelStatusBar",`Hata: ${e.message}`)}finally{t.disabled=!1}};function PR(t,e){const n=URL.createObjectURL(new Blob([t],{type:"text/plain"})),i=document.createElement("a");i.href=n,i.download=e,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function $R(){if(!Hn)return"";const t=Hn.getAttribute("position"),e=Hn.getIndex(),n=["# VektorStudyo OBJ","# Tarayici tabanli mesh"];for(let i=0;i<t.count;i++)n.push(`v ${t.getX(i)} ${t.getY(i)} ${t.getZ(i)}`);if(e)for(let i=0;i<e.count;i+=3)n.push(`f ${e.getX(i)+1} ${e.getX(i+1)+1} ${e.getX(i+2)+1}`);return n.join(`
`)}function LR(){if(!Hn)return new ArrayBuffer(84);const t=Hn.getAttribute("position"),e=Hn.getIndex(),n=e?e.count/3:t.count/3,i=new ArrayBuffer(84+n*50),r=new DataView(i);r.setUint32(80,n,!0);let s=84;const a=new Z,o=new Z,l=new Z,u=new Z,d=new Z,h=new Z;for(let c=0;c<n;c++){const p=e?e.getX(c*3):c*3,m=e?e.getX(c*3+1):c*3+1,x=e?e.getX(c*3+2):c*3+2;o.set(t.getX(p),t.getY(p),t.getZ(p)),l.set(t.getX(m),t.getY(m),t.getZ(m)),u.set(t.getX(x),t.getY(x),t.getZ(x)),d.subVectors(l,o),h.subVectors(u,o),a.crossVectors(d,h).normalize(),r.setFloat32(s,a.x,!0),r.setFloat32(s+4,a.y,!0),r.setFloat32(s+8,a.z,!0),s+=12;for(const _ of[o,l,u])r.setFloat32(s,_.x,!0),r.setFloat32(s+4,_.y,!0),r.setFloat32(s+8,_.z,!0),s+=12;r.setUint16(s,0,!0),s+=2}return i}It("downloadObj").onclick=()=>PR($R(),"vektorstudyo-3b.obj");It("downloadStl").onclick=()=>{if(!Hn)return;const t=URL.createObjectURL(new Blob([LR()],{type:"model/stl"})),e=document.createElement("a");e.href=t,e.download="vektorstudyo-3b.stl",document.body.append(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)};
