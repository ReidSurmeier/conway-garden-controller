var Cl=Object.defineProperty;var wl=(s,e,t)=>e in s?Cl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ns=(s,e,t)=>(wl(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="156",Vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Al=0,Ka=1,Rl=2,Oo=1,Pl=2,rn=3,Mn=0,Et=1,on=2,hn=0,fi=1,Za=2,Ja=3,Qa=4,Ll=5,oi=100,Dl=101,Fl=102,er=103,tr=104,Ul=200,Il=201,Ol=202,Nl=203,No=204,Bo=205,Bl=206,zl=207,kl=208,Hl=209,Gl=210,Vl=0,Wl=1,Xl=2,ma=3,$l=4,ql=5,Yl=6,jl=7,zo=0,Kl=1,Zl=2,xn=0,Jl=1,Ql=2,ec=3,tc=4,nc=5,ko=300,mi=301,gi=302,ga=303,_a=304,Cs=306,va=1e3,kt=1001,xa=1002,st=1003,nr=1004,Bs=1005,ct=1006,ic=1007,Bi=1008,Ht=1009,sc=1010,ac=1011,Fa=1012,Ho=1013,_n=1014,jt=1015,_i=1016,Go=1017,Vo=1018,On=1020,rc=1021,_t=1023,oc=1024,lc=1025,Nn=1026,vi=1027,cc=1028,Wo=1029,hc=1030,Xo=1031,$o=1033,zs=33776,ks=33777,Hs=33778,Gs=33779,ir=35840,sr=35841,ar=35842,rr=35843,uc=36196,or=37492,lr=37496,cr=37808,hr=37809,ur=37810,dr=37811,fr=37812,pr=37813,mr=37814,gr=37815,_r=37816,vr=37817,xr=37818,Mr=37819,yr=37820,Sr=37821,Vs=36492,br=36494,Er=36495,dc=36283,Tr=36284,Cr=36285,wr=36286,Hi=3e3,Bn=3001,fc=3200,pc=3201,mc=0,gc=1,zn="",Ye="srgb",Kt="srgb-linear",ws="display-p3",Ws=7680,_c=519,vc=512,xc=513,Mc=514,yc=515,Sc=516,bc=517,Ec=518,Tc=519,Ar=35044,Rr="300 es",Ma=1035,ln=2e3,Ms=2001;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pr=1234567;const Di=Math.PI/180,zi=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[s&255]+pt[s>>8&255]+pt[s>>16&255]+pt[s>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Ua(s,e){return(s%e+e)%e}function Cc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function wc(s,e,t){return s!==e?(t-s)/(e-s):0}function Fi(s,e,t){return(1-t)*s+t*e}function Ac(s,e,t,n){return Fi(s,e,1-Math.exp(-t*n))}function Rc(s,e=1){return e-Math.abs(Ua(s,e*2)-e)}function Pc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Lc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Dc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fc(s,e){return s+Math.random()*(e-s)}function Uc(s){return s*(.5-Math.random())}function Ic(s){s!==void 0&&(Pr=s);let e=Pr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Oc(s){return s*Di}function Nc(s){return s*zi}function ya(s){return(s&s-1)===0&&s!==0}function Bc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zc(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),p=r((e-n)/2),m=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*p,o*c);break;case"YZY":s.set(l*p,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*p,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kc={DEG2RAD:Di,RAD2DEG:zi,generateUUID:Mi,clamp:gt,euclideanModulo:Ua,mapLinear:Cc,inverseLerp:wc,lerp:Fi,damp:Ac,pingpong:Rc,smoothstep:Pc,smootherstep:Lc,randInt:Dc,randFloat:Fc,randFloatSpread:Uc,seededRandom:Ic,degToRad:Oc,radToDeg:Nc,isPowerOfTwo:ya,ceilPowerOfTwo:Bc,floorPowerOfTwo:ys,setQuaternionFromProperEuler:zc,normalize:yt,denormalize:li};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,i,a,r,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],_=i[0],f=i[3],d=i[6],S=i[1],v=i[4],y=i[7],E=i[2],A=i[5],T=i[8];return a[0]=r*_+o*S+l*E,a[3]=r*f+o*v+l*A,a[6]=r*d+o*y+l*T,a[1]=c*_+h*S+u*E,a[4]=c*f+h*v+u*A,a[7]=c*d+h*y+u*T,a[2]=p*_+m*S+g*E,a[5]=p*f+m*v+g*A,a[8]=p*d+m*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,p=o*l-h*a,m=c*a-r*l,g=t*u+n*p+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*r)*_,e[3]=p*_,e[4]=(h*t-i*l)*_,e[5]=(i*a-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xs.makeScale(e,t)),this}rotate(e){return this.premultiply(Xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Ie;function qo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hc(){const s=Ss("canvas");return s.style.display="block",s}const Lr={};function Ui(s){s in Lr||(Lr[s]=!0,console.warn(s))}function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Gc=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Vc=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Wc(s){return s.convertSRGBToLinear().applyMatrix3(Vc)}function Xc(s){return s.applyMatrix3(Gc).convertLinearToSRGB()}const $c={[Kt]:s=>s,[Ye]:s=>s.convertSRGBToLinear(),[ws]:Wc},qc={[Kt]:s=>s,[Ye]:s=>s.convertLinearToSRGB(),[ws]:Xc},Ut={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Kt},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=$c[e],i=qc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Xn;class Yo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Ss("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=pi(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yc=0;class jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(qs(i[r].image)):a.push(qs(i[r]))}else a=qs(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jc=0;class Pt extends Hn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=kt,i=kt,a=ct,r=Bi,o=_t,l=Ht,c=Pt.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Mi(),this.name="",this.source=new jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bn?Ye:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ye?Bn:Hi}set encoding(e){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bn?Ye:zn}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=ko;Pt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,E=(d+1)/2,A=(h+p)/4,T=(u+_)/4,H=(g+f)/4;return v>y&&v>E?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=A/n,a=T/n):y>E?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=A/i,a=H/i):E<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(E),n=T/a,i=H/a),this.set(n,i,a,t),this}let S=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(u-_)/S,this.z=(p-h)/S,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kc extends Hn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bn?Ye:zn),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ko extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const p=a[r+0],m=a[r+1],g=a[r+2],_=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==p||c!==m||h!==g){let f=1-o;const d=l*p+c*m+h*g+u*_,S=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,d*S);f=Math.sin(f*A)/E,o=Math.sin(o*A)/E}const y=o*S;if(l=l*f+p*y,c=c*f+m*y,h=h*f+g*y,u=u*f+_*y,f===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=a[r],p=a[r+1],m=a[r+2],g=a[r+3];return e[t]=o*g+h*u+l*m-c*p,e[t+1]=l*g+h*p+c*u-o*m,e[t+2]=c*g+h*m+o*p-l*u,e[t+3]=h*g-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(a/2),p=l(n/2),m=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-i)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=r*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=a*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,h=l*n+o*t-a*i,u=l*i+a*n-r*t,p=-a*t-r*n-o*i;return this.x=c*l+p*-a+h*-o-u*-r,this.y=h*l+p*-r+u*-a-c*-o,this.z=u*l+p*-o+c*-r-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new P,Dr=new kn;class Gi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox),$n.applyMatrix4(e.matrixWorld),this.union($n);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let r=0,o=a.count;r<o;r++)Qt.fromBufferAttribute(a,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Qt)}else i.boundingBox===null&&i.computeBoundingBox(),$n.copy(i.boundingBox),$n.applyMatrix4(e.matrixWorld),this.union($n)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),Yi.subVectors(this.max,bi),qn.subVectors(e.a,bi),Yn.subVectors(e.b,bi),jn.subVectors(e.c,bi),dn.subVectors(Yn,qn),fn.subVectors(jn,Yn),wn.subVectors(qn,jn);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-wn.z,wn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,wn.z,0,-wn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-wn.y,wn.x,0];return!js(t,qn,Yn,jn,Yi)||(t=[1,0,0,0,1,0,0,0,1],!js(t,qn,Yn,jn,Yi))?!1:(ji.crossVectors(dn,fn),t=[ji.x,ji.y,ji.z],js(t,qn,Yn,jn,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new P,new P,new P,new P,new P,new P,new P,new P],Qt=new P,$n=new Gi,qn=new P,Yn=new P,jn=new P,dn=new P,fn=new P,wn=new P,bi=new P,Yi=new P,ji=new P,An=new P;function js(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){An.fromArray(s,a);const o=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),l=e.dot(An),c=t.dot(An),h=n.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jc=new Gi,Ei=new P,Ks=new P;class As{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jc.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(Ks)),this.expandByPoint(Ei.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,Zs=new P,Ki=new P,pn=new P,Js=new P,Zi=new P,Qs=new P;class Ia{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zs.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Zs);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Ki),o=pn.dot(this.direction),l=-pn.dot(Ki),c=pn.lengthSq(),h=Math.abs(1-r*r);let u,p,m,g;if(h>0)if(u=r*l-o,p=r*o-l,g=a*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,m=u*(u+r*p+2*o)+p*(r*u+p+2*l)+c}else p=a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*l)+c;else p=-a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-r*a+o)),p=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(u=Math.max(0,-(r*a+o)),p=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+p*(p+2*l)+c);else p=r>0?-a:a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Zs).addScaledVector(Ki,p),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,r=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,r=(e.min.y-p.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,a){Js.subVectors(t,e),Zi.subVectors(n,e),Qs.crossVectors(Js,Zi);let r=this.direction.dot(Qs),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;pn.subVectors(this.origin,e);const l=o*this.direction.dot(Zi.crossVectors(pn,Zi));if(l<0)return null;const c=o*this.direction.dot(Js.cross(pn));if(c<0||l+c>r)return null;const h=-o*pn.dot(Qs);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,a,r,o,l,c,h,u,p,m,g,_,f){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,h,u,p,m,g,_,f)}set(e,t,n,i,a,r,o,l,c,h,u,p,m,g,_,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Kn.setFromMatrixColumn(e,0).length(),a=1/Kn.setFromMatrixColumn(e,1).length(),r=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const p=r*h,m=r*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,g=c*h,_=c*u;t[0]=p+_*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=m*o-g,t[6]=_+p*o,t[10]=r*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,g=c*h,_=c*u;t[0]=p-_*o,t[4]=-r*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*h,t[9]=_-p*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const p=r*h,m=r*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const p=r*l,m=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-p*u,t[8]=g*u+m,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=p-_*u}else if(e.order==="XZY"){const p=r*l,m=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=r*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qc,e,eh)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),mn.crossVectors(n,At),mn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),mn.crossVectors(n,At)),mn.normalize(),Ji.crossVectors(At,mn),i[0]=mn.x,i[4]=Ji.x,i[8]=At.x,i[1]=mn.y,i[5]=Ji.y,i[9]=At.y,i[2]=mn.z,i[6]=Ji.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],_=n[6],f=n[10],d=n[14],S=n[3],v=n[7],y=n[11],E=n[15],A=i[0],T=i[4],H=i[8],M=i[12],w=i[1],q=i[5],Q=i[9],N=i[13],$=i[2],G=i[6],ee=i[10],Y=i[14],j=i[3],ie=i[7],J=i[11],B=i[15];return a[0]=r*A+o*w+l*$+c*j,a[4]=r*T+o*q+l*G+c*ie,a[8]=r*H+o*Q+l*ee+c*J,a[12]=r*M+o*N+l*Y+c*B,a[1]=h*A+u*w+p*$+m*j,a[5]=h*T+u*q+p*G+m*ie,a[9]=h*H+u*Q+p*ee+m*J,a[13]=h*M+u*N+p*Y+m*B,a[2]=g*A+_*w+f*$+d*j,a[6]=g*T+_*q+f*G+d*ie,a[10]=g*H+_*Q+f*ee+d*J,a[14]=g*M+_*N+f*Y+d*B,a[3]=S*A+v*w+y*$+E*j,a[7]=S*T+v*q+y*G+E*ie,a[11]=S*H+v*Q+y*ee+E*J,a[15]=S*M+v*N+y*Y+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],g=e[3],_=e[7],f=e[11],d=e[15];return g*(+a*l*u-i*c*u-a*o*p+n*c*p+i*o*m-n*l*m)+_*(+t*l*m-t*c*p+a*r*p-i*r*m+i*c*h-a*l*h)+f*(+t*c*u-t*o*m-a*r*u+n*r*m+a*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*p+i*r*u-n*r*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],_=e[13],f=e[14],d=e[15],S=u*f*c-_*p*c+_*l*m-o*f*m-u*l*d+o*p*d,v=g*p*c-h*f*c-g*l*m+r*f*m+h*l*d-r*p*d,y=h*_*c-g*u*c+g*o*m-r*_*m-h*o*d+r*u*d,E=g*u*l-h*_*l-g*o*p+r*_*p+h*o*f-r*u*f,A=t*S+n*v+i*y+a*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(_*p*a-u*f*a-_*i*m+n*f*m+u*i*d-n*p*d)*T,e[2]=(o*f*a-_*l*a+_*i*c-n*f*c-o*i*d+n*l*d)*T,e[3]=(u*l*a-o*p*a-u*i*c+n*p*c+o*i*m-n*l*m)*T,e[4]=v*T,e[5]=(h*f*a-g*p*a+g*i*m-t*f*m-h*i*d+t*p*d)*T,e[6]=(g*l*a-r*f*a-g*i*c+t*f*c+r*i*d-t*l*d)*T,e[7]=(r*p*a-h*l*a+h*i*c-t*p*c-r*i*m+t*l*m)*T,e[8]=y*T,e[9]=(g*u*a-h*_*a-g*n*m+t*_*m+h*n*d-t*u*d)*T,e[10]=(r*_*a-g*o*a+g*n*c-t*_*c-r*n*d+t*o*d)*T,e[11]=(h*o*a-r*u*a-h*n*c+t*u*c+r*n*m-t*o*m)*T,e[12]=E*T,e[13]=(h*_*i-g*u*i+g*n*p-t*_*p-h*n*f+t*u*f)*T,e[14]=(g*o*i-r*_*i-g*n*l+t*_*l+r*n*f-t*o*f)*T,e[15]=(r*u*i-h*o*i+h*n*l-t*u*l-r*n*p+t*o*p)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,u=o+o,p=a*c,m=a*h,g=a*u,_=r*h,f=r*u,d=o*u,S=l*c,v=l*h,y=l*u,E=n.x,A=n.y,T=n.z;return i[0]=(1-(_+d))*E,i[1]=(m+y)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(p+d))*A,i[6]=(f+S)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(f-S)*T,i[10]=(1-(p+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Kn.set(i[0],i[1],i[2]).length();const r=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],It.copy(this);const c=1/a,h=1/r,u=1/o;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=h,It.elements[5]*=h,It.elements[6]*=h,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=ln){const l=this.elements,c=2*a/(t-e),h=2*a/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let m,g;if(o===ln)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Ms)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=ln){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-a),p=(t+e)*c,m=(n+i)*h;let g,_;if(o===ln)g=(r+a)*u,_=-2*u;else if(o===Ms)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new P,It=new ht,Qc=new P(0,0,0),eh=new P(1,1,1),mn=new P,Ji=new P,At=new P,Fr=new ht,Ur=new kn;class Rs{constructor(e=0,t=0,n=0,i=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ur.setFromEuler(this),this.setFromQuaternion(Ur,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let th=0;const Ir=new P,Zn=new kn,tn=new ht,Qi=new P,Ti=new P,nh=new P,ih=new kn,Or=new P(1,0,0),Nr=new P(0,1,0),Br=new P(0,0,1),sh={type:"added"},ah={type:"removed"};class Tt extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,t=new Rs,n=new kn,i=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ie}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Or,e)}rotateY(e){return this.rotateOnAxis(Nr,e)}rotateZ(e){return this.rotateOnAxis(Br,e)}translateOnAxis(e,t){return Ir.copy(e).applyQuaternion(this.quaternion),this.position.add(Ir.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Or,e)}translateY(e){return this.translateOnAxis(Nr,e)}translateZ(e){return this.translateOnAxis(Br,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ti,Qi,this.up):tn.lookAt(Qi,Ti,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(tn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ah)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,nh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),p=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new P,nn=new P,ea=new P,sn=new P,Jn=new P,Qn=new P,zr=new P,ta=new P,na=new P,ia=new P;let es=!1;class Bt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Ot.subVectors(i,t),nn.subVectors(n,t),ea.subVectors(e,t);const r=Ot.dot(Ot),o=Ot.dot(nn),l=Ot.dot(ea),c=nn.dot(nn),h=nn.dot(ea),u=r*c-o*o;if(u===0)return a.set(-2,-1,-1);const p=1/u,m=(c*l-o*h)*p,g=(r*h-o*l)*p;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn),sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,i,a,r,o,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(e,t,n,i,a,r,o,l)}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,sn),l.setScalar(0),l.addScaledVector(a,sn.x),l.addScaledVector(r,sn.y),l.addScaledVector(o,sn.z),l}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),nn.subVectors(e,t),Ot.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ot.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}getInterpolation(e,t,n,i,a){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;Jn.subVectors(i,n),Qn.subVectors(a,n),ta.subVectors(e,n);const l=Jn.dot(ta),c=Qn.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,i);const h=Jn.dot(na),u=Qn.dot(na);if(h>=0&&u<=h)return t.copy(i);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Jn,r);ia.subVectors(e,a);const m=Jn.dot(ia),g=Qn.dot(ia);if(g>=0&&m<=g)return t.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qn,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return zr.subVectors(a,i),o=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(zr,o);const d=1/(f+_+p);return r=_*d,o=p*d,t.copy(n).addScaledVector(Jn,r).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rh=0;class Vi extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=fi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Bo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={h:0,s:0,l:0},ts={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ut.workingColorSpace){if(e=Ua(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=sa(r,a,e+1/3),this.g=sa(r,a,e),this.b=sa(r,a,e-1/3)}return Ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Ye){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){const n=Jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return Ut.fromWorkingColorSpace(mt.copy(this),e),Math.round(gt(mt.r*255,0,255))*65536+Math.round(gt(mt.g*255,0,255))*256+Math.round(gt(mt.b*255,0,255))}getHexString(e=Ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,i=mt.g,a=mt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-a)/u+(i<a?6:0);break;case i:l=(a-n)/u+2;break;case a:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Ye){Ut.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,i=mt.b;return e!==Ye?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(ts);const n=Fi(Nt.h,ts.h,t),i=Fi(Nt.s,ts.s,t),a=Fi(Nt.l,ts.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const mt=new Ve;Ve.NAMES=Jo;class Fn extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new P,ns=new Re;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ar,this.updateRange={offset:0,count:-1},this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),a=yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ar&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Qo extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class el extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oh=0;const Ft=new ht,aa=new Tt,ei=new P,Rt=new Gi,Ci=new Gi,lt=new P;class Lt extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qo(e)?el:Qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ie().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Rt.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Rt.min,Ci.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,Ci.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(Ci.min),Rt.expandByPoint(Ci.max))}Rt.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)lt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(lt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)lt.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(e,c),lt.add(ei)),i=Math.max(i,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new P,h[w]=new P;const u=new P,p=new P,m=new P,g=new Re,_=new Re,f=new Re,d=new P,S=new P;function v(w,q,Q){u.fromArray(i,w*3),p.fromArray(i,q*3),m.fromArray(i,Q*3),g.fromArray(r,w*2),_.fromArray(r,q*2),f.fromArray(r,Q*2),p.sub(u),m.sub(u),_.sub(g),f.sub(g);const N=1/(_.x*f.y-f.x*_.y);isFinite(N)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(N),S.copy(m).multiplyScalar(_.x).addScaledVector(p,-f.x).multiplyScalar(N),c[w].add(d),c[q].add(d),c[Q].add(d),h[w].add(S),h[q].add(S),h[Q].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,q=y.length;w<q;++w){const Q=y[w],N=Q.start,$=Q.count;for(let G=N,ee=N+$;G<ee;G+=3)v(n[G+0],n[G+1],n[G+2])}const E=new P,A=new P,T=new P,H=new P;function M(w){T.fromArray(a,w*3),H.copy(T);const q=c[w];E.copy(q),E.sub(T.multiplyScalar(T.dot(q))).normalize(),A.crossVectors(H,q);const N=A.dot(h[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=N}for(let w=0,q=y.length;w<q;++w){const Q=y[w],N=Q.start,$=Q.count;for(let G=N,ee=N+$;G<ee;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,f),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)i.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)p[g++]=c[m++]}return new Gt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kr=new ht,Rn=new Ia,is=new As,Hr=new P,ti=new P,ni=new P,ii=new P,ra=new P,ss=new P,as=new Re,rs=new Re,os=new Re,Gr=new P,Vr=new P,Wr=new P,ls=new P,cs=new P;class vt extends Tt{constructor(e=new Lt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){ss.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(ra.fromBufferAttribute(u,e),r?ss.addScaledVector(ra,h):ss.addScaledVector(ra.sub(t),h))}t.add(ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(a),Rn.copy(e.ray).recast(e.near),!(is.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(is,Hr)===null||Rn.origin.distanceToSquared(Hr)>(e.far-e.near)**2))&&(kr.copy(a).invert(),Rn.copy(e.ray).applyMatrix4(kr),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=r[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,E=v;y<E;y+=3){const A=o.getX(y),T=o.getX(y+1),H=o.getX(y+2);i=hs(this,d,e,n,c,h,u,A,T,H),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const S=o.getX(f),v=o.getX(f+1),y=o.getX(f+2);i=hs(this,r,e,n,c,h,u,S,v,y),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=r[f.materialIndex],S=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,E=v;y<E;y+=3){const A=y,T=y+1,H=y+2;i=hs(this,d,e,n,c,h,u,A,T,H),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const S=f,v=f+1,y=f+2;i=hs(this,r,e,n,c,h,u,S,v,y),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function lh(s,e,t,n,i,a,r,o){let l;if(e.side===Et?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===Mn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:s}}function hs(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,ti),s.getVertexPosition(l,ni),s.getVertexPosition(c,ii);const h=lh(s,e,t,n,ti,ni,ii,ls);if(h){i&&(as.fromBufferAttribute(i,o),rs.fromBufferAttribute(i,l),os.fromBufferAttribute(i,c),h.uv=Bt.getInterpolation(ls,ti,ni,ii,as,rs,os,new Re)),a&&(as.fromBufferAttribute(a,o),rs.fromBufferAttribute(a,l),os.fromBufferAttribute(a,c),h.uv1=Bt.getInterpolation(ls,ti,ni,ii,as,rs,os,new Re),h.uv2=h.uv1),r&&(Gr.fromBufferAttribute(r,o),Vr.fromBufferAttribute(r,l),Wr.fromBufferAttribute(r,c),h.normal=Bt.getInterpolation(ls,ti,ni,ii,Gr,Vr,Wr,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Bt.getNormal(ti,ni,ii,u.normal),h.face=u}return h}class cn extends Lt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,f,d,S,v,y,E,A,T,H,M){const w=y/T,q=E/H,Q=y/2,N=E/2,$=A/2,G=T+1,ee=H+1;let Y=0,j=0;const ie=new P;for(let J=0;J<ee;J++){const B=J*q-N;for(let V=0;V<G;V++){const fe=V*w-Q;ie[_]=fe*S,ie[f]=B*v,ie[d]=$,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[f]=0,ie[d]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(V/T),u.push(1-J/H),Y+=1}}for(let J=0;J<H;J++)for(let B=0;B<T;B++){const V=p+B+G*J,fe=p+B+G*(J+1),pe=p+(B+1)+G*(J+1),me=p+(B+1)+G*J;l.push(V,fe,me),l.push(fe,pe,me),j+=6}o.addGroup(m,j,M),m+=j,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(s){const e={};for(let t=0;t<s.length;t++){const n=xi(s[t]);for(const i in n)e[i]=n[i]}return e}function ch(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tl(s){return s.getRenderTarget()===null?s.outputColorSpace:Kt}const nl={clone:xi,merge:St};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class il extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends il{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Di*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ai=1;class dh extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new zt(si,ai,e,t);i.layers=this.layers,this.add(i);const a=new zt(si,ai,e,t);a.layers=this.layers,this.add(a);const r=new zt(si,ai,e,t);r.layers=this.layers,this.add(r);const o=new zt(si,ai,e,t);o.layers=this.layers,this.add(o);const l=new zt(si,ai,e,t);l.layers=this.layers,this.add(l);const c=new zt(si,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,r,o,l,c]=this.children,h=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class sl extends Pt{constructor(e,t,n,i,a,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fh extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bn?Ye:zn),this.texture=new sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cn(5,5,5),a=new Vt({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:hn});a.uniforms.tEquirect.value=t;const r=new vt(i,a),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=ct),new dh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const oa=new P,ph=new P,mh=new Ie;class gn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oa.subVectors(n,t).cross(ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mh.getNormalMatrix(e),i=this.coplanarPoint(oa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new As,us=new P;class al{constructor(e=new gn,t=new gn,n=new gn,i=new gn,a=new gn,r=new gn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){const n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],p=i[7],m=i[8],g=i[9],_=i[10],f=i[11],d=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-a,p-c,f-m,y-d).normalize(),n[1].setComponents(l+a,p+c,f+m,y+d).normalize(),n[2].setComponents(l+r,p+h,f+g,y+S).normalize(),n[3].setComponents(l-r,p-h,f-g,y-S).normalize(),n[4].setComponents(l-o,p-u,f-_,y-v).normalize(),t===ln)n[5].setComponents(l+o,p+u,f+_,y+v).normalize();else if(t===Ms)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(us.x=i.normal.x>0?e.max.x:e.min.x,us.y=i.normal.y>0?e.max.y:e.min.y,us.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rl(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function gh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,p=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,p),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,u){const p=h.array,m=h.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,p):(t?s.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):s.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(a(u.buffer,c,h),u.version=c.version)}return{get:r,remove:o,update:l}}class Wi extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,p=t/l,m=[],g=[],_=[],f=[];for(let d=0;d<h;d++){const S=d*p-r;for(let v=0;v<c;v++){const y=v*u-a;g.push(y,-S,0),_.push(0,0,1),f.push(v/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const v=S+c*d,y=S+c*(d+1),E=S+1+c*(d+1),A=S+1+c*d;m.push(v,y,A),m.push(y,E,A)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
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
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,Rh=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
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
}`,iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tu=`#if defined( USE_POINTS_UV )
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
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Qu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,od=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ld=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,yd=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Rd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Fd=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Nd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,zd=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gd=`uniform float size;
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
}`,Vd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Xd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fe={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:yh,alphatest_pars_fragment:Sh,aomap_fragment:bh,aomap_pars_fragment:Eh,begin_vertex:Th,beginnormal_vertex:Ch,bsdfs:wh,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Fh,color_fragment:Uh,color_pars_fragment:Ih,color_pars_vertex:Oh,color_vertex:Nh,common:Bh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:kh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Gh,emissivemap_fragment:Vh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:$h,envmap_fragment:qh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:jh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:lu,envmap_vertex:Zh,fog_vertex:Jh,fog_pars_vertex:Qh,fog_fragment:eu,fog_pars_fragment:tu,gradientmap_pars_fragment:nu,lightmap_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:au,lights_lambert_pars_fragment:ru,lights_pars_begin:ou,lights_toon_fragment:cu,lights_toon_pars_fragment:hu,lights_phong_fragment:uu,lights_phong_pars_fragment:du,lights_physical_fragment:fu,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:gu,lights_fragment_end:_u,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:yu,map_fragment:Su,map_pars_fragment:bu,map_particle_fragment:Eu,map_particle_pars_fragment:Tu,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:wu,morphcolor_vertex:Au,morphnormal_vertex:Ru,morphtarget_pars_vertex:Pu,morphtarget_vertex:Lu,normal_fragment_begin:Du,normal_fragment_maps:Fu,normal_pars_fragment:Uu,normal_pars_vertex:Iu,normal_vertex:Ou,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:ku,iridescence_pars_fragment:Hu,opaque_fragment:Gu,packing:Vu,premultiplied_alpha_fragment:Wu,project_vertex:Xu,dithering_fragment:$u,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:Qu,skinbase_vertex:ed,skinning_pars_vertex:td,skinning_vertex:nd,skinnormal_vertex:id,specularmap_fragment:sd,specularmap_pars_fragment:ad,tonemapping_fragment:rd,tonemapping_pars_fragment:od,transmission_fragment:ld,transmission_pars_fragment:cd,uv_pars_fragment:hd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:fd,background_vert:pd,background_frag:md,backgroundCube_vert:gd,backgroundCube_frag:_d,cube_vert:vd,cube_frag:xd,depth_vert:Md,depth_frag:yd,distanceRGBA_vert:Sd,distanceRGBA_frag:bd,equirect_vert:Ed,equirect_frag:Td,linedashed_vert:Cd,linedashed_frag:wd,meshbasic_vert:Ad,meshbasic_frag:Rd,meshlambert_vert:Pd,meshlambert_frag:Ld,meshmatcap_vert:Dd,meshmatcap_frag:Fd,meshnormal_vert:Ud,meshnormal_frag:Id,meshphong_vert:Od,meshphong_frag:Nd,meshphysical_vert:Bd,meshphysical_frag:zd,meshtoon_vert:kd,meshtoon_frag:Hd,points_vert:Gd,points_frag:Vd,shadow_vert:Wd,shadow_frag:Xd,sprite_vert:$d,sprite_frag:qd},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Yt={basic:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:St([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:St([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:St([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:St([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:St([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:St([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:St([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:St([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Yt.physical={uniforms:St([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ds={r:0,b:0,g:0};function Yd(s,e,t,n,i,a,r){const o=new Ve(0);let l=a===!0?0:1,c,h,u=null,p=0,m=null;function g(f,d){let S=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),S=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cs)?(h===void 0&&(h=new vt(new cn(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:xi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Ye,(u!==v||p!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new vt(new Wi(2,2),new Vt({name:"BackgroundMaterial",uniforms:xi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,m=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,d){f.getRGB(ds,tl(s)),n.buffers.color.setClear(ds.r,ds.g,ds.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(f,d=1){o.set(f),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function jd(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||a!==null,o={},l=f(null);let c=l,h=!1;function u($,G,ee,Y,j){let ie=!1;if(r){const J=_(Y,ee,G);c!==J&&(c=J,m(c.object)),ie=d($,Y,ee,j),ie&&S($,Y,ee,j)}else{const J=G.wireframe===!0;(c.geometry!==Y.id||c.program!==ee.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=ee.id,c.wireframe=J,ie=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,H($,G,ee,Y),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function p(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function m($){return n.isWebGL2?s.bindVertexArray($):a.bindVertexArrayOES($)}function g($){return n.isWebGL2?s.deleteVertexArray($):a.deleteVertexArrayOES($)}function _($,G,ee){const Y=ee.wireframe===!0;let j=o[$.id];j===void 0&&(j={},o[$.id]=j);let ie=j[G.id];ie===void 0&&(ie={},j[G.id]=ie);let J=ie[Y];return J===void 0&&(J=f(p()),ie[Y]=J),J}function f($){const G=[],ee=[],Y=[];for(let j=0;j<i;j++)G[j]=0,ee[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:Y,object:$,attributes:{},index:null}}function d($,G,ee,Y){const j=c.attributes,ie=G.attributes;let J=0;const B=ee.getAttributes();for(const V in B)if(B[V].location>=0){const pe=j[V];let me=ie[V];if(me===void 0&&(V==="instanceMatrix"&&$.instanceMatrix&&(me=$.instanceMatrix),V==="instanceColor"&&$.instanceColor&&(me=$.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function S($,G,ee,Y){const j={},ie=G.attributes;let J=0;const B=ee.getAttributes();for(const V in B)if(B[V].location>=0){let pe=ie[V];pe===void 0&&(V==="instanceMatrix"&&$.instanceMatrix&&(pe=$.instanceMatrix),V==="instanceColor"&&$.instanceColor&&(pe=$.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),j[V]=me,J++}c.attributes=j,c.attributesNum=J,c.index=Y}function v(){const $=c.newAttributes;for(let G=0,ee=$.length;G<ee;G++)$[G]=0}function y($){E($,0)}function E($,G){const ee=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;ee[$]=1,Y[$]===0&&(s.enableVertexAttribArray($),Y[$]=1),j[$]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,G),j[$]=G)}function A(){const $=c.newAttributes,G=c.enabledAttributes;for(let ee=0,Y=G.length;ee<Y;ee++)G[ee]!==$[ee]&&(s.disableVertexAttribArray(ee),G[ee]=0)}function T($,G,ee,Y,j,ie,J){J===!0?s.vertexAttribIPointer($,G,ee,j,ie):s.vertexAttribPointer($,G,ee,Y,j,ie)}function H($,G,ee,Y){if(n.isWebGL2===!1&&($.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=Y.attributes,ie=ee.getAttributes(),J=G.defaultAttributeValues;for(const B in ie){const V=ie[B];if(V.location>=0){let fe=j[B];if(fe===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(fe=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(fe=$.instanceColor)),fe!==void 0){const pe=fe.normalized,me=fe.itemSize,ye=t.get(fe);if(ye===void 0)continue;const Ce=ye.buffer,ve=ye.type,ke=ye.bytesPerElement,dt=n.isWebGL2===!0&&(ve===s.INT||ve===s.UNSIGNED_INT||fe.gpuType===Ho);if(fe.isInterleavedBufferAttribute){const Le=fe.data,F=Le.stride,tt=fe.offset;if(Le.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)E(V.location+xe,Le.meshPerAttribute);$.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let xe=0;xe<V.locationSize;xe++)T(V.location+xe,me/V.locationSize,ve,pe,F*ke,(tt+me/V.locationSize*xe)*ke,dt)}else{if(fe.isInstancedBufferAttribute){for(let Le=0;Le<V.locationSize;Le++)E(V.location+Le,fe.meshPerAttribute);$.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<V.locationSize;Le++)y(V.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Le=0;Le<V.locationSize;Le++)T(V.location+Le,me/V.locationSize,ve,pe,me*ke,me/V.locationSize*Le*ke,dt)}}else if(J!==void 0){const pe=J[B];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(V.location,pe);break;case 3:s.vertexAttrib3fv(V.location,pe);break;case 4:s.vertexAttrib4fv(V.location,pe);break;default:s.vertexAttrib1fv(V.location,pe)}}}}A()}function M(){Q();for(const $ in o){const G=o[$];for(const ee in G){const Y=G[ee];for(const j in Y)g(Y[j].object),delete Y[j];delete G[ee]}delete o[$]}}function w($){if(o[$.id]===void 0)return;const G=o[$.id];for(const ee in G){const Y=G[ee];for(const j in Y)g(Y[j].object),delete Y[j];delete G[ee]}delete o[$.id]}function q($){for(const G in o){const ee=o[G];if(ee[$.id]===void 0)continue;const Y=ee[$.id];for(const j in Y)g(Y[j].object),delete Y[j];delete ee[$.id]}}function Q(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Kd(s,e,t,n){const i=n.isWebGL2;let a;function r(c){a=c}function o(c,h){s.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,u){if(u===0)return;let p,m;if(i)p=s,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](a,c,h,u),t.update(h,a,u)}this.setMode=r,this.render=o,this.renderInstances=l}function Zd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=r||e.has("OES_texture_float"),E=v&&y,A=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function Jd(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new gn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||i;return i=p,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||a&&!f)a?h(null):c();else{const S=a?0:n,v=S*4;let y=d.clippingState||null;l.value=y,y=h(g,p,v,m);for(let E=0;E!==v;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=m+_*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<d)&&(f=new Float32Array(d));for(let v=0,y=m;v!==_;++v,y+=4)r.copy(u[v]).applyMatrix4(S,o),r.normal.toArray(f,y),f[y+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Qd(s){let e=new WeakMap;function t(r,o){return o===ga?r.mapping=mi:o===_a&&(r.mapping=gi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===ga||o===_a)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new fh(l.height/2);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Xi extends il{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,Xr=[.125,.215,.35,.446,.526,.582],Un=20,la=new Xi,$r=new Ve;let ca=null;const Dn=(1+Math.sqrt(5))/2,ri=1/Dn,qr=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Dn,ri),new P(0,Dn,-ri),new P(ri,0,Dn),new P(-ri,0,Dn),new P(Dn,ri,0),new P(-Dn,ri,0)];class Yr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ct,minFilter:ct,generateMipmaps:!1,type:_i,format:_t,colorSpace:Kt,depthBuffer:!1},i=jr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jr(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(a)),this._blurMaterial=tf(a,e,t)}return i}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor($r),h.toneMapping=xn,h.autoClear=!1;const m=new Fn({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),g=new vt(new cn,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy($r),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;fs(i,S*v,d>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mi||e.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kr());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new vt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=qr[(i-1)%qr.length];this._blur(e,i-1,i,a,r)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[i],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Un-1),_=a/g,f=isFinite(a)?1+Math.floor(h*_):Un;f>Un&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Un}`);const d=[];let S=0;for(let T=0;T<Un;++T){const H=T/_,M=Math.exp(-H*H/2);d.push(M),T===0?S+=M:T<f&&(S+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/S;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const y=this._sizeLods[i],E=3*y*(i>v-ui?i-v+ui:0),A=4*(this._cubeSize-y);fs(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(u,la)}}function ef(s){const e=[],t=[],n=[];let i=s;const a=s-ui+1+Xr.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-ui?l=Xr[r-s+ui-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,d=1,S=new Float32Array(_*g*m),v=new Float32Array(f*g*m),y=new Float32Array(d*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,H=A>2?0:-1,M=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];S.set(M,_*g*A),v.set(p,f*g*A);const w=[A,A,A,A,A,A];y.set(w,d*g*A)}const E=new Lt;E.setAttribute("position",new Gt(S,_)),E.setAttribute("uv",new Gt(v,f)),E.setAttribute("faceIndex",new Gt(y,d)),e.push(E),i>ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jr(s,e,t){const n=new un(s,e,t);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tf(s,e,t){const n=new Float32Array(Un),i=new P(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Kr(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Zr(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ga||l===_a,h=l===mi||l===gi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Yr(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Yr(s));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function sf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function af(s,e,t,n){const i={},a=new WeakMap;function r(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)e.remove(_[f])}p.removeEventListener("dispose",r),delete i[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return i[p.id]===!0||(p.addEventListener("dispose",r),i[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)e.update(p[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,d=_.length;f<d;f++)e.update(_[f],s.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,y=S.length;v<y;v+=3){const E=S[v+0],A=S[v+1],T=S[v+2];p.push(E,A,A,T,T,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const E=v+0,A=v+1,T=v+2;p.push(E,A,A,T,T,E)}}else return;const f=new(qo(p)?el:Qo)(p,1);f.version=_;const d=a.get(u);d&&e.remove(d),a.set(u,f)}function h(u){const p=a.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function rf(s,e,t,n){const i=n.isWebGL2;let a;function r(p){a=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,m){s.drawElements(a,m,o,p*l),t.update(m,a,1)}function u(p,m,g){if(g===0)return;let _,f;if(i)_=s,f="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](a,m,o,p*l,g),t.update(m,a,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function of(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lf(s,e){return s[0]-e[0]}function cf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hf(s,e,t){const n={},i=new Float32Array(8),a=new WeakMap,r=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let f=a.get(h);if(f===void 0||f.count!==_){let G=function(){N.dispose(),a.delete(h),h.removeEventListener("dispose",G)};var m=G;f!==void 0&&f.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let w=h.attributes.position.count*M,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Q=new Float32Array(w*q*4*_),N=new Ko(Q,w,q,_);N.type=jt,N.needsUpdate=!0;const $=M*4;for(let ee=0;ee<_;ee++){const Y=A[ee],j=T[ee],ie=H[ee],J=w*q*4*ee;for(let B=0;B<Y.count;B++){const V=B*$;v===!0&&(r.fromBufferAttribute(Y,B),Q[J+V+0]=r.x,Q[J+V+1]=r.y,Q[J+V+2]=r.z,Q[J+V+3]=0),y===!0&&(r.fromBufferAttribute(j,B),Q[J+V+4]=r.x,Q[J+V+5]=r.y,Q[J+V+6]=r.z,Q[J+V+7]=0),E===!0&&(r.fromBufferAttribute(ie,B),Q[J+V+8]=r.x,Q[J+V+9]=r.y,Q[J+V+10]=r.z,Q[J+V+11]=ie.itemSize===4?r.w:1)}}f={count:_,texture:N,size:new Re(w,q)},a.set(h,f),h.addEventListener("dispose",G)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];const S=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",p),u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=p===void 0?0:p.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=p[y]}_.sort(cf);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(lf);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const E=o[y],A=E[0],T=E[1];A!==Number.MAX_SAFE_INTEGER&&T?(f&&h.getAttribute("morphTarget"+y)!==f[A]&&h.setAttribute("morphTarget"+y,f[A]),d&&h.getAttribute("morphNormal"+y)!==d[A]&&h.setAttribute("morphNormal"+y,d[A]),i[y]=T,S+=T):(f&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const v=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function uf(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}const ol=new Pt,ll=new Ko,cl=new Zc,hl=new sl,Jr=[],Qr=[],eo=new Float32Array(16),to=new Float32Array(9),no=new Float32Array(4);function yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Jr[i];if(a===void 0&&(a=new Float32Array(i),Jr[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function at(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ps(s,e){let t=Qr[e];t===void 0&&(t=new Int32Array(e),Qr[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function df(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2fv(this.addr,e),rt(t,e)}}function pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;s.uniform3fv(this.addr,e),rt(t,e)}}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4fv(this.addr,e),rt(t,e)}}function gf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(at(t,n))return;no.set(n),s.uniformMatrix2fv(this.addr,!1,no),rt(t,n)}}function _f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(at(t,n))return;to.set(n),s.uniformMatrix3fv(this.addr,!1,to),rt(t,n)}}function vf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(at(t,n))return;eo.set(n),s.uniformMatrix4fv(this.addr,!1,eo),rt(t,n)}}function xf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2iv(this.addr,e),rt(t,e)}}function yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;s.uniform3iv(this.addr,e),rt(t,e)}}function Sf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4iv(this.addr,e),rt(t,e)}}function bf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2uiv(this.addr,e),rt(t,e)}}function Tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;s.uniform3uiv(this.addr,e),rt(t,e)}}function Cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4uiv(this.addr,e),rt(t,e)}}function wf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ol,i)}function Af(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cl,i)}function Rf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hl,i)}function Pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ll,i)}function Lf(s){switch(s){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return yf;case 35669:case 35673:return Sf;case 5125:return bf;case 36294:return Ef;case 36295:return Tf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Pf}}function Df(s,e){s.uniform1fv(this.addr,e)}function Ff(s,e){const t=yi(e,this.size,2);s.uniform2fv(this.addr,t)}function Uf(s,e){const t=yi(e,this.size,3);s.uniform3fv(this.addr,t)}function If(s,e){const t=yi(e,this.size,4);s.uniform4fv(this.addr,t)}function Of(s,e){const t=yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Nf(s,e){const t=yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Bf(s,e){const t=yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zf(s,e){s.uniform1iv(this.addr,e)}function kf(s,e){s.uniform2iv(this.addr,e)}function Hf(s,e){s.uniform3iv(this.addr,e)}function Gf(s,e){s.uniform4iv(this.addr,e)}function Vf(s,e){s.uniform1uiv(this.addr,e)}function Wf(s,e){s.uniform2uiv(this.addr,e)}function Xf(s,e){s.uniform3uiv(this.addr,e)}function $f(s,e){s.uniform4uiv(this.addr,e)}function qf(s,e,t){const n=this.cache,i=e.length,a=Ps(t,i);at(n,a)||(s.uniform1iv(this.addr,a),rt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ol,a[r])}function Yf(s,e,t){const n=this.cache,i=e.length,a=Ps(t,i);at(n,a)||(s.uniform1iv(this.addr,a),rt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||cl,a[r])}function jf(s,e,t){const n=this.cache,i=e.length,a=Ps(t,i);at(n,a)||(s.uniform1iv(this.addr,a),rt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||hl,a[r])}function Kf(s,e,t){const n=this.cache,i=e.length,a=Ps(t,i);at(n,a)||(s.uniform1iv(this.addr,a),rt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||ll,a[r])}function Zf(s){switch(s){case 5126:return Df;case 35664:return Ff;case 35665:return Uf;case 35666:return If;case 35674:return Of;case 35675:return Nf;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return kf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return Wf;case 36295:return Xf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Kf}}class Jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Lf(t.type)}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Zf(t.type)}}class ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function io(s,e){s.seq.push(e),s.map[e.id]=e}function tp(s,e,t){const n=s.name,i=n.length;for(ha.lastIndex=0;;){const a=ha.exec(n),r=ha.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){io(t,c===void 0?new Jf(o,s,e):new Qf(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new ep(o),io(t,u)),t=u}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);tp(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function so(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let np=0;function ip(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function sp(s){switch(s){case Kt:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function ao(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+ip(s.getShaderSource(e),r)}else return i}function ap(s,e){const t=sp(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rp(s,e){let t;switch(e){case Jl:t="Linear";break;case Ql:t="Reinhard";break;case ec:t="OptimizedCineon";break;case tc:t="ACESFilmic";break;case nc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function op(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function lp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Ri(s){return s!==""}function ro(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(hp,dp)}const up=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dp(s,e){let t=Fe[e];if(t===void 0){const n=up.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(s){return s.replace(fp,pp)}function pp(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function co(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function gp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _p(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function vp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Kl:e="ENVMAP_BLENDING_MIX";break;case Zl:e="ENVMAP_BLENDING_ADD";break}return e}function xp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Mp(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=mp(t),c=gp(t),h=_p(t),u=vp(t),p=xp(t),m=t.isWebGL2?"":op(t),g=lp(a),_=i.createProgram();let f,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ri).join(`
`),f.length>0&&(f+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ri).join(`
`),d.length>0&&(d+=`
`)):(f=[co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),d=[m,co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==xn?rp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),r=Sa(r),r=ro(r,t),r=oo(r,t),o=Sa(o),o=ro(o,t),o=oo(o,t),r=lo(r),o=lo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===Rr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=S+f+r,y=S+d+o,E=so(i,i.VERTEX_SHADER,v),A=so(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(E).trim(),q=i.getShaderInfoLog(A).trim();let Q=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,A);else{const $=ao(i,E,"vertex"),G=ao(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+$+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||q==="")&&(N=!1);N&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:w,prefix:f},fragmentShader:{log:q,prefix:d}})}i.deleteShader(E),i.deleteShader(A);let T;this.getUniforms=function(){return T===void 0&&(T=new xs(i,_)),T};let H;return this.getAttributes=function(){return H===void 0&&(H=cp(i,_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=np++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let yp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bp(e),t.set(e,n)),n}}class bp{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}}function Ep(s,e,t,n,i,a,r){const o=new Zo,l=new Sp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function f(M,w,q,Q,N){const $=Q.fog,G=N.geometry,ee=M.isMeshStandardMaterial?Q.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||ee),j=Y&&Y.mapping===Cs?Y.image.height:null,ie=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,B=J!==void 0?J.length:0;let V=0;G.morphAttributes.position!==void 0&&(V=1),G.morphAttributes.normal!==void 0&&(V=2),G.morphAttributes.color!==void 0&&(V=3);let fe,pe,me,ye;if(ie){const qe=Yt[ie];fe=qe.vertexShader,pe=qe.fragmentShader}else fe=M.vertexShader,pe=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const Ce=s.getRenderTarget(),ve=N.isInstancedMesh===!0,ke=!!M.map,dt=!!M.matcap,Le=!!Y,F=!!M.aoMap,tt=!!M.lightMap,xe=!!M.bumpMap,Ae=!!M.normalMap,be=!!M.displacementMap,$e=!!M.emissiveMap,Ue=!!M.metalnessMap,Pe=!!M.roughnessMap,He=M.anisotropy>0,nt=M.clearcoat>0,ot=M.iridescence>0,C=M.sheen>0,x=M.transmission>0,O=He&&!!M.anisotropyMap,se=nt&&!!M.clearcoatMap,te=nt&&!!M.clearcoatNormalMap,ae=nt&&!!M.clearcoatRoughnessMap,_e=ot&&!!M.iridescenceMap,re=ot&&!!M.iridescenceThicknessMap,z=C&&!!M.sheenColorMap,R=C&&!!M.sheenRoughnessMap,Z=!!M.specularMap,de=!!M.specularColorMap,le=!!M.specularIntensityMap,ue=x&&!!M.transmissionMap,we=x&&!!M.thicknessMap,ze=!!M.gradientMap,L=!!M.alphaMap,he=M.alphaTest>0,k=!!M.alphaHash,ne=!!M.extensions,oe=!!G.attributes.uv1,Oe=!!G.attributes.uv2,Ge=!!G.attributes.uv3;let We=xn;return M.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(We=s.toneMapping),{isWebGL2:h,shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:pe,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ve,instancingColor:ve&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Kt,map:ke,matcap:dt,envMap:Le,envMapMode:Le&&Y.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:tt,bumpMap:xe,normalMap:Ae,displacementMap:p&&be,emissiveMap:$e,normalMapObjectSpace:Ae&&M.normalMapType===gc,normalMapTangentSpace:Ae&&M.normalMapType===mc,metalnessMap:Ue,roughnessMap:Pe,anisotropy:He,anisotropyMap:O,clearcoat:nt,clearcoatMap:se,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,iridescence:ot,iridescenceMap:_e,iridescenceThicknessMap:re,sheen:C,sheenColorMap:z,sheenRoughnessMap:R,specularMap:Z,specularColorMap:de,specularIntensityMap:le,transmission:x,transmissionMap:ue,thicknessMap:we,gradientMap:ze,opaque:M.transparent===!1&&M.blending===fi,alphaMap:L,alphaTest:he,alphaHash:k,combine:M.combine,mapUv:ke&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:tt&&_(M.lightMap.channel),bumpMapUv:xe&&_(M.bumpMap.channel),normalMapUv:Ae&&_(M.normalMap.channel),displacementMapUv:be&&_(M.displacementMap.channel),emissiveMapUv:$e&&_(M.emissiveMap.channel),metalnessMapUv:Ue&&_(M.metalnessMap.channel),roughnessMapUv:Pe&&_(M.roughnessMap.channel),anisotropyMapUv:O&&_(M.anisotropyMap.channel),clearcoatMapUv:se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:z&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:R&&_(M.sheenRoughnessMap.channel),specularMapUv:Z&&_(M.specularMap.channel),specularColorMapUv:de&&_(M.specularColorMap.channel),specularIntensityMapUv:le&&_(M.specularIntensityMap.channel),transmissionMapUv:ue&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:L&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ae||He),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:Oe,vertexUv3s:Ge,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(ke||L),fog:!!$,useFog:M.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&M.map.colorSpace===Ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Et,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ne&&M.extensions.derivatives===!0,extensionFragDepth:ne&&M.extensions.fragDepth===!0,extensionDrawBuffers:ne&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)w.push(q),w.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(S(w,M),v(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const w=g[M.type];let q;if(w){const Q=Yt[w];q=nl.clone(Q.uniforms)}else q=M.uniforms;return q}function E(M,w){let q;for(let Q=0,N=c.length;Q<N;Q++){const $=c[Q];if($.cacheKey===w){q=$,++q.usedTimes;break}}return q===void 0&&(q=new Mp(s,w,M,a),c.push(q)),q}function A(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function H(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:H}}function Tp(){let s=new WeakMap;function e(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function t(a){s.delete(a)}function n(a,r,o){s.get(a)[r]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Cp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ho(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uo(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(u,p,m,g,_,f){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},s[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=f),e++,d}function o(u,p,m,g,_,f){const d=r(u,p,m,g,_,f);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(u,p,m,g,_,f){const d=r(u,p,m,g,_,f);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||Cp),n.length>1&&n.sort(p||ho),i.length>1&&i.sort(p||ho)}function h(){for(let u=e,p=s.length;u<p;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function wp(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new uo,s.set(n,[r])):i>=a.length?(r=new uo,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ap(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Rp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Pp=0;function Lp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dp(s,e){const t=new Ap,n=Rp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const a=new P,r=new ht,o=new ht;function l(h,u){let p=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,f=0,d=0,S=0,v=0,y=0,E=0,A=0,T=0,H=0;h.sort(Lp);const M=u===!0?Math.PI:1;for(let q=0,Q=h.length;q<Q;q++){const N=h[q],$=N.color,G=N.intensity,ee=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=$.r*G*M,m+=$.g*G*M,g+=$.b*G*M;else if(N.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],G);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const ie=N.shadow,J=n.get(N);J.shadowBias=ie.bias,J.shadowNormalBias=ie.normalBias,J.shadowRadius=ie.radius,J.shadowMapSize=ie.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=N.shadow.matrix,y++}i.directional[_]=j,_++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy($).multiplyScalar(G*M),j.distance=ee,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[d]=j;const ie=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,ie.updateMatrices(N),N.castShadow&&H++),i.spotLightMatrix[d]=ie.matrix,N.castShadow){const J=n.get(N);J.shadowBias=ie.bias,J.shadowNormalBias=ie.normalBias,J.shadowRadius=ie.radius,J.shadowMapSize=ie.mapSize,i.spotShadow[d]=J,i.spotShadowMap[d]=Y,A++}d++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy($).multiplyScalar(G),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=j,S++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*M),j.distance=N.distance,j.decay=N.decay,N.castShadow){const ie=N.shadow,J=n.get(N);J.shadowBias=ie.bias,J.shadowNormalBias=ie.normalBias,J.shadowRadius=ie.radius,J.shadowMapSize=ie.mapSize,J.shadowCameraNear=ie.camera.near,J.shadowCameraFar=ie.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=Y,i.pointShadowMatrix[f]=N.shadow.matrix,E++}i.point[f]=j,f++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(G*M),j.groundColor.copy(N.groundColor).multiplyScalar(G*M),i.hemi[v]=j,v++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==f||w.spotLength!==d||w.rectAreaLength!==S||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==E||w.numSpotShadows!==A||w.numSpotMaps!==T)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=S,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+T-H,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=H,w.directionalLength=_,w.pointLength=f,w.spotLength=d,w.rectAreaLength=S,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=E,w.numSpotShadows=A,w.numSpotMaps=T,i.version=Pp++)}function c(h,u){let p=0,m=0,g=0,_=0,f=0;const d=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const y=h[S];if(y.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),p++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:i}}function fo(s,e){const t=new Dp(s,e),n=[],i=[];function a(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Fp(s,e){let t=new WeakMap;function n(a,r=0){const o=t.get(a);let l;return o===void 0?(l=new fo(s,e),t.set(a,[l])):r>=o.length?(l=new fo(s,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Up extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bp(s,e,t){let n=new al;const i=new Re,a=new Re,r=new ft,o=new Up({depthPacking:pc}),l=new Ip,c={},h=t.maxTextureSize,u={[Mn]:Et,[Et]:Mn,[on]:on},p=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Op,fragmentShader:Np}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let d=this.type;this.render=function(E,A,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const H=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),q=s.state;q.setBlending(hn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=d!==rn&&this.type===rn,N=d===rn&&this.type!==rn;for(let $=0,G=E.length;$<G;$++){const ee=E[$],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const j=Y.getFrameExtents();if(i.multiply(j),a.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/j.x),i.x=a.x*j.x,Y.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/j.y),i.y=a.y*j.y,Y.mapSize.y=a.y)),Y.map===null||Q===!0||N===!0){const J=this.type!==rn?{minFilter:st,magFilter:st}:{};Y.map!==null&&Y.map.dispose(),Y.map=new un(i.x,i.y,J),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ie=Y.getViewportCount();for(let J=0;J<ie;J++){const B=Y.getViewport(J);r.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),q.viewport(r),Y.updateMatrices(ee,J),n=Y.getFrustum(),y(A,T,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===rn&&S(Y,T),Y.needsUpdate=!1}d=this.type,f.needsUpdate=!1,s.setRenderTarget(H,M,w)};function S(E,A){const T=e.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new un(i.x,i.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,T,p,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,T,m,_,null)}function v(E,A,T,H){let M=null;const w=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=T.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=M.uuid,Q=A.uuid;let N=c[q];N===void 0&&(N={},c[q]=N);let $=N[Q];$===void 0&&($=M.clone(),N[Q]=$),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,H===rn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=s.properties.get(M);q.light=T}return M}function y(E,A,T,H,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===rn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),N=E.material;if(Array.isArray(N)){const $=Q.groups;for(let G=0,ee=$.length;G<ee;G++){const Y=$[G],j=N[Y.materialIndex];if(j&&j.visible){const ie=v(E,j,H,M);s.renderBufferDirect(T,null,Q,ie,E,Y)}}}else if(N.visible){const $=v(E,N,H,M);s.renderBufferDirect(T,null,Q,$,E,null)}}const q=E.children;for(let Q=0,N=q.length;Q<N;Q++)y(q[Q],A,T,H,M)}}function zp(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const he=new ft;let k=null;const ne=new ft(0,0,0,0);return{setMask:function(oe){k!==oe&&!L&&(s.colorMask(oe,oe,oe,oe),k=oe)},setLocked:function(oe){L=oe},setClear:function(oe,Oe,Ge,We,Ct){Ct===!0&&(oe*=We,Oe*=We,Ge*=We),he.set(oe,Oe,Ge,We),ne.equals(he)===!1&&(s.clearColor(oe,Oe,Ge,We),ne.copy(he))},reset:function(){L=!1,k=null,ne.set(-1,0,0,0)}}}function a(){let L=!1,he=null,k=null,ne=null;return{setTest:function(oe){oe?Ce(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(oe){he!==oe&&!L&&(s.depthMask(oe),he=oe)},setFunc:function(oe){if(k!==oe){switch(oe){case Vl:s.depthFunc(s.NEVER);break;case Wl:s.depthFunc(s.ALWAYS);break;case Xl:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case $l:s.depthFunc(s.EQUAL);break;case ql:s.depthFunc(s.GEQUAL);break;case Yl:s.depthFunc(s.GREATER);break;case jl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}k=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ne!==oe&&(s.clearDepth(oe),ne=oe)},reset:function(){L=!1,he=null,k=null,ne=null}}}function r(){let L=!1,he=null,k=null,ne=null,oe=null,Oe=null,Ge=null,We=null,Ct=null;return{setTest:function(qe){L||(qe?Ce(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(qe){he!==qe&&!L&&(s.stencilMask(qe),he=qe)},setFunc:function(qe,$t,xt){(k!==qe||ne!==$t||oe!==xt)&&(s.stencilFunc(qe,$t,xt),k=qe,ne=$t,oe=xt)},setOp:function(qe,$t,xt){(Oe!==qe||Ge!==$t||We!==xt)&&(s.stencilOp(qe,$t,xt),Oe=qe,Ge=$t,We=xt)},setLocked:function(qe){L=qe},setClear:function(qe){Ct!==qe&&(s.clearStencil(qe),Ct=qe)},reset:function(){L=!1,he=null,k=null,ne=null,oe=null,Oe=null,Ge=null,We=null,Ct=null}}}const o=new i,l=new a,c=new r,h=new WeakMap,u=new WeakMap;let p={},m={},g=new WeakMap,_=[],f=null,d=!1,S=null,v=null,y=null,E=null,A=null,T=null,H=null,M=!1,w=null,q=null,Q=null,N=null,$=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),ee=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ee=Y>=2);let ie=null,J={};const B=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),fe=new ft().fromArray(B),pe=new ft().fromArray(V);function me(L,he,k,ne){const oe=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(L,Oe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<k;Ge++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(he+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return Oe}const ye={};ye[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(s.DEPTH_TEST),l.setFunc(ma),be(!1),$e(Ka),Ce(s.CULL_FACE),xe(hn);function Ce(L){p[L]!==!0&&(s.enable(L),p[L]=!0)}function ve(L){p[L]!==!1&&(s.disable(L),p[L]=!1)}function ke(L,he){return m[L]!==he?(s.bindFramebuffer(L,he),m[L]=he,n&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=he),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function dt(L,he){let k=_,ne=!1;if(L)if(k=g.get(he),k===void 0&&(k=[],g.set(he,k)),L.isWebGLMultipleRenderTargets){const oe=L.texture;if(k.length!==oe.length||k[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,Ge=oe.length;Oe<Ge;Oe++)k[Oe]=s.COLOR_ATTACHMENT0+Oe;k.length=oe.length,ne=!0}}else k[0]!==s.COLOR_ATTACHMENT0&&(k[0]=s.COLOR_ATTACHMENT0,ne=!0);else k[0]!==s.BACK&&(k[0]=s.BACK,ne=!0);ne&&(t.isWebGL2?s.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Le(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const F={[oi]:s.FUNC_ADD,[Dl]:s.FUNC_SUBTRACT,[Fl]:s.FUNC_REVERSE_SUBTRACT};if(n)F[er]=s.MIN,F[tr]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(F[er]=L.MIN_EXT,F[tr]=L.MAX_EXT)}const tt={[Ul]:s.ZERO,[Il]:s.ONE,[Ol]:s.SRC_COLOR,[No]:s.SRC_ALPHA,[Gl]:s.SRC_ALPHA_SATURATE,[kl]:s.DST_COLOR,[Bl]:s.DST_ALPHA,[Nl]:s.ONE_MINUS_SRC_COLOR,[Bo]:s.ONE_MINUS_SRC_ALPHA,[Hl]:s.ONE_MINUS_DST_COLOR,[zl]:s.ONE_MINUS_DST_ALPHA};function xe(L,he,k,ne,oe,Oe,Ge,We){if(L===hn){d===!0&&(ve(s.BLEND),d=!1);return}if(d===!1&&(Ce(s.BLEND),d=!0),L!==Ll){if(L!==S||We!==M){if((v!==oi||A!==oi)&&(s.blendEquation(s.FUNC_ADD),v=oi,A=oi),We)switch(L){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,T=null,H=null,S=L,M=We}return}oe=oe||he,Oe=Oe||k,Ge=Ge||ne,(he!==v||oe!==A)&&(s.blendEquationSeparate(F[he],F[oe]),v=he,A=oe),(k!==y||ne!==E||Oe!==T||Ge!==H)&&(s.blendFuncSeparate(tt[k],tt[ne],tt[Oe],tt[Ge]),y=k,E=ne,T=Oe,H=Ge),S=L,M=!1}function Ae(L,he){L.side===on?ve(s.CULL_FACE):Ce(s.CULL_FACE);let k=L.side===Et;he&&(k=!k),be(k),L.blending===fi&&L.transparent===!1?xe(hn):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ne=L.stencilWrite;c.setTest(ne),ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ce(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function $e(L){L!==Al?(Ce(s.CULL_FACE),L!==q&&(L===Ka?s.cullFace(s.BACK):L===Rl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),q=L}function Ue(L){L!==Q&&(ee&&s.lineWidth(L),Q=L)}function Pe(L,he,k){L?(Ce(s.POLYGON_OFFSET_FILL),(N!==he||$!==k)&&(s.polygonOffset(he,k),N=he,$=k)):ve(s.POLYGON_OFFSET_FILL)}function He(L){L?Ce(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function nt(L){L===void 0&&(L=s.TEXTURE0+G-1),ie!==L&&(s.activeTexture(L),ie=L)}function ot(L,he,k){k===void 0&&(ie===null?k=s.TEXTURE0+G-1:k=ie);let ne=J[k];ne===void 0&&(ne={type:void 0,texture:void 0},J[k]=ne),(ne.type!==L||ne.texture!==he)&&(ie!==k&&(s.activeTexture(k),ie=k),s.bindTexture(L,he||ye[L]),ne.type=L,ne.texture=he)}function C(){const L=J[ie];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){fe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function le(L){pe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pe.copy(L))}function ue(L,he){let k=u.get(he);k===void 0&&(k=new WeakMap,u.set(he,k));let ne=k.get(L);ne===void 0&&(ne=s.getUniformBlockIndex(he,L.name),k.set(L,ne))}function we(L,he){const ne=u.get(he).get(L);h.get(he)!==ne&&(s.uniformBlockBinding(he,ne,L.__bindingPointIndex),h.set(he,ne))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ie=null,J={},m={},g=new WeakMap,_=[],f=null,d=!1,S=null,v=null,y=null,E=null,A=null,T=null,H=null,M=!1,w=null,q=null,Q=null,N=null,$=null,fe.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:ve,bindFramebuffer:ke,drawBuffers:dt,useProgram:Le,setBlending:xe,setMaterial:Ae,setFlipSided:be,setCullFace:$e,setLineWidth:Ue,setPolygonOffset:Pe,setScissorTest:He,activeTexture:nt,bindTexture:ot,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:R,texImage3D:Z,updateUBOMapping:ue,uniformBlockBinding:we,texStorage2D:re,texStorage3D:z,texSubImage2D:se,texSubImage3D:te,compressedTexSubImage2D:ae,compressedTexSubImage3D:_e,scissor:de,viewport:le,reset:ze}}function kp(s,e,t,n,i,a,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,x){return d?new OffscreenCanvas(C,x):Ss("canvas")}function v(C,x,O,se){let te=1;if((C.width>se||C.height>se)&&(te=se/Math.max(C.width,C.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=x?ys:Math.floor,_e=ae(te*C.width),re=ae(te*C.height);_===void 0&&(_=S(_e,re));const z=O?S(_e,re):_;return z.width=_e,z.height=re,z.getContext("2d").drawImage(C,0,0,_e,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+re+")."),z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return ya(C.width)&&ya(C.height)}function E(C){return o?!1:C.wrapS!==kt||C.wrapT!==kt||C.minFilter!==st&&C.minFilter!==ct}function A(C,x){return C.generateMipmaps&&x&&C.minFilter!==st&&C.minFilter!==ct}function T(C){s.generateMipmap(C)}function H(C,x,O,se,te=!1){if(o===!1)return x;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=x;return x===s.RED&&(O===s.FLOAT&&(ae=s.R32F),O===s.HALF_FLOAT&&(ae=s.R16F),O===s.UNSIGNED_BYTE&&(ae=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(ae=s.R8UI),O===s.UNSIGNED_SHORT&&(ae=s.R16UI),O===s.UNSIGNED_INT&&(ae=s.R32UI),O===s.BYTE&&(ae=s.R8I),O===s.SHORT&&(ae=s.R16I),O===s.INT&&(ae=s.R32I)),x===s.RG&&(O===s.FLOAT&&(ae=s.RG32F),O===s.HALF_FLOAT&&(ae=s.RG16F),O===s.UNSIGNED_BYTE&&(ae=s.RG8)),x===s.RGBA&&(O===s.FLOAT&&(ae=s.RGBA32F),O===s.HALF_FLOAT&&(ae=s.RGBA16F),O===s.UNSIGNED_BYTE&&(ae=se===Ye&&te===!1?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)),(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function M(C,x,O){return A(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==st&&C.minFilter!==ct?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){return C===st||C===nr||C===Bs?s.NEAREST:s.LINEAR}function q(C){const x=C.target;x.removeEventListener("dispose",q),N(x),x.isVideoTexture&&g.delete(x)}function Q(C){const x=C.target;x.removeEventListener("dispose",Q),G(x)}function N(C){const x=n.get(C);if(x.__webglInit===void 0)return;const O=C.source,se=f.get(O);if(se){const te=se[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&$(C),Object.keys(se).length===0&&f.delete(O)}n.remove(C)}function $(C){const x=n.get(C);s.deleteTexture(x.__webglTexture);const O=C.source,se=f.get(O);delete se[x.__cacheKey],r.memory.textures--}function G(C){const x=C.texture,O=n.get(C),se=n.get(x);if(se.__webglTexture!==void 0&&(s.deleteTexture(se.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(O.__webglFramebuffer[te]))for(let ae=0;ae<O.__webglFramebuffer[te].length;ae++)s.deleteFramebuffer(O.__webglFramebuffer[te][ae]);else s.deleteFramebuffer(O.__webglFramebuffer[te]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[te])}else{if(Array.isArray(O.__webglFramebuffer))for(let te=0;te<O.__webglFramebuffer.length;te++)s.deleteFramebuffer(O.__webglFramebuffer[te]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let te=0;te<O.__webglColorRenderbuffer.length;te++)O.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[te]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ae=x.length;te<ae;te++){const _e=n.get(x[te]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),r.memory.textures--),n.remove(x[te])}n.remove(x),n.remove(C)}let ee=0;function Y(){ee=0}function j(){const C=ee;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),ee+=1,C}function ie(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function J(C,x){const O=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(O,C,x);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function B(C,x){const O=n.get(C);if(C.version>0&&O.__version!==C.version){ke(O,C,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function V(C,x){const O=n.get(C);if(C.version>0&&O.__version!==C.version){ke(O,C,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function fe(C,x){const O=n.get(C);if(C.version>0&&O.__version!==C.version){dt(O,C,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const pe={[va]:s.REPEAT,[kt]:s.CLAMP_TO_EDGE,[xa]:s.MIRRORED_REPEAT},me={[st]:s.NEAREST,[nr]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[ct]:s.LINEAR,[ic]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},ye={[vc]:s.NEVER,[Tc]:s.ALWAYS,[xc]:s.LESS,[yc]:s.LEQUAL,[Mc]:s.EQUAL,[Ec]:s.GEQUAL,[Sc]:s.GREATER,[bc]:s.NOTEQUAL};function Ce(C,x,O){if(O?(s.texParameteri(C,s.TEXTURE_WRAP_S,pe[x.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,pe[x.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,pe[x.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,me[x.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,me[x.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==kt||x.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,w(x.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==st&&x.minFilter!==ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===st||x.minFilter!==Bs&&x.minFilter!==Bi||x.type===jt&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ve(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",q));const se=x.source;let te=f.get(se);te===void 0&&(te={},f.set(se,te));const ae=ie(x);if(ae!==C.__cacheKey){te[ae]===void 0&&(te[ae]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,O=!0),te[ae].usedTimes++;const _e=te[C.__cacheKey];_e!==void 0&&(te[C.__cacheKey].usedTimes--,_e.usedTimes===0&&$(x)),C.__cacheKey=ae,C.__webglTexture=te[ae].texture}return O}function ke(C,x,O){let se=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=s.TEXTURE_3D);const te=ve(C,x),ae=x.source;t.bindTexture(se,C.__webglTexture,s.TEXTURE0+O);const _e=n.get(ae);if(ae.version!==_e.__version||te===!0){t.activeTexture(s.TEXTURE0+O),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const re=E(x)&&y(x.image)===!1;let z=v(x.image,re,!1,h);z=ot(x,z);const R=y(z)||o,Z=a.convert(x.format,x.colorSpace);let de=a.convert(x.type),le=H(x.internalFormat,Z,de,x.colorSpace,x.isVideoTexture);Ce(se,x,R);let ue;const we=x.mipmaps,ze=o&&x.isVideoTexture!==!0,L=_e.__version===void 0||te===!0,he=M(x,z,R);if(x.isDepthTexture)le=s.DEPTH_COMPONENT,o?x.type===jt?le=s.DEPTH_COMPONENT32F:x.type===_n?le=s.DEPTH_COMPONENT24:x.type===On?le=s.DEPTH24_STENCIL8:le=s.DEPTH_COMPONENT16:x.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Nn&&le===s.DEPTH_COMPONENT&&x.type!==Fa&&x.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=_n,de=a.convert(x.type)),x.format===vi&&le===s.DEPTH_COMPONENT&&(le=s.DEPTH_STENCIL,x.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=On,de=a.convert(x.type))),L&&(ze?t.texStorage2D(s.TEXTURE_2D,1,le,z.width,z.height):t.texImage2D(s.TEXTURE_2D,0,le,z.width,z.height,0,Z,de,null));else if(x.isDataTexture)if(we.length>0&&R){ze&&L&&t.texStorage2D(s.TEXTURE_2D,he,le,we[0].width,we[0].height);for(let k=0,ne=we.length;k<ne;k++)ue=we[k],ze?t.texSubImage2D(s.TEXTURE_2D,k,0,0,ue.width,ue.height,Z,de,ue.data):t.texImage2D(s.TEXTURE_2D,k,le,ue.width,ue.height,0,Z,de,ue.data);x.generateMipmaps=!1}else ze?(L&&t.texStorage2D(s.TEXTURE_2D,he,le,z.width,z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,z.width,z.height,Z,de,z.data)):t.texImage2D(s.TEXTURE_2D,0,le,z.width,z.height,0,Z,de,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&L&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,le,we[0].width,we[0].height,z.depth);for(let k=0,ne=we.length;k<ne;k++)ue=we[k],x.format!==_t?Z!==null?ze?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,ue.width,ue.height,z.depth,Z,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,le,ue.width,ue.height,z.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,ue.width,ue.height,z.depth,Z,de,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,k,le,ue.width,ue.height,z.depth,0,Z,de,ue.data)}else{ze&&L&&t.texStorage2D(s.TEXTURE_2D,he,le,we[0].width,we[0].height);for(let k=0,ne=we.length;k<ne;k++)ue=we[k],x.format!==_t?Z!==null?ze?t.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,ue.width,ue.height,Z,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,k,le,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(s.TEXTURE_2D,k,0,0,ue.width,ue.height,Z,de,ue.data):t.texImage2D(s.TEXTURE_2D,k,le,ue.width,ue.height,0,Z,de,ue.data)}else if(x.isDataArrayTexture)ze?(L&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,le,z.width,z.height,z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Z,de,z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,le,z.width,z.height,z.depth,0,Z,de,z.data);else if(x.isData3DTexture)ze?(L&&t.texStorage3D(s.TEXTURE_3D,he,le,z.width,z.height,z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Z,de,z.data)):t.texImage3D(s.TEXTURE_3D,0,le,z.width,z.height,z.depth,0,Z,de,z.data);else if(x.isFramebufferTexture){if(L)if(ze)t.texStorage2D(s.TEXTURE_2D,he,le,z.width,z.height);else{let k=z.width,ne=z.height;for(let oe=0;oe<he;oe++)t.texImage2D(s.TEXTURE_2D,oe,le,k,ne,0,Z,de,null),k>>=1,ne>>=1}}else if(we.length>0&&R){ze&&L&&t.texStorage2D(s.TEXTURE_2D,he,le,we[0].width,we[0].height);for(let k=0,ne=we.length;k<ne;k++)ue=we[k],ze?t.texSubImage2D(s.TEXTURE_2D,k,0,0,Z,de,ue):t.texImage2D(s.TEXTURE_2D,k,le,Z,de,ue);x.generateMipmaps=!1}else ze?(L&&t.texStorage2D(s.TEXTURE_2D,he,le,z.width,z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z,de,z)):t.texImage2D(s.TEXTURE_2D,0,le,Z,de,z);A(x,R)&&T(se),_e.__version=ae.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function dt(C,x,O){if(x.image.length!==6)return;const se=ve(C,x),te=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const ae=n.get(te);if(te.version!==ae.__version||se===!0){t.activeTexture(s.TEXTURE0+O),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const _e=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,z=[];for(let k=0;k<6;k++)!_e&&!re?z[k]=v(x.image[k],!1,!0,c):z[k]=re?x.image[k].image:x.image[k],z[k]=ot(x,z[k]);const R=z[0],Z=y(R)||o,de=a.convert(x.format,x.colorSpace),le=a.convert(x.type),ue=H(x.internalFormat,de,le,x.colorSpace),we=o&&x.isVideoTexture!==!0,ze=ae.__version===void 0||se===!0;let L=M(x,R,Z);Ce(s.TEXTURE_CUBE_MAP,x,Z);let he;if(_e){we&&ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,L,ue,R.width,R.height);for(let k=0;k<6;k++){he=z[k].mipmaps;for(let ne=0;ne<he.length;ne++){const oe=he[ne];x.format!==_t?de!==null?we?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,oe.width,oe.height,de,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,ue,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,0,0,oe.width,oe.height,de,le,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne,ue,oe.width,oe.height,0,de,le,oe.data)}}}else{he=x.mipmaps,we&&ze&&(he.length>0&&L++,t.texStorage2D(s.TEXTURE_CUBE_MAP,L,ue,z[0].width,z[0].height));for(let k=0;k<6;k++)if(re){we?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,z[k].width,z[k].height,de,le,z[k].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ue,z[k].width,z[k].height,0,de,le,z[k].data);for(let ne=0;ne<he.length;ne++){const Oe=he[ne].image[k].image;we?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,Oe.width,Oe.height,de,le,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,ue,Oe.width,Oe.height,0,de,le,Oe.data)}}else{we?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,de,le,z[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ue,de,le,z[k]);for(let ne=0;ne<he.length;ne++){const oe=he[ne];we?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,0,0,de,le,oe.image[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ne+1,ue,de,le,oe.image[k])}}}A(x,Z)&&T(s.TEXTURE_CUBE_MAP),ae.__version=te.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Le(C,x,O,se,te,ae){const _e=a.convert(O.format,O.colorSpace),re=a.convert(O.type),z=H(O.internalFormat,_e,re,O.colorSpace);if(!n.get(x).__hasExternalTextures){const Z=Math.max(1,x.width>>ae),de=Math.max(1,x.height>>ae);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ae,z,Z,de,x.depth,0,_e,re,null):t.texImage2D(te,ae,z,Z,de,0,_e,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),He(x)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,te,n.get(O).__webglTexture,0,Pe(x)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,te,n.get(O).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function F(C,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),x.depthBuffer&&!x.stencilBuffer){let se=s.DEPTH_COMPONENT16;if(O||He(x)){const te=x.depthTexture;te&&te.isDepthTexture&&(te.type===jt?se=s.DEPTH_COMPONENT32F:te.type===_n&&(se=s.DEPTH_COMPONENT24));const ae=Pe(x);He(x)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,se,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,se,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(x.depthBuffer&&x.stencilBuffer){const se=Pe(x);O&&He(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,x.width,x.height):He(x)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const se=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<se.length;te++){const ae=se[te],_e=a.convert(ae.format,ae.colorSpace),re=a.convert(ae.type),z=H(ae.internalFormat,_e,re,ae.colorSpace),R=Pe(x);O&&He(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,R,z,x.width,x.height):He(x)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R,z,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,z,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function tt(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const se=n.get(x.depthTexture).__webglTexture,te=Pe(x);if(x.depthTexture.format===Nn)He(x)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(x.depthTexture.format===vi)He(x)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(C){const x=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");tt(x.__webglFramebuffer,C)}else if(O){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]=s.createRenderbuffer(),F(x.__webglDepthbuffer[se],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),F(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(C,x,O){const se=n.get(C);x!==void 0&&Le(se.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&xe(C)}function be(C){const x=C.texture,O=n.get(C),se=n.get(x);C.addEventListener("dispose",Q),C.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=x.version,r.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,_e=y(C)||o;if(te){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let z=0;z<x.mipmaps.length;z++)O.__webglFramebuffer[re][z]=s.createFramebuffer()}else O.__webglFramebuffer[re]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)O.__webglFramebuffer[re]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ae)if(i.drawBuffers){const re=C.texture;for(let z=0,R=re.length;z<R;z++){const Z=n.get(re[z]);Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&He(C)===!1){const re=ae?x:[x];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let z=0;z<re.length;z++){const R=re[z];O.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[z]);const Z=a.convert(R.format,R.colorSpace),de=a.convert(R.type),le=H(R.internalFormat,Z,de,R.colorSpace,C.isXRRenderTarget===!0),ue=Pe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,O.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),F(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,x,_e);for(let re=0;re<6;re++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)Le(O.__webglFramebuffer[re][z],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,z);else Le(O.__webglFramebuffer[re],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);A(x,_e)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const re=C.texture;for(let z=0,R=re.length;z<R;z++){const Z=re[z],de=n.get(Z);t.bindTexture(s.TEXTURE_2D,de.__webglTexture),Ce(s.TEXTURE_2D,Z,_e),Le(O.__webglFramebuffer,C,Z,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,0),A(Z,_e)&&T(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,se.__webglTexture),Ce(re,x,_e),o&&x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)Le(O.__webglFramebuffer[z],C,x,s.COLOR_ATTACHMENT0,re,z);else Le(O.__webglFramebuffer,C,x,s.COLOR_ATTACHMENT0,re,0);A(x,_e)&&T(re),t.unbindTexture()}C.depthBuffer&&xe(C)}function $e(C){const x=y(C)||o,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0,te=O.length;se<te;se++){const ae=O[se];if(A(ae,x)){const _e=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,re=n.get(ae).__webglTexture;t.bindTexture(_e,re),T(_e),t.unbindTexture()}}}function Ue(C){if(o&&C.samples>0&&He(C)===!1){const x=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,se=C.height;let te=s.COLOR_BUFFER_BIT;const ae=[],_e=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(C),z=C.isWebGLMultipleRenderTargets===!0;if(z)for(let R=0;R<x.length;R++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+R,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+R,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let R=0;R<x.length;R++){ae.push(s.COLOR_ATTACHMENT0+R),C.depthBuffer&&ae.push(_e);const Z=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Z===!1&&(C.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[R]),Z===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),z){const de=n.get(x[R]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,de,0)}s.blitFramebuffer(0,0,O,se,0,0,O,se,te,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let R=0;R<x.length;R++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+R,s.RENDERBUFFER,re.__webglColorRenderbuffer[R]);const Z=n.get(x[R]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+R,s.TEXTURE_2D,Z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(u,C.samples)}function He(C){const x=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nt(C){const x=r.render.frame;g.get(C)!==x&&(g.set(C,x),C.update())}function ot(C,x){const O=C.colorSpace,se=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ma||O!==Kt&&O!==zn&&(O===Ye||O===ws?o===!1?e.has("EXT_sRGB")===!0&&se===_t?(C.format=Ma,C.minFilter=ct,C.generateMipmaps=!1):x=Yo.sRGBToLinear(x):(se!==_t||te!==Ht)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=fe,this.rebindTextures=Ae,this.setupRenderTarget=be,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=He}const Hp=0,it=1;function Gp(s,e,t){const n=t.isWebGL2;function i(a,r=zn){let o;const l=r===Ye||r===ws?it:Hp;if(a===Ht)return s.UNSIGNED_BYTE;if(a===Go)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Vo)return s.UNSIGNED_SHORT_5_5_5_1;if(a===sc)return s.BYTE;if(a===ac)return s.SHORT;if(a===Fa)return s.UNSIGNED_SHORT;if(a===Ho)return s.INT;if(a===_n)return s.UNSIGNED_INT;if(a===jt)return s.FLOAT;if(a===_i)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===rc)return s.ALPHA;if(a===_t)return s.RGBA;if(a===oc)return s.LUMINANCE;if(a===lc)return s.LUMINANCE_ALPHA;if(a===Nn)return s.DEPTH_COMPONENT;if(a===vi)return s.DEPTH_STENCIL;if(a===Ma)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===cc)return s.RED;if(a===Wo)return s.RED_INTEGER;if(a===hc)return s.RG;if(a===Xo)return s.RG_INTEGER;if(a===$o)return s.RGBA_INTEGER;if(a===zs||a===ks||a===Hs||a===Gs)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ir||a===sr||a===ar||a===rr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ir)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ar)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===rr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===uc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===or||a===lr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===or)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===lr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===cr||a===hr||a===ur||a===dr||a===fr||a===pr||a===mr||a===gr||a===_r||a===vr||a===xr||a===Mr||a===yr||a===Sr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===cr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ur)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===dr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===_r)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Mr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===yr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Sr)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Vs||a===br||a===Er)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Vs)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===br)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Er)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===dc||a===Tr||a===Cr||a===wr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Vs)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Tr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Cr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===On?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:i}}class Vp extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xp extends Pt{constructor(e,t,n,i,a,r,o,l,c,h){if(h=h!==void 0?h:Nn,h!==Nn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nn&&(n=_n),n===void 0&&h===vi&&(n=On),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:st,this.minFilter=l!==void 0?l:st,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $p extends Hn{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null;const _=t.getContextAttributes();let f=null,d=null;const S=[],v=[],y=new zt;y.layers.enable(1),y.viewport=new ft;const E=new zt;E.layers.enable(2),E.viewport=new ft;const A=[y,E],T=new Vp;T.layers.enable(1),T.layers.enable(2);let H=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=S[B];return V===void 0&&(V=new ua,S[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=S[B];return V===void 0&&(V=new ua,S[B]=V),V.getGripSpace()},this.getHand=function(B){let V=S[B];return V===void 0&&(V=new ua,S[B]=V),V.getHandSpace()};function w(B){const V=v.indexOf(B.inputSource);if(V===-1)return;const fe=S[V];fe!==void 0&&(fe.update(B.inputSource,B.frame,c||r),fe.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Q);for(let B=0;B<S.length;B++){const V=v[B];V!==null&&(v[B]=null,S[B].disconnect(V))}H=null,M=null,e.setRenderTarget(f),m=null,p=null,u=null,i=null,d=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:m}),d=new un(m.framebufferWidth,m.framebufferHeight,{format:_t,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let V=null,fe=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=_.stencil?vi:Nn,fe=_.stencil?On:_n);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};u=new XRWebGLBinding(i,t),p=u.createProjectionLayer(me),i.updateRenderState({layers:[p]}),d=new un(p.textureWidth,p.textureHeight,{format:_t,type:Ht,depthTexture:new Xp(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Q(B){for(let V=0;V<B.removed.length;V++){const fe=B.removed[V],pe=v.indexOf(fe);pe>=0&&(v[pe]=null,S[pe].disconnect(fe))}for(let V=0;V<B.added.length;V++){const fe=B.added[V];let pe=v.indexOf(fe);if(pe===-1){for(let ye=0;ye<S.length;ye++)if(ye>=v.length){v.push(fe),pe=ye;break}else if(v[ye]===null){v[ye]=fe,pe=ye;break}if(pe===-1)break}const me=S[pe];me&&me.connect(fe)}}const N=new P,$=new P;function G(B,V,fe){N.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const pe=N.distanceTo($),me=V.projectionMatrix.elements,ye=fe.projectionMatrix.elements,Ce=me[14]/(me[10]-1),ve=me[14]/(me[10]+1),ke=(me[9]+1)/me[5],dt=(me[9]-1)/me[5],Le=(me[8]-1)/me[0],F=(ye[8]+1)/ye[0],tt=Ce*Le,xe=Ce*F,Ae=pe/(-Le+F),be=Ae*-Le;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(be),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const $e=Ce+Ae,Ue=ve+Ae,Pe=tt-be,He=xe+(pe-be),nt=ke*ve/Ue*$e,ot=dt*ve/Ue*$e;B.projectionMatrix.makePerspective(Pe,He,nt,ot,$e,Ue),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function ee(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;T.near=E.near=y.near=B.near,T.far=E.far=y.far=B.far,(H!==T.near||M!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,M=T.far);const V=B.parent,fe=T.cameras;ee(T,V);for(let pe=0;pe<fe.length;pe++)ee(fe[pe],V);fe.length===2?G(T,y,E):T.projectionMatrix.copy(y.projectionMatrix),Y(B,T,V)};function Y(B,V,fe){fe===null?B.matrix.copy(V.matrixWorld):(B.matrix.copy(fe.matrixWorld),B.matrix.invert(),B.matrix.multiply(V.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(V.projectionMatrix),B.projectionMatrixInverse.copy(V.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=zi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(B){l=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let j=null;function ie(B,V){if(h=V.getViewerPose(c||r),g=V,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let pe=!1;fe.length!==T.cameras.length&&(T.cameras.length=0,pe=!0);for(let me=0;me<fe.length;me++){const ye=fe[me];let Ce=null;if(m!==null)Ce=m.getViewport(ye);else{const ke=u.getViewSubImage(p,ye);Ce=ke.viewport,me===0&&(e.setRenderTargetTextures(d,ke.colorTexture,p.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let ve=A[me];ve===void 0&&(ve=new zt,ve.layers.enable(me),ve.viewport=new ft,A[me]=ve),ve.matrix.fromArray(ye.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ye.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),me===0&&(T.matrix.copy(ve.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),pe===!0&&T.cameras.push(ve)}}for(let fe=0;fe<S.length;fe++){const pe=v[fe],me=S[fe];pe!==null&&me!==void 0&&me.update(pe,V,c||r)}j&&j(B,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const J=new rl;J.setAnimationLoop(ie),this.setAnimationLoop=function(B){j=B},this.dispose=function(){}}}function qp(s,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,tl(s)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function i(f,d,S,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(f,d):d.isMeshToonMaterial?(a(f,d),u(f,d)):d.isMeshPhongMaterial?(a(f,d),h(f,d)):d.isMeshStandardMaterial?(a(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,y)):d.isMeshMatcapMaterial?(a(f,d),g(f,d)):d.isMeshDepthMaterial?a(f,d):d.isMeshDistanceMaterial?(a(f,d),_(f,d)):d.isMeshNormalMaterial?a(f,d):d.isLineBasicMaterial?(r(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,S,v):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Et&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Et&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function r(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,S,v){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*S,f.scale.value=v*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,S){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Et&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const S=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yp(s,e,t,n){let i={},a={},r=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function c(S,v){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",f));const E=v.program;n.updateUBOMapping(S,E);const A=e.render.frame;a[S.id]!==A&&(p(S),a[S.id]=A)}function h(S){const v=u();S.__bindingPointIndex=v;const y=s.createBuffer(),E=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const v=i[S.id],y=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,T=y.length;A<T;A++){const H=y[A];if(m(H,A,E)===!0){const M=H.__offset,w=Array.isArray(H.value)?H.value:[H.value];let q=0;for(let Q=0;Q<w.length;Q++){const N=w[Q],$=_(N);typeof N=="number"?(H.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,M+q,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=N.elements[0],H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=N.elements[0],H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=N.elements[0]):(N.toArray(H.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,H.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,v,y){const E=S.value;if(y[v]===void 0){if(typeof E=="number")y[v]=E;else{const A=Array.isArray(E)?E:[E],T=[];for(let H=0;H<A.length;H++)T.push(A[H].clone());y[v]=T}return!0}else if(typeof E=="number"){if(y[v]!==E)return y[v]=E,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],T=Array.isArray(E)?E:[E];for(let H=0;H<A.length;H++){const M=A[H];if(M.equals(T[H])===!1)return M.copy(T[H]),!0}}return!1}function g(S){const v=S.uniforms;let y=0;const E=16;let A=0;for(let T=0,H=v.length;T<H;T++){const M=v[T],w={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,N=q.length;Q<N;Q++){const $=q[Q],G=_($);w.boundary+=G.boundary,w.storage+=G.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,T>0){A=y%E;const Q=E-A;A!==0&&Q-w.boundary<0&&(y+=E-A,M.__offset=y)}y+=w.storage}return A=y%E,A>0&&(y+=E-A),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function f(S){const v=S.target;v.removeEventListener("dispose",f);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function d(){for(const S in i)s.deleteBuffer(i[S]);r=[],i={},a={}}return{bind:l,update:c,dispose:d}}class ul{constructor(e={}){const{canvas:t=Hc(),context:n=null,depth:i=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=r;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ye,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const v=this;let y=!1,E=0,A=0,T=null,H=-1,M=null;const w=new ft,q=new ft;let Q=null;const N=new Ve(0);let $=0,G=t.width,ee=t.height,Y=1,j=null,ie=null;const J=new ft(0,0,G,ee),B=new ft(0,0,G,ee);let V=!1;const fe=new al;let pe=!1,me=!1,ye=null;const Ce=new ht,ve=new Re,ke=new P,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?Y:1}let F=n;function tt(b,D){for(let W=0;W<b.length;W++){const U=b[W],X=t.getContext(U,D);if(X!==null)return X}return null}try{const b={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",ne,!1),F===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),F=tt(D,b),F===null)throw tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xe,Ae,be,$e,Ue,Pe,He,nt,ot,C,x,O,se,te,ae,_e,re,z,R,Z,de,le,ue,we;function ze(){xe=new sf(F),Ae=new Zd(F,xe,e),xe.init(Ae),le=new Gp(F,xe,Ae),be=new zp(F,xe,Ae),$e=new of(F),Ue=new Tp,Pe=new kp(F,xe,be,Ue,Ae,le,$e),He=new Qd(v),nt=new nf(v),ot=new gh(F,Ae),ue=new jd(F,xe,ot,Ae),C=new af(F,ot,$e,ue),x=new uf(F,C,ot,$e),R=new hf(F,Ae,Pe),_e=new Jd(Ue),O=new Ep(v,He,nt,xe,Ae,ue,_e),se=new qp(v,Ue),te=new wp,ae=new Fp(xe,Ae),z=new Yd(v,He,nt,be,x,p,l),re=new Bp(v,x,Ae),we=new Yp(F,$e,Ae,be),Z=new Kd(F,xe,$e,Ae),de=new rf(F,xe,$e,Ae),$e.programs=O.programs,v.capabilities=Ae,v.extensions=xe,v.properties=Ue,v.renderLists=te,v.shadowMap=re,v.state=be,v.info=$e}ze();const L=new $p(v,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(G,ee,!1))},this.getSize=function(b){return b.set(G,ee)},this.setSize=function(b,D,W=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,ee=D,t.width=Math.floor(b*Y),t.height=Math.floor(D*Y),W===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(G*Y,ee*Y).floor()},this.setDrawingBufferSize=function(b,D,W){G=b,ee=D,Y=W,t.width=Math.floor(b*W),t.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,D,W,U){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,D,W,U),be.viewport(w.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(B)},this.setScissor=function(b,D,W,U){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,D,W,U),be.scissor(q.copy(B).multiplyScalar(Y).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){be.setScissorTest(V=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(b=!0,D=!0,W=!0){let U=0;if(b){let X=!1;if(T!==null){const ge=T.texture.format;X=ge===$o||ge===Xo||ge===Wo}if(X){const ge=T.texture.type,Me=ge===Ht||ge===_n||ge===Fa||ge===On||ge===Go||ge===Vo,Ee=z.getClearColor(),Te=z.getClearAlpha(),Ne=Ee.r,Se=Ee.g,De=Ee.b;Me?(m[0]=Ne,m[1]=Se,m[2]=De,m[3]=Te,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=Ne,g[1]=Se,g[2]=De,g[3]=Te,F.clearBufferiv(F.COLOR,0,g))}else U|=F.COLOR_BUFFER_BIT}D&&(U|=F.DEPTH_BUFFER_BIT),W&&(U|=F.STENCIL_BUFFER_BIT),F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),te.dispose(),ae.dispose(),Ue.dispose(),He.dispose(),nt.dispose(),x.dispose(),ue.dispose(),we.dispose(),O.dispose(),L.dispose(),L.removeEventListener("sessionstart",qe),L.removeEventListener("sessionend",$t),ye&&(ye.dispose(),ye=null),xt.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=$e.autoReset,D=re.enabled,W=re.autoUpdate,U=re.needsUpdate,X=re.type;ze(),$e.autoReset=b,re.enabled=D,re.autoUpdate=W,re.needsUpdate=U,re.type=X}function ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const D=b.target;D.removeEventListener("dispose",oe),Oe(D)}function Oe(b){Ge(b),Ue.remove(b)}function Ge(b){const D=Ue.get(b).programs;D!==void 0&&(D.forEach(function(W){O.releaseProgram(W)}),b.isShaderMaterial&&O.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,U,X,ge){D===null&&(D=dt);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Ee=Sl(b,D,W,U,X);be.setMaterial(U,Me);let Te=W.index,Ne=1;if(U.wireframe===!0){if(Te=C.getWireframeAttribute(W),Te===void 0)return;Ne=2}const Se=W.drawRange,De=W.attributes.position;let je=Se.start*Ne,Ke=(Se.start+Se.count)*Ne;ge!==null&&(je=Math.max(je,ge.start*Ne),Ke=Math.min(Ke,(ge.start+ge.count)*Ne)),Te!==null?(je=Math.max(je,0),Ke=Math.min(Ke,Te.count)):De!=null&&(je=Math.max(je,0),Ke=Math.min(Ke,De.count));const Dt=Ke-je;if(Dt<0||Dt===1/0)return;ue.setup(X,U,Ee,W,Te);let Zt,Ze=Z;if(Te!==null&&(Zt=ot.get(Te),Ze=de,Ze.setIndex(Zt)),X.isMesh)U.wireframe===!0?(be.setLineWidth(U.wireframeLinewidth*Le()),Ze.setMode(F.LINES)):Ze.setMode(F.TRIANGLES);else if(X.isLine){let Be=U.linewidth;Be===void 0&&(Be=1),be.setLineWidth(Be*Le()),X.isLineSegments?Ze.setMode(F.LINES):X.isLineLoop?Ze.setMode(F.LINE_LOOP):Ze.setMode(F.LINE_STRIP)}else X.isPoints?Ze.setMode(F.POINTS):X.isSprite&&Ze.setMode(F.TRIANGLES);if(X.isInstancedMesh)Ze.renderInstances(je,Dt,X.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fs=Math.min(W.instanceCount,Be);Ze.renderInstances(je,Dt,Fs)}else Ze.render(je,Dt)},this.compile=function(b,D){function W(U,X,ge){U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=Et,U.needsUpdate=!0,qi(U,X,ge),U.side=Mn,U.needsUpdate=!0,qi(U,X,ge),U.side=on):qi(U,X,ge)}f=ae.get(b),f.init(),S.push(f),b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(v._useLegacyLights),b.traverse(function(U){const X=U.material;if(X)if(Array.isArray(X))for(let ge=0;ge<X.length;ge++){const Me=X[ge];W(Me,b,U)}else W(X,b,U)}),S.pop(),f=null};let We=null;function Ct(b){We&&We(b)}function qe(){xt.stop()}function $t(){xt.start()}const xt=new rl;xt.setAnimationLoop(Ct),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(b){We=b,L.setAnimationLoop(b),b===null?xt.stop():xt.start()},L.addEventListener("sessionstart",qe),L.addEventListener("sessionend",$t),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(D),D=L.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,T),f=ae.get(b,S.length),f.init(),S.push(f),Ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),fe.setFromProjectionMatrix(Ce),me=this.localClippingEnabled,pe=_e.init(this.clippingPlanes,me),_=te.get(b,d.length),_.init(),d.push(_),Wa(b,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,ie),this.info.render.frame++,pe===!0&&_e.beginShadows();const W=f.state.shadowsArray;if(re.render(W,b,D),pe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),z.render(_,b),f.setupLights(v._useLegacyLights),D.isArrayCamera){const U=D.cameras;for(let X=0,ge=U.length;X<ge;X++){const Me=U[X];Xa(_,b,Me,Me.viewport)}}else Xa(_,b,D);T!==null&&(Pe.updateMultisampleRenderTarget(T),Pe.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,D),ue.resetDefaultState(),H=-1,M=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Wa(b,D,W,U){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||fe.intersectsSprite(b)){U&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);const Me=x.update(b),Ee=b.material;Ee.visible&&_.push(b,Me,Ee,W,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||fe.intersectsObject(b))){const Me=x.update(b),Ee=b.material;if(U&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ke.copy(Me.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ee)){const Te=Me.groups;for(let Ne=0,Se=Te.length;Ne<Se;Ne++){const De=Te[Ne],je=Ee[De.materialIndex];je&&je.visible&&_.push(b,Me,je,W,ke.z,De)}}else Ee.visible&&_.push(b,Me,Ee,W,ke.z,null)}}const ge=b.children;for(let Me=0,Ee=ge.length;Me<Ee;Me++)Wa(ge[Me],D,W,U)}function Xa(b,D,W,U){const X=b.opaque,ge=b.transmissive,Me=b.transparent;f.setupLightsView(W),pe===!0&&_e.setGlobalState(v.clippingPlanes,W),ge.length>0&&yl(X,ge,D,W),U&&be.viewport(w.copy(U)),X.length>0&&$i(X,D,W),ge.length>0&&$i(ge,D,W),Me.length>0&&$i(Me,D,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function yl(b,D,W,U){const X=Ae.isWebGL2;ye===null&&(ye=new un(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?_i:Ht,minFilter:Bi,samples:X?4:0})),v.getDrawingBufferSize(ve),X?ye.setSize(ve.x,ve.y):ye.setSize(ys(ve.x),ys(ve.y));const ge=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(N),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=xn,$i(b,W,U),Pe.updateMultisampleRenderTarget(ye),Pe.updateRenderTargetMipmap(ye);let Ee=!1;for(let Te=0,Ne=D.length;Te<Ne;Te++){const Se=D[Te],De=Se.object,je=Se.geometry,Ke=Se.material,Dt=Se.group;if(Ke.side===on&&De.layers.test(U.layers)){const Zt=Ke.side;Ke.side=Et,Ke.needsUpdate=!0,$a(De,W,U,je,Ke,Dt),Ke.side=Zt,Ke.needsUpdate=!0,Ee=!0}}Ee===!0&&(Pe.updateMultisampleRenderTarget(ye),Pe.updateRenderTargetMipmap(ye)),v.setRenderTarget(ge),v.setClearColor(N,$),v.toneMapping=Me}function $i(b,D,W){const U=D.isScene===!0?D.overrideMaterial:null;for(let X=0,ge=b.length;X<ge;X++){const Me=b[X],Ee=Me.object,Te=Me.geometry,Ne=U===null?Me.material:U,Se=Me.group;Ee.layers.test(W.layers)&&$a(Ee,D,W,Te,Ne,Se)}}function $a(b,D,W,U,X,ge){b.onBeforeRender(v,D,W,U,X,ge),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(v,D,W,U,b,ge),X.transparent===!0&&X.side===on&&X.forceSinglePass===!1?(X.side=Et,X.needsUpdate=!0,v.renderBufferDirect(W,D,U,X,b,ge),X.side=Mn,X.needsUpdate=!0,v.renderBufferDirect(W,D,U,X,b,ge),X.side=on):v.renderBufferDirect(W,D,U,X,b,ge),b.onAfterRender(v,D,W,U,X,ge)}function qi(b,D,W){D.isScene!==!0&&(D=dt);const U=Ue.get(b),X=f.state.lights,ge=f.state.shadowsArray,Me=X.state.version,Ee=O.getParameters(b,X.state,ge,D,W),Te=O.getProgramCacheKey(Ee);let Ne=U.programs;U.environment=b.isMeshStandardMaterial?D.environment:null,U.fog=D.fog,U.envMap=(b.isMeshStandardMaterial?nt:He).get(b.envMap||U.environment),Ne===void 0&&(b.addEventListener("dispose",oe),Ne=new Map,U.programs=Ne);let Se=Ne.get(Te);if(Se!==void 0){if(U.currentProgram===Se&&U.lightsStateVersion===Me)return qa(b,Ee),Se}else Ee.uniforms=O.getUniforms(b),b.onBuild(W,Ee,v),b.onBeforeCompile(Ee,v),Se=O.acquireProgram(Ee,Te),Ne.set(Te,Se),U.uniforms=Ee.uniforms;const De=U.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=_e.uniform),qa(b,Ee),U.needsLights=El(b),U.lightsStateVersion=Me,U.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix);const je=Se.getUniforms(),Ke=xs.seqWithValue(je.seq,De);return U.currentProgram=Se,U.uniformsList=Ke,Se}function qa(b,D){const W=Ue.get(b);W.outputColorSpace=D.outputColorSpace,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Sl(b,D,W,U,X){D.isScene!==!0&&(D=dt),Pe.resetTextureUnits();const ge=D.fog,Me=U.isMeshStandardMaterial?D.environment:null,Ee=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kt,Te=(U.isMeshStandardMaterial?nt:He).get(U.envMap||Me),Ne=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),De=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,Ke=!!W.morphAttributes.color;let Dt=xn;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const Zt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=Zt!==void 0?Zt.length:0,Be=Ue.get(U),Fs=f.state.lights;if(pe===!0&&(me===!0||b!==M)){const wt=b===M&&U.id===H;_e.setState(U,b,wt)}let Je=!1;U.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Fs.state.version||Be.outputColorSpace!==Ee||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||Be.envMap!==Te||U.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Se||Be.morphTargets!==De||Be.morphNormals!==je||Be.morphColors!==Ke||Be.toneMapping!==Dt||Ae.isWebGL2===!0&&Be.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Be.__version=U.version);let Tn=Be.currentProgram;Je===!0&&(Tn=qi(U,D,X));let Ya=!1,Si=!1,Us=!1;const Mt=Tn.getUniforms(),Cn=Be.uniforms;if(be.useProgram(Tn.program)&&(Ya=!0,Si=!0,Us=!0),U.id!==H&&(H=U.id,Si=!0),Ya||M!==b){Mt.setValue(F,"projectionMatrix",b.projectionMatrix),Mt.setValue(F,"viewMatrix",b.matrixWorldInverse);const wt=Mt.map.cameraPosition;wt!==void 0&&wt.setValue(F,ke.setFromMatrixPosition(b.matrixWorld)),Ae.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Si=!0,Us=!0)}if(X.isSkinnedMesh){Mt.setOptional(F,X,"bindMatrix"),Mt.setOptional(F,X,"bindMatrixInverse");const wt=X.skeleton;wt&&(Ae.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),Mt.setValue(F,"boneTexture",wt.boneTexture,Pe),Mt.setValue(F,"boneTextureSize",wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Is=W.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&Ae.isWebGL2===!0)&&R.update(X,W,Tn),(Si||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,Mt.setValue(F,"receiveShadow",X.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Cn.envMap.value=Te,Cn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Si&&(Mt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&bl(Cn,Us),ge&&U.fog===!0&&se.refreshFogUniforms(Cn,ge),se.refreshMaterialUniforms(Cn,U,Y,ee,ye),xs.upload(F,Be.uniformsList,Cn,Pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(xs.upload(F,Be.uniformsList,Cn,Pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Mt.setValue(F,"center",X.center),Mt.setValue(F,"modelViewMatrix",X.modelViewMatrix),Mt.setValue(F,"normalMatrix",X.normalMatrix),Mt.setValue(F,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const wt=U.uniformsGroups;for(let Os=0,Tl=wt.length;Os<Tl;Os++)if(Ae.isWebGL2){const ja=wt[Os];we.update(ja,Tn),we.bind(ja,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function bl(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function El(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,D,W){Ue.get(b.texture).__webglTexture=D,Ue.get(b.depthTexture).__webglTexture=W;const U=Ue.get(b);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){const W=Ue.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){T=b,E=D,A=W;let U=!0,X=null,ge=!1,Me=!1;if(b){const Te=Ue.get(b);Te.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(F.FRAMEBUFFER,null),U=!1):Te.__webglFramebuffer===void 0?Pe.setupRenderTarget(b):Te.__hasExternalTextures&&Pe.rebindTextures(b,Ue.get(b.texture).__webglTexture,Ue.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Se=Ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Se[D])?X=Se[D][W]:X=Se[D],ge=!0):Ae.isWebGL2&&b.samples>0&&Pe.useMultisampledRTT(b)===!1?X=Ue.get(b).__webglMultisampledFramebuffer:Array.isArray(Se)?X=Se[W]:X=Se,w.copy(b.viewport),q.copy(b.scissor),Q=b.scissorTest}else w.copy(J).multiplyScalar(Y).floor(),q.copy(B).multiplyScalar(Y).floor(),Q=V;if(be.bindFramebuffer(F.FRAMEBUFFER,X)&&Ae.drawBuffers&&U&&be.drawBuffers(b,X),be.viewport(w),be.scissor(q),be.setScissorTest(Q),ge){const Te=Ue.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,W)}else if(Me){const Te=Ue.get(b.texture),Ne=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,W||0,Ne)}H=-1},this.readRenderTargetPixels=function(b,D,W,U,X,ge,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){be.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Te=b.texture,Ne=Te.format,Se=Te.type;if(Ne!==_t&&le.convert(Ne)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Se===_i&&(xe.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Se!==Ht&&le.convert(Se)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===jt&&(Ae.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-U&&W>=0&&W<=b.height-X&&F.readPixels(D,W,U,X,le.convert(Ne),le.convert(Se),ge)}finally{const Te=T!==null?Ue.get(T).__webglFramebuffer:null;be.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(b,D,W=0){const U=Math.pow(2,-W),X=Math.floor(D.image.width*U),ge=Math.floor(D.image.height*U);Pe.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,b.x,b.y,X,ge),be.unbindTexture()},this.copyTextureToTexture=function(b,D,W,U=0){const X=D.image.width,ge=D.image.height,Me=le.convert(W.format),Ee=le.convert(W.type);Pe.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,b.x,b.y,X,ge,Me,Ee,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,Me,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,U,b.x,b.y,Me,Ee,D.image),U===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,D,W,U,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Ee=b.max.z-b.min.z+1,Te=le.convert(U.format),Ne=le.convert(U.type);let Se;if(U.isData3DTexture)Pe.setTexture3D(U,0),Se=F.TEXTURE_3D;else if(U.isDataArrayTexture)Pe.setTexture2DArray(U,0),Se=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),Dt=F.getParameter(F.UNPACK_SKIP_ROWS),Zt=F.getParameter(F.UNPACK_SKIP_IMAGES),Ze=W.isCompressedTexture?W.mipmaps[0]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(Se,X,D.x,D.y,D.z,ge,Me,Ee,Te,Ne,Ze.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Se,X,D.x,D.y,D.z,ge,Me,Ee,Te,Ze.data)):F.texSubImage3D(Se,X,D.x,D.y,D.z,ge,Me,Ee,Te,Ne,Ze),F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt),X===0&&U.generateMipmaps&&F.generateMipmap(Se),be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Pe.setTextureCube(b,0):b.isData3DTexture?Pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pe.setTexture2DArray(b,0):Pe.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){E=0,A=0,T=null,be.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ye?Bn:Hi}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bn?Ye:Kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jp extends ul{}jp.prototype.isWebGL1Renderer=!0;class Na extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ls extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const po=new ht,ba=new Ia,ps=new As,ms=new P;class bs extends Tt{constructor(e=new Lt,t=new Ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=a,e.ray.intersectsSphere(ps)===!1)return;po.copy(i).invert(),ba.copy(e.ray).applyMatrix4(po);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=p,_=m;g<_;g++){const f=c.getX(g);ms.fromBufferAttribute(u,f),mo(ms,f,l,i,e,t,this)}}else{const p=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=p,_=m;g<_;g++)ms.fromBufferAttribute(u,g),mo(ms,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function mo(s,e,t,n,i,a,r){const o=ba.distanceSqToPoint(s);if(o<t){const l=new P;ba.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class Ba extends Lt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new P,p=new P,m=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const S=[],v=d/n;let y=0;d===0&&r===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(i+A*a)*Math.sin(r+v*o),u.y=e*Math.cos(r+v*o),u.z=e*Math.sin(i+A*a)*Math.sin(r+v*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),f.push(A+y,1-v),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const v=h[d][S+1],y=h[d][S],E=h[d+1][S],A=h[d+1][S+1];(d!==0||r>0)&&m.push(v,y,A),(d!==n-1||l<Math.PI)&&m.push(y,E,A)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const go={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Kp{constructor(e,t,n){const i=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Zp=new Kp;class za{constructor(e){this.manager=e!==void 0?e:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}za.DEFAULT_MATERIAL_NAME="__DEFAULT";const an={};class Jp extends Error{constructor(e,t){super(e),this.response=t}}class Qp extends za{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=go.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:n,onError:i});return}an[e]=[],an[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=an[e],u=c.body.getReader(),p=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=p?parseInt(p):0,g=m!==0;let _=0;const f=new ReadableStream({start(d){S();function S(){u.read().then(({done:v,value:y})=>{if(v)d.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let A=0,T=h.length;A<T;A++){const H=h[A];H.onProgress&&H.onProgress(E)}d.enqueue(y),S()}})}}});return new Response(f)}else throw new Jp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{go.add(e,c);const h=an[e];delete an[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=an[e];if(h===void 0)throw this.manager.itemError(e),c;delete an[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_o(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_o();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _o(){return(typeof performance>"u"?Date:performance).now()}class vo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);var Ii=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";s=h}var i=(performance||Date).now(),a=i,r=0,o=t(new Ii.Panel("FPS","#0ff","#002")),l=t(new Ii.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ii.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var h=(performance||Date).now();if(l.update(h-i,200),h>=a+1e3&&(o.update(r*1e3/(h-a),100),a=h,r=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};Ii.Panel=function(s,e,t){var n=1/0,i=0,a=Math.round,r=a(window.devicePixelRatio||1),o=80*r,l=48*r,c=3*r,h=2*r,u=3*r,p=15*r,m=74*r,g=30*r,_=document.createElement("canvas");_.width=o,_.height=l,_.style.cssText="width:80px;height:48px";var f=_.getContext("2d");return f.font="bold "+9*r+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,o,l),f.fillStyle=e,f.fillText(s,c,h),f.fillRect(u,p,m,g),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u,p,m,g),{dom:_,update:function(d,S){n=Math.min(n,d),i=Math.max(i,d),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,o,p),f.fillStyle=e,f.fillText(a(d)+" "+s+" ("+a(n)+"-"+a(i)+")",c,h),f.drawImage(_,u+r,p,m-r,g,u,p,m-r,g),f.fillRect(u+m-r,p,r,g),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(u+m-r,p,r,a((1-d/S)*g))}}};const em=Ii;class vn{constructor(){this.canvas={isFullscreen:!0,width:312,height:416,xOffset:0,yOffset:0,rotation:0},this.render={pointSize:2,fps:30,postProcessing:!0,mncaUpdateRate:3,maxPointCount:3900,minPointSizeTiers:[{minWidth:3840,minPointSize:3},{minWidth:1280,minPointSize:2}]},this.pointCloud={modelName:"gradient16M",numChunk:36,maxDisplayPoints:null,cacheVersion:Date.now(),enableDynamicLoading:!0,maxLoadedChunks:9,viewConeAngle:70,loadBufferAngle:20,leftBias:15},this.scene={hideGarden:!1,hideBoxes:!0},this.camera={axonScaleFactor:100,camFar:2e3,speedBase:0,speedFine:.01,minutesPerRot:540,initialPosition:{x:0,y:-100,z:10},isInteractiveMode:!1},this.cameraBoid={maxSpeed:10,bounds:{x:{min:-40,max:40},y:{min:-110,max:-30},z:{min:20,max:35}},useDynamicYBounds:!0,yMinAtLowestZ:-90},this.lookBoid={maxSpeed:10,bounds:{x:{min:-7,max:7},y:{min:-40.5,max:-24.5},z:{min:-2.5,max:1}}},this.fairy={count:50,maxSpeed:5e3,range:2,bounds:{x:{min:-25,max:25},y:{min:-50,max:0},z:{min:0,max:20}}},this.conway={transparentBackground:!0,colorBlend:1,colorSaturation:1.5,luminanceThreshold:.05,hueFilter:.5,hueRange:1,saturationFilter:.5,saturationRange:1,luminanceFilter:.5,luminanceRange:1,renderPassInterval:20,rCycles:1,shaderOnTime:20,eventTime:240,dissolveTime:2,clearOnRenderPass:!0,autoRandomize:!0,randomizeHSLFilters:!0,usePresetRandomization:!0,cycleCount:0,innerRadius:1.5,outerRadius:1.5,birthMin:3,birthMax:3,birthOuterLimit:20,deathMin:2,deathMax:3,deathOuterLimit:20},this.capture={enabled:!1,duration:10,fps:30,format:"png",freezeRotation:!0,blendRatio:.2,runCalibration:!0,autoStart:!1,pngBatchSize:50,filenamePrefix:"frame",outputScale:3},this.analysis={enabled:!1,performanceMode:!1,frameAnalysisInterval:1,sampleSize:64,historyLength:30,enableRealTimeMetrics:!1,enableAutoClassification:!1,fpsThreshold:30,fpsCheckInterval:60,lowFpsFrameCount:0,lowFpsThreshold:90,autoDisableOnLowFps:!0}}static getInstance(){return vn.instance||(vn.instance=new vn),vn.instance}update(e,t){const n=e.split(".");let i=this;for(let r=0;r<n.length-1;r++){if(!(n[r]in i))throw new Error(`Invalid config path: ${e}`);i=i[n[r]]}const a=n[n.length-1];if(!(a in i))throw new Error(`Invalid config path: ${e}`);i[a]=t}get(e){const t=e.split(".");let n=this;for(const i of t){if(!(i in n))throw new Error(`Invalid config path: ${e}`);n=n[i]}return n}getCameraSpeed(){return this.camera.speedBase+this.camera.speedFine}calculateMinPointSize(e,t){const n=this.render.maxPointCount,i=Math.ceil(e/n),a=Math.ceil(t/n);return Math.max(i,a,1)}adjustPointSizeForMaxCount(e,t){const n=this.calculateMinPointSize(e,t);this.render.pointSize<n&&(this.render.pointSize=n);for(const i of this.render.minPointSizeTiers)e>=i.minWidth&&this.render.pointSize<i.minPointSize&&(this.render.pointSize=i.minPointSize);return this.render.pointSize}}const xo={type:"change"},da={type:"start"},Mo={type:"end"},gs=new Ia,yo=new gn,tm=Math.cos(70*kc.DEG2RAD);class nm extends Hn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",x),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xo),n.update(),a=i.NONE},this.update=function(){const R=new P,Z=new kn().setFromUnitVectors(e.up,new P(0,1,0)),de=Z.clone().invert(),le=new P,ue=new kn,we=new P,ze=2*Math.PI;return function(he=null){const k=n.object.position;R.copy(k).sub(n.target),R.applyQuaternion(Z),o.setFromVector3(R),n.autoRotate&&a===i.NONE&&q(M(he)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ne=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(ne)&&isFinite(oe)&&(ne<-Math.PI?ne+=ze:ne>Math.PI&&(ne-=ze),oe<-Math.PI?oe+=ze:oe>Math.PI&&(oe-=ze),ne<=oe?o.theta=Math.max(ne,Math.min(oe,o.theta)):o.theta=o.theta>(ne+oe)/2?Math.max(ne,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=ie(o.radius):o.radius=ie(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(de),k.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Oe=!1;if(n.zoomToCursor&&A){let Ge=null;if(n.object.isPerspectiveCamera){const We=R.length();Ge=ie(We*c);const Ct=We-Ge;n.object.position.addScaledVector(y,Ct),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const We=new P(E.x,E.y,0);We.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Oe=!0;const Ct=new P(E.x,E.y,0);Ct.unproject(n.object),n.object.position.sub(Ct).add(We),n.object.updateMatrixWorld(),Ge=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(gs.origin.copy(n.object.position),gs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(gs.direction))<tm?e.lookAt(n.target):(yo.setFromNormalAndCoplanarPoint(n.object.up,n.target),gs.intersectPlane(yo,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Oe=!0);return c=1,A=!1,Oe||le.distanceToSquared(n.object.position)>r||8*(1-ue.dot(n.object.quaternion))>r||we.distanceToSquared(n.target)>0?(n.dispatchEvent(xo),le.copy(n.object.position),ue.copy(n.object.quaternion),we.copy(n.target),Oe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",He),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",Pe),n.domElement.removeEventListener("pointerup",He),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",x),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const r=1e-6,o=new vo,l=new vo;let c=1;const h=new P,u=new Re,p=new Re,m=new Re,g=new Re,_=new Re,f=new Re,d=new Re,S=new Re,v=new Re,y=new P,E=new Re;let A=!1;const T=[],H={};function M(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function q(R){l.theta-=R}function Q(R){l.phi-=R}const N=function(){const R=new P;return function(de,le){R.setFromMatrixColumn(le,0),R.multiplyScalar(-de),h.add(R)}}(),$=function(){const R=new P;return function(de,le){n.screenSpacePanning===!0?R.setFromMatrixColumn(le,1):(R.setFromMatrixColumn(le,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(de),h.add(R)}}(),G=function(){const R=new P;return function(de,le){const ue=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;R.copy(we).sub(n.target);let ze=R.length();ze*=Math.tan(n.object.fov/2*Math.PI/180),N(2*de*ze/ue.clientHeight,n.object.matrix),$(2*le*ze/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(de*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),$(le*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){if(!n.zoomToCursor)return;A=!0;const Z=n.domElement.getBoundingClientRect(),de=R.clientX-Z.left,le=R.clientY-Z.top,ue=Z.width,we=Z.height;E.x=de/ue*2-1,E.y=-(le/we)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function J(R){u.set(R.clientX,R.clientY)}function B(R){j(R),d.set(R.clientX,R.clientY)}function V(R){g.set(R.clientX,R.clientY)}function fe(R){p.set(R.clientX,R.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Z=n.domElement;q(2*Math.PI*m.x/Z.clientHeight),Q(2*Math.PI*m.y/Z.clientHeight),u.copy(p),n.update()}function pe(R){S.set(R.clientX,R.clientY),v.subVectors(S,d),v.y>0?ee(w()):v.y<0&&Y(w()),d.copy(S),n.update()}function me(R){_.set(R.clientX,R.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),G(f.x,f.y),g.copy(_),n.update()}function ye(R){j(R),R.deltaY<0?Y(w()):R.deltaY>0&&ee(w()),n.update()}function Ce(R){let Z=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),Z=!0;break}Z&&(R.preventDefault(),n.update())}function ve(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const R=.5*(T[0].pageX+T[1].pageX),Z=.5*(T[0].pageY+T[1].pageY);u.set(R,Z)}}function ke(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{const R=.5*(T[0].pageX+T[1].pageX),Z=.5*(T[0].pageY+T[1].pageY);g.set(R,Z)}}function dt(){const R=T[0].pageX-T[1].pageX,Z=T[0].pageY-T[1].pageY,de=Math.sqrt(R*R+Z*Z);d.set(0,de)}function Le(){n.enableZoom&&dt(),n.enablePan&&ke()}function F(){n.enableZoom&&dt(),n.enableRotate&&ve()}function tt(R){if(T.length==1)p.set(R.pageX,R.pageY);else{const de=z(R),le=.5*(R.pageX+de.x),ue=.5*(R.pageY+de.y);p.set(le,ue)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Z=n.domElement;q(2*Math.PI*m.x/Z.clientHeight),Q(2*Math.PI*m.y/Z.clientHeight),u.copy(p)}function xe(R){if(T.length===1)_.set(R.pageX,R.pageY);else{const Z=z(R),de=.5*(R.pageX+Z.x),le=.5*(R.pageY+Z.y);_.set(de,le)}f.subVectors(_,g).multiplyScalar(n.panSpeed),G(f.x,f.y),g.copy(_)}function Ae(R){const Z=z(R),de=R.pageX-Z.x,le=R.pageY-Z.y,ue=Math.sqrt(de*de+le*le);S.set(0,ue),v.set(0,Math.pow(S.y/d.y,n.zoomSpeed)),ee(v.y),d.copy(S)}function be(R){n.enableZoom&&Ae(R),n.enablePan&&xe(R)}function $e(R){n.enableZoom&&Ae(R),n.enableRotate&&tt(R)}function Ue(R){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Pe),n.domElement.addEventListener("pointerup",He)),ae(R),R.pointerType==="touch"?O(R):nt(R))}function Pe(R){n.enabled!==!1&&(R.pointerType==="touch"?se(R):ot(R))}function He(R){_e(R),T.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Pe),n.domElement.removeEventListener("pointerup",He)),n.dispatchEvent(Mo),a=i.NONE}function nt(R){let Z;switch(R.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Vn.DOLLY:if(n.enableZoom===!1)return;B(R),a=i.DOLLY;break;case Vn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;V(R),a=i.PAN}else{if(n.enableRotate===!1)return;J(R),a=i.ROTATE}break;case Vn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;J(R),a=i.ROTATE}else{if(n.enablePan===!1)return;V(R),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(da)}function ot(R){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;fe(R);break;case i.DOLLY:if(n.enableZoom===!1)return;pe(R);break;case i.PAN:if(n.enablePan===!1)return;me(R);break}}function C(R){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(R.preventDefault(),n.dispatchEvent(da),ye(R),n.dispatchEvent(Mo))}function x(R){n.enabled===!1||n.enablePan===!1||Ce(R)}function O(R){switch(re(R),T.length){case 1:switch(n.touches.ONE){case Wn.ROTATE:if(n.enableRotate===!1)return;ve(),a=i.TOUCH_ROTATE;break;case Wn.PAN:if(n.enablePan===!1)return;ke(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case Wn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),a=i.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(da)}function se(R){switch(re(R),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;tt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xe(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$e(R),n.update();break;default:a=i.NONE}}function te(R){n.enabled!==!1&&R.preventDefault()}function ae(R){T.push(R)}function _e(R){delete H[R.pointerId];for(let Z=0;Z<T.length;Z++)if(T[Z].pointerId==R.pointerId){T.splice(Z,1);return}}function re(R){let Z=H[R.pointerId];Z===void 0&&(Z=new Re,H[R.pointerId]=Z),Z.set(R.pageX,R.pageY)}function z(R){const Z=R.pointerId===T[0].pointerId?T[1]:T[0];return H[Z.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",He),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}class fl{constructor(e={}){this.maxSpeed=e.maxSpeed||0,this.bounds={x:{min:e.xMin||0,max:e.xMax||0},y:{min:e.yMin||0,max:e.yMax||0},z:{min:e.zMin||0,max:e.zMax||0}},this.position=new P(0,0,0),this.velocity=new P(0,0,0),this.target=new P(0,0,0),this.avoidTarget=null}randomPosition(){this.position.set(this.randomVal(this.bounds.x.min,this.bounds.x.max),this.randomVal(this.bounds.y.min,this.bounds.y.max),this.randomVal(this.bounds.z.min,this.bounds.z.max)),this.clampPosition(),this.updateTarget()}clampPosition(){this.position.x=Math.min(this.bounds.x.max,Math.max(this.bounds.x.min,this.position.x)),this.position.y=Math.min(this.bounds.y.max,Math.max(this.bounds.y.min,this.position.y)),this.position.z=Math.min(this.bounds.z.max,Math.max(this.bounds.z.min,this.position.z))}updateTarget(){this.target.set(this.randomVal(this.bounds.x.min,this.bounds.x.max),this.randomVal(this.bounds.y.min,this.bounds.y.max),this.randomVal(this.bounds.z.min,this.bounds.z.max))}updatePosition(){this.steer(),this.avoid(),this.velocity.clampLength(0,this.maxSpeed/100),this.position.add(this.velocity),this.clampPosition()}steer(){const e=new P().copy(this.target);e.sub(this.position),e.normalize().multiplyScalar(this.maxSpeed/100);const t=e.sub(this.velocity);t.clampLength(0,this.maxSpeed/100),t.divideScalar(10),this.velocity.add(t),this.position.distanceTo(this.target)<=1&&this.updateTarget()}avoid(){if(this.avoidTarget){const e=new P().copy(this.position).add(this.velocity).multiplyScalar(.1),t=new P().copy(e).sub(this.avoidTarget.position).normalize().multiplyScalar(.1);this.velocity.add(t)}}randomVal(e,t){return Math.random()*(t-e)+e}clamp(e,t,n){return Math.min(Math.max(e,t),n)}}class So extends fl{constructor(e={}){var t,n,i,a,r,o,l,c,h,u,p,m;super({maxSpeed:e.maxSpeed||10,xMin:((n=(t=e.bounds)==null?void 0:t.x)==null?void 0:n.min)||-30,xMax:((a=(i=e.bounds)==null?void 0:i.x)==null?void 0:a.max)||30,yMin:((o=(r=e.bounds)==null?void 0:r.y)==null?void 0:o.min)||-30,yMax:((c=(l=e.bounds)==null?void 0:l.y)==null?void 0:c.max)||-30,zMin:((u=(h=e.bounds)==null?void 0:h.z)==null?void 0:u.min)||2,zMax:((m=(p=e.bounds)==null?void 0:p.z)==null?void 0:m.max)||35}),this.config=vn.getInstance(),this.useDynamicYBounds=e.useDynamicYBounds||!1,this.yMinAtLowestZ=e.yMinAtLowestZ||this.bounds.y.min}getDynamicYMin(){if(!this.useDynamicYBounds)return this.bounds.y.min;const e=this.bounds.z.max-this.bounds.z.min,t=(this.position.z-this.bounds.z.min)/e;return this.yMinAtLowestZ+(this.bounds.y.min-this.yMinAtLowestZ)*t}clampPosition(){this.position.x=Math.min(this.bounds.x.max,Math.max(this.bounds.x.min,this.position.x));const e=this.getDynamicYMin();this.position.y=Math.min(this.bounds.y.max,Math.max(e,this.position.y)),this.position.z=Math.min(this.bounds.z.max,Math.max(this.bounds.z.min,this.position.z))}updateTarget(){if(this.target.x=this.randomVal(this.bounds.x.min,this.bounds.x.max),this.target.z=this.randomVal(this.bounds.z.min,this.bounds.z.max),this.useDynamicYBounds){const e=this.bounds.z.max-this.bounds.z.min,t=(this.target.z-this.bounds.z.min)/e,n=this.yMinAtLowestZ+(this.bounds.y.min-this.yMinAtLowestZ)*t;this.target.y=this.randomVal(n,this.bounds.y.max)}else this.target.y=this.randomVal(this.bounds.y.min,this.bounds.y.max)}updatePosition(){const e=this.config.getCameraSpeed();e!==0&&(this.maxSpeed=e,super.updatePosition())}}class im{constructor(e,t,n){this.cameraBoid=e,this.lookBoid=t,this.config=n,this.originalSettings={cameraBoidMaxSpeed:e.maxSpeed,lookBoidMaxSpeed:t.maxSpeed},this.active=!1,this.startTime=0,this.currentWaypointIndex=0,this.cornerPauseStart=0,this.isPaused=!1,this.cornerPauseDuration=3e3,this.edgeDuration=15e3,this.setupWaypoints(),this.totalDuration=(this.cameraWaypoints.length-1)*this.edgeDuration+this.cameraWaypoints.length*this.cornerPauseDuration}setupWaypoints(){const e=this.cameraBoid.bounds,t=this.lookBoid.bounds;this.cameraWaypoints=[new P(e.x.max,e.y.max,e.z.min),new P(e.x.min,e.y.max,e.z.min),new P(e.x.min,e.y.min,e.z.min),new P(e.x.max,e.y.min,e.z.min),new P(e.x.max,e.y.min,e.z.max),new P(e.x.min,e.y.min,e.z.max),new P(e.x.min,e.y.max,e.z.max),new P(e.x.max,e.y.max,e.z.max),new P(e.x.max,e.y.max,e.z.min),new P(e.x.min,e.y.max,e.z.min),new P(e.x.min,e.y.min,e.z.min),new P(e.x.max,e.y.min,e.z.min),new P(e.x.max,e.y.min,e.z.max),new P(e.x.min,e.y.min,e.z.max),new P(e.x.min,e.y.max,e.z.max),new P(e.x.max,e.y.max,e.z.max),new P(e.x.max,e.y.max,e.z.min)],this.lookWaypoints=[new P(t.x.max,t.y.max,t.z.min),new P(t.x.min,t.y.max,t.z.min),new P(t.x.min,t.y.min,t.z.min),new P(t.x.max,t.y.min,t.z.min),new P(t.x.max,t.y.min,t.z.max),new P(t.x.min,t.y.min,t.z.max),new P(t.x.min,t.y.max,t.z.max),new P(t.x.max,t.y.max,t.z.max),new P(t.x.max,t.y.max,t.z.min),new P(t.x.max,t.y.min,t.z.min),new P(t.x.max,t.y.max,t.z.min),new P(t.x.min,t.y.max,t.z.min),new P(t.x.min,t.y.max,t.z.max),new P(t.x.max,t.y.max,t.z.max),new P(t.x.max,t.y.min,t.z.max),new P(t.x.min,t.y.min,t.z.max),new P(t.x.min,t.y.min,t.z.min)]}start(){this.active||(this.active=!0,this.startTime=performance.now(),this.currentWaypointIndex=0,this.isPaused=!0,this.cornerPauseStart=performance.now(),this.cameraBoid.position.copy(this.cameraWaypoints[0]),this.lookBoid.position.copy(this.lookWaypoints[0]),console.log(`Camera Bounds Test started - ${this.cameraWaypoints.length} waypoints`))}stop(){this.active&&(this.active=!1,this.cameraBoid.maxSpeed=this.originalSettings.cameraBoidMaxSpeed,this.lookBoid.maxSpeed=this.originalSettings.lookBoidMaxSpeed,this.cameraBoid.updateTarget(),this.lookBoid.updateTarget(),console.log("Camera Bounds Test completed"))}update(){if(!this.active)return;const e=performance.now();if(e-this.startTime,this.currentWaypointIndex>=this.cameraWaypoints.length-1&&!this.isPaused){this.stop();return}if(this.isPaused)if(e-this.cornerPauseStart>=this.cornerPauseDuration)this.isPaused=!1,console.log(`Leaving waypoint ${this.currentWaypointIndex}`);else{this.cameraBoid.position.copy(this.cameraWaypoints[this.currentWaypointIndex]),this.lookBoid.position.copy(this.lookWaypoints[this.currentWaypointIndex]);return}const t=e-this.cornerPauseStart-this.cornerPauseDuration,n=Math.min(t/this.edgeDuration,1),i=this.currentWaypointIndex,a=i+1;if(a>=this.cameraWaypoints.length){this.stop();return}this.cameraBoid.position.lerpVectors(this.cameraWaypoints[i],this.cameraWaypoints[a],n),this.lookBoid.position.lerpVectors(this.lookWaypoints[i],this.lookWaypoints[a],n),n>=1&&(this.currentWaypointIndex=a,this.isPaused=!0,this.cornerPauseStart=e,this.cameraBoid.position.copy(this.cameraWaypoints[a]),this.lookBoid.position.copy(this.lookWaypoints[a]),console.log(`Reached waypoint ${a} - pausing`))}isActive(){return this.active}}class sm{constructor(e,t,n){this.renderer=e,this.scene=t,this.config=n,this.width=0,this.height=0,this.mouseDown=0,this.isInteractiveMode=this.config.camera.isInteractiveMode,this.setupCamera(),this.setupControls(),this.setupCameraMovement()}setupCamera(){this.camera=new Xi(this.width/(-2*this.config.camera.axonScaleFactor),this.width/(2*this.config.camera.axonScaleFactor),this.height/(2*this.config.camera.axonScaleFactor),this.height/(-2*this.config.camera.axonScaleFactor),0,this.config.camera.camFar),this.camera.up.set(0,0,1)}setupControls(){this.controls=new nm(this.camera,this.renderer.domElement),this.controls.enabled=this.isInteractiveMode,this.controls.addEventListener("start",()=>this.mouseDown++),this.controls.addEventListener("end",()=>{this.mouseDown--,this.mouseDown===0&&this.syncBoidsWithCamera()})}syncBoidsWithCamera(){this.cameraBoid.position.copy(this.camera.position),this.lookBoid.position.copy(this.controls.target)}setupCameraMovement(){const e={...this.config.cameraBoid,useDynamicYBounds:this.config.cameraBoid.useDynamicYBounds,yMinAtLowestZ:this.config.cameraBoid.yMinAtLowestZ};this.cameraBoid=new So(e),this.lookBoid=new So(this.config.lookBoid);const t=this.config.camera.initialPosition;this.cameraBoid.position.set(t.x,t.y,t.z),this.cameraBoid.updateTarget(),this.lookBoid.position.set(0,-25,0),this.lookBoid.updateTarget(),this.camera.position.copy(this.cameraBoid.position),this.camera.lookAt(this.lookBoid.position),this.controls.target.copy(this.lookBoid.position),this.cameraBoundsTest=new im(this.cameraBoid,this.lookBoid,this.config)}updateCameraAspect(e,t){this.width=e,this.height=t;const n=this.config.camera.axonScaleFactor;this.camera.left=e/(-2*n),this.camera.right=e/(2*n),this.camera.top=t/(2*n),this.camera.bottom=t/(-2*n),this.camera.updateProjectionMatrix()}update(){this.cameraBoundsTest&&this.cameraBoundsTest.isActive()?(this.cameraBoundsTest.update(),this.camera.position.copy(this.cameraBoid.position),this.controls.target.copy(this.lookBoid.position),this.camera.lookAt(this.lookBoid.position),this.controls.update()):this.isInteractiveMode&&this.mouseDown?this.controls.update():this.mouseDown||this.updateAutomaticMovement()}updateAutomaticMovement(){this.cameraBoid.updatePosition(),this.lookBoid.updatePosition(),this.camera.position.copy(this.cameraBoid.position),this.controls.target.copy(this.lookBoid.position),this.camera.lookAt(this.lookBoid.position),this.controls.update()}toggleInteractiveMode(){this.isInteractiveMode=!this.isInteractiveMode,this.controls.enabled=this.isInteractiveMode}updateTargets(){this.mouseDown||(this.cameraBoid.updateTarget(),this.lookBoid.updateTarget())}}const bt=new Ve;class Ea extends za{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,i){const a=this,r=new Qp(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){try{t(a.parse(o))}catch(l){i?i(l):console.error(l),a.manager.itemError(e)}},n,i)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(f,d=0){const S=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let v="";const y=S.exec(f);y!==null&&(v=y[1]);const E={comments:[],elements:[],headerLength:d,objInfo:""},A=v.split(/\r\n|\r|\n/);let T;function H(M,w){const q={type:M[0]};return q.type==="list"?(q.name=M[3],q.countType=M[1],q.itemType=M[2]):q.name=M[1],q.name in w&&(q.name=w[q.name]),q}for(let M=0;M<A.length;M++){let w=A[M];if(w=w.trim(),w==="")continue;const q=w.split(/\s+/),Q=q.shift();switch(w=q.join(" "),Q){case"format":E.format=q[0],E.version=q[1];break;case"comment":E.comments.push(w);break;case"element":T!==void 0&&E.elements.push(T),T={},T.name=q[0],T.count=parseInt(q[1]),T.properties=[];break;case"property":T.properties.push(H(q,_.propertyNameMapping));break;case"obj_info":E.objInfo=w;break;default:console.log("unhandled",Q,q)}}return T!==void 0&&E.elements.push(T),E}function n(f,d){switch(d){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(f);case"float":case"double":case"float32":case"float64":return parseFloat(f)}}function i(f,d){const S={};for(let v=0;v<f.length;v++){if(d.empty())return null;if(f[v].type==="list"){const y=[],E=n(d.next(),f[v].countType);for(let A=0;A<E;A++){if(d.empty())return null;y.push(n(d.next(),f[v].itemType))}S[f[v].name]=y}else S[f[v].name]=n(d.next(),f[v].type)}return S}function a(){const f={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const d of Object.keys(_.customPropertyMapping))f[d]=[];return f}function r(f){const d=f.map(v=>v.name);function S(v){for(let y=0,E=v.length;y<E;y++){const A=v[y];if(d.includes(A))return A}return null}return{attrX:S(["x","px","posx"])||"x",attrY:S(["y","py","posy"])||"y",attrZ:S(["z","pz","posz"])||"z",attrNX:S(["nx","normalx"]),attrNY:S(["ny","normaly"]),attrNZ:S(["nz","normalz"]),attrS:S(["s","u","texture_u","tx"]),attrT:S(["t","v","texture_v","ty"]),attrR:S(["red","diffuse_red","r","diffuse_r"]),attrG:S(["green","diffuse_green","g","diffuse_g"]),attrB:S(["blue","diffuse_blue","b","diffuse_b"])}}function o(f,d){const S=a(),v=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let y,E;(E=v.exec(f))!==null?y=E[1].split(/\s+/):y=[];const A=new am(y);e:for(let T=0;T<d.elements.length;T++){const H=d.elements[T],M=r(H.properties);for(let w=0;w<H.count;w++){const q=i(H.properties,A);if(!q)break e;c(S,H.name,q,M)}}return l(S)}function l(f){let d=new Lt;f.indices.length>0&&d.setIndex(f.indices),d.setAttribute("position",new et(f.vertices,3)),f.normals.length>0&&d.setAttribute("normal",new et(f.normals,3)),f.uvs.length>0&&d.setAttribute("uv",new et(f.uvs,2)),f.colors.length>0&&d.setAttribute("color",new et(f.colors,3)),(f.faceVertexUvs.length>0||f.faceVertexColors.length>0)&&(d=d.toNonIndexed(),f.faceVertexUvs.length>0&&d.setAttribute("uv",new et(f.faceVertexUvs,2)),f.faceVertexColors.length>0&&d.setAttribute("color",new et(f.faceVertexColors,3)));for(const S of Object.keys(_.customPropertyMapping))f[S].length>0&&d.setAttribute(S,new et(f[S],_.customPropertyMapping[S].length));return d.computeBoundingSphere(),d}function c(f,d,S,v){if(d==="vertex"){f.vertices.push(S[v.attrX],S[v.attrY],S[v.attrZ]),v.attrNX!==null&&v.attrNY!==null&&v.attrNZ!==null&&f.normals.push(S[v.attrNX],S[v.attrNY],S[v.attrNZ]),v.attrS!==null&&v.attrT!==null&&f.uvs.push(S[v.attrS],S[v.attrT]),v.attrR!==null&&v.attrG!==null&&v.attrB!==null&&(bt.setRGB(S[v.attrR]/255,S[v.attrG]/255,S[v.attrB]/255).convertSRGBToLinear(),f.colors.push(bt.r,bt.g,bt.b));for(const y of Object.keys(_.customPropertyMapping))for(const E of _.customPropertyMapping[y])f[y].push(S[E])}else if(d==="face"){const y=S.vertex_indices||S.vertex_index,E=S.texcoord;y.length===3?(f.indices.push(y[0],y[1],y[2]),E&&E.length===6&&(f.faceVertexUvs.push(E[0],E[1]),f.faceVertexUvs.push(E[2],E[3]),f.faceVertexUvs.push(E[4],E[5]))):y.length===4&&(f.indices.push(y[0],y[1],y[3]),f.indices.push(y[1],y[2],y[3])),v.attrR!==null&&v.attrG!==null&&v.attrB!==null&&(bt.setRGB(S[v.attrR]/255,S[v.attrG]/255,S[v.attrB]/255).convertSRGBToLinear(),f.faceVertexColors.push(bt.r,bt.g,bt.b),f.faceVertexColors.push(bt.r,bt.g,bt.b),f.faceVertexColors.push(bt.r,bt.g,bt.b))}}function h(f,d){const S={};let v=0;for(let y=0;y<d.length;y++){const E=d[y],A=E.valueReader;if(E.type==="list"){const T=[],H=E.countReader.read(f+v);v+=E.countReader.size;for(let M=0;M<H;M++)T.push(A.read(f+v)),v+=A.size;S[E.name]=T}else S[E.name]=A.read(f+v),v+=A.size}return[S,v]}function u(f,d,S){function v(y,E,A){switch(E){case"int8":case"char":return{read:T=>y.getInt8(T),size:1};case"uint8":case"uchar":return{read:T=>y.getUint8(T),size:1};case"int16":case"short":return{read:T=>y.getInt16(T,A),size:2};case"uint16":case"ushort":return{read:T=>y.getUint16(T,A),size:2};case"int32":case"int":return{read:T=>y.getInt32(T,A),size:4};case"uint32":case"uint":return{read:T=>y.getUint32(T,A),size:4};case"float32":case"float":return{read:T=>y.getFloat32(T,A),size:4};case"float64":case"double":return{read:T=>y.getFloat64(T,A),size:8}}}for(let y=0,E=f.length;y<E;y++){const A=f[y];A.type==="list"?(A.countReader=v(d,A.countType,S),A.valueReader=v(d,A.itemType,S)):A.valueReader=v(d,A.type,S)}}function p(f,d){const S=a(),v=d.format==="binary_little_endian",y=new DataView(f,d.headerLength);let E,A=0;for(let T=0;T<d.elements.length;T++){const H=d.elements[T],M=H.properties,w=r(M);u(M,y,v);for(let q=0;q<H.count;q++){E=h(A,M),A+=E[1];const Q=E[0];c(S,H.name,Q,w)}}return l(S)}function m(f){let d=0,S=!0,v="";const y=[],E=new TextDecoder().decode(f.subarray(0,5)),A=/^ply\r\n/.test(E);do{const T=String.fromCharCode(f[d++]);T!==`
`&&T!=="\r"?v+=T:(v==="end_header"&&(S=!1),v!==""&&(y.push(v),v=""))}while(S&&d<f.length);return A===!0&&d++,{headerText:y.join("\r")+"\r",headerLength:d}}let g;const _=this;if(e instanceof ArrayBuffer){const f=new Uint8Array(e),{headerText:d,headerLength:S}=m(f),v=t(d,S);if(v.format==="ascii"){const y=new TextDecoder().decode(f);g=o(y,v)}else g=p(e,v)}else g=o(e,t(e));return g}}class am{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}class rm{constructor(e={}){this.loadCounter=0,this.numChunk=e.numChunk||1,this.modelName=e.modelName||"test",this.cacheVersion=e.cacheVersion||Date.now(),this.material=new Ls({vertexColors:!0,size:1,sizeAttenuation:!1,transparent:!1,depthTest:!0})}async loadSinglePointCloud(){if(!this.modelName.endsWith("ply"))throw new Error("Invalid file type. Only PLY files are supported.");try{const e=new Ea,t=`./models/${this.modelName}?v=${this.cacheVersion}`,n=await this.loadFile(e,t);return new bs(n,this.material)}catch(e){throw console.error("Error loading point cloud:",e),e}}async loadMultiPointCloud(e={}){const{progressive:t=!0,chunkDelay:n=50,chunkManager:i=null}=e,a=new Lt,r=new bs(a,this.material);r.frustumCulled=!1,r.geometry.dynamic=!0;try{for(let o=0;o<this.numChunk;o++)await this.loadChunk(r,o),t&&o<this.numChunk-1&&(r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.color.needsUpdate=!0,await new Promise(l=>{requestAnimationFrame(()=>{setTimeout(l,n)})}));return r.geometry.computeVertexNormals(),r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.color.needsUpdate=!0,r}catch(o){throw console.error("Error loading multi point cloud:",o),o}}async loadChunk(e,t){const n=new Ea,i=`./models/${this.modelName}/${this.modelName}_${t}.ply?v=${this.cacheVersion}`;try{const a=await this.loadFile(n,i);this.mergeGeometry(e.geometry,a),this.loadCounter++,this.updateLoadingProgress()}catch(a){throw console.error(`Error loading chunk ${t}:`,a),a}}loadFile(e,t){return new Promise((n,i)=>{e.load(t,a=>n(a),void 0,a=>i(a))})}mergeGeometry(e,t){this.mergeAttribute(e,t,"position"),this.mergeAttribute(e,t,"color")}mergeAttribute(e,t,n){var o;const i=((o=e.attributes[n])==null?void 0:o.array)||new Float32Array(0),a=t.attributes[n].array,r=new Float32Array(i.length+a.length);r.set(i),r.set(a,i.length),e.setAttribute(n,new Gt(r,3)),e.attributes[n].needsUpdate=!0}updateLoadingProgress(){const e=this.loadCounter/this.numChunk*100,t=document.getElementById("progress-bar-fill"),n=document.getElementById("loading-percentage"),i=document.getElementById("loading-text");if(t&&(t.style.width=`${e}%`),n&&(n.textContent=`${Math.round(e)}%`),i&&(i.textContent=`Loading section ${this.loadCounter} / ${this.numChunk}`),this.loadCounter>=this.numChunk){const a=document.getElementById("loading-overlay");a&&(a.classList.add("fade-out"),setTimeout(()=>{a.style.display="none"},800))}}}class om{constructor(e={}){this.config=e,this.modelName=e.modelName||"test",this.numChunks=e.numChunk||36,this.cacheVersion=e.cacheVersion||Date.now(),this.maxLoadedChunks=e.maxLoadedChunks||7,this.viewConeAngle=e.viewConeAngle||70,this.loadBufferAngle=e.loadBufferAngle||20,this.leftBias=e.leftBias||0,this.enableDynamicLoading=e.enableDynamicLoading!==void 0?e.enableDynamicLoading:!1,this.material=new Ls({vertexColors:!0,size:1,sizeAttenuation:!1,transparent:!1,depthTest:!0}),this.group=new Pi,this.group.frustumCulled=!1,this.chunks=[],this.initializeChunks(),this.loadCounter=0,this.isLoading=!1,this.loadQueue=[],this.unloadQueue=[],this.plyLoader=new Ea}initializeChunks(){const e=360/this.numChunks;for(let t=0;t<this.numChunks;t++)this.chunks.push({id:t,angle:t*e,state:"unloaded",mesh:null,pointCount:0,geometry:null})}async loadAllChunks(e={}){const{progressive:t=!0,chunkDelay:n=50,priorityChunks:i=null}=e;console.log(`ChunkManager: Loading all ${this.numChunks} chunks...`);try{let a=[];if(i&&i.length>0){const r=[];for(let o=0;o<this.numChunks;o++)i.includes(o)||r.push(o);a=[...i,...r],console.log(`ChunkManager: Priority loading - visible chunks first: [${i.join(", ")}]`)}else a=Array.from({length:this.numChunks},(r,o)=>o);for(let r=0;r<a.length;r++){const o=a[r];await this.loadChunk(o),t&&r<a.length-1&&await new Promise(l=>{requestAnimationFrame(()=>{setTimeout(l,n)})}),this.updateLoadingProgress()}return console.log(`ChunkManager: All chunks loaded. Total points: ${this.getTotalPointCount()}`),this.group}catch(a){throw console.error("Error loading chunks:",a),a}}getVisibleChunksFromAngle(e,t=0){const n=t*(180/Math.PI),i=((e-n)%360+360)%360,r=(this.viewConeAngle+this.loadBufferAngle)/2,o=i-r-this.leftBias,l=i+r,c=[],h=360/this.numChunks;for(let u=0;u<this.numChunks;u++){const p=u*h;let m=!1;o<0?m=p>=o+360||p<=l:l>360?m=p>=o||p<=l-360:m=p>=o&&p<=l,m&&c.push(u)}return c}async loadChunk(e){const t=this.chunks[e];if(!t||t.state==="loading"||t.state==="loaded")return;t.state="loading";const n=`./models/${this.modelName}/${this.modelName}_${e}.ply?v=${this.cacheVersion}`;try{const i=await this.loadFile(n),a=new bs(i,this.material);return a.frustumCulled=!1,a.userData.chunkId=e,t.geometry=i,t.mesh=a,t.pointCount=i.attributes.position.count,t.state="loaded",this.group.add(a),this.loadCounter++,a}catch(i){throw console.error(`Error loading chunk ${e}:`,i),t.state="unloaded",i}}unloadChunk(e){const t=this.chunks[e];!t||t.state==="unloaded"||(t.mesh&&this.group.remove(t.mesh),t.geometry&&t.geometry.dispose(),t.state="unloaded",t.mesh=null,t.geometry=null,t.pointCount=0,this.loadCounter--)}getChunkByAngle(e){e=(e%360+360)%360;const t=360/this.numChunks,n=Math.floor(e/t)%this.numChunks;return this.chunks[n]}update(e,t=0){if(!this.enableDynamicLoading)return;const n=this.getChunksInViewCone(e,t);for(const a of n)this.chunks[a].state==="unloaded"&&!this.loadQueue.includes(a)&&this.loadQueue.push(a);if(this.chunks.filter(a=>a.state==="loaded").length>this.maxLoadedChunks&&this.enforceMemoryBudget(n),this.loadQueue.length>0&&!this.isLoading){const a=this.loadQueue.shift();this.isLoading=!0,this.loadChunk(a).then(()=>{this.isLoading=!1})}if(this.unloadQueue.length>0){const a=this.unloadQueue.shift();this.unloadChunk(a)}}getChunksInViewCone(e,t=0){const n=Math.atan2(e.position.y,e.position.x)*(180/Math.PI),i=t*(180/Math.PI),a=((n-i)%360+360)%360,o=(this.viewConeAngle+this.loadBufferAngle)/2,l=a-o-this.leftBias,c=a+o,h=[];360/this.numChunks;for(let u=0;u<this.numChunks;u++){const m=this.chunks[u].angle;let g=!1;l<0?g=m>=l+360||m<=c:c>360?g=m>=l||m<=c-360:g=m>=l&&m<=c,g&&h.push(u)}return h}enforceMemoryBudget(e){const t=this.chunks.map((i,a)=>({chunk:i,id:a})).filter(({chunk:i})=>i.state==="loaded");t.sort((i,a)=>{const r=Math.min(...e.map(l=>this.getChunkAngleDistance(i.id,l)));return Math.min(...e.map(l=>this.getChunkAngleDistance(a.id,l)))-r});const n=t.length-this.maxLoadedChunks;for(let i=0;i<n;i++){const a=t[i].id;e.includes(a)||this.unloadQueue.push(a)}}getChunkAngleDistance(e,t){const n=this.chunks[e].angle,i=this.chunks[t].angle;let a=Math.abs(n-i);return a>180&&(a=360-a),a}loadFile(e){return new Promise((t,n)=>{this.plyLoader.load(e,i=>t(i),void 0,i=>n(i))})}updateLoadingProgress(){const e=this.maxLoadedChunks,t=Math.min(this.loadCounter/e*100,100),n=document.getElementById("progress-bar-fill"),i=document.getElementById("loading-percentage"),a=document.getElementById("loading-text");if(n&&(n.style.width=`${t}%`),i&&(i.textContent=`${Math.round(t)}%`),a&&(a.textContent=`Loading section ${Math.min(this.loadCounter,e)} / ${e}`),this.loadCounter>=e){const r=document.getElementById("loading-overlay");r&&(r.classList.add("fade-out"),setTimeout(()=>{r.style.display="none"},800))}}getTotalPointCount(){return this.chunks.filter(e=>e.state==="loaded").reduce((e,t)=>e+t.pointCount,0)}getDisplayPointCount(){return this.chunks.filter(e=>e.state==="loaded"&&e.geometry).reduce((e,t)=>{const n=t.geometry.drawRange,i=n.count===1/0?t.pointCount:Math.min(n.count,t.pointCount);return e+i},0)}setPointDisplayLimit(e){const t=this.chunks.filter(o=>o.state==="loaded"&&o.geometry);if(t.length===0){console.warn("ChunkManager: No loaded chunks to apply display limit");return}const n=this.getTotalPointCount();if(e==null||e>=n){t.forEach(o=>{o.geometry.setDrawRange(0,1/0)}),console.log(`ChunkManager: Displaying all ${n} points across ${t.length} chunks`);return}const i=Math.max(0,e);let a=i;t.forEach((o,l)=>{const c=o.pointCount/n;let h;l===t.length-1?h=a:(h=Math.floor(i*c),a-=h);const u=Math.max(0,Math.min(h,o.pointCount));o.geometry.setDrawRange(0,u)});const r=this.getDisplayPointCount();console.log(`ChunkManager: Display limit set to ${i}, actually displaying ${r} points across ${t.length} chunks`)}getLoadedChunkCount(){return this.chunks.filter(e=>e.state==="loaded").length}getGroup(){return this.group}dispose(){for(let e=0;e<this.numChunks;e++)this.unloadChunk(e);this.material.dispose()}}class lm extends fl{constructor(e={}){super({maxSpeed:e.maxSpeed||5e3,xMin:e.xMin||-25,xMax:e.xMax||25,yMin:e.yMin||-15,yMax:e.yMax||10,zMin:e.zMin||0,zMax:e.zMax||20}),this.range=e.range||2,this.point=null,this.currentSpeedFactor=this.randomSpeedFactor()}randomSpeedFactor(){return Math.random()<.5?this.randomVal(1e-7,2e-5):this.randomVal(2e-4,.001)}updateTarget(){this.target.set(this.clamp(this.randomVal(this.position.x-this.range,this.position.x+this.range),this.bounds.x.min,this.bounds.x.max),this.clamp(this.randomVal(this.position.y-this.range,this.position.y+this.range),this.bounds.y.min,this.bounds.y.max),this.clamp(this.randomVal(this.position.z-this.range,this.position.z+this.range),this.bounds.z.min,this.bounds.z.max)),this.currentSpeedFactor=this.randomSpeedFactor()}steer(){const e=new P().copy(this.target);e.sub(this.position);const t=this.maxSpeed*this.currentSpeedFactor;e.clampLength(0,t);const n=e.sub(this.velocity);n.clampLength(0,t),this.velocity.add(n),this.position.distanceTo(this.target)<=.1&&this.updateTarget()}updatePosition(){this.steer(),this.avoid();const e=this.maxSpeed*this.currentSpeedFactor;this.velocity.clampLength(0,e),this.position.add(this.velocity),this.point&&this.point.position.copy(this.position)}setupPoint(e){const t=new Lt;t.setAttribute("position",new et([0,0,0],3));const n=Math.random()*85+34|34,a="#"+(n<<16|n<<8|n).toString(16),r=new Ls({color:a});this.point=new bs(t,r),e.add(this.point)}dispose(){var e;this.point&&(this.point.geometry.dispose(),this.point.material.dispose(),(e=this.point.parent)==null||e.remove(this.point),this.point=null)}}class cm{constructor(e){this.config=vn.getInstance(),this.scene=new Na,this.fairies=[],this.createReferenceObjects()}setCameraManager(e){this.cameraManager=e,this.createLookBoidMarker()}createReferenceObjects(){const e=new Fn({color:65280,wireframe:!0}),t=new Fn({color:8947848,wireframe:!0}),n=new Fn({color:35071,wireframe:!0});this.createReferenceCube(e),this.createBoundingBox(t),this.createLookBoidBoundingBox(n)}createReferenceCube(e){this.cube=new vt(new cn(1,1,1),e),this.scene.add(this.cube)}createBoundingBox(e){const t=this.config.fairy.bounds,n=t.x.max-t.x.min,i=t.y.max-t.y.min,a=t.z.max-t.z.min;this.bounds=new vt(new cn(n,i,a),e),this.bounds.position.x=(t.x.max+t.x.min)/2,this.bounds.position.y=(t.y.max+t.y.min)/2,this.bounds.position.z=(t.z.max+t.z.min)/2,this.scene.add(this.bounds)}createLookBoidBoundingBox(e){const t=this.config.lookBoid.bounds,n=t.x.max-t.x.min,i=t.y.max-t.y.min,a=t.z.max-t.z.min;this.lookBoidBounds=new vt(new cn(n,i,a),e),this.lookBoidBounds.position.x=(t.x.max+t.x.min)/2,this.lookBoidBounds.position.y=(t.y.max+t.y.min)/2,this.lookBoidBounds.position.z=(t.z.max+t.z.min)/2,this.scene.add(this.lookBoidBounds)}createLookBoidMarker(){if(!this.cameraManager)return;const e=new Ba(.5,8,8),t=new Fn({color:16711680});this.lookBoidMarker=new vt(e,t);const n=new cn(1,1,.1),i=new Fn({color:16776960});this.lookBoidTablet=new vt(n,i),this.scene.add(this.lookBoidMarker),this.scene.add(this.lookBoidTablet)}async loadPointCloudModel(){const e=this.config.pointCloud.enableDynamicLoading!==void 0?this.config.pointCloud.enableDynamicLoading:!1;try{const t=Math.random()*Math.PI*2;if(console.log(`Random initial Z rotation: ${t.toFixed(3)} radians (${(t*180/Math.PI).toFixed(1)}°)`),e){this.chunkManager=new om({modelName:this.config.pointCloud.modelName,numChunk:this.config.pointCloud.numChunk,cacheVersion:this.config.pointCloud.cacheVersion,maxLoadedChunks:this.config.pointCloud.maxLoadedChunks,viewConeAngle:this.config.pointCloud.viewConeAngle,loadBufferAngle:this.config.pointCloud.loadBufferAngle,leftBias:this.config.pointCloud.leftBias,enableDynamicLoading:this.config.pointCloud.enableDynamicLoading}),this.pointCloudModel=this.chunkManager.getGroup(),this.pointCloudModel.rotation.z=t,this.scene.add(this.pointCloudModel),console.log("Point cloud group added to scene, chunks will appear as they load...");const n=this.config.camera.initialPosition,i=Math.atan2(n.y,n.x)*(180/Math.PI),a=this.chunkManager.getVisibleChunksFromAngle(i,t);console.log(`Initial camera angle: ${i.toFixed(1)}°, Priority chunks to load first: [${a.join(", ")}]`),await this.chunkManager.loadAllChunks({progressive:!0,chunkDelay:50,priorityChunks:a}),console.log(`ChunkManager mode: Loaded ${this.chunkManager.getLoadedChunkCount()} chunks with ${this.chunkManager.getTotalPointCount()} total points`)}else{const n=new rm({modelName:this.config.pointCloud.modelName,numChunk:this.config.pointCloud.numChunk,cacheVersion:this.config.pointCloud.cacheVersion});this.pointCloudModel=await n.loadMultiPointCloud({progressive:!0,chunkDelay:50}),console.log("Legacy mode: Loaded merged geometry"),this.pointCloudModel.rotation.z=t,this.scene.add(this.pointCloudModel)}!e&&this.config.pointCloud.maxDisplayPoints!==null&&this.setPointDisplayCount(this.config.pointCloud.maxDisplayPoints)}catch(t){console.error("Failed to load point cloud model:",t)}}getTotalPointCount(){return this.chunkManager?this.chunkManager.getTotalPointCount():!this.pointCloudModel||!this.pointCloudModel.geometry?0:this.pointCloudModel.geometry.attributes.position.count}getDisplayPointCount(){if(this.chunkManager)return this.chunkManager.getDisplayPointCount();if(!this.pointCloudModel||!this.pointCloudModel.geometry)return 0;const e=this.pointCloudModel.geometry.drawRange;return e.count===1/0?this.getTotalPointCount():e.count}setPointDisplayCount(e){if(this.chunkManager){const n=this.getTotalPointCount();if(e==null||e===0)this.chunkManager.setPointDisplayLimit(null),this.config.pointCloud.maxDisplayPoints=null;else{const i=Math.max(0,Math.min(e,n));this.chunkManager.setPointDisplayLimit(i),this.config.pointCloud.maxDisplayPoints=i}return}if(!this.pointCloudModel||!this.pointCloudModel.geometry){console.warn("Cannot set point display count: no point cloud model loaded");return}const t=this.getTotalPointCount();if(e==null||e===0)this.pointCloudModel.geometry.setDrawRange(0,1/0),this.config.pointCloud.maxDisplayPoints=null,console.log(`Displaying all ${t} points`);else{const n=Math.max(0,Math.min(e,t));this.pointCloudModel.geometry.setDrawRange(0,n),this.config.pointCloud.maxDisplayPoints=n,console.log(`Displaying ${n} of ${t} points (${(n/t*100).toFixed(1)}%)`)}}createFairies(){this.fairies=Array.from({length:this.config.fairy.count},()=>{const e=new lm(this.config.fairy);return e.randomPosition(),e.updateTarget(),e.setupPoint(this.scene),e})}update(e,t){if(this.updateRotations(e),this.updateVisibility(),this.updateFairies(),this.chunkManager&&t){const n=this.pointCloudModel?this.pointCloudModel.rotation.z:0;this.chunkManager.update(t,n)}}updateRotations(e){e>0&&(this.pointCloudModel&&(this.pointCloudModel.rotation.z+=e),this.cube.rotation.z+=e,this.bounds.rotation.z+=e,this.lookBoidBounds&&(this.lookBoidBounds.rotation.z+=e))}updateVisibility(){this.pointCloudModel&&(this.pointCloudModel.visible=!this.config.scene.hideGarden),this.cube.visible=!this.config.scene.hideBoxes,this.bounds.visible=!this.config.scene.hideBoxes,this.lookBoidBounds&&(this.lookBoidBounds.visible=!this.config.scene.hideBoxes),this.lookBoidMarker&&(this.lookBoidMarker.visible=!this.config.scene.hideBoxes,this.lookBoidTablet.visible=!this.config.scene.hideBoxes)}updateFairies(){this.fairies.forEach(e=>e.updatePosition()),this.cameraManager&&this.lookBoidMarker&&this.lookBoidTablet&&(this.lookBoidMarker.position.copy(this.cameraManager.lookBoid.position),this.lookBoidTablet.position.copy(this.cameraManager.lookBoid.position),this.lookBoidTablet.position.z+=.7)}dispose(){this.fairies.forEach(e=>e.dispose()),this.chunkManager&&this.chunkManager.dispose()}}function hm(s){if(s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function di(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),a=Math.round(s.b),r=s.a,o=Math.round(s.h),l=s.s.toFixed(1),c=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=s.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+a+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+a+","+r+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+a+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+a+","+r+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+a+",a:"+r+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var bo=Array.prototype.forEach,wi=Array.prototype.slice,K={BREAK:{},extend:function(e){return this.each(wi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(wi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=wi.call(arguments);return function(){for(var t=wi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(bo&&e.forEach&&e.forEach===bo)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,a=void 0;for(i=0,a=e.length;i<a;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var r in e)if(t.call(n,e[r],r)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var a=this,r=arguments;function o(){i=null,n||e.apply(a,r)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(a,r)}},toArray:function(e){return e.toArray?e.toArray():wi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},um=[{litmus:K.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:di},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:di},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:di},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:di}}},{litmus:K.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:K.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:K.isObject,conversions:{RGBA_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)&&K.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)&&K.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ai=void 0,_s=void 0,Ta=function(){_s=!1;var e=arguments.length>1?K.toArray(arguments):arguments[0];return K.each(um,function(t){if(t.litmus(e))return K.each(t.conversions,function(n,i){if(Ai=n.read(e),_s===!1&&Ai!==!1)return _s=Ai,Ai.conversionName=i,Ai.conversion=n,K.BREAK}),K.BREAK}),_s},Eo=void 0,Es={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),r=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=[[n,l,r],[o,n,r],[r,n,l],[r,o,n],[l,r,n],[n,r,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),a=Math.max(e,t,n),r=a-i,o=void 0,l=void 0;if(a!==0)l=r/a;else return{h:NaN,s:0,v:0};return e===a?o=(t-n)/r:t===a?o=2+(n-e)/r:o=4+(e-t)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:a/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Eo=t*8)|e&~(255<<Eo)}},dm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Wt=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},Xt=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),yn=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:s(a,t,n)}else{if("value"in i)return i.value;var r=i.get;return r===void 0?void 0:r.call(n)}},Sn=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},bn=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},ut=function(){function s(){if(Wt(this,s),this.__state=Ta.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Xt(s,[{key:"toString",value:function(){return di(this)}},{key:"toHexString",value:function(){return di(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function ka(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(ut.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(ut.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Ha(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(ut.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(ut.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}ut.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Es.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")K.extend(s.__state,Es.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};ut.recalculateHSV=function(s){var e=Es.rgb_to_hsv(s.r,s.g,s.b);K.extend(s.__state,{s:e.s,v:e.v}),K.isNaN(e.h)?K.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};ut.COMPONENTS=["r","g","b","h","s","v","hex","a"];ka(ut.prototype,"r",2);ka(ut.prototype,"g",1);ka(ut.prototype,"b",0);Ha(ut.prototype,"h");Ha(ut.prototype,"s");Ha(ut.prototype,"v");Object.defineProperty(ut.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(ut.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Es.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Gn=function(){function s(e,t){Wt(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Xt(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),fm={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},pl={};K.each(fm,function(s,e){K.each(s,function(t){pl[t]=e})});var pm=/(\d+(\.\d+)?)px/;function qt(s){if(s==="0"||K.isUndefined(s))return 0;var e=s.match(pm);return K.isNull(e)?0:parseFloat(e[1])}var I={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,a=t;K.isUndefined(a)&&(a=!0),K.isUndefined(i)&&(i=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var a=n||{},r=pl[t];if(!r)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=a.x||a.clientX||0,c=a.y||a.clientY||0;o.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=o.initKeyboardEvent||o.initKeyEvent;K.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}}K.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var a=i||!1;return e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n),I},unbind:function(e,t,n,i){var a=i||!1;return e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n),I},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return I},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return I},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return qt(t["border-left-width"])+qt(t["border-right-width"])+qt(t["padding-left"])+qt(t["padding-right"])+qt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return qt(t["border-top-width"])+qt(t["border-bottom-width"])+qt(t["padding-top"])+qt(t["padding-bottom"])+qt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ml=function(s){Sn(e,s);function e(t,n){Wt(this,e);var i=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function r(){a.setValue(!a.__prev)}return I.bind(i.__checkbox,"change",r,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Xt(e,[{key:"setValue",value:function(n){var i=yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gn),mm=function(s){Sn(e,s);function e(t,n,i){Wt(this,e);var a=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i,o=a;if(a.__select=document.createElement("select"),K.isArray(r)){var l={};K.each(r,function(c){l[c]=c}),r=l}return K.each(r,function(c,h){var u=document.createElement("option");u.innerHTML=h,u.setAttribute("value",c),o.__select.appendChild(u)}),a.updateDisplay(),I.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return Xt(e,[{key:"setValue",value:function(n){var i=yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return I.isActive(this.__select)?this:(this.__select.value=this.getValue(),yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Gn),gm=function(s){Sn(e,s);function e(t,n){Wt(this,e);var i=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i;function r(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),I.bind(i.__input,"keyup",r),I.bind(i.__input,"change",r),I.bind(i.__input,"blur",o),I.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Xt(e,[{key:"updateDisplay",value:function(){return I.isActive(this.__input)||(this.__input.value=this.getValue()),yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Gn);function To(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var gl=function(s){Sn(e,s);function e(t,n,i){Wt(this,e);var a=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i||{};return a.__min=r.min,a.__max=r.max,a.__step=r.step,K.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=To(a.__impliedStep),a}return Xt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=To(n),this}}]),e}(Gn);function _m(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var Ts=function(s){Sn(e,s);function e(t,n,i){Wt(this,e);var a=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));a.__truncationSuspended=!1;var r=a,o=void 0;function l(){var g=parseFloat(r.__input.value);K.isNaN(g)||r.setValue(g)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function h(){c()}function u(g){var _=o-g.clientY;r.setValue(r.getValue()+_*r.__impliedStep),o=g.clientY}function p(){I.unbind(window,"mousemove",u),I.unbind(window,"mouseup",p),c()}function m(g){I.bind(window,"mousemove",u),I.bind(window,"mouseup",p),o=g.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),I.bind(a.__input,"change",l),I.bind(a.__input,"blur",h),I.bind(a.__input,"mousedown",m),I.bind(a.__input,"keydown",function(g){g.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Xt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():_m(this.getValue(),this.__precision),yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(gl);function Co(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var Ca=function(s){Sn(e,s);function e(t,n,i,a,r){Wt(this,e);var o=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:a,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),I.bind(o.__background,"mousedown",c),I.bind(o.__background,"touchstart",p),I.addClass(o.__background,"slider"),I.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),I.bind(window,"mousemove",h),I.bind(window,"mouseup",u),h(_)}function h(_){_.preventDefault();var f=l.__background.getBoundingClientRect();return l.setValue(Co(_.clientX,f.left,f.right,l.__min,l.__max)),!1}function u(){I.unbind(window,"mousemove",h),I.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function p(_){_.touches.length===1&&(I.bind(window,"touchmove",m),I.bind(window,"touchend",g),m(_))}function m(_){var f=_.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(Co(f,d.left,d.right,l.__min,l.__max))}function g(){I.unbind(window,"touchmove",m),I.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Xt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(gl),_l=function(s){Sn(e,s);function e(t,n,i){Wt(this,e);var a=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=a;return a.__button=document.createElement("div"),a.__button.innerHTML=i===void 0?"Fire":i,I.bind(a.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),I.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Xt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Gn),wa=function(s){Sn(e,s);function e(t,n){Wt(this,e);var i=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new ut(i.getValue()),i.__temp=new ut(0);var a=i;i.domElement=document.createElement("div"),I.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",I.bind(i.__input,"keydown",function(_){_.keyCode===13&&u.call(this)}),I.bind(i.__input,"blur",u),I.bind(i.__selector,"mousedown",function(){I.addClass(this,"drag").bind(window,"mouseup",function(){I.removeClass(a.__selector,"drag")})}),I.bind(i.__selector,"touchstart",function(){I.addClass(this,"drag").bind(window,"touchend",function(){I.removeClass(a.__selector,"drag")})});var r=document.createElement("div");K.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),K.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),K.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),K.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),K.extend(r.style,{width:"100%",height:"100%",background:"none"}),wo(r,"top","rgba(0,0,0,0)","#000"),K.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),xm(i.__hue_field),K.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),I.bind(i.__saturation_field,"mousedown",o),I.bind(i.__saturation_field,"touchstart",o),I.bind(i.__field_knob,"mousedown",o),I.bind(i.__field_knob,"touchstart",o),I.bind(i.__hue_field,"mousedown",l),I.bind(i.__hue_field,"touchstart",l);function o(_){m(_),I.bind(window,"mousemove",m),I.bind(window,"touchmove",m),I.bind(window,"mouseup",c),I.bind(window,"touchend",c)}function l(_){g(_),I.bind(window,"mousemove",g),I.bind(window,"touchmove",g),I.bind(window,"mouseup",h),I.bind(window,"touchend",h)}function c(){I.unbind(window,"mousemove",m),I.unbind(window,"touchmove",m),I.unbind(window,"mouseup",c),I.unbind(window,"touchend",c),p()}function h(){I.unbind(window,"mousemove",g),I.unbind(window,"touchmove",g),I.unbind(window,"mouseup",h),I.unbind(window,"touchend",h),p()}function u(){var _=Ta(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function p(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}i.__saturation_field.appendChild(r),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(_){_.type.indexOf("touch")===-1&&_.preventDefault();var f=a.__saturation_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,S=d.clientX,v=d.clientY,y=(S-f.left)/(f.right-f.left),E=1-(v-f.top)/(f.bottom-f.top);return E>1?E=1:E<0&&(E=0),y>1?y=1:y<0&&(y=0),a.__color.v=E,a.__color.s=y,a.setValue(a.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var f=a.__hue_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,S=d.clientY,v=1-(S-f.top)/(f.bottom-f.top);return v>1?v=1:v<0&&(v=0),a.__color.h=v*360,a.setValue(a.__color.toOriginal()),!1}return i}return Xt(e,[{key:"updateDisplay",value:function(){var n=Ta(this.getValue());if(n!==!1){var i=!1;K.each(ut.COMPONENTS,function(o){if(!K.isUndefined(n[o])&&!K.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&K.extend(this.__color.__state,n)}K.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,r=255-a;K.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,wo(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),K.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),e}(Gn),vm=["-moz-","-o-","-webkit-","-ms-",""];function wo(s,e,t,n){s.style.background="",K.each(vm,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function xm(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Mm={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var a=n.getElementsByTagName("head")[0];try{a.appendChild(i)}catch{}}},ym=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Sm=function(e,t){var n=e[t];return K.isArray(arguments[2])||K.isObject(arguments[2])?new mm(e,t,arguments[2]):K.isNumber(n)?K.isNumber(arguments[2])&&K.isNumber(arguments[3])?K.isNumber(arguments[4])?new Ca(e,t,arguments[2],arguments[3],arguments[4]):new Ca(e,t,arguments[2],arguments[3]):K.isNumber(arguments[4])?new Ts(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ts(e,t,{min:arguments[2],max:arguments[3]}):K.isString(n)?new gm(e,t):K.isFunction(n)?new _l(e,t,""):K.isBoolean(n)?new ml(e,t):null};function bm(s){setTimeout(s,1e3/60)}var Em=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||bm,Tm=function(){function s(){Wt(this,s),this.backgroundElement=document.createElement("div"),K.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),I.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),K.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;I.bind(this.backgroundElement,"click",function(){e.hide()})}return Xt(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),K.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",I.unbind(t.domElement,"webkitTransitionEnd",i),I.unbind(t.domElement,"transitionend",i),I.unbind(t.domElement,"oTransitionEnd",i)};I.bind(this.domElement,"webkitTransitionEnd",n),I.bind(this.domElement,"transitionend",n),I.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-I.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-I.getHeight(this.domElement)/2+"px"}}]),s}(),Cm=hm(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Mm.inject(Cm);var Ao="dg",Ro=72,Po=20,ki="Default",Li=function(){try{return!!window.localStorage}catch{return!1}}(),Oi=void 0,Lo=!0,ci=void 0,fa=!1,vl=[],Xe=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),I.addClass(this.domElement,Ao),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=K.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=K.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),K.isUndefined(n.load)?n.load={preset:ki}:n.preset&&(n.load.preset=n.preset),K.isUndefined(n.parent)&&n.hideable&&vl.push(this),n.resizable=K.isUndefined(n.parent)&&n.resizable,n.autoPlace&&K.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Li&&localStorage.getItem(hi(this,"isLocal"))==="true",a=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(p){t.parent?t.getRoot().preset=p:n.load.preset=p,Pm(this),t.revert()}},width:{get:function(){return n.width},set:function(p){n.width=p,Pa(t,p)}},name:{get:function(){return n.name},set:function(p){n.name=p,r&&(r.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(p){n.closed=p,n.closed?I.addClass(t.__ul,s.CLASS_CLOSED):I.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=p?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(p){Li&&(i=p,p?I.bind(window,"unload",a):I.unbind(window,"unload",a),localStorage.setItem(hi(t,"isLocal"),p))}}}),K.isUndefined(n.parent)){if(this.closed=n.closed||!1,I.addClass(this.domElement,s.CLASS_MAIN),I.makeSelectable(this.domElement,!1),Li&&i){t.useLocalStorage=!0;var o=localStorage.getItem(hi(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,I.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(I.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(I.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),I.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);I.addClass(l,"controller-name"),r=Ga(t,l);var c=function(p){return p.preventDefault(),t.closed=!t.closed,!1};I.addClass(this.__ul,s.CLASS_CLOSED),I.addClass(r,"title"),I.bind(r,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(K.isUndefined(n.parent)&&(Lo&&(ci=document.createElement("div"),I.addClass(ci,Ao),I.addClass(ci,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ci),Lo=!1),ci.appendChild(this.domElement),I.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Pa(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},I.bind(window,"resize",this.__resizeHandler),I.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),I.bind(this.__ul,"transitionend",this.__resizeHandler),I.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Rm(this),a=function(){Li&&localStorage.getItem(hi(t,"isLocal"))==="true"&&localStorage.setItem(hi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function h(){var u=t.getRoot();u.width+=1,K.defer(function(){u.width-=1})}n.parent||h()};Xe.toggleHide=function(){fa=!fa,K.each(vl,function(s){s.domElement.style.display=fa?"none":""})};Xe.CLASS_AUTO_PLACE="a";Xe.CLASS_AUTO_PLACE_CONTAINER="ac";Xe.CLASS_MAIN="main";Xe.CLASS_CONTROLLER_ROW="cr";Xe.CLASS_TOO_TALL="taller-than-window";Xe.CLASS_CLOSED="closed";Xe.CLASS_CLOSE_BUTTON="close-button";Xe.CLASS_CLOSE_TOP="close-top";Xe.CLASS_CLOSE_BOTTOM="close-bottom";Xe.CLASS_DRAG="drag";Xe.DEFAULT_WIDTH=245;Xe.TEXT_CLOSED="Close Controls";Xe.TEXT_OPEN="Open Controls";Xe._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===Ro||s.keyCode===Ro)&&Xe.toggleHide()};I.bind(window,"keydown",Xe._keydownHandler,!1);K.extend(Xe.prototype,{add:function(e,t){return Ni(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ni(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;K.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ci.removeChild(this.domElement);var e=this;K.each(this.__folders,function(t){e.removeFolder(t)}),I.unbind(window,"keydown",Xe._keydownHandler,!1),Do(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Xe(t);this.__folders[e]=n;var i=Ga(this,n.domElement);return I.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Do(e);var t=this;K.each(e.__folders,function(n){e.removeFolder(n)}),K.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=I.getOffset(e.__ul).top,n=0;K.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=I.getHeight(i))}),window.innerHeight-t-Po<n?(I.addClass(e.domElement,Xe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Po+"px"):(I.removeClass(e.domElement,Xe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&K.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:K.debounce(function(){this.onResize()},50),remember:function(){if(K.isUndefined(Oi)&&(Oi=new Tm,Oi.domElement.innerHTML=ym),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;K.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Am(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Pa(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=vs(this)),e.folders={},K.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=vs(this),Aa(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ki]=vs(this,!0)),this.load.remembered[e]=vs(this),this.preset=e,Ra(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){K.each(this.__controllers,function(t){this.getRoot().load.remembered?xl(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),K.each(this.__folders,function(t){t.revert(t)}),e||Aa(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Ml(this.__listening)},updateDisplay:function(){K.each(this.__controllers,function(e){e.updateDisplay()}),K.each(this.__folders,function(e){e.updateDisplay()})}});function Ga(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function Do(s){I.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&I.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function Aa(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function wm(s,e,t){if(t.__li=e,t.__gui=s,K.extend(t,{options:function(r){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Ni(s,t.object,t.property,{before:o,factoryArgs:[K.toArray(arguments)]})}if(K.isArray(r)||K.isObject(r)){var l=t.__li.nextElementSibling;return t.remove(),Ni(s,t.object,t.property,{before:l,factoryArgs:[r]})}},name:function(r){return t.__li.firstElementChild.firstElementChild.innerHTML=r,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ca){var n=new Ts(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});K.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var r=t[a],o=n[a];t[a]=n[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),r.apply(t,l)}}),I.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ts){var i=function(r){if(K.isNumber(t.__min)&&K.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ni(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return r};t.min=K.compose(i,t.min),t.max=K.compose(i,t.max)}else t instanceof ml?(I.bind(e,"click",function(){I.fakeEvent(t.__checkbox,"click")}),I.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof _l?(I.bind(e,"click",function(){I.fakeEvent(t.__button,"click")}),I.bind(e,"mouseover",function(){I.addClass(t.__button,"hover")}),I.bind(e,"mouseout",function(){I.removeClass(t.__button,"hover")})):t instanceof wa&&(I.addClass(e,"color"),t.updateDisplay=K.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=K.compose(function(a){return s.getRoot().__preset_select&&t.isModified()&&Aa(s.getRoot(),!0),a},t.setValue)}function xl(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,r=void 0;if(a[s.preset])r=a[s.preset];else if(a[ki])r=a[ki];else return;if(r[n]&&r[n][e.property]!==void 0){var o=r[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Ni(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new wa(e,t);else{var a=[e,t].concat(n.factoryArgs);i=Sm.apply(s,a)}n.before instanceof Gn&&(n.before=n.before.__li),xl(s,i),I.addClass(i.domElement,"c");var r=document.createElement("span");I.addClass(r,"property-name"),r.innerHTML=i.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(i.domElement);var l=Ga(s,o,n.before);return I.addClass(l,Xe.CLASS_CONTROLLER_ROW),i instanceof wa?I.addClass(l,"color"):I.addClass(l,dm(i.getValue())),wm(s,l,i),s.__controllers.push(i),i}function hi(s,e){return document.location.href+"."+e}function Ra(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function Fo(s,e){e.style.display=s.useLocalStorage?"block":"none"}function Am(s){var e=s.__save_row=document.createElement("li");I.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),I.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",I.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",I.addClass(n,"button"),I.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",I.addClass(i,"button"),I.addClass(i,"save-as");var a=document.createElement("span");a.innerHTML="Revert",I.addClass(a,"button"),I.addClass(a,"revert");var r=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?K.each(s.load.remembered,function(u,p){Ra(s,p,p===s.preset)}):Ra(s,ki,!1),I.bind(r,"change",function(){for(var u=0;u<s.__preset_select.length;u++)s.__preset_select[u].innerHTML=s.__preset_select[u].value;s.preset=this.value}),e.appendChild(r),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),Li){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(hi(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Fo(s,o),I.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,Fo(s,o)})}var h=document.getElementById("dg-new-constructor");I.bind(h,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&Oi.hide()}),I.bind(t,"click",function(){h.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Oi.show(),h.focus(),h.select()}),I.bind(n,"click",function(){s.save()}),I.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&s.saveAs(u)}),I.bind(a,"click",function(){s.revert()})}function Rm(s){var e=void 0;s.__resize_handle=document.createElement("div"),K.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),s.width+=e-a.clientX,s.onResize(),e=a.clientX,!1}function n(){I.removeClass(s.__closeButton,Xe.CLASS_DRAG),I.unbind(window,"mousemove",t),I.unbind(window,"mouseup",n)}function i(a){return a.preventDefault(),e=a.clientX,I.addClass(s.__closeButton,Xe.CLASS_DRAG),I.bind(window,"mousemove",t),I.bind(window,"mouseup",n),!1}I.bind(s.__resize_handle,"mousedown",i),I.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function Pa(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function vs(s,e){var t={};return K.each(s.__rememberedObjects,function(n,i){var a={},r=s.__rememberedObjectIndecesToControllers[i];K.each(r,function(o,l){a[l]=e?o.initialValue:o.getValue()}),t[i]=a}),t}function Pm(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function Ml(s){s.length!==0&&Em.call(window,function(){Ml(s)}),K.each(s,function(e){e.updateDisplay()})}var Ln=Xe;class En{constructor(e,t){this.gui=e,this.config=t,this.folder=null}updateConfig(e,t){this.config.update(e,t)}createFolder(e){return this.folder=this.gui.addFolder(e),this.folder.close(),this.folder}}class Lm extends En{constructor(e,t,n){super(e,t),this.app=n,this.setup()}setup(){const e=this.createFolder("Canvas Settings"),t={widthPixels:this.app.width*this.config.render.pointSize,heightPixels:this.app.height*this.config.render.pointSize},n={fullscreen:e.add(this.config.canvas,"isFullscreen").name("Fullscreen"),maxPointCount:e.add(this.config.render,"maxPointCount",256,3900).name("Max Point Count").step(1),pointSize:e.add(this.config.render,"pointSize",1,10).name("Point Size").step(1),rotation:e.add(this.config.canvas,"rotation",{"0°":0,"90°":90,"180°":180,"270°":270}).name("Rotation")},i={get widthPixels(){return this.config.canvas.width*this.config.render.pointSize},set widthPixels(h){this.config.canvas.width=Math.floor(h/this.config.render.pointSize)},get heightPixels(){return this.config.canvas.height*this.config.render.pointSize},set heightPixels(h){this.config.canvas.height=Math.floor(h/this.config.render.pointSize)},config:this.config},a={widthPixels:e.add(i,"widthPixels",100,1920*10).name("Width (pixels)").step(1),heightPixels:e.add(i,"heightPixels",100,1080*10).name("Height (pixels)").step(1)},r={widthPixelsDisplay:e.add(t,"widthPixels").name("Width (pixels)").listen(),heightPixelsDisplay:e.add(t,"heightPixels").name("Height (pixels)").listen()};Object.values(r).forEach(h=>{h.domElement.style.pointerEvents="none",h.domElement.style.opacity="0.7"});const o={xOffset:e.add(this.config.canvas,"xOffset",0,2e3).name("X Offset"),yOffset:e.add(this.config.canvas,"yOffset",0,2e3).name("Y Offset")},l=()=>{t.widthPixels=this.app.width*this.config.render.pointSize,t.heightPixels=this.app.height*this.config.render.pointSize},c=()=>{const h=this.config.canvas.isFullscreen;a.widthPixels.domElement.parentElement.style.display=h?"none":"",a.heightPixels.domElement.parentElement.style.display=h?"none":"",r.widthPixelsDisplay.domElement.parentElement.style.display=h?"":"none",r.heightPixelsDisplay.domElement.parentElement.style.display=h?"":"none",o.xOffset.domElement.parentElement.style.display=h?"none":"",o.yOffset.domElement.parentElement.style.display=h?"none":""};n.fullscreen.onChange(()=>{c(),this.updateCanvasSize(),l()}),n.maxPointCount.onChange(()=>{this.app.checkCanvasSizeChange(),l()}),n.pointSize.onChange(()=>{l(),this.app.checkCanvasSizeChange()}),a.widthPixels.onChange(()=>{this.updateCanvasSize(),l()}),a.heightPixels.onChange(()=>{this.updateCanvasSize(),l()}),o.xOffset.onChange(()=>this.updateCanvasSize()),o.yOffset.onChange(()=>this.updateCanvasSize()),n.rotation.onChange(()=>this.updateCanvasSize()),c(),l(),this.app.onCanvasSizeChange=l}updateCanvasSize(){this.config.canvas.isFullscreen?this.app.setSize(window.innerWidth,window.innerHeight):this.app.setSize(this.config.canvas.width,this.config.canvas.height)}}class Dm extends En{constructor(e,t,n){super(e,t),this.cameraManager=n,this.displayData={cameraX:0,cameraY:0,cameraZ:0,targetX:0,targetY:0,targetZ:0,testActive:!1},this.setup()}setup(){const e=this.createFolder("Camera");e.add(this.config.camera,"axonScaleFactor",10,200).name("Zoom").onChange(t=>{this.updateConfig("camera.axonScaleFactor",t),this.cameraManager&&this.cameraManager.updateCameraAspect(this.cameraManager.width,this.cameraManager.height)}),e.add(this.config.camera,"camFar",500,5e3).name("Camera Far").onChange(t=>{this.updateConfig("camera.camFar",t),this.cameraManager&&this.cameraManager.camera&&(this.cameraManager.camera.far=t,this.cameraManager.camera.updateProjectionMatrix())}),e.add(this.config.camera,"speedBase",0,10).name("Speed (Base)").onChange(t=>{this.updateConfig("camera.speedBase",t)}),e.add(this.config.camera,"speedFine",0,.1).name("Speed (Fine)").onChange(t=>{this.updateConfig("camera.speedFine",t)}),e.add(this.config.camera,"minutesPerRot",1,1e3).name("Minutes/Rotation").onChange(t=>{this.updateConfig("camera.minutesPerRot",t)}),e.add(this.config.cameraBoid,"useDynamicYBounds").name("Dynamic Y Bounds").onChange(t=>{this.updateConfig("cameraBoid.useDynamicYBounds",t),this.cameraManager&&this.cameraManager.cameraBoid&&(this.cameraManager.cameraBoid.useDynamicYBounds=t)}),e.add(this.config.cameraBoid,"yMinAtLowestZ",-120,-40).name("Y Min at Low Z").onChange(t=>{this.updateConfig("cameraBoid.yMinAtLowestZ",t),this.cameraManager&&this.cameraManager.cameraBoid&&(this.cameraManager.cameraBoid.yMinAtLowestZ=t)}),e.add({startTest:()=>this.startBoundsTest()},"startTest").name("Start Bounds Test"),e.add({stopTest:()=>this.stopBoundsTest()},"stopTest").name("Stop Bounds Test"),e.add(this.displayData,"cameraX").name("Camera X").listen(),e.add(this.displayData,"cameraY").name("Camera Y").listen(),e.add(this.displayData,"cameraZ").name("Camera Z").listen(),e.add(this.displayData,"targetX").name("Target X").listen(),e.add(this.displayData,"targetY").name("Target Y").listen(),e.add(this.displayData,"targetZ").name("Target Z").listen(),this.startDisplayUpdate()}startBoundsTest(){this.cameraManager&&this.cameraManager.cameraBoundsTest&&(this.cameraManager.cameraBoundsTest.start(),console.log("Camera bounds test started"))}stopBoundsTest(){this.cameraManager&&this.cameraManager.cameraBoundsTest&&(this.cameraManager.cameraBoundsTest.stop(),console.log("Camera bounds test stopped"))}startDisplayUpdate(){const e=()=>{if(this.cameraManager){const t=this.cameraManager.cameraBoid.position,n=this.cameraManager.lookBoid.position;this.displayData.cameraX=Math.round(t.x*100)/100,this.displayData.cameraY=Math.round(t.y*100)/100,this.displayData.cameraZ=Math.round(t.z*100)/100,this.displayData.targetX=Math.round(n.x*100)/100,this.displayData.targetY=Math.round(n.y*100)/100,this.displayData.targetZ=Math.round(n.z*100)/100}requestAnimationFrame(e)};e()}}class Fm extends En{constructor(e,t){super(e,t),this.setup()}setup(){const e=this.createFolder("Scene");e.add(this.config.scene,"hideGarden").name("Hide Garden").onChange(t=>{this.updateConfig("scene.hideGarden",t)}),e.add(this.config.scene,"hideBoxes").name("Hide Boxes").onChange(t=>{this.updateConfig("scene.hideBoxes",t)})}}const In={"ortho-ferns":{innerRadius:1.97,outerRadius:3.94,birthMin:1.03,birthMax:2.41,birthOuterLimit:11.15,deathMin:1.53,deathMax:7.84,deathOuterLimit:40,colorBlend:.8},"small-diagonal-sliders":{innerRadius:1.37,outerRadius:3.22,birthMin:1.66,birthMax:2.97,birthOuterLimit:7.6,deathMin:1.98,deathMax:3.27,deathOuterLimit:29.56,colorBlend:.8},"slow-symmetrical":{innerRadius:1.78,outerRadius:3.57,birthMin:2.36,birthMax:3.48,birthOuterLimit:20.92,deathMin:1.69,deathMax:6.91,deathOuterLimit:30.27,colorBlend:.8},"geo-frieze":{innerRadius:1.63,outerRadius:2.98,birthMin:1.65,birthMax:2.61,birthOuterLimit:21.59,deathMin:1.61,deathMax:5.12,deathOuterLimit:23.9,colorBlend:.8},"geo-frieze-trees":{innerRadius:1.94,outerRadius:2.56,birthMin:1.39,birthMax:2.37,birthOuterLimit:16.09,deathMin:2.99,deathMax:7.38,deathOuterLimit:27.92,colorBlend:.8},"conway-pulse":{innerRadius:1.88,outerRadius:1.98,birthMin:2.77,birthMax:3.05,birthOuterLimit:17.86,deathMin:1.7,deathMax:3.14,deathOuterLimit:40,colorBlend:.8},"diamond-growth":{innerRadius:1.9,outerRadius:1.46,birthMin:1.91,birthMax:3.15,birthOuterLimit:20.87,deathMin:3,deathMax:7.26,deathOuterLimit:8.14,colorBlend:.8},"diagonal-coral":{innerRadius:1.55,outerRadius:4.34,birthMin:1.62,birthMax:2.55,birthOuterLimit:18.5,deathMin:2.67,deathMax:5.84,deathOuterLimit:40,colorBlend:.8},"frog-sliders":{innerRadius:1.68,outerRadius:3.04,birthMin:1.21,birthMax:2.33,birthOuterLimit:3.75,deathMin:2.69,deathMax:8,deathOuterLimit:23.25,colorBlend:.8},"square-fractal":{innerRadius:1.85,outerRadius:1.9,birthMin:1,birthMax:2.87,birthOuterLimit:7.49,deathMin:2.89,deathMax:8,deathOuterLimit:40,colorBlend:.8},"ortho-cactus":{innerRadius:1.68,outerRadius:4.49,birthMin:1.28,birthMax:3.43,birthOuterLimit:8.01,deathMin:2.7,deathMax:6.95,deathOuterLimit:36,colorBlend:.8},"frog-sliders-and-lines":{innerRadius:1.77,outerRadius:3.37,birthMin:1.07,birthMax:2.31,birthOuterLimit:4.8,deathMin:2.59,deathMax:6.9,deathOuterLimit:34.44,colorBlend:.8},"noisy-diamond-growth":{innerRadius:1.8,outerRadius:1.92,birthMin:1.05,birthMax:2.49,birthOuterLimit:13.4,deathMin:1.69,deathMax:6.65,deathOuterLimit:25.53,colorBlend:.8},"slow-dense-growth":{innerRadius:1.64,outerRadius:1.5,birthMin:1.45,birthMax:2.99,birthOuterLimit:19.35,deathMin:1.77,deathMax:8,deathOuterLimit:14.78,colorBlend:.8},"ortho-thorns":{innerRadius:1.9,outerRadius:3.81,birthMin:1.72,birthMax:2.5,birthOuterLimit:10.97,deathMin:2.37,deathMax:7.31,deathOuterLimit:33.25,colorBlend:.8},"dense-grid-growth":{innerRadius:1.95,outerRadius:2.72,birthMin:1.28,birthMax:2.31,birthOuterLimit:10.91,deathMin:1.9,deathMax:8,deathOuterLimit:37.96,colorBlend:.8},"diagonal-trees":{innerRadius:2.13,outerRadius:2.92,birthMin:1.77,birthMax:2.92,birthOuterLimit:19.32,deathMin:2.88,deathMax:5.5,deathOuterLimit:37.45,colorBlend:.8},"diagonal-braid":{innerRadius:1.65,outerRadius:3.69,birthMin:1,birthMax:2.93,birthOuterLimit:7.08,deathMin:1.81,deathMax:6.63,deathOuterLimit:19.21,colorBlend:.8},"slow-circle-lines":{innerRadius:1.88,outerRadius:3.62,birthMin:1.46,birthMax:2.57,birthOuterLimit:7.85,deathMin:1.98,deathMax:5.53,deathOuterLimit:17.88,colorBlend:.8},"slow-open-growth":{innerRadius:1.85,outerRadius:3.64,birthMin:2.77,birthMax:3.44,birthOuterLimit:11.13,deathMin:1.59,deathMax:7.61,deathOuterLimit:40,colorBlend:.8},"single-pulse":{innerRadius:1.52,outerRadius:2.45,birthMin:1.6400000000000001,birthMax:3.47,birthOuterLimit:8.4,deathMin:2.54,deathMax:3.59,deathOuterLimit:27.35,colorBlend:.8},"quick-conway":{innerRadius:1.9100000000000001,outerRadius:3,birthMin:2.67,birthMax:3.29,birthOuterLimit:17.35,deathMin:1.95,deathMax:3.67,deathOuterLimit:31.38,colorBlend:.8},"very-slow-lichen":{innerRadius:1.61,outerRadius:2.14,birthMin:2.98,birthMax:3.02,birthOuterLimit:16.29,deathMin:2.15,deathMax:7.99,deathOuterLimit:38.54,colorBlend:.8},"dense-checker":{innerRadius:1.67,outerRadius:2,birthMin:1.53,birthMax:3.4,birthOuterLimit:5.16,deathMin:1.99,deathMax:7.4,deathOuterLimit:21.61,colorBlend:.8},"diamond-squares":{innerRadius:1.77,outerRadius:2.93,birthMin:1.99,birthMax:3.48,birthOuterLimit:14.5,deathMin:1.99,deathMax:7.51,deathOuterLimit:22.63,colorBlend:.8},"dense-masonry":{innerRadius:1.59,outerRadius:1.95,birthMin:1.33,birthMax:3.11,birthOuterLimit:8.72,deathMin:2.52,deathMax:6.84,deathOuterLimit:35,colorBlend:.8},"zippers-checkers":{innerRadius:1.84,outerRadius:2.68,birthMin:1.71,birthMax:3.34,birthOuterLimit:5.33,deathMin:2.58,deathMax:7.66,deathOuterLimit:31.16,colorBlend:.8},"square-moss-maze":{innerRadius:1.87,outerRadius:3.4,birthMin:1,birthMax:3.49,birthOuterLimit:6.94,deathMin:1.79,deathMax:6.69,deathOuterLimit:21.14,colorBlend:.8},"checker-lattice":{innerRadius:1.67,outerRadius:1.47,birthMin:2,birthMax:2.34,birthOuterLimit:11.040000000000001,deathMin:1.68,deathMax:8,deathOuterLimit:34.53,colorBlend:.8},"moss-noise":{innerRadius:2.15,outerRadius:3.48,birthMin:2.72,birthMax:3.61,birthOuterLimit:17.080000000000002,deathMin:2.8000000000000003,deathMax:7.19,deathOuterLimit:22.95,colorBlend:.8},"orthagonal-barcodes":{innerRadius:1.5,outerRadius:2.02,birthMin:1.74,birthMax:2.35,birthOuterLimit:20.43,deathMin:2.06,deathMax:3.43,deathOuterLimit:3,colorBlend:.8},"slow-dense-lichen":{innerRadius:1.73,outerRadius:2.38,birthMin:2.86,birthMax:3.8000000000000003,birthOuterLimit:18.8,deathMin:1.95,deathMax:8,deathOuterLimit:32.12,colorBlend:.8},"diagonal-gliders":{innerRadius:1.33,outerRadius:2.94,birthMin:1.18,birthMax:2.48,birthOuterLimit:3.34,deathMin:1.9100000000000001,deathMax:7.08,deathOuterLimit:25.830000000000002,colorBlend:.8},"ripple-moss":{innerRadius:2.17,outerRadius:3.0100000000000002,birthMin:1.83,birthMax:2.75,birthOuterLimit:10.21,deathMin:1.5,deathMax:7.98,deathOuterLimit:20.400000000000002,colorBlend:.8},"ortho-frog-gliders":{innerRadius:1.7,outerRadius:4.4,birthMin:1.9100000000000001,birthMax:2.42,birthOuterLimit:4.18,deathMin:2.07,deathMax:5.7,deathOuterLimit:17.47,colorBlend:.8},"slow-dense-orthos-lichen":{innerRadius:1.77,outerRadius:3.69,birthMin:2.83,birthMax:3.5300000000000002,birthOuterLimit:22.080000000000002,deathMin:1.86,deathMax:8,deathOuterLimit:36.67,colorBlend:.8},"slow-coral":{innerRadius:1.72,outerRadius:2.22,birthMin:2.5500000000000003,birthMax:3.2,birthOuterLimit:10.27,deathMin:1.92,deathMax:6.82,deathOuterLimit:40,colorBlend:.8}};function Um(s,e){const t=In[e];if(!t){console.warn(`Preset '${e}' not found`);return}Object.keys(t).forEach(n=>{s.update(`conway.${n}`,t[n])})}function Uo(s){const e=Object.keys(In),t=Math.floor(Math.random()*e.length),n=e[t],i=In[n];return Object.keys(i).forEach(a=>{s.update(`conway.${a}`,i[a])}),console.log(`Applied random preset from collection: ${n}`,i),n}class Im extends En{constructor(e,t,n){super(e,t),this.postProcessingManager=n,this.computeControllers={},this.timingControllers={},this.setup()}setup(){const e=this.createFolder("Conway Effect");this.setupDisplayControls(e),this.setupPresetControls(e),this.setupRandomizeControls(e),this.setupTimingControls(e),this.setupComputeControls(e)}initializeStartupRuleset(){if(this.config.conway.autoRandomize&&this.config.conway.usePresetRandomization){console.log("Initializing startup with random preset...");const e=Uo(this.config),t=In[e];this.presetController&&this.presetDropdownController&&(this.presetController.currentPreset=e,this.presetDropdownController.updateDisplay());let n={};if(this.config.conway.randomizeHSLFilters){const a=(o,l)=>o+Math.random()*(l-o);if(Math.random()<.25)n.hueFilter=.5,n.saturationFilter=.5,n.luminanceFilter=.5,n.hueRange=1,n.saturationRange=1,n.luminanceRange=.9;else{const o=Math.floor(Math.random()*3);n.hueFilter=Math.random(),n.saturationFilter=Math.random(),n.luminanceFilter=a(.2,.8),o===0?(n.hueRange=a(.05,.3),n.saturationRange=a(.7,1),n.luminanceRange=a(.7,1)):o===1?(n.hueRange=a(.7,1),n.saturationRange=a(.05,.3),n.luminanceRange=a(.7,1)):(n.hueRange=a(.7,1),n.saturationRange=a(.7,1),n.luminanceRange=a(.05,.3))}Object.keys(n).forEach(o=>{this.updateConfig(`conway.${o}`,n[o])})}const i={...t,...n};this.updateGUIControllers(i),console.log(`Applied startup preset: ${e}`),setTimeout(()=>{this.notifyAnalysisSystem()},100)}else console.log("Startup using default Conway parameters (auto-randomize disabled or not using presets)")}updateGUIControllers(e){Object.keys(e).forEach(t=>{this.computeControllers[t]&&this.computeControllers[t].setValue(e[t]),this.timingControllers[t]&&this.timingControllers[t].setValue(e[t]),this.hslControllers&&this.hslControllers[t]&&this.hslControllers[t].setValue(e[t])})}calculateCyclesAndShaderTime(e){const t=Math.random();let n;t<.9?n=1:t<.95?n=2:n=3;const i=e*n,a=120+Math.random()*480;console.log(`calculateCyclesAndShaderTime: R=${e}, cycles=${n}, shaderOnTime=${i}, eventTime=${a.toFixed(1)}s`),this.updateConfig("conway.rCycles",n),this.updateConfig("conway.shaderOnTime",i),this.updateConfig("conway.eventTime",a),this.timingControllers.rCycles&&this.timingControllers.rCycles.updateDisplay(),this.timingControllers.shaderOnTime&&this.timingControllers.shaderOnTime.updateDisplay(),this.timingControllers.eventTime&&this.timingControllers.eventTime.updateDisplay()}startNewEventCycle(){const e=20+Math.random()*70,t=1+Math.random()*2;this.updateConfig("conway.renderPassInterval",e),this.updateConfig("conway.dissolveTime",t),this.calculateCyclesAndShaderTime(e),this.timingControllers.renderPassInterval&&this.timingControllers.renderPassInterval.setValue(e),this.timingControllers.dissolveTime&&this.timingControllers.dissolveTime.setValue(t),this.postProcessingManager&&(this.postProcessingManager.clearMNCAState(),this.postProcessingManager.forceRenderPassUpdate())}randomizeConwayParams(){if(this.config.conway.usePresetRandomization){const e=Uo(this.config),t=In[e];this.presetController&&this.presetDropdownController&&(this.presetController.currentPreset=e,this.presetDropdownController.updateDisplay());let n={};if(this.config.conway.randomizeHSLFilters){const a=(o,l)=>o+Math.random()*(l-o);if(Math.random()<.25)n.hueFilter=.5,n.saturationFilter=.5,n.luminanceFilter=.5,n.hueRange=1,n.saturationRange=1,n.luminanceRange=.9;else{const o=Math.floor(Math.random()*3);n.hueFilter=Math.random(),n.saturationFilter=Math.random(),n.luminanceFilter=a(.2,.8),o===0?(n.hueRange=a(.05,.3),n.saturationRange=a(.7,1),n.luminanceRange=a(.7,1)):o===1?(n.hueRange=a(.7,1),n.saturationRange=a(.05,.3),n.luminanceRange=a(.7,1)):(n.hueRange=a(.7,1),n.saturationRange=a(.7,1),n.luminanceRange=a(.05,.3))}Object.keys(n).forEach(o=>{this.updateConfig(`conway.${o}`,n[o])})}const i={...t,...n};this.updateGUIControllers(i),console.log(`Applied random preset: ${e}`)}else{const e=(n,i)=>n+Math.random()*(i-n),t={innerRadius:e(1.3,2.2),outerRadius:e(1.4,4.5),birthMin:e(.8,3.2),birthMax:e(2.3,3.8),birthOuterLimit:e(3,25),deathMin:e(1.5,3.2),deathMax:e(2.5,9),deathOuterLimit:e(2,45)};if(this.config.conway.randomizeHSLFilters)if(Math.random()<.25)t.hueFilter=.5,t.saturationFilter=.5,t.luminanceFilter=.5,t.hueRange=1,t.saturationRange=1,t.luminanceRange=.9;else{const i=Math.floor(Math.random()*3);t.hueFilter=Math.random(),t.saturationFilter=Math.random(),t.luminanceFilter=e(.2,.8),i===0?(t.hueRange=e(.05,.3),t.saturationRange=e(.7,1),t.luminanceRange=e(.7,1)):i===1?(t.hueRange=e(.7,1),t.saturationRange=e(.05,.3),t.luminanceRange=e(.7,1)):(t.hueRange=e(.7,1),t.saturationRange=e(.7,1),t.luminanceRange=e(.05,.3))}Object.keys(t).forEach(n=>{this.updateConfig(`conway.${n}`,t[n])}),this.updateGUIControllers(t)}this.startNewEventCycle(),this.postProcessingManager&&this.postProcessingManager.onManualRandomization(),this.notifyAnalysisSystem()}notifyAnalysisSystem(){if(this.postProcessingManager&&this.postProcessingManager.guiManager){const e=this.postProcessingManager.guiManager;if(e.analysisFolder){const t={innerRadius:this.config.conway.innerRadius,outerRadius:this.config.conway.outerRadius,birthMin:this.config.conway.birthMin,birthMax:this.config.conway.birthMax,birthOuterLimit:this.config.conway.birthOuterLimit,deathMin:this.config.conway.deathMin,deathMax:this.config.conway.deathMax,deathOuterLimit:this.config.conway.deathOuterLimit,hueFilter:this.config.conway.hueFilter,hueRange:this.config.conway.hueRange,saturationFilter:this.config.conway.saturationFilter,saturationRange:this.config.conway.saturationRange,luminanceFilter:this.config.conway.luminanceFilter,luminanceRange:this.config.conway.luminanceRange},n={renderPassInterval:this.config.conway.renderPassInterval,rCycles:this.config.conway.rCycles,shaderOnTime:this.config.conway.shaderOnTime,eventTime:this.config.conway.eventTime,dissolveTime:this.config.conway.dissolveTime};e.analysisFolder.onNewRuleset(t,n)}}}setupPresetControls(e){const t=Object.keys(In);this.presetController={currentPreset:"ortho-ferns",applyPreset:()=>{const n=In[this.presetController.currentPreset];n&&(this.updateConfig("conway.autoRandomize",!1),this.autoRandomizeController&&this.autoRandomizeController.setValue(!1),Um(this.config,this.presetController.currentPreset),this.updateGUIControllers(n),this.startNewEventCycle(),this.postProcessingManager&&this.postProcessingManager.onManualRandomization(),this.notifyAnalysisSystem())}},this.presetDropdownController=e.add(this.presetController,"currentPreset",t).name("Preset"),e.add(this.presetController,"applyPreset").name("Apply Preset")}setupRandomizeControls(e){const t={randomize:()=>this.randomizeConwayParams()};e.add(t,"randomize").name("Randomize Values"),this.autoRandomizeController=e.add(this.config.conway,"autoRandomize").name("Auto-Randomize").onChange(n=>{this.updateConfig("conway.autoRandomize",n),this.updateConfig("conway.cycleCount",0)}),e.add(this.config.conway,"usePresetRandomization").name("Rand Presets Only").onChange(n=>{this.updateConfig("conway.usePresetRandomization",n)}),e.add(this.config.conway,"randomizeHSLFilters").name("Randomize Color Filter").onChange(n=>{this.updateConfig("conway.randomizeHSLFilters",n)})}setupTimingControls(e){const t=e.addFolder("Timing (s)");this.shaderState={status:"ON",countdown:"0.0s"},this.timingControllers.shaderStatus=t.add(this.shaderState,"status").name("Shader State").listen(),this.timingControllers.shaderCountdown=t.add(this.shaderState,"countdown").name("Event Time Elapsed").listen(),this.timingControllers.renderPassInterval=t.add(this.config.conway,"renderPassInterval",20,90).name("Refresh Rate (R)").step(.1).onChange(n=>{this.updateConfig("conway.renderPassInterval",n),this.calculateCyclesAndShaderTime(n)}),this.timingControllers.rCycles=t.add(this.config.conway,"rCycles").name("R Cycles [Auto]").listen(),this.timingControllers.shaderOnTime=t.add(this.config.conway,"shaderOnTime").name("Shader On Time [Auto]").listen(),this.timingControllers.eventTime=t.add(this.config.conway,"eventTime",120,600).name("Event Time (Et)").step(.1).onChange(n=>{this.updateConfig("conway.eventTime",n)}),this.timingControllers.dissolveTime=t.add(this.config.conway,"dissolveTime",1,3).name("Dissolve Time (D)").step(.1).onChange(n=>{this.updateConfig("conway.dissolveTime",n)}),this.timingControllers.clearOnRenderPass=t.add(this.config.conway,"clearOnRenderPass").name("Clear Before Render").onChange(n=>{this.updateConfig("conway.clearOnRenderPass",n)}),this.calculateCyclesAndShaderTime(this.config.conway.renderPassInterval),setTimeout(()=>this.updateShaderStateDisplay(),100)}updateShaderStateDisplay(){}setupComputeControls(e){const t=e.addFolder("Ruleset");this.computeControllers.innerRadius=t.add(this.config.conway,"innerRadius",1,5).name("Inner Radius").step(.01).onChange(n=>{this.updateConfig("conway.innerRadius",n)}),this.computeControllers.outerRadius=t.add(this.config.conway,"outerRadius",1,5).name("Outer Radius").step(.01).onChange(n=>{this.updateConfig("conway.outerRadius",n)}),this.setupBirthRules(t),this.setupDeathRules(t)}setupBirthRules(e){const t=e.addFolder("Birth Rules");t.open(),this.computeControllers.birthMin=t.add(this.config.conway,"birthMin",1,4).name("Min Neighbors").step(.01).onChange(n=>{this.updateConfig("conway.birthMin",n)}),this.computeControllers.birthMax=t.add(this.config.conway,"birthMax",1,4).name("Max Neighbors").step(.01).onChange(n=>{this.updateConfig("conway.birthMax",n)}),this.computeControllers.birthOuterLimit=t.add(this.config.conway,"birthOuterLimit",3,40).name("Outer Limit").step(.01).onChange(n=>{this.updateConfig("conway.birthOuterLimit",n)})}setupDeathRules(e){const t=e.addFolder("Death Rules");t.open(),this.computeControllers.deathMin=t.add(this.config.conway,"deathMin",1,4).name("Min Neighbors").step(.01).onChange(n=>{this.updateConfig("conway.deathMin",n)}),this.computeControllers.deathMax=t.add(this.config.conway,"deathMax",1,8).name("Max Neighbors").step(.01).onChange(n=>{this.updateConfig("conway.deathMax",n)}),this.computeControllers.deathOuterLimit=t.add(this.config.conway,"deathOuterLimit",3,40).name("Outer Limit").step(.01).onChange(n=>{this.updateConfig("conway.deathOuterLimit",n)})}setupDisplayControls(e){const t=e.addFolder("Display");t.add(this.config.render,"postProcessing").name("Shader On/Off").onChange(a=>{this.updateConfig("render.postProcessing",a)}),t.add(this.config.render,"mncaUpdateRate",1,10).name("Update Freq.").step(1).onChange(a=>{this.updateConfig("render.mncaUpdateRate",Math.floor(a))}),t.add(this.config.conway,"transparentBackground").name("Transparent").onChange(a=>{this.updateConfig("conway.transparentBackground",a)}),t.add(this.config.conway,"colorBlend",0,1).name("Shader Opacity").onChange(a=>{this.updateConfig("conway.colorBlend",a)}),t.add(this.config.conway,"colorSaturation",0,25).name("Color Saturation").onChange(a=>{this.updateConfig("conway.colorSaturation",a)});const n=t.addFolder("Color Filters");this.hslControllers={};const i={info:"Target=what to select, Range=how strict (0=very strict, 1=accept all)"};n.add(i,"info").name("Help: ").listen(),this.hslControllers.hueFilter=n.add(this.config.conway,"hueFilter",0,1).name("Hue Target (0=red, 0.33=green, 0.66=blue)").step(.01).onChange(a=>{this.updateConfig("conway.hueFilter",a),this.postProcessingManager&&this.postProcessingManager.clearMNCAState()}),this.hslControllers.hueRange=n.add(this.config.conway,"hueRange",0,1).name("Hue Range (1.0=any hue, 0.1=strict)").step(.01).onChange(a=>{this.updateConfig("conway.hueRange",a),this.postProcessingManager&&this.postProcessingManager.clearMNCAState()}),this.hslControllers.saturationFilter=n.add(this.config.conway,"saturationFilter",0,1).name("Saturation Target (0=gray, 1=vivid)").step(.01).onChange(a=>{this.updateConfig("conway.saturationFilter",a),this.postProcessingManager&&this.postProcessingManager.clearMNCAState()}),this.hslControllers.saturationRange=n.add(this.config.conway,"saturationRange",0,1).name("Saturation Range (1.0=any sat, 0.1=strict)").step(.01).onChange(a=>{this.updateConfig("conway.saturationRange",a),this.postProcessingManager&&this.postProcessingManager.clearMNCAState()}),this.hslControllers.luminanceFilter=n.add(this.config.conway,"luminanceFilter",0,1).name("Luminance Target (0=dark, 1=bright)").step(.01).onChange(a=>{this.updateConfig("conway.luminanceFilter",a),this.postProcessingManager&&this.postProcessingManager.clearMNCAState()}),this.hslControllers.luminanceRange=n.add(this.config.conway,"luminanceRange",0,1).name("Luminance Range (1.0=any bright, 0.1=strict)").step(.01).onChange(a=>{this.updateConfig("conway.luminanceRange",a),this.postProcessingManager&&this.postProcessingManager.clearMNCAState()})}}class Om extends En{constructor(e,t,n,i=null){super(e,t),this.settingsManager=n,this.presetManager=i,this.setup()}setPresetManager(e){this.presetManager=e,this.folder&&this.setupPresetControls(this.folder)}setup(){const e=this.createFolder("GUI_Settings");this.folder=e,this.setupPresetControls(e),this.setupPersistenceControls(e),this.setupImportExportControls(e),this.setupInfoDisplay(e)}setupPresetControls(e){if(!this.presetManager)return;const t=e.addFolder("Presets");t.open(),this.presetDisplay={currentPreset:this.presetManager.getCurrentPresetName()||"None",hashParam:window.location.hash||"None"},t.add(this.presetDisplay,"currentPreset").name("Current Preset").listen(),t.add(this.presetDisplay,"hashParam").name("URL Hash").listen();const n={exportPreset:()=>{const a=prompt("Enter preset name (without .json extension):");a&&(this.presetManager.exportAsPreset(a),this.showMessage(`Preset "${a}.json" downloaded. Place it in public/presets/ to use.`))},copyPresetURL:()=>{const a=this.presetManager.getCurrentPresetName()||"mypreset",r=`${window.location.origin}${window.location.pathname}#preset=${a}`;navigator.clipboard.writeText(r).then(()=>{this.showMessage("Preset URL copied to clipboard!")}).catch(o=>{this.showMessage("Failed to copy URL: "+o.message,"error")})},clearPreset:()=>{confirm("Clear current preset and reload from localStorage?")&&(this.presetManager.clearPreset(),this.showMessage("Preset cleared, page will reload..."),setTimeout(()=>window.location.reload(),1e3))},loadPreset:async()=>{const a=prompt("Enter preset name to load (without .json extension):");a&&(await this.presetManager.loadPreset(a)?(this.showMessage(`Preset "${a}" loaded! Page will reload...`),setTimeout(()=>window.location.reload(),1e3)):this.showMessage(`Failed to load preset "${a}"`,"error"))}};t.add(n,"exportPreset").name("Export as Preset"),t.add(n,"loadPreset").name("Load Preset..."),t.add(n,"copyPresetURL").name("Copy Preset URL"),t.add(n,"clearPreset").name("Clear Current Preset");const i={info:"Use #preset=name or #name in URL to load presets"};t.add(i,"info").name("Info").listen(),setInterval(()=>{this.presetDisplay.currentPreset=this.presetManager.getCurrentPresetName()||"None",this.presetDisplay.hashParam=window.location.hash||"None"},1e3)}setupPersistenceControls(e){const t=e.addFolder("Auto-Save");t.open(),t.add(this.settingsManager,"autoSaveEnabled").name("Auto-Save Enabled").onChange(i=>{console.log(`Auto-save ${i?"enabled":"disabled"}`)});const n={saveNow:()=>{this.settingsManager.saveSettings()?this.showMessage("Settings saved successfully!"):this.showMessage("Failed to save settings","error"),this.updateInfoDisplay()},loadSaved:()=>{this.settingsManager.loadSettings()?(this.showMessage("Settings loaded successfully!"),this.refreshAllGUIControllers()):this.showMessage("No saved settings found","warning")},resetDefaults:()=>{confirm("Reset all settings to defaults? This cannot be undone.")&&(this.settingsManager.resetToDefaults(),this.showMessage("Settings reset to defaults"),this.refreshAllGUIControllers(),this.updateInfoDisplay())},clearSaved:()=>{confirm("Clear all saved settings? This cannot be undone.")&&(this.settingsManager.clearSavedSettings(),this.showMessage("Saved settings cleared"),this.updateInfoDisplay())}};t.add(n,"saveNow").name("Save Now"),t.add(n,"loadSaved").name("Load Saved"),t.add(n,"resetDefaults").name("Reset to Defaults"),t.add(n,"clearSaved").name("Clear Saved")}setupImportExportControls(e){const t=e.addFolder("Import/Export");t.open();const n={exportToFile:()=>{try{this.settingsManager.downloadSettings(),this.showMessage("Settings exported successfully!")}catch(i){this.showMessage("Failed to export settings: "+i.message,"error")}},importFromFile:async()=>{try{const i=await this.settingsManager.uploadSettings();this.showMessage(i),this.refreshAllGUIControllers(),this.updateInfoDisplay()}catch(i){this.showMessage("Failed to import settings: "+i.message,"error")}},copyToClipboard:async()=>{try{const i=this.settingsManager.exportSettings();await navigator.clipboard.writeText(i),this.showMessage("Settings copied to clipboard!")}catch(i){this.showMessage("Failed to copy to clipboard: "+i.message,"error")}},pasteFromClipboard:async()=>{try{const i=await navigator.clipboard.readText();this.settingsManager.importSettings(i)?(this.showMessage("Settings imported from clipboard!"),this.refreshAllGUIControllers(),this.updateInfoDisplay()):this.showMessage("Failed to import settings from clipboard","error")}catch(i){this.showMessage("Failed to paste from clipboard: "+i.message,"error")}}};t.add(n,"exportToFile").name("Export to File"),t.add(n,"importFromFile").name("Import from File"),t.add(n,"copyToClipboard").name("Copy to Clipboard"),t.add(n,"pasteFromClipboard").name("Paste from Clipboard")}setupInfoDisplay(e){const t=e.addFolder("Info");this.infoDisplay={status:"No saved settings",size:"0 bytes",lastSaved:"Never",version:"N/A"},this.infoControllers={status:t.add(this.infoDisplay,"status").name("Status").listen(),size:t.add(this.infoDisplay,"size").name("Size").listen(),lastSaved:t.add(this.infoDisplay,"lastSaved").name("Last Saved").listen(),version:t.add(this.infoDisplay,"version").name("Version").listen()},this.updateInfoDisplay();const n={refresh:()=>this.updateInfoDisplay()};t.add(n,"refresh").name("Refresh Info")}updateInfoDisplay(){const e=this.settingsManager.getSettingsInfo();this.infoDisplay.status=e.exists?"Settings saved":"No saved settings",this.infoDisplay.size=e.exists?`${Math.round(e.size/1024*100)/100} KB`:"0 bytes",this.infoDisplay.lastSaved=e.timestamp?new Date(e.timestamp).toLocaleString():"Never",this.infoDisplay.version=e.version||"N/A",Object.values(this.infoControllers||{}).forEach(t=>{t&&t.updateDisplay&&t.updateDisplay()})}refreshAllGUIControllers(){this.gui&&this.gui.__controllers&&this.refreshControllersRecursive(this.gui)}refreshControllersRecursive(e){e.__controllers&&e.__controllers.forEach(t=>{t.updateDisplay&&t.updateDisplay()}),e.__folders&&Object.values(e.__folders).forEach(t=>{this.refreshControllersRecursive(t)})}showMessage(e,t="info"){const n=document.createElement("div");n.textContent=e,n.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 15px;
            border-radius: 4px;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 10000;
            max-width: 300px;
            word-wrap: break-word;
            ${t==="error"?"background-color: #d32f2f;":t==="warning"?"background-color: #f57c00;":"background-color: #388e3c;"}
        `,document.body.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},3e3),console.log(`[Settings] ${e}`)}}class Nm extends En{constructor(e,t){super(e,t),this.controllers={},this.manualCollection={rulesets:[],stats:{total:0,good:0,flashing:0,bad:0}},this.uiState={currentClassification:"unknown",exportFormat:"json"},this.displayValues={total:"0",good:"0",flashing:"0",bad:"0"},this.setup()}setup(){const e=this.createFolder("Ruleset Analysis");this.setupManualClassification(e),this.setupCollectionStatistics(e),this.setupExportControls(e)}setupManualClassification(e){const t=e.addFolder("Manual Classification");t.open(),this.controllers.classification=t.add(this.uiState,"currentClassification",["good","flashing","bad","unknown"]).name("Current Ruleset");const n={classifyGood:()=>this.classifyCurrentRuleset("good"),classifyFlashing:()=>this.classifyCurrentRuleset("flashing"),classifyBad:()=>this.classifyCurrentRuleset("bad")};t.add(n,"classifyGood").name("Mark as Good"),t.add(n,"classifyFlashing").name("Mark as Flashing"),t.add(n,"classifyBad").name("Mark as Bad");const i={clearData:()=>this.clearAllData()};t.add(i,"clearData").name("Clear All Data")}setupCollectionStatistics(e){const t=e.addFolder("Collection Statistics");t.open(),this.statControllers={},this.statControllers.total=t.add(this.displayValues,"total").name("Total Collected").listen(),this.statControllers.good=t.add(this.displayValues,"good").name("Good Rulesets").listen(),this.statControllers.flashing=t.add(this.displayValues,"flashing").name("Flashing Rulesets").listen(),this.statControllers.bad=t.add(this.displayValues,"bad").name("Bad Rulesets").listen()}setupExportControls(e){const t=e.addFolder("Export Data");this.controllers.exportFormat=t.add(this.uiState,"exportFormat",["json","csv"]).name("Export Format");const n={exportData:()=>this.exportData(),downloadData:()=>this.downloadData()};t.add(n,"exportData").name("Export to Console"),t.add(n,"downloadData").name("Download File")}classifyCurrentRuleset(e){const t=this.getCurrentMNCAParameters(),n={id:`ruleset_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,timestamp:new Date().toISOString(),classification:e,parameters:t,notes:"Manual classification"};this.manualCollection.rulesets.push(n),this.manualCollection.stats.total++,this.manualCollection.stats[e]++,this.uiState.currentClassification=e,this.updateDropdownAndStats(),console.log(`Manually classified ruleset as: ${e}`,n)}getCurrentMNCAParameters(){const e=this.config.mnca||{};return{innerRadius:e.innerRadius||1,outerRadius:e.outerRadius||3,birthMin:e.birthMin||2,birthMax:e.birthMax||3,birthOuterLimit:e.birthOuterLimit||3,deathMin:e.deathMin||3,deathMax:e.deathMax||3,deathOuterLimit:e.deathOuterLimit||3,hueFilter:e.hueFilter||.5,hueRange:e.hueRange||1,saturationFilter:e.saturationFilter||.5,saturationRange:e.saturationRange||1,luminanceFilter:e.luminanceFilter||.5,luminanceRange:e.luminanceRange||1}}updateDropdownAndStats(){this.controllers.classification&&this.controllers.classification.setValue(this.uiState.currentClassification),this.displayValues.total=this.manualCollection.stats.total.toString(),this.displayValues.good=this.manualCollection.stats.good.toString(),this.displayValues.flashing=this.manualCollection.stats.flashing.toString(),this.displayValues.bad=this.manualCollection.stats.bad.toString(),this.forceGUIRefresh()}forceGUIRefresh(){this.statControllers&&Object.values(this.statControllers).forEach(e=>{e&&e.updateDisplay&&e.updateDisplay()})}clearAllData(){confirm("Are you sure you want to clear all collected data? This cannot be undone.")&&(this.manualCollection.rulesets=[],this.manualCollection.stats={total:0,good:0,flashing:0,bad:0},this.updateDropdownAndStats(),console.log("Cleared all manual classification data"))}exportData(){const e=this.uiState.exportFormat;let t;return e==="json"?t={exportTimestamp:new Date().toISOString(),stats:this.manualCollection.stats,rulesets:this.manualCollection.rulesets}:e==="csv"&&(t=this.exportToCSV()),console.log(`Exported data (${e} format):`),console.log(t),t}exportToCSV(){const e=["id","timestamp","classification","innerRadius","outerRadius","birthMin","birthMax","birthOuterLimit","deathMin","deathMax","deathOuterLimit","hueFilter","hueRange","saturationFilter","saturationRange","luminanceFilter","luminanceRange","notes"],t=this.manualCollection.rulesets.map(n=>[n.id,n.timestamp,n.classification,n.parameters.innerRadius,n.parameters.outerRadius,n.parameters.birthMin,n.parameters.birthMax,n.parameters.birthOuterLimit,n.parameters.deathMin,n.parameters.deathMax,n.parameters.deathOuterLimit,n.parameters.hueFilter,n.parameters.hueRange,n.parameters.saturationFilter,n.parameters.saturationRange,n.parameters.luminanceFilter,n.parameters.luminanceRange,n.notes]);return[e,...t].map(n=>n.join(",")).join(`
`)}downloadData(){const e=this.uiState.exportFormat;let t,n,i;if(e==="json"){const l=this.exportData();t=JSON.stringify(l,null,2),n="application/json",i=`mnca_rulesets_${new Date().toISOString().split("T")[0]}.json`}else e==="csv"&&(t=this.exportToCSV(),n="text/csv",i=`mnca_rulesets_${new Date().toISOString().split("T")[0]}.csv`);const a=new Blob([t],{type:n}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=i,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r),console.log(`Downloaded ${i}`)}onNewRuleset(e,t){}onFrameAnalysis(e){return null}onRulesetEnd(){}dispose(){}}class Bm extends En{constructor(e,t,n){super(e,t),this.sceneManager=n,this.densityCalculator=null,this.displayController=null,this.setup()}setDensityCalculator(e){this.densityCalculator=e}setup(){const e=this.createFolder("Point Cloud"),t={displayPoints:0,displayLabel:"Loading...",density:"Calculating...",coverage:"Calculating..."};e.add(t,"displayLabel").name("Points").listen(),this.displayController=e.add(t,"displayPoints",0,1e5).name("Display Limit").onChange(n=>{this.sceneManager&&(this.sceneManager.setPointDisplayCount(n===0?null:n),this.updateDisplayLabel(t))}),e.add({resetPoints:()=>{if(this.sceneManager){const n=this.sceneManager.getTotalPointCount();t.displayPoints=n,this.sceneManager.setPointDisplayCount(null),this.updateDisplayLabel(t)}}},"resetPoints").name("Show All Points"),e.add(t,"density").name("Density").listen(),e.add(t,"coverage").name("Coverage").listen(),this.params=t}updateDisplayLabel(e){if(!this.sceneManager)return;const t=this.sceneManager.getTotalPointCount(),n=this.sceneManager.getDisplayPointCount();if(n===t)e.displayLabel=`${t.toLocaleString()} (All)`;else{const i=(n/t*100).toFixed(1);e.displayLabel=`${n.toLocaleString()} / ${t.toLocaleString()} (${i}%)`}}updateDensityLabels(e){if(!this.densityCalculator){e.density="Not available",e.coverage="Not available";return}e.density=this.densityCalculator.getDensityString(),e.coverage=this.densityCalculator.getCoverageString()}initializeWithModel(){if(!this.sceneManager)return;const e=this.sceneManager.getTotalPointCount();if(e>0){this.displayController.max(e);const t=this.sceneManager.getDisplayPointCount();this.params.displayPoints=t,this.updateDisplayLabel(this.params),this.startDensityUpdates(),console.log(`Point Cloud GUI initialized: ${e} total points`)}}startDensityUpdates(){setInterval(()=>{this.updateDensityLabels(this.params)},1e3),this.updateDensityLabels(this.params)}}class zm extends En{constructor(e,t,n){super(e,t),this.app=n,this.setup()}setup(){const e=this.createFolder("Capture");this.statusObj={status:"Idle"},this.statusController=e.add(this.statusObj,"status").name("Status").listen(),this.statusController.domElement.style.pointerEvents="none",this.statusController.domElement.style.opacity="0.7",e.add(this.config.capture,"enabled").name("Enable Capture Mode").onChange(a=>this.onCaptureModeToggle(a)),e.add(this.config.capture,"duration",1,1200).name("Duration (sec)").step(1),e.add(this.config.capture,"format",{"PNG Sequence":"png","WebM Video":"webm"}).name("Output Format"),e.add(this.config.capture,"outputScale",1,5).name("Output Scale").step(1);const t=this,n={get resolution(){const a=t.app.width,r=t.app.height,o=t.config.capture.outputScale;return`${a}×${r} → ${a*o}×${r*o}`},set resolution(a){}},i=e.add(n,"resolution").name("Output Res").listen();i.domElement.style.pointerEvents="none",i.domElement.style.opacity="0.7",e.add(this.config.capture,"pngBatchSize",10,200).name("PNG Batch Size").step(10),e.add(this.config.capture,"blendRatio",.1,.4).name("Loop Blend Ratio").step(.01),e.add(this.config.capture,"freezeRotation").name("Freeze Rotation"),e.add(this.config.capture,"runCalibration").name("Run Calibration"),e.add(this.config.capture,"filenamePrefix").name("Filename Prefix"),this.actions={startCapture:()=>this.handleStartCapture(),abortCapture:()=>this.handleAbortCapture(),runCalibrationOnly:()=>this.handleCalibrationOnly()},e.add(this.actions,"startCapture").name("▶  Start Capture"),e.add(this.actions,"abortCapture").name("■  Abort Capture"),e.add(this.actions,"runCalibrationOnly").name("🔬  Run Calibration Only")}handleStartCapture(){if(!this.config.capture.enabled){this.statusObj.status="Enable capture mode first";return}const e=this.app.captureManager;if(!e){this.statusObj.status="CaptureManager not ready";return}if(e.isCapturing){this.statusObj.status="Capture already running";return}this.statusObj.status="Starting...",e.startCapture().then(()=>{this.statusObj.status="Complete!"}).catch(t=>{this.statusObj.status=`Error: ${t.message}`}),this.pollProgress()}handleAbortCapture(){const e=this.app.captureManager;e&&e.isCapturing&&(e.abort(),this.statusObj.status="Aborted")}handleCalibrationOnly(){const e=this.app.captureManager;if(!e){this.statusObj.status="CaptureManager not ready";return}this.statusObj.status="Calibrating...";const t=e.runCalibration();this.statusObj.status=t?"Calibration PASSED":"Calibration FAILED (see console)"}onCaptureModeToggle(e){if(e){this._savedCanvasState={isFullscreen:this.config.canvas.isFullscreen,width:this.config.canvas.width,height:this.config.canvas.height,pointSize:this.config.render.pointSize},this.config.canvas.isFullscreen=!1,this.config.canvas.width=1280,this.config.canvas.height=720,this.config.render.pointSize=1,this.config.capture.fps=30,this.app.checkCanvasSizeChange(),this.app.refreshGUIControllers();const t=this.config.capture.outputScale;console.log(`[Capture] Capture mode ON — canvas set to 1280×720 @pointSize 1 (${t}× upscale → ${1280*t}×${720*t})`)}else this._savedCanvasState&&(this.config.canvas.isFullscreen=this._savedCanvasState.isFullscreen,this.config.canvas.width=this._savedCanvasState.width,this.config.canvas.height=this._savedCanvasState.height,this.config.render.pointSize=this._savedCanvasState.pointSize,this._savedCanvasState=null),this.app.checkCanvasSizeChange(),this.app.refreshGUIControllers(),console.log("[Capture] Capture mode OFF — canvas restored")}pollProgress(){const e=this.app.captureManager;if(!e||!e.isCapturing)return;const t=e.currentFrame,n=e.totalFrames,i=n>0?Math.round(t/n*100):0;this.statusObj.status=`Capturing: ${t}/${n} (${i}%)`,requestAnimationFrame(()=>this.pollProgress())}}class km{constructor(e,t,n,i,a,r=null){this.config=e,this.cameraManager=t,this.app=n,this.settingsManager=i,this.presetManager=a,this.sceneManager=r,this.postProcessingManager=null,this.densityCalculator=null,this.analysisFolder=null,this.pointCloudFolder=null,this.setupGUI(),this.gui.close(),Ln.toggleHide()}setPostProcessingManager(e){this.postProcessingManager=e,this.conwayFolder&&(this.conwayFolder.postProcessingManager=e),e&&e.renderer&&this.initializeAnalysisSystem(e.renderer)}setDensityCalculator(e){this.densityCalculator=e,this.pointCloudFolder&&this.pointCloudFolder.setDensityCalculator(e)}initializeAnalysisSystem(e){this.analysisFolder=new Nm(this.gui,this.config),console.log("Analysis system initialized")}setupGUI(){Ln.DEFAULT_WIDTH=300,Ln.TEXT_CLOSED="Close Controls",Ln.TEXT_OPEN="Open Controls",Ln.prototype.getName=function(){return this.name||"Controls"},Ln.prototype.getNameWidth=function(){return 55},this.gui=new Ln,new Lm(this.gui,this.config,this.app),new Dm(this.gui,this.config,this.cameraManager),new Fm(this.gui,this.config),this.pointCloudFolder=new Bm(this.gui,this.config,this.sceneManager),this.settingsFolder=new Om(this.gui,this.config,this.settingsManager,this.presetManager),this.conwayFolder=new Im(this.gui,this.config,this.postProcessingManager),this.captureFolder=new zm(this.gui,this.config,this.app),this.setupAutoSave()}setupAutoSave(){const e=this.settingsManager;this.originalListen=this.gui.listen,this.gui.listen=function(){const t=this.originalListen?this.originalListen.call(this):this;return e&&e.scheduleAutoSave&&e.scheduleAutoSave(),t},this.hookControllerEvents(this.gui)}hookControllerEvents(e){e.__controllers&&e.__controllers.forEach(t=>{const n=t.onFinishChange,i=this.settingsManager;t.onFinishChange=function(a){const r=n?n.call(this,a):this;return i&&i.scheduleAutoSave&&i.scheduleAutoSave(),r}}),e.__folders&&Object.values(e.__folders).forEach(t=>{this.hookControllerEvents(t)})}randomizeConwayParams(){this.conwayFolder&&this.conwayFolder.randomizeConwayParams()}initializePointCloudGUI(){this.pointCloudFolder&&this.pointCloudFolder.initializeWithModel()}}const Hm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gm=new Xi(-1,1,1,-1,0,1),Va=new Lt;Va.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3));Va.setAttribute("uv",new et([0,2,0,0,2,0],2));class Vm{constructor(e){this._mesh=new vt(Va,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wm extends Ds{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nl.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Io extends Ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class Xm extends Ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $m{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wm(Hm),this.copyPass.material.blending=hn,this.clock=new dl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Io!==void 0&&(r instanceof Io?n=!0:r instanceof Xm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qm extends Ds{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}class Ym{constructor(e){this.renderer=e,this.pools=new Map,this.activeTargets=new Set,this.currentRenderTarget=null,this.renderTargetSwitches=0,this.metrics={totalCreated:0,totalReused:0,totalDisposed:0,poolHits:0,poolMisses:0,stateChanges:0,stateChangesAvoided:0},this.config={maxPoolSize:20,maxTotalTargets:50,cleanupInterval:5e3,maxIdleTime:1e4},this.startCleanupTimer()}generateConfigHash(e,t,n={}){const i={width:e,height:t,minFilter:n.minFilter||ct,magFilter:n.magFilter||ct,format:n.format||_t,type:n.type||Ht,encoding:n.encoding||Hi,depthBuffer:n.depthBuffer!==!1,stencilBuffer:n.stencilBuffer!==!1,samples:n.samples||0};return JSON.stringify(i)}acquire(e,t,n={}){const i=this.generateConfigHash(e,t,n);this.pools.has(i)||this.pools.set(i,{available:[],config:{width:e,height:t,options:n},lastUsed:Date.now()});const a=this.pools.get(i);a.lastUsed=Date.now();let r;return a.available.length>0?(r=a.available.pop(),r.lastUsed=Date.now(),this.metrics.totalReused++,this.metrics.poolHits++):(r=new un(e,t,n),r.configHash=i,r.createdAt=Date.now(),r.lastUsed=Date.now(),this.metrics.totalCreated++,this.metrics.poolMisses++),this.activeTargets.add(r),r}release(e){if(!e||!this.activeTargets.has(e))return;this.activeTargets.delete(e),e.lastUsed=Date.now();const t=e.configHash;if(t&&this.pools.has(t)){const n=this.pools.get(t);if(n.available.length<this.config.maxPoolSize){n.available.push(e);return}}this.disposeTarget(e)}setRenderTarget(e){if(this.currentRenderTarget===e){this.metrics.stateChangesAvoided++;return}this.renderTargetSwitches++,this.metrics.stateChanges++,this.renderer.setRenderTarget(e),this.currentRenderTarget=e,e&&this.activeTargets.has(e)&&(e.lastUsed=Date.now())}batchRenderOperations(e){const t=new Map;e.forEach((i,a)=>{const r=i.target;t.has(r)||t.set(r,[]),t.get(r).push({...i,originalIndex:a})});const n=new Array(e.length);for(const[i,a]of t)this.setRenderTarget(i),a.forEach(r=>{const o=r.execute();n[r.originalIndex]=o});return n}createTarget(e,t,n={}){return this.acquire(e,t,n)}resizeTarget(e,t,n){if(!e)return null;if(e.width===t&&e.height===n)return e;const i={minFilter:e.texture.minFilter,magFilter:e.texture.magFilter,format:e.texture.format,type:e.texture.type,encoding:e.texture.encoding,depthBuffer:e.depthBuffer,stencilBuffer:e.stencilBuffer,samples:e.samples};return this.release(e),this.acquire(t,n,i)}disposeTarget(e){e&&(e.dispose(),this.activeTargets.delete(e),this.metrics.totalDisposed++)}cleanup(){const e=Date.now(),n=this.getTotalTargetCount()>this.config.maxTotalTargets?this.config.maxIdleTime/2:this.config.maxIdleTime;for(const[i,a]of this.pools)a.available=a.available.filter(r=>e-r.lastUsed>n?(this.disposeTarget(r),!1):!0),a.available.length===0&&e-a.lastUsed>this.config.maxIdleTime&&this.pools.delete(i)}getTotalTargetCount(){let e=this.activeTargets.size;for(const t of this.pools.values())e+=t.available.length;return e}startCleanupTimer(){this.cleanupTimer=setInterval(()=>{this.cleanup()},this.config.cleanupInterval)}getMetrics(){return{...this.metrics,totalTargets:this.getTotalTargetCount(),activeTargets:this.activeTargets.size,poolCount:this.pools.size,renderTargetSwitches:this.renderTargetSwitches}}resetMetrics(){this.metrics={totalCreated:0,totalReused:0,totalDisposed:0,poolHits:0,poolMisses:0,stateChanges:0,stateChangesAvoided:0},this.renderTargetSwitches=0}updateConfig(e){this.config={...this.config,...e}}dispose(){this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null);for(const e of this.activeTargets)this.disposeTarget(e);this.activeTargets.clear();for(const e of this.pools.values())e.available.forEach(t=>this.disposeTarget(t));this.pools.clear(),this.currentRenderTarget=null}}class jm{constructor(e,t){this.renderer=e,this.renderTargetPool=t,this.firstFrame=!0,this.frameCount=0,this.targetA=null,this.targetB=null,this.filteredSceneTarget=null,this.cachedResolution=null}setupRenderTargets(e,t){const n={minFilter:st,magFilter:st,format:_t,type:jt,stencilBuffer:!1};this.targetA=this.renderTargetPool.acquire(e,t,n),this.targetB=this.renderTargetPool.acquire(e,t,n);const i={minFilter:ct,magFilter:ct,format:_t,encoding:Hi,type:Ht,stencilBuffer:!1};this.filteredSceneTarget=this.renderTargetPool.acquire(e,t,i)}resize(e,t){const n=!this.targetA||this.targetA.width!==e||this.targetA.height!==t;if(n){const i=this.targetA,a=this.targetB,r={minFilter:st,magFilter:st,format:_t,type:jt,stencilBuffer:!1};this.targetA=this.renderTargetPool.acquire(e,t,r),this.targetB=this.renderTargetPool.acquire(e,t,r),i&&this.renderTargetPool.release(i),a&&this.renderTargetPool.release(a),this.filteredSceneTarget=this.renderTargetPool.resizeTarget(this.filteredSceneTarget,e,t),this.clearState()}return n}clearState(){this.firstFrame=!0,this.frameCount=0}swapBuffers(){if(!this.targetA||!this.targetB){console.warn("MNCA: Cannot swap buffers - missing render targets");return}const e=this.targetA;this.targetA=this.targetB,this.targetB=e}secondsToFrames(e){return Math.floor(e*30)}handleFirstFrame(e,t){return this.firstFrame?(e.material.uniforms.tScene.value=this.filteredSceneTarget.texture,this.renderTargetPool.setRenderTarget(this.targetA),this.renderer.render(e.scene,t),this.firstFrame=!1,!0):!1}computeStep(e,t,n){e.material.uniforms.tPrevState.value=this.targetA.texture,e.material.uniforms.tScene.value=n,this.renderTargetPool.setRenderTarget(this.targetB),this.renderer.render(e.scene,t)}copyStep(e,t){e.material.uniforms.tPrevState.value=this.targetA.texture,this.renderTargetPool.setRenderTarget(this.targetB),this.renderer.render(e.scene,t)}forceRenderPassUpdate(e,t,n,i){e.material.uniforms.tScene.value=this.filteredSceneTarget.texture,t.material.uniforms.tScene.value=this.filteredSceneTarget.texture,i||this.firstFrame?(this.renderTargetPool.setRenderTarget(this.targetB),this.renderer.render(e.scene,n)):(t.material.uniforms.tMNCA.value=this.targetA.texture,this.renderTargetPool.setRenderTarget(this.targetB),this.renderer.render(t.scene,n)),this.swapBuffers()}incrementFrame(){this.frameCount++}getFrameCount(){return this.frameCount}isFirstFrame(){return this.firstFrame}getTargets(){return{targetA:this.targetA,targetB:this.targetB,filteredSceneTarget:this.filteredSceneTarget}}dispose(){this.targetA&&(this.renderTargetPool.release(this.targetA),this.targetA=null),this.targetB&&(this.renderTargetPool.release(this.targetB),this.targetB=null),this.filteredSceneTarget&&(this.renderTargetPool.release(this.filteredSceneTarget),this.filteredSceneTarget=null)}}const Km={uniforms:{tPrevState:{value:null},tScene:{value:null},resolution:{value:null},innerRadius:{value:1.5},outerRadius:{value:3},birthMin:{value:2},birthMax:{value:3},birthOuterLimit:{value:12},deathMin:{value:2},deathMax:{value:4},deathOuterLimit:{value:9},colorSaturation:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tPrevState;
        uniform sampler2D tScene;
        uniform vec2 resolution;
        uniform float innerRadius;
        uniform float outerRadius;
        uniform float birthMin;
        uniform float birthMax;
        uniform float birthOuterLimit;
        uniform float deathMin;
        uniform float deathMax;
        uniform float deathOuterLimit;
        uniform float colorSaturation;
        varying vec2 vUv;

        struct Cell {
            float state;
            vec3 color;
        };

        // Get luminance from RGB color
        float getLuminance(vec3 color) {
            return dot(color, vec3(0.299, 0.587, 0.114));
        }

        // Convert RGB to HSL
        vec3 rgb2hsl(vec3 c) {
            float maxColor = max(max(c.r, c.g), c.b);
            float minColor = min(min(c.r, c.g), c.b);
            float delta = maxColor - minColor;
            
            vec3 hsl = vec3(0.0, 0.0, (maxColor + minColor) / 2.0);
            
            if (delta > 0.0) {
                if (hsl.z < 0.5) {
                    hsl.y = delta / (maxColor + minColor);
                } else {
                    hsl.y = delta / (2.0 - maxColor - minColor);
                }
                
                vec3 deltaRGB;
                deltaRGB.r = (((maxColor - c.r) / 6.0) + (delta / 2.0)) / delta;
                deltaRGB.g = (((maxColor - c.g) / 6.0) + (delta / 2.0)) / delta;
                deltaRGB.b = (((maxColor - c.b) / 6.0) + (delta / 2.0)) / delta;
                
                if (c.r == maxColor) {
                    hsl.x = deltaRGB.b - deltaRGB.g;
                } else if (c.g == maxColor) {
                    hsl.x = (1.0 / 3.0) + deltaRGB.r - deltaRGB.b;
                } else {
                    hsl.x = (2.0 / 3.0) + deltaRGB.g - deltaRGB.r;
                }
                
                if (hsl.x < 0.0) hsl.x += 1.0;
                if (hsl.x > 1.0) hsl.x -= 1.0;
            }
            
            return hsl;
        }

        // Helper for hsl2rgb
        float hue2rgb(float p, float q, float t) {
            if (t < 0.0) t += 1.0;
            if (t > 1.0) t -= 1.0;
            if (t < 1.0/6.0) return p + (q - p) * 6.0 * t;
            if (t < 1.0/2.0) return q;
            if (t < 2.0/3.0) return p + (q - p) * (2.0/3.0 - t) * 6.0;
            return p;
        }

        // Convert HSL to RGB
        vec3 hsl2rgb(vec3 hsl) {
            vec3 rgb;
            
            if (hsl.y == 0.0) {
                rgb = vec3(hsl.z); // Luminance
            } else {
                float q = hsl.z < 0.5 ? hsl.z * (1.0 + hsl.y) : hsl.z + hsl.y - hsl.z * hsl.y;
                float p = 2.0 * hsl.z - q;
                
                rgb.r = hue2rgb(p, q, hsl.x + 1.0/3.0);
                rgb.g = hue2rgb(p, q, hsl.x);
                rgb.b = hue2rgb(p, q, hsl.x - 1.0/3.0);
            }
            
            return rgb;
        }

        // Adjust color saturation
        vec3 adjustSaturation(vec3 color, float saturation) {
            vec3 hsl = rgb2hsl(color);
            hsl.y *= saturation;
            return hsl2rgb(hsl);
        }


        // Random function
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        Cell getCell(vec2 uv) {
            vec4 data = texture2D(tPrevState, uv);
            return Cell(data.r, vec3(data.g, data.b, data.a));
        }

        struct NeighborInfo {
            float count;
            vec3 color;
            bool found;
        };

        NeighborInfo getRandomNeighbor(vec2 uv, float radius) {
            vec2 texel = 1.0 / resolution;
            float count = 0.0;
            vec3 selectedColor = vec3(0.0);
            bool found = false;
            float selectedRandom = 0.0;
            
            // First pass to count neighbors
            for(float x = -radius; x <= radius; x++) {
                for(float y = -radius; y <= radius; y++) {
                    vec2 offset = vec2(x, y) * texel;
                    float dist = length(vec2(x, y));
                    if(dist <= radius && dist > 0.0) {
                        Cell neighbor = getCell(uv + offset);
                        if (neighbor.state > 0.5) {
                            count += 1.0;
                            // Reservoir sampling
                            float r = random(uv + offset);
                            if (!found || r > selectedRandom) {
                                selectedColor = neighbor.color;
                                selectedRandom = r;
                                found = true;
                            }
                        }
                    }
                }
            }
            
            return NeighborInfo(count, selectedColor, found);
        }

        void main() {
            vec2 uv = vUv;
            Cell currentCell = getCell(uv);
            vec3 sceneColor = texture2D(tScene, uv).rgb;
            
            // Get neighbor information for inner and outer radius
            NeighborInfo inner = getRandomNeighbor(uv, innerRadius);
            NeighborInfo outer = getRandomNeighbor(uv, outerRadius);
            
            // Apply state transition rules
            float nextState = currentCell.state;
            vec3 nextColor = currentCell.color;
            
            if(currentCell.state > 0.5) {
                // Currently alive - keep existing color
                if(inner.count < deathMin || inner.count > deathMax || outer.count > deathOuterLimit) {
                    nextState = 0.0;
                    nextColor = vec3(0.0);
                }
            } else {
                // Currently dead
                if(inner.count >= birthMin && inner.count <= birthMax && outer.count < birthOuterLimit) {
                    nextState = 1.0;
                    
                    // Use filtered scene color (HSL filtering already applied at scene level)
                    // If scene color is black (filtered out), use neighbor color if available
                    if (getLuminance(sceneColor) > 0.01) {
                        // Scene pixel has color (passed HSL filter), use it with saturation adjustment
                        nextColor = adjustSaturation(sceneColor, colorSaturation);
                    } else if (inner.found) {
                        // Scene is black (filtered out), use neighbor's color
                        nextColor = inner.color;
                    } else {
                        // No valid colors available, stay dead
                        nextState = 0.0;
                    }
                }
            }
            
            gl_FragColor = vec4(nextState, nextColor);
        }
    `},Zm={uniforms:{tState:{value:null},tScene:{value:null},time:{value:0},resolution:{value:null},transparentBackground:{value:!0},colorBlend:{value:.7},renderPassInterval:{value:1200},dissolveStart:{value:600},dissolveTime:{value:60},renderPassTimer:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tState;
        uniform sampler2D tScene;
        uniform float time;
        uniform vec2 resolution;
        uniform bool transparentBackground;
        uniform float colorBlend;
        uniform float renderPassInterval;
        uniform float dissolveStart;
        uniform float dissolveTime;
        uniform float renderPassTimer;
        varying vec2 vUv;

        // Stable random function - same input always gives same output
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {
            vec4 stateData = texture2D(tState, vUv);
            float state = stateData.r;
            vec3 cellColor = vec3(stateData.g, stateData.b, stateData.a);
            vec3 sceneColor = texture2D(tScene, vUv).rgb;
            
            // Calculate dissolve factor
            float dissolveProgress = 0.0;
            
            if (renderPassTimer > dissolveStart && dissolveTime > 0.0) {
                // Calculate how far into the dissolve effect we are (0 to 1)
                dissolveProgress = (renderPassTimer - dissolveStart) / dissolveTime;
                dissolveProgress = clamp(dissolveProgress, 0.0, 1.0);
                
                // Get a stable random value for this pixel
                float noiseValue = random(vUv);
                
                // If the noise value is less than our progress, remove the pixel
                // This ensures once a pixel is removed, it stays removed
                if (noiseValue < dissolveProgress) {
                    state = 0.0;
                }
            }
            
            // Simple blend between background and cell color
            vec3 backgroundColor = transparentBackground ? sceneColor : vec3(0.0);
            vec3 finalColor = mix(backgroundColor, cellColor, state * colorBlend);
            
            gl_FragColor = vec4(finalColor, 1.0);
            #include <colorspace_fragment>
        }
    `},Jm={uniforms:{tPrevState:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tPrevState;
        varying vec2 vUv;

        void main() {
            gl_FragColor = texture2D(tPrevState, vUv);
        }
    `},Qm={uniforms:{tScene:{value:null},luminanceThreshold:{value:.01}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tScene;
        uniform float luminanceThreshold;
        varying vec2 vUv;

        float getLuminance(vec3 color) {
            return dot(color, vec3(0.299, 0.587, 0.114));
        }

        void main() {
            vec4 sceneColor = texture2D(tScene, vUv);
            float luminance = getLuminance(sceneColor.rgb);
            
            // Use configurable threshold for initial state
            float state = step(luminanceThreshold, luminance);
            
            // Store state in r, exact scene color in gba
            gl_FragColor = vec4(state, sceneColor.rgb);
        }
    `},eg={uniforms:{tMNCA:{value:null},tScene:{value:null},luminanceThreshold:{value:.01}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tMNCA;
        uniform sampler2D tScene;
        uniform float luminanceThreshold;
        varying vec2 vUv;

        float getLuminance(vec3 color) {
            return dot(color, vec3(0.299, 0.587, 0.114));
        }

        void main() {
            vec4 mncaColor = texture2D(tMNCA, vUv);
            vec4 sceneColor = texture2D(tScene, vUv);
            
            float sceneLuminance = getLuminance(sceneColor.rgb);
            float sceneState = step(luminanceThreshold, sceneLuminance);
            
            // Blend MNCA state with scene state
            float blendedState = max(mncaColor.r, sceneState);
            
            // Store state in r, exact scene color in gba for active pixels
            gl_FragColor = vec4(blendedState, sceneState > 0.5 ? sceneColor.rgb : mncaColor.gba);
        }
    `},tg={uniforms:{tScene:{value:null},hueFilter:{value:.5},hueRange:{value:1},saturationFilter:{value:.5},saturationRange:{value:1},luminanceFilter:{value:.5},luminanceRange:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tScene;
        // HSL filter uniforms
        uniform float hueFilter;
        uniform float hueRange;
        uniform float saturationFilter;
        uniform float saturationRange;
        uniform float luminanceFilter;
        uniform float luminanceRange;
        varying vec2 vUv;

        // Convert RGB to HSL
        vec3 rgb2hsl(vec3 c) {
            float maxColor = max(max(c.r, c.g), c.b);
            float minColor = min(min(c.r, c.g), c.b);
            float delta = maxColor - minColor;
            
            vec3 hsl = vec3(0.0, 0.0, (maxColor + minColor) / 2.0);
            
            if (delta > 0.0) {
                if (hsl.z < 0.5) {
                    hsl.y = delta / (maxColor + minColor);
                } else {
                    hsl.y = delta / (2.0 - maxColor - minColor);
                }
                
                vec3 deltaRGB;
                deltaRGB.r = (((maxColor - c.r) / 6.0) + (delta / 2.0)) / delta;
                deltaRGB.g = (((maxColor - c.g) / 6.0) + (delta / 2.0)) / delta;
                deltaRGB.b = (((maxColor - c.b) / 6.0) + (delta / 2.0)) / delta;
                
                if (c.r == maxColor) {
                    hsl.x = deltaRGB.b - deltaRGB.g;
                } else if (c.g == maxColor) {
                    hsl.x = (1.0 / 3.0) + deltaRGB.r - deltaRGB.b;
                } else {
                    hsl.x = (2.0 / 3.0) + deltaRGB.g - deltaRGB.r;
                }
                
                if (hsl.x < 0.0) hsl.x += 1.0;
                if (hsl.x > 1.0) hsl.x -= 1.0;
            }
            
            return hsl;
        }

        // Check if color passes HSL filter
        bool passesHSLFilter(vec3 color) {
            vec3 hsl = rgb2hsl(color);
            
            // Check each component individually
            bool passesHue = true;
            bool passesSaturation = true;
            bool passesLuminance = true;
            
            // Hue check (with wrapping)
            if (hueRange < 1.0) {
                float hueDist = abs(hsl.x - hueFilter);
                hueDist = min(hueDist, 1.0 - hueDist); // Handle hue wrapping
                passesHue = hueDist <= (hueRange * 0.5); // Range is diameter, so use half
            }
            
            // Saturation check
            if (saturationRange < 1.0) {
                float satDist = abs(hsl.y - saturationFilter);
                passesSaturation = satDist <= (saturationRange * 0.5);
            }
            
            // Luminance check
            if (luminanceRange < 1.0) {
                float lumDist = abs(hsl.z - luminanceFilter);
                passesLuminance = lumDist <= (luminanceRange * 0.5);
            }
            
            return passesHue && passesSaturation && passesLuminance;
        }

        void main() {
            vec3 sceneColor = texture2D(tScene, vUv).rgb;
            
            // Apply HSL filter - output black for filtered pixels, original color for passing pixels
            if (passesHSLFilter(sceneColor)) {
                gl_FragColor = vec4(sceneColor, 1.0);
            } else {
                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Black for filtered pixels
            }
        }
    `};class ng{constructor(){this.cache=new Map,this.dirtyFlags=new Map,this.stats={totalUpdates:0,cachedUpdates:0,actualUpdates:0}}getMaterialId(e){return e._uniformCacheId||(e._uniformCacheId=`material_${Math.random().toString(36).substr(2,9)}`),e._uniformCacheId}initMaterial(e){const t=this.getMaterialId(e);this.cache.has(t)||(this.cache.set(t,new Map),this.dirtyFlags.set(t,new Set))}valuesEqual(e,t){if(e===t)return!0;if(e==null||t==null)return e===t;if(e.isVector2&&t.isVector2)return e.x===t.x&&e.y===t.y;if(e.isVector3&&t.isVector3)return e.x===t.x&&e.y===t.y&&e.z===t.z;if(e.isVector4&&t.isVector4)return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w;if(e.isColor&&t.isColor)return e.r===t.r&&e.g===t.g&&e.b===t.b;if(e.isTexture&&t.isTexture)return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!this.valuesEqual(e[n],t[n]))return!1;return!0}return!1}cloneValue(e){return e==null?e:e.isVector2||e.isVector3||e.isVector4||e.isColor?e.clone():e}updateUniform(e,t,n){this.stats.totalUpdates++;const i=this.getMaterialId(e);this.initMaterial(e);const a=this.cache.get(i),r=a.get(t);return r!==void 0&&this.valuesEqual(r,n)?(this.stats.cachedUpdates++,!1):(a.set(t,this.cloneValue(n)),e.uniforms[t]?(e.uniforms[t].value=n,this.stats.actualUpdates++,!0):!1)}forceUpdateUniform(e,t,n){const i=this.getMaterialId(e);return this.initMaterial(e),this.cache.get(i).set(t,this.cloneValue(n)),e.uniforms[t]?(e.uniforms[t].value=n,this.stats.actualUpdates++,!0):!1}markDirty(e,t){const n=this.getMaterialId(e);this.initMaterial(e),this.dirtyFlags.get(n).add(t)}markAllDirty(e){const t=this.getMaterialId(e);this.initMaterial(e),this.cache.get(t).clear()}isDirty(e,t){const n=this.getMaterialId(e),i=this.dirtyFlags.get(n);return i?i.has(t):!1}clearDirty(e,t){const n=this.getMaterialId(e),i=this.dirtyFlags.get(n);i&&i.delete(t)}getStats(){const e=this.stats.totalUpdates>0?(this.stats.cachedUpdates/this.stats.totalUpdates*100).toFixed(1):0;return{...this.stats,hitRate:`${e}%`,materialsTracked:this.cache.size}}resetStats(){this.stats={totalUpdates:0,cachedUpdates:0,actualUpdates:0}}clear(){this.cache.clear(),this.dirtyFlags.clear(),this.resetStats()}removeMaterial(e){const t=this.getMaterialId(e);this.cache.delete(t),this.dirtyFlags.delete(t)}}class ig{constructor(e){this.renderer=e,this.uniformCache=new ng,this.geometry=null,this.orthoCamera=null,this.computeScene=null,this.computeMaterial=null,this.displayScene=null,this.displayMaterial=null,this.copyScene=null,this.copyMaterial=null,this.initialStateScene=null,this.initialStateMaterial=null,this.blendScene=null,this.blendMaterial=null,this.hslFilterScene=null,this.hslFilterMaterial=null,this.cachedResolution=null}setupSharedGeometry(){this.geometry=new Wi(2,2),this.orthoCamera=new Xi(-1,1,1,-1,0,1)}createShaderPass(e){const t=new Na,n=new Vt(e),i=new vt(this.geometry,n);return t.add(i),{scene:t,material:n}}setupPasses(e,t){const n=this.createShaderPass(Km);this.computeScene=n.scene,this.computeMaterial=n.material,this.computeMaterial.uniforms.resolution.value=new Re(e,t);const i=this.createShaderPass(Zm);this.displayScene=i.scene,this.displayMaterial=i.material,this.displayMaterial.uniforms.resolution.value=new Re(e,t);const a=this.createShaderPass(Jm);this.copyScene=a.scene,this.copyMaterial=a.material;const r=this.createShaderPass(Qm);this.initialStateScene=r.scene,this.initialStateMaterial=r.material;const o=this.createShaderPass(eg);this.blendScene=o.scene,this.blendMaterial=o.material;const l=this.createShaderPass(tg);this.hslFilterScene=l.scene,this.hslFilterMaterial=l.material}updateResolution(e,t){this.cachedResolution||(this.cachedResolution=new Re),this.cachedResolution.set(e,t),this.computeMaterial.uniforms.resolution.value.copy(this.cachedResolution),this.displayMaterial.uniforms.resolution.value.copy(this.cachedResolution)}updateComputeUniforms(e){this.uniformCache.updateUniform(this.computeMaterial,"innerRadius",e.conway.innerRadius),this.uniformCache.updateUniform(this.computeMaterial,"outerRadius",e.conway.outerRadius),this.uniformCache.updateUniform(this.computeMaterial,"birthMin",e.conway.birthMin),this.uniformCache.updateUniform(this.computeMaterial,"birthMax",e.conway.birthMax),this.uniformCache.updateUniform(this.computeMaterial,"birthOuterLimit",e.conway.birthOuterLimit),this.uniformCache.updateUniform(this.computeMaterial,"deathMin",e.conway.deathMin),this.uniformCache.updateUniform(this.computeMaterial,"deathMax",e.conway.deathMax),this.uniformCache.updateUniform(this.computeMaterial,"deathOuterLimit",e.conway.deathOuterLimit),this.uniformCache.updateUniform(this.computeMaterial,"colorSaturation",e.conway.colorSaturation)}updateDisplayUniforms(e,t,n,i){this.uniformCache.updateUniform(this.displayMaterial,"transparentBackground",e.conway.transparentBackground),this.uniformCache.updateUniform(this.displayMaterial,"colorBlend",t);const a=i(e.conway.renderPassInterval),r=i(e.conway.dissolveTime),o=Math.max(0,a-r);this.uniformCache.updateUniform(this.displayMaterial,"renderPassInterval",a),this.uniformCache.updateUniform(this.displayMaterial,"dissolveStart",o),this.uniformCache.updateUniform(this.displayMaterial,"dissolveTime",r),this.uniformCache.forceUpdateUniform(this.displayMaterial,"renderPassTimer",n)}updateHSLFilterUniforms(e){this.uniformCache.updateUniform(this.hslFilterMaterial,"hueFilter",e.conway.hueFilter),this.uniformCache.updateUniform(this.hslFilterMaterial,"hueRange",e.conway.hueRange),this.uniformCache.updateUniform(this.hslFilterMaterial,"saturationFilter",e.conway.saturationFilter),this.uniformCache.updateUniform(this.hslFilterMaterial,"saturationRange",e.conway.saturationRange),this.uniformCache.updateUniform(this.hslFilterMaterial,"luminanceFilter",e.conway.luminanceFilter),this.uniformCache.updateUniform(this.hslFilterMaterial,"luminanceRange",e.conway.luminanceRange)}updateLuminanceThresholds(e){this.uniformCache.updateUniform(this.initialStateMaterial,"luminanceThreshold",e.conway.luminanceThreshold),this.uniformCache.updateUniform(this.blendMaterial,"luminanceThreshold",e.conway.luminanceThreshold)}updateDisplayTime(e){this.displayMaterial.uniforms.time.value=e}updateDisplayTextures(e,t){this.displayMaterial.uniforms.tState.value=e,this.displayMaterial.uniforms.tScene.value=t}invalidateUniformCache(){this.uniformCache.markAllDirty(this.computeMaterial),this.uniformCache.markAllDirty(this.displayMaterial),this.uniformCache.markAllDirty(this.hslFilterMaterial),this.uniformCache.markAllDirty(this.initialStateMaterial),this.uniformCache.markAllDirty(this.blendMaterial)}getUniformCacheStats(){return this.uniformCache.getStats()}resetUniformCacheStats(){this.uniformCache.resetStats()}getMaterials(){return{compute:{scene:this.computeScene,material:this.computeMaterial},display:{scene:this.displayScene,material:this.displayMaterial},copy:{scene:this.copyScene,material:this.copyMaterial},initialState:{scene:this.initialStateScene,material:this.initialStateMaterial},blend:{scene:this.blendScene,material:this.blendMaterial},hslFilter:{scene:this.hslFilterScene,material:this.hslFilterMaterial}}}getOrthoCamera(){return this.orthoCamera}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),[this.computeMaterial,this.displayMaterial,this.copyMaterial,this.initialStateMaterial,this.blendMaterial,this.hslFilterMaterial].forEach(t=>{t&&t.dispose()}),this.computeScene=null,this.computeMaterial=null,this.displayScene=null,this.displayMaterial=null,this.copyScene=null,this.copyMaterial=null,this.initialStateScene=null,this.initialStateMaterial=null,this.blendScene=null,this.blendMaterial=null,this.hslFilterScene=null,this.hslFilterMaterial=null,this.uniformCache&&(this.uniformCache.clear(),this.uniformCache=null)}}class sg{constructor(e,t){this.config=e,this.guiManager=t,this.eventStartTime=0,this.currentTime=0,this.eventElapsed=0,this.manualRandomizationActive=!1,this.lastShaderState=!1,this.isFirstEventCycle=!0}updateTiming(e){this.currentTime=e/30,this.eventElapsed=this.currentTime-this.eventStartTime}isShaderOn(){if(this.isFirstEventCycle)return this.lastShaderState=!1,!1;const e=this.eventElapsed<this.config.conway.shaderOnTime;return this.lastShaderState=e,e}getRenderPassCycle(e,t){const n=t(this.config.conway.renderPassInterval);return e%n}handleEventTimer(e){if(!this.guiManager||this.manualRandomizationActive)return!1;if(this.config.conway.autoRandomize&&this.eventElapsed>=this.config.conway.eventTime){console.log(`Event timer triggered: elapsed=${this.eventElapsed.toFixed(1)}s, eventTime=${this.config.conway.eventTime.toFixed(1)}s`),this.isFirstEventCycle&&(this.isFirstEventCycle=!1,console.log("First event cycle completed - shader will be active in next cycle")),this.notifyRulesetEnd(),this.guiManager.randomizeConwayParams();const t=1+Math.random()*2;this.config.update("conway.dissolveTime",t);const n=20+Math.random()*70;return this.config.update("conway.renderPassInterval",n),console.log(`Auto-randomization: newRefreshRate=${n.toFixed(1)}s, newDissolveTime=${t.toFixed(1)}s`),this.guiManager.conwayFolder&&this.guiManager.conwayFolder.timingControllers.dissolveTime&&this.guiManager.conwayFolder.timingControllers.dissolveTime.setValue(t),this.guiManager.conwayFolder&&this.guiManager.conwayFolder.timingControllers.renderPassInterval&&this.guiManager.conwayFolder.timingControllers.renderPassInterval.setValue(n),this.notifyNewRuleset(),this.eventStartTime=0,!0}return!1}onManualRandomization(){this.manualRandomizationActive=!0,this.isFirstEventCycle=!1,this.eventStartTime=0,setTimeout(()=>{this.manualRandomizationActive=!1},100),console.log("Manual randomization: Event timer reset, shader should be active")}resetEventStartTime(){this.eventStartTime=0}updateGUI(){this.guiManager&&this.guiManager.conwayFolder&&this.guiManager.conwayFolder.shaderState&&(this.guiManager.conwayFolder.shaderState.countdown=`${this.eventElapsed.toFixed(1)}s`,this.guiManager.conwayFolder.shaderState.status=this.eventElapsed<this.config.conway.shaderOnTime?"ON":"OFF")}notifyNewRuleset(){if(this.guiManager&&this.guiManager.analysisFolder){const e={innerRadius:this.config.conway.innerRadius,outerRadius:this.config.conway.outerRadius,birthMin:this.config.conway.birthMin,birthMax:this.config.conway.birthMax,birthOuterLimit:this.config.conway.birthOuterLimit,deathMin:this.config.conway.deathMin,deathMax:this.config.conway.deathMax,deathOuterLimit:this.config.conway.deathOuterLimit,hueFilter:this.config.conway.hueFilter,hueRange:this.config.conway.hueRange,saturationFilter:this.config.conway.saturationFilter,saturationRange:this.config.conway.saturationRange,luminanceFilter:this.config.conway.luminanceFilter,luminanceRange:this.config.conway.luminanceRange},t={renderPassInterval:this.config.conway.renderPassInterval,rCycles:this.config.conway.rCycles,shaderOnTime:this.config.conway.shaderOnTime,eventTime:this.config.conway.eventTime,dissolveTime:this.config.conway.dissolveTime};this.guiManager.analysisFolder.onNewRuleset(e,t)}}notifyRulesetEnd(){this.guiManager&&this.guiManager.analysisFolder&&this.guiManager.analysisFolder.onRulesetEnd()}getEventElapsed(){return this.eventElapsed}getCurrentTime(){return this.currentTime}}class ag{constructor(e,t,n,i,a){this.renderer=e,this.scene=t,this.camera=n,this.config=i,this.guiManager=a,this.renderTargetPool=new Ym(e),this.mncaState=new jm(e,this.renderTargetPool),this.shaderPass=new ig(e),this.eventTiming=new sg(i,a);const r=e.domElement.width,o=e.domElement.height;this.mncaState.setupRenderTargets(r,o),this.shaderPass.setupSharedGeometry(),this.shaderPass.setupPasses(r,o),this.setupSceneTarget(r,o),this.setupComposer(),this.currentWidth=r,this.currentHeight=o,this.shaderEnabled=!1}startInitialEvent(){this.shaderEnabled=!0}setupSceneTarget(e,t){const n={minFilter:ct,magFilter:ct,format:_t,encoding:Hi,type:Ht,stencilBuffer:!1,depthBuffer:!0};this.sceneTarget=this.renderTargetPool.acquire(e,t,n)}setupComposer(){this.composer=new $m(this.renderer,this.sceneTarget),this.composer.addPass(new qm(this.scene,this.camera))}setSize(e,t){if(this.currentWidth===e&&this.currentHeight===t)return;this.currentWidth=e,this.currentHeight=t;const n=this.mncaState.resize(e,t);this.sceneTarget=this.renderTargetPool.resizeTarget(this.sceneTarget,e,t),this.composer.setSize(e,t),this.shaderPass.updateResolution(e,t),n&&this.clearMNCAState()}clearMNCAState(){this.mncaState.clearState(),this.eventTiming.resetEventStartTime()}forceRenderPassUpdate(){const e=this.shaderPass.getMaterials(),t=this.shaderPass.getOrthoCamera(),n=this.mncaState.getTargets();e.initialState.material.uniforms.tScene.value=n.filteredSceneTarget.texture,e.blend.material.uniforms.tScene.value=n.filteredSceneTarget.texture,this.mncaState.forceRenderPassUpdate(e.initialState,e.blend,t,this.config.conway.clearOnRenderPass)}updateUniforms(){const e=this.eventTiming.getRenderPassCycle(this.mncaState.getFrameCount(),this.mncaState.secondsToFrames.bind(this.mncaState)),t=this.shaderEnabled&&this.eventTiming.isShaderOn()?this.config.conway.colorBlend:0;this.shaderPass.updateComputeUniforms(this.config),this.shaderPass.updateDisplayUniforms(this.config,t,e,this.mncaState.secondsToFrames.bind(this.mncaState)),this.shaderPass.updateHSLFilterUniforms(this.config),this.shaderPass.updateLuminanceThresholds(this.config)}renderScene(){this.renderTargetPool.setRenderTarget(this.sceneTarget),this.renderer.render(this.scene,this.camera)}handleHSLFilter(){const e=this.shaderPass.getMaterials(),t=this.shaderPass.getOrthoCamera(),n=this.mncaState.getTargets();e.hslFilter.material.uniforms.tScene.value=this.sceneTarget.texture,this.renderTargetPool.setRenderTarget(n.filteredSceneTarget),this.renderer.render(e.hslFilter.scene,t)}handleFirstFrame(){const e=this.shaderPass.getMaterials(),t=this.shaderPass.getOrthoCamera();return this.mncaState.handleFirstFrame(e.initialState,t)}handleRenderPassUpdate(){const e=this.mncaState.secondsToFrames(this.config.conway.renderPassInterval);if(this.mncaState.getFrameCount()%e!==0)return;const t=this.shaderPass.getMaterials(),n=this.shaderPass.getOrthoCamera(),i=this.mncaState.getTargets();t.initialState.material.uniforms.tScene.value=i.filteredSceneTarget.texture,t.blend.material.uniforms.tScene.value=i.filteredSceneTarget.texture,this.config.conway.clearOnRenderPass||this.mncaState.isFirstFrame()?(this.renderTargetPool.setRenderTarget(i.targetB),this.renderer.render(t.initialState.scene,n)):(t.blend.material.uniforms.tMNCA.value=i.targetA.texture,this.renderTargetPool.setRenderTarget(i.targetB),this.renderer.render(t.blend.scene,n))}handleMNCAUpdate(){const e=this.mncaState.secondsToFrames(this.config.conway.renderPassInterval);if(this.mncaState.getFrameCount()%this.config.render.mncaUpdateRate===0&&this.mncaState.getFrameCount()%e!==0){const t=this.shaderPass.getMaterials(),n=this.shaderPass.getOrthoCamera(),i=this.mncaState.getTargets();return this.mncaState.computeStep(t.compute,n,i.filteredSceneTarget.texture),!0}return!1}handleCopyPass(){const e=this.mncaState.secondsToFrames(this.config.conway.renderPassInterval);if(this.mncaState.getFrameCount()%this.config.render.mncaUpdateRate!==0&&this.mncaState.getFrameCount()%e!==0){const t=this.shaderPass.getMaterials(),n=this.shaderPass.getOrthoCamera();return this.mncaState.copyStep(t.copy,n),!0}return!1}handleDisplay(){const e=this.shaderPass.getMaterials(),t=this.shaderPass.getOrthoCamera(),n=this.mncaState.getTargets();this.shaderPass.updateDisplayTextures(n.targetB.texture,this.sceneTarget.texture),this.shaderPass.updateDisplayTime(this.eventTiming.getCurrentTime()),this.renderTargetPool.setRenderTarget(null),this.renderer.render(e.display.scene,t)}onManualRandomization(){this.eventTiming.onManualRandomization(),this.mncaState.clearState(),this.shaderPass.invalidateUniformCache(),this.forceRenderPassUpdate()}invalidateUniformCache(){this.shaderPass.invalidateUniformCache()}getUniformCacheStats(){return this.shaderPass.getUniformCacheStats()}resetUniformCacheStats(){this.shaderPass.resetUniformCacheStats()}getPoolMetrics(){return this.renderTargetPool.getMetrics()}render(){this.eventTiming.updateTiming(this.mncaState.getFrameCount()),this.eventTiming.handleEventTimer(this.mncaState.secondsToFrames.bind(this.mncaState))&&(this.mncaState.clearState(),this.shaderPass.invalidateUniformCache(),this.forceRenderPassUpdate()),this.eventTiming.updateTiming(this.mncaState.getFrameCount()),this.eventTiming.updateGUI(),this.updateUniforms(),this.renderScene(),this.handleHSLFilter(),this.handleFirstFrame(),this.handleRenderPassUpdate(),this.handleMNCAUpdate(),this.handleCopyPass(),this.handleDisplay(),this.mncaState.swapBuffers(),this.mncaState.incrementFrame()}dispose(){this.mncaState&&(this.mncaState.dispose(),this.mncaState=null),this.shaderPass&&(this.shaderPass.dispose(),this.shaderPass=null),this.sceneTarget&&(this.renderTargetPool.release(this.sceneTarget),this.sceneTarget=null),this.renderTargetPool&&(this.renderTargetPool.dispose(),this.renderTargetPool=null),this.composer&&(this.composer.dispose(),this.composer=null)}}class rg{constructor(e){this.config=e,this.storageKey="conwayGarden_settings",this.autoSaveEnabled=!0,this.autoSaveDelay=1e3,this.autoSaveTimeout=null}loadSettings(){try{const e=localStorage.getItem(this.storageKey);if(e){const t=JSON.parse(e);return this.applySettingsToConfig(t),console.log("Settings loaded from localStorage"),!0}}catch(e){console.warn("Failed to load settings from localStorage:",e)}return!1}saveSettings(){try{const e=this.extractSettingsFromConfig();return localStorage.setItem(this.storageKey,JSON.stringify(e,null,2)),console.log("Settings saved to localStorage"),!0}catch(e){return console.warn("Failed to save settings to localStorage:",e),!1}}scheduleAutoSave(){this.autoSaveEnabled&&(this.autoSaveTimeout&&clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.saveSettings()},this.autoSaveDelay))}exportSettings(){const e=this.extractSettingsFromConfig();return JSON.stringify(e,null,2)}importSettings(e){try{const t=JSON.parse(e);return this.applySettingsToConfig(t),this.saveSettings(),console.log("Settings imported successfully"),!0}catch(t){return console.error("Failed to import settings:",t),!1}}downloadSettings(e="gradient-garden-settings.json"){const t=this.exportSettings(),n=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}uploadSettings(){return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.accept=".json",n.onchange=i=>{const a=i.target.files[0];if(!a){t(new Error("No file selected"));return}const r=new FileReader;r.onload=o=>{try{this.importSettings(o.target.result)?e("Settings uploaded successfully"):t(new Error("Failed to import settings"))}catch(l){t(l)}},r.onerror=()=>t(new Error("Failed to read file")),r.readAsText(a)},n.click()})}resetToDefaults(){const e=new this.config.constructor;this.applySettingsToConfig(this.extractSettingsFromConfig(e)),this.saveSettings(),console.log("Settings reset to defaults")}clearSavedSettings(){try{return localStorage.removeItem(this.storageKey),console.log("Saved settings cleared"),!0}catch(e){return console.warn("Failed to clear saved settings:",e),!1}}extractSettingsFromConfig(e=this.config){return{canvas:{...e.canvas},render:{...e.render},pointCloud:{...e.pointCloud},scene:{...e.scene},camera:{...e.camera,initialPosition:{...e.camera.initialPosition}},cameraBoid:{...e.cameraBoid,bounds:{x:{...e.cameraBoid.bounds.x},y:{...e.cameraBoid.bounds.y},z:{...e.cameraBoid.bounds.z}}},lookBoid:{...e.lookBoid,bounds:{x:{...e.lookBoid.bounds.x},y:{...e.lookBoid.bounds.y},z:{...e.lookBoid.bounds.z}}},fairy:{...e.fairy,bounds:{x:{...e.fairy.bounds.x},y:{...e.fairy.bounds.y},z:{...e.fairy.bounds.z}}},conway:{...e.conway},_metadata:{version:"1.0.0",timestamp:new Date().toISOString(),userAgent:navigator.userAgent}}}applySettingsToConfig(e){if(!e||typeof e!="object")throw new Error("Invalid settings format");["canvas","render","pointCloud","scene","camera","cameraBoid","lookBoid","fairy","conway"].forEach(n=>{e[n]&&this.deepMerge(this.config[n],e[n])})}deepMerge(e,t){for(const n in t)t.hasOwnProperty(n)&&(typeof t[n]=="object"&&t[n]!==null&&!Array.isArray(t[n])?((!e[n]||typeof e[n]!="object")&&(e[n]={}),this.deepMerge(e[n],t[n])):e[n]=t[n])}getSettingsInfo(){var e,t;try{const n=localStorage.getItem(this.storageKey);if(n){const i=JSON.parse(n);return{exists:!0,size:n.length,timestamp:((e=i._metadata)==null?void 0:e.timestamp)||"Unknown",version:((t=i._metadata)==null?void 0:t.version)||"Unknown"}}}catch(n){console.warn("Failed to get settings info:",n)}return{exists:!1,size:0,timestamp:null,version:null}}}class og{constructor(e){this.settingsManager=e,this.presetsPath="/presets/",this.currentPresetName=null,window.addEventListener("hashchange",()=>this.handleHashChange())}async initialize(){const e=this.getPresetNameFromHash();if(e){if(console.log(`Hash parameter detected: #preset=${e}`),await this.loadPreset(e))return console.log(`✓ Preset "${e}" loaded successfully`),"preset";console.warn(`✗ Failed to load preset "${e}", falling back to localStorage`)}return this.settingsManager.loadSettings()?(console.log("✓ Settings loaded from localStorage"),"localStorage"):(console.log("✓ Using default settings"),"defaults")}getPresetNameFromHash(){const e=window.location.hash;if(!e)return null;const t=e.substring(1);return t.startsWith("preset=")?t.substring(7):t&&!t.includes("=")?t:null}async loadPreset(e){if(!e)return console.error("No preset name provided"),!1;try{const t=`${this.presetsPath}${e}.json`;console.log(`Fetching preset from: ${t}`);const n=await fetch(t);if(!n.ok)return n.status===404?console.warn(`Preset file not found: ${t}`):console.error(`Failed to fetch preset: ${n.status} ${n.statusText}`),!1;const i=await n.json();if(!this.validatePreset(i))return console.error("Preset validation failed - invalid structure"),!1;const a=this.settingsManager.importSettings(JSON.stringify(i));return a&&(this.currentPresetName=e,console.log(`Preset "${e}" applied successfully`)),a}catch(t){return console.error(`Error loading preset "${e}":`,t),!1}}validatePreset(e){return!e||typeof e!="object"?(console.error("Preset must be an object"),!1):["canvas","render","pointCloud","scene","camera","cameraBoid","lookBoid","fairy","conway","analysis"].some(i=>e.hasOwnProperty(i)&&typeof e[i]=="object")?!0:(console.error("Preset must contain at least one valid configuration section"),!1)}async handleHashChange(){const e=this.getPresetNameFromHash();e&&e!==this.currentPresetName&&(console.log(`Hash changed, loading new preset: ${e}`),await this.loadPreset(e),window.location.reload())}exportAsPreset(e){const t=`${e}.json`;this.settingsManager.downloadSettings(t),console.log(`Preset exported as ${t}`),console.log(`To use this preset, place it in the public/presets/ folder and visit: ${window.location.origin}${window.location.pathname}#preset=${e}`)}getCurrentPresetName(){return this.currentPresetName}clearPreset(){this.currentPresetName=null,window.location.hash="",this.settingsManager.loadSettings()}async listAvailablePresets(){try{const e=await fetch(`${this.presetsPath}presets.json`);if(e.ok)return(await e.json()).presets||[]}catch{console.warn("No presets manifest found. Create public/presets/presets.json to list available presets.")}return[]}}class lg{constructor(e,t,n){this.renderer=e,this.postProcessingManager=t,this.config=n,this.updateInterval=5e3,this.lastUpdateTime=0,this.cachedResults={coveredPixels:0,totalPixels:0,densityPercent:0,canvasInPoints:{width:0,height:0}},this.pixelBuffer=null,this.bufferWidth=0,this.bufferHeight=0}update(){const e=performance.now();e-this.lastUpdateTime>=this.updateInterval&&(this.calculateDensity(),this.lastUpdateTime=e)}forceUpdate(){this.calculateDensity(),this.lastUpdateTime=performance.now()}calculateDensity(){const e=this.postProcessingManager.sceneTarget;if(!e){console.warn("DensityCalculator: sceneTarget not available");return}const t=e.width,n=e.height,i=t*n;(!this.pixelBuffer||this.bufferWidth!==t||this.bufferHeight!==n)&&(this.pixelBuffer=new Uint8Array(t*n*4),this.bufferWidth=t,this.bufferHeight=n),this.renderer.readRenderTargetPixels(e,0,0,t,n,this.pixelBuffer);let a=0;for(let c=0;c<this.pixelBuffer.length;c+=4){const h=this.pixelBuffer[c],u=this.pixelBuffer[c+1],p=this.pixelBuffer[c+2];(h!==0||u!==0||p!==0)&&a++}const r=a/i*100,o=this.config.render.pointSize,l={width:Math.floor(t/o),height:Math.floor(n/o)};this.cachedResults={coveredPixels:a,totalPixels:i,densityPercent:r,canvasInPoints:l}}getDensityData(){return{...this.cachedResults}}getDensityString(){return`${this.cachedResults.densityPercent.toFixed(1)}%`}getCanvasSizeString(){const e=this.cachedResults.canvasInPoints;return`${e.width} × ${e.height} pts`}getCoverageString(){const e=this.cachedResults.coveredPixels.toLocaleString(),t=this.cachedResults.totalPixels.toLocaleString();return`${e} / ${t} px`}setUpdateInterval(e){this.updateInterval=e}dispose(){this.pixelBuffer=null}}class cg{constructor(e,t){this.app=e,this.config=t,this.cameraManager=e.cameraManager,this.totalFrames=0,this.blendStartFrame=0,this.blendFrames=0,this.framePath=[],this.planned=!1}plan(){const e=this.config.capture.duration,t=this.config.capture.fps||30,n=Math.max(.1,Math.min(.4,this.config.capture.blendRatio||.2));this.totalFrames=Math.round(e*t),this.blendFrames=Math.max(10,Math.round(this.totalFrames*n)),this.blendStartFrame=this.totalFrames-this.blendFrames;const i=this.cameraManager.cameraBoid,a=this.cameraManager.lookBoid,r={cameraPos:i.position.clone(),cameraVel:i.velocity.clone(),cameraTarget:i.target.clone(),lookPos:a.position.clone(),lookVel:a.velocity.clone(),lookTarget:a.target.clone()},o=this.simulate(r,i,a);return this.restoreBoidState(i,a,r),this.logFeasibility(o,r),this.framePath=this.buildPath(o,r),this.planned=!0,{ok:!0,totalFrames:this.totalFrames}}logFeasibility(e,t){const n=e[this.blendStartFrame],i=n.cameraPos.distanceTo(t.cameraPos),a=n.lookPos.distanceTo(t.lookPos),r=this.blendFrames>0?i/this.blendFrames:0;console.log(`[LoopPlanner] Loop closure — camera return: ${i.toFixed(3)} units, look return: ${a.toFixed(3)} units, blend frames: ${this.blendFrames}, avg blend speed: ${r.toFixed(5)} units/frame`);const o=(this.config.camera.speedBase+this.config.camera.speedFine)/100;o>0&&r>o*3&&console.warn(`[LoopPlanner] Blend speed is ${(r/o).toFixed(1)}x normal camera speed. Loop closure may look rushed — consider a longer duration.`)}simulate(e,t,n){const i=[];for(let a=0;a<this.totalFrames;a++)i.push({cameraPos:t.position.clone(),cameraVel:t.velocity.clone(),lookPos:n.position.clone(),lookVel:n.velocity.clone()}),t.updatePosition(),n.updatePosition();return i}buildPath(e,t){const n=[];for(let i=0;i<this.totalFrames;i++)if(i<this.blendStartFrame)n.push(e[i]);else{const a=(i-this.blendStartFrame)/this.blendFrames;n.push(this.hermiteBlend(e[i],t,a))}return n}hermiteBlend(e,t,n){const i=n*n*(3-2*n),a=2*i*i*i-3*i*i+1,r=i*i*i-2*i*i+i,o=-2*i*i*i+3*i*i,l=i*i*i-i*i,c=this.blendFrames;return{cameraPos:this.hermiteVec3(e.cameraPos,e.cameraVel,c,t.cameraPos,t.cameraVel,c,a,r,o,l),cameraVel:this.lerpVec3(e.cameraVel,t.cameraVel,i),lookPos:this.hermiteVec3(e.lookPos,e.lookVel,c,t.lookPos,t.lookVel,c,a,r,o,l),lookVel:this.lerpVec3(e.lookVel,t.lookVel,i)}}hermiteVec3(e,t,n,i,a,r,o,l,c,h){return new P(o*e.x+l*t.x*n+c*i.x+h*a.x*r,o*e.y+l*t.y*n+c*i.y+h*a.y*r,o*e.z+l*t.z*n+c*i.z+h*a.z*r)}lerpVec3(e,t,n){return new P(e.x+(t.x-e.x)*n,e.y+(t.y-e.y)*n,e.z+(t.z-e.z)*n)}getFrame(e){return!this.planned||e<0||e>=this.framePath.length?null:this.framePath[e]}applyFrame(e){const t=this.getFrame(e);if(!t)return;const n=this.cameraManager.cameraBoid,i=this.cameraManager.lookBoid;n.position.copy(t.cameraPos),n.velocity.copy(t.cameraVel),i.position.copy(t.lookPos),i.velocity.copy(t.lookVel),this.cameraManager.camera.position.copy(t.cameraPos),this.cameraManager.controls.target.copy(t.lookPos),this.cameraManager.camera.lookAt(t.lookPos),this.cameraManager.controls.update()}restoreBoidState(e,t,n){e.position.copy(n.cameraPos),e.velocity.copy(n.cameraVel),e.target.copy(n.cameraTarget),t.position.copy(n.lookPos),t.velocity.copy(n.lookVel),t.target.copy(n.lookTarget),this.cameraManager.camera.position.copy(n.cameraPos),this.cameraManager.controls.target.copy(n.lookPos),this.cameraManager.camera.lookAt(n.lookPos),this.cameraManager.controls.update()}}const pa={vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        varying vec2 vUv;

        void main() {
            // Divide the screen into a 4x2 grid of test idxes
            float col = floor(vUv.x * 4.0);
            float row = floor(vUv.y * 2.0);
            int idx = int(col + row * 4.0);

            vec4 color;

            // Row 0 (bottom): primary colors and grays
            if (idx == 0)      color = vec4(1.0, 0.0, 0.0, 1.0); // Pure red     #FF0000
            else if (idx == 1) color = vec4(0.0, 1.0, 0.0, 1.0); // Pure green   #00FF00
            else if (idx == 2) color = vec4(0.0, 0.0, 1.0, 1.0); // Pure blue    #0000FF
            else if (idx == 3) color = vec4(1.0, 1.0, 1.0, 1.0); // Pure white   #FFFFFF

            // Row 1 (top): mid-tones (gamma-sensitive)
            else if (idx == 4) color = vec4(0.5, 0.5, 0.5, 1.0); // 50% gray     #808080 (linear) or ~#BCBCBC (sRGB)
            else if (idx == 5) color = vec4(0.2, 0.2, 0.2, 1.0); // 20% gray     #333333 (linear) or ~#7C7C7C (sRGB)
            else if (idx == 6) color = vec4(0.0, 0.0, 0.0, 1.0); // Pure black   #000000
            else                 color = vec4(0.5, 0.0, 0.5, 1.0); // Purple check  #800080

            gl_FragColor = color;
        }
    `,expectedPatches:[{name:"Red",col:0,row:0,expected:[255,0,0,255]},{name:"Green",col:1,row:0,expected:[0,255,0,255]},{name:"Blue",col:2,row:0,expected:[0,0,255,255]},{name:"White",col:3,row:0,expected:[255,255,255,255]},{name:"50% Gray",col:0,row:1,expected:[128,128,128,255],tolerance:3},{name:"20% Gray",col:1,row:1,expected:[51,51,51,255],tolerance:3},{name:"Black",col:2,row:1,expected:[0,0,0,255]},{name:"Purple",col:3,row:1,expected:[128,0,128,255],tolerance:3}]};class hg{constructor(e){this.app=e,this.config=e.config,this.renderer=e.renderer,this.loopPlanner=null,this.isCapturing=!1,this.currentFrame=0,this.totalFrames=0,this.mediaRecorder=null,this.recordedChunks=[],this.outputDirHandle=null,this.savedMinutesPerRot=0,this.overlay=null}async startCapture(){if(this.isCapturing){console.warn("[CaptureManager] Capture already in progress");return}this.isCapturing=!0,this.currentFrame=0,this.totalFrames=Math.round(this.config.capture.duration*(this.config.capture.fps||30)),console.log(`[CaptureManager] Starting capture: ${this.totalFrames} frames, ${this.config.capture.duration}s @ ${this.config.capture.fps}fps`);try{if(this.config.capture.format==="png"){if(!window.showDirectoryPicker)throw new Error("Your browser does not support the File System Access API. Use Chrome/Edge, or switch to WebM format.");this.outputDirHandle=await window.showDirectoryPicker({mode:"readwrite",startIn:"downloads"}),console.log(`[CaptureManager] Output directory: ${this.outputDirHandle.name}`)}this.createOverlay(),this.updateOverlay("Waiting for assets to load..."),await this.waitForChunksLoaded(),console.log("[CaptureManager] All chunks loaded"),this.config.capture.runCalibration&&(this.updateOverlay("Running color calibration..."),this.runCalibration()),this.updateOverlay("Planning camera loop..."),this.loopPlanner=new cg(this.app,this.config);const e=this.loopPlanner.plan();if(!e.ok){console.error(`[CaptureManager] Loop planning failed: ${e.warning}`),console.error(`[CaptureManager] Minimum recommended duration: ${e.minDuration}s`),this.updateOverlay(`ERROR: ${e.warning}`),this.isCapturing=!1;return}this.config.capture.freezeRotation&&(this.savedMinutesPerRot=this.config.camera.minutesPerRot,this.config.camera.minutesPerRot=0),this.stopLiveLoop(),this.updateOverlay(`Capturing frame 0 / ${this.totalFrames}...`),this.config.capture.format==="webm"?await this.captureWebM():await this.capturePNGSequence(),console.log(`[CaptureManager] Capture complete: ${this.totalFrames} frames`),this.restoreLiveLoop()}catch(e){console.error("[CaptureManager] Capture failed:",e),this.restoreLiveLoop()}finally{this.isCapturing=!1,this.removeOverlay()}}waitForChunksLoaded(){return new Promise(e=>{const t=this.app.sceneManager.chunkManager;if(!t){e();return}this.savedEnableDynamicLoading=t.enableDynamicLoading,this.savedMaxLoadedChunks=t.maxLoadedChunks,t.enableDynamicLoading=!1,t.maxLoadedChunks=t.numChunks,t.unloadQueue=[],(async()=>{const i=t.chunks.filter(r=>r.state==="unloaded"),a=t.numChunks;if(i.length===0){console.log(`[CaptureManager] All ${a} chunks loaded`),e();return}for(let r=0;r<i.length;r++){const o=i[r],l=t.getLoadedChunkCount();this.updateOverlay(`Loading chunks: ${l} / ${a} (loading chunk ${o.id}...)`);try{await t.loadChunk(o.id)}catch(c){console.warn(`[CaptureManager] Failed to load chunk ${o.id}:`,c)}}console.log(`[CaptureManager] All ${t.getLoadedChunkCount()} / ${a} chunks loaded`),e()})()})}runCalibration(){console.log("[CaptureManager] Running color calibration...");const e=this.renderer.getContext(),t=this.renderer.domElement.width,n=this.renderer.domElement.height,i=new Na,a=new Xi(-1,1,1,-1,0,1),r=new Vt({vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,depthTest:!1,depthWrite:!1}),o=new vt(new Wi(2,2),r);i.add(o),this.renderer.setRenderTarget(null),this.renderer.render(i,a);const l=pa.expectedPatches;let c=!0;const h=[];for(const u of l){const p=t/4,m=n/2,g=Math.floor((u.col+.5)*p),_=Math.floor((u.row+.5)*m),f=new Uint8Array(4);e.readPixels(g,_,1,1,e.RGBA,e.UNSIGNED_BYTE,f);const d=u.tolerance||1,S=Math.abs(f[0]-u.expected[0])<=d,v=Math.abs(f[1]-u.expected[1])<=d,y=Math.abs(f[2]-u.expected[2])<=d,E=Math.abs(f[3]-u.expected[3])<=d,A=S&&v&&y&&E;A||(c=!1),h.push({name:u.name,expected:u.expected,actual:[f[0],f[1],f[2],f[3]],passed:A})}if(c)console.log("[CaptureManager] ✓ Color calibration PASSED — pipeline is linear, no gamma issues detected");else{console.warn("[CaptureManager] ✗ Color calibration FAILED — potential gamma/sRGB mismatch detected:");for(const u of h)if(!u.passed){const p=`#${u.expected.slice(0,3).map(g=>g.toString(16).padStart(2,"0")).join("")}`,m=`#${u.actual.slice(0,3).map(g=>g.toString(16).padStart(2,"0")).join("")}`;if(console.warn(`  ${u.name}: expected ${p} [${u.expected}], got ${m} [${u.actual}]`),u.name.includes("Gray")){const g=u.actual[0]/u.expected[0];g>1.3?console.warn("  → This looks like double-gamma (sRGB applied twice). Check renderer.outputColorSpace and texture encoding settings."):g<.7&&console.warn("  → Values are darker than expected — possible missing sRGB conversion.")}}}return r.dispose(),o.geometry.dispose(),c}async capturePNGSequence(){const e=this.config.capture.filenamePrefix||"frame",t=String(this.totalFrames).length,n=this.config.capture.pngBatchSize||50;let i=[];for(let r=0;r<this.totalFrames&&this.isCapturing;r++){this.currentFrame=r,this.loopPlanner.applyFrame(r),this.renderCaptureFrame();const o=await this.canvasToBlob("image/png"),l=String(r).padStart(t,"0");i.push({blob:o,filename:`${e}_${l}.png`});const c=Math.floor(r/n)+1,h=Math.ceil(this.totalFrames/n);this.updateOverlay(`Capturing frame ${r+1} / ${this.totalFrames}  (batch ${c}/${h})`),(i.length>=n||r===this.totalFrames-1)&&(this.updateOverlay(`Writing batch ${c}/${h} (${i.length} frames)...`),await this.writeBatchToDirectory(i),i=[]),r%5===0&&await this.yieldFrame()}console.log(`[CaptureManager] PNG sequence saved to folder: ${this.outputDirHandle.name}`),await this.writeCaptureSettings(e);const a=this.config.capture.fps||30;this.logFFmpegCommands(e,t,a)}async writeCaptureSettings(e){const t=this.app.width,n=this.app.height,i=this.config.capture.outputScale||3,a=t*i,r=n*i,o=Math.round(a*2/3/2)*2,l=Math.round(r*2/3/2)*2,c={canvas_width:t,canvas_height:n,output_scale:i,master_width:a,master_height:r,proxy_width:o,proxy_height:l,fps:this.config.capture.fps||30,filename_prefix:e};try{const u=await(await this.outputDirHandle.getFileHandle("capture_settings.json",{create:!0})).createWritable();await u.write(JSON.stringify(c,null,2)),await u.close(),console.log("[CaptureManager] capture_settings.json written:",c)}catch(h){console.warn("[CaptureManager] Failed to write capture_settings.json:",h)}}logFFmpegCommands(e,t,n){const i=`${e}_%0${t}d.png`,a=this.config.capture.outputScale||3,r=this.app.width*a,o=this.app.height*a,l=Math.round(r*2/3/2)*2,c=Math.round(o*2/3/2)*2;console.log(`
══════════════════════════════════════════════════════════`),console.log("  FFmpeg conversion commands"),console.log("  Or just run: python scripts/png_to_video.py /path/to/folder"),console.log("  (reads capture_settings.json automatically)"),console.log(`══════════════════════════════════════════════════════════
`),console.log(`── Master: Apple ProRes 422 HQ, ${r}×${o}, .MOV ──`),console.log(`ffmpeg -framerate ${n} -color_primaries bt709 -color_trc bt709 -colorspace bt709 -i ${i} -vf "scale=${r}:${o}:flags=neighbor:in_range=full:out_range=full:in_color_matrix=bt709:out_color_matrix=bt709,eq=saturation=1.3" -c:v prores_ks -profile:v 3 -pix_fmt yuv422p10le -color_range pc -color_primaries bt709 -color_trc bt709 -colorspace bt709 -movflags write_colr -an master.mov
`),console.log(`── Proxy: H.265 (HEVC), ${l}×${c}, ~65 Mbps, .MP4 ──`),console.log(`ffmpeg -framerate ${n} -color_primaries bt709 -color_trc bt709 -colorspace bt709 -i ${i} -vf "scale=${r}:${o}:flags=neighbor:in_range=full:in_color_matrix=bt709:out_color_matrix=bt709,eq=saturation=1.3,scale=${l}:${c}:flags=lanczos" -c:v libx265 -b:v 65M -bufsize 130M -pix_fmt yuv420p10le -color_range tv -color_primaries bt709 -color_trc bt709 -colorspace bt709 -tag:v hvc1 -an proxy.mp4
`),console.log(`══════════════════════════════════════════════════════════
`)}async writeBatchToDirectory(e){for(const t of e){const i=await(await this.outputDirHandle.getFileHandle(t.filename,{create:!0})).createWritable();await i.write(t.blob),await i.close()}}async captureWebM(){const e=this.renderer.domElement;if(this.config.capture.fps,typeof MediaRecorder>"u")return console.error("[CaptureManager] MediaRecorder API not available. Falling back to PNG sequence."),this.capturePNGSequence();const t=e.captureStream(0),n=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this.recordedChunks=[],this.mediaRecorder=new MediaRecorder(t,{mimeType:n,videoBitsPerSecond:2e7}),this.mediaRecorder.ondataavailable=r=>{r.data.size>0&&this.recordedChunks.push(r.data)},this.mediaRecorder.start();const i=t.getVideoTracks()[0];for(let r=0;r<this.totalFrames&&this.isCapturing;r++)this.currentFrame=r,this.loopPlanner.applyFrame(r),this.renderCaptureFrame(),i.requestFrame&&i.requestFrame(),(r%10===0||r===this.totalFrames-1)&&this.updateOverlay(`Recording frame ${r+1} / ${this.totalFrames}...`),await this.yieldFrame();this.updateOverlay("Encoding video..."),await new Promise(r=>{this.mediaRecorder.onstop=r,this.mediaRecorder.stop()});const a=new Blob(this.recordedChunks,{type:n});this.downloadBlob(a,`capture_${Date.now()}.webm`)}renderCaptureFrame(){this.app.checkCanvasSizeChange();const e=this.config.camera.minutesPerRot>0?2*Math.PI/(this.config.camera.minutesPerRot*60*30):0;this.app.sceneManager.update(e,this.app.cameraManager.camera),this.config.render.postProcessing?this.app.postProcessingManager.render():this.renderer.render(this.app.sceneManager.scene,this.app.cameraManager.camera)}stopLiveLoop(){this.app._rafId&&(cancelAnimationFrame(this.app._rafId),this.app._rafId=null),console.log("[CaptureManager] Live RAF loop stopped")}restoreLiveLoop(){this.config.capture.freezeRotation&&this.savedMinutesPerRot&&(this.config.camera.minutesPerRot=this.savedMinutesPerRot);const e=this.app.sceneManager.chunkManager;e&&this.savedEnableDynamicLoading!==void 0&&(e.enableDynamicLoading=this.savedEnableDynamicLoading,e.maxLoadedChunks=this.savedMaxLoadedChunks),this.app._rafId||(this.app.clock.getDelta(),this.app.delta=0,this.app.animate(),console.log("[CaptureManager] Live RAF loop restored"))}canvasToBlob(e="image/png"){return new Promise(t=>{this.renderer.domElement.toBlob(t,e)})}downloadBlob(e,t){const n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(n),1e3)}yieldFrame(){return new Promise(e=>setTimeout(e,0))}createOverlay(){this.overlay=document.createElement("div"),this.overlay.id="capture-overlay",this.overlay.style.cssText=`
            position: fixed; top: 0; left: 0; right: 0;
            background: rgba(0,0,0,0.85); color: #0f0; font-family: monospace;
            font-size: 14px; padding: 12px 16px; z-index: 99999;
            pointer-events: none;
        `,document.body.appendChild(this.overlay)}updateOverlay(e){this.overlay&&(this.overlay.textContent=`[CAPTURE] ${e}`)}removeOverlay(){this.overlay&&(this.overlay.remove(),this.overlay=null)}abort(){this.isCapturing&&(console.warn("[CaptureManager] Capture aborted by user"),this.isCapturing=!1,this.mediaRecorder&&this.mediaRecorder.state!=="inactive"&&this.mediaRecorder.stop(),this.restoreLiveLoop(),this.removeOverlay())}}class ug{constructor(){Ns(this,"animate",()=>{this._rafId=requestAnimationFrame(this.animate),this.delta+=this.clock.getDelta(),this.delta>this.interval&&(this.update(),this.delta=this.delta%this.interval)});Ns(this,"handleKeyPress",e=>{switch(e.code){case"Space":this.cameraManager.updateTargets();break;case"KeyJ":const t=this.stats.dom.style.display;this.stats.dom.style.display=t==="none"?"block":"none";break;case"KeyI":this.cameraManager.toggleInteractiveMode();break;case"KeyC":this.config.capture.enabled&&this.captureManager&&!this.captureManager.isCapturing&&this.captureManager.startCapture();break;case"Escape":this.captureManager&&this.captureManager.isCapturing&&this.captureManager.abort();break}});this.config=vn.getInstance(),this.width=0,this.height=0,this.clock=new dl,this.delta=0,this.interval=1/30,this.onCanvasSizeChange=null,this.fpsHistory=[],this.fpsCheckCounter=0,this.lastFpsTime=0,this.framesSinceLastFpsCheck=0,this.cachedCanvasSize={width:0,height:0,pointSize:0,isFullscreen:!1,rotation:0,xOffset:0,yOffset:0,clientWidth:0,clientHeight:0},this.pendingStyleUpdates=new Map,this.styleUpdateScheduled=!1,this.init(),this.setupScene(),this.setupEventListeners()}init(){this.renderer=new ul({antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.shadowMap.enabled=!1,this.renderer.domElement.style.cssText="display: block !important; margin: 0 !important;",document.body.appendChild(this.renderer.domElement),this.sceneManager=new cm(this.config),this.cameraManager=new sm(this.renderer,this.sceneManager.scene,this.config),this.sceneManager.setCameraManager(this.cameraManager),this.settingsManager=new rg(this.config),this.presetManager=new og(this.settingsManager),this.guiManager=new km(this.config,this.cameraManager,this,this.settingsManager,this.presetManager,this.sceneManager),this.postProcessingManager=new ag(this.renderer,this.sceneManager.scene,this.cameraManager.camera,this.config,this.guiManager),this.guiManager.setPostProcessingManager(this.postProcessingManager),this.densityCalculator=new lg(this.renderer,this.postProcessingManager,this.config),this.guiManager.setDensityCalculator(this.densityCalculator),this.stats=new em,this.stats.dom.classList.add("stats"),document.body.appendChild(this.stats.dom),this.stats.dom.style.display="none",this.checkCanvasSizeChange(),window.addEventListener("resize",()=>this.checkCanvasSizeChange())}async setupScene(){await this.presetManager.initialize()==="preset"&&this.refreshGUIControllers(),this.animate(),await this.sceneManager.loadPointCloudModel(),this.guiManager.initializePointCloudGUI(),this.sceneManager.createFairies(),setTimeout(()=>{this.postProcessingManager.startInitialEvent()},3e3),this.captureManager=new hg(this),this.config.capture.enabled&&this.config.capture.autoStart&&setTimeout(()=>{this.captureManager.startCapture()},4e3)}batchStyleUpdate(e,t){this.pendingStyleUpdates.has(e)||this.pendingStyleUpdates.set(e,{}),Object.assign(this.pendingStyleUpdates.get(e),t),this.styleUpdateScheduled||(this.styleUpdateScheduled=!0,requestAnimationFrame(()=>this.flushStyleUpdates()))}flushStyleUpdates(){this.pendingStyleUpdates.forEach((e,t)=>{Object.assign(t.style,e)}),this.pendingStyleUpdates.clear(),this.styleUpdateScheduled=!1}setSize(e,t){this.width=e,this.height=t,this.renderer.setViewport(0,0,e,t),this.renderer.setSize(e,t,!1),this.postProcessingManager.setSize(e,t),this.cameraManager.updateCameraAspect(e,t),document.body.classList.toggle("fullscreen",this.config.canvas.isFullscreen);const n={};if(this.config.canvas.isFullscreen){let i="";this.config.canvas.rotation!==0&&(i=`rotate(${this.config.canvas.rotation}deg)`,n.transformOrigin="center center");const a=Math.max(window.innerWidth,document.documentElement.clientWidth),r=Math.max(window.innerHeight,document.documentElement.clientHeight);Object.assign(n,{position:"",left:"",top:"",transform:i,width:`${a}px`,height:`${r}px`})}else{const i=e*this.config.render.pointSize,a=t*this.config.render.pointSize;let r="",o=this.config.canvas.xOffset,l=this.config.canvas.yOffset;if(this.config.canvas.rotation!==0){switch(r=`rotate(${this.config.canvas.rotation}deg)`,n.transformOrigin="top left",console.log(`Rotation: ${this.config.canvas.rotation}°, Original offsets: X=${this.config.canvas.xOffset}, Y=${this.config.canvas.yOffset}`),console.log(`Canvas dimensions: ${i}x${a}`),this.config.canvas.rotation){case 90:o=this.config.canvas.xOffset,l=this.config.canvas.yOffset;break;case 180:o=this.config.canvas.xOffset,l=this.config.canvas.yOffset;break;case 270:o=this.config.canvas.xOffset,l=this.config.canvas.yOffset;break}console.log(`Adjusted offsets: X=${o}, Y=${l}`)}else n.transformOrigin="";Object.assign(n,{transform:r,width:`${i}px`,height:`${a}px`,position:"absolute",left:`${o}px`,top:`${l}px`})}this.batchStyleUpdate(this.renderer.domElement,n),this.onCanvasSizeChange&&this.onCanvasSizeChange()}checkCanvasSizeChange(){const e=this.cachedCanvasSize;if(this.config.canvas.isFullscreen){const t=Math.max(window.innerWidth,document.documentElement.clientWidth),n=Math.max(window.innerHeight,document.documentElement.clientHeight);this.config.adjustPointSizeForMaxCount(t,n);const i=Math.floor(t/this.config.render.pointSize),a=Math.floor(n/this.config.render.pointSize),r=i!==this.width||a!==this.height,o=e.pointSize!==this.config.render.pointSize;if(r||o)return e.clientWidth=t,e.clientHeight=n,e.width=i,e.height=a,e.pointSize=this.config.render.pointSize,e.isFullscreen=!0,this.setSize(i,a),!0;(e.clientWidth!==t||e.clientHeight!==n)&&(e.clientWidth=t,e.clientHeight=n)}else{this.config.adjustPointSizeForMaxCount(this.config.canvas.width,this.config.canvas.height);const t=this.config.canvas.width!==this.width||this.config.canvas.height!==this.height,n=e.pointSize!==this.config.render.pointSize||e.rotation!==this.config.canvas.rotation||e.xOffset!==this.config.canvas.xOffset||e.yOffset!==this.config.canvas.yOffset;if(t||n)return e.width=this.config.canvas.width,e.height=this.config.canvas.height,e.pointSize=this.config.render.pointSize,e.rotation=this.config.canvas.rotation,e.xOffset=this.config.canvas.xOffset,e.yOffset=this.config.canvas.yOffset,e.isFullscreen=!1,this.setSize(this.config.canvas.width,this.config.canvas.height),!0}return!1}update(){this.checkCanvasSizeChange(),this.monitorFPS(),this.densityCalculator&&this.densityCalculator.update();const e=this.config.camera.minutesPerRot>0?2*Math.PI/(this.config.camera.minutesPerRot*60*30):0;this.sceneManager.update(e,this.cameraManager.camera),this.cameraManager.update(),this.stats.update(),this.config.render.postProcessing?this.postProcessingManager.render():this.renderer.render(this.sceneManager.scene,this.cameraManager.camera)}monitorFPS(){if(this.config.analysis.autoDisableOnLowFps&&(this.framesSinceLastFpsCheck++,this.framesSinceLastFpsCheck>=this.config.analysis.fpsCheckInterval)){const e=performance.now();if(this.lastFpsTime>0){const t=(e-this.lastFpsTime)/1e3,n=this.framesSinceLastFpsCheck/t;n<this.config.analysis.fpsThreshold?(this.config.analysis.lowFpsFrameCount++,this.config.analysis.lowFpsFrameCount>=this.config.analysis.lowFpsThreshold&&(this.config.analysis.enabled&&(console.log(`FPS consistently below ${this.config.analysis.fpsThreshold}fps (${n.toFixed(1)}fps). Auto-disabling analysis system for performance.`),this.config.update("analysis.enabled",!1),this.guiManager&&this.guiManager.analysisFolder&&this.guiManager.analysisFolder.toggleSystemEnabled(!1)),this.config.analysis.lowFpsFrameCount=0)):this.config.analysis.lowFpsFrameCount=0}this.lastFpsTime=e,this.framesSinceLastFpsCheck=0}}setupEventListeners(){document.addEventListener("keydown",this.handleKeyPress)}refreshGUIControllers(){this.guiManager&&this.guiManager.gui&&this.refreshControllersRecursive(this.guiManager.gui)}refreshControllersRecursive(e){e.__controllers&&e.__controllers.forEach(t=>{t.updateDisplay&&t.updateDisplay()}),e.__folders&&Object.values(e.__folders).forEach(t=>{this.refreshControllersRecursive(t)})}dispose(){this.sceneManager.dispose(),document.removeEventListener("keydown",this.handleKeyPress)}}let La;function dg(){La=new ug}window.addEventListener("beforeunload",()=>{La&&La.dispose()});dg();
