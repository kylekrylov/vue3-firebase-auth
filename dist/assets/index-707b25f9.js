(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ei(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const le={},tn=[],$e=()=>{},$l=()=>!1,Hl=/^on[^a-z]/,Br=e=>Hl.test(e),ti=e=>e.startsWith("onUpdate:"),pe=Object.assign,ni=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jl=Object.prototype.hasOwnProperty,Y=(e,t)=>jl.call(e,t),F=Array.isArray,nn=e=>Zn(e)==="[object Map]",$r=e=>Zn(e)==="[object Set]",Hi=e=>Zn(e)==="[object Date]",W=e=>typeof e=="function",de=e=>typeof e=="string",$n=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",ya=e=>ne(e)&&W(e.then)&&W(e.catch),ba=Object.prototype.toString,Zn=e=>ba.call(e),Vl=e=>Zn(e).slice(8,-1),Ea=e=>Zn(e)==="[object Object]",ri=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gr=ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wl=/-(\w)/g,Ye=Hr(e=>e.replace(Wl,(t,n)=>n?n.toUpperCase():"")),Kl=/\B([A-Z])/g,_n=Hr(e=>e.replace(Kl,"-$1").toLowerCase()),jr=Hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),cs=Hr(e=>e?`on${jr(e)}`:""),Hn=(e,t)=>!Object.is(e,t),mr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Tr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},As=e=>{const t=parseFloat(e);return isNaN(t)?e:t},zl=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let ji;const Ps=()=>ji||(ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function si(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Yl(r):si(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(de(e))return e;if(ne(e))return e}}const ql=/;(?![^(]*\))/g,Gl=/:([^]+)/,Jl=/\/\*[^]*?\*\//g;function Yl(e){const t={};return e.replace(Jl,"").split(ql).forEach(n=>{if(n){const r=n.split(Gl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Vr(e){let t="";if(de(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Vr(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ql=ei(Xl);function Ia(e){return!!e||e===""}function Zl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ln(e[r],t[r]);return n}function ln(e,t){if(e===t)return!0;let n=Hi(e),r=Hi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=$n(e),r=$n(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?Zl(e,t):!1;if(n=ne(e),r=ne(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!ln(e[o],t[o]))return!1}}return String(e)===String(t)}function wa(e,t){return e.findIndex(n=>ln(n,t))}const Vi=e=>de(e)?e:e==null?"":F(e)||ne(e)&&(e.toString===ba||!W(e.toString))?JSON.stringify(e,Ta,2):String(e),Ta=(e,t)=>t&&t.__v_isRef?Ta(e,t.value):nn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:$r(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!F(t)&&!Ea(t)?String(t):t;let ke;class Ca{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sa(e){return new Ca(e)}function eu(e,t=ke){t&&t.active&&t.effects.push(e)}function ii(){return ke}function Ra(e){ke&&ke.cleanups.push(e)}const oi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Aa=e=>(e.w&St)>0,Pa=e=>(e.n&St)>0,tu=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=St},nu=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Aa(s)&&!Pa(s)?s.delete(e):t[n++]=s,s.w&=~St,s.n&=~St}t.length=n}},Cr=new WeakMap;let Rn=0,St=1;const ks=30;let Fe;const Ht=Symbol(""),Os=Symbol("");class ai{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eu(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,It=!0,St=1<<++Rn,Rn<=ks?tu(this):Wi(this),this.fn()}finally{Rn<=ks&&nu(this),St=1<<--Rn,Fe=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(Wi(this),this.onStop&&this.onStop(),this.active=!1)}}function Wi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let It=!0;const ka=[];function vn(){ka.push(It),It=!1}function yn(){const e=ka.pop();It=e===void 0?!0:e}function Ae(e,t,n){if(It&&Fe){let r=Cr.get(e);r||Cr.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=oi()),Oa(s)}}function Oa(e,t){let n=!1;Rn<=ks?Pa(e)||(e.n|=St,n=!Aa(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function it(e,t,n,r,s,i){const o=Cr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&F(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":F(e)?ri(n)&&a.push(o.get("length")):(a.push(o.get(Ht)),nn(e)&&a.push(o.get(Os)));break;case"delete":F(e)||(a.push(o.get(Ht)),nn(e)&&a.push(o.get(Os)));break;case"set":nn(e)&&a.push(o.get(Ht));break}if(a.length===1)a[0]&&Ns(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ns(oi(c))}}function Ns(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ki(r);for(const r of n)r.computed||Ki(r)}function Ki(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function ru(e,t){var n;return(n=Cr.get(e))==null?void 0:n.get(t)}const su=ei("__proto__,__v_isRef,__isVue"),Na=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($n)),iu=ci(),ou=ci(!1,!0),au=ci(!0),zi=cu();function cu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){vn();const r=G(this)[t].apply(this,n);return yn(),r}}),e}function lu(e){const t=G(this);return Ae(t,"has",e),t.hasOwnProperty(e)}function ci(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Cu:Ua:t?xa:Ma).get(r))return r;const o=F(r);if(!e){if(o&&Y(zi,s))return Reflect.get(zi,s,i);if(s==="hasOwnProperty")return lu}const a=Reflect.get(r,s,i);return($n(s)?Na.has(s):su(s))||(e||Ae(r,"get",s),t)?a:ue(a)?o&&ri(s)?a:a.value:ne(a)?e?Ba(a):bn(a):a}}const uu=Da(),fu=Da(!0);function Da(e=!1){return function(n,r,s,i){let o=n[r];if(un(o)&&ue(o)&&!ue(s))return!1;if(!e&&(!Sr(s)&&!un(s)&&(o=G(o),s=G(s)),!F(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=F(n)&&ri(r)?Number(r)<n.length:Y(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?Hn(s,o)&&it(n,"set",r,s):it(n,"add",r,s)),c}}function du(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&it(e,"delete",t,void 0),r}function hu(e,t){const n=Reflect.has(e,t);return(!$n(t)||!Na.has(t))&&Ae(e,"has",t),n}function pu(e){return Ae(e,"iterate",F(e)?"length":Ht),Reflect.ownKeys(e)}const La={get:iu,set:uu,deleteProperty:du,has:hu,ownKeys:pu},gu={get:au,set(e,t){return!0},deleteProperty(e,t){return!0}},mu=pe({},La,{get:ou,set:fu}),li=e=>e,Wr=e=>Reflect.getPrototypeOf(e);function cr(e,t,n=!1,r=!1){e=e.__v_raw;const s=G(e),i=G(t);n||(t!==i&&Ae(s,"get",t),Ae(s,"get",i));const{has:o}=Wr(s),a=r?li:n?di:jn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function lr(e,t=!1){const n=this.__v_raw,r=G(n),s=G(e);return t||(e!==s&&Ae(r,"has",e),Ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ur(e,t=!1){return e=e.__v_raw,!t&&Ae(G(e),"iterate",Ht),Reflect.get(e,"size",e)}function qi(e){e=G(e);const t=G(this);return Wr(t).has.call(t,e)||(t.add(e),it(t,"add",e,e)),this}function Gi(e,t){t=G(t);const n=G(this),{has:r,get:s}=Wr(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Hn(t,o)&&it(n,"set",e,t):it(n,"add",e,t),this}function Ji(e){const t=G(this),{has:n,get:r}=Wr(t);let s=n.call(t,e);s||(e=G(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&it(t,"delete",e,void 0),i}function Yi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&it(e,"clear",void 0,void 0),n}function fr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=t?li:e?di:jn;return!e&&Ae(a,"iterate",Ht),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function dr(e,t,n){return function(...r){const s=this.__v_raw,i=G(s),o=nn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?li:t?di:jn;return!t&&Ae(i,"iterate",c?Os:Ht),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function _u(){const e={get(i){return cr(this,i)},get size(){return ur(this)},has:lr,add:qi,set:Gi,delete:Ji,clear:Yi,forEach:fr(!1,!1)},t={get(i){return cr(this,i,!1,!0)},get size(){return ur(this)},has:lr,add:qi,set:Gi,delete:Ji,clear:Yi,forEach:fr(!1,!0)},n={get(i){return cr(this,i,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:fr(!0,!1)},r={get(i){return cr(this,i,!0,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dr(i,!1,!1),n[i]=dr(i,!0,!1),t[i]=dr(i,!1,!0),r[i]=dr(i,!0,!0)}),[e,n,t,r]}const[vu,yu,bu,Eu]=_u();function ui(e,t){const n=t?e?Eu:bu:e?yu:vu;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const Iu={get:ui(!1,!1)},wu={get:ui(!1,!0)},Tu={get:ui(!0,!1)},Ma=new WeakMap,xa=new WeakMap,Ua=new WeakMap,Cu=new WeakMap;function Su(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ru(e){return e.__v_skip||!Object.isExtensible(e)?0:Su(Vl(e))}function bn(e){return un(e)?e:fi(e,!1,La,Iu,Ma)}function Fa(e){return fi(e,!1,mu,wu,xa)}function Ba(e){return fi(e,!0,gu,Tu,Ua)}function fi(e,t,n,r,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Ru(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function st(e){return un(e)?st(e.__v_raw):!!(e&&e.__v_isReactive)}function un(e){return!!(e&&e.__v_isReadonly)}function Sr(e){return!!(e&&e.__v_isShallow)}function $a(e){return st(e)||un(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Kr(e){return Tr(e,"__v_skip",!0),e}const jn=e=>ne(e)?bn(e):e,di=e=>ne(e)?Ba(e):e;function Ha(e){It&&Fe&&(e=G(e),Oa(e.dep||(e.dep=oi())))}function ja(e,t){e=G(e);const n=e.dep;n&&Ns(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function Rt(e){return Va(e,!1)}function Au(e){return Va(e,!0)}function Va(e,t){return ue(e)?e:new Pu(e,t)}class Pu{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:jn(t)}get value(){return Ha(this),this._value}set value(t){const n=this.__v_isShallow||Sr(t)||un(t);t=n?t:G(t),Hn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:jn(t),ja(this))}}function Ne(e){return ue(e)?e.value:e}const ku={get:(e,t,n)=>Ne(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Wa(e){return st(e)?e:new Proxy(e,ku)}function Ou(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=Ka(e,n);return t}class Nu{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ru(G(this._object),this._key)}}class Du{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Lu(e,t,n){return ue(e)?e:W(e)?new Du(e):ne(e)&&arguments.length>1?Ka(e,t,n):Rt(e)}function Ka(e,t,n){const r=e[t];return ue(r)?r:new Nu(e,t,n)}class Mu{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ai(t,()=>{this._dirty||(this._dirty=!0,ja(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=G(this);return Ha(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function xu(e,t,n=!1){let r,s;const i=W(e);return i?(r=e,s=$e):(r=e.get,s=e.set),new Mu(r,s,i||!s,n)}function wt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){zr(i,t,n)}return s}function Le(e,t,n,r){if(W(e)){const i=wt(e,t,n,r);return i&&ya(i)&&i.catch(o=>{zr(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Le(e[i],t,n,r));return s}function zr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){wt(c,null,10,[e,o,a]);return}}Uu(e,n,s,r)}function Uu(e,t,n,r=!0){console.error(e)}let Vn=!1,Ds=!1;const be=[];let qe=0;const rn=[];let et=null,Mt=0;const za=Promise.resolve();let hi=null;function pi(e){const t=hi||za;return e?t.then(this?e.bind(this):e):t}function Fu(e){let t=qe+1,n=be.length;for(;t<n;){const r=t+n>>>1;Wn(be[r])<e?t=r+1:n=r}return t}function gi(e){(!be.length||!be.includes(e,Vn&&e.allowRecurse?qe+1:qe))&&(e.id==null?be.push(e):be.splice(Fu(e.id),0,e),qa())}function qa(){!Vn&&!Ds&&(Ds=!0,hi=za.then(Ja))}function Bu(e){const t=be.indexOf(e);t>qe&&be.splice(t,1)}function $u(e){F(e)?rn.push(...e):(!et||!et.includes(e,e.allowRecurse?Mt+1:Mt))&&rn.push(e),qa()}function Xi(e,t=Vn?qe+1:0){for(;t<be.length;t++){const n=be[t];n&&n.pre&&(be.splice(t,1),t--,n())}}function Ga(e){if(rn.length){const t=[...new Set(rn)];if(rn.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>Wn(n)-Wn(r)),Mt=0;Mt<et.length;Mt++)et[Mt]();et=null,Mt=0}}const Wn=e=>e.id==null?1/0:e.id,Hu=(e,t)=>{const n=Wn(e)-Wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ja(e){Ds=!1,Vn=!0,be.sort(Hu);const t=$e;try{for(qe=0;qe<be.length;qe++){const n=be[qe];n&&n.active!==!1&&wt(n,null,14)}}finally{qe=0,be.length=0,Ga(),Vn=!1,hi=null,(be.length||rn.length)&&Ja()}}function ju(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||le;p&&(s=n.map(m=>de(m)?m.trim():m)),d&&(s=n.map(As))}let a,c=r[a=cs(t)]||r[a=cs(Ye(t))];!c&&i&&(c=r[a=cs(_n(t))]),c&&Le(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Le(l,e,6,s)}}function Ya(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!W(e)){const c=l=>{const u=Ya(l,t,!0);u&&(a=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ne(e)&&r.set(e,null),null):(F(i)?i.forEach(c=>o[c]=null):pe(o,i),ne(e)&&r.set(e,o),o)}function qr(e,t){return!e||!Br(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,_n(t))||Y(e,t))}let me=null,Gr=null;function Rr(e){const t=me;return me=e,Gr=e&&e.type.__scopeId||null,t}function X_(e){Gr=e}function Q_(){Gr=null}function Ft(e,t=me,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&lo(-1);const i=Rr(t);let o;try{o=e(...s)}finally{Rr(i),r._d&&lo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ls(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:E,inheritAttrs:T}=e;let D,k;const L=Rr(e);try{if(n.shapeFlag&4){const N=s||r;D=ze(u.call(N,N,d,i,m,p,E)),k=c}else{const N=t;D=ze(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),k=t.props?c:Vu(c)}}catch(N){Mn.length=0,zr(N,e,1),D=fe(Me)}let j=D;if(k&&T!==!1){const N=Object.keys(k),{shapeFlag:z}=j;N.length&&z&7&&(o&&N.some(ti)&&(k=Wu(k,o)),j=At(j,k))}return n.dirs&&(j=At(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),D=j,Rr(L),D}const Vu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Br(n))&&((t||(t={}))[n]=e[n]);return t},Wu=(e,t)=>{const n={};for(const r in e)(!ti(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ku(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qi(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!qr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qi(r,o,l):!0:!!o;return!1}function Qi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!qr(n,i))return!0}return!1}function zu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const qu=e=>e.__isSuspense;function Gu(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):$u(e)}const hr={};function sn(e,t,n){return Xa(e,t,n)}function Xa(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){var a;const c=ii()===((a=ge)==null?void 0:a.scope)?ge:null;let l,u=!1,d=!1;if(ue(e)?(l=()=>e.value,u=Sr(e)):st(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(N=>st(N)||Sr(N)),l=()=>e.map(N=>{if(ue(N))return N.value;if(st(N))return Bt(N);if(W(N))return wt(N,c,2)})):W(e)?t?l=()=>wt(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Le(e,c,3,[m])}:l=$e,t&&r){const N=l;l=()=>Bt(N())}let p,m=N=>{p=L.onStop=()=>{wt(N,c,4)}},E;if(qn)if(m=$e,t?n&&Le(t,c,3,[l(),d?[]:void 0,m]):l(),s==="sync"){const N=zf();E=N.__watcherHandles||(N.__watcherHandles=[])}else return $e;let T=d?new Array(e.length).fill(hr):hr;const D=()=>{if(L.active)if(t){const N=L.run();(r||u||(d?N.some((z,oe)=>Hn(z,T[oe])):Hn(N,T)))&&(p&&p(),Le(t,c,3,[N,T===hr?void 0:d&&T[0]===hr?[]:T,m]),T=N)}else L.run()};D.allowRecurse=!!t;let k;s==="sync"?k=D:s==="post"?k=()=>Se(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),k=()=>gi(D));const L=new ai(l,k);t?n?D():T=L.run():s==="post"?Se(L.run.bind(L),c&&c.suspense):L.run();const j=()=>{L.stop(),c&&c.scope&&ni(c.scope.effects,L)};return E&&E.push(j),j}function Ju(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?Qa(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=ge;fn(this);const a=Xa(s,i.bind(r),n);return o?fn(o):jt(),a}function Qa(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Bt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))Bt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Bt(e[n],t);else if($r(e)||nn(e))e.forEach(n=>{Bt(n,t)});else if(Ea(e))for(const n in e)Bt(e[n],t);return e}function Z_(e,t){const n=me;if(n===null)return e;const r=es(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=le]=t[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function kt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(vn(),Le(c,n,8,[e.el,a,e,t]),yn())}}function Yu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mi(()=>{e.isMounted=!0}),sc(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],Za={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},Xu={name:"BaseTransition",props:Za,setup(e,{slots:t}){const n=Ff(),r=Yu();let s;return()=>{const i=t.default&&tc(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Me){o=T;break}}const a=G(e),{mode:c}=a;if(r.isLeaving)return us(o);const l=Zi(o);if(!l)return us(o);const u=Ls(l,a,r,n);Ms(l,u);const d=n.subTree,p=d&&Zi(d);let m=!1;const{getTransitionKey:E}=l.type;if(E){const T=E();s===void 0?s=T:T!==s&&(s=T,m=!0)}if(p&&p.type!==Me&&(!xt(l,p)||m)){const T=Ls(p,a,r,n);if(Ms(p,T),c==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},us(o);c==="in-out"&&l.type!==Me&&(T.delayLeave=(D,k,L)=>{const j=ec(r,p);j[String(p.key)]=p,D._leaveCb=()=>{k(),D._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},Qu=Xu;function ec(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ls(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:E,onBeforeAppear:T,onAppear:D,onAfterAppear:k,onAppearCancelled:L}=t,j=String(e.key),N=ec(n,e),z=(A,x)=>{A&&Le(A,r,9,x)},oe=(A,x)=>{const K=x[1];z(A,x),F(A)?A.every(re=>re.length<=1)&&K():A.length<=1&&K()},ce={mode:i,persisted:o,beforeEnter(A){let x=a;if(!n.isMounted)if(s)x=T||a;else return;A._leaveCb&&A._leaveCb(!0);const K=N[j];K&&xt(e,K)&&K.el._leaveCb&&K.el._leaveCb(),z(x,[A])},enter(A){let x=c,K=l,re=u;if(!n.isMounted)if(s)x=D||c,K=k||l,re=L||u;else return;let O=!1;const X=A._enterCb=_e=>{O||(O=!0,_e?z(re,[A]):z(K,[A]),ce.delayedLeave&&ce.delayedLeave(),A._enterCb=void 0)};x?oe(x,[A,X]):X()},leave(A,x){const K=String(e.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return x();z(d,[A]);let re=!1;const O=A._leaveCb=X=>{re||(re=!0,x(),X?z(E,[A]):z(m,[A]),A._leaveCb=void 0,N[K]===e&&delete N[K])};N[K]=e,p?oe(p,[A,O]):O()},clone(A){return Ls(A,t,n,r)}};return ce}function us(e){if(Jr(e))return e=At(e),e.children=null,e}function Zi(e){return Jr(e)?e.children?e.children[0]:void 0:e}function Ms(e,t){e.shapeFlag&6&&e.component?Ms(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function tc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ve?(o.patchFlag&128&&s++,r=r.concat(tc(o.children,t,a))):(t||o.type!==Me)&&r.push(a!=null?At(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function nc(e,t){return W(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const Dn=e=>!!e.type.__asyncLoader,Jr=e=>e.type.__isKeepAlive;function Zu(e,t){rc(e,"a",t)}function ef(e,t){rc(e,"da",t)}function rc(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Yr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Jr(s.parent.vnode)&&tf(r,t,n,s),s=s.parent}}function tf(e,t,n,r){const s=Yr(t,e,r,!0);ic(()=>{ni(r[t],s)},n)}function Yr(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;vn(),fn(n);const a=Le(t,n,e,o);return jt(),yn(),a});return r?s.unshift(i):s.push(i),i}}const at=e=>(t,n=ge)=>(!qn||e==="sp")&&Yr(e,(...r)=>t(...r),n),nf=at("bm"),mi=at("m"),rf=at("bu"),sf=at("u"),sc=at("bum"),ic=at("um"),of=at("sp"),af=at("rtg"),cf=at("rtc");function lf(e,t=ge){Yr("ec",e,t)}const _i="components";function oc(e,t){return cc(_i,e,!0,t)||e}const ac=Symbol.for("v-ndc");function uf(e){return de(e)?cc(_i,e,!1)||e:e||ac}function cc(e,t,n=!0,r=!1){const s=me||ge;if(s){const i=s.type;if(e===_i){const a=Vf(i,!1);if(a&&(a===t||a===Ye(t)||a===jr(Ye(t))))return i}const o=eo(s[e]||i[e],t)||eo(s.appContext[e],t);return!o&&r?i:o}}function eo(e,t){return e&&(e[t]||e[Ye(t)]||e[jr(Ye(t))])}function ff(e,t,n,r){let s;const i=n&&n[r];if(F(e)||de(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(ne(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function ev(e,t,n={},r,s){if(me.isCE||me.parent&&Dn(me.parent)&&me.parent.isCE)return t!=="default"&&(n.name=t),fe("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Oe();const o=i&&lc(i(n)),a=Qr(ve,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function lc(e){return e.some(t=>Pr(t)?!(t.type===Me||t.type===ve&&!lc(t.children)):!0)?e:null}const xs=e=>e?bc(e)?es(e)||e.proxy:xs(e.parent):null,Ln=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$emit:e=>e.emit,$options:e=>vi(e),$forceUpdate:e=>e.f||(e.f=()=>gi(e.update)),$nextTick:e=>e.n||(e.n=pi.bind(e.proxy)),$watch:e=>Ju.bind(e)}),fs=(e,t)=>e!==le&&!e.__isScriptSetup&&Y(e,t),df={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(fs(r,t))return o[t]=1,r[t];if(s!==le&&Y(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Y(l,t))return o[t]=3,i[t];if(n!==le&&Y(n,t))return o[t]=4,n[t];Us&&(o[t]=0)}}const u=Ln[t];let d,p;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==le&&Y(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return fs(s,t)?(s[t]=n,!0):r!==le&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==le&&Y(e,o)||fs(t,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(Ln,o)||Y(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function to(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Us=!0;function hf(e){const t=vi(e),n=e.proxy,r=e.ctx;Us=!1,t.beforeCreate&&no(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:E,activated:T,deactivated:D,beforeDestroy:k,beforeUnmount:L,destroyed:j,unmounted:N,render:z,renderTracked:oe,renderTriggered:ce,errorCaptured:A,serverPrefetch:x,expose:K,inheritAttrs:re,components:O,directives:X,filters:_e}=t;if(l&&pf(l,r,null),o)for(const se in o){const Q=o[se];W(Q)&&(r[se]=Q.bind(n))}if(s){const se=s.call(n,n);ne(se)&&(e.data=bn(se))}if(Us=!0,i)for(const se in i){const Q=i[se],Qe=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):$e,ct=!W(Q)&&W(Q.set)?Q.set.bind(n):$e,Ve=Re({get:Qe,set:ct});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Ce=>Ve.value=Ce})}if(a)for(const se in a)uc(a[se],r,n,se);if(c){const se=W(c)?c.call(n):c;Reflect.ownKeys(se).forEach(Q=>{_r(Q,se[Q])})}u&&no(u,e,"c");function J(se,Q){F(Q)?Q.forEach(Qe=>se(Qe.bind(n))):Q&&se(Q.bind(n))}if(J(nf,d),J(mi,p),J(rf,m),J(sf,E),J(Zu,T),J(ef,D),J(lf,A),J(cf,oe),J(af,ce),J(sc,L),J(ic,N),J(of,x),F(K))if(K.length){const se=e.exposed||(e.exposed={});K.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:Qe=>n[Q]=Qe})})}else e.exposed||(e.exposed={});z&&e.render===$e&&(e.render=z),re!=null&&(e.inheritAttrs=re),O&&(e.components=O),X&&(e.directives=X)}function pf(e,t,n=$e){F(e)&&(e=Fs(e));for(const r in e){const s=e[r];let i;ne(s)?"default"in s?i=He(s.from||r,s.default,!0):i=He(s.from||r):i=He(s),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function no(e,t,n){Le(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function uc(e,t,n,r){const s=r.includes(".")?Qa(n,r):()=>n[r];if(de(e)){const i=t[e];W(i)&&sn(s,i)}else if(W(e))sn(s,e.bind(n));else if(ne(e))if(F(e))e.forEach(i=>uc(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&sn(s,i,e)}}function vi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Ar(c,l,o,!0)),Ar(c,t,o)),ne(t)&&i.set(t,c),c}function Ar(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ar(e,i,n,!0),s&&s.forEach(o=>Ar(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=gf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const gf={data:ro,props:so,emits:so,methods:An,computed:An,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:An,directives:An,watch:_f,provide:ro,inject:mf};function ro(e,t){return t?e?function(){return pe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function mf(e,t){return An(Fs(e),Fs(t))}function Fs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function An(e,t){return e?pe(Object.create(null),e,t):t}function so(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:pe(Object.create(null),to(e),to(t??{})):t}function _f(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function fc(){return{app:null,config:{isNativeTag:$l,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function yf(e,t){return function(r,s=null){W(r)||(r=pe({},r)),s!=null&&!ne(s)&&(s=null);const i=fc(),o=new Set;let a=!1;const c=i.app={_uid:vf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=fe(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,d),a=!0,c._container=l,l.__vue_app__=c,es(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Kn=c;try{return l()}finally{Kn=null}}};return c}}let Kn=null;function _r(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=ge||me;if(r||Kn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Kn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}function bf(){return!!(ge||me||Kn)}function Ef(e,t,n,r=!1){const s={},i={};Tr(i,Zr,1),e.propsDefaults=Object.create(null),dc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Fa(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function If(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=G(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(qr(e.emitsOptions,p))continue;const m=t[p];if(c)if(Y(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const E=Ye(p);s[E]=Bs(c,a,E,m,e,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{dc(e,t,s,i)&&(l=!0);let u;for(const d in a)(!t||!Y(t,d)&&((u=_n(d))===d||!Y(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Bs(c,a,d,void 0,e,!0)):delete s[d]);if(i!==a)for(const d in i)(!t||!Y(t,d))&&(delete i[d],l=!0)}l&&it(e,"set","$attrs")}function dc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(gr(c))continue;const l=t[c];let u;s&&Y(s,u=Ye(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:qr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||le;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Bs(s,c,d,l[d],e,!Y(l,d))}}return o}function Bs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(fn(s),r=l[n]=c.call(null,t),jt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===_n(n))&&(r=!0))}return r}function hc(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!W(e)){const u=d=>{c=!0;const[p,m]=hc(d,t,!0);pe(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ne(e)&&r.set(e,tn),tn;if(F(i))for(let u=0;u<i.length;u++){const d=Ye(i[u]);io(d)&&(o[d]=le)}else if(i)for(const u in i){const d=Ye(u);if(io(d)){const p=i[u],m=o[d]=F(p)||W(p)?{type:p}:pe({},p);if(m){const E=co(Boolean,m.type),T=co(String,m.type);m[0]=E>-1,m[1]=T<0||E<T,(E>-1||Y(m,"default"))&&a.push(d)}}}const l=[o,a];return ne(e)&&r.set(e,l),l}function io(e){return e[0]!=="$"}function oo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ao(e,t){return oo(e)===oo(t)}function co(e,t){return F(t)?t.findIndex(n=>ao(n,e)):W(t)&&ao(t,e)?0:-1}const pc=e=>e[0]==="_"||e==="$stable",yi=e=>F(e)?e.map(ze):[ze(e)],wf=(e,t,n)=>{if(t._n)return t;const r=Ft((...s)=>yi(t(...s)),n);return r._c=!1,r},gc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(pc(s))continue;const i=e[s];if(W(i))t[s]=wf(s,i,r);else if(i!=null){const o=yi(i);t[s]=()=>o}}},mc=(e,t)=>{const n=yi(t);e.slots.default=()=>n},Tf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),Tr(t,"_",n)):gc(t,e.slots={})}else e.slots={},t&&mc(e,t);Tr(e.slots,Zr,1)},Cf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(pe(s,t),!n&&a===1&&delete s._):(i=!t.$stable,gc(t,s)),o=t}else t&&(mc(e,t),o={default:1});if(i)for(const a in s)!pc(a)&&!(a in o)&&delete s[a]};function $s(e,t,n,r,s=!1){if(F(e)){e.forEach((p,m)=>$s(p,t&&(F(t)?t[m]:t),n,r,s));return}if(Dn(r)&&!s)return;const i=r.shapeFlag&4?es(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===le?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(de(l)?(u[l]=null,Y(d,l)&&(d[l]=null)):ue(l)&&(l.value=null)),W(c))wt(c,a,12,[o,u]);else{const p=de(c),m=ue(c);if(p||m){const E=()=>{if(e.f){const T=p?Y(d,c)?d[c]:u[c]:c.value;s?F(T)&&ni(T,i):F(T)?T.includes(i)||T.push(i):p?(u[c]=[i],Y(d,c)&&(d[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Y(d,c)&&(d[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(E.id=-1,Se(E,n)):E()}}}const Se=Gu;function Sf(e){return Rf(e)}function Rf(e,t){const n=Ps();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=$e,insertStaticContent:E}=e,T=(f,h,g,_=null,y=null,b=null,R=!1,w=null,C=!!h.dynamicChildren)=>{if(f===h)return;f&&!xt(f,h)&&(_=v(f),Ce(f,y,b,!0),f=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:I,ref:B,shapeFlag:M}=h;switch(I){case Xr:D(f,h,g,_);break;case Me:k(f,h,g,_);break;case vr:f==null&&L(h,g,_,R);break;case ve:O(f,h,g,_,y,b,R,w,C);break;default:M&1?z(f,h,g,_,y,b,R,w,C):M&6?X(f,h,g,_,y,b,R,w,C):(M&64||M&128)&&I.process(f,h,g,_,y,b,R,w,C,S)}B!=null&&y&&$s(B,f&&f.ref,b,h||f,!h)},D=(f,h,g,_)=>{if(f==null)r(h.el=a(h.children),g,_);else{const y=h.el=f.el;h.children!==f.children&&l(y,h.children)}},k=(f,h,g,_)=>{f==null?r(h.el=c(h.children||""),g,_):h.el=f.el},L=(f,h,g,_)=>{[f.el,f.anchor]=E(f.children,h,g,_,f.el,f.anchor)},j=({el:f,anchor:h},g,_)=>{let y;for(;f&&f!==h;)y=p(f),r(f,g,_),f=y;r(h,g,_)},N=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},z=(f,h,g,_,y,b,R,w,C)=>{R=R||h.type==="svg",f==null?oe(h,g,_,y,b,R,w,C):x(f,h,y,b,R,w,C)},oe=(f,h,g,_,y,b,R,w)=>{let C,I;const{type:B,props:M,shapeFlag:$,transition:V,dirs:q}=f;if(C=f.el=o(f.type,b,M&&M.is,M),$&8?u(C,f.children):$&16&&A(f.children,C,null,_,y,b&&B!=="foreignObject",R,w),q&&kt(f,null,_,"created"),ce(C,f,f.scopeId,R,_),M){for(const te in M)te!=="value"&&!gr(te)&&i(C,te,null,M[te],b,f.children,_,y,ye);"value"in M&&i(C,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Ke(I,_,f)}q&&kt(f,null,_,"beforeMount");const ae=(!y||y&&!y.pendingBranch)&&V&&!V.persisted;ae&&V.beforeEnter(C),r(C,h,g),((I=M&&M.onVnodeMounted)||ae||q)&&Se(()=>{I&&Ke(I,_,f),ae&&V.enter(C),q&&kt(f,null,_,"mounted")},y)},ce=(f,h,g,_,y)=>{if(g&&m(f,g),_)for(let b=0;b<_.length;b++)m(f,_[b]);if(y){let b=y.subTree;if(h===b){const R=y.vnode;ce(f,R,R.scopeId,R.slotScopeIds,y.parent)}}},A=(f,h,g,_,y,b,R,w,C=0)=>{for(let I=C;I<f.length;I++){const B=f[I]=w?gt(f[I]):ze(f[I]);T(null,B,h,g,_,y,b,R,w)}},x=(f,h,g,_,y,b,R)=>{const w=h.el=f.el;let{patchFlag:C,dynamicChildren:I,dirs:B}=h;C|=f.patchFlag&16;const M=f.props||le,$=h.props||le;let V;g&&Ot(g,!1),(V=$.onVnodeBeforeUpdate)&&Ke(V,g,h,f),B&&kt(h,f,g,"beforeUpdate"),g&&Ot(g,!0);const q=y&&h.type!=="foreignObject";if(I?K(f.dynamicChildren,I,w,g,_,q,b):R||Q(f,h,w,null,g,_,q,b,!1),C>0){if(C&16)re(w,h,M,$,g,_,y);else if(C&2&&M.class!==$.class&&i(w,"class",null,$.class,y),C&4&&i(w,"style",M.style,$.style,y),C&8){const ae=h.dynamicProps;for(let te=0;te<ae.length;te++){const he=ae[te],Ue=M[he],Xt=$[he];(Xt!==Ue||he==="value")&&i(w,he,Ue,Xt,y,f.children,g,_,ye)}}C&1&&f.children!==h.children&&u(w,h.children)}else!R&&I==null&&re(w,h,M,$,g,_,y);((V=$.onVnodeUpdated)||B)&&Se(()=>{V&&Ke(V,g,h,f),B&&kt(h,f,g,"updated")},_)},K=(f,h,g,_,y,b,R)=>{for(let w=0;w<h.length;w++){const C=f[w],I=h[w],B=C.el&&(C.type===ve||!xt(C,I)||C.shapeFlag&70)?d(C.el):g;T(C,I,B,null,_,y,b,R,!0)}},re=(f,h,g,_,y,b,R)=>{if(g!==_){if(g!==le)for(const w in g)!gr(w)&&!(w in _)&&i(f,w,g[w],null,R,h.children,y,b,ye);for(const w in _){if(gr(w))continue;const C=_[w],I=g[w];C!==I&&w!=="value"&&i(f,w,I,C,R,h.children,y,b,ye)}"value"in _&&i(f,"value",g.value,_.value)}},O=(f,h,g,_,y,b,R,w,C)=>{const I=h.el=f?f.el:a(""),B=h.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:V}=h;V&&(w=w?w.concat(V):V),f==null?(r(I,g,_),r(B,g,_),A(h.children,g,B,y,b,R,w,C)):M>0&&M&64&&$&&f.dynamicChildren?(K(f.dynamicChildren,$,g,y,b,R,w),(h.key!=null||y&&h===y.subTree)&&_c(f,h,!0)):Q(f,h,g,B,y,b,R,w,C)},X=(f,h,g,_,y,b,R,w,C)=>{h.slotScopeIds=w,f==null?h.shapeFlag&512?y.ctx.activate(h,g,_,R,C):_e(h,g,_,y,b,R,C):Ie(f,h,C)},_e=(f,h,g,_,y,b,R)=>{const w=f.component=Uf(f,_,y);if(Jr(f)&&(w.ctx.renderer=S),Bf(w),w.asyncDep){if(y&&y.registerDep(w,J),!f.el){const C=w.subTree=fe(Me);k(null,C,h,g)}return}J(w,f,h,g,y,b,R)},Ie=(f,h,g)=>{const _=h.component=f.component;if(Ku(f,h,g))if(_.asyncDep&&!_.asyncResolved){se(_,h,g);return}else _.next=h,Bu(_.update),_.update();else h.el=f.el,_.vnode=h},J=(f,h,g,_,y,b,R)=>{const w=()=>{if(f.isMounted){let{next:B,bu:M,u:$,parent:V,vnode:q}=f,ae=B,te;Ot(f,!1),B?(B.el=q.el,se(f,B,R)):B=q,M&&mr(M),(te=B.props&&B.props.onVnodeBeforeUpdate)&&Ke(te,V,B,q),Ot(f,!0);const he=ls(f),Ue=f.subTree;f.subTree=he,T(Ue,he,d(Ue.el),v(Ue),f,y,b),B.el=he.el,ae===null&&zu(f,he.el),$&&Se($,y),(te=B.props&&B.props.onVnodeUpdated)&&Se(()=>Ke(te,V,B,q),y)}else{let B;const{el:M,props:$}=h,{bm:V,m:q,parent:ae}=f,te=Dn(h);if(Ot(f,!1),V&&mr(V),!te&&(B=$&&$.onVnodeBeforeMount)&&Ke(B,ae,h),Ot(f,!0),M&&Z){const he=()=>{f.subTree=ls(f),Z(M,f.subTree,f,y,null)};te?h.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=ls(f);T(null,he,g,_,f,y,b),h.el=he.el}if(q&&Se(q,y),!te&&(B=$&&$.onVnodeMounted)){const he=h;Se(()=>Ke(B,ae,he),y)}(h.shapeFlag&256||ae&&Dn(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Se(f.a,y),f.isMounted=!0,h=g=_=null}},C=f.effect=new ai(w,()=>gi(I),f.scope),I=f.update=()=>C.run();I.id=f.uid,Ot(f,!0),I()},se=(f,h,g)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,If(f,h.props,_,g),Cf(f,h.children,g),vn(),Xi(),yn()},Q=(f,h,g,_,y,b,R,w,C=!1)=>{const I=f&&f.children,B=f?f.shapeFlag:0,M=h.children,{patchFlag:$,shapeFlag:V}=h;if($>0){if($&128){ct(I,M,g,_,y,b,R,w,C);return}else if($&256){Qe(I,M,g,_,y,b,R,w,C);return}}V&8?(B&16&&ye(I,y,b),M!==I&&u(g,M)):B&16?V&16?ct(I,M,g,_,y,b,R,w,C):ye(I,y,b,!0):(B&8&&u(g,""),V&16&&A(M,g,_,y,b,R,w,C))},Qe=(f,h,g,_,y,b,R,w,C)=>{f=f||tn,h=h||tn;const I=f.length,B=h.length,M=Math.min(I,B);let $;for($=0;$<M;$++){const V=h[$]=C?gt(h[$]):ze(h[$]);T(f[$],V,g,null,y,b,R,w,C)}I>B?ye(f,y,b,!0,!1,M):A(h,g,_,y,b,R,w,C,M)},ct=(f,h,g,_,y,b,R,w,C)=>{let I=0;const B=h.length;let M=f.length-1,$=B-1;for(;I<=M&&I<=$;){const V=f[I],q=h[I]=C?gt(h[I]):ze(h[I]);if(xt(V,q))T(V,q,g,null,y,b,R,w,C);else break;I++}for(;I<=M&&I<=$;){const V=f[M],q=h[$]=C?gt(h[$]):ze(h[$]);if(xt(V,q))T(V,q,g,null,y,b,R,w,C);else break;M--,$--}if(I>M){if(I<=$){const V=$+1,q=V<B?h[V].el:_;for(;I<=$;)T(null,h[I]=C?gt(h[I]):ze(h[I]),g,q,y,b,R,w,C),I++}}else if(I>$)for(;I<=M;)Ce(f[I],y,b,!0),I++;else{const V=I,q=I,ae=new Map;for(I=q;I<=$;I++){const Pe=h[I]=C?gt(h[I]):ze(h[I]);Pe.key!=null&&ae.set(Pe.key,I)}let te,he=0;const Ue=$-q+1;let Xt=!1,Fi=0;const wn=new Array(Ue);for(I=0;I<Ue;I++)wn[I]=0;for(I=V;I<=M;I++){const Pe=f[I];if(he>=Ue){Ce(Pe,y,b,!0);continue}let We;if(Pe.key!=null)We=ae.get(Pe.key);else for(te=q;te<=$;te++)if(wn[te-q]===0&&xt(Pe,h[te])){We=te;break}We===void 0?Ce(Pe,y,b,!0):(wn[We-q]=I+1,We>=Fi?Fi=We:Xt=!0,T(Pe,h[We],g,null,y,b,R,w,C),he++)}const Bi=Xt?Af(wn):tn;for(te=Bi.length-1,I=Ue-1;I>=0;I--){const Pe=q+I,We=h[Pe],$i=Pe+1<B?h[Pe+1].el:_;wn[I]===0?T(null,We,g,$i,y,b,R,w,C):Xt&&(te<0||I!==Bi[te]?Ve(We,g,$i,2):te--)}}},Ve=(f,h,g,_,y=null)=>{const{el:b,type:R,transition:w,children:C,shapeFlag:I}=f;if(I&6){Ve(f.component.subTree,h,g,_);return}if(I&128){f.suspense.move(h,g,_);return}if(I&64){R.move(f,h,g,S);return}if(R===ve){r(b,h,g);for(let M=0;M<C.length;M++)Ve(C[M],h,g,_);r(f.anchor,h,g);return}if(R===vr){j(f,h,g);return}if(_!==2&&I&1&&w)if(_===0)w.beforeEnter(b),r(b,h,g),Se(()=>w.enter(b),y);else{const{leave:M,delayLeave:$,afterLeave:V}=w,q=()=>r(b,h,g),ae=()=>{M(b,()=>{q(),V&&V()})};$?$(b,q,ae):ae()}else r(b,h,g)},Ce=(f,h,g,_=!1,y=!1)=>{const{type:b,props:R,ref:w,children:C,dynamicChildren:I,shapeFlag:B,patchFlag:M,dirs:$}=f;if(w!=null&&$s(w,null,g,f,!0),B&256){h.ctx.deactivate(f);return}const V=B&1&&$,q=!Dn(f);let ae;if(q&&(ae=R&&R.onVnodeBeforeUnmount)&&Ke(ae,h,f),B&6)ar(f.component,g,_);else{if(B&128){f.suspense.unmount(g,_);return}V&&kt(f,null,h,"beforeUnmount"),B&64?f.type.remove(f,h,g,y,S,_):I&&(b!==ve||M>0&&M&64)?ye(I,h,g,!1,!0):(b===ve&&M&384||!y&&B&16)&&ye(C,h,g),_&&Jt(f)}(q&&(ae=R&&R.onVnodeUnmounted)||V)&&Se(()=>{ae&&Ke(ae,h,f),V&&kt(f,null,h,"unmounted")},g)},Jt=f=>{const{type:h,el:g,anchor:_,transition:y}=f;if(h===ve){Yt(g,_);return}if(h===vr){N(f);return}const b=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:w}=y,C=()=>R(g,b);w?w(f.el,b,C):C()}else b()},Yt=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},ar=(f,h,g)=>{const{bum:_,scope:y,update:b,subTree:R,um:w}=f;_&&mr(_),y.stop(),b&&(b.active=!1,Ce(R,f,h,g)),w&&Se(w,h),Se(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ye=(f,h,g,_=!1,y=!1,b=0)=>{for(let R=b;R<f.length;R++)Ce(f[R],h,g,_,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),P=(f,h,g)=>{f==null?h._vnode&&Ce(h._vnode,null,null,!0):T(h._vnode||null,f,h,null,null,null,g),Xi(),Ga(),h._vnode=f},S={p:T,um:Ce,m:Ve,r:Jt,mt:_e,mc:A,pc:Q,pbc:K,n:v,o:e};let U,Z;return t&&([U,Z]=t(S)),{render:P,hydrate:U,createApp:yf(P,U)}}function Ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _c(e,t,n=!1){const r=e.children,s=t.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gt(s[i]),a.el=o.el),n||_c(o,a)),a.type===Xr&&(a.el=o.el)}}function Af(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Pf=e=>e.__isTeleport,ve=Symbol.for("v-fgt"),Xr=Symbol.for("v-txt"),Me=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),Mn=[];let Be=null;function Oe(e=!1){Mn.push(Be=e?null:[])}function kf(){Mn.pop(),Be=Mn[Mn.length-1]||null}let zn=1;function lo(e){zn+=e}function vc(e){return e.dynamicChildren=zn>0?Be||tn:null,kf(),zn>0&&Be&&Be.push(e),e}function tt(e,t,n,r,s,i){return vc(Te(e,t,n,r,s,i,!0))}function Qr(e,t,n,r,s){return vc(fe(e,t,n,r,s,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Zr="__vInternal",yc=({key:e})=>e??null,yr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ue(e)||W(e)?{i:me,r:e,k:t,f:!!n}:e:null);function Te(e,t=null,n=null,r=0,s=null,i=e===ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yc(t),ref:t&&yr(t),scopeId:Gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:me};return a?(bi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),zn>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const fe=Of;function Of(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===ac)&&(e=Me),Pr(e)){const a=At(e,t,!0);return n&&bi(a,n),zn>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag|=-2,a}if(Wf(e)&&(e=e.__vccOpts),t){t=Nf(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=Vr(a)),ne(c)&&($a(c)&&!F(c)&&(c=pe({},c)),t.style=si(c))}const o=de(e)?1:qu(e)?128:Pf(e)?64:ne(e)?4:W(e)?2:0;return Te(e,t,n,r,s,o,i,!0)}function Nf(e){return e?$a(e)||Zr in e?pe({},e):e:null}function At(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Lf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&yc(a),ref:t&&t.ref?n&&s?F(s)?s.concat(yr(t)):[s,yr(t)]:yr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Pn(e=" ",t=0){return fe(Xr,null,e,t)}function tv(e,t){const n=fe(vr,null,e);return n.staticCount=t,n}function Df(e="",t=!1){return t?(Oe(),Qr(Me,null,e)):fe(Me,null,e)}function ze(e){return e==null||typeof e=="boolean"?fe(Me):F(e)?fe(ve,null,e.slice()):typeof e=="object"?gt(e):fe(Xr,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function bi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),bi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Zr in t)?t._ctx=me:s===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:me},n=32):(t=String(t),r&64?(n=16,t=[Pn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Lf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Vr([t.class,r.class]));else if(s==="style")t.style=si([t.style,r.style]);else if(Br(s)){const i=t[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ke(e,t,n,r=null){Le(e,t,7,[n,r])}const Mf=fc();let xf=0;function Uf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Mf,i={uid:xf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ca(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hc(r,s),emitsOptions:Ya(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ju.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const Ff=()=>ge||me;let Ei,Qt,uo="__VUE_INSTANCE_SETTERS__";(Qt=Ps()[uo])||(Qt=Ps()[uo]=[]),Qt.push(e=>ge=e),Ei=e=>{Qt.length>1?Qt.forEach(t=>t(e)):Qt[0](e)};const fn=e=>{Ei(e),e.scope.on()},jt=()=>{ge&&ge.scope.off(),Ei(null)};function bc(e){return e.vnode.shapeFlag&4}let qn=!1;function Bf(e,t=!1){qn=t;const{props:n,children:r}=e.vnode,s=bc(e);Ef(e,n,s,t),Tf(e,r);const i=s?$f(e,t):void 0;return qn=!1,i}function $f(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Kr(new Proxy(e.ctx,df));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?jf(e):null;fn(e),vn();const i=wt(r,e,0,[e.props,s]);if(yn(),jt(),ya(i)){if(i.then(jt,jt),t)return i.then(o=>{fo(e,o,t)}).catch(o=>{zr(o,e,0)});e.asyncDep=i}else fo(e,i,t)}else Ec(e,t)}function fo(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=Wa(t)),Ec(e,n)}let ho;function Ec(e,t,n){const r=e.type;if(!e.render){if(!t&&ho&&!r.render){const s=r.template||vi(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=ho(s,l)}}e.render=r.render||$e}fn(e),vn(),hf(e),yn(),jt()}function Hf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function jf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Hf(e)},slots:e.slots,emit:e.emit,expose:t}}function es(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wa(Kr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ln)return Ln[n](e)},has(t,n){return n in t||n in Ln}}))}function Vf(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Wf(e){return W(e)&&"__vccOpts"in e}const Re=(e,t)=>xu(e,t,qn);function Ii(e,t,n){const r=arguments.length;return r===2?ne(t)&&!F(t)?Pr(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),fe(e,t,n))}const Kf=Symbol.for("v-scx"),zf=()=>He(Kf),qf="3.3.4",Gf="http://www.w3.org/2000/svg",Ut=typeof document<"u"?document:null,po=Ut&&Ut.createElement("template"),Jf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Ut.createElementNS(Gf,e):Ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ut.createTextNode(e),createComment:e=>Ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{po.innerHTML=r?`<svg>${e}</svg>`:e;const a=po.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Yf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Xf(e,t,n){const r=e.style,s=de(n);if(n&&!s){if(t&&!de(t))for(const i in t)n[i]==null&&Hs(r,i,"");for(const i in n)Hs(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const go=/\s*!important$/;function Hs(e,t,n){if(F(n))n.forEach(r=>Hs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qf(e,t);go.test(n)?e.setProperty(_n(r),n.replace(go,""),"important"):e[r]=n}}const mo=["Webkit","Moz","ms"],ds={};function Qf(e,t){const n=ds[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return ds[t]=r;r=jr(r);for(let s=0;s<mo.length;s++){const i=mo[s]+r;if(i in e)return ds[t]=i}return t}const _o="http://www.w3.org/1999/xlink";function Zf(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_o,t.slice(6,t.length)):e.setAttributeNS(_o,t,n);else{const i=Ql(t);n==null||i&&!Ia(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ed(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ia(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function _t(e,t,n,r){e.addEventListener(t,n,r)}function td(e,t,n,r){e.removeEventListener(t,n,r)}function nd(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=rd(t);if(r){const l=i[t]=od(r,s);_t(e,a,l,c)}else o&&(td(e,a,o,c),i[t]=void 0)}}const vo=/(?:Once|Passive|Capture)$/;function rd(e){let t;if(vo.test(e)){t={};let r;for(;r=e.match(vo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_n(e.slice(2)),t]}let hs=0;const sd=Promise.resolve(),id=()=>hs||(sd.then(()=>hs=0),hs=Date.now());function od(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(ad(r,n.value),t,5,[r])};return n.value=e,n.attached=id(),n}function ad(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const yo=/^on[a-z]/,cd=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?Yf(e,r,s):t==="style"?Xf(e,n,r):Br(t)?ti(t)||nd(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ld(e,t,r,s))?ed(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Zf(e,t,r,s))};function ld(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&yo.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||yo.test(t)&&de(n)?!1:t in e}const ut="transition",Tn="animation",wi=(e,{slots:t})=>Ii(Qu,ud(e),t);wi.displayName="Transition";const Ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wi.props=pe({},Za,Ic);const Nt=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},bo=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function ud(e){const t={};for(const O in e)O in Ic||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,E=fd(s),T=E&&E[0],D=E&&E[1],{onBeforeEnter:k,onEnter:L,onEnterCancelled:j,onLeave:N,onLeaveCancelled:z,onBeforeAppear:oe=k,onAppear:ce=L,onAppearCancelled:A=j}=t,x=(O,X,_e)=>{Dt(O,X?u:a),Dt(O,X?l:o),_e&&_e()},K=(O,X)=>{O._isLeaving=!1,Dt(O,d),Dt(O,m),Dt(O,p),X&&X()},re=O=>(X,_e)=>{const Ie=O?ce:L,J=()=>x(X,O,_e);Nt(Ie,[X,J]),Eo(()=>{Dt(X,O?c:i),ft(X,O?u:a),bo(Ie)||Io(X,r,T,J)})};return pe(t,{onBeforeEnter(O){Nt(k,[O]),ft(O,i),ft(O,o)},onBeforeAppear(O){Nt(oe,[O]),ft(O,c),ft(O,l)},onEnter:re(!1),onAppear:re(!0),onLeave(O,X){O._isLeaving=!0;const _e=()=>K(O,X);ft(O,d),pd(),ft(O,p),Eo(()=>{O._isLeaving&&(Dt(O,d),ft(O,m),bo(N)||Io(O,r,D,_e))}),Nt(N,[O,_e])},onEnterCancelled(O){x(O,!1),Nt(j,[O])},onAppearCancelled(O){x(O,!0),Nt(A,[O])},onLeaveCancelled(O){K(O),Nt(z,[O])}})}function fd(e){if(e==null)return null;if(ne(e))return[ps(e.enter),ps(e.leave)];{const t=ps(e);return[t,t]}}function ps(e){return zl(e)}function ft(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Dt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Eo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let dd=0;function Io(e,t,n,r){const s=e._endId=++dd,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=hd(e,t);if(!o)return r();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,p),i()},p=m=>{m.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,p)}function hd(e,t){const n=window.getComputedStyle(e),r=E=>(n[E]||"").split(", "),s=r(`${ut}Delay`),i=r(`${ut}Duration`),o=wo(s,i),a=r(`${Tn}Delay`),c=r(`${Tn}Duration`),l=wo(a,c);let u=null,d=0,p=0;t===ut?o>0&&(u=ut,d=o,p=i.length):t===Tn?l>0&&(u=Tn,d=l,p=c.length):(d=Math.max(o,l),u=d>0?o>l?ut:Tn:null,p=u?u===ut?i.length:c.length:0);const m=u===ut&&/\b(transform|all)(,|$)/.test(r(`${ut}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:m}}function wo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>To(n)+To(e[r])))}function To(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pd(){return document.body.offsetHeight}const dn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>mr(t,n):t};function gd(e){e.target.composing=!0}function Co(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const nv={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=dn(s);const i=r||s.props&&s.props.type==="number";_t(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=As(a)),e._assign(a)}),n&&_t(e,"change",()=>{e.value=e.value.trim()}),t||(_t(e,"compositionstart",gd),_t(e,"compositionend",Co),_t(e,"change",Co))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=dn(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&As(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},rv={deep:!0,created(e,t,n){e._assign=dn(n),_t(e,"change",()=>{const r=e._modelValue,s=wc(e),i=e.checked,o=e._assign;if(F(r)){const a=wa(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if($r(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Tc(e,i))})},mounted:So,beforeUpdate(e,t,n){e._assign=dn(n),So(e,t,n)}};function So(e,{value:t,oldValue:n},r){e._modelValue=t,F(t)?e.checked=wa(t,r.props.value)>-1:$r(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=ln(t,Tc(e,!0)))}const sv={created(e,{value:t},n){e.checked=ln(t,n.props.value),e._assign=dn(n),_t(e,"change",()=>{e._assign(wc(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=dn(r),t!==n&&(e.checked=ln(t,r.props.value))}};function wc(e){return"_value"in e?e._value:e.value}function Tc(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const md=["ctrl","shift","alt","meta"],_d={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>md.some(n=>e[`${n}Key`]&&!t.includes(n))},vd=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=_d[t[s]];if(i&&i(n,t))return}return e(n,...r)},yd=pe({patchProp:cd},Jf);let Ro;function bd(){return Ro||(Ro=Sf(yd))}const Ed=(...e)=>{const t=bd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Id(r);if(!s)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Id(e){return de(e)?document.querySelector(e):e}const Ao=[{title:"Home",url:"/"},{title:"List",url:"/list"}];var wd=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Cc;const ts=e=>Cc=e,Sc=Symbol();function js(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var xn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xn||(xn={}));function Td(){const e=Sa(!0),t=e.run(()=>Rt({}));let n=[],r=[];const s=Kr({install(i){ts(s),s._a=i,i.provide(Sc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!wd?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Rc=()=>{};function Po(e,t,n,r=Rc){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&ii()&&Ra(s),s}function Zt(e,...t){e.slice().forEach(n=>{n(...t)})}const Cd=e=>e();function Vs(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];js(s)&&js(r)&&e.hasOwnProperty(n)&&!ue(r)&&!st(r)?e[n]=Vs(s,r):e[n]=r}return e}const Sd=Symbol();function Rd(e){return!js(e)||!e.hasOwnProperty(Sd)}const{assign:pt}=Object;function Ad(e){return!!(ue(e)&&e.effect)}function Pd(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Ou(n.state.value[e]);return pt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Kr(Re(()=>{ts(n);const m=n._s.get(e);return o[p].call(m,m)})),d),{}))}return c=Ac(e,l,t,n,r,!0),c}function Ac(e,t,n={},r,s,i){let o;const a=pt({actions:{}},n),c={deep:!0};let l,u,d=[],p=[],m;const E=r.state.value[e];!i&&!E&&(r.state.value[e]={}),Rt({});let T;function D(A){let x;l=u=!1,typeof A=="function"?(A(r.state.value[e]),x={type:xn.patchFunction,storeId:e,events:m}):(Vs(r.state.value[e],A),x={type:xn.patchObject,payload:A,storeId:e,events:m});const K=T=Symbol();pi().then(()=>{T===K&&(l=!0)}),u=!0,Zt(d,x,r.state.value[e])}const k=i?function(){const{state:x}=n,K=x?x():{};this.$patch(re=>{pt(re,K)})}:Rc;function L(){o.stop(),d=[],p=[],r._s.delete(e)}function j(A,x){return function(){ts(r);const K=Array.from(arguments),re=[],O=[];function X(J){re.push(J)}function _e(J){O.push(J)}Zt(p,{args:K,name:A,store:z,after:X,onError:_e});let Ie;try{Ie=x.apply(this&&this.$id===e?this:z,K)}catch(J){throw Zt(O,J),J}return Ie instanceof Promise?Ie.then(J=>(Zt(re,J),J)).catch(J=>(Zt(O,J),Promise.reject(J))):(Zt(re,Ie),Ie)}}const N={_p:r,$id:e,$onAction:Po.bind(null,p),$patch:D,$reset:k,$subscribe(A,x={}){const K=Po(d,A,x.detached,()=>re()),re=o.run(()=>sn(()=>r.state.value[e],O=>{(x.flush==="sync"?u:l)&&A({storeId:e,type:xn.direct,events:m},O)},pt({},c,x)));return K},$dispose:L},z=bn(N);r._s.set(e,z);const oe=r._a&&r._a.runWithContext||Cd,ce=r._e.run(()=>(o=Sa(),oe(()=>o.run(t))));for(const A in ce){const x=ce[A];if(ue(x)&&!Ad(x)||st(x))i||(E&&Rd(x)&&(ue(x)?x.value=E[A]:Vs(x,E[A])),r.state.value[e][A]=x);else if(typeof x=="function"){const K=j(A,x);ce[A]=K,a.actions[A]=x}}return pt(z,ce),pt(G(z),ce),Object.defineProperty(z,"$state",{get:()=>r.state.value[e],set:A=>{D(x=>{pt(x,A)})}}),r._p.forEach(A=>{pt(z,o.run(()=>A({store:z,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(z.$state,E),l=!0,u=!0,z}function kd(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,c){const l=bf();return a=a||(l?He(Sc,null):null),a&&ts(a),a=Cc,a._s.has(r)||(i?Ac(r,t,s,a):Pd(r,s,a)),a._s.get(r)}return o.$id=r,o}function Od(e){{e=G(e);const t={};for(const n in e){const r=e[n];(ue(r)||st(r))&&(t[n]=Lu(e,n))}return t}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const en=typeof window<"u";function Nd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function gs(e,t){const n={};for(const r in t){const s=t[r];n[r]=je(s)?s.map(e):e(s)}return n}const Un=()=>{},je=Array.isArray,Dd=/\/$/,Ld=e=>e.replace(Dd,"");function ms(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Fd(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Md(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ko(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function xd(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hn(t.matched[r],n.matched[s])&&Pc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ud(e[n],t[n]))return!1;return!0}function Ud(e,t){return je(e)?Oo(e,t):je(t)?Oo(t,e):e===t}function Oo(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Fd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Gn;(function(e){e.pop="pop",e.push="push"})(Gn||(Gn={}));var Fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Fn||(Fn={}));function Bd(e){if(!e)if(en){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ld(e)}const $d=/^[^#]+#/;function Hd(e,t){return e.replace($d,"#")+t}function jd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ns=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=jd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function No(e,t){return(history.state?history.state.position-t:-1)+e}const Ws=new Map;function Wd(e,t){Ws.set(e,t)}function Kd(e){const t=Ws.get(e);return Ws.delete(e),t}let zd=()=>location.protocol+"//"+location.host;function kc(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ko(c,"")}return ko(n,e)+r+s}function qd(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=kc(e,location),E=n.value,T=t.value;let D=0;if(p){if(n.value=m,t.value=p,o&&o===E){o=null;return}D=T?p.position-T.position:0}else r(m);s.forEach(k=>{k(n.value,E,{delta:D,type:Gn.pop,direction:D?D>0?Fn.forward:Fn.back:Fn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:ns()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Do(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ns():null}}function Gd(e){const{history:t,location:n}=window,r={value:kc(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:zd()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=ee({},t.state,Do(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:ns()});i(u.current,u,!0);const d=ee({},Do(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Jd(e){e=Bd(e);const t=Gd(e),n=qd(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:Hd.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Yd(e){return typeof e=="string"||e&&typeof e=="object"}function Oc(e){return typeof e=="string"||typeof e=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nc=Symbol("");var Lo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Lo||(Lo={}));function pn(e,t){return ee(new Error,{type:e,[Nc]:!0},t)}function Ze(e,t){return e instanceof Error&&Nc in e&&(t==null||!!(e.type&t))}const Mo="[^/]+?",Xd={sensitive:!1,strict:!1,start:!0,end:!0},Qd=/[.+*?^${}()[\]/\\]/g;function Zd(e,t){const n=ee({},Xd,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Qd,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:T,optional:D,regexp:k}=p;i.push({name:E,repeatable:T,optional:D});const L=k||Mo;if(L!==Mo){m+=10;try{new RegExp(`(${L})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${E}" (${L}): `+N.message)}}let j=T?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(j=D&&l.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,m+=20,D&&(m+=-8),T&&(m+=-20),L===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",E=i[p-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:T,optional:D}=m,k=E in l?l[E]:"";if(je(k)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const L=je(k)?k.join("/"):k;if(!L)if(D)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function eh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function th(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=eh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xo(r))return 1;if(xo(s))return-1}return s.length-r.length}function xo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const nh={type:0,value:""},rh=/[a-zA-Z0-9_]/;function sh(e){if(!e)return[[]];if(e==="/")return[[nh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:rh.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function ih(e,t,n){const r=Zd(sh(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function oh(e,t){const n=[],r=new Map;t=Bo({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,d,p){const m=!p,E=ah(u);E.aliasOf=p&&p.record;const T=Bo(t,u),D=[E];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of j)D.push(ee({},E,{components:p?p.record.components:E.components,path:N,aliasOf:p?p.record:E}))}let k,L;for(const j of D){const{path:N}=j;if(d&&N[0]!=="/"){const z=d.record.path,oe=z[z.length-1]==="/"?"":"/";j.path=d.record.path+(N&&oe+N)}if(k=ih(j,d,T),p?p.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),m&&u.name&&!Fo(k)&&o(u.name)),E.children){const z=E.children;for(let oe=0;oe<z.length;oe++)i(z[oe],k,p&&p.children[oe])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return L?()=>{o(L)}:Un}function o(u){if(Oc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&th(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Dc(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Fo(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},E,T;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw pn(1,{location:u});T=p.record.name,m=ee(Uo(d.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Uo(u.params,p.keys.map(L=>L.name))),E=p.stringify(m)}else if("path"in u)E=u.path,p=n.find(L=>L.re.test(E)),p&&(m=p.parse(E),T=p.record.name);else{if(p=d.name?r.get(d.name):n.find(L=>L.re.test(d.path)),!p)throw pn(1,{location:u,currentLocation:d});T=p.record.name,m=ee({},d.params,u.params),E=p.stringify(m)}const D=[];let k=p;for(;k;)D.unshift(k.record),k=k.parent;return{name:T,path:E,params:m,matched:D,meta:lh(D)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Uo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ah(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ch(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ch(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Fo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lh(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Bo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Dc(e,t){return t.children.some(n=>n===e||Dc(e,n))}const Lc=/#/g,uh=/&/g,fh=/\//g,dh=/=/g,hh=/\?/g,Mc=/\+/g,ph=/%5B/g,gh=/%5D/g,xc=/%5E/g,mh=/%60/g,Uc=/%7B/g,_h=/%7C/g,Fc=/%7D/g,vh=/%20/g;function Ti(e){return encodeURI(""+e).replace(_h,"|").replace(ph,"[").replace(gh,"]")}function yh(e){return Ti(e).replace(Uc,"{").replace(Fc,"}").replace(xc,"^")}function Ks(e){return Ti(e).replace(Mc,"%2B").replace(vh,"+").replace(Lc,"%23").replace(uh,"%26").replace(mh,"`").replace(Uc,"{").replace(Fc,"}").replace(xc,"^")}function bh(e){return Ks(e).replace(dh,"%3D")}function Eh(e){return Ti(e).replace(Lc,"%23").replace(hh,"%3F")}function Ih(e){return e==null?"":Eh(e).replace(fh,"%2F")}function kr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function wh(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Mc," "),o=i.indexOf("="),a=kr(o<0?i:i.slice(0,o)),c=o<0?null:kr(i.slice(o+1));if(a in t){let l=t[a];je(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function $o(e){let t="";for(let n in e){const r=e[n];if(n=bh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&Ks(i)):[r&&Ks(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Th(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Ch=Symbol(""),Ho=Symbol(""),rs=Symbol(""),Bc=Symbol(""),zs=Symbol("");function Cn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function mt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(pn(4,{from:n,to:t})):d instanceof Error?a(d):Yd(d)?a(pn(2,{from:t,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function _s(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Sh(a)){const l=(a.__vccOpts||a)[t];l&&s.push(mt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Nd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&mt(p,n,r,i,o)()}))}}return s}function Sh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function jo(e){const t=He(rs),n=He(Bc),r=Re(()=>t.resolve(Ne(e.to))),s=Re(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(hn.bind(null,u));if(p>-1)return p;const m=Vo(c[l-2]);return l>1&&Vo(u)===m&&d[d.length-1].path!==m?d.findIndex(hn.bind(null,c[l-2])):p}),i=Re(()=>s.value>-1&&kh(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&Pc(n.params,r.value.params));function a(c={}){return Ph(c)?t[Ne(e.replace)?"replace":"push"](Ne(e.to)).catch(Un):Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Rh=nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jo,setup(e,{slots:t}){const n=bn(jo(e)),{options:r}=He(rs),s=Re(()=>({[Wo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ii("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ah=Rh;function Ph(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kh(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wo=(e,t,n)=>e??t??n,Oh=nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(zs),s=Re(()=>e.route||r.value),i=He(Ho,0),o=Re(()=>{let l=Ne(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Re(()=>s.value.matched[o.value]);_r(Ho,Re(()=>o.value+1)),_r(Ch,a),_r(zs,s);const c=Rt();return sn(()=>[c.value,a.value,e.name],([l,u,d],[p,m,E])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!hn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return Ko(n.default,{Component:p,route:l});const m=d.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,D=Ii(p,ee({},E,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ko(n.default,{Component:D,route:l})||D}}});function Ko(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nh=Oh;function Dh(e){const t=oh(e.routes,e),n=e.parseQuery||wh,r=e.stringifyQuery||$o,s=e.history,i=Cn(),o=Cn(),a=Cn(),c=Au(dt);let l=dt;en&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gs.bind(null,v=>""+v),d=gs.bind(null,Ih),p=gs.bind(null,kr);function m(v,P){let S,U;return Oc(v)?(S=t.getRecordMatcher(v),U=P):U=v,t.addRoute(U,S)}function E(v){const P=t.getRecordMatcher(v);P&&t.removeRoute(P)}function T(){return t.getRoutes().map(v=>v.record)}function D(v){return!!t.getRecordMatcher(v)}function k(v,P){if(P=ee({},P||c.value),typeof v=="string"){const g=ms(n,v,P.path),_=t.resolve({path:g.path},P),y=s.createHref(g.fullPath);return ee(g,_,{params:p(_.params),hash:kr(g.hash),redirectedFrom:void 0,href:y})}let S;if("path"in v)S=ee({},v,{path:ms(n,v.path,P.path).path});else{const g=ee({},v.params);for(const _ in g)g[_]==null&&delete g[_];S=ee({},v,{params:d(g)}),P.params=d(P.params)}const U=t.resolve(S,P),Z=v.hash||"";U.params=u(p(U.params));const f=Md(r,ee({},v,{hash:yh(Z),path:U.path})),h=s.createHref(f);return ee({fullPath:f,hash:Z,query:r===$o?Th(v.query):v.query||{}},U,{redirectedFrom:void 0,href:h})}function L(v){return typeof v=="string"?ms(n,v,c.value.path):ee({},v)}function j(v,P){if(l!==v)return pn(8,{from:P,to:v})}function N(v){return ce(v)}function z(v){return N(ee(L(v),{replace:!0}))}function oe(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let U=typeof S=="function"?S(v):S;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),ee({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function ce(v,P){const S=l=k(v),U=c.value,Z=v.state,f=v.force,h=v.replace===!0,g=oe(S);if(g)return ce(ee(L(g),{state:typeof g=="object"?ee({},Z,g.state):Z,force:f,replace:h}),P||S);const _=S;_.redirectedFrom=P;let y;return!f&&xd(r,U,S)&&(y=pn(16,{to:_,from:U}),Ve(U,U,!0,!1)),(y?Promise.resolve(y):K(_,U)).catch(b=>Ze(b)?Ze(b,2)?b:ct(b):Q(b,_,U)).then(b=>{if(b){if(Ze(b,2))return ce(ee({replace:h},L(b.to),{state:typeof b.to=="object"?ee({},Z,b.to.state):Z,force:f}),P||_)}else b=O(_,U,!0,h,Z);return re(_,U,b),b})}function A(v,P){const S=j(v,P);return S?Promise.reject(S):Promise.resolve()}function x(v){const P=Yt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function K(v,P){let S;const[U,Z,f]=Lh(v,P);S=_s(U.reverse(),"beforeRouteLeave",v,P);for(const g of U)g.leaveGuards.forEach(_=>{S.push(mt(_,v,P))});const h=A.bind(null,v,P);return S.push(h),ye(S).then(()=>{S=[];for(const g of i.list())S.push(mt(g,v,P));return S.push(h),ye(S)}).then(()=>{S=_s(Z,"beforeRouteUpdate",v,P);for(const g of Z)g.updateGuards.forEach(_=>{S.push(mt(_,v,P))});return S.push(h),ye(S)}).then(()=>{S=[];for(const g of f)if(g.beforeEnter)if(je(g.beforeEnter))for(const _ of g.beforeEnter)S.push(mt(_,v,P));else S.push(mt(g.beforeEnter,v,P));return S.push(h),ye(S)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),S=_s(f,"beforeRouteEnter",v,P),S.push(h),ye(S))).then(()=>{S=[];for(const g of o.list())S.push(mt(g,v,P));return S.push(h),ye(S)}).catch(g=>Ze(g,8)?g:Promise.reject(g))}function re(v,P,S){a.list().forEach(U=>x(()=>U(v,P,S)))}function O(v,P,S,U,Z){const f=j(v,P);if(f)return f;const h=P===dt,g=en?history.state:{};S&&(U||h?s.replace(v.fullPath,ee({scroll:h&&g&&g.scroll},Z)):s.push(v.fullPath,Z)),c.value=v,Ve(v,P,S,h),ct()}let X;function _e(){X||(X=s.listen((v,P,S)=>{if(!ar.listening)return;const U=k(v),Z=oe(U);if(Z){ce(ee(Z,{replace:!0}),U).catch(Un);return}l=U;const f=c.value;en&&Wd(No(f.fullPath,S.delta),ns()),K(U,f).catch(h=>Ze(h,12)?h:Ze(h,2)?(ce(h.to,U).then(g=>{Ze(g,20)&&!S.delta&&S.type===Gn.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Q(h,U,f))).then(h=>{h=h||O(U,f,!1),h&&(S.delta&&!Ze(h,8)?s.go(-S.delta,!1):S.type===Gn.pop&&Ze(h,20)&&s.go(-1,!1)),re(U,f,h)}).catch(Un)}))}let Ie=Cn(),J=Cn(),se;function Q(v,P,S){ct(v);const U=J.list();return U.length?U.forEach(Z=>Z(v,P,S)):console.error(v),Promise.reject(v)}function Qe(){return se&&c.value!==dt?Promise.resolve():new Promise((v,P)=>{Ie.add([v,P])})}function ct(v){return se||(se=!v,_e(),Ie.list().forEach(([P,S])=>v?S(v):P()),Ie.reset()),v}function Ve(v,P,S,U){const{scrollBehavior:Z}=e;if(!en||!Z)return Promise.resolve();const f=!S&&Kd(No(v.fullPath,0))||(U||!S)&&history.state&&history.state.scroll||null;return pi().then(()=>Z(v,P,f)).then(h=>h&&Vd(h)).catch(h=>Q(h,v,P))}const Ce=v=>s.go(v);let Jt;const Yt=new Set,ar={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:D,getRoutes:T,resolve:k,options:e,push:N,replace:z,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Qe,install(v){const P=this;v.component("RouterLink",Ah),v.component("RouterView",Nh),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(c)}),en&&!Jt&&c.value===dt&&(Jt=!0,N(s.location).catch(Z=>{}));const S={};for(const Z in dt)Object.defineProperty(S,Z,{get:()=>c.value[Z],enumerable:!0});v.provide(rs,P),v.provide(Bc,Fa(S)),v.provide(zs,c);const U=v.unmount;Yt.add(v),v.unmount=function(){Yt.delete(v),Yt.size<1&&(l=dt,X&&X(),X=null,c.value=dt,Jt=!1,se=!1),U()}}};function ye(v){return v.reduce((P,S)=>P.then(()=>x(S)),Promise.resolve())}return ar}function Lh(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>hn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>hn(l,c))||s.push(c))}return[n,r,s]}function Mh(){return He(rs)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},xh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new Uh;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const E=l<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Uh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fh=function(e){const t=$c(e);return Hc.encodeByteArray(t,!0)},jc=function(e){return Fh(e).replace(/\./g,"")},Vc=function(e){try{return Hc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=()=>Bh().__FIREBASE_DEFAULTS__,Hh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Vc(e[1]);return t&&JSON.parse(t)},Ci=()=>{try{return $h()||Hh()||jh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vh=e=>{var t,n;return(n=(t=Ci())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Wc=()=>{var e;return(e=Ci())===null||e===void 0?void 0:e.config},Kc=e=>{var t;return(t=Ci())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function zh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gh(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jh(){try{return typeof indexedDB=="object"}catch{return!1}}function Yh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="FirebaseError";class Pt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xh,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Qh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,a,r)}}function Qh(e,t){return e.replace(Zh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Zh=/\{\$([^}]+)}/g;function ep(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Or(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(zo(i)&&zo(o)){if(!Or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zo(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function kn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function On(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function tp(e,t){const n=new np(e,t);return n.subscribe.bind(n)}class np{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=vs),s.error===void 0&&(s.error=vs),s.complete===void 0&&(s.complete=vs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){return e&&e._delegate?e._delegate:e}class gn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(op(t))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Lt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Lt){return this.instances.has(t)}getOptions(t=Lt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ip(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Lt){return this.component?this.component.multipleInstances?t:Lt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ip(e){return e===Lt?void 0:e}function op(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const cp={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},lp=ie.INFO,up={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},fp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=up[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zc{constructor(t){this.name=t,this._logLevel=lp,this._logHandler=fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const dp=(e,t)=>t.some(n=>e instanceof n);let qo,Go;function hp(){return qo||(qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pp(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qc=new WeakMap,qs=new WeakMap,Gc=new WeakMap,ys=new WeakMap,Si=new WeakMap;function gp(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Tt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qc.set(n,e)}).catch(()=>{}),Si.set(t,e),t}function mp(e){if(qs.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});qs.set(e,t)}let Gs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _p(e){Gs=e(Gs)}function vp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bs(this),t,...n);return Gc.set(r,t.sort?t.sort():[t]),Tt(r)}:pp().includes(e)?function(...t){return e.apply(bs(this),t),Tt(qc.get(this))}:function(...t){return Tt(e.apply(bs(this),t))}}function yp(e){return typeof e=="function"?vp(e):(e instanceof IDBTransaction&&mp(e),dp(e,hp())?new Proxy(e,Gs):e)}function Tt(e){if(e instanceof IDBRequest)return gp(e);if(ys.has(e))return ys.get(e);const t=yp(e);return t!==e&&(ys.set(e,t),Si.set(t,e)),t}const bs=e=>Si.get(e);function bp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ep=["get","getKey","getAll","getAllKeys","count"],Ip=["put","add","delete","clear"],Es=new Map;function Jo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Es.get(t))return Es.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ip.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ep.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Es.set(t,i),i}_p(e=>({...e,get:(t,n,r)=>Jo(t,n)||e.get(t,n,r),has:(t,n)=>!!Jo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Js="@firebase/app",Yo="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new zc("@firebase/app"),Cp="@firebase/app-compat",Sp="@firebase/analytics-compat",Rp="@firebase/analytics",Ap="@firebase/app-check-compat",Pp="@firebase/app-check",kp="@firebase/auth",Op="@firebase/auth-compat",Np="@firebase/database",Dp="@firebase/database-compat",Lp="@firebase/functions",Mp="@firebase/functions-compat",xp="@firebase/installations",Up="@firebase/installations-compat",Fp="@firebase/messaging",Bp="@firebase/messaging-compat",$p="@firebase/performance",Hp="@firebase/performance-compat",jp="@firebase/remote-config",Vp="@firebase/remote-config-compat",Wp="@firebase/storage",Kp="@firebase/storage-compat",zp="@firebase/firestore",qp="@firebase/firestore-compat",Gp="firebase",Jp="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]",Yp={[Js]:"fire-core",[Cp]:"fire-core-compat",[Rp]:"fire-analytics",[Sp]:"fire-analytics-compat",[Pp]:"fire-app-check",[Ap]:"fire-app-check-compat",[kp]:"fire-auth",[Op]:"fire-auth-compat",[Np]:"fire-rtdb",[Dp]:"fire-rtdb-compat",[Lp]:"fire-fn",[Mp]:"fire-fn-compat",[xp]:"fire-iid",[Up]:"fire-iid-compat",[Fp]:"fire-fcm",[Bp]:"fire-fcm-compat",[$p]:"fire-perf",[Hp]:"fire-perf-compat",[jp]:"fire-rc",[Vp]:"fire-rc-compat",[Wp]:"fire-gcs",[Kp]:"fire-gcs-compat",[zp]:"fire-fst",[qp]:"fire-fst-compat","fire-js":"fire-js",[Gp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,Xs=new Map;function Xp(e,t){try{e.container.addComponent(t)}catch(n){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jn(e){const t=e.name;if(Xs.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;Xs.set(t,e);for(const n of Nr.values())Xp(n,e);return!0}function Jc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new er("app","Firebase",Qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=Jp;function Yc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(n||(n=Wc()),!n)throw Ct.create("no-options");const i=Nr.get(s);if(i){if(Or(n,i.options)&&Or(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new ap(s);for(const c of Xs.values())o.addComponent(c);const a=new Zp(n,r,o);return Nr.set(s,a),a}function eg(e=Ys){const t=Nr.get(e);if(!t&&e===Ys&&Wc())return Yc();if(!t)throw Ct.create("no-app",{appName:e});return t}function on(e,t,n){var r;let s=(r=Yp[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}Jn(new gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebase-heartbeat-database",ng=1,Yn="firebase-heartbeat-store";let Is=null;function Xc(){return Is||(Is=bp(tg,ng,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yn)}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),Is}async function rg(e){try{return await(await Xc()).transaction(Yn).objectStore(Yn).get(Qc(e))}catch(t){if(t instanceof Pt)Wt.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}async function Xo(e,t){try{const r=(await Xc()).transaction(Yn,"readwrite");await r.objectStore(Yn).put(t,Qc(e)),await r.done}catch(n){if(n instanceof Pt)Wt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function Qc(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=1024,ig=30*24*60*60*1e3;class og{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ig}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qo(),{heartbeatsToSend:n,unsentEntries:r}=ag(this._heartbeatsCache.heartbeats),s=jc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Qo(){return new Date().toISOString().substring(0,10)}function ag(e,t=sg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zo(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jh()?Yh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Zo(e){return jc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(e){Jn(new gn("platform-logger",t=>new wp(t),"PRIVATE")),Jn(new gn("heartbeat",t=>new og(t),"PRIVATE")),on(Js,Yo,e),on(Js,Yo,"esm2017"),on("fire-js","")}lg("");function Ri(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Zc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ug=Zc,el=new er("auth","Firebase",Zc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new zc("@firebase/auth");function fg(e,...t){Dr.logLevel<=ie.WARN&&Dr.warn(`Auth (${nr}): ${e}`,...t)}function br(e,...t){Dr.logLevel<=ie.ERROR&&Dr.error(`Auth (${nr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,...t){throw Ai(e,...t)}function Ge(e,...t){return Ai(e,...t)}function tl(e,t,n){const r=Object.assign(Object.assign({},ug()),{[t]:n});return new er("auth","Firebase",r).create(t,{appName:e.name})}function dg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&xe(e,"argument-error"),tl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ai(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return el.create(e,...t)}function H(e,t,...n){if(!e)throw Ai(t,...n)}function nt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw br(t),new Error(t)}function ot(e,t){e||nt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function hg(){return ea()==="http:"||ea()==="https:"}function ea(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hg()||zh()||"connection"in navigator)?navigator.onLine:!0}function gg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,n){this.shortDelay=t,this.longDelay=n,ot(n>t,"Short delay should be less than long delay!"),this.isMobile=Kh()||qh()}get(){return pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t){ot(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new rr(3e4,6e4);function En(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qt(e,t,n,r,s={}){return rl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),nl.fetch()(sl(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function rl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},mg),t);try{const s=new vg(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw pr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tl(e,u,l);xe(e,u)}}catch(s){if(s instanceof Pt)throw s;xe(e,"network-request-failed",{message:String(s)})}}async function sr(e,t,n,r,s={}){const i=await qt(e,t,n,r,s);return"mfaPendingCredential"in i&&xe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function sl(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Pi(e.config,s):`${e.config.apiScheme}://${s}`}class vg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),_g.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(e,t){return qt(e,"POST","/v1/accounts:delete",t)}async function bg(e,t){return qt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Eg(e,t=!1){const n=Xe(e),r=await n.getIdToken(t),s=ki(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bn(ws(s.auth_time)),issuedAtTime:Bn(ws(s.iat)),expirationTime:Bn(ws(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ws(e){return Number(e)*1e3}function ki(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vc(n);return s?JSON.parse(s):(br("Failed to decode base64 JWT payload"),null)}catch(s){return br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ig(e){const t=ki(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Pt&&wg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function wg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await mn(e,bg(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Rg(i.providerUserInfo):[],a=Sg(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new il(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Cg(e){const t=Xe(e);await Lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Sg(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Rg(e){return e.map(t=>{var{providerId:n}=t,r=Ri(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(e,t){const n=await rl(e,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=sl(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ig(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ag(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xn;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Vt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Ri(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new il(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await mn(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Eg(this,t)}reload(){return Cg(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Vt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await mn(this,yg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:N,isAnonymous:z,providerData:oe,stsTokenManager:ce}=n;H(j&&ce,t,"internal-error");const A=Xn.fromJSON(this.name,ce);H(typeof j=="string",t,"internal-error"),ht(d,t.name),ht(p,t.name),H(typeof N=="boolean",t,"internal-error"),H(typeof z=="boolean",t,"internal-error"),ht(m,t.name),ht(E,t.name),ht(T,t.name),ht(D,t.name),ht(k,t.name),ht(L,t.name);const x=new Vt({uid:j,auth:t,email:p,emailVerified:N,displayName:d,isAnonymous:z,photoURL:E,phoneNumber:m,tenantId:T,stsTokenManager:A,createdAt:k,lastLoginAt:L});return oe&&Array.isArray(oe)&&(x.providerData=oe.map(K=>Object.assign({},K))),D&&(x._redirectEventId=D),x}static async _fromIdTokenResponse(t,n,r=!1){const s=new Xn;s.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Lr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map;function rt(e){ot(e instanceof Function,"Expected a class definition");let t=ta.get(e);return t?(ot(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ta.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ol.type="NONE";const na=ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t,n){return`firebase:${e}:${t}:${n}`}class an{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Er(this.userKey,s.apiKey,i),this.fullPersistenceKey=Er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Vt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new an(rt(na),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(na);const o=Er(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Vt._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new an(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new an(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ll(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(al(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fl(t))return"Blackberry";if(dl(t))return"Webos";if(Oi(t))return"Safari";if((t.includes("chrome/")||cl(t))&&!t.includes("edge/"))return"Chrome";if(ul(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function al(e=Ee()){return/firefox\//i.test(e)}function Oi(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cl(e=Ee()){return/crios\//i.test(e)}function ll(e=Ee()){return/iemobile/i.test(e)}function ul(e=Ee()){return/android/i.test(e)}function fl(e=Ee()){return/blackberry/i.test(e)}function dl(e=Ee()){return/webos/i.test(e)}function ss(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pg(e=Ee()){var t;return ss(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kg(){return Gh()&&document.documentMode===10}function hl(e=Ee()){return ss(e)||ul(e)||dl(e)||fl(e)||/windows phone/i.test(e)||ll(e)}function Og(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e,t=[]){let n;switch(e){case"Browser":n=ra(Ee());break;case"Worker":n=`${ra(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}async function gl(e,t){return qt(e,"GET","/v2/recaptchaConfig",En(e,t))}function sa(e){return e!==void 0&&e.enterprise!==void 0}class ml{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function _l(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ng().appendChild(r)})}function Dg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Lg="https://www.google.com/recaptcha/enterprise.js?render=",Mg="recaptcha-enterprise",xg="NO_RECAPTCHA";class vl{constructor(t){this.type=Mg,this.auth=Gt(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{gl(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ml(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;sa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(xg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&sa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_l(Lg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Mr(e,t,n,r=!1){const s=new vl(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ia(this),this.idTokenSubscription=new ia(this),this.beforeStateQueue=new Ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=el,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await an.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Lr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Xe(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(t))})}async initializeRecaptchaConfig(){const t=await gl(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ml(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new vl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new er("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&fg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gt(e){return Xe(e)}class ia{constructor(t){this.auth=t,this.observer=null,this.addObserver=tp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e,t){const n=Jc(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Or(i,t??{}))return s;xe(s,"already-initialized")}return n.initialize({options:t})}function $g(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Hg(e,t,n){const r=Gt(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yl(t),{host:o,port:a}=jg(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Vg()}function yl(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function jg(e){const t=yl(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oa(o)}}}function oa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Vg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(t){return nt("not implemented")}_linkToIdToken(t,n){return nt("not implemented")}_getReauthenticationResolver(t){return nt("not implemented")}}async function Wg(e,t){return qt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(e,t){return sr(e,"POST","/v1/accounts:signInWithPassword",En(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(e,t){return sr(e,"POST","/v1/accounts:signInWithEmailLink",En(e,t))}async function zg(e,t){return sr(e,"POST","/v1/accounts:signInWithEmailLink",En(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ni{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Qn(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Qn(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Mr(t,r,"signInWithPassword");return Ts(t,s)}else return Ts(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Mr(t,r,"signInWithPassword");return Ts(t,i)}else return Promise.reject(s)});case"emailLink":return Kg(t,{email:this._email,oobCode:this._password});default:xe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Wg(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zg(t,{idToken:n,email:this._email,oobCode:this._password});default:xe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(e,t){return sr(e,"POST","/v1/accounts:signInWithIdp",En(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="http://localhost";class Kt extends Ni{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Ri(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return cn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,cn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,cn(t,n)}buildRequest(){const t={requestUri:qg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=tr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jg(e){const t=kn(On(e)).link,n=t?kn(On(t)).deep_link_id:null,r=kn(On(e)).deep_link_id;return(r?kn(On(r)).link:null)||r||n||t||e}class Di{constructor(t){var n,r,s,i,o,a;const c=kn(On(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Gg((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Jg(t);try{return new Di(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(t,n){return Qn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Di.parseLink(n);return H(r,"argument-error"),Qn._fromEmailAndCode(t,r.code,r.tenantId)}}In.PROVIDER_ID="password";In.EMAIL_PASSWORD_SIGN_IN_METHOD="password";In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Li{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ir{constructor(){super("facebook.com")}static credential(t){return Kt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vt.credentialFromTaggedObject(t)}static credentialFromError(t){return vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vt.credential(t.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends ir{constructor(){super("github.com")}static credential(t){return Kt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ir{constructor(){super("twitter.com")}static credential(t,n){return Kt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e,t){return sr(e,"POST","/v1/accounts:signUp",En(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Vt._fromIdTokenResponse(t,r,s),o=aa(r);return new zt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=aa(r);return new zt({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function aa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Pt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new xr(t,n,r,s)}}function bl(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(e,i,t,r):i})}async function Yg(e,t,n=!1){const r=await mn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return zt._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await mn(e,bl(r,s,t,e),n);H(i.idToken,r,"internal-error");const o=ki(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),zt._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(e,t,n=!1){const r="signIn",s=await bl(e,r,t),i=await zt._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Qg(e,t){return El(Gt(e),t)}async function iv(e,t,n){var r;const s=Gt(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Mr(s,i,"signUpPassword");o=Cs(s,l)}else o=Cs(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Mr(s,i,"signUpPassword");return Cs(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await zt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function ov(e,t,n){return Qg(Xe(e),In.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(e,t){return qt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Xe(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await mn(r,Zg(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function em(e,t,n,r){return Xe(e).onIdTokenChanged(t,n,r)}function tm(e,t,n){return Xe(e).beforeAuthStateChanged(t,n)}function Il(e,t,n,r){return Xe(e).onAuthStateChanged(t,n,r)}function nm(e){return Xe(e).signOut()}const Ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ur,"1"),this.storage.removeItem(Ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){const e=Ee();return Oi(e)||ss(e)}const sm=1e3,im=10;class Tl extends wl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rm()&&Og(),this.fallbackToPolling=hl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kg()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,im):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Tl.type="LOCAL";const om=Tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends wl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Cl.type="SESSION";const Sl=Cl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await am(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Mi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function lm(e){Je().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function um(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fm(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function dm(){return Rl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="firebaseLocalStorageDb",hm=1,Fr="firebaseLocalStorage",Pl="fbase_key";class or{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(e,t){return e.transaction([Fr],t?"readwrite":"readonly").objectStore(Fr)}function pm(){const e=indexedDB.deleteDatabase(Al);return new or(e).toPromise()}function Zs(){const e=indexedDB.open(Al,hm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Fr,{keyPath:Pl})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Fr)?t(r):(r.close(),await pm(),t(await Zs()))})})}async function ca(e,t,n){const r=os(e,!0).put({[Pl]:t,value:n});return new or(r).toPromise()}async function gm(e,t){const n=os(e,!1).get(t),r=await new or(n).toPromise();return r===void 0?null:r.value}function la(e,t){const n=os(e,!0).delete(t);return new or(n).toPromise()}const mm=800,_m=3;class kl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_m)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(dm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await um(),!this.activeServiceWorker)return;this.sender=new cm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||fm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zs();return await ca(t,Ur,"1"),await la(t,Ur),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ca(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>gm(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>la(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=os(s,!1).getAll();return new or(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kl.type="LOCAL";const vm=kl;new rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(e,t){return t?rt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Ni{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return cn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return cn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return cn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ym(e){return El(e.auth,new xi(e),e.bypassAuthState)}function bm(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Xg(n,new xi(e),e.bypassAuthState)}async function Em(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Yg(n,new xi(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ym;case"linkViaPopup":case"linkViaRedirect":return Em;case"reauthViaPopup":case"reauthViaRedirect":return bm;default:xe(this.auth,"internal-error")}}resolve(t){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new rr(2e3,1e4);async function cv(e,t,n){const r=Gt(e);dg(e,t,Li);const s=Ol(r,n);return new $t(r,"signInViaPopup",t,s).executeNotNull()}class $t extends Nl{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const t=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Im.get())};t()}}$t.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="pendingRedirect",Ir=new Map;class Tm extends Nl{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ir.get(this.auth._key());if(!t){try{const r=await Cm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ir.set(this.auth._key(),t)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cm(e,t){const n=Am(t),r=Rm(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Sm(e,t){Ir.set(e._key(),t)}function Rm(e){return rt(e._redirectPersistence)}function Am(e){return Er(wm,e.config.apiKey,e.name)}async function Pm(e,t,n=!1){const r=Gt(e),s=Ol(r,t),o=await new Tm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=10*60*1e3;class Om{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Nm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Dl(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=km&&this.cachedEventUids.clear(),this.cachedEventUids.has(ua(t))}saveEventToCache(t){this.cachedEventUids.add(ua(t)),this.lastProcessedEventTime=Date.now()}}function ua(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Dl({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Nm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dl(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(e,t={}){return qt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mm=/^https?/;async function xm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Dm(e);for(const n of t)try{if(Um(n))return}catch{}xe(e,"unauthorized-domain")}function Um(e){const t=Qs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Mm.test(n))return!1;if(Lm.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new rr(3e4,6e4);function fa(){const e=Je().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Bm(e){return new Promise((t,n)=>{var r,s,i;function o(){fa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fa(),n(Ge(e,"network-request-failed"))},timeout:Fm.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const a=Dg("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ge(e,"network-request-failed"))},_l(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw wr=null,t})}let wr=null;function $m(e){return wr=wr||Bm(e),wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new rr(5e3,15e3),jm="__/auth/iframe",Vm="emulator/auth/iframe",Wm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Km=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zm(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Pi(t,Vm):`https://${e.config.authDomain}/${jm}`,r={apiKey:t.apiKey,appName:e.name,v:nr},s=Km.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function qm(e){const t=await $m(e),n=Je().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:zm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(e,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},Hm.get());function c(){Je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jm=500,Ym=600,Xm="_blank",Qm="http://localhost";class da{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zm(e,t,n,r=Jm,s=Ym){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Gm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=cl(l)?Xm:n),al(l)&&(t=t||Qm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(Pg(l)&&a!=="_self")return e_(t||"",a),new da(null);const d=window.open(t||"",a,u);H(d,e,"popup-blocked");try{d.focus()}catch{}return new da(d)}function e_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="__/auth/handler",n_="emulator/auth/handler",r_=encodeURIComponent("fac");async function ha(e,t,n,r,s,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(t instanceof Li){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ep(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(t instanceof ir){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${r_}=${encodeURIComponent(c)}`:"";return`${s_(e)}?${tr(a).slice(1)}${l}`}function s_({config:e}){return e.emulator?Pi(e,n_):`https://${e.authDomain}/${t_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="webStorageSupport";class i_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=Pm,this._overrideRedirectResult=Sm}async _openPopup(t,n,r,s){var i;ot((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ha(t,n,r,Qs(),s);return Zm(t,o,Mi())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await ha(t,n,r,Qs(),s);return lm(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await qm(t),r=new Om(t);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ss,{type:Ss},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ss];o!==void 0&&n(!!o),xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xm(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return hl()||Oi()||ss()}}const o_=i_;var pa="@firebase/auth",ga="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function l_(e){Jn(new gn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pl(e)},l=new Fg(r,s,i,c);return $g(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Jn(new gn("auth-internal",t=>{const n=Gt(t.getProvider("auth").getImmediate());return(r=>new a_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(pa,ga,c_(e)),on(pa,ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=5*60,f_=Kc("authIdTokenMaxAge")||u_;let ma=null;const d_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f_)return;const s=n==null?void 0:n.token;ma!==s&&(ma=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ll(e=eg()){const t=Jc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Bg(e,{popupRedirectResolver:o_,persistence:[vm,om,Sl]}),r=Kc("authTokenSyncURL");if(r){const i=d_(r);tm(n,i,()=>i(n.currentUser)),em(n,o=>i(o))}const s=Vh("auth");return s&&Hg(n,`http://${s}`),n}l_("Browser");Mh();const h_=kd("authorization",()=>{const e=Rt(!1),t=Ll(),n=bn({photo:"",name:"",mail:"",meta:{creation:"",lastSign:""}}),r=Rt(""),s=()=>{Il(t,o=>{var a,c;o&&(e.value=!!o,r.value=o==null?void 0:o.displayName,n.name=o==null?void 0:o.displayName,n.photo=o==null?void 0:o.photoURL,n.mail=o==null?void 0:o.email,n.meta.creation=(a=o==null?void 0:o.metadata)==null?void 0:a.creationTime,n.meta.lastSign=(c=o==null?void 0:o.metadata)==null?void 0:c.lastSignInTime)})};return mi(()=>{s()}),{isLoggedIn:e,userAuth:n,userAuthName:r,onAuthState:s,handleSignOut:()=>{nm(t).then(()=>{console.log("Всё, вы не авторизованы")}).catch(()=>{console.log("что-то пошло не так c signOut()")}).finally(()=>{s()})}}});function p_(e){return ii()?(Ra(e),!0):!1}function Ml(e){return typeof e=="function"?e():Ne(e)}const xl=typeof window<"u",Ul=()=>{},g_=m_();function m_(){var e;return xl&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Nn(e){var t;const n=Ml(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Fl=xl?window:void 0;function Rs(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=Fl):[t,n,r,s]=e,!t)return Ul;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,d,p,m)=>(u.addEventListener(d,p,m),()=>u.removeEventListener(d,p,m)),c=sn(()=>[Nn(t),Ml(s)],([u,d])=>{o(),u&&i.push(...n.flatMap(p=>r.map(m=>a(u,p,m,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return p_(l),l}let _a=!1;function __(e,t,n={}){const{window:r=Fl,ignore:s=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return;g_&&!_a&&(_a=!0,Array.from(r.document.body.children).forEach(p=>p.addEventListener("click",Ul)));let a=!0;const c=p=>s.some(m=>{if(typeof m=="string")return Array.from(r.document.querySelectorAll(m)).some(E=>E===p.target||p.composedPath().includes(E));{const E=Nn(m);return E&&(p.target===E||p.composedPath().includes(E))}}),u=[Rs(r,"click",p=>{const m=Nn(e);if(!(!m||m===p.target||p.composedPath().includes(m))){if(p.detail===0&&(a=!c(p)),!a){a=!0;return}t(p)}},{passive:!0,capture:i}),Rs(r,"pointerdown",p=>{const m=Nn(e);m&&(a=!p.composedPath().includes(m)&&!c(p))},{passive:!0}),o&&Rs(r,"blur",p=>{setTimeout(()=>{var m;const E=Nn(e);((m=r.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(E!=null&&E.contains(r.document.activeElement))&&t(p)},0)})].filter(Boolean);return()=>u.forEach(p=>p())}const as=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},v_={},y_={class:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"512",height:"512"},b_=Te("path",{d:"m12,0C6.486,0,2,4.432,2,9.88c0,5.184,4.58,10.39,7.311,13.033.754.729,1.722,1.094,2.689,1.094s1.936-.365,2.689-1.094c2.73-2.643,7.311-7.849,7.311-13.033C22,4.432,17.514,0,12,0Zm-2.113,12.998c-.905-.054-2.152-.27-2.883-1.002-.732-.732-.948-1.978-1.002-2.883-.037-.628.482-1.148,1.111-1.111.905.054,2.152.27,2.883,1.002.732.732.948,1.978,1.002,2.883.037.628-.482,1.148-1.111,1.111Zm8.111-3.885c-.054.905-.27,2.152-1.002,2.883-.732.732-1.978.948-2.883,1.002-.628.037-1.148-.482-1.111-1.111.054-.905.27-2.152,1.002-2.883.732-.732,1.978-.948,2.883-1.002.628-.037,1.148.482,1.111,1.111Z"},null,-1),E_=[b_];function I_(e,t){return Oe(),tt("svg",y_,E_)}const w_=as(v_,[["render",I_]]);const T_={class:"header"},C_={class:"header__container container"},S_={class:"header__nav"},R_={class:"header__user header-user"},A_={class:"header-user__avatar"},P_=["src"],k_={key:1,style:{"font-weight":"bold"}},O_={class:"header-user__drop-list"},N_={class:"header-user__drop-item"},D_={class:"header-user__drop-item"},L_={class:"header-user__drop-item"},M_={class:"header-user__drop-item"},x_={__name:"TheHeader",setup(e){const t=Rt(null);__(t,m=>u());const n=h_(),{isLoggedIn:r,userAuth:s,userAuthName:i}=Od(n),{handleSignOut:o,onAuthState:a}=n,c=Rt(!1),l=()=>{c.value=!c.value},u=()=>{c.value=!1,a()},d=Re(()=>r.value?Ao:[Ao[0]]),p=Re(()=>{if(i.value)return i.value[0].toUpperCase()});return(m,E)=>{const T=oc("RouterLink");return Oe(),tt("header",T_,[Te("div",C_,[Te("nav",S_,[(Oe(!0),tt(ve,null,ff(d.value,D=>(Oe(),Qr(T,{to:D.url,class:"header__nav-item"},{default:Ft(()=>[Pn(Vi(D.title),1)]),_:2},1032,["to"]))),256))]),Te("div",R_,[Te("div",{ref_key:"userBlock",ref:t,class:Vr([{"--active":c.value},"header-user__block"]),onClick:l},[Te("div",A_,[Ne(r)?(Oe(),tt(ve,{key:0},[Ne(s).photo?(Oe(),tt("img",{key:0,class:"header-user__image",src:Ne(s).photo,alt:"avatar"},null,8,P_)):(Oe(),tt("span",k_,Vi(p.value),1))],64)):Df("",!0),fe(w_,{else:""})]),Te("ul",O_,[Ne(r)?(Oe(),tt(ve,{key:0},[Te("li",N_,[fe(T,{class:"header-user__drop-link link",to:"/profile"},{default:Ft(()=>[Pn(" Profile ")]),_:1})]),Te("li",D_,[Te("a",{class:"header-user__drop-link link",onClick:E[0]||(E[0]=vd((...D)=>Ne(o)&&Ne(o)(...D),["prevent"]))}," Log out ")])],64)):(Oe(),tt(ve,{key:1},[Te("li",L_,[fe(T,{class:"header-user__drop-link link",to:"/register"},{default:Ft(()=>[Pn(" Register ")]),_:1})]),Te("li",M_,[fe(T,{class:"header-user__drop-link link",to:"/sing-in"},{default:Ft(()=>[Pn(" Sing In ")]),_:1})])],64))])],2)])])])}}},U_=as(x_,[["__scopeId","data-v-563bceb3"]]),F_={};function B_(e,t){return null}const $_=as(F_,[["render",B_]]);const H_={class:"main"},j_={__name:"App",setup(e){return(t,n)=>{const r=oc("router-view");return Oe(),tt(ve,null,[fe(U_),Te("main",H_,[fe(r,null,{default:Ft(({Component:s})=>[fe(wi,{name:"page",mode:"out-in"},{default:Ft(()=>[(Oe(),Qr(uf(s)))]),_:2},1024)]),_:1})]),fe($_)],64)}}},V_=as(j_,[["__scopeId","data-v-9ec96a5b"]]),W_="modulepreload",K_=function(e){return"/vue3-firebase-auth/"+e},va={},Sn=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=K_(i),i in va)return;va[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":W_,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Bl=Dh({history:Jd("/vue3-firebase-auth/"),linkActiveClass:"--active",linkExactActiveClass:"--exact-active",routes:[{path:"/",component:()=>Sn(()=>import("./Home-f8702a8b.js"),["assets/Home-f8702a8b.js","assets/Section-29c89819.js","assets/Section-fe41de33.css"])},{path:"/register",component:()=>Sn(()=>import("./Register-4ecbc449.js"),["assets/Register-4ecbc449.js","assets/Section-29c89819.js","assets/Section-fe41de33.css","assets/Input-79d2aa00.js","assets/Input-1ba5767f.css","assets/Register-1452522f.css"]),meta:{requiresAuth:!1}},{path:"/sing-in",component:()=>Sn(()=>import("./SingIn-5bc49e0b.js"),["assets/SingIn-5bc49e0b.js","assets/Input-79d2aa00.js","assets/Input-1ba5767f.css","assets/Section-29c89819.js","assets/Section-fe41de33.css","assets/SingIn-358131d8.css"]),meta:{requiresAuth:!1}},{path:"/list",component:()=>Sn(()=>import("./List-d19dddd6.js"),["assets/List-d19dddd6.js","assets/Section-29c89819.js","assets/Section-fe41de33.css","assets/List-64e19bab.css"]),meta:{requiresAuth:!0}},{path:"/profile",component:()=>Sn(()=>import("./Profile-20f7c902.js"),["assets/Profile-20f7c902.js","assets/Section-29c89819.js","assets/Section-fe41de33.css","assets/Profile-03f8a666.css"]),meta:{requiresAuth:!0}}]}),z_=()=>new Promise((e,t)=>{const n=Il(Ll(),r=>{n(),e(r)},t)});Bl.beforeEach(async(e,t,n)=>{const r=e.matched.some(i=>i.meta.requiresAuth),s=await z_();r&&!s?n("/"):n()});const q_={apiKey:"AIzaSyATrfY9lvCkHSanuu9PYLC4--hZKC5q0ME",authDomain:"kylekrylov-e6e6f.firebaseapp.com",projectId:"kylekrylov-e6e6f",storageBucket:"kylekrylov-e6e6f.appspot.com",messagingSenderId:"977235481792",appId:"1:977235481792:web:7c750923e77ef5d290c925"};var G_="firebase",J_="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(G_,J_,"app");Yc(q_);const Y_=Td(),Ui=Ed(V_);Ui.use(Bl);Ui.use(Y_);Ui.mount("#app");export{sv as A,ff as B,Vr as C,rv as D,Df as E,ve as F,yt as G,ev as H,as as _,Oe as a,Qr as b,Re as c,Te as d,Mh as e,bn as f,fe as g,Ll as h,iv as i,av as j,cv as k,Q_ as l,ov as m,tt as n,mi as o,X_ as p,tv as q,Rt as r,Od as s,Vi as t,h_ as u,sn as v,Ft as w,vd as x,Z_ as y,nv as z};
