(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="170",sr={ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Op=0,kh=1,kp=2,Ld=1,Id=2,vi=3,Ci=0,tn=1,Xn=2,ji=0,rr=1,Bh=2,zh=3,Vh=4,Bp=5,vs=100,zp=101,Vp=102,Gp=103,Hp=104,$p=200,Wp=201,Xp=202,qp=203,Bl=204,zl=205,Yp=206,jp=207,Zp=208,Kp=209,Jp=210,Qp=211,tm=212,em=213,nm=214,Vl=0,Gl=1,Hl=2,fr=3,$l=4,Wl=5,Xl=6,ql=7,Ud=0,im=1,sm=2,wi=0,rm=1,am=2,om=3,lm=4,cm=5,hm=6,um=7,Fd=300,pr=301,mr=302,Yl=303,jl=304,Ro=306,Qi=1e3,ys=1001,Zl=1002,Yn=1003,dm=1004,ba=1005,ri=1006,Ho=1007,bs=1008,Ri=1009,Nd=1010,Od=1011,Jr=1012,Wc=1013,As=1014,Si=1015,pa=1016,Xc=1017,qc=1018,gr=1020,kd=35902,Bd=1021,zd=1022,qn=1023,Vd=1024,Gd=1025,ar=1026,_r=1027,Hd=1028,Yc=1029,$d=1030,jc=1031,Zc=1033,eo=33776,no=33777,io=33778,so=33779,Kl=35840,Jl=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,_c=37821,ro=36492,vc=36494,xc=36495,Wd=36283,yc=36284,bc=36285,Sc=36286,fm=3200,pm=3201,Xd=0,mm=1,Wi="",cn="srgb",Cr="srgb-linear",Po="linear",he="srgb",Fs=7680,Gh=519,gm=512,_m=513,vm=514,qd=515,xm=516,ym=517,bm=518,Sm=519,Hh=35044,$h="300 es",Mi=2e3,po=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const or=Math.PI/180,Qr=180/Math.PI;function Ds(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[r&255]+Ze[r>>8&255]+Ze[r>>16&255]+Ze[r>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Be(r,t,e){return Math.max(t,Math.min(e,r))}function Kc(r,t){return(r%t+t)%t}function Mm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Em(r,t,e){return r!==t?(e-r)/(t-r):0}function Xr(r,t,e){return(1-e)*r+e*t}function wm(r,t,e,n){return Xr(r,t,1-Math.exp(-e*n))}function Tm(r,t=1){return t-Math.abs(Kc(r,t*2)-t)}function Am(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Cm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Rm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Pm(r,t){return r+Math.random()*(t-r)}function Dm(r){return r*(.5-Math.random())}function Lm(r){r!==void 0&&(Wh=r);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Im(r){return r*or}function Um(r){return r*Qr}function Fm(r){return(r&r-1)===0&&r!==0}function Nm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Om(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function km(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ks(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Jc={DEG2RAD:or,RAD2DEG:Qr,generateUUID:Ds,clamp:Be,euclideanModulo:Kc,mapLinear:Mm,inverseLerp:Em,lerp:Xr,damp:wm,pingpong:Tm,smoothstep:Am,smootherstep:Cm,randInt:Rm,randFloat:Pm,randFloatSpread:Dm,seededRandom:Lm,degToRad:Im,radToDeg:Um,isPowerOfTwo:Fm,ceilPowerOfTwo:Nm,floorPowerOfTwo:Om,setQuaternionFromProperEuler:km,normalize:nn,denormalize:Ks};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],v=i[7],M=i[2],E=i[5],T=i[8];return s[0]=a*_+o*y+l*M,s[3]=a*m+o*x+l*E,s[6]=a*p+o*v+l*T,s[1]=c*_+h*y+u*M,s[4]=c*m+h*x+u*E,s[7]=c*p+h*v+u*T,s[2]=d*_+f*y+g*M,s[5]=d*m+f*x+g*E,s[8]=d*p+f*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Ht;function Yd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bm(){const r=mo("canvas");return r.style.display="block",r}const Xh={};function Gr(r){r in Xh||(Xh[r]=!0,console.warn(r))}function zm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Vm(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gm(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?Po:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const qh=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],jh=[.3127,.329],Zh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Cr]:{primaries:qh,whitePoint:jh,transfer:Po,toXYZ:Zh,fromXYZ:Kh,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:qh,whitePoint:jh,transfer:he,toXYZ:Zh,fromXYZ:Kh,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let Ns;class Hm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=mo("canvas")),Ns.width=t.width,Ns.height=t.height;const n=Ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $m=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wo(i[a].image)):s.push(Wo(i[a]))}else s=Wo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wm=0;class rn extends Ps{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=ys,i=ys,s=ri,a=bs,o=qn,l=Ri,c=rn.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Ds(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Fd;rn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,M=(p+1)/2,E=(h+d)/4,T=(u+_)/4,C=(g+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=T/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends Ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends Xm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zd extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qm extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,p*y);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const v=o*y;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new I,Jh=new ts;class ma{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Ma.subVectors(this.max,Ur),Os.subVectors(t.a,Ur),ks.subVectors(t.b,Ur),Bs.subVectors(t.c,Ur),Fi.subVectors(ks,Os),Ni.subVectors(Bs,ks),os.subVectors(Os,Bs);let e=[0,-Fi.z,Fi.y,0,-Ni.z,Ni.y,0,-os.z,os.y,Fi.z,0,-Fi.x,Ni.z,0,-Ni.x,os.z,0,-os.x,-Fi.y,Fi.x,0,-Ni.y,Ni.x,0,-os.y,os.x,0];return!qo(e,Os,ks,Bs,Ma)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Os,ks,Bs,Ma))?!1:(Ea.crossVectors(Fi,Ni),e=[Ea.x,Ea.y,Ea.z],qo(e,Os,ks,Bs,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Sa=new ma,Os=new I,ks=new I,Bs=new I,Fi=new I,Ni=new I,os=new I,Ur=new I,Ma=new I,Ea=new I,ls=new I;function qo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ls.fromArray(r,s);const o=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ym=new ma,Fr=new I,Yo=new I;class Do{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ym.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Yo)),this.expandByPoint(Fr.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new I,jo=new I,wa=new I,Oi=new I,Zo=new I,Ta=new I,Ko=new I;class Lo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jo.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(jo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wa),o=Oi.dot(this.direction),l=-Oi.dot(wa),c=Oi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(jo).addScaledVector(wa,d),f}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,i,s){Zo.subVectors(e,t),Ta.subVectors(n,t),Ko.crossVectors(Zo,Ta);let a=this.direction.dot(Ko),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,t);const l=o*this.direction.dot(Ta.crossVectors(Oi,Ta));if(l<0)return null;const c=o*this.direction.dot(Zo.cross(Oi));if(c<0||l+c>a)return null;const h=-o*Oi.dot(Ko);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/zs.setFromMatrixColumn(t,0).length(),s=1/zs.setFromMatrixColumn(t,1).length(),a=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jm,t,Zm)}lookAt(t,e,n){const i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ki.crossVectors(n,_n),ki.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ki.crossVectors(n,_n)),ki.normalize(),Aa.crossVectors(_n,ki),i[0]=ki.x,i[4]=Aa.x,i[8]=_n.x,i[1]=ki.y,i[5]=Aa.y,i[9]=_n.y,i[2]=ki.z,i[6]=Aa.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],M=n[15],E=i[0],T=i[4],C=i[8],b=i[12],S=i[1],D=i[5],k=i[9],N=i[13],B=i[2],W=i[6],V=i[10],Z=i[14],$=i[3],lt=i[7],dt=i[11],vt=i[15];return s[0]=a*E+o*S+l*B+c*$,s[4]=a*T+o*D+l*W+c*lt,s[8]=a*C+o*k+l*V+c*dt,s[12]=a*b+o*N+l*Z+c*vt,s[1]=h*E+u*S+d*B+f*$,s[5]=h*T+u*D+d*W+f*lt,s[9]=h*C+u*k+d*V+f*dt,s[13]=h*b+u*N+d*Z+f*vt,s[2]=g*E+_*S+m*B+p*$,s[6]=g*T+_*D+m*W+p*lt,s[10]=g*C+_*k+m*V+p*dt,s[14]=g*b+_*N+m*Z+p*vt,s[3]=y*E+x*S+v*B+M*$,s[7]=y*T+x*D+v*W+M*lt,s[11]=y*C+x*k+v*V+M*dt,s[15]=y*b+x*N+v*Z+M*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,M=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,E=e*y+n*x+i*v+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=y*T,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*T,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*T,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,t[4]=x*T,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*T,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*T,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*T,t[8]=v*T,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*T,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*T,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=M*T,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,y=l*c,x=l*h,v=l*u,M=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+v)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=zs.set(i[0],i[1],i[2]).length();const a=zs.set(i[4],i[5],i[6]).length(),o=zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Hn.copy(this);const c=1/s,h=1/a,u=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Mi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Mi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===po)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Mi){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===Mi)g=(a+s)*u,_=-2*u;else if(o===po)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zs=new I,Hn=new ce,jm=new I(0,0,0),Zm=new I(1,1,1),ki=new I,Aa=new I,_n=new I,Qh=new ce,tu=new ts;class oi{constructor(t=0,e=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Km=0;const eu=new I,Vs=new ts,pi=new ce,Ca=new I,Nr=new I,Jm=new I,Qm=new ts,nu=new I(1,0,0),iu=new I(0,1,0),su=new I(0,0,1),ru={type:"added"},t0={type:"removed"},Gs={type:"childadded",child:null},Jo={type:"childremoved",child:null};class ze extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new I,e=new oi,n=new ts,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Nr,Ca,this.up):pi.lookAt(Ca,Nr,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(pi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t0),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new I,mi=new I,Qo=new I,gi=new I,Hs=new I,$s=new I,au=new I,tl=new I,el=new I,nl=new I,il=new Le,sl=new Le,rl=new Le;class Un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$n.subVectors(t,e),i.cross($n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){$n.subVectors(i,e),mi.subVectors(n,e),Qo.subVectors(t,e);const a=$n.dot($n),o=$n.dot(mi),l=$n.dot(Qo),c=mi.dot(mi),h=mi.dot(Qo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),rl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(il,s.x),a.addScaledVector(sl,s.y),a.addScaledVector(rl,s.z),a}static isFrontFacing(t,e,n,i){return $n.subVectors(n,e),mi.subVectors(t,e),$n.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),$n.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Hs.subVectors(i,n),$s.subVectors(s,n),tl.subVectors(t,n);const l=Hs.dot(tl),c=$s.dot(tl);if(l<=0&&c<=0)return e.copy(n);el.subVectors(t,i);const h=Hs.dot(el),u=$s.dot(el);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Hs,a);nl.subVectors(t,s);const f=Hs.dot(nl),g=$s.dot(nl);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector($s,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return au.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(au,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Hs,a).addScaledVector($s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function al(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Kc(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=al(a,s,t+1/3),this.g=al(a,s,t),this.b=al(a,s,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ee.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Be(Ke.r*255,0,255))*65536+Math.round(Be(Ke.g*255,0,255))*256+Math.round(Be(Ke.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,s=Ke.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=cn){ee.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Ra);const n=Xr(Bi.h,Ra.h,e),i=Xr(Bi.s,Ra.s,e),s=Xr(Bi.l,Ra.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new jt;jt.NAMES=Kd;let e0=0;class Rr extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Ds(),this.name="",this.blending=rr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vr extends Rr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new I,Pa=new et;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hh,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hh&&(t.usage=this.usage),t}}class Jd extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qd extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let n0=0;const Pn=new ce,ol=new ze,Ws=new I,vn=new ma,Or=new ma,He=new I;class Xe extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yd(t)?Qd:Jd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(vn.min,Or.min),vn.expandByPoint(He),He.addVectors(vn.max,Or.max),vn.expandByPoint(He)):(vn.expandByPoint(Or.min),vn.expandByPoint(Or.max))}vn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(t,c),He.add(Ws)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,d=new et,f=new et,g=new et,_=new I,m=new I;function p(C,b,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(_),o[b].add(_),o[S].add(_),l[C].add(m),l[b].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,b=y.length;C<b;++C){const S=y[C],D=S.start,k=S.count;for(let N=D,B=D+k;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new I,v=new I,M=new I,E=new I;function T(C){M.fromBufferAttribute(i,C),E.copy(M);const b=o[C];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,D)}for(let C=0,b=y.length;C<b;++C){const S=y[C],D=S.start,k=S.count;for(let N=D,B=D+k;N<B;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new En(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new ce,cs=new Lo,Da=new Do,lu=new I,La=new I,Ia=new I,Ua=new I,ll=new I,Fa=new I,cu=new I,Na=new I;class St extends ze{constructor(t=new Xe,e=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ll.fromBufferAttribute(u,t),a?Fa.addScaledVector(ll,h):Fa.addScaledVector(ll.sub(e),h))}e.add(Fa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),cs.copy(t.ray).recast(t.near),!(Da.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Da,lu)===null||cs.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(ou.copy(s).invert(),cs.copy(t.ray).applyMatrix4(ou),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,M=x;v<M;v+=3){const E=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=Oa(this,p,t,n,c,h,u,E,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Oa(this,a,t,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,M=x;v<M;v+=3){const E=v,T=v+1,C=v+2;i=Oa(this,p,t,n,c,h,u,E,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;i=Oa(this,a,t,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function i0(r,t,e,n,i,s,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ci,o),l===null)return null;Na.copy(o),Na.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Na);return c<e.near||c>e.far?null:{distance:c,point:Na.clone(),object:r}}function Oa(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,La),r.getVertexPosition(l,Ia),r.getVertexPosition(c,Ua);const h=i0(r,t,e,n,La,Ia,Ua,cu);if(h){const u=new I;Un.getBarycoord(cu,La,Ia,Ua,u),i&&(h.uv=Un.getInterpolatedAttribute(i,o,l,c,u,new et)),s&&(h.uv1=Un.getInterpolatedAttribute(s,o,l,c,u,new et)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Un.getNormal(La,Ia,Ua,d.normal),h.face=d,h.barycoord=u}return h}class Pe extends Xe{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,p,y,x,v,M,E,T,C,b){const S=v/T,D=M/C,k=v/2,N=M/2,B=E/2,W=T+1,V=C+1;let Z=0,$=0;const lt=new I;for(let dt=0;dt<V;dt++){const vt=dt*D-N;for(let It=0;It<W;It++){const Qt=It*S-k;lt[_]=Qt*y,lt[m]=vt*x,lt[p]=B,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[p]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(It/T),u.push(1-dt/C),Z+=1}}for(let dt=0;dt<C;dt++)for(let vt=0;vt<T;vt++){const It=d+vt+W*dt,Qt=d+vt+W*(dt+1),q=d+(vt+1)+W*(dt+1),it=d+(vt+1)+W*dt;l.push(It,Qt,it),l.push(Qt,q,it),$+=6}o.addGroup(f,$,b),f+=$,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function sn(r){const t={};for(let e=0;e<r.length;e++){const n=xr(r[e]);for(const i in n)t[i]=n[i]}return t}function s0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function tf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const r0={clone:xr,merge:sn};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Rr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ef extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new I,hu=new et,uu=new et;class In extends ef{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xs=-90,qs=1;class l0 extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(Xs,qs,t,e);i.layers=this.layers,this.add(i);const s=new In(Xs,qs,t,e);s.layers=this.layers,this.add(s);const a=new In(Xs,qs,t,e);a.layers=this.layers,this.add(a);const o=new In(Xs,qs,t,e);o.layers=this.layers,this.add(o);const l=new In(Xs,qs,t,e);l.layers=this.layers,this.add(l);const c=new In(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nf extends rn{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c0 extends Cs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pe(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ji});s.uniforms.tEquirect.value=e;const a=new St(i,s),o=e.minFilter;return e.minFilter===bs&&(e.minFilter=ri),new l0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const cl=new I,h0=new I,u0=new Ht;class $i{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=cl.subVectors(n,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||u0.getNormalMatrix(t),i=this.coplanarPoint(cl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Do,ka=new I;class th{constructor(t=new $i,e=new $i,n=new $i,i=new $i,s=new $i,a=new $i){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+y).normalize(),n[3].setComponents(l-a,d-h,m-g,v-y).normalize(),n[4].setComponents(l-o,d-u,m-_,v-x).normalize(),e===Mi)n[5].setComponents(l+o,d+u,m+_,v+x).normalize();else if(e===po)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ka.x=i.normal.x>0?t.max.x:t.min.x,ka.y=i.normal.y>0?t.max.y:t.min.y,ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function d0(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class jn extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,v=y+c*(p+1),M=y+1+c*(p+1),E=y+1+c*p;f.push(x,v,E),f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,dg=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`#include <common>
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
}`,x_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,I_=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U_=`#define PHONG
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
}`,F_=`#define PHONG
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
}`,N_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,k_=`#define TOON
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
}`,B_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,$_=`uniform float rotation;
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
}`,W_=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:x0,aomap_pars_fragment:y0,batching_pars_vertex:b0,batching_vertex:S0,begin_vertex:M0,beginnormal_vertex:E0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:D0,color_fragment:L0,color_pars_fragment:I0,color_pars_vertex:U0,color_vertex:F0,common:N0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:k0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:V0,emissivemap_pars_fragment:G0,colorspace_fragment:H0,colorspace_pars_fragment:$0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:rg,envmap_vertex:j0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:J0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tg,lightmap_pars_fragment:eg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:vg,map_fragment:xg,map_pars_fragment:yg,map_particle_fragment:bg,map_particle_pars_fragment:Sg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Cg,morphtarget_vertex:Rg,normal_fragment_begin:Pg,normal_fragment_maps:Dg,normal_pars_fragment:Lg,normal_pars_vertex:Ig,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:Vg,premultiplied_alpha_fragment:Gg,project_vertex:Hg,dithering_fragment:$g,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Kg,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:t_,skinnormal_vertex:e_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:a_,transmission_pars_fragment:o_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:h_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:v_,depth_frag:x_,distanceRGBA_vert:y_,distanceRGBA_frag:b_,equirect_vert:S_,equirect_frag:M_,linedashed_vert:E_,linedashed_frag:w_,meshbasic_vert:T_,meshbasic_frag:A_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:P_,meshmatcap_frag:D_,meshnormal_vert:L_,meshnormal_frag:I_,meshphong_vert:U_,meshphong_frag:F_,meshphysical_vert:N_,meshphysical_frag:O_,meshtoon_vert:k_,meshtoon_frag:B_,points_vert:z_,points_frag:V_,shadow_vert:G_,shadow_frag:H_,sprite_vert:$_,sprite_frag:W_},ut={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ii={basic:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:sn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:sn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:sn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:sn([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:sn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:sn([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:sn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:sn([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:sn([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:sn([ut.lights,ut.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ba={r:0,b:0,g:0},us=new oi,X_=new ce;function q_(r,t,e,n,i,s,a){const o=new jt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Ro)?(h===void 0&&(h=new St(new Pe(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:xr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),us.copy(x.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(us)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new jn(2,2),new Pi({name:"BackgroundMaterial",uniforms:xr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Ba,tf(r)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function Y_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,D,k,N,B){let W=!1;const V=u(N,k,D);s!==V&&(s=V,c(s.object)),W=f(S,N,k,B),W&&g(S,N,k,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(S,D,k,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,D,k){const N=k.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let W=B[D.id];W===void 0&&(W={},B[D.id]=W);let V=W[N];return V===void 0&&(V=d(l()),W[N]=V),V}function d(S){const D=[],k=[],N=[];for(let B=0;B<e;B++)D[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,D,k,N){const B=s.attributes,W=D.attributes;let V=0;const Z=k.getAttributes();for(const $ in Z)if(Z[$].location>=0){const dt=B[$];let vt=W[$];if(vt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),dt===void 0||dt.attribute!==vt||vt&&dt.data!==vt.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function g(S,D,k,N){const B={},W=D.attributes;let V=0;const Z=k.getAttributes();for(const $ in Z)if(Z[$].location>=0){let dt=W[$];dt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));const vt={};vt.attribute=dt,dt&&dt.data&&(vt.data=dt.data),B[$]=vt,V++}s.attributes=B,s.attributesNum=V,s.index=N}function _(){const S=s.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const k=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;k[S]=1,N[S]===0&&(r.enableVertexAttribArray(S),N[S]=1),B[S]!==D&&(r.vertexAttribDivisor(S,D),B[S]=D)}function y(){const S=s.newAttributes,D=s.enabledAttributes;for(let k=0,N=D.length;k<N;k++)D[k]!==S[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function x(S,D,k,N,B,W,V){V===!0?r.vertexAttribIPointer(S,D,k,B,W):r.vertexAttribPointer(S,D,k,N,B,W)}function v(S,D,k,N){_();const B=N.attributes,W=k.getAttributes(),V=D.defaultAttributeValues;for(const Z in W){const $=W[Z];if($.location>=0){let lt=B[Z];if(lt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){const dt=lt.normalized,vt=lt.itemSize,It=t.get(lt);if(It===void 0)continue;const Qt=It.buffer,q=It.type,it=It.bytesPerElement,wt=q===r.INT||q===r.UNSIGNED_INT||lt.gpuType===Wc;if(lt.isInterleavedBufferAttribute){const ct=lt.data,Lt=ct.stride,Bt=lt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<$.locationSize;Ot++)p($.location+Ot,ct.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<$.locationSize;Ot++)m($.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<$.locationSize;Ot++)x($.location+Ot,vt/$.locationSize,q,dt,Lt*it,(Bt+vt/$.locationSize*Ot)*it,wt)}else{if(lt.isInstancedBufferAttribute){for(let ct=0;ct<$.locationSize;ct++)p($.location+ct,lt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ct=0;ct<$.locationSize;ct++)m($.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let ct=0;ct<$.locationSize;ct++)x($.location+ct,vt/$.locationSize,q,dt,vt*it,vt/$.locationSize*ct*it,wt)}}else if(V!==void 0){const dt=V[Z];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv($.location,dt);break;case 3:r.vertexAttrib3fv($.location,dt);break;case 4:r.vertexAttrib4fv($.location,dt);break;default:r.vertexAttrib1fv($.location,dt)}}}}y()}function M(){C();for(const S in n){const D=n[S];for(const k in D){const N=D[k];for(const B in N)h(N[B].object),delete N[B];delete D[k]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const k in D){const N=D[k];for(const B in N)h(N[B].object),delete N[B];delete D[k]}delete n[S.id]}function T(S){for(const D in n){const k=n[D];if(k[S.id]===void 0)continue;const N=k[S.id];for(const B in N)h(N[B].object),delete N[B];delete k[S.id]}}function C(){b(),a=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function j_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==qn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ri&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:M,maxSamples:E}}function K_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new $i,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=h(g,d,x,f);for(let M=0;M!==x;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function J_(r){let t=new WeakMap;function e(a,o){return o===Yl?a.mapping=pr:o===jl&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yl||o===jl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c0(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rf extends ef{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const tr=4,du=[.125,.215,.35,.446,.526,.582],xs=20,hl=new rf,fu=new jt;let ul=null,dl=0,fl=0,pl=!1;const gs=(1+Math.sqrt(5))/2,Ys=1/gs,pu=[new I(-gs,Ys,0),new I(gs,Ys,0),new I(-Ys,0,gs),new I(Ys,0,gs),new I(0,gs,-Ys),new I(0,gs,Ys),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:pa,format:qn,colorSpace:Cr,depthBuffer:!1},i=gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q_(s)),this._blurMaterial=tv(s,t,e)}return i}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,n,i){const o=new In(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fu),h.toneMapping=wi,h.autoClear=!1;const f=new vr({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new St(new Pe,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(fu),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;za(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pr||t.mapping===mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;za(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,hl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pu[(i-s-1)%pu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):xs;m>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const p=[];let y=0;for(let T=0;T<xs;++T){const C=T/_,b=Math.exp(-C*C/2);p.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],M=3*v*(i>x-tr?i-x+tr:0),E=4*(this._cubeSize-v);za(e,M,E,3*v,2*v),l.setRenderTarget(e),l.render(u,hl)}}function Q_(r){const t=[],e=[],n=[];let i=r;const s=r-tr+1+du.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-tr?l=du[a-r+tr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(b,_*g*E),x.set(d,m*g*E);const S=[E,E,E,E,E,E];v.set(S,p*g*E)}const M=new Xe;M.setAttribute("position",new En(y,_)),M.setAttribute("uv",new En(x,m)),M.setAttribute("faceIndex",new En(v,p)),t.push(M),i>tr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gu(r,t,e){const n=new Cs(r,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function tv(r,t,e){const n=new Float32Array(xs),i=new I(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _u(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function vu(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function ev(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yl||l===jl,h=l===pr||l===mr;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new mu(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new mu(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function nv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iv(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const M=y[x+0],E=y[x+1],T=y[x+2];d.push(M,E,E,T,T,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const M=x+0,E=x+1,T=x+2;d.push(M,E,E,T,T,M)}}else return;const m=new(Yd(d)?Qd:Jd)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sv(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function av(r,t,e){const n=new WeakMap,i=new Le;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*M*4*u),T=new Zd(E,v,M,u);T.type=Si,T.needsUpdate=!0;const C=x*4;for(let S=0;S<u;S++){const D=m[S],k=p[S],N=y[S],B=v*M*4*S;for(let W=0;W<D.count;W++){const V=W*C;f===!0&&(i.fromBufferAttribute(D,W),E[B+V+0]=i.x,E[B+V+1]=i.y,E[B+V+2]=i.z,E[B+V+3]=0),g===!0&&(i.fromBufferAttribute(k,W),E[B+V+4]=i.x,E[B+V+5]=i.y,E[B+V+6]=i.z,E[B+V+7]=0),_===!0&&(i.fromBufferAttribute(N,W),E[B+V+8]=i.x,E[B+V+9]=i.y,E[B+V+10]=i.z,E[B+V+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new et(v,M)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ov(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class af extends rn{constructor(t,e,n,i,s,a,o,l,c,h=ar){if(h!==ar&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ar&&(n=As),n===void 0&&h===_r&&(n=gr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const of=new rn,xu=new af(1,1),lf=new Zd,cf=new qm,hf=new nf,yu=[],bu=[],Su=new Float32Array(16),Mu=new Float32Array(9),Eu=new Float32Array(4);function Pr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=yu[i];if(s===void 0&&(s=new Float32Array(i),yu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Io(r,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function lv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2fv(this.addr,t),Ge(e,t)}}function hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;r.uniform3fv(this.addr,t),Ge(e,t)}}function uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4fv(this.addr,t),Ge(e,t)}}function dv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Eu.set(n),r.uniformMatrix2fv(this.addr,!1,Eu),Ge(e,n)}}function fv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Mu.set(n),r.uniformMatrix3fv(this.addr,!1,Mu),Ge(e,n)}}function pv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Su.set(n),r.uniformMatrix4fv(this.addr,!1,Su),Ge(e,n)}}function mv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2iv(this.addr,t),Ge(e,t)}}function _v(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3iv(this.addr,t),Ge(e,t)}}function vv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4iv(this.addr,t),Ge(e,t)}}function xv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function yv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2uiv(this.addr,t),Ge(e,t)}}function bv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3uiv(this.addr,t),Ge(e,t)}}function Sv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4uiv(this.addr,t),Ge(e,t)}}function Mv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(xu.compareFunction=qd,s=xu):s=of,e.setTexture2D(t||s,i)}function Ev(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cf,i)}function wv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hf,i)}function Tv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lf,i)}function Av(r){switch(r){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return yv;case 36295:return bv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Tv}}function Cv(r,t){r.uniform1fv(this.addr,t)}function Rv(r,t){const e=Pr(t,this.size,2);r.uniform2fv(this.addr,e)}function Pv(r,t){const e=Pr(t,this.size,3);r.uniform3fv(this.addr,e)}function Dv(r,t){const e=Pr(t,this.size,4);r.uniform4fv(this.addr,e)}function Lv(r,t){const e=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Iv(r,t){const e=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Uv(r,t){const e=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Fv(r,t){r.uniform1iv(this.addr,t)}function Nv(r,t){r.uniform2iv(this.addr,t)}function Ov(r,t){r.uniform3iv(this.addr,t)}function kv(r,t){r.uniform4iv(this.addr,t)}function Bv(r,t){r.uniform1uiv(this.addr,t)}function zv(r,t){r.uniform2uiv(this.addr,t)}function Vv(r,t){r.uniform3uiv(this.addr,t)}function Gv(r,t){r.uniform4uiv(this.addr,t)}function Hv(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||of,s[a])}function $v(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cf,s[a])}function Wv(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hf,s[a])}function Xv(r,t,e){const n=this.cache,i=t.length,s=Io(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lf,s[a])}function qv(r){switch(r){case 5126:return Cv;case 35664:return Rv;case 35665:return Pv;case 35666:return Dv;case 35674:return Lv;case 35675:return Iv;case 35676:return Uv;case 5124:case 35670:return Fv;case 35667:case 35671:return Nv;case 35668:case 35672:return Ov;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return zv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}class Yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Av(e.type)}}class jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qv(e.type)}}class Zv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function wu(r,t){r.seq.push(t),r.map[t.id]=t}function Kv(r,t,e){const n=r.name,i=n.length;for(ml.lastIndex=0;;){const s=ml.exec(n),a=ml.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wu(e,c===void 0?new Yv(o,r,t):new jv(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Zv(o),wu(e,u)),e=u}}}class ao{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Kv(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Tu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Jv=37297;let Qv=0;function tx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Au=new Ht;function ex(r){ee._getMatrix(Au,ee.workingColorSpace,r);const t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(r)){case Po:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Cu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+tx(r.getShaderSource(t),a)}else return i}function nx(r,t){const e=ex(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ix(r,t){let e;switch(t){case rm:e="Linear";break;case am:e="Reinhard";break;case om:e="Cineon";break;case lm:e="ACESFilmic";break;case hm:e="AgX";break;case um:e="Neutral";break;case cm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new I;function sx(){ee.getLuminanceCoefficients(Va);const r=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function ax(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ox(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Hr(r){return r!==""}function Ru(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(r){return r.replace(lx,hx)}const cx=new Map;function hx(r,t){let e=Wt[t];if(e===void 0){const n=cx.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(r){return r.replace(ux,dx)}function dx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Id?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function px(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function gx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ud:t="ENVMAP_BLENDING_MULTIPLY";break;case im:t="ENVMAP_BLENDING_MIX";break;case sm:t="ENVMAP_BLENDING_ADD";break}return t}function _x(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vx(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fx(e),c=px(e),h=mx(e),u=gx(e),d=_x(e),f=rx(e),g=ax(s),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==wi?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,nx("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),a=Mc(a),a=Ru(a,e),a=Pu(a,e),o=Mc(o),o=Ru(o,e),o=Pu(o,e),a=Du(a),o=Du(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,M=Tu(i,i.VERTEX_SHADER,x),E=Tu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,M),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(E).trim();let W=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,E);else{const Z=Cu(i,M,"vertex"),$=Cu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Z+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(V=!1);V&&(D.diagnostics={runnable:W,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(M),i.deleteShader(E),C=new ao(i,_),b=ox(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Jv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let xx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bx(t),e.set(t,n)),n}}class bx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function Sx(r,t,e,n,i,s,a){const o=new Qc,l=new yx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,k,N){const B=k.fog,W=N.geometry,V=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),$=Z&&Z.mapping===Ro?Z.image.height:null,lt=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=dt!==void 0?dt.length:0;let It=0;W.morphAttributes.position!==void 0&&(It=1),W.morphAttributes.normal!==void 0&&(It=2),W.morphAttributes.color!==void 0&&(It=3);let Qt,q,it,wt;if(lt){const le=ii[lt];Qt=le.vertexShader,q=le.fragmentShader}else Qt=b.vertexShader,q=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),wt=l.getFragmentShaderID(b);const ct=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,te=!!b.map,J=!!b.matcap,at=!!Z,L=!!b.aoMap,Pt=!!b.lightMap,st=!!b.bumpMap,bt=!!b.normalMap,ht=!!b.displacementMap,Ft=!!b.emissiveMap,xt=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,z=b.clearcoat>0,Y=b.dispersion>0,Q=b.iridescence>0,j=b.sheen>0,Tt=b.transmission>0,ft=w&&!!b.anisotropyMap,yt=z&&!!b.clearcoatMap,Yt=z&&!!b.clearcoatNormalMap,rt=z&&!!b.clearcoatRoughnessMap,Mt=Q&&!!b.iridescenceMap,Nt=Q&&!!b.iridescenceThicknessMap,kt=j&&!!b.sheenColorMap,Et=j&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,$t=!!b.specularColorMap,ve=!!b.specularIntensityMap,U=Tt&&!!b.transmissionMap,pt=Tt&&!!b.thicknessMap,X=!!b.gradientMap,K=!!b.alphaMap,_t=b.alphaTest>0,mt=!!b.alphaHash,Vt=!!b.extensions;let Re=wi;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Re=r.toneMapping);const je={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:Qt,fragmentShader:q,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Cr,alphaToCoverage:!!b.alphaToCoverage,map:te,matcap:J,envMap:at,envMapMode:at&&Z.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:Pt,bumpMap:st,normalMap:bt,displacementMap:d&&ht,emissiveMap:Ft,normalMapObjectSpace:bt&&b.normalMapType===mm,normalMapTangentSpace:bt&&b.normalMapType===Xd,metalnessMap:xt,roughnessMap:R,anisotropy:w,anisotropyMap:ft,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:rt,dispersion:Y,iridescence:Q,iridescenceMap:Mt,iridescenceThicknessMap:Nt,sheen:j,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:Kt,specularColorMap:$t,specularIntensityMap:ve,transmission:Tt,transmissionMap:U,thicknessMap:pt,gradientMap:X,opaque:b.transparent===!1&&b.blending===rr&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:_t,alphaHash:mt,combine:b.combine,mapUv:te&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:Pt&&_(b.lightMap.channel),bumpMapUv:st&&_(b.bumpMap.channel),normalMapUv:bt&&_(b.normalMap.channel),displacementMapUv:ht&&_(b.displacementMap.channel),emissiveMapUv:Ft&&_(b.emissiveMap.channel),metalnessMapUv:xt&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:ft&&_(b.anisotropyMap.channel),clearcoatMapUv:yt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(b.sheenRoughnessMap.channel),specularMapUv:Kt&&_(b.specularMap.channel),specularColorMapUv:$t&&_(b.specularColorMap.channel),specularIntensityMapUv:ve&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:pt&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(bt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(te||K),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:It,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:te&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:Ft&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=g[b.type];let D;if(S){const k=ii[S];D=r0.clone(k.uniforms)}else D=b.uniforms;return D}function M(b,S){let D;for(let k=0,N=h.length;k<N;k++){const B=h[k];if(B.cacheKey===S){D=B,++D.usedTimes;break}}return D===void 0&&(D=new vx(r,S,b,s),h.push(D)),D}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function Mx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ex(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Iu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Ex),n.length>1&&n.sort(d||Iu),i.length>1&&i.sort(d||Iu)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function wx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Uu,r.set(n,[a])):i>=s.length?(a=new Uu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Tx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Ax(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Cx=0;function Rx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Px(r){const t=new Tx,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ce,a=new ce;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,M=0,E=0,T=0;c.sort(Rx);for(let b=0,S=c.length;b<S;b++){const D=c[b],k=D.color,N=D.intensity,B=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],N);T++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,$=e.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=V,f++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(k).multiplyScalar(N),V.distance=B,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const Z=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,Z.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const $=e.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=W,v++}_++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(k).multiplyScalar(N),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Z=D.shadow,$=e.get(D);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(N),V.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=T,n.version=Cx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Fu(r){const t=new Px(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Dx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Fu(r),t.set(i,[o])):s>=a.length?(o=new Fu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lx extends Rr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ix extends Rr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
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
}`;function Nx(r,t,e){let n=new th;const i=new et,s=new et,a=new Le,o=new Lx({depthPacking:pm}),l=new Ix,c={},h=e.maxTextureSize,u={[Ci]:tn,[tn]:Ci,[Xn]:Xn},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=p!==vi&&this.type===vi,B=p===vi&&this.type!==vi;for(let W=0,V=E.length;W<V;W++){const Z=E[W],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const lt=$.getFrameExtents();if(i.multiply(lt),s.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/lt.x),i.x=s.x*lt.x,$.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/lt.y),i.y=s.y*lt.y,$.mapSize.y=s.y)),$.map===null||N===!0||B===!0){const vt=this.type!==vi?{minFilter:Yn,magFilter:Yn}:{};$.map!==null&&$.map.dispose(),$.map=new Cs(i.x,i.y,vt),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const dt=$.getViewportCount();for(let vt=0;vt<dt;vt++){const It=$.getViewport(vt);a.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),k.viewport(a),$.updateMatrices(Z,vt),n=$.getFrustum(),v(T,C,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===vi&&y($,C),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,S,D)};function y(E,T){const C=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cs(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,C,f,_,null)}function x(E,T,C,b){let S=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=S.uuid,N=T.uuid;let B=c[k];B===void 0&&(B={},c[k]=B);let W=B[N];W===void 0&&(W=S.clone(),B[N]=W,T.addEventListener("dispose",M)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,b===vi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=r.properties.get(S);k.light=C}return S}function v(E,T,C,b,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===vi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const N=t.update(E),B=E.material;if(Array.isArray(B)){const W=N.groups;for(let V=0,Z=W.length;V<Z;V++){const $=W[V],lt=B[$.materialIndex];if(lt&&lt.visible){const dt=x(E,lt,b,S);E.onBeforeShadow(r,E,T,C,N,dt,$),r.renderBufferDirect(C,null,N,dt,E,$),E.onAfterShadow(r,E,T,C,N,dt,$)}}}else if(B.visible){const W=x(E,B,b,S);E.onBeforeShadow(r,E,T,C,N,W,null),r.renderBufferDirect(C,null,N,W,E,null),E.onAfterShadow(r,E,T,C,N,W,null)}}const k=E.children;for(let N=0,B=k.length;N<B;N++)v(k[N],T,C,b,S)}function M(E){E.target.removeEventListener("dispose",M);for(const C in c){const b=c[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Ox={[Vl]:Gl,[Hl]:Xl,[$l]:ql,[fr]:Wl,[Gl]:Vl,[Xl]:Hl,[ql]:$l,[Wl]:fr};function kx(r,t){function e(){let U=!1;const pt=new Le;let X=null;const K=new Le(0,0,0,0);return{setMask:function(_t){X!==_t&&!U&&(r.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){U=_t},setClear:function(_t,mt,Vt,Re,je){je===!0&&(_t*=Re,mt*=Re,Vt*=Re),pt.set(_t,mt,Vt,Re),K.equals(pt)===!1&&(r.clearColor(_t,mt,Vt,Re),K.copy(pt))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,X=null,K=null,_t=null;return{setReversed:function(mt){if(pt!==mt){const Vt=t.get("EXT_clip_control");pt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Re=_t;_t=null,this.setClear(Re)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?ct(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(mt){X!==mt&&!U&&(r.depthMask(mt),X=mt)},setFunc:function(mt){if(pt&&(mt=Ox[mt]),K!==mt){switch(mt){case Vl:r.depthFunc(r.NEVER);break;case Gl:r.depthFunc(r.ALWAYS);break;case Hl:r.depthFunc(r.LESS);break;case fr:r.depthFunc(r.LEQUAL);break;case $l:r.depthFunc(r.EQUAL);break;case Wl:r.depthFunc(r.GEQUAL);break;case Xl:r.depthFunc(r.GREATER);break;case ql:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=mt}},setLocked:function(mt){U=mt},setClear:function(mt){_t!==mt&&(pt&&(mt=1-mt),r.clearDepth(mt),_t=mt)},reset:function(){U=!1,X=null,K=null,_t=null,pt=!1}}}function i(){let U=!1,pt=null,X=null,K=null,_t=null,mt=null,Vt=null,Re=null,je=null;return{setTest:function(le){U||(le?ct(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(le){pt!==le&&!U&&(r.stencilMask(le),pt=le)},setFunc:function(le,zn,hi){(X!==le||K!==zn||_t!==hi)&&(r.stencilFunc(le,zn,hi),X=le,K=zn,_t=hi)},setOp:function(le,zn,hi){(mt!==le||Vt!==zn||Re!==hi)&&(r.stencilOp(le,zn,hi),mt=le,Vt=zn,Re=hi)},setLocked:function(le){U=le},setClear:function(le){je!==le&&(r.clearStencil(le),je=le)},reset:function(){U=!1,pt=null,X=null,K=null,_t=null,mt=null,Vt=null,Re=null,je=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,M=null,E=null,T=new jt(0,0,0),C=0,b=!1,S=null,D=null,k=null,N=null,B=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),V=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=Z>=2);let lt=null,dt={};const vt=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Qt=new Le().fromArray(vt),q=new Le().fromArray(It);function it(U,pt,X,K){const _t=new Uint8Array(4),mt=r.createTexture();r.bindTexture(U,mt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<X;Vt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(pt,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,_t):r.texImage2D(pt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_t);return mt}const wt={};wt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),wt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),wt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(r.DEPTH_TEST),a.setFunc(fr),st(!1),bt(kh),ct(r.CULL_FACE),L(ji);function ct(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Lt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Bt(U,pt){return u[U]!==pt?(r.bindFramebuffer(U,pt),u[U]=pt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=pt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ot(U,pt){let X=f,K=!1;if(U){X=d.get(pt),X===void 0&&(X=[],d.set(pt,X));const _t=U.textures;if(X.length!==_t.length||X[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Vt=_t.length;mt<Vt;mt++)X[mt]=r.COLOR_ATTACHMENT0+mt;X.length=_t.length,K=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,K=!0);K&&r.drawBuffers(X)}function te(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const J={[vs]:r.FUNC_ADD,[zp]:r.FUNC_SUBTRACT,[Vp]:r.FUNC_REVERSE_SUBTRACT};J[Gp]=r.MIN,J[Hp]=r.MAX;const at={[$p]:r.ZERO,[Wp]:r.ONE,[Xp]:r.SRC_COLOR,[Bl]:r.SRC_ALPHA,[Jp]:r.SRC_ALPHA_SATURATE,[Zp]:r.DST_COLOR,[Yp]:r.DST_ALPHA,[qp]:r.ONE_MINUS_SRC_COLOR,[zl]:r.ONE_MINUS_SRC_ALPHA,[Kp]:r.ONE_MINUS_DST_COLOR,[jp]:r.ONE_MINUS_DST_ALPHA,[Qp]:r.CONSTANT_COLOR,[tm]:r.ONE_MINUS_CONSTANT_COLOR,[em]:r.CONSTANT_ALPHA,[nm]:r.ONE_MINUS_CONSTANT_ALPHA};function L(U,pt,X,K,_t,mt,Vt,Re,je,le){if(U===ji){_===!0&&(Lt(r.BLEND),_=!1);return}if(_===!1&&(ct(r.BLEND),_=!0),U!==Bp){if(U!==m||le!==b){if((p!==vs||v!==vs)&&(r.blendEquation(r.FUNC_ADD),p=vs,v=vs),le)switch(U){case rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bh:r.blendFunc(r.ONE,r.ONE);break;case zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,M=null,E=null,T.set(0,0,0),C=0,m=U,b=le}return}_t=_t||pt,mt=mt||X,Vt=Vt||K,(pt!==p||_t!==v)&&(r.blendEquationSeparate(J[pt],J[_t]),p=pt,v=_t),(X!==y||K!==x||mt!==M||Vt!==E)&&(r.blendFuncSeparate(at[X],at[K],at[mt],at[Vt]),y=X,x=K,M=mt,E=Vt),(Re.equals(T)===!1||je!==C)&&(r.blendColor(Re.r,Re.g,Re.b,je),T.copy(Re),C=je),m=U,b=!1}function Pt(U,pt){U.side===Xn?Lt(r.CULL_FACE):ct(r.CULL_FACE);let X=U.side===tn;pt&&(X=!X),st(X),U.blending===rr&&U.transparent===!1?L(ji):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function bt(U){U!==Op?(ct(r.CULL_FACE),U!==D&&(U===kh?r.cullFace(r.BACK):U===kp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),D=U}function ht(U){U!==k&&(V&&r.lineWidth(U),k=U)}function Ft(U,pt,X){U?(ct(r.POLYGON_OFFSET_FILL),(N!==pt||B!==X)&&(r.polygonOffset(pt,X),N=pt,B=X)):Lt(r.POLYGON_OFFSET_FILL)}function xt(U){U?ct(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function R(U){U===void 0&&(U=r.TEXTURE0+W-1),lt!==U&&(r.activeTexture(U),lt=U)}function w(U,pt,X){X===void 0&&(lt===null?X=r.TEXTURE0+W-1:X=lt);let K=dt[X];K===void 0&&(K={type:void 0,texture:void 0},dt[X]=K),(K.type!==U||K.texture!==pt)&&(lt!==X&&(r.activeTexture(X),lt=X),r.bindTexture(U,pt||wt[U]),K.type=U,K.texture=pt)}function z(){const U=dt[lt];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(U){Qt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function Et(U){q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Kt(U,pt){let X=c.get(pt);X===void 0&&(X=new WeakMap,c.set(pt,X));let K=X.get(U);K===void 0&&(K=r.getUniformBlockIndex(pt,U.name),X.set(U,K))}function $t(U,pt){const K=c.get(pt).get(U);l.get(pt)!==K&&(r.uniformBlockBinding(pt,K,U.__bindingPointIndex),l.set(pt,K))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},lt=null,dt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,M=null,E=null,T=new jt(0,0,0),C=0,b=!1,S=null,D=null,k=null,N=null,B=null,Qt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ct,disable:Lt,bindFramebuffer:Bt,drawBuffers:Ot,useProgram:te,setBlending:L,setMaterial:Pt,setFlipSided:st,setCullFace:bt,setLineWidth:ht,setPolygonOffset:Ft,setScissorTest:xt,activeTexture:R,bindTexture:w,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:Nt,updateUBOMapping:Kt,uniformBlockBinding:$t,texStorage2D:Yt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:kt,viewport:Et,reset:ve}}function Nu(r,t,e,n){const i=Bx(n);switch(e){case Bd:return r*t;case Vd:return r*t;case Gd:return r*t*2;case Hd:return r*t/i.components*i.byteLength;case Yc:return r*t/i.components*i.byteLength;case $d:return r*t*2/i.components*i.byteLength;case jc:return r*t*2/i.components*i.byteLength;case zd:return r*t*3/i.components*i.byteLength;case qn:return r*t*4/i.components*i.byteLength;case Zc:return r*t*4/i.components*i.byteLength;case eo:case no:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jl:case tc:return Math.max(r,16)*Math.max(t,8)/4;case Kl:case Ql:return Math.max(r,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ro:case vc:case xc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case yc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case bc:case Sc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bx(r){switch(r){case Ri:case Nd:return{byteLength:1,components:1};case Jr:case Od:case pa:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case As:case Wc:case Si:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function zx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):mo("canvas")}function _(R,w,z){let Y=1;const Q=xt(R);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*Q.width),Tt=Math.floor(Y*Q.height);u===void 0&&(u=g(j,Tt));const ft=w?g(j,Tt):u;return ft.width=j,ft.height=Tt,ft.getContext("2d").drawImage(R,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Tt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,w,z,Y,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=w;if(w===r.RED&&(z===r.FLOAT&&(j=r.R32F),z===r.HALF_FLOAT&&(j=r.R16F),z===r.UNSIGNED_BYTE&&(j=r.R8)),w===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.R8UI),z===r.UNSIGNED_SHORT&&(j=r.R16UI),z===r.UNSIGNED_INT&&(j=r.R32UI),z===r.BYTE&&(j=r.R8I),z===r.SHORT&&(j=r.R16I),z===r.INT&&(j=r.R32I)),w===r.RG&&(z===r.FLOAT&&(j=r.RG32F),z===r.HALF_FLOAT&&(j=r.RG16F),z===r.UNSIGNED_BYTE&&(j=r.RG8)),w===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RG8UI),z===r.UNSIGNED_SHORT&&(j=r.RG16UI),z===r.UNSIGNED_INT&&(j=r.RG32UI),z===r.BYTE&&(j=r.RG8I),z===r.SHORT&&(j=r.RG16I),z===r.INT&&(j=r.RG32I)),w===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RGB8UI),z===r.UNSIGNED_SHORT&&(j=r.RGB16UI),z===r.UNSIGNED_INT&&(j=r.RGB32UI),z===r.BYTE&&(j=r.RGB8I),z===r.SHORT&&(j=r.RGB16I),z===r.INT&&(j=r.RGB32I)),w===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),z===r.UNSIGNED_INT&&(j=r.RGBA32UI),z===r.BYTE&&(j=r.RGBA8I),z===r.SHORT&&(j=r.RGBA16I),z===r.INT&&(j=r.RGBA32I)),w===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),w===r.RGBA){const Tt=Q?Po:ee.getTransfer(Y);z===r.FLOAT&&(j=r.RGBA32F),z===r.HALF_FLOAT&&(j=r.RGBA16F),z===r.UNSIGNED_BYTE&&(j=Tt===he?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(R,w){let z;return R?w===null||w===As||w===gr?z=r.DEPTH24_STENCIL8:w===Si?z=r.DEPTH32F_STENCIL8:w===Jr&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===As||w===gr?z=r.DEPTH_COMPONENT24:w===Si?z=r.DEPTH_COMPONENT32F:w===Jr&&(z=r.DEPTH_COMPONENT16),z}function M(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yn&&R.minFilter!==ri?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){const w=R.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function T(R){const w=R.target;w.removeEventListener("dispose",T),S(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const z=R.source,Y=d.get(z);if(Y){const Q=Y[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(R),Object.keys(Y).length===0&&d.delete(z)}n.remove(R)}function b(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const z=R.source,Y=d.get(z);delete Y[w.__cacheKey],a.memory.textures--}function S(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let Q=0;Q<w.__webglFramebuffer[Y].length;Q++)r.deleteFramebuffer(w.__webglFramebuffer[Y][Q]);else r.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)r.deleteFramebuffer(w.__webglFramebuffer[Y]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,Q=z.length;Y<Q;Y++){const j=n.get(z[Y]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(R)}let D=0;function k(){D=0}function N(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function B(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function W(R,w){const z=n.get(R);if(R.isVideoTexture&&ht(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,R,w);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+w)}function V(R,w){const z=n.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+w)}function Z(R,w){const z=n.get(R);if(R.version>0&&z.__version!==R.version){q(z,R,w);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+w)}function $(R,w){const z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+w)}const lt={[Qi]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[Zl]:r.MIRRORED_REPEAT},dt={[Yn]:r.NEAREST,[dm]:r.NEAREST_MIPMAP_NEAREST,[ba]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[Ho]:r.LINEAR_MIPMAP_NEAREST,[bs]:r.LINEAR_MIPMAP_LINEAR},vt={[gm]:r.NEVER,[Sm]:r.ALWAYS,[_m]:r.LESS,[qd]:r.LEQUAL,[vm]:r.EQUAL,[bm]:r.GEQUAL,[xm]:r.GREATER,[ym]:r.NOTEQUAL};function It(R,w){if(w.type===Si&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ri||w.magFilter===Ho||w.magFilter===ba||w.magFilter===bs||w.minFilter===ri||w.minFilter===Ho||w.minFilter===ba||w.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,lt[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,lt[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,lt[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,dt[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,dt[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,vt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yn||w.minFilter!==ba&&w.minFilter!==bs||w.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Qt(R,w){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const Y=w.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const j=B(w);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[j].usedTimes++;const Tt=Q[R.__cacheKey];Tt!==void 0&&(Q[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(w)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return z}function q(R,w,z){let Y=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=r.TEXTURE_3D);const Q=Qt(R,w),j=w.source;e.bindTexture(Y,R.__webglTexture,r.TEXTURE0+z);const Tt=n.get(j);if(j.version!==Tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+z);const ft=ee.getPrimaries(ee.workingColorSpace),yt=w.colorSpace===Wi?null:ee.getPrimaries(w.colorSpace),Yt=w.colorSpace===Wi||ft===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let rt=_(w.image,!1,i.maxTextureSize);rt=Ft(w,rt);const Mt=s.convert(w.format,w.colorSpace),Nt=s.convert(w.type);let kt=x(w.internalFormat,Mt,Nt,w.colorSpace,w.isVideoTexture);It(Y,w);let Et;const Kt=w.mipmaps,$t=w.isVideoTexture!==!0,ve=Tt.__version===void 0||Q===!0,U=j.dataReady,pt=M(w,rt);if(w.isDepthTexture)kt=v(w.format===_r,w.type),ve&&($t?e.texStorage2D(r.TEXTURE_2D,1,kt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,kt,rt.width,rt.height,0,Mt,Nt,null));else if(w.isDataTexture)if(Kt.length>0){$t&&ve&&e.texStorage2D(r.TEXTURE_2D,pt,kt,Kt[0].width,Kt[0].height);for(let X=0,K=Kt.length;X<K;X++)Et=Kt[X],$t?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Et.width,Et.height,Mt,Nt,Et.data):e.texImage2D(r.TEXTURE_2D,X,kt,Et.width,Et.height,0,Mt,Nt,Et.data);w.generateMipmaps=!1}else $t?(ve&&e.texStorage2D(r.TEXTURE_2D,pt,kt,rt.width,rt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,Mt,Nt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,kt,rt.width,rt.height,0,Mt,Nt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$t&&ve&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,kt,Kt[0].width,Kt[0].height,rt.depth);for(let X=0,K=Kt.length;X<K;X++)if(Et=Kt[X],w.format!==qn)if(Mt!==null)if($t){if(U)if(w.layerUpdates.size>0){const _t=Nu(Et.width,Et.height,w.format,w.type);for(const mt of w.layerUpdates){const Vt=Et.data.subarray(mt*_t/Et.data.BYTES_PER_ELEMENT,(mt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,mt,Et.width,Et.height,1,Mt,Vt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,rt.depth,Mt,Et.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,kt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,rt.depth,Mt,Nt,Et.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,kt,Et.width,Et.height,rt.depth,0,Mt,Nt,Et.data)}else{$t&&ve&&e.texStorage2D(r.TEXTURE_2D,pt,kt,Kt[0].width,Kt[0].height);for(let X=0,K=Kt.length;X<K;X++)Et=Kt[X],w.format!==qn?Mt!==null?$t?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,Et.width,Et.height,Mt,Et.data):e.compressedTexImage2D(r.TEXTURE_2D,X,kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Et.width,Et.height,Mt,Nt,Et.data):e.texImage2D(r.TEXTURE_2D,X,kt,Et.width,Et.height,0,Mt,Nt,Et.data)}else if(w.isDataArrayTexture)if($t){if(ve&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,kt,rt.width,rt.height,rt.depth),U)if(w.layerUpdates.size>0){const X=Nu(rt.width,rt.height,w.format,w.type);for(const K of w.layerUpdates){const _t=rt.data.subarray(K*X/rt.data.BYTES_PER_ELEMENT,(K+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,Mt,Nt,_t)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Nt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,rt.width,rt.height,rt.depth,0,Mt,Nt,rt.data);else if(w.isData3DTexture)$t?(ve&&e.texStorage3D(r.TEXTURE_3D,pt,kt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Nt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,kt,rt.width,rt.height,rt.depth,0,Mt,Nt,rt.data);else if(w.isFramebufferTexture){if(ve)if($t)e.texStorage2D(r.TEXTURE_2D,pt,kt,rt.width,rt.height);else{let X=rt.width,K=rt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(r.TEXTURE_2D,_t,kt,X,K,0,Mt,Nt,null),X>>=1,K>>=1}}else if(Kt.length>0){if($t&&ve){const X=xt(Kt[0]);e.texStorage2D(r.TEXTURE_2D,pt,kt,X.width,X.height)}for(let X=0,K=Kt.length;X<K;X++)Et=Kt[X],$t?U&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Mt,Nt,Et):e.texImage2D(r.TEXTURE_2D,X,kt,Mt,Nt,Et);w.generateMipmaps=!1}else if($t){if(ve){const X=xt(rt);e.texStorage2D(r.TEXTURE_2D,pt,kt,X.width,X.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,Nt,rt)}else e.texImage2D(r.TEXTURE_2D,0,kt,Mt,Nt,rt);m(w)&&p(Y),Tt.__version=j.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function it(R,w,z){if(w.image.length!==6)return;const Y=Qt(R,w),Q=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const j=n.get(Q);if(Q.version!==j.__version||Y===!0){e.activeTexture(r.TEXTURE0+z);const Tt=ee.getPrimaries(ee.workingColorSpace),ft=w.colorSpace===Wi?null:ee.getPrimaries(w.colorSpace),yt=w.colorSpace===Wi||Tt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let K=0;K<6;K++)!Yt&&!rt?Mt[K]=_(w.image[K],!0,i.maxCubemapSize):Mt[K]=rt?w.image[K].image:w.image[K],Mt[K]=Ft(w,Mt[K]);const Nt=Mt[0],kt=s.convert(w.format,w.colorSpace),Et=s.convert(w.type),Kt=x(w.internalFormat,kt,Et,w.colorSpace),$t=w.isVideoTexture!==!0,ve=j.__version===void 0||Y===!0,U=Q.dataReady;let pt=M(w,Nt);It(r.TEXTURE_CUBE_MAP,w);let X;if(Yt){$t&&ve&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Kt,Nt.width,Nt.height);for(let K=0;K<6;K++){X=Mt[K].mipmaps;for(let _t=0;_t<X.length;_t++){const mt=X[_t];w.format!==qn?kt!==null?$t?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,mt.width,mt.height,kt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Kt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,mt.width,mt.height,kt,Et,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Kt,mt.width,mt.height,0,kt,Et,mt.data)}}}else{if(X=w.mipmaps,$t&&ve){X.length>0&&pt++;const K=xt(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Kt,K.width,K.height)}for(let K=0;K<6;K++)if(rt){$t?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt[K].width,Mt[K].height,kt,Et,Mt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,Mt[K].width,Mt[K].height,0,kt,Et,Mt[K].data);for(let _t=0;_t<X.length;_t++){const Vt=X[_t].image[K].image;$t?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Vt.width,Vt.height,kt,Et,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Kt,Vt.width,Vt.height,0,kt,Et,Vt.data)}}else{$t?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,kt,Et,Mt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Kt,kt,Et,Mt[K]);for(let _t=0;_t<X.length;_t++){const mt=X[_t];$t?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,kt,Et,mt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Kt,kt,Et,mt.image[K])}}}m(w)&&p(r.TEXTURE_CUBE_MAP),j.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function wt(R,w,z,Y,Q,j){const Tt=s.convert(z.format,z.colorSpace),ft=s.convert(z.type),yt=x(z.internalFormat,Tt,ft,z.colorSpace),Yt=n.get(w),rt=n.get(z);if(rt.__renderTarget=w,!Yt.__hasExternalTextures){const Mt=Math.max(1,w.width>>j),Nt=Math.max(1,w.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,yt,Mt,Nt,w.depth,0,Tt,ft,null):e.texImage2D(Q,j,yt,Mt,Nt,0,Tt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),bt(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Q,rt.__webglTexture,0,st(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Q,rt.__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,w,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){const Y=w.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=v(w.stencilBuffer,Q),Tt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=st(w);bt(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,j,w.width,w.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,j,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,j,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,R)}else{const Y=w.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],Tt=s.convert(j.format,j.colorSpace),ft=s.convert(j.type),yt=x(j.internalFormat,Tt,ft,j.colorSpace),Yt=st(w);z&&bt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,yt,w.width,w.height):bt(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,yt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,yt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const Q=Y.__webglTexture,j=st(w);if(w.depthTexture.format===ar)bt(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(w.depthTexture.format===_r)bt(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const w=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=Y}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Lt(w.__webglFramebuffer,R)}else if(z){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=r.createRenderbuffer(),ct(w.__webglDepthbuffer[Y],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ct(w.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(R,w,z){const Y=n.get(R);w!==void 0&&wt(Y.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Bt(R)}function te(R){const w=R.texture,z=n.get(R),Y=n.get(w);R.addEventListener("dispose",T);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=w.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let yt=0;yt<w.mipmaps.length;yt++)z.__webglFramebuffer[ft][yt]=r.createFramebuffer()}else z.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)z.__webglFramebuffer[ft]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let ft=0,yt=Q.length;ft<yt;ft++){const Yt=n.get(Q[ft]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&bt(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const yt=Q[ft];z.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const Yt=s.convert(yt.format,yt.colorSpace),rt=s.convert(yt.type),Mt=x(yt.internalFormat,Yt,rt,yt.colorSpace,R.isXRRenderTarget===!0),Nt=st(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,Mt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),It(r.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)wt(z.__webglFramebuffer[ft][yt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else wt(z.__webglFramebuffer[ft],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(w)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,yt=Q.length;ft<yt;ft++){const Yt=Q[ft],rt=n.get(Yt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),It(r.TEXTURE_2D,Yt),wt(z.__webglFramebuffer,R,Yt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),m(Yt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),It(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)wt(z.__webglFramebuffer[yt],R,w,r.COLOR_ATTACHMENT0,ft,yt);else wt(z.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,ft,0);m(w)&&p(ft),e.unbindTexture()}R.depthBuffer&&Bt(R)}function J(R){const w=R.textures;for(let z=0,Y=w.length;z<Y;z++){const Q=w[z];if(m(Q)){const j=y(R),Tt=n.get(Q).__webglTexture;e.bindTexture(j,Tt),p(j),e.unbindTexture()}}}const at=[],L=[];function Pt(R){if(R.samples>0){if(bt(R)===!1){const w=R.textures,z=R.width,Y=R.height;let Q=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(R),ft=w.length>1;if(ft)for(let yt=0;yt<w.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<w.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Yt=n.get(w[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,r.NEAREST),l===!0&&(at.length=0,L.length=0,at.push(r.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(j),L.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<w.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Yt=n.get(w[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function st(R){return Math.min(i.maxSamples,R.samples)}function bt(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Ft(R,w){const z=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Cr&&z!==Wi&&(ee.getTransfer(z)===he?(Y!==qn||Q!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=Ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=bt}function Vx(r,t){function e(n,i=Wi){let s;const a=ee.getTransfer(i);if(n===Ri)return r.UNSIGNED_BYTE;if(n===Xc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return r.BYTE;if(n===Od)return r.SHORT;if(n===Jr)return r.UNSIGNED_SHORT;if(n===Wc)return r.INT;if(n===As)return r.UNSIGNED_INT;if(n===Si)return r.FLOAT;if(n===pa)return r.HALF_FLOAT;if(n===Bd)return r.ALPHA;if(n===zd)return r.RGB;if(n===qn)return r.RGBA;if(n===Vd)return r.LUMINANCE;if(n===Gd)return r.LUMINANCE_ALPHA;if(n===ar)return r.DEPTH_COMPONENT;if(n===_r)return r.DEPTH_STENCIL;if(n===Hd)return r.RED;if(n===Yc)return r.RED_INTEGER;if(n===$d)return r.RG;if(n===jc)return r.RG_INTEGER;if(n===Zc)return r.RGBA_INTEGER;if(n===eo||n===no||n===io||n===so)if(a===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Jl||n===Ql||n===tc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ec||n===nc)return a===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ic)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===vc||n===xc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ro)return a===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===yc||n===bc||n===Sc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Gx extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new rn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:$x,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends Ps{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Xx,m=e.getContextAttributes();let p=null,y=null;const x=[],v=[],M=new et;let E=null;const T=new In;T.viewport=new Le;const C=new In;C.viewport=new Le;const b=[T,C],S=new Gx;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=x[q];return it===void 0&&(it=new gl,x[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=x[q];return it===void 0&&(it=new gl,x[q]=it),it.getGripSpace()},this.getHand=function(q){let it=x[q];return it===void 0&&(it=new gl,x[q]=it),it.getHandSpace()};function N(q){const it=v.indexOf(q.inputSource);if(it===-1)return;const wt=x[it];wt!==void 0&&(wt.update(q.inputSource,q.frame,c||a),wt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let q=0;q<x.length;q++){const it=v[q];it!==null&&(v[q]=null,x[q].disconnect(it))}D=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Cs(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,wt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?_r:ar,wt=m.stencil?gr:As);const Lt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Cs(d.textureWidth,d.textureHeight,{format:qn,type:Ri,depthTexture:new af(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(q){for(let it=0;it<q.removed.length;it++){const wt=q.removed[it],ct=v.indexOf(wt);ct>=0&&(v[ct]=null,x[ct].disconnect(wt))}for(let it=0;it<q.added.length;it++){const wt=q.added[it];let ct=v.indexOf(wt);if(ct===-1){for(let Bt=0;Bt<x.length;Bt++)if(Bt>=v.length){v.push(wt),ct=Bt;break}else if(v[Bt]===null){v[Bt]=wt,ct=Bt;break}if(ct===-1)break}const Lt=x[ct];Lt&&Lt.connect(wt)}}const V=new I,Z=new I;function $(q,it,wt){V.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(wt.matrixWorld);const ct=V.distanceTo(Z),Lt=it.projectionMatrix.elements,Bt=wt.projectionMatrix.elements,Ot=Lt[14]/(Lt[10]-1),te=Lt[14]/(Lt[10]+1),J=(Lt[9]+1)/Lt[5],at=(Lt[9]-1)/Lt[5],L=(Lt[8]-1)/Lt[0],Pt=(Bt[8]+1)/Bt[0],st=Ot*L,bt=Ot*Pt,ht=ct/(-L+Pt),Ft=ht*-L;if(it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ft),q.translateZ(ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Lt[10]===-1)q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const xt=Ot+ht,R=te+ht,w=st-Ft,z=bt+(ct-Ft),Y=J*te/R*xt,Q=at*te/R*xt;q.projectionMatrix.makePerspective(w,z,Y,Q,xt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let it=q.near,wt=q.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),S.near=C.near=T.near=it,S.far=C.far=T.far=wt,(D!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,k=S.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const ct=q.parent,Lt=S.cameras;lt(S,ct);for(let Bt=0;Bt<Lt.length;Bt++)lt(Lt[Bt],ct);Lt.length===2?$(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),dt(q,S,ct)};function dt(q,it,wt){wt===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(wt.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let vt=null;function It(q,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let Bt=0;Bt<wt.length;Bt++){const Ot=wt[Bt];let te=null;if(f!==null)te=f.getViewport(Ot);else{const at=u.getViewSubImage(d,Ot);te=at.viewport,Bt===0&&(t.setRenderTargetTextures(y,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(y))}let J=b[Bt];J===void 0&&(J=new In,J.layers.enable(Bt),J.viewport=new Le,b[Bt]=J),J.matrix.fromArray(Ot.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ot.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(te.x,te.y,te.width,te.height),Bt===0&&(S.matrix.copy(J.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(J)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Bt=u.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let wt=0;wt<x.length;wt++){const ct=v[wt],Lt=x[wt];ct!==null&&Lt!==void 0&&Lt.update(ct,it,c||a)}vt&&vt(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Qt=new sf;Qt.setAnimationLoop(It),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const ds=new oi,Yx=new ce;function jx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,ds.copy(v),ds.x*=-1,ds.y*=-1,ds.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(ds)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(y,M);const E=t.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){const x=u();y.__bindingPointIndex=x;const v=r.createBuffer(),M=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,E,b,M)===!0){const k=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let W=0;W<N.length;W++){const V=N[W],Z=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,k+B,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,v,M){const E=y.value,T=x+"_"+v;if(M[T]===void 0)return typeof E=="number"||typeof E=="boolean"?M[T]=E:M[T]=E.clone(),!0;{const C=M[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return M[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){const x=y.uniforms;let v=0;const M=16;for(let T=0,C=x.length;T<C;T++){const b=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,D=b.length;S<D;S++){const k=b[S],N=Array.isArray(k.value)?k.value:[k.value];for(let B=0,W=N.length;B<W;B++){const V=N[B],Z=_(V),$=v%M,lt=$%Z.boundary,dt=$+lt;v+=lt,dt!==0&&M-dt<Z.storage&&(v+=M-dt),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Z.storage}}}const E=v%M;return E>0&&(v+=M-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Kx{constructor(t={}){const{canvas:e=Bm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=wi,this.toneMappingExposure=1;const v=this;let M=!1,E=0,T=0,C=null,b=-1,S=null;const D=new Le,k=new Le;let N=null;const B=new jt(0);let W=0,V=e.width,Z=e.height,$=1,lt=null,dt=null;const vt=new Le(0,0,V,Z),It=new Le(0,0,V,Z);let Qt=!1;const q=new th;let it=!1,wt=!1;const ct=new ce,Lt=new ce,Bt=new I,Ot=new Le,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function at(){return C===null?$:1}let L=n;function Pt(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),L===null){const F="webgl2";if(L=Pt(F,A),L===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let st,bt,ht,Ft,xt,R,w,z,Y,Q,j,Tt,ft,yt,Yt,rt,Mt,Nt,kt,Et,Kt,$t,ve,U;function pt(){st=new nv(L),st.init(),$t=new Vx(L,st),bt=new Z_(L,st,t,$t),ht=new kx(L,st),bt.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Ft=new rv(L),xt=new Mx,R=new zx(L,st,ht,xt,bt,$t,Ft),w=new J_(v),z=new ev(v),Y=new d0(L),ve=new Y_(L,Y),Q=new iv(L,Y,Ft,ve),j=new ov(L,Q,Y,Ft),kt=new av(L,bt,R),rt=new K_(xt),Tt=new Sx(v,w,z,st,bt,ve,rt),ft=new jx(v,xt),yt=new wx,Yt=new Dx(st),Nt=new q_(v,w,z,ht,j,f,l),Mt=new Nx(v,j,bt),U=new Zx(L,Ft,bt,ht),Et=new j_(L,st,Ft),Kt=new sv(L,st,Ft),Ft.programs=Tt.programs,v.capabilities=bt,v.extensions=st,v.properties=xt,v.renderLists=yt,v.shadowMap=Mt,v.state=ht,v.info=Ft}pt();const X=new qx(v,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(V,Z,!1))},this.getSize=function(A){return A.set(V,Z)},this.setSize=function(A,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Z=F,e.width=Math.floor(A*$),e.height=Math.floor(F*$),G===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(V*$,Z*$).floor()},this.setDrawingBufferSize=function(A,F,G){V=A,Z=F,$=G,e.width=Math.floor(A*G),e.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,F,G,H){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,F,G,H),ht.viewport(D.copy(vt).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(It)},this.setScissor=function(A,F,G,H){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,F,G,H),ht.scissor(k.copy(It).multiplyScalar($).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(A){ht.setScissorTest(Qt=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,F=!0,G=!0){let H=0;if(A){let O=!1;if(C!==null){const ot=C.texture.format;O=ot===Zc||ot===jc||ot===Yc}if(O){const ot=C.texture.type,gt=ot===Ri||ot===As||ot===Jr||ot===gr||ot===Xc||ot===qc,At=Nt.getClearColor(),Ct=Nt.getClearAlpha(),zt=At.r,Gt=At.g,Rt=At.b;gt?(g[0]=zt,g[1]=Gt,g[2]=Rt,g[3]=Ct,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=zt,_[1]=Gt,_[2]=Rt,_[3]=Ct,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}F&&(H|=L.DEPTH_BUFFER_BIT),G&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),Yt.dispose(),xt.dispose(),w.dispose(),z.dispose(),j.dispose(),ve.dispose(),U.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ph),X.removeEventListener("sessionend",Dh),as.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Ft.autoReset,F=Mt.enabled,G=Mt.autoUpdate,H=Mt.needsUpdate,O=Mt.type;pt(),Ft.autoReset=A,Mt.enabled=F,Mt.autoUpdate=G,Mt.needsUpdate=H,Mt.type=O}function mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Vt(A){const F=A.target;F.removeEventListener("dispose",Vt),Re(F)}function Re(A){je(A),xt.remove(A)}function je(A){const F=xt.get(A).programs;F!==void 0&&(F.forEach(function(G){Tt.releaseProgram(G)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,H,O,ot){F===null&&(F=te);const gt=O.isMesh&&O.matrixWorld.determinant()<0,At=Up(A,F,G,H,O);ht.setMaterial(H,gt);let Ct=G.index,zt=1;if(H.wireframe===!0){if(Ct=Q.getWireframeAttribute(G),Ct===void 0)return;zt=2}const Gt=G.drawRange,Rt=G.attributes.position;let ie=Gt.start*zt,xe=(Gt.start+Gt.count)*zt;ot!==null&&(ie=Math.max(ie,ot.start*zt),xe=Math.min(xe,(ot.start+ot.count)*zt)),Ct!==null?(ie=Math.max(ie,0),xe=Math.min(xe,Ct.count)):Rt!=null&&(ie=Math.max(ie,0),xe=Math.min(xe,Rt.count));const be=xe-ie;if(be<0||be===1/0)return;ve.setup(O,H,At,G,Ct);let an,se=Et;if(Ct!==null&&(an=Y.get(Ct),se=Kt,se.setIndex(an)),O.isMesh)H.wireframe===!0?(ht.setLineWidth(H.wireframeLinewidth*at()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(O.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),ht.setLineWidth(Dt*at()),O.isLineSegments?se.setMode(L.LINES):O.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else O.isPoints?se.setMode(L.POINTS):O.isSprite&&se.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Dt=O._multiDrawStarts,ui=O._multiDrawCounts,re=O._multiDrawCount,Vn=Ct?Y.get(Ct).bytesPerElement:1,Us=xt.get(H).currentProgram.getUniforms();for(let gn=0;gn<re;gn++)Us.setValue(L,"_gl_DrawID",gn),se.render(Dt[gn]/Vn,ui[gn])}else if(O.isInstancedMesh)se.renderInstances(ie,be,O.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ui=Math.min(G.instanceCount,Dt);se.renderInstances(ie,be,ui)}else se.render(ie,be)};function le(A,F,G){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,ya(A,F,G),A.side=Ci,A.needsUpdate=!0,ya(A,F,G),A.side=Xn):ya(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),p=Yt.get(G),p.init(F),x.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==G&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const At=ot[gt];le(At,G,O),H.add(At)}else le(ot,G,O),H.add(ot)}),x.pop(),p=null,H},this.compileAsync=function(A,F,G=null){const H=this.compile(A,F,G);return new Promise(O=>{function ot(){if(H.forEach(function(gt){xt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){O(A);return}setTimeout(ot,10)}st.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let zn=null;function hi(A){zn&&zn(A)}function Ph(){as.stop()}function Dh(){as.start()}const as=new sf;as.setAnimationLoop(hi),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(A){zn=A,X.setAnimationLoop(A),A===null?as.stop():as.start()},X.addEventListener("sessionstart",Ph),X.addEventListener("sessionend",Dh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,C),p=Yt.get(A,x.length),p.init(F),x.push(p),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Lt),wt=this.localClippingEnabled,it=rt.init(this.clippingPlanes,wt),m=yt.get(A,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Go(ot,F,-1/0,v.sortObjects)}Go(A,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(lt,dt),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&Nt.addToRenderList(m,A),this.info.render.frame++,it===!0&&rt.beginShadows();const G=p.state.shadowsArray;Mt.render(G,A,F),it===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ot=F.cameras;if(O.length>0)for(let gt=0,At=ot.length;gt<At;gt++){const Ct=ot[gt];Ih(H,O,A,Ct)}J&&Nt.render(A);for(let gt=0,At=ot.length;gt<At;gt++){const Ct=ot[gt];Lh(m,A,Ct,Ct.viewport)}}else O.length>0&&Ih(H,O,A,F),J&&Nt.render(A),Lh(m,A,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,F),ve.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],it===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Go(A,F,G,H){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){H&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const gt=j.update(A),At=A.material;At.visible&&m.push(A,gt,At,G,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const gt=j.update(A),At=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ot.copy(gt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(At)){const Ct=gt.groups;for(let zt=0,Gt=Ct.length;zt<Gt;zt++){const Rt=Ct[zt],ie=At[Rt.materialIndex];ie&&ie.visible&&m.push(A,gt,ie,G,Ot.z,Rt)}}else At.visible&&m.push(A,gt,At,G,Ot.z,null)}}const ot=A.children;for(let gt=0,At=ot.length;gt<At;gt++)Go(ot[gt],F,G,H)}function Lh(A,F,G,H){const O=A.opaque,ot=A.transmissive,gt=A.transparent;p.setupLightsView(G),it===!0&&rt.setGlobalState(v.clippingPlanes,G),H&&ht.viewport(D.copy(H)),O.length>0&&xa(O,F,G),ot.length>0&&xa(ot,F,G),gt.length>0&&xa(gt,F,G),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Ih(A,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Cs(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?pa:Ri,minFilter:bs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ot=p.state.transmissionRenderTarget[H.id],gt=H.viewport||D;ot.setSize(gt.z,gt.w);const At=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),J&&Nt.render(G);const Ct=v.toneMapping;v.toneMapping=wi;const zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),it===!0&&rt.setGlobalState(v.clippingPlanes,H),xa(A,G,H),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),st.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Rt=0,ie=F.length;Rt<ie;Rt++){const xe=F[Rt],be=xe.object,an=xe.geometry,se=xe.material,Dt=xe.group;if(se.side===Xn&&be.layers.test(H.layers)){const ui=se.side;se.side=tn,se.needsUpdate=!0,Uh(be,G,H,an,se,Dt),se.side=ui,se.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}v.setRenderTarget(At),v.setClearColor(B,W),zt!==void 0&&(H.viewport=zt),v.toneMapping=Ct}function xa(A,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ot=A.length;O<ot;O++){const gt=A[O],At=gt.object,Ct=gt.geometry,zt=H===null?gt.material:H,Gt=gt.group;At.layers.test(G.layers)&&Uh(At,F,G,Ct,zt,Gt)}}function Uh(A,F,G,H,O,ot){A.onBeforeRender(v,F,G,H,O,ot),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,F,G,H,A,ot),O.transparent===!0&&O.side===Xn&&O.forceSinglePass===!1?(O.side=tn,O.needsUpdate=!0,v.renderBufferDirect(G,F,H,O,A,ot),O.side=Ci,O.needsUpdate=!0,v.renderBufferDirect(G,F,H,O,A,ot),O.side=Xn):v.renderBufferDirect(G,F,H,O,A,ot),A.onAfterRender(v,F,G,H,O,ot)}function ya(A,F,G){F.isScene!==!0&&(F=te);const H=xt.get(A),O=p.state.lights,ot=p.state.shadowsArray,gt=O.state.version,At=Tt.getParameters(A,O.state,ot,F,G),Ct=Tt.getProgramCacheKey(At);let zt=H.programs;H.environment=A.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(A.isMeshStandardMaterial?z:w).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Vt),zt=new Map,H.programs=zt);let Gt=zt.get(Ct);if(Gt!==void 0){if(H.currentProgram===Gt&&H.lightsStateVersion===gt)return Nh(A,At),Gt}else At.uniforms=Tt.getUniforms(A),A.onBeforeCompile(At,v),Gt=Tt.acquireProgram(At,Ct),zt.set(Ct,Gt),H.uniforms=At.uniforms;const Rt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),Nh(A,At),H.needsLights=Np(A),H.lightsStateVersion=gt,H.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Gt,H.uniformsList=null,Gt}function Fh(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=ao.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Nh(A,F){const G=xt.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Up(A,F,G,H,O){F.isScene!==!0&&(F=te),R.resetTextureUnits();const ot=F.fog,gt=H.isMeshStandardMaterial?F.environment:null,At=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cr,Ct=(H.isMeshStandardMaterial?z:w).get(H.envMap||gt),zt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color;let be=wi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=v.toneMapping);const an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=an!==void 0?an.length:0,Dt=xt.get(H),ui=p.state.lights;if(it===!0&&(wt===!0||A!==S)){const Rn=A===S&&H.id===b;rt.setState(H,A,Rn)}let re=!1;H.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ui.state.version||Dt.outputColorSpace!==At||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==Ct||H.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Gt||Dt.morphTargets!==Rt||Dt.morphNormals!==ie||Dt.morphColors!==xe||Dt.toneMapping!==be||Dt.morphTargetsCount!==se)&&(re=!0):(re=!0,Dt.__version=H.version);let Vn=Dt.currentProgram;re===!0&&(Vn=ya(H,F,O));let Us=!1,gn=!1,Lr=!1;const Se=Vn.getUniforms(),Kn=Dt.uniforms;if(ht.useProgram(Vn.program)&&(Us=!0,gn=!0,Lr=!0),H.id!==b&&(b=H.id,gn=!0),Us||S!==A){ht.buffers.depth.getReversed()?(ct.copy(A.projectionMatrix),Vm(ct),Gm(ct),Se.setValue(L,"projectionMatrix",ct)):Se.setValue(L,"projectionMatrix",A.projectionMatrix),Se.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ii=Se.map.cameraPosition;Ii!==void 0&&Ii.setValue(L,Bt.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,gn=!0,Lr=!0)}if(O.isSkinnedMesh){Se.setOptional(L,O,"bindMatrix"),Se.setOptional(L,O,"bindMatrixInverse");const Rn=O.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Se.setValue(L,"boneTexture",Rn.boneTexture,R))}O.isBatchedMesh&&(Se.setOptional(L,O,"batchingTexture"),Se.setValue(L,"batchingTexture",O._matricesTexture,R),Se.setOptional(L,O,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",O._indirectTexture,R),Se.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",O._colorsTexture,R));const Ir=G.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&kt.update(O,G,Vn),(gn||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,Se.setValue(L,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kn.envMap.value=Ct,Kn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Kn.envMapIntensity.value=F.environmentIntensity),gn&&(Se.setValue(L,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Fp(Kn,Lr),ot&&H.fog===!0&&ft.refreshFogUniforms(Kn,ot),ft.refreshMaterialUniforms(Kn,H,$,Z,p.state.transmissionRenderTarget[A.id]),ao.upload(L,Fh(Dt),Kn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ao.upload(L,Fh(Dt),Kn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(L,"center",O.center),Se.setValue(L,"modelViewMatrix",O.modelViewMatrix),Se.setValue(L,"normalMatrix",O.normalMatrix),Se.setValue(L,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Rn=H.uniformsGroups;for(let Ii=0,Ui=Rn.length;Ii<Ui;Ii++){const Oh=Rn[Ii];U.update(Oh,Vn),U.bind(Oh,Vn)}}return Vn}function Fp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Np(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,F,G){xt.get(A.texture).__webglTexture=F,xt.get(A.depthTexture).__webglTexture=G;const H=xt.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const G=xt.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){C=A,E=F,T=G;let H=!0,O=null,ot=!1,gt=!1;if(A){const Ct=xt.get(A);if(Ct.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Ct.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ct.__hasExternalTextures)R.rebindTextures(A,xt.get(A.texture).__webglTexture,xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Rt=A.depthTexture;if(Ct.__boundDepthTexture!==Rt){if(Rt!==null&&xt.has(Rt)&&(A.width!==Rt.image.width||A.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);const Gt=xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?O=Gt[F][G]:O=Gt[F],ot=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?O=xt.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?O=Gt[G]:O=Gt,D.copy(A.viewport),k.copy(A.scissor),N=A.scissorTest}else D.copy(vt).multiplyScalar($).floor(),k.copy(It).multiplyScalar($).floor(),N=Qt;if(ht.bindFramebuffer(L.FRAMEBUFFER,O)&&H&&ht.drawBuffers(A,O),ht.viewport(D),ht.scissor(k),ht.setScissorTest(N),ot){const Ct=xt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,G)}else if(gt){const Ct=xt.get(A.texture),zt=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.__webglTexture,G||0,zt)}b=-1},this.readRenderTargetPixels=function(A,F,G,H,O,ot,gt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(At=At[gt]),At){ht.bindFramebuffer(L.FRAMEBUFFER,At);try{const Ct=A.texture,zt=Ct.format,Gt=Ct.type;if(!bt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-H&&G>=0&&G<=A.height-O&&L.readPixels(F,G,H,O,$t.convert(zt),$t.convert(Gt),ot)}finally{const Ct=C!==null?xt.get(C).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,H,O,ot,gt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(At=At[gt]),At){const Ct=A.texture,zt=Ct.format,Gt=Ct.type;if(!bt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-H&&G>=0&&G<=A.height-O){ht.bindFramebuffer(L.FRAMEBUFFER,At);const Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),L.readPixels(F,G,H,O,$t.convert(zt),$t.convert(Gt),0);const ie=C!==null?xt.get(C).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,ie);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zm(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(Rt),L.deleteSync(xe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const H=Math.pow(2,-G),O=Math.floor(A.image.width*H),ot=Math.floor(A.image.height*H),gt=F!==null?F.x:0,At=F!==null?F.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,gt,At,O,ot),ht.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,H=null,O=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ot,gt,At,Ct,zt,Gt,Rt,ie,xe;const be=A.isCompressedTexture?A.mipmaps[O]:A.image;G!==null?(ot=G.max.x-G.min.x,gt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,zt=G.min.y,Gt=G.isBox3?G.min.z:0):(ot=be.width,gt=be.height,At=be.depth||1,Ct=0,zt=0,Gt=0),H!==null?(Rt=H.x,ie=H.y,xe=H.z):(Rt=0,ie=0,xe=0);const an=$t.convert(F.format),se=$t.convert(F.type);let Dt;F.isData3DTexture?(R.setTexture3D(F,0),Dt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Dt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ui=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vn=L.getParameter(L.UNPACK_SKIP_PIXELS),Us=L.getParameter(L.UNPACK_SKIP_ROWS),gn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,be.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,be.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);const Lr=A.isDataArrayTexture||A.isData3DTexture,Se=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Kn=xt.get(A),Ir=xt.get(F),Rn=xt.get(Kn.__renderTarget),Ii=xt.get(Ir.__renderTarget);ht.bindFramebuffer(L.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ui=0;Ui<At;Ui++)Lr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(A).__webglTexture,O,Gt+Ui),A.isDepthTexture?(Se&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(F).__webglTexture,O,xe+Ui),L.blitFramebuffer(Ct,zt,ot,gt,Rt,ie,ot,gt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Se?L.copyTexSubImage3D(Dt,O,Rt,ie,xe+Ui,Ct,zt,ot,gt):L.copyTexSubImage2D(Dt,O,Rt,ie,xe+Ui,Ct,zt,ot,gt);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Dt,O,Rt,ie,xe,ot,gt,At,an,se,be.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Dt,O,Rt,ie,xe,ot,gt,At,an,be.data):L.texSubImage3D(Dt,O,Rt,ie,xe,ot,gt,At,an,se,be):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Rt,ie,ot,gt,an,se,be.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Rt,ie,be.width,be.height,an,be.data):L.texSubImage2D(L.TEXTURE_2D,O,Rt,ie,ot,gt,an,se,be);L.pixelStorei(L.UNPACK_ROW_LENGTH,ui),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Us),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),O===0&&F.generateMipmaps&&L.generateMipmap(Dt),ht.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,H=null,O=0){return A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,A=arguments[2],F=arguments[3],O=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,G,H,O)},this.initRenderTarget=function(A){xt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,ht.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class nh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new nh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jx extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uf extends Rr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const go=new I,_o=new I,Ou=new ce,kr=new Lo,Ga=new Do,_l=new I,ku=new I;class Qx extends ze{constructor(t=new Xe,e=new uf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)go.fromBufferAttribute(e,i-1),_o.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=go.distanceTo(_o);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=s,t.ray.intersectsSphere(Ga)===!1)return;Ou.copy(i).invert(),kr.copy(t.ray).applyMatrix4(Ou);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),x=Ha(this,t,kr,l,p,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ha(this,t,kr,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ha(this,t,kr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ha(this,t,kr,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ha(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(go.fromBufferAttribute(a,i),_o.fromBufferAttribute(a,s),e.distanceSqToSegment(go,_o,_l,ku)>n)return;_l.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_l);if(!(l<t.near||l>t.far))return{distance:l,point:ku.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Bu=new I,zu=new I;class ty extends Qx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Bu.fromBufferAttribute(e,i),zu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bu.distanceTo(zu);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ey extends rn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new et:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],a=[],o=new I,l=new ce;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Be(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ih extends ci{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ny extends ih{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const $a=new I,vl=new sh,xl=new sh,yl=new sh;class iy extends ci{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:($a.subVectors(i[0],i[1]).add(i[0]),c=$a);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:($a.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),xl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),yl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(vl.calc(l),xl.calc(l),yl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vu(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function sy(r,t){const e=1-r;return e*e*t}function ry(r,t){return 2*(1-r)*r*t}function ay(r,t){return r*r*t}function qr(r,t,e,n){return sy(r,t)+ry(r,e)+ay(r,n)}function oy(r,t){const e=1-r;return e*e*e*t}function ly(r,t){const e=1-r;return 3*e*e*r*t}function cy(r,t){return 3*(1-r)*r*r*t}function hy(r,t){return r*r*r*t}function Yr(r,t,e,n,i){return oy(r,t)+ly(r,e)+cy(r,n)+hy(r,i)}class df extends ci{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,i.x,s.x,a.x,o.x),Yr(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uy extends ci{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,i.x,s.x,a.x,o.x),Yr(t,i.y,s.y,a.y,o.y),Yr(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ff extends ci{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dy extends ci{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends ci{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(qr(t,i.x,s.x,a.x),qr(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fy extends ci{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(qr(t,i.x,s.x,a.x),qr(t,i.y,s.y,a.y),qr(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Vu(o,l.x,c.x,h.x,u.x),Vu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:ny,CatmullRomCurve3:iy,CubicBezierCurve:df,CubicBezierCurve3:uy,EllipseCurve:ih,LineCurve:ff,LineCurve3:dy,QuadraticBezierCurve:pf,QuadraticBezierCurve3:fy,SplineCurve:mf});class py extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ec[i.type]().fromJSON(i))}return this}}class wc extends py{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ff(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new pf(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new df(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new mf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new ih(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rh extends Xe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Be(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new et,f=new I,g=new I,_=new I;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){const x=n+y*h*i,v=Math.sin(x),M=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*M,a.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),o.push(d.x,d.y);const T=l[3*E+0]*v,C=l[3*E+1],b=l[3*E+0]*M;c.push(T,C,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const v=x+y*t.length,M=v,E=v+t.length,T=v+t.length+1,C=v+1;s.push(M,E,C),s.push(T,C,E)}this.setIndex(s),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.points,t.segments,t.phiStart,t.phiLength)}}class ah extends rh{constructor(t=1,e=1,n=4,i=8){const s=new wc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new ah(t.radius,t.length,t.capSegments,t.radialSegments)}}class Uo extends Xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new I,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ls extends Xe{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){const v=new I,M=new I;let E=0;const T=(e-t)/n;for(let C=0;C<=s;C++){const b=[],S=C/s,D=S*(e-t)+t;for(let k=0;k<=i;k++){const N=k/i,B=N*l+o,W=Math.sin(B),V=Math.cos(B);M.x=D*W,M.y=-S*n+m,M.z=D*V,u.push(M.x,M.y,M.z),v.set(W,T,V).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-S),b.push(g++)}_.push(b)}for(let C=0;C<i;C++)for(let b=0;b<s;b++){const S=_[b][C],D=_[b+1][C],k=_[b+1][C+1],N=_[b][C+1];(t>0||b!==0)&&(h.push(S,D,N),E+=3),(e>0||b!==s-1)&&(h.push(D,k,N),E+=3)}c.addGroup(p,E,0),p+=E}function x(v){const M=g,E=new et,T=new I;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let k=0;k<=i;k++){const B=k/i*l+o,W=Math.cos(B),V=Math.sin(B);T.x=b*V,T.y=m*S,T.z=b*W,u.push(T.x,T.y,T.z),d.push(0,S,0),E.x=W*.5+.5,E.y=V*.5*S+.5,f.push(E.x,E.y),g++}for(let k=0;k<i;k++){const N=M+k,B=D+k;v===!0?h.push(B,B+1,N):h.push(B+1,B,N),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends Ls{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oh extends Xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(s.slice(),3)),this.setAttribute("uv",new ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new I,v=new I,M=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],v),f(e[E+2],M),l(x,v,M,y)}function l(y,x,v,M){const E=M+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const b=y.clone().lerp(v,C/E),S=x.clone().lerp(v,C/E),D=E-C;for(let k=0;k<=D;k++)k===0&&C===E?T[C][k]=b:T[C][k]=b.clone().lerp(S,k/D)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(T[C][S+1]),d(T[C+1][S]),d(T[C][S])):(d(T[C][S+1]),d(T[C+1][S+1]),d(T[C+1][S]))}}function c(y){const x=new I;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const y=new I;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=m(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;a.push(v,1-M)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],v=a[y+2],M=a[y+4],E=Math.max(x,v,M),T=Math.min(x,v,M);E>.9&&T<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new I,x=new I,v=new I,M=new I,E=new et,T=new et,C=new et;for(let b=0,S=0;b<s.length;b+=9,S+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),E.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),M.copy(y).add(x).add(v).divideScalar(3);const D=m(M);_(E,S+0,y,D),_(T,S+2,x,D),_(C,S+4,v,D)}}function _(y,x,v,M){M<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oh(t.vertices,t.indices,t.radius,t.details)}}const Wa=new I,Xa=new I,bl=new I,qa=new Un;class my extends Xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(or*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=qa;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),qa.getNormal(bl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],M=u[x],E=qa[h[y]],T=qa[h[x]],C=`${v}_${M}`,b=`${M}_${v}`;b in d&&d[b]?(bl.dot(d[b].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(T.x,T.y,T.z)),d[b]=null):C in d||(d[C]={index0:c[y],index1:c[x],normal:bl.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Wa.fromBufferAttribute(o,_),Xa.fromBufferAttribute(o,m),f.push(Wa.x,Wa.y,Wa.z),f.push(Xa.x,Xa.y,Xa.z)}this.setAttribute("position",new ne(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dr extends wc{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new wc().fromJSON(i))}return this}}const gy={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=gf(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=by(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ta(s,a,e,o,l,f,0),a}};function gf(r,t,e,n,i){let s,a;if(i===Ly(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Gu(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Gu(s,r[s],r[s+1],a);return a&&No(a,a.next)&&(na(a),a=a.next),a}function Rs(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(No(e,e.next)||Ae(e.prev,e,e.next)===0)){if(na(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ta(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Ty(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?vy(r,n,i,s):_y(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),na(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=xy(Rs(r),t,e),ta(r,t,e,n,i,s,2)):a===2&&yy(r,t,e,n,i,s):ta(Rs(r),t,e,n,i,s,1);break}}}function _y(r){const t=r.prev,e=r,n=r.next;if(Ae(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&er(i,o,s,l,a,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vy(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Ae(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Tc(f,g,t,e,n),y=Tc(_,m,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&er(o,h,l,u,c,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&er(o,h,l,u,c,d,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&er(o,h,l,u,c,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&er(o,h,l,u,c,d,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xy(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!No(i,s)&&_f(i,n,n.next,s)&&ea(i,s)&&ea(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),na(n),na(n.next),n=r=s),n=n.next}while(n!==r);return Rs(n)}function yy(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ry(a,o)){let l=vf(a,o);a=Rs(a,a.next),l=Rs(l,l.next),ta(a,t,e,n,i,s,0),ta(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function by(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=gf(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Cy(c));for(i.sort(Sy),s=0;s<i.length;s++)e=My(i[s],e);return e}function Sy(r,t){return r.x-t.x}function My(r,t){const e=Ey(r,t);if(!e)return t;const n=vf(e,r);return Rs(n,n.next),Rs(e,e.next)}function Ey(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&er(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),ea(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&wy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function wy(r,t){return Ae(r.prev,r,t.prev)<0&&Ae(t.next,r,r.next)<0}function Ty(r,t,e,n){let i=r;do i.z===0&&(i.z=Tc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ay(i)}function Ay(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function Tc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Cy(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function er(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Ry(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Py(r,t)&&(ea(r,t)&&ea(t,r)&&Dy(r,t)&&(Ae(r.prev,r,t.prev)||Ae(r,t.prev,t))||No(r,t)&&Ae(r.prev,r,r.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function No(r,t){return r.x===t.x&&r.y===t.y}function _f(r,t,e,n){const i=ja(Ae(r,t,e)),s=ja(Ae(r,t,n)),a=ja(Ae(e,n,r)),o=ja(Ae(e,n,t));return!!(i!==s&&a!==o||i===0&&Ya(r,e,t)||s===0&&Ya(r,n,t)||a===0&&Ya(e,r,n)||o===0&&Ya(e,t,n))}function Ya(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ja(r){return r>0?1:r<0?-1:0}function Py(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&_f(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ea(r,t){return Ae(r.prev,r,r.next)<0?Ae(r,t,r.next)>=0&&Ae(r,r.prev,t)>=0:Ae(r,t,r.prev)<0||Ae(r,r.next,t)<0}function Dy(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function vf(r,t){const e=new Ac(r.i,r.x,r.y),n=new Ac(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Gu(r,t,e,n){const i=new Ac(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function na(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ac(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ly(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Zi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Zi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Hu(t),$u(n,t);let a=t.length;e.forEach(Hu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,$u(n,e[l]);const o=gy.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Hu(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function $u(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ga extends Xe{constructor(t=new Dr([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Iy;let x,v=!1,M,E,T,C;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,M=p.computeFrenetFrames(h,!1),E=new I,T=new I,C=new I),d||(m=0,f=0,g=0,_=0);const b=o.extractPoints(c);let S=b.shape;const D=b.holes;if(!Zi.isClockWise(S)){S=S.reverse();for(let J=0,at=D.length;J<at;J++){const L=D[J];Zi.isClockWise(L)&&(D[J]=L.reverse())}}const N=Zi.triangulateShape(S,D),B=S;for(let J=0,at=D.length;J<at;J++){const L=D[J];S=S.concat(L)}function W(J,at,L){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(at,L)}const V=S.length,Z=N.length;function $(J,at,L){let Pt,st,bt;const ht=J.x-at.x,Ft=J.y-at.y,xt=L.x-J.x,R=L.y-J.y,w=ht*ht+Ft*Ft,z=ht*R-Ft*xt;if(Math.abs(z)>Number.EPSILON){const Y=Math.sqrt(w),Q=Math.sqrt(xt*xt+R*R),j=at.x-Ft/Y,Tt=at.y+ht/Y,ft=L.x-R/Q,yt=L.y+xt/Q,Yt=((ft-j)*R-(yt-Tt)*xt)/(ht*R-Ft*xt);Pt=j+ht*Yt-J.x,st=Tt+Ft*Yt-J.y;const rt=Pt*Pt+st*st;if(rt<=2)return new et(Pt,st);bt=Math.sqrt(rt/2)}else{let Y=!1;ht>Number.EPSILON?xt>Number.EPSILON&&(Y=!0):ht<-Number.EPSILON?xt<-Number.EPSILON&&(Y=!0):Math.sign(Ft)===Math.sign(R)&&(Y=!0),Y?(Pt=-Ft,st=ht,bt=Math.sqrt(w)):(Pt=ht,st=Ft,bt=Math.sqrt(w/2))}return new et(Pt/bt,st/bt)}const lt=[];for(let J=0,at=B.length,L=at-1,Pt=J+1;J<at;J++,L++,Pt++)L===at&&(L=0),Pt===at&&(Pt=0),lt[J]=$(B[J],B[L],B[Pt]);const dt=[];let vt,It=lt.concat();for(let J=0,at=D.length;J<at;J++){const L=D[J];vt=[];for(let Pt=0,st=L.length,bt=st-1,ht=Pt+1;Pt<st;Pt++,bt++,ht++)bt===st&&(bt=0),ht===st&&(ht=0),vt[Pt]=$(L[Pt],L[bt],L[ht]);dt.push(vt),It=It.concat(vt)}for(let J=0;J<m;J++){const at=J/m,L=f*Math.cos(at*Math.PI/2),Pt=g*Math.sin(at*Math.PI/2)+_;for(let st=0,bt=B.length;st<bt;st++){const ht=W(B[st],lt[st],Pt);ct(ht.x,ht.y,-L)}for(let st=0,bt=D.length;st<bt;st++){const ht=D[st];vt=dt[st];for(let Ft=0,xt=ht.length;Ft<xt;Ft++){const R=W(ht[Ft],vt[Ft],Pt);ct(R.x,R.y,-L)}}}const Qt=g+_;for(let J=0;J<V;J++){const at=d?W(S[J],It[J],Qt):S[J];v?(T.copy(M.normals[0]).multiplyScalar(at.x),E.copy(M.binormals[0]).multiplyScalar(at.y),C.copy(x[0]).add(T).add(E),ct(C.x,C.y,C.z)):ct(at.x,at.y,0)}for(let J=1;J<=h;J++)for(let at=0;at<V;at++){const L=d?W(S[at],It[at],Qt):S[at];v?(T.copy(M.normals[J]).multiplyScalar(L.x),E.copy(M.binormals[J]).multiplyScalar(L.y),C.copy(x[J]).add(T).add(E),ct(C.x,C.y,C.z)):ct(L.x,L.y,u/h*J)}for(let J=m-1;J>=0;J--){const at=J/m,L=f*Math.cos(at*Math.PI/2),Pt=g*Math.sin(at*Math.PI/2)+_;for(let st=0,bt=B.length;st<bt;st++){const ht=W(B[st],lt[st],Pt);ct(ht.x,ht.y,u+L)}for(let st=0,bt=D.length;st<bt;st++){const ht=D[st];vt=dt[st];for(let Ft=0,xt=ht.length;Ft<xt;Ft++){const R=W(ht[Ft],vt[Ft],Pt);v?ct(R.x,R.y+x[h-1].y,x[h-1].x+L):ct(R.x,R.y,u+L)}}}q(),it();function q(){const J=i.length/3;if(d){let at=0,L=V*at;for(let Pt=0;Pt<Z;Pt++){const st=N[Pt];Lt(st[2]+L,st[1]+L,st[0]+L)}at=h+m*2,L=V*at;for(let Pt=0;Pt<Z;Pt++){const st=N[Pt];Lt(st[0]+L,st[1]+L,st[2]+L)}}else{for(let at=0;at<Z;at++){const L=N[at];Lt(L[2],L[1],L[0])}for(let at=0;at<Z;at++){const L=N[at];Lt(L[0]+V*h,L[1]+V*h,L[2]+V*h)}}n.addGroup(J,i.length/3-J,0)}function it(){const J=i.length/3;let at=0;wt(B,at),at+=B.length;for(let L=0,Pt=D.length;L<Pt;L++){const st=D[L];wt(st,at),at+=st.length}n.addGroup(J,i.length/3-J,1)}function wt(J,at){let L=J.length;for(;--L>=0;){const Pt=L;let st=L-1;st<0&&(st=J.length-1);for(let bt=0,ht=h+m*2;bt<ht;bt++){const Ft=V*bt,xt=V*(bt+1),R=at+Pt+Ft,w=at+st+Ft,z=at+st+xt,Y=at+Pt+xt;Bt(R,w,z,Y)}}}function ct(J,at,L){l.push(J),l.push(at),l.push(L)}function Lt(J,at,L){Ot(J),Ot(at),Ot(L);const Pt=i.length/3,st=y.generateTopUV(n,i,Pt-3,Pt-2,Pt-1);te(st[0]),te(st[1]),te(st[2])}function Bt(J,at,L,Pt){Ot(J),Ot(at),Ot(Pt),Ot(at),Ot(L),Ot(Pt);const st=i.length/3,bt=y.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);te(bt[0]),te(bt[1]),te(bt[3]),te(bt[1]),te(bt[2]),te(bt[3])}function Ot(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function te(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Uy(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ec[i.type]().fromJSON(i)),new ga(n,t.options)}}const Iy={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new et(s,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(d,1-g),new et(_,1-p)]:[new et(o,1-l),new et(h,1-u),new et(f,1-g),new et(m,1-p)]}};function Uy(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class lh extends oh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lh(t.radius,t.detail)}}class ch extends Xe{constructor(t=new Dr([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(i,3)),this.setAttribute("normal",new ne(s,3)),this.setAttribute("uv",new ne(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Zi.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Zi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+u,v=y[1]+u,M=y[2]+u;n.push(x,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fy(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new ch(n,t.curveSegments)}}function Fy(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ai extends Xe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){const E=M/e;u.x=-t*Math.cos(i+E*s)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+E*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=h[p][y+1],v=h[p][y],M=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(x,v,E),(p!==n-1||l<Math.PI)&&f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class es extends Xe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Me extends Rr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xf extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ny extends xf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sl=new ce,Wu=new I,Xu=new I;class Oy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wu),Xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xu),e.updateMatrixWorld(),Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ky extends Oy{constructor(){super(new rf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends xf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class By{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yu(){return performance.now()}const ju=new ce;class zy{constructor(t,e,n=0,i=1/0){this.ray=new Lo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ju.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(t,e=!0,n=[]){return Cc(t,this,n,e),n.sort(Zu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Cc(t[i],this,n,e);return n.sort(Zu),n}}function Zu(r,t){return r.distance-t.distance}function Cc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Cc(s[a],t,e,!0)}}class Rc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vy extends Ps{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);function yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},hh,Ye,Ee,Nn=1e8,de=1/Nn,Pc=Math.PI*2,Gy=Pc/4,Hy=0,bf=Math.sqrt,$y=Math.cos,Wy=Math.sin,We=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Di=function(t){return typeof t=="number"},uh=function(t){return typeof t>"u"},li=function(t){return typeof t=="object"},un=function(t){return t!==!1},dh=function(){return typeof window<"u"},Za=function(t){return Ie(t)||We(t)},Sf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,Xy=/random\([^)]+\)/g,qy=/,\s*/g,Ku=/(?:-?\.?\d|\.)+/gi,Mf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ef=/[+-]=-?[.\d]+/,Yy=/[^,'"\[\]\s]+/gi,jy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Te,ni,Dc,fh,An={},vo={},wf,Tf=function(t){return(vo=yr(t,An))&&mn},ph=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},sa=function(t,e){return!e&&console.warn(t)},Af=function(t,e){return t&&(An[t]=e)&&vo&&(vo[t]=e)||An},ra=function(){return 0},Zy={suppressEvents:!0,isStart:!0,kill:!1},oo={suppressEvents:!0,kill:!1},Ky={suppressEvents:!0},mh={},Ki=[],Lc={},Cf,xn={},El={},Ju=30,lo=[],gh="",_h=function(t){var e=t[0],n,i;if(li(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=lo.length;i--&&!lo[i].targetTest(e););n=lo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zf(t[i],n)))||t.splice(i,1);return t},Ms=function(t){return t._gsap||_h(On(t))[0]._gsap},Rf=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():uh(n)&&t.getAttribute&&t.getAttribute(e)||n},dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},we=function(t){return Math.round(t*1e7)/1e7||0},cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Jy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},xo=function(){var t=Ki.length,e=Ki.slice(0),n,i;for(Lc={},Ki.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vh=function(t){return!!(t._initted||t._startAt||t.add)},Pf=function(t,e,n,i){Ki.length&&!Ye&&xo(),t.render(e,n,!!(Ye&&e<0&&vh(t))),Ki.length&&!Ye&&xo()},Df=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yy).length<2?e:We(t)?t.trim():t},Lf=function(t){return t},Cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Qy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},yr=function(t,e){for(var n in e)t[n]=e[n];return t},Qu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=li(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},yo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jr=function(t){var e=t.parent||Te,n=t.keyframes?Qy(en(t.keyframes)):Cn;if(un(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},tb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},If=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Oo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ns=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},eb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ic=function(t,e,n,i){return t._startAt&&(Ye?t._startAt.revert(oo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},nb=function r(t){return!t||t._ts&&r(t.parent)},td=function(t){return t._repeat?br(t._tTime,t=t.duration()+t._rDelay)*t:0},br=function(t,e){var n=Math.floor(t=we(t/e));return t&&n===t?n-1:n},bo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ko=function(t){return t._end=we(t._start+(t._tDur/Math.abs(t._ts||t._rts||de)||0))},Bo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=we(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ko(t),n._dirty||Es(n,t)),t},Uf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bo(t.rawTime(),e),(!e._dur||_a(0,e.totalDuration(),n)-e._tTime>de)&&e.render(n,!0)),Es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-de}},si=function(t,e,n,i){return e.parent&&ns(e),e._start=we((Di(n)?n:!n&&So(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Te?Ln(t,n,e):t._time)+e._delay),e._end=we(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),If(t,e,"_first","_last",t._sort?"_start":0),So(e)||(t._recent=e),i||Uf(t,e),t._ts<0&&Bo(t,t._tTime),t},Ff=function(t,e){return(An.ScrollTrigger||ph("scrollTrigger",e))&&An.ScrollTrigger.create(e,t)},Nf=function(t,e,n,i,s){if(yh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cf!==yn.frame)return Ki.push(t),t._lazy=[s,i],1},ib=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},So=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},sb=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&ib(t)&&!(!t._initted&&So(t))||(t._ts<0||t._dp._ts<0)&&!So(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=_a(0,t._tDur,e),h=br(l,o),t._yoyo&&h&1&&(a=1-a),h!==br(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ye||i||t._zTime===de||!e&&t._zTime){if(!t._initted&&Nf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?de:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ic(t,e,n,!0),t._onUpdate&&!n&&bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ns(t,1),!n&&!Ye&&(bn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},rb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Sr=function(t,e,n,i){var s=t._repeat,a=we(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:we(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Bo(t,t._tTime=t._tDur*o),t.parent&&ko(t),n||Es(t.parent,t),t},ed=function(t){return t instanceof hn?Es(t):Sr(t,t._dur)},ab={_start:0,endTime:ra,totalDuration:ra},Ln=function r(t,e,n){var i=t.labels,s=t._recent||ab,a=t.duration()>=Nn?s.endTime(!1):t._dur,o,l,c;return We(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(en(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Zr=function(t,e,n){var i=Di(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;a.immediateRender=un(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Oe(e[0],a,e[s+1])},rs=function(t,e){return t||t===0?e(t):e},_a=function(t,e,n){return n<t?t:n>e?e:n},Qe=function(t,e){return!We(t)||!(e=jy.exec(t))?"":e[1]},ob=function(t,e,n){return rs(n,function(i){return _a(t,e,i)})},Uc=[].slice,Of=function(t,e){return t&&li(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&li(t[0]))&&!t.nodeType&&t!==ni},lb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return We(i)&&!e||Of(i,1)?(s=n).push.apply(s,On(i)):n.push(i)})||n},On=function(t,e,n){return Ee&&!e&&Ee.selector?Ee.selector(t):We(t)&&!n&&(Dc||!Mr())?Uc.call((e||fh).querySelectorAll(t),0):en(t)?lb(t,n):Of(t)?Uc.call(t,0):t?[t]:[]},Fc=function(t){return t=On(t)[0]||sa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return On(e,n.querySelectorAll?n:n===t?sa("Invalid scope")||fh.createElement("div"):t)}},kf=function(t){return t.sort(function(){return .5-Math.random()})},Bf=function(t){if(Ie(t))return t;var e=li(t)?t:{each:t},n=ws(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return We(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=a[_],p,y,x,v,M,E,T,C,b;if(!m){if(b=e.grid==="auto"?0:(e.grid||[1,Nn])[1],!b){for(T=-Nn;T<(T=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=a[_]=[],p=l?Math.min(b,_)*h-.5:i%b,y=b===Nn?0:l?_*u/b-.5:i/b|0,T=0,C=Nn,E=0;E<_;E++)x=E%b-p,v=y-(E/b|0),m[E]=M=c?Math.abs(c==="y"?v:x):bf(x*x+v*v),M>T&&(T=M),M<C&&(C=M);i==="random"&&kf(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Qe(e.amount||e.each)||0,n=n&&_<0?bb(n):n}return _=(m[d]-m.min)/m.max||0,we(m.b+(n?n(_):_)*m.v)+m.u}},Nc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=we(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Di(n)?0:Qe(n))}},zf=function(t,e){var n=en(t),i,s;return!n&&li(t)&&(i=n=t.radius||Nn,t.values?(t=On(t.values),(s=!Di(t[0]))&&(i*=i)):t=Nc(t.increment)),rs(e,n?Ie(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Nn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Di(a)?h:h+Qe(a)}:Nc(t))},Vf=function(t,e,n,i){return rs(en(t)?!e:n===!0?!!(n=0):!i,function(){return en(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},cb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},hb=function(t,e){return function(n){return t(parseFloat(n))+(e||Qe(n))}},ub=function(t,e,n){return Hf(t,e,0,1,n)},Gf=function(t,e,n){return rs(n,function(i){return t[~~e(i)]})},db=function r(t,e,n){var i=e-t;return en(t)?Gf(t,r(0,t.length),e):rs(n,function(s){return(i+(s-t)%i)%i+t})},fb=function r(t,e,n){var i=e-t,s=i*2;return en(t)?Gf(t,r(0,t.length-1),e):rs(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},aa=function(t){return t.replace(Xy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(qy);return Vf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Hf=function(t,e,n,i,s){var a=e-t,o=i-n;return rs(s,function(l){return n+((l-t)/a*o||0)})},pb=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=We(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(en(t)&&!en(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=yr(en(t)?[]:{},t));if(!h){for(l in e)xh.call(o,t,l,"get",e[l]);s=function(g){return Mh(g,o)||(a?t.p:t)}}}return rs(n,s)},nd=function(t,e,n){var i=t.labels,s=Nn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},bn=function(t,e,n){var i=t.vars,s=i[e],a=Ee,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ki.length&&xo(),o&&(Ee=o),h=l?s.apply(c,l):s.call(c),Ee=a,h},$r=function(t){return ns(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&bn(t,"onInterrupt"),t},ir,$f=[],Wf=function(t){if(t)if(t=!t.name&&t.default||t,dh()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ra,render:Mh,add:xh,kill:Db,modifier:Pb,rawVars:0},a={targetTest:0,get:0,getSetter:Sh,aliases:{},register:0};if(Mr(),t!==i){if(xn[e])return;Cn(i,Cn(yo(t,s),a)),yr(i.prototype,yr(s,yo(t,a))),xn[i.prop=e]=i,t.targetTest&&(lo.push(i),mh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Af(e,i),t.register&&t.register(mn,i,fn)}else $f.push(t)},me=255,Wr={aqua:[0,me,me],lime:[0,me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,me],navy:[0,0,128],white:[me,me,me],olive:[128,128,0],yellow:[me,me,0],orange:[me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[me,0,0],pink:[me,192,203],cyan:[0,me,me],transparent:[me,me,me,0]},wl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*me+.5|0},Xf=function(t,e,n){var i=t?Di(t)?[t>>16,t>>8&me,t&me]:0:Wr.black,s,a,o,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wr[t])i=Wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&me,i&me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&me,t&me]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ku),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=wl(l+1/3,s,a),i[1]=wl(l,s,a),i[2]=wl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Mf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ku)||Wr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/me,a=i[1]/me,o=i[2]/me,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},qf=function(t){var e=[],n=[],i=-1;return t.split(Ji).forEach(function(s){var a=s.match(nr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},id=function(t,e,n){var i="",s=(t+i).match(Ji),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Xf(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=qf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ji,"1").split(nr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ji),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),mb=/hsl[a]?\(/,Yf=function(t){var e=t.join(" "),n;if(Ji.lastIndex=0,Ji.test(e))return n=mb.test(e),t[1]=id(t[1],n),t[0]=id(t[0],n,qf(t[1])),!0},oa,yn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,y=m===!0,x,v,M,E;if((p>t||p<0)&&(n+=p-e),i+=p,M=i-n,x=M-a,(x>0||y)&&(E=++u.frame,d=M-u.time*1e3,u.time=M=M/1e3,a+=x+(x>=s?0:s-x),v=1),y||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](M,d,E,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){wf&&(!Dc&&dh()&&(ni=Dc=window,fh=ni.document||{},An.gsap=mn,(ni.gsapVersions||(ni.gsapVersions=[])).push(mn.version),Tf(vo||ni.GreenSockGlobals||!ni.gsap&&ni||{}),$f.forEach(Wf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},oa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),oa=0,c=ra},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,y){var x=p?function(v,M,E,T){m(v,M,E,T),u.remove(x)}:m;return u.remove(m),o[y?"unshift":"push"](x),Mr(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Mr=function(){return!oa&&yn.wake()},Zt={},gb=/^[\d.\-M][\d.\-,\s]/,_b=/["']/g,vb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(_b,"").trim():+c,i=l.substr(o+1).trim();return e},xb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},yb=function(t){var e=(t+"").split("("),n=Zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[vb(e[1])]:xb(t).split(",").map(Df)):Zt._CE&&gb.test(t)?Zt._CE("",t):n},bb=function(t){return function(e){return 1-t(1-e)}},ws=function(t,e){return t&&(Ie(t)?t:Zt[t]||yb(t))||e},Is=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return dn(t,function(o){Zt[o]=An[o]=s,Zt[a=o.toLowerCase()]=n;for(var l in s)Zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[o+"."+l]=s[l]}),s},jf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Tl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Pc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Wy((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:jf(o);return s=Pc/s,l.config=function(c,h){return r(t,c,h)},l},Al=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:jf(n);return i.config=function(s){return r(t,s)},i};dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Is(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;Is("Elastic",Tl("in"),Tl("out"),Tl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Is("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Is("Circ",function(r){return-(bf(1-r*r)-1)});Is("Sine",function(r){return r===1?1:-$y(r*Gy)+1});Is("Back",Al("in"),Al("out"),Al());Zt.SteppedEase=Zt.steps=An.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-de;return function(o){return((i*_a(0,a,o)|0)+s)*n}}};ia.ease=Zt["quad.out"];dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gh+=r+","+r+"Params,"});var Zf=function(t,e){this.id=Hy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rf,this.set=e?e.getSetter:Sh},la=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Sr(this,+e.duration,1,1),this.data=e.data,Ee&&(this._ctx=Ee,Ee.data.push(this)),oa||yn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bo(this,n),!s._dp||s.parent||Uf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===de||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+td(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+td(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?br(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-de?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bo(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-de?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(_a(-Math.abs(this._delay),o,s),i!==!1),ko(this),eb(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Mr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==de,a;if(s)for(this._tTime-=de,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+de){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=we(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&si(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ky);var i=Ye;return Ye=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ye=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ed(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ed(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ln(this,n),un(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,un(i)),this._dur||(this._zTime=-de),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-de:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-de,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-de)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ie(n)?n:Lf,l=function(){var h=i.then;i.then=null,s&&s(),Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){$r(this)},r}();Cn(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-de,_prom:0,_ps:!1,_rts:1});var hn=function(r){yf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=un(n.sortChildren),Te&&si(n.parent||Te,yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ff(yi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Zr(0,arguments,this),this},e.from=function(i,s,a){return Zr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Zr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Oe(i,s,Ln(this,a),1),this},e.call=function(i,s,a){return si(this,Oe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Oe(i,a,Ln(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,jr(a).immediateRender=un(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,jr(o).immediateRender=un(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:we(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,y,x,v,M,E,T;if(this!==Te&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,v=this._start,x=this._ts,p=!x,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=we(h%m),h===l?(_=this._repeat,d=c):(M=we(h/m),_=~~M,_&&_===M&&(d=c,_--),d>c&&(d=c)),M=br(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),E&&_&1&&(d=c-d,T=1),_!==M&&!this._lock){var C=E&&M&1,b=C===(E&&_&1);if(_<M&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:we(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=rb(this,we(o),we(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!M&&(bn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=-de);break}}f=g}else{f=this._last;for(var S=i<0?i:d;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||Ye&&vh(f)),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=S?-de:de);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-de)._zTime=d>=o?1:-1,this._ts))return this._start=v,ko(this),this.render(i,s,a);this._onUpdate&&!s&&bn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ns(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(bn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Di(s)||(s=Ln(this,s,i)),!(i instanceof la)){if(en(i))return i.forEach(function(o){return a.add(o,s)}),this;if(We(i))return this.addLabel(i,s);if(Ie(i))i=Oe.delayedCall(0,i);else return this}return this!==i?si(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Nn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Oe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return We(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(i.parent===this&&Oo(this,i),i===this._recent&&(this._recent=this._last),Es(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ln(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Oe.delayedCall(0,s||ra,a);return o.data="isPause",this._hasPause=1,si(this,o,Ln(this,i))},e.removePause=function(i){var s=this._first;for(i=Ln(this,i);s;)s._start===i&&s.data==="isPause"&&ns(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Xi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=On(i),l=this._first,c=Di(s),h;l;)l instanceof Oe?Jy(l._targets,o)&&(c?(!Xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Ln(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Oe.to(a,Cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||de,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Sr(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Cn({startAt:{time:Ln(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),nd(this,Ln(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),nd(this,Ln(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+de)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=we(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Es(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Es(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Nn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,si(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=we(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Sr(a,a===Te&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Te._ts&&(Pf(Te,bo(i,Te)),Cf=yn.frame),yn.frame>=Ju){Ju+=wn.autoSleep||120;var s=Te._first;if((!s||!s._ts)&&wn.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},t}(la);Cn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sb=function(t,e,n,i,s,a,o){var l=new fn(this._pt,t,e,0,1,ep,null,s),c=0,h=0,u,d,f,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=aa(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(Ml)||[];u=Ml.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?cr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Ml.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ef.test(i)||p)&&(l.e=0),this._pt=l,l},xh=function(t,e,n,i,s,a,o,l,c,h){Ie(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:Ie(u)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ie(u)?c?Ab:Qf:bh,g;if(We(i)&&(~i.indexOf("random(")&&(i=aa(i)),i.charAt(1)==="="&&(g=cr(d,i)+(Qe(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Oc)return!isNaN(d*i)&&i!==""?(g=new fn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Rb:tp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&ph(e,i),Sb.call(this,t,e,d,i,f,l||wn.stringFilter,c))},Mb=function(t,e,n,i,s){if(Ie(t)&&(t=Kr(t,s,e,n,i)),!li(t)||t.style&&t.nodeType||en(t)||Sf(t))return We(t)?Kr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Kr(t[o],s,e,n,i);return a},Kf=function(t,e,n,i,s,a){var o,l,c,h;if(xn[t]&&(o=new xn[t]).init(s,o.rawVars?e[t]:Mb(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new fn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ir))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Xi,Oc,yh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!hh,v=t.timeline,M=i.easeReverse||u,E,T,C,b,S,D,k,N,B,W,V,Z,$;if(v&&(!d||!s)&&(s="none"),t._ease=ws(s,ia.ease),t._rEase=M&&(ws(M)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||d&&!i.stagger){if(N=m[0]?Ms(m[0]).harness:0,Z=N&&i[N.prop],E=yo(i,mh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?oo:Zy),_._lazy=0),a){if(ns(t._startAt=Oe.set(m,Cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&un(l),startAt:null,delay:0,onUpdate:c&&function(){return bn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!o&&!f)&&t._startAt.revert(oo),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),C=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&un(l),immediateRender:o,stagger:0,parent:p},E),Z&&(C[N.prop]=Z),ns(t._startAt=Oe.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(oo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,de,de);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&un(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],k=S._gsap||_h(m)[T]._gsap,t._ptLookup[T]=W={},Lc[k.id]&&Ki.length&&xo(),V=y===m?T:y.indexOf(S),N&&(B=new N).init(S,Z||E,t,V,y)!==!1&&(t._pt=b=new fn(t._pt,S,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(lt){W[lt]=b}),B.priority&&(D=1)),!N||Z)for(C in E)xn[C]&&(B=Kf(C,E,t,V,S,y))?B.priority&&(D=1):W[C]=b=xh.call(t,S,C,"get",E[C],V,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(S,t._op[T]),x&&t._pt&&(Xi=t,Te.killTweensOf(S,W,t.globalTime(e)),$=!t.parent,Xi=0),t._pt&&l&&(Lc[k.id]=1)}D&&np(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,d&&e<=0&&v.render(Nn,!0,!0)},Eb=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Oc=1,t.vars[e]="+=0",yh(t,o),Oc=0,l?sa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ue(n)+Qe(u.e)),u.b&&(u.b=h.s+Qe(u.b))},wb=function(t,e){var n=t[0]?Ms(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=yr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Tb=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(en(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Kr=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):We(t)&&~t.indexOf("random(")?aa(t):t},Mo=gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jf={};dn(Mo+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jf[r]=1});Mo=Mo.split(",");var Oe=function(r){yf(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:jr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Te,y=(en(n)||Sf(n)?Di(n[0]):"length"in i)?[n]:On(n),x,v,M,E,T,C,b,S;if(o._targets=y.length?_h(y):sa("GSAP target "+n+" not found. https://gsap.com",!wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Za(c)||Za(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(x=o.timeline=new hn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),x.kill(),x.parent=x._dp=yi(o),x._start=0,d||Za(c)||Za(h)){if(E=y.length,b=d&&Bf(d),li(d))for(T in d)~Mo.indexOf(T)&&(S||(S={}),S[T]=d[T]);for(v=0;v<E;v++)M=yo(i,Jf),M.stagger=0,D&&(M.easeReverse=D),S&&yr(M,S),C=y[v],M.duration=+Kr(c,yi(o),v,C,y),M.delay=(+Kr(h,yi(o),v,C,y)||0)-o._delay,!d&&E===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),x.to(C,M,b?b(v,C,y):0),x._ease=Zt.none;x.duration()?c=h=0:o.timeline=0}else if(g){jr(Cn(x.vars.defaults,{ease:"none"})),x._ease=ws(g.ease||i.ease||"none");var k=0,N,B,W;if(en(g))g.forEach(function(V){return x.to(y,V,">")}),x.duration();else{M={};for(T in g)T==="ease"||T==="easeEach"||Tb(T,g[T],M,g.easeEach);for(T in M)for(N=M[T].sort(function(V,Z){return V.t-Z.t}),k=0,v=0;v<N.length;v++)B=N[v],W={ease:B.e,duration:(B.t-(v?N[v-1].t:0))/100*c},W[T]=B.v,x.to(y,W,k),k+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!hh&&(Xi=yi(o),Te.killTweensOf(y),Xi=0),si(p,yi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===we(p._time)&&un(u)&&nb(yi(o))&&p.data!=="nested")&&(o._tTime=-de,o.render(Math.max(0,-h)||0)),m&&Ff(yi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-de&&!h?l:i<de?0:i,d,f,g,_,m,p,y,x;if(!c)sb(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=we(u%_),u===l?(g=this._repeat,d=c):(m=we(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=br(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(we(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Nf(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var M=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(bn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ic(this,i,s,a),bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&bn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ic(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ns(this,1),!s&&!(h&&!o)&&(u||o||p)&&(bn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){oa||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||yh(this,c),h=this._ease(c/this._dur),Eb(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Bo(this,0),this.parent||If(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ye),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xi&&Xi.vars.overwrite!==!0)._first||$r(this),this.parent&&a!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?On(i):o,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&tb(o,l))return s==="all"&&(this._pt=0),$r(this);for(u=this._op=this._op||[],s!=="all"&&(We(s)&&(_={},dn(s,function(y){return _[y]=1}),s=_),s=wb(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Oo(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&$r(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Zr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Zr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Te.killTweensOf(i,s,a)},t}(la);Cn(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dn("staggerTo,staggerFrom,staggerFromTo",function(r){Oe[r]=function(){var t=new hn,e=Uc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var bh=function(t,e,n){return t[e]=n},Qf=function(t,e,n){return t[e](n)},Ab=function(t,e,n,i){return t[e](i.fp,n)},Cb=function(t,e,n){return t.setAttribute(e,n)},Sh=function(t,e){return Ie(t[e])?Qf:uh(t[e])&&t.setAttribute?Cb:bh},tp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Rb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ep=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Mh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Pb=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Db=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Oo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Lb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},np=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},fn=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||tp,this.d=l||this,this.set=c||bh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Lb,this.m=n,this.mt=s,this.tween=i},r}();dn(gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return mh[r]=1});An.TweenMax=An.TweenLite=Oe;An.TimelineLite=An.TimelineMax=hn;Te=new hn({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=Yf;var Ts=[],co={},Ib=[],sd=0,Ub=0,Cl=function(t){return(co[t]||Ib).map(function(e){return e()})},ca=function(){var t=Date.now(),e=[];t-sd>2&&(Cl("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ni.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Cl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sd=t,Cl("matchMedia"))},ip=function(){function r(e,n){this.selector=n&&Fc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ub++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var a=this,o=function(){var c=Ee,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Fc(s)),Ee=a,u=i.apply(a,arguments),Ie(u)&&a._r.push(u),Ee=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ie?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ee;Ee=null,n(this),Ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Oe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ts.length;a--;)Ts[a].id===this.id&&Ts.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(ca):o.removeEventListener("change",ca)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r}(),Fb=function(){function r(e){this.contexts=[],this.scope=e,Ee&&Ee.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){li(n)||(n={matches:n});var a=new ip(0,s||this.scope),o=a.conditions={},l,c,h;Ee&&!a.selector&&(a.selector=Ee.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ni.matchMedia(n[c]),l&&(Ts.indexOf(a)<0&&Ts.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ca):l.addEventListener("change",ca),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Eo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Wf(i)})},timeline:function(t){return new hn(t)},getTweensOf:function(t,e){return Te.getTweensOf(t,e)},getProperty:function(t,e,n,i){We(t)&&(t=On(t)[0]);var s=Ms(t||{}).get,a=n?Lf:Df;return n==="native"&&(n=""),t&&(e?a((xn[e]&&xn[e].get||s)(t,e,n,i)):function(o,l,c){return a((xn[o]&&xn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=On(t),t.length>1){var i=t.map(function(h){return mn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=xn[e],o=Ms(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ir._pt=0,u.init(t,n?h+n:h,ir,0,[t]),u.render(1,u),ir._pt&&Mh(1,ir)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=mn.to(t,Cn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ws(t.ease,ia.ease)),Qu(ia,t||{})},config:function(t){return Qu(wn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!xn[o]&&!An[o]&&sa(e+" effect requires "+o+" plugin.")}),El[e]=function(o,l,c){return n(On(o),Cn(l||{},s),c)},a&&(hn.prototype[e]=function(o,l,c){return this.add(El[e](o,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=ws(e)},parseEase:function(t,e){return arguments.length?ws(t,e):Zt},getById:function(t){return Te.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new hn(t),i,s;for(n.smoothChildTiming=un(t.smoothChildTiming),Te.remove(n),n._dp=0,n._time=n._tTime=Te._time,i=Te._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&si(n,i,i._start-i._delay),i=s;return si(Te,n,0),n},context:function(t,e){return t?new ip(t,e):Ee},matchMedia:function(t){return new Fb(t)},matchMediaRefresh:function(){return Ts.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ca()},addEventListener:function(t,e){var n=co[t]||(co[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=co[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:db,wrapYoyo:fb,distribute:Bf,random:Vf,snap:zf,normalize:ub,getUnit:Qe,clamp:ob,splitColor:Xf,toArray:On,selector:Fc,mapRange:Hf,pipe:cb,unitize:hb,interpolate:pb,shuffle:kf},install:Tf,effects:El,ticker:yn,updateRoot:hn.updateRoot,plugins:xn,globalTimeline:Te,core:{PropTween:fn,globals:Af,Tween:Oe,Timeline:hn,Animation:la,getCache:Ms,_removeLinkedListItem:Oo,reverting:function(){return Ye},context:function(t){return t&&Ee&&(Ee.data.push(t),t._ctx=Ee),Ee},suppressOverwrites:function(t){return hh=t}}};dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Eo[r]=Oe[r]});yn.add(hn.updateRoot);ir=Eo.to({},{duration:0});var Nb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ob=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Nb(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Rl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(We(s)&&(l={},dn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ob(o,s)}}}},mn=Eo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Rl("roundProps",Nc),Rl("modifiers"),Rl("snap",zf))||Eo;Oe.version=hn.version=mn.version="3.15.1";wf=1;dh()&&Mr();Zt.Power0;Zt.Power1;Zt.Power2;Zt.Power3;Zt.Power4;Zt.Linear;Zt.Quad;Zt.Cubic;Zt.Quart;Zt.Quint;Zt.Strong;Zt.Elastic;Zt.Back;Zt.SteppedEase;Zt.Bounce;Zt.Sine;Zt.Expo;Zt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rd,qi,hr,Eh,Ss,ad,wh,kb=function(){return typeof window<"u"},Li={},_s=180/Math.PI,ur=Math.PI/180,js=Math.atan2,od=1e8,Th=/([A-Z])/g,Bb=/(left|right|width|margin|padding|x)/i,zb=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Gb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$b=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},sp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},rp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Wb=function(t,e,n){return t.style[e]=n},Xb=function(t,e,n){return t.style.setProperty(e,n)},qb=function(t,e,n){return t._gsap[e]=n},Yb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},jb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Zb=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ce="transform",pn=Ce+"Origin",Kb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Li&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=bi(i,o)}):this.tfm[t]=a.x?a[t]:bi(i,t),t===pn&&(this.tfm.zOrigin=a.zOrigin);else return ai.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ce)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=Ce}(s||e)&&this.props.push(t,e,s[t])},ap=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Jb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Th,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=wh(),(!s||!s.isStart)&&!n[Ce]&&(ap(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},op=function(t,e){var n={target:t,props:[],revert:Jb,save:Kb};return t._gsap||mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},lp,Bc=function(t,e){var n=qi.createElementNS?qi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qi.createElement(t);return n&&n.style?n:qi.createElement(t)},Sn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Th,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Er(e)||e,1)||""},ld="O,Moz,ms,Ms,Webkit".split(","),Er=function(t,e,n){var i=e||Ss,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(ld[a]+t in s););return a<0?null:(a===3?"ms":a>=0?ld[a]:"")+t},zc=function(){kb()&&window.document&&(rd=window,qi=rd.document,hr=qi.documentElement,Ss=Bc("div")||{style:{}},Bc("div"),Ce=Er(Ce),pn=Ce+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lp=!!Er("perspective"),wh=mn.core.reverting,Eh=1)},cd=function(t){var e=t.ownerSVGElement,n=Bc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hr.removeChild(n),s},hd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},cp=function(t){var e,n;try{e=t.getBBox()}catch{e=cd(t),n=1}return e&&(e.width||e.height)||n||(e=cd(t)),e&&!e.width&&!e.x&&!e.y?{x:+hd(t,["x","cx","x1"])||0,y:+hd(t,["y","cy","y1"])||0,width:0,height:0}:e},hp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cp(t))},is=function(t,e){if(e){var n=t.style,i;e in Li&&e!==pn&&(e=Ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Th,"-$1").toLowerCase())):n.removeAttribute(e)}},Yi=function(t,e,n,i,s,a){var o=new fn(t._pt,e,n,0,1,a?rp:sp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},ud={deg:1,rad:1,turn:1},Qb={grid:1,flex:1},ss=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ss.style,l=Bb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||ud[i]||ud[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&hp(t),(f||a==="%")&&(Li[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Ue(f?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===qi||!_.appendChild)&&(_=qi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===yn.time&&!m.uncache)return Ue(s/m.width*u);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+i,g=t[h],y?t.style[e]=y:is(t,e)}else(f||a==="%")&&!Qb[Sn(_,"display")]&&(o.position=Sn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ss),g=Ss[h],_.removeChild(Ss),o.position="absolute";return l&&f&&(m=Ms(_),m.time=yn.time,m.width=_[h]),Ue(d?g*s/u:g&&s?u/g*s:0)},bi=function(t,e,n,i){var s;return Eh||zc(),e in ai&&e!=="transform"&&(e=ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),Li[e]&&e!=="transform"?(s=ua(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:To(Sn(t,pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=wo[e]&&wo[e](t,e,n)||Sn(t,e)||Rf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ss(t,e,s,n)+n:s},tS=function(t,e,n,i){if(!n||n==="none"){var s=Er(e,t,1),a=s&&Sn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Sn(t,"borderTopColor"))}var o=new fn(this._pt,t.style,e,0,1,ep),l=0,c=0,h,u,d,f,g,_,m,p,y,x,v,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Sn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Sn(t,e)||i,_?t.style[e]=_:is(t,e)),h=[n,i],Yf(h),n=h[0],i=h[1],d=n.match(nr)||[],M=i.match(nr)||[],M.length){for(;u=nr.exec(i);)m=u[0],y=i.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=cr(f,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=nr.lastIndex-x.length,x||(x=x||wn.units[e]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(f=ss(t,e,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?rp:sp;return Ef.test(i)&&(o.e=0),this._pt=o,o},dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dd[n]||n,e[1]=dd[i]||i,e.join(" ")},nS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Li[o]&&(l=1,o=o==="transformOrigin"?pn:Ce),is(n,o);l&&(is(n,Ce),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ua(n,1),a.uncache=1,ap(i)))}},wo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new fn(t._pt,e,n,0,0,nS);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ha=[1,0,0,1,0,0],up={},dp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fd=function(t){var e=Sn(t,Ce);return dp(e)?ha:e.substr(7).match(Mf).map(Ue)},Ah=function(t,e){var n=t._gsap||Ms(t),i=t.style,s=fd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!t.offsetParent&&t!==hr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,hr.appendChild(t)),s=fd(t),l?i.display=l:is(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):hr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vc=function(t,e,n,i,s,a){var o=t._gsap,l=s||Ah(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],x=e.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,T,C,b;n?l!==ha&&(T=f*m-g*_)&&(C=v*(m/T)+M*(-_/T)+(_*y-m*p)/T,b=v*(-g/T)+M*(f/T)-(f*y-g*p)/T,v=C,M=b):(E=cp(t),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(p=v-c,y=M-h,o.xOffset=u+(p*f+y*_)-p,o.yOffset=d+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[pn]="0px 0px",a&&(Yi(a,o,"xOrigin",c,v),Yi(a,o,"yOrigin",h,M),Yi(a,o,"xOffset",u,o.xOffset),Yi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},ua=function(t,e){var n=t._gsap||new Zf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Sn(t,pn)||"0",h,u,d,f,g,_,m,p,y,x,v,M,E,T,C,b,S,D,k,N,B,W,V,Z,$,lt,dt,vt,It,Qt,q,it;return h=u=d=_=m=p=y=x=v=0,f=g=1,n.svg=!!(t.getCTM&&hp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ce]!=="none"?l[Ce]:"")),i.scale=i.rotate=i.translate="none"),T=Ah(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Vc(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==ha&&(D=T[0],k=T[1],N=T[2],B=T[3],h=W=T[4],u=V=T[5],T.length===6?(f=Math.sqrt(D*D+k*k),g=Math.sqrt(B*B+N*N),_=D||k?js(k,D)*_s:0,y=N||B?js(N,B)*_s+_:0,y&&(g*=Math.abs(Math.cos(y*ur))),n.svg&&(h-=M-(M*D+E*N),u-=E-(M*k+E*B))):(it=T[6],Qt=T[7],dt=T[8],vt=T[9],It=T[10],q=T[11],h=T[12],u=T[13],d=T[14],C=js(it,It),m=C*_s,C&&(b=Math.cos(-C),S=Math.sin(-C),Z=W*b+dt*S,$=V*b+vt*S,lt=it*b+It*S,dt=W*-S+dt*b,vt=V*-S+vt*b,It=it*-S+It*b,q=Qt*-S+q*b,W=Z,V=$,it=lt),C=js(-N,It),p=C*_s,C&&(b=Math.cos(-C),S=Math.sin(-C),Z=D*b-dt*S,$=k*b-vt*S,lt=N*b-It*S,q=B*S+q*b,D=Z,k=$,N=lt),C=js(k,D),_=C*_s,C&&(b=Math.cos(C),S=Math.sin(C),Z=D*b+k*S,$=W*b+V*S,k=k*b-D*S,V=V*b-W*S,D=Z,W=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ue(Math.sqrt(D*D+k*k+N*N)),g=Ue(Math.sqrt(V*V+it*it)),C=js(W,V),y=Math.abs(C)>2e-4?C*_s:0,v=q?1/(q<0?-q:q):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!dp(Sn(t,Ce)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ue(f),n.scaleY=Ue(g),n.rotation=Ue(_)+o,n.rotationX=Ue(m)+o,n.rotationY=Ue(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[pn]=To(c)),n.xOffset=n.yOffset=0,n.force3D=wn.force3D,n.renderTransform=n.svg?sS:lp?fp:iS,n.uncache=0,n},To=function(t){return(t=t.split(" "))[0]+" "+t[1]},Pl=function(t,e,n){var i=Qe(e);return Ue(parseFloat(e)+parseFloat(ss(t,"x",n+"px",i)))+i},iS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,fp(t,e)},fs="0deg",Br="0px",ps=") ",fp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",M=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==fs||h!==fs)){var E=parseFloat(h)*ur,T=Math.sin(E),C=Math.cos(E),b;E=parseFloat(u)*ur,b=Math.cos(E),a=Pl(y,a,T*b*-x),o=Pl(y,o,-Math.sin(E)*-x),l=Pl(y,l,C*b*-x+x)}m!==Br&&(v+="perspective("+m+ps),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||a!==Br||o!==Br||l!==Br)&&(v+=l!==Br||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ps),c!==fs&&(v+="rotate("+c+ps),h!==fs&&(v+="rotateY("+h+ps),u!==fs&&(v+="rotateX("+u+ps),(d!==fs||f!==fs)&&(v+="skew("+d+", "+f+ps),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ps),y.style[Ce]=v||"translate(0, 0)"},sS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),M,E,T,C,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ur,c*=ur,M=Math.cos(l)*u,E=Math.sin(l)*u,T=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=ur,b=Math.tan(c-h),b=Math.sqrt(1+b*b),T*=b,C*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,E*=b)),M=Ue(M),E=Ue(E),T=Ue(T),C=Ue(C)):(M=u,C=d,E=T=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=ss(f,"x",a,"px"),v=ss(f,"y",o,"px")),(g||_||m||p)&&(x=Ue(x+g-(g*M+_*T)+m),v=Ue(v+_-(g*E+_*C)+p)),(i||s)&&(b=f.getBBox(),x=Ue(x+i/100*b.width),v=Ue(v+s/100*b.height)),b="matrix("+M+","+E+","+T+","+C+","+x+","+v+")",f.setAttribute("transform",b),y&&(f.style[Ce]=b)},rS=function(t,e,n,i,s){var a=360,o=We(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?_s:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*od)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*od)%a-~~(c/a)*a)),t._pt=d=new fn(t._pt,e,n,i,c,Vb),d.e=h,d.u="deg",t._props.push(n),d},pd=function(t,e){for(var n in e)t[n]=e[n];return t},aS=function(t,e,n){var i=pd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ce]=e,o=ua(n,1),is(n,Ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ce],a[Ce]=e,o=ua(n,1),a[Ce]=c);for(l in Li)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Qe(c),g=Qe(h),u=f!==g?ss(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new fn(t._pt,o,l,u,d-u,kc),t._pt.u=g||0,t._props.push(l));pd(o,i)};dn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});wo[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return bi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,u)}});var pp={name:"css",register:zc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,y,x,v,M,E,T,C,b;Eh||zc(),this.styles=this.styles||op(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(xn[_]&&Kf(_,e,n,i,t,s)))){if(f=typeof h,g=wo[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=aa(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ji.lastIndex=0,Ji.test(c)||(m=Qe(c),p=Qe(h),p?m!==p&&(c=ss(t,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],We(c)&&~c.indexOf("random(")&&(c=aa(c)),Qe(c+"")||c==="auto"||(c+=wn.units[_]||Qe(bi(t,_))||""),(c+"").charAt(1)==="="&&(c=bi(t,_))):c=bi(t,_),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in ai&&(_==="autoAlpha"&&(d===1&&bi(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),Yi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Li,x){if(this.styles.save(_),b=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Sn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=Sn(t,"perspective"),S?t.style.perspective=S:is(t,"perspective")}u=parseFloat(h)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||ua(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new fn(this._pt,o,Ce,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new fn(this._pt,M,"scaleY",M.scaleY,(y?cr(M.scaleY,y+u):u)-M.scaleY||0,kc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(pn,0,o[pn]),h=eS(h),M.svg?Vc(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&Yi(this,M,"zOrigin",M.zOrigin,p),Yi(this,o,_,To(c),To(h)));continue}else if(_==="svgOrigin"){Vc(t,h,1,E,0,this);continue}else if(_ in up){rS(this,M,_,d,y?cr(d,y+h):h);continue}else if(_==="smoothOrigin"){Yi(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){aS(this,h,t);continue}}else _ in o||(_=Er(_)||_);if(x||(u||u===0)&&(d||d===0)&&!zb.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),p=Qe(h)||(_ in wn.units?wn.units[_]:m),m!==p&&(d=ss(t,_,c,p)),this._pt=new fn(this._pt,x?M:o,_,d,(y?cr(d,y+u):u)-d,!x&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?$b:kc),this._pt.u=p||0,x&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=Hb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Gb);else if(_ in o)tS.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,i,s);else if(_!=="parseTransform"){ph(_,h);continue}x||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),a.push(_)}}T&&np(this)},render:function(t,e){if(e.tween._time||!wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:bi,aliases:ai,getSetter:function(t,e,n){var i=ai[e];return i&&i.indexOf(",")<0&&(e=i),e in Li&&e!==pn&&(t._gsap.x||bi(t,"x"))?n&&ad===n?e==="scale"?Yb:qb:(ad=n||{})&&(e==="scale"?jb:Zb):t.style&&!uh(t.style[e])?Wb:~e.indexOf("-")?Xb:Sh(t,e)},core:{_removeProperty:is,_getMatrix:Ah}};mn.utils.checkPrefix=Er;mn.core.getStyleSaver=op;(function(r,t,e,n){var i=dn(r+","+t+","+e,function(s){Li[s]=1});dn(t,function(s){wn.units[s]="deg",up[s]=1}),ai[i[13]]=r+","+t,dn(n,function(s){var a=s.split(":");ai[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){wn.units[r]="px"});mn.registerPlugin(pp);var pe=mn.registerPlugin(pp)||mn;pe.core.Tween;const md=new I,oS=new ts,gd=new I;class lS extends ze{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const Jn=new ce,cS=new ce;class hS{constructor(t={}){const e=this;let n,i,s,a;const o={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,p){const y=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let x,v;p.isOrthographicCamera&&(x=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);const M=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,E=p.isOrthographicCamera?`scale( ${M} )scale(`+y+")translate("+u(x)+"px,"+u(v)+"px)"+d(p.matrixWorldInverse):`scale( ${M} )translateZ(`+y+"px)"+d(p.matrixWorldInverse),C=(p.isPerspectiveCamera?"perspective("+y+"px) ":"")+E+"translate("+s+"px,"+a+"px)";o.camera.style!==C&&(h.style.transform=C,o.camera.style=C),_(m,m,p)},this.setSize=function(m,p){n=m,i=p,s=n/2,a=i/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function d(m){const p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function f(m){const p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,y=m.children.length;p<y;p++)g(m.children[p])}function _(m,p,y,x){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const v=m.layers.test(y.layers)===!0,M=m.element;if(M.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(e,p,y);let E;m.isCSS3DSprite?(Jn.copy(y.matrixWorldInverse),Jn.transpose(),m.rotation2D!==0&&Jn.multiply(cS.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(md,oS,gd),Jn.setPosition(md),Jn.scale(gd),Jn.elements[3]=0,Jn.elements[7]=0,Jn.elements[11]=0,Jn.elements[15]=1,E=f(Jn)):E=f(m.matrixWorld);const T=o.objects.get(m);if(T===void 0||T.style!==E){M.style.transform=E;const C={style:E};o.objects.set(m,C)}M.parentNode!==h&&h.appendChild(M),m.onAfterRender(e,p,y)}}for(let v=0,M=m.children.length;v<M;v++)_(m.children[v],p,y)}}}const P={cover:"#E8C86A",paper:"#F7F2E6",paperShade:"#EDE6D4",mat:"#A3B5A1",wood:"#D6B894",ink:"#34434A",inkSoft:"#5E6E75",tech:"#87B5C9",techDark:"#5F93AB",coral:"#E6A18C",coralDark:"#C9806A",mint:"#B8D6BF",mintDark:"#7FAF8C",sand:"#E9DCC2",cream:"#FBF8F0",warmGray:"#CFC8BA",mustard:"#D9B24C",green:"#8FAE8B",greenDark:"#6F8F7A",brown:"#A9825E"},wr={W:9,D:11,COVER:.14,OV:.22,T:.9},qe=wr.COVER+wr.T/2,ye={UX:7.6,UZ:7.4,K:1.08,SX:7.6*1.08,SZ:7.4*1.08,CZ:-.9,LIFT:.2,TH:.06},qt={W:4.8,H:7,X:6.55,Z:2.7,YAW:.2,LEAN:.44,TH:.07},ge='"Microsoft YaHei","PingFang SC","Noto Sans SC","Hiragino Sans GB",sans-serif',Tn='"KaiTi","STKaiti","Kaiti SC","Noto Serif SC",serif',Gc='Georgia,"Times New Roman","Noto Serif SC","Songti SC",serif',zr=new I;function Dn(r,t,e,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();const c=.5*a/(a+o),h=1-zr.angleTo(r)/l;return Math.sign(zr[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Hc extends Pe{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Dn(g,l,"z","y",s,n),d[p+1]=1-Dn(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Dn(g,l,"z","y",s,n),d[p+1]=1-Dn(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),d[p+0]=1-Dn(g,l,"x","z",s,t),d[p+1]=Dn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Dn(g,l,"x","z",s,t),d[p+1]=1-Dn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),d[p+0]=1-Dn(g,l,"x","y",s,t),d[p+1]=1-Dn(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),d[p+0]=Dn(g,l,"x","y",s,t),d[p+1]=1-Dn(g,l,"y","x",s,e);break}}}const Dl=new Map;function Mn(r,t={}){const e=r+JSON.stringify(t);return Dl.has(e)||Dl.set(e,new Me({color:r,roughness:.9,metalness:0,...t})),Dl.get(e)}const va=(r,t)=>r&&r.isMaterial?r:Mn(r,t);function De(r,t=!0,e=!0){return r.castShadow=t,r.receiveShadow=e,r}function _e(r,t,e,n,i=0,s=0,a=0,o){const l=new St(new Pe(r,t,e),va(n,o));return l.position.set(i,s+t/2,a),De(l)}function nt(r,t,e,n,i=0,s=0,a=0,o=.05,l){const c=new St(new Hc(r,t,e,3,Math.min(o,r/2,t/2,e/2)),va(n,l));return c.position.set(i,s+t/2,a),De(c)}function oe(r,t,e,n,i=0,s=0,a=0,o=18,l){const c=new St(new Ls(r,t,e,o),va(n,l));return c.position.set(i,s+e/2,a),De(c)}function Zn(r,t,e=0,n=0,i=0,s=16,a=12,o){const l=new St(new Ai(r,s,a),va(t,o));return l.position.set(e,n,i),De(l)}function da(r,t,e=0,n=0,i=0,s=1){const a=new St(new lh(r,s),Mn(t,{flatShading:!0}));return a.position.set(e,n,i),De(a)}function mp(r,t,e,n,i=0,s=0,a=0){const o=new Dr;o.moveTo(-r/2,0),o.lineTo(r/2,0),o.lineTo(0,t),o.closePath();const l=new ga(o,{depth:e,bevelEnabled:!1});l.translate(0,0,-e/2);const c=new St(l,va(n));return c.position.set(i,s,a),De(c)}function Xt(...r){const t=new Jt;return r.forEach(e=>e&&t.add(e)),t}function kn(r,t){const e=document.createElement("canvas");return e.width=Math.round(r),e.height=Math.round(t),e}function Bn(r){const t=new ey(r);return t.colorSpace=cn,t.anisotropy=8,t}function Ne(r,t,e,n,i,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+n,e,t+n,e+i,s),r.arcTo(t+n,e+i,t,e+i,s),r.arcTo(t,e+i,t,e,s),r.arcTo(t,e,t+n,e,s),r.closePath()}function Ll(r,t,e,n,i,s,a=99){let o="",l=0;for(const c of t)if(c===`
`||r.measureText(o+c).width>i){if(r.fillText(o,e,n),n+=s,l+=1,o=c===`
`?"":c,l>=a)return n}else o+=c;return o&&(r.fillText(o,e,n),n+=s),n}class Fn{constructor(t,e,{ppu:n=200,lit:i=!0}={}){this.canvas=kn(t*n,e*n),this.ctx=this.canvas.getContext("2d"),this.tex=Bn(this.canvas);const s=i?new Me({map:this.tex,roughness:.9}):new vr({map:this.tex,toneMapped:!1});this.mesh=new St(new jn(t,e),s),this.mesh.userData.noOutline=!0,this.mesh.receiveShadow=i}draw(t){const{ctx:e,canvas:n}=this;return e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,n.width,n.height),t(e,n.width,n.height),this.tex.needsUpdate=!0,this}}function $e(r,{w:t=1.2,h:e=.32,bg:n="#F7F2E6",fg:i="#34434A",font:s=ge,weight:a=700,size:o=.6,border:l=null,radius:c=.25,lit:h=!0}={}){const u=new Fn(t,e,{ppu:220,lit:h});return u.draw((d,f,g)=>{n&&(d.fillStyle=n,Ne(d,2,2,f-4,g-4,g*c),d.fill(),l&&(d.strokeStyle=l,d.lineWidth=Math.max(3,g*.05),d.stroke())),d.fillStyle=i,d.textAlign="center",d.textBaseline="middle";let _=g*o;d.font=`${a} ${_}px ${s}`;const m=d.measureText(r).width;m>f*.9&&(_*=f*.9/m,d.font=`${a} ${_}px ${s}`),d.fillText(r,f/2,g/2+_*.04)}),u.mesh.material.alphaTest=.5,u.mesh}function gp(r,t){return new Pi({uniforms:{thickness:{value:t},color:{value:new jt(r)}},vertexShader:"uniform float thickness; void main(){ vec3 p = position + normalize(normal) * thickness; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",fragmentShader:`uniform vec3 color;
void main(){
  gl_FragColor = vec4(color, 1.0);
  #include <colorspace_fragment>
}`,side:tn})}const _p=gp("#FFFDF2",.028),uS=gp("#F0A98F",.04);function dS(r){const t=[];r.traverse(n=>{n.isMesh&&!n.userData.noOutline&&!n.userData.isOutline&&t.push(n)});const e=t.map(n=>{const i=new St(n.geometry,_p);return i.visible=!1,i.userData.isOutline=!0,i.raycast=()=>{},n.add(i),i});r.userData.outlines=e,r.userData.outlineState={hover:!1,select:!1}}function vp(r){const t=r.userData.outlineState;if(!t)return;const e=t.hover||t.select,n=t.select?uS:_p;r.userData.outlines.forEach(i=>{i.visible=e,i.material=n})}function _d(r,t){r!=null&&r.userData.outlineState&&(r.userData.outlineState.hover=t,vp(r))}function vd(r,t){r!=null&&r.userData.outlineState&&(r.userData.outlineState.select=t,vp(r))}class fS{constructor(t){this.container=t;const e=new Kx({antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.shadowMap.enabled=!0,e.shadowMap.type=Id,e.outputColorSpace=cn,e.toneMapping=wi,e.domElement.className="webgl-layer",this.webgl=e,this.css=new hS,this.css.domElement.className="css3d-layer",t.append(e.domElement,this.css.domElement),this.scene=new Jx,this.scene.background=new jt("#EADFCB"),this.scene.fog=new nh("#EADFCB",46,86),this.buildLights(),this.buildDesk()}buildLights(){const t=new Ny("#FFF6E6","#C9B899",1.75);this.scene.add(t);const e=new qu("#FFF0DA",1.75);e.position.set(-9,19,11),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const n=e.shadow.camera;n.left=-15,n.right=15,n.top=13,n.bottom=-13,n.near=2,n.far=50,e.shadow.bias=-5e-4,e.shadow.normalBias=.035,this.scene.add(e,e.target),this.sun=e;const i=new qu("#E3ECF2",.42);i.position.set(12,8,6),this.scene.add(i)}buildDesk(){const t=kn(1024,1024),e=t.getContext("2d");e.fillStyle=P.wood,e.fillRect(0,0,1024,1024);const n=4;for(let b=0;b<n;b++){const S=b*1024/n;e.fillStyle=["rgba(255,240,215,0.10)","rgba(120,80,40,0.05)","rgba(255,240,215,0.04)","rgba(120,80,40,0.08)"][b],e.fillRect(0,S,1024,1024/n),e.fillStyle="rgba(110,75,40,0.28)",e.fillRect(0,S,1024,2)}let i=7;const s=()=>(i=i*16807%2147483647)/2147483647;for(let b=0;b<260;b++){const S=s()*1024;e.strokeStyle=`rgba(${120+s()*40},${82+s()*30},${44+s()*20},${.05+s()*.09})`,e.lineWidth=.6+s()*1.6,e.beginPath(),e.moveTo(0,S);const D=2+s()*5,k=.004+s()*.006,N=s()*6.28;for(let B=0;B<=1024;B+=32)e.lineTo(B,S+Math.sin(B*k+N)*D);e.stroke()}const a=Bn(t);a.wrapS=a.wrapT=Qi,a.repeat.set(5,5);const o=new St(new jn(160,160),new Me({map:a,roughness:.78}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const l=27,c=17.5,h=kn(1080,700),u=h.getContext("2d");u.fillStyle=P.mat,u.fillRect(0,0,1080,700);for(let b=0;b<9e3;b++)u.fillStyle=s()>.5?"rgba(255,255,255,0.045)":"rgba(40,60,45,0.05)",u.fillRect(s()*1080,s()*700,1+s()*2,1);u.strokeStyle="rgba(245,250,240,0.55)",u.lineWidth=2,u.setLineDash([9,7]),u.strokeRect(16,16,1048,668);const d=new Dr,f=.5,g=l/2,_=c/2;d.moveTo(-g+f,-_),d.lineTo(g-f,-_),d.quadraticCurveTo(g,-_,g,-_+f),d.lineTo(g,_-f),d.quadraticCurveTo(g,_,g-f,_),d.lineTo(-g+f,_),d.quadraticCurveTo(-g,_,-g,_-f),d.lineTo(-g,-_+f),d.quadraticCurveTo(-g,-_,-g+f,-_);const m=new ga(d,{depth:.06,bevelEnabled:!1,curveSegments:6}),p=m.attributes.uv;for(let b=0;b<p.count;b++)p.setXY(b,p.getX(b)/l+.5,p.getY(b)/c+.5);const y=Bn(h),x=new St(m,new Me({map:y,roughness:.96}));x.rotation.x=-Math.PI/2,x.position.y=0,x.receiveShadow=!0,x.castShadow=!0,this.scene.add(x),this.matTop=.06;const v=kn(256,256),M=v.getContext("2d"),E=M.createRadialGradient(128,128,20,128,128,128);E.addColorStop(0,"rgba(45,40,30,0.55)"),E.addColorStop(.6,"rgba(45,40,30,0.22)"),E.addColorStop(1,"rgba(45,40,30,0)"),M.fillStyle=E,M.fillRect(0,0,256,256);const T=new St(new jn(1,1),new vr({map:Bn(v),transparent:!0,depthWrite:!1,opacity:.8}));T.rotation.x=-Math.PI/2,T.position.y=this.matTop+.004,T.scale.set(13,15,1),this.scene.add(T),this.contactShadow=T;const C=new St(new jn(260,60),new vr({color:"#EFE6D5",fog:!0}));C.position.set(0,26,-62),this.scene.add(C)}resize(t,e){this.webgl.setSize(t,e),this.css.setSize(t,e)}render(t){this.webgl.render(this.scene,t),this.css.render(this.scene,t)}}const xd={type:"change"},Ch={type:"start"},xp={type:"end"},Ka=new Lo,yd=new $i,pS=Math.cos(70*Jc.DEG2RAD),ke=new I,on=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6;class mS extends Vy{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ts,this._lastTargetPosition=new I,this._quat=new ts().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new I,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new I,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_S.bind(this),this._onPointerDown=gS.bind(this),this._onPointerUp=vS.bind(this),this._onContextMenu=wS.bind(this),this._onMouseWheel=bS.bind(this),this._onKeyDown=SS.bind(this),this._onTouchStart=MS.bind(this),this._onTouchMove=ES.bind(this),this._onMouseDown=xS.bind(this),this._onMouseMove=yS.bind(this),this._interceptControlDown=TS.bind(this),this._interceptControlUp=AS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xd),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),i<-Math.PI?i+=on:i>Math.PI&&(i-=on),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ke.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<pS?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(xd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ke.copy(i).sub(this.target);let s=ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function _S(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function vS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xp),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xS(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=fe.DOLLY;break;case sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}break;case sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Ch)}function yS(r){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function bS(r){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(r.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xp))}function SS(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function MS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=fe.TOUCH_ROTATE;break;case Qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=fe.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Ch)}function ES(r){switch(this._trackPointer(r),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=fe.NONE}}function wS(r){this.enabled!==!1&&r.preventDefault()}function TS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yp=32,bd=Math.tan(Jc.degToRad(yp/2));class CS{constructor(t){this.camera=new In(yp,16/9,.5,200),this.controls=new mS(this.camera,t);const e=this.controls;e.enablePan=!1,e.enableDamping=!0,e.dampingFactor=.08,e.rotateSpeed=.5,e.zoomSpeed=.6,e.minPolarAngle=.62,e.maxPolarAngle=1.33,e.minAzimuthAngle=-.62,e.maxAzimuthAngle=.62,e.minDistance=9,e.maxDistance=42,this.aspect=16/9,this.mode="closed",this.autoRotate=!1,this.autoT=0,this.busy=!1,this.applyView(this.view("closed"))}view(t){const e=this.aspect,n=s=>s/(2*bd*e),i=s=>s/(2*bd);switch(t){case"closed":return{target:[0,.6,.2],radius:Math.max(n(14),i(13.5)),polar:.86,azimuth:0};case"center":return{target:[0,1.5,-.4],radius:Math.max(n(10.5),i(8.6)),polar:1,azimuth:0};case"left":case"right":{const s=t==="left"?-1:1,a=-s*qt.YAW,o=qe+qt.H/2*Math.cos(qt.LEAN),l=qt.H/2*Math.sin(qt.LEAN),c=s*qt.X-Math.sin(a)*l,h=qt.Z-Math.cos(a)*l,u=Math.max(n(qt.W*1.12),i(qt.H*1.1));return{target:[c,o,h],radius:u,polar:Math.PI/2-qt.LEAN+.02,azimuth:a}}default:return{target:[0,2.05,.9],radius:Math.max(n(21.6),i(12.4)),polar:1.075,azimuth:0}}}applyView(t){this.controls.target.set(...t.target),this.camera.position.setFromSphericalCoords(t.radius,t.polar,t.azimuth).add(this.controls.target),this.camera.lookAt(this.controls.target)}current(){const t=this.camera.position.clone().sub(this.controls.target),e=new Rc().setFromVector3(t);return{target:this.controls.target.toArray(),radius:e.radius,polar:e.phi,azimuth:e.theta}}makeCamera(t){const e=this.view(t),n=this.camera.clone(),i=new I(...e.target);return n.position.setFromSphericalCoords(e.radius,e.polar,e.azimuth).add(i),n.lookAt(i),n.updateMatrixWorld(),n}goto(t,e=1.2,n="power2.inOut"){this.mode=t;const i=this.current(),s=this.view(t),a={t:0};this.busy=!0,this.controls.enabled=!1,pe.killTweensOf(this._p||{}),this._p=a;const o=(l,c,h)=>l+(c-l)*h;return new Promise(l=>{pe.to(a,{t:1,duration:e,ease:n,onUpdate:()=>{this.applyView({target:i.target.map((c,h)=>o(c,s.target[h],a.t)),radius:o(i.radius,s.radius,a.t),polar:o(i.polar,s.polar,a.t),azimuth:o(i.azimuth,s.azimuth,a.t)})},onComplete:()=>{this.busy=!1,this.controls.enabled=!0,l()}})})}resize(t,e){this.aspect=t/e,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.busy||this.applyView(this.view(this.mode))}update(t){if(!this.busy){if(this.autoRotate){this.autoT+=t;const e=this.current();e.azimuth=Math.sin(this.autoT*.35)*.42,this.applyView(e)}this.controls.update()}}}class RS{constructor(t,e,n){this.dom=t,this.camera=e,this.tooltip=n,this.targets=[],this.enabled=!1,this.ray=new zy,this.ndc=new et,this.hovered=null,this.down=null,this.pointer=null,t.addEventListener("pointerdown",i=>{this.down={x:i.clientX,y:i.clientY,t:performance.now()}}),t.addEventListener("pointerup",i=>{var o;const s=this.down;if(this.down=null,!s||!this.enabled||Math.hypot(i.clientX-s.x,i.clientY-s.y)>6||performance.now()-s.t>600)return;const a=this.pick(i.clientX,i.clientY);a&&((o=a.onClick)==null||o.call(a,a))}),t.addEventListener("pointermove",i=>{this.pointer={x:i.clientX,y:i.clientY}}),t.addEventListener("pointerleave",()=>{this.pointer=null,this.setHovered(null)})}add(t,{label:e="",onClick:n,hint:i="点击查看"}={}){const s={root:t,label:e,onClick:n,hint:i,active:!0};return t.userData.interactive=s,this.targets.push(s),s}clear(){this.setHovered(null),this.targets.length=0}setTargets(t){this.setHovered(null),this.targets=t}pick(t,e){const n=this.dom.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.targets.filter(a=>a.active&&a.root.visible).map(a=>a.root);if(!i.length)return null;const s=this.ray.intersectObjects(i,!0);for(const a of s){let o=a.object;for(;o;){if(o.userData.interactive&&o.userData.interactive.active)return o.userData.interactive;o=o.parent}}return null}setHovered(t){this.hovered!==t&&(this.hovered&&_d(this.hovered.root,!1),this.hovered=t,t&&_d(t.root,!0),this.dom.style.cursor=t?"pointer":"",this.tooltip&&(t&&t.label?(this.tooltip.innerHTML=`<b>${t.label}</b><span>${t.hint}</span>`,this.tooltip.classList.add("show")):this.tooltip.classList.remove("show")))}update(){if(!this.enabled||!this.pointer||this.down){!this.enabled&&this.hovered&&this.setHovered(null);return}const t=this.pick(this.pointer.x,this.pointer.y);this.setHovered(t),t&&this.tooltip&&(this.tooltip.style.transform=`translate(${this.pointer.x+14}px, ${this.pointer.y+16}px)`)}}const{W:Gi,D:Wn,COVER:Qn,OV:bp,T:_i}=wr,xi=Gi+bp,Js=Wn+bp*2;function PS(){const r=kn(512,512),t=r.getContext("2d");t.fillStyle=P.cover,t.fillRect(0,0,512,512);let e=11;const n=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<5200;s++){const a=n()*512,o=n()*512;t.fillStyle=n()>.5?"rgba(255,245,200,0.10)":"rgba(120,90,20,0.07)",n()>.5?t.fillRect(a,o,6+n()*8,1):t.fillRect(a,o,1,6+n()*8)}const i=Bn(r);return i.wrapS=i.wrapT=Qi,i.repeat.set(2,2.4),i}function DS(){const r=kn(64,256),t=r.getContext("2d");t.fillStyle="#F3EDDD",t.fillRect(0,0,64,256);for(let n=0;n<256;n+=4)t.fillStyle=n%8===0?"rgba(150,135,105,0.38)":"rgba(150,135,105,0.16)",t.fillRect(0,n,64,1);const e=Bn(r);return e.wrapS=e.wrapT=Qi,e}function LS(){const t=kn(xi*120,Js*120),e=t.getContext("2d"),n=t.width,i=t.height,s=(g,_=2)=>{e.save(),e.translate(_,_),e.globalAlpha=.35,g("rgba(255,248,214,1)"),e.restore(),e.save(),e.translate(-_*.6,-_*.6),e.globalAlpha=.3,g("rgba(110,82,18,1)"),e.restore(),g()},a=e.createLinearGradient(.32*120,0,.62*120,0);a.addColorStop(0,"rgba(120,90,20,0)"),a.addColorStop(.5,"rgba(120,90,20,0.30)"),a.addColorStop(1,"rgba(255,245,200,0.18)"),e.fillStyle=a,e.fillRect(.3*120,0,.34*120,i),s(g=>{e.strokeStyle=g||"rgba(140,105,30,0.75)",e.lineWidth=3,Ne(e,1*120,.62*120,n-1.6*120,i-1.24*120,22),e.stroke(),e.lineWidth=1.5,Ne(e,1.12*120,.74*120,n-1.84*120,i-1.48*120,16),e.stroke()},1.5);const o=(n+.4*120)/2;e.textAlign="center",e.textBaseline="middle",s(g=>{e.fillStyle=g||"#FFF9E3",e.font=`700 ${1.12*120}px ${Gc}`,e.fillText("HELLO, AI!",o,2.05*120)},3),s(g=>{e.fillStyle=g||"#4B4326",e.font=`600 ${.56*120}px ${Tn}`,e.fillText("走进人工智能的世界",o,3.12*120)},1.5),e.fillStyle="rgba(95,75,25,0.85)",e.font=`600 ${.2*120}px ${Gc}`,e.fillText("L E A R N   ·   E X P L O R E   ·   T H I N K",o,3.78*120),e.strokeStyle="rgba(125,96,28,0.55)",e.lineWidth=2;const l=o-2.3*120,c=4.45*120,h=4.6*120,u=4.3*120;for(let g=0;g<7;g++){const _=c+60+g*.55*120;[-1,1].forEach(m=>{const p=m<0?l:l+h;e.beginPath(),e.moveTo(p,_),e.lineTo(p+m*.45*120,_),e.lineTo(p+m*.7*120,_+(g%2?.2:-.2)*120),e.stroke(),e.beginPath(),e.arc(p+m*.76*120,_+(g%2?.2:-.2)*120,5,0,6.3),e.stroke()})}e.save(),e.shadowColor="rgba(80,60,10,0.45)",e.shadowBlur=14,e.shadowOffsetY=5,e.fillStyle="#FBF6E8",Ne(e,l,c,h,u,20),e.fill(),e.restore(),e.strokeStyle="rgba(52,67,74,0.18)",e.lineWidth=2,Ne(e,l+12,c+12,h-24,u-24,14),e.stroke();const d=o,f=c+u/2+.25*120;return e.fillStyle="#DDE7DA",Ne(e,l+.4*120,f+1*120,h-.8*120,.34*120,10),e.fill(),e.fillStyle=P.tech,Ne(e,d-.62*120,f-.05*120,1.24*120,1.05*120,26),e.fill(),e.fillStyle="#FBF6E8",Ne(e,d-.36*120,f+.2*120,.72*120,.46*120,12),e.fill(),e.fillStyle=P.coral,e.beginPath(),e.arc(d,f+.43*120,.1*120,0,6.3),e.fill(),e.fillStyle="#FBF6E8",e.strokeStyle=P.ink,e.lineWidth=5,Ne(e,d-.82*120,f-1.3*120,1.64*120,1.14*120,34),e.fill(),e.stroke(),e.fillStyle=P.ink,Ne(e,d-.62*120,f-1.1*120,1.24*120,.74*120,22),e.fill(),e.fillStyle="#BFE3D0",[-.28,.28].forEach(g=>{e.beginPath(),e.arc(d+g*120,f-.76*120,.11*120,0,6.3),e.fill()}),e.strokeStyle="#BFE3D0",e.lineWidth=5,e.beginPath(),e.arc(d,f-.66*120,.16*120,.25,Math.PI-.25),e.stroke(),e.strokeStyle=P.ink,e.lineWidth=5,e.beginPath(),e.moveTo(d,f-1.3*120),e.lineTo(d,f-1.62*120),e.stroke(),e.fillStyle=P.coral,e.beginPath(),e.arc(d,f-1.7*120,.1*120,0,6.3),e.fill(),e.strokeStyle=P.techDark,e.lineWidth=16,e.lineCap="round",e.beginPath(),e.moveTo(d-.66*120,f+.2*120),e.lineTo(d-1.08*120,f+.62*120),e.moveTo(d+.66*120,f+.2*120),e.lineTo(d+1.1*120,f-.25*120),e.stroke(),s(g=>{e.fillStyle=g||"#4B4326",e.font=`500 ${.34*120}px ${Tn}`,e.fillText("一本可以探索的人工智能立体书",o,9.55*120)},1.2),e.fillStyle="rgba(95,75,25,0.8)",e.font=`600 ${.17*120}px ${ge}`,e.fillText("初中人工智能通识 · 立体纸艺互动教材",o,10.15*120),Bn(t)}function IS(){const r=kn(256,256),t=r.getContext("2d");t.fillStyle="#C5D3C2",t.fillRect(0,0,256,256),t.strokeStyle="rgba(255,255,255,0.45)",t.lineWidth=2;for(let n=0;n<4;n++)for(let i=0;i<4;i++){const s=i*64+(n%2?32:0),a=n*64+32;t.strokeRect(s-9,a-9,18,18),t.beginPath(),t.moveTo(s-9,a),t.lineTo(s-20,a),t.moveTo(s+9,a),t.lineTo(s+20,a),t.stroke()}const e=Bn(r);return e.wrapS=e.wrapT=Qi,e.repeat.set(5,6),e}class US{constructor(){this.group=new Jt,this.coverAngle=-Math.PI,this.blockAngle=-Math.PI;const t=new Me({map:PS(),roughness:.82}),e=DS(),n=T=>{const C=e.clone();return C.needsUpdate=!0,C.repeat.set(1,T),new Me({map:C,roughness:.95})},i=new Me({color:P.paper,roughness:.95}),s=[n(.16),n(.16),i,i,n(.16),n(.16)],a=De(new St(new Hc(xi,Qn,Js,2,.04),t));a.position.set(xi/2,Qn/2,0);const o=De(new St(new Pe(Gi,_i/2,Wn),s));o.position.set(Gi/2,Qn+_i/4,0),this.rightPrint=this.makePrint(),this.rightPrint.position.set(Gi/2,qe+.003,0),this.group.add(a,o,this.rightPrint);const l=(T,C,b)=>{const S=new St(new Pe(.12,_i/2-.02,.05),new Me({color:P.coral,roughness:.9}));return S.position.set(T,C,b),S};this.group.add(l(.07,Qn+_i/4,Wn/2+.01),l(.07,Qn+_i/4,-Wn/2-.01));const c=new Me({color:P.coralDark,roughness:.75,side:Xn}),h=new Jt,u=new St(new Pe(.3,.012,1.4),c);u.position.set(.95,qe+.008,Wn/2-.7);const d=new St(new Pe(.3,.012,qe+.12),c);d.rotation.x=Math.PI/2-.16,d.position.set(.95,qe/2+.03,Wn/2+.07);const f=new Dr;f.moveTo(-.15,0),f.lineTo(.15,0),f.lineTo(.15,1.25),f.lineTo(0,1.08),f.lineTo(-.15,1.25),f.closePath();const g=new St(new ch(f),c);g.rotation.x=Math.PI/2,g.rotation.z=-.12,g.position.set(.95,.075,Wn/2+.14),[u,d,g].forEach(T=>De(T)),h.add(u,d,g),this.group.add(h),this.spine=new Jt;const _=De(new St(new Pe(Qn,1,Js),t));_.position.set(-Qn/2,.5,0),this.spine.add(_),this.group.add(this.spine),this.coverPivot=new Jt,this.coverPivot.position.set(0,qe,0);const m=De(new St(new Hc(xi,Qn,Js,2,.04),t));m.position.set(-xi/2,-qe+Qn/2,0);const p=new St(new jn(xi-.08,Js-.08),new Me({map:IS(),roughness:.95}));p.rotation.x=-Math.PI/2,p.position.set(-xi/2,-qe+Qn+.002,0),p.receiveShadow=!0;const y=new Jt;y.rotation.z=Math.PI;const x=new St(new jn(xi,Js),new Me({map:LS(),transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}));x.rotation.x=-Math.PI/2,x.position.set(xi/2,qe+.002,0),x.receiveShadow=!0,y.add(x),this.coverPivot.add(m,p,y),this.coverMesh=m,this.group.add(this.coverPivot),this.blockPivot=new Jt,this.blockPivot.position.set(0,qe,0);const v=De(new St(new Pe(Gi,_i/2,Wn),s));v.position.set(-Gi/2,-_i/4,0),this.leftPrint=this.makePrint(),this.leftPrint.position.set(-Gi/2,.003,0);const M=l(-.07,-_i/4,Wn/2+.01),E=l(-.07,-_i/4,-Wn/2-.01);this.blockPivot.add(v,this.leftPrint,M,E),this.group.add(this.blockPivot),this.setAngles(-Math.PI,-Math.PI)}makePrint(){const t=new St(new jn(Gi,Wn),new Me({color:"#ffffff",roughness:.95}));return t.rotation.x=-Math.PI/2,t.receiveShadow=!0,t}get clickTarget(){return this.coverPivot}setAngles(t,e){this.coverAngle=t,this.blockAngle=e,this.coverPivot.rotation.z=t,this.blockPivot.rotation.z=e;const n=qe*Math.sin(t),i=qe*(1-Math.cos(t)),s=Math.hypot(n,i);this.spine.visible=s>.04,this.spine.rotation.z=Math.atan2(-n,i),this.spine.scale.y=Math.max(s,.001)}setPrints(t,e){t&&(this.leftPrint.material.map=t,this.leftPrint.material.needsUpdate=!0),e&&(this.rightPrint.material.map=e,this.rightPrint.material.needsUpdate=!0)}}const Vi=26;class Sd{constructor(){const{W:t,D:e}=wr,n=(Vi+1)*2;this.pos=new Float32Array(n*3),this.nor=new Float32Array(n*3);const i=new Float32Array(n*2),s=[];for(let c=0;c<=Vi;c++){for(let h=0;h<2;h++){const u=c*2+h;i[u*2]=c/Vi,i[u*2+1]=h===0?1:0,this.pos[u*3+2]=h===0?-e/2:e/2}if(c<Vi){const h=c*2,u=c*2+1,d=(c+1)*2+1,f=(c+1)*2;s.push(h,u,d,h,d,f)}}const a=new Xe;a.setAttribute("position",new En(this.pos,3)),a.setAttribute("normal",new En(this.nor,3)),a.setAttribute("uv",new En(i,2)),a.setIndex(s),this.geometry=a,this.frontMat=new Me({color:"#ffffff",roughness:.95,side:Ci}),this.backMat=new Me({color:"#ffffff",roughness:.95,side:tn}),this.group=new Jt;const o=new St(a,this.frontMat),l=new St(a,this.backMat);[o,l].forEach(c=>{c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,this.group.add(c)}),this.group.position.set(0,qe+.007,0),this.group.visible=!1,this.W=t,this.set(0)}setMaps(t,e){this.frontMat.map=t||null,this.backMat.map=e||null,this.frontMat.needsUpdate=!0,this.backMat.needsUpdate=!0}set(t){this.p=t;const e=Math.PI*t,n=.85*Math.sin(e),i=this.W/Vi;let s=0,a=0;for(let o=0;o<=Vi;o++){const l=o/Vi,c=e-n*Math.pow(l,1.25);if(o>0){const h=(o-.5)/Vi,u=e-n*Math.pow(h,1.25);s+=Math.cos(u)*i,a+=Math.sin(u)*i}for(let h=0;h<2;h++){const u=(o*2+h)*3;this.pos[u]=s,this.pos[u+1]=Math.max(a,0),this.nor[u]=-Math.sin(c),this.nor[u+1]=Math.cos(c),this.nor[u+2]=0}}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.normal.needsUpdate=!0}}const Md={back:[0,-1],front:[0,1],left:[-1,0],right:[1,0]};class Sp extends Jt{constructor(t=0,e=0,{dir:n="back",yaw:i=0,order:s=0}={}){super(),this.matrixAutoUpdate=!1,this.base=new I(t,0,e),this.yaw=i,this.dirVec=Md[n]||Md.back,this.order=s,this.fold=0,this._m=new ce,this._r=new ce,this.apply()}apply(){const t=this.fold,e=t*Math.PI/2,n=Math.max(Math.sin(e),.02),i=Math.cos(e),[s,a]=this.dirVec;this._m.set(1,i*s,0,0,0,n,0,0,0,i*a,1,0,0,0,0,1),this._r.makeRotationY(this.yaw),this.matrix.makeTranslation(this.base.x,this.base.y,this.base.z).multiply(this._m).multiply(this._r),this.visible=t>.015,this.matrixWorldNeedsUpdate=!0}setFold(t){this.fold=t,this.apply()}}class FS{constructor(){this.group=new Jt,this.group.position.set(0,qe,ye.CZ);const t=new Me({color:P.cream,roughness:.95});this.topMat=new Me({color:"#ffffff",roughness:.95});const e=De(new St(new Pe(ye.SX,ye.TH,ye.SZ),[t,t,this.topMat,t,t,t]));e.position.y=-.06/2,this.plate=new Jt,this.plate.add(e),this.legs=[];const n=new Me({color:P.paperShade,roughness:.95});[[-8.208/2+.5,0],[ye.SX/2-.5,0],[0,ye.SZ/2-.4],[0,-7.992000000000001/2+.4]].forEach(([i,s],a)=>{const o=new St(new Pe(a<2?.05:ye.SX-1.6,1,a<2?ye.SZ-1.2:.05),n);o.position.set(i,0,s),this.group.add(o),this.legs.push(o)}),this.content=new Jt,this.plate.add(this.content),this.group.add(this.plate),this.lift=0,this.setLift(0)}setGround(t){this.topMat.map=t,this.topMat.needsUpdate=!0}setLift(t){this.lift=t;const e=ye.TH+t*ye.LIFT;this.plate.position.y=e,this.legs.forEach(n=>{n.scale.y=Math.max(e-ye.TH,.001),n.position.y=(e-ye.TH)/2}),this.group.visible=t>.01}}class NS{constructor(t,e){this.items=[t,e].map((n,i)=>{const s=i===0?-1:1,a=new Jt;a.position.set(s*qt.X,qe,qt.Z),a.rotation.y=-s*qt.YAW;const o=new Jt,l=De(new St(new Pe(qt.W,qt.H,qt.TH),new Me({color:P.paper,roughness:.95})));l.position.set(0,qt.H/2,-.07/2);const c=De(new St(new Pe(.5,qt.H*.6,.04),new Me({color:P.paperShade,roughness:.95})));c.position.set(0,qt.H*.3,-.07-.02);const h=new lS(n);return h.position.set(0,qt.H/2,.012),o.add(l,c,h),a.add(o),{sgn:s,group:a,hinge:o,css:h,el:n,board:l}}),this.t=0,this.setFold(0),this.cssW=0}get groups(){return this.items.map(t=>t.group)}setFold(t){this.t=t;const e=Math.min(1,Math.max(0,(t-.1)/.45));this.items.forEach(n=>{n.hinge.rotation.x=-Math.PI/2+t*(Math.PI/2-qt.LEAN),n.group.visible=t>.01,n.el.style.opacity=e,n.el.classList.toggle("shown",t>.92)})}layout(t,e){const n=new I(qt.X-qt.W/2,qe+3,qt.Z).project(t),i=new I(qt.X+qt.W/2,qe+3,qt.Z).project(t),s=Math.abs(i.x-n.x)*e/2,a=Math.round(Jc.clamp(s,350,470));if(a===this.cssW)return;this.cssW=a;const o=.94,l=Math.round(a*qt.H/qt.W);this.items.forEach(c=>{c.el.style.width=`${a}px`,c.el.style.height=`${l}px`,c.css.scale.setScalar(qt.W*o/a)})}}const Ut=100,{W:ln,D:Hi}=wr;function Mp(r,t,e,n){r.fillStyle=P.paper,r.fillRect(0,0,t,e);let i=n;const s=()=>(i=i*16807%2147483647)/2147483647;for(let a=0;a<2600;a++)r.fillStyle=s()>.5?"rgba(255,255,255,0.35)":"rgba(170,150,110,0.06)",r.fillRect(s()*t,s()*e,1+s()*3,1+s()*2)}function OS(r){return r.map((t,e)=>{const n=kn(ye.SX*Ut,ye.SZ*Ut);t.drawGround(n.getContext("2d"),n.width,n.height,Ut*ye.K);const i=kn(ln*2*Ut,Hi*Ut),s=i.getContext("2d");Mp(s,i.width,i.height,31+e*7);const a=ln*Ut,o=s.createLinearGradient(a-90,0,a+90,0);o.addColorStop(0,"rgba(120,100,70,0)"),o.addColorStop(.5,"rgba(120,100,70,0.20)"),o.addColorStop(1,"rgba(120,100,70,0)"),s.fillStyle=o,s.fillRect(a-90,0,180,i.height),[-1,1].forEach(_=>{s.save(),s.translate((_*qt.X+ln)*Ut,(qt.Z+Hi/2)*Ut),s.rotate(_*qt.YAW),s.strokeStyle="rgba(120,105,80,0.30)",s.lineWidth=2,s.setLineDash([10,8]),s.strokeRect(-4.8/2*Ut,-7*Ut,qt.W*Ut,qt.H*Ut),s.fillStyle="rgba(255,255,255,0.28)",s.fillRect(-4.8/2*Ut,-7*Ut,qt.W*Ut,qt.H*Ut),s.restore()});const l=(-8.208/2+ln)*Ut,c=(ye.CZ-ye.SZ/2+Hi/2)*Ut;s.save(),s.shadowColor="rgba(90,75,50,0.25)",s.shadowBlur=10,s.drawImage(n,l,c),s.restore(),s.strokeStyle="rgba(120,105,80,0.35)",s.lineWidth=2,s.strokeRect(l,c,n.width,n.height);const h=(Hi-1.25)*Ut;s.textBaseline="middle",s.fillStyle=P.coralDark,s.font=`700 ${.3*Ut}px ${Gc}`,s.textAlign="left",s.fillText(t.unit,.75*Ut,h-.62*Ut),s.fillStyle=P.ink,s.font=`700 ${.95*Ut}px ${Tn}`,s.fillText(t.title,.7*Ut,h+.12*Ut),s.textAlign="right",s.font=`600 ${.62*Ut}px ${Tn}`,s.fillStyle=P.inkSoft,s.fillText(t.question,(ln*2-.75)*Ut,h+.12*Ut),s.strokeStyle="rgba(52,67,74,0.35)",s.lineWidth=2,s.setLineDash([]),s.beginPath(),s.moveTo(.7*Ut,h+.72*Ut),s.lineTo((ln-.6)*Ut,h+.72*Ut),s.moveTo((ln+.6)*Ut,h+.72*Ut),s.lineTo((ln*2-.7)*Ut,h+.72*Ut),s.stroke(),s.font=`500 ${.22*Ut}px ${ge}`,s.fillStyle="rgba(52,67,74,0.6)",s.textAlign="left",s.fillText(`${e*2+2}`,.75*Ut,h+.98*Ut),s.textAlign="right",s.fillText(`${e*2+3}`,(ln*2-.75)*Ut,h+.98*Ut);const u=_=>{const m=kn(ln*Ut,Hi*Ut);return m.getContext("2d").drawImage(i,_,0,ln*Ut,Hi*Ut,0,0,ln*Ut,Hi*Ut),Bn(m)},d=u(0),f=u(ln*Ut),g=d.clone();return g.wrapS=Qi,g.repeat.x=-1,g.offset.x=1,g.needsUpdate=!0,{left:d,right:f,leftMirror:g,ground:Bn(n)}})}function kS(){const r=kn(ln*Ut*.5,Hi*Ut*.5),t=r.getContext("2d");return Mp(t,r.width,r.height,5),Bn(r)}const Ja=r=>new Promise(t=>r.eventCallback("onComplete",t));class BS{constructor(t){this.app=t,this.model=new US,this.root=this.model.group,this.stage=new FS,this.leaf=new Sd,this.leafB=new Sd,this.wings=new NS(t.ui.leftEl,t.ui.rightEl),this.root.add(this.stage.group,this.leaf.group,this.leafB.group,...this.wings.groups),this.state="closed",this.busy=!1,this.index=0,this.matTop=t.renderer.matTop,this.closedX=-9.22/2+wr.COVER/2,this.root.position.set(this.closedX,this.matTop,0),this.root.rotation.y=-.07,t.renderer.scene.add(this.root),this.shadowBlob=t.renderer.contactShadow,this.shadowBlob.position.x=0}init(t,e){this.spreads=t,this.scenes=e,e.forEach(n=>{this.stage.content.add(n.group),n.group.scale.setScalar(ye.K),n.group.visible=!1}),this.model.setPrints(t[0].left,t[0].right),this.blank=kS()}warmUp(){const{app:t,model:e,stage:n,wings:i}=this,s=t.renderer.webgl,a=t.cam.makeCamera("open");this.spreads.forEach(c=>[c.left,c.right,c.leftMirror,c.ground].forEach(h=>s.initTexture(h))),s.initTexture(this.blank);const o=this.root.position.clone(),l=this.root.rotation.y;this.root.position.set(0,this.matTop,0),this.root.rotation.y=0,e.setAngles(-.6,-.3),n.setGround(this.spreads[0].ground),n.setLift(1),i.setFold(1),[this.leaf,this.leafB].forEach(c=>{c.setMaps(this.blank,this.blank),c.set(.5),c.group.visible=!0}),this.scenes.forEach(c=>{c.group.visible=!0,c.popups.forEach(h=>h.setFold(1))}),t.renderer.scene.updateMatrixWorld(!0),s.compile(t.renderer.scene,a),s.render(t.renderer.scene,a),t.renderer.css.render(t.renderer.scene,a),this.scenes.forEach(c=>{c.popups.forEach(h=>h.setFold(0)),c.group.visible=!1}),[this.leaf,this.leafB].forEach(c=>{c.group.visible=!1,c.set(0)}),n.setLift(0),i.setFold(0),e.setAngles(-Math.PI,-Math.PI),this.root.position.copy(o),this.root.rotation.y=l}async open(){if(this.state!=="closed"||this.busy)return;this.busy=!0,this.state="opening";const{app:t,model:e,root:n}=this;t.bus.emit("book:opening"),this.prepareSpread(0);const i={cover:-Math.PI,block:-Math.PI},s=()=>e.setAngles(i.cover,i.block),a=pe.timeline();a.to(n.position,{y:this.matTop+.18,duration:.6,ease:"sine.out"},0).to(n.position,{y:this.matTop,duration:1.1,ease:"sine.inOut"},.6).to(n.rotation,{y:0,duration:1.4,ease:"sine.inOut"},0).to(n.position,{x:0,duration:2.9,ease:"sine.inOut"},.1).to(this.shadowBlob.scale,{x:23,y:15.5,duration:2.6,ease:"sine.inOut"},.3).to(i,{cover:0,duration:2.2,ease:"power2.inOut",onUpdate:s},.25).to(i,{block:0,duration:2.1,ease:"power2.inOut",onUpdate:s},.75),[this.leaf,this.leafB].forEach((o,l)=>{const c={v:0},h=1.55+l*.25;a.add(()=>{o.setMaps(this.blank,this.blank),o.set(0),o.group.visible=!0},h),a.to(c,{v:1,duration:1.15,ease:"sine.inOut",onUpdate:()=>o.set(c.v)},h),a.add(()=>o.group.visible=!1,h+1.16)}),a.add(this.enterTimeline(0),2.92),t.cam.goto("open",3.7,"sine.inOut"),await Ja(a),this.state="open",this.finishEnter(0),this.busy=!1,t.bus.emit("book:opened")}prepareSpread(t){this.index=t,this.stage.setGround(this.spreads[t].ground),this.scenes.forEach((e,n)=>e.group.visible=n===t),this.app.ui.showSpread(t)}enterTimeline(t){const{stage:e,wings:n}=this,i=pe.timeline();return i.to(n,{t:1,duration:.95,ease:"back.out(1.1)",onUpdate:()=>n.setFold(n.t)},0),i.to(e,{lift:1,duration:.55,ease:"power2.out",onUpdate:()=>e.setLift(e.lift)},.1),i.add(this.scenes[t].unfoldTimeline(),.3),i}finishEnter(t){this.scenes[t].activate(),this.app.interaction.enabled=!0,this.app.bus.emit("spread:entered",t)}async enterSpread(t){this.prepareSpread(t),await Ja(this.enterTimeline(t)),this.finishEnter(t)}async leaveSpread(){const{app:t,stage:e,wings:n}=this,i=this.scenes[this.index];t.interaction.enabled=!1,i.deactivate(),t.speech.stop(),t.ui.closeOverlays();const s=pe.timeline(),a=i.foldTimeline();s.add(a,0),s.to(n,{t:0,duration:.6,ease:"power2.in",onUpdate:()=>n.setFold(n.t)},.15),s.to(e,{lift:0,duration:.35,ease:"power2.in",onUpdate:()=>e.setLift(e.lift)},Math.max(a.duration()-.1,.3)),await Ja(s),i.group.visible=!1}async flip(t,e=1.25){const{leaf:n,model:i,spreads:s}=this,a=this.index,o={v:t>0?0:1};t>0?(n.setMaps(s[a].right,s[a+1].leftMirror),i.setPrints(null,s[a+1].right)):(n.setMaps(s[a-1].right,s[a].leftMirror),i.setPrints(s[a-1].left,null)),n.set(o.v),n.group.visible=!0,await Ja(pe.to(o,{v:t>0?1:0,duration:e,ease:"sine.inOut",onUpdate:()=>n.set(o.v)})),t>0?i.setPrints(s[a+1].left,null):i.setPrints(null,s[a-1].right),n.group.visible=!1,this.index=a+t}async turnTo(t){if(this.state!=="open"||this.busy||t===this.index||t<0||t>=this.scenes.length)return!1;this.busy=!0,this.app.bus.emit("book:turning",t),this.app.cam.mode!=="open"&&this.app.cam.goto("open",.8),await this.leaveSpread();const e=Math.abs(t-this.index),n=Math.sign(t-this.index);for(let i=0;i<e;i++)await this.flip(n,e>1?.8:1.25);return await this.enterSpread(t),this.busy=!1,!0}}const Qa={title:"Hello, AI！走进人工智能的世界",subtitle:"一本可以探索的人工智能立体书",grade:"初中七年级 · 人工智能通识入门",duration:"40—45 分钟"},ho={ai:{name:"人工智能",explain:"让计算机完成通常需要人的智能才能完成的任务，例如识别图像、听懂语音、理解文字。很多人工智能系统的本领不是人一条条写出来的，而是从大量数据中“学”出来的。",example:"手机相册能自动把同一只宠物的照片归到一起；地图软件会根据路况预测到达时间。",link:{scene:"city",target:"speaker",text:"智能音箱：把声音识别成文字"},think:"你今天用过的哪些东西，可能用到了人工智能？你是怎么判断的？"},rule:{name:"规则控制（自动化）",explain:"设备按照人事先写好的固定规则运行：“如果……就……”。规则不变，设备的做法就不变，它不会从数据里学到新规律。",example:"定时台灯到 19:00 就亮；自动门感应到有人就打开；洗衣机按设定程序依次进水、洗涤、脱水。",link:{scene:"city",target:"lamp",text:"定时台灯：到时间就开灯"},think:"“能自动工作”和“使用了人工智能”是一回事吗？"},io:{name:"输入与输出",explain:"分析一个信息系统时，可以看三件事：它接收什么信息（输入）、怎样处理这些信息、最后给出什么结果（输出）。",example:"语音助手：输入是你说的话，处理是语音识别和理解指令，输出是回答或执行的操作。",link:{scene:"city",target:"imaging",text:"图像识别站：图像 → 模型 → 类别"},think:"人脸识别门禁的输入、处理和输出分别是什么？"},data:{name:"数据",explain:"数据是记录下来的信息，可以是图片、声音、文字或数字。机器学习需要用数据来训练模型——数据就像模型的“学习材料”。",example:"想让计算机认识猫和狗，就要先准备许多猫和狗的图片。",link:{scene:"lab",target:"stand",text:"样本展示台上的 20 张图片"},think:"如果学习材料里的猫全是橘色的，模型见到黑猫时可能会怎样？"},label:{name:"标签",explain:"标签是人给数据标注的“已知答案”。在图像分类里，每张训练图片的标签说明它属于哪个类别。",example:"给一张图片标上“猫”，就是告诉模型：这张图的正确类别是猫。",link:{scene:"lab",target:"label",text:"标注工作台上的“猫”“狗”收纳盒"},think:"如果标签贴错了，模型学到的会是什么？"},trainset:{name:"训练集",explain:"用来训练模型的那部分数据（含标签）。模型通过它们调整自己，找到区分不同类别的规律。",example:"本实验中，你标注的 20 张图片就是训练集。",link:{scene:"lab",target:"stand",text:"训练样本 · 20 张"},think:"训练集里的图片越多越好吗？除了数量，还有什么也很重要？"},testset:{name:"测试集",explain:"专门留出来检验模型的数据，从不参与训练。用模型没见过的数据测试，才能知道它是真的学到了规律，还是只记住了训练图片。",example:"就像考试题不能和练习题一模一样，否则分数高也说明不了你真的学会了。",link:{scene:"lab",target:"rack",text:"测试样本架上的 10 张图片"},think:"为什么不能用训练过的图片来给模型“打分”？"},classify:{name:"图像分类",explain:"让模型判断一张图片属于哪个类别的任务。模型输出的是它对各个类别的“可能性大小”，并不是百分之百的结论。",example:"垃圾分类小程序拍照识别垃圾种类；植物识别软件拍照认花。",link:{scene:"lab",target:"test",text:"测试平台与预测结果显示屏"},think:"模型说“90% 是猫”，这张图就一定是猫吗？"},ml:{name:"机器学习",explain:"让计算机从数据中自动找出规律的方法。人不用把“怎样区分猫和狗”的规则写出来，而是提供带标签的数据，由算法通过训练得到模型。",example:"垃圾邮件过滤器从大量“垃圾 / 正常”邮件中学习，再去判断新邮件。",link:{scene:"lab",target:"host",text:"AI 训练主机：执行训练算法"},think:"机器“学习”和你平时的学习，有哪些相同和不同？"},training:{name:"模型训练",explain:"算法反复查看训练数据：先让模型猜，再对照标签看猜得对不对，然后一点点调整模型内部的参数，使下一次猜得更准。这个过程重复很多轮。",example:"主机屏幕上的“损失”数值表示模型猜得有多不准，训练时它通常会逐渐变小。",link:{scene:"lab",target:"host",text:"AI 训练主机：屏幕显示真实的训练数值"},think:"训练集上的正确率很高，就说明模型一定很好吗？"},model:{name:"模型",explain:"训练得到的结果。可以把它看成一个“从输入到输出的计算过程”：输入一张图片，输出每个类别的可能性。模型学到的规律保存在它的大量参数里。",example:"本实验的模型是一个很小的神经网络，在你的浏览器里完成训练。",link:{scene:"lab",target:"model",text:"纸艺“神经网络”模型"},think:"同样的算法，用不同的数据训练，会得到同样的模型吗？"},predict:{name:"预测与置信度",explain:"模型对新数据给出的判断叫预测。置信度表示模型对自己这次判断的“把握程度”，但把握大不等于一定正确——模型也可能自信地出错。",example:"天气预报说“降水概率 80%”，也不代表一定下雨。",link:{scene:"lab",target:"test",text:"测试平台：查看预测类别与置信度"},think:"在什么情况下，即使置信度很高，你也应该再核实一下？"},bias:{name:"偏差",explain:"如果训练数据不全面、不均衡或者标签有错，模型学到的规律就可能“偏”向某一边，对某些情况判断得特别差。",example:"训练集里狗的图片很少时，模型可能更容易把狗认成猫。",link:{scene:"lab",target:"label",text:"比较两个收纳盒里样本的数量"},think:"如果一个人脸识别系统的训练数据里某类人很少，可能带来什么问题？"},claim:{name:"主张",explain:"一段话里“可以被检验真假”的具体说法。核验信息的第一步，是把回答拆开，找出其中的主张。",example:"“声音在空气中的传播速度约为每秒 340 米”是一条可以核查的主张；“这很神奇”不是。",link:{scene:"verify",target:"screen",text:"信息展示屏：AI 回答中的关键主张"},think:"“所有”“一定”“已经证明”这样的词，为什么需要格外留意？"},evidence:{name:"证据",explain:"用来判断主张是否成立的可靠材料，例如教科书、权威机构发布的数据、可重复的实验结果。广告、传言和与问题无关的材料不能作为证据。",example:"核查“光速约为每秒 30 万千米”，可以查物理教科书。",link:{scene:"verify",target:"evidence",text:"证据核验区：证据卡"},think:"一条材料“听起来有道理”，能说明它就是可靠证据吗？"},verify:{name:"信息核验",explain:"对信息进行检查的过程：找出主张 → 查找可靠来源 → 比对证据 → 作出判断（支持、不支持或证据不足）。证据不够时，保留“不确定”是负责任的做法。",example:"看到“某食物能治百病”的说法，先查权威医学来源，而不是直接转发。",link:{scene:"verify",target:"gauge",text:"事实判断仪表：支持 / 证据不足 / 不支持"},think:"为什么“证据不足”也是一种有价值的判断？"},hallucination:{name:"AI 生成内容的局限",explain:"生成式人工智能根据学到的语言规律生成文字。它可能写出通顺、自信、但与事实不符的内容，也可能把没有把握的事说得很确定。",example:"AI 可能把一位科学家的生平和另一位弄混，或“编”出并不存在的参考资料。",link:{scene:"verify",target:"desk",text:"AI 信息咨询台"},think:"为什么“说得很流畅”不等于“说得对”？"},responsible:{name:"负责任地使用 AI",explain:"把人工智能当作学习的助手而不是替身：核验重要信息，不照搬未经验证的回答，保护自己和他人的隐私，独立思考并对自己的学习成果负责。",example:"请 AI 给作文提修改建议，由自己决定怎样修改；不把同学的个人信息发给 AI。",link:{scene:"verify",target:"char:teacher",text:"向教师指导员请教"},think:"哪些事可以请 AI 帮忙？哪些判断必须由你自己来做？"}},Ep={key:"city",unit:"UNIT 1",stage:"认识 AI",title:"AI智慧城市",question:"人工智能在哪里？",intro:"一座微缩智慧城市从书页中升起。城市里有许多能“自动工作”的设备——它们都使用了人工智能吗？点击设备，观察它们怎样处理信息。",core:"人工智能就在我们身边，但所有自动运行的设备都是人工智能吗？",goals:["识别生活中的典型人工智能应用","说出设备的输入、处理和输出","区分“人工智能系统”与“固定规则的自动控制”"],concepts:["ai","rule","io","data"],steps:[{id:"predict",name:"预测"},{id:"explore",name:"发现身边的AI"},{id:"match",name:"输入与输出"},{id:"wrap",name:"小结"}],characters:{student:{id:"student",name:"小航",role:"学生探索员",color:"#D9B24C"},guide:{id:"guide",name:"小智",role:"AI 讲解员",color:"#87B5C9"}},lines:{student:{default:"我发现很多设备都能自动工作，它们一定都是人工智能吗？",explore:"我想一个一个点开看看：它们接收了什么信息，又是怎样处理的？",match:"原来每个设备都可以用“输入—处理—输出”来描述！",wrap:"自动工作不等于人工智能，关键要看它是怎样处理信息的。"},guide:{default:"自动运行并不一定意味着使用人工智能。我们可以观察设备处理信息的方式。",explore:"试着比较：它是按照固定规则办事，还是依靠从大量数据中训练出来的模型？",match:"把输入、处理方式和输出拖到对应的位置，看看你能不能把它们配对。",wrap:"下一页，我们去实验室看看：模型究竟是怎样从数据中“学”出来的。"}},judgeOptions:[{id:"ai",text:"主要依靠从大量数据中训练出的模型来识别或判断（人工智能）"},{id:"rule",text:"主要按照人事先设定的固定规则运行（规则控制）"}],devices:[{id:"speaker",no:1,name:"智能音箱",kind:"ai",input:"声音（你说的话）",process:"语音识别模型把声音转成文字，再理解指令",output:"播报回答或执行操作",why:"每个人的口音、语速和说法都不一样，没办法用几条固定规则把所有情况写全。音箱里的语音识别模型是用大量语音数据训练出来的，所以它主要依靠人工智能工作。"},{id:"lamp",no:2,name:"定时台灯",kind:"rule",input:"当前时间",process:"固定规则判断：到 19:00 就开，到 22:00 就关",output:"灯亮或灯灭",why:"它能自动开关，但只是在执行人事先写好的固定规则。规则不变，它的做法就不会变，也不会从数据中学到新东西，所以不属于人工智能。"},{id:"imaging",no:3,name:"图像识别站",kind:"ai",input:"一张图像",process:"模型提取图像特征，与学到的规律比较",output:"类别预测（并给出可能性大小）",why:"图像千变万化，很难用固定规则描述“什么样的像素是一片叶子”。识别模型是用大量带标签的图像训练出来的。在医疗等重要场合，它只提供辅助参考，最终判断要由专业人员作出。"},{id:"face",no:4,name:"人脸识别门禁",kind:"ai",input:"摄像头拍到的人脸图像",process:"模型提取人脸特征，与已登记的特征比对",output:"判断是否为登记人员，决定是否开门",why:"同一个人在不同光线、角度、表情下样子都不同，需要用大量人脸数据训练出的模型来提取特征。另外，人脸属于敏感的个人信息，采集和使用都必须依法依规、保护隐私。"},{id:"car",no:5,name:"自动驾驶汽车",kind:"ai",input:"摄像头、雷达获取的道路信息",process:"模型识别行人、车辆等交通对象，并规划行驶",output:"转向、加速或刹车的驾驶决策",why:"道路情况复杂多变，系统需要依靠从大量道路数据中训练出来的模型来识别行人、车辆和信号灯。它也会配合一些固定的安全规则，但识别环境这一步主要靠人工智能。"},{id:"signal",no:6,name:"智能交通信号灯",kind:"ai",input:"路口摄像头拍到的车流画面",process:"模型识别各方向排队的车辆数量，再调整配时",output:"红绿灯时长的变化",why:"普通红绿灯只按固定时间切换，属于规则控制。这里的“智能”信号灯多了一步：用图像识别模型数出各方向的车辆，再据此调整时长，所以用到了人工智能。"},{id:"streetlamp",no:7,name:"光控路灯",kind:"rule",input:"光线传感器测到的亮度",process:"固定规则判断：亮度低于设定值就开灯",output:"灯亮或灯灭",why:"“传感器 + 固定阈值”是典型的自动控制：天黑了就亮，天亮了就灭。它不需要训练，也不会从数据中学习，所以不属于人工智能。"}],matchDevices:["speaker","imaging","lamp"],minJudged:4},wp={key:"lab",unit:"UNIT 2",stage:"理解 AI",title:"AI训练实验室",question:"人工智能怎样学会识别？",intro:"实验室里有 20 张训练图片和 10 张测试图片。请你亲手标注数据、训练一个小模型，再用它没见过的图片考考它。",core:"人工智能为什么能够区分猫和狗？它是记住了图片，还是从数据中学到了某些规律？",goals:["理解数据、标签、训练和预测之间的关系","区分训练集与测试集","通过实验观察训练数据对预测结果的影响"],concepts:["data","label","trainset","testset","classify","ml","training","model","predict","bias"],steps:[{id:"know",name:"认识数据"},{id:"label",name:"标注"},{id:"train",name:"训练"},{id:"test",name:"测试"},{id:"compare",name:"对比实验"},{id:"wrap",name:"小结"}],characters:{student:{id:"student",name:"小禾",role:"学生研究员",color:"#7FAF8C"},mentor:{id:"mentor",name:"林老师",role:"实验室导师",color:"#5E6E75"}},lines:{student:{default:"这些图片里的猫和狗，颜色、姿势、背景都不一样，模型要怎样才能分清呢？",label:"我来给每张图片贴上标签。要是贴错了，模型会不会被我带偏？",train:"主机屏幕上的数字一直在变，模型是在一点点调整自己吗？",test:"模型已经学会分类了吗？为什么有些新图片仍然会判断错误？",compare:"如果训练数据变了，同一批测试图片的结果会不会也跟着变？",wrap:"原来模型学到什么，很大程度上取决于我们给它什么样的数据。"},mentor:{default:"先观察数据。训练集用来让模型学习，测试集留着最后检验它。",label:"标签就是告诉模型的“已知答案”。认真标注，是训练出好模型的第一步。",train:"训练时，算法会反复比较模型的猜测和你给的标签，再一点点调整模型。",test:"我们需要用没有参与训练的数据测试它，才能更好地了解模型的表现。",compare:"改变数据条件，再用同一组测试图片比较。结果由真实的训练决定，多做几次看看。",wrap:"记住：模型的预测不是对事物的绝对理解，它也会出错。"}},stations:{stand:"trainset",label:"label",host:"training",model:"model",test:"classify",rack:"testset"},predict:{q:"先猜一猜：计算机是怎样学会区分猫和狗的？",options:[{id:"memory",text:"把看过的每一张图片都记住，以后见到一模一样的才认得"},{id:"pattern",text:"从许多带标签的图片中找到规律，再用规律判断新图片"},{id:"rules",text:"程序员事先写好了“猫长什么样、狗长什么样”的全部规则"}]},conditions:{A:{name:"实验 A",title:"类别相对均衡的数据",desc:"使用你当前的全部标注：猫和狗的样本数量接近。"},B:{name:"实验 B",title:"类别不均衡的数据",desc:"保留全部“猫”，只留下 2 张“狗”：某一类样本明显更多。"},C:{name:"实验 C",title:"存在错误标签的数据",desc:"在你的标注基础上，随机把 6 张图片的标签改错。"}},explainOptions:[{id:"data",text:"训练数据不同，模型学到的规律就不同，所以对同一批测试图片的预测也会变化。"},{id:"random",text:"模型的预测是完全随机的，和训练数据没有关系。"},{id:"test",text:"因为每次测试用的图片不一样。"}],summary:["训练数据为模型学习提供样本。","标签描述训练任务中的已知类别。","算法通过训练数据调整模型。","模型利用学到的规律对新数据作出预测。","数据质量、代表性和模型设计都可能影响预测表现。"],emphasis:"人工智能的预测不是对事物的绝对理解，模型也可能因为训练条件或输入差异而出错。"},Tp={key:"verify",unit:"UNIT 3",stage:"判断 AI",title:"AI判断中心",question:"人工智能说的都对吗？",intro:"这里有三段 AI 给出的回答。请你像核查员一样：找出其中的主张，查看证据，再决定该不该相信它。",core:"人工智能能够快速回答问题，但它给出的答案一定可靠吗？",goals:["找出 AI 回答中可以核查的主张","依据证据判断：支持、不支持或证据不足","说明采纳或拒绝 AI 建议的理由"],concepts:["claim","evidence","verify","hallucination","responsible"],steps:[{id:"observe",name:"观察回答"},{id:"evidence",name:"寻找证据"},{id:"revise",name:"修改回答"},{id:"usage",name:"合理使用"},{id:"wrap",name:"小结"}],characters:{student:{id:"student",name:"小语",role:"学生判断员",color:"#E6A18C"},teacher:{id:"teacher",name:"周老师",role:"教师指导员",color:"#7F9C8A"},assistant:{id:"assistant",name:"小问",role:"AI 助手",color:"#E6A18C"}},lines:{student:{default:"这段回答听起来很有道理，但我怎么知道它是真的？",evidence:"我先把回答里能核查的说法找出来，再一条一条对证据。",revise:"有问题的地方不能照抄，我得把它改成符合证据的说法。",usage:"AI 可以帮我很多忙，但有些事必须我自己来判断。",wrap:"以后看到 AI 的回答，我会先问一句：证据在哪里？"},teacher:{default:"先找到其中可以核查的主张，再看看有哪些可靠证据支持它。",evidence:"注意区分：哪些材料与主张有关，哪些只是看起来相关。",revise:"证据不够时，说“目前还不能确定”比硬下结论更负责任。",usage:"重要信息要核验，个人隐私要保护，学习的责任在你自己。",wrap:"会提问、会核验、会判断，才是真正会用人工智能。"},assistant:{default:"我的回答可能存在错误。对重要信息，请结合可靠来源进行判断。",evidence:"我给出的内容需要你来核验。请对照证据，看看我哪里说对了、哪里说错了。",revise:"谢谢你帮我指出问题。把“所有”“已经证明”改得更准确，会更接近事实。",usage:"我可以帮你查线索、换种方式讲解、提修改建议，但结论和责任属于你。",wrap:"请继续保持怀疑和求证的习惯。"}},stations:{screen:"claim",shelf:"evidence",search:"evidence",evidence:"verify",gauge:"verify",desk:"hallucination"},verdicts:[{id:"yes",text:"支持"},{id:"no",text:"不支持"},{id:"unsure",text:"证据不足"}],firstImpression:[{id:"trust",text:"可靠"},{id:"unsure",text:"不确定"},{id:"doubt",text:"不可靠"}],cases:[{id:"A",tag:"基本正确的回答",question:"为什么打雷时总是先看到闪电，后听到雷声？",answer:[{text:"闪电和雷声其实是同时产生的。"},{text:"光在空气中的传播速度约为每秒 30 万千米，而声音在空气中的传播速度约为每秒 340 米",claim:0},{text:"，光比声音快得多，所以我们总是先看到闪电，后听到雷声。"}],claims:[{text:"光速约为每秒 30 万千米，声速约为每秒 340 米（空气中）。",answer:"yes",evidence:[{source:"物理教科书（八年级）",text:"声音在 15℃ 空气中的传播速度约为 340 米/秒。",rel:"support",why:"与主张中的声速一致，来源可靠。"},{source:"物理教科书（八年级）",text:"光在真空中的速度约为 3×10⁸ 米/秒，在空气中的速度与之非常接近。",rel:"support",why:"3×10⁸ 米/秒就是每秒 30 万千米，与主张一致。"},{source:"安全常识手册",text:"雷雨天不要在大树下避雨，也不要在空旷处打伞。",rel:"irrelevant",why:"这是防雷安全知识，与“光和声音的传播速度”这条主张无关。"},{source:"网友留言",text:"我觉得雷声比闪电快，有一次我先听到了雷声。",rel:"weak",why:"个人印象不是可靠证据，也可能看到的和听到的不是同一次雷电。"}],feedback:{yes:"判断正确。两条教科书证据分别支持了光速和声速的数值，这条主张有可靠依据。",no:"再看看证据 1 和证据 2：教科书中的数值与主张一致，所以证据是支持这条主张的。",unsure:"这里的证据其实是充分的：两条教科书内容直接对应主张里的两个数值。"}}]},{id:"B",tag:"包含事实错误的回答",question:"“人工智能”这个词是什么时候提出的？",answer:[{text:"1956 年召开的达特茅斯会议被普遍视为人工智能学科诞生的标志",claim:0},{text:"，“人工智能”这一名称也由此传开。"},{text:"这次会议由艾伦·图灵发起并主持",claim:1},{text:"，与会者讨论了如何让机器模拟人的智能。"}],claims:[{text:"1956 年的达特茅斯会议被普遍视为人工智能学科诞生的标志。",answer:"yes",evidence:[{source:"信息科技教科书",text:"1956 年夏天，一批科学家在美国达特茅斯学院举行研讨会，“人工智能”作为研究领域的名称正式确立，这被视为人工智能学科诞生的标志。",rel:"support",why:"教科书的表述与主张一致。"},{source:"会议提案（1955 年）",text:"麦卡锡等人在 1955 年撰写的会议提案中，使用了 “Artificial Intelligence” 一词来命名这次研讨会。",rel:"support",why:"原始文献说明这个术语确实与这次会议直接相关。"},{source:"科幻电影介绍",text:"某部科幻电影讲述了机器人拥有感情的故事。",rel:"irrelevant",why:"电影情节与“学科何时诞生”无关。"}],feedback:{yes:"判断正确。教科书和会议提案都支持这条主张。",no:"证据 1 和证据 2 都与主张一致，这条主张是有依据的。回答里真正有问题的是另一条主张。",unsure:"教科书和原始提案已经提供了直接依据，这条主张可以判断为“支持”。"}},{text:"达特茅斯会议由艾伦·图灵发起并主持。",answer:"no",evidence:[{source:"会议提案（1955 年）",text:"会议由约翰·麦卡锡、马文·明斯基、纳撒尼尔·罗切斯特和克劳德·香农四人共同发起。",rel:"refute",why:"发起人名单中没有图灵，直接反驳了主张。"},{source:"科学家传记",text:"艾伦·图灵于 1954 年去世。",rel:"refute",why:"图灵在会议召开前两年已经去世，不可能主持 1956 年的会议。"},{source:"科学史读本",text:"图灵在 1950 年发表论文，提出了后来被称为“图灵测试”的设想。",rel:"irrelevant",why:"这说明图灵对人工智能思想有重要贡献，但不能说明他发起或主持了达特茅斯会议。"}],feedback:{yes:"再核对一下：提案上的发起人是麦卡锡等四人，而且图灵在 1954 年就去世了。证据是反驳这条主张的。",no:"判断正确。发起人名单和图灵的去世时间都反驳了这条主张。AI 把“对人工智能有重要贡献的人”和“会议发起人”弄混了，听起来合理，却是错的。",unsure:"这里的证据其实很明确：发起人名单里没有图灵，而且他在会议前两年已去世，可以判断为“不支持”。"}}],revision:{target:"这次会议由艾伦·图灵发起并主持",q:"这句话有事实错误。哪一种修改更合理？",options:[{id:"a",text:"这次会议由约翰·麦卡锡、马文·明斯基等人发起。",ok:!0,why:"与会议提案记载的发起人一致，改正了错误。"},{id:"b",text:"这次会议由艾伦·图灵和麦卡锡共同主持。",ok:!1,why:"仍然保留了错误信息：图灵于 1954 年去世，没有参加 1956 年的会议。"},{id:"c",text:"把这句话原样保留，因为图灵是著名的计算机科学家。",ok:!1,why:"一个人很有名，并不能说明关于他的每一句话都是对的。需要看证据。"}]}},{id:"C",tag:"缺乏足够证据的回答",question:"用 AI 学习能提高成绩吗？",answer:[{text:"当然可以。"},{text:"某项研究已经证明所有学生使用 AI 都会提高学习成绩",claim:0},{text:"，所以你只要多用 AI，成绩就一定会进步。"}],note:"以下证据卡为教学用模拟资料，用于练习核验方法。",claims:[{text:"某项研究已经证明：所有学生使用 AI 都会提高学习成绩。",answer:"unsure",evidence:[{source:"研究摘要（模拟资料）",text:"某校两个班共 86 名学生试用 AI 辅导工具 8 周，使用组的平均分比对照组高 5 分；有些学生成绩没有变化，少数学生成绩下降。",rel:"partial",why:"只能说明“这项小范围研究中平均分较高”，而不是“所有学生都提高”。"},{source:"研究者说明（模拟资料）",text:"本研究样本较小，两个班的学生不是随机分组，成绩差异也可能与教师、班级等因素有关，不能据此得出因果结论。",rel:"limit",why:"研究者自己指出：这项研究不能证明“使用 AI 导致成绩提高”。"},{source:"产品宣传页",text:"“用过的同学都说好！成绩提升看得见！”",rel:"weak",why:"广告用语不是可靠证据，也没有给出可以核查的数据。"},{source:"教育新闻",text:"多所学校开始开设人工智能通识课程。",rel:"irrelevant",why:"学校开课与“使用 AI 是否提高成绩”无关。"}],feedback:{yes:"再想想：证据 1 里有学生成绩没变甚至下降，“所有学生”并不成立；证据 2 还说明这项研究不能证明因果关系。",no:"证据并没有证明这条主张是错的——确实有研究发现使用组的平均分较高。只是证据远远不够支持“所有学生”“已经证明”这样确定的说法。",unsure:"判断正确。现有证据只来自一项小范围研究，既不能支持“所有学生”，也不能证明因果关系，所以最合适的判断是“证据不足”。"}}],checks:[{q:"“所有学生”这个说法有证据支持吗？",answer:!1,why:"没有。证据 1 明确提到有学生成绩没有变化甚至下降。"},{q:"这项研究能够证明“使用 AI 导致成绩提高”吗？",answer:!1,why:"不能。研究者指出样本小、没有随机分组，差异也可能来自其他因素。"},{q:"要作出更可靠的判断，还需要进一步核验更多研究吗？",answer:!0,why:"需要。例如样本更大、设计更严谨的研究，以及不同使用方式下的效果。"}],revision:{target:"某项研究已经证明所有学生使用 AI 都会提高学习成绩",q:"这句话说得过于肯定。哪一种表述更符合证据的范围？",options:[{id:"a",text:"已有大量研究证明，使用 AI 的学生成绩都会大幅提高。",ok:!1,why:"比原来说得更绝对了，而证据只有一项小范围研究。"},{id:"b",text:"有小范围研究发现，使用 AI 辅导工具的班级平均分较高，但效果因人而异，目前还不能确定是 AI 带来的提高，需要更多研究验证。",ok:!0,why:"保留了不确定性：说清了证据来自哪里、说明了什么、还不能说明什么。"},{id:"c",text:"使用 AI 对学习没有任何帮助。",ok:!1,why:"这同样是没有证据支持的绝对说法。证据不足时，不应强行作出肯定或否定的结论。"}]}}],usage:[{id:"search",title:"使用 AI 辅助查找资料",situation:"你要写一份关于“海洋塑料污染”的小报告，想请 AI 帮忙查资料。",options:[{id:"a",text:"把 AI 给出的数据和结论直接抄进报告。",ok:!1,why:"AI 给出的数据可能不准确甚至是编造的，未经核验不能直接使用。"},{id:"b",text:"请 AI 提供线索和关键词，再到教科书、权威机构网站核对数据和出处。",ok:!0,why:"把 AI 当作“找线索的助手”，重要信息回到可靠来源核验，并注明出处。"},{id:"c",text:"AI 的知识很多，它说的一定是对的，不需要再查。",ok:!1,why:"“知道得多”不等于“不会出错”。重要信息需要核验。"}]},{id:"explain",title:"使用 AI 解释难懂概念",situation:"数学课上“负数的加减”没听懂，你想问问 AI。",options:[{id:"a",text:"请 AI 换一种方式举例讲解，再做几道课本习题检验自己是否真的懂了。",ok:!0,why:"让 AI 辅助理解，再用练习检验自己，学习的主体仍然是你。"},{id:"b",text:"AI 讲过一遍，就算我学会了。",ok:!1,why:"听懂讲解不等于掌握，需要自己动手练习来确认。"},{id:"c",text:"直接让 AI 把作业答案告诉我，不用听讲解。",ok:!1,why:"只拿答案无法帮助你理解概念，下次遇到同类问题仍然不会。"}]},{id:"homework",title:"使用 AI 帮助完成作业",situation:"语文老师布置了一篇作文《我的同桌》，明天要交。",options:[{id:"a",text:"让 AI 写好一篇，直接交上去。",ok:!1,why:"这不是你的作品，既不诚信，也失去了练习写作的机会。"},{id:"b",text:"把同桌的姓名、照片和家庭住址都发给 AI，让它写得更真实。",ok:!1,why:"这泄露了他人的隐私和个人信息。不应把自己或他人的敏感信息提供给 AI。"},{id:"c",text:"自己先写出来，再请 AI 提出修改建议，由自己决定怎样改，并按老师的要求说明使用情况。",ok:!0,why:"自己完成思考和写作，把 AI 当作提建议的助手，同时遵守老师的要求。"}]},{id:"conclusion",title:"使用 AI 生成研究结论",situation:"科学探究课上，你们小组做了“种子发芽与水分”的实验，要写结论。",options:[{id:"a",text:"实验没做完，让 AI 帮忙生成一组数据和结论。",ok:!1,why:"编造数据违背了科学探究的基本要求，结论必须来自真实的观察。"},{id:"b",text:"AI 给的结论和我们的数据不一样，就把数据改成和 AI 一致。",ok:!1,why:"不能为了迎合 AI 而修改真实数据。应当检查实验过程，如实记录。"},{id:"c",text:"根据自己小组的真实数据得出结论，再请 AI 帮忙检查表达是否清楚。",ok:!0,why:"结论由你们依据证据作出，AI 只辅助表达。判断和责任属于学习者自己。"}]}],principles:["对重要信息进行核验。","不直接照搬未经验证的回答。","注意隐私与个人信息。","保持独立思考和学习责任。"]},zS={key:"summary",unit:"REPORT",stage:"总结",title:"我的AI探索报告",question:"认识 · 理解 · 判断",intro:"你已经走完“认识 AI — 理解 AI — 判断 AI”的学习路径。这里汇总了你的探索记录。",concepts:[],characters:{student:{id:"student",name:"小航",role:"学生探索员",color:"#D9B24C"},guide:{id:"guide",name:"小智",role:"AI 讲解员",color:"#87B5C9"}},lines:{student:{default:"回头看看，我已经能自己分辨、训练和核验了！"},guide:{default:"祝贺你完成探索。记住：了解人工智能的本领，也了解它的局限。"}},reflection:"如果学校准备使用人工智能帮助学生学习，你认为需要注意哪些问题？为什么？"},Ei=[Ep,wp,Tp,zS],uo={city:Ep,lab:wp,verify:Tp},Ul="hello-ai-progress-v1",Fl=()=>({version:1,startedAt:new Date().toISOString(),voice:!0,teacher:!1,city:{step:0,prediction:null,current:null,viewed:[],judged:{},match:{placed:{},attempts:0,firstTry:null,done:!1},done:!1},lab:{step:0,prediction:null,labels:{},selected:null,runs:[],explainChoice:null,explainText:"",done:!1},verify:{step:0,caseId:"A",claim:0,impressions:{},claims:{},checks:{},revisions:{},usage:{},done:!1},summary:{reflection:"",savedAt:null},log:[]});class VS{constructor(){this.data=Fl(),this.storageOk=!0;try{const t=localStorage.getItem(Ul);if(t){const e=JSON.parse(t);if(e&&e.version===1){const n=Fl();["city","lab","verify","summary"].forEach(i=>e[i]={...n[i],...e[i]||{}}),e.city.match={...n.city.match,...e.city.match||{}},this.data={...n,...e}}}}catch{this.storageOk=!1}this._timer=null}save(){clearTimeout(this._timer),this._timer=setTimeout(()=>{try{localStorage.setItem(Ul,JSON.stringify(this.data)),this.storageOk=!0}catch{this.storageOk=!1}},150)}reset(){this.data=Fl();try{localStorage.removeItem(Ul)}catch{}}log(t,e,n){this.data.log.push({t:Date.now(),scene:t,type:e,text:n}),this.data.log.length>200&&this.data.log.shift(),this.save()}unlocked(t){const e=this.data;return e.teacher||t===0?!0:[!0,e.city.done,e.lab.done,e.verify.done][t]}}const GS={orange:["#E0A060","#F3D9B0","#B9783A"],gray:["#9BA0A6","#DADDE0","#6F757C"],black:["#4D4A47","#8C8782","#2F2D2B"],white:["#F3EFE6","#FFFFFF","#CFC8BA"],brown:["#A97C50","#E3C9A4","#7A5634"],cream:["#E8D3A8","#FBF1DA","#C2A46E"],golden:["#D9B36A","#F5E3B8","#AD8540"]};function HS(r,t,e){const n=(i,s,a,o,l)=>{r.fillStyle=i,r.fillRect(s*t,a*t,o*t,l*t)};switch(e){case"room":n("#EADFCB",0,0,1,.64),n("#C9A985",0,.64,1,.36),n("#F7F2E6",0,.62,1,.03);break;case"grass":n("#CFE3EC",0,0,1,.56),n("#9DBE8F",0,.56,1,.44),r.fillStyle="#F7F2E6",r.beginPath(),r.ellipse(.22*t,.16*t,.14*t,.06*t,0,0,6.3),r.fill();break;case"sofa":n("#E4E9E2",0,0,1,1),r.fillStyle="#8FB3C4",r.beginPath(),r.roundRect(.05*t,.3*t,.9*t,.6*t,.1*t),r.fill(),n("#B9A58A",0,.86,1,.14);break;case"rug":n("#D9C3A3",0,0,1,1),r.fillStyle="#E6A18C",r.beginPath(),r.ellipse(.5*t,.8*t,.48*t,.2*t,0,0,6.3),r.fill(),r.strokeStyle="#F7F2E6",r.lineWidth=.02*t,r.beginPath(),r.ellipse(.5*t,.8*t,.36*t,.14*t,0,0,6.3),r.stroke();break;case"garden":n("#86A886",0,0,1,.5),n("#E3D6BA",0,.5,1,.5),r.fillStyle="#F2C4B6",[.12,.34,.66,.88].forEach((i,s)=>{r.beginPath(),r.arc(i*t,(.2+s%2*.14)*t,.035*t,0,6.3),r.fill()});break;default:n("#EFE3C8",0,0,1,1),r.fillStyle="#F8F0DC",r.beginPath(),r.arc(.5*t,.52*t,.42*t,0,6.3),r.fill()}}function Je(r,t,e,n,i,s=0){r.beginPath(),r.ellipse(t,e,n,i,s,0,Math.PI*2),r.fill()}function $S(r,t,e){const[n,i,s]=e,a=t.cls==="cat",o=t.ears;if(r.fillStyle=t.pattern==="patch"?s:n,o==="point"||o==="up"){const l=o==="up"?1.15:1;[-1,1].forEach(c=>{r.fillStyle=n,r.beginPath(),r.moveTo(c*.86*l,-.42),r.lineTo(c*.74*l,-1.42),r.lineTo(c*.16,-.78),r.closePath(),r.fill(),r.fillStyle="#F2B8B0",r.beginPath(),r.moveTo(c*.72*l,-.58),r.lineTo(c*.68*l,-1.14),r.lineTo(c*.34,-.78),r.closePath(),r.fill()})}else o==="fold"&&[-1,1].forEach(l=>{r.fillStyle=s,r.beginPath(),r.moveTo(l*.9,-.5),r.lineTo(l*.62,-.98),r.lineTo(l*.22,-.8),r.closePath(),r.fill()});r.fillStyle=n,a?Je(r,0,0,1,.88):Je(r,0,0,.9,.98),o==="flop"&&(r.fillStyle=s,[-1,1].forEach(l=>Je(r,l*.93,.12,.3,.7,l*.22))),t.pattern==="tabby"?(r.strokeStyle=s,r.lineWidth=.1,r.lineCap="round",[-.3,0,.3].forEach(l=>{r.beginPath(),r.moveTo(l,-.82),r.lineTo(l*.8,-.46),r.stroke()})):t.pattern==="patch"&&(r.fillStyle=s,Je(r,.4,-.2,.36,.4,.2)),a?([-1,1].forEach(l=>{r.fillStyle=t.eye||"#B7C96A",Je(r,l*.4,-.08,.2,.16,l*.25),r.fillStyle="#2B2B2B",Je(r,l*.4,-.08,.05,.14)}),r.fillStyle=i,Je(r,0,.42,.3,.22),r.fillStyle="#E79A93",r.beginPath(),r.moveTo(-.1,.24),r.lineTo(.1,.24),r.lineTo(0,.36),r.closePath(),r.fill(),r.strokeStyle="#3A3A3A",r.lineWidth=.035,r.beginPath(),r.moveTo(0,.36),r.quadraticCurveTo(-.08,.52,-.2,.46),r.moveTo(0,.36),r.quadraticCurveTo(.08,.52,.2,.46),r.stroke(),r.strokeStyle=t.fur==="white"||t.fur==="cream"?"#8A8478":"#FFFFFF",r.lineWidth=.03,[-1,1].forEach(l=>[-.12,.02,.16].forEach((c,h)=>{r.beginPath(),r.moveTo(l*.3,.4+c*.4),r.lineTo(l*1.25,.3+c+(h-1)*.06),r.stroke()}))):(r.fillStyle=i,Je(r,0,.42,.5,.42),[-1,1].forEach(l=>{r.fillStyle="#2B2B2B",Je(r,l*.36,-.2,.11,.12),r.fillStyle="#FFFFFF",Je(r,l*.36+.03,-.24,.035,.035)}),r.fillStyle="#2B2B2B",Je(r,0,.2,.2,.14),r.strokeStyle="#2B2B2B",r.lineWidth=.04,r.beginPath(),r.moveTo(0,.34),r.lineTo(0,.5),r.moveTo(-.24,.5),r.quadraticCurveTo(0,.66,.24,.5),r.stroke(),t.tongue!==!1&&(r.fillStyle="#E88F8F",r.beginPath(),r.roundRect(-.1,.56,.2,.26,.09),r.fill()))}function Ed(r,t,e,n,i,s){r.strokeStyle=e[0],r.lineCap="round",r.beginPath(),t.cls==="cat"?(r.lineWidth=.05,r.moveTo(n,i),r.bezierCurveTo(n+s*.2,i+.04,n+s*.24,i-.3,n+s*.12,i-.42)):(r.lineWidth=.085,r.moveTo(n,i),r.quadraticCurveTo(n+s*.13,i-.04,n+s*.15,i-.2)),r.stroke()}function WS(r,t,e){r.save(),r.clearRect(0,0,t,t),HS(r,t,e.bg);const n=GS[e.fur],i=e.cls==="cat";r.translate(t*(.5+(e.dx||0)),t*(.5+(e.dy||0))),r.scale(t*(e.scale||1)*(e.flip?-1:1),t*(e.scale||1)),r.translate(-.5,-.5);const s=(a,o,l)=>{r.save(),r.translate(a,o),r.scale(l,l),$S(r,e,n),r.restore()};e.pose==="face"?(r.fillStyle=n[0],Je(r,.5,1.04,i?.33:.38,.3),i||(r.fillStyle="#C9806A",r.fillRect(.33,.77,.34,.045)),s(.5,.5,.27)):e.pose==="sit"?(Ed(r,e,n,i?.66:.68,.84,1),r.fillStyle=n[0],Je(r,.5,.71,i?.18:.22,i?.22:.23),r.fillStyle=n[1],Je(r,.5,.74,i?.09:.12,.15),r.fillStyle=n[0],[-1,1].forEach(a=>{r.beginPath(),r.roundRect(.5+a*.09-.04,.72,i?.07:.09,.21,.035),r.fill()}),i||(r.fillStyle="#C9806A",r.fillRect(.38,.5,.24,.035)),s(.5,.36,.235)):(Ed(r,e,n,.24,.56,-1),r.fillStyle=n[0],[.3,.4,.6,.68].forEach(a=>{r.beginPath(),r.roundRect(a-.03,.6,i?.055:.07,i?.25:.23,.025),r.fill()}),Je(r,.48,.6,.27,i?.115:.15),r.fillStyle=n[1],Je(r,.5,.66,.17,.06),s(.73,.4,.205)),r.restore()}const ae=(r,t,e,n,i,s={})=>({cls:r,fur:t,pose:e,ears:n,bg:i,pattern:"plain",...s}),wd=[ae("cat","orange","face","point","room",{pattern:"tabby"}),ae("cat","gray","sit","point","grass"),ae("cat","black","side","point","sofa",{eye:"#E5C85A"}),ae("cat","white","face","point","plain",{eye:"#8FB8D6"}),ae("cat","cream","sit","point","rug",{pattern:"patch"}),ae("cat","orange","side","point","garden",{flip:!0}),ae("cat","gray","face","point","sofa",{pattern:"tabby"}),ae("cat","black","sit","point","room",{flip:!0,eye:"#E5C85A"}),ae("cat","white","side","point","grass"),ae("cat","brown","face","point","garden",{pattern:"tabby"}),ae("dog","brown","face","flop","grass"),ae("dog","cream","sit","flop","room"),ae("dog","black","side","flop","garden",{tongue:!1}),ae("dog","white","face","flop","sofa",{pattern:"patch"}),ae("dog","golden","sit","flop","plain"),ae("dog","gray","side","up","room",{flip:!0}),ae("dog","black","face","flop","rug"),ae("dog","brown","sit","flop","garden",{flip:!0,pattern:"patch"}),ae("dog","cream","side","flop","sofa"),ae("dog","golden","face","up","plain",{tongue:!1})],XS=[ae("cat","cream","face","point","rug"),ae("dog","gray","face","flop","room"),ae("cat","orange","sit","point","sofa",{flip:!0,pattern:"tabby"}),ae("dog","black","sit","flop","grass"),ae("cat","gray","side","point","room"),ae("dog","golden","side","flop","plain",{flip:!0}),ae("cat","black","face","point","grass",{eye:"#E5C85A"}),ae("dog","white","face","up","garden",{tongue:!1}),ae("cat","white","sit","fold","garden"),ae("dog","brown","sit","flop","rug")],Td=128,ue=32;function Nl(r){let t=r;return()=>(t=t*16807%2147483647)/2147483647}class qS{constructor(){this.samples=[];const t=(n,i,s)=>{const a=Nl(101+i*37+(s==="test"?5e3:0)),o={...n,scale:.9+a()*.16,dx:(a()-.5)*.08,dy:(a()-.5)*.06},l=document.createElement("canvas");l.width=l.height=Td,WS(l.getContext("2d"),Td,o);const c=document.createElement("canvas");c.width=c.height=ue;const h=c.getContext("2d",{willReadFrequently:!0});h.imageSmoothingQuality="high",h.drawImage(l,0,0,ue,ue);const u=h.getImageData(0,0,ue,ue).data,d=new Float32Array(ue*ue*3);for(let f=0,g=0;f<u.length;f+=4)d[g++]=u[f]/255,d[g++]=u[f+1]/255,d[g++]=u[f+2]/255;return{id:`${s==="train"?"T":"X"}${String(i+1).padStart(2,"0")}`,set:s,cls:n.cls,spec:o,canvas:l,url:l.toDataURL("image/png"),pixels:d}},e=(n,i)=>{const s=Nl(i);return[...Array(n).keys()].map(a=>[s(),a]).sort((a,o)=>a[0]-o[0]).map(a=>a[1])};this.train=e(wd.length,77).map((n,i)=>t(wd[n],i,"train")),this.test=XS.map((n,i)=>t(n,i,"test")),this.samples=[...this.train,...this.test],this.byId=Object.fromEntries(this.samples.map(n=>[n.id,n]))}get(t){return this.byId[t]}stats(t){let e=0,n=0;const i=[];return this.train.forEach(s=>{const a=t[s.id];a&&(a==="cat"?e+=1:n+=1,a!==s.cls&&i.push(s.id))}),{labeled:e+n,total:this.train.length,cat:e,dog:n,wrong:i}}buildCondition(t,e,n={}){const i=this.train.filter(s=>t[s.id]).map(s=>({id:s.id,label:t[s.id]}));if(e==="B"){const s=n.minor||"dog",a=n.keep??2;let o=0;const l=[],c=[];return i.forEach(h=>{if(h.label===s&&(o+=1,o>a))return c.push(h.id);l.push(h)}),{items:l,excluded:c,flipped:[]}}if(e==="C"){const s=Math.min(n.flips??6,i.length),a=Nl(n.seed||Date.now()%1e5),o=i.map(c=>[a(),c.id]).sort((c,h)=>c[0]-h[0]).slice(0,s).map(c=>c[1]);return{items:i.map(c=>o.includes(c.id)?{id:c.id,label:c.label==="cat"?"dog":"cat"}:c),excluded:[],flipped:o}}return{items:i,excluded:[],flipped:[]}}}const YS="modulepreload",jS=function(r,t){return new URL(r,t).href},Ad={},ZS=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=jS(c,n),c in Ad)return;Ad[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":YS,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};function Ap(){return new Promise(r=>{if(typeof document<"u"&&document.hidden){const n=new MessageChannel;n.port1.onmessage=()=>r(),n.port2.postMessage(0);return}let t=!1;const e=()=>{t||(t=!0,r())};requestAnimationFrame(e),setTimeout(e,60)})}let Vr=null;function Cp(){return Vr||(Vr=ZS(()=>import("./dist-BK33CVob.js"),[],import.meta.url).then(async r=>{try{await r.setBackend("webgl"),await r.ready()}catch{await r.setBackend("cpu"),await r.ready()}return r}),Vr.catch(()=>Vr=null)),Vr}const KS=["cat","dog"];function JS(r,t,e,n,i){const s=i==="gain"?[.75+Math.random()*.5,.75+Math.random()*.5,.75+Math.random()*.5]:null,a=new Float32Array(r.length);for(let o=0;o<ue;o++)for(let l=0;l<ue;l++){let c=t?ue-1-l:l;c=Math.min(ue-1,Math.max(0,c+e));const h=Math.min(ue-1,Math.max(0,o+n)),u=(o*ue+l)*3,d=(h*ue+c)*3;let f=r[d],g=r[d+1],_=r[d+2];s?(f=Math.min(1,f*s[0]),g=Math.min(1,g*s[1]),_=Math.min(1,_*s[2])):i==="gray"?f=g=_=.299*f+.587*g+.114*_:i==="rotate"&&([f,g,_]=[g,_,f]),a[u]=f,a[u+1]=g,a[u+2]=_}return a}class QS{constructor(t){this.dataset=t,this.model=null,this.tf=null,this.training=!1}async train(t,{epochs:e=44,onEpoch:n}={}){if(this.training)throw new Error("模型正在训练中，请稍候。");if(!t.length)throw new Error("没有可用于训练的已标注样本，请先完成数据标注。");this.training=!0;const i=performance.now();let s,a;try{const o=this.tf=await Cp();this.model&&(this.model.dispose(),this.model=null);const l=[[!1,0,0,null],[!0,0,0,null],[!1,2,1,"gain"],[!0,-2,-1,"gain"],[!1,-1,2,"gray"],[!0,1,-2,"rotate"]],c=t.length*l.length,h=new Float32Array(c*ue*ue*3),u=new Float32Array(c*2);let d=0;t.forEach(_=>{const m=this.dataset.get(_.id).pixels;l.forEach(([p,y,x,v])=>{h.set(JS(m,p,y,x,v),d*ue*ue*3),u[d*2+KS.indexOf(_.label)]=1,d+=1})}),s=o.tensor4d(h,[c,ue,ue,3]),a=o.tensor2d(u,[c,2]);const f=o.sequential();f.add(o.layers.conv2d({inputShape:[ue,ue,3],filters:8,kernelSize:5,strides:2,activation:"relu",kernelInitializer:"heNormal"})),f.add(o.layers.conv2d({filters:16,kernelSize:3,activation:"relu",kernelInitializer:"heNormal"})),f.add(o.layers.maxPooling2d({poolSize:2})),f.add(o.layers.flatten()),f.add(o.layers.dropout({rate:.25})),f.add(o.layers.dense({units:16,activation:"relu",kernelInitializer:"heNormal"})),f.add(o.layers.dense({units:2,activation:"softmax"})),f.compile({optimizer:o.train.adam(.003),loss:"categoricalCrossentropy",metrics:["accuracy"]});let g={loss:NaN,acc:NaN};return await f.fit(s,a,{epochs:e,batchSize:16,shuffle:!0,yieldEvery:"never",callbacks:{onEpochEnd:async(_,m)=>{g={loss:m.loss,acc:m.acc},n==null||n(_+1,e,m.loss,m.acc),await Ap()}}}),this.model=f,{epochs:e,loss:g.loss,acc:g.acc,seconds:(performance.now()-i)/1e3,backend:o.getBackend(),samples:t.length,augmented:c}}finally{s==null||s.dispose(),a==null||a.dispose(),this.training=!1}}async predict(t){if(!this.model)throw new Error("模型尚未训练，无法测试。");const e=this.tf,n=new Float32Array(t.length*ue*ue*3);t.forEach((o,l)=>n.set(this.dataset.get(o).pixels,l*ue*ue*3));const i=e.tensor4d(n,[t.length,ue,ue,3]),s=this.model.predict(i),a=await s.data();return i.dispose(),s.dispose(),t.map((o,l)=>({id:o,cat:a[l*2],dog:a[l*2+1]}))}dispose(){var t;(t=this.model)==null||t.dispose(),this.model=null}}const t1=""+new URL("city.guide.default-hzb9SA15.mp3",import.meta.url).href,e1=""+new URL("city.guide.explore-BQxoWIpg.mp3",import.meta.url).href,n1=""+new URL("city.guide.match-DDrKZb64.mp3",import.meta.url).href,i1=""+new URL("city.guide.wrap-4FvD3LsE.mp3",import.meta.url).href,s1=""+new URL("city.student.default-ZOb-EwdJ.mp3",import.meta.url).href,r1=""+new URL("city.student.explore-3xClKgKc.mp3",import.meta.url).href,a1=""+new URL("city.student.match-C1XgTJR1.mp3",import.meta.url).href,o1=""+new URL("city.student.wrap-Dlh4aiAQ.mp3",import.meta.url).href,l1=""+new URL("lab.mentor.compare-CLqAO_6k.mp3",import.meta.url).href,c1=""+new URL("lab.mentor.default-D2yZZKFv.mp3",import.meta.url).href,h1=""+new URL("lab.mentor.label-Ppc8h0d5.mp3",import.meta.url).href,u1=""+new URL("lab.mentor.test-DZhdqzLr.mp3",import.meta.url).href,d1=""+new URL("lab.mentor.train-DYLfdQuY.mp3",import.meta.url).href,f1=""+new URL("lab.mentor.wrap-DQCNZ8n1.mp3",import.meta.url).href,p1=""+new URL("lab.student.compare-CbtINmDC.mp3",import.meta.url).href,m1=""+new URL("lab.student.default-DWje2epz.mp3",import.meta.url).href,g1=""+new URL("lab.student.label-BIhyDPnf.mp3",import.meta.url).href,_1=""+new URL("lab.student.test-Bu5EuSTZ.mp3",import.meta.url).href,v1=""+new URL("lab.student.train-B9mO2MTj.mp3",import.meta.url).href,x1=""+new URL("lab.student.wrap-C6EYiWmY.mp3",import.meta.url).href,y1=""+new URL("summary.guide.default-GnnkhcdD.mp3",import.meta.url).href,b1=""+new URL("summary.student.default-Daj-gGF7.mp3",import.meta.url).href,S1=""+new URL("verify.assistant.default-CeT98sw9.mp3",import.meta.url).href,M1=""+new URL("verify.assistant.evidence-BmqJlO_I.mp3",import.meta.url).href,E1=""+new URL("verify.assistant.revise-Cm07Wj6y.mp3",import.meta.url).href,w1=""+new URL("verify.assistant.usage-DMRS_h3C.mp3",import.meta.url).href,T1=""+new URL("verify.assistant.wrap-D66s8G14.mp3",import.meta.url).href,A1=""+new URL("verify.student.default-Bx7I24nJ.mp3",import.meta.url).href,C1=""+new URL("verify.student.evidence-C4AmNS1L.mp3",import.meta.url).href,R1=""+new URL("verify.student.revise-CI5g89GX.mp3",import.meta.url).href,P1=""+new URL("verify.student.usage-BwcOskCO.mp3",import.meta.url).href,D1=""+new URL("verify.student.wrap-Ba4_VTvh.mp3",import.meta.url).href,L1=""+new URL("verify.teacher.default-Dsgvm59h.mp3",import.meta.url).href,I1=""+new URL("verify.teacher.evidence-Cox4shJ9.mp3",import.meta.url).href,U1=""+new URL("verify.teacher.revise-DrNANBMZ.mp3",import.meta.url).href,F1=""+new URL("verify.teacher.usage-DZC_IByD.mp3",import.meta.url).href,N1=""+new URL("verify.teacher.wrap-owlFrGs9.mp3",import.meta.url).href,Rp=Object.assign({"../assets/audio/city.guide.default.mp3":t1,"../assets/audio/city.guide.explore.mp3":e1,"../assets/audio/city.guide.match.mp3":n1,"../assets/audio/city.guide.wrap.mp3":i1,"../assets/audio/city.student.default.mp3":s1,"../assets/audio/city.student.explore.mp3":r1,"../assets/audio/city.student.match.mp3":a1,"../assets/audio/city.student.wrap.mp3":o1,"../assets/audio/lab.mentor.compare.mp3":l1,"../assets/audio/lab.mentor.default.mp3":c1,"../assets/audio/lab.mentor.label.mp3":h1,"../assets/audio/lab.mentor.test.mp3":u1,"../assets/audio/lab.mentor.train.mp3":d1,"../assets/audio/lab.mentor.wrap.mp3":f1,"../assets/audio/lab.student.compare.mp3":p1,"../assets/audio/lab.student.default.mp3":m1,"../assets/audio/lab.student.label.mp3":g1,"../assets/audio/lab.student.test.mp3":_1,"../assets/audio/lab.student.train.mp3":v1,"../assets/audio/lab.student.wrap.mp3":x1,"../assets/audio/summary.guide.default.mp3":y1,"../assets/audio/summary.student.default.mp3":b1,"../assets/audio/verify.assistant.default.mp3":S1,"../assets/audio/verify.assistant.evidence.mp3":M1,"../assets/audio/verify.assistant.revise.mp3":E1,"../assets/audio/verify.assistant.usage.mp3":w1,"../assets/audio/verify.assistant.wrap.mp3":T1,"../assets/audio/verify.student.default.mp3":A1,"../assets/audio/verify.student.evidence.mp3":C1,"../assets/audio/verify.student.revise.mp3":R1,"../assets/audio/verify.student.usage.mp3":P1,"../assets/audio/verify.student.wrap.mp3":D1,"../assets/audio/verify.teacher.default.mp3":L1,"../assets/audio/verify.teacher.evidence.mp3":I1,"../assets/audio/verify.teacher.revise.mp3":U1,"../assets/audio/verify.teacher.usage.mp3":F1,"../assets/audio/verify.teacher.wrap.mp3":N1}),O1=r=>r?Rp[`../assets/audio/${r}.mp3`]:null,k1={teacher:1,student:1.07,robot:1.12},B1=[/xiaoxiao.*natural/i,/natural/i,/xiaoxiao/i,/xiaoyi/i,/google.*(普通话|mandarin)/i,/ting-?ting/i,/yaoyao/i,/huihui/i];class z1{constructor(t){var e,n;if(this.hasSynth=typeof window<"u"&&"speechSynthesis"in window,this.supported=this.hasSynth||Object.keys(Rp).length>0,this.enabled=!0,this.speaking=!1,this.last=null,this.voice=null,this.audio=null,this.onChange=t||(()=>{}),this.hasSynth){const i=()=>{const s=window.speechSynthesis.getVoices().filter(l=>/^zh/i.test(l.lang)&&!/HK|TW|粤|Cantonese/i.test(l.lang+l.name));let a=null,o=99;s.forEach(l=>{const c=B1.findIndex(u=>u.test(l.name)),h=c<0?50:c;h<o&&(a=l,o=h)}),this.voice=a};i(),(n=(e=window.speechSynthesis).addEventListener)==null||n.call(e,"voiceschanged",i)}}setSpeaking(t){this.speaking!==t&&(this.speaking=t,this.onChange())}speak(t,e={},n=!1){if(this.last={text:t,opts:e},!this.supported||!this.enabled&&!n)return!1;this.stop();const i=O1(e.key);if(i){const s=new Audio(i);return s.preservesPitch=!1,s.mozPreservesPitch=!1,s.webkitPreservesPitch=!1,s.playbackRate=k1[e.kind]||1,s.onplaying=()=>this.audio===s&&this.setSpeaking(!0),s.onended=()=>this.audio===s&&this.setSpeaking(!1),s.onerror=()=>{this.audio===s&&(this.audio=null,this.synth(t,e))},this.audio=s,s.play().catch(()=>{this.audio===s&&this.setSpeaking(!1)}),!0}return this.synth(t,e)}synth(t,e={}){if(!this.hasSynth)return!1;const n=window.speechSynthesis,i=new SpeechSynthesisUtterance(t);return i.lang="zh-CN",this.voice&&(i.voice=this.voice),i.rate=.95,i.pitch=e.kind==="robot"?1.15:e.kind==="student"?1.08:1,i.onstart=()=>this.setSpeaking(!0),i.onend=i.onerror=()=>this.setSpeaking(!1),this._u=i,n.speak(i),!0}repeat(){this.last&&this.speak(this.last.text,this.last.opts,!0)}stop(){if(this.audio){const t=this.audio;this.audio=null,t.pause()}this.hasSynth&&window.speechSynthesis.cancel(),this.setSpeaking(!1)}setEnabled(t){this.enabled=t,t||this.stop()}}const V1={done:"已达成",part:"部分达成",todo:"待完成"};function fo(r){const t={};return r.runs.forEach(e=>{e.test&&(t[e.cond]=e)}),t}function dr(r){const{city:t,lab:e,verify:n}=r,i=uo.city,s=uo.verify,a=Object.entries(t.judged),o=a.filter(([,v])=>v.first===!0).length,l=fo(e),c=Object.keys(l).length,h=s.cases.flatMap(v=>v.claims.map((M,E)=>`${v.id}:${E}`)),u=h.filter(v=>{var M;return(M=n.claims[v])==null?void 0:M.submitted}),d=u.filter(v=>n.claims[v].first===!0).length,f=s.usage.filter(v=>n.usage[v.id]),g=f.filter(v=>n.usage[v.id].first===!0).length,_=["B","C"].filter(v=>{var M;return(M=n.revisions[v])==null?void 0:M.ok}),m=[{name:"解释 AI 应用的输入、处理和输出",level:t.match.done?t.match.firstTry?"done":"part":"todo",evidence:t.match.done?`完成 3 种设备的输入—处理—输出匹配（尝试 ${t.match.attempts} 次）；判断了 ${a.length} 种设备的工作方式，其中 ${o} 种首次判断正确。`:"尚未完成“输入与输出”匹配任务。"},{name:"区分训练数据与测试数据",level:e.runs.some(v=>v.test)?"done":e.runs.length?"part":"todo",evidence:e.runs.some(v=>v.test)?"用自己标注的数据训练了模型，并用未参与训练的 10 张图片进行了独立测试。":e.runs.length?"已完成训练，尚未用测试集检验模型。":"尚未进行模型训练。"},{name:"通过实验发现数据条件与预测表现的联系",level:c>=2&&e.explainChoice==="data"?"done":c>=2||e.explainChoice?"part":"todo",evidence:c>=2?`比较了 ${c} 种数据条件下的测试结果${e.explainText?"，并写下了自己的解释":""}。`:"尚未完成不同数据条件的对比实验。"},{name:"对 AI 输出进行证据核验",level:u.length===h.length?d>=3?"done":"part":u.length?"part":"todo",evidence:u.length?`核验了 ${u.length}/${h.length} 条主张，其中 ${d} 条首次判断与证据一致；修正了 ${_.length}/2 段有问题的回答。`:"尚未开始证据核验。"},{name:"解释采纳或拒绝 AI 建议的原因",level:f.length===s.usage.length?g>=3?"done":"part":f.length?"part":"todo",evidence:f.length?`完成 ${f.length}/${s.usage.length} 个使用情境判断，其中 ${g} 个首次选择合理${r.summary.reflection?"；并写下了最终反思":""}。`:"尚未完成 AI 使用情境判断。"}].map(v=>({...v,levelText:V1[v.level]})),p=[{key:"city",title:i.title,done:t.done,detail:`判断设备 ${a.length}/${i.devices.length} · 输入输出匹配${t.match.done?"已完成":"未完成"}`},{key:"lab",title:uo.lab.title,done:e.done,detail:`标注 ${Object.keys(e.labels).length}/20 · 训练 ${e.runs.length} 次 · 对比条件 ${c}/3`},{key:"verify",title:s.title,done:n.done,detail:`核验主张 ${u.length}/${h.length} · 情境判断 ${f.length}/${s.usage.length}`}],y={ai:a.length>=i.minJudged,rule:a.some(([v])=>{var M;return((M=i.devices.find(E=>E.id===v))==null?void 0:M.kind)==="rule"}),io:t.match.done,data:Object.keys(e.labels).length>0,label:Object.keys(e.labels).length>=20,trainset:e.runs.length>0,testset:e.runs.some(v=>v.test),model:e.runs.length>0,predict:e.runs.some(v=>v.test),bias:c>=2,verify:u.length>=3},x=Object.entries(y).map(([v,M])=>({id:v,name:ho[v].name,ok:M}));return{scenes:p,abilities:m,concepts:x,runs:l,claims:{done:u.length,total:h.length,right:d},usage:{done:f.length,total:s.usage.length,right:g}}}function Pp(r){const t=dr(r),e=[];e.push("《Hello, AI！走进人工智能的世界》学习记录"),e.push(`导出时间：${new Date().toLocaleString("zh-CN")}`),e.push(""),e.push("一、场景完成情况"),t.scenes.forEach(i=>e.push(`  ${i.done?"[已完成]":"[未完成]"} ${i.title}：${i.detail}`)),e.push(""),e.push("二、学习表现"),t.abilities.forEach(i=>e.push(`  ${i.levelText}｜${i.name}
      ${i.evidence}`)),e.push(""),e.push("三、模型训练与测试结果");const n={A:"实验A 均衡数据",B:"实验B 不均衡数据",C:"实验C 含错误标签"};return Object.keys(t.runs).length||e.push("  （暂无）"),Object.entries(t.runs).forEach(([i,s])=>e.push(`  ${n[i]}：训练样本 猫${s.cat}/狗${s.dog}，错误标签 ${s.wrong}，测试正确率 ${s.test.correct}/${s.test.n}（猫 ${s.test.catCorrect}/${s.test.catN}，狗 ${s.test.dogCorrect}/${s.test.dogN}）`)),r.lab.explainText&&e.push(`  我的解释：${r.lab.explainText}`),e.push(""),e.push("四、信息核验"),e.push(`  核验主张 ${t.claims.done}/${t.claims.total}（首次判断与证据一致 ${t.claims.right} 条）；使用情境判断 ${t.usage.done}/${t.usage.total}`),e.push(""),e.push("五、我的反思"),e.push(`  ${r.summary.reflection||"（未填写）"}`),e.push(""),e.push("六、探索记录"),r.log.forEach(i=>e.push(`  ${new Date(i.t).toLocaleTimeString("zh-CN")}  ${i.text}`)),e.join(`
`)}const tt=r=>String(r??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class zo{constructor(t,e){this.app=t,this.scene=e,this.def=e.def,this.concept=null}get st(){return this.app.state.data[this.def.key]}get stepId(){var t,e;return((e=(t=this.def.steps)==null?void 0:t[this.st.step])==null?void 0:e.id)||"default"}maxStep(){return 0}save(){this.app.state.save()}log(t,e){this.app.state.log(this.def.key,t,e)}refresh(t){this.app.ui.render(t)}enter(){}taskHint(){return""}task(){return""}left(){var i;const t=this.def,e=this.concept&&ho[this.concept],n=t.steps||[];return`
      <div class="pg-head"><span class="unit">${tt(t.unit)} · ${tt(t.stage)}</span><span class="pg-tools"><button class="icon-btn" data-act="focus" data-side="left" title="放大 / 还原这一页">⤢</button></span></div>
      <h1>${tt(t.title)}</h1>
      <h2>${tt(t.question)}</h2>
      <p class="intro">${tt(t.intro)}</p>
      ${t.core?`<div class="callout"><b>核心问题</b>${tt(t.core)}</div>`:""}
      ${t.goals?`<section><h3>学习目标</h3><ul class="goals">${t.goals.map(s=>`<li>${tt(s)}</li>`).join("")}</ul></section>`:""}
      ${(i=t.concepts)!=null&&i.length?`<section><h3>重点概念 <small>点击查看说明</small></h3>
        <div class="chips">${t.concepts.map(s=>`<button class="chip ${this.concept===s?"on":""}" data-act="concept" data-id="${s}">${tt(ho[s].name)}</button>`).join("")}</div>
        ${e?`<div class="concept-card" key="${this.concept}">
          <button class="icon-btn close" data-act="concept-close" title="收起">×</button>
          <h4>${tt(e.name)}</h4>
          <p>${tt(e.explain)}</p>
          <div class="cc-row"><b>生活示例</b><span>${tt(e.example)}</span></div>
          ${e.link?`<div class="cc-row"><b>在本场景中</b><span>${tt(e.link.text)}${e.link.scene===t.key?` <button class="link" data-act="locate" data-target="${e.link.target}">在立体场景中找到它</button>`:""}</span></div>`:""}
          <div class="cc-think"><b>想一想</b>${tt(e.think)}</div>
        </div>`:""}</section>`:""}
      ${n.length?`<section><h3>当前探究任务</h3><div class="task-now"><b>${this.st.step+1}/${n.length} · ${tt(n[this.st.step].name)}</b><span>${tt(this.taskHint())}</span></div>
        <div class="flowline">提出问题 → 预测 → 操作 → 反馈 → 解释 → 总结</div></section>`:this.leftExtra()}`}leftExtra(){return""}right(){const t=this.def,e=t.steps||[],n=this.maxStep(),i=this.app.dialogue,s=this.app.speech,a=this.app.state.data.log.filter(o=>o.scene===t.key).slice(-2).reverse();return`
      <div class="pg-head"><span class="unit">学习实验与反馈</span><span class="pg-tools">${e.length?`<span class="prog">任务 ${this.st.step+1}/${e.length}</span>`:""}<button class="icon-btn" data-act="focus" data-side="right" title="放大 / 还原这一页">⤢</button></span></div>
      ${e.length?`<div class="stepper">${e.map((o,l)=>`<button class="st ${l===this.st.step?"cur":""} ${l<n||l===n&&this.st.done?"done":""}" ${l>n?"disabled":""} data-act="step" data-i="${l}"><i>${l+1}</i>${tt(o.name)}</button>`).join("")}</div>`:""}
      ${i&&i.scene===t.key?`<div class="dialogue" style="--who:${i.color}"><div class="who"><b>${tt(i.name)}</b><span>${tt(i.role)}</span></div><p>${tt(i.text)}</p>
        <div class="dlg-tools"><button class="btn sm ghost" data-act="speak">${s.speaking?"♪ 朗读中":"▶ 朗读"}</button><button class="btn sm ghost" data-act="stop">■ 停止</button>${s.supported?"":'<span class="muted">当前浏览器不支持语音</span>'}</div></div>`:'<div class="dialogue hint"><p>点击立体场景中的人物，可以听听他们怎么说。</p></div>'}
      <div class="task">${this.task()}</div>
      <section class="mini-log"><h3>我的探索记录 <button class="link" data-act="records">查看全部</button></h3>
        ${a.length?a.map(o=>`<div class="log-item">${tt(o.text)}</div>`).join(""):'<div class="log-item muted">完成任务后，记录会出现在这里。</div>'}
      </section>`}nextBtn(t,e="下一步",n=""){return`<div class="next-row">${!t&&n?`<span class="muted">${tt(n)}</span>`:""}<button class="btn primary" data-act="next" ${t?"":"disabled"}>${tt(e)} →</button></div>`}finishBlock(t){const e=Ei.indexOf(this.def),n=Ei[e+1];return this.st.done?`<div class="fb ok"><b>本页学习已完成</b>${tt(t)}</div>${n?`<div class="next-row"><button class="btn primary" data-act="next-page">翻到下一页：${tt(n.title)} →</button></div>`:""}`:'<div class="next-row"><button class="btn primary" data-act="finish">完成本页学习 ✓</button></div>'}goStep(t){const e=this.def.steps.length;this.st.step=Math.max(0,Math.min(t,e-1,this.maxStep())),this.save(),this.enter(),this.app.ui.render(),this.app.ui.scrollTop("right")}onAction(t,e,n,i){var a,o;const s=this.app;switch(t){case"concept":return this.concept=this.concept===e.id?null:e.id,this.refresh("left");case"concept-close":return this.concept=null,this.refresh("left");case"locate":(o=(a=this.scene).highlight)==null||o.call(a,e.target),s.cam.mode!=="open"&&s.cam.goto("open",.8);return;case"step":return this.goStep(+e.i);case"next":return this.goStep(this.st.step+1);case"finish":this.st.done=!0,this.log("done",`完成《${this.def.title}》的全部学习任务。`),this.save(),s.ui.render(),s.ui.updateBar(),s.toast("本页学习完成，下一页已解锁");return;case"next-page":return s.turn(Ei.indexOf(this.def)+1);case"speak":return s.speech.repeat();case"stop":return s.speech.stop();case"focus":return s.toggleFocus(e.side);case"records":return s.ui.openModal("records");default:return this.handle(t,e,n,i)}}handle(){}showConcept(t){ho[t]&&(this.concept=t,this.refresh("left"),this.app.ui.scrollToConcept())}lineFor(t){const e=this.def.lines[t]||{};return e[this.stepId]||e.default}lineKey(t){const e=this.def.lines[t]||{};return[this.def.key,t,e[this.stepId]?this.stepId:"default"].join(".")}}const G1=[["toc","☰","目录"],["prev","‹","上一页"],["page","",""],["next","›","下一页"],["sep"],["reset","⌂","重置视角"],["rotate","⟳","旋转视角"],["center","◎","专注实验"],["sep"],["voice","♪","语音"],["records","✎","探索记录"],["help","?","学习帮助"]];class H1{constructor(t,e){this.app=t,this.current=null,e.insertAdjacentHTML("beforeend",`<div id="loader"><div class="ld-card"><div class="ld-title">HELLO, AI!</div><div class="ld-sub">${tt(Qa.subtitle)}</div><div class="pbar"><i id="ld-bar"></i></div><div id="ld-text">正在准备…</div></div></div>
       <div id="start-hint" class="hidden"><b>点击封面，打开这本书</b><span>拖动可以从不同角度观察 · 滚轮缩放</span></div>
       <div id="caption" class="hidden"></div>
       <nav id="bar" class="hidden">${G1.map(([s,a,o])=>s==="sep"?'<i class="sep"></i>':s==="page"?'<span id="bar-page">1 / 4</span>':`<button data-bar="${s}" title="${o}"><em>${a}</em><span>${o}</span></button>`).join("")}</nav>
       <div id="tooltip"></div><div id="toast"></div>
       <div id="modal" class="hidden"><div class="modal-card"><button class="icon-btn close" data-modal-close>×</button><div id="modal-body"></div></div></div>`);const n=s=>e.querySelector(s);this.loader=n("#loader"),this.hint=n("#start-hint"),this.bar=n("#bar"),this.tooltip=n("#tooltip"),this.toastEl=n("#toast"),this.captionEl=n("#caption"),this.modal=n("#modal"),this.modalBody=n("#modal-body");const i=s=>{const a=document.createElement("div");return a.className=`page page-${s}`,a.innerHTML='<div class="pg"></div>',this.bindPage(a),a};this.leftEl=i("left"),this.rightEl=i("right"),this.bar.addEventListener("click",s=>{const a=s.target.closest("[data-bar]");a&&!a.disabled&&this.onBar(a.dataset.bar)}),this.modal.addEventListener("click",s=>{if(s.target===this.modal||s.target.closest("[data-modal-close]"))return this.closeModal();const a=s.target.closest("[data-m]");a&&this.onModal(a.dataset.m,a.dataset)}),window.addEventListener("keydown",s=>{var a,o;s.key==="Escape"&&this.closeModal(),!((o=(a=s.target).matches)!=null&&o.call(a,"textarea,input"))&&(s.key==="ArrowRight"&&this.onBar("next"),s.key==="ArrowLeft"&&this.onBar("prev"))})}bindPage(t){t.addEventListener("click",e=>{const n=e.target.closest("[data-act]");!n||n.disabled||!this.current||this.current.onAction(n.dataset.act,n.dataset,n,e)}),t.addEventListener("input",e=>{var i,s,a;const n=(i=e.target.dataset)==null?void 0:i.input;n&&((a=(s=this.current)==null?void 0:s.onInput)==null||a.call(s,n,e.target.value))}),t.addEventListener("dragstart",e=>{const n=e.target.closest("[data-drag]");n&&(e.dataTransfer.setData("text/plain",n.dataset.drag),e.dataTransfer.effectAllowed="move")}),t.addEventListener("dragover",e=>{const n=e.target.closest("[data-drop]");n&&(e.preventDefault(),n.classList.add("drop-on"))}),t.addEventListener("dragleave",e=>{var n,i,s;return(s=(i=(n=e.target).closest)==null?void 0:i.call(n,"[data-drop]"))==null?void 0:s.classList.remove("drop-on")}),t.addEventListener("drop",e=>{var s,a;const n=e.target.closest("[data-drop]");if(!n)return;e.preventDefault(),n.classList.remove("drop-on");const i=e.dataTransfer.getData("text/plain");i&&((a=(s=this.current)==null?void 0:s.onDrop)==null||a.call(s,i,n))}),t.addEventListener("wheel",e=>{var a,o;e.stopPropagation();const n=(o=(a=e.target).closest)==null?void 0:o.call(a,"textarea");if(n&&n.scrollHeight>n.clientHeight)return;const i=t.firstElementChild,s=e.deltaMode===1?32:e.deltaMode===2?i.clientHeight:1;i.scrollTop+=e.deltaY*s,e.preventDefault()},{passive:!1})}progress(t,e){this.loader.querySelector("#ld-bar").style.width=`${Math.round(t*100)}%`,this.loader.querySelector("#ld-text").textContent=e}loadError(t){this.loader.classList.add("error"),this.loader.querySelector("#ld-text").innerHTML=`<b>加载失败</b><br>${tt(t)}<br><small>请使用新版 Chrome 或 Edge 浏览器，并确认已开启硬件加速（WebGL）。</small>`}ready(){this.loader.classList.add("hidden"),this.hint.classList.remove("hidden")}showSpread(t){this.current=this.app.scenes[t].ui,this.current.enter(),this.render(),this.scrollTop("left"),this.scrollTop("right"),this.updateBar()}render(t){if(!this.current)return;const e=(n,i)=>{const s=n.firstElementChild,a=s.scrollTop;s.innerHTML=i,s.scrollTop=a};(!t||t==="left")&&e(this.leftEl,this.current.left()),(!t||t==="right")&&e(this.rightEl,this.current.right())}scrollTop(t){(t==="left"?this.leftEl:this.rightEl).firstElementChild.scrollTop=0}scrollToConcept(){const t=this.leftEl.firstElementChild,e=t.querySelector(".concept-card");e&&(t.scrollTop=Math.max(0,e.offsetTop-60))}closeOverlays(){this.closeModal(),this.captionEl.classList.add("hidden"),this.current&&(this.current.concept=null)}updateBar(){const t=this.app,e=t.book.index,n=Ei.length;this.bar.querySelector("#bar-page").textContent=`${e+1} / ${n}`;const i=(o,{disabled:l,on:c,title:h}={})=>{const u=this.bar.querySelector(`[data-bar="${o}"]`);l!==void 0&&(u.disabled=l),c!==void 0&&u.classList.toggle("on",c),h&&(u.title=h)},s=t.book.busy;i("prev",{disabled:s||e===0});const a=e+1<n&&!t.state.unlocked(e+1);i("next",{disabled:s||e>=n-1||a,title:a?"完成本页学习任务后解锁下一页":"下一页"}),i("rotate",{on:t.cam.autoRotate}),i("center",{on:t.cam.mode==="center"}),i("voice",{on:t.state.data.voice,title:t.state.data.voice?"语音：开（点击关闭）":"语音：关（点击开启）"}),i("toc",{disabled:s})}onBar(t){const e=this.app;if(e.book.state==="open")switch(t){case"toc":return this.openModal("toc");case"prev":return e.turn(e.book.index-1);case"next":return e.turn(e.book.index+1);case"reset":return e.cam.autoRotate=!1,e.cam.goto("open",.9).then(()=>this.updateBar()),this.updateBar();case"rotate":return e.cam.autoRotate=!e.cam.autoRotate,e.cam.autoT=0,e.cam.autoRotate||e.cam.goto(e.cam.mode,.8),this.updateBar();case"center":return e.toggleFocus("center");case"voice":{const n=e.state.data;return n.voice=!n.voice,e.speech.setEnabled(n.voice),e.state.save(),e.toast(n.voice?"语音朗读已开启":"语音朗读已关闭"),this.updateBar()}case"records":return this.openModal("records");case"help":return this.openModal("help")}}openModal(t){this.modalKind=t,this.modalBody.innerHTML=this[`m_${t}`](),this.modal.classList.remove("hidden")}closeModal(){this.modal.classList.add("hidden")}m_toc(){const t=this.app;return`<h2>目录</h2><p class="muted">${tt(Qa.grade)} · ${tt(Qa.duration)}</p>
      <div class="toc">${Ei.map((e,n)=>{const i=n<3?t.state.data[e.key].done:!1,s=t.state.unlocked(n);return`<button class="toc-item ${n===t.book.index?"cur":""}" data-m="goto" data-i="${n}" ${s?"":"disabled"}><i>${n+1}</i><div><b>${tt(e.title)}</b><span>${tt(e.question)}</span></div><em>${n===t.book.index?"当前页":i?"已完成":s?"可进入":"未解锁"}</em></button>`}).join("")}</div>
      <p class="muted">学习路径：认识 AI → 理解 AI → 判断 AI。完成当前页的学习任务后，下一页自动解锁。</p>`}m_records(){const t=this.app.state.data,e=dr(t),n={city:"智慧城市",lab:"训练实验室",verify:"判断中心",summary:"总结"};return`<h2>我的探索记录</h2>
      <div class="rec-top">${e.scenes.map(i=>`<div class="rep-row ${i.done?"ok":""}"><b>${i.done?"✓":"○"} ${tt(i.title)}</b><span>${tt(i.detail)}</span></div>`).join("")}</div>
      <div class="rec-list">${t.log.length?t.log.slice().reverse().map(i=>`<div class="log-item"><em>${n[i.scene]||""} · ${new Date(i.t).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})}</em>${tt(i.text)}</div>`).join(""):'<div class="muted">还没有记录。完成预测、实验和判断后，这里会自动记下你的每一步。</div>'}</div>
      <div class="next-row left"><button class="btn" data-m="export-txt">导出文本</button><button class="btn" data-m="export-json">导出 JSON</button></div>`}m_help(){return`<h2>学习帮助</h2>
      <ul class="help">
        <li><b>观察</b>按住鼠标拖动可以旋转视角，滚轮缩放；“重置视角”回到默认位置，“专注实验”放大中央的立体场景。</li>
        <li><b>阅读</b>左页是知识探索，右页是学习实验与反馈。页面右上角的 ⤢ 可以把这一页放大到眼前，再点一次还原。</li>
        <li><b>互动</b>点击立体场景里的人物和设备；点击左页的重点概念查看说明。</li>
        <li><b>翻页</b>完成当前页的任务后，下一页自动解锁。也可以用键盘 ← → 翻页。</li>
        <li><b>语音</b>点击人物会朗读台词（需要浏览器支持中文语音），可在控制栏关闭。</li>
        <li><b>保存</b>学习进度保存在这台设备的浏览器里；训练出的模型只保存在内存中，刷新页面后需要重新训练。</li>
      </ul>
      <div class="help-box"><label><input type="checkbox" data-m="teacher" ${this.app.state.data.teacher?"checked":""}> 教师模式：解锁全部页面（便于课堂演示）</label>
      <button class="btn sm ghost" data-m="reset">清除学习进度，重新开始</button></div>`}onModal(t,e){const n=this.app,i=n.state.data,s=(a,o,l)=>{const c=document.createElement("a");c.href=URL.createObjectURL(new Blob([o],{type:l})),c.download=a,document.body.appendChild(c),c.click(),c.remove()};switch(t){case"goto":return this.closeModal(),n.turn(+e.i);case"teacher":return i.teacher=!i.teacher,n.state.save(),this.updateBar(),this.render(),n.toast(i.teacher?"教师模式已开启：全部页面已解锁":"教师模式已关闭");case"reset":return window.confirm("确定要清除这台设备上的全部学习进度吗？此操作不能撤销。")?(n.state.reset(),window.location.reload()):void 0;case"export-txt":return s("hello-ai-学习记录.txt",Pp(i),"text/plain;charset=utf-8");case"export-json":return s("hello-ai-学习记录.json",JSON.stringify({course:Qa.title,exportedAt:new Date().toISOString(),report:dr(i),progress:i},null,2),"application/json")}}toast(t){this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this._tt),this._tt=setTimeout(()=>this.toastEl.classList.remove("show"),2600)}caption(t){this.captionEl.textContent=t,this.captionEl.classList.remove("hidden"),clearTimeout(this._ct),this._ct=setTimeout(()=>this.captionEl.classList.add("hidden"),Math.min(12e3,2500+t.length*180))}}class Vo{constructor(t,e){this.app=t,this.def=e,this.key=e.key,this.group=new Jt,this.popups=[],this.targets=[],this.byId={},this.characters={},this.active=!1,this.selected=null}pop(t,e,n,i={}){const s=new Sp(e,n,i);return t&&s.add(t),this.group.add(s),this.popups.push(s),s}clickable(t,{id:e,label:n,hint:i="点击查看",onClick:s}){dS(t);const a={id:e,root:t,label:n,hint:i,onClick:s,active:!0};return t.userData.interactive=a,this.targets.push(a),e&&(this.byId[e]=a),a}addCharacter(t,e,n,i=0,s=3){t.setYaw(i);const a=this.pop(t.group,e,n,{order:s,dir:"back"});return t.popup=a,this.characters[t.id]=t,this.clickable(t.group,{id:"char:"+t.id,label:`${t.name} · ${t.role}`,hint:"点击对话",onClick:()=>this.onCharacter(t)}),t}onCharacter(t){this.select(t.group),t.talk(),this.app.say(this,t.id)}select(t){this.selected&&vd(this.selected,!1),this.selected=t||null,t&&vd(t,!0)}unfoldTimeline(){const t=pe.timeline(),e={};return this.popups.forEach(n=>{const i=e[n.order]=(e[n.order]||0)+1;t.to(n,{fold:1,duration:.8,ease:"back.out(1.45)",onUpdate:()=>n.apply()},n.order*.22+i*.05)}),t}foldTimeline(){const t=pe.timeline(),e=Math.max(0,...this.popups.map(n=>n.order));return this.popups.forEach((n,i)=>{t.to(n,{fold:0,duration:.42,ease:"power2.in",onUpdate:()=>n.apply()},(e-n.order)*.1+i%5*.02)}),t}activate(){this.active=!0,this.app.interaction.setTargets(this.targets)}deactivate(){this.active=!1,this.select(null),this.app.interaction.setTargets([])}update(t,e){for(const n in this.characters)this.characters[n].update(e)}drawGround(t,e,n){t.fillStyle=P.cream,t.fillRect(0,0,e,n)}}function Tr(r=1.3,t=P.green){const e=Xt(oe(.045,.07,r*.45,P.brown,0,0,0,8));return e.add(da(r*.3,t,0,r*.62,0,1)),e.add(da(r*.2,P.greenDark,r*.13,r*.82,.04,0)),e}function Cd(r=1.2,t=P.greenDark){const e=Xt(oe(.04,.06,r*.25,P.brown,0,0,0,8)),n=(i,s,a)=>{const o=new St(new Fo(i,s,7),da(.1,t).material);return o.position.y=a+s/2,o.castShadow=!0,o};return e.add(n(r*.3,r*.45,r*.2),n(r*.23,r*.4,r*.45),n(r*.15,r*.32,r*.7)),e}function Rd(r=.22,t=P.green){const e=Xt(da(r,t,0,r*.7,0,1));return e.add(da(r*.7,P.greenDark,r*.8,r*.5,.02,0)),e}function $1(){const r=Xt(nt(.9,.06,.3,P.brown,0,.26,0,.02),nt(.9,.3,.05,P.brown,0,.36,-.14,.02));return[-.36,.36].forEach(t=>r.add(_e(.06,.26,.26,P.inkSoft,t,0,0))),r}function fa(r=.6,t=.4,e=.6,n=P.cream){const i=Xt(nt(r,t,e,n,0,0,0,.04));return i.add(nt(r+.08,.05,e+.08,P.sand,0,t,0,.02)),i}function Dp(r=1,t=P.coral){const e=Xt(oe(.015,.015,r,P.ink,0,0,0,6),Zn(.03,P.mustard,0,r,0,8,6)),n=_e(.3,.18,.012,t,.16,r-.24,0);return e.add(n),e}function Ao(r,t,e=.3){const n=new Jt,i=De(new St(new ah(.072,e,4,10),Mn(r)));i.position.y=-e/2-.04;const s=Zn(.078,t,0,-e-.13,0,12,10);return n.add(i,s),n}class Lp{constructor(t){Object.assign(this,t),this.group=new Jt,this.rig=new Jt,this.group.add(this.rig),this.phase=Math.random()*6,this.baseYaw=0,this.acting=!1}setYaw(t){this.baseYaw=t,this.group.rotation.y=t}update(t){this.rig.position.y=Math.sin(t*1.8+this.phase)*.012,this.head&&(this.head.rotation.z=Math.sin(t*.9+this.phase)*.035),this.acting||(this.armL.rotation.x=Math.sin(t*1.3+this.phase)*.06,this.armR.rotation.x=-Math.sin(t*1.3+this.phase)*.06)}_act(t){pe.killTweensOf([this.armL.rotation,this.armR.rotation,this.group.rotation,this.head.rotation]),this.acting=!0;const e=pe.timeline({onComplete:()=>this.acting=!1});return t(e),e}turn(t,e=1.6){pe.to(this.group.rotation,{y:t,duration:.45,ease:"power2.out"}),pe.to(this.group.rotation,{y:this.baseYaw,duration:.6,ease:"power2.inOut",delay:e+.45})}wave(){return this._act(t=>{t.to(this.armR.rotation,{z:2.5,x:0,duration:.35,ease:"back.out(1.6)"}).to(this.armR.rotation,{z:2.05,duration:.2,yoyo:!0,repeat:3,ease:"sine.inOut"}).to(this.armR.rotation,{z:this.armRest,duration:.4,ease:"power2.inOut"})})}point(t=1){const e=t>0?this.armR:this.armL;return this._act(n=>{n.to(e.rotation,{x:-1.35,z:t*.35,duration:.4,ease:"back.out(1.5)"}).to(this.head.rotation,{x:-.08,duration:.3},0).to(e.rotation,{x:-1.2,duration:.25,yoyo:!0,repeat:3,ease:"sine.inOut"}).to(e.rotation,{x:0,z:t>0?this.armRest:-this.armRest,duration:.45,ease:"power2.inOut"}).to(this.head.rotation,{x:0,duration:.3},"<")})}nod(){return this._act(t=>{t.to(this.head.rotation,{x:.22,duration:.18,yoyo:!0,repeat:3,ease:"sine.inOut"}).to(this.armL.rotation,{z:-.7,x:-.5,duration:.3,ease:"power2.out"},0).to(this.armL.rotation,{z:-this.armRest,x:0,duration:.4,ease:"power2.inOut"},.8)})}talk(){const t=this._n=((this._n||0)+1)%3;return t===0?this.point(1):t===1?this.nod():this.wave()}}function Ar(r,t={}){const e={skin:"#F3D2B8",hair:"#4A3B32",top:P.tech,bottom:"#5E6E75",shoes:P.ink,hairStyle:"short",pack:null,glasses:!1,coat:null,scale:.84,...t},n=new Lp(r),i=n.rig;[-.11,.11].forEach(u=>{i.add(nt(.16,.38,.18,e.bottom,u,.06,0,.05)),i.add(nt(.18,.09,.26,e.shoes,u,0,.035,.04))}),i.add(nt(.48,.5,.3,e.top,0,.42,0,.11)),e.coat&&(i.add(nt(.52,.62,.33,e.coat,0,.33,-.012,.1)),i.add(nt(.16,.4,.04,e.top,0,.5,.155,.02)));const s=new Jt;s.position.y=1.2;const a=Zn(.27,e.skin,0,0,0,20,16);a.scale.y=.96,s.add(a);const o=Mn(e.hair,{roughness:.95}),l=De(new St(new Ai(.288,20,12,0,Math.PI*2,0,Math.PI*.52),o));if(l.rotation.x=-.32,l.position.y=.012,s.add(l),e.hairStyle==="bob"||e.hairStyle==="pony"){const u=De(new St(new Ai(.295,18,12,Math.PI*1.02,Math.PI*.96,.2,Math.PI*.62),o));s.add(u)}if(e.hairStyle==="pony"){const u=Zn(.11,e.hair,0,-.02,-.33,10,8);u.scale.set(.8,1.5,.8),s.add(u)}e.hairStyle==="bun"&&s.add(Zn(.12,e.hair,0,.26,-.12,10,8));const c=Mn("#2E3438",{roughness:.6});[-.098,.098].forEach(u=>{const d=new St(new Ai(.032,10,8),c);d.position.set(u,0,.248),d.scale.set(1,1.25,.6),s.add(d);const f=new St(new Uo(.04,12),Mn("#EFAF9F",{roughness:1}));f.position.set(u*1.65,-.07,.232),f.rotation.y=u>0?.55:-.55,s.add(f)});const h=new St(new es(.045,.011,6,12,Math.PI),c);if(h.rotation.z=Math.PI,h.position.set(0,-.08,.258),s.add(h),e.glasses&&[-.098,.098].forEach(u=>{const d=new St(new es(.058,.01,6,16),Mn("#4A4038"));d.position.set(u,0,.262),s.add(d)}),i.add(s),n.head=s,n.armRest=.14,n.armL=Ao(e.coat||e.top,e.skin),n.armL.position.set(-.3,.87,0),n.armL.rotation.z=-n.armRest,n.armR=Ao(e.coat||e.top,e.skin),n.armR.position.set(.3,.87,0),n.armR.rotation.z=n.armRest,i.add(n.armL,n.armR),e.pack&&(i.add(nt(.38,.4,.15,e.pack,0,.47,-.21,.06)),i.add(nt(.22,.12,.05,P.cream,0,.52,-.3,.02))),e.prop==="clipboard"){const u=nt(.2,.26,.025,P.brown,0,-.56,.06,.01);u.add(nt(.16,.2,.01,P.cream,0,-.1,.016,.005)),n.armL.add(u)}return n.group.scale.setScalar(e.scale),n}function Rh(r,t={}){const e={body:P.cream,accent:P.tech,light:"#BFE3D0",scale:.86,...t},n=new Lp(r),i=n.rig;i.add(oe(.2,.27,.14,P.techDark,0,0,0,20)),i.add(oe(.16,.2,.08,P.ink,0,.12,0,20)),i.add(nt(.54,.54,.42,e.body,0,.18,0,.17)),i.add(nt(.3,.2,.03,e.accent,0,.36,.205,.04));const s=Zn(.045,P.coral,0,.46,.225,10,8,{emissive:P.coral,emissiveIntensity:.35});i.add(s),n.heart=s;const a=new Jt;a.position.y=1.03,a.add(nt(.66,.48,.48,e.body,0,-.24,0,.17)),a.add(nt(.5,.31,.04,P.ink,0,-.16,.225,.08,{roughness:.5}));const o=Mn(e.light,{emissive:e.light,emissiveIntensity:.7,roughness:.4});n.eyes=[-.12,.12].map(h=>{const u=new St(new Ls(.048,.048,.02,14),o);return u.rotation.x=Math.PI/2,u.position.set(h,.01,.25),a.add(u),u});const l=new St(new es(.05,.011,6,12,Math.PI),o);l.rotation.z=Math.PI,l.position.set(0,-.07,.25),a.add(l),[-1,1].forEach(h=>{const u=oe(.09,.09,.06,e.accent,0,0,0,14);u.rotation.z=Math.PI/2,u.position.set(h*.35,0,0),a.add(u)}),a.add(oe(.014,.014,.18,P.ink,0,.24,0,8)),a.add(Zn(.05,P.coral,0,.45,0,10,8,{emissive:P.coral,emissiveIntensity:.3})),i.add(a),n.head=a,n.armRest=.22,n.armL=Ao(e.body,e.accent,.24),n.armL.position.set(-.33,.62,0),n.armL.rotation.z=-n.armRest,n.armR=Ao(e.body,e.accent,.24),n.armR.position.set(.33,.62,0),n.armR.rotation.z=n.armRest,i.add(n.armL,n.armR),n.group.scale.setScalar(e.scale);const c=n.update.bind(n);return n.update=h=>{c(h);const d=(h+n.phase)%3.6<.12?.15:1;n.eyes.forEach(f=>f.scale.z=d)},n}const to=(r,t=0)=>new Me({color:r,emissive:r,emissiveIntensity:t,roughness:.6});class W1 extends Vo{build(){this.buildBuildings(),this.buildDevices(),this.buildProps();const t=this.def.characters;this.addCharacter(Ar(t.student,{top:P.mustard,bottom:"#5E6E75",hair:"#4A3B32",pack:P.coral}),-.8,2.4,.3),this.addCharacter(Rh(t.guide),.65,2.5,-.3)}buildBuildings(){const t=Xt(nt(1.9,1.25,1.3,"#F4E9D6",0,0,0,.03));t.add(mp(2.2,.78,1.5,P.coral,0,1.25,0)),t.add(nt(.36,.62,.05,P.coralDark,-.5,0,.66,.02)),[.2,.62].forEach(h=>{t.add(nt(.36,.38,.03,P.cream,h,.52,.655,.02)),t.add(nt(.28,.3,.04,P.tech,h,.56,.66,.02))}),t.add(_e(.2,.5,.2,"#D9CDB8",.62,1.45,-.25));const e=_e(.7,.03,.42,P.techDark,-.52,1.62,.36);e.rotation.z=.615,e.rotation.order="YXZ",t.add(e);const n=$e("智慧小屋",{w:.9,h:.24,bg:P.cream,border:P.coralDark});n.position.set(.1,1.05,.67),t.add(n),this.pop(t,-2.55,-2.6,{order:0});const i=Xt(nt(2,1.7,1.2,"#E4EEF0",0,0,0,.03));i.add(nt(2.12,.16,1.3,P.tech,0,1.7,0,.03)),i.add(nt(1.3,.62,.04,"#BFD8E2",0,.62,.6,.02)),i.add(nt(.4,.5,.05,P.cream,-.72,0,.6,.02)),[-.4,0,.4].forEach(h=>i.add(_e(.02,.62,.05,P.cream,h,.62,.61)));const s=$e("图像识别站",{w:1.2,h:.26,bg:P.cream,border:P.techDark});s.position.set(0,1.46,.61),i.add(s);const a=oe(.26,.26,.06,P.cream,0,0,0,24);a.rotation.x=Math.PI/2,a.position.set(.6,2.2,0),a.add(oe(.13,.13,.07,P.ink,0,-.035,0,20)),i.add(a,oe(.02,.02,.3,P.ink,.6,1.86,0,6)),this.pop(i,.25,-2.75,{order:0});const o=Xt(nt(1.9,1.95,1.2,P.sand,0,0,0,.03));o.add(nt(2.02,.12,1.3,"#D2C4A6",0,1.95,0,.02));for(let h=0;h<2;h++)for(let u=0;u<3;u++)o.add(nt(.34,.34,.04,P.tech,-.55+u*.55,.78+h*.56,.6,.02));o.add(nt(.5,.56,.05,P.greenDark,0,0,.6,.02));const l=$e("明理中学",{w:.9,h:.22,bg:P.cream,border:P.greenDark});l.position.set(0,.66,.635),o.add(l);const c=Dp(.8);c.position.set(.7,2.07,.2),o.add(c),this.pop(o,2.7,-2.65,{order:0})}buildDevices(){const t=(x,v,M,E,T={})=>{const C=this.def.devices.find(S=>S.id===x),b=this.pop(v,M,E,{order:1,...T});return this.clickable(v,{id:x,label:C.name,hint:"点击观察它怎样工作",onClick:()=>this.onDevice(x)}),b},e=Xt(fa(.56,.4,.56));e.add(oe(.19,.21,.4,"#71858F",0,.45,0,22)),this.spRing=new St(new es(.16,.022,8,28),to(P.mint,.25)),this.spRing.rotation.x=Math.PI/2,this.spRing.position.y=.86,e.add(this.spRing),this.waves=[0,1,2].map(()=>{const x=new St(new es(.22,.012,6,32),new vr({color:P.techDark,transparent:!0,opacity:0}));return x.position.set(0,.68,.22),x.userData.noOutline=!0,e.add(x),x}),t("speaker",e,-3.05,-1.2);const n=Xt(fa(.56,.4,.56));n.add(oe(.13,.15,.04,P.ink,-.08,.45,0,18));const i=oe(.016,.016,.42,P.ink,0,0,0,6);i.position.set(-.03,.68,0),i.rotation.z=-.3,n.add(i);const s=new St(new Ls(.06,.17,.2,16,1,!0),Mn(P.mustard,{side:Xn}));s.position.set(.07,.92,0),s.rotation.z=-.5,De(s),n.add(s),this.bulbMat=to("#FFF3C4",0);const a=new St(new Ai(.06,12,10),this.bulbMat);a.position.set(.1,.86,0),n.add(a),n.add(nt(.24,.24,.1,P.cream,.16,.45,.16,.03)),this.clock=new Fn(.2,.2,{ppu:400}),this.clock.mesh.position.set(.16,.57,.212),n.add(this.clock.mesh),this.drawClock(17.5),t("lamp",n,-1.95,-1.1);const o=Xt(nt(.5,.1,.4,P.sand,0,0,0,.03),_e(.1,.72,.1,P.inkSoft,0,.1,-.05)),l=nt(.92,.7,.06,P.ink,0,.72,0,.04);l.rotation.x=-.18,o.add(l),this.kioskScreen=new Fn(.82,.6,{ppu:300,lit:!1}),this.kioskScreen.mesh.position.set(0,0,.032),l.add(this.kioskScreen.mesh);const c=nt(.16,.1,.1,P.tech,0,.36,.02,.03);c.add(oe(.03,.03,.04,P.ink,0,-.02,.06,10)),l.add(c),this.drawKiosk(0),t("imaging",o,.25,-1.4);const h=Xt(_e(.14,.62,.14,P.inkSoft,-.5,0,0),_e(.14,.62,.14,P.inkSoft,.5,0,0));this.gateArm=new Jt,this.gateArm.position.set(-.5,.52,.08);const u=nt(.96,.06,.05,P.coral,.48,-.03,0,.02);this.gateArm.add(u,nt(.14,.07,.052,P.cream,.3,-.035,.002,.01),nt(.14,.07,.052,P.cream,.66,-.035,.002,.01)),h.add(this.gateArm),h.add(_e(.08,.86,.08,P.ink,.86,0,.08));const d=nt(.36,.44,.07,P.cream,.86,.72,.1,.04);d.rotation.x=-.12,h.add(d),this.faceScreen=new Fn(.3,.34,{ppu:300,lit:!1}),this.faceScreen.mesh.position.set(0,.02,.037),d.add(this.faceScreen.mesh),this.drawFace(0),t("face",h,2.55,-1.2),this.car=new Jt;const f=this.car;f.add(nt(1.02,.26,.52,P.cream,0,.1,0,.09)),f.add(nt(.56,.22,.46,"#A9C9D6",-.06,.34,0,.08)),f.add(nt(.5,.14,.47,P.ink,-.06,.37,0,.04,{roughness:.4})),f.add(nt(.04,.08,.36,P.mustard,.5,.2,0,.015)),[[-.32,.25],[.32,.25],[-.32,-.25],[.32,-.25]].forEach(([x,v])=>{const M=oe(.12,.12,.09,P.ink,0,0,0,16);M.rotation.x=Math.PI/2,M.position.set(x,.12,v),M.add(oe(.05,.05,.1,P.warmGray,0,-.05,0,10)),f.add(M)}),this.lidar=Xt(oe(.075,.085,.07,P.ink,0,0,0,14),_e(.03,.03,.17,P.coral,0,.07,0)),this.lidar.position.set(-.06,.56,0),f.add(this.lidar);const g=Xt(f);t("car",g,-1.6,.3,{dir:"front"}),this.detect=new ty(new my(new Pe(.5,.9,.3)),new uf({color:P.coralDark})),this.detect.position.set(1.35,.5,1.2),this.detect.visible=!1,this.group.add(this.detect);const _=Xt(oe(.035,.05,1.55,P.inkSoft,0,0,0,10),oe(.12,.14,.06,P.inkSoft,0,0,0,12));_.add(nt(.22,.6,.17,P.ink,0,1.2,.06,.05)),this.lights=[[P.coral,1.64],[P.mustard,1.47],["#8FCF9F",1.3]].map(([x,v])=>{const M=new St(new Ai(.062,12,10),to(x,.05));return M.position.set(0,v,.15),_.add(M),M});const m=_e(.5,.035,.035,P.inkSoft,-.25,1.86,0);_.add(m),this.sigCam=Xt(nt(.2,.11,.12,P.tech,0,-.055,0,.03),oe(.035,.035,.05,P.ink,0,0,0,10)),this.sigCam.children[1].rotation.x=Math.PI/2,this.sigCam.children[1].position.set(0,0,.08),this.sigCam.position.set(-.5,1.82,0),this.sigCam.rotation.x=.35,_.add(this.sigCam),this.sigPanel=new Fn(.46,.22,{ppu:300,lit:!1}),this.sigPanel.mesh.position.set(0,.98,.1),_.add(this.sigPanel.mesh),this.drawSignal(2,"绿灯 20 秒"),this.setLight(2),t("signal",_,2.2,1.35);const p=Xt(oe(.035,.05,1.7,P.inkSoft,0,0,0,10),oe(.12,.14,.06,P.inkSoft,0,0,0,12));p.add(_e(.5,.04,.04,P.inkSoft,.22,1.68,0)),p.add(nt(.32,.07,.16,P.ink,.42,1.6,0,.03)),this.slMat=to("#FFF3C4",0);const y=new St(new Pe(.26,.03,.12),this.slMat);y.position.set(.42,1.59,0),p.add(y),p.add(Zn(.05,P.tech,0,1.76,0,10,8)),this.slSign=new Fn(.42,.22,{ppu:300,lit:!1}),this.slSign.mesh.position.set(0,.9,.06),p.add(this.slSign.mesh),this.drawSky(!1),t("streetlamp",p,-3.25,1.5)}buildProps(){this.pop(Tr(1.35),-1.2,-3.25,{order:2}),this.pop(Cd(1.3),1.5,-3.3,{order:2}),this.pop(Tr(1.15,P.greenDark),3.45,1.9,{order:2,dir:"right"}),this.pop(Cd(1.05),-3.4,3.05,{order:2,dir:"left"}),this.pop(Rd(.22),-3.45,-.25,{order:2}),this.pop(Rd(.2),3.5,-.9,{order:2}),this.pop($1(),2.45,3.05,{order:2,yaw:-.35});const t=Xt(oe(.025,.03,.75,P.inkSoft,0,0,0,8)),e=$e("行人",{w:.34,h:.34,bg:P.tech,fg:"#FFFFFF",radius:.5});e.position.set(0,.86,.02),t.add(e),this.pop(t,1.35,1.2,{order:2})}drawClock(t){this.clock.draw((e,n)=>{e.fillStyle="#FBF8F0",e.beginPath(),e.arc(n/2,n/2,n/2-2,0,6.3),e.fill(),e.strokeStyle=P.ink,e.lineWidth=4,e.stroke();const i=t%12/12*Math.PI*2-Math.PI/2,s=t%1*Math.PI*2-Math.PI/2;e.lineCap="round",e.lineWidth=5,e.beginPath(),e.moveTo(n/2,n/2),e.lineTo(n/2+Math.cos(i)*n*.22,n/2+Math.sin(i)*n*.22),e.stroke(),e.lineWidth=3,e.strokeStyle=P.coralDark,e.beginPath(),e.moveTo(n/2,n/2),e.lineTo(n/2+Math.cos(s)*n*.34,n/2+Math.sin(s)*n*.34),e.stroke()})}drawKiosk(t){this.kioskScreen.draw((e,n,i)=>{e.fillStyle="#EEF4F2",e.fillRect(0,0,n,i),e.save(),e.translate(n*.36,i*.52),e.rotate(-.5),e.fillStyle="#8FAE8B",e.beginPath(),e.ellipse(0,0,n*.2,i*.17,0,0,6.3),e.fill(),e.strokeStyle="#5F7F65",e.lineWidth=3,e.beginPath(),e.moveTo(-n*.24,0),e.lineTo(n*.2,0);for(let s=-2;s<=2;s++)e.moveTo(s*n*.06,0),e.lineTo(s*n*.06+n*.04,-i*.1),e.moveTo(s*n*.06,0),e.lineTo(s*n*.06+n*.04,i*.1);e.stroke(),e.restore(),t>0&&t<1&&(e.fillStyle="rgba(95,147,171,0.35)",e.fillRect(0,i*t-6,n,12)),t>0&&(e.strokeStyle=P.coralDark,e.lineWidth=4,e.setLineDash([12,8]),e.strokeRect(n*.1,i*.2,n*.52,i*.64),e.setLineDash([])),e.fillStyle=P.ink,e.font=`700 ${i*.1}px ${ge}`,e.textAlign="left",e.fillText("输入图像",n*.66,i*.3),t>=1?(e.fillStyle=P.techDark,Ne(e,n*.65,i*.42,n*.31,i*.34,10),e.fill(),e.fillStyle="#fff",e.font=`700 ${i*.095}px ${ge}`,e.fillText("预测:叶片",n*.67,i*.55),e.fillText("可能性 92%",n*.67,i*.68)):(e.fillStyle=P.inkSoft,e.font=`500 ${i*.085}px ${ge}`,e.fillText(t>0?"识别中…":"等待识别",n*.66,i*.5))})}drawFace(t){this.faceScreen.draw((e,n,i)=>{if(e.fillStyle=t===2?"#DCEEDD":"#E9EFF1",e.fillRect(0,0,n,i),e.strokeStyle=P.ink,e.lineWidth=3,e.beginPath(),e.ellipse(n/2,i*.42,n*.2,i*.24,0,0,6.3),e.stroke(),e.beginPath(),e.arc(n/2,i*1.02,n*.34,Math.PI*1.15,Math.PI*1.85),e.stroke(),t>=1){e.strokeStyle=t===2?P.mintDark:P.coralDark,e.lineWidth=4;const s=n*.2,a=n*.8,o=i*.1,l=i*.74,c=n*.12;[[s,o,1,1],[a,o,-1,1],[s,l,1,-1],[a,l,-1,-1]].forEach(([h,u,d,f])=>{e.beginPath(),e.moveTo(h+d*c,u),e.lineTo(h,u),e.lineTo(h,u+f*c),e.stroke()})}e.fillStyle=P.ink,e.textAlign="center",e.font=`700 ${i*.1}px ${ge}`,e.fillText(["请正对摄像头","比对特征中…","已登记·通过"][t],n/2,i*.93)})}drawSignal(t,e){this.sigPanel.draw((n,i,s)=>{n.fillStyle="#F4F1E8",Ne(n,0,0,i,s,10),n.fill(),n.fillStyle=P.ink,n.textAlign="center",n.font=`700 ${s*.3}px ${ge}`,n.fillText(`识别到 ${t} 辆车`,i/2,s*.38),n.fillStyle=P.techDark,n.fillText(e,i/2,s*.8)})}drawSky(t){this.slSign.draw((e,n,i)=>{e.fillStyle=t?"#5E6E75":"#F4F1E8",Ne(e,0,0,n,i,10),e.fill(),e.fillStyle=t?"#FFF3C4":P.mustard,e.beginPath(),e.arc(n*.2,i/2,i*.26,0,6.3),e.fill(),t&&(e.fillStyle="#5E6E75",e.beginPath(),e.arc(n*.26,i*.42,i*.22,0,6.3),e.fill()),e.fillStyle=t?"#fff":P.ink,e.font=`700 ${i*.28}px ${ge}`,e.textAlign="left",e.fillText(t?"亮度低→开灯":"亮度高→关灯",n*.38,i*.6)})}setLight(t){this.lights.forEach((e,n)=>e.material.emissiveIntensity=n===t?.95:.04)}onDevice(t){this.select(this.byId[t].root),this.demo(t),this.ui.onDevice(t)}highlight(t){const e=this.byId[t];e&&this.select(e.root)}demo(t){this._demo&&this._demo.progress(1).kill();const e=this._demo=pe.timeline(),n={v:0};switch(t){case"speaker":this.waves.forEach((i,s)=>{e.fromTo(i.scale,{x:.4,y:.4,z:.4},{x:2.2,y:2.2,z:2.2,duration:1.1,ease:"power1.out"},s*.3),e.fromTo(i.material,{opacity:.9},{opacity:0,duration:1.1},s*.3)}),e.to(this.spRing.material,{emissiveIntensity:1.1,duration:.25,yoyo:!0,repeat:5},.6),e.to(this.spRing.material,{emissiveIntensity:.25,duration:.3});break;case"lamp":e.to(n,{v:1,duration:1.6,ease:"none",onUpdate:()=>this.drawClock(17.5+n.v*1.5)}),e.to(this.bulbMat,{emissiveIntensity:1.3,duration:.2}),e.to(n,{v:2,duration:1.8,ease:"none",onUpdate:()=>this.drawClock(19+(n.v-1)*3)},"+=0.9"),e.to(this.bulbMat,{emissiveIntensity:0,duration:.2}),e.add(()=>this.drawClock(17.5),"+=0.8");break;case"imaging":e.to(n,{v:.99,duration:1.4,ease:"none",onUpdate:()=>this.drawKiosk(Math.max(n.v,.01))}),e.add(()=>this.drawKiosk(1)),e.add(()=>this.drawKiosk(0),"+=4");break;case"face":e.add(()=>this.drawFace(1)),e.add(()=>this.drawFace(2),1.1),e.to(this.gateArm.rotation,{z:1.35,duration:.6,ease:"back.out(1.4)"},1.2),e.to(this.gateArm.rotation,{z:0,duration:.6,ease:"power2.inOut"},3.4),e.add(()=>this.drawFace(0));break;case"car":e.to(this.lidar.rotation,{y:Math.PI*6,duration:3.4,ease:"none"},0),e.to(this.car.position,{x:1.55,duration:1.5,ease:"power2.inOut"},0),e.add(()=>this.detect.visible=!0,.9),e.to(this.detect.scale,{x:1.12,y:1.12,z:1.12,duration:.2,yoyo:!0,repeat:5},.9),e.add(()=>this.detect.visible=!1,2.6),e.to(this.car.position,{x:0,duration:1.6,ease:"power2.inOut"},2.8),e.set(this.lidar.rotation,{y:0});break;case"signal":e.to(this.sigCam.rotation,{y:.6,duration:.6,yoyo:!0,repeat:3,ease:"sine.inOut"},0),[3,5,8].forEach((i,s)=>e.add(()=>this.drawSignal(i,i>5?"延长绿灯 35 秒":"计算配时…"),.5+s*.6)),e.add(()=>this.setLight(1),.2),e.add(()=>this.setLight(2),1.9),e.add(()=>{this.drawSignal(2,"绿灯 20 秒")},5);break;case"streetlamp":e.add(()=>this.drawSky(!0)),e.to(this.slMat,{emissiveIntensity:1.3,duration:.3},.5),e.add(()=>this.drawSky(!1),3),e.to(this.slMat,{emissiveIntensity:0,duration:.3},3.2);break}}deactivate(){this._demo&&this._demo.progress(1).kill(),super.deactivate()}drawGround(t,e,n,i){const s=l=>(l+ye.UX/2)*i,a=l=>(l+ye.UZ/2)*i;t.fillStyle="#EFE9DA",t.fillRect(0,0,e,n),t.strokeStyle="rgba(150,135,105,0.14)",t.lineWidth=1;for(let l=0;l<e;l+=38)t.beginPath(),t.moveTo(l,0),t.lineTo(l,n),t.moveTo(0,l),t.lineTo(e,l),t.stroke();t.fillStyle="#D3E2CB",Ne(t,s(-3.7),a(-3.6),2.75*i,2.95*i,26),t.fill(),Ne(t,s(1.5),a(-3.6),2.2*i,2*i,26),t.fill(),Ne(t,s(-3.7),a(1.2),1.1*i,2.4*i,26),t.fill(),Ne(t,s(2.9),a(1.2),.85*i,1.2*i,22),t.fill(),t.fillStyle="#C6C2B7",t.fillRect(0,a(-.4),e,1.4*i),t.fillStyle="rgba(255,255,255,0.8)",t.fillRect(0,a(-.4),e,4),t.fillRect(0,a(1)-4,e,4);for(let l=12;l<e;l+=64)l>s(.8)&&l<s(1.95)||t.fillRect(l,a(.3)-3,34,6);for(let l=0;l<6;l++)t.fillRect(s(.95)+l*14,a(-.3),8,1.2*i);t.fillStyle="#F6F1E4",t.fillRect(s(-3.3),a(-1.9),.42*i,1.5*i),t.fillRect(s(-.7),a(-2.15),.42*i,1.75*i),t.fillRect(s(2.5),a(-2),.46*i,1.6*i),t.fillStyle="#F6F1E4",t.beginPath(),t.arc(s(0),a(2.5),1.55*i,0,6.3),t.fill(),t.strokeStyle="rgba(135,181,201,0.6)",t.lineWidth=3,[1.5,1.1,.7].forEach(l=>{t.beginPath(),t.arc(s(0),a(2.5),l*i,0,6.3),t.stroke()});const o=[["1",-3.05,-.72],["2",-1.95,-.62],["3",.25,-.86],["4",2.55,-.72],["5",-1.6,1],["6",2.2,1.78],["7",-3.25,1.92]];t.textAlign="center",t.textBaseline="middle",o.forEach(([l,c,h])=>{t.fillStyle=P.coralDark,t.beginPath(),t.arc(s(c),a(h),13,0,6.3),t.fill(),t.fillStyle="#fff",t.font=`700 17px ${ge}`,t.fillText(l,s(c),a(h)+1)})}}const ti={x:-1.85,y:.5,z:-1.5,lean:.3},X1={cat:[-2.72,.56,.5],dog:[-.98,.56,.5]},q1=[-1.85,1.02,.68],ei={x:2.5,y:.1,z:2.98,lean:.95},Y1=[1.9,.9,.5],Ol={cat:P.techDark,dog:P.coralDark};class j1 extends Vo{build(){this.dataset=this.app.dataset,this.buildRoom(),this.buildStations(),this.buildCards();const t=this.def.characters;this.addCharacter(Ar(t.student,{top:P.mint,bottom:"#6B7C86",hair:"#3E3530",hairStyle:"bob",pack:null}),-.4,2.5,.25),this.addCharacter(Ar(t.mentor,{top:P.cream,coat:"#F4F1EA",bottom:"#4E5D66",hair:"#5A4A40",glasses:!0,prop:"clipboard",scale:.92}),.72,2.62,-.2)}station(t,e,n,i,s,a={}){const o=this.pop(t,e,n,{order:1,...a});return this.clickable(t,{id:i,label:s,hint:"点击了解它的作用",onClick:()=>this.ui.onStation(i)}),o}buildRoom(){const t=Xt(nt(7.3,2.5,.08,"#F1EADB",0,0,0,.03)),e=new Fn(3,1.1,{ppu:150});e.draw((n,i,s)=>{n.fillStyle="#FBF8F0",Ne(n,0,0,i,s,16),n.fill(),n.strokeStyle="rgba(52,67,74,0.25)",n.lineWidth=3,n.stroke();const a=["数据","标签","训练","模型","预测"],o=[P.tech,P.mint,P.coral,P.mustard,P.green];a.forEach((l,c)=>{const h=i*(.1+c*.2);n.fillStyle=o[c],n.beginPath(),n.arc(h,s*.55,s*.2,0,6.3),n.fill(),n.fillStyle=P.ink,n.font=`700 ${s*.17}px ${ge}`,n.textAlign="center",n.textBaseline="middle",n.fillText(l,h,s*.56),c<4&&(n.strokeStyle=P.inkSoft,n.lineWidth=4,n.beginPath(),n.moveTo(h+s*.25,s*.55),n.lineTo(h+i*.2-s*.25,s*.55),n.stroke())}),n.fillStyle=P.inkSoft,n.font=`600 ${s*.12}px ${Tn}`,n.fillText("机器学习：让计算机从数据中找到规律",i/2,s*.14)}),e.mesh.position.set(1.9,1.75,.05),t.add(e.mesh),t.add(nt(7.3,.5,.1,"#D9CDB8",0,0,.01,.02)),t.add(nt(1.5,1,.03,P.cream,-2.4,1.2,.045,.03)),t.add(nt(1.36,.86,.035,"#CFE3EC",-2.4,1.27,.05,.02)),t.add(_e(.03,.86,.04,P.cream,-2.4,1.27,.055)),this.pop(t,0,-3.55,{order:0})}buildStations(){const t=new Jt,e=nt(3.2,2.62,.06,"#E7EEF0",0,0,0,.03);e.position.set(0,ti.y+2.62/2*Math.cos(ti.lean),-1.31*Math.sin(ti.lean)-.035),e.rotation.x=-.3,t.add(e),t.add(nt(3.2,.5,.5,P.sand,0,0,-.2,.03)),[-1.4,1.4].forEach(M=>{const E=_e(.06,2.4,.06,P.warmGray,M,0,-.95);E.rotation.x=.12,t.add(E)});const n=$e("训练样本 · 20 张",{w:1.5,h:.24,bg:P.cream,border:P.techDark});n.position.set(0,.26,.055),t.add(n),this.station(t,ti.x,ti.z,"stand","数据样本展示台");const i=Xt(nt(3.4,.5,1,"#EADFCB",0,0,0,.04),nt(3.5,.06,1.08,P.sand,0,.5,0,.02)),s=(M,E,T)=>{const C=Ol[E],b=Xt(nt(1.36,.04,.86,C,M,.56,0,.02));b.add(nt(1.36,.16,.04,C,M,.56,.43,.02),nt(1.36,.3,.04,C,M,.56,-.43,.02)),b.add(nt(.04,.2,.86,C,M-.68,.56,0,.02),nt(.04,.2,.86,C,M+.68,.56,0,.02));const S=$e(T,{w:.5,h:.26,bg:P.cream,border:C,font:Tn});return S.position.set(M,.3,.505),b.add(S),b};i.add(s(-.87,"cat","猫"),s(.87,"dog","狗")),i.add(nt(.3,.06,.22,P.ink,0,.56,.2,.02));const a=nt(.1,.5,.03,P.inkSoft,0,.6,.1,.01);a.rotation.x=-.25,i.add(a),this.station(i,-1.85,.5,"label","图像标注工作台");const o=Xt(nt(1.3,2,.8,"#6E828C",0,0,0,.05));o.add(nt(1.14,.78,.04,P.ink,0,1.08,.4,.04,{roughness:.5})),this.hostScreen=new Fn(1.04,.68,{ppu:260,lit:!1}),this.hostScreen.mesh.position.set(0,1.47,.425),o.add(this.hostScreen.mesh),this.leds=[...Array(6)].map((M,E)=>{const T=new St(new Ai(.04,10,8),new Me({color:P.mint,emissive:P.mint,emissiveIntensity:.05}));return T.position.set(-.45+E*.18,.9,.41),o.add(T),T});for(let M=0;M<4;M++)o.add(nt(1,.05,.03,"#566A74",0,.2+M*.14,.4,.01));const l=$e("AI 训练主机",{w:.9,h:.2,bg:P.cream,border:P.ink});l.position.set(0,2.14,.3),o.add(l,_e(.04,.1,.04,P.ink,0,2,.3)),this.station(o,1.3,-2.55,"host","AI 训练主机"),this.drawHost({state:"idle"});const c=Xt(fa(.8,.5,.7));this.net=new Jt,this.net.position.y=1.2;const h=[3,4,2],u=[P.tech,P.coral,P.mint],d=h.map((M,E)=>[...Array(M)].map((T,C)=>{const b=(C-(M-1)/2)*.27,S=Zn(.085,u[E],(E-1)*.3,b,0,12,10,{emissive:u[E],emissiveIntensity:.05});return this.net.add(S),S}));this.netNodes=d.flat();const f=Mn(P.inkSoft);for(let M=0;M<2;M++)d[M].forEach(E=>d[M+1].forEach(T=>{const C=T.position.clone().sub(E.position),b=new St(new Ls(.01,.01,C.length(),5),f);b.position.copy(E.position).add(C.clone().multiplyScalar(.5)),b.quaternion.setFromUnitVectors(new I(0,1,0),C.clone().normalize()),this.net.add(b)}));c.add(this.net);const g=$e("模型",{w:.5,h:.2,bg:P.cream,border:P.coralDark});g.position.set(0,.26,.36),c.add(g),this.station(c,3,-2,"model","模型训练设备");const _=Xt(nt(1.1,.5,.85,"#DCE9DF",0,0,0,.04),nt(1.2,.06,.95,P.mintDark,0,.5,0,.02));[-.5,.5].forEach(M=>_.add(_e(.06,1,.06,P.inkSoft,M,.56,-.2))),_.add(nt(1.12,.1,.14,P.inkSoft,0,1.5,-.2,.03)),this.scanLight=new St(new Pe(.8,.02,.05),new Me({color:P.mint,emissive:P.mint,emissiveIntensity:.1})),this.scanLight.position.set(0,1.49,-.2),_.add(this.scanLight);const m=$e("测试平台",{w:.7,h:.2,bg:P.cream,border:P.mintDark});m.position.set(0,.26,.43),_.add(m),_.add(_e(.06,1,.06,P.inkSoft,1.22,0,-.3));const p=nt(1.4,.92,.06,P.ink,1.22,.92,-.26,.04,{roughness:.5});p.rotation.y=-.3,_.add(p),this.resultScreen=new Fn(1.28,.8,{ppu:240,lit:!1}),this.resultScreen.mesh.position.set(0,0,.035),p.add(this.resultScreen.mesh),this.station(_,1.9,.5,"test","测试平台"),this.drawResult(null);const y=new Jt,x=nt(2.2,.98,.05,"#DCE9DF",0,0,0,.02);x.position.set(0,ei.y+.47*Math.cos(ei.lean),-.47*Math.sin(ei.lean)-.03),x.rotation.x=-.95,y.add(x,_e(2.2,.12,.1,P.mintDark,0,0,.03));const v=$e("测试样本 · 10 张（不参与训练）",{w:1.9,h:.16,bg:P.cream,fg:P.ink});v.rotation.x=-Math.PI/2,v.position.set(0,.012,.22),y.add(v),this.station(y,ei.x,ei.z,"rack","测试样本架",{dir:"front"})}buildCards(){this.cardsPop=new Sp(0,0,{order:2}),this.group.add(this.cardsPop),this.popups.push(this.cardsPop),this.cards={};const t=Mn(P.cream),e=(n,i)=>{const s=new Me({map:Bn(n.canvas),roughness:.9}),a=De(new St(new Pe(i,i,.02),[t,t,t,t,s,t])),o=new St(new Pe(i,i*.14,.024),new Me({color:P.tech,roughness:.9}));o.position.y=i*.5+i*.05,o.visible=!1,o.userData.noOutline=!0,a.add(o);const l={id:n.id,mesh:a,tag:o,front:s,sample:n,where:"home"};return this.cards[n.id]=l,this.cardsPop.add(a),this.clickable(a,{id:n.id,label:n.set==="train"?`训练样本 ${n.id}`:`测试样本 ${n.id}`,hint:n.set==="train"?"点击选择并标注":"点击送去测试",onClick:()=>this.ui.onSample(n.id)}),l};this.dataset.train.forEach((n,i)=>{const s=e(n,.5);s.home=this.standSlot(i),this.place(s,s.home,0)}),this.dataset.test.forEach((n,i)=>{const s=e(n,.36);s.home=this.rackSlot(i),this.place(s,s.home,0)})}standSlot(t){const e=t%5,i=.38+(3-Math.floor(t/5))*.585;return{pos:[ti.x+(e-2)*.59,ti.y+i*Math.cos(ti.lean),ti.z-i*Math.sin(ti.lean)+.02],rx:-.3,scale:1}}rackSlot(t){const e=t%5,i=.24+(1-Math.floor(t/5))*.42;return{pos:[ei.x+(e-2)*.42,ei.y+i*Math.cos(ei.lean)+.03,ei.z-i*Math.sin(ei.lean)],rx:-.95,scale:1}}traySlot(t,e){const[n,i,s]=X1[t];return{pos:[n+(e%2?.32:-.32),i+.3,s-.3+Math.floor(e/2)*.072],rx:-.22,scale:1}}place(t,e,n=.55,i=0){const s=t.mesh;if(pe.killTweensOf([s.position,s.rotation,s.scale]),!n){s.position.set(...e.pos),s.rotation.set(e.rx,0,0),s.scale.setScalar(e.scale);return}const[a,o,l]=e.pos;pe.to(s.position,{x:a,z:l,duration:n,delay:i,ease:"power2.inOut"}),pe.to(s.position,{y:Math.max(o,s.position.y)+.5,duration:n/2,delay:i,ease:"power2.out"}),pe.to(s.position,{y:o,duration:n/2,delay:i+n/2,ease:"power2.in"}),pe.to(s.rotation,{x:e.rx,y:0,z:0,duration:n,delay:i,ease:"power2.inOut"}),pe.to(s.scale,{x:e.scale,y:e.scale,z:e.scale,duration:n,delay:i,ease:"power2.inOut"})}syncCards(t,e=[],n=null,i=!0){const s={cat:0,dog:0};this.dataset.train.forEach((a,o)=>{const l=this.cards[a.id],c=t[a.id],h=e.includes(a.id);let u,d;a.id===n?(u={pos:q1,rx:-.25,scale:1.3},d="easel"):c&&!h?(u=this.traySlot(c,s[c]++),d=c+":"+(s[c]-1)):(u=l.home,d="home"),l.tag.visible=!!c,c&&l.tag.material.color.set(Ol[c]),l.front.color.set(h?"#9A9A9A":"#FFFFFF"),l.where!==d&&(l.where=d,this.place(l,u,i?.55:0,i?o%6*.03:0))})}showTest(t,e){this.dataset.test.forEach(n=>{const i=this.cards[n.id],s=n.id===t,a=s?"platform":"home";i.where!==a&&(i.where=a,this.place(i,s?{pos:Y1,rx:-.12,scale:1.7}:i.home,.5))}),t&&pe.fromTo(this.scanLight.material,{emissiveIntensity:1.2},{emissiveIntensity:.1,duration:.9}),this.drawResult(e)}drawHost(t){this.hostInfo=t,this.hostScreen.draw((e,n,i)=>{e.fillStyle="#22303A",e.fillRect(0,0,n,i),e.fillStyle="#BFE3D0",e.font=`700 ${i*.12}px ${ge}`,e.textAlign="left",e.textBaseline="alphabetic";const s={idle:"等待训练数据",training:"正在训练…",done:"训练完成",error:"训练失败"}[t.state];if(e.fillText(s,n*.06,i*.17),e.font=`500 ${i*.085}px ${ge}`,e.fillStyle="#E8F1EC",t.state==="idle"){e.fillText("标注样本后点击“开始训练”",n*.06,i*.34);return}if(t.state==="error"){e.fillStyle="#F2B8A8",e.fillText(String(t.message||"").slice(0,22),n*.06,i*.34);return}e.fillText(`第 ${t.epoch}/${t.total} 轮   损失 ${t.loss.toFixed(3)}`,n*.06,i*.32),e.fillText(`训练集正确率 ${(t.acc*100).toFixed(0)}%   样本 ${t.samples}`,n*.06,i*.44);const a=t.history||[],o=n*.06,l=i*.92,c=n*.88,h=i*.4;if(e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=2,e.strokeRect(o,l-h,c,h),a.length>1){const u=Math.max(...a,.7);e.strokeStyle="#E6A18C",e.lineWidth=4,e.beginPath(),a.forEach((d,f)=>{const g=o+f/(t.total-1)*c,_=l-d/u*h*.94;f?e.lineTo(g,_):e.moveTo(g,_)}),e.stroke()}})}drawResult(t){this.resultScreen.draw((e,n,i)=>{if(e.fillStyle="#F4F1E8",e.fillRect(0,0,n,i),e.textAlign="center",e.textBaseline="middle",e.fillStyle=P.inkSoft,e.font=`600 ${i*.11}px ${ge}`,e.fillText("预测结果显示屏",n/2,i*.13),!t){e.fillStyle=P.ink,e.font=`600 ${i*.12}px ${ge}`,e.fillText("把测试样本放上平台",n/2,i*.5);return}const s={cat:"猫",dog:"狗"};e.fillStyle=Ol[t.pred],e.font=`700 ${i*.26}px ${Tn}`,e.fillText(`预测：${s[t.pred]}`,n/2,i*.4),e.fillStyle=P.ink,e.font=`600 ${i*.115}px ${ge}`,e.fillText(`置信度 ${(t.conf*100).toFixed(0)}%    实际：${s[t.actual]}`,n/2,i*.64),e.fillStyle=t.correct?P.mintDark:P.coralDark,Ne(e,n*.28,i*.75,n*.44,i*.17,14),e.fill(),e.fillStyle="#fff",e.fillText(t.correct?"预测正确":"预测错误",n/2,i*.84)})}setTraining(t){this.trainingOn=t,t||(this.leds.forEach(e=>e.material.emissiveIntensity=.05),this.netNodes.forEach(e=>e.material.emissiveIntensity=.05))}highlight(t){const e=this.byId[t];e&&this.select(e.root)}update(t,e){super.update(t,e),this.trainingOn&&(this.net.rotation.y+=t*1.6,this.leds.forEach((n,i)=>n.material.emissiveIntensity=.15+.9*Math.max(0,Math.sin(e*9-i*.9))),this.netNodes.forEach((n,i)=>n.material.emissiveIntensity=.1+.5*Math.max(0,Math.sin(e*6+i))))}drawGround(t,e,n,i){const s=c=>(c+ye.UX/2)*i,a=c=>(c+ye.UZ/2)*i;t.fillStyle="#F1ECDF",t.fillRect(0,0,e,n),t.strokeStyle="rgba(150,135,105,0.18)",t.lineWidth=1.5;for(let c=0;c<=e;c+=76)t.beginPath(),t.moveTo(c,0),t.lineTo(c,n),t.moveTo(0,c),t.lineTo(e,c),t.stroke();const o=(c,h,u,d,f,g)=>{t.fillStyle=f,Ne(t,s(c),a(h),u*i,d*i,24),t.fill(),t.fillStyle="rgba(52,67,74,0.6)",t.font=`700 22px ${ge}`,t.textAlign="left",t.textBaseline="top",t.fillText(g,s(c)+14,a(h+d)-34)};o(-3.65,-3,3.6,4.35,"rgba(135,181,201,0.28)","① 数据区：样本与标注"),o(.3,-3.3,3.35,2.35,"rgba(230,161,140,0.26)","② 训练区"),o(1.05,-.2,2.6,3.75,"rgba(184,214,191,0.42)","③ 测试区"),t.strokeStyle="rgba(52,67,74,0.45)",t.fillStyle="rgba(52,67,74,0.45)",t.lineWidth=5;const l=(c,h,u,d)=>{t.beginPath(),t.moveTo(s(c),a(h)),t.lineTo(s(u),a(d)),t.stroke();const f=Math.atan2(a(d)-a(h),s(u)-s(c));t.beginPath(),t.moveTo(s(u),a(d)),t.lineTo(s(u)-16*Math.cos(f-.5),a(d)-16*Math.sin(f-.5)),t.lineTo(s(u)-16*Math.cos(f+.5),a(d)-16*Math.sin(f+.5)),t.closePath(),t.fill()};l(-.3,-1.6,.5,-1.9),l(1.9,-.85,1.9,-.3),t.fillStyle="#F6F1E4",t.beginPath(),t.arc(s(.15),a(2.6),1*i,0,6.3),t.fill()}}const Z1={no:1.05,unsure:0,yes:-1.05};class K1 extends Vo{build(){this.buildHall(),this.buildStations();const t=this.def.characters;this.addCharacter(Ar(t.student,{top:P.coral,bottom:"#56666F",hair:"#2F2A28",hairStyle:"pony"}),-1.45,2.5,.3),this.addCharacter(Ar(t.teacher,{top:"#7F9C8A",coat:"#8FAE9A",bottom:"#4E5D66",hair:"#6B5B4E",hairStyle:"bun",glasses:!0,scale:.92}),-.3,2.7,.05),this.addCharacter(Rh(t.assistant,{accent:P.coral,light:"#FBE3B0"}),1.95,-1.3,-.35,2)}station(t,e,n,i,s,a={}){const o=this.pop(t,e,n,{order:1,...a});return this.clickable(t,{id:i,label:s,hint:"点击了解它的作用",onClick:()=>this.ui.onStation(i)}),o}buildHall(){const t=Xt(nt(7.3,2.7,.08,"#F1EADB",0,0,0,.03));[-3.3,3.3].forEach(n=>t.add(nt(.4,2.7,.2,"#E2D6BE",n,0,.06,.04))),t.add(nt(7.3,.36,.2,"#E2D6BE",0,2.5,.06,.04));const e=$e("AI 判断中心 · 先核验，再相信",{w:4.2,h:.34,bg:P.cream,border:P.coralDark,font:Tn});e.position.set(0,2.14,.17),t.add(e),this.pop(t,0,-3.56,{order:0})}buildStations(){const t=Xt(nt(1.7,2.2,.55,P.brown,0,0,0,.03)),e=[P.tech,P.coral,P.mint,P.mustard,P.cream,P.greenDark,P.techDark];for(let v=0;v<3;v++){t.add(_e(1.54,.56,.06,"#8E6B4C",0,.2+v*.66,.26));let M=-.7,E=v*3;for(;M<.62;){const T=.1+E*7%5*.022,C=.36+E*5%4*.045;t.add(nt(T,C,.3,e[E%e.length],M+T/2,.22+v*.66,.2,.012)),M+=T+.016,E+=1}}const n=$e("资料柜",{w:.7,h:.2,bg:P.cream,border:P.brown});n.position.set(0,2.32,.2),t.add(n,_e(.04,.12,.04,P.brown,0,2.2,.2)),this.station(t,-2.7,-2.8,"shelf","书籍资料柜");const i=Xt(nt(1.2,.1,.5,P.sand,0,0,0,.03),_e(.12,.6,.12,P.inkSoft,0,.1,0));i.add(nt(2.9,1.7,.08,P.ink,0,.62,0,.05,{roughness:.5})),this.infoScreen=new Fn(2.76,1.56,{ppu:170,lit:!1}),this.infoScreen.mesh.position.set(0,1.47,.045),i.add(this.infoScreen.mesh),this.station(i,.05,-2.85,"screen","信息展示屏"),this.drawInfo(null);const s=Xt(nt(1.5,.75,.6,"#E4EEF0",0,0,0,.06),nt(1.6,.06,.7,P.tech,0,.75,0,.02)),a=$e("AI 信息咨询台",{w:1.2,h:.24,bg:P.cream,border:P.techDark});a.position.set(0,.4,.305),s.add(a),s.add(oe(.02,.02,.3,P.ink,.5,.81,0,6),Zn(.07,P.mustard,.5,1.15,0,10,8)),this.station(s,2.75,-2.45,"desk","AI 信息咨询台");const o=Xt(nt(1.4,.6,.75,"#EADFCB",0,0,0,.04),nt(1.5,.05,.85,P.sand,0,.6,0,.02)),l=nt(.7,.46,.05,P.ink,-.2,.78,-.1,.03);l.rotation.x=-.15,o.add(l,_e(.08,.14,.08,P.inkSoft,-.2,.65,-.14));const c=$e("🔍 检索资料",{w:.62,h:.38,bg:"#E9EFF1",fg:P.ink,size:.3,radius:.08,lit:!1});c.position.set(0,0,.03),l.add(c),o.add(nt(.5,.03,.2,P.warmGray,-.2,.65,.22,.01)),o.add(nt(.36,.26,.4,P.brown,.42,.65,0,.02)),[0,1,2].forEach(v=>o.add(nt(.3,.2+v*.03,.02,P.cream,.42,.72,-.1+v*.1,.005)));const h=$e("资料检索台",{w:.9,h:.2,bg:P.cream,border:P.brown});h.position.set(0,.3,.38),o.add(h),this.station(o,-2.8,-.75,"search","资料检索台");const u=Xt(nt(2.5,.5,1.3,"#DCE9DF",0,0,0,.05),nt(2.62,.06,1.42,P.mintDark,0,.5,0,.02)),d=$e("证据核验区",{w:.9,h:.2,bg:P.cream,border:P.mintDark});d.position.set(0,.26,.655),u.add(d),this.station(u,-.15,.3,"evidence","证据核验区");const f=Xt(nt(.7,.06,.5,P.ink,0,0,0,.02));this.devLid=new Jt,this.devLid.position.set(0,.06,-.25),this.devLid.add(nt(.7,.04,.5,P.techDark,0,0,.25,.02)),f.add(this.devLid),this.devArm=new Jt,this.devArm.position.set(0,.06,.05),this.devArm.add(oe(.015,.015,.36,P.inkSoft,0,0,0,6));const g=new St(new es(.15,.025,8,24),Zn(.01,P.mustard).material);g.position.y=.5,this.devArm.add(g);const _=new St(new Uo(.14,20),new Me({color:"#DDEFF5",transparent:!0,opacity:.55,roughness:.2}));_.position.y=.5,_.userData.noOutline=!0,this.devArm.add(_),this.devArm.scale.y=.01,f.add(this.devArm);const m=this.pop(f,-.15,.1,{order:2});m.base.y=.56,m.apply(),this.evCards=[0,1,2,3].map(v=>{const M=new Jt,E=nt(.56,.72,.025,P.cream,0,0,0,.012),T=new Fn(.52,.68,{ppu:300});T.mesh.position.set(0,.36,.014),E.rotation.x=-.5,E.add(T.mesh),T.mesh.position.set(0,0,.014),M.add(E);const C=this.pop(M,-1.05+v*.6,.72,{order:2});return C.base.y=.58,C.apply(),this.clickable(M,{id:"ev"+v,label:`证据卡 ${v+1}`,hint:"点击选择 / 取消",onClick:()=>this.ui.onEvidenceCard(v)}),{holder:M,card:E,panel:T,pop:C}}),this.setEvidence([],[]);const p=Xt(fa(.9,.5,.6),_e(.08,.5,.08,P.inkSoft,0,.55,0));p.add(nt(1.7,1.02,.08,P.cream,0,1,0,.05));const y=new Fn(1.6,.92,{ppu:220});y.draw((v,M,E)=>{v.fillStyle="#FBF8F0",v.fillRect(0,0,M,E);const T=M/2,C=E*.86,b=E*.7;[[Math.PI,Math.PI*1.333,P.coral,"不支持"],[Math.PI*1.333,Math.PI*1.667,P.sand,"证据不足"],[Math.PI*1.667,Math.PI*2,P.mint,"支持"]].forEach(([D,k,N,B])=>{v.fillStyle=N,v.beginPath(),v.moveTo(T,C),v.arc(T,C,b,D,k),v.closePath(),v.fill();const W=(D+k)/2;v.fillStyle=P.ink,v.font=`700 ${E*.1}px ${ge}`,v.textAlign="center",v.textBaseline="middle",v.fillText(B,T+Math.cos(W)*b*.68,C+Math.sin(W)*b*.68)}),v.fillStyle="#FBF8F0",v.beginPath(),v.arc(T,C,b*.26,Math.PI,Math.PI*2),v.fill(),v.fillStyle=P.inkSoft,v.font=`600 ${E*.075}px ${ge}`,v.fillText("事实判断仪表",T,E*.06)}),y.mesh.position.set(0,1.51,.045),p.add(y.mesh),this.needle=new Jt,this.needle.position.set(0,1.18,.06);const x=nt(.04,.56,.02,P.ink,0,0,0,.01);x.userData.noOutline=!0,this.needle.add(x,oe(.06,.06,.03,P.ink,0,-.015,0,14)),this.needle.children[1].rotation.x=Math.PI/2,this.needle.children[1].position.set(0,0,0),p.add(this.needle),this.station(p,2.7,.85,"gauge","事实判断仪表",{yaw:-.3}),this.pop(Tr(1.1),-3.4,1.4,{order:2,dir:"left"}),this.pop(Tr(1,P.greenDark),3.45,2.9,{order:2,dir:"right"})}drawInfo(t,e=-1){this.infoScreen.draw((n,i,s)=>{if(n.fillStyle="#F7F4EC",n.fillRect(0,0,i,s),n.textBaseline="top",n.textAlign="left",!t){n.fillStyle=P.ink,n.font=`700 ${s*.1}px ${Tn}`,n.textAlign="center",n.fillText("请在右侧页面选择一个 AI 回答案例",i/2,s*.42);return}n.fillStyle=P.coralDark,n.font=`700 ${s*.07}px ${ge}`,n.fillText(`案例 ${t.id} · 提问`,i*.04,s*.05),n.fillStyle=P.ink,n.font=`700 ${s*.085}px ${Tn}`,n.fillText(t.question,i*.04,s*.15),n.fillStyle=P.techDark,n.font=`700 ${s*.07}px ${ge}`,n.fillText("AI 的回答",i*.04,s*.3),n.fillStyle=P.ink,n.font=`500 ${s*.068}px ${ge}`;const a=t.answer.map(o=>o.text).join("");Ll(n,a,i*.04,s*.4,i*.92,s*.095,6),e>=0&&(n.fillStyle=P.coralDark,n.font=`700 ${s*.06}px ${ge}`,n.fillText(`正在核验：主张 ${e+1}`,i*.04,s*.9))})}setEvidence(t,e=[]){this.evCards.forEach((n,i)=>{const s=t[i];if(n.holder.visible=!!s,!s)return;const a=e.includes(i);n.panel.draw((o,l,c)=>{o.fillStyle=a?"#E3F0E5":"#FBF8F0",o.fillRect(0,0,l,c),o.fillStyle=a?P.mintDark:P.techDark,o.fillRect(0,0,l,c*.2),o.fillStyle="#fff",o.font=`700 ${c*.1}px ${ge}`,o.textBaseline="middle",o.textAlign="left",o.fillText(`证据 ${i+1}${a?" ✓":""}`,l*.07,c*.105),o.fillStyle=P.ink,o.font=`600 ${c*.085}px ${ge}`,o.textBaseline="top",Ll(o,s.source,l*.07,c*.26,l*.86,c*.11,2),o.fillStyle=P.inkSoft,o.font=`500 ${c*.07}px ${ge}`,Ll(o,s.text,l*.07,c*.5,l*.86,c*.092,5)}),pe.to(n.card.position,{y:.36+(a?.12:0),duration:.25})})}setVerdict(t){pe.to(this.needle.rotation,{z:Z1[t]??0,duration:.9,ease:"elastic.out(1,0.55)"})}openDevice(t){pe.to(this.devLid.rotation,{x:t?-1.9:0,duration:.6,ease:"back.out(1.3)"}),pe.to(this.devArm.scale,{y:t?1:.01,duration:.6,delay:t?.25:0,ease:"back.out(1.5)"})}highlight(t){const e=this.byId[t];e&&this.select(e.root)}drawGround(t,e,n,i){const s=o=>(o+ye.UX/2)*i,a=o=>(o+ye.UZ/2)*i;t.fillStyle="#F0E9D9",t.fillRect(0,0,e,n),t.strokeStyle="rgba(150,125,90,0.20)",t.lineWidth=1.5;for(let o=-n;o<n*2;o+=44)for(let l=0;l<e;l+=88)t.beginPath(),t.moveTo(l,o),t.lineTo(l+44,o+44),t.lineTo(l+88,o),t.stroke();t.fillStyle="rgba(184,214,191,0.55)",t.beginPath(),t.ellipse(s(-.15),a(.5),2.3*i,1.5*i,0,0,6.3),t.fill(),t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=4,t.setLineDash([12,10]),t.beginPath(),t.ellipse(s(-.15),a(.5),2.1*i,1.32*i,0,0,6.3),t.stroke(),t.setLineDash([]),t.fillStyle="rgba(52,67,74,0.6)",t.font=`700 22px ${ge}`,t.textAlign="center",t.fillText("① 找出主张",s(.05),a(-1.75)),t.fillText("② 查找证据",s(-2.75),a(.1)),t.fillText("③ 核验判断",s(2.65),a(1.7)),t.fillStyle="#F6F1E4",t.beginPath(),t.arc(s(-.85),a(2.7),1*i,0,6.3),t.fill()}}class J1 extends Vo{build(){const t=Xt(_e(.14,2.3,.14,P.brown,-2.6,0,0),_e(.14,2.3,.14,P.brown,2.6,0,0));t.add(nt(5.6,.7,.06,P.cream,0,1.75,.02,.04));const e=$e("我的 AI 探索报告",{w:5.2,h:.56,bg:P.cream,border:P.coralDark,font:Tn,size:.62});e.position.set(0,2.1,.055),t.add(e),[-2.2,-1.1,0,1.1,2.2].forEach((c,h)=>{const u=new St(new Fo(.16,.3,3),Mn([P.tech,P.coral,P.mint,P.mustard,P.tech][h]));u.rotation.z=Math.PI,u.rotation.y=Math.PI/6,u.position.set(c,1.58,.04),u.scale.z=.25,t.add(De(u))}),this.pop(t,0,-2.9,{order:0});const n=[{key:"city",label:"认识 AI",x:-2.3,build:()=>Xt(nt(.5,.36,.4,"#F4E9D6",0,0,0,.02),mp(.6,.24,.46,P.coral,0,.36,0))},{key:"lab",label:"理解 AI",x:0,build:()=>Xt(nt(.5,.5,.3,"#6E828C",0,0,0,.03),nt(.36,.22,.02,"#BFE3D0",0,.2,.16,.02))},{key:"verify",label:"判断 AI",x:2.3,build:()=>{const c=Xt(nt(.6,.36,.06,P.cream,0,.1,0,.03),_e(.06,.12,.06,P.inkSoft,0,0,0)),h=_e(.03,.24,.02,P.ink,0,.16,.04);return h.rotation.z=-.6,c.add(h),c}}];this.flags={},n.forEach(c=>{const h=Xt(fa(1,.6,.8)),u=c.build();u.position.y=.65,u.scale.setScalar(1.25),h.add(u);const d=$e(c.label,{w:.8,h:.22,bg:P.cream,border:P.ink,font:Tn});d.position.set(0,.32,.41),h.add(d);const f=Dp(1,P.mintDark);f.position.set(.38,.65,-.25),f.scale.y=.01,f.visible=!1,h.add(f),this.flags[c.key]=f,this.pop(h,c.x,-1.2,{order:1})});const i=Xt(oe(.7,.8,.3,P.sand,0,0,0,28),oe(.5,.55,.3,P.cream,0,.3,0,28));this.medal=new Jt,this.medal.position.y=1.15;const s=oe(.36,.36,.07,P.mustard,0,0,0,30,{metalness:.25,roughness:.5});s.rotation.x=Math.PI/2,s.position.set(0,0,0),this.medal.add(s);const a=new Dr;for(let c=0;c<10;c++){const h=c%2?.1:.23,u=c/10*Math.PI*2+Math.PI/2;a[c?"lineTo":"moveTo"](Math.cos(u)*h,Math.sin(u)*h)}const o=new ga(a,{depth:.09,bevelEnabled:!1});o.translate(0,0,-.045),this.medal.add(De(new St(o,Mn(P.cream)))),i.add(this.medal,oe(.03,.03,.5,P.coralDark,0,.6,0,8)),this.pop(i,0,.7,{order:1}),this.pop(Tr(1.2),-3.3,.6,{order:2,dir:"left"}),this.pop(Tr(1.1,P.greenDark),3.3,.4,{order:2,dir:"right"});const l=this.def.characters;this.addCharacter(Rh(l.guide),1.35,2.3,-.35),this.addCharacter(Ar(l.student,{top:P.mustard,bottom:"#5E6E75",pack:P.coral}),-1.35,2.3,.35)}refresh(){const t=this.app.state.data;["city","lab","verify"].forEach(e=>{const n=!!t[e].done,i=this.flags[e];n&&!i.visible?(i.visible=!0,pe.to(i.scale,{y:1,duration:.7,ease:"back.out(1.6)"})):n||(i.visible=!1,i.scale.y=.01)})}activate(){super.activate(),this.refresh(),Object.values(this.characters).forEach((t,e)=>setTimeout(()=>this.active&&t.wave(),300+e*500))}update(t,e){super.update(t,e),this.medal.rotation.y+=t*.8}drawGround(t,e,n,i){const s=o=>(o+ye.UX/2)*i,a=o=>(o+ye.UZ/2)*i;t.fillStyle="#F3EDDF",t.fillRect(0,0,e,n),t.strokeStyle="rgba(135,181,201,0.45)",t.lineWidth=3;for(let o=.8;o<6;o+=.8)t.beginPath(),t.arc(s(0),a(.7),o*i,0,6.3),t.stroke();t.strokeStyle="rgba(201,128,106,0.7)",t.lineWidth=6,t.setLineDash([16,12]),t.beginPath(),t.moveTo(s(-2.3),a(-.5)),t.quadraticCurveTo(s(0),a(.2),s(2.3),a(-.5)),t.stroke(),t.setLineDash([]),t.fillStyle="rgba(52,67,74,0.6)",t.font=`700 24px ${Tn}`,t.textAlign="center",t.fillText("认识 AI  →  理解 AI  →  判断 AI",s(0),a(3.3))}}const Pd=[["input","输入信息"],["process","系统处理"],["output","输出结果"]];class Q1 extends zo{constructor(t,e){super(t,e),this.pred=new Set(this.st.prediction||[]),this.picked=null,this.checked=null;const n=this.def.matchDevices.flatMap(i=>Pd.map(([s])=>`${i}:${s}`));this.pool=n.map((i,s)=>[(s*7+3)*13%11,i]).sort((i,s)=>i[0]-s[0]).map(i=>i[1])}dev(t){return this.def.devices.find(e=>e.id===t)}judgedCount(){return Object.keys(this.st.judged).length}maxStep(){const t=this.st;return t.prediction?this.judgedCount()<this.def.minJudged?1:t.match.done?3:2:0}taskHint(){return{predict:"先凭经验猜一猜：哪些设备用到了人工智能？",explore:`点击城市里的设备，判断它们的主要工作方式（至少 ${this.def.minJudged} 种）。`,match:"把输入、处理方式和输出放到对应的位置。",wrap:"对照你的预测，说说“自动化”和“人工智能”的区别。"}[this.stepId]}onDevice(t){const e=this.st;if(!e.prediction){this.app.toast("先在右侧页面记录你的预测，再来探索设备");return}e.current=t,e.viewed.includes(t)||e.viewed.push(t),e.step!==1&&(e.step=1),this.save(),this.app.ui.render(),this.app.ui.scrollTop("right")}task(){return this[`t_${this.stepId}`]()}t_predict(){const t=this.st;return`
      <h3 class="q">先猜一猜：下面哪些设备“用到了人工智能”？<small>（可多选）</small></h3>
      <div class="opts two">${this.def.devices.map(e=>`<button class="opt check ${this.pred.has(e.id)?"sel":""}" data-act="pred" data-id="${e.id}"><i>${e.no}</i>${tt(e.name)}</button>`).join("")}</div>
      ${t.prediction?`<div class="fb info">已记录你的预测（${t.prediction.length} 种）。接下来到城市里逐个验证吧。</div>`:""}
      <div class="next-row"><button class="btn primary" data-act="pred-save" ${this.pred.size?"":"disabled"}>${t.prediction?"更新预测并继续":"记录我的预测"} →</button></div>`}t_explore(){const t=this.st,e=t.current&&this.dev(t.current),n=this.judgedCount(),i=e&&t.judged[e.id];return`
      <div class="dev-chips">${this.def.devices.map(s=>`<button class="chip ${t.current===s.id?"on":""} ${t.judged[s.id]?"ok":""}" data-act="dev" data-id="${s.id}"><i>${s.no}</i>${tt(s.name)}${t.judged[s.id]?" ✓":""}</button>`).join("")}</div>
      ${e?`<div class="card">
          <h4>${e.no} · ${tt(e.name)}</h4>
          <div class="flow">
            <div class="fl in"><b>输入信息</b>${tt(e.input)}</div><span class="arr">→</span>
            <div class="fl pr"><b>系统处理</b>${tt(e.process)}</div><span class="arr">→</span>
            <div class="fl out"><b>输出结果</b>${tt(e.output)}</div>
          </div>
          <h3 class="q">它主要靠哪种方式工作？</h3>
          <div class="opts">${this.def.judgeOptions.map(s=>`<button class="opt ${i&&i.choice===s.id?i.correct?"ok":"bad":""}" data-act="judge" data-id="${s.id}" ${i!=null&&i.correct?"disabled":""}>${tt(s.text)}</button>`).join("")}</div>
          ${i?`<div class="fb ${i.correct?"ok":"bad"}"><b>${i.correct?"判断正确":"再想一想"}</b>${i.correct?tt(e.why):e.kind==="ai"?"提示：它面对的情况千变万化，能用几条固定的“如果……就……”规则写全吗？":"提示：它的做法会随着“见过的数据”改变吗？还是始终执行同一条固定规则？"}</div>`:""}
        </div>`:'<div class="fb info"><b>怎样探索</b>点击立体城市中带编号的设备（或上方的名称），观察它的输入、处理和输出，再判断它的工作方式。</div>'}
      <div class="stat-row"><span>已判断 <b>${n}</b> / ${this.def.devices.length} 种设备</span><span class="muted">至少 ${this.def.minJudged} 种</span></div>
      ${this.nextBtn(n>=this.def.minJudged,"继续：输入与输出",`还需判断 ${Math.max(0,this.def.minJudged-n)} 种`)}`}chipText(t){const[e,n]=t.split(":");return this.dev(e)[n]}t_match(){const t=this.st.match,e=new Set(Object.values(t.placed));return`
      <h3 class="q">把卡片拖到（或先点卡片、再点空格）对应的位置</h3>
      <div class="match">${this.def.matchDevices.map(n=>{const i=this.dev(n);return`<div class="m-row"><div class="m-name">${tt(i.name)}</div>${Pd.map(([s,a])=>{const o=`${n}:${s}`,l=t.placed[o];return`<div class="slot ${this.checked&&l?l===o?"ok":"bad":""} ${l?"filled":""}" data-act="slot" data-key="${o}" data-drop="slot"><small>${a}</small>${l?`<span>${tt(this.chipText(l))}</span>`:""}</div>`}).join("")}</div>`}).join("")}</div>
      ${t.done?"":`<div class="pool">${this.pool.filter(n=>!e.has(n)).map(n=>`<button class="mchip ${this.picked===n?"sel":""}" draggable="true" data-act="pick" data-id="${n}" data-drag="${n}">${tt(this.chipText(n))}</button>`).join("")}</div>`}
      ${t.done?'<div class="fb ok"><b>全部匹配正确</b>不管是不是人工智能，信息系统都可以用“输入 → 处理 → 输出”来描述。区别在“处理”这一步：是固定规则，还是从数据中训练出来的模型。</div>':this.checked?`<div class="fb bad"><b>还有 ${this.checked.wrong} 处需要调整</b>点击标红的格子可以取回卡片。想一想：这条信息是设备“接收到的”，还是它“给出的结果”？</div>`:""}
      ${t.done?this.nextBtn(!0,"继续：小结"):`<div class="next-row"><button class="btn primary" data-act="match-check" ${e.size===this.pool.length?"":"disabled"}>检查匹配</button></div>`}`}t_wrap(){const t=this.st,e=new Set(t.prediction||[]);return`
      <h3 class="q">对照你的预测</h3>
      <table class="tbl"><tr><th>设备</th><th>我的预测</th><th>主要工作方式</th></tr>
      ${this.def.devices.map(n=>{const i=e.has(n.id);return`<tr class="${i===(n.kind==="ai")?"":"diff"}"><td>${tt(n.name)}</td><td>${i?"用到 AI":"没用到"}</td><td>${n.kind==="ai"?"人工智能（模型）":"规则控制"}${t.judged[n.id]?"":' <span class="muted">未探索</span>'}</td></tr>`}).join("")}</table>
      <div class="fb info"><b>我的发现</b>能自动运行，不一定就是人工智能。判断的关键是“处理”这一步：<br>· <b>规则控制</b>：按人写好的固定规则办事；<br>· <b>人工智能</b>：依靠从大量数据中训练出来的模型来识别或判断。<br>一个产品里也常常两种方式都有。</div>
      ${this.finishBlock("你已经能用“输入—处理—输出”分析身边的设备了。")}`}handle(t,e){const n=this.st;switch(t){case"pred":return this.pred.has(e.id)?this.pred.delete(e.id):this.pred.add(e.id),this.refresh("right");case"pred-save":{n.prediction=[...this.pred];const i=n.prediction.map(s=>this.dev(s).name).join("、");return this.log("predict",`预测：我认为用到人工智能的设备有 ${i}。`),this.goStep(1)}case"dev":this.scene.onDevice(e.id);return;case"judge":{const i=this.dev(n.current),s=e.id===i.kind,a=n.judged[i.id];return n.judged[i.id]={choice:e.id,correct:s,first:a?a.first:s},s&&this.log("judge",`判断“${i.name}”：${i.kind==="ai"?"人工智能":"规则控制"}（${n.judged[i.id].first?"首次判断正确":"修正后正确"}）。`),this.save(),this.app.ui.render()}case"pick":return this.picked=this.picked===e.id?null:e.id,this.refresh("right");case"slot":{const i=n.match;return i.done?void 0:(i.placed[e.key]&&!this.picked?delete i.placed[e.key]:this.picked&&(i.placed[e.key]=this.picked,this.picked=null),this.checked=null,this.save(),this.refresh("right"))}case"match-check":{const i=n.match;i.attempts+=1;const s=Object.entries(i.placed).filter(([a,o])=>a!==o).length;return this.checked={wrong:s},i.firstTry===null&&(i.firstTry=s===0),s===0&&(i.done=!0,this.log("match",`完成“输入—处理—输出”匹配（尝试 ${i.attempts} 次）。`)),this.save(),this.app.ui.render()}}}onDrop(t,e){const n=this.st.match;n.done||!e.dataset.key||(n.placed[e.dataset.key]=t,this.picked=null,this.checked=null,this.save(),this.refresh("right"))}}class Co{constructor(t,e){this.dataset=t,this.trainer=e}async evaluate(t){return(await this.trainer.predict(t)).map(n=>{const i=n.cat>=n.dog?"cat":"dog",s=this.dataset.get(n.id).cls;return{id:n.id,pred:i,conf:Math.max(n.cat,n.dog),actual:s,correct:i===s,cat:n.cat,dog:n.dog}})}async evaluateAll(){const t=await this.evaluate(this.dataset.test.map(e=>e.id));return Co.summarize(t)}static summarize(t){const e=n=>t.filter(n).length;return{n:t.length,correct:e(n=>n.correct),acc:t.length?e(n=>n.correct)/t.length:0,catN:e(n=>n.actual==="cat"),catCorrect:e(n=>n.actual==="cat"&&n.correct),dogN:e(n=>n.actual==="dog"),dogCorrect:e(n=>n.actual==="dog"&&n.correct),details:t}}}const Zs={cat:"猫",dog:"狗"},kl=44;class tM extends zo{constructor(t,e){super(t,e),this.ds=t.dataset,this.trainer=new QS(this.ds),this.evaluator=new Co(this.ds,this.trainer),this.train={state:"idle"},this.busy=!1,this.modelRun=null,this.tested={},this.testPick=null,this.showWrong=!1,this.view=null}stats(){return this.ds.stats(this.st.labels)}maxStep(){const t=this.st;if(!t.prediction)return 0;if(this.stats().labeled<this.ds.train.length)return 1;if(!t.runs.length)return 2;if(!t.runs.some(n=>n.test))return 3;const e=fo(t);return!(e.B||e.C)||!t.explainChoice?4:5}taskHint(){return{know:"观察训练图片，想一想模型可以依据哪些特征来区分猫和狗。",label:"为 20 张训练图片逐一贴上“猫”或“狗”的标签。",train:"用你标注的数据训练模型，观察训练过程中的数值变化。",test:"用模型没见过的 10 张图片测试它。",compare:"改变数据条件重新训练，用同一组测试图片比较结果。",wrap:"总结数据、标签、训练、模型和预测之间的关系。"}[this.stepId]}enter(){const t=this.st,e=this.scene,n=this.stepId;n==="label"?e.syncCards(t.labels,[],t.selected):n==="compare"&&this.lastCond?e.syncCards(this.lastCond.labels,this.lastCond.excluded):e.syncCards(t.labels,[]),n!=="test"&&e.showTest(null,null)}onStation(t){this.scene.highlight(t),this.showConcept(this.def.stations[t])}onSample(t){const e=this.ds.get(t),n=this.st;if(e.set==="train"){if(this.stepId==="know")return this.view=t,this.refresh("right");if(this.stepId!=="label"){if(this.maxStep()<1)return this.app.toast("先完成“认识数据”中的预测");if(this.busy)return;n.step=1}n.selected=t,this.save(),this.enter(),this.app.ui.render()}else{if(!this.trainer.model)return this.app.toast("模型还没有训练，暂时不能测试");if(this.busy)return;this.stepId!=="test"&&(n.step=3,this.save(),this.enter()),this.testOne(t)}}task(){return this[`t_${this.stepId}`]()}thumb(t,{act:e,cls:n="",badge:i=""}={}){return`<button class="thumb ${n}" data-act="${e}" data-id="${t.id}" draggable="${e==="sel"?"true":"false"}" data-drag="${t.id}" title="${t.id}"><img src="${t.url}" alt="样本 ${t.id}" draggable="false">${i}</button>`}t_know(){const t=this.st,e=this.def.predict,n=this.view&&this.ds.get(this.view);return`
      <h3 class="q">${tt(e.q)}</h3>
      <div class="opts">${e.options.map(i=>`<button class="opt ${t.prediction===i.id?"sel":""}" data-act="pred" data-id="${i.id}">${tt(i.text)}</button>`).join("")}</div>
      ${t.prediction?'<div class="fb info">已记录你的想法。接下来用实验检验它。</div>':""}
      <h3 class="q">观察训练图片 <small>点击图片放大</small></h3>
      <div class="thumbs">${this.ds.train.map(i=>this.thumb(i,{act:"view",cls:this.view===i.id?"on":""})).join("")}</div>
      ${n?`<div class="preview"><img src="${n.url}" alt=""><div><b>样本 ${n.id}</b><p>仔细看：耳朵的形状、口鼻、胡须、尾巴、体型……哪些特征能帮助区分猫和狗？颜色和背景可靠吗？</p></div></div>`:""}
      <div class="fb info"><b>两份数据</b>训练集 20 张：用来让模型学习。测试集 10 张：放在右前方的样本架上，<u>从不参与训练</u>，留着最后检验模型。</div>
      ${this.nextBtn(!!t.prediction,"继续：标注数据","先选择你的预测")}`}t_label(){const t=this.st,e=this.stats(),n=t.selected&&this.ds.get(t.selected),i=e.labeled===e.total;return`
      <div class="label-top">
        ${n?`<div class="preview big"><img src="${n.url}" alt=""><div><b>样本 ${n.id}</b><p>${t.labels[n.id]?`当前标签：<b>${Zs[t.labels[n.id]]}</b>（可修改）`:"它是猫还是狗？"}</p>
            <div class="lab-btns"><button class="btn cat" data-act="lab" data-v="cat" data-drop="cat">猫</button><button class="btn dog" data-act="lab" data-v="dog" data-drop="dog">狗</button></div></div></div>`:`<div class="fb info"><b>怎样标注</b>点击下面的图片（或立体展示台上的卡片）选中它，再点“猫”或“狗”。也可以把图片直接拖到按钮上。</div>
            <div class="lab-btns"><button class="btn cat" data-drop="cat" disabled>猫</button><button class="btn dog" data-drop="dog" disabled>狗</button></div>`}
      </div>
      <div class="thumbs">${this.ds.train.map(s=>{const a=t.labels[s.id],o=this.showWrong&&a&&a!==s.cls;return this.thumb(s,{act:"sel",cls:`${t.selected===s.id?"on":""} ${a?"lab-"+a:""} ${o?"wrong":""}`,badge:a?`<em>${Zs[a]}</em>`:""})}).join("")}</div>
      <div class="stats">
        <div><b>${e.labeled}</b>/${e.total}<small>已标注</small></div>
        <div><b>${e.cat}</b><small>猫</small></div>
        <div><b>${e.dog}</b><small>狗</small></div>
        <div><b>${i?e.wrong.length:"—"}</b><small>错误标签</small></div>
      </div>
      <div class="bar2"><i style="width:${e.labeled?e.cat/e.labeled*100:50}%"></i></div>
      <div class="bar2-cap"><span>猫 ${e.cat}</span><span>样本分布</span><span>狗 ${e.dog}</span></div>
      ${i?`<div class="fb ${e.wrong.length?"bad":"ok"}"><b>标注检查</b>${e.wrong.length?`有 ${e.wrong.length} 张图片的标签与真实类别不一致。<button class="link" data-act="show-wrong">${this.showWrong?"隐藏":"显示是哪些"}</button> 你可以修改它们，也可以先保留，看看对模型有什么影响。`:"全部标签与真实类别一致。"}</div>`:""}
      ${this.app.state.data.teacher&&!i?'<button class="btn sm ghost" data-act="auto-label">教师模式：按真实类别标注其余样本</button>':""}
      ${this.nextBtn(i,"继续：训练模型",`还有 ${e.total-e.labeled} 张未标注`)}`}trainBox(){const t=this.train;if(t.state==="idle")return"";if(t.state==="error")return`<div class="fb bad"><b>训练没有成功</b>${tt(t.message)}<br><span class="muted">可能的原因：浏览器不支持所需的计算功能，或内存不足。请换用新版 Chrome / Edge 后重试。</span></div>`;const e=Math.round((t.epoch||0)/t.total*100);return`<div class="train-box ${t.state}">
      <div class="tb-head"><b id="tb-title">${t.state==="training"?"正在训练…":"训练完成"}</b><span id="tb-ep">第 ${t.epoch||0}/${t.total} 轮</span></div>
      <div class="pbar"><i id="tb-bar" style="width:${e}%"></i></div>
      <div class="tb-nums"><span>损失 <b id="tb-loss">${t.loss!=null?t.loss.toFixed(3):"—"}</b></span><span>训练集正确率 <b id="tb-acc">${t.acc!=null?(t.acc*100).toFixed(0)+"%":"—"}</b></span><span>训练样本 <b>${t.samples}</b></span></div>
      ${t.state==="done"?`<div class="muted">用时 ${t.seconds.toFixed(1)} 秒 · 计算后端 ${tt(t.backend)} · 训练在你的浏览器中真实执行</div>`:'<div class="muted">“损失”表示模型猜得有多不准，通常会逐渐变小。</div>'}
    </div>`}t_train(){const t=this.stats(),e=this.st.runs.length>0;return`
      <h3 class="q">用你标注的数据训练模型</h3>
      <div class="stats">
        <div><b>${t.labeled}</b><small>训练样本</small></div>
        <div><b>${t.cat}</b><small>标为猫</small></div>
        <div><b>${t.dog}</b><small>标为狗</small></div>
        <div><b>${t.wrong.length}</b><small>错误标签</small></div>
      </div>
      <div class="fb info"><b>训练时发生了什么</b>算法会把这些图片看 ${kl} 轮：每一轮都让模型先猜，再对照你给的标签，一点点调整模型。</div>
      ${this.trainBox()}
      <div class="next-row"><button class="btn primary" data-act="train" data-cond="A" ${this.busy?"disabled":""}>${this.busy?"训练中…":e?"重新训练":"开始训练"}</button></div>
      ${e&&!this.busy?this.nextBtn(!0,"继续：测试模型"):""}`}resultRow(t){const e=this.ds.get(t.id);return`<tr class="${t.correct?"":"diff"}"><td><img class="tiny" src="${e.url}" alt=""></td><td>${Zs[t.pred]}</td><td>${(t.conf*100).toFixed(0)}%</td><td>${Zs[t.actual]}</td><td>${t.correct?"✓ 正确":"✗ 错误"}</td></tr>`}t_test(){if(!this.trainer.model)return`<div class="fb info"><b>需要先训练模型</b>模型保存在浏览器内存中，${this.st.runs.length?"刷新页面后需要重新训练。":"请先完成训练。"}</div><div class="next-row"><button class="btn primary" data-act="step" data-i="2">去训练模型</button></div>`;const t=Object.values(this.tested),e=t.length,n=t.filter(a=>a.correct).length,i=this.testPick&&this.tested[this.testPick],s=e===this.ds.test.length;return`
      <h3 class="q">测试：模型没见过的 10 张图片 <small>点击图片送上测试平台</small></h3>
      <div class="thumbs test">${this.ds.test.map(a=>{const o=this.tested[a.id];return this.thumb(a,{act:"test",cls:`${this.testPick===a.id?"on":""} ${o?o.correct?"ok":"wrong":""}`,badge:o?`<em>${o.correct?"✓":"✗"}</em>`:""})}).join("")}</div>
      ${i?`<div class="card result ${i.correct?"ok":"bad"}"><img src="${this.ds.get(i.id).url}" alt=""><div>
          <div class="kv"><span>预测类别</span><b>${Zs[i.pred]}</b></div>
          <div class="kv"><span>预测置信度</span><b>${(i.conf*100).toFixed(0)}%</b></div>
          <div class="kv"><span>实际类别</span><b>${Zs[i.actual]}</b></div>
          <div class="kv"><span>判断</span><b>${i.correct?"预测正确":"预测错误"}</b></div></div></div>`:""}
      <div class="stats"><div><b>${e}</b><small>测试样本数</small></div><div><b>${n}</b><small>预测正确数</small></div><div><b>${e?Math.round(n/e*100)+"%":"—"}</b><small>正确率</small></div></div>
      <div class="next-row"><button class="btn" data-act="test-all" ${this.busy?"disabled":""}>测试全部 10 张</button></div>
      ${s?`<table class="tbl sm"><tr><th>图片</th><th>预测</th><th>置信度</th><th>实际</th><th>结果</th></tr>${t.map(a=>this.resultRow(a)).join("")}</table>`:""}
      <div class="fb info"><b>注意</b>置信度表示模型对这次判断的“把握程度”，<u>不等于预测一定正确</u>——模型也可能很有把握地判断错。</div>
      ${this.nextBtn(s,"继续：对比实验","先测试全部 10 张")}`}t_compare(){const t=this.st,e=this.def.conditions,n=fo(t),i={};t.runs.forEach(a=>a.test&&(i[a.cond]=(i[a.cond]||0)+1));const s=!!(n.B||n.C);return`
      <h3 class="q">为什么 AI 会出错？改变数据条件，再比一比</h3>
      <div class="conds">${["A","B","C"].map(a=>`<div class="cond ${this.train.cond===a&&this.busy?"run":""}"><div><b>${e[a].name}</b> ${tt(e[a].title)}<p>${tt(e[a].desc)}</p></div><button class="btn sm" data-act="train" data-cond="${a}" ${this.busy?"disabled":""}>${i[a]?"再做一次":"训练并测试"}</button></div>`).join("")}</div>
      ${this.trainBox()}
      <table class="tbl sm"><tr><th>条件</th><th>训练样本<br>猫 / 狗</th><th>错误<br>标签</th><th>测试<br>正确率</th><th>猫</th><th>狗</th><th>次数</th></tr>
      ${["A","B","C"].map(a=>{const o=n[a];return o?`<tr><td>${e[a].name}</td><td>${o.cat} / ${o.dog}</td><td>${o.wrong}</td><td><b>${o.test.correct}/${o.test.n}</b></td><td>${o.test.catCorrect}/${o.test.catN}</td><td>${o.test.dogCorrect}/${o.test.dogN}</td><td>${i[a]}</td></tr>`:`<tr class="muted"><td>${e[a].name}</td><td colspan="6">尚未运行</td></tr>`}).join("")}</table>
      <div class="muted">三种条件使用同一组 10 张测试图片。每次训练都从随机起点开始，同一条件多做几次，结果也可能不同。</div>
      ${s?`<h3 class="q">观察表格：为什么测试结果会发生变化？</h3>
        <div class="opts">${this.def.explainOptions.map(a=>`<button class="opt ${t.explainChoice===a.id?a.id==="data"?"ok":"bad":""}" data-act="explain" data-id="${a.id}">${tt(a.text)}</button>`).join("")}</div>
        ${t.explainChoice?`<div class="fb ${t.explainChoice==="data"?"ok":"bad"}">${t.explainChoice==="data"?"是的。模型只能从它看到的数据里学习：某一类样本太少，或者标签有错，它学到的规律就可能出现偏差。":t.explainChoice==="random"?"再看看表格：数据条件不同，猫和狗各自的正确数也跟着变化，这不是完全随机的。（不过每次训练确实带有一些随机性。）":"注意表格下方的说明：三种条件用的是同一组 10 张测试图片。"}</div>`:""}
        <label class="fld"><span>用自己的话写一写：你观察到了什么？</span><textarea data-input="explain" rows="3" placeholder="例如：当狗的训练图片只剩 2 张时……">${tt(t.explainText)}</textarea></label>`:'<div class="fb info">至少完成实验 B 或实验 C，再和实验 A 比较。</div>'}
      ${this.nextBtn(s&&!!t.explainChoice,"继续：小结",s?"先选择一种解释":"")}`}t_wrap(){var s;const t=this.st,e=fo(t),n=this.def.predict.options,i=[["一组训练数据标注",this.stats().labeled>=20],["一次真实模型训练",t.runs.length>0],["一次独立测试",t.runs.some(a=>a.test)],["一次数据条件调整",!!(e.B||e.C)],["一段关于预测结果变化的解释",!!t.explainChoice]];return`
      <h3 class="q">回到最初的问题</h3>
      <div class="fb info">你当初的想法：“${tt(((s=n.find(a=>a.id===t.prediction))==null?void 0:s.text)||"")}”<br><b>实验告诉我们：</b>模型没有“背下”图片，也没有人替它写好规则——它是从带标签的数据中找规律，再用规律去判断新图片。所以数据变了，它学到的规律也会变。</div>
      <ol class="sum">${this.def.summary.map(a=>`<li>${tt(a)}</li>`).join("")}</ol>
      <div class="callout"><b>特别提醒</b>${tt(this.def.emphasis)}</div>
      <h3 class="q">本页学习成果</h3>
      <ul class="checks">${i.map(([a,o])=>`<li class="${o?"ok":""}">${o?"✓":"○"} ${a}</li>`).join("")}</ul>
      ${this.finishBlock("你亲手标注了数据、训练并测试了一个模型，实验记录已保存。")}`}async run(t){if(this.busy)return;const e=this.st,n=this.ds.buildCondition(e.labels,t,{minor:"dog",keep:2,flips:6,seed:Date.now()%9e4+7}),i={};n.items.forEach(h=>i[h.id]=h.label),n.excluded.forEach(h=>i[h]=e.labels[h]),this.lastCond={labels:i,excluded:n.excluded};const s=n.items.filter(h=>h.label==="cat").length,a=n.items.length-s,o=n.items.filter(h=>h.label!==this.ds.get(h.id).cls).length,l=this.scene;this.busy=!0,this.modelRun=null,this.tested={},this.testPick=null,l.showTest(null,null),l.syncCards(i,n.excluded),l.setTraining(!0),l.highlight("host"),this.train={state:"training",cond:t,epoch:0,total:kl,loss:null,acc:null,samples:n.items.length,history:[]},this.app.ui.render();const c={id:Date.now(),t:Date.now(),cond:t,cat:s,dog:a,wrong:o,flipped:n.flipped.length,excluded:n.excluded.length,test:null};try{const h=await this.trainer.train(n.items,{epochs:kl,onEpoch:(u,d,f,g)=>{const _=this.train;Object.assign(_,{epoch:u,loss:f,acc:g}),_.history.push(f),l.drawHost({state:"training",epoch:u,total:d,loss:f,acc:g,samples:_.samples,history:_.history}),this.patchTrainBox()}});Object.assign(this.train,{state:"done",seconds:h.seconds,backend:h.backend}),Object.assign(c,{epochs:h.epochs,loss:h.loss,trainAcc:h.acc,seconds:h.seconds,backend:h.backend}),l.drawHost({...this.train,state:"done"}),this.modelRun=c,e.runs.push(c),e.runs.length>30&&e.runs.shift(),this.log("train",`${this.def.conditions[t].name}：用 猫${s}/狗${a} 张样本（错误标签 ${o}）完成训练，训练集正确率 ${(h.acc*100).toFixed(0)}%。`),this.stepId==="compare"&&await this.testAll(!0)}catch(h){console.error(h),this.train={state:"error",message:(h==null?void 0:h.message)||String(h)},l.drawHost({state:"error",message:this.train.message})}finally{l.setTraining(!1),this.busy=!1,this.save(),this.app.ui.render()}}patchTrainBox(){const t=this.train,e=this.app.ui.rightEl,n=(s,a)=>{const o=e.querySelector("#"+s);o&&(o.textContent=a)};n("tb-ep",`第 ${t.epoch}/${t.total} 轮`),n("tb-loss",t.loss.toFixed(3)),n("tb-acc",(t.acc*100).toFixed(0)+"%");const i=e.querySelector("#tb-bar");i&&(i.style.width=`${t.epoch/t.total*100}%`)}async testOne(t){if(this.trainer.model){try{const[e]=await this.evaluator.evaluate([t]);this.tested[t]=e,this.testPick=t,this.scene.showTest(t,e),this.scene.highlight("test"),this.finishTestIfAll()}catch(e){this.app.toast("测试失败："+((e==null?void 0:e.message)||e))}this.app.ui.render()}}finishTestIfAll(){const t=this.ds.test.map(e=>this.tested[e.id]);if(t.every(Boolean)&&this.modelRun&&!this.modelRun.test){const e=Co.summarize(t);this.modelRun.test={...e,details:e.details.map(n=>({id:n.id,pred:n.pred,conf:+n.conf.toFixed(3),correct:n.correct}))},this.log("test",`${this.def.conditions[this.modelRun.cond].name}：独立测试正确 ${e.correct}/${e.n}（猫 ${e.catCorrect}/${e.catN}，狗 ${e.dogCorrect}/${e.dogN}）。`),this.save()}}async testAll(t=!1){if(this.trainer.model){try{const e=await this.evaluator.evaluateAll();e.details.forEach(i=>this.tested[i.id]=i);const n=e.details.find(i=>!i.correct)||e.details[0];this.testPick=n.id,this.scene.showTest(n.id,n),this.finishTestIfAll()}catch(e){this.app.toast("测试失败："+((e==null?void 0:e.message)||e))}t||this.app.ui.render()}}handle(t,e){const n=this.st;switch(t){case"pred":return n.prediction=e.id,this.log("predict",`预测：${this.def.predict.options.find(i=>i.id===e.id).text}`),this.save(),this.app.ui.render();case"view":return this.view=e.id,this.scene.highlight(e.id),this.refresh("right");case"sel":return n.selected=n.selected===e.id?null:e.id,this.save(),this.enter(),this.refresh("right");case"lab":return this.setLabel(n.selected,e.v);case"show-wrong":return this.showWrong=!this.showWrong,this.refresh("right");case"auto-label":return this.ds.train.forEach(i=>n.labels[i.id]=n.labels[i.id]||i.cls),n.selected=null,this.log("label","教师模式：按真实类别完成其余样本的标注。"),this.save(),this.enter(),this.app.ui.render();case"train":return e.cond==="A"&&this.stepId==="train"&&(this.lastCond=null),this.run(e.cond);case"test":return this.testOne(e.id);case"test-all":return this.testAll();case"explain":return n.explainChoice=e.id,e.id==="data"&&this.log("explain","解释：训练数据不同，模型学到的规律不同，预测也随之变化。"),this.save(),this.app.ui.render()}}setLabel(t,e){if(!t||this.busy)return;const n=this.st,i=!n.labels[t];n.labels[t]=e;const s=this.ds.train.find(o=>!n.labels[o.id]);n.selected=i&&s?s.id:null;const a=this.stats();a.labeled===a.total&&i&&this.log("label",`完成 20 张训练图片的标注：猫 ${a.cat} 张，狗 ${a.dog} 张，与真实类别不一致 ${a.wrong.length} 张。`),this.save(),this.enter(),this.app.ui.render()}onInput(t,e){t==="explain"&&(this.st.explainText=e,this.save())}onDrop(t,e){const n=e.dataset.drop;this.stepId==="label"&&(n==="cat"||n==="dog")&&this.setLabel(t,n)}}const eM={support:["支持主张",!0],refute:["反驳主张",!0],partial:["只能部分说明",!0],limit:["说明了研究的局限",!0],weak:["来源不可靠",!1],irrelevant:["与主张无关",!1]};class nM extends zo{constructor(t,e){super(t,e),this.sel={}}get cases(){return this.def.cases}case_(t=this.st.caseId){return this.cases.find(e=>e.id===t)}claimKeys(){return this.cases.flatMap(t=>t.claims.map((e,n)=>`${t.id}:${n}`))}submittedCount(){return this.claimKeys().filter(t=>{var e;return(e=this.st.claims[t])==null?void 0:e.submitted}).length}maxStep(){var e,n;const t=this.st;return Object.keys(t.impressions).length<this.cases.length?0:this.submittedCount()<this.claimKeys().length?1:(e=t.revisions.B)!=null&&e.ok&&((n=t.revisions.C)!=null&&n.ok)?this.def.usage.every(i=>{var s;return(s=t.usage[i.id])==null?void 0:s.ok})?4:3:2}taskHint(){return{observe:"阅读三段 AI 回答，先说说你的第一印象。",evidence:"点击回答中的关键主张，选择相关证据并作出判断。",revise:"把有问题的回答改成符合证据范围的说法。",usage:"判断四种日常情境中，怎样使用 AI 才合理。",wrap:"总结负责任使用人工智能的要点。"}[this.stepId]}work(t){if(!this.sel[t]){const e=this.st.claims[t];this.sel[t]={picked:new Set((e==null?void 0:e.selected)||[]),verdict:(e==null?void 0:e.verdict)||null}}return this.sel[t]}enter(){var s;const t=this.st,e=this.case_(),n=this.scene,i=this.stepId;if(i==="evidence"){const a=`${e.id}:${t.claim}`,o=this.work(a);n.drawInfo(e,t.claim),n.setEvidence(e.claims[t.claim].evidence,[...o.picked]),n.setVerdict((s=t.claims[a])!=null&&s.submitted?t.claims[a].verdict:o.verdict||"unsure"),n.openDevice(!0)}else n.drawInfo(i==="observe"||i==="revise"?e:null),n.setEvidence([],[]),n.openDevice(!1),n.setVerdict("unsure")}onStation(t){this.scene.highlight(t),this.showConcept(this.def.stations[t])}onEvidenceCard(t){this.stepId==="evidence"&&this.toggleEvidence(t)}task(){return this[`t_${this.stepId}`]()}tabs(){const t=this.st;return`<div class="tabs">${this.cases.map(e=>`<button class="tab ${t.caseId===e.id?"on":""}" data-act="case" data-id="${e.id}">案例 ${e.id}</button>`).join("")}</div>`}answerHtml(t,e){return t.answer.map(n=>{if(n.claim==null)return tt(n.text);const i=this.st.claims[`${t.id}:${n.claim}`];return`<mark class="claim ${i!=null&&i.submitted?i.correct?"ok":"bad":""} ${this.st.claim===n.claim&&this.stepId==="evidence"?"on":""}" ${e?`data-act="claim" data-i="${n.claim}"`:""}>${tt(n.text)}<sup>主张${n.claim+1}</sup></mark>`}).join("")}t_observe(){const t=this.st,e=this.case_(),n=Object.keys(t.impressions).length===this.cases.length;return`
      ${this.tabs()}
      <div class="card qa"><div class="qa-q"><b>提问</b>${tt(e.question)}</div><div class="qa-a"><b>AI 的回答</b><p>${this.answerHtml(e,!1)}</p></div></div>
      <h3 class="q">凭第一印象：这段回答可靠吗？</h3>
      <div class="opts three">${this.def.firstImpression.map(i=>`<button class="opt ${t.impressions[e.id]===i.id?"sel":""}" data-act="impress" data-id="${i.id}">${tt(i.text)}</button>`).join("")}</div>
      <div class="muted">已记录 ${Object.keys(t.impressions).length}/${this.cases.length} 个案例的第一印象。标出颜色的句子，是回答中可以核查的“主张”。</div>
      ${this.nextBtn(n,"继续：寻找证据","三个案例都要看一看")}`}t_evidence(){const t=this.st,e=this.case_(),n=`${e.id}:${t.claim}`,i=e.claims[t.claim],s=t.claims[n],a=this.work(n),o=!!(s!=null&&s.submitted)&&s.correct;return`
      ${this.tabs()}
      <div class="card qa"><div class="qa-a"><b>AI 的回答</b> <small>点击标出的主张进行核验</small><p>${this.answerHtml(e,!0)}</p></div></div>
      <div class="claim-box"><b>正在核验 · 主张 ${t.claim+1}</b>${tt(i.text)}</div>
      ${e.note?`<div class="muted">${tt(e.note)}</div>`:""}
      <h3 class="q">① 哪些材料可以作为核验这条主张的证据？<small>（可多选）</small></h3>
      <div class="evs">${i.evidence.map((l,c)=>{const h=a.picked.has(c),[u,d]=eM[l.rel],f=s!=null&&s.submitted?`<div class="ev-fb ${h===d?"ok":"bad"}"><b>${u}</b>${tt(l.why)}${h===d?"":d?"（这条材料与主张有关，应当选上。）":"（这条材料不适合作为证据。）"}</div>`:"";return`<button class="ev ${h?"sel":""}" data-act="ev" data-i="${c}" ${o?"disabled":""}><span class="ev-src">证据 ${c+1} · ${tt(l.source)}</span><span class="ev-txt">${tt(l.text)}</span>${f}</button>`}).join("")}</div>
      <h3 class="q">② 根据证据，这条主张——</h3>
      <div class="opts three">${this.def.verdicts.map(l=>`<button class="opt ${a.verdict===l.id?s!=null&&s.submitted?l.id===i.answer?"ok":"bad":"sel":""}" data-act="verdict" data-id="${l.id}" ${o?"disabled":""}>${tt(l.text)}</button>`).join("")}</div>
      ${s!=null&&s.submitted?`<div class="fb ${s.correct?"ok":"bad"}"><b>${s.correct?"判断与证据一致":"再看看证据"}</b>${tt(i.feedback[s.verdict])}</div>`:""}
      ${o?"":`<div class="next-row"><button class="btn primary" data-act="submit" ${a.verdict&&a.picked.size?"":"disabled"}>提交判断</button></div>`}
      <div class="stat-row"><span>已核验主张 <b>${this.submittedCount()}</b> / ${this.claimKeys().length}</span><span class="muted">三个案例共 4 条</span></div>
      ${this.nextBtn(this.submittedCount()===this.claimKeys().length,"继续：修改回答","完成全部主张的核验")}`}revBlock(t){const e=t.revision,n=this.st.revisions[t.id];return`<div class="card"><h4>案例 ${t.id} · ${tt(t.tag)}</h4>
      <p class="orig">原回答：“${tt(e.target)}”</p>
      <h3 class="q">${tt(e.q)}</h3>
      <div class="opts">${e.options.map(i=>`<button class="opt ${(n==null?void 0:n.choice)===i.id?i.ok?"ok":"bad":""}" data-act="rev" data-case="${t.id}" data-id="${i.id}" ${n!=null&&n.ok?"disabled":""}>${tt(i.text)}</button>`).join("")}</div>
      ${n?`<div class="fb ${n.ok?"ok":"bad"}">${tt(e.options.find(i=>i.id===n.choice).why)}</div>`:""}</div>`}t_revise(){var i,s;const t=this.st,e=this.case_("B"),n=this.case_("C");return`
      ${this.revBlock(e)}
      <div class="card"><h4>案例 C · 先想清楚三个问题</h4>
      ${n.checks.map((a,o)=>{const l=t.checks[`C:${o}`];return`<div class="yn"><span>${tt(a.q)}</span><span class="yn-b"><button class="opt xs ${l?a.answer===!0?"ok":l.choice===!0?"bad":"":""}" data-act="check" data-i="${o}" data-v="1">是</button><button class="opt xs ${l?a.answer===!1?"ok":l.choice===!1?"bad":"":""}" data-act="check" data-i="${o}" data-v="0">否</button></span>${l?`<div class="fb ${l.ok?"ok":"bad"}">${tt(a.why)}</div>`:""}</div>`}).join("")}</div>
      ${this.revBlock(n)}
      <div class="fb info"><b>修改的原则</b>有证据反驳的错误要改正；证据不够时，保留“不确定”，不强行作出肯定或否定的结论。</div>
      ${this.nextBtn(!!((i=t.revisions.B)!=null&&i.ok&&((s=t.revisions.C)!=null&&s.ok)),"继续：合理使用 AI","完成两段回答的修改")}`}t_usage(){const t=this.st,e=this.def.usage.filter(n=>{var i;return(i=t.usage[n.id])==null?void 0:i.ok}).length;return`
      <h3 class="q">下面四种情境中，哪种做法更合理？</h3>
      ${this.def.usage.map(n=>{const i=t.usage[n.id];return`<div class="card"><h4>${tt(n.title)}</h4><p class="orig">${tt(n.situation)}</p>
          <div class="opts">${n.options.map(s=>`<button class="opt ${(i==null?void 0:i.choice)===s.id?s.ok?"ok":"bad":""}" data-act="use" data-u="${n.id}" data-id="${s.id}" ${i!=null&&i.ok?"disabled":""}>${tt(s.text)}</button>`).join("")}</div>
          ${i?`<div class="fb ${i.ok?"ok":"bad"}">${tt(n.options.find(s=>s.id===i.choice).why)}</div>`:""}</div>`}).join("")}
      <div class="stat-row"><span>已完成 <b>${e}</b> / ${this.def.usage.length} 个情境</span></div>
      ${this.nextBtn(e===this.def.usage.length,"继续：小结","完成四个情境的判断")}`}t_wrap(){var s;const t=this.st,e=this.claimKeys().filter(a=>{var o;return(o=t.claims[a])==null?void 0:o.first}).length,n=[["识别 AI 回答中的关键主张",this.submittedCount()>0],["选择相关证据进行核验",this.submittedCount()===this.claimKeys().length],["修正一段存在问题的回答",!!((s=t.revisions.B)!=null&&s.ok)],["完成 AI 负责任使用的情境判断",this.def.usage.every(a=>{var o;return(o=t.usage[a.id])==null?void 0:o.ok})]],i={trust:"可靠",unsure:"不确定",doubt:"不可靠"};return`
      <h3 class="q">第一印象 与 核验结果</h3>
      <table class="tbl"><tr><th>案例</th><th>我的第一印象</th><th>核验后发现</th></tr>
      ${this.cases.map(a=>`<tr><td>案例 ${a.id}</td><td>${i[t.impressions[a.id]]||"—"}</td><td>${tt(a.tag)}</td></tr>`).join("")}</table>
      <div class="fb info"><b>我的发现</b>三段回答读起来都很流畅、很自信，但只有经过核验才知道：一段基本正确，一段夹着事实错误，一段把证据不足的事说得过于肯定。4 条主张中，你有 ${e} 条首次判断就与证据一致。</div>
      <h3 class="q">合理使用人工智能</h3>
      <ol class="sum">${this.def.principles.map(a=>`<li>${tt(a)}</li>`).join("")}</ol>
      <ul class="checks">${n.map(([a,o])=>`<li class="${o?"ok":""}">${o?"✓":"○"} ${a}</li>`).join("")}</ul>
      ${this.finishBlock("你已经学会：先找主张，再看证据，最后作判断。课程总结已解锁。")}`}toggleEvidence(t){var s;const e=this.st,n=`${e.caseId}:${e.claim}`;if((s=e.claims[n])!=null&&s.submitted&&e.claims[n].correct)return;const i=this.work(n);i.picked.has(t)?i.picked.delete(t):i.picked.add(t),e.claims[n]&&(e.claims[n].submitted=!1),this.enter(),this.refresh("right")}handle(t,e){const n=this.st;switch(t){case"case":return n.caseId=e.id,n.claim=0,this.save(),this.enter(),this.refresh("right");case"impress":{const i=this.case_();n.impressions[i.id]=e.id,this.log("predict",`案例 ${i.id} 的第一印象：${this.def.firstImpression.find(a=>a.id===e.id).text}。`);const s=this.cases.find(a=>!n.impressions[a.id]);return s&&(n.caseId=s.id),this.save(),this.enter(),this.app.ui.render()}case"claim":return n.claim=+e.i,this.save(),this.enter(),this.refresh("right");case"ev":return this.toggleEvidence(+e.i);case"verdict":{const i=`${n.caseId}:${n.claim}`;return this.work(i).verdict=e.id,n.claims[i]&&(n.claims[i].submitted=!1),this.scene.setVerdict(e.id),this.refresh("right")}case"submit":{const i=this.case_(),s=`${i.id}:${n.claim}`,a=i.claims[n.claim],o=this.work(s),l=o.verdict===a.answer,c=n.claims[s];n.claims[s]={selected:[...o.picked],verdict:o.verdict,submitted:!0,correct:l,first:c?c.first:l};const h=this.def.verdicts.find(u=>u.id===o.verdict).text;return this.log("verify",`案例 ${i.id} 主张 ${n.claim+1}：选择证据 ${[...o.picked].map(u=>u+1).join("、")}，判断为“${h}”（${l?"与证据一致":"需要再核对"}）。`),this.scene.setVerdict(o.verdict),this.scene.highlight("gauge"),this.save(),this.app.ui.render()}case"rev":{const i=this.case_(e.case),s=i.revision.options.find(o=>o.id===e.id),a=n.revisions[i.id];return n.revisions[i.id]={choice:e.id,ok:s.ok,first:a?a.first:s.ok},s.ok&&this.log("revise",`修改案例 ${i.id} 的回答：“${s.text}”`),this.save(),this.app.ui.render()}case"check":{const i=this.case_("C").checks[+e.i],s=e.v==="1";return n.checks[`C:${e.i}`]={choice:s,ok:s===i.answer},this.save(),this.refresh("right")}case"use":{const i=this.def.usage.find(o=>o.id===e.u),s=i.options.find(o=>o.id===e.id),a=n.usage[i.id];return n.usage[i.id]={choice:e.id,ok:s.ok,first:a?a.first:s.ok},s.ok&&this.log("usage",`情境“${i.title}”：选择“${s.text}”`),this.save(),this.app.ui.render()}}}}function Dd(r,t,e){const n=new Blob([t],{type:e}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=r,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}class iM extends zo{get st(){return this.app.state.data.summary}enter(){this.scene.refresh()}left(){const t=this.def,e=dr(this.app.state.data);return`
      <div class="pg-head"><span class="unit">${tt(t.unit)} · 课程总结</span><span class="pg-tools"><button class="icon-btn" data-act="focus" data-side="left" title="放大 / 还原这一页">⤢</button></span></div>
      <h1>${tt(t.title)}</h1>
      <h2>${tt(t.question)}</h2>
      <p class="intro">${tt(t.intro)}</p>
      <section><h3>三个场景的完成情况</h3>
        ${e.scenes.map(n=>`<div class="rep-row ${n.done?"ok":""}"><b>${n.done?"✓":"○"} ${tt(n.title)}</b><span>${tt(n.detail)}</span></div>`).join("")}
      </section>
      <section><h3>学习表现</h3>
        ${e.abilities.map(n=>`<div class="abil ${n.level}"><div><b>${tt(n.name)}</b><em>${n.levelText}</em></div><span>${tt(n.evidence)}</span></div>`).join("")}
      </section>
      <section><h3>核心概念</h3>
        <div class="chips">${e.concepts.map(n=>`<span class="chip static ${n.ok?"ok":""}">${n.ok?"✓ ":""}${tt(n.name)}</span>`).join("")}</div>
        <div class="muted">打勾表示你已完成与该概念相关的探究任务。</div>
      </section>`}right(){const t=this.app.state.data,e=dr(t),n=uo.lab.conditions,i=this.app.dialogue;return`
      <div class="pg-head"><span class="unit">实验结果与反思</span><span class="pg-tools"><button class="icon-btn" data-act="focus" data-side="right" title="放大 / 还原这一页">⤢</button></span></div>
      ${i&&i.scene==="summary"?`<div class="dialogue" style="--who:${i.color}"><div class="who"><b>${tt(i.name)}</b><span>${tt(i.role)}</span></div><p>${tt(i.text)}</p><div class="dlg-tools"><button class="btn sm ghost" data-act="speak">▶ 朗读</button><button class="btn sm ghost" data-act="stop">■ 停止</button></div></div>`:""}
      <section><h3>模型训练和测试结果</h3>
        ${Object.keys(e.runs).length?`<table class="tbl sm"><tr><th>条件</th><th>训练样本<br>猫 / 狗</th><th>错误<br>标签</th><th>测试<br>正确率</th></tr>${["A","B","C"].filter(s=>e.runs[s]).map(s=>`<tr><td>${n[s].name}<br><small>${tt(n[s].title)}</small></td><td>${e.runs[s].cat} / ${e.runs[s].dog}</td><td>${e.runs[s].wrong}</td><td><b>${e.runs[s].test.correct}/${e.runs[s].test.n}</b></td></tr>`).join("")}</table>${t.lab.explainText?`<div class="fb info"><b>我的解释</b>${tt(t.lab.explainText)}</div>`:""}`:'<div class="muted">还没有完成带测试的模型训练。</div>'}
      </section>
      <section><h3>信息核验任务</h3>
        <div class="stats"><div><b>${e.claims.done}</b>/${e.claims.total}<small>已核验主张</small></div><div><b>${e.claims.right}</b><small>首次判断一致</small></div><div><b>${e.usage.done}</b>/${e.usage.total}<small>使用情境</small></div></div>
      </section>
      <section><h3>我的反思</h3>
        <label class="fld"><span>${tt(this.def.reflection)}</span><textarea data-input="reflection" rows="5" placeholder="写下你的想法……">${tt(this.st.reflection)}</textarea></label>
        <div class="next-row"><span class="muted" id="ref-state">${this.st.savedAt?"已保存在本机":""}</span><button class="btn primary" data-act="save-ref">保存反思</button></div>
      </section>
      <section><h3>导出学习记录</h3>
        <div class="next-row left"><button class="btn" data-act="export-json">导出 JSON</button><button class="btn" data-act="export-txt">导出文本</button></div>
        <div class="muted">${this.app.state.storageOk?"学习进度自动保存在这台设备的浏览器中。":"提示：当前浏览器无法使用本地存储，关闭页面后进度不会保留，请及时导出。"}</div>
      </section>`}onInput(t,e){t==="reflection"&&(this.st.reflection=e,this.st.savedAt=Date.now(),this.save())}handle(t){const e=this.app.state.data;switch(t){case"save-ref":return this.st.savedAt=Date.now(),this.st.reflection.trim()&&this.app.state.log("summary","reflect","写下了课程最终反思。"),this.save(),this.app.toast(this.st.reflection.trim()?"反思已保存":"还没有填写内容"),this.app.ui.render();case"export-json":return Dd("hello-ai-学习记录.json",JSON.stringify({course:"Hello, AI！走进人工智能的世界",exportedAt:new Date().toISOString(),report:dr(e),progress:e},null,2),"application/json"),this.app.toast("已导出 JSON 文件");case"export-txt":return Dd("hello-ai-学习记录.txt",Pp(e),"text/plain;charset=utf-8"),this.app.toast("已导出文本文件")}}}const sM={city:[W1,Q1],lab:[j1,tM],verify:[K1,nM],summary:[J1,iM]},rM={guide:"robot",assistant:"robot",student:"student",mentor:"teacher",teacher:"teacher"};class aM{constructor(){this.m={}}on(t,e){(this.m[t]=this.m[t]||[]).push(e)}emit(t,e){(this.m[t]||[]).forEach(n=>n(e))}}const ms=Ap;class oM{constructor(t){this.root=t,this.bus=new aM,this.state=new VS,this.dialogue=null,t.innerHTML='<div id="viewport"></div>',this.viewport=t.querySelector("#viewport"),this.ui=new H1(this,t),this.speech=new z1(()=>this.ui.current&&this.ui.render("right")),this.speech.setEnabled(this.state.data.voice),this.scenes=[],this.clock=new By,this.width=window.innerWidth}async start(){const t=this.ui;try{t.progress(.05,"准备三维渲染器…"),await ms();const e=document.createElement("canvas");if(!(e.getContext("webgl2")||e.getContext("webgl")))throw new Error("当前浏览器或设备不支持 WebGL，无法显示三维书本。");this.renderer=new fS(this.viewport),this.cam=new CS(this.renderer.webgl.domElement),this.interaction=new RS(this.renderer.webgl.domElement,this.cam.camera,t.tooltip),t.progress(.15,"绘制猫和狗的样本图片…"),await ms(),this.dataset=new qS,t.progress(.28,"装订精装书…"),await ms(),this.book=new BS(this);for(let i=0;i<Ei.length;i++){const s=Ei[i];t.progress(.36+i*.12,`折叠立体场景：${s.title}…`),await ms();const[a,o]=sM[s.key],l=new a(this,s);l.build(),l.ui=new o(this,l),this.scenes.push(l)}t.progress(.86,"印刷书页…"),await ms();const n=OS(Ei.map((i,s)=>({unit:i.unit,title:i.title,question:i.question,drawGround:(a,o,l,c)=>this.scenes[s].drawGround(a,o,l,c)})));this.book.init(n,this.scenes),t.progress(.94,"预热画面…"),await ms(),this.resize(),this.book.warmUp(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.interaction.setTargets([{root:this.book.model.clickTarget,label:"Hello, AI！",hint:"点击封面打开",active:!0,onClick:()=>this.openBook()}]),this.book.model.clickTarget.userData.interactive=this.interaction.targets[0],this.interaction.enabled=!0,this.bus.on("book:turning",()=>t.updateBar()),this.bus.on("spread:entered",()=>t.updateBar()),t.progress(1,"完成"),await ms(),pe.ticker.lagSmoothing(150,33),pe.ticker.add(()=>this.tick()),t.ready(),this.bus.on("book:opened",()=>setTimeout(()=>Cp().catch(()=>{}),2e3))}catch(e){console.error(e),t.loadError((e==null?void 0:e.message)||String(e))}}async openBook(){if(this.book.state!=="closed")return;this.interaction.enabled=!1,this.interaction.setTargets([]),this.ui.hint.classList.add("hidden"),await this.book.open(),this.ui.bar.classList.remove("hidden"),this.ui.updateBar();const t=Ei[0].characters.guide;this.state.data.city.prediction||this.say(this.scenes[0],t.id)}async turn(t){if(t<0||t>=this.scenes.length||this.book.busy)return;if(!this.state.unlocked(t))return this.toast("完成前面的学习任务后才能翻到这一页");this.cam.autoRotate=!1,this.dialogue=null;const e=this.book.turnTo(t);this.ui.updateBar(),await e,this.ui.updateBar()}say(t,e){const n=t.characters[e],i=t.ui.lineFor(e);!n||!i||(this.dialogue={scene:t.key,name:n.name,role:n.role,color:n.color,text:i},this.ui.render("right"),this.ui.caption(`${n.name}：${i}`),this.speech.speak(i,{key:t.ui.lineKey(e),kind:rM[e]||"teacher"}))}toast(t){this.ui.toast(t)}toggleFocus(t){if(this.book.state!=="open"||this.book.busy)return;this.cam.autoRotate=!1;const e=this.cam.mode===t?"open":t;this.cam.goto(e,.9).then(()=>this.ui.updateBar()),this.ui.updateBar()}resize(){const t=window.innerWidth,e=window.innerHeight;this.width=t,this.renderer.resize(t,e),this.cam.resize(t,e),this.book.wings.layout(this.cam.makeCamera("open"),t)}tick(){var n;const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;this.cam.update(t),this.book.state==="open"&&((n=this.scenes[this.book.index])==null||n.update(t,e)),this.interaction.update(),this.renderer.render(this.cam.camera)}}const Ip=new oM(document.getElementById("app"));Ip.start();window.__helloAI=Ip;
