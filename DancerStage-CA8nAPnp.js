import{r as Pe,j as _e,F as Ca}from"./DropdownInput-CFgHQpI_.js";import{O as Vn,k as Pa,S as La,E as cr,T as Da}from"./GameTypeRegistry-Dcf_mXRB.js";import{STAGE_LAYOUTS as Na}from"./StageLayouts-DdnDWifh.js";import{F as hr,g as r1,c as Ia,a as Ua,b as Fa,B as Oa}from"./app.js";import{F as a1}from"./ParityDataTypes-DHpat2kp.js";import{P as rn}from"./Simfile-CGmzsfum.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./preload-helper-DKEB-Rd8.js";const ws="187",Mn={ROTATE:0,DOLLY:1,PAN:2},Sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ba=0,ur=1,za=2,N1=1,Ha=2,Bn=3,je=0,Gt=1,te=2,yn=0,Wn=1,dr=2,fr=3,pr=4,Ga=5,vn=100,ka=101,Va=102,Wa=103,Xa=104,Ya=200,qa=201,Za=202,Ka=203,E3=204,b3=205,Ja=206,$a=207,Qa=208,ja=209,to=210,eo=211,no=212,io=213,so=214,Ii=0,Ui=1,Fi=2,Zn=3,Oi=4,Bi=5,zi=6,Hi=7,Rs=0,ro=1,ao=2,we=0,T3=1,A3=2,w3=3,R3=4,C3=5,P3=6,L3=7,D3=300,bn=301,Kn=302,ti=303,ei=304,Gi=1e3,Ae=1001,ki=1002,Ct=1003,oo=1004,o1=1005,Ht=1006,ni=1007,Oe=1008,Wt=1009,N3=1010,I3=1011,Jn=1012,Cs=1013,ue=1014,le=1015,de=1016,Ps=1017,Ls=1018,Tn=1020,U3=35902,F3=35899,O3=1021,B3=1022,ce=1023,ze=1026,Be=1027,z3=1028,Ds=1029,tn=1030,Ns=1031,Is=1033,I1=33776,U1=33777,F1=33778,O1=33779,Vi=35840,Wi=35841,Xi=35842,Yi=35843,qi=36196,Zi=37492,Ki=37496,Ji=37488,$i=37489,k1=37490,Qi=37491,ji=37808,ts=37809,es=37810,ns=37811,is=37812,ss=37813,rs=37814,as=37815,os=37816,ls=37817,cs=37818,hs=37819,us=37820,ds=37821,fs=36492,ps=36494,ms=36495,gs=36283,_s=36284,V1=36285,xs=36286,lo=3200,vs=0,co=1,Fe="",Ot="srgb",W1="srgb-linear",X1="linear",lt="srgb",ii=7680,ho=519,uo=512,fo=513,po=514,H3=515,mo=516,go=517,G3=518,k3=519,_o=35044,mr="300 es",ne=2e3,$n=2001;function xo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Y1(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vo(){const i=Y1("canvas");return i.style.display="block",i}const gr={};function _r(...i){const t="THREE."+i.shift();console.log(t,...i)}function V3(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function k0(...i){i=V3(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function rt(...i){i=V3(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function B1(...i){const t=i.join(" ");t in gr||(gr[t]=!0,k0(...i))}function So(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Mo={[Ii]:Ii,[Fi]:zi,[Oi]:Oi,[Zn]:Bi,[Ui]:Ui,[zi]:Fi,[Hi]:Hi,[Bi]:Zn};class ke{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],z1=Math.PI/180,Ss=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[t&255]+Nt[t>>8&255]+"-"+Nt[t>>16&15|64]+Nt[t>>24&255]+"-"+Nt[e&63|128]+Nt[e>>8&255]+"-"+Nt[e>>16&255]+Nt[e>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function J0(i,t,e){return Math.max(t,Math.min(e,i))}function yo(i,t){return(i%t+t)%t}function si(i,t,e){return(1-e)*i+e*t}function Eo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Us(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bo(i,t){if(t.constructor===Float32Array)return i;const e=Us(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function To(i,t){if(t.constructor===Float32Array)return i;const e=Us(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Ao={DEG2RAD:z1};class x0{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=J0(this.x,t.x,e.x),this.y=J0(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=J0(this.x,t,e),this.y=J0(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(J0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(J0(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],x=r[a+2],A=r[a+3];if(d!==A||c!==f||l!==u||h!==x){let m=c*f+l*u+h*x+d*A;m<0&&(f=-f,u=-u,x=-x,A=-A,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),v=Math.sin(E);p=Math.sin(p*E)/v,o=Math.sin(o*E)/v,c=c*p+f*o,l=l*p+u*o,h=h*p+x*o,d=d*p+A*o}else{c=c*p+f*o,l=l*p+u*o,h=h*p+x*o,d=d*p+A*o;const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],x=r[a+3];return t[e]=o*x+h*d+c*u-l*f,t[e+1]=c*x+h*f+l*d-o*u,t[e+2]=l*x+h*u+o*f-c*d,t[e+3]=h*x-o*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),u=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*x,this._y=l*u*d-f*h*x,this._z=l*h*x+f*u*d,this._w=l*h*d-f*u*x;break;case"YXZ":this._x=f*h*d+l*u*x,this._y=l*u*d-f*h*x,this._z=l*h*x-f*u*d,this._w=l*h*d+f*u*x;break;case"ZXY":this._x=f*h*d-l*u*x,this._y=l*u*d+f*h*x,this._z=l*h*x+f*u*d,this._w=l*h*d-f*u*x;break;case"ZYX":this._x=f*h*d-l*u*x,this._y=l*u*d+f*h*x,this._z=l*h*x-f*u*d,this._w=l*h*d+f*u*x;break;case"YZX":this._x=f*h*d+l*u*x,this._y=l*u*d+f*h*x,this._z=l*h*x-f*u*d,this._w=l*h*d-f*u*x;break;case"XZY":this._x=f*h*d-l*u*x,this._y=l*u*d-f*h*x,this._z=l*h*x+f*u*d,this._w=l*h*d+f*u*x;break;default:k0("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(J0(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=J0(this.x,t.x,e.x),this.y=J0(this.y,t.y,e.y),this.z=J0(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=J0(this.x,t,e),this.y=J0(this.y,t,e),this.z=J0(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(J0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ri.copy(this).projectOnVector(t),this.sub(ri)}reflect(t){return this.sub(ri.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(J0(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ri=new F,xr=new He;class W0{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],x=n[8],A=s[0],m=s[3],p=s[6],E=s[1],v=s[4],S=s[7],w=s[2],T=s[5],g=s[8];return r[0]=a*A+o*E+c*w,r[3]=a*m+o*v+c*T,r[6]=a*p+o*S+c*g,r[1]=l*A+h*E+d*w,r[4]=l*m+h*v+d*T,r[7]=l*p+h*S+d*g,r[2]=f*A+u*E+x*w,r[5]=f*m+u*v+x*T,r[8]=f*p+u*S+x*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,x=e*d+n*f+s*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/x;return t[0]=d*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=f*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=u*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return B1("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ai.makeScale(t,e)),this}rotate(t){return B1("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ai.makeRotation(-t)),this}translate(t,e){return B1("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ai.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ai=new W0,vr=new W0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sr=new W0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wo(){const i={enabled:!0,workingColorSpace:W1,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Re(s.r),s.g=Re(s.g),s.b=Re(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fe?X1:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[W1]:{primaries:t,whitePoint:n,transfer:X1,toXYZ:vr,fromXYZ:Sr,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:t,whitePoint:n,transfer:lt,toXYZ:vr,fromXYZ:Sr,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const et=wo();function Re(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function En(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let an;class Ro{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{an===void 0&&(an=Y1("canvas")),an.width=t.width,an.height=t.height;const s=an.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=an}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Y1("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Re(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Re(e[n]/255)*255):e[n]=Re(e[n]);return{data:e,width:t.width,height:t.height}}else return k0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Co=0;class Fs{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Co++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oi(s[a].image)):r.push(oi(s[a]))}else r=oi(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function oi(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(k0("Texture: Unable to serialize Texture."),{})}let Po=0;const li=new F;class Bt extends ke{constructor(t=Bt.DEFAULT_IMAGE,e=Bt.DEFAULT_MAPPING,n=Ae,s=Ae,r=Ht,a=Oe,o=ce,c=Wt,l=Bt.DEFAULT_ANISOTROPY,h=Fe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Po++}),this.uuid=Pn(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(li).x}get height(){return this.source.getSize(li).y}get depth(){return this.source.getSize(li).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){k0(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){k0(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D3)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case Ae:t.x=t.x<0?0:1;break;case ki:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case Ae:t.y=t.y<0?0:1;break;case ki:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=D3;Bt.DEFAULT_ANISOTROPY=1;class ct{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],x=c[9],A=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-A)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+A)<.1&&Math.abs(x+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(u+1)/2,w=(p+1)/2,T=(h+f)/4,g=(d+A)/4,M=(x+m)/4;return v>S&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=g/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=M/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-x)*(m-x)+(d-A)*(d-A)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(d-A)/E,this.z=(f-h)/E,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=J0(this.x,t.x,e.x),this.y=J0(this.y,t.y,e.y),this.z=J0(this.z,t.z,e.z),this.w=J0(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=J0(this.x,t,e),this.y=J0(this.y,t,e),this.z=J0(this.z,t,e),this.w=J0(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(J0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lo extends ke{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ct(0,0,t,e),this.scissorTest=!1,this.viewport=new ct(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Bt({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class he extends Lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class W3 extends Bt{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ae,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Do extends Bt{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ae,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class ot{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,d,f,u,x,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,u,x,A,m)}set(t,e,n,s,r,a,o,c,l,h,d,f,u,x,A,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=x,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/on.setFromMatrixColumn(t,0).length(),r=1/on.setFromMatrixColumn(t,1).length(),a=1/on.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,x=o*h,A=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+x*l,e[5]=f-A*l,e[9]=-o*c,e[2]=A-f*l,e[6]=x+u*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,u=c*d,x=l*h,A=l*d;e[0]=f+A*o,e[4]=x*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-x,e[6]=A+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,u=c*d,x=l*h,A=l*d;e[0]=f-A*o,e[4]=-a*d,e[8]=x+u*o,e[1]=u+x*o,e[5]=a*h,e[9]=A-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,u=a*d,x=o*h,A=o*d;e[0]=c*h,e[4]=x*l-u,e[8]=f*l+A,e[1]=c*d,e[5]=A*l+f,e[9]=u*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,u=a*l,x=o*c,A=o*l;e[0]=c*h,e[4]=A-f*d,e[8]=x*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+x,e[10]=f-A*d}else if(t.order==="XZY"){const f=a*c,u=a*l,x=o*c,A=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+A,e[5]=a*h,e[9]=u*d-x,e[2]=x*d-u,e[6]=o*h,e[10]=A*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(No,t,Io)}lookAt(t,e,n){const s=this.elements;return kt.subVectors(t,e),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Le.crossVectors(n,kt),Le.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Le.crossVectors(n,kt)),Le.normalize(),l1.crossVectors(kt,Le),s[0]=Le.x,s[4]=l1.x,s[8]=kt.x,s[1]=Le.y,s[5]=l1.y,s[9]=kt.y,s[2]=Le.z,s[6]=l1.z,s[10]=kt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],x=n[2],A=n[6],m=n[10],p=n[14],E=n[3],v=n[7],S=n[11],w=n[15],T=s[0],g=s[4],M=s[8],D=s[12],R=s[1],N=s[5],O=s[9],z=s[13],C=s[2],V=s[6],$=s[10],W=s[14],i0=s[3],B=s[7],Z=s[11],e0=s[15];return r[0]=a*T+o*R+c*C+l*i0,r[4]=a*g+o*N+c*V+l*B,r[8]=a*M+o*O+c*$+l*Z,r[12]=a*D+o*z+c*W+l*e0,r[1]=h*T+d*R+f*C+u*i0,r[5]=h*g+d*N+f*V+u*B,r[9]=h*M+d*O+f*$+u*Z,r[13]=h*D+d*z+f*W+u*e0,r[2]=x*T+A*R+m*C+p*i0,r[6]=x*g+A*N+m*V+p*B,r[10]=x*M+A*O+m*$+p*Z,r[14]=x*D+A*z+m*W+p*e0,r[3]=E*T+v*R+S*C+w*i0,r[7]=E*g+v*N+S*V+w*B,r[11]=E*M+v*O+S*$+w*Z,r[15]=E*D+v*z+S*W+w*e0,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],x=t[3],A=t[7],m=t[11],p=t[15],E=c*u-l*f,v=o*u-l*d,S=o*f-c*d,w=a*u-l*h,T=a*f-c*h,g=a*d-o*h;return e*(A*E-m*v+p*S)-n*(x*E-m*w+p*T)+s*(x*v-A*w+p*g)-r*(x*S-A*T+m*g)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],x=t[12],A=t[13],m=t[14],p=t[15],E=e*o-n*a,v=e*c-s*a,S=e*l-r*a,w=n*c-s*o,T=n*l-r*o,g=s*l-r*c,M=h*A-d*x,D=h*m-f*x,R=h*p-u*x,N=d*m-f*A,O=d*p-u*A,z=f*p-u*m,C=E*z-v*O+S*N+w*R-T*D+g*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/C;return t[0]=(o*z-c*O+l*N)*V,t[1]=(s*O-n*z-r*N)*V,t[2]=(A*g-m*T+p*w)*V,t[3]=(f*T-d*g-u*w)*V,t[4]=(c*R-a*z-l*D)*V,t[5]=(e*z-s*R+r*D)*V,t[6]=(m*S-x*g-p*v)*V,t[7]=(h*g-f*S+u*v)*V,t[8]=(a*O-o*R+l*M)*V,t[9]=(n*R-e*O-r*M)*V,t[10]=(x*T-A*S+p*E)*V,t[11]=(d*S-h*T-u*E)*V,t[12]=(o*D-a*N-c*M)*V,t[13]=(e*N-n*D+s*M)*V,t[14]=(A*v-x*w-m*E)*V,t[15]=(h*w-d*v+f*E)*V,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,x=r*d,A=a*h,m=a*d,p=o*d,E=c*l,v=c*h,S=c*d,w=n.x,T=n.y,g=n.z;return s[0]=(1-(A+p))*w,s[1]=(u+S)*w,s[2]=(x-v)*w,s[3]=0,s[4]=(u-S)*T,s[5]=(1-(f+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(x+v)*g,s[9]=(m-E)*g,s[10]=(1-(f+A))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=on.set(s[0],s[1],s[2]).length();const o=on.set(s[4],s[5],s[6]).length(),c=on.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jt.copy(this);const l=1/a,h=1/o,d=1/c;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,e.setFromRotationMatrix(Jt),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=ne,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let x,A;if(c)x=r/(a-r),A=a*r/(a-r);else if(o===ne)x=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===$n)x=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ne,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let x,A;if(c)x=1/(a-r),A=a/(a-r);else if(o===ne)x=-2/(a-r),A=-(a+r)/(a-r);else if(o===$n)x=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=x,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const on=new F,Jt=new ot,No=new F(0,0,0),Io=new F(1,1,1),Le=new F,l1=new F,kt=new F,Mr=new ot,yr=new He;class Ge{constructor(t=0,e=0,n=0,s=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(J0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-J0(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(J0(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-J0(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(J0(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-J0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:k0("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yr.setFromEuler(this),this.setFromQuaternion(yr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class X3{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uo=0;const Er=new F,ln=new He,xe=new ot,c1=new F,Nn=new F,Fo=new F,Oo=new He,br=new F(1,0,0),Tr=new F(0,1,0),Ar=new F(0,0,1),wr={type:"added"},Bo={type:"removed"},cn={type:"childadded",child:null},ci={type:"childremoved",child:null};class Pt extends ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uo++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const t=new F,e=new Ge,n=new He,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new W0}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ln.setFromAxisAngle(t,e),this.quaternion.multiply(ln),this}rotateOnWorldAxis(t,e){return ln.setFromAxisAngle(t,e),this.quaternion.premultiply(ln),this}rotateX(t){return this.rotateOnAxis(br,t)}rotateY(t){return this.rotateOnAxis(Tr,t)}rotateZ(t){return this.rotateOnAxis(Ar,t)}translateOnAxis(t,e){return Er.copy(t).applyQuaternion(this.quaternion),this.position.add(Er.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(br,t)}translateY(t){return this.translateOnAxis(Tr,t)}translateZ(t){return this.translateOnAxis(Ar,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?c1.copy(t):c1.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xe.lookAt(Nn,c1,this.up):xe.lookAt(c1,Nn,this.up),this.quaternion.setFromRotationMatrix(xe),s&&(xe.extractRotation(s.matrixWorld),ln.setFromRotationMatrix(xe),this.quaternion.premultiply(ln.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wr),cn.child=t,this.dispatchEvent(cn),cn.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bo),ci.child=t,this.dispatchEvent(ci),ci.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(xe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wr),cn.child=t,this.dispatchEvent(cn),cn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,t,Fo),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,Oo,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pt.DEFAULT_UP=new F(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class re extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zo={type:"move"};class hi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const A of t.hand.values()){const m=e.getJointPose(A,n),p=this._getHandJoint(l,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,x=.005;l.inputState.pinching&&f>u+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zo)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},De={h:0,s:0,l:0},h1={h:0,s:0,l:0};function ui(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class X0{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ot){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,et.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=et.workingColorSpace){return this.r=t,this.g=e,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=et.workingColorSpace){if(t=yo(t,1),e=J0(e,0,1),n=J0(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ui(a,r,t+1/3),this.g=ui(a,r,t),this.b=ui(a,r,t-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(t,e=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&k0("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:k0("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);k0("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ot){const n=Y3[t.toLowerCase()];return n!==void 0?this.setHex(n,e):k0("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Re(t.r),this.g=Re(t.g),this.b=Re(t.b),this}copyLinearToSRGB(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ot){return et.workingToColorSpace(It.copy(this),t),Math.round(J0(It.r*255,0,255))*65536+Math.round(J0(It.g*255,0,255))*256+Math.round(J0(It.b*255,0,255))}getHexString(t=Ot){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=et.workingColorSpace){et.workingToColorSpace(It.copy(this),e);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=et.workingColorSpace){return et.workingToColorSpace(It.copy(this),e),t.r=It.r,t.g=It.g,t.b=It.b,t}getStyle(t=Ot){et.workingToColorSpace(It.copy(this),t);const e=It.r,n=It.g,s=It.b;return t!==Ot?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(De),this.setHSL(De.h+t,De.s+e,De.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(De),t.getHSL(h1);const n=si(De.h,h1.h,e),s=si(De.s,h1.s,e),r=si(De.l,h1.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new X0;X0.NAMES=Y3;class Ho extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const $t=new F,ve=new F,di=new F,Se=new F,hn=new F,un=new F,Rr=new F,fi=new F,pi=new F,mi=new F,gi=new ct,_i=new ct,xi=new ct;class ee{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$t.subVectors(t,e),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$t.subVectors(s,e),ve.subVectors(n,e),di.subVectors(t,e);const a=$t.dot($t),o=$t.dot(ve),c=$t.dot(di),l=ve.dot(ve),h=ve.dot(di),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-o*h)*f,x=(a*h-o*c)*f;return r.set(1-u-x,x,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Se)===null?!1:Se.x>=0&&Se.y>=0&&Se.x+Se.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Se)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Se.x),c.addScaledVector(a,Se.y),c.addScaledVector(o,Se.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return gi.setScalar(0),_i.setScalar(0),xi.setScalar(0),gi.fromBufferAttribute(t,e),_i.fromBufferAttribute(t,n),xi.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gi,r.x),a.addScaledVector(_i,r.y),a.addScaledVector(xi,r.z),a}static isFrontFacing(t,e,n,s){return $t.subVectors(n,e),ve.subVectors(t,e),$t.cross(ve).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $t.subVectors(this.c,this.b),ve.subVectors(this.a,this.b),$t.cross(ve).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ee.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ee.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ee.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ee.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ee.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;hn.subVectors(s,n),un.subVectors(r,n),fi.subVectors(t,n);const c=hn.dot(fi),l=un.dot(fi);if(c<=0&&l<=0)return e.copy(n);pi.subVectors(t,s);const h=hn.dot(pi),d=un.dot(pi);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(hn,a);mi.subVectors(t,r);const u=hn.dot(mi),x=un.dot(mi);if(x>=0&&u<=x)return e.copy(r);const A=u*l-c*x;if(A<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(un,o);const m=h*x-u*d;if(m<=0&&d-h>=0&&u-x>=0)return Rr.subVectors(r,s),o=(d-h)/(d-h+(u-x)),e.copy(s).addScaledVector(Rr,o);const p=1/(m+A+f);return a=A*p,o=f*p,e.copy(n).addScaledVector(hn,a).addScaledVector(un,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fe{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qt.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qt.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(t.matrixWorld),this.expandByPoint(Qt);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),u1.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),u1.copy(n.boundingBox)),u1.applyMatrix4(t.matrixWorld),this.union(u1)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qt),Qt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(In),d1.subVectors(this.max,In),dn.subVectors(t.a,In),fn.subVectors(t.b,In),pn.subVectors(t.c,In),Ne.subVectors(fn,dn),Ie.subVectors(pn,fn),Ye.subVectors(dn,pn);let e=[0,-Ne.z,Ne.y,0,-Ie.z,Ie.y,0,-Ye.z,Ye.y,Ne.z,0,-Ne.x,Ie.z,0,-Ie.x,Ye.z,0,-Ye.x,-Ne.y,Ne.x,0,-Ie.y,Ie.x,0,-Ye.y,Ye.x,0];return!vi(e,dn,fn,pn,d1)||(e=[1,0,0,0,1,0,0,0,1],!vi(e,dn,fn,pn,d1))?!1:(f1.crossVectors(Ne,Ie),e=[f1.x,f1.y,f1.z],vi(e,dn,fn,pn,d1))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qt).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qt).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Me[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Me[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Me[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Me[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Me[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Me[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Me[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Me[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Me),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Me=[new F,new F,new F,new F,new F,new F,new F,new F],Qt=new F,u1=new fe,dn=new F,fn=new F,pn=new F,Ne=new F,Ie=new F,Ye=new F,In=new F,d1=new F,f1=new F,qe=new F;function vi(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qe.fromArray(i,r);const o=s.x*Math.abs(qe.x)+s.y*Math.abs(qe.y)+s.z*Math.abs(qe.z),c=t.dot(qe),l=e.dot(qe),h=n.dot(qe);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const St=new F,p1=new x0;let Go=0;class qt extends ke{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Go++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=le,this.version=0,this._normalizationScale=t!==void 0?Us(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)p1.fromBufferAttribute(this,e),p1.applyMatrix3(t),this.setXY(e,p1.x,p1.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)St.fromBufferAttribute(this,e),St.applyMatrix3(t),this.setXYZ(e,St.x,St.y,St.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)St.fromBufferAttribute(this,e),St.applyMatrix4(t),this.setXYZ(e,St.x,St.y,St.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)St.fromBufferAttribute(this,e),St.applyNormalMatrix(t),this.setXYZ(e,St.x,St.y,St.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)St.fromBufferAttribute(this,e),St.transformDirection(t),this.setXYZ(e,St.x,St.y,St.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):bo(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):To(t,this.array)}}class ko extends qt{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Vo extends qt{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Wo extends qt{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Os extends qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xo extends qt{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Bs extends qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _t extends qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Yo=new fe,Un=new F,Si=new F;class zs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yo.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Un.subVectors(t,this.center);const e=Un.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Un,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Si.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Un.copy(t.center).add(Si)),this.expandByPoint(Un.copy(t.center).sub(Si))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qo=0;const Xt=new ot,Mi=new Pt,mn=new F,Vt=new fe,Fn=new fe,At=new F;class Zt extends ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qo++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xo(t)?Bs:Os)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new W0().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xt.makeRotationFromQuaternion(t),this.applyMatrix4(Xt),this}rotateX(t){return Xt.makeRotationX(t),this.applyMatrix4(Xt),this}rotateY(t){return Xt.makeRotationY(t),this.applyMatrix4(Xt),this}rotateZ(t){return Xt.makeRotationZ(t),this.applyMatrix4(Xt),this}translate(t,e,n){return Xt.makeTranslation(t,e,n),this.applyMatrix4(Xt),this}scale(t,e,n){return Xt.makeScale(t,e,n),this.applyMatrix4(Xt),this}lookAt(t){return Mi.lookAt(t),Mi.updateMatrix(),this.applyMatrix4(Mi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&k0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Vt.min,Fn.min),Vt.expandByPoint(At),At.addVectors(Vt.max,Fn.max),Vt.expandByPoint(At)):(Vt.expandByPoint(Fn.min),Vt.expandByPoint(Fn.max))}Vt.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)At.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(At));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)At.fromBufferAttribute(o,l),c&&(mn.fromBufferAttribute(t,l),At.add(mn)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new F,c[D]=new F;const h=new F,d=new F,f=new F,u=new x0,x=new x0,A=new x0,m=new F,p=new F;function E(D,R,N){l[D]=l[R]=l[N]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,D),x.fromBufferAttribute(r,R),A.fromBufferAttribute(r,N),d.sub(h),f.sub(h),x.sub(u),A.sub(u);const O=1/(x.x*A.y-A.x*x.y);isFinite(O)&&(m.copy(d).multiplyScalar(A.y).addScaledVector(f,-x.y).multiplyScalar(O),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-A.x).multiplyScalar(O),o[D].add(m),o[R].add(m),o[N].add(m),c[D].add(p),c[R].add(p),c[N].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,R=v.length;D<R;++D){const N=v[D],O=N.start,z=N.count;for(let C=O,V=O+z;C<V;C+=3)E(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const S=new F,w=new F,T=new F,g=new F;function M(D){T.fromBufferAttribute(s,D),g.copy(T);const R=o[D];S.copy(R),S.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(g,R);const O=w.dot(c[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,O)}for(let D=0,R=n.count;D<R;++D)l[D]&&M(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(t)for(let f=0,u=t.count;f<u;f+=3){const x=t.getX(f+0),A=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)At.fromBufferAttribute(t,e),At.normalize(),t.setXYZ(e,At.x,At.y,At.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let u=0,x=0;for(let A=0,m=c.length;A<m;A++){o.isInterleavedBufferAttribute?u=c[A]*o.data.stride+o.offset:u=c[A]*h;for(let p=0;p<h;p++)f[x++]=l[u++]}return new qt(f,h,d)}if(this.index===null)return k0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yi=new F,Zo=new F,Ko=new W0;class be{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yi.subVectors(n,e).cross(Zo.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(yi),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ko.getNormalMatrix(t),s=this.coplanarPoint(yi).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Jo=0;class e1 extends ke{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Wn,this.side=je,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=E3,this.blendDst=b3,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X0(0,0,0),this.blendAlpha=0,this.depthFunc=Zn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){k0(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){k0(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new X0().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new be().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new x0().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new x0().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ye=new F,Ei=new F,m1=new F,g1=new F;class q3{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ye.copy(this.origin).addScaledVector(this.direction,e),ye.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ei.copy(t).add(e).multiplyScalar(.5),m1.copy(e).sub(t).normalize(),g1.copy(this.origin).sub(Ei);const r=t.distanceTo(e)*.5,a=-this.direction.dot(m1),o=g1.dot(this.direction),c=-g1.dot(m1),l=g1.lengthSq(),h=Math.abs(1-a*a);let d,f,u,x;if(h>0)if(d=a*c-o,f=a*o-c,x=r*h,d>=0)if(f>=-x)if(f<=x){const A=1/h;d*=A,f*=A,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-x?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=x?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ei).addScaledVector(m1,f),u}intersectSphere(t,e){if(t.radius<0)return null;ye.subVectors(t.center,this.origin);const n=ye.dot(this.direction),s=ye.dot(ye)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ye)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,x=e.x-a.x,A=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,v=n.z-a.z,S=Math.abs(c),w=Math.abs(l),T=Math.abs(h);let g,M,D,R,N,O,z,C,V,$,W,i0;if(S>=w&&S>=T?(D=c,O=d,V=x,i0=p,c>=0?(g=l,M=h,R=f,N=u,z=A,C=m,$=E,W=v):(g=h,M=l,R=u,N=f,z=m,C=A,$=v,W=E)):w>=T?(D=l,O=f,V=A,i0=E,l>=0?(g=h,M=c,R=u,N=d,z=m,C=x,$=v,W=p):(g=c,M=h,R=d,N=u,z=x,C=m,$=p,W=v)):(D=h,O=u,V=m,i0=v,h>=0?(g=c,M=l,R=d,N=f,z=x,C=A,$=p,W=E):(g=l,M=c,R=f,N=d,z=A,C=x,$=E,W=p)),D===0)return null;const B=g/D,Z=M/D,e0=1/D,T0=R-B*O,E0=N-Z*O,Q=z-B*V,l0=C-Z*V,v0=$-B*i0,U0=W-Z*i0,y0=v0*l0-U0*Q,G0=T0*U0-E0*v0,dt=Q*E0-l0*T0;if(s){if(y0<0||G0<0||dt<0)return null}else if((y0<0||G0<0||dt<0)&&(y0>0||G0>0||dt>0))return null;const B0=y0+G0+dt;if(B0===0)return null;const $0=e0*(y0*O+G0*V+dt*i0);return(B0>0?$0<0:$0>0)?null:this.at($0/B0,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ms extends e1{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new X0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cr=new ot,Ze=new q3,_1=new zs,Pr=new F,x1=new F,v1=new F,S1=new F,bi=new F,M1=new F,Lr=new F,y1=new F;class wt extends Pt{constructor(t=new Zt,e=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){M1.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(bi.fromBufferAttribute(d,t),a?M1.addScaledVector(bi,h):M1.addScaledVector(bi.sub(e),h))}e.add(M1)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_1.copy(n.boundingSphere),_1.applyMatrix4(r),Ze.copy(t.ray).recast(t.near),!(_1.containsPoint(Ze.origin)===!1&&(Ze.intersectSphere(_1,Pr)===null||Ze.origin.distanceToSquared(Pr)>(t.far-t.near)**2))&&(Cr.copy(r).invert(),Ze.copy(t.ray).applyMatrix4(Cr),!(n.boundingBox!==null&&Ze.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ze)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=f.length;x<A;x++){const m=f[x],p=a[m.materialIndex],E=Math.max(m.start,u.start),v=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=E,w=v;S<w;S+=3){const T=o.getX(S),g=o.getX(S+1),M=o.getX(S+2);s=E1(this,p,t,n,l,h,d,T,g,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,u.start),A=Math.min(o.count,u.start+u.count);for(let m=x,p=A;m<p;m+=3){const E=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=E1(this,a,t,n,l,h,d,E,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,A=f.length;x<A;x++){const m=f[x],p=a[m.materialIndex],E=Math.max(m.start,u.start),v=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let S=E,w=v;S<w;S+=3){const T=S,g=S+1,M=S+2;s=E1(this,p,t,n,l,h,d,T,g,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,u.start),A=Math.min(c.count,u.start+u.count);for(let m=x,p=A;m<p;m+=3){const E=m,v=m+1,S=m+2;s=E1(this,a,t,n,l,h,d,E,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $o(i,t,e,n,s,r,a,o){let c;if(t.side===Gt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===je,o),c===null)return null;y1.copy(o),y1.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(y1);return l<e.near||l>e.far?null:{distance:l,point:y1.clone(),object:i}}function E1(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,x1),i.getVertexPosition(c,v1),i.getVertexPosition(l,S1);const h=$o(i,t,e,n,x1,v1,S1,Lr);if(h){const d=new F;ee.getBarycoord(Lr,x1,v1,S1,d),s&&(h.uv=ee.getInterpolatedAttribute(s,o,c,l,d,new x0)),r&&(h.uv1=ee.getInterpolatedAttribute(r,o,c,l,d,new x0)),a&&(h.normal=ee.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new F,materialIndex:0};ee.getNormal(x1,v1,S1,f.normal),h.face=f,h.barycoord=d}return h}class Qo extends Bt{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ct,h=Ct,d,f){super(null,a,o,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ke=new zs,jo=new x0(.5,.5),b1=new F;class An{constructor(t=new be,e=new be,n=new be,s=new be,r=new be,a=new be){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ne,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],x=r[8],A=r[9],m=r[10],p=r[11],E=r[12],v=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,u-h,p-x,w-E).normalize(),s[1].setComponents(l+a,u+h,p+x,w+E).normalize(),s[2].setComponents(l+o,u+d,p+A,w+v).normalize(),s[3].setComponents(l-o,u-d,p-A,w-v).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,u-f,p-m,w-S).normalize();else if(s[4].setComponents(l-c,u-f,p-m,w-S).normalize(),e===ne)s[5].setComponents(l+c,u+f,p+m,w+S).normalize();else if(e===$n)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ke.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ke.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ke)}intersectsSprite(t){Ke.center.set(0,0,0);const e=jo.distanceTo(t.center);return Ke.radius=.7071067811865476+e,Ke.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ke)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(b1.x=s.normal.x>0?t.max.x:t.min.x,b1.y=s.normal.y>0?t.max.y:t.min.y,b1.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(b1)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Dr=new ot;class Hs{constructor(){this.coordinateSystem=ne,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Dr.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new An),n[s].setFromProjectionMatrix(Dr,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new An),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Hs().copy(this)}}class Z3 extends Bt{constructor(t=[],e=bn,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wn extends Bt{constructor(t,e,n=ue,s,r,a,o=Ct,c=Ct,l,h=ze,d=1){if(h!==ze&&h!==Be)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class K3 extends wn{constructor(t,e=ue,n=bn,s,r,a=Ct,o=Ct,c,l=ze){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class J3 extends Bt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class en extends Zt{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,u=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function x(A,m,p,E,v,S,w,T,g,M,D){const R=S/g,N=w/M,O=S/2,z=w/2,C=T/2,V=g+1,$=M+1;let W=0,i0=0;const B=new F;for(let Z=0;Z<$;Z++){const e0=Z*N-z;for(let T0=0;T0<V;T0++){const E0=T0*R-O;B[A]=E0*E,B[m]=e0*v,B[p]=C,l.push(B.x,B.y,B.z),B[A]=0,B[m]=0,B[p]=T>0?1:-1,h.push(B.x,B.y,B.z),d.push(T0/g),d.push(1-Z/M),W+=1}}for(let Z=0;Z<M;Z++)for(let e0=0;e0<g;e0++){const T0=f+e0+V*Z,E0=f+e0+V*(Z+1),Q=f+(e0+1)+V*(Z+1),l0=f+(e0+1)+V*Z;c.push(T0,E0,l0),c.push(E0,Q,l0),i0+=6}o.addGroup(u,i0,D),u+=i0,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class q1 extends Zt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new F,h=new x0;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new q1(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){k0("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new x0:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,s=[],r=[],a=[],o=new F,c=new ot;for(let u=0;u<=t;u++){const x=u/t;s[u]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(J0(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,x))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(J0(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],u*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Gs extends pe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new x0){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class t2 extends Gs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ks(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,u*=h,s(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Nr=new F,Ir=new F,Ti=new ks,Ai=new ks,wi=new ks;class e2 extends pe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),l=Ir);const d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(d),u),A=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);A<1e-4&&(A=1),x<1e-4&&(x=A),m<1e-4&&(m=A),Ti.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,x,A,m),Ai.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,x,A,m),wi.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,x,A,m)}else this.curveType==="catmullrom"&&(Ti.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Ai.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),wi.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Ti.calc(c),Ai.calc(c),wi.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ur(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function n2(i,t){const e=1-i;return e*e*t}function i2(i,t){return 2*(1-i)*i*t}function s2(i,t){return i*i*t}function Xn(i,t,e,n){return n2(i,t)+i2(i,e)+s2(i,n)}function r2(i,t){const e=1-i;return e*e*e*t}function a2(i,t){const e=1-i;return 3*e*e*i*t}function o2(i,t){return 3*(1-i)*i*i*t}function l2(i,t){return i*i*i*t}function Yn(i,t,e,n,s){return r2(i,t)+a2(i,e)+o2(i,n)+l2(i,s)}class $3 extends pe{constructor(t=new x0,e=new x0,n=new x0,s=new x0){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new x0){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yn(t,s.x,r.x,a.x,o.x),Yn(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class c2 extends pe{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yn(t,s.x,r.x,a.x,o.x),Yn(t,s.y,r.y,a.y,o.y),Yn(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q3 extends pe{constructor(t=new x0,e=new x0){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new x0){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new x0){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h2 extends pe{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j3 extends pe{constructor(t=new x0,e=new x0,n=new x0){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new x0){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xn(t,s.x,r.x,a.x),Xn(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u2 extends pe{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xn(t,s.x,r.x,a.x),Xn(t,s.y,r.y,a.y),Xn(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ta extends pe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new x0){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ur(o,c.x,l.x,h.x,d.x),Ur(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new x0().fromArray(s))}return this}}var Fr=Object.freeze({__proto__:null,ArcCurve:t2,CatmullRomCurve3:e2,CubicBezierCurve:$3,CubicBezierCurve3:c2,EllipseCurve:Gs,LineCurve:Q3,LineCurve3:h2,QuadraticBezierCurve:j3,QuadraticBezierCurve3:u2,SplineCurve:ta});class d2 extends pe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Fr[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Or extends d2{constructor(t){super(),this.type="Path",this.currentPoint=new x0,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Q3(this.currentPoint.clone(),new x0(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new j3(this.currentPoint.clone(),new x0(t,e),new x0(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new $3(this.currentPoint.clone(),new x0(t,e),new x0(n,s),new x0(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ta(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Gs(t,e,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ea extends Or{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Or().fromJSON(s))}return this}}function f2(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=na(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=x2(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let f=e;f<s;f+=e){const u=i[f],x=i[f+1];u<o&&(o=u),x<c&&(c=x),u>h&&(h=u),x>d&&(d=x)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Qn(r,a,e,o,c,l,0),a}function na(i,t,e,n,s){let r;if(s===C2(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Br(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Br(a/n|0,i[a],i[a+1],r);return r&&Rn(r,r.next)&&(t1(r),r=r.next),r}function nn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rn(e,e.next)||mt(e.prev,e,e.next)===0)){if(t1(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qn(i,t,e,n,s,r,a){if(!i)return;!a&&r&&E2(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?m2(i,n,s,r):p2(i)){t.push(c.i,i.i,l.i),t1(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=g2(nn(i),t),Qn(i,t,e,n,s,r,2)):a===2&&_2(i,t,e,n,s,r):Qn(nn(i),t,e,n,s,r,1);break}}}function p2(i){const t=i.prev,e=i,n=i.next;if(mt(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),f=Math.max(s,r,a),u=Math.max(o,c,l);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=u&&zn(s,o,r,c,a,l,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function m2(i,t,e,n){const s=i.prev,r=i,a=i.next;if(mt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,f=a.y,u=Math.min(o,c,l),x=Math.min(h,d,f),A=Math.max(o,c,l),m=Math.max(h,d,f),p=ys(u,x,t,e,n),E=ys(A,m,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=p&&S&&S.z<=E;){if(v.x>=u&&v.x<=A&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&zn(o,h,c,d,l,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=u&&S.x<=A&&S.y>=x&&S.y<=m&&S!==s&&S!==a&&zn(o,h,c,d,l,f,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=p;){if(v.x>=u&&v.x<=A&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&zn(o,h,c,d,l,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=E;){if(S.x>=u&&S.x<=A&&S.y>=x&&S.y<=m&&S!==s&&S!==a&&zn(o,h,c,d,l,f,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function g2(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Rn(n,s)&&sa(n,e,e.next,s)&&jn(n,s)&&jn(s,n)&&(t.push(n.i,e.i,s.i),t1(e),t1(e.next),e=i=s),e=e.next}while(e!==i);return nn(e)}function _2(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&A2(a,o)){let c=ra(a,o);a=nn(a,a.next),c=nn(c,c.next),Qn(a,t,e,n,s,r,0),Qn(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function x2(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=na(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(T2(l))}s.sort(v2);for(let r=0;r<s.length;r++)e=S2(s[r],e);return e}function v2(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function S2(i,t){const e=M2(i,t);if(!e)return t;const n=ra(e,i);return nn(n,n.next),nn(e,e.next)}function M2(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Rn(i,e))return e;do{if(Rn(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ia(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);jn(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&y2(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function y2(i,t){return mt(i.prev,i,t.prev)<0&&mt(t.next,i,i.next)<0}function E2(i,t,e,n){let s=i;do s.z===0&&(s.z=ys(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b2(s)}function b2(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function ys(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function T2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ia(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function zn(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ia(i,t,e,n,s,r,a,o)}function A2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w2(i,t)&&(jn(i,t)&&jn(t,i)&&R2(i,t)&&(mt(i.prev,i,t.prev)||mt(i,t.prev,t))||Rn(i,t)&&mt(i.prev,i,i.next)>0&&mt(t.prev,t,t.next)>0)}function mt(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rn(i,t){return i.x===t.x&&i.y===t.y}function sa(i,t,e,n){const s=A1(mt(i,t,e)),r=A1(mt(i,t,n)),a=A1(mt(e,n,i)),o=A1(mt(e,n,t));return!!(s!==r&&a!==o||s===0&&T1(i,e,t)||r===0&&T1(i,n,t)||a===0&&T1(e,i,n)||o===0&&T1(e,t,n))}function T1(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function A1(i){return i>0?1:i<0?-1:0}function w2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sa(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jn(i,t){return mt(i.prev,i,i.next)<0?mt(i,t,i.next)>=0&&mt(i,i.prev,t)>=0:mt(i,t,i.prev)<0||mt(i,i.next,t)<0}function R2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ra(i,t){const e=Es(i.i,i.x,i.y),n=Es(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Br(i,t,e,n){const s=Es(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function t1(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Es(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C2(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class P2{static triangulate(t,e,n=2){return f2(t,e,n)}}class qn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];zr(t),Hr(n,t);let a=t.length;e.forEach(zr);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Hr(n,e[c]);const o=P2.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function zr(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hr(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vs extends Zt{constructor(t=[new x0(0,-.5),new x0(.5,0),new x0(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=J0(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new F,f=new x0,u=new F,x=new F,A=new F;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,u.x=p*1,u.y=-m,u.z=p*0,A.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:A.normalize(),c.push(A.x,A.y,A.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.x+=A.x,u.y+=A.y,u.z+=A.z,u.normalize(),c.push(u.x,u.y,u.z),A.copy(x)}for(let E=0;E<=e;E++){const v=n+E*h*s,S=Math.sin(v),w=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*S,d.y=t[T].y,d.z=t[T].x*w,a.push(d.x,d.y,d.z),f.x=E/e,f.y=T/(t.length-1),o.push(f.x,f.y);const g=c[3*T+0]*S,M=c[3*T+1],D=c[3*T+0]*w;l.push(g,M,D)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){const S=v+E*t.length,w=S,T=S+t.length,g=S+t.length+1,M=S+1;r.push(w,T,M),r.push(g,M,T)}this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("uv",new _t(o,2)),this.setAttribute("normal",new _t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.points,t.segments,t.phiStart,t.phiLength)}}class K1 extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,u=[],x=[],A=[],m=[];for(let p=0;p<h;p++){const E=p*f-a;for(let v=0;v<l;v++){const S=v*d-r;x.push(S,-E,0),A.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const v=E+l*p,S=E+l*(p+1),w=E+1+l*(p+1),T=E+1+l*p;u.push(v,S,T),u.push(S,w,T)}this.setIndex(u),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(A,3)),this.setAttribute("uv",new _t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K1(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ws extends Zt{constructor(t=new ea([new x0(0,.5),new x0(-.5,-.5),new x0(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(a,2));function l(h){const d=s.length/3,f=h.extractPoints(e);let u=f.shape;const x=f.holes;qn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=x.length;m<p;m++){const E=x[m];qn.isClockWise(E)===!0&&(x[m]=E.reverse())}const A=qn.triangulateShape(u,x);for(let m=0,p=x.length;m<p;m++){const E=x[m];u=u.concat(E)}for(let m=0,p=u.length;m<p;m++){const E=u[m];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let m=0,p=A.length;m<p;m++){const E=A[m],v=E[0]+d,S=E[1]+d,w=E[2]+d;n.push(v,S,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return L2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Ws(n,t.curveSegments)}}function L2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Xs extends Zt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new F,f=new F,u=[],x=[],A=[],m=[];for(let p=0;p<=n;p++){const E=[],v=p/n,S=a+v*o,w=t*Math.cos(S),T=Math.sqrt(t*t-w*w);let g=0;p===0&&a===0?g=.5/e:p===n&&c===Math.PI&&(g=-.5/e);for(let M=0;M<=e;M++){const D=M/e,R=s+D*r;d.x=-T*Math.cos(R),d.y=w,d.z=T*Math.sin(R),x.push(d.x,d.y,d.z),f.copy(d).normalize(),A.push(f.x,f.y,f.z),m.push(D+g,1-v),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const v=h[p][E+1],S=h[p][E],w=h[p+1][E],T=h[p+1][E+1];(p!==0||a>0)&&u.push(v,S,T),(p!==n-1||c<Math.PI)&&u.push(S,w,T)}this.setIndex(u),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(A,3)),this.setAttribute("uv",new _t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Cn(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Gr(s))s.isRenderTargetTexture?(k0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gr(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ft(i){const t={};for(let e=0;e<i.length;e++){const n=Cn(i[e]);for(const s in n)t[s]=n[s]}return t}function Gr(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function D2(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function aa(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:et.workingColorSpace}const N2={clone:Cn,merge:Ft};var I2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends e1{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I2,this.fragmentShader=U2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cn(t.uniforms),this.uniformsGroups=D2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new X0().setHex(s.value);break;case"v2":this.uniforms[n].value=new x0().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new W0().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class F2 extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oa extends e1{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new X0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new x0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Rs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class O2 extends e1{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B2 extends e1{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Vr(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Vr(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vr(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class z2{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const u=l[d],x=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const H2=new z2;class Ys{constructor(t){this.manager=t!==void 0?t:H2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ee={};class G2 extends Error{constructor(t,e){super(t),this.response=e}}class k2 extends Ys{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=kr.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Ee[t]!==void 0){Ee[t].push({onLoad:e,onProgress:n,onError:s});return}Ee[t]=[],Ee[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&k0("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ee[t],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,x=u!==0;let A=0;const m=new ReadableStream({start(p){E();function E(){d.read().then(({done:v,value:S})=>{if(v)p.close();else{A+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:A,total:u});for(let T=0,g=h.length;T<g;T++){const M=h[T];M.onProgress&&M.onProgress(w)}p.enqueue(S),E()}},v=>{p.error(v)})}}});return new Response(m)}else throw new G2(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(x=>u.decode(x))}}}).then(l=>{kr.add(`file:${t}`,l);const h=Ee[t];delete Ee[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{const h=Ee[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ee[t];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qs extends Pt{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new X0(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class V2 extends qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X0(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ri=new ot,Wr=new F,Xr=new F;class W2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new x0(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new An,this._frameExtents=new x0(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Wr.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wr),Xr.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xr),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ri.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ri,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===$n||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ri)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const w1=new F,R1=new He,ie=new F;class Zs extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ne,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(w1,R1,ie),ie.x===1&&ie.y===1&&ie.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(w1,R1,ie.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(w1,R1,ie),ie.x===1&&ie.y===1&&ie.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(w1,R1,ie.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ue=new F,Yr=new x0,qr=new x0;class ae extends Zs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(z1*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(z1*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ue.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ue.x,Ue.y).multiplyScalar(-t/Ue.z),Ue.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ue.x,Ue.y).multiplyScalar(-t/Ue.z)}getViewSize(t,e){return this.getViewBounds(t,Yr,qr),e.subVectors(qr,Yr)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(z1*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ks extends Zs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class X2 extends W2{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zr extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new X2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Y2 extends qs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const gn=-90,_n=1;class bs extends Pt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ae(gn,_n,t,e);s.layers=this.layers,this.add(s);const r=new ae(gn,_n,t,e);r.layers=this.layers,this.add(r);const a=new ae(gn,_n,t,e);a.layers=this.layers,this.add(a);const o=new ae(gn,_n,t,e);o.layers=this.layers,this.add(o);const c=new ae(gn,_n,t,e);c.layers=this.layers,this.add(c);const l=new ae(gn,_n,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ne)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$n)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=A,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class q2 extends ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Kr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=J0(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(J0(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Jr=new x0;class $r{constructor(t=new x0(1/0,1/0),e=new x0(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jr).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Z2 extends ke{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qr(i,t,e,n){const s=K2(n);switch(e){case O3:return i*t;case z3:return i*t/s.components*s.byteLength;case Ds:return i*t/s.components*s.byteLength;case tn:return i*t*2/s.components*s.byteLength;case Ns:return i*t*2/s.components*s.byteLength;case B3:return i*t*3/s.components*s.byteLength;case ce:return i*t*4/s.components*s.byteLength;case Is:return i*t*4/s.components*s.byteLength;case I1:case U1:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case F1:case O1:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wi:case Yi:return Math.max(i,16)*Math.max(t,8)/4;case Vi:case Xi:return Math.max(i,8)*Math.max(t,8)/2;case qi:case Zi:case Ji:case $i:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ki:case k1:case Qi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ji:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ts:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case es:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ns:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case is:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ss:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case as:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case os:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ls:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case us:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ds:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fs:case ps:case ms:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gs:case _s:return Math.ceil(i/4)*Math.ceil(t/4)*8;case V1:case xs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K2(i){switch(i){case Wt:case N3:return{byteLength:1,components:1};case Jn:case I3:case de:return{byteLength:2,components:1};case Ps:case Ls:return{byteLength:2,components:4};case ue:case Cs:case le:return{byteLength:4,components:1};case U3:case F3:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ws}}));typeof window<"u"&&(window.__THREE__?k0("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ws);function la(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function J2(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,x)=>u.start-x.start);let f=0;for(let u=1;u<d.length;u++){const x=d[f],A=d[u];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++f,d[f]=A)}d.length=f+1;for(let u=0,x=d.length;u<x;u++){const A=d[u];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q2=`#ifdef USE_ALPHAHASH
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
#endif`,j2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t7=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e7=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n7=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i7=`#ifdef USE_AOMAP
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
#endif`,s7=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r7=`#ifdef USE_BATCHING
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
#endif`,a7=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o7=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l7=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c7=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h7=`#ifdef USE_IRIDESCENCE
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
#endif`,u7=`#ifdef USE_BUMPMAP
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
#endif`,d7=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f7=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p7=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m7=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g7=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_7=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x7=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v7=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S7=`#define PI 3.141592653589793
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
} // validated`,M7=`vec3 transformedNormal = objectNormal;
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
#endif`,y7=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E7=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b7=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T7=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A7="gl_FragColor = linearToOutputTexel( gl_FragColor );",w7=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R7=`#ifdef USE_ENVMAP
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
#endif`,C7=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,P7=`#ifdef USE_ENVMAP
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
#endif`,L7=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D7=`#ifdef USE_ENVMAP
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
#endif`,N7=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I7=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U7=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F7=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O7=`#ifdef USE_GRADIENTMAP
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
}`,B7=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z7=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H7=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G7=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k7=`#ifdef USE_ENVMAP
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
#endif`,V7=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W7=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X7=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y7=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q7=`PhysicalMaterial material;
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
#endif`,Z7=`uniform sampler2D dfgLUT;
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
}`,K7=`
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
#endif`,J7=`#if defined( RE_IndirectDiffuse )
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
#endif`,$7=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q7=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,j7=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t4=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e4=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n4=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a4=`#if defined( USE_POINTS_UV )
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
#endif`,o4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h4=`#if defined( USE_MORPHCOLORS )
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
#endif`,u4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d4=`#ifdef USE_MORPHTARGETS
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
#endif`,f4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m4=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v4=`#ifdef USE_NORMALMAP
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
#endif`,S4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T4=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N4=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U4=`float getShadowMask() {
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
}`,F4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O4=`#ifdef USE_SKINNING
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
#endif`,B4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z4=`#ifdef USE_SKINNING
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
#endif`,H4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V4=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W4=`#ifdef USE_TRANSMISSION
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
#endif`,X4=`#ifdef USE_TRANSMISSION
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
#endif`,Y4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$4=`uniform sampler2D t2D;
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
}`,Q4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j4=`uniform float backgroundBlurriness;
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
}`,t5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n5=`#include <common>
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
}`,i5=`#if DEPTH_PACKING == 3200
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
}`,s5=`#define DISTANCE
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
}`,r5=`#define DISTANCE
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
}`,a5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l5=`uniform float scale;
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
}`,c5=`uniform vec3 diffuse;
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
}`,h5=`#include <common>
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
}`,u5=`uniform vec3 diffuse;
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
}`,d5=`#define LAMBERT
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
}`,f5=`#define LAMBERT
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
}`,p5=`#define MATCAP
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
}`,m5=`#define MATCAP
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
}`,g5=`#define NORMAL
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
}`,_5=`#define NORMAL
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
}`,x5=`#define PHONG
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
}`,v5=`#define PHONG
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
}`,S5=`#define STANDARD
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
}`,M5=`#define STANDARD
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
}`,y5=`#define TOON
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
}`,E5=`#define TOON
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
}`,b5=`uniform float size;
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
}`,T5=`uniform vec3 diffuse;
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
}`,A5=`#include <common>
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
}`,w5=`uniform vec3 color;
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
}`,R5=`uniform float rotation;
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
}`,C5=`uniform vec3 diffuse;
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
}`,K0={alphahash_fragment:$2,alphahash_pars_fragment:Q2,alphamap_fragment:j2,alphamap_pars_fragment:t7,alphatest_fragment:e7,alphatest_pars_fragment:n7,aomap_fragment:i7,aomap_pars_fragment:s7,batching_pars_vertex:r7,batching_vertex:a7,begin_vertex:o7,beginnormal_vertex:l7,bsdfs:c7,iridescence_fragment:h7,bumpmap_pars_fragment:u7,clipping_planes_fragment:d7,clipping_planes_pars_fragment:f7,clipping_planes_pars_vertex:p7,clipping_planes_vertex:m7,color_fragment:g7,color_pars_fragment:_7,color_pars_vertex:x7,color_vertex:v7,common:S7,defaultnormal_vertex:M7,displacementmap_pars_vertex:y7,displacementmap_vertex:E7,emissivemap_fragment:b7,emissivemap_pars_fragment:T7,colorspace_fragment:A7,colorspace_pars_fragment:w7,envmap_fragment:R7,envmap_common_pars_fragment:C7,envmap_pars_fragment:P7,envmap_pars_vertex:L7,envmap_physical_pars_fragment:k7,envmap_vertex:D7,fog_vertex:N7,fog_pars_vertex:I7,fog_fragment:U7,fog_pars_fragment:F7,gradientmap_pars_fragment:O7,lightmap_pars_fragment:B7,lights_lambert_fragment:z7,lights_lambert_pars_fragment:H7,lights_pars_begin:G7,lights_toon_fragment:V7,lights_toon_pars_fragment:W7,lights_phong_fragment:X7,lights_phong_pars_fragment:Y7,lights_physical_fragment:q7,lights_physical_pars_fragment:Z7,lights_fragment_begin:K7,lights_fragment_maps:J7,lights_fragment_end:$7,lightprobes_pars_fragment:Q7,logdepthbuf_fragment:j7,logdepthbuf_pars_fragment:t4,logdepthbuf_pars_vertex:e4,logdepthbuf_vertex:n4,map_fragment:i4,map_pars_fragment:s4,map_particle_fragment:r4,map_particle_pars_fragment:a4,metalnessmap_fragment:o4,metalnessmap_pars_fragment:l4,morphinstance_vertex:c4,morphcolor_vertex:h4,morphnormal_vertex:u4,morphtarget_pars_vertex:d4,morphtarget_vertex:f4,normal_fragment_begin:p4,normal_fragment_maps:m4,normal_pars_fragment:g4,normal_pars_vertex:_4,normal_vertex:x4,normalmap_pars_fragment:v4,clearcoat_normal_fragment_begin:S4,clearcoat_normal_fragment_maps:M4,clearcoat_pars_fragment:y4,iridescence_pars_fragment:E4,opaque_fragment:b4,packing:T4,premultiplied_alpha_fragment:A4,project_vertex:w4,dithering_fragment:R4,dithering_pars_fragment:C4,roughnessmap_fragment:P4,roughnessmap_pars_fragment:L4,shadowmap_pars_fragment:D4,shadowmap_pars_vertex:N4,shadowmap_vertex:I4,shadowmask_pars_fragment:U4,skinbase_vertex:F4,skinning_pars_vertex:O4,skinning_vertex:B4,skinnormal_vertex:z4,specularmap_fragment:H4,specularmap_pars_fragment:G4,tonemapping_fragment:k4,tonemapping_pars_fragment:V4,transmission_fragment:W4,transmission_pars_fragment:X4,uv_pars_fragment:Y4,uv_pars_vertex:q4,uv_vertex:Z4,worldpos_vertex:K4,background_vert:J4,background_frag:$4,backgroundCube_vert:Q4,backgroundCube_frag:j4,cube_vert:t5,cube_frag:e5,depth_vert:n5,depth_frag:i5,distance_vert:s5,distance_frag:r5,equirect_vert:a5,equirect_frag:o5,linedashed_vert:l5,linedashed_frag:c5,meshbasic_vert:h5,meshbasic_frag:u5,meshlambert_vert:d5,meshlambert_frag:f5,meshmatcap_vert:p5,meshmatcap_frag:m5,meshnormal_vert:g5,meshnormal_frag:_5,meshphong_vert:x5,meshphong_frag:v5,meshphysical_vert:S5,meshphysical_frag:M5,meshtoon_vert:y5,meshtoon_frag:E5,points_vert:b5,points_frag:T5,shadow_vert:A5,shadow_frag:w5,sprite_vert:R5,sprite_frag:C5},b0={common:{diffuse:{value:new X0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W0},alphaMap:{value:null},alphaMapTransform:{value:new W0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W0}},envmap:{envMap:{value:null},envMapRotation:{value:new W0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new X0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W0},alphaTest:{value:0},uvTransform:{value:new W0}},sprite:{diffuse:{value:new X0(16777215)},opacity:{value:1},center:{value:new x0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W0},alphaMap:{value:null},alphaMapTransform:{value:new W0},alphaTest:{value:0}}},oe={basic:{uniforms:Ft([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.fog]),vertexShader:K0.meshbasic_vert,fragmentShader:K0.meshbasic_frag},lambert:{uniforms:Ft([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,b0.lights,{emissive:{value:new X0(0)},envMapIntensity:{value:1}}]),vertexShader:K0.meshlambert_vert,fragmentShader:K0.meshlambert_frag},phong:{uniforms:Ft([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,b0.lights,{emissive:{value:new X0(0)},specular:{value:new X0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K0.meshphong_vert,fragmentShader:K0.meshphong_frag},standard:{uniforms:Ft([b0.common,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.roughnessmap,b0.metalnessmap,b0.fog,b0.lights,{emissive:{value:new X0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K0.meshphysical_vert,fragmentShader:K0.meshphysical_frag},toon:{uniforms:Ft([b0.common,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.gradientmap,b0.fog,b0.lights,{emissive:{value:new X0(0)}}]),vertexShader:K0.meshtoon_vert,fragmentShader:K0.meshtoon_frag},matcap:{uniforms:Ft([b0.common,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,{matcap:{value:null}}]),vertexShader:K0.meshmatcap_vert,fragmentShader:K0.meshmatcap_frag},points:{uniforms:Ft([b0.points,b0.fog]),vertexShader:K0.points_vert,fragmentShader:K0.points_frag},dashed:{uniforms:Ft([b0.common,b0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K0.linedashed_vert,fragmentShader:K0.linedashed_frag},depth:{uniforms:Ft([b0.common,b0.displacementmap]),vertexShader:K0.depth_vert,fragmentShader:K0.depth_frag},normal:{uniforms:Ft([b0.common,b0.bumpmap,b0.normalmap,b0.displacementmap,{opacity:{value:1}}]),vertexShader:K0.meshnormal_vert,fragmentShader:K0.meshnormal_frag},sprite:{uniforms:Ft([b0.sprite,b0.fog]),vertexShader:K0.sprite_vert,fragmentShader:K0.sprite_frag},background:{uniforms:{uvTransform:{value:new W0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K0.background_vert,fragmentShader:K0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W0}},vertexShader:K0.backgroundCube_vert,fragmentShader:K0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K0.cube_vert,fragmentShader:K0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K0.equirect_vert,fragmentShader:K0.equirect_frag},distance:{uniforms:Ft([b0.common,b0.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K0.distance_vert,fragmentShader:K0.distance_frag},shadow:{uniforms:Ft([b0.lights,b0.fog,{color:{value:new X0(0)},opacity:{value:1}}]),vertexShader:K0.shadow_vert,fragmentShader:K0.shadow_frag}};oe.physical={uniforms:Ft([oe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new W0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W0},sheen:{value:0},sheenColor:{value:new X0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W0},attenuationDistance:{value:0},attenuationColor:{value:new X0(0)},specularColor:{value:new X0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W0}}]),vertexShader:K0.meshphysical_vert,fragmentShader:K0.meshphysical_frag};const C1={r:0,b:0,g:0},P5=new ot,ca=new W0;ca.set(-1,0,0,0,1,0,0,0,1);function L5(i,t,e,n,s,r){const a=new X0(0);let o=s===!0?0:1,c,l,h=null,d=0,f=null;function u(E){let v=E.isScene===!0?E.background:null;if(v&&v.isTexture){const S=E.backgroundBlurriness>0;v=t.get(v,S)}return v}function x(E){let v=!1;const S=u(E);S===null?m(a,o):S&&S.isColor&&(m(S,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(E,v){const S=u(v);S&&S.isCubeTexture?(l===void 0&&(l=new wt(new en(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Cn(oe.backgroundCube.uniforms),vertexShader:oe.backgroundCube.vertexShader,fragmentShader:oe.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P5.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ca),l.material.toneMapped=et.getTransfer(S.colorSpace)!==lt,(h!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wt(new K1(2,2),new sn({name:"BackgroundMaterial",uniforms:Cn(oe.background.uniforms),vertexShader:oe.background.vertexShader,fragmentShader:oe.background.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,v){E.getRGB(C1,aa(i)),e.buffers.color.setClear(C1.r,C1.g,C1.b,v,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:x,addToRenderList:A,dispose:p}}function D5(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(N,O,z,C,V){let $=!1;const W=d(N,C,z,O);r!==W&&(r=W,l(r.object)),$=u(N,C,z,V),$&&x(N,C,z,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(N,O,z,C),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,z,C){const V=C.wireframe===!0;let $=n[O.id];$===void 0&&($={},n[O.id]=$);const W=N.isInstancedMesh===!0?N.id:0;let i0=$[W];i0===void 0&&(i0={},$[W]=i0);let B=i0[z.id];B===void 0&&(B={},i0[z.id]=B);let Z=B[V];return Z===void 0&&(Z=f(c()),B[V]=Z),Z}function f(N){const O=[],z=[],C=[];for(let V=0;V<e;V++)O[V]=0,z[V]=0,C[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:C,object:N,attributes:{},index:null}}function u(N,O,z,C){const V=r.attributes,$=O.attributes;let W=0;const i0=z.getAttributes();for(const B in i0)if(i0[B].location>=0){const e0=V[B];let T0=$[B];if(T0===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(T0=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(T0=N.instanceColor)),e0===void 0||e0.attribute!==T0||T0&&e0.data!==T0.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function x(N,O,z,C){const V={},$=O.attributes;let W=0;const i0=z.getAttributes();for(const B in i0)if(i0[B].location>=0){let e0=$[B];e0===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(e0=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(e0=N.instanceColor));const T0={};T0.attribute=e0,e0&&e0.data&&(T0.data=e0.data),V[B]=T0,W++}r.attributes=V,r.attributesNum=W,r.index=C}function A(){const N=r.newAttributes;for(let O=0,z=N.length;O<z;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){const z=r.newAttributes,C=r.enabledAttributes,V=r.attributeDivisors;z[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),V[N]!==O&&(i.vertexAttribDivisor(N,O),V[N]=O)}function E(){const N=r.newAttributes,O=r.enabledAttributes;for(let z=0,C=O.length;z<C;z++)O[z]!==N[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function v(N,O,z,C,V,$,W){W===!0?i.vertexAttribIPointer(N,O,z,V,$):i.vertexAttribPointer(N,O,z,C,V,$)}function S(N,O,z,C){A();const V=C.attributes,$=z.getAttributes(),W=O.defaultAttributeValues;for(const i0 in $){const B=$[i0];if(B.location>=0){let Z=V[i0];if(Z===void 0&&(i0==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),i0==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){const e0=Z.normalized,T0=Z.itemSize,E0=t.get(Z);if(E0===void 0)continue;const Q=E0.buffer,l0=E0.type,v0=E0.bytesPerElement,U0=l0===i.INT||l0===i.UNSIGNED_INT||Z.gpuType===Cs;if(Z.isInterleavedBufferAttribute){const y0=Z.data,G0=y0.isInterleavedBuffer===!0?y0.stride:y0.itemSize,dt=Z.offset;if(y0.isInstancedInterleavedBuffer||y0.isInstancedBufferAttribute){for(let B0=0;B0<B.locationSize;B0++)p(B.location+B0,y0.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=y0.meshPerAttribute*y0.count)}else for(let B0=0;B0<B.locationSize;B0++)m(B.location+B0);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let B0=0;B0<B.locationSize;B0++)v(B.location+B0,T0/B.locationSize,l0,e0,G0*v0,(dt+T0/B.locationSize*B0)*v0,U0)}else{if(Z.isInstancedBufferAttribute){for(let y0=0;y0<B.locationSize;y0++)p(B.location+y0,Z.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let y0=0;y0<B.locationSize;y0++)m(B.location+y0);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let y0=0;y0<B.locationSize;y0++)v(B.location+y0,T0/B.locationSize,l0,e0,T0*v0,T0/B.locationSize*y0*v0,U0)}}else if(W!==void 0){const e0=W[i0];if(e0!==void 0)switch(e0.length){case 2:i.vertexAttrib2fv(B.location,e0);break;case 3:i.vertexAttrib3fv(B.location,e0);break;case 4:i.vertexAttrib4fv(B.location,e0);break;default:i.vertexAttrib1fv(B.location,e0)}}}}E()}function w(){D();for(const N in n){const O=n[N];for(const z in O){const C=O[z];for(const V in C){const $=C[V];for(const W in $)h($[W].object),delete $[W];delete C[V]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const O=n[N.id];for(const z in O){const C=O[z];for(const V in C){const $=C[V];for(const W in $)h($[W].object),delete $[W];delete C[V]}}delete n[N.id]}function g(N){for(const O in n){const z=n[O];for(const C in z){const V=z[C];if(V[N.id]===void 0)continue;const $=V[N.id];for(const W in $)h($[W].object),delete $[W];delete V[N.id]}}}function M(N){for(const O in n){const z=n[O],C=N.isInstancedMesh===!0?N.id:0,V=z[C];if(V!==void 0){for(const $ in V){const W=V[$];for(const i0 in W)h(W[i0].object),delete W[i0];delete V[$]}delete z[C],Object.keys(z).length===0&&delete n[O]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:A,enableAttribute:m,disableUnusedAttributes:E}}function N5(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function I5(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==ce&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const M=g===de&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Wt&&g!==le&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(k0("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&k0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&k0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:S,maxSamples:w,samples:T}}function U5(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new be,o=new W0,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const x=d.clippingPlanes,A=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,v=E*4;let S=p.clippingState||null;c.value=S,S=h(x,f,v,u);for(let w=0;w!==v;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,x){const A=d!==null?d.length:0;let m=null;if(A!==0){if(m=c.value,x!==!0||m===null){const p=u+A*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=u;v!==A;++v,S+=4)a.copy(d[v]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}class Js extends he{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Z3(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Cn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:yn});r.uniforms.tEquirect.value=e;const a=new wt(s,r),o=e.minFilter;return e.minFilter===Oe&&(e.minFilter=Ht),new bs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const jr=256,F5=3,O5=20,ha=256,ua=16,B5=3,z5=new F,H5=new X0;class Z1{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bs(1,10,null),this._boxMesh=new wt(new en(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=z5}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,x=c.autoClearStencil,A=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,A===null&&(t.background=c.getClearColor(H5));const m=new bs(n,s,h);return m.position.copy(o),m.update(c,t),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=x,t.background=A,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n3(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e3(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(jr,Eo(t))}_fromTexture(t,e){t.mapping===bn||t.mapping===Kn?this._setSize(t.image.length===0?jr:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=t3(t,!1,!1),n=Math.log2(t)-F5;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=t3(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===bn||t.mapping===Kn?(this._cubemapMaterial===null&&(this._cubemapMaterial=n3()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=e3()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=G5(),this._integrationMaterial=k5());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ua);for(let a=0;a<=n;a++){const o=Z1.lodToRoughness(a,n);if(a>n-B5)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const c=o>0?Math.log2(e)+.5*Math.log2(6/(ha*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=V5());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function t3(i,t,e){return new Js(i,{minFilter:Oe,generateMipmaps:t,type:de,colorSpace:W1,depthBuffer:e})}function n1(i,t,e){return new sn({name:i,uniforms:t,vertexShader:K0.cube_vert,fragmentShader:e,side:Gt,blending:yn,depthTest:!1,depthWrite:!1})}function G5(){return n1("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ha}u

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
	`)}function k5(){return n1("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ua}},`

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
	`)}function V5(){return n1("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${O5}
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
	`)}function e3(){return n1("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function n3(){return n1("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function W5(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===ti||u===ei)if(t.has(f)){const x=t.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const A=new Js(x.height);return A.fromEquirectangularTexture(i,f),t.set(f,A),f.addEventListener("dispose",l),o(A.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,x=u===ti||u===ei,A=u===bn||u===Kn;if(x||A){let m=e.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Z1(i)),m=x?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const E=f.image;return x&&E&&E.height>0||A&&E&&c(E)?(n===null&&(n=new Z1(i)),m=x?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===ti?f.mapping=bn:u===ei&&(f.mapping=Kn),f}function c(f){let u=0;const x=6;for(let A=0;A<x;A++)f[A]!==void 0&&u++;return u===x}function l(f){const u=f.target;u.removeEventListener("dispose",l);const x=t.get(u);x!==void 0&&(t.delete(u),x.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const x=e.get(u);x!==void 0&&(e.delete(u),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function X5(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&B1("WebGLRenderer: "+n+" extension not supported."),s}}}function Y5(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}function c(x){x.index!==null&&t.remove(x.index);for(const m in x.attributes)t.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);const A=r.get(x);A&&(t.remove(A),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(x,A){return s[A.id]!==void 0||(A.addEventListener("dispose",o),s[A.id]=new WeakRef(A),a.register(A,A.id,A),e.memory.geometries++),A}function h(x){const A=x.attributes;for(const m in A)t.update(A[m],i.ARRAY_BUFFER)}function d(x){const A=x.index,m=x.attributes.position;let p=0;if(m===void 0)return;const E=A!==null?A.array.length:m.array.length/3-1,v=m.count>=65535?Bs:Os,S=new v(Math.ceil(E/3)*6,1),w=S.array;if(A!==null){const g=A.array;p=A.version;for(let M=0,D=0;M<E;M+=3){const R=g[M+0],N=g[M+1],O=g[M+2];w[D++]=R,w[D++]=N,w[D++]=N,w[D++]=O,w[D++]=O,w[D++]=R}}else{p=m.version;for(let g=0,M=0;g<E;g+=3){const D=g+0,R=g+1,N=g+2;w[M++]=D,w[M++]=R,w[M++]=R,w[M++]=N,w[M++]=N,w[M++]=D}}S.version=p;const T=r.get(x);T&&t.remove(T),r.set(x,S)}function f(x){const A=r.get(x);if(A){const m=x.index;m!==null&&A.version<m.version&&d(x)}else d(x);return r.get(x)}function u(){for(const x in s){const A=s[x].deref();A!==void 0&&c(A)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function q5(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let A=0;for(let m=0;m<u;m++)A+=f[m];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Z5(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function K5(i,t,e){const n=new WeakMap,s=new ct;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;u===!0&&(v=1),x===!0&&(v=2),A===!0&&(v=3);let S=o.attributes.position.count*v,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*w*4*d),g=new W3(T,S,w,d);g.type=le,g.needsUpdate=!0;const M=v*4;for(let R=0;R<d;R++){const N=m[R],O=p[R],z=E[R],C=S*w*4*R;for(let V=0;V<N.count;V++){const $=V*M;u===!0&&(s.fromBufferAttribute(N,V),T[C+$+0]=s.x,T[C+$+1]=s.y,T[C+$+2]=s.z,T[C+$+3]=0),x===!0&&(s.fromBufferAttribute(O,V),T[C+$+4]=s.x,T[C+$+5]=s.y,T[C+$+6]=s.z,T[C+$+7]=0),A===!0&&(s.fromBufferAttribute(z,V),T[C+$+8]=s.x,T[C+$+9]=s.y,T[C+$+10]=s.z,T[C+$+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:g,size:new x0(S,w)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let A=0;A<l.length;A++)u+=l[A];const x=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function J5(i,t,e,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const $5={[T3]:"LINEAR_TONE_MAPPING",[A3]:"REINHARD_TONE_MAPPING",[w3]:"CINEON_TONE_MAPPING",[R3]:"ACES_FILMIC_TONE_MAPPING",[P3]:"AGX_TONE_MAPPING",[L3]:"NEUTRAL_TONE_MAPPING",[C3]:"CUSTOM_TONE_MAPPING"};function Q5(i,t,e,n,s,r){const a=new he(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new Zt;h.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _t([0,2,0,0,2,0],2));const d=new F2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new wt(h,d),u=new Ks(-1,1,1,-1,0,1);let x=null,A=null,m=!1,p,E=null,v=[],S=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),c!==null&&c.setSize(w,T);for(let g=0;g<v.length;g++){const M=v[g];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){v=w,S=v.length>0&&v[0].isRenderPass===!0;const T=a.width,g=a.height;v.length>0&&o===null&&(o=new he(T,g,{type:de,depthBuffer:!1,stencilBuffer:!1}),c=new he(T,g,{type:de,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&v.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new wn(T,g),r===!0&&(l.format=Be,l.type=Tn)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<v.length;D++){const R=v[D];R.setSize&&R.setSize(T,g),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,T){if(m||w.toneMapping===we&&v.length===0)return!1;if(E=T,T!==null){const g=T.width,M=T.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return S===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=we,!0},this.hasRenderPass=function(){return S},this.end=function(w,T){w.toneMapping=p,m=!0;let g=a,M=o;for(let D=0;D<v.length;D++){const R=v[D];R.enabled!==!1&&(R.render(w,M,g,T),R.needsSwap!==!1&&(g=M,M=M===o?c:o))}if(x!==w.outputColorSpace||A!==w.toneMapping){x=w.outputColorSpace,A=w.toneMapping,d.defines={},et.getTransfer(x)===lt&&(d.defines.SRGB_TRANSFER="");const D=$5[A];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(E),w.render(f,u),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}const da=new Bt,fa=new wn(1,1),pa=new K3(1),ma=new W3,ga=new Do,_a=new Z3,i3=[],s3=[],r3=new Float32Array(16),a3=new Float32Array(9),o3=new Float32Array(4);function Ln(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=i3[s];if(r===void 0&&(r=new Float32Array(s),i3[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Et(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function bt(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function J1(i,t){let e=s3[t];e===void 0&&(e=new Int32Array(t),s3[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j5(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Et(e,t))return;i.uniform2fv(this.addr,t),bt(e,t)}}function e6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Et(e,t))return;i.uniform3fv(this.addr,t),bt(e,t)}}function n6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Et(e,t))return;i.uniform4fv(this.addr,t),bt(e,t)}}function i6(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Et(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),bt(e,t)}else{if(Et(e,n))return;o3.set(n),i.uniformMatrix2fv(this.addr,!1,o3),bt(e,n)}}function s6(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Et(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),bt(e,t)}else{if(Et(e,n))return;a3.set(n),i.uniformMatrix3fv(this.addr,!1,a3),bt(e,n)}}function r6(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Et(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),bt(e,t)}else{if(Et(e,n))return;r3.set(n),i.uniformMatrix4fv(this.addr,!1,r3),bt(e,n)}}function a6(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Et(e,t))return;i.uniform2iv(this.addr,t),bt(e,t)}}function l6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Et(e,t))return;i.uniform3iv(this.addr,t),bt(e,t)}}function c6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Et(e,t))return;i.uniform4iv(this.addr,t),bt(e,t)}}function h6(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Et(e,t))return;i.uniform2uiv(this.addr,t),bt(e,t)}}function d6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Et(e,t))return;i.uniform3uiv(this.addr,t),bt(e,t)}}function f6(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Et(e,t))return;i.uniform4uiv(this.addr,t),bt(e,t)}}function $1(i){return i.version===0&&(i.compareFunction=k3,i.needsUpdate=!0),i}function p6(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=$1(fa):r=da,e.setTexture2D(t||r,s)}function m6(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ga,s)}function g6(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=$1(pa):r=_a,e.setTextureCube(t||r,s)}function _6(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ma,s)}function x6(i){switch(i){case 5126:return j5;case 35664:return t6;case 35665:return e6;case 35666:return n6;case 35674:return i6;case 35675:return s6;case 35676:return r6;case 5124:case 35670:return a6;case 35667:case 35671:return o6;case 35668:case 35672:return l6;case 35669:case 35673:return c6;case 5125:return h6;case 36294:return u6;case 36295:return d6;case 36296:return f6;case 35678:case 36198:case 36298:case 36306:case 35682:return p6;case 35679:case 36299:case 36307:return m6;case 35680:case 36300:case 36308:case 36293:return g6;case 36289:case 36303:case 36311:case 36292:return _6}}function v6(i,t){i.uniform1fv(this.addr,t)}function S6(i,t){const e=Ln(t,this.size,2);i.uniform2fv(this.addr,e)}function M6(i,t){const e=Ln(t,this.size,3);i.uniform3fv(this.addr,e)}function y6(i,t){const e=Ln(t,this.size,4);i.uniform4fv(this.addr,e)}function E6(i,t){const e=Ln(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b6(i,t){const e=Ln(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function T6(i,t){const e=Ln(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A6(i,t){i.uniform1iv(this.addr,t)}function w6(i,t){i.uniform2iv(this.addr,t)}function R6(i,t){i.uniform3iv(this.addr,t)}function C6(i,t){i.uniform4iv(this.addr,t)}function P6(i,t){i.uniform1uiv(this.addr,t)}function L6(i,t){i.uniform2uiv(this.addr,t)}function D6(i,t){i.uniform3uiv(this.addr,t)}function N6(i,t){i.uniform4uiv(this.addr,t)}function I6(i,t,e){const n=this.cache,s=t.length,r=J1(e,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$1(fa):a=da;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function U6(i,t,e){const n=this.cache,s=t.length,r=J1(e,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ga,r[a])}function F6(i,t,e){const n=this.cache,s=t.length,r=J1(e,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=$1(pa):a=_a;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function O6(i,t,e){const n=this.cache,s=t.length,r=J1(e,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ma,r[a])}function B6(i){switch(i){case 5126:return v6;case 35664:return S6;case 35665:return M6;case 35666:return y6;case 35674:return E6;case 35675:return b6;case 35676:return T6;case 5124:case 35670:return A6;case 35667:case 35671:return w6;case 35668:case 35672:return R6;case 35669:case 35673:return C6;case 5125:return P6;case 36294:return L6;case 36295:return D6;case 36296:return N6;case 35678:case 36198:case 36298:case 36306:case 35682:return I6;case 35679:case 36299:case 36307:return U6;case 35680:case 36300:case 36308:case 36293:return F6;case 36289:case 36303:case 36311:case 36292:return O6}}class z6{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x6(e.type)}}class H6{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B6(e.type)}}class G6{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ci=/(\w+)(\])?(\[|\.)?/g;function l3(i,t){i.seq.push(t),i.map[t.id]=t}function k6(i,t,e){const n=i.name,s=n.length;for(Ci.lastIndex=0;;){const r=Ci.exec(n),a=Ci.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){l3(e,l===void 0?new z6(o,i,t):new H6(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new G6(o),l3(e,d)),e=d}}}class H1{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);k6(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function c3(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const V6=37297;let W6=0;function X6(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const h3=new W0;function Y6(i){et._getMatrix(h3,et.workingColorSpace,i);const t=`mat3( ${h3.elements.map(e=>e.toFixed(4))} )`;switch(et.getTransfer(i)){case X1:return[t,"LinearTransferOETF"];case lt:return[t,"sRGBTransferOETF"];default:return k0("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function u3(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+X6(i.getShaderSource(t),o)}else return r}function q6(i,t){const e=Y6(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Z6={[T3]:"Linear",[A3]:"Reinhard",[w3]:"Cineon",[R3]:"ACESFilmic",[P3]:"AgX",[L3]:"Neutral",[C3]:"Custom"};function K6(i,t){const e=Z6[t];return e===void 0?(k0("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const P1=new F;function J6(){et.getLuminanceCoefficients(P1);const i=P1.x.toFixed(4),t=P1.y.toFixed(4),e=P1.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $6(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hn).join(`
`)}function Q6(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j6(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hn(i){return i!==""}function d3(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function f3(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t9=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ts(i){return i.replace(t9,e9)}function e9(i,t){const e=K0[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ts(e)}const n9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p3(i){return i.replace(n9,i9)}function i9(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function m3(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const s9={[N1]:"SHADOWMAP_TYPE_PCF",[Bn]:"SHADOWMAP_TYPE_VSM"};function r9(i){return s9[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a9={[Kn]:"ENVMAP_MODE_REFRACTION"};function o9(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a9[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l9={[Rs]:"ENVMAP_BLENDING_MULTIPLY",[ro]:"ENVMAP_BLENDING_MIX",[ao]:"ENVMAP_BLENDING_ADD"};function c9(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l9[i.combine]||"ENVMAP_BLENDING_NONE"}function h9(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=r9(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=o9(e),d=c9(e),f=$6(e),u=Q6(r),x=s.createProgram();let A,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Hn).join(`
`),A.length>0&&(A+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Hn).join(`
`),m.length>0&&(m+=`
`)):(A=[m3(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hn).join(`
`),m=[m3(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==we?"#define TONE_MAPPING":"",e.toneMapping!==we?K0.tonemapping_pars_fragment:"",e.toneMapping!==we?K6("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",K0.colorspace_pars_fragment,q6("linearToOutputTexel",e.outputColorSpace),J6(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hn).join(`
`)),a=Ts(a),a=d3(a,e),a=f3(a,e),o=Ts(o),o=d3(o,e),o=f3(o,e),a=p3(a),o=p3(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,A=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",e.glslVersion===mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=p+A+a,v=p+m+o,S=c3(s,s.VERTEX_SHADER,E),w=c3(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(w)||"",C=N.trim(),V=O.trim(),$=z.trim();let W=!0,i0=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{const B=u3(s,S,"vertex"),Z=u3(s,w,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+B+`
`+Z)}else C!==""?k0("WebGLProgram: Program Info Log:",C):(V===""||$==="")&&(i0=!1);i0&&(R.diagnostics={runnable:W,programLog:C,vertexShader:{log:V,prefix:A},fragmentShader:{log:$,prefix:m}})}s.deleteShader(S),s.deleteShader(w),g=new H1(s,x),M=j6(s,x)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,V6)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W6++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let u9=0;class d9{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f9(t),e.set(t,n)),n}}class f9{constructor(t){this.id=u9++,this.code=t,this.usedTimes=0}}function p9(i){return i===tn||i===k1||i===V1}function m9(i,t,e,n,s,r){const a=new X3,o=new d9,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return c.add(g),g===0?"uv":`uv${g}`}function x(g,M,D,R,N,O){const z=R.fog,C=N.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=t.get(g.envMap||V,$),i0=f[g.type];let B=n.precision;g.precision!==null&&(B=n.getMaxPrecision(g.precision),B!==g.precision&&k0("WebGLProgram.getParameters:",g.precision,"not supported, using",B,"instead."));const Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,e0=Z!==void 0?Z.length:0;let T0=0;C.morphAttributes.position!==void 0&&(T0=1),C.morphAttributes.normal!==void 0&&(T0=2),C.morphAttributes.color!==void 0&&(T0=3);let E0,Q,l0,v0;if(i0){const _0=oe[i0];E0=_0.vertexShader,Q=_0.fragmentShader}else{E0=g.vertexShader,Q=g.fragmentShader;const _0=o.getVertexShaderStage(g),Q0=o.getFragmentShaderStage(g);o.update(g,_0,Q0),l0=_0.id,v0=Q0.id}const U0=i.getRenderTarget(),y0=i.state.buffers.depth.getReversed(),G0=N.isInstancedMesh===!0,dt=N.isBatchedMesh===!0,B0=!!g.map,$0=!!g.matcap,nt=!!W,Z0=nt&&W.isPMREMTexture===!0,gt=!!g.aoMap,ft=!!g.lightMap,Mt=!!g.bumpMap&&g.wireframe===!1,k=!!g.normalMap,s0=!!g.displacementMap,f0=!!g.emissiveMap,u0=!!g.metalnessMap,c0=!!g.roughnessMap,O0=g.anisotropy>0,P=g.clearcoat>0,z0=g.diffuseRoughness>0,V0=g.dispersion>0,C0=g.retroreflectivity>0,a0=g.iridescence>0,F0=g.sheen>0,m0=g.transmission>0,w0=O0&&!!g.anisotropyMap,b=P&&!!g.clearcoatMap,_=P&&!!g.clearcoatNormalMap,U=P&&!!g.clearcoatRoughnessMap,j=z0&&!!g.diffuseRoughnessMap,X=a0&&!!g.iridescenceMap,r0=a0&&!!g.iridescenceThicknessMap,o0=F0&&!!g.sheenColorMap,q=F0&&!!g.sheenRoughnessMap,K=!!g.specularMap,h0=!!g.specularColorMap,L=!!g.specularIntensityMap,t0=m0&&!!g.transmissionMap,J=m0&&!!g.thicknessMap,g0=!!g.gradientMap,d0=!!g.alphaMap,p0=g.alphaTest>0,N0=!!g.alphaHash,Y0=!!g.extensions;let n0=we;g.toneMapped&&(U0===null||U0.isXRRenderTarget===!0)&&(n0=i.toneMapping);const R0=Z0?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,H0={shaderID:i0,shaderType:g.type,shaderName:g.name,vertexShader:E0,fragmentShader:Q,defines:g.defines,customVertexShaderID:l0,customFragmentShaderID:v0,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:B,batching:dt,batchingColor:dt&&N._colorsTexture!==null,instancing:G0,instancingColor:G0&&N.instanceColor!==null,instancingMorph:G0&&N.morphTexture!==null,outputColorSpace:U0===null?i.outputColorSpace:U0.isXRRenderTarget===!0?U0.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:B0,matcap:$0,envMap:nt,envMapMode:nt&&W.mapping,envMapPMREM:Z0,envMapMaxLod:Z0?R0.length-1:null,envMapSize:Z0?R0[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Mt,normalMap:k,displacementMap:s0,emissiveMap:f0,normalMapObjectSpace:k&&g.normalMapType===co,normalMapTangentSpace:k&&g.normalMapType===vs,packedNormalMap:k&&g.normalMapType===vs&&p9(g.normalMap.format),metalnessMap:u0,roughnessMap:c0,anisotropy:O0,anisotropyMap:w0,clearcoat:P,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:U,diffuseRoughness:z0,diffuseRoughnessMap:j,dispersion:V0,retroreflection:C0,iridescence:a0,iridescenceMap:X,iridescenceThicknessMap:r0,sheen:F0,sheenColorMap:o0,sheenRoughnessMap:q,specularMap:K,specularColorMap:h0,specularIntensityMap:L,transmission:m0,transmissionMap:t0,thicknessMap:J,gradientMap:g0,opaque:g.transparent===!1&&g.blending===Wn&&g.alphaToCoverage===!1,alphaMap:d0,alphaTest:p0,alphaHash:N0,combine:g.combine,mapUv:B0&&u(g.map.channel),aoMapUv:gt&&u(g.aoMap.channel),lightMapUv:ft&&u(g.lightMap.channel),bumpMapUv:Mt&&u(g.bumpMap.channel),normalMapUv:k&&u(g.normalMap.channel),displacementMapUv:s0&&u(g.displacementMap.channel),emissiveMapUv:f0&&u(g.emissiveMap.channel),metalnessMapUv:u0&&u(g.metalnessMap.channel),roughnessMapUv:c0&&u(g.roughnessMap.channel),anisotropyMapUv:w0&&u(g.anisotropyMap.channel),clearcoatMapUv:b&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:X&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:r0&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:o0&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&u(g.sheenRoughnessMap.channel),specularMapUv:K&&u(g.specularMap.channel),specularColorMapUv:h0&&u(g.specularColorMap.channel),specularIntensityMapUv:L&&u(g.specularIntensityMap.channel),transmissionMapUv:t0&&u(g.transmissionMap.channel),thicknessMapUv:J&&u(g.thicknessMap.channel),alphaMapUv:d0&&u(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(k||O0),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(B0||d0),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&k===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:y0,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:e0,morphTextureStride:T0,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:O.filter(_0=>_0.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:n0,decodeVideoTexture:B0&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===lt,decodeVideoTextureEmissive:f0&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===lt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===te,flipSided:g.side===Gt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Y0&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&g.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return H0.vertexUv1s=c.has(1),H0.vertexUv2s=c.has(2),H0.vertexUv3s=c.has(3),c.clear(),H0}function A(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)M.push(D),M.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(m(M,g),p(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function m(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function p(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function E(g){const M=f[g.type];let D;if(M){const R=oe[M];D=N2.clone(R.uniforms)}else D=g.uniforms;return D}function v(g,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new h9(i,M,g,s),l.push(D),h.set(M,D)),D}function S(g){if(--g.usedTimes===0){const M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:A,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:T}}function g9(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _9(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function g3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _3(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,x,A,m,p){let E=i[t];return E===void 0?(E={id:f.id,object:f,geometry:u,material:x,materialVariant:a(f),groupOrder:A,renderOrder:f.renderOrder,z:m,group:p},i[t]=E):(E.id=f.id,E.object=f,E.geometry=u,E.material=x,E.materialVariant=a(f),E.groupOrder=A,E.renderOrder=f.renderOrder,E.z=m,E.group=p),t++,E}function c(f,u,x,A,m,p,E){E.reversedDepth===!0&&(m=-m);const v=o(f,u,x,A,m,p);x.transmission>0?n.push(v):x.transparent===!0?s.push(v):e.push(v)}function l(f,u,x,A,m,p){const E=o(f,u,x,A,m,p);x.transmission>0?n.unshift(E):x.transparent===!0?s.unshift(E):e.unshift(E)}function h(f,u){e.length>1&&e.sort(f||_9),n.length>1&&n.sort(u||g3),s.length>1&&s.sort(u||g3)}function d(){for(let f=t,u=i.length;f<u;f++){const x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function x9(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new _3,i.set(n,[a])):s>=r.length?(a=new _3,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v9(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new X0};break;case"SpotLight":e={position:new F,direction:new F,color:new X0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new X0,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new X0,groundColor:new X0};break;case"RectAreaLight":e={color:new X0,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function S9(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let M9=0;function y9(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E9(i){const t=new v9,e=S9(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new ot,a=new ot;function o(l){let h=0,d=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,x=0,A=0,m=0,p=0,E=0,v=0,S=0,w=0,T=0,g=0,M=0,D=0,R=0;l.sort(y9);for(let O=0,z=l.length;O<z;O++){const C=l[O],V=C.color,$=C.intensity,W=C.distance;let i0=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===tn?i0=C.shadow.map.texture:i0=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=V.r*$,d+=V.g*$,f+=V.b*$;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],$);R++}else if(C.isSunLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,e0=e.get(C);e0.shadowIntensity=Z.intensity,e0.shadowBias=Z.bias,e0.shadowNormalBias=Z.normalBias,e0.shadowRadius=Z.radius,e0.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[x]=e0,n.sunShadowMap[x]=i0;const T0=Z.getViewportCount();for(let E0=0;E0<T0;E0++)n.sunShadowMatrix[A+E0]=Z.getMatrix(E0),n.sunShadowCascade[A+E0]=Z._cascadeData[E0];A+=T0,x++}n.sun[u]=B,u++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,e0=e.get(C);e0.shadowIntensity=Z.intensity,e0.shadowBias=Z.bias,e0.shadowNormalBias=Z.normalBias,e0.shadowRadius=Z.radius,e0.shadowMapSize=Z.mapSize,n.directionalShadow[m]=e0,n.directionalShadowMap[m]=i0,n.directionalShadowMatrix[m]=C.shadow.matrix,w++}n.directional[m]=B,m++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(V).multiplyScalar($),B.distance=W,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[E]=B;const Z=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,Z.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[E]=Z.matrix,C.castShadow){const e0=e.get(C);e0.shadowIntensity=Z.intensity,e0.shadowBias=Z.bias,e0.shadowNormalBias=Z.normalBias,e0.shadowRadius=Z.radius,e0.shadowMapSize=Z.mapSize,n.spotShadow[E]=e0,n.spotShadowMap[E]=i0,g++}E++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(V).multiplyScalar($),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=B,v++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Z=C.shadow,e0=e.get(C);e0.shadowIntensity=Z.intensity,e0.shadowBias=Z.bias,e0.shadowNormalBias=Z.normalBias,e0.shadowRadius=Z.radius,e0.shadowMapSize=Z.mapSize,e0.shadowCameraNear=Z.camera.near,e0.shadowCameraFar=Z.camera.far,n.pointShadow[p]=e0,n.pointShadowMap[p]=i0,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=B,p++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar($),B.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[S]=B,S++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=b0.LTC_FLOAT_1,n.rectAreaLTC2=b0.LTC_FLOAT_2):(n.rectAreaLTC1=b0.LTC_HALF_1,n.rectAreaLTC2=b0.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.sunLength!==u||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==E||N.rectAreaLength!==v||N.hemiLength!==S||N.numSunShadows!==x||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==M||N.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=m,n.spot.length=E,n.rectArea.length=v,n.point.length=p,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,N.sunLength=u,N.directionalLength=m,N.pointLength=p,N.spotLength=E,N.rectAreaLength=v,N.hemiLength=S,N.numSunShadows=x,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=M,N.numLightProbes=R,n.version=M9++)}function c(l,h){let d=0,f=0,u=0,x=0,A=0,m=0;const p=h.matrixWorldInverse;for(let E=0,v=l.length;E<v;E++){const S=l[E];if(S.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(S.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const w=n.rectArea[A];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),A++}else if(S.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function x3(i){const t=new E9(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function c(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function b9(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new x3(i),t.set(s,[o])):r>=a.length?(o=new x3(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const T9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A9=`uniform sampler2D shadow_pass;
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
}`,w9=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],R9=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],v3=new ot,On=new F,Pi=new F;function C9(i,t,e){let n=new An;const s=new x0,r=new x0,a=new ct,o=new O2,c=new B2,l={},h=e.maxTextureSize,d={[je]:Gt,[Gt]:je,[te]:te},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:T9,fragmentShader:A9}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const x=new Zt;x.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N1;let p=this.type;this.render=function(T,g,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ha&&(k0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=N1);const D=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==this.type;z&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(V=>V.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,V=T.length;C<V;C++){const $=T[C],W=$.shadow;if(W===void 0){k0("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const i0=W.getFrameExtents();s.multiply(i0),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/i0.x),s.x=r.x*i0.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/i0.y),s.y=r.y*i0.y,W.mapSize.y=r.y));const B=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=B,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Bn){if($.isPointLight){k0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new he(s.x,s.y,{format:tn,type:de,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new wn(s.x,s.y,le),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=ze,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct}else $.isPointLight?(W.map=new Js(s.x),W.map.depthTexture=new K3(s.x,ue)):(W.map=new he(s.x,s.y),W.map.depthTexture=new wn(s.x,s.y,ue)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=ze,this.type===N1?(W.map.depthTexture.compareFunction=B?G3:H3,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();$.isPointLight!==!0&&W.updateMatrices($,M);const e0=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:M.layers;for(let T0=0;T0<Z;T0++){const E0=W.getCamera(T0);if($.isPointLight){const Q=W.camera,l0=W.matrix,v0=$.distance||Q.far;v0!==Q.far&&(Q.far=v0,Q.updateProjectionMatrix()),On.setFromMatrixPosition($.matrixWorld),Q.position.copy(On),Pi.copy(Q.position),Pi.add(w9[T0]),Q.up.copy(R9[T0]),Q.lookAt(Pi),Q.updateMatrixWorld(),l0.makeTranslation(-On.x,-On.y,-On.z),v3.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(v3,Q.coordinateSystem,Q.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,T0),i.clear();else{T0===0&&(i.setRenderTarget(W.map),i.clear());const Q=W.getViewport(T0);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),O.viewport(a)}n=W.getFrustum(T0),S(g,M,E0,$,e0,this.type)}W.isPointLightShadow!==!0&&this.type===Bn&&E(W,M),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,R,N)};function E(T,g){const M=t.update(A);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new he(s.x,s.y,{format:tn,type:de}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,M,f,A,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,M,u,A,null)}function v(T,g,M,D){let R=null;const N=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const O=R.uuid,z=g.uuid;let C=l[O];C===void 0&&(C={},l[O]=C);let V=C[z];V===void 0&&(V=R.clone(),C[z]=V,g.addEventListener("dispose",w)),R=V}if(R.visible=g.visible,R.wireframe=g.wireframe,D===Bn?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=i.properties.get(R);O.light=M}return R}function S(T,g,M,D,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Bn)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const C=t.update(T),V=T.material;if(Array.isArray(V)){const $=C.groups;for(let W=0,i0=$.length;W<i0;W++){const B=$[W],Z=V[B.materialIndex];if(Z&&Z.visible){const e0=v(T,Z,D,N);T.onBeforeShadow(i,T,g,M,C,e0,B),i.renderBufferDirect(M,null,C,e0,T,B),T.onAfterShadow(i,T,g,M,C,e0,B)}}}else if(V.visible){const $=v(T,V,D,N);T.onBeforeShadow(i,T,g,M,C,$,null),i.renderBufferDirect(M,null,C,$,T,null),T.onAfterShadow(i,T,g,M,C,$,null)}}const z=T.children;for(let C=0,V=z.length;C<V;C++)S(z[C],g,M,D,R,N)}function w(T){T.target.removeEventListener("dispose",w);for(const M in l){const D=l[M],R=T.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function P9(i,t){function e(){let L=!1;const t0=new ct;let J=null;const g0=new ct(0,0,0,0);return{setMask:function(d0){J!==d0&&!L&&(i.colorMask(d0,d0,d0,d0),J=d0)},setLocked:function(d0){L=d0},setClear:function(d0,p0,N0,Y0,n0){n0===!0&&(d0*=Y0,p0*=Y0,N0*=Y0),t0.set(d0,p0,N0,Y0),g0.equals(t0)===!1&&(i.clearColor(d0,p0,N0,Y0),g0.copy(t0))},reset:function(){L=!1,J=null,g0.set(-1,0,0,0)}}}function n(){let L=!1,t0=!1,J=null,g0=null,d0=null;return{setReversed:function(p0){if(t0!==p0){const N0=t.get("EXT_clip_control");p0?N0.clipControlEXT(N0.LOWER_LEFT_EXT,N0.ZERO_TO_ONE_EXT):N0.clipControlEXT(N0.LOWER_LEFT_EXT,N0.NEGATIVE_ONE_TO_ONE_EXT),t0=p0;const Y0=d0;d0=null,this.setClear(Y0)}},getReversed:function(){return t0},setTest:function(p0){p0?y0(i.DEPTH_TEST):G0(i.DEPTH_TEST)},setMask:function(p0){J!==p0&&!L&&(i.depthMask(p0),J=p0)},setFunc:function(p0){if(t0&&(p0=Mo[p0]),g0!==p0){switch(p0){case Ii:i.depthFunc(i.NEVER);break;case Ui:i.depthFunc(i.ALWAYS);break;case Fi:i.depthFunc(i.LESS);break;case Zn:i.depthFunc(i.LEQUAL);break;case Oi:i.depthFunc(i.EQUAL);break;case Bi:i.depthFunc(i.GEQUAL);break;case zi:i.depthFunc(i.GREATER);break;case Hi:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}g0=p0}},setLocked:function(p0){L=p0},setClear:function(p0){d0!==p0&&(d0=p0,t0&&(p0=1-p0),i.clearDepth(p0))},reset:function(){L=!1,J=null,g0=null,d0=null,t0=!1}}}function s(){let L=!1,t0=null,J=null,g0=null,d0=null,p0=null,N0=null,Y0=null,n0=null;return{setTest:function(R0){L||(R0?y0(i.STENCIL_TEST):G0(i.STENCIL_TEST))},setMask:function(R0){t0!==R0&&!L&&(i.stencilMask(R0),t0=R0)},setFunc:function(R0,H0,_0){(J!==R0||g0!==H0||d0!==_0)&&(i.stencilFunc(R0,H0,_0),J=R0,g0=H0,d0=_0)},setOp:function(R0,H0,_0){(p0!==R0||N0!==H0||Y0!==_0)&&(i.stencilOp(R0,H0,_0),p0=R0,N0=H0,Y0=_0)},setLocked:function(R0){L=R0},setClear:function(R0){n0!==R0&&(i.clearStencil(R0),n0=R0)},reset:function(){L=!1,t0=null,J=null,g0=null,d0=null,p0=null,N0=null,Y0=null,n0=null}}}const r=new e,a=new n,o=new s;let c={};const l=new WeakMap;let h={},d={},f={},u=new WeakMap,x=[],A=null,m=!1,p=null,E=null,v=null,S=null,w=null,T=null,g=null,M=new X0(0,0,0),D=0,R=!1,N=null,O=null,z=null,C=null,V=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,i0=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(i0=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=i0>=1):B.indexOf("OpenGL ES")!==-1&&(i0=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=i0>=2);let Z=null,e0={};const T0=i.getParameter(i.SCISSOR_BOX),E0=i.getParameter(i.VIEWPORT),Q=new ct().fromArray(T0),l0=new ct().fromArray(E0);function v0(L,t0,J,g0){const d0=new Uint8Array(4),p0=i.createTexture();i.bindTexture(L,p0),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N0=0;N0<J;N0++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(t0,0,i.RGBA,1,1,g0,0,i.RGBA,i.UNSIGNED_BYTE,d0):i.texImage2D(t0+N0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,d0);return p0}const U0={};U0[i.TEXTURE_2D]=v0(i.TEXTURE_2D,i.TEXTURE_2D,1),U0[i.TEXTURE_CUBE_MAP]=v0(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U0[i.TEXTURE_2D_ARRAY]=v0(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U0[i.TEXTURE_3D]=v0(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),y0(i.DEPTH_TEST),a.setFunc(Zn),Mt(!1),k(ur),y0(i.CULL_FACE),gt(yn);function y0(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function G0(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function dt(L,t0){return f[L]!==t0?(i.bindFramebuffer(L,t0),f[L]=t0,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=t0),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=t0),!0):!1}function B0(L,t0){let J=x,g0=!1;if(L){J=u.get(t0),J===void 0&&(J=[],u.set(t0,J));const d0=L.textures;if(J.length!==d0.length||J[0]!==i.COLOR_ATTACHMENT0){for(let p0=0,N0=d0.length;p0<N0;p0++)J[p0]=i.COLOR_ATTACHMENT0+p0;J.length=d0.length,g0=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,g0=!0);g0&&i.drawBuffers(J)}function $0(L){return A!==L?(i.useProgram(L),A=L,!0):!1}const nt={[vn]:i.FUNC_ADD,[ka]:i.FUNC_SUBTRACT,[Va]:i.FUNC_REVERSE_SUBTRACT};nt[Wa]=i.MIN,nt[Xa]=i.MAX;const Z0={[Ya]:i.ZERO,[qa]:i.ONE,[Za]:i.SRC_COLOR,[E3]:i.SRC_ALPHA,[to]:i.SRC_ALPHA_SATURATE,[Qa]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[Ka]:i.ONE_MINUS_SRC_COLOR,[b3]:i.ONE_MINUS_SRC_ALPHA,[ja]:i.ONE_MINUS_DST_COLOR,[$a]:i.ONE_MINUS_DST_ALPHA,[eo]:i.CONSTANT_COLOR,[no]:i.ONE_MINUS_CONSTANT_COLOR,[io]:i.CONSTANT_ALPHA,[so]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(L,t0,J,g0,d0,p0,N0,Y0,n0,R0){if(L===yn){m===!0&&(G0(i.BLEND),m=!1);return}if(m===!1&&(y0(i.BLEND),m=!0),L!==Ga){if(L!==p||R0!==R){if((E!==vn||w!==vn)&&(i.blendEquation(i.FUNC_ADD),E=vn,w=vn),R0)switch(L){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case fr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",L);break}else switch(L){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fr:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pr:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",L);break}v=null,S=null,T=null,g=null,M.set(0,0,0),D=0,p=L,R=R0}return}d0=d0||t0,p0=p0||J,N0=N0||g0,(t0!==E||d0!==w)&&(i.blendEquationSeparate(nt[t0],nt[d0]),E=t0,w=d0),(J!==v||g0!==S||p0!==T||N0!==g)&&(i.blendFuncSeparate(Z0[J],Z0[g0],Z0[p0],Z0[N0]),v=J,S=g0,T=p0,g=N0),(Y0.equals(M)===!1||n0!==D)&&(i.blendColor(Y0.r,Y0.g,Y0.b,n0),M.copy(Y0),D=n0),p=L,R=!1}function ft(L,t0){L.side===te?G0(i.CULL_FACE):y0(i.CULL_FACE);let J=L.side===Gt;t0&&(J=!J),Mt(J),L.blending===Wn&&L.transparent===!1?gt(yn):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const g0=L.stencilWrite;o.setTest(g0),g0&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),f0(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?y0(i.SAMPLE_ALPHA_TO_COVERAGE):G0(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function k(L){L!==Ba?(y0(i.CULL_FACE),L!==O&&(L===ur?i.cullFace(i.BACK):L===za?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G0(i.CULL_FACE),O=L}function s0(L){L!==z&&(W&&i.lineWidth(L),z=L)}function f0(L,t0,J){L?(y0(i.POLYGON_OFFSET_FILL),(C!==t0||V!==J)&&(C=t0,V=J,a.getReversed()&&(t0=-t0,J=-J),i.polygonOffset(t0,J))):G0(i.POLYGON_OFFSET_FILL)}function u0(L){L?y0(i.SCISSOR_TEST):G0(i.SCISSOR_TEST)}function c0(L){L===void 0&&(L=i.TEXTURE0+$-1),Z!==L&&(i.activeTexture(L),Z=L)}function O0(L,t0,J){J===void 0&&(Z===null?J=i.TEXTURE0+$-1:J=Z);let g0=e0[J];g0===void 0&&(g0={type:void 0,texture:void 0},e0[J]=g0),(g0.type!==L||g0.texture!==t0)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(L,t0||U0[L]),g0.type=L,g0.texture=t0)}function P(){const L=e0[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function z0(){try{i.compressedTexImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function V0(){try{i.compressedTexImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function C0(){try{i.texSubImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function a0(){try{i.texSubImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function F0(){try{i.compressedTexSubImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function m0(){try{i.compressedTexSubImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function w0(){try{i.texStorage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function b(){try{i.texStorage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function _(){try{i.texImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function U(){try{i.texImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function j(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function X(L,t0){d[L]!==t0&&(i.pixelStorei(L,t0),d[L]=t0)}function r0(L){Q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function o0(L){l0.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),l0.copy(L))}function q(L,t0){let J=l.get(t0);J===void 0&&(J=new WeakMap,l.set(t0,J));let g0=J.get(L);g0===void 0&&(g0=i.getUniformBlockIndex(t0,L.name),i.uniformBlockBinding(t0,g0,g0),J.set(L,g0))}function K(L,t0,J){const d0=l.get(t0).get(L);c[d0]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,d0,J),c[d0]=J)}function h0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,e0={},f={},c={},u=new WeakMap,x=[],A=null,m=!1,p=null,E=null,v=null,S=null,w=null,T=null,g=null,M=new X0(0,0,0),D=0,R=!1,N=null,O=null,z=null,C=null,V=null,Q.set(0,0,i.canvas.width,i.canvas.height),l0.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:y0,disable:G0,bindFramebuffer:dt,drawBuffers:B0,useProgram:$0,setBlending:gt,setMaterial:ft,setFlipSided:Mt,setCullFace:k,setLineWidth:s0,setPolygonOffset:f0,setScissorTest:u0,activeTexture:c0,bindTexture:O0,unbindTexture:P,compressedTexImage2D:z0,compressedTexImage3D:V0,texImage2D:_,texImage3D:U,pixelStorei:X,getParameter:j,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:w0,texStorage3D:b,texSubImage2D:C0,texSubImage3D:a0,compressedTexSubImage2D:F0,compressedTexSubImage3D:m0,scissor:r0,viewport:o0,reset:h0}}function L9(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new x0,h=new WeakMap,d=new Set;let f;const u=new WeakMap,x=new Set,A=new FinalizationRegistry(b=>x.delete(b));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(b,_){return m?new OffscreenCanvas(b,_):Y1("canvas")}function E(b,_,U){let j=1;const X=w0(b);if((X.width>U||X.height>U)&&(j=U/Math.max(X.width,X.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const r0=Math.floor(j*X.width),o0=Math.floor(j*X.height);f===void 0&&(f=p(r0,o0));const q=_?p(r0,o0):f;return q.width=r0,q.height=o0,q.getContext("2d").drawImage(b,0,0,r0,o0),k0("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+r0+"x"+o0+")."),q}else return"data"in b&&k0("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function v(b){return b.generateMipmaps}function S(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,U,j,X,r0=!1){if(b!==null){if(i[b]!==void 0)return i[b];k0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let o0;j&&(o0=t.get("EXT_texture_norm16"),o0||k0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8),U===i.UNSIGNED_SHORT&&o0&&(q=o0.R16_EXT),U===i.SHORT&&o0&&(q=o0.R16_SNORM_EXT)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),_===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8),U===i.UNSIGNED_SHORT&&o0&&(q=o0.RG16_EXT),U===i.SHORT&&o0&&(q=o0.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_SHORT&&o0&&(q=o0.RGB16_EXT),U===i.SHORT&&o0&&(q=o0.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const K=r0?X1:et.getTransfer(X);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=K===lt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&o0&&(q=o0.RGBA16_EXT),U===i.SHORT&&o0&&(q=o0.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function g(b,_){let U;return b?_===null||_===ue||_===Tn?U=i.DEPTH24_STENCIL8:_===le?U=i.DEPTH32F_STENCIL8:_===Jn&&(U=i.DEPTH24_STENCIL8,k0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ue||_===Tn?U=i.DEPTH_COMPONENT24:_===le?U=i.DEPTH_COMPONENT32F:_===Jn&&(U=i.DEPTH_COMPONENT16),U}function M(b,_){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ct&&b.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){const _=new WeakRef(b);n.get(b).__ref=_,x.add(_),A.register(b,_,_)}function R(b){const _=n.get(b).__ref;_!==void 0&&(x.delete(_),A.unregister(_))}function N(b){z(b.target)}function O(b){C(b.target)}function z(b){b.removeEventListener("dispose",N),R(b),$(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function C(b){b.removeEventListener("dispose",O),R(b),i0(b)}function V(){for(const b of x){const _=b.deref();_!==void 0&&(_.isRenderTarget===!0?C(_):z(_))}x.clear(),d.clear()}function $(b){const _=n.get(b);if(_.__webglInit===void 0)return;const U=b.source,j=u.get(U);if(j){const X=j[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&W(b),Object.keys(j).length===0&&u.delete(U)}n.remove(b)}function W(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const U=b.source,j=u.get(U);delete j[_.__cacheKey],a.memory.textures--}function i0(b){const _=n.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();const U=b.depthTexture;if(U&&U.renderTarget===b&&z(U),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let r0=0;r0<_.__webglFramebuffer[X].length;r0++)i.deleteFramebuffer(_.__webglFramebuffer[X][r0]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const j=b.textures;for(let X=0,r0=j.length;X<r0;X++){const o0=n.get(j[X]);o0.__webglTexture&&(i.deleteTexture(o0.__webglTexture),a.memory.textures--),n.remove(j[X])}n.remove(b)}let B=0;function Z(){B=0}function e0(){return B}function T0(b){B=b}function E0(){const b=B;return b>=s.maxTextures&&k0("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,b}function Q(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function l0(b,_){const U=n.get(b);if(b.isVideoTexture&&F0(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){const j=b.image;if(j===null)k0("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)k0("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(U,b,_);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function v0(b,_){const U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){ft(U,b,_);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function U0(b,_){const U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){ft(U,b,_);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function y0(b,_){const U=n.get(b);if(b.version>0&&U.__version!==b.version){Mt(U,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const G0={[Gi]:i.REPEAT,[Ae]:i.CLAMP_TO_EDGE,[ki]:i.MIRRORED_REPEAT},dt={[Ct]:i.NEAREST,[oo]:i.NEAREST_MIPMAP_NEAREST,[o1]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[ni]:i.LINEAR_MIPMAP_NEAREST,[Oe]:i.LINEAR_MIPMAP_LINEAR},B0={[uo]:i.NEVER,[k3]:i.ALWAYS,[fo]:i.LESS,[H3]:i.LEQUAL,[po]:i.EQUAL,[G3]:i.GEQUAL,[mo]:i.GREATER,[go]:i.NOTEQUAL};function $0(b,_){if(_.type===le&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===ni||_.magFilter===o1||_.magFilter===Oe||_.minFilter===Ht||_.minFilter===ni||_.minFilter===o1||_.minFilter===Oe)&&k0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,G0[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,G0[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,G0[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,dt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,B0[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ct||_.minFilter!==o1&&_.minFilter!==Oe||_.type===le&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function nt(b,_){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",N),D(_));const j=_.source;let X=u.get(j);X===void 0&&(X={},u.set(j,X));const r0=Q(_);if(r0!==b.__cacheKey){X[r0]===void 0&&(X[r0]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[r0].usedTimes++;const o0=X[b.__cacheKey];o0!==void 0&&(X[b.__cacheKey].usedTimes--,o0.usedTimes===0&&W(_)),b.__cacheKey=r0,b.__webglTexture=X[r0].texture}return U}function Z0(b,_,U){return Math.floor(Math.floor(b/U)/_)}function gt(b,_,U,j){const r0=b.updateRanges;if(r0.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,j,_.data);else{r0.sort((L,t0)=>L.start-t0.start);let o0=0;for(let L=1;L<r0.length;L++){const t0=r0[o0],J=r0[L],g0=t0.start+t0.count,d0=Z0(J.start,_.width,4),p0=Z0(t0.start,_.width,4);J.start<=g0+1&&d0===p0&&Z0(J.start+J.count-1,_.width,4)===d0?t0.count=Math.max(t0.count,J.start+J.count-t0.start):(++o0,r0[o0]=J)}r0.length=o0+1;const q=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),h0=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let L=0,t0=r0.length;L<t0;L++){const J=r0[L],g0=Math.floor(J.start/4),d0=Math.ceil(J.count/4),p0=g0%_.width,N0=Math.floor(g0/_.width),Y0=d0,n0=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,p0),e.pixelStorei(i.UNPACK_SKIP_ROWS,N0),e.texSubImage2D(i.TEXTURE_2D,0,p0,N0,Y0,n0,U,j,_.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,h0)}}function ft(b,_,U){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const X=nt(b,_),r0=_.source;e.bindTexture(j,b.__webglTexture,i.TEXTURE0+U);const o0=n.get(r0);if(r0.version!==o0.__version||X===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const n0=et.getPrimaries(et.workingColorSpace),R0=_.colorSpace===Fe?null:et.getPrimaries(_.colorSpace),H0=_.colorSpace===Fe||n0===R0?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H0)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let K=E(_.image,!1,s.maxTextureSize);K=m0(_,K);const h0=r.convert(_.format,_.colorSpace),L=r.convert(_.type);let t0=T(_.internalFormat,h0,L,_.normalized,_.colorSpace,_.isVideoTexture);$0(j,_);let J;const g0=_.mipmaps,d0=_.isVideoTexture!==!0,p0=o0.__version===void 0||X===!0,N0=r0.dataReady,Y0=M(_,K);if(_.isDepthTexture)t0=g(_.format===Be,_.type),p0&&(d0?e.texStorage2D(i.TEXTURE_2D,1,t0,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,t0,K.width,K.height,0,h0,L,null));else if(_.isDataTexture)if(g0.length>0){d0&&p0&&e.texStorage2D(i.TEXTURE_2D,Y0,t0,g0[0].width,g0[0].height);for(let n0=0,R0=g0.length;n0<R0;n0++)J=g0[n0],d0?N0&&e.texSubImage2D(i.TEXTURE_2D,n0,0,0,J.width,J.height,h0,L,J.data):e.texImage2D(i.TEXTURE_2D,n0,t0,J.width,J.height,0,h0,L,J.data);_.generateMipmaps=!1}else d0?(p0&&e.texStorage2D(i.TEXTURE_2D,Y0,t0,K.width,K.height),N0&&gt(_,K,h0,L)):e.texImage2D(i.TEXTURE_2D,0,t0,K.width,K.height,0,h0,L,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){d0&&p0&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Y0,t0,g0[0].width,g0[0].height,K.depth);for(let n0=0,R0=g0.length;n0<R0;n0++)if(J=g0[n0],_.format!==ce)if(h0!==null)if(d0){if(N0)if(_.layerUpdates.size>0){const H0=Qr(J.width,J.height,_.format,_.type);for(const _0 of _.layerUpdates){const Q0=J.data.subarray(_0*H0/J.data.BYTES_PER_ELEMENT,(_0+1)*H0/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,n0,0,0,_0,J.width,J.height,1,h0,Q0)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,n0,0,0,0,J.width,J.height,K.depth,h0,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,n0,t0,J.width,J.height,K.depth,0,J.data,0,0);else k0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else d0?N0&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,n0,0,0,0,J.width,J.height,K.depth,h0,L,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,n0,t0,J.width,J.height,K.depth,0,h0,L,J.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{d0&&p0&&e.texStorage2D(i.TEXTURE_2D,Y0,t0,g0[0].width,g0[0].height);for(let n0=0,R0=g0.length;n0<R0;n0++)J=g0[n0],_.format!==ce?h0!==null?d0?N0&&e.compressedTexSubImage2D(i.TEXTURE_2D,n0,0,0,J.width,J.height,h0,J.data):e.compressedTexImage2D(i.TEXTURE_2D,n0,t0,J.width,J.height,0,J.data):k0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):d0?N0&&e.texSubImage2D(i.TEXTURE_2D,n0,0,0,J.width,J.height,h0,L,J.data):e.texImage2D(i.TEXTURE_2D,n0,t0,J.width,J.height,0,h0,L,J.data)}else if(_.isDataArrayTexture)if(d0){if(p0&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Y0,t0,K.width,K.height,K.depth),N0)if(_.layerUpdates.size>0){const n0=Qr(K.width,K.height,_.format,_.type);for(const R0 of _.layerUpdates){const H0=K.data.subarray(R0*n0/K.data.BYTES_PER_ELEMENT,(R0+1)*n0/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,R0,K.width,K.height,1,h0,L,H0)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,h0,L,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,t0,K.width,K.height,K.depth,0,h0,L,K.data);else if(_.isData3DTexture)d0?(p0&&e.texStorage3D(i.TEXTURE_3D,Y0,t0,K.width,K.height,K.depth),N0&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,h0,L,K.data)):e.texImage3D(i.TEXTURE_3D,0,t0,K.width,K.height,K.depth,0,h0,L,K.data);else if(_.isFramebufferTexture){if(p0)if(d0)e.texStorage2D(i.TEXTURE_2D,Y0,t0,K.width,K.height);else{let n0=K.width,R0=K.height;for(let H0=0;H0<Y0;H0++)e.texImage2D(i.TEXTURE_2D,H0,t0,n0,R0,0,h0,L,null),n0>>=1,R0>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const n0=i.canvas;if(n0.hasAttribute("layoutsubtree")||n0.setAttribute("layoutsubtree","true"),K.parentNode!==n0){n0.appendChild(K),d.add(_),n0.onpaint=R0=>{const H0=R0.changedElements;for(const _0 of d)H0.includes(_0.image)&&(_0.needsUpdate=!0)},n0.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const H0=i.RGBA,_0=i.RGBA,Q0=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,H0,_0,Q0,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(g0.length>0){if(d0&&p0){const n0=w0(g0[0]);e.texStorage2D(i.TEXTURE_2D,Y0,t0,n0.width,n0.height)}for(let n0=0,R0=g0.length;n0<R0;n0++)J=g0[n0],d0?N0&&e.texSubImage2D(i.TEXTURE_2D,n0,0,0,h0,L,J):e.texImage2D(i.TEXTURE_2D,n0,t0,h0,L,J);_.generateMipmaps=!1}else if(d0){if(p0){const n0=w0(K);e.texStorage2D(i.TEXTURE_2D,Y0,t0,n0.width,n0.height)}N0&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,h0,L,K)}else e.texImage2D(i.TEXTURE_2D,0,t0,h0,L,K);v(_)&&_.mipmapsAutoUpdate===!0&&S(j),o0.__version=r0.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Mt(b,_,U){if(_.image.length!==6)return;const j=nt(b,_),X=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);const r0=n.get(X);if(X.version!==r0.__version||j===!0){e.activeTexture(i.TEXTURE0+U);const o0=et.getPrimaries(et.workingColorSpace),q=_.colorSpace===Fe?null:et.getPrimaries(_.colorSpace),K=_.colorSpace===Fe||o0===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const h0=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,t0=[];for(let _0=0;_0<6;_0++)!h0&&!L?t0[_0]=E(_.image[_0],!0,s.maxCubemapSize):t0[_0]=L?_.image[_0].image:_.image[_0],t0[_0]=m0(_,t0[_0]);const J=t0[0],g0=r.convert(_.format,_.colorSpace),d0=r.convert(_.type);let p0=T(_.internalFormat,g0,d0,_.normalized,_.colorSpace);const N0=_.isVideoTexture!==!0,Y0=r0.__version===void 0||j===!0,n0=X.dataReady;let R0=M(_,J);$0(i.TEXTURE_CUBE_MAP,_);let H0;if(_.isDepthTexture){if(p0=g(_.format===Be,_.type),Y0)if(N0)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,p0,J.width,J.height);else for(let _0=0;_0<6;_0++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,p0,J.width,J.height,0,g0,d0,null)}else if(h0){N0&&Y0&&e.texStorage2D(i.TEXTURE_CUBE_MAP,R0,p0,J.width,J.height);for(let _0=0;_0<6;_0++){H0=t0[_0].mipmaps;for(let Q0=0;Q0<H0.length;Q0++){const xt=H0[Q0];_.format!==ce?g0!==null?N0?n0&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0,0,0,xt.width,xt.height,g0,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0,p0,xt.width,xt.height,0,xt.data):k0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N0?n0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0,0,0,xt.width,xt.height,g0,d0,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0,p0,xt.width,xt.height,0,g0,d0,xt.data)}}}else{if(H0=_.mipmaps,N0&&Y0){H0.length>0&&R0++;const _0=w0(t0[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,R0,p0,_0.width,_0.height)}for(let _0=0;_0<6;_0++)if(L){N0?n0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,0,0,t0[_0].width,t0[_0].height,g0,d0,t0[_0].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,p0,t0[_0].width,t0[_0].height,0,g0,d0,t0[_0].data);for(let Q0=0;Q0<H0.length;Q0++){const me=H0[Q0].image[_0].image;N0?n0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0+1,0,0,me.width,me.height,g0,d0,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0+1,p0,me.width,me.height,0,g0,d0,me.data)}}else{N0?n0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,0,0,g0,d0,t0[_0]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,p0,g0,d0,t0[_0]);for(let Q0=0;Q0<H0.length;Q0++){const xt=H0[Q0];N0?n0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0+1,0,0,g0,d0,xt.image[_0]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,Q0+1,p0,g0,d0,xt.image[_0])}}}v(_)&&_.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),r0.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function k(b,_,U,j,X,r0){const o0=r.convert(U.format,U.colorSpace),q=r.convert(U.type),K=T(U.internalFormat,o0,q,U.normalized,U.colorSpace),h0=n.get(_),L=n.get(U);if(L.__renderTarget=_,!h0.__hasExternalTextures){const t0=Math.max(1,_.width>>r0),J=Math.max(1,_.height>>r0);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,r0,K,t0,J,_.depth,0,o0,q,null):e.texImage2D(X,r0,K,t0,J,0,o0,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),a0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,X,L.__webglTexture,0,C0(_)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,X,L.__webglTexture,r0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function s0(b,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const j=_.depthTexture,X=j&&j.isDepthTexture?j.type:null,r0=g(_.stencilBuffer,X),o0=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;a0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C0(_),r0,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,C0(_),r0,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,r0,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,o0,i.RENDERBUFFER,b)}else{const j=_.textures;for(let X=0;X<j.length;X++){const r0=j[X],o0=r.convert(r0.format,r0.colorSpace),q=r.convert(r0.type),K=T(r0.internalFormat,o0,q,r0.normalized,r0.colorSpace);a0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C0(_),K,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,C0(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function f0(b,_,U){const j=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(_.depthTexture);X.__renderTarget=_;const r0=j?_.depthTexture.image[0]:_.depthTexture.image;(!X.__webglTexture||r0.width!==_.width||r0.height!==_.height)&&(r0.width=_.width,r0.height=_.height,_.depthTexture.needsUpdate=!0),j?y0(_.depthTexture,0):l0(_.depthTexture,0);const o0=X.__webglTexture,q=C0(_),K=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,h0=_.depthTexture.format===Be?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ze)a0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,h0,K,o0,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,h0,K,o0,0);else if(_.depthTexture.format===Be)a0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,h0,K,o0,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,h0,K,o0,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function u0(b){const _=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",X)};j.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=j}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)f0(_.__webglFramebuffer[j],b,j);else b.texture.mipmaps.length>0?f0(_.__webglFramebuffer[0],b,0):f0(_.__webglFramebuffer,b,0);else if(U){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),s0(_.__webglDepthbuffer[j],b,!1);else{const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,r0=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,r0),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,r0)}}else if(b.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),s0(_.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,r0=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,r0),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,r0)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function c0(b,_,U){const j=n.get(b);_!==void 0&&k(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&u0(b)}function O0(b){const _=b.texture,U=n.get(b),j=n.get(_);b.addEventListener("dispose",O),D(b);const X=b.textures,r0=b.isWebGLCubeRenderTarget===!0,o0=X.length>1;if(o0||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),r0){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let K=0;K<_.mipmaps.length;K++)U.__webglFramebuffer[q][K]=i.createFramebuffer()}else U.__webglFramebuffer[q]=i.createFramebuffer()}else{if(_.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)U.__webglFramebuffer[q]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(o0)for(let q=0,K=X.length;q<K;q++){const h0=n.get(X[q]);h0.__webglTexture===void 0&&(h0.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&a0(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const K=X[q];U.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const h0=r.convert(K.format,K.colorSpace),L=r.convert(K.type),t0=T(K.internalFormat,h0,L,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),J=C0(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,t0,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,U.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),s0(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(r0){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$0(i.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)k(U.__webglFramebuffer[q][K],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else k(U.__webglFramebuffer[q],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);v(_)?S(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(o0){for(let q=0,K=X.length;q<K;q++){const h0=X[q],L=n.get(h0);let t0=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(t0=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(t0,L.__webglTexture),$0(t0,h0),k(U.__webglFramebuffer,b,h0,i.COLOR_ATTACHMENT0+q,t0,0),v(h0)&&S(t0)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,j.__webglTexture),$0(q,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)k(U.__webglFramebuffer[K],b,_,i.COLOR_ATTACHMENT0,q,K);else k(U.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,q,0);v(_)?S(q):_.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}b.depthBuffer&&u0(b)}function P(b){const _=b.textures;for(let U=0,j=_.length;U<j;U++){const X=_[U];if(v(X)&&X.mipmapsAutoUpdate===!0){const r0=w(b),o0=n.get(X).__webglTexture;e.bindTexture(r0,o0),S(r0),e.unbindTexture()}}}const z0=[];function V0(b){if(b.samples>0){if(a0(b)===!1){const _=b.textures,U=b.width,j=b.height;let X=i.COLOR_BUFFER_BIT;const r0=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,o0=n.get(b),q=_.length>1;if(q)for(let h0=0;h0<_.length;h0++)e.bindFramebuffer(i.FRAMEBUFFER,o0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+h0,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,o0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+h0,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,o0.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,o0.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,o0.__webglFramebuffer);for(let h0=0;h0<_.length;h0++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,o0.__webglColorRenderbuffer[h0]);const L=n.get(_[h0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,U,j,0,0,U,j,X,i.NEAREST),c===!0&&(z0.length=0,z0.push(i.COLOR_ATTACHMENT0+h0),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&z0.push(r0),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z0))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let h0=0;h0<_.length;h0++){e.bindFramebuffer(i.FRAMEBUFFER,o0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+h0,i.RENDERBUFFER,o0.__webglColorRenderbuffer[h0]);const L=n.get(_[h0]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,o0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+h0,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,o0.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function C0(b){return Math.min(s.maxSamples,b.samples)}function a0(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F0(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function m0(b,_){const U=b.colorSpace,j=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==W1&&U!==Fe&&(et.getTransfer(U)===lt?(j!==ce||X!==Wt)&&k0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",U)),_}function w0(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=E0,this.resetTextureUnits=Z,this.getTextureUnits=e0,this.setTextureUnits=T0,this.setTexture2D=l0,this.setTexture2DArray=v0,this.setTexture3D=U0,this.setTextureCube=y0,this.rebindTextures=c0,this.setupRenderTarget=O0,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=V0,this.setupDepthRenderbuffer=u0,this.setupFrameBufferTexture=k,this.useMultisampledRTT=a0,this.dispose=V}function D9(i,t){function e(n,s=Fe){let r;const a=et.getTransfer(s);if(n===Wt)return i.UNSIGNED_BYTE;if(n===Ps)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ls)return i.UNSIGNED_SHORT_5_5_5_1;if(n===U3)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===F3)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===N3)return i.BYTE;if(n===I3)return i.SHORT;if(n===Jn)return i.UNSIGNED_SHORT;if(n===Cs)return i.INT;if(n===ue)return i.UNSIGNED_INT;if(n===le)return i.FLOAT;if(n===de)return i.HALF_FLOAT;if(n===O3)return i.ALPHA;if(n===B3)return i.RGB;if(n===ce)return i.RGBA;if(n===ze)return i.DEPTH_COMPONENT;if(n===Be)return i.DEPTH_STENCIL;if(n===z3)return i.RED;if(n===Ds)return i.RED_INTEGER;if(n===tn)return i.RG;if(n===Ns)return i.RG_INTEGER;if(n===Is)return i.RGBA_INTEGER;if(n===I1||n===U1||n===F1||n===O1)if(a===lt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===I1)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===U1)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===F1)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===O1)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===I1)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===U1)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===F1)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===O1)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vi||n===Wi||n===Xi||n===Yi)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wi)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qi||n===Zi||n===Ki||n===Ji||n===$i||n===k1||n===Qi)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qi||n===Zi)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ki)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ji)return r.COMPRESSED_R11_EAC;if(n===$i)return r.COMPRESSED_SIGNED_R11_EAC;if(n===k1)return r.COMPRESSED_RG11_EAC;if(n===Qi)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ji||n===ts||n===es||n===ns||n===is||n===ss||n===rs||n===as||n===os||n===ls||n===cs||n===hs||n===us||n===ds)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ji)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ts)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===es)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ns)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===is)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ss)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rs)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===as)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===os)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ls)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cs)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hs)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===us)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ds)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fs||n===ps||n===ms)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fs)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ps)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ms)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gs||n===_s||n===V1||n===xs)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_s)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===V1)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const N9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I9=`
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

}`;class U9{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new J3(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:N9,fragmentShader:I9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new K1(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F9 extends ke{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,x=null;const A=typeof XRWebGLBinding<"u",m=new U9,p={},E=e.getContextAttributes();let v=null,S=null;const w=[],T=[],g=new x0;let M=null,D=null;const R=new ae;R.viewport=new ct;const N=new ae;N.viewport=new ct;const O=[R,N],z=new q2;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let l0=w[Q];return l0===void 0&&(l0=new hi,w[Q]=l0),l0.getTargetRaySpace()},this.getControllerGrip=function(Q){let l0=w[Q];return l0===void 0&&(l0=new hi,w[Q]=l0),l0.getGripSpace()},this.getHand=function(Q){let l0=w[Q];return l0===void 0&&(l0=new hi,w[Q]=l0),l0.getHandSpace()};function $(Q){const l0=T.indexOf(Q.inputSource);if(l0===-1)return;const v0=w[l0];v0!==void 0&&(v0.update(Q.inputSource,Q.frame,l||a),v0.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",i0);for(let Q=0;Q<w.length;Q++){const l0=T[Q];l0!==null&&(T[Q]=null,w[Q].disconnect(l0))}C=null,V=null,m.reset();for(const Q in p)delete p[Q];if(t.setRenderTarget(v),u=null,f=null,d=null,s=null,S=null,E0.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(g.width,g.height,!1),D!==null){const Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&k0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&k0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&A&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",W),s.addEventListener("inputsourceschange",i0),E.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(g),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let v0=null,U0=null,y0=null;E.depth&&(y0=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,v0=E.stencil?Be:ze,U0=E.stencil?Tn:ue);const G0={colorFormat:e.RGBA8,depthFormat:y0,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(G0),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new he(f.textureWidth,f.textureHeight,{format:ce,type:Wt,depthTexture:new wn(f.textureWidth,f.textureHeight,U0,void 0,void 0,void 0,void 0,void 0,void 0,v0),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const v0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,v0),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new he(u.framebufferWidth,u.framebufferHeight,{format:ce,type:Wt,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),E0.setContext(s),E0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function i0(Q){for(let l0=0;l0<Q.removed.length;l0++){const v0=Q.removed[l0],U0=T.indexOf(v0);U0>=0&&(T[U0]=null,w[U0].disconnect(v0))}for(let l0=0;l0<Q.added.length;l0++){const v0=Q.added[l0];let U0=T.indexOf(v0);if(U0===-1){for(let G0=0;G0<w.length;G0++)if(G0>=T.length){T.push(v0),U0=G0;break}else if(T[G0]===null){T[G0]=v0,U0=G0;break}if(U0===-1)break}const y0=w[U0];y0&&y0.connect(v0)}}function B(Q,l0){l0===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(l0.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let l0=Q.near,v0=Q.far;m.texture!==null&&(m.depthNear>0&&(l0=m.depthNear),m.depthFar>0&&(v0=m.depthFar)),z.near=N.near=R.near=l0,z.far=N.far=R.far=v0,(C!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,V=z.far),z.layers.mask=Q.layers.mask|6,R.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;const U0=Q.parent,y0=z.cameras;B(z,U0);for(let G0=0;G0<y0.length;G0++)B(y0[G0],U0);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),Z(Q,z,U0)};function Z(Q,l0,v0){v0===null?Q.matrix.copy(l0.matrixWorld):(Q.matrix.copy(v0.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(l0.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(l0.projectionMatrix),Q.projectionMatrixInverse.copy(l0.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let e0=null;function T0(Q,l0){if(h=l0.getViewerPose(l||a),x=l0,h!==null){const v0=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let U0=!1;v0.length!==z.cameras.length&&(z.cameras.length=0,U0=!0);for(let B0=0;B0<v0.length;B0++){const $0=v0[B0];let nt=null;if(u!==null)nt=u.getViewport($0);else{const gt=d.getViewSubImage(f,$0);nt=gt.viewport,B0===0&&(t.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(S))}let Z0=O[B0];Z0===void 0&&(Z0=new ae,Z0.layers.enable(B0),Z0.viewport=new ct,O[B0]=Z0),Z0.matrix.fromArray($0.transform.matrix),Z0.matrix.decompose(Z0.position,Z0.quaternion,Z0.scale),Z0.projectionMatrix.fromArray($0.projectionMatrix),Z0.projectionMatrixInverse.copy(Z0.projectionMatrix).invert(),Z0.viewport.set(nt.x,nt.y,nt.width,nt.height),B0===0&&(z.matrix.copy(Z0.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),U0===!0&&z.cameras.push(Z0)}const y0=s.enabledFeatures;if(y0&&y0.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){d=n.getBinding();const B0=d.getDepthInformation(v0[0]);B0&&B0.isValid&&B0.texture&&m.init(B0,s.renderState)}if(y0&&y0.includes("camera-access")&&A){t.state.unbindTexture(),d=n.getBinding();for(let B0=0;B0<v0.length;B0++){const $0=v0[B0].camera;if($0){let nt=p[$0];nt||(nt=new J3,p[$0]=nt);const Z0=d.getCameraImage($0);nt.sourceTexture=Z0}}}}for(let v0=0;v0<w.length;v0++){const U0=T[v0],y0=w[v0];U0!==null&&y0!==void 0&&y0.update(U0,l0,l||a)}e0&&e0(Q,l0),l0.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:l0}),x=null}const E0=new la;E0.setAnimationLoop(T0),this.setAnimationLoop=function(Q){e0=Q},this.dispose=function(){}}}const O9=new ot,xa=new W0;xa.set(-1,0,0,0,1,0,0,0,1);function B9(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,aa(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,v,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),A(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),v=E.envMap,S=E.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(O9.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xa),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,E){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z9(i,t,e,n){let s={},r={};function a(E,v){const S=v.program;n.uniformBlockBinding(E,S,s[E.id])}function o(E,v){let S=s[E.id];S===void 0&&(x(E),S=c(E),s[E.id]=S,E.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(E,w);const T=t.render.frame;r[E.id]!==T&&(l(E),r[E.id]=T)}function c(E){const v=i.createBuffer(),S=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function l(E){const v=s[E.id],S=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,g=S.length;T<g;T++){const M=S[T];if(Array.isArray(M))for(let D=0,R=M.length;D<R;D++)h(M[D],T,D,w);else h(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,v,S,w){if(f(E,v,S,w)===!0){const T=E.__offset,g=E.value;if(Array.isArray(g)){let M=0;for(let D=0;D<g.length;D++){const R=g[D],N=A(R,!0);d(R,E.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,E.__data)}}function d(E,v,S){typeof E=="number"||typeof E=="boolean"?v[S]=E:E.isMatrix3?(v[S]=E.elements[0],v[S+1]=E.elements[1],v[S+2]=E.elements[2],v[S+3]=0,v[S+4]=E.elements[3],v[S+5]=E.elements[4],v[S+6]=E.elements[5],v[S+7]=0,v[S+8]=E.elements[6],v[S+9]=E.elements[7],v[S+10]=E.elements[8],v[S+11]=0):ArrayBuffer.isView(E)?v.set(E.subarray(0,v.length-S),S):E.toArray(v,S)}function f(E,v,S,w){const T=E.value,g=v+"_"+S;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);const M=w[g];let D=!1;for(let R=0;R<T.length;R++)u(T[R],M,R)===!0&&(D=!0);return D}return u(T,w,g)}function u(E,v,S){if(v[S]===void 0)return typeof E=="number"||typeof E=="boolean"?v[S]=E:ArrayBuffer.isView(E)?v[S]=E.slice():v[S]=E.clone(),!0;{const w=v[S];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return v[S]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(w.equals(E)===!1)return w.copy(E),!0}}return!1}function x(E){const v=E.uniforms;let S=0;const w=16;for(let g=0,M=v.length;g<M;g++){const D=Array.isArray(v[g])?v[g]:[v[g]];for(let R=0,N=D.length;R<N;R++){const O=D[R],z=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(v[g])||Array.isArray(O.value);let V=S;for(let W=0,i0=z.length;W<i0;W++){const B=z[W],Z=A(B,C),e0=S%w,T0=e0%Z.boundary,E0=e0+T0;S+=T0,E0!==0&&w-E0<Z.storage&&(S+=w-E0),W===0&&(V=S),S+=Z.storage}const $=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new $((S-V)/Float32Array.BYTES_PER_ELEMENT),O.__offset=V}}const T=S%w;return T>0&&(S+=w-T),E.__size=S,E.__cache={},this}function A(E,v){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=16,S.storage=48):E.isMatrix4?(S.boundary=16,S.storage=64):E.isTexture?k0("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):k0("WebGLRenderer: Unsupported uniform value type.",E),v===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(E){const v=E.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);s={},r={}}return{bind:a,update:o,dispose:p}}const H9=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let se=null;function G9(){return se===null&&(se=new Qo(H9,16,16,tn,de),se.name="DFG_LUT",se.minFilter=Ht,se.magFilter=Ht,se.wrapS=Ae,se.wrapT=Ae,se.generateMipmaps=!1,se.needsUpdate=!0),se}class G1{constructor(t={}){const{canvas:e=vo(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Wt}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const A=u,m=new Set([Is,Ns,Ds]),p=new Set([Wt,ue,Jn,Tn,Ps,Ls]),E=new Uint32Array(4),v=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const g=[],M=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=we,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,O=null,z=null,C=null,V=null;this._outputColorSpace=Ot;let $=0,W=0,i0=null,B=-1,Z=null;const e0=new ct,T0=new ct;let E0=null;const Q=new X0(0);let l0=0,v0=e.width,U0=e.height,y0=1,G0=null,dt=null;const B0=new ct(0,0,v0,U0),$0=new ct(0,0,v0,U0);let nt=!1;const Z0=new An,gt=new Hs;let ft=!1,Mt=!1;const k=new ot,s0=new F,f0=new ct,u0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let c0=!1;function O0(){return i0===null?y0:1}let P=n;function z0(y,I){return e.getContext(y,I)}let V0,C0,a0,F0,m0,w0,b,_,U,j,X,r0,o0,q,K,h0,L,t0,J,g0,d0,p0,N0;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ws}`),e.addEventListener("webglcontextlost",R0,!1),e.addEventListener("webglcontextrestored",H0,!1),e.addEventListener("webglcontextcreationerror",_0,!1),P===null){const I="webgl2";if(P=z0(I,y),P===null)throw z0(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(y){throw e.removeEventListener("webglcontextlost",R0,!1),e.removeEventListener("webglcontextrestored",H0,!1),e.removeEventListener("webglcontextcreationerror",_0,!1),rt("WebGLRenderer: "+y.message),y}function Y0(){V0=new X5(P),V0.init(),d0=new D9(P,V0),C0=new I5(P,V0,t,d0),a0=new P9(P,V0),C0.reversedDepthBuffer&&f&&a0.buffers.depth.setReversed(!0),z=P.createFramebuffer(),C=P.createFramebuffer(),V=P.createFramebuffer(),F0=new Z5(P),m0=new g9,w0=new L9(P,V0,a0,m0,C0,d0,F0),b=new W5(R),_=new J2(P),p0=new D5(P,_),U=new Y5(P,_,F0,p0),j=new J5(P,U,_,p0,F0),t0=new K5(P,C0,w0),K=new U5(m0),X=new m9(R,b,V0,C0,p0,K),r0=new B9(R,m0),o0=new x9,q=new b9(V0),L=new L5(R,b,a0,j,x,c),h0=new C9(R,j,C0),N0=new z9(P,F0,C0,a0),J=new N5(P,V0,F0),g0=new q5(P,V0,F0),F0.programs=X.programs,R.capabilities=C0,R.extensions=V0,R.properties=m0,R.renderLists=o0,R.shadowMap=h0,R.state=a0,R.info=F0}A!==Wt&&(D=new Q5(A,e.width,e.height,o,s,r));const n0=new F9(R,P);this.xr=n0,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=V0.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=V0.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return y0},this.setPixelRatio=function(y){y!==void 0&&(y0=y,this.setSize(v0,U0,!1))},this.getSize=function(y){return y.set(v0,U0)},this.setSize=function(y,I,Y=!0){if(n0.isPresenting){k0("WebGLRenderer: Can't change size while VR device is presenting.");return}v0=y,U0=I,e.width=Math.floor(y*y0),e.height=Math.floor(I*y0),Y===!0&&(e.style.width=y+"px",e.style.height=I+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(v0*y0,U0*y0).floor()},this.setDrawingBufferSize=function(y,I,Y){v0=y,U0=I,y0=Y,e.width=Math.floor(y*Y),e.height=Math.floor(I*Y),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(A===Wt){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){k0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(e0)},this.getViewport=function(y){return y.copy(B0)},this.setViewport=function(y,I,Y,H){y.isVector4?B0.set(y.x,y.y,y.z,y.w):B0.set(y,I,Y,H),a0.viewport(e0.copy(B0).multiplyScalar(O0()).round())},this.getScissor=function(y){return y.copy($0)},this.setScissor=function(y,I,Y,H){y.isVector4?$0.set(y.x,y.y,y.z,y.w):$0.set(y,I,Y,H),a0.scissor(T0.copy($0).multiplyScalar(O0()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){a0.setScissorTest(nt=y)},this.setOpaqueSort=function(y){G0=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,Y=!0){let H=0;if(y){let G=!1;if(i0!==null){const M0=i0.texture.format;G=m.has(M0)}if(G){const M0=i0.texture.type,P0=p.has(M0),S0=L.getClearColor(),A0=L.getClearAlpha(),I0=S0.r,q0=S0.g,j0=S0.b;P0?(E[0]=I0,E[1]=q0,E[2]=j0,E[3]=A0,P.clearBufferuiv(P.COLOR,0,E)):(v[0]=I0,v[1]=q0,v[2]=j0,v[3]=A0,P.clearBufferiv(P.COLOR,0,v))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",R0,!1),e.removeEventListener("webglcontextrestored",H0,!1),e.removeEventListener("webglcontextcreationerror",_0,!1),L.dispose(),o0.dispose(),q.dispose(),w0.dispose(),m0.dispose(),b.dispose(),j.dispose(),U.dispose(),p0.dispose(),N0.dispose(),X.dispose(),n0.dispose(),n0.removeEventListener("sessionstart",js),n0.removeEventListener("sessionend",tr),Ve.stop()};function R0(y){y.preventDefault(),_r("WebGLRenderer: Context Lost."),N=!0}function H0(){_r("WebGLRenderer: Context Restored."),N=!1;const y=F0.autoReset,I=h0.enabled,Y=h0.autoUpdate,H=h0.needsUpdate,G=h0.type;Y0(),F0.autoReset=y,h0.enabled=I,h0.autoUpdate=Y,h0.needsUpdate=H,h0.type=G}function _0(y){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q0(y){const I=y.target;I.removeEventListener("dispose",Q0),xt(I)}function xt(y){me(y),m0.remove(y)}function me(y){const I=m0.get(y).programs;I!==void 0&&(I.forEach(function(Y){X.releaseProgram(Y)}),y.isShaderMaterial&&X.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,Y,H,G,M0){I===null&&(I=u0);const P0=G.isMesh&&G.matrixWorld.determinantAffine()<0,S0=Aa(y,I,Y,H,G);a0.setMaterial(H,P0);let A0=Y.index,I0=1;if(H.wireframe===!0){if(A0=U.getWireframeAttribute(Y),A0===void 0)return;I0=2}const q0=Y.drawRange,j0=Y.attributes.position;let L0=q0.start*I0,tt=(q0.start+q0.count)*I0;M0!==null&&(L0=Math.max(L0,M0.start*I0),tt=Math.min(tt,(M0.start+M0.count)*I0)),A0!==null?(L0=Math.max(L0,0),tt=Math.min(tt,A0.count)):j0!=null&&(L0=Math.max(L0,0),tt=Math.min(tt,j0.count));const vt=tt-L0;if(vt<0||vt===1/0)return;p0.setup(G,H,S0,Y,A0);let ut,ht=J;if(A0!==null&&(ut=_.get(A0),ht=g0,ht.setIndex(ut)),G.isMesh)H.wireframe===!0?(a0.setLineWidth(H.wireframeLinewidth*O0()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(G.isLine){let Lt=H.linewidth;Lt===void 0&&(Lt=1),a0.setLineWidth(Lt*O0()),G.isLineSegments?ht.setMode(P.LINES):G.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else G.isPoints?ht.setMode(P.POINTS):G.isSprite&&ht.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(V0.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,D0=G._multiDrawCounts,Ut=G._multiDrawCount,st=A0?_.get(A0).bytesPerElement:1,We=m0.get(H).currentProgram.getUniforms();for(let Dt=0;Dt<Ut;Dt++)We.setValue(P,"_gl_DrawID",Dt),ht.render(Lt[Dt]/st,D0[Dt])}else if(G.isInstancedMesh)ht.renderInstances(L0,vt,G.count);else if(Y.isInstancedBufferGeometry){const Lt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,D0=Math.min(Y.instanceCount,Lt);ht.renderInstances(L0,vt,D0)}else ht.render(L0,vt)};function Qs(y,I,Y,H){O!==null&&y.isNodeMaterial&&O.setObject(H,y),ft===!0&&K.setState(y,Y,!1),y.transparent===!0&&y.side===te&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,Dn(y,I,H),y.side=je,y.needsUpdate=!0,Dn(y,I,H),y.side=te):Dn(y,I,H)}this.compile=function(y,I,Y=null){Y===null&&(Y=y),O!==null&&O.renderStart(y,I,Y),T=q.get(Y),T.init(I),M.push(T),Y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==Y&&y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Mt=this.localClippingEnabled,ft=K.init(this.clippingPlanes,Mt),ft===!0&&K.setGlobalState(this.clippingPlanes,I),O!==null&&h0.render(T.state.shadowsArray,Y,I);const H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const M0=G.material;if(M0)if(Array.isArray(M0))for(let P0=0;P0<M0.length;P0++){const S0=M0[P0];Qs(S0,Y,I,G),H.add(S0)}else Qs(M0,Y,I,G),H.add(M0)}),T=M.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(y,I,Y=null){const H=this.compile(y,I,Y);return new Promise(G=>{function M0(){if(H.forEach(function(P0){const A0=m0.get(P0).currentProgram;(A0===void 0||A0.isReady())&&H.delete(P0)}),H.size===0){G(y);return}setTimeout(M0,10)}V0.get("KHR_parallel_shader_compile")!==null?M0():setTimeout(M0,10)})};let Q1=null;function ba(y){Q1&&Q1(y)}function js(){Ve.stop()}function tr(){Ve.start()}const Ve=new la;Ve.setAnimationLoop(ba),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(y){Q1=y,n0.setAnimationLoop(y),y===null?Ve.stop():Ve.start()},n0.addEventListener("sessionstart",js),n0.addEventListener("sessionend",tr),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(y,I);const Y=n0.enabled===!0&&n0.isPresenting===!0,H=D!==null&&(i0===null||Y)&&D.begin(R,i0);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),n0.enabled===!0&&n0.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(n0.cameraAutoUpdate===!0&&n0.updateCamera(I),I=n0.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,I,i0),T=q.get(y,M.length),T.init(I),T.state.textureUnits=w0.getTextureUnits(),M.push(T),k.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?gt.setFromArrayCamera(I):Z0.setFromProjectionMatrix(k,ne,I.reversedDepth),Mt=this.localClippingEnabled,ft=K.init(this.clippingPlanes,Mt),w=o0.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,n0.enabled===!0&&n0.isPresenting===!0){const P0=R.xr.getDepthSensingMesh();P0!==null&&j1(P0,I,-1/0,R.sortObjects)}j1(y,I,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(G0,dt),c0=n0.enabled===!1||n0.isPresenting===!1||n0.hasDepthSensing()===!1,c0&&L.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),ft===!0&&K.beginShadows();const G=T.state.shadowsArray;if(h0.render(G,y,I),ft===!0&&K.endShadows(),(H&&D.hasRenderPass())===!1){const P0=w.opaque,S0=w.transmissive;if(T.setupLights(),I.isArrayCamera){const A0=I.cameras;if(S0.length>0)for(let I0=0,q0=A0.length;I0<q0;I0++){const j0=A0[I0];nr(P0,S0,y,j0)}c0&&L.render(y);for(let I0=0,q0=A0.length;I0<q0;I0++){const j0=A0[I0];er(w,y,j0,j0.viewport)}}else S0.length>0&&nr(P0,S0,y,I),c0&&L.render(y),er(w,y,I)}i0!==null&&W===0&&(w0.updateMultisampleRenderTarget(i0),w0.updateRenderTargetMipmap(i0)),H&&D.end(R),y.isScene===!0&&y.onAfterRender(R,y,I),p0.resetDefaultState(),B=-1,Z=null,M.pop(),M.length>0?(T=M[M.length-1],w0.setTextureUnits(T.state.textureUnits),ft===!0&&K.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,O!==null&&O.renderEnd()};function j1(y,I,Y,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const P0=I.isArrayCamera?gt:Z0;if(!y.frustumCulled||y.intersectsFrustum(P0)){H&&f0.setFromMatrixPosition(y.matrixWorld).applyMatrix4(k);const S0=j.update(y),A0=y.material;A0.visible&&w.push(y,S0,A0,Y,f0.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){const P0=I.isArrayCamera?gt:Z0;if(!y.frustumCulled||y.intersectsFrustum(P0)){const S0=j.update(y),A0=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),f0.copy(y.boundingSphere.center)):(S0.boundingSphere===null&&S0.computeBoundingSphere(),f0.copy(S0.boundingSphere.center)),f0.applyMatrix4(y.matrixWorld).applyMatrix4(k)),Array.isArray(A0)){const I0=S0.groups;for(let q0=0,j0=I0.length;q0<j0;q0++){const L0=I0[q0],tt=A0[L0.materialIndex];tt&&tt.visible&&w.push(y,S0,tt,Y,f0.z,L0,I)}}else A0.visible&&w.push(y,S0,A0,Y,f0.z,null,I)}}}const M0=y.children;for(let P0=0,S0=M0.length;P0<S0;P0++)j1(M0[P0],I,Y,H)}function er(y,I,Y,H){const{opaque:G,transmissive:M0,transparent:P0}=y;T.setupLightsView(Y),ft===!0&&K.setGlobalState(R.clippingPlanes,Y),H&&a0.viewport(e0.copy(H)),G.length>0&&i1(G,I,Y),M0.length>0&&i1(M0,I,Y),P0.length>0&&i1(P0,I,Y),a0.buffers.depth.setTest(!0),a0.buffers.depth.setMask(!0),a0.buffers.color.setMask(!0),a0.setPolygonOffset(!1)}function nr(y,I,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const L0=V0.has("EXT_color_buffer_half_float")||V0.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new he(1,1,{generateMipmaps:!0,type:L0?de:Wt,minFilter:Oe,samples:Math.max(4,C0.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const M0=T.state.transmissionRenderTarget[H.id],P0=H.viewport||e0;M0.setSize(P0.z*R.transmissionResolutionScale,P0.w*R.transmissionResolutionScale);const S0=R.getRenderTarget(),A0=R.getActiveCubeFace(),I0=R.getActiveMipmapLevel();R.setRenderTarget(M0),R.getClearColor(Q),l0=R.getClearAlpha(),l0<1&&R.setClearColor(16777215,.5),R.clear(),c0&&L.render(Y);const q0=R.toneMapping;R.toneMapping=we;const j0=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ft===!0&&K.setGlobalState(R.clippingPlanes,H),i1(y,Y,H),w0.updateMultisampleRenderTarget(M0),w0.updateRenderTargetMipmap(M0),V0.has("WEBGL_multisampled_render_to_texture")===!1){let L0=!1;for(let tt=0,vt=I.length;tt<vt;tt++){const ut=I[tt],{object:ht,geometry:Lt,material:D0,group:Ut}=ut;if(D0.side===te&&ht.layers.test(H.layers)){const st=D0.side;D0.side=Gt,D0.needsUpdate=!0,ir(ht,Y,H,Lt,D0,Ut),D0.side=st,D0.needsUpdate=!0,L0=!0}}L0===!0&&(w0.updateMultisampleRenderTarget(M0),w0.updateRenderTargetMipmap(M0))}R.setRenderTarget(S0,A0,I0),R.setClearColor(Q,l0),j0!==void 0&&(H.viewport=j0),R.toneMapping=q0}function i1(y,I,Y){const H=I.isScene===!0?I.overrideMaterial:null;for(let G=0,M0=y.length;G<M0;G++){const P0=y[G],{object:S0,geometry:A0,group:I0}=P0;let q0=P0.material;q0.allowOverride===!0&&H!==null&&(q0=H),S0.layers.test(Y.layers)&&ir(S0,I,Y,A0,q0,I0)}}function ir(y,I,Y,H,G,M0){O!==null&&G.isNodeMaterial&&O.setObject(y,G),y.onBeforeRender(R,I,Y,H,G,M0),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(R,I,Y,H,y,M0),G.transparent===!0&&G.side===te&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,R.renderBufferDirect(Y,I,H,G,y,M0),G.side=je,G.needsUpdate=!0,R.renderBufferDirect(Y,I,H,G,y,M0),G.side=te):R.renderBufferDirect(Y,I,H,G,y,M0),y.onAfterRender(R,I,Y,H,G,M0)}function sr(y){let I=0;for(const Y of y)Y.texture!==null&&I++;return I}function Dn(y,I,Y){I.isScene!==!0&&(I=u0);const H=m0.get(y),G=T.state.lights,M0=T.state.shadowsArray,P0=G.state.version,S0=X.getParameters(y,G.state,M0,I,Y,T.state.lightProbeGridArray),A0=X.getProgramCacheKey(S0);let I0=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const q0=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=b.get(y.envMap||H.environment,q0),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,I0===void 0&&(y.addEventListener("dispose",Q0),I0=new Map,H.programs=I0,H.programVariants=new Map);let j0=I0.get(A0);if(j0!==void 0){if(H.currentProgram===j0&&H.lightsStateVersion===P0)return ar(y,S0),j0}else S0.uniforms=X.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,Y,S0),y.onBeforeCompile(S0,R),j0=X.acquireProgram(S0,A0),I0.set(A0,j0),H.uniforms=S0.uniforms;const L0=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(L0.clippingPlanes=K.uniform),ar(y,S0),H.needsLights=Ra(y),H.lightsStateVersion=P0,H.needsLights&&(L0.ambientLightColor.value=G.state.ambient,L0.lightProbe.value=G.state.probe,L0.sunLights.value=G.state.sun,L0.sunLightShadows.value=G.state.sunShadow,L0.directionalLights.value=G.state.directional,L0.directionalLightShadows.value=G.state.directionalShadow,L0.spotLights.value=G.state.spot,L0.spotLightShadows.value=G.state.spotShadow,L0.rectAreaLights.value=G.state.rectArea,L0.ltc_1.value=G.state.rectAreaLTC1,L0.ltc_2.value=G.state.rectAreaLTC2,L0.pointLights.value=G.state.point,L0.pointLightShadows.value=G.state.pointShadow,L0.hemisphereLights.value=G.state.hemi,L0.sunShadowMatrix.value=G.state.sunShadowMatrix,L0.sunShadowCascade.value=G.state.sunShadowCascade,L0.directionalShadowMatrix.value=G.state.directionalShadowMatrix,L0.spotLightMatrix.value=G.state.spotLightMatrix,L0.spotLightMap.value=G.state.spotLightMap,L0.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=sr(T.state.lightProbeGridArray),H.currentProgram=j0,H.uniformsList=null,j0}function Ta(y,I,Y,H,G){const M0=m0.get(y),P0=M0.currentProgram.id+","+H+","+G;let S0=M0.programVariants.get(P0);return S0===void 0?(S0=Dn(y,I,Y),M0.programVariants.set(P0,S0)):(M0.currentProgram=S0,M0.uniformsList=null,M0.outputColorSpace=H,M0.toneMapping=G),S0}function rr(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=H1.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function ar(y,I){const Y=m0.get(y);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.batchingColor=I.batchingColor,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function Aa(y,I,Y,H,G){I.isScene!==!0&&(I=u0),w0.resetTextureUnits();const M0=I.fog,P0=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,S0=i0===null?R.outputColorSpace:i0.isXRRenderTarget===!0?i0.texture.colorSpace:et.workingColorSpace,A0=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,I0=b.get(H.envMap||P0,A0),q0=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,j0=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),L0=!!Y.morphAttributes.position,tt=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color;let ut=we;H.toneMapped&&(i0===null||i0.isXRRenderTarget===!0)&&(ut=R.toneMapping);const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Lt=ht!==void 0?ht.length:0,D0=m0.get(H),Ut=T.state.lights;if(ft===!0&&(Mt===!0||y!==Z)){const pt=y===Z&&H.id===B;K.setState(H,y,pt)}let st=!1,We=!1;H.version===D0.__version?D0.needsLights&&D0.lightsStateVersion!==Ut.state.version||G.isBatchedMesh&&D0.batching===!1||!G.isBatchedMesh&&D0.batching===!0||G.isBatchedMesh&&D0.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&D0.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&D0.instancing===!1||!G.isInstancedMesh&&D0.instancing===!0||G.isSkinnedMesh&&D0.skinning===!1||!G.isSkinnedMesh&&D0.skinning===!0||G.isInstancedMesh&&D0.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&D0.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&D0.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&D0.instancingMorph===!1&&G.morphTexture!==null||D0.envMap!==I0||H.fog===!0&&D0.fog!==M0||D0.numClippingPlanes!==void 0&&(D0.numClippingPlanes!==K.numPlanes||D0.numIntersection!==K.numIntersection)||D0.vertexAlphas!==q0||D0.vertexTangents!==j0||D0.morphTargets!==L0||D0.morphNormals!==tt||D0.morphColors!==vt||D0.morphTargetsCount!==Lt||D0.numLightProbeGrids!==sr(T.state.lightProbeGridArray)?st=!0:(D0.outputColorSpace!==S0||D0.toneMapping!==ut)&&(We=!0):(st=!0,D0.__version=H.version);let Dt=D0.currentProgram;(st===!0||We===!0)&&(Dt=We===!0?Ta(H,I,G,S0,ut):Dn(H,I,G),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Dt,D0));let s1=!1,Ce=!1,Xe=!1;const it=Dt.getUniforms(),Rt=D0.uniforms;if(a0.useProgram(Dt.program)&&(s1=!0,Ce=!0,Xe=!0),H.id!==B&&(B=H.id,Ce=!0),s1||Z!==y){a0.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(P,"projectionMatrix",y.projectionMatrix),it.setValue(P,"viewMatrix",y.matrixWorldInverse);const Tt=it.map.cameraPosition;Tt!==void 0&&Tt.setValue(P,s0.setFromMatrixPosition(y.matrixWorld)),C0.logarithmicDepthBuffer&&it.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),Z!==y&&(Z=y,Ce=!0,Xe=!0)}if(D0.needsLights&&(Ut.state.sunShadowMap.length>0&&it.setValue(P,"sunShadowMap",Ut.state.sunShadowMap,w0),Ut.state.directionalShadowMap.length>0&&it.setValue(P,"directionalShadowMap",Ut.state.directionalShadowMap,w0),Ut.state.spotShadowMap.length>0&&it.setValue(P,"spotShadowMap",Ut.state.spotShadowMap,w0),Ut.state.pointShadowMap.length>0&&it.setValue(P,"pointShadowMap",Ut.state.pointShadowMap,w0)),G.isSkinnedMesh){it.setOptional(P,G,"bindMatrix"),it.setOptional(P,G,"bindMatrixInverse");const pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),it.setValue(P,"boneTexture",pt.boneTexture,w0))}G.isBatchedMesh&&(it.setOptional(P,G,"batchingTexture"),it.setValue(P,"batchingTexture",G._matricesTexture,w0),it.setOptional(P,G,"batchingIdTexture"),it.setValue(P,"batchingIdTexture",G._indirectTexture,w0),it.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(P,"batchingColorTexture",G._colorsTexture,w0));const Kt=Y.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&t0.update(G,Y,Dt),(Ce||D0.receiveShadow!==G.receiveShadow)&&(D0.receiveShadow=G.receiveShadow,it.setValue(P,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(Rt.envMapIntensity.value=I.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=G9()),Ce){if(it.setValue(P,"toneMappingExposure",R.toneMappingExposure),D0.needsLights&&wa(Rt,Xe),M0&&H.fog===!0&&r0.refreshFogUniforms(Rt,M0),r0.refreshMaterialUniforms(Rt,H,y0,U0,T.state.transmissionRenderTarget[y.id]),D0.needsLights&&D0.numLightProbeGrids>0){const pt=S;let Tt=0;for(const ge of T.state.lightProbeGridArray)ge.texture!==null&&(pt.textures[Tt]=ge.texture,pt.min[Tt]=ge.boundingBox.min,pt.max[Tt]=ge.boundingBox.max,pt.resolution[Tt]=ge.resolution,Tt++);for(const ge in pt)pt[ge].length=Tt;Rt.probesSH.value=pt.textures,Rt.probesMin.value=pt.min,Rt.probesMax.value=pt.max,Rt.probesResolution.value=pt.resolution}H1.upload(P,rr(D0),Rt,w0)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(H1.upload(P,rr(D0),Rt,w0),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(P,"center",G.center),it.setValue(P,"modelViewMatrix",G.modelViewMatrix),it.setValue(P,"normalMatrix",G.normalMatrix),it.setValue(P,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const pt=H.uniformsGroups;for(let Tt=0,ge=pt.length;Tt<ge;Tt++){const lr=pt[Tt];N0.update(lr,Dt),N0.bind(lr,Dt)}}return Dt}function wa(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Ra(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return i0},this.setRenderTargetTextures=function(y,I,Y){const H=m0.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),m0.get(y.texture).__webglTexture=I,m0.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const Y=m0.get(y);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,Y=0){i0=y,$=I,W=Y;let H=null,G=!1,M0=!1;if(y){const S0=m0.get(y);if(S0.__useDefaultFramebuffer!==void 0){a0.bindFramebuffer(P.FRAMEBUFFER,S0.__webglFramebuffer),e0.copy(y.viewport),T0.copy(y.scissor),E0=y.scissorTest,a0.viewport(e0),a0.scissor(T0),a0.setScissorTest(E0),B=-1;return}else if(S0.__webglFramebuffer===void 0)w0.setupRenderTarget(y);else if(S0.__hasExternalTextures)w0.rebindTextures(y,m0.get(y.texture).__webglTexture,m0.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const q0=y.depthTexture;if(S0.__boundDepthTexture!==q0){if(q0!==null&&m0.has(q0)&&(y.width!==q0.image.width||y.height!==q0.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");w0.setupDepthRenderbuffer(y)}}const A0=y.texture;(A0.isData3DTexture||A0.isDataArrayTexture||A0.isCompressedArrayTexture)&&(M0=!0);const I0=m0.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(I0[I])?H=I0[I][Y]:H=I0[I],G=!0):y.samples>0&&w0.useMultisampledRTT(y)===!1?H=m0.get(y).__webglMultisampledFramebuffer:Array.isArray(I0)?H=I0[Y]:H=I0,e0.copy(y.viewport),T0.copy(y.scissor),E0=y.scissorTest}else e0.copy(B0).multiplyScalar(y0).floor(),T0.copy($0).multiplyScalar(y0).floor(),E0=nt;if(Y!==0&&(H=z),a0.bindFramebuffer(P.FRAMEBUFFER,H)&&a0.drawBuffers(y,H),a0.viewport(e0),a0.scissor(T0),a0.setScissorTest(E0),G){const S0=m0.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,S0.__webglTexture,Y)}else if(M0){const S0=I;for(let A0=0;A0<y.textures.length;A0++){const I0=m0.get(y.textures[A0]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+A0,I0.__webglTexture,Y,S0)}}else if(y!==null&&Y!==0){const S0=m0.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,S0.__webglTexture,Y)}B=-1};function or(y){const I=m0.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=C0.textureFormatReadable(y.format),I.__typeReadable=C0.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,Y,H,G,M0,P0,S0=0){if(!(y&&y.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let A0=m0.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&P0!==void 0&&(A0=A0[P0],Array.isArray(A0)&&(A0=A0[0])),A0){a0.bindFramebuffer(P.FRAMEBUFFER,A0);try{const I0=y.textures[S0],q0=I0.format,j0=I0.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+S0);const L0=or(I0);if(L0.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(L0.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&Y>=0&&Y<=y.height-G&&P.readPixels(I,Y,H,G,d0.convert(q0),d0.convert(j0),M0)}finally{const I0=i0!==null?m0.get(i0).__webglFramebuffer:null;a0.bindFramebuffer(P.FRAMEBUFFER,I0)}}},this.readRenderTargetPixelsAsync=async function(y,I,Y,H,G,M0,P0,S0=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let A0=m0.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&P0!==void 0&&(A0=A0[P0],Array.isArray(A0)&&(A0=A0[0])),A0)if(I>=0&&I<=y.width-H&&Y>=0&&Y<=y.height-G){a0.bindFramebuffer(P.FRAMEBUFFER,A0);const I0=y.textures[S0],q0=I0.format,j0=I0.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+S0);const L0=or(I0);if(L0.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(L0.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,M0.byteLength,P.STREAM_READ),P.readPixels(I,Y,H,G,d0.convert(q0),d0.convert(j0),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const vt=i0!==null?m0.get(i0).__webglFramebuffer:null;a0.bindFramebuffer(P.FRAMEBUFFER,vt);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await So(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,M0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(tt),P.deleteSync(ut),M0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,Y=0){const H=Math.pow(2,-Y),G=Math.floor(y.image.width*H),M0=Math.floor(y.image.height*H),P0=I!==null?I.x:0,S0=I!==null?I.y:0;w0.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,P0,S0,G,M0),a0.unbindTexture()},this.copyTextureToTexture=function(y,I,Y=null,H=null,G=0,M0=0){let P0,S0,A0,I0,q0,j0,L0,tt,vt;const ut=y.isCompressedTexture?y.mipmaps[M0]:y.image;if(Y!==null)P0=Y.max.x-Y.min.x,S0=Y.max.y-Y.min.y,A0=Y.isBox3?Y.max.z-Y.min.z:1,I0=Y.min.x,q0=Y.min.y,j0=Y.isBox3?Y.min.z:0;else{const it=Math.pow(2,-G);P0=Math.floor(ut.width*it),S0=Math.floor(ut.height*it),y.isDataArrayTexture?A0=ut.depth:y.isData3DTexture?A0=Math.floor(ut.depth*it):A0=1,I0=0,q0=0,j0=0}H!==null?(L0=H.x,tt=H.y,vt=H.z):(L0=0,tt=0,vt=0);const ht=d0.convert(I.format),Lt=d0.convert(I.type);let D0;I.isData3DTexture?(w0.setTexture3D(I,0),D0=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w0.setTexture2DArray(I,0),D0=P.TEXTURE_2D_ARRAY):(w0.setTexture2D(I,0),D0=P.TEXTURE_2D),a0.activeTexture(P.TEXTURE0),a0.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),a0.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),a0.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Ut=a0.getParameter(P.UNPACK_ROW_LENGTH),st=a0.getParameter(P.UNPACK_IMAGE_HEIGHT),We=a0.getParameter(P.UNPACK_SKIP_PIXELS),Dt=a0.getParameter(P.UNPACK_SKIP_ROWS),s1=a0.getParameter(P.UNPACK_SKIP_IMAGES);a0.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),a0.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),a0.pixelStorei(P.UNPACK_SKIP_PIXELS,I0),a0.pixelStorei(P.UNPACK_SKIP_ROWS,q0),a0.pixelStorei(P.UNPACK_SKIP_IMAGES,j0);const Ce=y.isDataArrayTexture||y.isData3DTexture,Xe=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const it=m0.get(y),Rt=m0.get(I),Kt=m0.get(it.__renderTarget),pt=m0.get(Rt.__renderTarget);a0.bindFramebuffer(P.READ_FRAMEBUFFER,Kt.__webglFramebuffer),a0.bindFramebuffer(P.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Tt=0;Tt<A0;Tt++)Ce&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m0.get(y).__webglTexture,G,j0+Tt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m0.get(I).__webglTexture,M0,vt+Tt)),P.blitFramebuffer(I0,q0,I0+P0,q0+S0,L0,tt,L0+P0,tt+S0,P.DEPTH_BUFFER_BIT,P.NEAREST);a0.bindFramebuffer(P.READ_FRAMEBUFFER,null),a0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||m0.has(y)){const it=m0.get(y),Rt=m0.get(I);a0.bindFramebuffer(P.READ_FRAMEBUFFER,C),a0.bindFramebuffer(P.DRAW_FRAMEBUFFER,V);for(let Kt=0;Kt<A0;Kt++)Ce?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,it.__webglTexture,G,j0+Kt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,it.__webglTexture,G),Xe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,M0,vt+Kt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,M0),G!==0?P.blitFramebuffer(I0,q0,I0+P0,q0+S0,L0,tt,L0+P0,tt+S0,P.COLOR_BUFFER_BIT,P.NEAREST):Xe?P.copyTexSubImage3D(D0,M0,L0,tt,vt+Kt,I0,q0,P0,S0):P.copyTexSubImage2D(D0,M0,L0,tt,I0,q0,P0,S0);a0.bindFramebuffer(P.READ_FRAMEBUFFER,null),a0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Xe?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(D0,M0,L0,tt,vt,P0,S0,A0,ht,Lt,ut.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(D0,M0,L0,tt,vt,P0,S0,A0,ht,ut.data):P.texSubImage3D(D0,M0,L0,tt,vt,P0,S0,A0,ht,Lt,ut):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,M0,L0,tt,P0,S0,ht,Lt,ut.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,M0,L0,tt,ut.width,ut.height,ht,ut.data):P.texSubImage2D(P.TEXTURE_2D,M0,L0,tt,P0,S0,ht,Lt,ut);a0.pixelStorei(P.UNPACK_ROW_LENGTH,Ut),a0.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),a0.pixelStorei(P.UNPACK_SKIP_PIXELS,We),a0.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),a0.pixelStorei(P.UNPACK_SKIP_IMAGES,s1),M0===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&P.generateMipmap(D0),a0.unbindTexture()},this.initRenderTarget=function(y){m0.get(y).__webglFramebuffer===void 0&&w0.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w0.setTextureCube(y,0):y.isData3DTexture?w0.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w0.setTexture2DArray(y,0):w0.setTexture2D(y,0),a0.unbindTexture()},this.resetState=function(){$=0,W=0,i0=null,a0.reset(),p0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ne}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=et._getDrawingBufferColorSpace(t),e.unpackColorSpace=et._getUnpackColorSpace()}}const $e=.75,Je=new fe;function k9(i,t,e,n){const s=Math.max(1.85/e,(n+.26)/t),r=t*s,a=e*s;i.updateMatrixWorld();const o=n/2+.2;Je.min.set(-o,-.07,-.62),Je.max.set(o,1.8,.62),Je.applyMatrix4(i.matrixWorldInverse);const c=Math.max(1,i.zoom*Math.max(2*Math.max(-Je.min.x,Je.max.x)/r,Je.max.y/(a*$e),-Je.min.y/(a*(1-$e))));return i.right=t*s*c/2,i.top=e*s*c/2,i.left=-i.right,i.bottom=-i.top,i.setViewOffset(t,e,0,(.5-$e)*e,t,e),c}function V9(i,t,e){i.updateMatrixWorld(),t.updateWorldMatrix(!0,!0);const n=new fe,s=new fe,r=new ot;if(t.traverse(h=>{if(!(h instanceof wt))return;const d=h.geometry;d.boundingBox||d.computeBoundingBox(),r.multiplyMatrices(i.matrixWorldInverse,h.matrixWorld),n.union(s.copy(d.boundingBox).applyMatrix4(r))}),n.isEmpty())return i.zoom;const a=(i.top-i.bottom)/e,o=.03,c=i.right/e*(1-2*o);return 1/Math.max(Math.max(-n.min.x,n.max.x)/c,n.max.y/(a*($e-o)),-n.min.y/(a*(1-$e-o)))}const S3={type:"change"},$s={type:"start"},va={type:"end"},L1=new q3,M3=new be,W9=Math.cos(70*Ao.DEG2RAD),yt=new F,zt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Li=1e-6;class X9 extends Z2{constructor(t,e=null){super(t,e),this.state=at.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mn.ROTATE,MIDDLE:Mn.DOLLY,RIGHT:Mn.PAN},this.touches={ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new He,this._lastTargetPosition=new F,this._quat=new He().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kr,this._sphericalDelta=new Kr,this._scale=1,this._panOffset=new F,this._rotateStart=new x0,this._rotateEnd=new x0,this._rotateDelta=new x0,this._panStart=new x0,this._panEnd=new x0,this._panDelta=new x0,this._dollyStart=new x0,this._dollyEnd=new x0,this._dollyDelta=new x0,this._dollyDirection=new F,this._mouse=new x0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q9.bind(this),this._onPointerDown=Y9.bind(this),this._onPointerUp=Z9.bind(this),this._onContextMenu=el.bind(this),this._onMouseWheel=$9.bind(this),this._onKeyDown=Q9.bind(this),this._onTouchStart=j9.bind(this),this._onTouchMove=tl.bind(this),this._onMouseDown=K9.bind(this),this._onMouseMove=J9.bind(this),this._interceptControlDown=nl.bind(this),this._interceptControlUp=il.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=at.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(S3),this.update(),this.state=at.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;yt.copy(e).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=zt:n>Math.PI&&(n-=zt),s<-Math.PI?s+=zt:s>Math.PI&&(s-=zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),e.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(L1.origin.copy(this.object.position),L1.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(L1.direction))<W9?this.object.lookAt(this.target):(M3.setFromNormalAndCoplanarPoint(this.object.up,this.target),L1.intersectPlane(M3,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Li||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Li||this._lastTargetPosition.distanceToSquared(this.target)>Li?(this.dispatchEvent(S3),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?zt/60*this.autoRotateSpeed*t:zt/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){yt.setFromMatrixColumn(e,0),yt.multiplyScalar(-t),this._panOffset.add(yt)}_panUp(t,e){this.screenSpacePanning===!0?yt.setFromMatrixColumn(e,1):(yt.setFromMatrixColumn(e,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(t),this._panOffset.add(yt)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;yt.copy(s).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/e.clientHeight),this._rotateUp(zt*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/e.clientHeight),this._rotateUp(zt*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new x0,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Y9(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function q9(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Z9(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(va),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function K9(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case Mn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case Mn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent($s)}function J9(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $9(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent($s),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(va))}function Q9(i){this.enabled!==!1&&this._handleKeyDown(i)}function j9(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Sn.ROTATE:if(this.enableRotate===!1){this.state=at.NONE;break}this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Sn.PAN:if(this.enablePan===!1){this.state=at.NONE;break}this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent($s)}function tl(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function el(i){this.enabled!==!1&&i.preventDefault()}function nl(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function il(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sl{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}}class Sa{constructor(){this.id=0,this.v1=new Qe,this.v2=new Qe,this.v3=new Qe,this.normalModel=new F,this.vertexNormalsModel=[new F,new F,new F],this.vertexNormalsLength=0,this.color=new X0,this.material=null,this.uvs=[new x0,new x0,new x0],this.z=0,this.renderOrder=0}}class Qe{constructor(){this.position=new F,this.positionWorld=new F,this.positionScreen=new ct,this.visible=!0}copy(t){this.positionWorld.copy(t.positionWorld),this.positionScreen.copy(t.positionScreen)}}class Ma{constructor(){this.id=0,this.v1=new Qe,this.v2=new Qe,this.vertexColors=[new X0,new X0],this.material=null,this.z=0,this.renderOrder=0}}class ya{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new x0,this.material=null,this.renderOrder=0}}class rl{constructor(){let t,e,n=0,s,r,a=0,o,c,l=0,h,d,f=0,u,x,A=0,m,p=[],E=[];const v={objects:[],lights:[],elements:[]},S=new F,w=new ct,T=new fe(new F(-1,-1,-1),new F(1,1,1)),g=new fe,M=new Array(3),D=new ot,R=new ot,N=new ot,O=new An,z=[],C=[],V=[],$=[],W=[],i0=[],B=new ct,Z=new ct,e0=new ct,T0=[],E0=[null,null,null],Q=[{sign:1},{sign:-1}];function l0(){const k=[],s0=[],f0=[];let u0=null;const c0=new W0;function O0(_){u0=_,c0.getNormalMatrix(u0.matrixWorld),k.length=0,s0.length=0,f0.length=0}function P(_){const U=_.position,j=_.positionWorld,X=_.positionScreen;j.copy(U).applyMatrix4(m),X.copy(j).applyMatrix4(R);const r0=1/X.w;X.x*=r0,X.y*=r0,X.z*=r0,_.visible=X.x>=-1&&X.x<=1&&X.y>=-1&&X.y<=1&&X.z>=-1&&X.z<=1}function z0(_,U,j){s=B0(),s.position.set(_,U,j),P(s)}function V0(_,U,j){k.push(_,U,j)}function C0(_,U,j){s0.push(_,U,j)}function a0(_,U){f0.push(_,U)}function F0(_,U,j){return _.visible===!0||U.visible===!0||j.visible===!0?!0:(M[0]=_.positionScreen,M[1]=U.positionScreen,M[2]=j.positionScreen,T.intersectsBox(g.setFromPoints(M)))}function m0(_,U,j){return(j.positionScreen.x-_.positionScreen.x)*(U.positionScreen.y-_.positionScreen.y)-(j.positionScreen.y-_.positionScreen.y)*(U.positionScreen.x-_.positionScreen.x)<0}function w0(_,U){const j=C[_],X=C[U];j.positionScreen.copy(j.position).applyMatrix4(N),X.positionScreen.copy(X.position).applyMatrix4(N),Mt(j.positionScreen,X.positionScreen)===!0&&(j.positionScreen.multiplyScalar(1/j.positionScreen.w),X.positionScreen.multiplyScalar(1/X.positionScreen.w),h=nt(),h.id=u0.id,h.v1.copy(j),h.v2.copy(X),h.z=Math.max(j.positionScreen.z,X.positionScreen.z),h.renderOrder=u0.renderOrder,h.material=u0.material,u0.material.vertexColors&&(h.vertexColors[0].fromArray(s0,_*3),h.vertexColors[1].fromArray(s0,U*3)),v.elements.push(h))}function b(_,U,j,X){const r0=C[_],o0=C[U],q=C[j],K=r0.positionScreen.w,h0=o0.positionScreen.w,L=q.positionScreen.w,t0=K*(r0.positionScreen.z+1),J=h0*(o0.positionScreen.z+1),g0=L*(q.positionScreen.z+1),d0=K*(1-r0.positionScreen.z),p0=h0*(1-o0.positionScreen.z),N0=L*(1-q.positionScreen.z);if(t0<0&&J<0&&g0<0||d0<0&&p0<0&&N0<0)return;if(t0>=0&&J>=0&&g0>=0&&d0>=0&&p0>=0&&N0>=0){if(F0(r0,o0,q)===!1)return;if(X.side===te||m0(r0,o0,q)===!0){o=$0(),o.id=u0.id,o.v1.copy(r0),o.v2.copy(o0),o.v3.copy(q),o.z=(r0.positionScreen.z+o0.positionScreen.z+q.positionScreen.z)/3,o.renderOrder=u0.renderOrder,S.subVectors(q.position,o0.position),w.subVectors(r0.position,o0.position),S.cross(w),o.normalModel.copy(S),o.normalModel.applyMatrix3(c0).normalize();for(let n0=0;n0<3;n0++){const R0=o.vertexNormalsModel[n0];R0.fromArray(k,arguments[n0]*3),R0.applyMatrix3(c0).normalize(),o.uvs[n0].fromArray(f0,arguments[n0]*2)}o.vertexNormalsLength=3,o.material=X,X.vertexColors&&o.color.fromArray(s0,_*3),v.elements.push(o)}return}B.set(r0.positionScreen.x*K,r0.positionScreen.y*K,r0.positionScreen.z*K,K),Z.set(o0.positionScreen.x*h0,o0.positionScreen.y*h0,o0.positionScreen.z*h0,h0),e0.set(q.positionScreen.x*L,q.positionScreen.y*L,q.positionScreen.z*L,L),E0[0]=B,E0[1]=Z,E0[2]=e0;const Y0=ft(E0);if(!(Y0<3)){for(let n0=0;n0<Y0;n0++){const R0=p[n0];let H0=T0[n0];H0||(H0=new Qe,T0[n0]=H0);const _0=1/R0.w;H0.positionScreen.set(R0.x*_0,R0.y*_0,R0.z*_0,1),H0.positionWorld.copy(r0.positionWorld),H0.visible=!0}for(let n0=1;n0<Y0-1;n0++){const R0=T0[0],H0=T0[n0],_0=T0[n0+1];if(X.side===te||m0(R0,H0,_0)===!0){o=$0(),o.id=u0.id,o.v1.copy(R0),o.v2.copy(H0),o.v3.copy(_0),o.z=(R0.positionScreen.z+H0.positionScreen.z+_0.positionScreen.z)/3,o.renderOrder=u0.renderOrder,S.subVectors(q.position,o0.position),w.subVectors(r0.position,o0.position),S.cross(w),o.normalModel.copy(S),o.normalModel.applyMatrix3(c0).normalize();for(let Q0=0;Q0<3;Q0++){const xt=o.vertexNormalsModel[Q0];xt.fromArray(k,arguments[Q0]*3),xt.applyMatrix3(c0).normalize(),o.uvs[Q0].fromArray(f0,arguments[Q0]*2)}o.vertexNormalsLength=3,o.material=X,X.vertexColors&&o.color.fromArray(s0,_*3),v.elements.push(o)}}}}return{setObject:O0,projectVertex:P,checkTriangleVisibility:F0,checkBackfaceCulling:m0,pushVertex:z0,pushNormal:V0,pushColor:C0,pushUv:a0,pushLine:w0,pushTriangle:b}}const v0=new l0;function U0(k){if(k.visible===!1)return;if(k.isLight)v.lights.push(k);else if(k.isMesh||k.isLine||k.isPoints){if(k.material.visible===!1||k.frustumCulled===!0&&O.intersectsObject(k)===!1)return;y0(k)}else if(k.isSprite){if(k.material.visible===!1||k.frustumCulled===!0&&O.intersectsSprite(k)===!1)return;y0(k)}const s0=k.children;for(let f0=0,u0=s0.length;f0<u0;f0++)U0(s0[f0])}function y0(k){t=dt(),t.id=k.id,t.object=k,S.setFromMatrixPosition(k.matrixWorld),S.applyMatrix4(R),t.z=S.z,t.renderOrder=k.renderOrder,v.objects.push(t)}this.projectScene=function(k,s0,f0,u0){c=0,d=0,x=0,v.elements.length=0,k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),s0.parent===null&&s0.matrixWorldAutoUpdate===!0&&s0.updateMatrixWorld(),D.copy(s0.matrixWorldInverse),R.multiplyMatrices(s0.projectionMatrix,D),O.setFromProjectionMatrix(R),e=0,v.objects.length=0,v.lights.length=0,U0(k),f0===!0&&v.objects.sort(gt);const c0=v.objects;for(let O0=0,P=c0.length;O0<P;O0++){const z0=c0[O0].object,V0=z0.geometry;if(v0.setObject(z0),m=z0.matrixWorld,r=0,z0.isMesh){let C0=z0.material;const a0=Array.isArray(C0),F0=V0.attributes,m0=V0.groups;if(F0.position===void 0)continue;const w0=F0.position.array;for(let b=0,_=w0.length;b<_;b+=3){let U=w0[b],j=w0[b+1],X=w0[b+2];const r0=V0.morphAttributes.position;if(r0!==void 0){const o0=V0.morphTargetsRelative,q=z0.morphTargetInfluences;for(let K=0,h0=r0.length;K<h0;K++){const L=q[K];if(L===0)continue;const t0=r0[K];o0?(U+=t0.getX(b/3)*L,j+=t0.getY(b/3)*L,X+=t0.getZ(b/3)*L):(U+=(t0.getX(b/3)-w0[b])*L,j+=(t0.getY(b/3)-w0[b+1])*L,X+=(t0.getZ(b/3)-w0[b+2])*L)}}v0.pushVertex(U,j,X)}if(F0.normal!==void 0){const b=F0.normal.array;for(let _=0,U=b.length;_<U;_+=3)v0.pushNormal(b[_],b[_+1],b[_+2])}if(F0.color!==void 0){const b=F0.color.array;for(let _=0,U=b.length;_<U;_+=3)v0.pushColor(b[_],b[_+1],b[_+2])}if(F0.uv!==void 0){const b=F0.uv.array;for(let _=0,U=b.length;_<U;_+=2)v0.pushUv(b[_],b[_+1])}if(V0.index!==null){const b=V0.index.array;if(m0.length>0)for(let _=0;_<m0.length;_++){const U=m0[_];if(C0=a0===!0?z0.material[U.materialIndex]:z0.material,C0!==void 0)for(let j=U.start,X=U.start+U.count;j<X;j+=3)v0.pushTriangle(b[j],b[j+1],b[j+2],C0)}else for(let _=0,U=b.length;_<U;_+=3)v0.pushTriangle(b[_],b[_+1],b[_+2],C0)}else if(m0.length>0)for(let b=0;b<m0.length;b++){const _=m0[b];if(C0=a0===!0?z0.material[_.materialIndex]:z0.material,C0!==void 0)for(let U=_.start,j=_.start+_.count;U<j;U+=3)v0.pushTriangle(U,U+1,U+2,C0)}else for(let b=0,_=w0.length/3;b<_;b+=3)v0.pushTriangle(b,b+1,b+2,C0)}else if(z0.isLine){N.multiplyMatrices(R,m);const C0=V0.attributes;if(C0.position!==void 0){const a0=C0.position.array;for(let F0=0,m0=a0.length;F0<m0;F0+=3)v0.pushVertex(a0[F0],a0[F0+1],a0[F0+2]);if(C0.color!==void 0){const F0=C0.color.array;for(let m0=0,w0=F0.length;m0<w0;m0+=3)v0.pushColor(F0[m0],F0[m0+1],F0[m0+2])}if(V0.index!==null){const F0=V0.index.array;for(let m0=0,w0=F0.length;m0<w0;m0+=2)v0.pushLine(F0[m0],F0[m0+1])}else{const F0=z0.isLineSegments?2:1;for(let m0=0,w0=a0.length/3-1;m0<w0;m0+=F0)v0.pushLine(m0,m0+1)}}}else if(z0.isPoints){N.multiplyMatrices(R,m);const C0=V0.attributes;if(C0.position!==void 0){const a0=C0.position.array;for(let F0=0,m0=a0.length;F0<m0;F0+=3)w.set(a0[F0],a0[F0+1],a0[F0+2],1),w.applyMatrix4(N),G0(w,z0,s0)}}else z0.isSprite&&(z0.modelViewMatrix.multiplyMatrices(s0.matrixWorldInverse,z0.matrixWorld),w.set(m.elements[12],m.elements[13],m.elements[14],1),w.applyMatrix4(R),G0(w,z0,s0))}return u0===!0&&v.elements.sort(gt),v};function G0(k,s0,f0){const u0=1/k.w;k.z*=u0,k.z>=-1&&k.z<=1&&(u=Z0(),u.id=s0.id,u.x=k.x*u0,u.y=k.y*u0,u.z=k.z,u.renderOrder=s0.renderOrder,u.object=s0,u.rotation=s0.rotation,u.scale.x=s0.scale.x*Math.abs(u.x-(k.x+f0.projectionMatrix.elements[0])/(k.w+f0.projectionMatrix.elements[12])),u.scale.y=s0.scale.y*Math.abs(u.y-(k.y+f0.projectionMatrix.elements[5])/(k.w+f0.projectionMatrix.elements[13])),u.material=s0.material,v.elements.push(u))}function dt(){if(e===n){const k=new sl;return z.push(k),n++,e++,k}return z[e++]}function B0(){if(r===a){const k=new Qe;return C.push(k),a++,r++,k}return C[r++]}function $0(){if(c===l){const k=new Sa;return V.push(k),l++,c++,k}return V[c++]}function nt(){if(d===f){const k=new Ma;return $.push(k),f++,d++,k}return $[d++]}function Z0(){if(x===A){const k=new ya;return W.push(k),A++,x++,k}return W[x++]}function gt(k,s0){return k.renderOrder!==s0.renderOrder?k.renderOrder-s0.renderOrder:k.z!==s0.z?s0.z-k.z:k.id!==s0.id?k.id-s0.id:0}function ft(k){p[0]=k[0],p[1]=k[1],p[2]=k[2];let s0=3,f0=0;for(let u0=0;u0<Q.length;u0++){const c0=Q[u0];if(f0=0,s0===0)break;for(let P=0;P<s0;P++){const z0=p[P],V0=p[(P+1)%s0],C0=c0.sign*z0.z+z0.w,a0=c0.sign*V0.z+V0.w,F0=C0>=0,m0=a0>=0;if(F0&&m0)E[f0++]=z0;else if(F0&&!m0){E[f0++]=z0;const w0=C0/(C0-a0);let b=i0[f0];b||(b=new ct,i0[f0]=b),b.lerpVectors(z0,V0,w0),E[f0++]=b}else if(!F0&&m0){const w0=C0/(C0-a0);let b=i0[f0];b||(b=new ct,i0[f0]=b),b.lerpVectors(z0,V0,w0),E[f0++]=b}}const O0=p;p=E,E=O0,s0=f0}return s0}function Mt(k,s0){let f0=0,u0=1;const c0=k.z+k.w,O0=s0.z+s0.w,P=-k.z+k.w,z0=-s0.z+s0.w;return c0>=0&&O0>=0&&P>=0&&z0>=0?!0:c0<0&&O0<0||P<0&&z0<0?!1:(c0<0?f0=Math.max(f0,c0/(c0-O0)):O0<0&&(u0=Math.min(u0,c0/(c0-O0))),P<0?f0=Math.max(f0,P/(P-z0)):z0<0&&(u0=Math.min(u0,P/(P-z0))),u0<f0?!1:(k.lerp(s0,f0),s0.lerp(k,1-u0),!0))}}}class Gn{constructor(){let t,e,n,s,r,a,o,c,l,h,d,f=0,u=0,x=0,A=null,m=1,p,E;const v=this,S=new $r,w=new $r,T=new X0,g=new X0,M=new X0,D=new X0,R=new X0,N=new X0,O=new F,z=new F,C=new F,V=new F,$=new W0,W=new ot,i0=new ot,B=[],Z=[],e0=[],T0=new rl,E0=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=E0,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Ot,this.info={render:{vertices:0,faces:0}},this.setQuality=function(k){switch(k){case"high":m=1;break;case"low":m=0;break}},this.setClearColor=function(k){N.set(k)},this.setPixelRatio=function(){},this.setSize=function(k,s0){s=k,r=s0,a=s/2,o=r/2,E0.setAttribute("viewBox",-a+" "+-o+" "+s+" "+r),E0.setAttribute("width",s),E0.setAttribute("height",r),S.min.set(-a,-o),S.max.set(a,o)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(k){A=k};function Q(){for(f=0;E0.childNodes.length>0;)E0.removeChild(E0.childNodes[0])}function l0(k){return A!==null?k.toFixed(A):k}function v0(k,s0){const f0=k.data.renderOrder!==void 0?k.data.renderOrder:0,u0=s0.data.renderOrder!==void 0?s0.data.renderOrder:0;if(f0!==u0)return f0-u0;{const c0=k.data.z!==void 0?k.data.z:0;return(s0.data.z!==void 0?s0.data.z:0)-c0}}this.clear=function(){Q(),E0.style.backgroundColor=N.getStyle(v.outputColorSpace)},this.render=function(k,s0){if(!(s0 instanceof Zs)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}const f0=k.background;f0&&f0.isColor?(Q(),E0.style.backgroundColor=f0.getStyle(v.outputColorSpace)):this.autoClear===!0&&this.clear(),v.info.render.vertices=0,v.info.render.faces=0,W.copy(s0.matrixWorldInverse),i0.multiplyMatrices(s0.projectionMatrix,W),t=T0.projectScene(k,s0,this.sortObjects,this.sortElements),e=t.elements,n=t.lights,$.getNormalMatrix(s0.matrixWorldInverse),U0(n),x=0;for(let u0=0,c0=e.length;u0<c0;u0++){const O0=e[u0],P=O0.material;P===void 0||P.opacity===0||Mt(x++,"element",O0,P)}u=0,k.traverseVisible(function(u0){if(u0.isSVGObject){if(O.setFromMatrixPosition(u0.matrixWorld),O.applyMatrix4(i0),O.z<-1||O.z>1)return;const c0=O.x*a,O0=-O.y*o,P=ft(u++);P.node=u0.node,P.x=c0,P.y=O0,P.z=O.z,P.renderOrder=u0.renderOrder,Mt(x++,"svgObject",P,null)}}),e0.length=x,this.sortElements&&u>0&&e0.sort(v0),p="",E="";for(let u0=0;u0<x;u0++){const c0=e0[u0];if(c0.type==="svgObject"){Z0();const O0=c0.data,P=O0.node;P.setAttribute("transform","translate("+O0.x+","+O0.y+")"),E0.appendChild(P)}else{const O0=c0.data,P=c0.material;w.makeEmpty(),O0 instanceof ya?(c=O0,c.x*=a,c.y*=-o,G0(c,O0,P)):O0 instanceof Ma?(c=O0.v1,l=O0.v2,c.positionScreen.x*=a,c.positionScreen.y*=-o,l.positionScreen.x*=a,l.positionScreen.y*=-o,w.setFromPoints([c.positionScreen,l.positionScreen]),S.intersectsBox(w)===!0&&dt(c,l,P)):O0 instanceof Sa&&(c=O0.v1,l=O0.v2,h=O0.v3,c.positionScreen.x*=a,c.positionScreen.y*=-o,l.positionScreen.x*=a,l.positionScreen.y*=-o,h.positionScreen.x*=a,h.positionScreen.y*=-o,this.overdraw>0&&($0(c.positionScreen,l.positionScreen,this.overdraw),$0(l.positionScreen,h.positionScreen,this.overdraw),$0(h.positionScreen,c.positionScreen,this.overdraw)),w.setFromPoints([c.positionScreen,l.positionScreen,h.positionScreen]),S.intersectsBox(w)===!0&&B0(c,l,h,O0,P))}}Z0()};function U0(k){M.setRGB(0,0,0),D.setRGB(0,0,0),R.setRGB(0,0,0);for(let s0=0,f0=k.length;s0<f0;s0++){const u0=k[s0],c0=u0.color;u0.isAmbientLight?(M.r+=c0.r,M.g+=c0.g,M.b+=c0.b):u0.isDirectionalLight?(D.r+=c0.r,D.g+=c0.g,D.b+=c0.b):u0.isPointLight&&(R.r+=c0.r,R.g+=c0.g,R.b+=c0.b)}}function y0(k,s0,f0,u0){for(let c0=0,O0=k.length;c0<O0;c0++){const P=k[c0],z0=P.color;if(P.isDirectionalLight){const V0=O.setFromMatrixPosition(P.matrixWorld).sub(z.setFromMatrixPosition(P.target.matrixWorld)).normalize();let C0=f0.dot(V0);if(C0<=0)continue;C0*=P.intensity,u0.r+=z0.r*C0,u0.g+=z0.g*C0,u0.b+=z0.b*C0}else if(P.isPointLight){const V0=O.setFromMatrixPosition(P.matrixWorld);let C0=f0.dot(O.subVectors(V0,s0).normalize());if(C0<=0||(C0*=P.distance==0?1:1-Math.min(s0.distanceTo(V0)/P.distance,1),C0==0))continue;C0*=P.intensity,u0.r+=z0.r*C0,u0.g+=z0.g*C0,u0.b+=z0.b*C0}}}function G0(k,s0,f0){let u0=s0.scale.x*a,c0=s0.scale.y*o;f0.isPointsMaterial&&(u0*=f0.size,c0*=f0.size);const O0="M"+l0(k.x-u0*.5)+","+l0(k.y-c0*.5)+"h"+l0(u0)+"v"+l0(c0)+"h"+l0(-u0)+"z";let P="";(f0.isSpriteMaterial||f0.isPointsMaterial)&&(P="fill:"+f0.color.getStyle(v.outputColorSpace)+";fill-opacity:"+f0.opacity),nt(P,O0)}function dt(k,s0,f0){const u0="M"+l0(k.positionScreen.x)+","+l0(k.positionScreen.y)+"L"+l0(s0.positionScreen.x)+","+l0(s0.positionScreen.y);if(f0.isLineBasicMaterial){let c0="fill:none;stroke:"+f0.color.getStyle(v.outputColorSpace)+";stroke-opacity:"+f0.opacity+";stroke-width:"+f0.linewidth+";stroke-linecap:"+f0.linecap;f0.isLineDashedMaterial&&(c0=c0+";stroke-dasharray:"+f0.dashSize+","+f0.gapSize),nt(c0,u0)}}function B0(k,s0,f0,u0,c0){v.info.render.vertices+=3,v.info.render.faces++;const O0="M"+l0(k.positionScreen.x)+","+l0(k.positionScreen.y)+"L"+l0(s0.positionScreen.x)+","+l0(s0.positionScreen.y)+"L"+l0(f0.positionScreen.x)+","+l0(f0.positionScreen.y)+"z";let P="";c0.isMeshBasicMaterial?(T.copy(c0.color),c0.vertexColors&&T.multiply(u0.color)):c0.isMeshLambertMaterial||c0.isMeshPhongMaterial||c0.isMeshStandardMaterial?(g.copy(c0.color),c0.vertexColors&&g.multiply(u0.color),T.copy(M),C.copy(k.positionWorld).add(s0.positionWorld).add(f0.positionWorld).divideScalar(3),y0(n,C,u0.normalModel,T),T.multiply(g).add(c0.emissive)):c0.isMeshNormalMaterial&&(V.copy(u0.normalModel).applyMatrix3($).normalize(),T.setRGB(V.x,V.y,V.z).multiplyScalar(.5).addScalar(.5)),c0.wireframe?P="fill:none;stroke:"+T.getStyle(v.outputColorSpace)+";stroke-opacity:"+c0.opacity+";stroke-width:"+c0.wireframeLinewidth+";stroke-linecap:"+c0.wireframeLinecap+";stroke-linejoin:"+c0.wireframeLinejoin:P="fill:"+T.getStyle(v.outputColorSpace)+";fill-opacity:"+c0.opacity,nt(P,O0)}function $0(k,s0,f0){let u0=s0.x-k.x,c0=s0.y-k.y;const O0=u0*u0+c0*c0;if(O0===0)return;const P=f0/Math.sqrt(O0);u0*=P,c0*=P,s0.x+=u0,s0.y+=c0,k.x-=u0,k.y-=c0}function nt(k,s0){E===k?p+=s0:(Z0(),E=k,p=s0)}function Z0(){p&&(d=gt(f++),d.setAttribute("d",p),d.setAttribute("style",E),E0.appendChild(d)),p="",E=""}function gt(k){let s0=B[k];return s0===void 0&&(s0=document.createElementNS("http://www.w3.org/2000/svg","path"),m==0&&s0.setAttribute("shape-rendering","crispEdges"),B[k]=s0),s0}function ft(k){let s0=Z[k];return s0===void 0&&(s0={node:null,x:0,y:0,z:0,renderOrder:0},Z[k]=s0),s0}function Mt(k,s0,f0,u0){let c0=e0[k];return c0===void 0?(c0={type:s0,data:f0,material:u0},e0[k]=c0,c0):(c0.type=s0,c0.data=f0,c0.material=u0,c0)}}}const jt=new X0;class al extends Ys{constructor(t){super(t),this.propertyNameMapping={},this.customPropertyMapping={}}load(t,e,n,s){const r=this,a=new k2(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setPropertyNameMapping(t){this.propertyNameMapping=t}setCustomPropertyNameMapping(t){this.customPropertyMapping=t}parse(t){function e(v,S=0){const w=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let T="";const g=w.exec(v);g!==null&&(T=g[1]);const M={comments:[],elements:[],headerLength:S,objInfo:""},D=T.split(/\r\n|\r|\n/);let R;function N(O,z){const C={type:O[0]};return C.type==="list"?(C.name=O[3],C.countType=O[1],C.itemType=O[2]):C.name=O[1],C.name in z&&(C.name=z[C.name]),C}for(let O=0;O<D.length;O++){let z=D[O];if(z=z.trim(),z==="")continue;const C=z.split(/\s+/),V=C.shift();switch(z=C.join(" "),V){case"format":M.format=C[0],M.version=C[1];break;case"comment":M.comments.push(z);break;case"element":R!==void 0&&M.elements.push(R),R={},R.name=C[0],R.count=parseInt(C[1]),R.properties=[];break;case"property":R.properties.push(N(C,E.propertyNameMapping));break;case"obj_info":M.objInfo=z;break;default:console.log("unhandled",V,C)}}return R!==void 0&&M.elements.push(R),M}function n(v,S){switch(S){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(v);case"float":case"double":case"float32":case"float64":return parseFloat(v)}}function s(v,S){const w={};for(let T=0;T<v.length;T++){if(S.empty())return null;if(v[T].type==="list"){const g=[],M=n(S.next(),v[T].countType);for(let D=0;D<M;D++){if(S.empty())return null;g.push(n(S.next(),v[T].itemType))}w[v[T].name]=g}else w[v[T].name]=n(S.next(),v[T].type)}return w}function r(){const v={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[],descriptors:{}};for(const S of Object.keys(E.customPropertyMapping))v[S]=[];return v}function a(v){switch(v){case"int8":case"char":return ko;case"uint8":case"uchar":return Vo;case"int16":case"short":return Wo;case"uint16":case"ushort":return Os;case"int32":case"int":return Xo;case"uint32":case"uint":return Bs;case"float32":case"float":return _t;case"float64":case"double":return ol}}function o(v){switch(v){case"uchar":case"uint8":return 1/255;case"ushort":case"uint16":return 1/65535;case"float":case"float32":case"double":case"float64":return 1;default:return 1/255}}function c(v){return v==="float"||v==="float32"||v==="double"||v==="float64"}function l(v){function S(i0){for(const B of i0){const Z=v.find(e0=>e0.name===B);if(Z)return Z}return null}const w=S(["x","px","posx"]),T=S(["y","py","posy"]),g=S(["z","pz","posz"]),M=S(["nx","normalx"]),D=S(["ny","normaly"]),R=S(["nz","normalz"]),N=S(["s","u","texture_u","tx"]),O=S(["t","v","texture_v","ty"]),z=S(["red","diffuse_red","r","diffuse_r"]),C=S(["green","diffuse_green","g","diffuse_g"]),V=S(["blue","diffuse_blue","b","diffuse_b"]),$=S(["texcoord"]),W={};for(const i0 of Object.keys(E.customPropertyMapping)){const Z=E.customPropertyMapping[i0].map(E0=>v.find(Q=>Q.name===E0)),e0=Z.filter(E0=>E0).map(E0=>E0.type),T0=e0.length>0&&e0.every(E0=>E0===e0[0]);W[i0]={type:T0?e0[0]:"float32",usage:Z.every(E0=>E0!==void 0)}}return{position:{names:[w?w.name:"x",T?T.name:"y",g?g.name:"z"],type:w?w.type:"float32",usage:!!(w&&T&&g)},normal:{names:[M?M.name:"nx",D?D.name:"ny",R?R.name:"nz"],type:M?M.type:"float32",usage:!!(M&&D&&R)},uv:{names:[N?N.name:"s",O?O.name:"t"],type:N?N.type:"float32",usage:!!(N&&O)},texcoord:{type:$?$.itemType:"float32",usage:!!$},color:{names:[z?z.name:"red",C?C.name:"green",V?V.name:"blue"],type:z?z.type:"uchar",usage:!!(z&&C&&V)},custom:W}}function h(v,S){const w=r(),T=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let g,M;(M=T.exec(v))!==null?g=M[1].split(/\s+/):g=[];const D=new ll(g);t:for(let R=0;R<S.elements.length;R++){const N=S.elements[R],O=l(N.properties);w.descriptors[N.name]=O;for(let z=0;z<N.count;z++){const C=s(N.properties,D);if(!C)break t;f(w,N.name,C,O)}}return d(w)}function d(v){let S=new Zt;const w=v.descriptors.vertex;v.indices.length>0&&S.setIndex(v.indices);const T=a(w?w.position.type:"float32");if(S.setAttribute("position",new T(v.vertices,3)),v.normals.length>0){const g=a(w.normal.type);S.setAttribute("normal",new g(v.normals,3))}if(v.uvs.length>0){const g=a(w.uv.type);S.setAttribute("uv",new g(v.uvs,2))}if(v.colors.length>0){const g=w.color.type,M=!c(g),D=a(g);S.setAttribute("color",new D(v.colors,3,M))}for(const g of Object.keys(E.customPropertyMapping))if(v[g].length>0){const M=a(w.custom[g].type);S.setAttribute(g,new M(v[g],E.customPropertyMapping[g].length))}if(v.faceVertexUvs.length>0||v.faceVertexColors.length>0){if(S=S.toNonIndexed(),v.faceVertexUvs.length>0){const g=a(v.descriptors.face.texcoord.type);S.setAttribute("uv",new g(v.faceVertexUvs,2))}if(v.faceVertexColors.length>0){const g=v.descriptors.face.color.type,M=!c(g),D=a(g);S.setAttribute("color",new D(v.faceVertexColors,3,M))}}return S.computeBoundingSphere(),S}function f(v,S,w,T){if(S==="vertex"){const{position:g,normal:M,uv:D,color:R}=T;if(g.usage&&v.vertices.push(w[g.names[0]],w[g.names[1]],w[g.names[2]]),M.usage&&v.normals.push(w[M.names[0]],w[M.names[1]],w[M.names[2]]),D.usage&&v.uvs.push(w[D.names[0]],w[D.names[1]]),R.usage){const N=o(R.type),O=c(R.type);jt.setRGB(w[R.names[0]]*N,w[R.names[1]]*N,w[R.names[2]]*N,Ot);const z=1/N;v.colors.push(O?jt.r:Math.round(jt.r*z),O?jt.g:Math.round(jt.g*z),O?jt.b:Math.round(jt.b*z))}for(const N of Object.keys(E.customPropertyMapping))for(const O of E.customPropertyMapping[N])v[N].push(w[O])}else if(S==="face"){const g=w.vertex_indices||w.vertex_index,M=w.texcoord;g.length===3?(v.indices.push(g[0],g[1],g[2]),M&&M.length===6&&(v.faceVertexUvs.push(M[0],M[1]),v.faceVertexUvs.push(M[2],M[3]),v.faceVertexUvs.push(M[4],M[5]))):g.length===4&&(v.indices.push(g[0],g[1],g[2]),v.indices.push(g[0],g[2],g[3]),M&&M.length===8&&(v.faceVertexUvs.push(M[0],M[1]),v.faceVertexUvs.push(M[2],M[3]),v.faceVertexUvs.push(M[4],M[5]),v.faceVertexUvs.push(M[0],M[1]),v.faceVertexUvs.push(M[4],M[5]),v.faceVertexUvs.push(M[6],M[7])));const{color:D}=T;if(D.usage){const R=o(D.type);jt.setRGB(w[D.names[0]]*R,w[D.names[1]]*R,w[D.names[2]]*R,Ot);const N=1/R,O=jt.r*N,z=jt.g*N,C=jt.b*N;v.faceVertexColors.push(O,z,C),v.faceVertexColors.push(O,z,C),v.faceVertexColors.push(O,z,C),g.length===4&&(v.faceVertexColors.push(O,z,C),v.faceVertexColors.push(O,z,C),v.faceVertexColors.push(O,z,C))}}}function u(v,S){const w={};let T=0;for(let g=0;g<S.length;g++){const M=S[g],D=M.valueReader;if(M.type==="list"){const R=[],N=M.countReader.read(v+T);T+=M.countReader.size;for(let O=0;O<N;O++)R.push(D.read(v+T)),T+=D.size;w[M.name]=R}else w[M.name]=D.read(v+T),T+=D.size}return[w,T]}function x(v,S,w){function T(g,M,D){switch(M){case"int8":case"char":return{read:R=>g.getInt8(R),size:1};case"uint8":case"uchar":return{read:R=>g.getUint8(R),size:1};case"int16":case"short":return{read:R=>g.getInt16(R,D),size:2};case"uint16":case"ushort":return{read:R=>g.getUint16(R,D),size:2};case"int32":case"int":return{read:R=>g.getInt32(R,D),size:4};case"uint32":case"uint":return{read:R=>g.getUint32(R,D),size:4};case"float32":case"float":return{read:R=>g.getFloat32(R,D),size:4};case"float64":case"double":return{read:R=>g.getFloat64(R,D),size:8}}}for(let g=0,M=v.length;g<M;g++){const D=v[g];D.type==="list"?(D.countReader=T(S,D.countType,w),D.valueReader=T(S,D.itemType,w)):D.valueReader=T(S,D.type,w)}}function A(v,S){const w=r(),T=S.format==="binary_little_endian",g=new DataView(v,S.headerLength);let M,D=0;for(let R=0;R<S.elements.length;R++){const N=S.elements[R],O=N.properties,z=l(O);w.descriptors[N.name]=z,x(O,g,T);for(let C=0;C<N.count;C++){M=u(D,O),D+=M[1];const V=M[0];f(w,N.name,V,z)}}return d(w)}function m(v){let S=0,w=!0,T="";const g=[],M=new TextDecoder().decode(v.subarray(0,5)),D=/^ply\r\n/.test(M);do{const R=String.fromCharCode(v[S++]);R!==`
`&&R!=="\r"?T+=R:(T==="end_header"&&(w=!1),T!==""&&(g.push(T),T=""))}while(w&&S<v.length);return D===!0&&S++,{headerText:g.join("\r")+"\r",headerLength:S}}let p;const E=this;if(t instanceof ArrayBuffer){const v=new Uint8Array(t),{headerText:S,headerLength:w}=m(v),T=e(S,w);if(T.format==="ascii"){const g=new TextDecoder().decode(v);p=h(g,T)}else p=A(t,T)}else p=h(t,e(t));return p}}class ol extends qt{constructor(t,e,n){super(new Float64Array(t),e,n)}}class ll{constructor(t){this.arr=t,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const cl=`ply
format ascii 1.0
comment Adapted from the CC0 MakeHuman hm08 base mesh, with Footnotes artwork.
comment Source https://github.com/makehumancommunity/makehuman/blob/a8bc2d54ff0ac92e78ff71431b1023eda42bf482/makehuman/data/3dobjs/base.obj
comment Units are metres. RGB values are sRGB in the range 0 to 1.
element vertex 2258
property float x
property float y
property float z
property float nx
property float ny
property float nz
property float red
property float green
property float blue
element face 4256
property list uchar ushort vertex_indices
end_header
0.03141 0.16948 -0.08239 0.08184 -0.67165 -0.73633 0.74234 0.51672 0.39027
0.02765 0.15991 -0.08113 -0.12283 -0.06391 -0.99037 0.75267 0.52498 0.39561
0.02288 0.16952 -0.08175 0.01043 -0.20679 -0.97833 0.74881 0.52289 0.39408
0.02377 0.16728 -0.08079 0.28831 -0.75515 -0.58875 0.7469 0.52098 0.39291
0.01693 0.16389 -0.08072 0.54837 -0.55878 -0.62214 0.75787 0.53114 0.39923
0.01775 0.16298 -0.07909 0.50513 0.09407 -0.8579 0.75755 0.53074 0.399
0.02651 0.15378 -0.08113 0.09373 0.33465 -0.93767 0.76557 0.53502 0.40215
0.01619 0.16734 -0.0824 0.40343 -0.42848 -0.80849 0.75763 0.5311 0.39917
0.00641 0.17031 -0.09058 0.43652 -0.18903 -0.87961 0.76837 0.5412 0.40543
0.00335 0.15495 -0.09421 0.48401 0.34872 -0.80257 0.77167 0.54407 0.40724
0.00274 0.16505 -0.09185 0.34016 0.08538 -0.93648 0.77022 0.5429 0.40648
0.04486 0.15612 -0.07469 0.5979 -0.02466 -0.80119 0.76649 0.53409 0.40185
0.04889 0.16189 -0.0722 0.58499 -0.17453 -0.79204 0.76275 0.53361 0.40108
0.04832 0.1678 -0.07396 0.73337 0.05957 -0.67722 0.75912 0.53175 0.39969
0.04487 0.17205 -0.0768 0.56322 -0.01265 -0.82621 0.75662 0.52995 0.39849
0.03537 0.17375 -0.08129 0.2653 -0.03676 -0.96346 0.74987 0.52389 0.3947
0.01126 0.17239 -0.08838 0.44835 -0.38245 -0.80791 0.76523 0.53829 0.40362
0 0.17458 -0.09233 0 -0.10224 -0.99476 0.77153 0.54415 0.40725
0.03535 0.17944 -0.08243 0.38846 -0.15009 -0.90916 0.76148 0.53479 0.40145
0.05296 0.17498 -0.07043 0.73074 0.02258 -0.68228 0.76712 0.53982 0.40459
0.05872 0.15729 -0.06289 0.80088 -0.00293 -0.59881 0.7708 0.53957 0.40481
0.01552 0.18796 -0.09168 0.30213 -0.12323 -0.94527 0.77178 0.54438 0.4074
0 0.19258 -0.09479 0 -0.01842 -0.99983 0.77253 0.54508 0.40783
0.05834 0.20358 -0.05976 0.84731 0.09885 -0.52182 0.77254 0.54508 0.40783
0.02822 0.22617 -0.07996 0.47052 0.32517 -0.82029 0.77255 0.5451 0.40784
0.06059 0.1648 -0.05986 0.88554 0.0319 -0.46347 0.76924 0.54029 0.4049
0.05824 0.17521 -0.06193 0.86762 0.06726 -0.49266 0.76979 0.54217 0.40602
0.06281 0.21411 -0.04853 0.8705 0.11563 -0.47839 0.77254 0.54509 0.40784
0.06738 0.20317 -0.03887 0.93363 0.01161 -0.35804 0.77248 0.54499 0.40777
0.06124 0.19144 -0.05477 0.92152 0.03122 -0.38708 0.77238 0.54486 0.40768
0.06827 0.17724 -0.03038 0.97814 0.00608 -0.20785 0.77067 0.54221 0.40589
0.0687 0.19121 -0.03187 0.96233 -0.06025 -0.26513 0.7721 0.54441 0.40738
0.06916 0.17846 -0.02655 0.97388 -0.02156 -0.22604 0.33751 0.23072 0.1764
0.05498 0.26184 0.02545 0.76521 0.62575 0.15129 0.33773 0.23106 0.17663
0.05386 0.26557 -0.00519 0.77391 0.63208 -0.03932 0.33773 0.23106 0.17663
0.04169 0.27651 -0.00701 0.59205 0.80259 -0.07299 0.33773 0.23106 0.17663
0.04406 0.27313 0.0284 0.53587 0.82206 0.1925 0.33773 0.23106 0.17663
0 0.13629 -0.10678 -0 0.53322 -0.84598 0.77267 0.54486 0.40775
0.01236 0.13425 -0.09971 0.74784 0.46748 -0.47138 0.7734 0.54351 0.40723
0.00906 0.14014 -0.09743 0.71512 0.46348 -0.52325 0.77301 0.54412 0.40746
0.00681 0.13575 -0.10433 0.54311 0.45834 -0.70353 0.77293 0.54437 0.40756
0.01829 0.13025 -0.08874 0.53084 0.03083 -0.84691 0.77416 0.54209 0.40669
0.01727 0.12912 -0.0902 0.94456 0.15272 -0.29068 0.77395 0.54249 0.40684
0.00525 0.1244 -0.10709 0.39712 -0.54587 -0.73778 0.76121 0.53556 0.40141
0.00529 0.12047 -0.10105 0.70972 -0.66238 -0.23989 0.71353 0.49809 0.3756
0 0.12397 -0.10835 0 -0.59009 -0.80734 0.77138 0.54394 0.4071
0.00539 0.11645 -0.09675 0.56796 -0.1518 -0.80894 0.76118 0.5358 0.40152
0 0.11634 -0.0988 0 -0.7864 -0.61772 0.76915 0.54228 0.40594
0.00887 0.12292 -0.1023 0.4159 -0.90343 -0.10406 0.70706 0.4926 0.37191
0.01397 0.12229 -0.09725 0.23779 -0.90612 -0.34985 0.69357 0.48135 0.3643
0.01473 0.12312 -0.09683 0.77382 -0.4699 -0.42473 0.73597 0.51437 0.38711
0.01409 0.12174 -0.09377 -0.00481 -0.90324 -0.4291 0.67927 0.47016 0.35659
0 0.12681 -0.10966 0 -0.25044 -0.96813 0.77258 0.54485 0.40773
0.01524 0.1195 -0.0902 0.64102 -0.09087 -0.76213 0.75698 0.5312 0.39863
0.0291 0.1292 -0.08614 0.27124 -0.06011 -0.96063 0.77644 0.53787 0.40506
0.02771 0.12166 -0.08566 0.3511 -0.03477 -0.93569 0.77495 0.54063 0.40612
0.00607 0.12222 -0.09941 0.68956 -0.72387 -0.02271 0.72476 0.50684 0.38164
0 0.11293 -0.09731 0 -0.04659 -0.99891 0.77253 0.545 0.40779
0.00187 0.11326 -0.09797 0.00324 0.08863 -0.99606 0.7726 0.54501 0.40781
0 0.1053 -0.10123 0 0.56095 -0.82785 0.77256 0.54508 0.40783
0 0.10788 -0.09854 -0 0.42392 -0.9057 0.77257 0.54507 0.40783
0.00828 0.123 -0.09772 0.3536 -0.88008 -0.31689 0.71461 0.49861 0.37603
0.02415 0.10023 -0.08756 0.71405 -0.09412 -0.69374 0.77266 0.54489 0.40776
0.02231 0.09717 -0.08721 0.31258 -0.86412 -0.39444 0.56627 0.32215 0.28376
0.02094 0.09733 -0.08537 -0.32247 -0.87333 0.3651 0.58279 0.33192 0.29262
0.02515 0.09628 -0.083 0.25883 0.07743 -0.96281 0.56744 0.3285 0.28514
0.02465 0.09681 -0.08065 -0.93659 0.3245 0.13232 0.56275 0.32429 0.28244
0.00807 0.10758 -0.10002 0.31428 0.59372 -0.74076 0.77261 0.54498 0.4078
0.018 0.10316 -0.09432 0.62853 0.03021 -0.7772 0.77266 0.5449 0.40777
0.00811 0.10515 -0.10055 0.37674 -0.25854 -0.88951 0.77259 0.54502 0.40781
0 0.10279 -0.10163 0 -0.4089 -0.91258 0.68825 0.39482 0.3492
0.01301 0.09709 -0.09505 0.23684 -0.87996 -0.41179 0.63726 0.36411 0.3218
0 0.09642 -0.09676 0 -0.97382 -0.22733 0.54732 0.31095 0.27361
0.01804 0.09462 -0.08958 0.59651 0.26369 -0.75806 0.60281 0.34375 0.30334
0.01309 0.08686 -0.09376 0.52012 -0.27135 -0.80984 0.77255 0.54509 0.40784
0.01208 0.09355 -0.09391 0.39071 0.40853 -0.82489 0.62314 0.35577 0.31424
0.01118 0.09603 -0.09312 0.3182 0.81126 -0.49051 0.57312 0.3262 0.28743
0.00541 0.08389 -0.09509 0.16934 -0.67443 -0.71866 0.77255 0.5451 0.40784
0.01324 0.08519 -0.09266 0.44989 -0.59715 -0.66408 0.77255 0.5451 0.40784
0.00513 0.09622 -0.09456 -0.01546 0.99547 -0.09382 0.55242 0.31397 0.27634
0.00741 0.0976 -0.09259 0.01441 -0.91645 0.39989 0.65148 0.37252 0.32942
0 0.0971 -0.09286 0 -0.95251 0.30452 0.57999 0.33026 0.29111
0.02419 0.09621 -0.07842 -0.37125 0.85665 0.35822 0.54766 0.31115 0.27379
0.01098 0.09473 -0.088 -0.6605 0.27641 0.6981 0.55163 0.3135 0.27592
0.01731 0.0941 -0.08037 -0.62114 0.4132 0.66592 0.62973 0.35966 0.31777
0 0.10062 -0.09211 0 -0.06532 0.99786 0.68745 0.39377 0.34869
0.00647 0.10212 -0.09104 -0.29907 -0.14333 0.9434 0.68777 0.39396 0.34886
0.00644 0.09438 -0.0902 -0.30122 0.33432 0.89303 0.59545 0.3394 0.2994
0.01954 0.10038 -0.08274 -0.63737 -0.32943 0.69659 0.77262 0.54496 0.40779
0.02634 0.09768 -0.07582 -0.8773 0.0891 0.47159 0.77263 0.54495 0.40779
0.01193 0.08689 -0.0867 -0.63745 0.36864 0.67658 0.77255 0.5451 0.40784
0.01257 0.08163 -0.08394 -0.47879 0.67881 0.55675 0.77255 0.5451 0.40784
0.00589 0.11106 -0.09055 -0.32615 -0.28784 0.90043 0.77154 0.54411 0.4072
0.00594 0.08627 -0.0906 -0.39152 0.51859 0.76011 0.77255 0.5451 0.40784
0.02306 0.09017 -0.07594 -0.71381 0.35178 0.60558 0.77256 0.54508 0.40783
0.00826 0.05768 -0.02871 -0.25569 0.96424 0.06968 0.77255 0.5451 0.40784
0 0.05511 -0.03005 0 0.94679 0.32186 0.77255 0.5451 0.40784
0 0.06575 -0.01739 0 0.43274 -0.90152 0.77255 0.5451 0.40784
0.02103 0.1118 -0.07858 -0.70151 -0.32082 0.63636 0.77274 0.54386 0.40729
0 0.07451 -0.05177 0 0.97825 0.20745 0.77255 0.5451 0.40784
0.00582 0.11668 -0.08808 -0.17694 -0.63694 0.75033 0.71502 0.49935 0.37645
0.01724 0.07879 -0.07583 -0.49025 0.84472 0.21474 0.77255 0.5451 0.40784
0 0.07226 -0.0707 0 0.9992 0.03997 0.77255 0.5451 0.40784
0.0014 0.11567 -0.08868 0.34717 -0.61462 0.70832 0.76639 0.54008 0.40443
0 0.11508 -0.08819 -0 -0.64534 0.7639 0.77042 0.5433 0.40663
0.00615 0.07546 -0.08331 -0.21441 0.95022 0.22609 0.77255 0.5451 0.40784
0 0.07586 -0.0821 0 0.93701 0.3493 0.77255 0.5451 0.40784
0.00458 0.08059 -0.08851 -0.25217 0.77046 0.58549 0.77255 0.5451 0.40784
0.00118 0.12315 -0.07978 0.46139 -0.75137 0.47178 0.76858 0.54168 0.40556
0 0.1223 -0.07923 0 -0.82823 0.56039 0.76978 0.5427 0.40624
0.00873 0.12442 -0.07851 -0.24533 -0.80887 0.53437 0.74303 0.52085 0.39137
0.02551 0.0854 -0.06962 -0.85551 0.42966 0.28895 0.77255 0.54509 0.40784
0.02296 0.11754 -0.07297 -0.71442 -0.49093 0.49859 0.77118 0.54092 0.40563
0 0.08629 -0.09245 0 0.67602 0.73688 0.77255 0.5451 0.40784
0.01398 0.07682 -0.06534 -0.34264 0.93887 0.03339 0.77255 0.5451 0.40784
0.02944 0.10821 -0.06915 -0.88625 -0.24636 0.39225 0.77317 0.54394 0.4074
0.03071 0.10005 -0.06782 -0.95226 0.07518 0.29589 0.77272 0.54478 0.40772
0 0.09327 -0.09104 0 0.0576 0.99834 0.67558 0.38676 0.34233
0 0.12887 -0.06499 -0 -0.94872 0.31612 0.77264 0.54487 0.40775
0 0.09585 -0.09227 0 0.76167 0.64796 0.5468 0.31064 0.27333
0.00677 0.13198 -0.06458 0.05394 -0.95822 0.28091 0.77292 0.54439 0.40757
0.00965 0.13178 -0.06425 -0.15729 -0.9452 0.2861 0.7731 0.54401 0.40742
0.02478 0.12326 -0.06225 -0.75163 -0.57449 0.32407 0.77437 0.54082 0.40612
0.01844 0.12757 -0.06283 -0.47659 -0.81364 0.33295 0.77334 0.54175 0.40638
0.02143 0.07905 -0.04679 -0.42852 0.83575 0.34334 0.77255 0.5451 0.40784
0.01724 0.06281 -0.02903 -0.3344 0.90409 0.26608 0.77255 0.5451 0.40784
0.02477 0.06756 -0.02875 -0.72598 0.6739 -0.13716 0.77255 0.5451 0.40784
0.02553 0.08205 -0.0448 -0.7054 0.69036 0.16067 0.77255 0.5451 0.40784
0 0.09574 -0.0954 0 0.77698 -0.62952 0.54987 0.31246 0.27497
0.03615 0.11402 -0.04204 -0.96393 -0.24442 0.10531 0.77353 0.54328 0.40714
0.03672 0.10313 -0.04114 -0.98503 0.15648 0.07238 0.77275 0.54473 0.4077
0 0.13168 -0.04569 0 -0.99925 0.03876 0.77263 0.54494 0.40778
0.0087 0.13536 -0.04402 0.10161 -0.99473 -0.01339 0.77286 0.54451 0.40761
0.01235 0.13537 -0.04395 -0.17117 -0.98514 -0.0143 0.77306 0.54412 0.40747
0.02989 0.08439 -0.04464 -0.86149 0.50696 0.02879 0.77255 0.54509 0.40784
0.02921 0.12655 -0.0433 -0.7867 -0.61161 0.08386 0.77463 0.54123 0.40636
0.02259 0.1312 -0.04361 -0.4508 -0.8917 0.04065 0.77405 0.5423 0.40677
0.00162 0.12995 -0.02524 0.47573 -0.82658 -0.30075 0.77255 0.54509 0.40784
0 0.12858 -0.02601 0 -0.95648 -0.29181 0.77255 0.54509 0.40784
0 0.09119 -0.0982 -0 0.04812 -0.99884 0.68767 0.39391 0.34881
0.01191 0.13151 -0.02367 -0.20686 -0.89949 -0.38486 0.77256 0.54508 0.40783
0.0301 0.08452 -0.02508 -0.93138 0.32801 -0.15794 0.77255 0.5451 0.40784
0.02803 0.07454 -0.02918 -0.94787 0.30839 -0.08027 0.77255 0.5451 0.40784
0.02895 0.12278 -0.02303 -0.7133 -0.64435 -0.27572 0.77258 0.54505 0.40782
0.02175 0.12786 -0.02349 -0.36135 -0.85531 -0.37132 0.77258 0.54504 0.40782
0.0114 0.06921 -0.01342 -0.3287 0.43536 -0.83811 0.77255 0.5451 0.40784
0.0168 0.07313 -0.01056 -0.30848 0.38735 -0.86879 0.77255 0.5451 0.40784
0 0.08434 -0.09927 0 -0.58 -0.81462 0.77255 0.5451 0.40784
0.03638 0.111 -0.02168 -0.96582 -0.21221 -0.14888 0.77255 0.54509 0.40784
0.03542 0.10211 -0.02138 -0.95744 0.26681 -0.11009 0.77255 0.5451 0.40784
0.02184 0.11593 -0.00616 -0.33235 -0.68324 -0.65017 0.77255 0.5451 0.40784
0.02583 0.1138 -0.00544 -0.48724 -0.61241 -0.62254 0.77255 0.5451 0.40784
0.00942 0.1199 -0.00733 -0.21013 -0.69156 -0.69108 0.77255 0.5451 0.40784
0.02097 0.0791 -0.00576 -0.77205 0.21877 -0.59672 0.77255 0.5451 0.40784
0.03255 0.1057 -0.00384 -0.85049 -0.2171 -0.4791 0.77255 0.5451 0.40784
0.03116 0.10004 -0.00165 -0.85806 0.36039 -0.36586 0.77255 0.5451 0.40784
0 0.11825 -0.00948 0 -0.76797 -0.64049 0.77255 0.5451 0.40784
0.00382 0.11947 -0.00773 0.35668 -0.69381 -0.62563 0.77255 0.5451 0.40784
0.02172 0.08779 -0.00161 -0.84061 0.25746 -0.47653 0.77255 0.5451 0.40784
0.00832 0.08851 0.00095 0.03987 0.10038 -0.99415 0.77255 0.5451 0.40784
0.01245 0.08879 0.00195 0.04079 0.12312 -0.99155 0.77255 0.5451 0.40784
0 0.08809 -0.00002 0 0.13518 -0.99082 0.77255 0.5451 0.40784
0.00449 0.08734 0.00106 0.08891 0.09762 -0.99124 0.77255 0.5451 0.40784
0.01527 0.10326 0.0024 -0.10251 -0.22708 -0.96847 0.77255 0.5451 0.40784
0.01475 0.11793 -0.00784 -0.07051 -0.72647 -0.68357 0.77255 0.5451 0.40784
0.01152 0.10606 0.00279 0.15404 -0.63731 -0.75506 0.77255 0.5451 0.40784
0.02306 0.10052 0.00351 -0.35706 -0.1821 -0.91616 0.77255 0.5451 0.40784
0.00176 0.10408 0.00076 0.29199 -0.16089 -0.94279 0.77255 0.5451 0.40784
0 0.10372 0.00061 0 -0.23082 -0.973 0.49918 0.34766 0.26248
0.00526 0.10607 0.00261 -0.18475 -0.52798 -0.82892 0.77255 0.5451 0.40784
0.00318 0.1058 0.00241 0.43007 -0.4594 -0.77717 0.77255 0.5451 0.40784
0.0074 0.1045 0.0023 0.03054 -0.20665 -0.97794 0.77255 0.5451 0.40784
0.01585 0.228 -0.08423 0.27632 0.40152 -0.87317 0.77255 0.5451 0.40784
0.01305 0.08017 -0.09243 0.4198 -0.26851 -0.86699 0.77255 0.5451 0.40784
0.00644 0.05197 -0.10077 0.1915 -0.98015 -0.05128 0.77255 0.5451 0.40784
0.01457 0.05388 -0.09717 0.36278 -0.92801 -0.08481 0.77255 0.5451 0.40784
0.05432 0.08815 -0.03249 0.88045 -0.47365 -0.02156 0.77254 0.54507 0.40783
0.05174 0.08466 -0.02942 0.79961 -0.58032 0.15445 0.77255 0.54509 0.40784
0.0511 0.09612 0.00592 0.89465 -0.42519 0.13715 0.77254 0.54508 0.40783
0.04721 0.08834 0.00821 0.94108 -0.33344 -0.05649 0.77255 0.5451 0.40784
0.0411 0.07376 -0.00333 0.91603 -0.26145 -0.30418 0.77255 0.5451 0.40784
0.04455 0.07814 0.00729 0.96162 -0.19683 -0.19118 0.77255 0.5451 0.40784
0.04097 0.05939 -0.00811 0.93791 -0.11226 -0.32822 0.77255 0.5451 0.40784
0.04372 0.06515 0.0026 0.98082 -0.08203 -0.17683 0.77255 0.5451 0.40784
0.03896 0.02736 0.00256 0.97405 0.06571 -0.21658 0.77255 0.5451 0.40784
0.03614 0 0.00147 0.95081 0.11005 -0.28957 0.77255 0.5451 0.40784
0.03862 0 0.00895 0.94796 0.15839 -0.27618 0.77255 0.5451 0.40784
0.04677 0.08452 -0.01332 0.77719 -0.60762 0.16361 0.77255 0.5451 0.40784
0.0345 0.06668 -0.01839 0.8385 -0.44633 -0.31257 0.77255 0.5451 0.40784
0.03779 0.07113 -0.00966 0.86847 -0.35756 -0.3434 0.77255 0.5451 0.40784
0.03229 0.0449 -0.01927 0.70183 -0.15228 -0.69588 0.77255 0.5451 0.40784
0.03747 0.05254 -0.01551 0.84228 -0.1151 -0.5266 0.77255 0.5451 0.40784
0.03116 0 -0.0109 0.87555 0.0078 -0.48307 0.77255 0.5451 0.40784
0.03385 0 -0.00512 0.92705 0.06507 -0.36924 0.77255 0.5451 0.40784
0.0125 0.05489 -0.07419 0.30098 -0.95083 0.07307 0.77255 0.5451 0.40784
0.01107 0.05341 -0.06234 0.32714 -0.94466 -0.02449 0.77255 0.5451 0.40784
0.0036 0.04094 -0.04588 0.20902 -0.9262 -0.3138 0.77255 0.5451 0.40784
0.00244 0.01364 -0.03173 0.22373 -0.59953 -0.76845 0.77255 0.5451 0.40784
0.0092 0 -0.02583 0.44329 -0.27517 -0.8531 0.77255 0.5451 0.40784
0.00942 0.01514 -0.03017 0.39015 -0.51529 -0.76306 0.77255 0.5451 0.40784
0.01284 0 -0.02347 0.5338 -0.25509 -0.80622 0.77255 0.5451 0.40784
0.0057 0 -0.02716 0.28079 -0.23758 -0.9299 0.77255 0.5451 0.40784
0.00257 0 -0.02806 0.22283 -0.23068 -0.94717 0.77255 0.5451 0.40784
0.02124 0.0505 -0.03707 0.62708 -0.71143 -0.31724 0.77255 0.5451 0.40784
0.01692 0.02148 -0.02706 0.66165 -0.40684 -0.62985 0.77255 0.5451 0.40784
0.02744 0 -0.01507 0.70627 -0.0965 -0.70134 0.77255 0.5451 0.40784
0.02747 0.03731 -0.02158 0.67363 -0.23048 -0.70221 0.77255 0.5451 0.40784
0 0.04027 -0.04615 0 -0.97677 -0.2143 0.77255 0.5451 0.40784
0 0.05184 -0.06922 0 -0.99998 0.00684 0.77255 0.5451 0.40784
0.04473 0.07419 -0.04929 0.72416 -0.68567 0.07378 0.77255 0.5451 0.40784
0.0546 0.22406 -0.05885 0.75159 0.26583 -0.6037 0.77255 0.5451 0.40784
0.04722 0.08328 0.02102 0.97975 -0.19875 -0.02413 0.77255 0.5451 0.40784
0.04059 0 0.01673 0.95386 0.17906 -0.24101 0.77255 0.5451 0.40784
0.0406 0 0.01676 0.91672 0.33889 -0.21163 0.77255 0.5451 0.40784
0.04228 0.0393 0.01101 0.98561 0.05472 -0.15995 0.77255 0.5451 0.40784
0.04528 0.07053 0.01625 0.99562 -0.05882 -0.07264 0.77255 0.5451 0.40784
0.0491 0.09605 0.03421 0.97538 -0.18387 0.12179 0.77254 0.54509 0.40784
0.04122 0.00509 0.0237 0.96253 0.24922 -0.10687 0.77255 0.5451 0.40784
0.04254 0 0.02517 0.87054 0.47598 -0.12495 0.77255 0.5451 0.40784
0.04552 0.05203 0.02258 0.99259 0.10609 -0.05922 0.77255 0.5451 0.40784
0.04658 0.09761 0.04824 0.9659 -0.12815 0.22498 0.77255 0.54509 0.40784
0.04181 0.01402 0.03188 0.94352 0.30267 0.13476 0.77255 0.5451 0.40784
0.04305 0 0.03387 0.87137 0.48316 0.08531 0.77255 0.5451 0.40784
0.04542 0.07671 0.04512 0.98864 0.02118 0.14883 0.77255 0.5451 0.40784
0.0462 0.0595 0.03571 0.97928 0.14583 0.14052 0.77255 0.5451 0.40784
0.0426 0.09023 0.06114 0.86763 -0.01063 0.4971 0.77255 0.5451 0.40784
0.03927 0.0218 0.03989 0.72747 0.35331 0.58818 0.77255 0.5451 0.40784
0.0399 0 0.04161 0.70584 0.50389 0.49789 0.77255 0.5451 0.40784
0.04217 0.07875 0.05748 0.84735 0.06305 0.52728 0.77255 0.5451 0.40784
0.04259 0.06347 0.04799 0.79726 0.16628 0.58029 0.77255 0.5451 0.40784
0.03599 0.09988 0.06874 0.53392 -0.05942 0.84344 0.77255 0.5451 0.40784
0.0351 0.09172 0.06858 0.46798 -0.02013 0.88351 0.77255 0.5451 0.40784
0.03051 0.02265 0.04523 0.40734 0.32116 0.85494 0.77255 0.5451 0.40784
0.03183 0 0.04665 0.3971 0.48132 0.78143 0.77255 0.5451 0.40784
0.03467 0.08025 0.0648 0.42016 0.06542 0.90509 0.77255 0.5451 0.40784
0.03472 0.06445 0.05479 0.40986 0.16037 0.89794 0.77255 0.5451 0.40784
0.02417 0.09336 0.07162 0.14706 -0.08226 0.9857 0.77255 0.5451 0.40784
0.02348 0 0.04919 0.16797 0.45793 0.87297 0.77255 0.5451 0.40784
0.02362 0.08238 0.0681 0.10548 0.03783 0.9937 0.77255 0.5451 0.40784
0.02386 0.0661 0.05797 0.14284 0.1875 0.97182 0.77255 0.5451 0.40784
0 0.09588 0.07117 -0 -0.21919 0.97568 0.77255 0.5451 0.40784
0.00495 0.09565 0.07185 -0.06623 -0.19016 0.97952 0.77255 0.5451 0.40784
0.00608 0.02438 0.04738 -0.24961 0.30456 0.91921 0.77255 0.5451 0.40784
0 0.02274 0.04486 0 0.28621 0.95817 0.77255 0.5451 0.40784
0 0 0.04772 0 0.42673 0.90438 0.77255 0.5451 0.40784
0.00681 0 0.04855 -0.17051 0.30183 0.93799 0.77255 0.5451 0.40784
0 0.08411 0.06667 0 -0.08141 0.99668 0.77255 0.5451 0.40784
0 0.06731 0.05648 0 0.11566 0.99329 0.77255 0.5451 0.40784
0.04088 0.23811 0.08042 0.51237 0.45209 0.73013 0.33773 0.23106 0.17663
0.04487 0.25866 0.05975 0.62853 0.63152 0.45401 0.33773 0.23106 0.17663
0.03073 0.264 0.06311 0.3598 0.764 0.53557 0.33773 0.23106 0.17663
0.02818 0.24204 0.08436 0.29007 0.52521 0.80001 0.33773 0.23106 0.17663
0.01713 0.26705 0.06464 0.17786 0.80577 0.56489 0.33773 0.23106 0.17663
0.01512 0.24393 0.0857 0.11501 0.55309 0.82515 0.33773 0.23106 0.17663
0.06047 0.22155 0.06208 0.86763 0.19314 0.45816 0.33773 0.23106 0.17663
0.06451 0.23699 0.04561 0.90083 0.31244 0.30147 0.33773 0.23106 0.17663
0.05462 0.2488 0.05399 0.81783 0.4563 0.35064 0.33773 0.23106 0.17663
0.05175 0.2314 0.07405 0.77925 0.29437 0.55327 0.33773 0.23106 0.17663
0.07387 0.19063 0.03285 0.97868 -0.04746 0.19981 0.33764 0.23093 0.17654
0.07541 0.19707 0.02398 0.99646 -0.02998 0.07852 0.33769 0.231 0.17659
0.07386 0.20992 0.03043 0.97926 0.09409 0.17942 0.33772 0.23105 0.17662
0.07158 0.2008 0.04176 0.95047 0.05687 0.30556 0.33771 0.23103 0.17661
0.07081 0.15369 -0.02 0.99593 -0.01395 -0.08901 0.76318 0.53057 0.398
0.07144 0.23476 0.00009 0.9568 0.28867 -0.03457 0.33773 0.23106 0.17663
0.07138 0.232 0.01896 0.94153 0.31559 0.11801 0.33773 0.23106 0.17663
0.07517 0.21673 0.01537 0.98234 0.16402 0.08998 0.33772 0.23106 0.17663
0.07481 0.21829 0.00168 0.99244 0.11056 -0.05328 0.33772 0.23106 0.17663
0.05584 0.13653 0.04623 0.9085 -0.2519 0.33342 0.33764 0.23093 0.17654
0.05781 0.14649 0.04883 0.86507 -0.32268 0.3841 0.33758 0.23084 0.17648
0.06449 0.24769 0.02207 0.85997 0.49278 0.13273 0.33773 0.23106 0.17663
0.06389 0.25134 -0.00271 0.88618 0.4626 -0.02628 0.33773 0.23106 0.17663
0.04583 0.13634 0.06747 0.78328 -0.24307 0.57218 0.33772 0.23106 0.17662
0.04326 0.10552 0.06034 0.85219 -0.10004 0.51358 0.77255 0.5451 0.40784
0.02563 0.10789 0.07353 0.20586 -0.19276 0.95941 0.39986 0.27594 0.20967
0.05331 0.13831 -0.07114 0.74294 -0.02769 -0.66879 0.77785 0.53406 0.40344
0.06428 0.10791 -0.01741 0.93224 -0.36116 0.02219 0.77141 0.54334 0.40665
0.06133 0.10575 -0.01027 0.86408 -0.42625 0.26773 0.77201 0.54427 0.40728
0 0 -0.02821 0.01242 -0.24497 -0.96945 0.77255 0.5451 0.40784
0.02253 0.05835 -0.09234 0.64278 -0.71625 -0.2717 0.77255 0.5451 0.40784
0.03594 0.06528 -0.06736 0.67309 -0.73396 -0.0909 0.77255 0.5451 0.40784
0.02645 0.06103 -0.06202 0.40421 -0.90862 0.10496 0.77255 0.5451 0.40784
0.01271 0.04416 -0.04237 0.34722 -0.81708 -0.46023 0.77255 0.5451 0.40784
0.01652 0 -0.02147 0.55734 -0.15774 -0.81516 0.77255 0.5451 0.40784
0.01728 0.05631 -0.05719 0.41353 -0.90839 -0.06183 0.77255 0.5451 0.40784
0.05142 0.08658 -0.04646 0.88025 -0.36244 -0.30627 0.77255 0.54508 0.40783
0.0359 0.0706 -0.02772 0.75407 -0.65595 -0.03332 0.77255 0.5451 0.40784
0.0245 0 -0.01716 0.55316 -0.02015 -0.83283 0.77255 0.5451 0.40784
0.02397 -0 -0.01752 0.50066 -0.03781 -0.86482 0.77255 0.5451 0.40784
0.0546 0.10256 0.00248 0.8941 -0.35841 0.26856 0.77248 0.54499 0.40777
0.07351 0.17376 0.01977 0.99221 -0.06483 0.10639 0.76881 0.5393 0.40392
0 0.26941 0.06446 0 0.82588 0.56385 0.33773 0.23106 0.17663
0 0.24509 0.0864 0 0.5098 0.86029 0.33773 0.23106 0.17663
0.0673 0.12046 -0.01696 0.96422 -0.26502 -0.00715 0.76827 0.53846 0.40335
0.06772 0.11961 -0.00886 0.89735 -0.44045 0.02767 0.76824 0.53842 0.40332
0.04844 0.21117 0.08293 0.72701 0.10875 0.67796 0.33773 0.23106 0.17663
0.01643 0.12637 0.08033 0.10437 -0.41175 0.9053 0.33773 0.23106 0.17663
0.02733 0.12631 0.07832 0.34559 -0.34868 0.8712 0.33773 0.23106 0.17663
0.03576 0.11257 0.07004 0.56355 -0.19578 0.80255 0.33792 0.2312 0.17673
0.04901 0.11189 0.04971 0.9271 -0.21961 0.30374 0.77253 0.54506 0.40782
0.01534 0.10975 0.0746 0.03045 -0.23765 0.97087 0.33773 0.23106 0.17663
0.05601 0.15944 0.06307 0.83892 -0.27616 0.46899 0.33766 0.23096 0.17656
0 0.1629 0.09838 0 -0.19503 0.9808 0.33773 0.23106 0.17663
0 0.14776 0.09338 -0 -0.42354 0.90588 0.33773 0.23106 0.17663
0.04189 0.16273 0.08339 0.69387 -0.25669 0.6728 0.33773 0.23106 0.17663
0.03298 0.16311 0.09071 0.54404 -0.24638 0.80207 0.33773 0.23106 0.17663
0.06473 0.15462 0.04263 0.91802 -0.29277 0.26744 0.33721 0.23025 0.17608
0.06772 0.16807 0.04361 0.9239 -0.19605 0.32861 0.33731 0.23041 0.17619
0.05133 0.17567 0.07688 0.78346 -0.14111 0.60521 0.33772 0.23105 0.17662
0.04327 0.1777 0.08678 0.64523 -0.13057 0.75275 0.33773 0.23106 0.17663
0.05817 0.17304 0.06574 0.83861 -0.1631 0.51975 0.33768 0.23098 0.17658
0.01153 0.17998 0.0993 0.07157 -0.0403 0.99662 0.33773 0.23106 0.17663
0.01273 0.19945 0.0992 0.08903 0.07471 0.99322 0.33773 0.23106 0.17663
0.03579 0.19572 0.09337 0.47313 0.02062 0.88075 0.33773 0.23106 0.17663
0.03394 0.17897 0.09321 0.4384 -0.09234 0.89403 0.33773 0.23106 0.17663
0.03828 0.21551 0.09032 0.50091 0.20612 0.8406 0.33773 0.23106 0.17663
0.06876 0.19093 0.04926 0.92385 -0.03906 0.38075 0.33767 0.23097 0.17657
0.06364 0.19826 0.05996 0.88221 0.01594 0.47058 0.33772 0.23104 0.17662
0 0.22184 0.09651 0 0.24388 0.9698 0.33773 0.23106 0.17663
0 0.27845 -0.03803 0 0.89976 -0.43638 0.33773 0.23106 0.17663
0 0.28662 -0.01021 0 0.99631 -0.08582 0.33773 0.23106 0.17663
0.01534 0.28519 -0.00986 0.16443 0.9818 -0.09502 0.33773 0.23106 0.17663
0.0518 0.26165 -0.02877 0.70184 0.66077 -0.26607 0.33773 0.23106 0.17663
0.03895 0.27027 -0.03323 0.48939 0.79869 -0.35012 0.33773 0.23106 0.17663
0.04275 0.23089 -0.06751 0.60137 0.34421 -0.72102 0.77255 0.5451 0.40784
0.04469 0.23927 -0.0606 0.63352 0.42922 -0.64376 0.41529 0.28708 0.21787
0.06532 0.21988 -0.04195 0.89711 0.16111 -0.41139 0.50576 0.35241 0.26598
0.06941 0.20723 -0.03294 0.95567 0.0179 -0.29391 0.34171 0.23393 0.17874
0.02735 0.28287 -0.00938 0.35341 0.93102 -0.09113 0.33773 0.23106 0.17663
0.03049 0.27985 0.02922 0.31085 0.923 0.22679 0.33773 0.23106 0.17663
0.03817 0.13658 0.07595 0.62262 -0.29223 0.72591 0.33773 0.23106 0.17663
0 0.22883 -0.08589 0 0.44604 -0.89501 0.77255 0.5451 0.40784
0.03 0.23526 -0.07441 0.45529 0.43828 -0.775 0.73416 0.51737 0.38743
0.03158 0.24486 -0.06767 0.43022 0.50659 -0.74718 0.33773 0.23106 0.17663
0.05817 0.23701 -0.04512 0.80795 0.35322 -0.47165 0.33773 0.23106 0.17663
0.02111 0.14804 0.0909 0.25465 -0.38312 0.8879 0.33773 0.23106 0.17663
0.06989 0.23312 -0.01533 0.93621 0.30849 -0.16835 0.33773 0.23106 0.17663
0.06244 0.24899 -0.02239 0.84519 0.48641 -0.22148 0.33773 0.23106 0.17663
0.05786 0.10961 -0.00119 0.81497 -0.48551 0.3164 0.77222 0.54458 0.40749
0.05692 0.11293 0.00795 0.82289 -0.47901 0.30561 0.77221 0.54458 0.40749
0.06568 0.15273 0.03337 0.93421 -0.27959 0.22152 0.76724 0.53687 0.40227
0.07096 0.17154 0.03119 0.95912 -0.19053 0.20924 0.72879 0.51062 0.38277
0.06837 0.22929 -0.02717 0.92392 0.25091 -0.28882 0.33773 0.23106 0.17663
0.06035 0.24313 -0.03658 0.84309 0.38648 -0.37395 0.33773 0.23106 0.17663
0.07294 0.21527 -0.01955 0.97769 0.09786 -0.18584 0.33772 0.23106 0.17663
0.049 0.25395 -0.0451 0.68606 0.5685 -0.45401 0.33773 0.23106 0.17663
0 0.24969 -0.07328 0 0.59303 -0.80518 0.33773 0.23106 0.17663
0 0.2584 -0.06658 0 0.71622 -0.69787 0.33773 0.23106 0.17663
0.01386 0.08318 0.06849 -0.07608 0.01389 0.997 0.77255 0.5451 0.40784
0.01401 0.06663 0.05813 -0.10284 0.20197 0.97398 0.77255 0.5451 0.40784
0 0.28525 0.0282 0 0.97445 0.2246 0.33773 0.23106 0.17663
0.01764 0.28321 0.02906 0.14397 0.96222 0.2311 0.33773 0.23106 0.17663
0.05912 0.13675 0.0369 0.90941 -0.29833 0.28978 0.77091 0.54256 0.40612
0.0241 0.27525 -0.03695 0.27665 0.87384 -0.39984 0.33773 0.23106 0.17663
0.0357 0.26062 -0.05121 0.43647 0.69563 -0.57061 0.33773 0.23106 0.17663
0.02078 0.26341 -0.05575 0.23569 0.77681 -0.58397 0.33773 0.23106 0.17663
0 0.23844 -0.08078 0 0.53209 -0.84669 0.53181 0.37123 0.27983
0.02288 0.16253 0.09586 0.33477 -0.22398 0.91529 0.33773 0.23106 0.17663
0.02647 0.21811 0.0948 0.25771 0.26037 0.93048 0.33773 0.23106 0.17663
0 0.26624 -0.05778 0 0.8184 -0.57465 0.33773 0.23106 0.17663
0.01418 0.02537 0.05003 -0.02162 0.29322 0.9558 0.77255 0.5451 0.40784
0.01484 0 0.0494 0.06196 0.31908 0.9457 0.77255 0.5451 0.40784
0.02301 0.17941 0.09762 0.22113 -0.05321 0.97379 0.33773 0.23106 0.17663
0.02453 0.19788 0.09752 0.24717 0.05054 0.96765 0.33773 0.23106 0.17663
0 0.07846 -0.09582 -0 -0.11939 -0.99285 0.77255 0.5451 0.40784
0 0.05071 -0.09043 0 -0.99979 0.02071 0.77255 0.5451 0.40784
0 0.0513 -0.10166 0 -0.9889 -0.14861 0.77255 0.5451 0.40784
0.01188 0.15468 -0.0855 0.63226 0.27125 -0.72572 0.76964 0.54164 0.40582
0.01494 0.05567 -0.10126 0.47604 -0.74857 -0.46155 0.77255 0.5451 0.40784
0.02767 0.05913 -0.02965 0.76111 -0.55337 -0.33838 0.77255 0.5451 0.40784
0.06553 0.14542 0.02575 0.8635 -0.33786 0.37445 0.76665 0.53596 0.40165
0.07139 0.16663 0.02493 0.93869 -0.1155 0.32485 0.7671 0.53665 0.40212
0.0172 0.248 -0.07167 0.25942 0.57412 -0.77659 0.33773 0.23106 0.17663
0.01611 0.23679 -0.07942 0.266 0.49851 -0.82506 0.69023 0.48565 0.36407
0.01866 0.25585 -0.06457 0.28115 0.65194 -0.70422 0.33773 0.23106 0.17663
0.04429 0.16566 -0.0778 -0.14834 -0.76262 -0.6296 0.75378 0.52643 0.39644
0.0414 0.16801 -0.08024 -0.03862 -0.83684 -0.54608 0.74916 0.52264 0.39401
0.03873 0.16874 -0.0814 0.00734 -0.78378 -0.621 0.74602 0.51989 0.39228
0.0199 0.16224 -0.078 0.28835 0.45312 -0.84353 0.75565 0.5288 0.39782
0.04127 0.16196 -0.07896 0.21527 0.47806 -0.85154 0.75367 0.52536 0.39593
0.04379 0.16383 -0.07688 -0.57303 0.54859 -0.60884 0.75447 0.52661 0.39663
0.03134 0.16092 -0.07738 -0.04019 0.34102 0.9392 0.74948 0.52191 0.39372
0.04057 0.16192 -0.07486 -0.56704 0.31324 0.7618 0.75295 0.52472 0.39553
0.03884 0.16841 -0.07648 -0.38187 -0.33836 0.86005 0.74601 0.51984 0.39225
0.02216 0.16582 -0.07879 0.72683 -0.68583 -0.03672 0.74941 0.52324 0.39433
0.02378 0.16719 -0.077 0.43992 -0.49765 0.74754 0.7469 0.52097 0.39291
0.02244 0.16201 -0.07546 0.32301 0.31144 0.89368 0.753 0.52615 0.3962
0.0439 0.16396 -0.07198 -0.68583 0.20697 0.69771 0.75449 0.52667 0.39666
0.04323 0.16649 -0.07341 -0.77272 -0.10886 0.62534 0.75189 0.52487 0.39545
0.02056 0.16342 -0.07581 0.72798 0.12262 0.67455 0.75346 0.52686 0.3966
0.03172 0.16883 -0.07807 0.00742 -0.47145 0.88186 0.74184 0.5162 0.38996
0.02658 0.17276 -0.07832 0.23623 -0.30984 0.92097 0.74903 0.52316 0.39424
0.03048 0.15501 -0.07815 -0.02151 0.37369 0.9273 0.76286 0.53211 0.40041
0.03978 0.15671 -0.07632 -0.49144 0.25354 0.83319 0.76219 0.53083 0.39972
0.04558 0.1656 -0.07227 -0.80218 -0.01474 0.5969 0.75568 0.52816 0.39753
0.02025 0.1686 -0.07634 0.59569 -0.09812 0.7972 0.75194 0.5258 0.39588
0.04162 0.17157 -0.07528 -0.60978 -0.33207 0.71965 0.75198 0.52564 0.39582
0.01812 0.16503 -0.0745 0.65679 0.07542 0.75029 0.75551 0.52898 0.39788
0.02003 0.15885 -0.0753 0.57309 0.2472 0.78132 0.7603 0.53265 0.40028
0.04427 0.1603 -0.07352 -0.71383 0.03606 0.69939 0.7596 0.53006 0.39898
0.03118 0.17389 -0.07838 -0.00429 -0.39041 0.92063 0.74927 0.52338 0.39437
0.01641 0.16362 -0.07177 0.92257 0.06253 0.38072 0.75873 0.53194 0.39972
0.0257 0.17645 -0.07459 0.33373 -0.73258 0.59325 0.75671 0.53037 0.3987
0.03074 0.17769 -0.07453 0.04268 -0.80879 0.58654 0.75757 0.53116 0.39919
0.03547 0.17743 -0.07389 -0.24629 -0.80078 0.54598 0.75759 0.53115 0.39919
0.02145 0.17388 -0.07402 0.58355 -0.58659 0.5616 0.75568 0.5294 0.3981
0.03037 0.15113 -0.07399 0.00922 0.83734 0.54661 0.76949 0.53618 0.40326
0.04082 0.15381 -0.07222 -0.57203 0.67955 0.45935 0.76789 0.534 0.40202
0.01867 0.17083 -0.07314 0.75975 -0.408 0.50627 0.7555 0.52919 0.39798
0.02231 0.15373 -0.07307 0.51755 0.70044 0.49145 0.76669 0.53707 0.40326
0.0454 0.15884 -0.06994 -0.86515 0.38494 0.32147 0.76289 0.53237 0.40053
0.03918 0.17793 -0.06915 -0.48619 -0.83183 0.26772 0.76022 0.53359 0.4007
0.0252 0.15031 -0.06946 0.33099 0.89887 0.28717 0.77038 0.53844 0.40444
0.01628 0.16908 -0.0691 0.9149 -0.30063 0.26942 0.7578 0.53131 0.3993
0.01827 0.15573 -0.06871 0.81368 0.53334 0.23125 0.76583 0.53747 0.40333
0.04432 0.17347 -0.06756 -0.81169 -0.56157 0.16063 0.75756 0.53092 0.39908
0.02521 0.17857 -0.07036 0.35657 -0.86383 0.35589 0.76097 0.53434 0.40116
0.03034 0.17979 -0.07028 0.05509 -0.93682 0.34544 0.76178 0.53508 0.40163
0.03021 0.14914 -0.06946 0.02725 0.95659 0.29016 0.77185 0.53725 0.4041
0.04404 0.15519 -0.06706 -0.77895 0.60669 0.15863 0.76736 0.53428 0.40207
0.03478 0.18014 -0.06663 -0.24484 -0.9619 0.1217 0.7626 0.53584 0.4021
0.04091 0.15188 -0.06466 -0.55659 0.83066 0.01441 0.77071 0.53508 0.40293
0.04694 0.16674 -0.06356 -0.98936 -0.11812 -0.08496 0.75727 0.52986 0.39854
0.0152 0.16397 -0.06619 0.99781 0.00717 0.06571 0.76005 0.53322 0.40051
0.04517 0.15775 -0.06159 -0.87285 0.42877 -0.233 0.7643 0.53308 0.40106
0.02202 0.15152 -0.0639 0.53499 0.84107 -0.07991 0.76939 0.53899 0.40455
0.02094 0.17685 -0.06442 0.64328 -0.76501 -0.03077 0.76077 0.53415 0.40105
0.01797 0.17358 -0.0644 0.83858 -0.54302 -0.04369 0.75914 0.53262 0.4001
0.0407 0.17684 -0.0614 -0.58266 -0.77181 -0.25459 0.7593 0.53269 0.40016
0.01658 0.17047 -0.0624 0.90532 -0.38072 -0.18828 0.75806 0.53158 0.39946
0.02505 0.15033 -0.06139 0.33798 0.90211 -0.26828 0.77036 0.53848 0.40446
0.02969 0.1493 -0.06079 0.05435 0.95277 -0.2988 0.77162 0.53735 0.40412
0.02513 0.17905 -0.06208 0.37081 -0.90655 -0.20164 0.76183 0.53514 0.40166
0.04625 0.16449 -0.0599 -0.937 -0.00339 -0.34932 0.75733 0.52941 0.39834
0.04455 0.17213 -0.06077 -0.82681 -0.4792 -0.29455 0.7563 0.52966 0.39831
0.0296 0.18017 -0.06198 0.10428 -0.97188 -0.21115 0.76253 0.53579 0.40206
0.01661 0.15866 -0.06229 0.9007 0.38325 -0.20459 0.76347 0.53588 0.40224
0.01594 0.1648 -0.06045 0.94307 -0.0151 -0.33226 0.75865 0.53194 0.39971
0.03938 0.15332 -0.05744 -0.48266 0.71701 -0.50293 0.76819 0.53426 0.40219
0.03353 0.17933 -0.05955 -0.13369 -0.91556 -0.37932 0.76099 0.53434 0.40117
0.02954 0.178 -0.05675 0.10154 -0.82634 -0.55395 0.75884 0.53234 0.39993
0.023 0.15401 -0.05654 0.47612 0.65128 -0.59089 0.76631 0.53673 0.40305
0.04372 0.16735 -0.05578 -0.75875 -0.16657 -0.62973 0.75342 0.52648 0.39641
0.02024 0.17302 -0.05725 0.66089 -0.5216 -0.53959 0.75626 0.52993 0.39843
0.04241 0.15947 -0.05513 -0.67441 0.3374 -0.65676 0.75986 0.53017 0.39907
0.03872 0.17563 -0.05654 -0.45945 -0.67631 -0.57577 0.75627 0.52986 0.3984
0.0296 0.15218 -0.05533 0.08082 0.76465 -0.63936 0.76819 0.53609 0.40303
0.01817 0.15991 -0.05727 0.77995 0.29309 -0.55298 0.76085 0.53349 0.40075
0.03487 0.16362 -0.04979 -0.17559 0.0613 -0.98255 0.75049 0.52351 0.39461
0.04054 0.1634 -0.0524 -0.53882 0.05898 -0.84035 0.75334 0.52574 0.39606
0.02863 0.17127 -0.05102 0.19096 -0.44081 -0.87705 0.74955 0.52359 0.39451
0.03956 0.17056 -0.05308 -0.49773 -0.36312 -0.78766 0.75087 0.52459 0.39517
0.03437 0.16917 -0.05033 -0.17464 -0.25322 -0.95152 0.74794 0.52188 0.39348
0.03067 0.158 -0.05075 0.07445 0.4582 -0.88573 0.7589 0.53013 0.39891
0.03362 0.15575 -0.05221 -0.1196 0.6031 -0.78865 0.76297 0.53243 0.40057
0.02706 0.15563 -0.05272 0.27116 0.57702 -0.7704 0.76323 0.53377 0.40123
0.02721 0.17466 -0.05355 0.23632 -0.65208 -0.72038 0.7541 0.52791 0.39718
0.03264 0.17545 -0.05367 -0.10222 -0.70379 -0.70301 0.75443 0.52821 0.39736
0.02112 0.16113 -0.05337 0.59362 0.20404 -0.77845 0.75737 0.53025 0.39874
0.02711 0.16271 -0.04996 0.26083 0.09202 -0.96099 0.7522 0.52536 0.39572
0.02067 0.16746 -0.0536 0.61876 -0.18033 -0.7646 0.75305 0.52679 0.39651
0.03446 0.15289 -0.05491 -0.17233 0.73596 -0.65473 0.76767 0.53473 0.40233
0.0659 0.11813 -0.00002 0.60189 -0.7594 0.24705 0.76946 0.5403 0.4046
0.02027 0 -0.01922 0.50777 -0.08559 -0.85723 0.77255 0.5451 0.40784
0.03066 0.06537 -0.04009 0.67207 -0.74004 -0.02553 0.77255 0.5451 0.40784
0.0415 0.07175 -0.06143 0.80091 -0.53602 -0.26687 0.77255 0.5451 0.40784
0.00654 0.13034 -0.10742 0.54647 0.20657 -0.8116 0.7729 0.54444 0.40759
0.0319 0.09393 -0.02215 -0.9288 0.34936 -0.12364 0.77255 0.5451 0.40784
0.02643 0.09404 -0.00045 -0.80429 0.43633 -0.40339 0.77255 0.5451 0.40784
0.02742 0.0976 -0.08336 0.50654 -0.35804 -0.78436 0.77263 0.54494 0.40778
0.01228 0.12997 -0.10203 0.77733 0.11825 -0.61787 0.77334 0.54363 0.40728
0 0.20277 -0.09406 0 0.1353 -0.99081 0.77255 0.5451 0.40784
0.01746 0.12533 -0.09029 0.94966 -0.01699 -0.31283 0.77359 0.54269 0.40688
0.03373 0.13999 -0.08447 0.37699 0.10409 -0.92035 0.77743 0.53549 0.40411
0.01417 0.14978 -0.08602 0.52289 0.35299 -0.77588 0.77163 0.54261 0.40656
0.01695 0.14438 -0.08687 0.32296 0.23344 -0.91717 0.77327 0.54252 0.40675
0 0.14656 -0.09979 0 0.51596 -0.85661 0.77256 0.54486 0.40774
0.01597 0.20774 -0.09092 0.27397 0.20149 -0.94039 0.77255 0.5451 0.40784
0.0261 0.2062 -0.08715 0.44087 0.18534 -0.87823 0.77255 0.5451 0.40784
0.01876 0.11931 -0.08846 0.44239 0.11185 -0.88982 0.77347 0.54338 0.40718
0.01648 0.15836 -0.0802 0.4648 0.22311 -0.85684 0.76392 0.53628 0.40249
0.05366 0.19469 -0.06737 0.78767 0.08232 -0.61057 0.77249 0.54504 0.4078
0.03226 0.08772 -0.07919 0.60932 -0.2236 -0.76074 0.77256 0.54508 0.40783
0.02977 0.10992 -0.08415 0.49818 -0.09208 -0.86217 0.77335 0.5436 0.40727
0.05877 0.12512 -0.0591 0.89249 -0.22362 -0.39173 0.77486 0.53709 0.40427
0 0.06238 -0.10729 0 -0.43467 -0.90059 0.77255 0.5451 0.40784
0.00683 0.06864 -0.10287 0.26498 -0.09204 -0.95985 0.77255 0.5451 0.40784
0.03865 0.10054 -0.07637 0.62809 -0.21205 -0.74869 0.7728 0.54462 0.40766
0.01482 0.06462 -0.10202 0.48747 -0.27513 -0.82866 0.77255 0.5451 0.40784
0.01527 0.06028 -0.10274 0.52357 -0.47894 -0.70462 0.77255 0.5451 0.40784
0.0222 0.06406 -0.09533 0.67934 -0.38147 -0.62688 0.77255 0.5451 0.40784
0.00724 0.05603 -0.1062 0.27561 -0.69764 -0.66131 0.77255 0.5451 0.40784
0 0.05526 -0.10793 0 -0.75393 -0.65696 0.77255 0.5451 0.40784
0.0573 0.12985 -0.06374 0.82737 -0.18598 -0.52998 0.77618 0.53533 0.40368
0.06107 0.13487 -0.05886 0.8969 -0.12999 -0.4227 0.77383 0.53427 0.40255
0.06652 0.12989 -0.03785 0.96814 -0.15519 -0.19653 0.76766 0.53461 0.4012
0.06318 0.14038 -0.05481 0.93656 -0.04839 -0.34714 0.7713 0.53375 0.40166
0.06892 0.15551 -0.03443 0.98064 -0.00129 -0.1958 0.76525 0.53328 0.39992
0.03711 0.20892 -0.07999 0.56477 0.22151 -0.79497 0.77255 0.5451 0.40784
0.04735 0.20461 -0.07287 0.71202 0.13911 -0.68824 0.77255 0.5451 0.40784
0.06661 0.17431 -0.04039 0.9702 0.06945 -0.23214 0.77039 0.54186 0.40567
0.06067 0.10835 -0.03884 0.93351 -0.279 -0.2252 0.77221 0.54373 0.40705
0.03105 0.08101 -0.08035 0.64772 -0.26493 -0.71433 0.77255 0.54509 0.40784
0.03524 0.13114 -0.08387 0.4218 -0.0443 -0.90561 0.7781 0.53478 0.40387
0.03454 0.07219 -0.07698 0.78351 -0.41032 -0.46664 0.77255 0.5451 0.40784
0.04289 0.08533 -0.06453 0.8311 -0.34759 -0.43411 0.77256 0.54508 0.40784
0 0.05287 -0.10644 0 -0.88984 -0.45627 0.77255 0.5451 0.40784
0.04418 0.11842 0.06379 0.80464 -0.18975 0.56263 0.33772 0.23106 0.17663
0.05037 0.12672 0.05438 0.90226 -0.20901 0.37715 0.33771 0.23104 0.17662
0.05772 0.12116 0.02045 0.91573 -0.32993 0.22932 0.77186 0.54402 0.40712
0.05088 0.11069 -0.06579 0.80193 -0.29216 -0.52111 0.77377 0.54268 0.40689
0.04978 0.11686 -0.07056 0.74706 -0.19348 -0.63598 0.77516 0.5401 0.4059
0.04459 0.12779 -0.07746 0.62491 -0.09458 -0.77495 0.7785 0.53401 0.40358
0.04151 0.14385 -0.07999 0.47533 0.20821 -0.85481 0.77742 0.53449 0.40364
0.03735 0.15339 -0.07907 0.37399 0.05445 -0.92583 0.76725 0.53366 0.40177
0.03599 0.14955 -0.06264 -0.26704 0.95094 -0.15623 0.77233 0.53582 0.40351
0.03647 0.14989 -0.06886 -0.29067 0.91765 0.27098 0.77205 0.53567 0.4034
0.03639 0.15176 -0.0734 -0.29266 0.79701 0.52832 0.76958 0.53483 0.40265
0.03554 0.1603 -0.08147 0.07653 0.44179 -0.89385 0.7519 0.52354 0.39483
0.042 0.11995 -0.07842 0.58006 -0.12969 -0.80418 0.77622 0.53828 0.40522
0.02108 0.10466 -0.09014 0.68769 0.21309 -0.69403 0.77274 0.54475 0.40771
0.01028 0.10998 -0.09624 0.45636 0.5278 -0.71635 0.77267 0.54488 0.40776
0.01246 0.11061 -0.0867 -0.61317 -0.26959 0.74253 0.7713 0.54366 0.40695
0.01232 0.11584 -0.08392 -0.5754 -0.50119 0.64631 0.69457 0.48286 0.36518
0.07473 0.20301 -0.00667 0.99218 -0.00619 -0.12468 0.33771 0.23103 0.17661
0.07416 0.1906 -0.00458 0.99037 -0.06905 -0.11996 0.7713 0.54361 0.40681
0.07166 0.18474 -0.01641 0.98363 -0.05949 -0.17012 0.69423 0.48769 0.36567
0.07054 0.18071 -0.02141 0.97688 -0.03974 -0.21008 0.33752 0.23075 0.17642
0.06119 0.12271 0.01231 0.72473 -0.50824 0.46524 0.77085 0.54247 0.40606
0.07503 0.19048 0.00907 0.99696 -0.07643 -0.01535 0.73623 0.5183 0.38818
0.07596 0.20216 0.01152 0.99968 0.01331 0.02145 0.33771 0.23103 0.17661
0.07398 0.17114 0.01295 0.95424 0.29531 0.04717 0.7679 0.53788 0.40296
0.07448 0.16756 0.0153 0.79762 0.46165 0.38819 0.76651 0.53573 0.4015
0.07125 0.1531 0.02106 0.53406 -0.19572 0.82248 0.76269 0.52982 0.39749
0.0704 0.1319 -0.00781 0.97414 -0.11503 -0.19446 0.76313 0.5305 0.39795
0.08652 0.1616 0.0231 -0.22517 0.40476 0.88627 0.76797 0.538 0.40303
0.08126 0.16451 0.01872 -0.24324 0.53397 0.80976 0.766 0.53495 0.40097
0.07022 0.11835 0.00097 0.21756 -0.97511 -0.04281 0.76733 0.53701 0.40236
0.06973 0.12371 -0.00471 0.86061 -0.30764 -0.40585 0.76593 0.53484 0.40089
0.06603 0.12529 0.00971 0.22599 -0.5777 0.78434 0.76801 0.53806 0.40308
0.07063 0.13018 0.01141 -0.41375 -0.29836 0.86011 0.76339 0.5309 0.39822
0.0757 0.12767 0.0153 -0.15181 -0.52502 0.83744 0.76174 0.52834 0.39649
0.07481 0.16853 0.00515 0.4424 0.89509 -0.05567 0.76682 0.53622 0.40183
0.07931 0.17072 0.00474 -0.12069 0.97876 -0.16571 0.76771 0.5376 0.40277
0.07408 0.16892 0.00112 0.94923 0.24775 -0.19385 0.76709 0.53664 0.40211
0.07351 0.11811 0.00161 0.55989 -0.75254 -0.34671 0.76614 0.53516 0.40111
0.07516 0.1211 0.00228 0.93421 -0.08572 -0.34628 0.76454 0.53268 0.39943
0.07567 0.12158 0.0076 0.84094 -0.50771 0.1872 0.76426 0.53225 0.39914
0.07208 0.1198 0.00757 -0.10697 -0.87647 0.46943 0.766 0.53495 0.40097
0.06785 0.14125 0.01896 0.53181 -0.38834 0.75258 0.76433 0.53236 0.39921
0.07129 0.12285 0.01074 -0.38447 -0.49644 0.77828 0.76529 0.53385 0.40022
0.07155 0.13342 -0.00387 0.84984 -0.09344 -0.51868 0.76186 0.52853 0.39662
0.07905 0.14059 0.02265 -0.47395 -0.14226 0.86898 0.75896 0.52404 0.39358
0.07471 0.15955 -0.00208 0.69443 0.07777 -0.71534 0.76319 0.53059 0.39802
0.07271 0.14637 -0.00328 0.92481 0.04258 -0.37803 0.76021 0.52598 0.39489
0.07861 0.16692 0.00163 0.50556 0.29862 -0.80947 0.76618 0.53522 0.40115
0.07389 0.13507 -0.00222 0.81851 -0.13076 -0.55941 0.75999 0.52563 0.39466
0.08881 0.16029 0.02218 0.87773 0.08532 0.47149 0.76908 0.53972 0.4042
0.08806 0.1672 0.01757 0.85162 0.51897 0.07356 0.76986 0.54094 0.40502
0.08591 0.16765 0.0191 -0.08055 0.83845 0.53899 0.76903 0.53964 0.40415
0.0862 0.15186 0.0243 0.72516 -0.2866 0.6261 0.76573 0.53452 0.40068
0.08439 0.15218 0.02533 -0.36449 0.07407 0.92826 0.76419 0.53214 0.39906
0.08221 0.14189 0.02243 0.53509 -0.51037 0.6732 0.76102 0.52723 0.39574
0.08504 0.16926 0.01131 0.80534 0.54079 -0.24282 0.76904 0.53966 0.40416
0.08306 0.1711 0.01127 -0.03396 0.97907 0.20065 0.7688 0.53928 0.4039
0.0817 0.16665 0.00433 0.71831 -0.67576 -0.1655 0.76694 0.5364 0.40195
0.0829 0.14302 0.02108 0.92215 -0.32424 -0.21097 0.76164 0.52819 0.39639
0.07667 0.12886 0.01011 0.95116 -0.03017 -0.30723 0.7612 0.5275 0.39592
0.07682 0.16097 0.00012 0.91769 -0.36745 -0.1511 0.76352 0.5311 0.39836
0.07357 0.13124 0.0008 0.96345 0.06977 0.25863 0.76117 0.52746 0.3959
0.07543 0.14081 -0.00075 0.92639 0.10895 -0.36046 0.75863 0.52352 0.39323
0.08723 0.15556 0.02187 0.8552 -0.26684 -0.44432 0.76722 0.53684 0.40225
0.08485 0.14603 0.02237 0.91389 -0.37653 -0.15172 0.76368 0.53136 0.39853
0.08683 0.16142 0.01748 0.56673 -0.28729 -0.77219 0.76812 0.53823 0.40319
0.07059 0.13866 0.00161 0.40902 -0.04468 0.91143 0.76181 0.52846 0.39657
0.06943 0.13545 0.00239 0.80877 0.58422 0.0677 0.76328 0.53073 0.39811
0.07204 0.13415 0.00194 0.86505 0.47447 0.16301 0.76133 0.52771 0.39606
0.07672 0.16388 0.00363 0.75311 -0.55273 0.35681 0.76476 0.53303 0.39967
0.08122 0.14379 0.01871 0.85379 -0.16781 -0.49283 0.76027 0.52606 0.39495
0.0733 0.14556 0.00054 0.66017 -0.04305 0.74988 0.75974 0.52524 0.39439
0.08517 0.15514 0.02037 0.70032 -0.22592 -0.67713 0.76551 0.53419 0.40045
0.08316 0.16418 0.01525 0.58897 -0.49259 -0.64068 0.76676 0.53612 0.40176
0.08454 0.1609 0.01645 0.82563 -0.14102 -0.54631 0.76655 0.5358 0.40154
0.08242 0.16391 0.01083 0.85333 0.07392 -0.51611 0.7663 0.53541 0.40128
0.07438 0.13446 0.00492 0.58718 0.46295 -0.664 0.75991 0.52551 0.39457
0.07213 0.14083 0.01036 0.57683 0.20308 -0.79122 0.76037 0.52622 0.39505
0.07473 0.14954 0.00322 0.99172 -0.03688 -0.12297 0.75975 0.52526 0.3944
0.07387 0.14771 0.00307 0.63816 -0.72131 -0.2692 0.75973 0.52523 0.39439
0.08132 0.15213 0.0129 0.36408 -0.43077 -0.82576 0.76175 0.52836 0.3965
0.08075 0.14629 0.01464 0.4509 -0.02683 -0.89217 0.76016 0.5259 0.39484
0.07088 0.14533 0.00699 0.44778 -0.7762 -0.44385 0.76154 0.52803 0.39628
0.07885 0.15684 0.00703 0.62459 -0.04272 -0.77979 0.76212 0.52893 0.39689
0.08279 0.15841 0.01151 0.72434 0.01685 -0.68924 0.76466 0.53287 0.39956
0.07083 0.13962 0.0078 0.64964 0.55381 -0.52083 0.76152 0.528 0.39626
0.08442 0.15319 0.01535 0.9203 -0.24221 -0.3072 0.76444 0.53252 0.39932
0.07488 0.15858 0.00523 0.87713 -0.15288 -0.45527 0.76275 0.52991 0.39756
0.07405 0.15351 0.00524 0.94549 -0.20314 -0.25451 0.76115 0.52743 0.39587
0.07978 0.14113 0.01308 0.71112 0.10253 -0.69555 0.7593 0.52456 0.39393
0.07753 0.13822 0.00996 0.43916 0.34986 -0.82749 0.75874 0.5237 0.39335
0.07549 0.15671 -0.00014 0.98419 -0.16414 -0.06657 0.76187 0.52855 0.39663
0.07501 0.14171 0.00091 0.50459 -0.0209 0.8631 0.75872 0.52367 0.39333
0.08518 0.15404 0.0176 0.96189 -0.22173 -0.16001 0.76527 0.53382 0.4002
0.07738 0.13527 0.00947 0.73567 0.20073 -0.64691 0.75926 0.52449 0.39389
0.06818 0.14141 0.00322 0.95273 -0.04045 0.30112 0.76401 0.53186 0.39887
0.0774 0.16372 0.00665 0.73642 -0.06251 -0.67363 0.76472 0.53296 0.39962
0.08646 0.16444 0.01573 0.49247 -0.57735 -0.65126 0.76857 0.53893 0.40367
0.08185 0.16639 0.01128 0.62462 -0.55469 -0.5497 0.7669 0.53635 0.40192
0.07669 0.14262 0.01206 0.44162 0.01339 -0.8971 0.75844 0.52322 0.39303
0.07339 0.14989 0.00746 0.91451 0.40318 0.03338 0.76045 0.52634 0.39514
0.07588 0.14814 0.00526 0.86037 -0.30302 -0.4098 0.75914 0.52431 0.39376
0.07476 0.14447 0.00864 0.39071 -0.67351 -0.62749 0.75891 0.52396 0.39352
0.07629 0.15311 0.00941 0.619 -0.57788 -0.53187 0.76045 0.52634 0.39514
0.07733 0.14588 0.01158 0.94215 0.1903 -0.27595 0.75872 0.52366 0.39332
0.07506 0.14825 0.01213 0.79656 0.26031 -0.54565 0.75935 0.52464 0.39399
0.0692 0.14366 0.00204 0.61956 -0.35173 0.70174 0.76302 0.53032 0.39783
0.07816 0.16864 0.01093 -0.07467 0.96172 0.26367 0.76679 0.53617 0.4018
0.08046 0.16703 0.01569 -0.23681 0.80293 0.54701 0.76665 0.53595 0.40165
0.07679 0.15266 0.02067 -0.27047 0.03772 0.96199 0.76028 0.52609 0.39496
0.07541 0.14602 0.01964 -0.27809 -0.14895 0.94894 0.75888 0.52391 0.39349
0.07435 0.16171 0.0193 0.59186 0.15283 0.79142 0.76418 0.53212 0.39905
0.06758 0.12171 0.00513 -0.08187 -0.83836 0.53893 0.76781 0.53775 0.40287
-0.03141 0.16948 -0.08239 -0.08184 -0.67165 -0.73633 0.74234 0.51672 0.39027
-0.02377 0.16728 -0.08079 -0.28831 -0.75515 -0.58875 0.7469 0.52098 0.39291
-0.01628 0.1639 -0.08128 -0.45777 -0.33866 -0.82204 0.75871 0.53194 0.39972
-0.01775 0.16298 -0.07909 -0.50513 0.09407 -0.8579 0.75755 0.53074 0.399
-0.02651 0.15378 -0.08113 -0.09373 0.33465 -0.93767 0.76557 0.53502 0.40215
-0.04395 0.17137 -0.07773 -0.58865 0.26993 -0.76199 0.75475 0.52816 0.39739
-0.01735 0.16666 -0.08164 -0.3091 -0.30204 -0.90179 0.75603 0.52956 0.39823
-0.01469 0.16071 -0.08126 -0.57218 -0.02905 -0.81961 0.76312 0.53589 0.40219
-0.00641 0.17031 -0.09058 -0.43652 -0.18903 -0.87961 0.76837 0.5412 0.40543
-0.0052 0.16465 -0.09045 -0.58453 0.00427 -0.81136 0.76907 0.5418 0.40581
-0.00335 0.15495 -0.09421 -0.48401 0.34872 -0.80257 0.77167 0.54407 0.40724
-0.04486 0.15612 -0.07469 -0.5979 -0.02466 -0.80119 0.76649 0.53409 0.40185
-0.04916 0.16369 -0.07253 -0.63391 -0.13986 -0.76066 0.76161 0.53314 0.40069
-0.03537 0.17375 -0.08129 -0.2653 -0.03676 -0.96346 0.74987 0.52389 0.3947
-0.01126 0.17239 -0.08838 -0.44835 -0.38245 -0.80791 0.76523 0.53829 0.40362
-0.03535 0.17944 -0.08243 -0.38846 -0.15009 -0.90916 0.76148 0.53479 0.40145
-0.0419 0.18113 -0.07916 -0.5369 -0.0159 -0.84349 0.76628 0.53925 0.40421
-0.05296 0.17498 -0.07043 -0.73074 0.02258 -0.68228 0.76712 0.53982 0.40459
-0.01552 0.18796 -0.09168 -0.30213 -0.12323 -0.94527 0.77178 0.54438 0.4074
-0.05834 0.20358 -0.05976 -0.84731 0.09885 -0.52182 0.77254 0.54508 0.40783
-0.02822 0.22617 -0.07996 -0.47052 0.32517 -0.82029 0.77255 0.5451 0.40784
-0.06059 0.1648 -0.05986 -0.88554 0.0319 -0.46347 0.76924 0.54029 0.4049
-0.06067 0.15139 -0.06022 -0.86868 0.0236 -0.49481 0.77182 0.53784 0.40397
-0.05824 0.17521 -0.06193 -0.86762 0.06726 -0.49266 0.76979 0.54217 0.40602
-0.06738 0.20317 -0.03887 -0.93363 0.01161 -0.35804 0.77248 0.54499 0.40777
-0.06281 0.21411 -0.04853 -0.8705 0.11563 -0.47839 0.77254 0.54509 0.40784
-0.06124 0.19144 -0.05477 -0.92152 0.03122 -0.38708 0.77238 0.54486 0.40768
-0.06827 0.17724 -0.03038 -0.97814 0.00608 -0.20785 0.77067 0.54221 0.40589
-0.06916 0.17846 -0.02655 -0.97388 -0.02156 -0.22604 0.33751 0.23072 0.1764
-0.0687 0.19121 -0.03187 -0.96233 -0.06025 -0.26513 0.7721 0.54441 0.40738
-0.05498 0.26184 0.02545 -0.76521 0.62575 0.15129 0.33773 0.23106 0.17663
-0.04406 0.27313 0.0284 -0.53587 0.82206 0.1925 0.33773 0.23106 0.17663
-0.04169 0.27651 -0.00701 -0.59205 0.80259 -0.07299 0.33773 0.23106 0.17663
-0.05386 0.26557 -0.00519 -0.77391 0.63208 -0.03932 0.33773 0.23106 0.17663
-0.01236 0.13425 -0.09971 -0.74784 0.46748 -0.47138 0.7734 0.54351 0.40723
-0.00906 0.14014 -0.09743 -0.71512 0.46348 -0.52325 0.77301 0.54412 0.40746
-0.00681 0.13575 -0.10433 -0.54311 0.45834 -0.70353 0.77293 0.54437 0.40756
-0.01829 0.13025 -0.08874 -0.53084 0.03083 -0.84691 0.77416 0.54209 0.40669
-0.00525 0.1244 -0.10709 -0.39712 -0.54587 -0.73778 0.76121 0.53556 0.40141
-0.00529 0.12047 -0.10105 -0.70972 -0.66238 -0.23989 0.71353 0.49809 0.3756
-0.00539 0.11645 -0.09675 -0.56796 -0.1518 -0.80894 0.76118 0.5358 0.40152
-0.00887 0.12292 -0.1023 -0.4159 -0.90343 -0.10406 0.70706 0.4926 0.37191
-0.01397 0.12229 -0.09725 -0.23779 -0.90612 -0.34985 0.69357 0.48135 0.3643
-0.01473 0.12312 -0.09683 -0.77382 -0.4699 -0.42473 0.73597 0.51437 0.38711
-0.01409 0.12174 -0.09377 0.00481 -0.90324 -0.4291 0.67927 0.47016 0.35659
-0.01622 0.12969 -0.09491 -0.91605 0.19224 -0.35198 0.77382 0.54274 0.40694
-0.01524 0.1195 -0.0902 -0.64102 -0.09087 -0.76213 0.75698 0.5312 0.39863
-0.02771 0.12166 -0.08566 -0.3511 -0.03477 -0.93569 0.77495 0.54063 0.40612
-0.0291 0.1292 -0.08614 -0.27124 -0.06011 -0.96063 0.77644 0.53787 0.40506
-0.00581 0.12106 -0.09781 -0.85963 -0.30467 -0.41013 0.74242 0.52082 0.39125
-0.00607 0.12222 -0.09941 -0.68956 -0.72387 -0.02271 0.72476 0.50684 0.38164
-0.00187 0.11326 -0.09797 -0.00324 0.08863 -0.99606 0.7726 0.54501 0.40781
-0.02509 0.09367 -0.08335 -0.5973 0.0207 -0.80175 0.77258 0.54504 0.40782
-0.00939 0.12222 -0.09566 -0.38475 -0.65701 -0.64831 0.68079 0.47191 0.35767
-0.02415 0.10023 -0.08756 -0.71405 -0.09412 -0.69374 0.77266 0.54489 0.40776
-0.02094 0.09733 -0.08537 0.32247 -0.87333 0.3651 0.58279 0.33192 0.29262
-0.02488 0.09655 -0.08306 0.30725 -0.94918 -0.06827 0.54632 0.31101 0.27316
-0.02695 0.0965 -0.08285 -0.11221 -0.54248 -0.83254 0.77235 0.54467 0.40764
-0.02362 0.09562 -0.08384 -0.37271 0.64109 -0.67089 0.573 0.32613 0.28737
-0.00464 0.10901 -0.09915 -0.05467 0.54449 -0.83698 0.77259 0.54502 0.40781
-0.00807 0.10758 -0.10002 -0.31428 0.59372 -0.74076 0.77261 0.54498 0.4078
-0.018 0.10316 -0.09432 -0.62853 0.03021 -0.7772 0.77266 0.5449 0.40777
-0.01642 0.0987 -0.09326 -0.54978 -0.35157 -0.75772 0.67855 0.38851 0.34392
-0.00811 0.10515 -0.10055 -0.37674 -0.25854 -0.88951 0.77259 0.54502 0.40781
-0.002 0.09858 -0.09923 -0.13912 -0.6446 -0.75175 0.66712 0.38176 0.3378
-0.01301 0.09709 -0.09505 -0.23684 -0.87996 -0.41179 0.63726 0.36411 0.3218
-0.01804 0.09462 -0.08958 -0.59651 0.26369 -0.75806 0.60281 0.34375 0.30334
-0.01309 0.08686 -0.09376 -0.52012 -0.27135 -0.80984 0.77255 0.54509 0.40784
-0.01208 0.09355 -0.09391 -0.39071 0.40853 -0.82489 0.62314 0.35577 0.31424
-0.01118 0.09603 -0.09312 -0.3182 0.81126 -0.49051 0.57312 0.3262 0.28743
-0.00541 0.08389 -0.09509 -0.16934 -0.67443 -0.71866 0.77255 0.5451 0.40784
-0.01324 0.08519 -0.09266 -0.44989 -0.59715 -0.66408 0.77255 0.5451 0.40784
-0.00577 0.08503 -0.09749 -0.2932 -0.71348 -0.63638 0.77255 0.5451 0.40784
-0.01603 0.09658 -0.08565 0.04427 0.99811 0.04253 0.5785 0.32938 0.29032
-0.00513 0.09622 -0.09456 0.01546 0.99547 -0.09382 0.55242 0.31397 0.27634
-0.00741 0.0976 -0.09259 -0.01441 -0.91645 0.39989 0.65148 0.37252 0.32942
-0.01731 0.0941 -0.08037 0.62114 0.4132 0.66592 0.62973 0.35966 0.31777
-0.01098 0.09473 -0.088 0.6605 0.27641 0.6981 0.55163 0.3135 0.27592
-0.00647 0.10212 -0.09104 0.29907 -0.14333 0.9434 0.68777 0.39396 0.34886
-0.00644 0.09438 -0.0902 0.30122 0.33432 0.89303 0.59545 0.3394 0.2994
-0.01954 0.10038 -0.08274 0.63737 -0.32943 0.69659 0.77262 0.54496 0.40779
-0.02586 0.09731 -0.07702 0.89474 0.13076 0.42701 0.77149 0.54361 0.40709
-0.01193 0.08689 -0.0867 0.63745 0.36864 0.67658 0.77255 0.5451 0.40784
-0.01257 0.08163 -0.08394 0.47879 0.67881 0.55675 0.77255 0.5451 0.40784
-0.00152 0.11045 -0.09137 -0.05794 -0.31951 0.94581 0.77247 0.54495 0.40776
-0.00589 0.11106 -0.09055 0.32615 -0.28784 0.90043 0.77154 0.54411 0.4072
-0.00594 0.08627 -0.0906 0.39152 0.51859 0.76011 0.77255 0.5451 0.40784
-0.02306 0.09017 -0.07594 0.71381 0.35178 0.60558 0.77256 0.54508 0.40783
-0.00826 0.05768 -0.02871 0.25569 0.96424 0.06968 0.77255 0.5451 0.40784
-0.02103 0.1118 -0.07858 0.70151 -0.32082 0.63636 0.77274 0.54386 0.40729
-0.00582 0.11668 -0.08808 0.17694 -0.63694 0.75033 0.71502 0.49935 0.37645
-0.01724 0.07879 -0.07583 0.49025 0.84472 0.21474 0.77255 0.5451 0.40784
-0.0014 0.11567 -0.08868 -0.34717 -0.61462 0.70832 0.76639 0.54008 0.40443
-0.00615 0.07546 -0.08331 0.21441 0.95022 0.22609 0.77255 0.5451 0.40784
-0.00458 0.08059 -0.08851 0.25217 0.77046 0.58549 0.77255 0.5451 0.40784
-0.00118 0.12315 -0.07978 -0.46139 -0.75137 0.47178 0.76858 0.54168 0.40556
-0.00873 0.12442 -0.07851 0.24533 -0.80887 0.53437 0.74303 0.52085 0.39137
-0.02551 0.0854 -0.06962 0.85551 0.42966 0.28895 0.77255 0.54509 0.40784
-0.02296 0.11754 -0.07297 0.71442 -0.49093 0.49859 0.77118 0.54092 0.40563
-0.01398 0.07682 -0.06534 0.34264 0.93887 0.03339 0.77255 0.5451 0.40784
-0.02944 0.10821 -0.06915 0.88625 -0.24636 0.39225 0.77317 0.54394 0.4074
-0.03071 0.10005 -0.06782 0.95226 0.07518 0.29589 0.77272 0.54478 0.40772
-0.00677 0.13198 -0.06458 -0.05394 -0.95822 0.28091 0.77292 0.54439 0.40757
-0.00965 0.13178 -0.06425 0.15729 -0.9452 0.2861 0.7731 0.54401 0.40742
-0.02478 0.12326 -0.06225 0.75163 -0.57449 0.32407 0.77437 0.54082 0.40612
-0.01844 0.12757 -0.06283 0.47659 -0.81364 0.33295 0.77334 0.54175 0.40638
-0.02143 0.07905 -0.04679 0.42852 0.83575 0.34334 0.77255 0.5451 0.40784
-0.0151 0.07767 -0.04836 0.24453 0.94356 0.22339 0.77255 0.5451 0.40784
-0.01724 0.06281 -0.02903 0.3344 0.90409 0.26608 0.77255 0.5451 0.40784
-0.02477 0.06756 -0.02875 0.72598 0.6739 -0.13716 0.77255 0.5451 0.40784
-0.02553 0.08205 -0.0448 0.7054 0.69036 0.16067 0.77255 0.5451 0.40784
-0.03615 0.11402 -0.04204 0.96393 -0.24442 0.10531 0.77353 0.54328 0.40714
-0.03672 0.10313 -0.04114 0.98503 0.15648 0.07238 0.77275 0.54473 0.4077
-0.0087 0.13536 -0.04402 -0.10161 -0.99473 -0.01339 0.77286 0.54451 0.40761
-0.01235 0.13537 -0.04395 0.17117 -0.98514 -0.0143 0.77306 0.54412 0.40747
-0.02989 0.08439 -0.04464 0.86149 0.50696 0.02879 0.77255 0.54509 0.40784
-0.02921 0.12655 -0.0433 0.7867 -0.61161 0.08386 0.77463 0.54123 0.40636
-0.02259 0.1312 -0.04361 0.4508 -0.8917 0.04065 0.77405 0.5423 0.40677
-0.00162 0.12995 -0.02524 -0.47573 -0.82658 -0.30075 0.77255 0.54509 0.40784
-0.01191 0.13151 -0.02367 0.20686 -0.89949 -0.38486 0.77256 0.54508 0.40783
-0.0301 0.08452 -0.02508 0.93138 0.32801 -0.15794 0.77255 0.5451 0.40784
-0.02803 0.07454 -0.02918 0.94787 0.30839 -0.08027 0.77255 0.5451 0.40784
-0.02895 0.12278 -0.02303 0.7133 -0.64435 -0.27572 0.77258 0.54505 0.40782
-0.02175 0.12786 -0.02349 0.36135 -0.85531 -0.37132 0.77258 0.54504 0.40782
-0.0114 0.06921 -0.01342 0.3287 0.43536 -0.83811 0.77255 0.5451 0.40784
-0.0168 0.07313 -0.01056 0.30848 0.38735 -0.86879 0.77255 0.5451 0.40784
-0.03638 0.111 -0.02168 0.96582 -0.21221 -0.14888 0.77255 0.54509 0.40784
-0.03542 0.10211 -0.02138 0.95744 0.26681 -0.11009 0.77255 0.5451 0.40784
-0.02184 0.11593 -0.00616 0.33235 -0.68324 -0.65017 0.77255 0.5451 0.40784
-0.02583 0.1138 -0.00544 0.48724 -0.61241 -0.62254 0.77255 0.5451 0.40784
-0.00942 0.1199 -0.00733 0.21013 -0.69156 -0.69108 0.77255 0.5451 0.40784
-0.02097 0.0791 -0.00576 0.77205 0.21877 -0.59672 0.77255 0.5451 0.40784
-0.03255 0.1057 -0.00384 0.85049 -0.2171 -0.4791 0.77255 0.5451 0.40784
-0.03116 0.10004 -0.00165 0.85806 0.36039 -0.36586 0.77255 0.5451 0.40784
-0.00382 0.11947 -0.00773 -0.35668 -0.69381 -0.62563 0.77255 0.5451 0.40784
-0.02172 0.08779 -0.00161 0.84061 0.25746 -0.47653 0.77255 0.5451 0.40784
-0.00832 0.08851 0.00095 -0.03987 0.10038 -0.99415 0.77255 0.5451 0.40784
-0.01245 0.08879 0.00195 -0.04079 0.12312 -0.99155 0.77255 0.5451 0.40784
-0.00449 0.08734 0.00106 -0.08891 0.09762 -0.99124 0.77255 0.5451 0.40784
-0.01527 0.10326 0.0024 0.10251 -0.22708 -0.96847 0.77255 0.5451 0.40784
-0.01475 0.11793 -0.00784 0.07051 -0.72647 -0.68357 0.77255 0.5451 0.40784
-0.01152 0.10606 0.00279 -0.15404 -0.63731 -0.75506 0.77255 0.5451 0.40784
-0.02306 0.10052 0.00351 0.35706 -0.1821 -0.91616 0.77255 0.5451 0.40784
-0.00176 0.10408 0.00076 -0.29199 -0.16089 -0.94279 0.77255 0.5451 0.40784
-0.00318 0.1058 0.00241 -0.43007 -0.4594 -0.77717 0.77255 0.5451 0.40784
-0.00526 0.10607 0.00261 0.18475 -0.52798 -0.82892 0.77255 0.5451 0.40784
-0.0074 0.1045 0.0023 -0.03054 -0.20665 -0.97794 0.77255 0.5451 0.40784
-0.01585 0.228 -0.08423 -0.27632 0.40152 -0.87317 0.77255 0.5451 0.40784
-0.01305 0.08017 -0.09243 -0.4198 -0.26851 -0.86699 0.77255 0.5451 0.40784
-0.00644 0.05197 -0.10077 -0.1915 -0.98015 -0.05128 0.77255 0.5451 0.40784
-0.01457 0.05388 -0.09717 -0.36278 -0.92801 -0.08481 0.77255 0.5451 0.40784
-0.05174 0.08466 -0.02942 -0.79961 -0.58032 0.15445 0.77255 0.54509 0.40784
-0.05432 0.08815 -0.03249 -0.88045 -0.47365 -0.02156 0.77254 0.54507 0.40783
-0.04721 0.08834 0.00821 -0.94108 -0.33344 -0.05649 0.77255 0.5451 0.40784
-0.0511 0.09612 0.00592 -0.89465 -0.42519 0.13715 0.77254 0.54508 0.40783
-0.0411 0.07376 -0.00333 -0.91603 -0.26145 -0.30418 0.77255 0.5451 0.40784
-0.04455 0.07814 0.00729 -0.96162 -0.19683 -0.19118 0.77255 0.5451 0.40784
-0.04097 0.05939 -0.00811 -0.93791 -0.11226 -0.32822 0.77255 0.5451 0.40784
-0.04372 0.06515 0.0026 -0.98082 -0.08203 -0.17683 0.77255 0.5451 0.40784
-0.03663 0.01985 -0.00375 -0.95976 0.00665 -0.28075 0.77255 0.5451 0.40784
-0.03862 0 0.00895 -0.9537 0.14822 -0.2617 0.77255 0.5451 0.40784
-0.03614 0 0.00147 -0.94502 0.06491 -0.32049 0.77255 0.5451 0.40784
-0.04677 0.08452 -0.01332 -0.77719 -0.60762 0.16361 0.77255 0.5451 0.40784
-0.0345 0.06668 -0.01839 -0.8385 -0.44633 -0.31257 0.77255 0.5451 0.40784
-0.03779 0.07113 -0.00966 -0.86847 -0.35756 -0.3434 0.77255 0.5451 0.40784
-0.03229 0.0449 -0.01927 -0.70183 -0.15228 -0.69588 0.77255 0.5451 0.40784
-0.03747 0.05254 -0.01551 -0.84228 -0.1151 -0.5266 0.77255 0.5451 0.40784
-0.03385 0 -0.00512 -0.92521 0.06222 -0.37432 0.77255 0.5451 0.40784
-0.03116 -0 -0.0109 -0.83983 -0.03824 -0.5415 0.77255 0.5451 0.40784
-0.0125 0.05489 -0.07419 -0.30098 -0.95083 0.07307 0.77255 0.5451 0.40784
-0.01107 0.05341 -0.06234 -0.32714 -0.94466 -0.02449 0.77255 0.5451 0.40784
-0.0036 0.04094 -0.04588 -0.20902 -0.9262 -0.3138 0.77255 0.5451 0.40784
-0.00244 0.01364 -0.03173 -0.24011 -0.63341 -0.73562 0.77255 0.5451 0.40784
-0.01284 0 -0.02347 -0.47514 -0.28575 -0.83222 0.77255 0.5451 0.40784
-0.00942 0.01514 -0.03017 -0.41391 -0.51508 -0.75058 0.77255 0.5451 0.40784
-0.0092 0 -0.02583 -0.37834 -0.24655 -0.89223 0.77255 0.5451 0.40784
-0.00257 0 -0.02806 -0.18606 -0.2337 -0.95434 0.77255 0.5451 0.40784
-0.0057 0 -0.02716 -0.31098 -0.20948 -0.92704 0.77255 0.5451 0.40784
-0.02124 0.0505 -0.03707 -0.62708 -0.71143 -0.31724 0.77255 0.5451 0.40784
-0.02744 0 -0.01507 -0.70627 -0.0965 -0.70134 0.77255 0.5451 0.40784
-0.02747 0.03731 -0.02158 -0.67363 -0.23048 -0.70221 0.77255 0.5451 0.40784
-0.04473 0.07419 -0.04929 -0.72416 -0.68567 0.07378 0.77255 0.5451 0.40784
-0.04627 0.07686 -0.05233 -0.8348 -0.52011 -0.18056 0.77255 0.5451 0.40784
-0.0546 0.22406 -0.05885 -0.75159 0.26583 -0.6037 0.77255 0.5451 0.40784
-0.04722 0.08328 0.02102 -0.97975 -0.19875 -0.02413 0.77255 0.5451 0.40784
-0.0406 0 0.01676 -0.91672 0.33889 -0.21163 0.77255 0.5451 0.40784
-0.04059 -0 0.01673 -0.95386 0.17906 -0.24101 0.77255 0.5451 0.40784
-0.04228 0.0393 0.01101 -0.98561 0.05472 -0.15995 0.77255 0.5451 0.40784
-0.04528 0.07053 0.01625 -0.99562 -0.05882 -0.07264 0.77255 0.5451 0.40784
-0.0491 0.09605 0.03421 -0.97538 -0.18387 0.12179 0.77254 0.54509 0.40784
-0.04254 0 0.02517 -0.87054 0.47598 -0.12495 0.77255 0.5451 0.40784
-0.04122 0.00509 0.0237 -0.96253 0.24922 -0.10687 0.77255 0.5451 0.40784
-0.04552 0.05203 0.02258 -0.99259 0.10609 -0.05922 0.77255 0.5451 0.40784
-0.04658 0.09761 0.04824 -0.9659 -0.12815 0.22498 0.77255 0.54509 0.40784
-0.04305 0 0.03387 -0.87137 0.48316 0.08531 0.77255 0.5451 0.40784
-0.04181 0.01402 0.03188 -0.94352 0.30267 0.13476 0.77255 0.5451 0.40784
-0.04542 0.07671 0.04512 -0.98864 0.02118 0.14883 0.77255 0.5451 0.40784
-0.0462 0.0595 0.03571 -0.97928 0.14583 0.14052 0.77255 0.5451 0.40784
-0.0426 0.09023 0.06114 -0.86763 -0.01063 0.4971 0.77255 0.5451 0.40784
-0.0399 0 0.04161 -0.70584 0.50389 0.49789 0.77255 0.5451 0.40784
-0.03927 0.0218 0.03989 -0.72747 0.35331 0.58818 0.77255 0.5451 0.40784
-0.04217 0.07875 0.05748 -0.84735 0.06305 0.52728 0.77255 0.5451 0.40784
-0.04259 0.06347 0.04799 -0.79726 0.16628 0.58029 0.77255 0.5451 0.40784
-0.0351 0.09172 0.06858 -0.46798 -0.02013 0.88351 0.77255 0.5451 0.40784
-0.03599 0.09988 0.06874 -0.53392 -0.05942 0.84344 0.77255 0.5451 0.40784
-0.03183 0 0.04665 -0.3971 0.48132 0.78143 0.77255 0.5451 0.40784
-0.03051 0.02265 0.04523 -0.40734 0.32116 0.85494 0.77255 0.5451 0.40784
-0.03467 0.08025 0.0648 -0.42016 0.06542 0.90509 0.77255 0.5451 0.40784
-0.03472 0.06445 0.05479 -0.40986 0.16037 0.89794 0.77255 0.5451 0.40784
-0.02417 0.09336 0.07162 -0.14706 -0.08226 0.9857 0.77255 0.5451 0.40784
-0.02348 0 0.04919 -0.16797 0.45793 0.87297 0.77255 0.5451 0.40784
-0.02362 0.08238 0.0681 -0.10548 0.03783 0.9937 0.77255 0.5451 0.40784
-0.02386 0.0661 0.05797 -0.14284 0.1875 0.97182 0.77255 0.5451 0.40784
-0.00608 0.02438 0.04738 0.24961 0.30456 0.91921 0.77255 0.5451 0.40784
-0.00681 0 0.04855 0.17051 0.30183 0.93799 0.77255 0.5451 0.40784
-0.04088 0.23811 0.08042 -0.51237 0.45209 0.73013 0.33773 0.23106 0.17663
-0.02818 0.24204 0.08436 -0.29007 0.52521 0.80001 0.33773 0.23106 0.17663
-0.03073 0.264 0.06311 -0.3598 0.764 0.53557 0.33773 0.23106 0.17663
-0.04487 0.25866 0.05975 -0.62853 0.63152 0.45401 0.33773 0.23106 0.17663
-0.01512 0.24393 0.0857 -0.11501 0.55309 0.82515 0.33773 0.23106 0.17663
-0.01713 0.26705 0.06464 -0.17786 0.80577 0.56489 0.33773 0.23106 0.17663
-0.06047 0.22155 0.06208 -0.86763 0.19314 0.45816 0.33773 0.23106 0.17663
-0.05175 0.2314 0.07405 -0.77925 0.29437 0.55327 0.33773 0.23106 0.17663
-0.05462 0.2488 0.05399 -0.81783 0.4563 0.35064 0.33773 0.23106 0.17663
-0.06451 0.23699 0.04561 -0.90083 0.31244 0.30147 0.33773 0.23106 0.17663
-0.07387 0.19063 0.03285 -0.97868 -0.04746 0.19981 0.33764 0.23093 0.17654
-0.07158 0.2008 0.04176 -0.95047 0.05687 0.30556 0.33771 0.23103 0.17661
-0.07386 0.20992 0.03043 -0.97926 0.09409 0.17942 0.33772 0.23105 0.17662
-0.07541 0.19707 0.02398 -0.99646 -0.02998 0.07852 0.33769 0.231 0.17659
-0.07033 0.15411 -0.02504 -0.99094 0.00394 -0.13425 0.76368 0.53129 0.3985
-0.07144 0.23476 0.00009 -0.9568 0.28867 -0.03457 0.33773 0.23106 0.17663
-0.07481 0.21829 0.00168 -0.99244 0.11056 -0.05328 0.33772 0.23106 0.17663
-0.07517 0.21673 0.01537 -0.98234 0.16402 0.08998 0.33772 0.23106 0.17663
-0.07138 0.232 0.01896 -0.94153 0.31559 0.11801 0.33773 0.23106 0.17663
-0.05584 0.13653 0.04623 -0.9085 -0.2519 0.33342 0.33764 0.23093 0.17654
-0.05781 0.14649 0.04883 -0.86507 -0.32268 0.3841 0.33758 0.23084 0.17648
-0.06449 0.24769 0.02207 -0.85997 0.49278 0.13273 0.33773 0.23106 0.17663
-0.06389 0.25134 -0.00271 -0.88618 0.4626 -0.02628 0.33773 0.23106 0.17663
-0.04583 0.13634 0.06747 -0.78328 -0.24307 0.57218 0.33772 0.23106 0.17662
-0.06041 0.10195 -0.03031 -0.92872 -0.335 -0.15893 0.77227 0.54457 0.4075
-0.04326 0.10552 0.06034 -0.85219 -0.10004 0.51358 0.77255 0.5451 0.40784
-0.02563 0.10789 0.07353 -0.20586 -0.19276 0.95941 0.39986 0.27594 0.20967
-0.05331 0.13831 -0.07114 -0.74294 -0.02769 -0.66879 0.77785 0.53406 0.40344
-0.05275 0.15738 -0.06876 -0.68078 -0.01833 -0.73226 0.76958 0.53809 0.40412
-0.06133 0.10575 -0.01027 -0.86408 -0.42625 0.26773 0.77201 0.54427 0.40728
-0.06428 0.10791 -0.01741 -0.93224 -0.36116 0.02219 0.77141 0.54334 0.40665
-0.02246 0.05746 -0.08964 -0.50442 -0.85844 -0.09295 0.77255 0.5451 0.40784
-0.03594 0.06528 -0.06736 -0.67309 -0.73396 -0.0909 0.77255 0.5451 0.40784
-0.02645 0.06103 -0.06202 -0.40421 -0.90862 0.10496 0.77255 0.5451 0.40784
-0.01271 0.04416 -0.04237 -0.34722 -0.81708 -0.46023 0.77255 0.5451 0.40784
-0.01652 0 -0.02147 -0.52725 -0.22726 -0.81876 0.77255 0.5451 0.40784
-0.01728 0.05631 -0.05719 -0.41353 -0.90839 -0.06183 0.77255 0.5451 0.40784
-0.0359 0.0706 -0.02772 -0.75407 -0.65595 -0.03332 0.77255 0.5451 0.40784
-0.02397 0 -0.01752 -0.53272 -0.05108 -0.84475 0.77255 0.5451 0.40784
-0.0245 0 -0.01716 -0.55316 -0.02015 -0.83283 0.77255 0.5451 0.40784
-0.0546 0.10256 0.00248 -0.8941 -0.35841 0.26856 0.77248 0.54499 0.40777
-0.06772 0.11961 -0.00886 -0.89735 -0.44045 0.02767 0.76824 0.53842 0.40332
-0.0673 0.12046 -0.01696 -0.96422 -0.26502 -0.00715 0.76827 0.53846 0.40335
-0.04844 0.21117 0.08293 -0.72701 0.10875 0.67796 0.33773 0.23106 0.17663
-0.01643 0.12637 0.08033 -0.10437 -0.41175 0.9053 0.33773 0.23106 0.17663
-0.02733 0.12631 0.07832 -0.34559 -0.34868 0.8712 0.33773 0.23106 0.17663
-0.03576 0.11257 0.07004 -0.56355 -0.19578 0.80255 0.33792 0.2312 0.17673
-0.04901 0.11189 0.04971 -0.9271 -0.21961 0.30374 0.77253 0.54506 0.40782
-0.01534 0.10975 0.0746 -0.03045 -0.23765 0.97087 0.33773 0.23106 0.17663
-0.05601 0.15944 0.06307 -0.83892 -0.27616 0.46899 0.33766 0.23096 0.17656
-0.03298 0.16311 0.09071 -0.54404 -0.24638 0.80207 0.33773 0.23106 0.17663
-0.04189 0.16273 0.08339 -0.69387 -0.25669 0.6728 0.33773 0.23106 0.17663
-0.06473 0.15462 0.04263 -0.91802 -0.29277 0.26744 0.33721 0.23025 0.17608
-0.06772 0.16807 0.04361 -0.9239 -0.19605 0.32861 0.33731 0.23041 0.17619
-0.05133 0.17567 0.07688 -0.78346 -0.14111 0.60521 0.33772 0.23105 0.17662
-0.04327 0.1777 0.08678 -0.64523 -0.13057 0.75275 0.33773 0.23106 0.17663
-0.05817 0.17304 0.06574 -0.83861 -0.1631 0.51975 0.33768 0.23098 0.17658
-0.01153 0.17998 0.0993 -0.07157 -0.0403 0.99662 0.33773 0.23106 0.17663
-0.01273 0.19945 0.0992 -0.08903 0.07471 0.99322 0.33773 0.23106 0.17663
-0.03394 0.17897 0.09321 -0.4384 -0.09234 0.89403 0.33773 0.23106 0.17663
-0.03579 0.19572 0.09337 -0.47313 0.02062 0.88075 0.33773 0.23106 0.17663
-0.03828 0.21551 0.09032 -0.50091 0.20612 0.8406 0.33773 0.23106 0.17663
-0.06876 0.19093 0.04926 -0.92385 -0.03906 0.38075 0.33767 0.23097 0.17657
-0.06364 0.19826 0.05996 -0.88221 0.01594 0.47058 0.33772 0.23104 0.17662
-0.01534 0.28519 -0.00986 -0.16443 0.9818 -0.09502 0.33773 0.23106 0.17663
-0.0518 0.26165 -0.02877 -0.70184 0.66077 -0.26607 0.33773 0.23106 0.17663
-0.03895 0.27027 -0.03323 -0.48939 0.79869 -0.35012 0.33773 0.23106 0.17663
-0.04469 0.23927 -0.0606 -0.63352 0.42922 -0.64376 0.41529 0.28708 0.21787
-0.04275 0.23089 -0.06751 -0.60137 0.34421 -0.72102 0.77255 0.5451 0.40784
-0.06532 0.21988 -0.04195 -0.89711 0.16111 -0.41139 0.50576 0.35241 0.26598
-0.06941 0.20723 -0.03294 -0.95567 0.0179 -0.29391 0.34171 0.23393 0.17874
-0.02735 0.28287 -0.00938 -0.35341 0.93102 -0.09113 0.33773 0.23106 0.17663
-0.03049 0.27985 0.02922 -0.31085 0.923 0.22679 0.33773 0.23106 0.17663
-0.03817 0.13658 0.07595 -0.62262 -0.29223 0.72591 0.33773 0.23106 0.17663
-0.03158 0.24486 -0.06767 -0.43022 0.50659 -0.74718 0.33773 0.23106 0.17663
-0.03 0.23526 -0.07441 -0.45529 0.43828 -0.775 0.73416 0.51737 0.38743
-0.05817 0.23701 -0.04512 -0.80795 0.35322 -0.47165 0.33773 0.23106 0.17663
-0.02111 0.14804 0.0909 -0.25465 -0.38312 0.8879 0.33773 0.23106 0.17663
-0.06989 0.23312 -0.01533 -0.93621 0.30849 -0.16835 0.33773 0.23106 0.17663
-0.06244 0.24899 -0.02239 -0.84519 0.48641 -0.22148 0.33773 0.23106 0.17663
-0.05786 0.10961 -0.00119 -0.81497 -0.48551 0.3164 0.77222 0.54458 0.40749
-0.05692 0.11293 0.00795 -0.82289 -0.47901 0.30561 0.77221 0.54458 0.40749
-0.06568 0.15273 0.03337 -0.93421 -0.27959 0.22152 0.76724 0.53687 0.40227
-0.07096 0.17154 0.03119 -0.95912 -0.19053 0.20924 0.72879 0.51062 0.38277
-0.06035 0.24313 -0.03658 -0.84309 0.38648 -0.37395 0.33773 0.23106 0.17663
-0.06837 0.22929 -0.02717 -0.92392 0.25091 -0.28882 0.33773 0.23106 0.17663
-0.07294 0.21527 -0.01955 -0.97769 0.09786 -0.18584 0.33772 0.23106 0.17663
-0.049 0.25395 -0.0451 -0.68606 0.5685 -0.45401 0.33773 0.23106 0.17663
-0.01386 0.08318 0.06849 0.07608 0.01389 0.997 0.77255 0.5451 0.40784
-0.01401 0.06663 0.05813 0.10284 0.20197 0.97398 0.77255 0.5451 0.40784
-0.01764 0.28321 0.02906 -0.14397 0.96222 0.2311 0.33773 0.23106 0.17663
-0.05912 0.13675 0.0369 -0.90941 -0.29833 0.28978 0.77091 0.54256 0.40612
-0.0241 0.27525 -0.03695 -0.27665 0.87384 -0.39984 0.33773 0.23106 0.17663
-0.02078 0.26341 -0.05575 -0.23569 0.77681 -0.58397 0.33773 0.23106 0.17663
-0.0357 0.26062 -0.05121 -0.43647 0.69563 -0.57061 0.33773 0.23106 0.17663
-0.02288 0.16253 0.09586 -0.33477 -0.22398 0.91529 0.33773 0.23106 0.17663
-0.02647 0.21811 0.0948 -0.25771 0.26037 0.93048 0.33773 0.23106 0.17663
-0.01418 0.02537 0.05003 0.02162 0.29322 0.9558 0.77255 0.5451 0.40784
-0.01484 0 0.0494 -0.06196 0.31908 0.9457 0.77255 0.5451 0.40784
-0.02301 0.17941 0.09762 -0.22113 -0.05321 0.97379 0.33773 0.23106 0.17663
-0.02453 0.19788 0.09752 -0.24717 0.05054 0.96765 0.33773 0.23106 0.17663
-0.01188 0.15468 -0.0855 -0.63226 0.27125 -0.72572 0.76964 0.54164 0.40582
-0.03524 0.07041 -0.07512 -0.79365 -0.48061 -0.373 0.77255 0.5451 0.40784
-0.02245 0.05956 -0.09387 -0.679 -0.60717 -0.41268 0.77255 0.5451 0.40784
-0.01494 0.05567 -0.10126 -0.47604 -0.74857 -0.46155 0.77255 0.5451 0.40784
-0.02767 0.05913 -0.02965 -0.76111 -0.55337 -0.33838 0.77255 0.5451 0.40784
-0.06553 0.14542 0.02575 -0.8635 -0.33786 0.37445 0.76665 0.53596 0.40165
-0.01611 0.23679 -0.07942 -0.266 0.49851 -0.82506 0.69023 0.48565 0.36407
-0.0172 0.248 -0.07167 -0.25942 0.57412 -0.77659 0.33773 0.23106 0.17663
-0.01866 0.25585 -0.06457 -0.28115 0.65194 -0.70422 0.33773 0.23106 0.17663
-0.03522 0.16951 -0.08019 0.03861 -0.98749 -0.15287 0.74343 0.51764 0.39086
-0.04429 0.16566 -0.0778 0.14834 -0.76262 -0.6296 0.75378 0.52643 0.39644
-0.0414 0.16801 -0.08024 0.03862 -0.83684 -0.54608 0.74916 0.52264 0.39401
-0.03873 0.16874 -0.0814 -0.00734 -0.78378 -0.621 0.74602 0.51989 0.39228
-0.02121 0.16174 -0.07923 -0.08361 0.84925 -0.52133 0.75476 0.52783 0.39724
-0.0314 0.16019 -0.08177 0.02256 0.67025 -0.74179 0.75109 0.52318 0.39454
-0.04127 0.16196 -0.07896 -0.21527 0.47806 -0.85154 0.75367 0.52536 0.39593
-0.04379 0.16383 -0.07688 0.57303 0.54859 -0.60884 0.75447 0.52661 0.39663
-0.03134 0.16092 -0.07738 0.04019 0.34102 0.9392 0.74948 0.52191 0.39372
-0.04057 0.16192 -0.07486 0.56704 0.31324 0.7618 0.75295 0.52472 0.39553
-0.03884 0.16841 -0.07648 0.38187 -0.33836 0.86005 0.74601 0.51984 0.39225
-0.022 0.16618 -0.07605 -0.62631 -0.24058 0.74152 0.74947 0.52333 0.39438
-0.02216 0.16582 -0.07879 -0.72683 -0.68583 -0.03672 0.74941 0.52324 0.39433
-0.02244 0.16201 -0.07546 -0.32301 0.31144 0.89368 0.753 0.52615 0.3962
-0.0439 0.16396 -0.07198 0.68583 0.20697 0.69771 0.75449 0.52667 0.39666
-0.04323 0.16649 -0.07341 0.77272 -0.10886 0.62534 0.75189 0.52487 0.39545
-0.02056 0.16342 -0.07581 -0.72798 0.12262 0.67455 0.75346 0.52686 0.3966
-0.0205 0.1631 -0.07802 -0.78517 0.31607 -0.53255 0.75389 0.52722 0.39683
-0.03172 0.16883 -0.07807 -0.00742 -0.47145 0.88186 0.74184 0.5162 0.38996
-0.02658 0.17276 -0.07832 -0.23623 -0.30984 0.92097 0.74903 0.52316 0.39424
-0.03048 0.15501 -0.07815 0.02151 0.37369 0.9273 0.76286 0.53211 0.40041
-0.03978 0.15671 -0.07632 0.49144 0.25354 0.83319 0.76219 0.53083 0.39972
-0.04558 0.1656 -0.07227 0.80218 -0.01474 0.5969 0.75568 0.52816 0.39753
-0.02025 0.1686 -0.07634 -0.59569 -0.09812 0.7972 0.75194 0.5258 0.39588
-0.04162 0.17157 -0.07528 0.60978 -0.33207 0.71965 0.75198 0.52564 0.39582
-0.01812 0.16503 -0.0745 -0.65679 0.07542 0.75029 0.75551 0.52898 0.39788
-0.02003 0.15885 -0.0753 -0.57309 0.2472 0.78132 0.7603 0.53265 0.40028
-0.04427 0.1603 -0.07352 0.71383 0.03606 0.69939 0.7596 0.53006 0.39898
-0.03118 0.17389 -0.07838 0.00429 -0.39041 0.92063 0.74927 0.52338 0.39437
-0.0257 0.17645 -0.07459 -0.33373 -0.73258 0.59325 0.75671 0.53037 0.3987
-0.03074 0.17769 -0.07453 -0.04268 -0.80879 0.58654 0.75757 0.53116 0.39919
-0.04549 0.17004 -0.07004 0.88564 -0.35673 0.29728 0.75582 0.52902 0.39794
-0.03547 0.17743 -0.07389 0.24629 -0.80078 0.54598 0.75759 0.53115 0.39919
-0.02145 0.17388 -0.07402 -0.58355 -0.58659 0.5616 0.75568 0.5294 0.3981
-0.03037 0.15113 -0.07399 -0.00922 0.83734 0.54661 0.76949 0.53618 0.40326
-0.04082 0.15381 -0.07222 0.57203 0.67955 0.45935 0.76789 0.534 0.40202
-0.03934 0.17608 -0.07293 0.48556 -0.72709 0.48536 0.75694 0.5305 0.39879
-0.01867 0.17083 -0.07314 -0.75975 -0.408 0.50627 0.7555 0.52919 0.39798
-0.02231 0.15373 -0.07307 -0.51755 0.70044 0.49145 0.76669 0.53707 0.40326
-0.03918 0.17793 -0.06915 0.48619 -0.83183 0.26772 0.76022 0.53359 0.4007
-0.0252 0.15031 -0.06946 -0.33099 0.89887 0.28717 0.77038 0.53844 0.40444
-0.02 0.1537 -0.06893 -0.69702 0.67143 0.25168 0.76749 0.5383 0.40395
-0.01551 0.16376 -0.06853 -0.97674 0.04389 0.20989 0.75978 0.53295 0.40034
-0.04654 0.1601 -0.06595 0.95372 0.29191 0.0721 0.76225 0.53239 0.40044
-0.02521 0.17857 -0.07036 -0.35657 -0.86383 0.35589 0.76097 0.53434 0.40116
-0.03034 0.17979 -0.07028 -0.05509 -0.93682 0.34544 0.76178 0.53508 0.40163
-0.01663 0.15867 -0.0685 -0.8979 0.38841 0.20715 0.76344 0.53585 0.40223
-0.03021 0.14914 -0.06946 -0.02725 0.95659 0.29016 0.77185 0.53725 0.4041
-0.04404 0.15519 -0.06706 0.77895 0.60669 0.15863 0.76736 0.53428 0.40207
-0.03478 0.18014 -0.06663 0.24484 -0.9619 0.1217 0.7626 0.53584 0.4021
-0.02076 0.17664 -0.06687 -0.61157 -0.77841 0.14162 0.76059 0.53399 0.40094
-0.04091 0.15188 -0.06466 0.55659 0.83066 0.01441 0.77071 0.53508 0.40293
-0.04694 0.16674 -0.06356 0.98936 -0.11812 -0.08496 0.75727 0.52986 0.39854
-0.02198 0.1515 -0.06619 -0.56535 0.81964 0.09255 0.76942 0.53902 0.40457
-0.01533 0.16667 -0.06631 -0.98305 -0.15907 0.09117 0.75887 0.53224 0.39988
-0.04401 0.17417 -0.06496 0.81067 -0.58546 0.00697 0.75811 0.53148 0.39942
-0.01825 0.15522 -0.06404 -0.82396 0.56161 -0.07538 0.76644 0.53795 0.40364
-0.01797 0.17358 -0.0644 -0.83858 -0.54302 -0.04369 0.75914 0.53262 0.4001
-0.0407 0.17684 -0.0614 0.58266 -0.77181 -0.25459 0.7593 0.53269 0.40016
-0.02969 0.1493 -0.06079 -0.05435 0.95277 -0.2988 0.77162 0.53735 0.40412
-0.02505 0.15033 -0.06139 -0.33798 0.90211 -0.26828 0.77036 0.53848 0.40446
-0.02513 0.17905 -0.06208 -0.37081 -0.90655 -0.20164 0.76183 0.53514 0.40166
-0.04625 0.16449 -0.0599 0.937 -0.00339 -0.34932 0.75733 0.52941 0.39834
-0.04455 0.17213 -0.06077 0.82681 -0.4792 -0.29455 0.7563 0.52966 0.39831
-0.0296 0.18017 -0.06198 -0.10428 -0.97188 -0.21115 0.76253 0.53579 0.40206
-0.01569 0.16173 -0.06246 -0.96185 0.19239 -0.19449 0.76116 0.53409 0.40108
-0.04299 0.15535 -0.05969 0.71768 0.59966 -0.35405 0.76654 0.53371 0.40169
-0.02169 0.17628 -0.05989 -0.57717 -0.73612 -0.35356 0.7593 0.53278 0.4002
-0.03938 0.15332 -0.05744 0.48266 0.71701 -0.50293 0.76819 0.53426 0.40219
-0.03353 0.17933 -0.05955 0.13369 -0.91556 -0.37932 0.76099 0.53434 0.40117
-0.01627 0.16757 -0.06034 -0.92185 -0.19434 -0.33531 0.75754 0.53102 0.39912
-0.023 0.15401 -0.05654 -0.47612 0.65128 -0.59089 0.76631 0.53673 0.40305
-0.04372 0.16735 -0.05578 0.75875 -0.16657 -0.62973 0.75342 0.52648 0.39641
-0.02024 0.17302 -0.05725 -0.66089 -0.5216 -0.53959 0.75626 0.52993 0.39843
-0.04241 0.15947 -0.05513 0.67441 0.3374 -0.65676 0.75986 0.53017 0.39907
-0.03872 0.17563 -0.05654 0.45945 -0.67631 -0.57577 0.75627 0.52986 0.3984
-0.0296 0.15218 -0.05533 -0.08082 0.76465 -0.63936 0.76819 0.53609 0.40303
-0.02584 0.17706 -0.05683 -0.31625 -0.77297 -0.55 0.75829 0.53184 0.39961
-0.01817 0.15991 -0.05727 -0.77995 0.29309 -0.55298 0.76085 0.53349 0.40075
-0.03957 0.16071 -0.05227 0.50236 0.2553 -0.82611 0.75633 0.52774 0.39743
-0.03487 0.16362 -0.04979 0.17559 0.0613 -0.98255 0.75049 0.52351 0.39461
-0.0367 0.17363 -0.05334 0.36339 -0.5592 -0.74515 0.75255 0.52637 0.39624
-0.02976 0.15869 -0.05052 -0.15029 0.36946 -0.91701 0.75776 0.52941 0.39841
-0.02706 0.15563 -0.05272 -0.27116 0.57702 -0.7704 0.76323 0.53377 0.40123
-0.03631 0.15722 -0.05208 0.30517 0.4976 -0.81195 0.76093 0.53085 0.39954
-0.02721 0.17466 -0.05355 -0.23632 -0.65208 -0.72038 0.7541 0.52791 0.39718
-0.0326 0.17217 -0.05131 0.14177 -0.47653 -0.86765 0.74992 0.52392 0.39471
-0.03264 0.17545 -0.05367 0.10222 -0.70379 -0.70301 0.75443 0.52821 0.39736
-0.02112 0.16113 -0.05337 -0.59362 0.20404 -0.77845 0.75737 0.53025 0.39874
-0.0406 0.16708 -0.05264 0.54906 -0.14668 -0.82281 0.75084 0.52416 0.39496
-0.02656 0.16581 -0.05006 -0.27297 -0.08622 -0.95815 0.74953 0.52328 0.39437
-0.02067 0.16746 -0.0536 -0.61876 -0.18033 -0.7646 0.75305 0.52679 0.39651
-0.03446 0.15289 -0.05491 0.17233 0.73596 -0.65473 0.76767 0.53473 0.40233
-0.0659 0.11813 -0.00002 -0.60189 -0.7594 0.24705 0.76946 0.5403 0.4046
-0.02055 0.02666 -0.02492 -0.66708 -0.288 -0.68706 0.77255 0.5451 0.40784
-0.02027 0 -0.01922 -0.53701 -0.13361 -0.83293 0.77255 0.5451 0.40784
-0.03066 0.06537 -0.04009 -0.67207 -0.74004 -0.02553 0.77255 0.5451 0.40784
-0.0415 0.07175 -0.06143 -0.80091 -0.53602 -0.26687 0.77255 0.5451 0.40784
-0.00654 0.13034 -0.10742 -0.54647 0.20657 -0.8116 0.7729 0.54444 0.40759
-0.02451 0.09595 -0.07711 0.70246 0.58438 0.40627 0.56681 0.32529 0.28443
-0.0319 0.09393 -0.02215 0.9288 0.34936 -0.12364 0.77255 0.5451 0.40784
-0.02643 0.09404 -0.00045 0.80429 0.43633 -0.40339 0.77255 0.5451 0.40784
-0.01228 0.12997 -0.10203 -0.77733 0.11825 -0.61787 0.77334 0.54363 0.40728
-0.01746 0.12533 -0.09029 -0.94966 -0.01699 -0.31283 0.77359 0.54269 0.40688
-0.03373 0.13999 -0.08447 -0.37699 0.10409 -0.92035 0.77743 0.53549 0.40411
-0.01417 0.14978 -0.08602 -0.52289 0.35299 -0.77588 0.77163 0.54261 0.40656
-0.01695 0.14438 -0.08687 -0.32296 0.23344 -0.91717 0.77327 0.54252 0.40675
-0.01597 0.20774 -0.09092 -0.27397 0.20149 -0.94039 0.77255 0.5451 0.40784
-0.0261 0.2062 -0.08715 -0.44087 0.18534 -0.87823 0.77255 0.5451 0.40784
-0.01876 0.11931 -0.08846 -0.44239 0.11185 -0.88982 0.77347 0.54338 0.40718
-0.01648 0.15836 -0.0802 -0.4648 0.22311 -0.85684 0.76392 0.53628 0.40249
-0.01878 0.15603 -0.05991 -0.78359 0.50556 -0.36111 0.7652 0.53687 0.40295
-0.05366 0.19469 -0.06737 -0.78767 0.08232 -0.61057 0.77249 0.54504 0.4078
-0.00683 0.06864 -0.10287 -0.26498 -0.09204 -0.95985 0.77255 0.5451 0.40784
-0.0661 0.15734 -0.04545 -0.96165 0.01514 -0.27385 0.76782 0.5365 0.40227
-0.03334 0.09154 -0.07855 -0.60223 -0.20071 -0.77268 0.77258 0.54504 0.40782
-0.02977 0.10992 -0.08415 -0.49818 -0.09208 -0.86217 0.77335 0.5436 0.40727
-0.05877 0.12512 -0.0591 -0.89249 -0.22362 -0.39173 0.77486 0.53709 0.40427
-0.00724 0.05603 -0.1062 -0.27561 -0.69764 -0.66131 0.77255 0.5451 0.40784
-0.03865 0.10054 -0.07637 -0.62809 -0.21205 -0.74869 0.7728 0.54462 0.40766
-0.01482 0.06462 -0.10202 -0.48747 -0.27513 -0.82866 0.77255 0.5451 0.40784
-0.01527 0.06028 -0.10274 -0.52357 -0.47894 -0.70462 0.77255 0.5451 0.40784
-0.0222 0.06406 -0.09533 -0.67934 -0.38147 -0.62688 0.77255 0.5451 0.40784
-0.0573 0.12985 -0.06374 -0.82737 -0.18598 -0.52998 0.77618 0.53533 0.40368
-0.06107 0.13487 -0.05886 -0.8969 -0.12999 -0.4227 0.77383 0.53427 0.40255
-0.06652 0.12989 -0.03785 -0.96814 -0.15519 -0.19653 0.76766 0.53461 0.4012
-0.06318 0.14038 -0.05481 -0.93656 -0.04839 -0.34714 0.7713 0.53375 0.40166
-0.06892 0.15551 -0.03443 -0.98064 -0.00129 -0.1958 0.76525 0.53328 0.39992
-0.03711 0.20892 -0.07999 -0.56477 0.22151 -0.79497 0.77255 0.5451 0.40784
-0.04735 0.20461 -0.07287 -0.71202 0.13911 -0.68824 0.77255 0.5451 0.40784
-0.06067 0.10835 -0.03884 -0.93351 -0.279 -0.2252 0.77221 0.54373 0.40705
-0.03105 0.08101 -0.08035 -0.64772 -0.26493 -0.71433 0.77255 0.54509 0.40784
-0.02606 0.07704 -0.08581 -0.60584 -0.18019 -0.77491 0.77255 0.5451 0.40784
-0.03524 0.13114 -0.08387 -0.4218 -0.0443 -0.90561 0.7781 0.53478 0.40387
-0.04289 0.08533 -0.06453 -0.8311 -0.34759 -0.43411 0.77256 0.54508 0.40784
-0.04418 0.11842 0.06379 -0.80464 -0.18975 0.56263 0.33772 0.23106 0.17663
-0.05037 0.12672 0.05438 -0.90226 -0.20901 0.37715 0.33771 0.23104 0.17662
-0.05772 0.12116 0.02045 -0.91573 -0.32993 0.22932 0.77186 0.54402 0.40712
-0.04978 0.11686 -0.07056 -0.74706 -0.19348 -0.63598 0.77516 0.5401 0.4059
-0.05088 0.11069 -0.06579 -0.80193 -0.29216 -0.52111 0.77377 0.54268 0.40689
-0.04459 0.12779 -0.07746 -0.62491 -0.09458 -0.77495 0.7785 0.53401 0.40358
-0.04151 0.14385 -0.07999 -0.47533 0.20821 -0.85481 0.77742 0.53449 0.40364
-0.03735 0.15339 -0.07907 -0.37399 0.05445 -0.92583 0.76725 0.53366 0.40177
-0.03599 0.14955 -0.06264 0.26704 0.95094 -0.15623 0.77233 0.53582 0.40351
-0.03647 0.14989 -0.06886 0.29067 0.91765 0.27098 0.77205 0.53567 0.4034
-0.03639 0.15176 -0.0734 0.29266 0.79701 0.52832 0.76958 0.53483 0.40265
-0.03554 0.1603 -0.08147 -0.07653 0.44179 -0.89385 0.7519 0.52354 0.39483
-0.042 0.11995 -0.07842 -0.58006 -0.12969 -0.80418 0.77622 0.53828 0.40522
-0.02108 0.10466 -0.09014 -0.68769 0.21309 -0.69403 0.77274 0.54475 0.40771
-0.01028 0.10998 -0.09624 -0.45636 0.5278 -0.71635 0.77267 0.54488 0.40776
-0.01306 0.10174 -0.08739 0.55125 -0.27182 0.78882 0.75189 0.50814 0.39342
-0.01246 0.11061 -0.0867 0.61317 -0.26959 0.74253 0.7713 0.54366 0.40695
-0.01232 0.11584 -0.08392 0.5754 -0.50119 0.64631 0.69457 0.48286 0.36518
-0.07266 0.17044 0.02271 -0.96785 -0.06111 0.24398 0.76795 0.53797 0.40301
-0.07202 0.19773 -0.02055 -0.97423 -0.06115 -0.2171 0.3377 0.23101 0.1766
-0.07565 0.2038 0.00216 -0.99751 -0.01167 -0.06953 0.33771 0.23104 0.17661
-0.07416 0.1906 -0.00458 -0.99037 -0.06905 -0.11996 0.7713 0.54361 0.40681
-0.07054 0.18071 -0.02141 -0.97688 -0.03974 -0.21008 0.33752 0.23075 0.17642
-0.07166 0.18474 -0.01641 -0.98363 -0.05949 -0.17012 0.69423 0.48769 0.36567
-0.06119 0.12271 0.01231 -0.72473 -0.50824 0.46524 0.77085 0.54247 0.40606
-0.07503 0.19048 0.00907 -0.99696 -0.07643 -0.01535 0.73623 0.5183 0.38818
-0.07398 0.17114 0.01295 -0.95424 0.29531 0.04717 0.7679 0.53788 0.40296
-0.07448 0.16756 0.0153 -0.79762 0.46165 0.38819 0.76651 0.53573 0.4015
-0.07125 0.1531 0.02106 -0.53406 -0.19572 0.82248 0.76269 0.52982 0.39749
-0.0704 0.1319 -0.00781 -0.97414 -0.11503 -0.19446 0.76313 0.5305 0.39795
-0.08126 0.16451 0.01872 0.24324 0.53397 0.80976 0.766 0.53495 0.40097
-0.08652 0.1616 0.0231 0.22517 0.40476 0.88627 0.76797 0.538 0.40303
-0.07022 0.11835 0.00097 -0.21756 -0.97511 -0.04281 0.76733 0.53701 0.40236
-0.06973 0.12371 -0.00471 -0.86061 -0.30764 -0.40585 0.76593 0.53484 0.40089
-0.06603 0.12529 0.00971 -0.22599 -0.5777 0.78434 0.76801 0.53806 0.40308
-0.07063 0.13018 0.01141 0.41375 -0.29836 0.86011 0.76339 0.5309 0.39822
-0.0757 0.12767 0.0153 0.15181 -0.52502 0.83744 0.76174 0.52834 0.39649
-0.07481 0.16853 0.00515 -0.4424 0.89509 -0.05567 0.76682 0.53622 0.40183
-0.07408 0.16892 0.00112 -0.94923 0.24775 -0.19385 0.76709 0.53664 0.40211
-0.07931 0.17072 0.00474 0.12069 0.97876 -0.16571 0.76771 0.5376 0.40277
-0.07351 0.11811 0.00161 -0.55989 -0.75254 -0.34671 0.76614 0.53516 0.40111
-0.07208 0.1198 0.00757 0.10697 -0.87647 0.46943 0.766 0.53495 0.40097
-0.07567 0.12158 0.0076 -0.84094 -0.50771 0.1872 0.76426 0.53225 0.39914
-0.07516 0.1211 0.00228 -0.93421 -0.08572 -0.34628 0.76454 0.53268 0.39943
-0.06785 0.14125 0.01896 -0.53181 -0.38834 0.75258 0.76433 0.53236 0.39921
-0.07129 0.12285 0.01074 0.38447 -0.49644 0.77828 0.76529 0.53385 0.40022
-0.07506 0.12386 0.01101 -0.5299 -0.66477 0.52657 0.7634 0.53092 0.39824
-0.07155 0.13342 -0.00387 -0.84984 -0.09344 -0.51868 0.76186 0.52853 0.39662
-0.07905 0.14059 0.02265 0.47395 -0.14226 0.86898 0.75896 0.52404 0.39358
-0.07471 0.15955 -0.00208 -0.69443 0.07777 -0.71534 0.76319 0.53059 0.39802
-0.07299 0.16162 -0.00389 -0.91545 0.04502 -0.3999 0.76461 0.53279 0.3995
-0.07271 0.14637 -0.00328 -0.92481 0.04258 -0.37803 0.76021 0.52598 0.39489
-0.07861 0.16692 0.00163 -0.50556 0.29862 -0.80947 0.76618 0.53522 0.40115
-0.07389 0.13507 -0.00222 -0.81851 -0.13076 -0.55941 0.75999 0.52563 0.39466
-0.08881 0.16029 0.02218 -0.87773 0.08532 0.47149 0.76908 0.53972 0.4042
-0.08806 0.1672 0.01757 -0.85162 0.51897 0.07356 0.76986 0.54094 0.40502
-0.08591 0.16765 0.0191 0.08055 0.83845 0.53899 0.76903 0.53964 0.40415
-0.0862 0.15186 0.0243 -0.72516 -0.2866 0.6261 0.76573 0.53452 0.40068
-0.08439 0.15218 0.02533 0.36449 0.07407 0.92826 0.76419 0.53214 0.39906
-0.08221 0.14189 0.02243 -0.53509 -0.51037 0.6732 0.76102 0.52723 0.39574
-0.07641 0.12682 0.01057 -0.96962 -0.24458 -0.00513 0.762 0.52875 0.39677
-0.08504 0.16926 0.01131 -0.80534 0.54079 -0.24282 0.76904 0.53966 0.40416
-0.08306 0.1711 0.01127 0.03396 0.97907 0.20065 0.7688 0.53928 0.4039
-0.0817 0.16665 0.00433 -0.71831 -0.67576 -0.1655 0.76694 0.5364 0.40195
-0.0829 0.14302 0.02108 -0.92215 -0.32424 -0.21097 0.76164 0.52819 0.39639
-0.07682 0.16097 0.00012 -0.91769 -0.36745 -0.1511 0.76352 0.5311 0.39836
-0.07357 0.13124 0.0008 -0.96345 0.06977 0.25863 0.76117 0.52746 0.3959
-0.07543 0.14081 -0.00075 -0.92639 0.10895 -0.36046 0.75863 0.52352 0.39323
-0.08723 0.15556 0.02187 -0.8552 -0.26684 -0.44432 0.76722 0.53684 0.40225
-0.08485 0.14603 0.02237 -0.91389 -0.37653 -0.15172 0.76368 0.53136 0.39853
-0.07434 0.14902 0.00009 -0.96973 -0.2432 -0.02175 0.75978 0.52531 0.39444
-0.08683 0.16142 0.01748 -0.56673 -0.28729 -0.77219 0.76812 0.53823 0.40319
-0.07204 0.13415 0.00194 -0.86505 0.47447 0.16301 0.76133 0.52771 0.39606
-0.06943 0.13545 0.00239 -0.80877 0.58422 0.0677 0.76328 0.53073 0.39811
-0.07059 0.13866 0.00161 -0.40902 -0.04468 0.91143 0.76181 0.52846 0.39657
-0.07672 0.16388 0.00363 -0.75311 -0.55273 0.35681 0.76476 0.53303 0.39967
-0.08199 0.14354 0.01882 -0.80389 -0.191 -0.56327 0.76086 0.52699 0.39557
-0.0733 0.14556 0.00054 -0.66017 -0.04305 0.74988 0.75974 0.52524 0.39439
-0.0793 0.13881 0.0156 -0.9506 -0.1755 -0.25605 0.75921 0.52443 0.39384
-0.08517 0.15514 0.02037 -0.70032 -0.22592 -0.67713 0.76551 0.53419 0.40045
-0.08454 0.1609 0.01645 -0.82563 -0.14102 -0.54631 0.76655 0.5358 0.40154
-0.08316 0.16418 0.01525 -0.58897 -0.49259 -0.64068 0.76676 0.53612 0.40176
-0.08242 0.16391 0.01083 -0.85333 0.07392 -0.51611 0.7663 0.53541 0.40128
-0.07438 0.13446 0.00492 -0.58718 0.46295 -0.664 0.75991 0.52551 0.39457
-0.07213 0.14083 0.01036 -0.57683 0.20308 -0.79122 0.76037 0.52622 0.39505
-0.07473 0.14954 0.00322 -0.99172 -0.03688 -0.12297 0.75975 0.52526 0.3944
-0.07387 0.14771 0.00307 -0.63816 -0.72131 -0.2692 0.75973 0.52523 0.39439
-0.08244 0.15529 0.01197 -0.65083 -0.36939 -0.6633 0.76344 0.53098 0.39828
-0.08075 0.14629 0.01464 -0.4509 -0.02683 -0.89217 0.76016 0.5259 0.39484
-0.07088 0.14533 0.00699 -0.44778 -0.7762 -0.44385 0.76154 0.52803 0.39628
-0.07885 0.15684 0.00703 -0.62459 -0.04272 -0.77979 0.76212 0.52893 0.39689
-0.07468 0.15312 0.00715 -0.67537 -0.60321 -0.42428 0.76079 0.52686 0.39549
-0.08384 0.1574 0.01298 -0.88615 -0.03021 -0.4624 0.76507 0.53351 0.39999
-0.07083 0.13962 0.0078 -0.64964 0.55381 -0.52083 0.76152 0.528 0.39626
-0.07488 0.15858 0.00523 -0.87713 -0.15288 -0.45527 0.76275 0.52991 0.39756
-0.07405 0.15351 0.00524 -0.94549 -0.20314 -0.25451 0.76115 0.52743 0.39587
-0.07753 0.13822 0.00996 -0.43916 0.34986 -0.82749 0.75874 0.5237 0.39335
-0.07664 0.1595 0.00732 -0.64727 0.03956 -0.76123 0.7629 0.53014 0.39771
-0.07549 0.15671 -0.00014 -0.98419 -0.16414 -0.06657 0.76187 0.52855 0.39663
-0.07501 0.14171 0.00091 -0.50459 -0.0209 0.8631 0.75872 0.52367 0.39333
-0.08518 0.15404 0.0176 -0.96189 -0.22173 -0.16001 0.76527 0.53382 0.4002
-0.07738 0.13527 0.00947 -0.73567 0.20073 -0.64691 0.75926 0.52449 0.39389
-0.06818 0.14141 0.00322 -0.95273 -0.04045 0.30112 0.76401 0.53186 0.39887
-0.0774 0.16372 0.00665 -0.73642 -0.06251 -0.67363 0.76472 0.53296 0.39962
-0.08646 0.16444 0.01573 -0.49247 -0.57735 -0.65126 0.76857 0.53893 0.40367
-0.08185 0.16639 0.01128 -0.62462 -0.55469 -0.5497 0.7669 0.53635 0.40192
-0.07669 0.14262 0.01206 -0.44162 0.01339 -0.8971 0.75844 0.52322 0.39303
-0.07339 0.14989 0.00746 -0.91451 0.40318 0.03338 0.76045 0.52634 0.39514
-0.07588 0.14814 0.00526 -0.86037 -0.30302 -0.4098 0.75914 0.52431 0.39376
-0.07733 0.14588 0.01158 -0.94215 0.1903 -0.27595 0.75872 0.52366 0.39332
-0.07587 0.1455 0.00797 -0.59315 -0.65269 -0.47134 0.75871 0.52365 0.39332
-0.07506 0.14825 0.01213 -0.79656 0.26031 -0.54565 0.75935 0.52464 0.39399
-0.0692 0.14366 0.00204 -0.61956 -0.35173 0.70174 0.76302 0.53032 0.39783
-0.08046 0.16703 0.01569 0.23681 0.80293 0.54701 0.76665 0.53595 0.40165
-0.07816 0.16864 0.01093 0.07467 0.96172 0.26367 0.76679 0.53617 0.4018
-0.07541 0.14602 0.01964 0.27809 -0.14895 0.94894 0.75888 0.52391 0.39349
-0.07679 0.15266 0.02067 0.27047 0.03772 0.96199 0.76028 0.52609 0.39496
-0.07435 0.16171 0.0193 -0.59186 0.15283 0.79142 0.76418 0.53212 0.39905
-0.06758 0.12171 0.00513 0.08187 -0.83836 0.53893 0.76781 0.53775 0.40287
0 0.22442 -0.08661 -0.11885 -0.9929 0.0055 0.29412 0.19216 0.1451
-0.00751 0.22588 -0.08535 -0.14807 -0.98884 0.01672 0.29412 0.19216 0.1451
-0.01486 0.22688 -0.08377 -0.08047 -0.99663 0.01588 0.29412 0.19216 0.1451
-0.02183 0.22731 -0.08098 -0.0107 -0.99994 0.00249 0.29412 0.19216 0.1451
-0.02858 0.22722 -0.07802 0.04775 -0.99867 -0.01958 0.29412 0.19216 0.1451
-0.03465 0.22669 -0.07381 0.09121 -0.99475 -0.04631 0.29412 0.19216 0.1451
-0.04057 0.22583 -0.06976 0.1491 -0.98444 -0.09295 0.29412 0.19216 0.1451
-0.04604 0.22433 -0.06525 0.23051 -0.95753 -0.1732 0.29412 0.19216 0.1451
-0.05168 0.22185 -0.06108 0.28947 -0.92151 -0.25889 0.29412 0.19216 0.1451
-0.05623 0.2186 -0.05572 0.35622 -0.85351 -0.3803 0.29412 0.19216 0.1451
-0.06055 0.21375 -0.05031 0.40728 -0.75198 -0.51832 0.29412 0.19216 0.1451
-0.06384 0.20698 -0.0442 0.40159 -0.68105 -0.61229 0.29412 0.19216 0.1451
-0.06638 0.19922 -0.03782 0.42545 -0.41897 -0.80216 0.29412 0.19216 0.1451
-0.06731 0.18107 -0.03088 0.38142 -0.21891 -0.89811 0.29412 0.19216 0.1451
-0.06908 0.1457 -0.02464 0.08367 -0.99649 -0.00389 0.29412 0.19216 0.1451
-0.06994 0.1631 -0.01824 -0.2134 -0.40438 0.88935 0.29412 0.19216 0.1451
-0.07103 0.17632 -0.01202 -0.11466 -0.69259 0.71216 0.29412 0.19216 0.1451
-0.07214 0.17975 -0.00581 -0.01735 -0.9744 0.22417 0.29412 0.19216 0.1451
-0.07281 0.18027 0.00051 -0.00617 -0.99334 -0.11503 0.29412 0.19216 0.1451
-0.07307 0.17888 0.0069 -0.0361 -0.95426 -0.29678 0.29412 0.19216 0.1451
-0.07301 0.17651 0.01338 -0.09128 -0.89654 -0.43346 0.29412 0.19216 0.1451
-0.0724 0.17281 0.01991 -0.19757 -0.73688 -0.64651 0.29412 0.19216 0.1451
-0.06987 0.16555 0.02594 -0.30714 -0.56573 -0.76525 0.29412 0.19216 0.1451
-0.0658 0.15481 0.03119 -0.42008 -0.37394 -0.82686 0.29412 0.19216 0.1451
-0.05861 0.13651 0.03434 -0.48955 -0.35341 -0.79715 0.29412 0.19216 0.1451
-0.05361 0.12143 0.03804 -0.52783 -0.45703 -0.7159 0.29412 0.19216 0.1451
-0.0498 0.11181 0.04229 -0.53821 -0.58363 -0.60804 0.29412 0.19216 0.1451
-0.0471 0.10441 0.04761 -0.50784 -0.71343 -0.48282 0.29412 0.19216 0.1451
-0.04448 0.09933 0.05351 -0.45991 -0.80945 -0.36507 0.29412 0.19216 0.1451
-0.04202 0.09513 0.06052 -0.40765 -0.87245 -0.26954 0.29412 0.19216 0.1451
-0.03733 0.09182 0.06507 -0.30933 -0.93587 -0.16871 0.29412 0.19216 0.1451
-0.03168 0.08975 0.06805 -0.18959 -0.97832 -0.08336 0.29412 0.19216 0.1451
-0.02531 0.08868 0.0694 -0.13543 -0.98976 -0.04515 0.29412 0.19216 0.1451
-0.01873 0.0878 0.06952 -0.11297 -0.99323 -0.02708 0.29412 0.19216 0.1451
-0.01229 0.08711 0.06912 -0.08209 -0.99655 -0.0124 0.29412 0.19216 0.1451
-0.00601 0.08667 0.06796 -0.04086 -0.99916 -0.00283 0.29412 0.19216 0.1451
0 0.08651 0.06708 0.00855 -0.99996 -0.00075 0.29412 0.19216 0.1451
0.00601 0.08667 0.06796 0.05592 -0.99841 -0.00699 0.29412 0.19216 0.1451
0.01229 0.08711 0.06912 0.09369 -0.99541 -0.01972 0.29412 0.19216 0.1451
0.01873 0.0878 0.06952 0.12092 -0.99199 -0.03651 0.29412 0.19216 0.1451
0.02531 0.08868 0.0694 0.14073 -0.98845 -0.05619 0.29412 0.19216 0.1451
0.03168 0.08975 0.06805 0.22631 -0.96721 -0.11526 0.29412 0.19216 0.1451
0.03733 0.09182 0.06507 0.34085 -0.91586 -0.21218 0.29412 0.19216 0.1451
0.04202 0.09513 0.06052 0.41545 -0.8549 -0.31073 0.29412 0.19216 0.1451
0.04448 0.09933 0.05351 0.45597 -0.79136 -0.40723 0.29412 0.19216 0.1451
0.0471 0.10441 0.04761 0.50833 -0.66884 -0.54246 0.29412 0.19216 0.1451
0.0498 0.11181 0.04229 0.5164 -0.55002 -0.65636 0.29412 0.19216 0.1451
0.05361 0.12143 0.03804 0.49928 -0.40541 -0.76574 0.29412 0.19216 0.1451
0.05861 0.13651 0.03434 0.44586 -0.33394 -0.83048 0.29412 0.19216 0.1451
0.0658 0.15481 0.03119 0.36169 -0.43251 -0.8259 0.29412 0.19216 0.1451
0.06987 0.16555 0.02594 0.25096 -0.6153 -0.74728 0.29412 0.19216 0.1451
0.0724 0.17281 0.01991 0.14104 -0.8046 -0.57682 0.29412 0.19216 0.1451
0.07301 0.17651 0.01338 0.05873 -0.91954 -0.38858 0.29412 0.19216 0.1451
0.07307 0.17888 0.0069 0.0162 -0.9672 -0.2535 0.29412 0.19216 0.1451
0.07281 0.18027 0.00051 0.00281 -0.99997 -0.00688 0.29412 0.19216 0.1451
0.07213 0.17964 -0.00581 0.04946 -0.92132 0.38564 0.29412 0.19216 0.1451
0.07101 0.17588 -0.01202 0.17981 -0.52521 0.83176 0.29412 0.19216 0.1451
0.06995 0.16213 -0.01824 0.26961 -0.36197 0.89235 0.29412 0.19216 0.1451
0.06902 0.14406 -0.02462 -0.3707 -0.35738 -0.85724 0.29412 0.19216 0.1451
0.06719 0.17864 -0.03082 -0.42509 -0.2762 -0.86198 0.29412 0.19216 0.1451
0.06617 0.19597 -0.0377 -0.43334 -0.54475 -0.71796 0.29412 0.19216 0.1451
0.06401 0.20293 -0.04431 -0.40343 -0.73614 -0.54346 0.29412 0.19216 0.1451
0.06096 0.209 -0.05065 -0.37745 -0.82162 -0.42717 0.29412 0.19216 0.1451
0.0568 0.2133 -0.0563 -0.30855 -0.90481 -0.29346 0.29412 0.19216 0.1451
0.05243 0.21619 -0.06198 -0.26043 -0.94309 -0.20678 0.29412 0.19216 0.1451
0.04704 0.21856 -0.06667 -0.20896 -0.96806 -0.13855 0.29412 0.19216 0.1451
0.04131 0.2202 -0.07104 -0.16505 -0.98221 -0.08953 0.29412 0.19216 0.1451
0.03525 0.22148 -0.0751 -0.15006 -0.98655 -0.06484 0.29412 0.19216 0.1451
0.029 0.22269 -0.07918 -0.13391 -0.98999 -0.04464 0.29412 0.19216 0.1451
0.02215 0.22369 -0.08217 -0.09876 -0.99483 -0.02385 0.29412 0.19216 0.1451
0.01501 0.22435 -0.0846 -0.04843 -0.9988 -0.00764 0.29412 0.19216 0.1451
0.00755 0.22458 -0.08584 0.0043 -0.99999 -0.00025 0.29412 0.19216 0.1451
0 0.22442 -0.09075 -0.04699 0.00012 -0.9989 0.23276 0.16607 0.1373
-0.01558 0.22688 -0.08785 -0.25547 0.03853 -0.96605 0.18963 0.13471 0.11377
-0.03 0.22722 -0.08191 -0.47811 -0.03537 -0.87759 0.22789 0.16253 0.13464
-0.05434 0.22185 -0.06425 -0.63876 -0.10979 -0.76153 0.2157 0.15366 0.12799
-0.06373 0.21375 -0.05297 -0.70204 -0.19655 -0.68447 0.21031 0.14974 0.12505
-0.06996 0.19922 -0.03989 -0.68723 -0.2626 -0.67731 0.19539 0.1389 0.11692
-0.07107 0.18107 -0.03263 -0.4143 -0.23523 -0.87922 0.20149 0.14333 0.12024
-0.07297 0.1457 -0.02605 -0.73062 -0.18536 -0.65715 0.22375 0.15952 0.13238
-0.07511 0.17632 -0.01274 -0.96521 -0.21674 0.14627 0.18923 0.13441 0.11355
-0.07695 0.18027 0.00051 -0.95227 -0.29293 -0.08592 0.21117 0.15037 0.12552
-0.0764 0.17281 0.02098 -0.96295 -0.26893 -0.02019 0.19128 0.1359 0.11467
-0.06955 0.15481 0.03294 -0.93922 -0.34318 -0.01023 0.20022 0.14241 0.11955
-0.057 0.12143 0.04042 -0.93233 -0.36049 0.02855 0.20963 0.14925 0.12468
-0.05003 0.10441 0.05054 -0.938 -0.28284 0.20038 0.18664 0.13253 0.11214
-0.0444 0.09513 0.06391 -0.87542 -0.23055 0.42483 0.2111 0.15032 0.12549
-0.0394 0.09182 0.06866 -0.6502 -0.22395 0.72601 0.21907 0.15612 0.12983
-0.02673 0.08868 0.07329 -0.29521 -0.26264 0.91862 0.17499 0.12406 0.10579
0 0.08651 0.07122 -0.02349 -0.33289 0.94267 0.17508 0.12412 0.10584
0.01301 0.08711 0.07319 -0.00154 -0.29905 0.95424 0.21821 0.15549 0.12936
0.02673 0.08868 0.07329 0.23888 -0.26511 0.93416 0.17995 0.12767 0.10849
0.0394 0.09182 0.06866 0.66758 -0.23414 0.70677 0.21182 0.15084 0.12588
0.0444 0.09513 0.06391 0.86461 -0.22562 0.44894 0.19922 0.14168 0.119
0.04714 0.09933 0.05668 0.92268 -0.25806 0.28648 0.19215 0.13654 0.11515
0.057 0.12143 0.04042 0.92354 -0.37453 0.08243 0.20131 0.1432 0.12014
0.06955 0.15481 0.03294 0.93472 -0.34 -0.10344 0.20635 0.14686 0.12289
0.07377 0.16555 0.02735 0.94915 -0.31359 -0.0277 0.1841 0.13068 0.11076
0.0764 0.17281 0.02098 0.95392 -0.29794 -0.03573 0.18752 0.13317 0.11262
0.07695 0.18027 0.00051 0.95045 -0.29236 -0.10567 0.19667 0.13982 0.11761
0.07508 0.17588 -0.01273 0.9523 -0.27188 0.13861 0.20352 0.1448 0.12135
0.07291 0.14406 -0.02603 0.95702 -0.21 -0.20005 0.21011 0.1496 0.12495
0.07094 0.17864 -0.03257 0.32017 -0.21017 -0.92375 0.20762 0.14779 0.12359
0.06975 0.19597 -0.03977 0.60409 -0.27976 -0.7462 0.20796 0.14803 0.12377
0.06413 0.209 -0.05331 0.69678 -0.25286 -0.67124 0.19919 0.14166 0.11899
0.05509 0.21619 -0.06515 0.61451 -0.18372 -0.76722 0.22502 0.16044 0.13308
0.03042 0.22269 -0.08307 0.40687 -0.09654 -0.90837 0.23285 0.16614 0.13735
0.01572 0.22435 -0.08867 0.26611 0.0012 -0.96394 0.18711 0.13287 0.1124
0.00452 0.23492 -0.08679 0.03197 0.24245 -0.96964 0.23557 0.16811 0.13883
-0.0185 0.23704 -0.0825 -0.26113 0.2568 -0.93052 0.21768 0.1551 0.12907
-0.03231 0.23681 -0.07623 -0.52653 0.23801 -0.81616 0.21037 0.14979 0.12508
-0.04449 0.23516 -0.06802 -0.59259 0.19109 -0.78251 0.21143 0.15056 0.12566
-0.06037 0.22734 -0.0539 -0.77799 0.11602 -0.61747 0.21311 0.15178 0.12658
-0.06838 0.21604 -0.04257 -0.87379 0.00559 -0.48626 0.1982 0.14093 0.11845
-0.07353 0.17238 -0.02299 -0.99152 -0.07555 -0.10573 0.22312 0.15906 0.13204
-0.07831 0.19709 0.00247 -0.99451 -0.09667 -0.0401 0.22668 0.16165 0.13398
-0.05741 0.13841 0.04952 -0.89678 -0.26899 0.35133 0.18944 0.13457 0.11367
-0.04576 0.12492 0.06771 -0.75285 -0.20037 0.62696 0.22188 0.15816 0.13136
-0.03338 0.12063 0.07578 -0.50965 -0.24351 0.8252 0.1778 0.1261 0.10732
-0.02668 0.11983 0.07927 -0.32521 -0.29336 0.89899 0.20978 0.14936 0.12477
-0.01911 0.11914 0.0802 -0.10137 -0.32247 0.94113 0.22353 0.15936 0.13227
0.01052 0.11856 0.0805 0.04788 -0.35872 0.93222 0.22102 0.15753 0.13089
0.02543 0.11967 0.07913 0.24231 -0.29663 0.92374 0.18276 0.12971 0.11002
0.03258 0.12059 0.07686 0.42107 -0.26485 0.8675 0.20308 0.14449 0.12111
0.03915 0.12196 0.07334 0.61356 -0.23242 0.75467 0.21462 0.15288 0.12741
0.05338 0.13169 0.05673 0.88688 -0.26205 0.38049 0.1997 0.14203 0.11926
0.06144 0.1446 0.04599 0.87662 -0.3124 0.36597 0.20411 0.14524 0.12167
0.07246 0.17007 0.03697 0.96432 -0.25237 0.07999 0.20915 0.1489 0.12442
0.07917 0.1953 0.01079 0.98615 -0.14666 -0.07747 0.22795 0.16257 0.13467
0.07631 0.19251 -0.01539 0.98827 -0.152 -0.01456 0.21937 0.15633 0.13
0.07279 0.17022 -0.02804 0.90837 -0.13105 -0.39709 0.21043 0.14983 0.12512
0.07211 0.20151 -0.03509 0.74919 -0.13672 -0.64809 0.21076 0.15007 0.1253
0.06649 0.21743 -0.04796 0.85852 -0.04384 -0.5109 0.202 0.1437 0.12052
0.05824 0.22582 -0.05989 0.71023 0.06706 -0.70077 0.22782 0.16248 0.13461
0.03438 0.23259 -0.07803 0.45133 0.14583 -0.88036 0.23566 0.16818 0.13888
0.0123 0.2348 -0.08539 0.23547 0.2156 -0.94767 0.2211 0.15759 0.13094
0.00882 0.24682 -0.08498 0.07749 0.17944 -0.98071 0.23837 0.17015 0.14036
-0.06279 0.2374 -0.05089 -0.7874 0.09805 -0.60859 0.21214 0.15108 0.12605
-0.07095 0.22712 -0.04008 -0.76377 -0.015 -0.64531 0.2071 0.14741 0.1233
-0.07533 0.21284 -0.03475 -0.7149 -0.10691 -0.691 0.22935 0.16359 0.13544
-0.07588 0.1912 -0.0278 -0.95207 -0.14187 -0.27099 0.22593 0.1611 0.13357
-0.07812 0.21169 -0.01505 -0.98885 -0.09732 -0.11273 0.18831 0.13374 0.11305
-0.08049 0.21522 -0.00243 -0.99762 -0.05586 -0.04043 0.22949 0.16369 0.13551
-0.07856 0.20205 0.03123 -0.99323 -0.08115 0.08307 0.2055 0.14624 0.12243
-0.07706 0.19293 0.03846 -0.98263 -0.13234 0.1301 0.21523 0.15333 0.12774
-0.07366 0.18025 0.04503 -0.93955 -0.18979 0.285 0.21426 0.15262 0.12721
-0.06051 0.16093 0.06399 -0.8688 -0.26481 0.41841 0.21671 0.1544 0.12855
-0.05539 0.1577 0.07039 -0.79091 -0.25546 0.55607 0.22468 0.1602 0.13289
-0.02833 0.15121 0.09353 -0.34617 -0.34062 0.87415 0.22634 0.1614 0.1338
-0.01937 0.15037 0.09582 -0.15837 -0.35143 0.92272 0.19516 0.13873 0.11679
0.00838 0.15032 0.09826 0.08937 -0.37054 0.9245 0.22382 0.15957 0.13242
0.02624 0.15084 0.09375 0.30486 -0.35236 0.88482 0.18556 0.13174 0.11155
0.04206 0.15279 0.08541 0.62383 -0.31128 0.7169 0.21743 0.15492 0.12894
0.05941 0.16005 0.06689 0.8186 -0.2816 0.5006 0.2025 0.14407 0.12079
0.07335 0.17642 0.04882 0.92528 -0.25526 0.28054 0.21806 0.15538 0.12928
0.077 0.18741 0.04244 0.97997 -0.18688 0.06881 0.21196 0.15094 0.12595
0.08313 0.21305 0.01498 0.99239 -0.11134 -0.05253 0.23075 0.16461 0.1362
0.08138 0.21517 0.00144 0.99226 -0.1221 -0.02255 0.18957 0.13466 0.11374
0.08071 0.21067 -0.01844 0.98744 -0.15442 0.03347 0.21572 0.15368 0.12801
0.07416 0.22179 -0.03801 0.69134 -0.11491 -0.71333 0.20382 0.14503 0.12152
0.01268 0.26016 -0.08166 0.08931 0.34869 -0.93297 0.24118 0.17219 0.14189
-0.01064 0.26042 -0.07988 -0.09658 0.32605 -0.9404 0.22329 0.15918 0.13213
-0.01802 0.26113 -0.07818 -0.33346 0.36632 -0.86869 0.2363 0.16865 0.13923
-0.03768 0.25951 -0.06867 -0.45197 0.32301 -0.8315 0.21703 0.15463 0.12872
-0.05426 0.2554 -0.0567 -0.70862 0.26757 -0.65288 0.21872 0.15586 0.12964
-0.07222 0.24031 -0.03757 -0.80673 0.1302 -0.5764 0.23216 0.16563 0.13697
-0.0778 0.22173 -0.03294 -0.92849 0.04072 -0.36911 0.22873 0.16314 0.1351
-0.07871 0.21557 -0.02632 -0.99867 0.01737 -0.04848 0.19764 0.14053 0.11814
-0.07811 0.22744 -0.01958 -0.99286 0.05515 -0.10581 0.19111 0.13578 0.11458
-0.07997 0.23311 -0.00731 -0.98993 0.13607 -0.03896 0.23229 0.16573 0.13704
-0.07941 0.22906 0.01817 -0.98449 0.14444 0.09963 0.20863 0.14852 0.12414
-0.07757 0.21293 0.04001 -0.95865 0.04597 0.28084 0.21706 0.15465 0.12874
-0.07194 0.19647 0.05492 -0.93028 -0.07068 0.35998 0.19124 0.13587 0.11465
-0.06407 0.18916 0.07078 -0.82316 -0.11111 0.55684 0.22749 0.16224 0.13442
-0.04508 0.18294 0.09325 -0.68261 -0.17014 0.7107 0.21539 0.15344 0.12782
-0.03663 0.18261 0.09937 -0.44842 -0.14881 0.88135 0.22914 0.16344 0.13533
-0.0063 0.18132 0.10591 -0.12652 -0.13966 0.98208 0.21241 0.15127 0.1262
0.00408 0.1817 0.10663 0.03941 -0.12816 0.99097 0.22662 0.16161 0.13395
0.02442 0.18159 0.10355 0.22329 -0.14432 0.96401 0.18836 0.13378 0.11308
0.03416 0.18264 0.1008 0.36503 -0.16646 0.91599 0.20869 0.14857 0.12417
0.04309 0.18362 0.09635 0.57888 -0.16791 0.79793 0.22023 0.15696 0.13047
0.0674 0.19148 0.06816 0.84895 -0.12678 0.51304 0.20595 0.14657 0.12267
0.07614 0.20065 0.05457 0.91209 -0.08103 0.40191 0.22086 0.15742 0.13081
0.07909 0.20725 0.04737 0.97734 -0.02972 0.20957 0.21476 0.15298 0.12748
0.08048 0.22342 0.03202 0.96792 0.0287 0.24961 0.19593 0.13929 0.11721
0.08386 0.23193 0.01893 0.99605 0.08816 0.01062 0.23356 0.16665 0.13773
0.08223 0.23346 0.00546 0.99522 0.07936 0.05697 0.19238 0.1367 0.11527
0.08252 0.22923 -0.02094 0.99982 0.00504 -0.01809 0.21604 0.15391 0.12818
0.08238 0.21649 -0.02818 0.97694 -0.04492 -0.20873 0.21637 0.15415 0.12836
0.07919 0.22504 -0.03465 0.78376 -0.00329 -0.62106 0.20663 0.14707 0.12304
0.07329 0.24136 -0.03976 0.84915 0.06678 -0.52392 0.20761 0.14778 0.12358
0.07033 0.2467 -0.04637 0.85774 0.10537 -0.50317 0.22962 0.16379 0.13559
0.06527 0.25038 -0.05176 0.69067 0.17992 -0.70043 0.23343 0.16656 0.13766
0.05873 0.25236 -0.0558 0.61556 0.21682 -0.75767 0.20515 0.14599 0.12224
0.04233 0.25793 -0.07139 0.43286 0.2686 -0.86051 0.24126 0.17226 0.14194
0.02715 0.25781 -0.0754 0.41319 0.30932 -0.8565 0.19552 0.13899 0.11699
0.02031 0.25939 -0.07954 0.41442 0.27734 -0.8668 0.2267 0.16167 0.134
0.01542 0.27315 -0.0746 0.07775 0.63114 -0.77177 0.24398 0.17423 0.14342
0.00078 0.27085 -0.07465 0.03856 0.61432 -0.78811 0.20085 0.14286 0.11989
-0.01325 0.2734 -0.07277 -0.26404 0.64173 -0.72005 0.23911 0.17069 0.14076
-0.02551 0.27156 -0.06665 -0.32595 0.63286 -0.70231 0.20724 0.14751 0.12338
-0.03754 0.27133 -0.06197 -0.44251 0.60602 -0.661 0.22691 0.16182 0.13411
-0.05681 0.26401 -0.04689 -0.74457 0.50796 -0.43312 0.20661 0.14705 0.12303
-0.06537 0.25899 -0.03845 -0.78477 0.40669 -0.46769 0.23496 0.16767 0.1385
-0.07069 0.25158 -0.03449 -0.92442 0.35878 -0.12933 0.23154 0.16518 0.13663
-0.07573 0.23633 -0.03 -0.95755 0.28053 -0.06634 0.20045 0.14257 0.11967
-0.07538 0.24963 -0.01155 -0.9309 0.36284 -0.04215 0.2351 0.16777 0.13857
-0.07528 0.24329 0.02514 -0.94431 0.30943 0.11196 0.22084 0.1574 0.1308
-0.07512 0.2392 0.03244 -0.89995 0.30211 0.31436 0.21987 0.15669 0.13027
-0.07419 0.23123 0.04007 -0.89801 0.24518 0.36534 0.19785 0.14068 0.11826
-0.07261 0.22429 0.04806 -0.95448 0.13739 0.26475 0.19404 0.13791 0.11618
-0.07092 0.22094 0.05694 -0.9267 0.09803 0.36278 0.22232 0.15848 0.1316
-0.06728 0.21788 0.06525 -0.83684 0.11875 0.53441 0.23029 0.16427 0.13595
-0.06184 0.21464 0.0726 -0.79863 0.0993 0.59358 0.19835 0.14104 0.11853
-0.05038 0.21206 0.09003 -0.74654 0.05156 0.66334 0.21819 0.15548 0.12935
-0.04218 0.2118 0.0968 -0.49402 0.10499 0.86309 0.23195 0.16548 0.13685
-0.01175 0.21056 0.10566 -0.18243 0.10324 0.97778 0.21522 0.15331 0.12773
-0.00116 0.21108 0.10679 -0.00472 0.11881 0.99291 0.22943 0.16365 0.13548
0.02998 0.21162 0.10301 0.21179 0.10225 0.97195 0.2115 0.15061 0.1257
0.03972 0.21265 0.0999 0.45091 0.09534 0.88746 0.22304 0.159 0.13199
0.0548 0.214 0.08674 0.72681 0.05289 0.6848 0.20336 0.14469 0.12126
0.06058 0.21594 0.07917 0.81546 0.05105 0.57656 0.20811 0.14814 0.12385
0.07397 0.22455 0.05756 0.87521 0.1124 0.47051 0.22367 0.15946 0.13234
0.07621 0.2284 0.04988 0.94622 0.16011 0.28114 0.21757 0.15502 0.12901
0.07939 0.24648 0.02835 0.90328 0.26279 0.33916 0.22983 0.16394 0.1357
0.07989 0.24982 0.02178 0.94128 0.33566 0.03647 0.23636 0.16869 0.13926
0.07793 0.25098 0.00885 0.93023 0.34275 0.13114 0.19518 0.13874 0.1168
0.07999 0.25394 -0.00316 0.94492 0.32715 0.00979 0.22778 0.16245 0.13458
0.07982 0.24693 -0.02257 0.95064 0.25958 -0.16999 0.21917 0.15619 0.12989
0.08026 0.23841 -0.02993 0.92462 0.22979 -0.30377 0.20943 0.14911 0.12457
0.0694 0.26076 -0.04041 0.87692 0.34361 -0.33608 0.23242 0.16583 0.13711
0.06496 0.26405 -0.04587 0.69086 0.44555 -0.56938 0.23624 0.1686 0.13919
0.05344 0.26678 -0.05455 0.72757 0.4558 -0.51272 0.19998 0.14223 0.11942
0.04336 0.27133 -0.06492 0.36854 0.56136 -0.74098 0.24407 0.17429 0.14347
0.02861 0.27013 -0.0682 0.3985 0.57322 -0.71597 0.19833 0.14103 0.11852
0.02239 0.27215 -0.07219 0.46173 0.54824 -0.69731 0.22951 0.16371 0.13552
0.01608 0.28317 -0.06245 0.04669 0.80182 -0.59574 0.24678 0.17627 0.14495
0.00374 0.28041 -0.06279 0.12382 0.79108 -0.59905 0.20365 0.1449 0.12142
-0.00228 0.28191 -0.06398 0.11719 0.76944 -0.62787 0.2289 0.16326 0.13519
-0.00812 0.28287 -0.0622 -0.2161 0.80582 -0.55132 0.24191 0.17273 0.14229
-0.02904 0.28098 -0.0543 -0.31522 0.78663 -0.53089 0.22971 0.16386 0.13564
-0.04273 0.27769 -0.04646 -0.5679 0.7579 -0.32104 0.22056 0.1572 0.13064
-0.05079 0.27398 -0.04005 -0.54857 0.67422 -0.49448 0.21551 0.15353 0.12789
-0.05568 0.27289 -0.03725 -0.63767 0.64863 -0.41553 0.23776 0.16971 0.14003
-0.05967 0.26997 -0.0336 -0.7884 0.61115 0.0702 0.23434 0.16722 0.13816
-0.06447 0.26056 -0.03009 -0.84665 0.51863 0.11921 0.20325 0.14461 0.1212
-0.06918 0.25321 -0.02611 -0.84119 0.45518 -0.29191 0.19672 0.13986 0.11764
-0.06885 0.25962 -0.02034 -0.82237 0.47 -0.32065 0.22519 0.16057 0.13317
-0.06761 0.26347 -0.01466 -0.8323 0.55242 -0.04596 0.2379 0.16981 0.1401
-0.0681 0.25796 0.02433 -0.80948 0.53301 0.24626 0.22267 0.15873 0.13179
-0.06766 0.25342 0.03111 -0.80957 0.48542 0.33011 0.20066 0.14272 0.11979
-0.06853 0.24767 0.03941 -0.90962 0.37919 0.16972 0.19684 0.13995 0.11771
-0.06903 0.24474 0.04875 -0.90261 0.34638 0.25557 0.22512 0.16052 0.13313
-0.0611 0.23898 0.06358 -0.77952 0.32956 0.53267 0.20115 0.14308 0.12006
-0.05202 0.23717 0.08155 -0.75221 0.29147 0.59096 0.221 0.15752 0.13088
-0.04456 0.23698 0.08826 -0.48592 0.36234 0.79536 0.23475 0.16752 0.13838
-0.01625 0.23586 0.09832 -0.23408 0.34859 0.90757 0.21802 0.15535 0.12926
-0.00628 0.23649 0.09991 -0.05696 0.36568 0.929 0.23223 0.16569 0.13701
0.02334 0.23668 0.09767 0.0936 0.35261 0.93108 0.2143 0.15265 0.12723
0.03278 0.23771 0.09552 0.28689 0.37267 0.8825 0.22584 0.16104 0.13352
0.04134 0.23772 0.09139 0.49634 0.36846 0.78606 0.21324 0.15188 0.12665
0.05578 0.23962 0.08032 0.70453 0.30669 0.63998 0.21091 0.15018 0.12538
0.06366 0.24294 0.0642 0.78658 0.31122 0.53333 0.21533 0.15339 0.12779
0.07103 0.24806 0.05116 0.86793 0.39085 0.30648 0.22037 0.15706 0.13054
0.07074 0.2555 0.03542 0.79933 0.42974 0.42 0.20154 0.14337 0.12027
0.07161 0.26164 0.02916 0.78832 0.46467 0.40329 0.23263 0.16598 0.13723
0.07174 0.26465 0.02296 0.84175 0.5375 0.05046 0.23916 0.17073 0.14079
0.06949 0.26549 0.01098 0.8244 0.54411 0.15594 0.19798 0.14078 0.11833
0.07142 0.26892 0.00035 0.82677 0.54919 0.1218 0.23059 0.16449 0.13611
0.0709 0.26721 -0.01661 0.82191 0.5353 -0.19474 0.22198 0.15823 0.13142
0.07195 0.25935 -0.02986 0.87572 0.46225 -0.13943 0.21321 0.15186 0.12664
0.06488 0.2718 -0.0338 0.82696 0.54095 -0.15332 0.23523 0.16787 0.13864
0.06045 0.27559 -0.03856 0.60034 0.66655 -0.44192 0.23904 0.17064 0.14072
0.04893 0.27707 -0.04551 0.64976 0.67656 -0.34653 0.20279 0.14427 0.12095
0.04523 0.28022 -0.05057 0.66674 0.66813 -0.33025 0.23473 0.1675 0.13837
0.03997 0.28181 -0.05415 0.28739 0.75934 -0.58378 0.24687 0.17633 0.145
0.02738 0.27981 -0.05749 0.34772 0.75306 -0.55856 0.20113 0.14307 0.12005
0.01549 0.29099 -0.05056 0.00494 0.87573 -0.48278 0.24959 0.17831 0.14648
0.00552 0.28807 -0.05041 0.13349 0.85909 -0.49411 0.20645 0.14694 0.12295
0.00084 0.28946 -0.05221 0.25677 0.82364 -0.50566 0.2317 0.1653 0.13672
-0.01255 0.28807 -0.04802 -0.18696 0.87764 -0.44136 0.21285 0.15159 0.12644
-0.02107 0.28853 -0.04597 -0.22201 0.88323 -0.41306 0.23252 0.1659 0.13717
-0.03567 0.28455 -0.03767 -0.45975 0.85682 -0.23344 0.21222 0.15113 0.12609
-0.04399 0.28336 -0.03382 -0.45718 0.81867 -0.34752 0.24057 0.17175 0.14156
-0.04973 0.27778 -0.0274 -0.68464 0.707 0.17727 0.20605 0.14665 0.12273
-0.05727 0.27082 -0.02591 -0.69525 0.66188 -0.28026 0.19952 0.1419 0.11917
-0.0582 0.27466 -0.01654 -0.70966 0.69225 -0.13108 0.2407 0.17185 0.14163
-0.05765 0.27467 -0.00286 -0.72483 0.68847 0.02518 0.21455 0.15283 0.12737
-0.05866 0.26948 0.02275 -0.6955 0.66913 0.26181 0.20346 0.14476 0.12132
-0.05892 0.262 0.04488 -0.7191 0.5854 0.37444 0.2359 0.16835 0.13901
-0.04929 0.25804 0.06844 -0.70052 0.54302 0.46304 0.2238 0.15956 0.13241
-0.04319 0.25803 0.07481 -0.46653 0.59478 0.65466 0.23755 0.16956 0.13991
-0.01037 0.25776 0.08753 -0.1008 0.58508 0.80469 0.23504 0.16773 0.13854
0.02423 0.25874 0.08527 0.17962 0.583 0.79237 0.22864 0.16308 0.13505
0.04591 0.25979 0.07407 0.46167 0.58648 0.66551 0.21372 0.15222 0.12691
0.05843 0.26398 0.05504 0.71907 0.54683 0.42885 0.22927 0.16354 0.1354
0.06016 0.26531 0.04787 0.76967 0.57661 0.2741 0.22317 0.1591 0.13207
0.06171 0.26889 0.03451 0.68354 0.57486 0.44979 0.20435 0.14541 0.1218
0.06271 0.27416 0.02884 0.65941 0.60736 0.44305 0.23544 0.16802 0.13876
0.06212 0.27714 0.02284 0.73951 0.67113 0.05203 0.24197 0.17277 0.14232
0.05968 0.27764 0.01185 0.72393 0.67218 0.15523 0.20079 0.14282 0.11986
0.06103 0.28103 0.00258 0.70727 0.68794 0.1628 0.23339 0.16653 0.13764
0.06065 0.28067 -0.01194 0.69676 0.69017 -0.19543 0.22478 0.16027 0.13295
0.06274 0.27431 -0.02335 0.76905 0.63492 -0.07381 0.21602 0.15389 0.12817
0.05954 0.2795 -0.02818 0.74493 0.66661 -0.02674 0.23803 0.1699 0.14017
0.05203 0.28523 -0.03062 0.50375 0.79808 -0.33061 0.24184 0.17268 0.14225
0.04311 0.28566 -0.03721 0.56926 0.79081 -0.22486 0.20559 0.14631 0.12248
0.03936 0.28876 -0.04081 0.59721 0.78211 -0.17791 0.23753 0.16954 0.1399
0.0351 0.29014 -0.04387 0.19814 0.85962 -0.47095 0.24967 0.17837 0.14653
0.02469 0.28773 -0.04674 0.30471 0.84878 -0.43212 0.20394 0.14511 0.12158
0.01295 0.29691 -0.03703 -0.02774 0.93184 -0.3618 0.25239 0.18035 0.14801
0.00594 0.29418 -0.03762 0.11264 0.92068 -0.3737 0.20926 0.14898 0.12448
-0.00079 0.29593 -0.03987 -0.15216 0.93217 -0.3285 0.24752 0.1768 0.14535
-0.02377 0.29119 -0.02948 -0.34657 0.92516 -0.15484 0.21502 0.15317 0.12762
-0.03039 0.29093 -0.02743 -0.27728 0.91251 -0.30073 0.24337 0.17379 0.14309
-0.04002 0.28493 -0.02194 -0.47209 0.83076 -0.2949 0.20233 0.14394 0.1207
-0.04775 0.28305 -0.0171 -0.55499 0.81058 -0.18695 0.24351 0.17389 0.14316
-0.04707 0.28271 0.01042 -0.50619 0.83985 0.19603 0.22828 0.16281 0.13485
-0.04832 0.2794 0.02048 -0.63335 0.77301 0.03647 0.20245 0.14403 0.12077
-0.05037 0.2783 0.02735 -0.67587 0.73468 0.0586 0.23073 0.1646 0.13619
-0.04998 0.27707 0.03373 -0.5867 0.75816 0.28456 0.2387 0.17039 0.14054
-0.03784 0.27459 0.05761 -0.41335 0.78561 0.46039 0.24036 0.1716 0.14144
-0.02657 0.27284 0.06672 -0.31593 0.77451 0.54801 0.19471 0.1384 0.11654
-0.01274 0.27461 0.07113 -0.0982 0.79009 0.60508 0.23784 0.16977 0.14007
0.00161 0.27351 0.07205 -0.0315 0.77285 0.63381 0.19958 0.14194 0.1192
0.01569 0.2755 0.0711 0.06953 0.78493 0.61568 0.23145 0.16512 0.13658
0.0288 0.27548 0.06705 0.25268 0.78504 0.56557 0.21178 0.15081 0.12585
0.04641 0.27911 0.0486 0.48262 0.75347 0.44651 0.23208 0.16558 0.13693
0.05028 0.27978 0.03735 0.65486 0.72416 0.21622 0.20373 0.14496 0.12146
0.05192 0.28479 0.02664 0.4881 0.76918 0.41246 0.23824 0.17006 0.14029
0.05078 0.28726 0.02096 0.5685 0.81952 0.07208 0.24477 0.17481 0.14385
0.0489 0.28747 0.01138 0.54834 0.81853 0.17125 0.20359 0.14486 0.12139
0.04945 0.29055 0.00346 0.5312 0.8306 0.16715 0.23619 0.16857 0.13917
0.04961 0.29078 -0.00854 0.54674 0.82912 -0.11675 0.22758 0.16231 0.13447
0.04954 0.28811 -0.01719 0.61246 0.7848 -0.09479 0.21882 0.15593 0.1297
0.04216 0.29292 -0.02355 0.39884 0.86194 -0.31303 0.24465 0.17472 0.14378
0.03352 0.29289 -0.02769 0.46168 0.87778 -0.12787 0.2084 0.14835 0.12401
0.03076 0.29547 -0.03039 0.51996 0.85401 -0.01764 0.24034 0.17158 0.14143
0.02713 0.29658 -0.03219 0.09976 0.91672 -0.38688 0.25248 0.18041 0.14805
0.01929 0.29417 -0.03395 0.254 0.91814 -0.30414 0.20674 0.14715 0.12311
-0.02494 0.29236 -0.01703 -0.2726 0.91809 -0.28775 0.20513 0.14598 0.12223
-0.03019 0.29177 -0.01687 -0.27619 0.87928 -0.38805 0.23361 0.16669 0.13776
-0.03336 0.29063 -0.00666 -0.35131 0.9349 0.05048 0.22016 0.15691 0.13043
-0.03339 0.28824 0.01122 -0.39585 0.91827 0.00934 0.20525 0.14607 0.1223
-0.03563 0.28541 0.03166 -0.42461 0.89001 0.1661 0.19742 0.14037 0.11802
-0.02932 0.28638 0.03891 -0.24676 0.91308 0.32464 0.24316 0.17364 0.14297
-0.02088 0.28521 0.04374 -0.28582 0.89305 0.34752 0.19751 0.14044 0.11807
-0.01189 0.28673 0.04787 -0.13494 0.89604 0.42298 0.24064 0.1718 0.1416
0.00762 0.28765 0.04929 0.01188 0.8898 0.4562 0.23425 0.16716 0.13811
0.025 0.28877 0.04253 0.18497 0.90073 0.39303 0.21997 0.15677 0.13032
0.03257 0.29036 0.03784 0.18984 0.90267 0.38619 0.23488 0.16761 0.13846
0.03739 0.2914 0.02531 0.30612 0.9028 0.30207 0.20995 0.14949 0.12486
0.03629 0.29487 0.01611 0.35036 0.93253 0.08741 0.24758 0.17685 0.14538
0.03443 0.295 0.00848 0.31867 0.92915 0.18745 0.2064 0.1469 0.12292
0.03455 0.2974 0.00257 0.29939 0.93129 0.20753 0.239 0.17061 0.1407
0.03522 0.29717 -0.01221 0.42157 0.90637 -0.0277 0.22162 0.15797 0.13122
0.03206 0.29857 -0.01771 0.28647 0.91562 -0.28211 0.24745 0.17676 0.14531
0.00335 0.30176 -0.01542 -0.16208 0.97776 -0.13313 0.21487 0.15306 0.12754
-0.00088 0.30081 -0.01591 -0.33294 0.94156 -0.05122 0.22126 0.15771 0.13102
-0.00654 0.29864 -0.01364 -0.39007 0.91261 0.12244 0.22063 0.15725 0.13068
-0.01259 0.2963 -0.01178 -0.21661 0.97081 -0.10297 0.20793 0.14802 0.12376
-0.01799 0.29579 -0.01132 -0.25604 0.96602 0.0354 0.24911 0.17797 0.14622
-0.01477 0.29336 0.00192 -0.28967 0.95704 -0.01261 0.20806 0.14811 0.12383
-0.01496 0.29292 0.01987 -0.14262 0.96811 0.20597 0.21479 0.153 0.1275
-0.01023 0.29392 0.03072 -0.18691 0.96016 0.20772 0.24345 0.17384 0.14313
0.00273 0.29497 0.03257 -0.06396 0.96708 0.24628 0.23706 0.1692 0.13964
0.01205 0.29578 0.03013 0.04498 0.97167 0.23204 0.22213 0.15834 0.1315
0.01584 0.29729 0.01922 0.0101 0.97249 0.23274 0.23769 0.16965 0.13999
0.0179 0.2981 0.01163 0.02042 0.96417 0.26452 0.21276 0.15152 0.12639
0.01585 0.30001 0.00237 0.08206 0.97787 0.19244 0.2092 0.14894 0.12445
0.01571 0.3015 -0.00058 0.03247 0.95486 0.29527 0.2418 0.17265 0.14223
0.01922 0.30267 -0.01179 0.11118 0.99374 0.01102 0.25026 0.1788 0.14684
0.01346 0.30242 -0.01249 0.14019 0.9888 0.05109 0.214 0.15243 0.12707
0.01037 0.30359 -0.0135 -0.01734 0.99934 -0.03204 0.25809 0.18449 0.15111
0.00769 0.30236 -0.01416 -0.00444 0.99441 -0.10549 0.21235 0.15123 0.12616
0.00662 0.30299 -0.01462 0.36244 0.91365 0.18405 0.24353 0.1739 0.14317
0 0.29861 -0.00556 -0.1699 0.97637 0.13357 0.22745 0.16471 0.13333
0.0307 0.1647 -0.08123 -0.02466 0 -0.9997 0.12549 0.09804 0.09412
0.03072 0.16479 -0.08123 -0.02382 0.00674 -0.99969 0.12549 0.09804 0.09412
0.03075 0.16488 -0.08123 -0.02136 0.01303 -0.99969 0.12549 0.09804 0.09412
0.03081 0.16495 -0.08123 -0.01744 0.01842 -0.99968 0.12549 0.09804 0.09412
0.03089 0.16501 -0.08123 -0.01233 0.02256 -0.99967 0.12549 0.09804 0.09412
0.03098 0.16505 -0.08123 -0.00638 0.02517 -0.99966 0.12549 0.09804 0.09412
0.03108 0.16506 -0.08123 -0 0.02605 -0.99966 0.12549 0.09804 0.09412
0.03118 0.16505 -0.08123 0.00638 0.02517 -0.99966 0.12549 0.09804 0.09412
0.03127 0.16501 -0.08123 0.01233 0.02256 -0.99967 0.12549 0.09804 0.09412
0.03135 0.16495 -0.08123 0.01744 0.01842 -0.99968 0.12549 0.09804 0.09412
0.03141 0.16488 -0.08123 0.02136 0.01303 -0.99969 0.12549 0.09804 0.09412
0.03145 0.16479 -0.08123 0.02382 0.00674 -0.99969 0.12549 0.09804 0.09412
0.03146 0.1647 -0.08123 0.02466 0 -0.9997 0.12549 0.09804 0.09412
0.03145 0.16461 -0.08123 0.02382 -0.00674 -0.99969 0.12549 0.09804 0.09412
0.03141 0.16452 -0.08123 0.02136 -0.01303 -0.99969 0.12549 0.09804 0.09412
0.03135 0.16445 -0.08123 0.01744 -0.01842 -0.99968 0.12549 0.09804 0.09412
0.03127 0.16439 -0.08123 0.01233 -0.02256 -0.99967 0.12549 0.09804 0.09412
0.03118 0.16435 -0.08123 0.00638 -0.02517 -0.99966 0.12549 0.09804 0.09412
0.03108 0.16434 -0.08123 0 -0.02605 -0.99966 0.12549 0.09804 0.09412
0.03098 0.16435 -0.08123 -0.00638 -0.02517 -0.99966 0.12549 0.09804 0.09412
0.03089 0.16439 -0.08123 -0.01233 -0.02256 -0.99967 0.12549 0.09804 0.09412
0.03081 0.16445 -0.08123 -0.01744 -0.01842 -0.99968 0.12549 0.09804 0.09412
0.03075 0.16452 -0.08123 -0.02136 -0.01303 -0.99969 0.12549 0.09804 0.09412
0.03072 0.16461 -0.08123 -0.02382 -0.00674 -0.99969 0.12549 0.09804 0.09412
0.02867 0.1647 -0.08105 -0.15725 0 -0.98756 0.12549 0.09804 0.09412
0.02875 0.16529 -0.08105 -0.15187 0.04299 -0.98746 0.12549 0.09804 0.09412
0.02899 0.16584 -0.08105 -0.13613 0.08302 -0.98721 0.12549 0.09804 0.09412
0.02938 0.16631 -0.08105 -0.11111 0.11737 -0.98685 0.12549 0.09804 0.09412
0.02988 0.16668 -0.08105 -0.07854 0.1437 -0.9865 0.12549 0.09804 0.09412
0.03046 0.16691 -0.08105 -0.04064 0.16023 -0.98624 0.12549 0.09804 0.09412
0.03108 0.16698 -0.08105 -0 0.16587 -0.98615 0.12549 0.09804 0.09412
0.03171 0.16691 -0.08105 0.04064 0.16023 -0.98624 0.12549 0.09804 0.09412
0.03229 0.16668 -0.08105 0.07854 0.1437 -0.9865 0.12549 0.09804 0.09412
0.03279 0.16631 -0.08105 0.11111 0.11737 -0.98685 0.12549 0.09804 0.09412
0.03317 0.16584 -0.08105 0.13613 0.08302 -0.98721 0.12549 0.09804 0.09412
0.03341 0.16529 -0.08105 0.15187 0.04299 -0.98746 0.12549 0.09804 0.09412
0.0335 0.1647 -0.08105 0.15725 0 -0.98756 0.12549 0.09804 0.09412
0.03341 0.16411 -0.08105 0.15187 -0.04299 -0.98746 0.12549 0.09804 0.09412
0.03317 0.16356 -0.08105 0.13613 -0.08302 -0.98721 0.12549 0.09804 0.09412
0.03279 0.16308 -0.08105 0.11111 -0.11737 -0.98685 0.12549 0.09804 0.09412
0.03229 0.16272 -0.08105 0.07854 -0.1437 -0.9865 0.12549 0.09804 0.09412
0.03171 0.16249 -0.08105 0.04064 -0.16023 -0.98624 0.12549 0.09804 0.09412
0.03108 0.16241 -0.08105 0 -0.16587 -0.98615 0.12549 0.09804 0.09412
0.03046 0.16249 -0.08105 -0.04064 -0.16023 -0.98624 0.12549 0.09804 0.09412
0.02988 0.16272 -0.08105 -0.07854 -0.1437 -0.9865 0.12549 0.09804 0.09412
0.02938 0.16308 -0.08105 -0.11111 -0.11737 -0.98685 0.12549 0.09804 0.09412
0.02899 0.16356 -0.08105 -0.13613 -0.08302 -0.98721 0.12549 0.09804 0.09412
0.02875 0.16411 -0.08105 -0.15187 -0.04299 -0.98746 0.12549 0.09804 0.09412
0.02843 0.1647 -0.08101 -0.17283 0 -0.98495 0.20784 0.1451 0.11373
0.02852 0.16535 -0.08101 -0.16692 0.04725 -0.98484 0.20784 0.1451 0.11373
0.02879 0.16595 -0.08101 -0.14961 0.09124 -0.98453 0.20784 0.1451 0.11373
0.02921 0.16647 -0.08101 -0.1221 0.12898 -0.9841 0.20784 0.1451 0.11373
0.02976 0.16687 -0.08101 -0.0863 0.1579 -0.98368 0.20784 0.1451 0.11373
0.0304 0.16712 -0.08101 -0.04466 0.17606 -0.98337 0.20784 0.1451 0.11373
0.03108 0.16721 -0.08101 -0 0.18225 -0.98325 0.20784 0.1451 0.11373
0.03177 0.16712 -0.08101 0.04466 0.17606 -0.98337 0.20784 0.1451 0.11373
0.03241 0.16687 -0.08101 0.0863 0.1579 -0.98368 0.20784 0.1451 0.11373
0.03296 0.16647 -0.08101 0.1221 0.12898 -0.9841 0.20784 0.1451 0.11373
0.03338 0.16595 -0.08101 0.14961 0.09124 -0.98453 0.20784 0.1451 0.11373
0.03365 0.16535 -0.08101 0.16692 0.04725 -0.98484 0.20784 0.1451 0.11373
0.03374 0.1647 -0.08101 0.17283 0 -0.98495 0.20784 0.1451 0.11373
0.03365 0.16405 -0.08101 0.16692 -0.04725 -0.98484 0.20784 0.1451 0.11373
0.03338 0.16344 -0.08101 0.14961 -0.09124 -0.98453 0.20784 0.1451 0.11373
0.03296 0.16292 -0.08101 0.1221 -0.12898 -0.9841 0.20784 0.1451 0.11373
0.03241 0.16252 -0.08101 0.0863 -0.1579 -0.98368 0.20784 0.1451 0.11373
0.03177 0.16227 -0.08101 0.04466 -0.17606 -0.98337 0.20784 0.1451 0.11373
0.03108 0.16219 -0.08101 0 -0.18225 -0.98325 0.20784 0.1451 0.11373
0.0304 0.16227 -0.08101 -0.04466 -0.17606 -0.98337 0.20784 0.1451 0.11373
0.02976 0.16252 -0.08101 -0.0863 -0.1579 -0.98368 0.20784 0.1451 0.11373
0.02921 0.16292 -0.08101 -0.1221 -0.12898 -0.9841 0.20784 0.1451 0.11373
0.02879 0.16344 -0.08101 -0.14961 -0.09124 -0.98453 0.20784 0.1451 0.11373
0.02852 0.16405 -0.08101 -0.16692 -0.04725 -0.98484 0.20784 0.1451 0.11373
0.02785 0.1647 -0.0809 -0.21063 0 -0.97757 0.42941 0.29216 0.17059
0.02796 0.16549 -0.0809 -0.20342 0.05758 -0.9774 0.42783 0.29057 0.169
0.02828 0.16623 -0.0809 -0.18229 0.11118 -0.97694 0.42745 0.2902 0.16863
0.0288 0.16686 -0.0809 -0.14875 0.15713 -0.97631 0.41545 0.27819 0.15662
0.02947 0.16735 -0.0809 -0.10511 0.19232 -0.97569 0.39622 0.25896 0.1374
0.03025 0.16765 -0.0809 -0.05438 0.2144 -0.97523 0.4306 0.29335 0.17178
0.03108 0.16776 -0.0809 -0 0.22193 -0.97506 0.43529 0.29804 0.17647
0.03192 0.16765 -0.0809 0.05438 0.2144 -0.97523 0.41674 0.27948 0.15791
0.0327 0.16735 -0.0809 0.10511 0.19232 -0.97569 0.41583 0.27857 0.157
0.03337 0.16686 -0.0809 0.14875 0.15713 -0.97631 0.40158 0.26433 0.14276
0.03388 0.16623 -0.0809 0.18229 0.11118 -0.97694 0.42745 0.2902 0.16863
0.0342 0.16549 -0.0809 0.20342 0.05758 -0.9774 0.44169 0.30444 0.18287
0.03431 0.1647 -0.0809 0.21063 0 -0.97757 0.4098 0.27255 0.15098
0.0342 0.16391 -0.0809 0.20342 -0.05758 -0.9774 0.41139 0.27413 0.15256
0.03388 0.16317 -0.0809 0.18229 -0.11118 -0.97694 0.41176 0.27451 0.15294
0.03337 0.16254 -0.0809 0.14875 -0.15713 -0.97631 0.42377 0.28651 0.16494
0.0327 0.16205 -0.0809 0.10511 -0.19232 -0.97569 0.443 0.30574 0.18417
0.03192 0.16174 -0.0809 0.05438 -0.2144 -0.97523 0.40862 0.27136 0.14979
0.03108 0.16164 -0.0809 0 -0.22193 -0.97506 0.40392 0.26667 0.1451
0.03025 0.16174 -0.0809 -0.05438 -0.2144 -0.97523 0.42248 0.28523 0.16366
0.02947 0.16205 -0.0809 -0.10511 -0.19232 -0.97569 0.42339 0.28613 0.16457
0.0288 0.16254 -0.0809 -0.14875 -0.15713 -0.97631 0.43763 0.30038 0.17881
0.02828 0.16317 -0.0809 -0.18229 -0.11118 -0.97694 0.41176 0.27451 0.15294
0.02796 0.16391 -0.0809 -0.20342 -0.05758 -0.9774 0.39752 0.26027 0.1387
0.02585 0.1647 -0.08032 -0.34165 0 -0.93983 0.46078 0.31176 0.18235
0.02602 0.16598 -0.08032 -0.32986 0.09336 -0.9394 0.4592 0.31018 0.18077
0.02655 0.16718 -0.08032 -0.29538 0.18014 -0.93824 0.45882 0.3098 0.18039
0.02738 0.16821 -0.08032 -0.24077 0.25433 -0.93667 0.44682 0.2978 0.16839
0.02846 0.16899 -0.08032 -0.16996 0.31097 -0.9351 0.42759 0.27857 0.14916
0.02973 0.16949 -0.08032 -0.08787 0.34642 -0.93396 0.46197 0.31295 0.18354
0.03108 0.16966 -0.08032 -0 0.35848 -0.93354 0.46667 0.31765 0.18824
0.03244 0.16949 -0.08032 0.08787 0.34642 -0.93396 0.44811 0.29909 0.16968
0.0337 0.16899 -0.08032 0.16996 0.31097 -0.9351 0.4472 0.29818 0.16877
0.03479 0.16821 -0.08032 0.24077 0.25433 -0.93667 0.43296 0.28394 0.15452
0.03562 0.16718 -0.08032 0.29538 0.18014 -0.93824 0.45882 0.3098 0.18039
0.03614 0.16598 -0.08032 0.32986 0.09336 -0.9394 0.47306 0.32404 0.19463
0.03632 0.1647 -0.08032 0.34165 0 -0.93983 0.44118 0.29216 0.16275
0.03614 0.16342 -0.08032 0.32986 -0.09336 -0.9394 0.44276 0.29374 0.16433
0.03562 0.16222 -0.08032 0.29538 -0.18014 -0.93824 0.44314 0.29412 0.16471
0.03479 0.16119 -0.08032 0.24077 -0.25433 -0.93667 0.45514 0.30612 0.17671
0.0337 0.16041 -0.08032 0.16996 -0.31097 -0.9351 0.47437 0.32535 0.19594
0.03244 0.15991 -0.08032 0.08787 -0.34642 -0.93396 0.43999 0.29097 0.16156
0.03108 0.15974 -0.08032 0 -0.35848 -0.93354 0.43529 0.28627 0.15686
0.02973 0.15991 -0.08032 -0.08787 -0.34642 -0.93396 0.45385 0.30483 0.17542
0.02846 0.16041 -0.08032 -0.16996 -0.31097 -0.9351 0.45476 0.30574 0.17633
0.02738 0.16119 -0.08032 -0.24077 -0.25433 -0.93667 0.469 0.31999 0.19057
0.02655 0.16222 -0.08032 -0.29538 -0.18014 -0.93824 0.44314 0.29412 0.16471
0.02602 0.16342 -0.08032 -0.32986 -0.09336 -0.9394 0.4289 0.27988 0.15046
0.02502 0.1647 -0.07999 -0.39595 0 -0.91827 0.32353 0.22549 0.1549
0.02522 0.16619 -0.07999 -0.38222 0.10819 -0.91772 0.32194 0.22391 0.15332
0.02583 0.16757 -0.07999 -0.34212 0.20865 -0.9162 0.32157 0.22353 0.15294
0.02679 0.16876 -0.07999 -0.27871 0.29442 -0.91413 0.30957 0.21153 0.14094
0.02805 0.16967 -0.07999 -0.19664 0.35977 -0.91208 0.29034 0.1923 0.12171
0.02951 0.17025 -0.07999 -0.10162 0.40062 -0.91059 0.32472 0.22668 0.15609
0.03108 0.17044 -0.07999 -0 0.4145 -0.91005 0.32941 0.23137 0.16078
0.03265 0.17025 -0.07999 0.10162 0.40062 -0.91059 0.31085 0.21281 0.14223
0.03412 0.16967 -0.07999 0.19664 0.35977 -0.91208 0.30994 0.21191 0.14132
0.03537 0.16876 -0.07999 0.27871 0.29442 -0.91413 0.2957 0.19766 0.12707
0.03634 0.16757 -0.07999 0.34212 0.20865 -0.9162 0.32157 0.22353 0.15294
0.03694 0.16619 -0.07999 0.38222 0.10819 -0.91772 0.33581 0.23777 0.16718
0.03715 0.1647 -0.07999 0.39595 0 -0.91827 0.30392 0.20588 0.13529
0.03694 0.16321 -0.07999 0.38222 -0.10819 -0.91772 0.30551 0.20747 0.13688
0.03634 0.16183 -0.07999 0.34212 -0.20865 -0.9162 0.30588 0.20784 0.13725
0.03537 0.16064 -0.07999 0.27871 -0.29442 -0.91413 0.31788 0.21985 0.14926
0.03412 0.15973 -0.07999 0.19664 -0.35977 -0.91208 0.33711 0.23907 0.16849
0.03265 0.15915 -0.07999 0.10162 -0.40062 -0.91059 0.30273 0.20469 0.13411
0.03108 0.15896 -0.07999 0 -0.4145 -0.91005 0.29804 0.2 0.12941
0.02951 0.15915 -0.07999 -0.10162 -0.40062 -0.91059 0.3166 0.21856 0.14797
0.02805 0.15973 -0.07999 -0.19664 -0.35977 -0.91208 0.31751 0.21947 0.14888
0.02679 0.16064 -0.07999 -0.27871 -0.29442 -0.91413 0.33175 0.23371 0.16312
0.02583 0.16183 -0.07999 -0.34212 -0.20865 -0.9162 0.30588 0.20784 0.13725
0.02522 0.16321 -0.07999 -0.38222 -0.10819 -0.91772 0.29164 0.1936 0.12301
0.02467 0.1647 -0.07983 -0.41857 0 -0.90818 0.20784 0.17255 0.1451
0.02489 0.16627 -0.07983 -0.40404 0.11436 -0.90757 0.20784 0.17255 0.1451
0.02553 0.16773 -0.07983 -0.36158 0.22052 -0.90589 0.20784 0.17255 0.1451
0.02655 0.16899 -0.07983 -0.29449 0.31108 -0.90361 0.20784 0.17255 0.1451
0.02788 0.16996 -0.07983 -0.20771 0.38004 -0.90135 0.20784 0.17255 0.1451
0.02942 0.17056 -0.07983 -0.10732 0.4231 -0.8997 0.20784 0.17255 0.1451
0.03108 0.17077 -0.07983 -0 0.43774 -0.8991 0.20784 0.17255 0.1451
0.03274 0.17056 -0.07983 0.10732 0.4231 -0.8997 0.20784 0.17255 0.1451
0.03429 0.16996 -0.07983 0.20771 0.38004 -0.90135 0.20784 0.17255 0.1451
0.03562 0.16899 -0.07983 0.29449 0.31108 -0.90361 0.20784 0.17255 0.1451
0.03664 0.16773 -0.07983 0.36158 0.22052 -0.90589 0.20784 0.17255 0.1451
0.03728 0.16627 -0.07983 0.40404 0.11436 -0.90757 0.20784 0.17255 0.1451
0.03749 0.1647 -0.07983 0.41857 0 -0.90818 0.20784 0.17255 0.1451
0.03728 0.16313 -0.07983 0.40404 -0.11436 -0.90757 0.20784 0.17255 0.1451
0.03664 0.16166 -0.07983 0.36158 -0.22052 -0.90589 0.20784 0.17255 0.1451
0.03562 0.16041 -0.07983 0.29449 -0.31108 -0.90361 0.20784 0.17255 0.1451
0.03429 0.15944 -0.07983 0.20771 -0.38004 -0.90135 0.20784 0.17255 0.1451
0.03274 0.15884 -0.07983 0.10732 -0.4231 -0.8997 0.20784 0.17255 0.1451
0.03108 0.15863 -0.07983 0 -0.43774 -0.8991 0.20784 0.17255 0.1451
0.02942 0.15884 -0.07983 -0.10732 -0.4231 -0.8997 0.20784 0.17255 0.1451
0.02788 0.15944 -0.07983 -0.20771 -0.38004 -0.90135 0.20784 0.17255 0.1451
0.02655 0.16041 -0.07983 -0.29449 -0.31108 -0.90361 0.20784 0.17255 0.1451
0.02553 0.16166 -0.07983 -0.36158 -0.22052 -0.90589 0.20784 0.17255 0.1451
0.02489 0.16313 -0.07983 -0.40404 -0.11436 -0.90757 0.20784 0.17255 0.1451
0.02429 0.1647 -0.07965 -0.44363 0 -0.89621 0.81569 0.77647 0.70196
0.02452 0.16636 -0.07965 -0.42818 0.1212 -0.89553 0.81569 0.77647 0.70196
0.0252 0.16791 -0.07965 -0.3831 0.23365 -0.89367 0.81569 0.77647 0.70196
0.02628 0.16925 -0.07965 -0.31192 0.32949 -0.89115 0.81569 0.77647 0.70196
0.02769 0.17027 -0.07965 -0.21994 0.40241 -0.88865 0.81569 0.77647 0.70196
0.02932 0.17091 -0.07965 -0.11362 0.44791 -0.88683 0.81569 0.77647 0.70196
0.03108 0.17113 -0.07965 -0 0.46337 -0.88617 0.81569 0.77647 0.70196
0.03284 0.17091 -0.07965 0.11362 0.44791 -0.88683 0.81569 0.77647 0.70196
0.03448 0.17027 -0.07965 0.21994 0.40241 -0.88865 0.81569 0.77647 0.70196
0.03589 0.16925 -0.07965 0.31192 0.32949 -0.89115 0.81569 0.77647 0.70196
0.03697 0.16791 -0.07965 0.3831 0.23365 -0.89367 0.81569 0.77647 0.70196
0.03764 0.16636 -0.07965 0.42818 0.1212 -0.89553 0.81569 0.77647 0.70196
0.03788 0.1647 -0.07965 0.44363 0 -0.89621 0.81569 0.77647 0.70196
0.03764 0.16303 -0.07965 0.42818 -0.1212 -0.89553 0.81569 0.77647 0.70196
0.03697 0.16148 -0.07965 0.3831 -0.23365 -0.89367 0.81569 0.77647 0.70196
0.03589 0.16015 -0.07965 0.31192 -0.32949 -0.89115 0.81569 0.77647 0.70196
0.03448 0.15913 -0.07965 0.21994 -0.40241 -0.88865 0.81569 0.77647 0.70196
0.03284 0.15849 -0.07965 0.11362 -0.44791 -0.88683 0.81569 0.77647 0.70196
0.03108 0.15827 -0.07965 0 -0.46337 -0.88617 0.81569 0.77647 0.70196
0.02932 0.15849 -0.07965 -0.11362 -0.44791 -0.88683 0.81569 0.77647 0.70196
0.02769 0.15913 -0.07965 -0.21994 -0.40241 -0.88865 0.81569 0.77647 0.70196
0.02628 0.16015 -0.07965 -0.31192 -0.32949 -0.89115 0.81569 0.77647 0.70196
0.0252 0.16148 -0.07965 -0.3831 -0.23365 -0.89367 0.81569 0.77647 0.70196
0.02452 0.16303 -0.07965 -0.42818 -0.1212 -0.89553 0.81569 0.77647 0.70196
0.02098 0.1647 -0.07743 -0.66189 0 -0.7496 0.87843 0.84314 0.78039
0.02132 0.16717 -0.07743 -0.63825 0.18065 -0.74833 0.87843 0.84314 0.78039
0.02233 0.16948 -0.07743 -0.56961 0.34739 -0.74489 0.87843 0.84314 0.78039
0.02394 0.17146 -0.07743 -0.4622 0.48824 -0.74027 0.87843 0.84314 0.78039
0.02603 0.17298 -0.07743 -0.32482 0.5943 -0.73573 0.87843 0.84314 0.78039
0.02847 0.17394 -0.07743 -0.16739 0.65991 -0.73246 0.87843 0.84314 0.78039
0.03108 0.17426 -0.07743 -0 0.68208 -0.73127 0.87843 0.84314 0.78039
0.0337 0.17394 -0.07743 0.16739 0.65991 -0.73246 0.87843 0.84314 0.78039
0.03613 0.17298 -0.07743 0.32482 0.5943 -0.73573 0.87843 0.84314 0.78039
0.03823 0.17146 -0.07743 0.4622 0.48824 -0.74027 0.87843 0.84314 0.78039
0.03983 0.16948 -0.07743 0.56961 0.34739 -0.74489 0.87843 0.84314 0.78039
0.04084 0.16717 -0.07743 0.63825 0.18065 -0.74833 0.87843 0.84314 0.78039
0.04119 0.1647 -0.07743 0.66189 0 -0.7496 0.87843 0.84314 0.78039
0.04084 0.16222 -0.07743 0.63825 -0.18065 -0.74833 0.87843 0.84314 0.78039
0.03983 0.15992 -0.07743 0.56961 -0.34739 -0.74489 0.87843 0.84314 0.78039
0.03823 0.15794 -0.07743 0.4622 -0.48824 -0.74027 0.87843 0.84314 0.78039
0.03613 0.15642 -0.07743 0.32482 -0.5943 -0.73573 0.87843 0.84314 0.78039
0.0337 0.15546 -0.07743 0.16739 -0.65991 -0.73246 0.87843 0.84314 0.78039
0.03108 0.15513 -0.07743 0 -0.68208 -0.73127 0.87843 0.84314 0.78039
0.02847 0.15546 -0.07743 -0.16739 -0.65991 -0.73246 0.87843 0.84314 0.78039
0.02603 0.15642 -0.07743 -0.32482 -0.5943 -0.73573 0.87843 0.84314 0.78039
0.02394 0.15794 -0.07743 -0.4622 -0.48824 -0.74027 0.87843 0.84314 0.78039
0.02233 0.15992 -0.07743 -0.56961 -0.34739 -0.74489 0.87843 0.84314 0.78039
0.02132 0.16222 -0.07743 -0.63825 -0.18065 -0.74833 0.87843 0.84314 0.78039
0.01745 0.1647 -0.0728 -0.89778 0 -0.44043 0.87843 0.83922 0.78039
0.01791 0.16804 -0.0728 -0.86449 0.24469 -0.43906 0.87843 0.83922 0.78039
0.01927 0.17115 -0.0728 -0.76859 0.46874 -0.43538 0.87843 0.83922 0.78039
0.02144 0.17383 -0.0728 -0.62051 0.65547 -0.4305 0.87843 0.83922 0.78039
0.02426 0.17588 -0.0728 -0.43395 0.79398 -0.42578 0.87843 0.83922 0.78039
0.02755 0.17717 -0.0728 -0.22286 0.87858 -0.42242 0.87843 0.83922 0.78039
0.03108 0.17761 -0.0728 -0 0.90696 -0.42121 0.87843 0.83922 0.78039
0.03461 0.17717 -0.0728 0.22286 0.87858 -0.42242 0.87843 0.83922 0.78039
0.0379 0.17588 -0.0728 0.43395 0.79398 -0.42578 0.87843 0.83922 0.78039
0.04073 0.17383 -0.0728 0.62051 0.65547 -0.4305 0.87843 0.83922 0.78039
0.04289 0.17115 -0.0728 0.76859 0.46874 -0.43538 0.87843 0.83922 0.78039
0.04425 0.16804 -0.0728 0.86449 0.24469 -0.43906 0.87843 0.83922 0.78039
0.04472 0.1647 -0.0728 0.89778 0 -0.44043 0.87843 0.83922 0.78039
0.04425 0.16136 -0.0728 0.86449 -0.24469 -0.43906 0.87843 0.83922 0.78039
0.04289 0.15824 -0.0728 0.76859 -0.46874 -0.43538 0.87843 0.83922 0.78039
0.04073 0.15557 -0.0728 0.62051 -0.65547 -0.4305 0.87843 0.83922 0.78039
0.0379 0.15352 -0.0728 0.43395 -0.79398 -0.42578 0.87843 0.83922 0.78039
0.03461 0.15223 -0.0728 0.22286 -0.87858 -0.42242 0.87843 0.83922 0.78039
0.03108 0.15179 -0.0728 0 -0.90696 -0.42121 0.87843 0.83922 0.78039
0.02755 0.15223 -0.0728 -0.22286 -0.87858 -0.42242 0.87843 0.83922 0.78039
0.02426 0.15352 -0.0728 -0.43395 -0.79398 -0.42578 0.87843 0.83922 0.78039
0.02144 0.15557 -0.0728 -0.62051 -0.65547 -0.4305 0.87843 0.83922 0.78039
0.01927 0.15824 -0.0728 -0.76859 -0.46874 -0.43538 0.87843 0.83922 0.78039
0.01791 0.16136 -0.0728 -0.86449 -0.24469 -0.43906 0.87843 0.83922 0.78039
0.01598 0.1647 -0.06511 -0.99678 0 0.08018 0.82745 0.76863 0.69804
0.01649 0.1684 -0.06511 -0.95913 0.27148 0.07988 0.82745 0.76863 0.69804
0.018 0.17185 -0.06511 -0.85108 0.51905 0.07905 0.82745 0.76863 0.69804
0.0204 0.17481 -0.06511 -0.68538 0.724 0.07797 0.82745 0.76863 0.69804
0.02353 0.17708 -0.06511 -0.47818 0.87489 0.07693 0.82745 0.76863 0.69804
0.02717 0.17851 -0.06511 -0.24516 0.96648 0.0762 0.82745 0.76863 0.69804
0.03108 0.179 -0.06511 -0 0.99711 0.07593 0.82745 0.76863 0.69804
0.03499 0.17851 -0.06511 0.24516 0.96648 0.0762 0.82745 0.76863 0.69804
0.03863 0.17708 -0.06511 0.47818 0.87489 0.07693 0.82745 0.76863 0.69804
0.04176 0.17481 -0.06511 0.68538 0.724 0.07797 0.82745 0.76863 0.69804
0.04416 0.17185 -0.06511 0.85108 0.51905 0.07905 0.82745 0.76863 0.69804
0.04567 0.1684 -0.06511 0.95913 0.27148 0.07988 0.82745 0.76863 0.69804
0.04619 0.1647 -0.06511 0.99678 0 0.08018 0.82745 0.76863 0.69804
0.04567 0.161 -0.06511 0.95913 -0.27148 0.07988 0.82745 0.76863 0.69804
0.04416 0.15755 -0.06511 0.85108 -0.51905 0.07905 0.82745 0.76863 0.69804
0.04176 0.15459 -0.06511 0.68538 -0.724 0.07797 0.82745 0.76863 0.69804
0.03863 0.15232 -0.06511 0.47818 -0.87489 0.07693 0.82745 0.76863 0.69804
0.03499 0.15089 -0.06511 0.24516 -0.96648 0.0762 0.82745 0.76863 0.69804
0.03108 0.1504 -0.06511 0 -0.99711 0.07593 0.82745 0.76863 0.69804
0.02717 0.15089 -0.06511 -0.24516 -0.96648 0.0762 0.82745 0.76863 0.69804
0.02353 0.15232 -0.06511 -0.47818 -0.87489 0.07693 0.82745 0.76863 0.69804
0.0204 0.15459 -0.06511 -0.68538 -0.724 0.07797 0.82745 0.76863 0.69804
0.018 0.15755 -0.06511 -0.85108 -0.51905 0.07905 0.82745 0.76863 0.69804
0.01649 0.161 -0.06511 -0.95913 -0.27148 0.07988 0.82745 0.76863 0.69804
0.01866 0.1647 -0.05774 -0.81647 0 0.57738 0.72549 0.61176 0.53725
0.01908 0.16774 -0.05774 -0.78662 0.22265 0.57589 0.72549 0.61176 0.53725
0.02032 0.17058 -0.05774 -0.70036 0.42713 0.57189 0.72549 0.61176 0.53725
0.0223 0.17302 -0.05774 -0.5665 0.59842 0.56655 0.72549 0.61176 0.53725
0.02487 0.17489 -0.05774 -0.3969 0.72619 0.56135 0.72549 0.61176 0.53725
0.02787 0.17606 -0.05774 -0.20409 0.8046 0.55764 0.72549 0.61176 0.53725
0.03108 0.17646 -0.05774 -0 0.83098 0.5563 0.72549 0.61176 0.53725
0.0343 0.17606 -0.05774 0.20409 0.8046 0.55764 0.72549 0.61176 0.53725
0.0373 0.17489 -0.05774 0.3969 0.72619 0.56135 0.72549 0.61176 0.53725
0.03987 0.17302 -0.05774 0.5665 0.59842 0.56655 0.72549 0.61176 0.53725
0.04184 0.17058 -0.05774 0.70036 0.42713 0.57189 0.72549 0.61176 0.53725
0.04308 0.16774 -0.05774 0.78662 0.22265 0.57589 0.72549 0.61176 0.53725
0.04351 0.1647 -0.05774 0.81647 0 0.57738 0.72549 0.61176 0.53725
0.04308 0.16165 -0.05774 0.78662 -0.22265 0.57589 0.72549 0.61176 0.53725
0.04184 0.15882 -0.05774 0.70036 -0.42713 0.57189 0.72549 0.61176 0.53725
0.03987 0.15638 -0.05774 0.5665 -0.59842 0.56655 0.72549 0.61176 0.53725
0.0373 0.15451 -0.05774 0.3969 -0.72619 0.56135 0.72549 0.61176 0.53725
0.0343 0.15334 -0.05774 0.20409 -0.8046 0.55764 0.72549 0.61176 0.53725
0.03108 0.15294 -0.05774 0 -0.83098 0.5563 0.72549 0.61176 0.53725
0.02787 0.15334 -0.05774 -0.20409 -0.8046 0.55764 0.72549 0.61176 0.53725
0.02487 0.15451 -0.05774 -0.3969 -0.72619 0.56135 0.72549 0.61176 0.53725
0.0223 0.15638 -0.05774 -0.5665 -0.59842 0.56655 0.72549 0.61176 0.53725
0.02032 0.15882 -0.05774 -0.70036 -0.42713 0.57189 0.72549 0.61176 0.53725
0.01908 0.16165 -0.05774 -0.78662 -0.22265 0.57589 0.72549 0.61176 0.53725
0.03108 0.1647 -0.08124 0 0 -1 0.12549 0.09804 0.09412
0.0329 0.16763 -0.08089 0 0 -1 0.93333 0.88627 0.80392
0.03204 0.16763 -0.08097 0 0 -1 0.93333 0.88627 0.80392
0.03224 0.16818 -0.08083 0 0 -1 0.93333 0.88627 0.80392
0.03275 0.16847 -0.0807 0 0 -1 0.93333 0.88627 0.80392
0.03333 0.16837 -0.08065 0 0 -1 0.93333 0.88627 0.80392
0.03371 0.16792 -0.08071 0 0 -1 0.93333 0.88627 0.80392
0.03371 0.16733 -0.08084 0 0 -1 0.93333 0.88627 0.80392
0.03333 0.16688 -0.08098 0 0 -1 0.93333 0.88627 0.80392
0.03275 0.16678 -0.08107 0 0 -1 0.93333 0.88627 0.80392
0.03224 0.16708 -0.08107 0 0 -1 0.93333 0.88627 0.80392
-0.03146 0.1647 -0.08123 -0.02466 0 -0.9997 0.12549 0.09804 0.09412
-0.03145 0.16479 -0.08123 -0.02382 0.00674 -0.99969 0.12549 0.09804 0.09412
-0.03141 0.16488 -0.08123 -0.02136 0.01303 -0.99969 0.12549 0.09804 0.09412
-0.03135 0.16495 -0.08123 -0.01744 0.01842 -0.99968 0.12549 0.09804 0.09412
-0.03127 0.16501 -0.08123 -0.01233 0.02256 -0.99967 0.12549 0.09804 0.09412
-0.03118 0.16505 -0.08123 -0.00638 0.02517 -0.99966 0.12549 0.09804 0.09412
-0.03108 0.16506 -0.08123 -0 0.02605 -0.99966 0.12549 0.09804 0.09412
-0.03098 0.16505 -0.08123 0.00638 0.02517 -0.99966 0.12549 0.09804 0.09412
-0.03089 0.16501 -0.08123 0.01233 0.02256 -0.99967 0.12549 0.09804 0.09412
-0.03081 0.16495 -0.08123 0.01744 0.01842 -0.99968 0.12549 0.09804 0.09412
-0.03075 0.16488 -0.08123 0.02136 0.01303 -0.99969 0.12549 0.09804 0.09412
-0.03072 0.16479 -0.08123 0.02382 0.00674 -0.99969 0.12549 0.09804 0.09412
-0.0307 0.1647 -0.08123 0.02466 0 -0.9997 0.12549 0.09804 0.09412
-0.03072 0.16461 -0.08123 0.02382 -0.00674 -0.99969 0.12549 0.09804 0.09412
-0.03075 0.16452 -0.08123 0.02136 -0.01303 -0.99969 0.12549 0.09804 0.09412
-0.03081 0.16445 -0.08123 0.01744 -0.01842 -0.99968 0.12549 0.09804 0.09412
-0.03089 0.16439 -0.08123 0.01233 -0.02256 -0.99967 0.12549 0.09804 0.09412
-0.03098 0.16435 -0.08123 0.00638 -0.02517 -0.99966 0.12549 0.09804 0.09412
-0.03108 0.16434 -0.08123 0 -0.02605 -0.99966 0.12549 0.09804 0.09412
-0.03118 0.16435 -0.08123 -0.00638 -0.02517 -0.99966 0.12549 0.09804 0.09412
-0.03127 0.16439 -0.08123 -0.01233 -0.02256 -0.99967 0.12549 0.09804 0.09412
-0.03135 0.16445 -0.08123 -0.01744 -0.01842 -0.99968 0.12549 0.09804 0.09412
-0.03141 0.16452 -0.08123 -0.02136 -0.01303 -0.99969 0.12549 0.09804 0.09412
-0.03145 0.16461 -0.08123 -0.02382 -0.00674 -0.99969 0.12549 0.09804 0.09412
-0.0335 0.1647 -0.08105 -0.15725 0 -0.98756 0.12549 0.09804 0.09412
-0.03341 0.16529 -0.08105 -0.15187 0.04299 -0.98746 0.12549 0.09804 0.09412
-0.03317 0.16584 -0.08105 -0.13613 0.08302 -0.98721 0.12549 0.09804 0.09412
-0.03279 0.16631 -0.08105 -0.11111 0.11737 -0.98685 0.12549 0.09804 0.09412
-0.03229 0.16668 -0.08105 -0.07854 0.1437 -0.9865 0.12549 0.09804 0.09412
-0.03171 0.16691 -0.08105 -0.04064 0.16023 -0.98624 0.12549 0.09804 0.09412
-0.03108 0.16698 -0.08105 -0 0.16587 -0.98615 0.12549 0.09804 0.09412
-0.03046 0.16691 -0.08105 0.04064 0.16023 -0.98624 0.12549 0.09804 0.09412
-0.02988 0.16668 -0.08105 0.07854 0.1437 -0.9865 0.12549 0.09804 0.09412
-0.02938 0.16631 -0.08105 0.11111 0.11737 -0.98685 0.12549 0.09804 0.09412
-0.02899 0.16584 -0.08105 0.13613 0.08302 -0.98721 0.12549 0.09804 0.09412
-0.02875 0.16529 -0.08105 0.15187 0.04299 -0.98746 0.12549 0.09804 0.09412
-0.02867 0.1647 -0.08105 0.15725 0 -0.98756 0.12549 0.09804 0.09412
-0.02875 0.16411 -0.08105 0.15187 -0.04299 -0.98746 0.12549 0.09804 0.09412
-0.02899 0.16356 -0.08105 0.13613 -0.08302 -0.98721 0.12549 0.09804 0.09412
-0.02938 0.16308 -0.08105 0.11111 -0.11737 -0.98685 0.12549 0.09804 0.09412
-0.02988 0.16272 -0.08105 0.07854 -0.1437 -0.9865 0.12549 0.09804 0.09412
-0.03046 0.16249 -0.08105 0.04064 -0.16023 -0.98624 0.12549 0.09804 0.09412
-0.03108 0.16241 -0.08105 0 -0.16587 -0.98615 0.12549 0.09804 0.09412
-0.03171 0.16249 -0.08105 -0.04064 -0.16023 -0.98624 0.12549 0.09804 0.09412
-0.03229 0.16272 -0.08105 -0.07854 -0.1437 -0.9865 0.12549 0.09804 0.09412
-0.03279 0.16308 -0.08105 -0.11111 -0.11737 -0.98685 0.12549 0.09804 0.09412
-0.03317 0.16356 -0.08105 -0.13613 -0.08302 -0.98721 0.12549 0.09804 0.09412
-0.03341 0.16411 -0.08105 -0.15187 -0.04299 -0.98746 0.12549 0.09804 0.09412
-0.03374 0.1647 -0.08101 -0.17283 0 -0.98495 0.20784 0.1451 0.11373
-0.03365 0.16535 -0.08101 -0.16692 0.04725 -0.98484 0.20784 0.1451 0.11373
-0.03338 0.16595 -0.08101 -0.14961 0.09124 -0.98453 0.20784 0.1451 0.11373
-0.03296 0.16647 -0.08101 -0.1221 0.12898 -0.9841 0.20784 0.1451 0.11373
-0.03241 0.16687 -0.08101 -0.0863 0.1579 -0.98368 0.20784 0.1451 0.11373
-0.03177 0.16712 -0.08101 -0.04466 0.17606 -0.98337 0.20784 0.1451 0.11373
-0.03108 0.16721 -0.08101 -0 0.18225 -0.98325 0.20784 0.1451 0.11373
-0.0304 0.16712 -0.08101 0.04466 0.17606 -0.98337 0.20784 0.1451 0.11373
-0.02976 0.16687 -0.08101 0.0863 0.1579 -0.98368 0.20784 0.1451 0.11373
-0.02921 0.16647 -0.08101 0.1221 0.12898 -0.9841 0.20784 0.1451 0.11373
-0.02879 0.16595 -0.08101 0.14961 0.09124 -0.98453 0.20784 0.1451 0.11373
-0.02852 0.16535 -0.08101 0.16692 0.04725 -0.98484 0.20784 0.1451 0.11373
-0.02843 0.1647 -0.08101 0.17283 0 -0.98495 0.20784 0.1451 0.11373
-0.02852 0.16405 -0.08101 0.16692 -0.04725 -0.98484 0.20784 0.1451 0.11373
-0.02879 0.16344 -0.08101 0.14961 -0.09124 -0.98453 0.20784 0.1451 0.11373
-0.02921 0.16292 -0.08101 0.1221 -0.12898 -0.9841 0.20784 0.1451 0.11373
-0.02976 0.16252 -0.08101 0.0863 -0.1579 -0.98368 0.20784 0.1451 0.11373
-0.0304 0.16227 -0.08101 0.04466 -0.17606 -0.98337 0.20784 0.1451 0.11373
-0.03108 0.16219 -0.08101 0 -0.18225 -0.98325 0.20784 0.1451 0.11373
-0.03177 0.16227 -0.08101 -0.04466 -0.17606 -0.98337 0.20784 0.1451 0.11373
-0.03241 0.16252 -0.08101 -0.0863 -0.1579 -0.98368 0.20784 0.1451 0.11373
-0.03296 0.16292 -0.08101 -0.1221 -0.12898 -0.9841 0.20784 0.1451 0.11373
-0.03338 0.16344 -0.08101 -0.14961 -0.09124 -0.98453 0.20784 0.1451 0.11373
-0.03365 0.16405 -0.08101 -0.16692 -0.04725 -0.98484 0.20784 0.1451 0.11373
-0.03431 0.1647 -0.0809 -0.21063 0 -0.97757 0.42941 0.29216 0.17059
-0.0342 0.16549 -0.0809 -0.20342 0.05758 -0.9774 0.42783 0.29057 0.169
-0.03388 0.16623 -0.0809 -0.18229 0.11118 -0.97694 0.42745 0.2902 0.16863
-0.03337 0.16686 -0.0809 -0.14875 0.15713 -0.97631 0.41545 0.27819 0.15662
-0.0327 0.16735 -0.0809 -0.10511 0.19232 -0.97569 0.39622 0.25896 0.1374
-0.03192 0.16765 -0.0809 -0.05438 0.2144 -0.97523 0.4306 0.29335 0.17178
-0.03108 0.16776 -0.0809 -0 0.22193 -0.97506 0.43529 0.29804 0.17647
-0.03025 0.16765 -0.0809 0.05438 0.2144 -0.97523 0.41674 0.27948 0.15791
-0.02947 0.16735 -0.0809 0.10511 0.19232 -0.97569 0.41583 0.27857 0.157
-0.0288 0.16686 -0.0809 0.14875 0.15713 -0.97631 0.40158 0.26433 0.14276
-0.02828 0.16623 -0.0809 0.18229 0.11118 -0.97694 0.42745 0.2902 0.16863
-0.02796 0.16549 -0.0809 0.20342 0.05758 -0.9774 0.44169 0.30444 0.18287
-0.02785 0.1647 -0.0809 0.21063 0 -0.97757 0.4098 0.27255 0.15098
-0.02796 0.16391 -0.0809 0.20342 -0.05758 -0.9774 0.41139 0.27413 0.15256
-0.02828 0.16317 -0.0809 0.18229 -0.11118 -0.97694 0.41176 0.27451 0.15294
-0.0288 0.16254 -0.0809 0.14875 -0.15713 -0.97631 0.42377 0.28651 0.16494
-0.02947 0.16205 -0.0809 0.10511 -0.19232 -0.97569 0.443 0.30574 0.18417
-0.03025 0.16174 -0.0809 0.05438 -0.2144 -0.97523 0.40862 0.27136 0.14979
-0.03108 0.16164 -0.0809 0 -0.22193 -0.97506 0.40392 0.26667 0.1451
-0.03192 0.16174 -0.0809 -0.05438 -0.2144 -0.97523 0.42248 0.28523 0.16366
-0.0327 0.16205 -0.0809 -0.10511 -0.19232 -0.97569 0.42339 0.28613 0.16457
-0.03337 0.16254 -0.0809 -0.14875 -0.15713 -0.97631 0.43763 0.30038 0.17881
-0.03388 0.16317 -0.0809 -0.18229 -0.11118 -0.97694 0.41176 0.27451 0.15294
-0.0342 0.16391 -0.0809 -0.20342 -0.05758 -0.9774 0.39752 0.26027 0.1387
-0.03632 0.1647 -0.08032 -0.34165 0 -0.93983 0.46078 0.31176 0.18235
-0.03614 0.16598 -0.08032 -0.32986 0.09336 -0.9394 0.4592 0.31018 0.18077
-0.03562 0.16718 -0.08032 -0.29538 0.18014 -0.93824 0.45882 0.3098 0.18039
-0.03479 0.16821 -0.08032 -0.24077 0.25433 -0.93667 0.44682 0.2978 0.16839
-0.0337 0.16899 -0.08032 -0.16996 0.31097 -0.9351 0.42759 0.27857 0.14916
-0.03244 0.16949 -0.08032 -0.08787 0.34642 -0.93396 0.46197 0.31295 0.18354
-0.03108 0.16966 -0.08032 -0 0.35848 -0.93354 0.46667 0.31765 0.18824
-0.02973 0.16949 -0.08032 0.08787 0.34642 -0.93396 0.44811 0.29909 0.16968
-0.02846 0.16899 -0.08032 0.16996 0.31097 -0.9351 0.4472 0.29818 0.16877
-0.02738 0.16821 -0.08032 0.24077 0.25433 -0.93667 0.43296 0.28394 0.15452
-0.02655 0.16718 -0.08032 0.29538 0.18014 -0.93824 0.45882 0.3098 0.18039
-0.02602 0.16598 -0.08032 0.32986 0.09336 -0.9394 0.47306 0.32404 0.19463
-0.02585 0.1647 -0.08032 0.34165 0 -0.93983 0.44118 0.29216 0.16275
-0.02602 0.16342 -0.08032 0.32986 -0.09336 -0.9394 0.44276 0.29374 0.16433
-0.02655 0.16222 -0.08032 0.29538 -0.18014 -0.93824 0.44314 0.29412 0.16471
-0.02738 0.16119 -0.08032 0.24077 -0.25433 -0.93667 0.45514 0.30612 0.17671
-0.02846 0.16041 -0.08032 0.16996 -0.31097 -0.9351 0.47437 0.32535 0.19594
-0.02973 0.15991 -0.08032 0.08787 -0.34642 -0.93396 0.43999 0.29097 0.16156
-0.03108 0.15974 -0.08032 0 -0.35848 -0.93354 0.43529 0.28627 0.15686
-0.03244 0.15991 -0.08032 -0.08787 -0.34642 -0.93396 0.45385 0.30483 0.17542
-0.0337 0.16041 -0.08032 -0.16996 -0.31097 -0.9351 0.45476 0.30574 0.17633
-0.03479 0.16119 -0.08032 -0.24077 -0.25433 -0.93667 0.469 0.31999 0.19057
-0.03562 0.16222 -0.08032 -0.29538 -0.18014 -0.93824 0.44314 0.29412 0.16471
-0.03614 0.16342 -0.08032 -0.32986 -0.09336 -0.9394 0.4289 0.27988 0.15046
-0.03715 0.1647 -0.07999 -0.39595 0 -0.91827 0.32353 0.22549 0.1549
-0.03694 0.16619 -0.07999 -0.38222 0.10819 -0.91772 0.32194 0.22391 0.15332
-0.03634 0.16757 -0.07999 -0.34212 0.20865 -0.9162 0.32157 0.22353 0.15294
-0.03537 0.16876 -0.07999 -0.27871 0.29442 -0.91413 0.30957 0.21153 0.14094
-0.03412 0.16967 -0.07999 -0.19664 0.35977 -0.91208 0.29034 0.1923 0.12171
-0.03265 0.17025 -0.07999 -0.10162 0.40062 -0.91059 0.32472 0.22668 0.15609
-0.03108 0.17044 -0.07999 -0 0.4145 -0.91005 0.32941 0.23137 0.16078
-0.02951 0.17025 -0.07999 0.10162 0.40062 -0.91059 0.31085 0.21281 0.14223
-0.02805 0.16967 -0.07999 0.19664 0.35977 -0.91208 0.30994 0.21191 0.14132
-0.02679 0.16876 -0.07999 0.27871 0.29442 -0.91413 0.2957 0.19766 0.12707
-0.02583 0.16757 -0.07999 0.34212 0.20865 -0.9162 0.32157 0.22353 0.15294
-0.02522 0.16619 -0.07999 0.38222 0.10819 -0.91772 0.33581 0.23777 0.16718
-0.02502 0.1647 -0.07999 0.39595 0 -0.91827 0.30392 0.20588 0.13529
-0.02522 0.16321 -0.07999 0.38222 -0.10819 -0.91772 0.30551 0.20747 0.13688
-0.02583 0.16183 -0.07999 0.34212 -0.20865 -0.9162 0.30588 0.20784 0.13725
-0.02679 0.16064 -0.07999 0.27871 -0.29442 -0.91413 0.31788 0.21985 0.14926
-0.02805 0.15973 -0.07999 0.19664 -0.35977 -0.91208 0.33711 0.23907 0.16849
-0.02951 0.15915 -0.07999 0.10162 -0.40062 -0.91059 0.30273 0.20469 0.13411
-0.03108 0.15896 -0.07999 0 -0.4145 -0.91005 0.29804 0.2 0.12941
-0.03265 0.15915 -0.07999 -0.10162 -0.40062 -0.91059 0.3166 0.21856 0.14797
-0.03412 0.15973 -0.07999 -0.19664 -0.35977 -0.91208 0.31751 0.21947 0.14888
-0.03537 0.16064 -0.07999 -0.27871 -0.29442 -0.91413 0.33175 0.23371 0.16312
-0.03634 0.16183 -0.07999 -0.34212 -0.20865 -0.9162 0.30588 0.20784 0.13725
-0.03694 0.16321 -0.07999 -0.38222 -0.10819 -0.91772 0.29164 0.1936 0.12301
-0.03749 0.1647 -0.07983 -0.41857 0 -0.90818 0.20784 0.17255 0.1451
-0.03728 0.16627 -0.07983 -0.40404 0.11436 -0.90757 0.20784 0.17255 0.1451
-0.03664 0.16773 -0.07983 -0.36158 0.22052 -0.90589 0.20784 0.17255 0.1451
-0.03562 0.16899 -0.07983 -0.29449 0.31108 -0.90361 0.20784 0.17255 0.1451
-0.03429 0.16996 -0.07983 -0.20771 0.38004 -0.90135 0.20784 0.17255 0.1451
-0.03274 0.17056 -0.07983 -0.10732 0.4231 -0.8997 0.20784 0.17255 0.1451
-0.03108 0.17077 -0.07983 -0 0.43774 -0.8991 0.20784 0.17255 0.1451
-0.02942 0.17056 -0.07983 0.10732 0.4231 -0.8997 0.20784 0.17255 0.1451
-0.02788 0.16996 -0.07983 0.20771 0.38004 -0.90135 0.20784 0.17255 0.1451
-0.02655 0.16899 -0.07983 0.29449 0.31108 -0.90361 0.20784 0.17255 0.1451
-0.02553 0.16773 -0.07983 0.36158 0.22052 -0.90589 0.20784 0.17255 0.1451
-0.02489 0.16627 -0.07983 0.40404 0.11436 -0.90757 0.20784 0.17255 0.1451
-0.02467 0.1647 -0.07983 0.41857 0 -0.90818 0.20784 0.17255 0.1451
-0.02489 0.16313 -0.07983 0.40404 -0.11436 -0.90757 0.20784 0.17255 0.1451
-0.02553 0.16166 -0.07983 0.36158 -0.22052 -0.90589 0.20784 0.17255 0.1451
-0.02655 0.16041 -0.07983 0.29449 -0.31108 -0.90361 0.20784 0.17255 0.1451
-0.02788 0.15944 -0.07983 0.20771 -0.38004 -0.90135 0.20784 0.17255 0.1451
-0.02942 0.15884 -0.07983 0.10732 -0.4231 -0.8997 0.20784 0.17255 0.1451
-0.03108 0.15863 -0.07983 0 -0.43774 -0.8991 0.20784 0.17255 0.1451
-0.03274 0.15884 -0.07983 -0.10732 -0.4231 -0.8997 0.20784 0.17255 0.1451
-0.03429 0.15944 -0.07983 -0.20771 -0.38004 -0.90135 0.20784 0.17255 0.1451
-0.03562 0.16041 -0.07983 -0.29449 -0.31108 -0.90361 0.20784 0.17255 0.1451
-0.03664 0.16166 -0.07983 -0.36158 -0.22052 -0.90589 0.20784 0.17255 0.1451
-0.03728 0.16313 -0.07983 -0.40404 -0.11436 -0.90757 0.20784 0.17255 0.1451
-0.03788 0.1647 -0.07965 -0.44363 0 -0.89621 0.81569 0.77647 0.70196
-0.03764 0.16636 -0.07965 -0.42818 0.1212 -0.89553 0.81569 0.77647 0.70196
-0.03697 0.16791 -0.07965 -0.3831 0.23365 -0.89367 0.81569 0.77647 0.70196
-0.03589 0.16925 -0.07965 -0.31192 0.32949 -0.89115 0.81569 0.77647 0.70196
-0.03448 0.17027 -0.07965 -0.21994 0.40241 -0.88865 0.81569 0.77647 0.70196
-0.03284 0.17091 -0.07965 -0.11362 0.44791 -0.88683 0.81569 0.77647 0.70196
-0.03108 0.17113 -0.07965 -0 0.46337 -0.88617 0.81569 0.77647 0.70196
-0.02932 0.17091 -0.07965 0.11362 0.44791 -0.88683 0.81569 0.77647 0.70196
-0.02769 0.17027 -0.07965 0.21994 0.40241 -0.88865 0.81569 0.77647 0.70196
-0.02628 0.16925 -0.07965 0.31192 0.32949 -0.89115 0.81569 0.77647 0.70196
-0.0252 0.16791 -0.07965 0.3831 0.23365 -0.89367 0.81569 0.77647 0.70196
-0.02452 0.16636 -0.07965 0.42818 0.1212 -0.89553 0.81569 0.77647 0.70196
-0.02429 0.1647 -0.07965 0.44363 0 -0.89621 0.81569 0.77647 0.70196
-0.02452 0.16303 -0.07965 0.42818 -0.1212 -0.89553 0.81569 0.77647 0.70196
-0.0252 0.16148 -0.07965 0.3831 -0.23365 -0.89367 0.81569 0.77647 0.70196
-0.02628 0.16015 -0.07965 0.31192 -0.32949 -0.89115 0.81569 0.77647 0.70196
-0.02769 0.15913 -0.07965 0.21994 -0.40241 -0.88865 0.81569 0.77647 0.70196
-0.02932 0.15849 -0.07965 0.11362 -0.44791 -0.88683 0.81569 0.77647 0.70196
-0.03108 0.15827 -0.07965 0 -0.46337 -0.88617 0.81569 0.77647 0.70196
-0.03284 0.15849 -0.07965 -0.11362 -0.44791 -0.88683 0.81569 0.77647 0.70196
-0.03448 0.15913 -0.07965 -0.21994 -0.40241 -0.88865 0.81569 0.77647 0.70196
-0.03589 0.16015 -0.07965 -0.31192 -0.32949 -0.89115 0.81569 0.77647 0.70196
-0.03697 0.16148 -0.07965 -0.3831 -0.23365 -0.89367 0.81569 0.77647 0.70196
-0.03764 0.16303 -0.07965 -0.42818 -0.1212 -0.89553 0.81569 0.77647 0.70196
-0.04119 0.1647 -0.07743 -0.66189 0 -0.7496 0.87843 0.84314 0.78039
-0.04084 0.16717 -0.07743 -0.63825 0.18065 -0.74833 0.87843 0.84314 0.78039
-0.03983 0.16948 -0.07743 -0.56961 0.34739 -0.74489 0.87843 0.84314 0.78039
-0.03823 0.17146 -0.07743 -0.4622 0.48824 -0.74027 0.87843 0.84314 0.78039
-0.03613 0.17298 -0.07743 -0.32482 0.5943 -0.73573 0.87843 0.84314 0.78039
-0.0337 0.17394 -0.07743 -0.16739 0.65991 -0.73246 0.87843 0.84314 0.78039
-0.03108 0.17426 -0.07743 -0 0.68208 -0.73127 0.87843 0.84314 0.78039
-0.02847 0.17394 -0.07743 0.16739 0.65991 -0.73246 0.87843 0.84314 0.78039
-0.02603 0.17298 -0.07743 0.32482 0.5943 -0.73573 0.87843 0.84314 0.78039
-0.02394 0.17146 -0.07743 0.4622 0.48824 -0.74027 0.87843 0.84314 0.78039
-0.02233 0.16948 -0.07743 0.56961 0.34739 -0.74489 0.87843 0.84314 0.78039
-0.02132 0.16717 -0.07743 0.63825 0.18065 -0.74833 0.87843 0.84314 0.78039
-0.02098 0.1647 -0.07743 0.66189 0 -0.7496 0.87843 0.84314 0.78039
-0.02132 0.16222 -0.07743 0.63825 -0.18065 -0.74833 0.87843 0.84314 0.78039
-0.02233 0.15992 -0.07743 0.56961 -0.34739 -0.74489 0.87843 0.84314 0.78039
-0.02394 0.15794 -0.07743 0.4622 -0.48824 -0.74027 0.87843 0.84314 0.78039
-0.02603 0.15642 -0.07743 0.32482 -0.5943 -0.73573 0.87843 0.84314 0.78039
-0.02847 0.15546 -0.07743 0.16739 -0.65991 -0.73246 0.87843 0.84314 0.78039
-0.03108 0.15513 -0.07743 0 -0.68208 -0.73127 0.87843 0.84314 0.78039
-0.0337 0.15546 -0.07743 -0.16739 -0.65991 -0.73246 0.87843 0.84314 0.78039
-0.03613 0.15642 -0.07743 -0.32482 -0.5943 -0.73573 0.87843 0.84314 0.78039
-0.03823 0.15794 -0.07743 -0.4622 -0.48824 -0.74027 0.87843 0.84314 0.78039
-0.03983 0.15992 -0.07743 -0.56961 -0.34739 -0.74489 0.87843 0.84314 0.78039
-0.04084 0.16222 -0.07743 -0.63825 -0.18065 -0.74833 0.87843 0.84314 0.78039
-0.04472 0.1647 -0.0728 -0.89778 0 -0.44043 0.87843 0.83922 0.78039
-0.04425 0.16804 -0.0728 -0.86449 0.24469 -0.43906 0.87843 0.83922 0.78039
-0.04289 0.17115 -0.0728 -0.76859 0.46874 -0.43538 0.87843 0.83922 0.78039
-0.04073 0.17383 -0.0728 -0.62051 0.65547 -0.4305 0.87843 0.83922 0.78039
-0.0379 0.17588 -0.0728 -0.43395 0.79398 -0.42578 0.87843 0.83922 0.78039
-0.03461 0.17717 -0.0728 -0.22286 0.87858 -0.42242 0.87843 0.83922 0.78039
-0.03108 0.17761 -0.0728 -0 0.90696 -0.42121 0.87843 0.83922 0.78039
-0.02755 0.17717 -0.0728 0.22286 0.87858 -0.42242 0.87843 0.83922 0.78039
-0.02426 0.17588 -0.0728 0.43395 0.79398 -0.42578 0.87843 0.83922 0.78039
-0.02144 0.17383 -0.0728 0.62051 0.65547 -0.4305 0.87843 0.83922 0.78039
-0.01927 0.17115 -0.0728 0.76859 0.46874 -0.43538 0.87843 0.83922 0.78039
-0.01791 0.16804 -0.0728 0.86449 0.24469 -0.43906 0.87843 0.83922 0.78039
-0.01745 0.1647 -0.0728 0.89778 0 -0.44043 0.87843 0.83922 0.78039
-0.01791 0.16136 -0.0728 0.86449 -0.24469 -0.43906 0.87843 0.83922 0.78039
-0.01927 0.15824 -0.0728 0.76859 -0.46874 -0.43538 0.87843 0.83922 0.78039
-0.02144 0.15557 -0.0728 0.62051 -0.65547 -0.4305 0.87843 0.83922 0.78039
-0.02426 0.15352 -0.0728 0.43395 -0.79398 -0.42578 0.87843 0.83922 0.78039
-0.02755 0.15223 -0.0728 0.22286 -0.87858 -0.42242 0.87843 0.83922 0.78039
-0.03108 0.15179 -0.0728 0 -0.90696 -0.42121 0.87843 0.83922 0.78039
-0.03461 0.15223 -0.0728 -0.22286 -0.87858 -0.42242 0.87843 0.83922 0.78039
-0.0379 0.15352 -0.0728 -0.43395 -0.79398 -0.42578 0.87843 0.83922 0.78039
-0.04073 0.15557 -0.0728 -0.62051 -0.65547 -0.4305 0.87843 0.83922 0.78039
-0.04289 0.15824 -0.0728 -0.76859 -0.46874 -0.43538 0.87843 0.83922 0.78039
-0.04425 0.16136 -0.0728 -0.86449 -0.24469 -0.43906 0.87843 0.83922 0.78039
-0.04619 0.1647 -0.06511 -0.99678 0 0.08018 0.82745 0.76863 0.69804
-0.04567 0.1684 -0.06511 -0.95913 0.27148 0.07988 0.82745 0.76863 0.69804
-0.04416 0.17185 -0.06511 -0.85108 0.51905 0.07905 0.82745 0.76863 0.69804
-0.04176 0.17481 -0.06511 -0.68538 0.724 0.07797 0.82745 0.76863 0.69804
-0.03863 0.17708 -0.06511 -0.47818 0.87489 0.07693 0.82745 0.76863 0.69804
-0.03499 0.17851 -0.06511 -0.24516 0.96648 0.0762 0.82745 0.76863 0.69804
-0.03108 0.179 -0.06511 -0 0.99711 0.07593 0.82745 0.76863 0.69804
-0.02717 0.17851 -0.06511 0.24516 0.96648 0.0762 0.82745 0.76863 0.69804
-0.02353 0.17708 -0.06511 0.47818 0.87489 0.07693 0.82745 0.76863 0.69804
-0.0204 0.17481 -0.06511 0.68538 0.724 0.07797 0.82745 0.76863 0.69804
-0.018 0.17185 -0.06511 0.85108 0.51905 0.07905 0.82745 0.76863 0.69804
-0.01649 0.1684 -0.06511 0.95913 0.27148 0.07988 0.82745 0.76863 0.69804
-0.01598 0.1647 -0.06511 0.99678 0 0.08018 0.82745 0.76863 0.69804
-0.01649 0.161 -0.06511 0.95913 -0.27148 0.07988 0.82745 0.76863 0.69804
-0.018 0.15755 -0.06511 0.85108 -0.51905 0.07905 0.82745 0.76863 0.69804
-0.0204 0.15459 -0.06511 0.68538 -0.724 0.07797 0.82745 0.76863 0.69804
-0.02353 0.15232 -0.06511 0.47818 -0.87489 0.07693 0.82745 0.76863 0.69804
-0.02717 0.15089 -0.06511 0.24516 -0.96648 0.0762 0.82745 0.76863 0.69804
-0.03108 0.1504 -0.06511 0 -0.99711 0.07593 0.82745 0.76863 0.69804
-0.03499 0.15089 -0.06511 -0.24516 -0.96648 0.0762 0.82745 0.76863 0.69804
-0.03863 0.15232 -0.06511 -0.47818 -0.87489 0.07693 0.82745 0.76863 0.69804
-0.04176 0.15459 -0.06511 -0.68538 -0.724 0.07797 0.82745 0.76863 0.69804
-0.04416 0.15755 -0.06511 -0.85108 -0.51905 0.07905 0.82745 0.76863 0.69804
-0.04567 0.161 -0.06511 -0.95913 -0.27148 0.07988 0.82745 0.76863 0.69804
-0.04351 0.1647 -0.05774 -0.81647 0 0.57738 0.72549 0.61176 0.53725
-0.04308 0.16774 -0.05774 -0.78662 0.22265 0.57589 0.72549 0.61176 0.53725
-0.04184 0.17058 -0.05774 -0.70036 0.42713 0.57189 0.72549 0.61176 0.53725
-0.03987 0.17302 -0.05774 -0.5665 0.59842 0.56655 0.72549 0.61176 0.53725
-0.0373 0.17489 -0.05774 -0.3969 0.72619 0.56135 0.72549 0.61176 0.53725
-0.0343 0.17606 -0.05774 -0.20409 0.8046 0.55764 0.72549 0.61176 0.53725
-0.03108 0.17646 -0.05774 -0 0.83098 0.5563 0.72549 0.61176 0.53725
-0.02787 0.17606 -0.05774 0.20409 0.8046 0.55764 0.72549 0.61176 0.53725
-0.02487 0.17489 -0.05774 0.3969 0.72619 0.56135 0.72549 0.61176 0.53725
-0.0223 0.17302 -0.05774 0.5665 0.59842 0.56655 0.72549 0.61176 0.53725
-0.02032 0.17058 -0.05774 0.70036 0.42713 0.57189 0.72549 0.61176 0.53725
-0.01908 0.16774 -0.05774 0.78662 0.22265 0.57589 0.72549 0.61176 0.53725
-0.01866 0.1647 -0.05774 0.81647 0 0.57738 0.72549 0.61176 0.53725
-0.01908 0.16165 -0.05774 0.78662 -0.22265 0.57589 0.72549 0.61176 0.53725
-0.02032 0.15882 -0.05774 0.70036 -0.42713 0.57189 0.72549 0.61176 0.53725
-0.0223 0.15638 -0.05774 0.5665 -0.59842 0.56655 0.72549 0.61176 0.53725
-0.02487 0.15451 -0.05774 0.3969 -0.72619 0.56135 0.72549 0.61176 0.53725
-0.02787 0.15334 -0.05774 0.20409 -0.8046 0.55764 0.72549 0.61176 0.53725
-0.03108 0.15294 -0.05774 0 -0.83098 0.5563 0.72549 0.61176 0.53725
-0.0343 0.15334 -0.05774 -0.20409 -0.8046 0.55764 0.72549 0.61176 0.53725
-0.0373 0.15451 -0.05774 -0.3969 -0.72619 0.56135 0.72549 0.61176 0.53725
-0.03987 0.15638 -0.05774 -0.5665 -0.59842 0.56655 0.72549 0.61176 0.53725
-0.04184 0.15882 -0.05774 -0.70036 -0.42713 0.57189 0.72549 0.61176 0.53725
-0.04308 0.16165 -0.05774 -0.78662 -0.22265 0.57589 0.72549 0.61176 0.53725
-0.03108 0.1647 -0.08124 0 0 -1 0.12549 0.09804 0.09412
-0.02926 0.16763 -0.08089 0 0 -1 0.93333 0.88627 0.80392
-0.03012 0.16763 -0.08097 0 0 -1 0.93333 0.88627 0.80392
-0.02992 0.16818 -0.08083 0 0 -1 0.93333 0.88627 0.80392
-0.02941 0.16847 -0.0807 0 0 -1 0.93333 0.88627 0.80392
-0.02884 0.16837 -0.08065 0 0 -1 0.93333 0.88627 0.80392
-0.02846 0.16792 -0.08071 0 0 -1 0.93333 0.88627 0.80392
-0.02846 0.16733 -0.08084 0 0 -1 0.93333 0.88627 0.80392
-0.02884 0.16688 -0.08098 0 0 -1 0.93333 0.88627 0.80392
-0.02941 0.16678 -0.08107 0 0 -1 0.93333 0.88627 0.80392
-0.02992 0.16708 -0.08107 0 0 -1 0.93333 0.88627 0.80392
0.01313 0.176 -0.09058 0.36224 -0.66861 -0.64942 0.37569 0.25792 0.19678
0.01313 0.1767 -0.09178 0.15314 -0.13656 -0.97872 0.28627 0.1998 0.15804
0.01313 0.17741 -0.09116 -0.5205 0.56764 -0.63786 0.37569 0.25792 0.19678
0.01638 0.17608 -0.08933 0.35168 -0.58321 -0.73225 0.37569 0.25792 0.19678
0.01638 0.17829 -0.09113 0.29346 -0.33551 -0.89516 0.28627 0.1998 0.15804
0.01638 0.1805 -0.09106 0.03628 0.14808 -0.98831 0.37569 0.25792 0.19678
0.01963 0.17715 -0.08856 0.37335 -0.54276 -0.75235 0.37569 0.25792 0.19678
0.01963 0.17978 -0.09058 0.33312 -0.31322 -0.88934 0.28627 0.1998 0.15804
0.01963 0.18241 -0.09048 0.19164 0.03475 -0.98085 0.37569 0.25792 0.19678
0.02287 0.17824 -0.08788 0.35597 -0.49382 -0.79336 0.37569 0.25792 0.19678
0.02287 0.1811 -0.0897 0.34212 -0.26636 -0.90111 0.28627 0.1998 0.15804
0.02287 0.18395 -0.08955 0.26751 0.04613 -0.96245 0.37569 0.25792 0.19678
0.02612 0.17922 -0.08704 0.36064 -0.46513 -0.80845 0.37569 0.25792 0.19678
0.02612 0.18216 -0.0888 0.35559 -0.21127 -0.91045 0.28627 0.1998 0.15804
0.02612 0.18511 -0.08847 0.30176 0.08814 -0.9493 0.37569 0.25792 0.19678
0.02937 0.17997 -0.08609 0.35757 -0.43118 -0.82839 0.37569 0.25792 0.19678
0.02937 0.18291 -0.08767 0.37537 -0.15788 -0.91333 0.28627 0.1998 0.15804
0.02937 0.18586 -0.08709 0.34657 0.15555 -0.92504 0.37569 0.25792 0.19678
0.03262 0.18043 -0.08498 0.36962 -0.38815 -0.84422 0.37569 0.25792 0.19678
0.03262 0.1833 -0.08637 0.41128 -0.11389 -0.90437 0.28627 0.1998 0.15804
0.03262 0.18616 -0.08565 0.39087 0.20862 -0.89649 0.37569 0.25792 0.19678
0.03586 0.18057 -0.08369 0.40017 -0.34645 -0.84843 0.37569 0.25792 0.19678
0.03586 0.18329 -0.08479 0.4567 -0.06738 -0.88707 0.28627 0.1998 0.15804
0.03586 0.18602 -0.08402 0.46165 0.23207 -0.85617 0.37569 0.25792 0.19678
0.03911 0.18037 -0.08197 0.40776 -0.35117 -0.84286 0.37569 0.25792 0.19678
0.03911 0.18289 -0.08301 0.49155 -0.03874 -0.86999 0.28627 0.1998 0.15804
0.03911 0.18542 -0.08218 0.5155 0.25594 -0.81778 0.37569 0.25792 0.19678
0.04236 0.17983 -0.08019 0.46544 -0.33913 -0.81753 0.37569 0.25792 0.19678
0.04236 0.18211 -0.08116 0.56071 -0.02137 -0.82773 0.28627 0.1998 0.15804
0.04236 0.18439 -0.0803 0.58336 0.27452 -0.76442 0.37569 0.25792 0.19678
0.04561 0.17899 -0.07787 0.47864 -0.33935 -0.80978 0.37569 0.25792 0.19678
0.04561 0.18097 -0.07865 0.61916 0.02158 -0.78497 0.28627 0.1998 0.15804
0.04561 0.18296 -0.07774 0.66634 0.29408 -0.6852 0.37569 0.25792 0.19678
0.04885 0.1779 -0.07544 0.50555 -0.38578 -0.77175 0.37569 0.25792 0.19678
0.04885 0.17954 -0.07623 0.67223 0.06371 -0.73759 0.28627 0.1998 0.15804
0.04885 0.18119 -0.0752 0.70341 0.34883 -0.61929 0.37569 0.25792 0.19678
0.0521 0.17664 -0.07249 0.52921 -0.51688 -0.67288 0.37569 0.25792 0.19678
0.0521 0.17788 -0.07318 0.76369 0.10541 -0.63691 0.28627 0.1998 0.15804
0.0521 0.17912 -0.07203 0.77263 0.39852 -0.4942 0.37569 0.25792 0.19678
0.05535 0.17572 -0.06837 0.24529 -0.88639 -0.39261 0.37569 0.25792 0.19678
0.05535 0.17607 -0.06917 0.76449 -0.15015 -0.62691 0.28627 0.1998 0.15804
0.05535 0.17642 -0.06815 0.78774 0.4965 -0.36461 0.37569 0.25792 0.19678
-0.01313 0.176 -0.09058 -0.36224 -0.66861 -0.64942 0.37569 0.25792 0.19678
-0.01313 0.1767 -0.09178 -0.15314 -0.13656 -0.97872 0.28627 0.1998 0.15804
-0.01313 0.17741 -0.09116 0.5205 0.56764 -0.63786 0.37569 0.25792 0.19678
-0.01638 0.17608 -0.08933 -0.35168 -0.58321 -0.73225 0.37569 0.25792 0.19678
-0.01638 0.17829 -0.09113 -0.29346 -0.33551 -0.89516 0.28627 0.1998 0.15804
-0.01638 0.1805 -0.09106 -0.03628 0.14808 -0.98831 0.37569 0.25792 0.19678
-0.01963 0.17715 -0.08856 -0.37335 -0.54276 -0.75235 0.37569 0.25792 0.19678
-0.01963 0.17978 -0.09058 -0.33312 -0.31322 -0.88934 0.28627 0.1998 0.15804
-0.01963 0.18241 -0.09048 -0.19164 0.03475 -0.98085 0.37569 0.25792 0.19678
-0.02287 0.17824 -0.08788 -0.35597 -0.49382 -0.79336 0.37569 0.25792 0.19678
-0.02287 0.1811 -0.0897 -0.34212 -0.26636 -0.90111 0.28627 0.1998 0.15804
-0.02287 0.18395 -0.08955 -0.26751 0.04613 -0.96245 0.37569 0.25792 0.19678
-0.02612 0.17922 -0.08704 -0.36064 -0.46513 -0.80845 0.37569 0.25792 0.19678
-0.02612 0.18216 -0.0888 -0.35559 -0.21127 -0.91045 0.28627 0.1998 0.15804
-0.02612 0.18511 -0.08847 -0.30176 0.08814 -0.9493 0.37569 0.25792 0.19678
-0.02937 0.17997 -0.08609 -0.35757 -0.43118 -0.82839 0.37569 0.25792 0.19678
-0.02937 0.18291 -0.08767 -0.37537 -0.15788 -0.91333 0.28627 0.1998 0.15804
-0.02937 0.18586 -0.08709 -0.34657 0.15555 -0.92504 0.37569 0.25792 0.19678
-0.03262 0.18043 -0.08498 -0.36962 -0.38815 -0.84422 0.37569 0.25792 0.19678
-0.03262 0.1833 -0.08637 -0.41128 -0.11389 -0.90437 0.28627 0.1998 0.15804
-0.03262 0.18616 -0.08565 -0.39087 0.20862 -0.89649 0.37569 0.25792 0.19678
-0.03586 0.18057 -0.08369 -0.40017 -0.34645 -0.84843 0.37569 0.25792 0.19678
-0.03586 0.18329 -0.08479 -0.4567 -0.06738 -0.88707 0.28627 0.1998 0.15804
-0.03586 0.18602 -0.08402 -0.46165 0.23207 -0.85617 0.37569 0.25792 0.19678
-0.03911 0.18037 -0.08197 -0.40776 -0.35117 -0.84286 0.37569 0.25792 0.19678
-0.03911 0.18289 -0.08301 -0.49155 -0.03874 -0.86999 0.28627 0.1998 0.15804
-0.03911 0.18542 -0.08218 -0.5155 0.25594 -0.81778 0.37569 0.25792 0.19678
-0.04236 0.17983 -0.08019 -0.46544 -0.33913 -0.81753 0.37569 0.25792 0.19678
-0.04236 0.18211 -0.08116 -0.56071 -0.02137 -0.82773 0.28627 0.1998 0.15804
-0.04236 0.18439 -0.0803 -0.58336 0.27452 -0.76442 0.37569 0.25792 0.19678
-0.04561 0.17899 -0.07787 -0.47864 -0.33935 -0.80978 0.37569 0.25792 0.19678
-0.04561 0.18097 -0.07865 -0.61916 0.02158 -0.78497 0.28627 0.1998 0.15804
-0.04561 0.18296 -0.07774 -0.66634 0.29408 -0.6852 0.37569 0.25792 0.19678
-0.04885 0.1779 -0.07544 -0.50555 -0.38578 -0.77175 0.37569 0.25792 0.19678
-0.04885 0.17954 -0.07623 -0.67223 0.06371 -0.73759 0.28627 0.1998 0.15804
-0.04885 0.18119 -0.0752 -0.70341 0.34883 -0.61929 0.37569 0.25792 0.19678
-0.0521 0.17664 -0.07249 -0.52921 -0.51688 -0.67288 0.37569 0.25792 0.19678
-0.0521 0.17788 -0.07318 -0.76369 0.10541 -0.63691 0.28627 0.1998 0.15804
-0.0521 0.17912 -0.07203 -0.77263 0.39852 -0.4942 0.37569 0.25792 0.19678
-0.05535 0.17572 -0.06837 -0.24529 -0.88639 -0.39261 0.37569 0.25792 0.19678
-0.05535 0.17607 -0.06917 -0.76449 -0.15015 -0.62691 0.28627 0.1998 0.15804
-0.05535 0.17642 -0.06815 -0.78774 0.4965 -0.36461 0.37569 0.25792 0.19678
3 15 376 0
3 375 376 15
3 375 15 14
3 375 14 13
3 374 375 13
3 379 374 12
3 2 15 0
3 3 2 0
3 7 3 4
3 4 383 5
3 5 1 479
3 1 517 6
3 12 374 13
3 7 2 3
3 16 7 8
3 10 8 366
3 10 366 9
3 9 475 10
3 18 15 7
3 10 17 8
3 7 16 18
3 20 12 19
3 21 18 16
3 16 8 21
3 21 8 22
3 22 8 17
3 27 23 498
3 497 477 24
3 25 20 19
3 25 19 26
3 27 28 29
3 480 23 29
3 30 31 32
3 33 34 35
3 33 35 36
3 37 40 465
3 38 39 41
3 37 475 40
3 475 38 40
3 50 471 53
3 48 44 43
3 43 47 45
3 51 49 50
3 51 50 53
3 38 42 469
3 57 47 58
3 53 61 51
3 44 56 46
3 48 56 44
3 49 48 43
3 49 43 50
3 53 46 61
3 56 48 61
3 56 61 46
3 61 49 51
3 61 48 49
3 65 481 78
3 62 468 68
3 63 64 71
3 73 66 65
3 520 58 46
3 520 68 67
3 69 71 684
3 70 69 684
3 70 67 69
3 684 71 72
3 67 70 59
3 73 65 74
3 76 66 73
3 78 74 65
3 73 74 75
3 76 73 75
3 139 75 74
3 139 74 147
3 77 78 363
3 79 76 75
3 468 63 68
3 79 75 139
3 71 80 72
3 72 80 81
3 71 64 80
3 76 79 82
3 82 66 76
3 79 83 84
3 79 84 82
3 80 86 81
3 81 86 85
3 83 79 87
3 88 64 66
3 84 83 90
3 86 92 85
3 90 83 87
3 90 87 93
3 94 82 84
3 91 84 90
3 92 704 85
3 95 96 97
3 95 97 145
3 88 98 522
3 88 522 521
3 99 96 95
3 94 84 91
3 99 114 102
3 704 103 104
3 102 114 105
3 102 105 106
3 92 100 103
3 92 103 704
3 91 90 93
3 91 93 107
3 103 108 109
3 103 109 104
3 105 107 106
3 100 110 108
3 100 108 103
3 101 91 107
3 101 107 105
3 111 94 101
3 98 112 522
3 113 106 107
3 113 107 93
3 101 94 91
3 115 89 116
3 93 87 117
3 93 117 113
3 108 118 109
3 87 79 119
3 87 119 117
3 110 120 108
3 108 120 118
3 114 101 105
3 134 111 101
3 123 112 122
3 110 121 120
3 101 114 124
3 125 126 124
3 127 101 124
3 129 115 116
3 129 116 130
3 120 132 131
3 120 131 118
3 124 114 99
3 134 101 127
3 136 123 122
3 136 122 135
3 128 79 139
3 121 133 132
3 121 132 120
3 131 137 138
3 132 140 137
3 132 137 131
3 125 124 99
3 125 99 95
3 141 134 127
3 141 127 142
3 144 136 135
3 144 135 143
3 133 140 132
3 145 146 126
3 145 126 125
3 142 127 124
3 142 124 126
3 148 129 130
3 148 130 149
3 150 144 143
3 150 143 151
3 153 142 126
3 153 126 146
3 154 148 149
3 154 149 155
3 137 157 156
3 137 156 138
3 140 152 157
3 140 157 137
3 145 125 95
3 140 164 152
3 158 141 142
3 158 142 153
3 160 158 153
3 159 160 146
3 159 146 145
3 145 97 161
3 145 161 162
3 163 150 151
3 150 163 165
3 164 150 165
3 160 153 146
3 166 154 155
3 157 167 168
3 157 168 156
3 152 169 170
3 152 170 157
3 157 170 167
3 145 162 159
3 164 171 152
3 171 169 152
3 171 165 163
3 24 477 172
3 363 78 173
3 481 173 78
3 174 175 364
3 209 176 177
3 180 178 179
3 180 179 181
3 182 180 181
3 182 181 183
3 193 182 183
3 193 183 184
3 185 193 184
3 185 184 186
3 285 187 189
3 188 285 189
3 190 188 189
3 190 189 191
3 192 190 191
3 192 191 193
3 177 176 276
3 194 195 208
3 194 208 364
3 195 196 208
3 198 199 204
3 198 204 200
3 197 201 202
3 201 197 199
3 201 199 198
3 204 281 203
3 190 192 205
3 190 205 206
3 208 196 207
3 209 464 176
3 27 498 210
3 187 178 189
3 178 180 189
3 180 182 191
3 180 191 189
3 182 193 191
3 179 211 181
3 184 214 212
3 184 212 186
3 183 215 214
3 183 214 184
3 181 211 215
3 181 215 183
3 212 217 218
3 212 218 213
3 211 216 223
3 211 223 215
3 215 223 219
3 215 219 214
3 214 219 217
3 214 217 212
3 217 221 222
3 217 222 218
3 216 220 223
3 223 224 219
3 219 224 221
3 219 221 217
3 221 226 227
3 221 227 222
3 220 225 228
3 220 228 223
3 223 228 229
3 223 229 224
3 224 229 226
3 224 226 221
3 225 230 231
3 226 232 233
3 226 233 227
3 225 231 234
3 225 234 228
3 228 234 235
3 228 235 229
3 229 235 232
3 229 232 226
3 230 273 236
3 230 236 231
3 232 237 233
3 231 236 238
3 231 238 234
3 234 238 239
3 234 239 235
3 235 239 232
3 242 243 244
3 242 244 245
3 241 240 246
3 247 243 242
3 248 249 250
3 248 250 251
3 251 250 252
3 251 252 253
3 254 255 256
3 254 256 257
3 258 259 260
3 258 260 261
3 257 256 249
3 257 249 248
3 494 262 533
3 263 264 265
3 263 265 266
3 267 268 300
3 267 300 507
3 262 30 32
3 269 270 34
3 269 34 33
3 264 263 270
3 264 270 269
3 300 271 507
3 179 178 211
3 216 211 178
3 225 220 272
3 230 225 272
3 230 272 297
3 273 230 297
3 274 512 12
3 13 14 19
3 7 479 8
3 13 19 12
3 15 18 14
3 479 366 8
3 276 176 275
3 196 197 792
3 196 792 207
3 277 792 197
3 277 197 202
3 175 174 367
3 279 175 278
3 279 278 503
3 279 463 280
3 199 281 204
3 197 196 281
3 197 281 199
3 200 204 282
3 280 463 283
3 279 280 175
3 464 284 176
3 206 205 286
3 206 286 287
3 209 177 285
3 276 288 178
3 276 178 187
3 463 209 285
3 177 187 285
3 508 178 288
3 258 528 259
3 289 530 528
3 289 528 258
3 253 252 290
3 253 290 291
3 261 260 255
3 261 255 254
3 276 275 292
3 276 292 293
3 508 216 178
3 298 272 220
3 508 298 220
3 508 220 216
3 302 356 301
3 268 305 300
3 303 304 296
3 306 315 309
3 307 294 308
3 309 316 307
3 309 315 316
3 308 294 312
3 308 312 313
3 294 257 248
3 294 248 314
3 258 261 315
3 294 254 257
3 316 261 254
3 316 254 294
3 357 253 291
3 357 291 317
3 315 261 316
3 318 319 320
3 321 322 35
3 321 35 34
3 210 323 324
3 210 324 333
3 325 326 28
3 325 28 27
3 325 27 210
3 325 210 333
3 327 328 36
3 327 36 35
3 271 303 329
3 303 296 329
3 324 323 331
3 324 331 332
3 325 343 326
3 296 334 295
3 343 335 263
3 343 263 266
3 335 336 270
3 335 270 263
3 333 324 344
3 175 194 364
3 295 334 302
3 276 337 288
3 177 276 187
3 338 508 288
3 338 288 337
3 335 341 342
3 335 342 336
3 335 343 341
3 336 342 344
3 336 344 321
3 347 246 247
3 347 247 348
3 319 349 350
3 319 350 320
3 352 322 353
3 352 353 354
3 334 356 302
3 322 321 344
3 322 344 353
3 241 246 347
3 357 251 253
3 336 321 34
3 336 34 270
3 359 242 245
3 359 245 360
3 361 362 311
3 361 311 310
3 348 247 242
3 348 242 359
3 352 318 320
3 352 320 327
3 344 332 353
3 278 175 367
3 194 175 280
3 195 194 280
3 195 280 283
3 365 174 364
3 174 365 505
3 367 174 490
3 368 463 285
3 368 285 188
3 463 203 281
3 283 463 281
3 196 195 283
3 196 283 281
3 368 188 206
3 188 190 206
3 306 258 315
3 355 345 371
3 355 371 372
3 372 371 332
3 372 332 331
3 320 350 328
3 320 328 327
3 238 347 348
3 238 348 239
3 318 352 354
3 318 354 358
3 296 304 356
3 296 356 334
3 236 241 347
3 236 347 238
3 314 248 251
3 314 251 357
3 232 359 360
3 232 360 237
3 273 299 241
3 273 241 236
3 313 312 362
3 313 362 361
3 239 348 359
3 239 359 232
3 322 352 327
3 322 327 35
3 346 358 354
3 346 354 373
3 373 354 353
3 373 353 332
3 376 382 0
3 387 375 374
3 517 1 377
3 383 4 3
3 384 383 3
3 380 517 377
3 380 377 385
3 384 377 383
3 386 387 379
3 388 377 384
3 384 0 389
3 382 389 0
3 384 3 0
3 394 384 390
3 398 381 392
3 393 387 386
3 399 382 395
3 391 380 385
3 391 385 397
3 396 384 394
3 393 386 398
3 395 382 387
3 396 388 384
3 395 387 393
3 397 388 396
3 390 384 389
3 390 389 399
3 382 399 389
3 400 397 396
3 401 390 399
3 401 399 402
3 399 403 402
3 413 397 400
3 404 394 390
3 404 390 401
3 405 391 408
3 409 398 392
3 409 392 406
3 403 399 395
3 407 394 404
3 408 391 397
3 403 395 414
3 396 407 400
3 407 396 394
3 408 397 413
3 414 395 393
3 419 403 410
3 411 408 413
3 410 403 414
3 407 412 422
3 407 422 400
3 421 393 409
3 415 401 402
3 415 402 416
3 414 393 421
3 403 419 416
3 403 416 402
3 413 400 422
3 404 401 415
3 417 405 408
3 417 408 411
3 418 409 406
3 418 406 420
3 425 404 415
3 426 407 404
3 426 404 425
3 411 413 424
3 412 407 426
3 427 414 433
3 414 421 433
3 435 413 422
3 418 420 423
3 417 411 429
3 417 429 430
3 419 410 427
3 411 424 429
3 415 431 425
3 412 428 422
3 424 413 435
3 412 426 428
3 415 416 434
3 415 434 431
3 419 434 416
3 410 414 427
3 418 423 409
3 428 436 422
3 427 438 419
3 422 436 435
3 420 437 423
3 421 432 433
3 419 438 434
3 431 442 425
3 424 440 429
3 426 442 428
3 425 442 426
3 436 446 435
3 437 443 423
3 433 441 444
3 438 439 434
3 432 441 433
3 428 442 436
3 429 440 445
3 429 445 430
3 427 444 438
3 434 439 431
3 443 441 432
3 433 444 427
3 431 439 442
3 447 448 452
3 455 449 459
3 454 452 453
3 450 451 456
3 452 448 453
3 449 455 456
3 456 451 449
3 451 450 448
3 451 448 447
3 457 458 452
3 457 452 454
3 458 457 459
3 459 449 458
3 456 438 444
3 442 455 459
3 440 457 454
3 450 441 448
3 454 445 440
3 442 459 436
3 438 456 439
3 445 454 453
3 445 453 460
3 450 444 441
3 448 443 437
3 448 437 453
3 457 446 436
3 457 436 459
3 293 461 337
3 293 337 276
3 12 20 274
3 512 11 12
3 378 381 386
3 378 386 379
3 381 398 386
3 462 204 206
3 462 206 287
3 204 203 368
3 204 368 206
3 203 463 368
3 209 463 279
3 464 209 279
3 37 465 52
3 82 94 89
3 94 111 116
3 94 116 89
3 134 466 149
3 134 149 130
3 466 467 155
3 466 155 149
3 467 160 166
3 467 166 155
3 166 160 163
3 166 151 154
3 151 143 148
3 151 148 154
3 129 143 135
3 112 115 122
3 115 112 98
3 115 98 89
3 66 64 63
3 468 482 481
3 38 465 40
3 38 469 465
3 282 204 462
3 279 503 464
3 465 469 43
3 469 42 50
3 65 468 481
3 89 66 82
3 130 116 111
3 130 111 134
3 134 141 466
3 141 158 467
3 141 467 466
3 158 160 467
3 163 151 166
3 129 148 143
3 135 122 115
3 135 115 129
3 98 88 89
3 66 89 88
3 65 66 63
3 65 63 468
3 471 50 42
3 19 14 498
3 19 498 480
3 14 477 498
3 479 1 6
3 7 4 479
3 479 4 5
3 15 2 7
3 378 379 12
3 378 12 11
3 42 478 471
3 473 9 366
3 475 9 39
3 475 39 38
3 22 470 476
3 478 53 471
3 44 46 58
3 44 58 47
3 43 44 47
3 62 482 468
3 43 52 465
3 52 43 45
3 42 38 41
3 41 478 42
3 292 494 533
3 293 292 533
3 393 398 409
3 421 409 423
3 421 423 432
3 423 443 432
3 435 440 424
3 435 446 440
3 455 442 439
3 443 448 441
3 453 437 460
3 457 440 446
3 377 1 5
3 472 474 6
3 50 43 469
3 173 481 501
3 478 41 55
3 26 29 499
3 6 474 473
3 493 494 500
3 493 500 483
3 495 499 496
3 493 495 494
3 503 504 464
3 487 488 490
3 487 490 485
3 501 503 489
3 501 489 488
3 501 488 487
3 501 481 504
3 501 504 503
3 489 278 488
3 492 493 483
3 473 474 41
3 496 262 494
3 20 25 495
3 495 493 20
3 493 492 274
3 493 274 20
3 330 476 470
3 172 476 330
3 23 480 498
3 477 476 172
3 31 499 29
3 513 472 6
3 483 500 284
3 490 491 484
3 490 484 485
3 509 481 486
3 509 504 481
3 41 474 472
3 502 54 41
3 502 41 472
3 502 518 55
3 502 55 54
3 486 482 518
3 490 505 491
3 210 498 497
3 210 497 323
3 323 497 24
3 323 24 331
3 31 29 28
3 23 27 29
3 499 31 30
3 331 24 172
3 331 172 372
3 496 499 30
3 496 30 262
3 284 500 275
3 500 494 275
3 372 172 330
3 372 330 355
3 292 275 494
3 275 176 284
3 503 278 489
3 6 473 479
3 479 473 366
3 54 55 41
3 486 481 482
3 39 9 473
3 39 473 41
3 173 501 487
3 487 485 363
3 487 363 173
3 485 484 363
3 480 26 19
3 273 295 299
3 297 296 273
3 271 297 506
3 507 271 506
3 507 506 298
3 351 507 298
3 351 298 508
3 506 297 272
3 298 506 272
3 278 367 488
3 488 367 490
3 174 505 490
3 284 464 504
3 492 483 509
3 492 509 510
3 284 504 509
3 502 472 512
3 502 512 511
3 502 511 518
3 509 483 284
3 509 486 510
3 512 274 511
3 11 512 513
3 513 517 378
3 513 378 11
3 495 496 494
3 455 439 456
3 437 514 460
3 514 437 420
3 420 515 514
3 420 406 516
3 420 516 515
3 406 392 516
3 392 381 380
3 381 378 517
3 381 517 380
3 26 480 29
3 497 498 477
3 444 450 456
3 460 430 445
3 472 513 512
3 451 458 449
3 451 447 458
3 447 452 458
3 460 514 430
3 514 417 430
3 417 514 515
3 515 516 405
3 515 405 417
3 516 392 391
3 516 391 405
3 380 391 392
3 513 6 517
3 385 377 388
3 397 385 388
3 510 486 518
3 510 518 511
3 510 511 492
3 482 62 519
3 519 62 68
3 67 59 60
3 58 520 67
3 147 74 78
3 147 78 77
3 71 68 63
3 519 68 520
3 482 519 53
3 482 53 478
3 519 520 53
3 478 55 482
3 55 518 482
3 492 511 274
3 60 57 58
3 67 60 58
3 69 68 71
3 67 68 69
3 64 88 86
3 64 86 80
3 88 521 92
3 88 92 86
3 521 522 100
3 521 100 92
3 522 110 100
3 110 123 121
3 123 136 133
3 123 133 121
3 136 144 140
3 136 140 133
3 144 164 140
3 164 165 171
3 53 520 46
3 160 171 163
3 160 159 171
3 171 167 170
3 171 170 169
3 159 162 167
3 159 167 171
3 162 161 168
3 162 168 167
3 144 150 164
3 123 110 112
3 110 522 112
3 25 499 495
3 25 26 499
3 14 18 477
3 18 21 477
3 21 476 477
3 21 22 476
3 294 314 312
3 316 294 307
3 311 357 317
3 340 258 306
3 362 357 311
3 312 314 357
3 312 357 362
3 258 340 370
3 258 370 289
3 351 305 268
3 351 268 267
3 351 339 305
3 343 526 32
3 343 32 326
3 266 529 523
3 266 523 343
3 529 528 524
3 529 524 523
3 508 527 548
3 508 548 369
3 508 369 351
3 338 527 508
3 338 337 461
3 338 461 527
3 369 339 351
3 262 32 526
3 262 526 525
3 524 528 530
3 266 265 529
3 31 28 326
3 31 326 32
3 530 289 531
3 535 534 558
3 536 461 293
3 536 293 537
3 553 525 524
3 553 524 543
3 541 542 543
3 544 545 546
3 544 546 547
3 532 369 548
3 547 546 540
3 547 540 549
3 616 534 535
3 533 550 568
3 617 540 551
3 552 543 554
3 569 550 553
3 555 550 569
3 557 558 556
3 559 560 561
3 561 560 551
3 546 545 566
3 546 566 540
3 534 556 558
3 550 555 568
3 542 564 554
3 542 554 543
3 540 561 551
3 562 563 558
3 562 558 557
3 561 540 566
3 567 552 554
3 561 566 565
3 554 564 567
3 545 568 566
3 552 578 553
3 557 556 572
3 570 559 561
3 570 561 571
3 571 561 565
3 556 570 572
3 555 569 568
3 570 581 572
3 573 574 575
3 579 581 570
3 602 573 578
3 602 578 613
3 580 572 581
3 582 605 580
3 596 566 601
3 610 590 593
3 610 593 587
3 590 591 593
3 589 602 613
3 594 595 598
3 584 592 589
3 585 598 595
3 606 596 597
3 606 597 584
3 586 589 613
3 594 590 595
3 576 598 567
3 576 567 564
3 552 567 598
3 598 578 552
3 569 553 578
3 569 578 599
3 273 296 295
3 341 325 333
3 341 333 342
3 341 343 325
3 342 333 344
3 324 332 344
3 345 346 373
3 345 373 371
3 371 373 332
3 329 296 297
3 271 329 297
3 267 507 351
3 343 523 526
3 523 524 525
3 523 525 526
3 539 540 617
3 543 552 553
3 602 589 592
3 592 584 597
3 588 596 606
3 569 599 573
3 573 575 568
3 573 568 569
3 598 586 578
3 578 586 613
3 583 568 575
3 583 575 574
3 568 583 566
3 566 577 565
3 573 599 578
3 580 604 572
3 571 565 577
3 570 571 577
3 570 577 579
3 605 604 580
3 557 572 604
3 562 557 604
3 562 604 605
3 585 595 607
3 608 609 586
3 608 586 585
3 609 589 586
3 609 584 589
3 609 606 584
3 588 606 611
3 610 607 595
3 611 612 588
3 591 594 603
3 591 603 582
3 591 590 594
3 609 608 611
3 590 610 595
3 611 608 612
3 585 607 608
3 610 612 607
3 608 607 612
3 587 588 612
3 609 611 606
3 582 580 581
3 592 583 574
3 566 596 577
3 576 603 598
3 579 600 581
3 583 601 566
3 573 602 574
3 585 586 598
3 602 592 574
3 592 597 601
3 592 601 583
3 596 601 597
3 588 577 596
3 593 581 600
3 581 593 591
3 582 581 591
3 594 598 603
3 563 614 615
3 563 615 558
3 560 616 617
3 618 535 531
3 545 544 533
3 545 533 568
3 540 539 549
3 562 605 576
3 562 576 564
3 550 533 553
3 530 541 543
3 536 544 547
3 536 547 619
3 560 617 551
3 619 547 549
3 619 549 538
3 618 616 535
3 558 615 535
3 538 617 548
3 538 539 617
3 614 530 531
3 614 531 615
3 616 532 617
3 544 536 537
3 544 537 533
3 539 538 549
3 533 262 553
3 617 532 548
3 615 531 535
3 370 618 531
3 370 531 289
3 603 576 605
3 603 605 582
3 525 553 262
3 527 538 548
3 530 543 524
3 461 536 619
3 461 619 527
3 527 619 538
3 533 537 293
3 612 610 587
3 588 587 593
3 593 600 577
3 593 577 588
3 600 579 577
3 559 570 556
3 556 534 560
3 556 560 559
3 616 560 534
3 532 616 618
3 618 370 369
3 618 369 532
3 370 340 339
3 370 339 369
3 305 339 340
3 305 340 306
3 306 309 305
3 309 300 305
3 563 562 564
3 563 564 542
3 614 563 542
3 614 542 541
3 530 614 541
3 259 528 529
3 260 259 529
3 260 529 265
3 260 265 264
3 255 260 264
3 255 264 269
3 256 255 269
3 256 269 33
3 249 256 33
3 249 33 36
3 250 249 36
3 250 36 328
3 252 250 328
3 252 328 350
3 290 252 350
3 290 350 349
3 309 307 271
3 309 271 300
3 307 308 303
3 307 303 271
3 308 313 304
3 308 304 303
3 356 304 313
3 356 313 361
3 361 310 356
3 310 301 356
3 382 376 375
3 382 375 387
3 377 5 383
3 387 374 379
3 633 620 948
3 948 625 633
3 947 625 948
3 946 632 625
3 946 625 947
3 952 632 946
3 952 631 632
3 626 620 633
3 621 620 626
3 622 623 957
3 627 623 622
3 1055 950 949
3 626 622 621
3 622 957 621
3 634 629 627
3 634 627 626
3 628 629 634
3 629 630 936
3 17 10 629
3 630 10 475
3 10 630 629
3 633 635 626
3 629 628 17
3 636 635 633
3 626 635 634
3 642 632 863
3 642 637 632
3 638 634 635
3 641 637 642
3 634 638 628
3 638 22 628
3 22 17 628
3 645 1074 639
3 1073 640 1053
3 641 643 637
3 645 646 644
3 1057 646 639
3 647 648 649
3 650 651 652
3 650 652 653
3 37 1043 656
3 654 657 655
3 37 656 475
3 475 656 654
3 663 666 1048
3 661 658 659
3 47 658 45
3 659 660 669
3 664 666 663
3 664 663 662
3 660 666 669
3 57 671 47
3 666 664 673
3 661 659 670
3 659 669 670
3 1061 674 1060
3 662 663 658
3 662 658 661
3 673 669 666
3 670 673 661
3 670 669 673
3 673 664 662
3 673 662 661
3 682 685 675
3 1044 693 678
3 682 676 677
3 682 677 674
3 675 676 682
3 672 678 686
3 679 680 1094
3 679 660 671
3 1094 680 681
3 683 684 685
3 684 72 685
3 680 59 683
3 59 70 683
3 693 686 678
3 672 686 691
3 687 691 686
3 686 688 687
3 693 689 688
3 693 688 686
3 139 687 688
3 690 363 768
3 690 768 691
3 687 139 692
3 694 688 689
3 70 684 683
3 694 139 688
3 685 72 695
3 72 81 695
3 689 693 694
3 694 79 128
3 694 693 696
3 694 696 697
3 695 81 85
3 695 85 698
3 697 699 694
3 1044 696 693
3 696 702 697
3 698 85 705
3 702 706 699
3 702 699 697
3 698 705 1095
3 707 696 1044
3 703 702 696
3 705 85 704
3 708 744 97
3 708 97 96
3 700 1096 1097
3 700 1097 709
3 727 708 96
3 727 96 99
3 707 703 696
3 99 102 719
3 99 719 727
3 704 104 712
3 102 106 713
3 102 713 719
3 705 704 712
3 705 712 710
3 703 714 706
3 703 706 702
3 712 104 109
3 712 109 715
3 713 106 714
3 710 712 715
3 710 715 716
3 711 713 714
3 711 714 703
3 717 711 707
3 709 1097 718
3 113 706 714
3 113 714 106
3 711 703 707
3 720 721 701
3 706 113 117
3 706 117 699
3 715 109 118
3 699 117 119
3 699 119 694
3 716 715 722
3 715 118 722
3 719 713 711
3 735 711 717
3 725 724 718
3 716 722 723
3 711 726 727
3 711 727 719
3 728 727 726
3 728 726 729
3 730 726 711
3 731 732 721
3 731 721 720
3 722 118 131
3 722 131 733
3 735 730 711
3 737 736 724
3 737 724 725
3 128 139 694
3 723 722 733
3 723 733 734
3 131 138 738
3 733 738 739
3 733 131 738
3 728 708 727
3 740 741 730
3 740 730 735
3 743 742 736
3 743 736 737
3 734 733 739
3 744 728 729
3 744 729 745
3 741 729 726
3 741 726 730
3 690 77 363
3 746 747 732
3 746 732 731
3 748 749 742
3 748 742 743
3 751 745 729
3 751 729 741
3 752 753 747
3 752 747 746
3 738 138 156
3 738 156 754
3 739 738 754
3 739 754 750
3 744 708 728
3 739 750 760
3 755 751 741
3 755 741 740
3 757 751 755
3 756 744 745
3 756 745 757
3 744 758 161
3 744 161 97
3 759 749 748
3 748 761 759
3 760 761 748
3 757 745 751
3 762 753 752
3 754 156 168
3 754 168 763
3 750 754 764
3 750 764 765
3 754 763 764
3 744 756 758
3 760 750 766
3 766 750 765
3 766 759 761
3 640 767 1053
3 769 364 770
3 801 771 772
3 801 772 802
3 775 776 773
3 775 773 774
3 777 778 776
3 777 776 775
3 779 778 777
3 780 779 781
3 872 784 782
3 783 784 872
3 785 786 784
3 785 784 783
3 788 779 786
3 788 786 785
3 787 779 788
3 771 864 772
3 789 364 208
3 789 208 790
3 790 208 791
3 793 794 795
3 792 796 797
3 795 794 792
3 795 792 797
3 794 1039 798
3 794 798 869
3 785 800 799
3 785 799 788
3 208 207 791
3 645 803 1074
3 782 784 774
3 774 784 775
3 775 784 786
3 775 786 777
3 777 786 779
3 779 787 781
3 773 776 804
3 779 780 806
3 779 806 807
3 778 779 807
3 778 807 808
3 776 778 808
3 776 808 804
3 806 805 810
3 806 810 811
3 804 808 816
3 804 816 809
3 808 807 812
3 808 812 816
3 807 806 811
3 807 811 812
3 811 810 814
3 811 814 815
3 809 816 813
3 816 812 817
3 812 811 815
3 812 815 817
3 815 814 819
3 815 819 820
3 813 816 821
3 813 821 818
3 816 817 822
3 816 822 821
3 817 815 820
3 817 820 822
3 818 823 824
3 820 819 825
3 820 825 826
3 818 821 827
3 818 827 823
3 821 822 828
3 821 828 827
3 822 820 826
3 822 826 828
3 824 823 829
3 824 829 861
3 826 825 830
3 823 827 831
3 823 831 829
3 827 828 832
3 827 832 831
3 828 826 832
3 833 834 244
3 833 244 243
3 247 833 243
3 835 836 837
3 835 837 838
3 836 839 840
3 836 840 837
3 841 842 843
3 841 843 844
3 845 846 847
3 845 847 848
3 842 835 838
3 842 838 843
3 1070 1109 849
3 850 851 852
3 850 852 853
3 854 1081 884
3 854 884 855
3 849 1102 648
3 849 648 647
3 856 650 653
3 856 653 857
3 853 856 857
3 853 857 850
3 884 1081 858
3 773 804 774
3 809 774 804
3 818 860 813
3 824 881 860
3 824 860 818
3 861 881 824
3 863 631 1086
3 632 637 625
3 625 637 636
3 625 636 633
3 627 629 936
3 864 865 772
3 859 772 865
3 859 865 877
3 791 207 792
3 796 792 277
3 770 939 769
3 938 866 867
3 938 867 937
3 1042 937 867
3 867 868 1041
3 792 794 869
3 792 869 791
3 870 1039 794
3 870 794 793
3 868 871 1041
3 867 866 868
3 800 873 874
3 800 874 799
3 801 872 771
3 864 782 774
3 864 774 875
3 1041 872 801
3 771 872 782
3 1082 875 774
3 845 848 1105
3 1098 845 1105
3 1098 1105 1106
3 839 291 290
3 839 290 840
3 846 841 844
3 846 844 847
3 864 876 877
3 864 877 865
3 1082 774 809
3 882 813 860
3 1082 809 813
3 1082 813 882
3 302 301 930
3 855 884 887
3 886 880 885
3 888 891 897
3 889 890 878
3 891 889 898
3 892 310 311
3 892 311 893
3 891 898 897
3 890 894 895
3 890 895 878
3 878 896 835
3 878 835 842
3 845 897 846
3 878 842 841
3 898 878 841
3 898 841 846
3 931 317 291
3 931 291 839
3 897 898 846
3 318 899 319
3 900 653 652
3 900 652 901
3 803 911 902
3 803 902 903
3 904 645 644
3 904 644 905
3 904 911 803
3 904 803 645
3 906 652 651
3 906 651 907
3 858 908 886
3 886 908 880
3 902 909 910
3 902 910 903
3 904 905 921
3 880 879 912
3 921 851 850
3 921 850 913
3 913 850 857
3 913 857 914
3 911 922 902
3 770 364 789
3 879 302 912
3 864 875 915
3 771 782 864
3 916 915 875
3 916 875 1082
3 913 914 919
3 913 919 920
3 913 920 921
3 914 900 922
3 914 922 919
3 346 345 943
3 923 924 247
3 923 247 246
3 319 899 925
3 319 925 349
3 927 928 929
3 927 929 901
3 943 345 355
3 912 302 930
3 901 929 922
3 901 922 900
3 829 923 246
3 829 246 240
3 931 839 836
3 914 857 653
3 914 653 900
3 932 933 834
3 932 834 833
3 883 829 240
3 883 240 241
3 934 892 893
3 934 893 935
3 241 299 883
3 924 932 833
3 924 833 247
3 927 906 899
3 927 899 318
3 922 929 909
3 938 939 770
3 938 770 866
3 789 868 866
3 789 866 770
3 790 871 868
3 790 868 789
3 365 364 769
3 769 505 365
3 939 1063 769
3 665 1048 657
3 940 783 872
3 940 872 1041
3 1041 869 798
3 871 869 1041
3 791 869 871
3 791 871 790
3 940 800 783
3 783 800 785
3 888 897 845
3 355 942 943
3 942 910 909
3 942 909 943
3 899 906 907
3 899 907 925
3 831 832 924
3 831 924 923
3 318 358 928
3 318 928 927
3 880 912 930
3 880 930 885
3 829 831 923
3 896 931 836
3 896 836 835
3 826 830 933
3 826 933 932
3 861 829 883
3 894 934 935
3 894 935 895
3 832 826 932
3 832 932 924
3 901 652 906
3 901 906 927
3 346 944 928
3 346 928 358
3 944 909 929
3 944 929 928
3 948 620 945
3 960 946 947
3 956 621 957
3 953 958 949
3 953 949 950
3 955 960 945
3 957 961 956
3 959 952 960
3 961 957 962
3 963 945 620
3 945 963 955
3 956 963 620
3 956 620 621
3 968 964 963
3 968 963 956
3 972 966 954
3 967 959 960
3 973 969 955
3 965 971 958
3 965 958 953
3 956 961 970
3 970 968 956
3 967 972 959
3 969 960 955
3 969 967 960
3 971 970 961
3 964 973 963
3 955 963 973
3 987 970 971
3 974 975 973
3 974 973 964
3 973 975 977
3 991 987 971
3 978 974 964
3 978 964 968
3 979 983 965
3 980 966 972
3 977 981 969
3 977 969 973
3 982 978 968
3 983 971 965
3 970 987 982
3 982 968 970
3 983 991 971
3 967 988 972
3 981 976 969
3 976 967 969
3 994 984 981
3 994 981 977
3 982 995 978
3 985 998 983
3 984 1000 981
3 982 987 999
3 986 991 983
3 997 988 967
3 1000 976 981
3 989 990 975
3 989 975 974
3 1000 997 976
3 977 975 990
3 977 990 994
3 995 989 974
3 995 974 978
3 992 985 983
3 992 983 979
3 993 996 980
3 997 967 976
3 1002 995 982
3 999 1002 982
3 1000 1008 997
3 997 1007 988
3 1010 987 991
3 988 1007 1011
3 993 1011 996
3 992 1004 1005
3 992 1005 985
3 994 1003 984
3 985 1005 998
3 989 995 1006
3 987 1010 999
3 999 1015 1002
3 989 1006 1009
3 989 1009 990
3 994 990 1009
3 984 1003 1000
3 993 988 1011
3 980 988 993
3 988 980 972
3 1001 998 1005
3 1006 995 1012
3 1003 994 1014
3 995 1002 1012
3 1008 1000 1003
3 996 1011 1013
3 999 1010 1015
3 997 1008 1007
3 994 1009 1014
3 1002 1015 1018
3 1012 1002 1018
3 1001 1005 1056
3 1015 1010 1023
3 1013 1011 1019
3 1008 1020 1017
3 1014 1009 1022
3 1007 1008 1017
3 1012 1018 1022
3 1056 1005 1016
3 1005 1004 1021
3 1005 1021 1016
3 1003 1014 1020
3 1009 1006 1022
3 1007 1017 1019
3 1008 1003 1020
3 1006 1012 1022
3 1025 1029 1024
3 1024 1034 1025
3 1030 1036 1035
3 1031 1025 1026
3 1028 1029 1027
3 1031 1032 1030
3 1025 1034 1026
3 1031 1026 1032
3 1035 1031 1030
3 1027 1035 1033
3 1033 1028 1027
3 1035 1036 1033
3 1032 1026 1020
3 1032 1020 1014
3 1022 1018 1036
3 1022 1036 1030
3 1016 1028 1033
3 1028 1016 1021
3 1018 1015 1036
3 1024 1029 1019
3 1014 1022 1032
3 1021 1037 1029
3 1021 1029 1028
3 1026 1034 1017
3 1026 1017 1020
3 1029 1013 1019
3 1033 1036 1015
3 1033 1015 1023
3 876 864 915
3 876 915 1038
3 863 1086 862
3 863 862 642
3 951 952 959
3 951 959 954
3 954 959 972
3 873 800 1039
3 873 1039 1040
3 1039 800 940
3 1039 940 798
3 798 940 1041
3 801 867 1041
3 1042 867 801
3 802 937 1042
3 37 52 1043
3 677 672 1060
3 677 678 672
3 676 678 677
3 701 1044 678
3 1044 701 707
3 707 701 721
3 707 721 717
3 735 732 747
3 735 747 1045
3 1045 747 753
3 1045 753 1046
3 1046 753 762
3 1046 762 757
3 762 759 757
3 752 746 742
3 736 731 720
3 736 720 724
3 676 675 701
3 674 677 1060
3 654 656 1043
3 654 1043 1047
3 1040 1039 870
3 802 1042 801
3 1043 658 1047
3 701 678 676
3 732 735 717
3 732 717 721
3 735 1045 740
3 740 1045 1046
3 740 1046 755
3 755 1046 757
3 759 762 752
3 759 752 749
3 749 752 742
3 731 736 742
3 731 742 746
3 720 718 724
3 701 709 718
3 701 718 720
3 709 701 700
3 701 675 700
3 1048 665 663
3 637 1057 1074
3 637 1074 636
3 636 1074 1053
3 1053 1052 638
3 638 1052 22
3 1055 624 950
3 626 627 622
3 950 624 1091
3 951 631 952
3 1050 936 630
3 475 655 630
3 475 654 655
3 1054 1048 666
3 659 47 671
3 659 671 660
3 658 47 659
3 658 1043 52
3 52 45 658
3 665 657 654
3 657 1048 1054
3 654 1047 665
3 877 1109 1070
3 631 863 632
3 876 1109 877
3 998 986 983
3 998 1001 986
3 1011 1007 1019
3 1056 1016 1023
3 1019 1017 1034
3 1019 1034 1024
3 1029 1037 1013
3 1033 1023 1016
3 1049 624 1051
3 663 1047 658
3 768 1077 691
3 1060 672 691
3 1060 691 1077
3 663 665 1047
3 1060 1064 1061
3 1054 667 657
3 643 1059 646
3 624 1050 1051
3 1069 1062 1075
3 1069 1075 1070
3 1071 1072 1059
3 1069 1070 1071
3 1065 1058 1063
3 1065 1063 1066
3 1077 1065 1066
3 1077 1066 1067
3 1076 1079 1060
3 769 1063 505
3 1076 1067 1079
3 1067 1066 938
3 1068 1062 1069
3 1050 657 1051
3 1072 1070 849
3 642 1071 641
3 1071 642 1069
3 1069 642 862
3 1069 862 1068
3 767 330 470
3 767 470 1052
3 639 1074 1057
3 1053 767 1052
3 849 647 1072
3 647 649 1072
3 649 646 1072
3 1087 624 1049
3 1062 802 1075
3 1084 1064 1060
3 1084 1060 1079
3 1076 1077 1067
3 657 1049 1051
3 1078 1049 657
3 1078 657 668
3 1078 668 667
3 1078 667 1092
3 803 903 1073
3 803 1073 1074
3 903 910 640
3 903 640 1073
3 649 644 646
3 639 646 645
3 910 942 767
3 910 767 640
3 1075 859 877
3 1075 877 1070
3 355 330 767
3 942 355 767
3 859 802 772
3 624 1055 1050
3 1055 936 1050
3 1061 1064 1092
3 668 657 667
3 1077 1076 1060
3 655 657 1050
3 655 1050 630
3 768 1065 1077
3 1065 768 363
3 1065 363 1058
3 1057 637 643
3 879 883 295
3 881 861 880
3 858 1080 881
3 1081 882 1080
3 1081 1080 858
3 926 882 1081
3 926 1082 882
3 883 299 295
3 1080 860 881
3 882 860 1080
3 1067 938 937
3 938 1066 939
3 1066 1063 939
3 1079 1067 937
3 1079 937 802
3 1068 1083 1084
3 1068 1084 1062
3 802 1084 1079
3 1078 1085 1086
3 1078 1086 1049
3 1078 1092 1085
3 1084 802 1062
3 802 859 1075
3 1084 1083 1064
3 1086 1085 862
3 631 1087 1086
3 1087 631 951
3 1087 951 1091
3 1071 1070 1072
3 1072 646 1059
3 1030 1032 1022
3 1013 1037 1088
3 1088 996 1013
3 996 1088 1089
3 996 1089 1090
3 996 1090 980
3 980 1090 966
3 966 953 954
3 954 953 1091
3 954 1091 951
3 643 646 1057
3 1073 1053 1074
3 1037 1021 1004
3 1010 1056 1023
3 1049 1086 1087
3 1055 627 936
3 1031 1035 1025
3 1027 1025 1035
3 1025 1027 1029
3 1037 1004 1088
3 1088 1004 992
3 992 1089 1088
3 1089 992 979
3 1089 979 1090
3 1090 979 965
3 1090 965 966
3 953 966 965
3 950 1091 953
3 1087 1091 624
3 627 1055 949
3 949 623 627
3 958 961 962
3 958 962 949
3 971 961 958
3 991 986 1001
3 991 1001 1010
3 1010 1001 1056
3 1083 1085 1092
3 1083 1092 1064
3 1083 1068 1085
3 1093 681 674
3 680 679 60
3 680 60 59
3 692 690 691
3 692 691 687
3 1093 674 1061
3 682 674 681
3 1093 1094 681
3 1061 1054 666
3 1061 666 1093
3 1093 666 1094
3 1054 1061 667
3 667 1061 1092
3 1068 862 1085
3 60 671 57
3 679 671 60
3 685 695 675
3 683 685 682
3 683 682 681
3 680 683 681
3 675 695 698
3 675 698 1095
3 1095 705 1096
3 1096 705 710
3 1096 710 1097
3 1097 710 716
3 716 723 725
3 725 723 734
3 725 734 737
3 737 734 739
3 737 739 743
3 743 739 760
3 760 766 761
3 666 660 1094
3 679 1094 660
3 757 759 766
3 757 766 756
3 766 765 764
3 766 764 763
3 756 766 763
3 756 763 758
3 758 763 168
3 758 168 161
3 743 760 748
3 725 718 716
3 716 718 1097
3 1095 1096 700
3 1095 700 675
3 641 1071 1059
3 641 1059 643
3 636 1053 635
3 635 1053 638
3 878 895 896
3 898 889 878
3 893 311 317
3 893 317 931
3 918 888 845
3 935 893 931
3 895 935 931
3 895 931 896
3 845 1098 918
3 926 854 855
3 926 855 887
3 926 887 917
3 921 905 648
3 921 648 1099
3 1099 1100 921
3 851 921 1100
3 1100 1101 1105
3 1099 648 1102
3 1099 1102 1103
3 1101 1100 1099
3 1082 1124 1104
3 1082 926 941
3 1082 941 1124
3 916 1082 1104
3 916 1104 1038
3 916 1038 915
3 941 926 917
3 1101 1106 1105
3 851 1100 852
3 649 648 905
3 649 905 644
3 849 1103 1102
3 1106 1107 1098
3 1110 1136 1111
3 1112 1113 876
3 1112 876 1038
3 1117 1118 1119
3 1120 1121 1122
3 1120 1122 1123
3 1108 1124 941
3 1121 1125 1126
3 1121 1126 1122
3 1196 1110 1111
3 1109 1146 1127
3 1195 1128 1116
3 1129 1132 1118
3 1129 1118 1130
3 1147 1131 1127
3 1133 1147 1127
3 1135 1134 1136
3 1137 1139 1138
3 1139 1128 1138
3 1122 1126 1140
3 1122 1140 1123
3 1111 1136 1134
3 1127 1146 1133
3 1119 1118 1132
3 1119 1132 1143
3 1116 1128 1139
3 1141 1135 1136
3 1141 1136 1142
3 1129 1145 1132
3 1163 1146 1123
3 1126 1144 1140
3 1132 1145 1143
3 1123 1140 1163
3 1129 1131 1150
3 1135 1151 1134
3 1148 1149 1139
3 1148 1139 1137
3 1149 1144 1139
3 1134 1151 1148
3 1133 1146 1147
3 1148 1151 1160
3 1154 1152 1153
3 1155 1178 1174
3 1159 1148 1160
3 1182 1157 1154
3 1161 1160 1151
3 1162 1161 1185
3 1158 1181 1163
3 1180 1172 1167
3 1169 1192 1182
3 1174 1175 1170
3 1164 1169 1173
3 1165 1175 1174
3 1186 1164 1176
3 1166 1192 1169
3 1170 1167 1172
3 1170 1172 1177
3 1177 1174 1170
3 1155 1143 1145
3 1155 1145 1178
3 1129 1178 1145
3 1178 1129 1150
3 1150 1131 1157
3 1147 1179 1157
3 1147 1157 1131
3 861 883 879
3 861 879 880
3 920 919 911
3 920 911 904
3 920 904 921
3 919 922 911
3 902 922 909
3 943 944 346
3 943 909 944
3 302 879 295
3 908 881 880
3 858 881 908
3 854 926 1081
3 1099 1103 1101
3 1115 1195 1116
3 1130 1131 1129
3 1116 1139 1126
3 1126 1139 1144
3 1182 1173 1169
3 1173 1176 1164
3 1168 1186 1176
3 1147 1154 1179
3 1154 1147 1146
3 1154 1146 1152
3 1178 1150 1166
3 1150 1157 1192
3 1150 1192 1166
3 1163 1153 1152
3 1163 1152 1146
3 1140 1158 1163
3 1158 1140 1144
3 1170 1175 1187
3 1170 1187 1171
3 1154 1157 1179
3 1158 1144 1156
3 1161 1151 1184
3 1149 1156 1144
3 1148 1159 1156
3 1148 1156 1149
3 1185 1161 1184
3 1135 1184 1151
3 1141 1185 1184
3 1141 1184 1135
3 1165 1187 1175
3 1165 1188 1187
3 1188 1165 1166
3 1166 1169 1190
3 1190 1169 1164
3 1190 1164 1186
3 1191 1171 1187
3 1177 1162 1183
3 1189 1186 1168
3 1189 1168 1191
3 1188 1191 1187
3 1188 1189 1191
3 1190 1189 1188
3 1170 1171 1167
3 1166 1190 1188
3 1171 1191 1167
3 1167 1191 1168
3 1190 1186 1189
3 1192 1157 1182
3 1162 1160 1161
3 1173 1153 1163
3 1155 1174 1183
3 1159 1160 1180
3 1154 1153 1182
3 1178 1165 1174
3 1165 1178 1166
3 1182 1153 1173
3 1173 1163 1181
3 1173 1181 1176
3 1158 1176 1181
3 1158 1168 1176
3 1168 1158 1156
3 1172 1180 1160
3 1162 1177 1172
3 1162 1172 1160
3 1177 1183 1174
3 1142 1136 1193
3 1142 1193 1194
3 1138 1195 1196
3 1197 1107 1110
3 1123 1146 1109
3 1123 1109 1120
3 1116 1126 1125
3 1116 1125 1115
3 1141 1143 1155
3 1141 1155 1185
3 1127 1131 1109
3 1106 1118 1117
3 1112 1198 1121
3 1112 1121 1120
3 1138 1128 1195
3 1198 1114 1125
3 1198 1125 1121
3 1197 1110 1196
3 1136 1110 1193
3 1114 1124 1195
3 1130 1103 1131
3 1114 1195 1115
3 1194 1193 1107
3 1194 1107 1106
3 1196 1195 1108
3 1120 1109 1113
3 1120 1113 1112
3 1115 1125 1114
3 1109 1131 849
3 1195 1124 1108
3 1193 1110 1107
3 1098 1107 1197
3 1183 1162 1185
3 1183 1185 1155
3 1103 849 1131
3 1104 1124 1114
3 1106 1101 1118
3 1038 1104 1198
3 1038 1198 1112
3 1101 1130 1118
3 1104 1114 1198
3 1109 876 1113
3 1101 1103 1130
3 1168 1180 1167
3 1180 1168 1156
3 1180 1156 1159
3 1137 1134 1148
3 1134 1137 1138
3 1134 1138 1111
3 1196 1111 1138
3 1108 1197 1196
3 1197 1108 941
3 1197 941 1098
3 1098 941 917
3 1098 917 918
3 887 888 918
3 887 918 917
3 888 887 891
3 891 887 884
3 1142 1119 1143
3 1142 1143 1141
3 1194 1117 1119
3 1194 1119 1142
3 1106 1117 1194
3 848 1100 1105
3 847 852 1100
3 847 1100 848
3 847 853 852
3 844 856 853
3 844 853 847
3 843 650 856
3 843 856 844
3 838 651 650
3 838 650 843
3 837 907 651
3 837 651 838
3 840 925 907
3 840 907 837
3 290 349 925
3 290 925 840
3 891 884 858
3 891 858 889
3 889 858 886
3 889 886 890
3 890 886 885
3 890 885 894
3 930 934 894
3 930 894 885
3 934 930 892
3 892 930 301
3 892 301 310
3 945 960 947
3 945 947 948
3 962 957 623
3 960 952 946
3 623 949 962
3 22 1052 470
3 694 119 79
3 147 692 139
3 692 147 77
3 692 77 690
3 1058 363 484
3 1063 1058 484
3 1063 484 491
3 1063 491 505
3 1199 1200 1271
3 1200 1201 1272
3 1200 1272 1271
3 1201 1202 1272
3 1202 1203 1273
3 1202 1273 1272
3 1203 1204 1273
3 1204 1205 1273
3 1205 1206 1274
3 1205 1274 1273
3 1206 1207 1274
3 1207 1208 1274
3 1208 1209 1275
3 1208 1275 1274
3 1209 1210 1275
3 1210 1211 1276
3 1210 1276 1275
3 1211 1212 1277
3 1211 1277 1276
3 1212 1213 1278
3 1212 1278 1277
3 1213 1214 1278
3 1214 1215 1279
3 1214 1279 1278
3 1215 1216 1279
3 1216 1217 1280
3 1216 1280 1279
3 1217 1218 1280
3 1218 1219 1281
3 1218 1281 1280
3 1219 1220 1281
3 1220 1221 1281
3 1221 1222 1282
3 1221 1282 1281
3 1222 1223 1283
3 1222 1283 1282
3 1223 1224 1283
3 1224 1225 1283
3 1225 1226 1284
3 1225 1284 1283
3 1226 1227 1284
3 1227 1228 1285
3 1227 1285 1284
3 1228 1229 1286
3 1228 1286 1285
3 1229 1230 1286
3 1230 1231 1287
3 1230 1287 1286
3 1231 1232 1287
3 1232 1233 1288
3 1232 1288 1287
3 1233 1234 1288
3 1234 1235 1288
3 1235 1236 1288
3 1236 1237 1289
3 1236 1289 1288
3 1237 1238 1290
3 1237 1290 1289
3 1238 1239 1290
3 1239 1240 1291
3 1239 1291 1290
3 1240 1241 1291
3 1241 1242 1292
3 1241 1292 1291
3 1242 1243 1293
3 1242 1293 1292
3 1243 1244 1293
3 1244 1245 1294
3 1244 1294 1293
3 1245 1246 1294
3 1246 1247 1294
3 1247 1248 1295
3 1247 1295 1294
3 1248 1249 1296
3 1248 1296 1295
3 1249 1250 1297
3 1249 1297 1296
3 1250 1251 1297
3 1251 1252 1298
3 1251 1298 1297
3 1252 1253 1298
3 1253 1254 1298
3 1254 1255 1299
3 1254 1299 1298
3 1255 1256 1299
3 1256 1257 1300
3 1256 1300 1299
3 1257 1258 1301
3 1257 1301 1300
3 1258 1259 1302
3 1258 1302 1301
3 1259 1260 1303
3 1259 1303 1302
3 1260 1261 1303
3 1261 1262 1303
3 1262 1263 1304
3 1262 1304 1303
3 1263 1264 1304
3 1264 1265 1305
3 1264 1305 1304
3 1265 1266 1305
3 1266 1267 1305
3 1267 1268 1305
3 1268 1269 1306
3 1268 1306 1305
3 1269 1270 1306
3 1270 1199 1271
3 1270 1271 1306
3 1271 1272 1308
3 1271 1308 1307
3 1272 1273 1309
3 1272 1309 1308
3 1273 1274 1310
3 1273 1310 1309
3 1274 1311 1310
3 1274 1275 1311
3 1275 1312 1311
3 1275 1276 1312
3 1276 1277 1337
3 1276 1337 1312
3 1278 1313 1277
3 1278 1279 1313
3 1279 1314 1313
3 1279 1280 1314
3 1280 1281 1314
3 1281 1282 1342
3 1283 1344 1282
3 1283 1315 1344
3 1283 1284 1315
3 1284 1316 1315
3 1284 1285 1316
3 1285 1286 1316
3 1286 1287 1317
3 1286 1317 1316
3 1287 1318 1317
3 1287 1288 1319
3 1287 1319 1318
3 1288 1320 1319
3 1288 1289 1320
3 1289 1290 1321
3 1289 1321 1320
3 1290 1291 1322
3 1290 1322 1321
3 1291 1323 1322
3 1291 1292 1323
3 1292 1293 1324
3 1292 1324 1323
3 1293 1294 1324
3 1294 1325 1324
3 1294 1353 1325
3 1294 1295 1326
3 1294 1326 1353
3 1295 1296 1326
3 1296 1297 1326
3 1297 1327 1326
3 1297 1298 1327
3 1298 1328 1327
3 1298 1299 1328
3 1299 1300 1329
3 1299 1329 1328
3 1300 1301 1329
3 1301 1302 1330
3 1301 1330 1329
3 1302 1303 1330
3 1303 1331 1330
3 1303 1332 1331
3 1303 1304 1332
3 1304 1333 1332
3 1304 1305 1333
3 1305 1306 1334
3 1305 1334 1333
3 1306 1271 1307
3 1306 1307 1334
3 1307 1308 1360
3 1307 1360 1335
3 1308 1309 1361
3 1308 1361 1360
3 1310 1311 1363
3 1311 1312 1336
3 1311 1336 1363
3 1312 1337 1336
3 1337 1277 1338
3 1277 1313 1339
3 1277 1339 1338
3 1313 1340 1339
3 1313 1314 1340
3 1314 1341 1340
3 1314 1342 1341
3 1314 1281 1342
3 1282 1344 1343
3 1282 1343 1342
3 1315 1316 1345
3 1315 1345 1344
3 1316 1346 1345
3 1316 1317 1373
3 1316 1373 1346
3 1317 1318 1347
3 1317 1347 1373
3 1318 1319 1347
3 1319 1348 1347
3 1319 1320 1348
3 1320 1349 1348
3 1320 1321 1349
3 1321 1350 1349
3 1321 1322 1350
3 1322 1323 1351
3 1322 1351 1350
3 1323 1352 1351
3 1323 1324 1352
3 1324 1353 1352
3 1324 1325 1353
3 1353 1326 1354
3 1326 1327 1355
3 1326 1355 1354
3 1327 1328 1356
3 1327 1356 1355
3 1328 1357 1356
3 1328 1329 1357
3 1329 1387 1357
3 1330 1358 1329
3 1330 1331 1390
3 1330 1390 1358
3 1331 1332 1390
3 1332 1333 1392
3 1333 1393 1392
3 1333 1334 1394
3 1333 1394 1393
3 1334 1395 1394
3 1334 1307 1335
3 1334 1335 1395
3 1335 1360 1359
3 1309 1362 1361
3 1309 1310 1362
3 1310 1363 1362
3 1336 1337 1364
3 1336 1364 1363
3 1337 1338 1364
3 1338 1339 1365
3 1338 1365 1364
3 1339 1340 1366
3 1339 1366 1365
3 1340 1367 1366
3 1340 1341 1368
3 1340 1368 1367
3 1341 1342 1368
3 1342 1369 1368
3 1342 1343 1369
3 1343 1344 1370
3 1343 1370 1369
3 1344 1371 1370
3 1344 1345 1371
3 1345 1372 1371
3 1345 1346 1372
3 1346 1373 1372
3 1347 1374 1373
3 1347 1348 1374
3 1348 1375 1374
3 1348 1349 1375
3 1349 1376 1375
3 1349 1377 1376
3 1349 1350 1377
3 1350 1378 1377
3 1350 1351 1379
3 1350 1379 1378
3 1351 1352 1379
3 1352 1380 1379
3 1352 1353 1380
3 1353 1381 1380
3 1353 1354 1382
3 1353 1382 1381
3 1354 1383 1382
3 1354 1355 1384
3 1354 1384 1383
3 1355 1356 1385
3 1355 1385 1384
3 1356 1357 1386
3 1356 1386 1385
3 1357 1387 1386
3 1329 1358 1388
3 1329 1388 1387
3 1358 1390 1389
3 1358 1389 1388
3 1390 1332 1391
3 1332 1392 1391
3 1395 1335 1359
3 1359 1397 1396
3 1359 1360 1397
3 1360 1398 1397
3 1360 1361 1398
3 1361 1399 1398
3 1361 1362 1399
3 1362 1400 1399
3 1362 1363 1400
3 1363 1401 1400
3 1363 1364 1401
3 1364 1402 1401
3 1364 1365 1403
3 1364 1403 1402
3 1365 1366 1404
3 1365 1404 1403
3 1366 1367 1404
3 1367 1368 1405
3 1367 1405 1404
3 1368 1369 1405
3 1369 1406 1405
3 1369 1370 1407
3 1369 1407 1406
3 1370 1371 1408
3 1370 1408 1407
3 1371 1409 1408
3 1371 1372 1410
3 1371 1410 1409
3 1372 1411 1410
3 1372 1373 1412
3 1372 1412 1411
3 1373 1413 1412
3 1373 1374 1414
3 1373 1414 1413
3 1374 1375 1415
3 1374 1415 1414
3 1375 1376 1416
3 1375 1416 1415
3 1376 1377 1417
3 1376 1417 1416
3 1377 1378 1417
3 1378 1379 1418
3 1378 1418 1417
3 1379 1419 1418
3 1379 1380 1419
3 1380 1420 1419
3 1380 1381 1421
3 1380 1421 1420
3 1381 1382 1422
3 1381 1422 1421
3 1382 1383 1422
3 1383 1423 1422
3 1383 1384 1423
3 1384 1424 1423
3 1384 1385 1425
3 1384 1425 1424
3 1385 1426 1425
3 1385 1386 1426
3 1386 1427 1426
3 1386 1387 1427
3 1387 1388 1428
3 1387 1428 1427
3 1388 1389 1429
3 1388 1429 1428
3 1389 1390 1429
3 1390 1391 1430
3 1390 1430 1429
3 1391 1392 1431
3 1391 1431 1430
3 1392 1393 1432
3 1392 1432 1431
3 1393 1394 1433
3 1393 1433 1432
3 1394 1395 1434
3 1394 1434 1433
3 1395 1359 1396
3 1395 1396 1434
3 1396 1397 1436
3 1396 1436 1435
3 1397 1398 1437
3 1397 1437 1436
3 1398 1438 1437
3 1398 1399 1479
3 1398 1479 1438
3 1399 1400 1439
3 1399 1439 1479
3 1400 1440 1439
3 1400 1401 1440
3 1401 1441 1440
3 1401 1402 1441
3 1402 1442 1441
3 1402 1403 1443
3 1402 1443 1442
3 1403 1404 1444
3 1403 1444 1443
3 1404 1445 1444
3 1404 1405 1446
3 1404 1446 1445
3 1405 1447 1446
3 1405 1448 1447
3 1405 1406 1448
3 1406 1407 1448
3 1407 1408 1449
3 1407 1449 1448
3 1408 1409 1450
3 1408 1450 1449
3 1409 1410 1451
3 1409 1451 1450
3 1410 1411 1451
3 1411 1412 1452
3 1411 1452 1451
3 1412 1453 1452
3 1412 1413 1453
3 1413 1414 1454
3 1413 1454 1453
3 1414 1415 1455
3 1414 1455 1454
3 1415 1416 1456
3 1415 1456 1455
3 1416 1417 1457
3 1416 1457 1456
3 1417 1418 1458
3 1417 1458 1457
3 1418 1419 1459
3 1418 1459 1458
3 1419 1460 1459
3 1419 1420 1460
3 1420 1461 1460
3 1420 1421 1462
3 1420 1462 1461
3 1421 1422 1462
3 1422 1463 1462
3 1422 1423 1463
3 1423 1464 1463
3 1423 1424 1465
3 1423 1465 1464
3 1424 1425 1466
3 1424 1466 1465
3 1425 1426 1467
3 1425 1467 1466
3 1426 1427 1467
3 1427 1468 1467
3 1427 1428 1469
3 1427 1469 1468
3 1428 1429 1469
3 1429 1470 1469
3 1429 1430 1471
3 1429 1471 1470
3 1430 1431 1472
3 1430 1472 1471
3 1431 1432 1473
3 1431 1473 1472
3 1432 1474 1473
3 1432 1433 1474
3 1433 1475 1474
3 1433 1434 1475
3 1434 1396 1435
3 1434 1435 1475
3 1435 1436 1477
3 1435 1477 1476
3 1436 1437 1478
3 1436 1478 1477
3 1437 1438 1511
3 1437 1511 1478
3 1438 1479 1511
3 1479 1439 1480
3 1439 1440 1480
3 1440 1481 1480
3 1440 1441 1481
3 1441 1442 1482
3 1441 1482 1481
3 1442 1443 1482
3 1443 1444 1483
3 1443 1483 1482
3 1444 1445 1484
3 1444 1484 1483
3 1445 1446 1484
3 1446 1447 1485
3 1446 1485 1484
3 1447 1486 1485
3 1447 1448 1486
3 1448 1487 1486
3 1448 1449 1487
3 1449 1450 1487
3 1450 1451 1487
3 1451 1488 1487
3 1451 1452 1488
3 1452 1453 1488
3 1453 1489 1488
3 1453 1454 1490
3 1453 1490 1489
3 1454 1455 1490
3 1455 1491 1490
3 1455 1456 1491
3 1456 1457 1491
3 1457 1492 1491
3 1457 1458 1492
3 1458 1459 1493
3 1458 1493 1492
3 1459 1460 1493
3 1460 1461 1494
3 1460 1494 1493
3 1461 1462 1494
3 1462 1495 1494
3 1462 1463 1496
3 1462 1496 1495
3 1463 1464 1497
3 1463 1497 1496
3 1464 1465 1498
3 1464 1498 1497
3 1465 1466 1499
3 1465 1499 1498
3 1466 1467 1500
3 1466 1500 1499
3 1467 1501 1500
3 1467 1468 1501
3 1468 1469 1501
3 1469 1502 1501
3 1469 1470 1503
3 1469 1503 1502
3 1470 1471 1504
3 1470 1504 1503
3 1471 1472 1504
3 1472 1505 1504
3 1472 1473 1506
3 1472 1506 1505
3 1473 1474 1507
3 1473 1507 1506
3 1474 1508 1507
3 1474 1475 1508
3 1475 1476 1508
3 1475 1435 1476
3 1476 1477 1510
3 1476 1510 1509
3 1477 1478 1511
3 1477 1511 1510
3 1480 1481 1512
3 1481 1482 1513
3 1481 1513 1512
3 1482 1483 1514
3 1482 1514 1513
3 1483 1484 1514
3 1484 1515 1514
3 1484 1485 1515
3 1485 1486 1516
3 1485 1516 1515
3 1486 1487 1516
3 1487 1517 1516
3 1487 1518 1517
3 1487 1488 1519
3 1487 1519 1518
3 1488 1520 1519
3 1488 1489 1520
3 1489 1490 1520
3 1490 1521 1520
3 1490 1491 1521
3 1491 1522 1521
3 1491 1523 1522
3 1491 1492 1523
3 1492 1524 1523
3 1492 1493 1525
3 1492 1525 1524
3 1493 1494 1526
3 1493 1526 1525
3 1494 1495 1527
3 1494 1527 1526
3 1495 1496 1527
3 1496 1497 1528
3 1496 1528 1527
3 1497 1498 1529
3 1497 1529 1528
3 1498 1499 1529
3 1499 1530 1529
3 1499 1500 1530
3 1500 1531 1530
3 1500 1501 1532
3 1500 1532 1531
3 1501 1502 1533
3 1501 1533 1532
3 1502 1503 1533
3 1503 1504 1534
3 1503 1534 1533
3 1504 1535 1534
3 1504 1505 1535
3 1505 1506 1536
3 1505 1536 1535
3 1506 1507 1537
3 1506 1537 1536
3 1507 1508 1538
3 1507 1538 1537
3 1508 1476 1509
3 1508 1509 1538
3 1509 1510 1556
3 1509 1556 1574
3 1510 1511 1556
3 1511 1479 1557
3 1511 1557 1556
3 1479 1480 1557
3 1480 1512 1557
3 1512 1513 1558
3 1513 1514 1539
3 1514 1515 1540
3 1514 1540 1539
3 1515 1516 1540
3 1516 1541 1540
3 1516 1542 1541
3 1516 1517 1542
3 1517 1518 1542
3 1518 1519 1543
3 1518 1543 1542
3 1519 1520 1543
3 1520 1544 1543
3 1520 1521 1545
3 1520 1545 1544
3 1521 1522 1546
3 1521 1546 1545
3 1522 1523 1546
3 1523 1547 1546
3 1523 1524 1547
3 1524 1525 1548
3 1524 1548 1547
3 1525 1526 1548
3 1526 1549 1548
3 1526 1527 1549
3 1527 1550 1549
3 1527 1528 1550
3 1528 1529 1551
3 1528 1551 1550
3 1529 1530 1552
3 1529 1552 1551
3 1530 1531 1553
3 1530 1553 1552
3 1531 1532 1553
3 1532 1554 1553
3 1532 1533 1554
3 1533 1534 1555
3 1533 1555 1554
3 1534 1535 1571
3 1534 1571 1555
3 1535 1536 1571
3 1536 1537 1571
3 1537 1538 1573
3 1538 1509 1574
3 1538 1574 1573
3 1557 1512 1558
3 1513 1559 1558
3 1513 1539 1559
3 1539 1540 1559
3 1540 1560 1559
3 1540 1541 1560
3 1541 1542 1561
3 1542 1543 1561
3 1543 1575 1561
3 1543 1544 1562
3 1544 1545 1562
3 1545 1563 1562
3 1545 1546 1563
3 1546 1547 1564
3 1546 1564 1563
3 1547 1548 1564
3 1548 1565 1564
3 1548 1566 1565
3 1548 1549 1566
3 1549 1567 1566
3 1549 1550 1567
3 1550 1551 1568
3 1550 1568 1567
3 1551 1552 1568
3 1552 1553 1569
3 1552 1569 1568
3 1553 1554 1569
3 1554 1570 1569
3 1554 1555 1570
3 1555 1571 1570
3 1571 1537 1572
3 1537 1573 1572
3 1574 1556 1575
3 1556 1557 1575
3 1557 1558 1575
3 1558 1559 1575
3 1559 1560 1575
3 1560 1541 1575
3 1541 1561 1575
3 1543 1562 1575
3 1562 1563 1575
3 1563 1564 1575
3 1564 1565 1575
3 1565 1566 1575
3 1566 1567 1575
3 1567 1568 1575
3 1568 1569 1575
3 1569 1570 1575
3 1570 1571 1575
3 1571 1572 1575
3 1572 1573 1575
3 1573 1574 1575
3 1576 1600 1601
3 1576 1601 1577
3 1577 1601 1602
3 1577 1602 1578
3 1578 1602 1603
3 1578 1603 1579
3 1579 1603 1604
3 1579 1604 1580
3 1580 1604 1605
3 1580 1605 1581
3 1581 1605 1606
3 1581 1606 1582
3 1582 1606 1607
3 1582 1607 1583
3 1583 1607 1608
3 1583 1608 1584
3 1584 1608 1609
3 1584 1609 1585
3 1585 1609 1610
3 1585 1610 1586
3 1586 1610 1611
3 1586 1611 1587
3 1587 1611 1612
3 1587 1612 1588
3 1588 1612 1613
3 1588 1613 1589
3 1589 1613 1614
3 1589 1614 1590
3 1590 1614 1615
3 1590 1615 1591
3 1591 1615 1616
3 1591 1616 1592
3 1592 1616 1617
3 1592 1617 1593
3 1593 1617 1618
3 1593 1618 1594
3 1594 1618 1619
3 1594 1619 1595
3 1595 1619 1620
3 1595 1620 1596
3 1596 1620 1621
3 1596 1621 1597
3 1597 1621 1622
3 1597 1622 1598
3 1598 1622 1623
3 1598 1623 1599
3 1599 1623 1600
3 1599 1600 1576
3 1600 1624 1625
3 1600 1625 1601
3 1601 1625 1626
3 1601 1626 1602
3 1602 1626 1627
3 1602 1627 1603
3 1603 1627 1628
3 1603 1628 1604
3 1604 1628 1629
3 1604 1629 1605
3 1605 1629 1630
3 1605 1630 1606
3 1606 1630 1631
3 1606 1631 1607
3 1607 1631 1632
3 1607 1632 1608
3 1608 1632 1633
3 1608 1633 1609
3 1609 1633 1634
3 1609 1634 1610
3 1610 1634 1635
3 1610 1635 1611
3 1611 1635 1636
3 1611 1636 1612
3 1612 1636 1637
3 1612 1637 1613
3 1613 1637 1638
3 1613 1638 1614
3 1614 1638 1639
3 1614 1639 1615
3 1615 1639 1640
3 1615 1640 1616
3 1616 1640 1641
3 1616 1641 1617
3 1617 1641 1642
3 1617 1642 1618
3 1618 1642 1643
3 1618 1643 1619
3 1619 1643 1644
3 1619 1644 1620
3 1620 1644 1645
3 1620 1645 1621
3 1621 1645 1646
3 1621 1646 1622
3 1622 1646 1647
3 1622 1647 1623
3 1623 1647 1624
3 1623 1624 1600
3 1624 1648 1649
3 1624 1649 1625
3 1625 1649 1650
3 1625 1650 1626
3 1626 1650 1651
3 1626 1651 1627
3 1627 1651 1652
3 1627 1652 1628
3 1628 1652 1653
3 1628 1653 1629
3 1629 1653 1654
3 1629 1654 1630
3 1630 1654 1655
3 1630 1655 1631
3 1631 1655 1656
3 1631 1656 1632
3 1632 1656 1657
3 1632 1657 1633
3 1633 1657 1658
3 1633 1658 1634
3 1634 1658 1659
3 1634 1659 1635
3 1635 1659 1660
3 1635 1660 1636
3 1636 1660 1661
3 1636 1661 1637
3 1637 1661 1662
3 1637 1662 1638
3 1638 1662 1663
3 1638 1663 1639
3 1639 1663 1664
3 1639 1664 1640
3 1640 1664 1665
3 1640 1665 1641
3 1641 1665 1666
3 1641 1666 1642
3 1642 1666 1667
3 1642 1667 1643
3 1643 1667 1668
3 1643 1668 1644
3 1644 1668 1669
3 1644 1669 1645
3 1645 1669 1670
3 1645 1670 1646
3 1646 1670 1671
3 1646 1671 1647
3 1647 1671 1648
3 1647 1648 1624
3 1648 1672 1673
3 1648 1673 1649
3 1649 1673 1674
3 1649 1674 1650
3 1650 1674 1675
3 1650 1675 1651
3 1651 1675 1676
3 1651 1676 1652
3 1652 1676 1677
3 1652 1677 1653
3 1653 1677 1678
3 1653 1678 1654
3 1654 1678 1679
3 1654 1679 1655
3 1655 1679 1680
3 1655 1680 1656
3 1656 1680 1681
3 1656 1681 1657
3 1657 1681 1682
3 1657 1682 1658
3 1658 1682 1683
3 1658 1683 1659
3 1659 1683 1684
3 1659 1684 1660
3 1660 1684 1685
3 1660 1685 1661
3 1661 1685 1686
3 1661 1686 1662
3 1662 1686 1687
3 1662 1687 1663
3 1663 1687 1688
3 1663 1688 1664
3 1664 1688 1689
3 1664 1689 1665
3 1665 1689 1690
3 1665 1690 1666
3 1666 1690 1691
3 1666 1691 1667
3 1667 1691 1692
3 1667 1692 1668
3 1668 1692 1693
3 1668 1693 1669
3 1669 1693 1694
3 1669 1694 1670
3 1670 1694 1695
3 1670 1695 1671
3 1671 1695 1672
3 1671 1672 1648
3 1672 1696 1697
3 1672 1697 1673
3 1673 1697 1698
3 1673 1698 1674
3 1674 1698 1699
3 1674 1699 1675
3 1675 1699 1700
3 1675 1700 1676
3 1676 1700 1701
3 1676 1701 1677
3 1677 1701 1702
3 1677 1702 1678
3 1678 1702 1703
3 1678 1703 1679
3 1679 1703 1704
3 1679 1704 1680
3 1680 1704 1705
3 1680 1705 1681
3 1681 1705 1706
3 1681 1706 1682
3 1682 1706 1707
3 1682 1707 1683
3 1683 1707 1708
3 1683 1708 1684
3 1684 1708 1709
3 1684 1709 1685
3 1685 1709 1710
3 1685 1710 1686
3 1686 1710 1711
3 1686 1711 1687
3 1687 1711 1712
3 1687 1712 1688
3 1688 1712 1713
3 1688 1713 1689
3 1689 1713 1714
3 1689 1714 1690
3 1690 1714 1715
3 1690 1715 1691
3 1691 1715 1716
3 1691 1716 1692
3 1692 1716 1717
3 1692 1717 1693
3 1693 1717 1718
3 1693 1718 1694
3 1694 1718 1719
3 1694 1719 1695
3 1695 1719 1696
3 1695 1696 1672
3 1696 1720 1721
3 1696 1721 1697
3 1697 1721 1722
3 1697 1722 1698
3 1698 1722 1723
3 1698 1723 1699
3 1699 1723 1724
3 1699 1724 1700
3 1700 1724 1725
3 1700 1725 1701
3 1701 1725 1726
3 1701 1726 1702
3 1702 1726 1727
3 1702 1727 1703
3 1703 1727 1728
3 1703 1728 1704
3 1704 1728 1729
3 1704 1729 1705
3 1705 1729 1730
3 1705 1730 1706
3 1706 1730 1731
3 1706 1731 1707
3 1707 1731 1732
3 1707 1732 1708
3 1708 1732 1733
3 1708 1733 1709
3 1709 1733 1734
3 1709 1734 1710
3 1710 1734 1735
3 1710 1735 1711
3 1711 1735 1736
3 1711 1736 1712
3 1712 1736 1737
3 1712 1737 1713
3 1713 1737 1738
3 1713 1738 1714
3 1714 1738 1739
3 1714 1739 1715
3 1715 1739 1740
3 1715 1740 1716
3 1716 1740 1741
3 1716 1741 1717
3 1717 1741 1742
3 1717 1742 1718
3 1718 1742 1743
3 1718 1743 1719
3 1719 1743 1720
3 1719 1720 1696
3 1720 1744 1745
3 1720 1745 1721
3 1721 1745 1746
3 1721 1746 1722
3 1722 1746 1747
3 1722 1747 1723
3 1723 1747 1748
3 1723 1748 1724
3 1724 1748 1749
3 1724 1749 1725
3 1725 1749 1750
3 1725 1750 1726
3 1726 1750 1751
3 1726 1751 1727
3 1727 1751 1752
3 1727 1752 1728
3 1728 1752 1753
3 1728 1753 1729
3 1729 1753 1754
3 1729 1754 1730
3 1730 1754 1755
3 1730 1755 1731
3 1731 1755 1756
3 1731 1756 1732
3 1732 1756 1757
3 1732 1757 1733
3 1733 1757 1758
3 1733 1758 1734
3 1734 1758 1759
3 1734 1759 1735
3 1735 1759 1760
3 1735 1760 1736
3 1736 1760 1761
3 1736 1761 1737
3 1737 1761 1762
3 1737 1762 1738
3 1738 1762 1763
3 1738 1763 1739
3 1739 1763 1764
3 1739 1764 1740
3 1740 1764 1765
3 1740 1765 1741
3 1741 1765 1766
3 1741 1766 1742
3 1742 1766 1767
3 1742 1767 1743
3 1743 1767 1744
3 1743 1744 1720
3 1744 1768 1769
3 1744 1769 1745
3 1745 1769 1770
3 1745 1770 1746
3 1746 1770 1771
3 1746 1771 1747
3 1747 1771 1772
3 1747 1772 1748
3 1748 1772 1773
3 1748 1773 1749
3 1749 1773 1774
3 1749 1774 1750
3 1750 1774 1775
3 1750 1775 1751
3 1751 1775 1776
3 1751 1776 1752
3 1752 1776 1777
3 1752 1777 1753
3 1753 1777 1778
3 1753 1778 1754
3 1754 1778 1779
3 1754 1779 1755
3 1755 1779 1780
3 1755 1780 1756
3 1756 1780 1781
3 1756 1781 1757
3 1757 1781 1782
3 1757 1782 1758
3 1758 1782 1783
3 1758 1783 1759
3 1759 1783 1784
3 1759 1784 1760
3 1760 1784 1785
3 1760 1785 1761
3 1761 1785 1786
3 1761 1786 1762
3 1762 1786 1787
3 1762 1787 1763
3 1763 1787 1788
3 1763 1788 1764
3 1764 1788 1789
3 1764 1789 1765
3 1765 1789 1790
3 1765 1790 1766
3 1766 1790 1791
3 1766 1791 1767
3 1767 1791 1768
3 1767 1768 1744
3 1768 1792 1793
3 1768 1793 1769
3 1769 1793 1794
3 1769 1794 1770
3 1770 1794 1795
3 1770 1795 1771
3 1771 1795 1796
3 1771 1796 1772
3 1772 1796 1797
3 1772 1797 1773
3 1773 1797 1798
3 1773 1798 1774
3 1774 1798 1799
3 1774 1799 1775
3 1775 1799 1800
3 1775 1800 1776
3 1776 1800 1801
3 1776 1801 1777
3 1777 1801 1802
3 1777 1802 1778
3 1778 1802 1803
3 1778 1803 1779
3 1779 1803 1804
3 1779 1804 1780
3 1780 1804 1805
3 1780 1805 1781
3 1781 1805 1806
3 1781 1806 1782
3 1782 1806 1807
3 1782 1807 1783
3 1783 1807 1808
3 1783 1808 1784
3 1784 1808 1809
3 1784 1809 1785
3 1785 1809 1810
3 1785 1810 1786
3 1786 1810 1811
3 1786 1811 1787
3 1787 1811 1812
3 1787 1812 1788
3 1788 1812 1813
3 1788 1813 1789
3 1789 1813 1814
3 1789 1814 1790
3 1790 1814 1815
3 1790 1815 1791
3 1791 1815 1792
3 1791 1792 1768
3 1792 1816 1817
3 1792 1817 1793
3 1793 1817 1818
3 1793 1818 1794
3 1794 1818 1819
3 1794 1819 1795
3 1795 1819 1820
3 1795 1820 1796
3 1796 1820 1821
3 1796 1821 1797
3 1797 1821 1822
3 1797 1822 1798
3 1798 1822 1823
3 1798 1823 1799
3 1799 1823 1824
3 1799 1824 1800
3 1800 1824 1825
3 1800 1825 1801
3 1801 1825 1826
3 1801 1826 1802
3 1802 1826 1827
3 1802 1827 1803
3 1803 1827 1828
3 1803 1828 1804
3 1804 1828 1829
3 1804 1829 1805
3 1805 1829 1830
3 1805 1830 1806
3 1806 1830 1831
3 1806 1831 1807
3 1807 1831 1832
3 1807 1832 1808
3 1808 1832 1833
3 1808 1833 1809
3 1809 1833 1834
3 1809 1834 1810
3 1810 1834 1835
3 1810 1835 1811
3 1811 1835 1836
3 1811 1836 1812
3 1812 1836 1837
3 1812 1837 1813
3 1813 1837 1838
3 1813 1838 1814
3 1814 1838 1839
3 1814 1839 1815
3 1815 1839 1816
3 1815 1816 1792
3 1816 1840 1841
3 1816 1841 1817
3 1817 1841 1842
3 1817 1842 1818
3 1818 1842 1843
3 1818 1843 1819
3 1819 1843 1844
3 1819 1844 1820
3 1820 1844 1845
3 1820 1845 1821
3 1821 1845 1846
3 1821 1846 1822
3 1822 1846 1847
3 1822 1847 1823
3 1823 1847 1848
3 1823 1848 1824
3 1824 1848 1849
3 1824 1849 1825
3 1825 1849 1850
3 1825 1850 1826
3 1826 1850 1851
3 1826 1851 1827
3 1827 1851 1852
3 1827 1852 1828
3 1828 1852 1853
3 1828 1853 1829
3 1829 1853 1854
3 1829 1854 1830
3 1830 1854 1855
3 1830 1855 1831
3 1831 1855 1856
3 1831 1856 1832
3 1832 1856 1857
3 1832 1857 1833
3 1833 1857 1858
3 1833 1858 1834
3 1834 1858 1859
3 1834 1859 1835
3 1835 1859 1860
3 1835 1860 1836
3 1836 1860 1861
3 1836 1861 1837
3 1837 1861 1862
3 1837 1862 1838
3 1838 1862 1863
3 1838 1863 1839
3 1839 1863 1840
3 1839 1840 1816
3 1864 1576 1577
3 1864 1577 1578
3 1864 1578 1579
3 1864 1579 1580
3 1864 1580 1581
3 1864 1581 1582
3 1864 1582 1583
3 1864 1583 1584
3 1864 1584 1585
3 1864 1585 1586
3 1864 1586 1587
3 1864 1587 1588
3 1864 1588 1589
3 1864 1589 1590
3 1864 1590 1591
3 1864 1591 1592
3 1864 1592 1593
3 1864 1593 1594
3 1864 1594 1595
3 1864 1595 1596
3 1864 1596 1597
3 1864 1597 1598
3 1864 1598 1599
3 1864 1599 1576
3 1865 1866 1867
3 1865 1867 1868
3 1865 1868 1869
3 1865 1869 1870
3 1865 1870 1871
3 1865 1871 1872
3 1865 1872 1873
3 1865 1873 1874
3 1865 1874 1866
3 1875 1899 1900
3 1875 1900 1876
3 1876 1900 1901
3 1876 1901 1877
3 1877 1901 1902
3 1877 1902 1878
3 1878 1902 1903
3 1878 1903 1879
3 1879 1903 1904
3 1879 1904 1880
3 1880 1904 1905
3 1880 1905 1881
3 1881 1905 1906
3 1881 1906 1882
3 1882 1906 1907
3 1882 1907 1883
3 1883 1907 1908
3 1883 1908 1884
3 1884 1908 1909
3 1884 1909 1885
3 1885 1909 1910
3 1885 1910 1886
3 1886 1910 1911
3 1886 1911 1887
3 1887 1911 1912
3 1887 1912 1888
3 1888 1912 1913
3 1888 1913 1889
3 1889 1913 1914
3 1889 1914 1890
3 1890 1914 1915
3 1890 1915 1891
3 1891 1915 1916
3 1891 1916 1892
3 1892 1916 1917
3 1892 1917 1893
3 1893 1917 1918
3 1893 1918 1894
3 1894 1918 1919
3 1894 1919 1895
3 1895 1919 1920
3 1895 1920 1896
3 1896 1920 1921
3 1896 1921 1897
3 1897 1921 1922
3 1897 1922 1898
3 1898 1922 1899
3 1898 1899 1875
3 1899 1923 1924
3 1899 1924 1900
3 1900 1924 1925
3 1900 1925 1901
3 1901 1925 1926
3 1901 1926 1902
3 1902 1926 1927
3 1902 1927 1903
3 1903 1927 1928
3 1903 1928 1904
3 1904 1928 1929
3 1904 1929 1905
3 1905 1929 1930
3 1905 1930 1906
3 1906 1930 1931
3 1906 1931 1907
3 1907 1931 1932
3 1907 1932 1908
3 1908 1932 1933
3 1908 1933 1909
3 1909 1933 1934
3 1909 1934 1910
3 1910 1934 1935
3 1910 1935 1911
3 1911 1935 1936
3 1911 1936 1912
3 1912 1936 1937
3 1912 1937 1913
3 1913 1937 1938
3 1913 1938 1914
3 1914 1938 1939
3 1914 1939 1915
3 1915 1939 1940
3 1915 1940 1916
3 1916 1940 1941
3 1916 1941 1917
3 1917 1941 1942
3 1917 1942 1918
3 1918 1942 1943
3 1918 1943 1919
3 1919 1943 1944
3 1919 1944 1920
3 1920 1944 1945
3 1920 1945 1921
3 1921 1945 1946
3 1921 1946 1922
3 1922 1946 1923
3 1922 1923 1899
3 1923 1947 1948
3 1923 1948 1924
3 1924 1948 1949
3 1924 1949 1925
3 1925 1949 1950
3 1925 1950 1926
3 1926 1950 1951
3 1926 1951 1927
3 1927 1951 1952
3 1927 1952 1928
3 1928 1952 1953
3 1928 1953 1929
3 1929 1953 1954
3 1929 1954 1930
3 1930 1954 1955
3 1930 1955 1931
3 1931 1955 1956
3 1931 1956 1932
3 1932 1956 1957
3 1932 1957 1933
3 1933 1957 1958
3 1933 1958 1934
3 1934 1958 1959
3 1934 1959 1935
3 1935 1959 1960
3 1935 1960 1936
3 1936 1960 1961
3 1936 1961 1937
3 1937 1961 1962
3 1937 1962 1938
3 1938 1962 1963
3 1938 1963 1939
3 1939 1963 1964
3 1939 1964 1940
3 1940 1964 1965
3 1940 1965 1941
3 1941 1965 1966
3 1941 1966 1942
3 1942 1966 1967
3 1942 1967 1943
3 1943 1967 1968
3 1943 1968 1944
3 1944 1968 1969
3 1944 1969 1945
3 1945 1969 1970
3 1945 1970 1946
3 1946 1970 1947
3 1946 1947 1923
3 1947 1971 1972
3 1947 1972 1948
3 1948 1972 1973
3 1948 1973 1949
3 1949 1973 1974
3 1949 1974 1950
3 1950 1974 1975
3 1950 1975 1951
3 1951 1975 1976
3 1951 1976 1952
3 1952 1976 1977
3 1952 1977 1953
3 1953 1977 1978
3 1953 1978 1954
3 1954 1978 1979
3 1954 1979 1955
3 1955 1979 1980
3 1955 1980 1956
3 1956 1980 1981
3 1956 1981 1957
3 1957 1981 1982
3 1957 1982 1958
3 1958 1982 1983
3 1958 1983 1959
3 1959 1983 1984
3 1959 1984 1960
3 1960 1984 1985
3 1960 1985 1961
3 1961 1985 1986
3 1961 1986 1962
3 1962 1986 1987
3 1962 1987 1963
3 1963 1987 1988
3 1963 1988 1964
3 1964 1988 1989
3 1964 1989 1965
3 1965 1989 1990
3 1965 1990 1966
3 1966 1990 1991
3 1966 1991 1967
3 1967 1991 1992
3 1967 1992 1968
3 1968 1992 1993
3 1968 1993 1969
3 1969 1993 1994
3 1969 1994 1970
3 1970 1994 1971
3 1970 1971 1947
3 1971 1995 1996
3 1971 1996 1972
3 1972 1996 1997
3 1972 1997 1973
3 1973 1997 1998
3 1973 1998 1974
3 1974 1998 1999
3 1974 1999 1975
3 1975 1999 2000
3 1975 2000 1976
3 1976 2000 2001
3 1976 2001 1977
3 1977 2001 2002
3 1977 2002 1978
3 1978 2002 2003
3 1978 2003 1979
3 1979 2003 2004
3 1979 2004 1980
3 1980 2004 2005
3 1980 2005 1981
3 1981 2005 2006
3 1981 2006 1982
3 1982 2006 2007
3 1982 2007 1983
3 1983 2007 2008
3 1983 2008 1984
3 1984 2008 2009
3 1984 2009 1985
3 1985 2009 2010
3 1985 2010 1986
3 1986 2010 2011
3 1986 2011 1987
3 1987 2011 2012
3 1987 2012 1988
3 1988 2012 2013
3 1988 2013 1989
3 1989 2013 2014
3 1989 2014 1990
3 1990 2014 2015
3 1990 2015 1991
3 1991 2015 2016
3 1991 2016 1992
3 1992 2016 2017
3 1992 2017 1993
3 1993 2017 2018
3 1993 2018 1994
3 1994 2018 1995
3 1994 1995 1971
3 1995 2019 2020
3 1995 2020 1996
3 1996 2020 2021
3 1996 2021 1997
3 1997 2021 2022
3 1997 2022 1998
3 1998 2022 2023
3 1998 2023 1999
3 1999 2023 2024
3 1999 2024 2000
3 2000 2024 2025
3 2000 2025 2001
3 2001 2025 2026
3 2001 2026 2002
3 2002 2026 2027
3 2002 2027 2003
3 2003 2027 2028
3 2003 2028 2004
3 2004 2028 2029
3 2004 2029 2005
3 2005 2029 2030
3 2005 2030 2006
3 2006 2030 2031
3 2006 2031 2007
3 2007 2031 2032
3 2007 2032 2008
3 2008 2032 2033
3 2008 2033 2009
3 2009 2033 2034
3 2009 2034 2010
3 2010 2034 2035
3 2010 2035 2011
3 2011 2035 2036
3 2011 2036 2012
3 2012 2036 2037
3 2012 2037 2013
3 2013 2037 2038
3 2013 2038 2014
3 2014 2038 2039
3 2014 2039 2015
3 2015 2039 2040
3 2015 2040 2016
3 2016 2040 2041
3 2016 2041 2017
3 2017 2041 2042
3 2017 2042 2018
3 2018 2042 2019
3 2018 2019 1995
3 2019 2043 2044
3 2019 2044 2020
3 2020 2044 2045
3 2020 2045 2021
3 2021 2045 2046
3 2021 2046 2022
3 2022 2046 2047
3 2022 2047 2023
3 2023 2047 2048
3 2023 2048 2024
3 2024 2048 2049
3 2024 2049 2025
3 2025 2049 2050
3 2025 2050 2026
3 2026 2050 2051
3 2026 2051 2027
3 2027 2051 2052
3 2027 2052 2028
3 2028 2052 2053
3 2028 2053 2029
3 2029 2053 2054
3 2029 2054 2030
3 2030 2054 2055
3 2030 2055 2031
3 2031 2055 2056
3 2031 2056 2032
3 2032 2056 2057
3 2032 2057 2033
3 2033 2057 2058
3 2033 2058 2034
3 2034 2058 2059
3 2034 2059 2035
3 2035 2059 2060
3 2035 2060 2036
3 2036 2060 2061
3 2036 2061 2037
3 2037 2061 2062
3 2037 2062 2038
3 2038 2062 2063
3 2038 2063 2039
3 2039 2063 2064
3 2039 2064 2040
3 2040 2064 2065
3 2040 2065 2041
3 2041 2065 2066
3 2041 2066 2042
3 2042 2066 2043
3 2042 2043 2019
3 2043 2067 2068
3 2043 2068 2044
3 2044 2068 2069
3 2044 2069 2045
3 2045 2069 2070
3 2045 2070 2046
3 2046 2070 2071
3 2046 2071 2047
3 2047 2071 2072
3 2047 2072 2048
3 2048 2072 2073
3 2048 2073 2049
3 2049 2073 2074
3 2049 2074 2050
3 2050 2074 2075
3 2050 2075 2051
3 2051 2075 2076
3 2051 2076 2052
3 2052 2076 2077
3 2052 2077 2053
3 2053 2077 2078
3 2053 2078 2054
3 2054 2078 2079
3 2054 2079 2055
3 2055 2079 2080
3 2055 2080 2056
3 2056 2080 2081
3 2056 2081 2057
3 2057 2081 2082
3 2057 2082 2058
3 2058 2082 2083
3 2058 2083 2059
3 2059 2083 2084
3 2059 2084 2060
3 2060 2084 2085
3 2060 2085 2061
3 2061 2085 2086
3 2061 2086 2062
3 2062 2086 2087
3 2062 2087 2063
3 2063 2087 2088
3 2063 2088 2064
3 2064 2088 2089
3 2064 2089 2065
3 2065 2089 2090
3 2065 2090 2066
3 2066 2090 2067
3 2066 2067 2043
3 2067 2091 2092
3 2067 2092 2068
3 2068 2092 2093
3 2068 2093 2069
3 2069 2093 2094
3 2069 2094 2070
3 2070 2094 2095
3 2070 2095 2071
3 2071 2095 2096
3 2071 2096 2072
3 2072 2096 2097
3 2072 2097 2073
3 2073 2097 2098
3 2073 2098 2074
3 2074 2098 2099
3 2074 2099 2075
3 2075 2099 2100
3 2075 2100 2076
3 2076 2100 2101
3 2076 2101 2077
3 2077 2101 2102
3 2077 2102 2078
3 2078 2102 2103
3 2078 2103 2079
3 2079 2103 2104
3 2079 2104 2080
3 2080 2104 2105
3 2080 2105 2081
3 2081 2105 2106
3 2081 2106 2082
3 2082 2106 2107
3 2082 2107 2083
3 2083 2107 2108
3 2083 2108 2084
3 2084 2108 2109
3 2084 2109 2085
3 2085 2109 2110
3 2085 2110 2086
3 2086 2110 2111
3 2086 2111 2087
3 2087 2111 2112
3 2087 2112 2088
3 2088 2112 2113
3 2088 2113 2089
3 2089 2113 2114
3 2089 2114 2090
3 2090 2114 2091
3 2090 2091 2067
3 2091 2115 2116
3 2091 2116 2092
3 2092 2116 2117
3 2092 2117 2093
3 2093 2117 2118
3 2093 2118 2094
3 2094 2118 2119
3 2094 2119 2095
3 2095 2119 2120
3 2095 2120 2096
3 2096 2120 2121
3 2096 2121 2097
3 2097 2121 2122
3 2097 2122 2098
3 2098 2122 2123
3 2098 2123 2099
3 2099 2123 2124
3 2099 2124 2100
3 2100 2124 2125
3 2100 2125 2101
3 2101 2125 2126
3 2101 2126 2102
3 2102 2126 2127
3 2102 2127 2103
3 2103 2127 2128
3 2103 2128 2104
3 2104 2128 2129
3 2104 2129 2105
3 2105 2129 2130
3 2105 2130 2106
3 2106 2130 2131
3 2106 2131 2107
3 2107 2131 2132
3 2107 2132 2108
3 2108 2132 2133
3 2108 2133 2109
3 2109 2133 2134
3 2109 2134 2110
3 2110 2134 2135
3 2110 2135 2111
3 2111 2135 2136
3 2111 2136 2112
3 2112 2136 2137
3 2112 2137 2113
3 2113 2137 2138
3 2113 2138 2114
3 2114 2138 2115
3 2114 2115 2091
3 2115 2139 2140
3 2115 2140 2116
3 2116 2140 2141
3 2116 2141 2117
3 2117 2141 2142
3 2117 2142 2118
3 2118 2142 2143
3 2118 2143 2119
3 2119 2143 2144
3 2119 2144 2120
3 2120 2144 2145
3 2120 2145 2121
3 2121 2145 2146
3 2121 2146 2122
3 2122 2146 2147
3 2122 2147 2123
3 2123 2147 2148
3 2123 2148 2124
3 2124 2148 2149
3 2124 2149 2125
3 2125 2149 2150
3 2125 2150 2126
3 2126 2150 2151
3 2126 2151 2127
3 2127 2151 2152
3 2127 2152 2128
3 2128 2152 2153
3 2128 2153 2129
3 2129 2153 2154
3 2129 2154 2130
3 2130 2154 2155
3 2130 2155 2131
3 2131 2155 2156
3 2131 2156 2132
3 2132 2156 2157
3 2132 2157 2133
3 2133 2157 2158
3 2133 2158 2134
3 2134 2158 2159
3 2134 2159 2135
3 2135 2159 2160
3 2135 2160 2136
3 2136 2160 2161
3 2136 2161 2137
3 2137 2161 2162
3 2137 2162 2138
3 2138 2162 2139
3 2138 2139 2115
3 2163 1875 1876
3 2163 1876 1877
3 2163 1877 1878
3 2163 1878 1879
3 2163 1879 1880
3 2163 1880 1881
3 2163 1881 1882
3 2163 1882 1883
3 2163 1883 1884
3 2163 1884 1885
3 2163 1885 1886
3 2163 1886 1887
3 2163 1887 1888
3 2163 1888 1889
3 2163 1889 1890
3 2163 1890 1891
3 2163 1891 1892
3 2163 1892 1893
3 2163 1893 1894
3 2163 1894 1895
3 2163 1895 1896
3 2163 1896 1897
3 2163 1897 1898
3 2163 1898 1875
3 2164 2165 2166
3 2164 2166 2167
3 2164 2167 2168
3 2164 2168 2169
3 2164 2169 2170
3 2164 2170 2171
3 2164 2171 2172
3 2164 2172 2173
3 2164 2173 2165
3 2174 2178 2177
3 2174 2175 2178
3 2175 2179 2178
3 2175 2176 2179
3 2177 2181 2180
3 2177 2178 2181
3 2178 2182 2181
3 2178 2179 2182
3 2180 2184 2183
3 2180 2181 2184
3 2181 2185 2184
3 2181 2182 2185
3 2183 2187 2186
3 2183 2184 2187
3 2184 2188 2187
3 2184 2185 2188
3 2186 2190 2189
3 2186 2187 2190
3 2187 2191 2190
3 2187 2188 2191
3 2189 2193 2192
3 2189 2190 2193
3 2190 2194 2193
3 2190 2191 2194
3 2192 2196 2195
3 2192 2193 2196
3 2193 2197 2196
3 2193 2194 2197
3 2195 2199 2198
3 2195 2196 2199
3 2196 2200 2199
3 2196 2197 2200
3 2198 2202 2201
3 2198 2199 2202
3 2199 2203 2202
3 2199 2200 2203
3 2201 2205 2204
3 2201 2202 2205
3 2202 2206 2205
3 2202 2203 2206
3 2204 2208 2207
3 2204 2205 2208
3 2205 2209 2208
3 2205 2206 2209
3 2207 2211 2210
3 2207 2208 2211
3 2208 2212 2211
3 2208 2209 2212
3 2210 2214 2213
3 2210 2211 2214
3 2211 2215 2214
3 2211 2212 2215
3 2216 2219 2220
3 2216 2220 2217
3 2217 2220 2221
3 2217 2221 2218
3 2219 2222 2223
3 2219 2223 2220
3 2220 2223 2224
3 2220 2224 2221
3 2222 2225 2226
3 2222 2226 2223
3 2223 2226 2227
3 2223 2227 2224
3 2225 2228 2229
3 2225 2229 2226
3 2226 2229 2230
3 2226 2230 2227
3 2228 2231 2232
3 2228 2232 2229
3 2229 2232 2233
3 2229 2233 2230
3 2231 2234 2235
3 2231 2235 2232
3 2232 2235 2236
3 2232 2236 2233
3 2234 2237 2238
3 2234 2238 2235
3 2235 2238 2239
3 2235 2239 2236
3 2237 2240 2241
3 2237 2241 2238
3 2238 2241 2242
3 2238 2242 2239
3 2240 2243 2244
3 2240 2244 2241
3 2241 2244 2245
3 2241 2245 2242
3 2243 2246 2247
3 2243 2247 2244
3 2244 2247 2248
3 2244 2248 2245
3 2246 2249 2250
3 2246 2250 2247
3 2247 2250 2251
3 2247 2251 2248
3 2249 2252 2253
3 2249 2253 2250
3 2250 2253 2254
3 2250 2254 2251
3 2252 2255 2256
3 2252 2256 2253
3 2253 2256 2257
3 2253 2257 2254
`,hl=`ply
format ascii 1.0
comment Adapted from the CC0 MakeHuman hm08 base mesh, with Footnotes artwork.
comment Source https://github.com/makehumancommunity/makehuman/blob/a8bc2d54ff0ac92e78ff71431b1023eda42bf482/makehuman/data/3dobjs/base.obj
comment Units are metres. RGB values are sRGB in the range 0 to 1.
element vertex 361
property float x
property float y
property float z
property float nx
property float ny
property float nz
property float red
property float green
property float blue
element face 700
property list uchar ushort vertex_indices
end_header
-0.01511 -0.1107 -0.03865 -0.69083 0.03021 -0.72239 0.76966 0.53603 0.4029
-0.01734 -0.11084 -0.03625 -0.9056 -0.24796 -0.3441 0.76965 0.53599 0.40287
-0.00771 -0.11088 -0.0272 0.18126 -0.37575 0.90882 0.76965 0.53597 0.40287
-0.01398 -0.11273 -0.02896 -0.52305 -0.54583 0.65459 0.76946 0.53538 0.40254
-0.01829 -0.10928 -0.03123 -0.92014 -0.35377 0.16788 0.76981 0.53648 0.40314
-0.01996 -0.0951 -0.0254 -0.82203 -0.39155 0.41347 0.77114 0.54067 0.40543
-0.00891 -0.09861 -0.02189 0.22556 -0.61313 0.75709 0.77083 0.5397 0.4049
-0.0069 -0.09712 -0.02061 -0.04045 -0.88588 0.46214 0.77097 0.54012 0.40513
-0.01156 -0.09533 -0.02014 -0.39646 -0.6688 0.62891 0.77112 0.54061 0.40539
-0.0096 -0.10768 -0.04141 -0.08705 0.31696 -0.94444 0.76997 0.53698 0.40342
0.01 -0.14094 -0.05638 -0.27297 0.15881 -0.94882 0.76692 0.52742 0.3982
0.00158 -0.13691 -0.0514 -0.73048 -0.29252 -0.61712 0.7672 0.52827 0.39867
0.0073 -0.14013 -0.04677 0.17411 -0.49544 0.85102 0.76697 0.52758 0.39829
0.00414 -0.13979 -0.04688 -0.35693 -0.76915 0.53011 0.81711 0.59738 0.52324
0.01296 -0.14726 -0.05608 0.37271 -0.62391 -0.6869 0.76662 0.52646 0.39768
0.01268 -0.14741 -0.05371 0.74273 -0.64852 0.16665 0.76661 0.52644 0.39767
0.00045 -0.13708 -0.04802 -0.4201 -0.89411 -0.15521 0.81841 0.59923 0.52646
0.00241 -0.11937 -0.03984 0.93626 0.34789 0.04882 0.76878 0.53326 0.40139
0.00131 -0.11782 -0.04345 0.84281 0.47284 -0.25708 0.76894 0.53376 0.40166
-0.00349 -0.10923 -0.03846 0.86419 0.31222 -0.39457 0.76981 0.5365 0.40315
-0.00479 -0.0955 -0.03263 0.9096 0.08632 -0.40642 0.77111 0.54056 0.40537
0.01465 -0.14449 -0.0568 0.8598 0.0242 -0.51006 0.76673 0.52682 0.39787
0.01416 -0.14497 -0.05353 0.9556 -0.09052 0.28042 0.76671 0.52675 0.39783
0.00995 -0.14602 -0.05109 -0.56551 -0.7942 0.22237 0.76667 0.52661 0.39776
0.01346 -0.14067 -0.05239 0.92038 0.31075 0.23737 0.76694 0.52747 0.39823
0.01342 -0.14039 -0.05541 0.8386 0.48239 -0.25309 0.76696 0.52753 0.39826
-0.00488 -0.10803 -0.02768 0.65444 -0.11613 0.74714 0.76993 0.53687 0.40336
-0.01348 -0.10006 -0.02301 -0.1946 -0.44698 0.87312 0.7707 0.53929 0.40467
-0.01432 -0.11739 -0.03562 -0.75922 -0.6157 0.21094 0.76898 0.53389 0.40173
-0.00231 -0.1111 -0.03476 0.91464 0.40125 0.04926 0.76962 0.5359 0.40283
-0.00085 -0.12392 -0.04824 0.01638 0.35454 -0.9349 0.76833 0.53184 0.40061
0.00187 -0.12986 -0.04059 0.31392 -0.41973 0.85164 0.76777 0.53009 0.39966
-0.00644 -0.1299 -0.04304 -0.82118 -0.56844 0.05034 0.76777 0.53008 0.39965
-0.00469 -0.13055 -0.04147 -0.39777 -0.66797 0.62897 0.76771 0.5299 0.39955
-0.00045 -0.11756 -0.04551 0.43188 0.51287 -0.74192 0.76897 0.53384 0.4017
-0.00644 -0.10822 -0.04114 0.49066 0.3718 -0.78805 0.76991 0.53681 0.40332
0.01243 -0.14288 -0.05721 0.0372 0.18235 -0.98253 0.76681 0.52707 0.39801
0.0109 -0.14637 -0.05645 -0.41829 -0.63496 -0.6495 0.76665 0.52656 0.39773
0.00229 -0.12539 -0.04844 0.42898 0.55222 -0.71486 0.76819 0.53139 0.40037
-0.00471 -0.09676 -0.02542 0.81839 -0.56839 0.08472 0.771 0.54022 0.40518
0.0045 -0.12736 -0.04284 0.9137 0.17712 0.36576 0.768 0.53081 0.40005
0.01265 -0.14394 -0.0509 0.70354 -0.1921 0.6842 0.76676 0.5269 0.39792
0.01067 -0.14701 -0.05488 -0.60611 -0.77895 -0.16087 0.8153 0.59473 0.5188
-0.00288 -0.11898 -0.01437 -0.87902 -0.42262 -0.22074 0.76882 0.53339 0.40145
0.00734 -0.11787 -0.00403 0.14287 -0.23799 0.9607 0.76893 0.53374 0.40165
0.00305 -0.11814 -0.00398 -0.24043 -0.39891 0.88491 0.76891 0.53365 0.4016
-0.00005 -0.1185 -0.00561 -0.57667 -0.53281 0.61932 0.76887 0.53354 0.40154
-0.00284 -0.11884 -0.00929 -0.83069 -0.52767 0.17752 0.76884 0.53343 0.40148
-0.00706 -0.10084 -0.0013 -0.3363 -0.39497 0.85493 0.77063 0.53906 0.40455
-0.0089 -0.101 -0.01059 -0.9122 -0.32743 -0.24634 0.77061 0.53901 0.40452
-0.00808 -0.09507 -0.01556 -0.76616 -0.59181 -0.25052 0.77114 0.54068 0.40543
-0.00198 -0.0945 0.00039 -0.03811 -0.45607 0.88913 0.77119 0.54083 0.40551
0.01144 -0.13829 -0.02211 -0.83585 -0.54173 -0.08884 0.7671 0.52796 0.3985
0.00527 -0.11752 -0.01994 0.09998 0.30013 -0.94864 0.76897 0.53385 0.40171
0.00247 -0.0997 -0.01752 0.32409 -0.1361 -0.93618 0.77073 0.53939 0.40473
0.00568 -0.09701 -0.00234 0.44378 -0.64172 0.6255 0.77098 0.54015 0.40514
-0.00385 -0.10119 -0.0174 -0.48232 -0.21677 -0.84875 0.7706 0.53896 0.40449
0.02942 -0.15405 -0.03376 -0.19298 -0.09203 -0.97688 0.76651 0.52612 0.39749
0.01977 -0.14802 -0.02794 -0.77109 -0.5923 -0.23366 0.76659 0.52638 0.39764
0.02713 -0.14934 -0.01877 0.07224 -0.48963 0.86893 0.76656 0.52627 0.39757
0.02857 -0.15642 -0.03144 -0.55066 -0.82756 -0.10915 0.76651 0.52612 0.39749
0.02428 -0.14787 -0.01828 -0.29569 -0.68039 0.67055 0.77448 0.53745 0.41725
0.03235 -0.15681 -0.02545 -0.1561 -0.93041 0.33162 0.81675 0.59673 0.52242
0.0334 -0.15785 -0.02888 0.24231 -0.95496 -0.1713 0.78914 0.55792 0.45376
0.01908 -0.14651 -0.02159 -0.56544 -0.77364 0.28595 0.81833 0.59898 0.52633
0.01248 -0.11693 -0.01176 0.88164 0.46347 -0.0889 0.76903 0.53404 0.40181
0.01097 -0.11672 -0.01605 0.7088 0.49091 -0.50658 0.76905 0.5341 0.40185
0.00913 -0.10409 -0.00953 0.98759 0.14858 0.05081 0.77032 0.53809 0.40402
0.00846 -0.09826 -0.01293 0.93943 -0.01671 -0.34234 0.77086 0.5398 0.40496
0.03589 -0.15616 -0.03042 0.86661 -0.11285 -0.48606 0.76651 0.52612 0.39749
0.03643 -0.15533 -0.02628 0.98805 0.0202 0.1528 0.76651 0.52612 0.39749
0.0343 -0.15121 -0.02952 0.73677 0.55626 -0.38437 0.76652 0.52616 0.39751
0.01315 -0.12241 -0.00742 0.5573 -0.07506 0.82692 0.76848 0.53231 0.40087
0.00144 -0.12051 -0.01934 -0.64559 -0.18279 -0.74149 0.76867 0.5329 0.40119
0.01257 -0.13984 -0.01793 -0.67898 -0.68282 0.26971 0.76699 0.52764 0.39832
0.01536 -0.13958 -0.0149 -0.40312 -0.64678 0.64743 0.76701 0.52769 0.39835
0.02349 -0.13837 -0.01523 0.60377 0.02466 0.79678 0.76709 0.52794 0.39849
0.02349 -0.13655 -0.01935 0.84666 0.50701 -0.16157 0.76722 0.52836 0.39871
0.02226 -0.1365 -0.02256 0.71391 0.55869 -0.42213 0.76723 0.52837 0.39872
0.01724 -0.13703 -0.02662 0.22344 0.3684 -0.90242 0.76719 0.52824 0.39865
0.00565 -0.0982 -0.01623 0.61737 -0.06718 -0.7838 0.77087 0.53982 0.40496
0.03272 -0.15554 -0.03351 0.38432 -0.16556 -0.90823 0.76651 0.52612 0.39749
0.03127 -0.1509 -0.03221 0.44398 0.49811 -0.74482 0.76653 0.52618 0.39752
0.01045 -0.12093 -0.02082 0.39742 0.55505 -0.73073 0.76863 0.53277 0.40112
0.01974 -0.13666 -0.02538 0.53539 0.51412 -0.6701 0.76721 0.52833 0.3987
0.03313 -0.15565 -0.02333 0.31753 -0.68697 0.65364 0.76651 0.52612 0.39749
0.03458 -0.15417 -0.0232 0.74433 -0.03568 0.66685 0.76651 0.52612 0.39749
0.01221 -0.11733 -0.00804 0.87501 0.3475 0.33704 0.76899 0.53391 0.40174
0.02177 -0.13151 -0.01445 0.90444 0.32625 0.27485 0.76763 0.52964 0.39941
0.03334 -0.14999 -0.0227 0.80035 0.2929 0.52311 0.76654 0.52623 0.39755
0.00664 -0.1122 0.00539 -0.83698 -0.42037 -0.35037 0.76951 0.53555 0.40264
0.0057 -0.11236 0.00919 -0.86372 -0.50309 0.02996 0.7695 0.5355 0.40261
0.0068 -0.11213 0.01349 -0.72022 -0.5183 0.46113 0.76952 0.53557 0.40265
0.00888 -0.1117 0.01517 -0.28982 -0.37771 0.8794 0.76956 0.53571 0.40272
-0.00005 -0.09754 0.00842 -0.89918 -0.43364 -0.05858 0.77093 0.54 0.40506
0.00281 -0.08794 0.01828 0.04094 -0.26167 0.96429 0.7717 0.54242 0.40638
0.00868 -0.10887 0.00247 -0.25775 -0.15238 -0.95412 0.76985 0.53661 0.40321
0.00697 -0.10133 0.00151 -0.18304 -0.28911 -0.93963 0.77058 0.53892 0.40447
0.01467 -0.091 0.01346 0.47131 -0.31431 0.82406 0.77147 0.54171 0.406
0.00425 -0.10347 0.00327 -0.65609 -0.31391 -0.68629 0.77038 0.53828 0.40412
0.03579 -0.14591 -0.00419 -0.4128 -0.2738 -0.86869 0.76667 0.52662 0.39776
0.03094 -0.14352 0 -0.70002 -0.70715 0.09953 0.76678 0.52697 0.39795
0.03736 -0.14961 -0.00252 -0.60036 -0.76895 -0.21973 0.76655 0.52625 0.39756
0.03705 -0.14394 0.00201 0.55936 0.05218 0.82728 0.76676 0.5269 0.39792
0.04138 -0.15028 -0.00273 0.90188 -0.41862 -0.10663 0.76654 0.52621 0.39754
0.03055 -0.14102 0.00406 -0.39381 -0.80167 0.44972 0.81837 0.59911 0.5264
0.01603 -0.09534 0.01012 0.9825 -0.08271 0.1669 0.77112 0.5406 0.40539
0.01567 -0.09661 0.00501 0.91957 -0.04235 -0.39064 0.77101 0.54026 0.4052
0.04206 -0.14727 -0.00334 0.90515 0.19243 -0.37904 0.76662 0.52646 0.39768
0.04011 -0.14241 -0.00247 0.763 0.53048 -0.36936 0.76684 0.52715 0.39805
0.0306 -0.12966 0.00248 0.75355 0.63348 -0.17569 0.76779 0.53015 0.39969
0.0243 -0.13121 -0.0012 -0.35287 -0.10259 -0.93003 0.76765 0.52972 0.39945
0.01872 -0.10915 0.00626 0.76578 0.37167 -0.52483 0.76982 0.53652 0.40316
0.02204 -0.13286 0.0077 -0.64039 -0.63043 0.4387 0.76751 0.52928 0.39921
0.04102 -0.1474 -0.00415 0.34905 0.12578 -0.92862 0.76661 0.52645 0.39767
0.03995 -0.15096 -0.00268 -0.18923 -0.95828 -0.2142 0.76653 0.52617 0.39752
0.02955 -0.13065 0.00029 0.46724 0.605 -0.64472 0.7677 0.52987 0.39954
0.01562 -0.11028 0.00331 0.46221 0.25334 -0.84981 0.76971 0.53617 0.40297
0.01853 -0.11019 0.0109 0.66793 0.15041 0.72886 0.76971 0.53619 0.40298
0.03911 -0.14982 -0.00013 0.23513 -0.5484 0.80248 0.76655 0.52624 0.39756
0.03637 -0.14859 0.00008 -0.49713 -0.79207 0.35423 0.81832 0.59895 0.52631
0.01348 -0.0985 0.01819 -0.8491 -0.43475 -0.30004 0.77084 0.53973 0.40492
0.01836 -0.09573 0.02653 0.02522 -0.22379 0.97431 0.77109 0.5405 0.40534
0.01417 -0.09665 0.02432 -0.7263 -0.45953 0.51119 0.77101 0.54025 0.4052
0.00832 -0.08238 0.02537 -0.61145 -0.24308 0.75302 0.77205 0.54353 0.40699
0.00876 -0.08734 0.01983 -0.84863 -0.52785 -0.03466 0.77174 0.54255 0.40645
0.00698 -0.08498 0.01968 -0.35132 -0.67259 0.65131 0.77189 0.54304 0.40672
0.02643 -0.10335 0.02369 0.26158 0.03447 0.96457 0.77039 0.53832 0.40414
0.02533 -0.10529 0.01226 0.14875 0.13648 -0.97941 0.7702 0.53773 0.40382
0.02245 -0.10609 0.01272 -0.35618 -0.13609 -0.92445 0.77012 0.53748 0.40369
0.02224 -0.08352 0.02415 0.86566 0.10246 0.49003 0.77198 0.54332 0.40687
0.01273 -0.09102 0.01653 -0.74312 -0.34962 -0.57056 0.77147 0.54171 0.40599
0.02955 -0.11663 0.0198 -0.4461 -0.71227 0.54192 0.81869 0.60012 0.52695
0.0338 -0.12163 0.0122 -0.46547 -0.47087 -0.74942 0.76856 0.53255 0.401
0.0268 -0.11561 0.01533 -0.76558 -0.61739 -0.18088 0.76916 0.53446 0.40204
0.03451 -0.1239 0.01381 -0.6278 -0.75737 -0.17957 0.76833 0.53185 0.40062
0.03895 -0.12041 0.02043 0.60835 0.06497 0.791 0.76868 0.53293 0.40121
0.03906 -0.1246 0.01866 0.11186 -0.81774 0.56462 0.76833 0.53173 0.40067
0.02505 -0.09367 0.01875 0.88482 0.32162 -0.33713 0.77126 0.54104 0.40563
0.0411 -0.12404 0.0145 0.85216 -0.30122 -0.42789 0.76832 0.5318 0.40059
0.04178 -0.12312 0.01725 0.99328 -0.02909 0.11204 0.76841 0.53209 0.40075
0.04088 -0.11913 0.01638 0.88645 0.46172 0.03207 0.76881 0.53334 0.40143
0.04021 -0.1196 0.01346 0.78719 0.34903 -0.50844 0.76876 0.53319 0.40135
0.02781 -0.10943 0.01244 0.09758 0.21635 -0.97143 0.76979 0.53643 0.40312
0.01548 -0.09876 0.01553 -0.62253 -0.2099 -0.75392 0.77082 0.53966 0.40488
0.03146 -0.10602 0.01805 0.84216 0.51124 -0.17144 0.77013 0.5375 0.4037
0.02763 -0.10977 0.02336 -0.03649 -0.17953 0.98308 0.76976 0.53632 0.40306
0.02413 -0.11085 0.0211 -0.61645 -0.59627 0.51425 0.76965 0.53598 0.40287
0.01915 -0.08837 0.01493 0.37645 0.02254 -0.92616 0.77167 0.54232 0.40633
0.03917 -0.12397 0.01219 0.32364 -0.43559 -0.83995 0.76833 0.53183 0.4006
0.03818 -0.11981 0.01161 0.45155 0.15747 -0.87824 0.76874 0.53312 0.40131
0.03725 -0.12555 0.01493 -0.24671 -0.96801 -0.04565 0.76817 0.53135 0.40034
0.02353 -0.08652 0.02167 0.98084 0.14699 0.12785 0.77179 0.54273 0.40655
0.02818 -0.10016 0.02079 0.86931 0.44561 0.21385 0.77069 0.53926 0.40466
0.03892 -0.12349 0.01954 0.10922 -0.55473 0.82483 0.76837 0.53197 0.40068
-0.00106 -0.07418 -0.05567 -0.90853 -0.40836 0.08843 0.77241 0.54467 0.40761
0.00943 -0.06387 -0.05877 0.92159 0.23211 0.31114 0.77255 0.5451 0.40784
0.00026 -0.08098 -0.06235 -0.93815 -0.31267 0.14873 0.81915 0.60157 0.52773
0.00271 -0.07284 -0.06662 -0.66655 0.16495 -0.72698 0.77245 0.54479 0.40768
0.01455 -0.07608 -0.06966 0.91471 0.29791 -0.27305 0.77235 0.54447 0.4075
0.01477 -0.0809 -0.06779 0.92551 -0.28228 0.25248 0.77213 0.54378 0.40713
0.01113 -0.08187 -0.07652 0.08456 0.42311 -0.90212 0.77208 0.54362 0.40704
0.01331 -0.08055 -0.07483 0.6308 0.24731 -0.73548 0.77215 0.54384 0.40716
0.01056 -0.08472 -0.07661 0.3488 -0.35621 -0.86687 0.77191 0.54309 0.40675
0.01292 -0.08494 -0.07435 0.77377 -0.49469 -0.39567 0.7719 0.54305 0.40673
0.00496 -0.08809 -0.07274 -0.29327 -0.93219 -0.21219 0.78121 0.55424 0.43073
0.00792 -0.08752 -0.07485 0.07476 -0.7758 -0.62654 0.77173 0.54251 0.40643
0.00953 -0.08785 -0.07203 0.41837 -0.90822 -0.01013 0.7717 0.54244 0.40639
0.00745 -0.07501 -0.07031 -0.50603 0.28301 -0.81476 0.77239 0.54459 0.40756
0.00734 -0.07002 -0.05615 0.62807 -0.10172 0.77148 0.77251 0.54499 0.40778
0.0061 -0.08659 -0.06627 0.0857 -0.88499 0.45765 0.79957 0.57718 0.47766
0.00058 -0.08222 -0.06857 -0.93126 -0.19616 -0.30704 0.81914 0.60153 0.52772
0.00264 -0.08636 -0.07115 -0.78434 -0.60389 -0.14188 0.8191 0.60141 0.52765
0.01121 -0.08384 -0.06497 0.56521 -0.60748 0.55813 0.77197 0.54326 0.40684
0.00585 -0.0816 -0.06004 0.31687 -0.58848 0.74383 0.77209 0.54367 0.40706
0.00287 -0.08359 -0.06209 -0.36029 -0.75918 0.54207 0.81913 0.6015 0.5277
0.00952 -0.06817 -0.06667 0.40239 0.46369 -0.78935 0.77254 0.54506 0.40782
-0.00345 -0.06518 -0.05725 -0.92298 -0.26513 -0.27896 0.77255 0.5451 0.40784
0.01277 -0.07162 -0.06128 0.8624 0.11232 0.4936 0.77248 0.54489 0.40773
0.00438 -0.0663 -0.0669 -0.15352 0.12328 -0.98043 0.77255 0.5451 0.40784
-0.00101 -0.07177 -0.06045 -0.93438 -0.22494 -0.27628 0.77248 0.54488 0.40772
0.00008 -0.06797 -0.06523 -0.71675 -0.18737 -0.67169 0.77254 0.54507 0.40783
0.00181 -0.07775 -0.05626 -0.27868 -0.6145 0.73806 0.77228 0.54426 0.40738
0.00599 -0.0838 -0.07455 -0.61806 0.23361 -0.75062 0.77197 0.54327 0.40685
-0.00521 -0.09693 -0.01816 -0.30378 -0.80562 -0.50863 0.77098 0.54017 0.40516
0.0032 -0.09597 0.00166 -0.46539 -0.88237 -0.0695 0.77107 0.54044 0.4053
-0.0018 -0.08687 0.01803 -0.62037 -0.21897 0.75312 0.77177 0.54265 0.40651
-0.00376 -0.08921 0.01377 -0.92975 -0.30025 0.2131 0.77161 0.54213 0.40623
0.00875 -0.09378 -0.00579 0.97063 -0.23842 -0.03212 0.77125 0.54102 0.40562
0.00919 -0.08889 -0.01288 0.94861 0.04311 -0.31349 0.77163 0.54221 0.40627
0.0101 -0.08846 -0.00732 0.93374 -0.19174 -0.30226 0.77166 0.5423 0.40632
0.02296 -0.08205 0.0195 0.99963 -0.00597 -0.02643 0.77207 0.54359 0.40702
-0.02193 -0.09143 -0.0289 -0.97583 -0.15429 -0.15477 0.77144 0.54161 0.40594
-0.00882 -0.08719 -0.03383 0.53486 0.07368 -0.84172 0.77175 0.54258 0.40647
0.01049 -0.07749 0.02727 -0.36686 0.00488 0.93026 0.77229 0.54429 0.4074
0.02087 -0.08598 0.01615 0.66839 -0.07366 -0.74015 0.77183 0.54284 0.40661
0.0151 -0.09166 0.00446 0.81013 -0.13343 -0.57086 0.77142 0.54155 0.40591
0.01809 -0.08702 0.00971 0.95663 -0.17767 -0.23083 0.77176 0.54262 0.40649
-0.01769 -0.09009 -0.0343 -0.56374 0.10609 -0.81911 0.77154 0.54193 0.40611
-0.0046 -0.09155 -0.03028 0.82448 0.184 -0.53514 0.77143 0.54158 0.40592
0.01888 -0.08455 0.01359 0.85979 -0.40147 -0.31556 0.77192 0.54313 0.40677
-0.01387 -0.08921 -0.03617 0.04725 0.12144 -0.99147 0.77161 0.54213 0.40623
0.01031 -0.09344 0.00021 0.7548 -0.35781 -0.54977 0.77128 0.5411 0.40566
-0.01013 -0.09201 0.00182 -0.49395 -0.39004 0.7771 0.77139 0.54146 0.40586
-0.00101 -0.09166 -0.02469 0.82522 -0.25637 -0.50328 0.77142 0.54155 0.40591
0.00813 -0.08456 -0.01238 0.91334 0.1002 -0.39468 0.77192 0.54312 0.40677
0.01818 -0.07517 0.02666 0.41276 0.01931 0.91064 0.77238 0.54457 0.40755
0.02326 -0.0737 0.02272 0.8233 -0.19609 0.53266 0.77243 0.54472 0.40764
0.01726 -0.079 0.00449 0.83017 -0.1513 -0.53658 0.77222 0.54408 0.40729
0.00039 -0.08553 -0.02478 0.78751 -0.13973 -0.60025 0.77186 0.54293 0.40666
0.00111 -0.07598 -0.02594 0.84464 -0.027 -0.53465 0.77235 0.54448 0.4075
0.02208 -0.07423 0.01001 0.84848 -0.11529 -0.51652 0.77241 0.54467 0.40761
0.02347 -0.07783 0.01543 0.95078 -0.29481 -0.09547 0.77228 0.54424 0.40738
-0.00401 -0.07776 -0.03161 0.64958 -0.15751 -0.7438 0.77228 0.54425 0.40738
-0.004 -0.08857 0.00526 -0.67243 -0.55741 0.48696 0.77165 0.54228 0.40631
0.00281 -0.06824 -0.01966 0.95214 -0.12243 -0.28007 0.77254 0.54506 0.40782
-0.0105 -0.07798 0.00284 -0.71312 -0.11073 0.69224 0.77227 0.54422 0.40737
-0.01161 -0.06839 0.00423 -0.71773 -0.09723 0.6895 0.77254 0.54506 0.40782
-0.01645 -0.06845 -0.00022 -0.9043 -0.04305 0.42472 0.77253 0.54505 0.40782
-0.0071 -0.07569 0.008 -0.85592 -0.13387 0.49947 0.77236 0.54451 0.40752
-0.00579 -0.06554 0.01462 -0.83728 -0.06578 0.54281 0.77255 0.5451 0.40784
0.01427 -0.03568 0.02591 0.25247 0.17369 0.95189 0.77255 0.5451 0.40784
-0.01791 -0.08621 -0.01632 -0.78203 -0.40802 0.47112 0.77181 0.54279 0.40658
-0.0149 -0.0857 -0.00928 -0.94405 -0.31139 0.10864 0.77185 0.5429 0.40664
-0.02292 -0.08281 -0.02108 -0.91086 -0.19341 0.36458 0.77203 0.54345 0.40695
0.00637 -0.0698 0.02414 -0.5859 0.02098 0.81011 0.77252 0.545 0.40779
0.00352 -0.07325 0.02076 -0.6293 -0.08492 0.77251 0.77244 0.54476 0.40766
-0.02057 -0.06818 -0.01351 -0.953 0.00309 0.30294 0.77254 0.54506 0.40782
-0.00142 -0.09408 -0.02313 0.60571 -0.72862 -0.31972 0.77123 0.54094 0.40557
0.00124 -0.09482 -0.0198 0.38276 -0.47564 -0.792 0.77116 0.54074 0.40547
0.00596 -0.09676 -0.00037 -0.0578 -0.75629 -0.65168 0.771 0.54022 0.40518
0.01434 -0.08951 0.01474 0.17899 -0.98225 -0.05611 0.77158 0.54206 0.40619
-0.01782 0.00893 0.00532 -0.95434 -0.08964 0.28495 0.77255 0.5451 0.40784
-0.0186 0.00893 -0.00016 -0.99594 -0.08964 -0.00842 0.77255 0.5451 0.40784
-0.00236 0.0018 0.02023 -0.11559 -0.08964 0.98924 0.77255 0.5451 0.40784
-0.00219 0.00893 0.01847 -0.11707 -0.08964 0.98907 0.77255 0.5451 0.40784
-0.00639 0.00893 0.01747 -0.34213 -0.08964 0.93537 0.77255 0.5451 0.40784
0.00649 0.00195 0.01927 0.31784 -0.08964 0.9439 0.77255 0.5451 0.40784
0.00773 -0.0053 0.01915 0.44209 0.08213 0.8932 0.77255 0.5451 0.40784
0.00253 0.00893 0.01843 0.1353 -0.08964 0.98674 0.77255 0.5451 0.40784
0.00328 0.00071 -0.02023 0.15961 -0.08964 -0.9831 0.77255 0.5451 0.40784
0.01873 0.00293 0.00723 0.92915 -0.08964 0.35866 0.77255 0.5451 0.40784
0.01859 0.00893 -0.0007 0.99527 -0.08964 -0.03732 0.77255 0.5451 0.40784
0.01753 0.00893 0.0062 0.93894 -0.08964 0.33219 0.77255 0.5451 0.40784
-0.01784 0.00893 -0.00525 -0.95554 -0.08964 -0.28091 0.77255 0.5451 0.40784
-0.01809 -0.00362 -0.00976 -0.89776 -0.0188 -0.44008 0.77255 0.5451 0.40784
0.0167 0.00893 -0.00818 0.89436 -0.08964 -0.43828 0.77255 0.5451 0.40784
-0.0162 0.0028 0.01192 -0.80226 -0.08964 0.5902 0.77255 0.5451 0.40784
-0.01499 0.00893 0.01102 -0.80248 -0.08964 0.58991 0.77255 0.5451 0.40784
0.01119 0.00893 -0.01486 0.59908 -0.08964 -0.79565 0.77255 0.5451 0.40784
-0.0116 0.00245 0.01656 -0.5715 -0.08964 0.81569 0.77255 0.5451 0.40784
-0.01067 0.00893 0.01523 -0.57142 -0.08964 0.81575 0.77255 0.5451 0.40784
0.00465 0.00893 -0.01801 0.249 -0.08964 -0.96435 0.77255 0.5451 0.40784
-0.00591 -0.07728 0.01276 -0.85999 -0.02896 0.50948 0.7723 0.54432 0.40742
-0.01482 -0.08634 -0.00136 -0.92787 -0.26242 0.26495 0.77181 0.54276 0.40657
0.00489 -0.08079 0.02041 -0.49125 -0.19352 0.84925 0.77214 0.5438 0.40714
-0.00339 -0.08248 0.0167 -0.65152 0.03205 0.75795 0.77204 0.54351 0.40698
0.01092 -0.06745 -0.00179 0.76406 -0.04988 -0.64322 0.77254 0.54508 0.40783
-0.01652 -0.00985 -0.01571 -0.81262 0.34298 -0.47119 0.77255 0.5451 0.40784
-0.0198 -0.01173 -0.00521 -0.99676 -0.07401 0.03157 0.77255 0.5451 0.40784
0.0068 -0.05569 -0.05994 0.82132 0.3461 -0.45349 0.77255 0.5451 0.40784
-0.0023 -0.06447 -0.04871 0.00783 -0.58568 0.8105 0.77255 0.5451 0.40784
0.0008 -0.06429 -0.04961 0.46471 -0.40183 0.78904 0.77255 0.5451 0.40784
0.00464 -0.06085 -0.05097 0.79231 -0.2545 0.5545 0.77255 0.5451 0.40784
-0.00672 -0.06102 -0.04618 -0.7531 -0.65653 -0.04246 0.77255 0.5451 0.40784
0.00722 -0.05343 -0.05379 0.98467 -0.14182 0.10153 0.77255 0.5451 0.40784
-0.00436 -0.06084 -0.04355 0.02105 -0.99676 0.07766 0.77255 0.5451 0.40784
0.0031 -0.04592 -0.05722 0.48837 0.4795 -0.7291 0.77255 0.5451 0.40784
-0.00884 -0.04525 -0.055 -0.71205 0.05559 -0.69992 0.77255 0.5451 0.40784
-0.00276 -0.03858 -0.0552 0.22215 0.49307 -0.84115 0.77255 0.5451 0.40784
0.00714 -0.04657 -0.0515 0.97248 0.02862 -0.23123 0.77255 0.5451 0.40784
-0.00679 -0.06158 -0.04053 -0.28814 -0.67297 -0.68124 0.77255 0.5451 0.40784
-0.01152 -0.05915 -0.04045 -0.7374 -0.46001 -0.4946 0.77255 0.5451 0.40784
0.00248 -0.05706 -0.04418 0.72059 -0.68125 0.12904 0.77255 0.5451 0.40784
-0.00176 -0.05996 -0.04188 0.3878 -0.86524 -0.31775 0.77255 0.5451 0.40784
-0.01276 -0.04957 -0.04695 -0.89353 -0.09593 -0.43863 0.77255 0.5451 0.40784
0.0053 -0.03694 -0.04864 0.69219 0.3832 -0.61158 0.77255 0.5451 0.40784
-0.0019 -0.03265 -0.05175 0.23279 0.58403 -0.77764 0.77255 0.5451 0.40784
0.0028 -0.0598 -0.03142 0.84821 -0.47798 -0.22821 0.77255 0.5451 0.40784
0.01126 -0.04516 -0.0283 0.91588 -0.38733 -0.1055 0.77255 0.5451 0.40784
0.00564 -0.0579 -0.0233 0.90969 -0.39144 -0.13869 0.77255 0.5451 0.40784
0.01206 -0.03878 -0.03871 0.94102 0.05574 -0.33372 0.77255 0.5451 0.40784
0.00742 -0.05562 -0.00985 0.91854 -0.27435 -0.28464 0.77255 0.5451 0.40784
0.01431 -0.0412 -0.00833 0.80381 -0.34273 -0.48623 0.77255 0.5451 0.40784
0.01096 -0.05537 -0.00431 0.75124 -0.249 -0.61126 0.77255 0.5451 0.40784
-0.01165 -0.02782 -0.04336 -0.71148 0.39265 -0.58277 0.77255 0.5451 0.40784
-0.01899 -0.03301 -0.03358 -0.94151 0.12341 -0.31356 0.77255 0.5451 0.40784
-0.0171 -0.02277 -0.03102 -0.827 0.40477 -0.39018 0.77255 0.5451 0.40784
-0.01055 -0.0204 -0.03583 -0.16761 0.81281 -0.5579 0.77255 0.5451 0.40784
0.02332 -0.05629 0.00839 0.776 -0.18701 -0.60237 0.77255 0.5451 0.40784
0.02883 -0.05036 0.01645 0.99637 -0.07925 -0.03111 0.77255 0.5451 0.40784
0.02705 -0.03533 0.0039 0.91265 -0.13229 -0.38673 0.77255 0.5451 0.40784
0.02848 -0.04058 0.012 0.99541 0.03449 0.08932 0.77255 0.5451 0.40784
-0.00367 -0.06706 -0.03467 0.62217 -0.40776 -0.66831 0.77255 0.54509 0.40784
0.00734 -0.04994 -0.04208 0.88847 -0.44611 -0.1077 0.77255 0.5451 0.40784
-0.01226 -0.08813 0.00145 -0.61396 -0.15023 0.77491 0.77168 0.54238 0.40636
-0.01962 -0.02983 -0.01349 -0.99334 0.02541 0.11235 0.77255 0.5451 0.40784
-0.02021 -0.02705 -0.02255 -0.97776 0.15229 -0.14422 0.77255 0.5451 0.40784
0.02612 -0.06869 0.01797 0.98888 -0.14634 0.0264 0.77253 0.54505 0.40781
0.02377 -0.06775 0.02408 0.63661 -0.05709 0.76907 0.77254 0.54507 0.40783
0.01752 -0.02843 -0.01117 0.88699 -0.11361 -0.4476 0.77255 0.5451 0.40784
-0.00211 -0.0621 -0.03737 0.52642 -0.64849 -0.54986 0.77255 0.5451 0.40784
-0.00908 -0.06601 -0.03807 -0.13199 -0.37105 -0.91919 0.77255 0.5451 0.40784
-0.01397 -0.06169 -0.0371 -0.61332 -0.29224 -0.73378 0.77255 0.5451 0.40784
-0.01034 -0.03428 -0.0498 -0.67833 0.38928 -0.62316 0.77255 0.5451 0.40784
0.02598 -0.04918 0.02125 0.75868 0.08816 0.64547 0.77255 0.5451 0.40784
0.02829 -0.0366 0.01715 0.91376 0.18011 0.36414 0.77255 0.5451 0.40784
0.02408 -0.03016 0.0195 0.67234 0.2994 0.67699 0.77255 0.5451 0.40784
0.02453 -0.05677 0.02369 0.755 -0.00872 0.65567 0.77255 0.5451 0.40784
0.00014 -0.02602 -0.04503 0.20601 0.73418 -0.64694 0.77255 0.5451 0.40784
-0.01388 -0.02165 0.00528 -0.84572 -0.15811 0.50966 0.77255 0.5451 0.40784
-0.00693 -0.02278 0.01343 -0.67007 -0.11708 0.733 0.77255 0.5451 0.40784
-0.00874 -0.01382 0.01439 -0.61894 -0.28334 0.73256 0.77255 0.5451 0.40784
-0.00962 0.00893 -0.01592 -0.51513 -0.08964 -0.85241 0.77255 0.5451 0.40784
-0.00518 0.00893 -0.01786 -0.2776 -0.08964 -0.95651 0.77255 0.5451 0.40784
0.00125 -0.02288 0.0195 -0.43677 0.00643 0.89955 0.77255 0.5451 0.40784
0.00597 -0.01439 0.02078 -0.17023 0.05375 0.98394 0.77255 0.5451 0.40784
-0.01994 -0.01948 -0.01286 -0.99807 0.05616 0.02648 0.77255 0.5451 0.40784
0.01333 0.00213 0.0153 0.65435 -0.08964 0.75086 0.77255 0.5451 0.40784
0.01301 0.00893 0.01329 0.69677 -0.08964 0.71167 0.77255 0.5451 0.40784
0.00702 0.00893 0.01722 0.37599 -0.08964 0.92228 0.77255 0.5451 0.40784
0.01597 -0.01044 0.01524 0.72187 0.33788 0.60393 0.77255 0.5451 0.40784
-0.01643 -0.06654 -0.03459 -0.7114 -0.07911 -0.69832 0.77255 0.54509 0.40784
-0.01096 -0.07193 -0.03702 -0.08845 -0.17255 -0.98102 0.77248 0.54487 0.40772
-0.01775 -0.04595 -0.03818 -0.87284 -0.01485 -0.48778 0.77255 0.5451 0.40784
-0.02026 -0.04894 -0.03093 -0.95001 0.0013 -0.31223 0.77255 0.5451 0.40784
0.01357 -0.02075 0.02332 0.23355 0.23332 0.94394 0.77255 0.5451 0.40784
0.01881 -0.01663 0.01718 0.71077 0.38302 0.59 0.77255 0.5451 0.40784
0.0248 -0.02067 0.00551 0.88978 0.43559 0.13621 0.77255 0.5451 0.40784
0.01921 -0.01166 0.00758 0.92923 0.3604 0.08152 0.77255 0.5451 0.40784
0.01919 -0.01673 -0.00287 0.87898 0.35127 -0.32249 0.77255 0.5451 0.40784
0.01887 -0.00944 -0.00127 0.97763 -0.03847 -0.20679 0.77255 0.5451 0.40784
0.01558 -0.00917 -0.01001 0.85773 -0.1466 -0.49276 0.77255 0.5451 0.40784
0.0107 -0.01581 -0.01655 0.82232 0.30367 -0.48121 0.77255 0.5451 0.40784
0.00945 -0.00928 -0.01631 0.68658 0.05533 -0.72495 0.77255 0.5451 0.40784
0.0087 -0.01763 -0.02296 0.65958 0.57759 -0.48099 0.77255 0.5451 0.40784
0.00402 -0.01038 -0.01931 0.48061 0.4974 -0.72222 0.77255 0.5451 0.40784
-0.00081 -0.01273 -0.02372 0.10575 0.73811 -0.66634 0.77255 0.5451 0.40784
-0.00876 -0.01422 -0.02644 -0.18708 0.73717 -0.6493 0.77255 0.5451 0.40784
-0.01537 -0.01484 -0.02517 -0.64374 0.57483 -0.50514 0.77255 0.5451 0.40784
0.0272 -0.02742 0.0047 0.94711 0.20014 -0.25086 0.77255 0.5451 0.40784
0.02136 -0.02214 -0.00419 0.83751 0.2492 -0.48629 0.77255 0.5451 0.40784
0.01541 -0.02902 -0.01757 0.97476 -0.05033 -0.21752 0.77255 0.5451 0.40784
0.01349 -0.02117 -0.01758 0.89342 0.32262 -0.3126 0.77255 0.5451 0.40784
0.01258 -0.02321 -0.02457 0.84632 0.42121 -0.32608 0.77255 0.5451 0.40784
-0.01918 -0.01757 -0.02006 -0.93537 0.28822 -0.20498 0.77255 0.5451 0.40784
0.01309 -0.05601 0.02641 0.00087 0.05746 0.99835 0.77255 0.5451 0.40784
-0.01201 -0.00859 -0.0187 -0.5548 0.5042 -0.6618 0.77255 0.5451 0.40784
-0.00191 -0.00669 -0.02032 -0.03287 0.28699 -0.95737 0.77255 0.5451 0.40784
0.00324 -0.00439 -0.02007 0.22811 -0.02118 -0.9734 0.77255 0.5451 0.40784
0.01863 -0.00627 0.00824 0.95067 -0.00153 0.31019 0.77255 0.5451 0.40784
-0.02036 -0.00449 0.00084 -0.99161 -0.09651 0.08595 0.77255 0.5451 0.40784
-0.01914 -0.00493 0.00651 -0.92049 -0.13621 0.36625 0.77255 0.5451 0.40784
-0.00066 0.00893 -0.01859 -0.03545 -0.08964 -0.99534 0.77255 0.5451 0.40784
0.02048 -0.00018 -0.00082 0.99519 -0.08946 -0.04 0.77255 0.5451 0.40784
-0.01595 0.00893 -0.00958 -0.85384 -0.08964 -0.51276 0.77255 0.5451 0.40784
0.01766 0.00053 -0.01041 0.85794 -0.08964 -0.50587 0.77255 0.5451 0.40784
-0.01593 -0.00539 0.01216 -0.7646 -0.16441 0.62318 0.77255 0.5451 0.40784
-0.01319 0.00893 -0.01312 -0.70613 -0.08964 -0.70238 0.77255 0.5451 0.40784
0.01032 0.00081 -0.0177 0.50161 -0.08964 -0.86044 0.77255 0.5451 0.40784
-0.01102 -0.00587 0.01664 -0.55419 -0.16726 0.81541 0.77255 0.5451 0.40784
3 27 6 7
3 27 7 8
3 32 33 28
3 39 7 6
3 198 201 9
3 41 12 23
3 15 42 14
3 32 11 16
3 13 32 16
3 1 32 28
3 15 14 21
3 15 21 22
3 37 11 10
3 33 13 12
3 32 1 11
3 24 38 40
3 5 3 27
3 26 6 2
3 27 2 6
3 39 19 20
3 28 3 4
3 29 17 19
3 33 31 2
3 33 2 3
3 1 28 4
3 192 1 4
3 192 4 5
3 17 18 19
3 9 0 198
3 1 0 10
3 1 10 11
3 192 0 1
3 33 32 13
3 28 33 3
3 31 26 2
3 10 0 30
3 5 4 3
3 27 3 2
3 39 29 19
3 9 30 0
3 17 40 18
3 40 38 18
3 41 31 12
3 22 21 25
3 22 25 24
3 21 36 25
3 42 37 14
3 14 37 36
3 14 36 21
3 25 36 38
3 20 19 193
3 19 34 35
3 19 18 34
3 19 35 193
3 18 38 34
3 26 29 39
3 15 22 41
3 41 22 24
3 26 17 29
3 37 42 16
3 37 16 11
3 42 23 13
3 42 13 16
3 24 25 38
3 75 44 45
3 74 75 46
3 76 88 44
3 86 59 61
3 86 61 85
3 61 64 58
3 65 77 78
3 65 78 66
3 188 67 68
3 63 69 70
3 85 61 62
3 60 58 57
3 89 71 78
3 72 55 51
3 72 51 44
3 49 43 47
3 88 72 44
3 50 43 49
3 75 64 61
3 74 46 47
3 73 52 43
3 53 79 73
3 52 74 43
3 54 53 73
3 54 73 56
3 47 46 48
3 48 45 44
3 48 44 51
3 67 65 66
3 67 66 68
3 43 74 47
3 79 58 73
3 58 74 52
3 76 59 86
3 70 69 71
3 70 71 89
3 66 78 84
3 66 84 83
3 68 54 80
3 69 81 82
3 69 82 71
3 62 60 63
3 63 60 81
3 63 81 69
3 71 82 78
3 66 83 53
3 68 66 53
3 68 53 54
3 87 65 67
3 55 87 67
3 55 67 188
3 85 63 70
3 85 70 86
3 88 76 77
3 88 77 65
3 87 88 65
3 86 70 89
3 62 63 85
3 60 62 61
3 74 58 64
3 89 78 77
3 76 44 59
3 75 74 64
3 57 58 79
3 78 82 84
3 89 77 76
3 99 94 185
3 113 103 93
3 97 99 230
3 101 100 102
3 103 113 105
3 113 101 105
3 118 110 112
3 115 102 100
3 115 100 114
3 118 98 93
3 99 97 96
3 99 91 94
3 94 91 187
3 91 92 187
3 103 118 93
3 99 90 91
3 113 93 92
3 91 113 92
3 202 96 97
3 187 92 93
3 187 93 186
3 95 93 98
3 90 99 96
3 106 118 112
3 106 112 107
3 96 111 90
3 111 100 90
3 112 110 116
3 112 116 117
3 108 114 109
3 104 115 114
3 104 114 108
3 107 112 117
3 107 117 202
3 119 104 108
3 119 108 103
3 118 103 110
3 103 109 110
3 103 108 109
3 119 115 104
3 115 120 102
3 120 101 102
3 114 100 111
3 110 109 116
3 125 255 126
3 148 128 144
3 130 206 122
3 127 130 122
3 131 231 144
3 134 133 135
3 151 135 149
3 134 147 121
3 137 151 139
3 137 139 140
3 149 135 133
3 141 142 145
3 149 133 143
3 146 132 136
3 147 134 132
3 148 144 231
3 125 123 124
3 147 122 123
3 121 147 123
3 125 121 123
3 147 146 122
3 123 122 124
3 195 138 128
3 128 129 144
3 128 143 129
3 140 139 142
3 140 142 141
3 138 145 143
3 138 143 128
3 139 149 150
3 139 150 142
3 151 149 139
3 195 128 148
3 142 143 145
3 152 153 138
3 152 138 195
3 154 137 140
3 154 140 136
3 136 141 145
3 136 145 153
3 153 145 138
3 136 140 141
3 137 154 132
3 143 133 129
3 146 147 132
3 142 150 143
3 180 155 177
3 181 180 177
3 164 162 159
3 164 159 160
3 158 176 168
3 161 176 162
3 175 157 171
3 175 171 172
3 163 161 162
3 163 162 164
3 165 166 167
3 165 167 170
3 171 158 168
3 168 176 161
3 157 180 171
3 180 158 171
3 181 179 158
3 178 159 260
3 179 176 158
3 180 181 158
3 262 174 173
3 262 173 169
3 159 176 260
3 156 178 260
3 182 157 175
3 170 167 173
3 170 173 174
3 162 176 159
3 167 164 160
3 167 160 173
3 166 163 164
3 166 164 167
3 169 173 178
3 169 178 156
3 182 174 262
3 172 170 175
3 175 174 182
3 175 170 174
3 172 165 170
3 165 163 166
3 165 172 183
3 165 183 163
3 163 183 161
3 183 172 171
3 183 171 168
3 168 161 183
3 155 180 157
3 182 155 157
3 160 159 178
3 173 160 178
3 12 13 23
3 31 33 12
3 198 0 192
3 56 50 184
3 58 52 73
3 75 45 46
3 59 75 61
3 56 73 50
3 73 43 50
3 48 46 45
3 60 61 58
3 44 75 59
3 230 99 185
3 103 105 119
3 186 93 95
3 100 101 91
3 100 91 90
3 120 119 105
3 105 101 120
3 91 101 113
3 131 125 126
3 131 126 231
3 132 134 135
3 136 132 154
3 127 146 136
3 146 127 122
3 144 134 121
3 131 144 121
3 131 121 125
3 129 134 144
3 133 134 129
3 132 135 137
3 37 10 36
3 36 10 38
3 38 10 30
3 35 34 9
3 193 35 9
3 193 9 201
3 34 30 9
3 34 38 30
3 39 6 26
3 23 15 41
3 31 40 17
3 26 31 17
3 15 23 42
3 41 24 40
3 41 40 31
3 83 84 79
3 81 57 82
3 60 57 81
3 83 79 53
3 55 72 87
3 86 89 76
3 72 88 87
3 82 57 79
3 82 79 84
3 117 116 111
3 117 111 96
3 202 117 96
3 98 118 106
3 119 120 115
3 109 114 111
3 109 111 116
3 150 149 143
3 130 153 152
3 130 127 153
3 137 135 151
3 136 153 127
3 188 68 189
3 188 189 190
3 191 130 152
3 194 124 122
3 191 195 200
3 209 189 68
3 209 68 229
3 254 48 203
3 122 206 194
3 204 199 209
3 187 214 94
3 5 27 222
3 208 197 196
3 205 189 209
3 209 199 210
3 95 255 186
3 210 199 213
3 210 213 293
3 210 293 215
3 214 185 94
3 211 208 257
3 211 212 208
3 205 215 257
3 254 216 217
3 254 217 218
3 216 219 217
3 220 219 253
3 346 221 225
3 218 223 254
3 296 227 218
3 296 297 227
3 223 227 222
3 51 203 48
3 310 296 218
3 295 219 216
3 227 224 222
3 218 227 223
3 226 220 256
3 204 39 20
3 204 20 199
3 199 20 193
3 228 39 204
3 7 39 228
3 229 54 56
3 229 56 184
3 98 106 197
3 196 107 202
3 229 80 54
3 68 80 229
3 195 148 200
3 49 47 254
3 47 48 254
3 202 97 230
3 200 148 231
3 197 106 107
3 197 107 196
3 125 124 255
3 152 195 191
3 250 234 235
3 250 235 236
3 314 353 240
3 314 240 347
3 237 234 316
3 237 316 238
3 234 239 235
3 241 354 242
3 241 242 243
3 244 355 245
3 244 245 259
3 354 246 242
3 232 247 248
3 355 358 245
3 247 250 251
3 247 251 248
3 249 240 252
3 250 236 251
3 220 253 256
3 254 295 216
3 225 124 194
3 223 50 49
3 8 222 27
3 50 8 7
3 50 7 184
3 8 50 223
3 8 223 222
3 124 225 226
3 124 226 255
3 51 185 214
3 51 214 203
3 256 255 226
3 225 194 346
3 95 126 255
3 126 95 98
3 126 98 231
3 317 245 258
3 259 245 317
3 261 155 182
3 156 263 169
3 262 169 263
3 262 261 182
3 156 260 265
3 261 264 155
3 265 263 156
3 264 177 155
3 179 267 176
3 260 176 267
3 262 266 261
3 275 268 181
3 275 181 177
3 264 275 177
3 268 179 181
3 266 264 261
3 265 260 270
3 260 267 270
3 265 273 263
3 262 263 273
3 262 273 274
3 274 266 262
3 268 269 179
3 269 267 179
3 304 269 268
3 271 272 264
3 271 264 266
3 274 271 266
3 275 304 268
3 272 275 264
3 276 267 269
3 276 269 277
3 270 267 276
3 278 279 280
3 281 276 344
3 280 279 282
3 282 279 283
3 282 283 284
3 285 286 287
3 285 287 288
3 284 283 300
3 284 300 289
3 290 289 291
3 290 291 292
3 55 230 185
3 55 185 51
3 228 229 184
3 228 184 7
3 229 228 204
3 229 204 209
3 293 278 215
3 205 210 215
3 294 265 270
3 55 202 230
3 202 55 188
3 98 200 231
3 200 98 197
3 208 200 197
3 257 208 205
3 190 196 202
3 190 202 188
3 294 273 265
3 311 220 225
3 218 217 310
3 311 310 220
3 217 220 310
3 207 212 298
3 207 298 299
3 300 291 289
3 211 298 212
3 301 274 273
3 301 273 294
3 274 301 302
3 274 302 271
3 303 272 271
3 303 271 302
3 324 275 272
3 324 272 303
3 275 324 304
3 297 287 286
3 308 305 306
3 308 306 307
3 309 285 288
3 259 310 351
3 312 311 315
3 312 315 316
3 316 315 326
3 296 259 317
3 310 259 296
3 315 311 225
3 358 313 347
3 358 347 245
3 237 318 319
3 237 319 320
3 321 318 238
3 221 326 315
3 221 315 225
3 256 186 255
3 253 187 186
3 253 186 256
3 187 253 214
3 190 189 205
3 219 214 253
3 212 207 191
3 212 191 200
3 214 219 295
3 214 295 203
3 254 203 295
3 191 207 130
3 223 49 254
3 224 5 222
3 5 224 192
3 198 323 201
3 193 201 323
3 130 207 206
3 346 194 206
3 210 205 209
3 212 200 208
3 196 190 205
3 196 205 208
3 304 277 269
3 322 303 302
3 322 302 323
3 324 303 322
3 286 325 297
3 285 304 324
3 221 307 327
3 221 327 326
3 224 297 325
3 224 325 192
3 325 324 322
3 325 322 192
3 192 322 198
3 227 297 224
3 290 305 308
3 305 290 292
3 305 292 306
3 328 329 327
3 328 327 307
3 330 331 329
3 330 329 328
3 333 332 331
3 333 331 330
3 333 334 332
3 335 336 334
3 335 334 333
3 309 337 336
3 309 336 335
3 288 338 337
3 288 337 309
3 287 339 338
3 287 338 288
3 328 307 306
3 328 306 340
3 344 276 309
3 330 328 340
3 330 340 341
3 306 292 291
3 306 291 340
3 283 342 300
3 342 283 279
3 342 279 281
3 300 341 340
3 300 340 291
3 341 300 343
3 343 300 342
3 343 342 281
3 343 281 344
3 333 330 341
3 333 341 343
3 333 343 344
3 333 344 335
3 344 309 335
3 206 207 299
3 217 219 220
3 226 225 220
3 299 308 206
3 308 299 298
3 308 298 290
3 211 289 290
3 211 290 298
3 289 211 257
3 289 257 284
3 284 257 282
3 282 257 215
3 215 280 282
3 280 215 278
3 213 193 323
3 213 323 293
3 193 213 199
3 198 322 323
3 308 307 221
3 308 221 346
3 318 241 243
3 318 243 319
3 297 345 339
3 297 339 287
3 296 317 345
3 296 345 297
3 206 308 346
3 324 325 286
3 324 286 285
3 301 293 323
3 301 323 302
3 293 301 294
3 293 294 278
3 278 294 279
3 279 294 270
3 279 270 281
3 281 270 276
3 276 277 309
3 309 277 304
3 309 304 285
3 347 240 348
3 348 240 349
3 359 334 336
3 359 336 349
3 356 332 334
3 356 334 359
3 354 331 332
3 354 332 356
3 350 329 331
3 350 331 354
3 350 241 318
3 350 318 321
3 258 245 347
3 351 352 232
3 351 232 233
3 360 234 250
3 239 234 237
3 239 237 320
3 252 240 353
3 259 351 233
3 259 233 244
3 354 356 246
3 352 357 247
3 352 247 232
3 356 359 249
3 356 249 246
3 357 360 250
3 357 250 247
3 359 240 249
3 347 313 314
3 238 318 237
3 327 321 238
3 327 238 326
3 337 348 349
3 337 349 336
3 317 258 345
3 345 258 347
3 345 347 339
3 357 311 312
3 357 312 360
3 360 312 316
3 360 316 234
3 338 347 348
3 338 348 337
3 241 350 354
3 352 310 311
3 352 311 357
3 329 350 321
3 329 321 327
3 359 349 240
3 351 310 352
3 326 238 316
3 339 347 338
`,ul=JSON.parse("[5,7,0,5,517,479,8,479,475,7,8,0,21,0,8,21,8,470,498,476,172,262,31,32,33,35,36,52,475,469,48,58,52,53,58,48,468,501,173,69,80,70,69,70,683,76,89,468,468,173,76,147,76,173,76,83,89,80,100,695,91,83,113,100,704,695,89,112,100,89,83,91,91,113,105,100,120,109,100,109,704,111,91,105,111,89,91,112,89,116,83,76,689,83,689,113,111,105,134,96,126,134,129,112,116,129,116,130,120,133,131,120,131,109,134,105,99,133,140,138,133,138,131,96,134,99,141,134,126,145,126,96,148,129,130,148,130,155,158,126,145,140,152,156,140,156,138,158,141,126,152,151,170,161,158,145,152,170,156,156,170,168,191,188,179,193,191,179,185,193,179,185,179,186,192,191,193,195,196,208,198,199,200,199,201,202,201,199,198,199,196,203,191,192,205,27,498,210,179,212,186,212,221,218,212,218,213,179,229,219,179,219,221,179,221,212,221,222,218,219,229,221,221,226,227,221,227,222,229,226,221,226,233,227,272,231,229,229,231,235,229,235,226,231,273,238,226,237,233,231,238,235,243,244,245,248,249,250,248,250,291,258,529,315,257,255,249,257,249,248,494,262,550,305,309,506,33,263,35,231,272,506,273,231,506,510,472,12,379,0,12,7,479,8,196,199,794,277,794,199,277,199,202,200,199,282,279,463,195,191,205,286,191,286,287,279,177,463,293,179,188,177,188,463,530,529,258,291,250,290,315,529,255,315,255,257,351,229,179,351,272,229,308,356,273,305,315,309,309,257,308,257,248,357,357,291,317,318,319,327,321,352,35,27,210,342,327,36,35,309,308,506,308,273,506,326,342,263,326,263,529,342,210,344,273,356,301,293,337,179,177,293,188,337,351,179,342,344,321,238,240,247,319,349,327,352,321,344,357,248,291,342,321,35,342,35,263,359,243,245,359,245,360,247,243,359,352,318,327,208,367,279,195,208,279,505,367,208,203,463,188,463,203,196,195,463,196,203,188,191,305,258,315,172,346,332,327,349,36,238,247,235,318,352,346,226,359,360,226,360,237,273,240,238,235,247,359,235,359,226,352,327,35,346,352,332,332,352,344,379,395,0,380,517,5,380,5,388,388,0,395,388,5,0,391,380,388,391,388,397,390,388,395,422,397,388,390,410,416,413,397,422,407,388,390,410,390,395,411,391,397,388,407,422,411,397,413,410,395,398,410,398,421,407,390,416,425,407,416,410,421,427,411,413,430,407,425,422,410,425,416,427,456,410,410,456,425,413,440,430,425,442,422,422,440,413,421,450,427,443,450,421,425,456,442,458,450,443,458,440,442,442,456,458,440,458,443,440,422,442,293,461,337,12,495,510,462,199,191,462,191,287,199,203,191,89,111,116,134,155,130,158,161,166,158,166,155,166,161,170,166,151,155,151,143,148,151,148,155,129,143,135,282,199,462,469,41,53,130,116,111,130,111,134,134,141,155,141,158,155,170,151,166,129,148,143,135,112,129,12,0,498,0,476,498,479,517,513,7,5,479,48,52,469,293,494,550,421,398,418,418,443,421,472,479,513,53,48,469,53,41,472,495,494,510,495,31,262,501,367,487,501,279,367,172,476,470,510,494,279,505,484,487,510,279,501,41,479,472,501,468,510,210,498,172,210,172,332,31,495,27,498,27,495,279,494,293,293,177,279,469,475,479,469,479,41,173,501,487,487,363,173,487,484,363,498,495,12,351,506,272,487,367,505,12,472,513,513,517,379,513,379,12,495,262,494,430,443,418,418,516,430,418,398,516,398,379,517,398,517,380,427,450,456,443,430,440,450,458,456,411,430,516,516,398,391,516,391,411,380,391,398,80,69,468,468,69,53,53,472,468,472,510,468,69,683,58,468,89,80,89,100,80,112,135,133,112,133,120,135,143,140,135,140,133,143,152,140,53,69,58,161,168,170,143,151,152,120,100,112,0,21,476,21,470,476,257,357,308,315,257,309,362,357,317,530,258,305,308,357,362,529,524,326,351,538,532,337,538,351,337,461,538,262,32,524,524,529,530,31,27,326,31,326,32,544,461,293,550,524,543,538,544,551,552,543,564,568,550,578,571,560,551,562,564,543,571,551,544,552,578,550,557,560,571,557,605,562,571,605,557,588,544,597,603,607,552,578,552,607,584,588,597,578,584,602,603,593,607,603,552,564,342,326,27,210,332,344,305,506,351,326,524,32,538,551,616,543,552,550,602,568,578,593,603,605,584,578,588,588,578,607,544,588,571,571,593,605,568,597,544,602,584,568,584,597,568,562,614,557,532,557,530,544,550,568,562,605,603,562,603,564,560,616,551,532,616,557,538,616,532,614,530,557,524,550,262,530,543,524,461,544,538,550,544,293,588,607,593,593,571,588,616,560,557,530,351,532,305,351,530,614,562,543,530,614,543,255,529,263,255,263,33,249,255,33,249,33,36,250,249,36,250,36,349,290,250,349,356,308,362,362,301,356,395,379,398,947,635,620,947,863,635,947,1087,863,634,962,621,634,475,962,8,475,634,620,635,621,621,635,634,638,634,635,638,470,634,470,8,634,1074,767,1052,650,651,652,52,1047,475,660,666,670,1092,681,1060,666,52,670,701,689,677,685,677,681,683,660,58,683,70,685,70,80,685,677,689,768,147,768,689,685,80,695,701,697,689,703,113,697,711,697,701,96,751,145,701,710,718,726,96,99,711,703,697,99,105,711,99,711,726,105,713,711,703,713,113,710,704,109,711,713,703,113,713,105,697,113,689,710,109,722,740,711,717,96,726,729,731,732,701,731,701,718,722,109,131,722,131,734,740,726,711,76,147,689,734,138,739,734,131,138,740,729,726,751,96,729,768,173,363,746,752,732,746,732,731,739,138,156,739,156,750,751,729,740,751,161,145,750,764,749,750,156,764,156,168,764,751,757,161,505,208,938,777,773,783,780,777,781,785,777,783,788,777,785,787,777,788,790,208,869,793,794,795,794,796,797,795,794,797,785,799,788,208,196,869,645,803,1074,777,787,781,777,780,806,777,806,810,777,810,773,806,805,810,773,810,812,773,812,822,812,810,814,812,814,822,814,819,820,822,814,820,820,819,825,860,822,823,822,828,823,822,820,828,823,831,861,820,825,830,823,828,831,932,834,244,932,244,243,247,932,243,836,837,838,842,836,838,842,838,844,1070,1146,647,926,1080,891,650,652,850,823,1080,860,861,1080,823,863,1087,1049,869,196,794,796,794,277,802,938,867,870,794,793,867,790,1041,785,873,874,785,874,799,876,783,773,802,1041,783,1106,845,1105,836,291,290,836,290,837,845,842,844,1104,773,822,1104,822,860,926,891,887,890,861,930,891,890,842,301,362,931,842,931,836,891,842,845,931,317,291,931,291,836,318,906,319,900,652,927,645,919,803,906,652,651,906,651,907,891,1080,890,890,1080,861,905,850,919,919,922,803,938,208,790,861,301,930,876,773,915,802,783,876,915,773,1104,919,900,922,831,247,240,319,906,907,319,907,349,909,346,172,927,929,922,927,922,900,919,850,652,919,652,900,932,933,834,861,831,240,240,273,861,927,906,318,922,929,909,790,867,938,869,783,1041,790,869,1041,869,785,783,887,891,845,172,767,909,831,828,247,318,346,927,820,830,933,820,933,932,828,820,932,828,932,247,927,652,906,346,909,927,909,929,927,1091,970,962,970,621,962,970,620,621,970,973,620,973,969,620,965,970,1091,969,967,620,1002,973,970,973,984,969,983,970,965,970,1010,1002,983,1010,970,967,1011,966,984,967,969,992,1001,983,1001,1010,983,997,1011,967,1000,967,984,1000,997,967,992,983,965,992,1004,1001,973,1002,1014,973,1014,984,1000,984,1014,1000,1026,1024,997,1000,1024,1001,1004,1021,1000,1014,1026,1014,1002,1030,1033,1026,1030,1030,1002,1033,1002,1010,1033,1014,1030,1026,876,915,1038,863,1049,1068,863,1068,1071,873,785,794,873,794,1040,794,785,869,802,867,1041,711,701,717,740,732,752,751,752,762,751,762,757,762,764,757,752,746,742,736,731,718,681,677,1060,1040,794,870,732,740,717,732,717,701,740,752,751,764,762,752,764,752,749,749,752,742,731,736,742,731,742,746,863,1074,635,635,1074,1052,638,1052,470,962,1087,1091,657,962,475,670,58,660,52,58,670,876,1146,1070,1011,997,1024,1001,1021,1033,1024,1021,1011,1049,1087,657,666,1047,52,1060,677,768,1060,768,1077,666,657,1047,666,1049,657,1071,647,645,1071,1068,1070,1077,1065,938,1077,938,1060,767,172,470,767,470,1052,1068,802,1070,803,909,767,803,767,1074,647,905,645,1087,962,657,1047,657,475,768,1065,1077,1065,768,363,1074,863,1071,926,860,1080,926,1104,860,1065,505,938,1060,938,802,802,1068,1060,802,876,1070,1049,1092,1068,1087,947,1091,1071,1070,647,1011,1021,1004,1011,1004,992,1011,992,966,966,1091,967,967,1091,947,1071,645,1074,1010,1001,1033,1026,1033,1024,1021,1024,1033,992,965,966,1091,966,965,1068,1092,1060,1092,666,681,681,666,683,666,1092,1049,685,695,677,683,685,681,695,704,710,710,722,718,718,722,734,718,734,736,736,734,739,736,739,742,742,739,750,666,660,683,757,764,168,757,168,161,742,750,749,695,710,701,695,701,677,635,1052,638,842,890,931,931,362,317,1106,887,845,905,647,1103,1103,1105,905,850,905,1105,1104,926,1108,915,1104,1038,1120,876,1038,1196,1138,1125,1147,1165,1146,1125,1149,1120,1136,1141,1134,1134,1149,1138,1134,1141,1185,1149,1181,1146,1189,1164,1181,1165,1182,1164,1145,1118,1165,919,645,905,803,922,909,301,861,273,1125,1138,1149,1182,1147,1146,1120,1149,1146,1170,1183,1191,1182,1165,1147,1165,1191,1183,1165,1164,1189,1165,1189,1191,1170,1191,1189,1164,1182,1146,1145,1165,1183,1164,1146,1181,1149,1189,1181,1170,1134,1185,1185,1183,1170,1141,1136,1194,1108,1106,1136,1141,1145,1183,1141,1183,1185,1120,1114,1125,1108,1136,1196,1114,1108,1196,1118,1103,1165,1114,1196,1125,1194,1136,1106,1146,1165,647,1103,647,1165,1104,1108,1114,1106,1105,1118,1038,1104,1114,1038,1114,1120,1146,876,1120,1105,1103,1118,1189,1134,1170,1134,1189,1149,1134,1138,1136,1196,1136,1138,1108,926,1106,887,1106,926,1141,1118,1145,1194,1118,1141,1106,1118,1194,845,850,1105,844,650,850,844,850,845,838,651,650,838,650,844,837,907,651,837,651,838,290,349,907,290,907,837,930,931,890,931,930,301,620,967,947,147,173,768,1065,363,484,505,1065,484,1199,1200,1271,1200,1201,1273,1200,1273,1271,1201,1202,1273,1202,1203,1273,1203,1204,1273,1204,1205,1273,1205,1206,1274,1205,1274,1273,1206,1207,1274,1207,1208,1274,1208,1209,1274,1209,1210,1274,1210,1211,1274,1212,1213,1211,1214,1215,1279,1214,1279,1213,1215,1216,1279,1216,1217,1279,1218,1219,1281,1218,1281,1217,1219,1220,1281,1220,1221,1281,1221,1222,1281,1222,1223,1226,1222,1226,1281,1223,1224,1226,1224,1225,1226,1227,1228,1285,1227,1285,1226,1228,1229,1285,1229,1230,1285,1230,1231,1287,1230,1287,1285,1231,1232,1287,1232,1233,1287,1234,1235,1233,1235,1236,1233,1236,1237,1290,1236,1290,1233,1237,1238,1290,1238,1239,1290,1239,1240,1290,1240,1241,1290,1241,1242,1292,1241,1292,1290,1242,1243,1292,1243,1244,1292,1244,1245,1295,1244,1295,1292,1245,1246,1295,1246,1247,1295,1247,1248,1295,1248,1249,1295,1249,1250,1295,1251,1252,1298,1251,1298,1250,1252,1253,1298,1253,1254,1298,1254,1255,1298,1256,1257,1255,1257,1258,1329,1258,1259,1329,1259,1260,1303,1260,1261,1303,1261,1262,1303,1262,1263,1303,1264,1265,1305,1264,1305,1263,1265,1266,1305,1266,1267,1305,1267,1268,1305,1268,1269,1271,1268,1271,1305,1269,1270,1271,1270,1199,1271,1213,1279,1211,1279,1217,1368,1217,1281,1368,1226,1344,1281,1226,1316,1344,1226,1285,1316,1285,1287,1318,1285,1318,1316,1287,1233,1318,1233,1320,1318,1233,1290,1320,1292,1295,1290,1298,1384,1250,1298,1255,1384,1255,1257,1329,1255,1329,1384,1329,1259,1390,1259,1303,1390,1271,1273,1398,1271,1398,1396,1211,1279,1365,1368,1281,1344,1316,1318,1374,1316,1374,1344,1320,1349,1318,1320,1290,1349,1290,1379,1349,1290,1353,1379,1290,1295,1353,1295,1250,1384,1295,1384,1353,1384,1329,1387,1303,1263,1390,1263,1305,1390,1305,1432,1390,1305,1271,1396,1305,1396,1432,1273,1400,1398,1273,1274,1400,1274,1363,1400,1274,1211,1365,1274,1365,1363,1279,1368,1365,1344,1407,1368,1318,1376,1374,1318,1349,1376,1349,1379,1376,1353,1384,1382,1329,1390,1387,1363,1443,1400,1363,1365,1443,1344,1410,1407,1344,1374,1410,1374,1454,1410,1374,1376,1416,1374,1416,1454,1376,1379,1418,1376,1418,1416,1379,1460,1418,1379,1353,1460,1353,1382,1460,1384,1387,1426,1387,1469,1426,1387,1390,1469,1390,1430,1469,1390,1432,1430,1398,1400,1511,1400,1482,1511,1400,1443,1482,1365,1368,1443,1368,1407,1443,1407,1410,1451,1410,1454,1451,1454,1416,1456,1416,1418,1458,1416,1458,1456,1418,1460,1458,1460,1382,1462,1382,1497,1462,1382,1384,1497,1384,1426,1497,1432,1396,1507,1396,1476,1507,1476,1396,1511,1396,1398,1511,1407,1518,1443,1407,1451,1518,1454,1490,1451,1454,1456,1490,1426,1469,1504,1469,1430,1504,1430,1507,1504,1430,1432,1507,1482,1443,1540,1443,1518,1540,1451,1520,1518,1451,1490,1520,1490,1456,1520,1456,1524,1520,1456,1458,1524,1458,1460,1524,1460,1462,1529,1460,1529,1524,1462,1497,1529,1497,1426,1529,1426,1531,1529,1426,1504,1531,1476,1511,1572,1511,1482,1572,1482,1540,1572,1518,1520,1544,1520,1524,1544,1524,1529,1565,1531,1570,1529,1531,1504,1570,1504,1507,1572,1504,1572,1570,1507,1476,1572,1518,1544,1572,1544,1524,1565,1565,1529,1570,1540,1518,1572,1544,1565,1572,1565,1570,1572,1600,1648,1651,1600,1651,1603,1603,1651,1654,1603,1654,1606,1606,1654,1657,1606,1657,1609,1609,1657,1660,1609,1660,1612,1612,1660,1663,1612,1663,1615,1615,1663,1666,1615,1666,1618,1618,1666,1669,1618,1669,1621,1621,1669,1648,1621,1648,1600,1648,1720,1723,1648,1723,1651,1651,1723,1726,1651,1726,1654,1654,1726,1729,1654,1729,1657,1657,1729,1732,1657,1732,1660,1660,1732,1735,1660,1735,1663,1663,1735,1738,1663,1738,1666,1666,1738,1741,1666,1741,1669,1669,1741,1720,1669,1720,1648,1720,1744,1747,1720,1747,1723,1723,1747,1750,1723,1750,1726,1726,1750,1753,1726,1753,1729,1729,1753,1756,1729,1756,1732,1732,1756,1759,1732,1759,1735,1735,1759,1762,1735,1762,1738,1738,1762,1765,1738,1765,1741,1741,1765,1744,1741,1744,1720,1744,1792,1795,1744,1795,1747,1747,1795,1798,1747,1798,1750,1750,1798,1801,1750,1801,1753,1753,1801,1804,1753,1804,1756,1756,1804,1807,1756,1807,1759,1759,1807,1810,1759,1810,1762,1762,1810,1813,1762,1813,1765,1765,1813,1792,1765,1792,1744,1792,1840,1843,1792,1843,1795,1795,1843,1846,1795,1846,1798,1798,1846,1849,1798,1849,1801,1801,1849,1852,1801,1852,1804,1804,1852,1855,1804,1855,1807,1807,1855,1858,1807,1858,1810,1810,1858,1861,1810,1861,1813,1813,1861,1840,1813,1840,1792,1864,1600,1603,1864,1603,1606,1864,1606,1609,1864,1609,1612,1864,1612,1615,1864,1615,1618,1864,1618,1621,1864,1621,1600,1865,1866,1869,1865,1869,1872,1865,1872,1866,1899,1947,1950,1899,1950,1902,1902,1950,1953,1902,1953,1905,1905,1953,1956,1905,1956,1908,1908,1956,1959,1908,1959,1911,1911,1959,1962,1911,1962,1914,1914,1962,1965,1914,1965,1917,1917,1965,1968,1917,1968,1920,1920,1968,1947,1920,1947,1899,1947,2019,2022,1947,2022,1950,1950,2022,2025,1950,2025,1953,1953,2025,2028,1953,2028,1956,1956,2028,2031,1956,2031,1959,1959,2031,2034,1959,2034,1962,1962,2034,2037,1962,2037,1965,1965,2037,2040,1965,2040,1968,1968,2040,2019,1968,2019,1947,2019,2043,2046,2019,2046,2022,2022,2046,2049,2022,2049,2025,2025,2049,2052,2025,2052,2028,2028,2052,2055,2028,2055,2031,2031,2055,2058,2031,2058,2034,2034,2058,2061,2034,2061,2037,2037,2061,2064,2037,2064,2040,2040,2064,2043,2040,2043,2019,2043,2091,2094,2043,2094,2046,2046,2094,2097,2046,2097,2049,2049,2097,2100,2049,2100,2052,2052,2100,2103,2052,2103,2055,2055,2103,2106,2055,2106,2058,2058,2106,2109,2058,2109,2061,2061,2109,2112,2061,2112,2064,2064,2112,2091,2064,2091,2043,2091,2139,2142,2091,2142,2094,2094,2142,2145,2094,2145,2097,2097,2145,2148,2097,2148,2100,2100,2148,2151,2100,2151,2103,2103,2151,2154,2103,2154,2106,2106,2154,2157,2106,2157,2109,2109,2157,2160,2109,2160,2112,2112,2160,2139,2112,2139,2091,2163,1899,1902,2163,1902,1905,2163,1905,1908,2163,1908,1911,2163,1911,1914,2163,1914,1917,2163,1917,1920,2163,1920,1899,2164,2165,2168,2164,2168,2171,2164,2171,2165,2174,2181,2180,2174,2175,2181,2175,2182,2181,2175,2176,2182,2180,2187,2186,2180,2181,2187,2181,2188,2187,2181,2182,2188,2186,2193,2192,2186,2187,2193,2187,2194,2193,2187,2188,2194,2192,2199,2198,2192,2193,2199,2193,2200,2199,2193,2194,2200,2198,2205,2204,2198,2199,2205,2199,2206,2205,2199,2200,2206,2204,2214,2213,2204,2205,2214,2205,2215,2214,2205,2206,2215,2216,2222,2223,2216,2223,2217,2217,2223,2224,2217,2224,2218,2222,2228,2229,2222,2229,2223,2223,2229,2230,2223,2230,2224,2228,2234,2235,2228,2235,2229,2229,2235,2236,2229,2236,2230,2234,2240,2241,2234,2241,2235,2235,2241,2242,2235,2242,2236,2240,2246,2247,2240,2247,2241,2241,2247,2248,2241,2248,2242,2246,2255,2256,2246,2256,2247,2247,2256,2257,2247,2257,2248]"),dl=[14,21,22,14,11,36,32,1,11,21,38,40,224,3,222,222,3,6,39,29,199,32,23,3,192,1,224,9,1,201,1,36,11,1,32,3,23,6,3,36,1,9,224,1,3,29,40,38,14,36,21,21,36,38,29,38,9,29,9,199,6,29,39,14,32,11,14,23,32,64,59,45,59,64,60,188,66,68,70,69,88,72,55,203,72,203,45,88,72,45,184,43,223,64,45,43,73,60,43,60,64,43,54,53,73,54,73,184,43,45,203,53,60,73,88,59,85,66,88,53,85,60,69,69,60,81,69,81,88,68,66,53,68,53,54,55,72,66,55,66,188,85,69,70,72,88,66,60,85,59,88,45,59,81,60,53,88,81,53,90,214,230,113,119,93,118,110,112,115,100,108,118,98,93,90,230,96,214,90,187,90,93,187,119,118,93,90,113,93,202,96,230,187,93,186,186,93,98,98,118,112,98,112,196,96,100,90,196,112,202,119,115,108,118,119,110,119,108,110,200,128,144,152,206,122,255,98,144,135,123,144,137,149,140,140,150,153,149,135,128,122,123,140,200,144,98,255,123,124,255,144,123,123,122,124,200,152,128,140,149,150,152,153,128,150,128,153,163,161,159,163,159,160,175,155,171,175,171,165,165,163,167,165,167,175,158,176,161,155,158,171,178,159,176,179,176,158,261,175,160,261,160,178,175,167,160,161,176,159,167,163,160,165,161,163,161,165,171,161,171,158,160,159,178,201,1,192,73,43,184,100,115,90,113,115,119,90,115,113,140,123,137,128,135,144,123,135,137,38,36,9,199,9,201,23,14,22,23,40,29,6,23,29,22,21,40,22,40,23,85,70,88,112,110,100,112,100,96,202,112,96,108,100,110,150,149,128,152,122,153,137,135,149,140,153,122,188,68,189,209,189,68,209,68,229,122,206,124,229,199,209,208,200,196,209,199,301,209,301,215,189,215,257,317,224,254,223,224,222,310,317,254,254,224,223,255,220,186,229,39,199,6,39,229,229,54,184,229,68,54,223,43,254,43,203,254,200,98,196,152,200,191,360,234,235,360,235,236,314,353,349,314,349,258,320,234,316,320,316,238,234,239,235,243,354,242,244,355,258,244,258,351,354,246,242,355,358,258,248,360,251,249,349,252,360,236,251,220,219,186,184,222,6,222,184,223,203,230,214,255,186,98,351,258,317,261,155,175,261,178,265,178,176,265,261,264,155,324,304,158,324,158,155,264,324,155,304,179,158,274,264,261,265,176,270,261,265,274,304,277,179,277,176,179,272,264,274,272,324,264,270,176,277,281,270,333,215,294,282,282,294,300,282,300,257,304,324,339,304,339,338,257,300,289,290,289,340,55,230,203,229,184,6,189,209,215,294,265,270,55,202,230,202,55,188,257,208,189,189,196,202,189,202,188,294,274,265,312,220,124,254,219,310,312,310,220,219,220,310,300,340,289,301,274,294,274,301,302,274,302,272,317,339,324,277,304,338,316,312,326,310,351,317,358,313,258,321,319,238,326,312,124,219,187,186,187,219,214,214,219,254,214,254,203,191,308,152,199,201,302,152,308,206,326,124,206,191,200,208,196,189,208,322,272,302,324,272,322,326,306,321,224,317,324,224,324,192,324,322,192,192,322,201,308,290,306,340,329,321,340,321,306,330,329,340,277,336,333,338,336,277,333,270,277,330,340,343,306,290,340,300,294,281,300,343,340,343,300,281,343,281,333,333,330,343,255,124,220,308,191,290,208,289,290,208,290,191,289,208,257,282,257,215,199,302,301,201,322,302,308,306,326,206,308,326,301,294,215,294,270,281,359,336,349,356,333,336,356,336,359,354,330,333,354,333,356,329,330,354,329,243,319,329,319,321,351,357,232,351,232,233,239,234,320,252,349,353,351,233,244,354,356,246,357,248,232,356,359,249,356,249,246,357,360,248,359,349,249,258,313,314,238,319,320,321,238,326,317,258,339,357,312,360,360,312,316,360,316,234,338,258,349,338,349,336,243,329,354,357,310,312,351,310,357,326,238,316,339,258,338],y3={head:ul,hand:dl};function fl(i){const t=new al,e=new oa({vertexColors:!0}),n=t.parse(cl),s=t.parse(hl);i&&(n.setIndex(y3.head),s.setIndex(y3.hand));const r=s.clone().scale(-1,1,1),a=r.getIndex();for(let o=0;o<a.count;o+=3){const c=a.getX(o+1);a.setX(o+1,a.getX(o+2)),a.setX(o+2,c)}return{head:new wt(n,e),hands:[new wt(s,e),new wt(r,e)]}}const pl=new F(0,1,0),Te=new F,D1=new F,As=.425,Ea=.405;function Yt(i){return new oa({color:i})}function xn(i,t,e,n,s,r,a,o){const c=new wt(new Xs(1,14,10),t);return c.position.set(e,n,s),c.scale.set(r,a,o),i.add(c),c}function kn(i,t,e,n=1){const s=new wt(new Vs(e.map(([r,a])=>new x0(r,a)),16),t);return s.scale.z=n,i.add(s),s}function Di(i,t,e,n,s){return kn(i,t,[[0,0],[e,0],[n,.22],[s,.92],[s*.78,1],[0,1]],.94)}function Ni(i,t,e){Te.subVectors(e,t),i.position.copy(t),i.scale.y=Te.length(),i.quaternion.setFromUnitVectors(pl,Te.normalize())}function ml(i,t,e,n,s){Te.subVectors(t,i);const r=Math.max(1e-4,Te.length());Te.divideScalar(r),D1.set(-Math.sin(e)+n*.11*Math.cos(e),0,-Math.cos(e)-n*.11*Math.sin(e)),D1.addScaledVector(Te,-D1.dot(Te)).normalize();const a=Math.min(r,(As**2-Ea**2+r**2)/(2*r)),o=Math.sqrt(Math.max(0,As**2-a**2));s.copy(i).addScaledVector(Te,a).addScaledVector(D1,o)}function gl(){const i=document.createElement("canvas");try{const e=i.getContext("webgl2",{alpha:!0,antialias:!0,preserveDrawingBuffer:!0});if(e){const n=new G1({canvas:i,context:e,alpha:!0,antialias:!0});return n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n}}catch(e){console.warn("Using the SVG renderer for the practice dancer",e)}const t=new Gn;return t.setQuality("low"),t.setPrecision(1),t}class _l{constructor(t,e){this.mount=t,this.present=e,this.scene.add(this.pad,this.body),this.body.add(this.hips,this.chest,this.anatomy.head),this.scene.add(this.renderer instanceof Gn?new Y2(12104878):new V2(16774888,9546184,1.65));const n=new Zr(16770504,2.1);n.position.set(-3,5,3);const s=new Zr(13103606,1.2);s.position.set(2,3,-3),this.scene.add(n,s),this.camera.position.set(0,3,3),this.controls=new X9(this.camera,t),this.controls.target.copy(this.pad.position),this.controls.enablePan=!1,this.controls.minPolarAngle=Math.PI/12,this.controls.maxPolarAngle=Math.PI/2-.06,this.controls.minZoom=.6,this.controls.maxZoom=3,this.controls.zoomSpeed=2.4,this.controls.rotateSpeed=.7,this.controls.cursorStyle="grab",this.controls.update(),this.controls.saveState(),this.controls.addEventListener("change",this.cameraChanged),this.controls.addEventListener("end",this.rememberCamera),t.addEventListener("dblclick",this.resetCamera),t.addEventListener("keydown",this.cameraKey),kn(this.hips,this.shorts,[[0,-.09],[.13,-.08],[.157,-.015],[.142,.09],[0,.1]],.75),kn(this.chest,this.jersey,[[0,0],[.141,0],[.138,.11],[.16,.24],[.193,.3],[.156,.35],[.078,.375],[0,.375]],.7),kn(this.chest,this.trim,[[.143,.015],[.142,.027]],.71),xn(this.chest,this.trim,0,.299,.112,.123,.014,.014),this.setColors()}mount;present;renderer=gl();scene=new Ho;camera=new Ks(-1,1,1,-1,.1,14);controls;body=new re;pad=new re;hips=new re;chest=new re;anatomy=fl(this.renderer instanceof Gn);skin=Yt(12946280);jersey=Yt(3702656);trim=Yt(10346963);shorts=Yt(3490400);tights=Yt(5792892);sock=Yt(15068393);shoes=[Yt(233724),Yt(16559363)];toes=[Yt(233724),Yt(16559363)];floorColor=new X0(4675949);tiles=[];legs=[this.buildLeg(0),this.buildLeg(1)];arms=this.anatomy.hands.map((t,e)=>this.buildArm(t,e));cameraRestored=!1;padWidth=1;width=0;height=0;extent=1;canvas=this.renderer instanceof G1?this.renderer.domElement:document.createElement("canvas");svgContext=this.renderer instanceof Gn?this.canvas.getContext("2d"):null;restoreCameraPreference(){const t=Vn.practice.stageCamera;if(!Array.isArray(t)||t.length!==3||!t.every(Number.isFinite)||t[2]<Number.EPSILON)return;const[e,n,s]=t,r=this.controls;this.camera.position.setFromSphericalCoords(r.getDistance(),Pa(n,r.minPolarAngle,r.maxPolarAngle),e).add(r.target),this.setViewZoom(s),r.update()}setViewZoom(t){this.camera.zoom=Math.min(t,this.controls.maxZoom),this.controls.minZoom=Math.min(this.controls.minZoom,this.camera.zoom),this.camera.updateProjectionMatrix()}rememberCamera=()=>{Vn.practice.stageCamera=[this.controls.getAzimuthalAngle(),this.controls.getPolarAngle(),this.camera.zoom]};resetCamera=()=>{this.controls.reset(),Vn.practice.stageCamera=[]};cameraKey=t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=Math.PI/12;switch(t.key){case"ArrowLeft":this.controls.rotateLeft(e);break;case"ArrowRight":this.controls.rotateLeft(-e);break;case"ArrowUp":this.controls.rotateUp(e);break;case"ArrowDown":this.controls.rotateUp(-e);break;case"+":case"=":this.controls.dollyIn(1/1.2);break;case"-":this.controls.dollyOut(1/1.2);break;case"Home":this.resetCamera();break;default:return}t.preventDefault(),t.stopPropagation(),t.key!=="Home"&&this.rememberCamera()};buildArm(t,e){const n=new re;this.chest.add(n);const s=kn(n,this.skin,[[0,0],[.041,0],[.044,.22],[.036,.53],[.028,.75],[.022,.92],[.0205,.97],[.0196,1]]);return s.rotation.x=Math.PI,s.scale.y=hr,t.position.y=-hr,n.add(t),{upper:Di(this.chest,this.jersey,.058,.061,.043),shoulder:new F(e===0?-.161:.161,.3,0),forearm:n}}buildLeg(t){const e=new re;this.body.add(e),xn(e,this.sock,0,.022,-.008,.057,.022,.132),xn(e,this.shoes[t],0,.048,-.005,.056,.041,.128),xn(e,this.toes[t],0,.046,-.084,.05,.028,.051),xn(e,this.sock,0,.086,.046,.042,.035,.044);const n=new wt(new q1(1,18),new Ms({color:1054498,transparent:!0,opacity:.36,depthWrite:!1}));return n.rotation.x=-Math.PI/2,this.body.add(n),{shoe:e,shadow:n,thigh:Di(this.body,this.shorts,.083,.091,.059),shin:Di(this.body,this.tights,.054,.065,.039),joint:xn(this.body,this.tights,0,0,0,.057,.057,.056),hip:new F,knee:new F,ankle:new F}}setColors(){this.shoes[0].color.setHex(r1(a1.LEFT_HEEL).toNumber()),this.shoes[1].color.setHex(r1(a1.RIGHT_HEEL).toNumber()),this.toes[0].color.setHex(r1(a1.LEFT_TOE).toNumber()),this.toes[1].color.setHex(r1(a1.RIGHT_TOE).toNumber())}setLayout(t){this.disposeMeshes(this.pad),this.pad.clear(),this.tiles=[];const e=t.layout.map(o=>o.x);this.padWidth=(Math.max(...e)-Math.min(...e)+1)*rn;const n=new wt(new en(this.padWidth+.025,.05,3*rn+.025),Yt(2701386));n.position.y=-.034,this.pad.add(n);const s=new ea;s.moveTo(0,.089),s.lineTo(-.087,.002),s.lineTo(-.045,.002),s.lineTo(-.045,-.057),s.lineTo(.045,-.057),s.lineTo(.045,.002),s.lineTo(.087,.002),s.closePath();const r=new Ms({color:11123658}),a=new Ws(s);for(const[o,c]of t.layout.entries()){const l=new wt(new en(rn-.012,.014,rn-.012),Yt(4675949));l.position.set(c.x*rn,-.007,-c.y*rn),this.pad.add(l),this.tiles.push(l);const h=t.name.startsWith("pump")&&o%5===2,d=new wt(h?new q1(.059,12):a,r);d.rotation.set(-Math.PI/2,Math.PI/2-c.rotation,0,"YXZ"),d.position.copy(l.position).y=.002,this.pad.add(d)}}resize(t,e){this.width=t,this.height=e,this.cameraRestored||(this.cameraRestored=!0,this.restoreCameraPreference()),this.updateProjection()}updateProjection(){if(this.extent=k9(this.camera,this.width,this.height,this.padWidth),this.renderer instanceof G1){const t=Math.min(window.devicePixelRatio*this.extent,2);(this.canvas.width!==Math.floor(this.width*t)||this.canvas.height!==Math.floor(this.height*t))&&this.renderer.setDrawingBufferSize(this.width,this.height,t)}else(this.canvas.width!==this.width||this.canvas.height!==this.height)&&(this.renderer.setSize(this.width,this.height),this.canvas.width=this.width,this.canvas.height=this.height)}fitDancer(){this.setViewZoom(V9(this.camera,this.body,this.extent)),this.cameraChanged(),this.rememberCamera()}draw(t){const{left:e,right:n,yaw:s,heading:r}=t,a=[e,n],o=e.unload-n.unload,{x:c,z:l}=t.hips;let h=.86+Math.min(e.lift,n.lift)-t.compression;const d=Math.cos(s),f=Math.sin(s);for(const[u,x]of a.entries()){const A=this.legs[u],m=u===0?-1:1;A.hip.set(c+m*.099*d,0,l-m*.099*f),A.ankle.set(x.x+.046*Math.sin(x.yaw),x.lift+.083,x.z+.046*Math.cos(x.yaw));const p=(A.hip.x-A.ankle.x)**2+(A.hip.z-A.ankle.z)**2;h=Math.min(h,A.ankle.y+Math.sqrt(Math.max(.07,(As+Ea-.016)**2-p)))}this.hips.position.set(c,h,l),this.hips.rotation.set(0,s,o*.045,"YXZ"),this.chest.position.set(c+o*.012*d,h+.063,l-o*.012*f),this.chest.rotation.set(-.09-t.compression*.8,Ia(t),-o*.075,"YXZ"),this.anatomy.head.position.set(0,.355,0).applyQuaternion(this.chest.quaternion).add(this.chest.position),this.anatomy.head.rotation.set(-.035,r+(s-r)*.39,-o*.025,"YXZ");for(const u of this.tiles)u.material.color.copy(this.floorColor);for(const[u,x]of a.entries()){const A=u===0?-1:1,m=this.legs[u];m.hip.y=h+A*o*.006,ml(m.hip,m.ankle,s,A,m.knee),Ni(m.thigh,m.hip,m.knee),Ni(m.shin,m.knee,m.ankle),m.joint.position.copy(m.knee),m.shoe.position.set(x.x,x.lift+.005,x.z),m.shoe.rotation.set(x.pitch,x.yaw,0,"YXZ"),m.shadow.position.set(x.x,.004,x.z),m.shadow.rotation.set(-Math.PI/2,x.yaw,0,"YXZ"),m.shadow.scale.set(.075+x.lift*.16,.143,1),m.shadow.material.opacity=.38-x.lift*1.6,x.contact&&(this.tiles[x.heel]?.material.color.lerp(this.shoes[u].color,.65),this.tiles[x.toe]?.material.color.lerp(this.toes[u].color,.65));const p=this.arms[u],{upper:E,forearm:v}=t.arms[u];p.forearm.position.addVectors(p.shoulder,E),Ni(p.upper,p.shoulder,p.forearm.position),p.forearm.rotation.set(Math.atan2(-v.z,Math.hypot(v.x,v.y)),0,Math.atan2(v.x,-v.y),"ZXY")}this.render()}cameraChanged=()=>{!this.width||!this.height||(this.updateProjection(),this.render())};render=()=>{if(!(!this.width||!this.height)){if(this.renderer.render(this.scene,this.camera),this.renderer instanceof Gn&&this.svgContext){const t=this.svgContext;t.clearRect(0,0,this.width,this.height),t.save(),t.translate(this.width/2,this.height/2);for(const e of this.renderer.domElement.querySelectorAll("path"))t.fillStyle=e.style.fill,t.globalAlpha=Number(e.style.fillOpacity||1),t.fill(new Path2D(e.getAttribute("d")));t.restore()}this.present(this.canvas,this.extent)}};disposeMeshes(t){const e=new Set,n=new Set;t.traverse(s=>{s instanceof wt&&(e.add(s.geometry),n.add(s.material))}),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}dispose(){this.mount.removeEventListener("dblclick",this.resetCamera),this.mount.removeEventListener("keydown",this.cameraKey),this.controls.removeEventListener("change",this.cameraChanged),this.controls.removeEventListener("end",this.rememberCamera),this.controls.dispose(),this.disposeMeshes(this.scene),this.renderer instanceof G1&&(this.renderer.dispose(),this.renderer.forceContextLoss())}}function xl(i,t,e){if(e)return Ua(i.STAGE_WIDTH,i.STAGE_HEIGHT,t,Vn.chart.zoom,i.stage.scale.y)?.dancer;const n=Fa(t);if(n)return{x:i.STAGE_WIDTH/2-Oa.getTotalWidgetWidth()-16-n.width,y:i.STAGE_HEIGHT/2-16-n.height,...n}}function wl({app:i,practice:t}){const e=Pe.useRef(null),n=Pe.useRef(null),s=Pe.useRef(null),r=Pe.useRef(null),a=Pe.useRef(null),o=Pe.useRef(null),c=Pe.useRef(null);return Pe.useEffect(()=>{const l=e.current,h=n.current,d=s.current,f=r.current,u=a.current,x=o.current,A=c.current,m=new La;m.name="3D dancer",m.anchor.set(.5,$e),m.zIndex=i.chartManager.widgetManager.zIndex,m.visible=!1,i.stage.addChild(m);let p,E,v,S,w=NaN,T,g=0,M=0,D=1;function R(){if(!T||!E)return;const B=M/g;m.position.set(T.x+T.width/2,T.y+B*$e),m.width=T.width*D,m.height=B*D}function N(B,Z){D=Z,E||(E=Da.from(B),m.texture=E),E.update(),R()}function O(){if(!p||l.hidden)return;const B=h.clientWidth,Z=h.clientHeight;!B||!Z||(M=Z,p.resize(B,Z),w=NaN)}function z(B){const Z=i.stage.scale.y;T&&Z===g&&T.x===B.x&&T.y===B.y&&T.width===B.width&&T.height===B.height||(T=B,g=Z,l.style.transform=`translate(${T.x*g}px, ${T.y*g}px)`,l.style.width=T.width*g+"px",l.style.height=T.height*g+"px",O(),R())}const C=()=>p?.fitDancer(),V=()=>{const B=v?.fastSteps;if(!B?.length)return;const Z=B.find(e0=>e0.beat>i.chartManager.beat+1e-4)??B[0];i.chartManager.beat=Z.beat},$=B=>{B.startsWith("chart.parity.")&&B.endsWith("Color")&&(p?.setColors(),w=NaN)};function W(){if(!i.renderer.renderingToScreen)return;const{loadedChart:B,chartView:Z}=i.chartManager,e0=B&&Na[B.gameType.id],T0=B&&e0&&xl(i,B.gameType.id,t);if(!B||!Z||!e0||!T0||B.stats.parity?.plannedRate!==void 0&&B.stats.parity.plannedRate!==Vn.audio.rate||!t&&(!Ca.barlines||!B.stats.parity?.states?.length)){m.visible=!1,l.hidden=!0,f.hidden=!0,S=void 0,v=void 0;return}l.hidden=!1,m.visible=!0,p??=new _l(h,N),z(T0),B!==S&&(p.setLayout(e0),O());const E0=i.chartManager.getDancerMotion(B);if(E0&&E0!==v&&(S=B,v=E0,f.hidden=!t||!v.fastSteps.length,u.textContent="Fast steps ("+v.fastSteps.length+")",w=NaN),!v)return;const Q=Math.min(Z.getVisualTime(),v.restTime);if(Q===w)return;w=Q;const l0=v.sample(Q);if(p.draw(l0),!t)return;const v0=B.stats.parity?.states,U0=v0?v0.length<=2?"No steps in this chart":l0.coaching:"Calculating footing…";x.textContent!==l0.paceWarning&&(x.textContent=l0.paceWarning),d.textContent!==U0&&(d.textContent=U0)}const i0=new ResizeObserver(O);return i0.observe(h),f.addEventListener("click",V),A.addEventListener("click",C),cr.on("userOptionUpdated",$),i.renderer.on("prerender",W),()=>{i.renderer.off("prerender",W),cr.off("userOptionUpdated",$),f.hidden=!0,f.removeEventListener("click",V),A.removeEventListener("click",C),i0.disconnect(),p?.dispose(),m.destroy(),E?.destroy(!0)}},[i,t]),_e.jsxs(_e.Fragment,{children:[_e.jsxs("section",{id:"practice-dancer","aria-label":"3D dance pad",ref:e,hidden:!0,children:[_e.jsx("div",{className:"dancer-viewport",ref:n,tabIndex:0,role:"group","aria-label":"Dancer camera. Drag or use the arrow keys to rotate. Scroll, pinch or use plus and minus to zoom. Double-click or press Home for the rear view.",title:"Drag to rotate. Scroll or pinch to zoom. Double-click for the rear view."}),_e.jsx("div",{className:"dancer-coaching",ref:s,hidden:!t}),_e.jsx("button",{className:"dancer-fit",ref:c,type:"button",title:"Fit the whole dancer at this angle",children:"Fit"})]}),_e.jsxs("button",{type:"button",className:"dancer-fast-steps",ref:r,hidden:!0,title:"Jump to the next step over the movement limit",children:[_e.jsx("span",{ref:a,children:"Fast steps"}),_e.jsx("span",{className:"dancer-pace-warning",ref:o})]})]})}export{wl as default};
