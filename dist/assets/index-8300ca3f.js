(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ns(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Z={},$t=[],Ae=()=>{},Kc=()=>!1,zc=/^on[^a-z]/,Ar=t=>zc.test(t),Ds=t=>t.startsWith("onUpdate:"),oe=Object.assign,Ms=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qc=Object.prototype.hasOwnProperty,V=(t,e)=>qc.call(t,e),L=Array.isArray,Ht=t=>Ln(t)==="[object Map]",Pr=t=>Ln(t)==="[object Set]",hi=t=>Ln(t)==="[object Date]",$=t=>typeof t=="function",re=t=>typeof t=="string",Tn=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",xo=t=>Q(t)&&$(t.then)&&$(t.catch),Lo=Object.prototype.toString,Ln=t=>Lo.call(t),Gc=t=>Ln(t).slice(8,-1),Uo=t=>Ln(t)==="[object Object]",xs=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jc=/-(\w)/g,He=Or(t=>t.replace(Jc,(e,n)=>n?n.toUpperCase():"")),Yc=/\B([A-Z])/g,rn=Or(t=>t.replace(Yc,"-$1").toLowerCase()),kr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kr=Or(t=>t?`on${kr(t)}`:""),Rn=(t,e)=>!Object.is(t,e),tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ls=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pi;const us=()=>pi||(pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ls(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=re(r)?el(r):Ls(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(re(t))return t;if(Q(t))return t}}const Xc=/;(?![^(]*\))/g,Qc=/:([^]+)/,Zc=/\/\*[^]*?\*\//g;function el(t){const e={};return t.replace(Zc,"").split(Xc).forEach(n=>{if(n){const r=n.split(Qc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Us(t){let e="";if(re(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=Us(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nl=Ns(tl);function Fo(t){return!!t||t===""}function rl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Gt(t[r],e[r]);return n}function Gt(t,e){if(t===e)return!0;let n=hi(t),r=hi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=L(t),r=L(e),n||r)return n&&r?rl(t,e):!1;if(n=Q(t),r=Q(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Gt(t[o],e[o]))return!1}}return String(t)===String(e)}function Bo(t,e){return t.findIndex(n=>Gt(n,e))}const sl=t=>re(t)?t:t==null?"":L(t)||Q(t)&&(t.toString===Lo||!$(t.toString))?JSON.stringify(t,$o,2):String(t),$o=(t,e)=>e&&e.__v_isRef?$o(t,e.value):Ht(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Pr(e)?{[`Set(${e.size})`]:[...e.values()]}:Q(e)&&!L(e)&&!Uo(e)?String(e):e;let Re;class il{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ol(t,e=Re){e&&e.active&&e.effects.push(t)}function al(){return Re}const Fs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ho=t=>(t.w&pt)>0,jo=t=>(t.n&pt)>0,cl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},ll=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ho(s)&&!jo(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},fs=new WeakMap;let hn=0,pt=1;const ds=30;let Ce;const Rt=Symbol(""),hs=Symbol("");class Bs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ol(this,r)}run(){if(!this.active)return this.fn();let e=Ce,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ce,Ce=this,ut=!0,pt=1<<++hn,hn<=ds?cl(this):gi(this),this.fn()}finally{hn<=ds&&ll(this),pt=1<<--hn,Ce=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ce===this?this.deferStop=!0:this.active&&(gi(this),this.onStop&&this.onStop(),this.active=!1)}}function gi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const Vo=[];function sn(){Vo.push(ut),ut=!1}function on(){const t=Vo.pop();ut=t===void 0?!0:t}function me(t,e,n){if(ut&&Ce){let r=fs.get(t);r||fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fs()),Wo(s)}}function Wo(t,e){let n=!1;hn<=ds?jo(t)||(t.n|=pt,n=!Ho(t)):n=!t.has(Ce),n&&(t.add(Ce),Ce.deps.push(t))}function Je(t,e,n,r,s,i){const o=fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?xs(n)&&a.push(o.get("length")):(a.push(o.get(Rt)),Ht(t)&&a.push(o.get(hs)));break;case"delete":L(t)||(a.push(o.get(Rt)),Ht(t)&&a.push(o.get(hs)));break;case"set":Ht(t)&&a.push(o.get(Rt));break}if(a.length===1)a[0]&&ps(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ps(Fs(c))}}function ps(t,e){const n=L(t)?t:[...t];for(const r of n)r.computed&&mi(r);for(const r of n)r.computed||mi(r)}function mi(t,e){(t!==Ce||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ul=Ns("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),fl=$s(),dl=$s(!1,!0),hl=$s(!0),_i=pl();function pl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sn();const r=W(this)[e].apply(this,n);return on(),r}}),t}function gl(t){const e=W(this);return me(e,"has",t),e.hasOwnProperty(t)}function $s(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?kl:Yo:e?Jo:Go).get(r))return r;const o=L(r);if(!t){if(o&&V(_i,s))return Reflect.get(_i,s,i);if(s==="hasOwnProperty")return gl}const a=Reflect.get(r,s,i);return(Tn(s)?Ko.has(s):ul(s))||(t||me(r,"get",s),e)?a:ue(a)?o&&xs(s)?a:a.value:Q(a)?t?Xo(a):Un(a):a}}const ml=zo(),_l=zo(!0);function zo(t=!1){return function(n,r,s,i){let o=n[r];if(Jt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!pr(s)&&!Jt(s)&&(o=W(o),s=W(s)),!L(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=L(n)&&xs(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,i);return n===W(i)&&(a?Rn(s,o)&&Je(n,"set",r,s):Je(n,"add",r,s)),c}}function vl(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Je(t,"delete",e,void 0),r}function yl(t,e){const n=Reflect.has(t,e);return(!Tn(e)||!Ko.has(e))&&me(t,"has",e),n}function bl(t){return me(t,"iterate",L(t)?"length":Rt),Reflect.ownKeys(t)}const qo={get:fl,set:ml,deleteProperty:vl,has:yl,ownKeys:bl},El={get:hl,set(t,e){return!0},deleteProperty(t,e){return!0}},Il=oe({},qo,{get:dl,set:_l}),Hs=t=>t,Nr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=W(t),i=W(e);n||(e!==i&&me(s,"get",e),me(s,"get",i));const{has:o}=Nr(s),a=r?Hs:n?Ws:Cn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qn(t,e=!1){const n=this.__v_raw,r=W(n),s=W(t);return e||(t!==s&&me(r,"has",t),me(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gn(t,e=!1){return t=t.__v_raw,!e&&me(W(t),"iterate",Rt),Reflect.get(t,"size",t)}function vi(t){t=W(t);const e=W(this);return Nr(e).has.call(e,t)||(e.add(t),Je(e,"add",t,t)),this}function yi(t,e){e=W(e);const n=W(this),{has:r,get:s}=Nr(n);let i=r.call(n,t);i||(t=W(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rn(e,o)&&Je(n,"set",t,e):Je(n,"add",t,e),this}function bi(t){const e=W(this),{has:n,get:r}=Nr(e);let s=n.call(e,t);s||(t=W(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Je(e,"delete",t,void 0),i}function Ei(){const t=W(this),e=t.size!==0,n=t.clear();return e&&Je(t,"clear",void 0,void 0),n}function Jn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=W(o),c=e?Hs:t?Ws:Cn;return!t&&me(a,"iterate",Rt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Yn(t,e,n){return function(...r){const s=this.__v_raw,i=W(s),o=Ht(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Hs:e?Ws:Cn;return!e&&me(i,"iterate",c?hs:Rt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function wl(){const t={get(i){return zn(this,i)},get size(){return Gn(this)},has:qn,add:vi,set:yi,delete:bi,clear:Ei,forEach:Jn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return Gn(this)},has:qn,add:vi,set:yi,delete:bi,clear:Ei,forEach:Jn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return Gn(this,!0)},has(i){return qn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Jn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return Gn(this,!0)},has(i){return qn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yn(i,!1,!1),n[i]=Yn(i,!0,!1),e[i]=Yn(i,!1,!0),r[i]=Yn(i,!0,!0)}),[t,n,e,r]}const[Tl,Rl,Cl,Sl]=wl();function js(t,e){const n=e?t?Sl:Cl:t?Rl:Tl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const Al={get:js(!1,!1)},Pl={get:js(!1,!0)},Ol={get:js(!0,!1)},Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,kl=new WeakMap;function Nl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(t){return t.__v_skip||!Object.isExtensible(t)?0:Nl(Gc(t))}function Un(t){return Jt(t)?t:Vs(t,!1,qo,Al,Go)}function Ml(t){return Vs(t,!1,Il,Pl,Jo)}function Xo(t){return Vs(t,!0,El,Ol,Yo)}function Vs(t,e,n,r,s){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Dl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function jt(t){return Jt(t)?jt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function pr(t){return!!(t&&t.__v_isShallow)}function Qo(t){return jt(t)||Jt(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Zo(t){return hr(t,"__v_skip",!0),t}const Cn=t=>Q(t)?Un(t):t,Ws=t=>Q(t)?Xo(t):t;function ea(t){ut&&Ce&&(t=W(t),Wo(t.dep||(t.dep=Fs())))}function ta(t,e){t=W(t);const n=t.dep;n&&ps(n)}function ue(t){return!!(t&&t.__v_isRef===!0)}function na(t){return ra(t,!1)}function xl(t){return ra(t,!0)}function ra(t,e){return ue(t)?t:new Ll(t,e)}class Ll{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:Cn(e)}get value(){return ea(this),this._value}set value(e){const n=this.__v_isShallow||pr(e)||Jt(e);e=n?e:W(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cn(e),ta(this))}}function Ct(t){return ue(t)?t.value:t}const Ul={get:(t,e,n)=>Ct(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sa(t){return jt(t)?t:new Proxy(t,Ul)}class Fl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Bs(e,()=>{this._dirty||(this._dirty=!0,ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=W(this);return ea(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Bl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ae):(r=t.get,s=t.set),new Fl(r,s,i||!s,n)}function ft(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Dr(i,e,n)}return s}function Pe(t,e,n,r){if($(t)){const i=ft(t,e,n,r);return i&&xo(i)&&i.catch(o=>{Dr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Dr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ft(c,null,10,[t,o,a]);return}}$l(t,n,s,r)}function $l(t,e,n,r=!0){console.error(t)}let Sn=!1,gs=!1;const le=[];let Ue=0;const Vt=[];let Ke=null,Et=0;const ia=Promise.resolve();let Ks=null;function oa(t){const e=Ks||ia;return t?e.then(this?t.bind(this):t):e}function Hl(t){let e=Ue+1,n=le.length;for(;e<n;){const r=e+n>>>1;An(le[r])<t?e=r+1:n=r}return e}function zs(t){(!le.length||!le.includes(t,Sn&&t.allowRecurse?Ue+1:Ue))&&(t.id==null?le.push(t):le.splice(Hl(t.id),0,t),aa())}function aa(){!Sn&&!gs&&(gs=!0,Ks=ia.then(la))}function jl(t){const e=le.indexOf(t);e>Ue&&le.splice(e,1)}function Vl(t){L(t)?Vt.push(...t):(!Ke||!Ke.includes(t,t.allowRecurse?Et+1:Et))&&Vt.push(t),aa()}function Ii(t,e=Sn?Ue+1:0){for(;e<le.length;e++){const n=le[e];n&&n.pre&&(le.splice(e,1),e--,n())}}function ca(t){if(Vt.length){const e=[...new Set(Vt)];if(Vt.length=0,Ke){Ke.push(...e);return}for(Ke=e,Ke.sort((n,r)=>An(n)-An(r)),Et=0;Et<Ke.length;Et++)Ke[Et]();Ke=null,Et=0}}const An=t=>t.id==null?1/0:t.id,Wl=(t,e)=>{const n=An(t)-An(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function la(t){gs=!1,Sn=!0,le.sort(Wl);const e=Ae;try{for(Ue=0;Ue<le.length;Ue++){const n=le[Ue];n&&n.active!==!1&&ft(n,null,14)}}finally{Ue=0,le.length=0,ca(),Sn=!1,Ks=null,(le.length||Vt.length)&&la()}}function Kl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||Z;g&&(s=n.map(y=>re(y)?y.trim():y)),h&&(s=n.map(ls))}let a,c=r[a=Kr(e)]||r[a=Kr(He(e))];!c&&i&&(c=r[a=Kr(rn(e))]),c&&Pe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,s)}}function ua(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const u=ua(l,e,!0);u&&(a=!0,oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Q(t)&&r.set(t,null),null):(L(i)?i.forEach(c=>o[c]=null):oe(o,i),Q(t)&&r.set(t,o),o)}function Mr(t,e){return!t||!Ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,rn(e))||V(t,e))}let fe=null,xr=null;function gr(t){const e=fe;return fe=t,xr=t&&t.type.__scopeId||null,e}function _m(t){xr=t}function vm(){xr=null}function nr(t,e=fe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Di(-1);const i=gr(e);let o;try{o=t(...s)}finally{gr(i),r._d&&Di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:g,setupState:y,ctx:S,inheritAttrs:P}=t;let U,k;const M=gr(t);try{if(n.shapeFlag&4){const x=s||r;U=Le(u.call(x,x,h,i,y,g,S)),k=c}else{const x=e;U=Le(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),k=e.props?c:zl(c)}}catch(x){yn.length=0,Dr(x,t,1),U=ie(gt)}let j=U;if(k&&P!==!1){const x=Object.keys(k),{shapeFlag:te}=j;x.length&&te&7&&(o&&x.some(Ds)&&(k=ql(k,o)),j=Yt(j,k))}return n.dirs&&(j=Yt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),U=j,gr(M),U}const zl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ar(n))&&((e||(e={}))[n]=t[n]);return e},ql=(t,e)=>{const n={};for(const r in t)(!Ds(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Gl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Mr(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wi(r,o,l):!0:!!o;return!1}function wi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Mr(n,i))return!0}return!1}function Jl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yl=t=>t.__isSuspense;function Xl(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Vl(t)}const Xn={};function rr(t,e,n){return fa(t,e,n)}function fa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){var a;const c=al()===((a=ae)==null?void 0:a.scope)?ae:null;let l,u=!1,h=!1;if(ue(t)?(l=()=>t.value,u=pr(t)):jt(t)?(l=()=>t,r=!0):L(t)?(h=!0,u=t.some(x=>jt(x)||pr(x)),l=()=>t.map(x=>{if(ue(x))return x.value;if(jt(x))return wt(x);if($(x))return ft(x,c,2)})):$(t)?e?l=()=>ft(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return g&&g(),Pe(t,c,3,[y])}:l=Ae,e&&r){const x=l;l=()=>wt(x())}let g,y=x=>{g=M.onStop=()=>{ft(x,c,4)}},S;if(On)if(y=Ae,e?n&&Pe(e,c,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const x=Wu();S=x.__watcherHandles||(x.__watcherHandles=[])}else return Ae;let P=h?new Array(t.length).fill(Xn):Xn;const U=()=>{if(M.active)if(e){const x=M.run();(r||u||(h?x.some((te,ne)=>Rn(te,P[ne])):Rn(x,P)))&&(g&&g(),Pe(e,c,3,[x,P===Xn?void 0:h&&P[0]===Xn?[]:P,y]),P=x)}else M.run()};U.allowRecurse=!!e;let k;s==="sync"?k=U:s==="post"?k=()=>ge(U,c&&c.suspense):(U.pre=!0,c&&(U.id=c.uid),k=()=>zs(U));const M=new Bs(l,k);e?n?U():P=M.run():s==="post"?ge(M.run.bind(M),c&&c.suspense):M.run();const j=()=>{M.stop(),c&&c.scope&&Ms(c.scope.effects,M)};return S&&S.push(j),j}function Ql(t,e,n){const r=this.proxy,s=re(t)?t.includes(".")?da(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ae;Xt(this);const a=fa(s,i.bind(r),n);return o?Xt(o):St(),a}function da(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function wt(t,e){if(!Q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))wt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if(Pr(t)||Ht(t))t.forEach(n=>{wt(n,e)});else if(Uo(t))for(const n in t)wt(t[n],e);return t}function ym(t,e){const n=fe;if(n===null)return t;const r=Br(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&wt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(sn(),Pe(c,n,8,[t.el,a,t,e]),on())}}function ha(t,e){return $(t)?(()=>oe({name:t.name},e,{setup:t}))():t}const _n=t=>!!t.type.__asyncLoader,pa=t=>t.type.__isKeepAlive;function Zl(t,e){ga(t,"a",e)}function eu(t,e){ga(t,"da",e)}function ga(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Lr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pa(s.parent.vnode)&&tu(r,e,n,s),s=s.parent}}function tu(t,e,n,r){const s=Lr(e,t,r,!0);_a(()=>{Ms(r[e],s)},n)}function Lr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sn(),Xt(n);const a=Pe(e,n,t,o);return St(),on(),a});return r?s.unshift(i):s.push(i),i}}const Xe=t=>(e,n=ae)=>(!On||t==="sp")&&Lr(t,(...r)=>e(...r),n),nu=Xe("bm"),ma=Xe("m"),ru=Xe("bu"),su=Xe("u"),iu=Xe("bum"),_a=Xe("um"),ou=Xe("sp"),au=Xe("rtg"),cu=Xe("rtc");function lu(t,e=ae){Lr("ec",t,e)}const va="components";function ya(t,e){return fu(va,t,!0,e)||t}const uu=Symbol.for("v-ndc");function fu(t,e,n=!0,r=!1){const s=fe||ae;if(s){const i=s.type;if(t===va){const a=Hu(i,!1);if(a&&(a===e||a===He(e)||a===kr(He(e))))return i}const o=Ti(s[t]||i[t],e)||Ti(s.appContext[t],e);return!o&&r?i:o}}function Ti(t,e){return t&&(t[e]||t[He(e)]||t[kr(He(e))])}function du(t,e,n,r){let s;const i=n&&n[r];if(L(t)||re(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Q(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function bm(t,e,n={},r,s){if(fe.isCE||fe.parent&&_n(fe.parent)&&fe.parent.isCE)return e!=="default"&&(n.name=e),ie("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ze();const o=i&&ba(i(n)),a=bn(ye,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ba(t){return t.some(e=>vr(e)?!(e.type===gt||e.type===ye&&!ba(e.children)):!0)?t:null}const ms=t=>t?ka(t)?Br(t)||t.proxy:ms(t.parent):null,vn=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ms(t.parent),$root:t=>ms(t.root),$emit:t=>t.emit,$options:t=>qs(t),$forceUpdate:t=>t.f||(t.f=()=>zs(t.update)),$nextTick:t=>t.n||(t.n=oa.bind(t.proxy)),$watch:t=>Ql.bind(t)}),qr=(t,e)=>t!==Z&&!t.__isScriptSetup&&V(t,e),hu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(qr(r,e))return o[e]=1,r[e];if(s!==Z&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==Z&&V(n,e))return o[e]=4,n[e];_s&&(o[e]=0)}}const u=vn[e];let h,g;if(u)return e==="$attrs"&&me(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&V(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,V(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return qr(s,e)?(s[e]=n,!0):r!==Z&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&V(t,o)||qr(e,o)||(a=i[0])&&V(a,o)||V(r,o)||V(vn,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ri(t){return L(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _s=!0;function pu(t){const e=qs(t),n=t.proxy,r=t.ctx;_s=!1,e.beforeCreate&&Ci(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:S,activated:P,deactivated:U,beforeDestroy:k,beforeUnmount:M,destroyed:j,unmounted:x,render:te,renderTracked:ne,renderTriggered:_e,errorCaptured:we,serverPrefetch:ke,expose:be,inheritAttrs:Qe,components:_t,directives:Ne,filters:ln}=e;if(l&&gu(l,r,null),o)for(const J in o){const K=o[J];$(K)&&(r[J]=K.bind(n))}if(s){const J=s.call(n,n);Q(J)&&(t.data=Un(J))}if(_s=!0,i)for(const J in i){const K=i[J],Ve=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):Ae,Ze=!$(K)&&$(K.set)?K.set.bind(n):Ae,De=Ee({get:Ve,set:Ze});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:pe=>De.value=pe})}if(a)for(const J in a)Ea(a[J],r,n,J);if(c){const J=$(c)?c.call(n):c;Reflect.ownKeys(J).forEach(K=>{sr(K,J[K])})}u&&Ci(u,t,"c");function se(J,K){L(K)?K.forEach(Ve=>J(Ve.bind(n))):K&&J(K.bind(n))}if(se(nu,h),se(ma,g),se(ru,y),se(su,S),se(Zl,P),se(eu,U),se(lu,we),se(cu,ne),se(au,_e),se(iu,M),se(_a,x),se(ou,ke),L(be))if(be.length){const J=t.exposed||(t.exposed={});be.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:Ve=>n[K]=Ve})})}else t.exposed||(t.exposed={});te&&t.render===Ae&&(t.render=te),Qe!=null&&(t.inheritAttrs=Qe),_t&&(t.components=_t),Ne&&(t.directives=Ne)}function gu(t,e,n=Ae){L(t)&&(t=vs(t));for(const r in t){const s=t[r];let i;Q(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ci(t,e,n){Pe(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ea(t,e,n,r){const s=r.includes(".")?da(n,r):()=>n[r];if(re(t)){const i=e[t];$(i)&&rr(s,i)}else if($(t))rr(s,t.bind(n));else if(Q(t))if(L(t))t.forEach(i=>Ea(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&rr(s,i,t)}}function qs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>mr(c,l,o,!0)),mr(c,e,o)),Q(e)&&i.set(e,c),c}function mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mr(t,i,n,!0),s&&s.forEach(o=>mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mu={data:Si,props:Ai,emits:Ai,methods:pn,computed:pn,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:pn,directives:pn,watch:vu,provide:Si,inject:_u};function Si(t,e){return e?t?function(){return oe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function _u(t,e){return pn(vs(t),vs(e))}function vs(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?oe(Object.create(null),t,e):e}function Ai(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:oe(Object.create(null),Ri(t),Ri(e??{})):e}function vu(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function Ia(){return{app:null,config:{isNativeTag:Kc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yu=0;function bu(t,e){return function(r,s=null){$(r)||(r=oe({},r)),s!=null&&!Q(s)&&(s=null);const i=Ia(),o=new Set;let a=!1;const c=i.app={_uid:yu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ku,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...u)):$(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const g=ie(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),a=!0,c._container=l,l.__vue_app__=c,Br(g.component)||g.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){_r=c;try{return l()}finally{_r=null}}};return c}}let _r=null;function sr(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=ae||fe;if(r||_r){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:_r._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function Eu(t,e,n,r=!1){const s={},i={};hr(i,Fr,1),t.propsDefaults=Object.create(null),wa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ml(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Iu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=W(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Mr(t.emitsOptions,g))continue;const y=e[g];if(c)if(V(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const S=He(g);s[S]=ys(c,a,S,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{wa(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!V(e,h)&&((u=rn(h))===h||!V(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ys(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!V(e,h))&&(delete i[h],l=!0)}l&&Je(t,"set","$attrs")}function wa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(er(c))continue;const l=e[c];let u;s&&V(s,u=He(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Mr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=W(n),l=a||Z;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ys(s,c,h,l[h],t,!V(l,h))}}return o}function ys(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Xt(s),r=l[n]=c.call(null,e),St())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===rn(n))&&(r=!0))}return r}function Ta(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[g,y]=Ta(h,e,!0);oe(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Q(t)&&r.set(t,$t),$t;if(L(i))for(let u=0;u<i.length;u++){const h=He(i[u]);Pi(h)&&(o[h]=Z)}else if(i)for(const u in i){const h=He(u);if(Pi(h)){const g=i[u],y=o[h]=L(g)||$(g)?{type:g}:oe({},g);if(y){const S=Ni(Boolean,y.type),P=Ni(String,y.type);y[0]=S>-1,y[1]=P<0||S<P,(S>-1||V(y,"default"))&&a.push(h)}}}const l=[o,a];return Q(t)&&r.set(t,l),l}function Pi(t){return t[0]!=="$"}function Oi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ki(t,e){return Oi(t)===Oi(e)}function Ni(t,e){return L(e)?e.findIndex(n=>ki(n,t)):$(e)&&ki(e,t)?0:-1}const Ra=t=>t[0]==="_"||t==="$stable",Gs=t=>L(t)?t.map(Le):[Le(t)],wu=(t,e,n)=>{if(e._n)return e;const r=nr((...s)=>Gs(e(...s)),n);return r._c=!1,r},Ca=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ra(s))continue;const i=t[s];if($(i))e[s]=wu(s,i,r);else if(i!=null){const o=Gs(i);e[s]=()=>o}}},Sa=(t,e)=>{const n=Gs(e);t.slots.default=()=>n},Tu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),hr(e,"_",n)):Ca(e,t.slots={})}else t.slots={},e&&Sa(t,e);hr(t.slots,Fr,1)},Ru=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(oe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ca(e,s)),o=e}else e&&(Sa(t,e),o={default:1});if(i)for(const a in s)!Ra(a)&&!(a in o)&&delete s[a]};function bs(t,e,n,r,s=!1){if(L(t)){t.forEach((g,y)=>bs(g,e&&(L(e)?e[y]:e),n,r,s));return}if(_n(r)&&!s)return;const i=r.shapeFlag&4?Br(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(re(l)?(u[l]=null,V(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(c))ft(c,a,12,[o,u]);else{const g=re(c),y=ue(c);if(g||y){const S=()=>{if(t.f){const P=g?V(h,c)?h[c]:u[c]:c.value;s?L(P)&&Ms(P,i):L(P)?P.includes(i)||P.push(i):g?(u[c]=[i],V(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else g?(u[c]=o,V(h,c)&&(h[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,ge(S,n)):S()}}}const ge=Xl;function Cu(t){return Su(t)}function Su(t,e){const n=us();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=Ae,insertStaticContent:S}=t,P=(f,d,p,m=null,v=null,b=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!fn(f,d)&&(m=_(f),pe(f,v,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:A}=d;switch(E){case Ur:U(f,d,p,m);break;case gt:k(f,d,p,m);break;case ir:f==null&&M(d,p,m,R);break;case ye:_t(f,d,p,m,v,b,R,I,w);break;default:A&1?te(f,d,p,m,v,b,R,I,w):A&6?Ne(f,d,p,m,v,b,R,I,w):(A&64||A&128)&&E.process(f,d,p,m,v,b,R,I,w,T)}N!=null&&v&&bs(N,f&&f.ref,b,d||f,!d)},U=(f,d,p,m)=>{if(f==null)r(d.el=a(d.children),p,m);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},k=(f,d,p,m)=>{f==null?r(d.el=c(d.children||""),p,m):d.el=f.el},M=(f,d,p,m)=>{[f.el,f.anchor]=S(f.children,d,p,m,f.el,f.anchor)},j=({el:f,anchor:d},p,m)=>{let v;for(;f&&f!==d;)v=g(f),r(f,p,m),f=v;r(d,p,m)},x=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},te=(f,d,p,m,v,b,R,I,w)=>{R=R||d.type==="svg",f==null?ne(d,p,m,v,b,R,I,w):ke(f,d,v,b,R,I,w)},ne=(f,d,p,m,v,b,R,I)=>{let w,E;const{type:N,props:A,shapeFlag:D,transition:B,dirs:H}=f;if(w=f.el=o(f.type,b,A&&A.is,A),D&8?u(w,f.children):D&16&&we(f.children,w,null,m,v,b&&N!=="foreignObject",R,I),H&&vt(f,null,m,"created"),_e(w,f,f.scopeId,R,m),A){for(const G in A)G!=="value"&&!er(G)&&i(w,G,null,A[G],b,f.children,m,v,ce);"value"in A&&i(w,"value",null,A.value),(E=A.onVnodeBeforeMount)&&xe(E,m,f)}H&&vt(f,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;X&&B.beforeEnter(w),r(w,d,p),((E=A&&A.onVnodeMounted)||X||H)&&ge(()=>{E&&xe(E,m,f),X&&B.enter(w),H&&vt(f,null,m,"mounted")},v)},_e=(f,d,p,m,v)=>{if(p&&y(f,p),m)for(let b=0;b<m.length;b++)y(f,m[b]);if(v){let b=v.subTree;if(d===b){const R=v.vnode;_e(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},we=(f,d,p,m,v,b,R,I,w=0)=>{for(let E=w;E<f.length;E++){const N=f[E]=I?rt(f[E]):Le(f[E]);P(null,N,d,p,m,v,b,R,I)}},ke=(f,d,p,m,v,b,R)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:N}=d;w|=f.patchFlag&16;const A=f.props||Z,D=d.props||Z;let B;p&&yt(p,!1),(B=D.onVnodeBeforeUpdate)&&xe(B,p,d,f),N&&vt(d,f,p,"beforeUpdate"),p&&yt(p,!0);const H=v&&d.type!=="foreignObject";if(E?be(f.dynamicChildren,E,I,p,m,H,b):R||K(f,d,I,null,p,m,H,b,!1),w>0){if(w&16)Qe(I,d,A,D,p,m,v);else if(w&2&&A.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",A.style,D.style,v),w&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],Te=A[ee],Ut=D[ee];(Ut!==Te||ee==="value")&&i(I,ee,Te,Ut,v,f.children,p,m,ce)}}w&1&&f.children!==d.children&&u(I,d.children)}else!R&&E==null&&Qe(I,d,A,D,p,m,v);((B=D.onVnodeUpdated)||N)&&ge(()=>{B&&xe(B,p,d,f),N&&vt(d,f,p,"updated")},m)},be=(f,d,p,m,v,b,R)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],N=w.el&&(w.type===ye||!fn(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,N,null,m,v,b,R,!0)}},Qe=(f,d,p,m,v,b,R)=>{if(p!==m){if(p!==Z)for(const I in p)!er(I)&&!(I in m)&&i(f,I,p[I],null,R,d.children,v,b,ce);for(const I in m){if(er(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(f,I,E,w,R,d.children,v,b,ce)}"value"in m&&i(f,"value",p.value,m.value)}},_t=(f,d,p,m,v,b,R,I,w)=>{const E=d.el=f?f.el:a(""),N=d.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),f==null?(r(E,p,m),r(N,p,m),we(d.children,p,N,v,b,R,I,w)):A>0&&A&64&&D&&f.dynamicChildren?(be(f.dynamicChildren,D,p,v,b,R,I),(d.key!=null||v&&d===v.subTree)&&Aa(f,d,!0)):K(f,d,p,N,v,b,R,I,w)},Ne=(f,d,p,m,v,b,R,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,w):ln(d,p,m,v,b,R,w):Mt(f,d,w)},ln=(f,d,p,m,v,b,R)=>{const I=f.component=Lu(f,m,v);if(pa(f)&&(I.ctx.renderer=T),Uu(I),I.asyncDep){if(v&&v.registerDep(I,se),!f.el){const w=I.subTree=ie(gt);k(null,w,d,p)}return}se(I,f,d,p,v,b,R)},Mt=(f,d,p)=>{const m=d.component=f.component;if(Gl(f,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,jl(m.update),m.update();else d.el=f.el,m.vnode=d},se=(f,d,p,m,v,b,R)=>{const I=()=>{if(f.isMounted){let{next:N,bu:A,u:D,parent:B,vnode:H}=f,X=N,G;yt(f,!1),N?(N.el=H.el,J(f,N,R)):N=H,A&&tr(A),(G=N.props&&N.props.onVnodeBeforeUpdate)&&xe(G,B,N,H),yt(f,!0);const ee=zr(f),Te=f.subTree;f.subTree=ee,P(Te,ee,h(Te.el),_(Te),f,v,b),N.el=ee.el,X===null&&Jl(f,ee.el),D&&ge(D,v),(G=N.props&&N.props.onVnodeUpdated)&&ge(()=>xe(G,B,N,H),v)}else{let N;const{el:A,props:D}=d,{bm:B,m:H,parent:X}=f,G=_n(d);if(yt(f,!1),B&&tr(B),!G&&(N=D&&D.onVnodeBeforeMount)&&xe(N,X,d),yt(f,!0),A&&z){const ee=()=>{f.subTree=zr(f),z(A,f.subTree,f,v,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=zr(f);P(null,ee,p,m,f,v,b),d.el=ee.el}if(H&&ge(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;ge(()=>xe(N,X,ee),v)}(d.shapeFlag&256||X&&_n(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&ge(f.a,v),f.isMounted=!0,d=p=m=null}},w=f.effect=new Bs(I,()=>zs(E),f.scope),E=f.update=()=>w.run();E.id=f.uid,yt(f,!0),E()},J=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,Iu(f,d.props,m,p),Ru(f,d.children,p),sn(),Ii(),on()},K=(f,d,p,m,v,b,R,I,w=!1)=>{const E=f&&f.children,N=f?f.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){Ze(E,A,p,m,v,b,R,I,w);return}else if(D&256){Ve(E,A,p,m,v,b,R,I,w);return}}B&8?(N&16&&ce(E,v,b),A!==E&&u(p,A)):N&16?B&16?Ze(E,A,p,m,v,b,R,I,w):ce(E,v,b,!0):(N&8&&u(p,""),B&16&&we(A,p,m,v,b,R,I,w))},Ve=(f,d,p,m,v,b,R,I,w)=>{f=f||$t,d=d||$t;const E=f.length,N=d.length,A=Math.min(E,N);let D;for(D=0;D<A;D++){const B=d[D]=w?rt(d[D]):Le(d[D]);P(f[D],B,p,null,v,b,R,I,w)}E>N?ce(f,v,b,!0,!1,A):we(d,p,m,v,b,R,I,w,A)},Ze=(f,d,p,m,v,b,R,I,w)=>{let E=0;const N=d.length;let A=f.length-1,D=N-1;for(;E<=A&&E<=D;){const B=f[E],H=d[E]=w?rt(d[E]):Le(d[E]);if(fn(B,H))P(B,H,p,null,v,b,R,I,w);else break;E++}for(;E<=A&&E<=D;){const B=f[A],H=d[D]=w?rt(d[D]):Le(d[D]);if(fn(B,H))P(B,H,p,null,v,b,R,I,w);else break;A--,D--}if(E>A){if(E<=D){const B=D+1,H=B<N?d[B].el:m;for(;E<=D;)P(null,d[E]=w?rt(d[E]):Le(d[E]),p,H,v,b,R,I,w),E++}}else if(E>D)for(;E<=A;)pe(f[E],v,b,!0),E++;else{const B=E,H=E,X=new Map;for(E=H;E<=D;E++){const ve=d[E]=w?rt(d[E]):Le(d[E]);ve.key!=null&&X.set(ve.key,E)}let G,ee=0;const Te=D-H+1;let Ut=!1,ui=0;const un=new Array(Te);for(E=0;E<Te;E++)un[E]=0;for(E=B;E<=A;E++){const ve=f[E];if(ee>=Te){pe(ve,v,b,!0);continue}let Me;if(ve.key!=null)Me=X.get(ve.key);else for(G=H;G<=D;G++)if(un[G-H]===0&&fn(ve,d[G])){Me=G;break}Me===void 0?pe(ve,v,b,!0):(un[Me-H]=E+1,Me>=ui?ui=Me:Ut=!0,P(ve,d[Me],p,null,v,b,R,I,w),ee++)}const fi=Ut?Au(un):$t;for(G=fi.length-1,E=Te-1;E>=0;E--){const ve=H+E,Me=d[ve],di=ve+1<N?d[ve+1].el:m;un[E]===0?P(null,Me,p,di,v,b,R,I,w):Ut&&(G<0||E!==fi[G]?De(Me,p,di,2):G--)}}},De=(f,d,p,m,v=null)=>{const{el:b,type:R,transition:I,children:w,shapeFlag:E}=f;if(E&6){De(f.component.subTree,d,p,m);return}if(E&128){f.suspense.move(d,p,m);return}if(E&64){R.move(f,d,p,T);return}if(R===ye){r(b,d,p);for(let A=0;A<w.length;A++)De(w[A],d,p,m);r(f.anchor,d,p);return}if(R===ir){j(f,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),ge(()=>I.enter(b),v);else{const{leave:A,delayLeave:D,afterLeave:B}=I,H=()=>r(b,d,p),X=()=>{A(b,()=>{H(),B&&B()})};D?D(b,H,X):X()}else r(b,d,p)},pe=(f,d,p,m=!1,v=!1)=>{const{type:b,props:R,ref:I,children:w,dynamicChildren:E,shapeFlag:N,patchFlag:A,dirs:D}=f;if(I!=null&&bs(I,null,p,f,!0),N&256){d.ctx.deactivate(f);return}const B=N&1&&D,H=!_n(f);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&xe(X,d,f),N&6)Kn(f.component,p,m);else{if(N&128){f.suspense.unmount(p,m);return}B&&vt(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,p,v,T,m):E&&(b!==ye||A>0&&A&64)?ce(E,d,p,!1,!0):(b===ye&&A&384||!v&&N&16)&&ce(w,d,p),m&&xt(f)}(H&&(X=R&&R.onVnodeUnmounted)||B)&&ge(()=>{X&&xe(X,d,f),B&&vt(f,null,d,"unmounted")},p)},xt=f=>{const{type:d,el:p,anchor:m,transition:v}=f;if(d===ye){Lt(p,m);return}if(d===ir){x(f);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(p,b);I?I(f.el,b,w):w()}else b()},Lt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Kn=(f,d,p)=>{const{bum:m,scope:v,update:b,subTree:R,um:I}=f;m&&tr(m),v.stop(),b&&(b.active=!1,pe(R,f,d,p)),I&&ge(I,d),ge(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ce=(f,d,p,m=!1,v=!1,b=0)=>{for(let R=b;R<f.length;R++)pe(f[R],d,p,m,v)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),C=(f,d,p)=>{f==null?d._vnode&&pe(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),Ii(),ca(),d._vnode=f},T={p:P,um:pe,m:De,r:xt,mt:ln,mc:we,pc:K,pbc:be,n:_,o:t};let O,z;return e&&([O,z]=e(T)),{render:C,hydrate:O,createApp:bu(C,O)}}function yt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Aa(t,e,n=!1){const r=t.children,s=e.children;if(L(r)&&L(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rt(s[i]),a.el=o.el),n||Aa(o,a)),a.type===Ur&&(a.el=o.el)}}function Au(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Pu=t=>t.__isTeleport,ye=Symbol.for("v-fgt"),Ur=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),yn=[];let Se=null;function ze(t=!1){yn.push(Se=t?null:[])}function Ou(){yn.pop(),Se=yn[yn.length-1]||null}let Pn=1;function Di(t){Pn+=t}function Pa(t){return t.dynamicChildren=Pn>0?Se||$t:null,Ou(),Pn>0&&Se&&Se.push(t),t}function or(t,e,n,r,s,i){return Pa(Wt(t,e,n,r,s,i,!0))}function bn(t,e,n,r,s){return Pa(ie(t,e,n,r,s,!0))}function vr(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Fr="__vInternal",Oa=({key:t})=>t??null,ar=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||ue(t)||$(t)?{i:fe,r:t,k:e,f:!!n}:t:null);function Wt(t,e=null,n=null,r=0,s=null,i=t===ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oa(e),ref:e&&ar(e),scopeId:xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fe};return a?(Js(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),Pn>0&&!o&&Se&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Se.push(c),c}const ie=ku;function ku(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uu)&&(t=gt),vr(t)){const a=Yt(t,e,!0);return n&&Js(a,n),Pn>0&&!i&&Se&&(a.shapeFlag&6?Se[Se.indexOf(t)]=a:Se.push(a)),a.patchFlag|=-2,a}if(ju(t)&&(t=t.__vccOpts),e){e=Nu(e);let{class:a,style:c}=e;a&&!re(a)&&(e.class=Us(a)),Q(c)&&(Qo(c)&&!L(c)&&(c=oe({},c)),e.style=Ls(c))}const o=re(t)?1:Yl(t)?128:Pu(t)?64:Q(t)?4:$(t)?2:0;return Wt(t,e,n,r,s,o,i,!0)}function Nu(t){return t?Qo(t)||Fr in t?oe({},t):t:null}function Yt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Du(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Oa(a),ref:e&&e.ref?n&&s?L(s)?s.concat(ar(e)):[s,ar(e)]:ar(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cr(t=" ",e=0){return ie(Ur,null,t,e)}function Em(t,e){const n=ie(ir,null,t);return n.staticCount=e,n}function Gr(t="",e=!1){return e?(ze(),bn(gt,null,t)):ie(gt,null,t)}function Le(t){return t==null||typeof t=="boolean"?ie(gt):L(t)?ie(ye,null,t.slice()):typeof t=="object"?rt(t):ie(Ur,null,String(t))}function rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function Js(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Js(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Fr in e)?e._ctx=fe:s===3&&fe&&(fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:fe},n=32):(e=String(e),r&64?(n=16,e=[cr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Du(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Us([e.class,r.class]));else if(s==="style")e.style=Ls([e.style,r.style]);else if(Ar(s)){const i=e[s],o=r[s];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xe(t,e,n,r=null){Pe(t,e,7,[n,r])}const Mu=Ia();let xu=0;function Lu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mu,i={uid:xu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ta(r,s),emitsOptions:ua(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kl.bind(null,i),t.ce&&t.ce(i),i}let ae=null,Ys,Ft,Mi="__VUE_INSTANCE_SETTERS__";(Ft=us()[Mi])||(Ft=us()[Mi]=[]),Ft.push(t=>ae=t),Ys=t=>{Ft.length>1?Ft.forEach(e=>e(t)):Ft[0](t)};const Xt=t=>{Ys(t),t.scope.on()},St=()=>{ae&&ae.scope.off(),Ys(null)};function ka(t){return t.vnode.shapeFlag&4}let On=!1;function Uu(t,e=!1){On=e;const{props:n,children:r}=t.vnode,s=ka(t);Eu(t,n,s,e),Tu(t,r);const i=s?Fu(t,e):void 0;return On=!1,i}function Fu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zo(new Proxy(t.ctx,hu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$u(t):null;Xt(t),sn();const i=ft(r,t,0,[t.props,s]);if(on(),St(),xo(i)){if(i.then(St,St),e)return i.then(o=>{xi(t,o,e)}).catch(o=>{Dr(o,t,0)});t.asyncDep=i}else xi(t,i,e)}else Na(t,e)}function xi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=sa(e)),Na(t,n)}let Li;function Na(t,e,n){const r=t.type;if(!t.render){if(!e&&Li&&!r.render){const s=r.template||qs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=oe(oe({isCustomElement:i,delimiters:a},o),c);r.render=Li(s,l)}}t.render=r.render||Ae}Xt(t),sn(),pu(t),on(),St()}function Bu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return me(t,"get","$attrs"),e[n]}}))}function $u(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Bu(t)},slots:t.slots,emit:t.emit,expose:e}}function Br(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sa(Zo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vn)return vn[n](t)},has(e,n){return n in e||n in vn}}))}function Hu(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function ju(t){return $(t)&&"__vccOpts"in t}const Ee=(t,e)=>Bl(t,e,On);function Da(t,e,n){const r=arguments.length;return r===2?Q(e)&&!L(e)?vr(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vr(n)&&(n=[n]),ie(t,e,n))}const Vu=Symbol.for("v-scx"),Wu=()=>Fe(Vu),Ku="3.3.4",zu="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Ui=It&&It.createElement("template"),qu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?It.createElementNS(zu,t):It.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ui.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ui.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Gu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ju(t,e,n){const r=t.style,s=re(n);if(n&&!s){if(e&&!re(e))for(const i in e)n[i]==null&&Es(r,i,"");for(const i in n)Es(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Fi=/\s*!important$/;function Es(t,e,n){if(L(n))n.forEach(r=>Es(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yu(t,e);Fi.test(n)?t.setProperty(rn(r),n.replace(Fi,""),"important"):t[r]=n}}const Bi=["Webkit","Moz","ms"],Jr={};function Yu(t,e){const n=Jr[e];if(n)return n;let r=He(e);if(r!=="filter"&&r in t)return Jr[e]=r;r=kr(r);for(let s=0;s<Bi.length;s++){const i=Bi[s]+r;if(i in t)return Jr[e]=i}return e}const $i="http://www.w3.org/1999/xlink";function Xu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($i,e.slice(6,e.length)):t.setAttributeNS($i,e,n);else{const i=nl(e);n==null||i&&!Fo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Qu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Fo(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function it(t,e,n,r){t.addEventListener(e,n,r)}function Zu(t,e,n,r){t.removeEventListener(e,n,r)}function ef(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=tf(e);if(r){const l=i[e]=sf(r,s);it(t,a,l,c)}else o&&(Zu(t,a,o,c),i[e]=void 0)}}const Hi=/(?:Once|Passive|Capture)$/;function tf(t){let e;if(Hi.test(t)){e={};let r;for(;r=t.match(Hi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let Yr=0;const nf=Promise.resolve(),rf=()=>Yr||(nf.then(()=>Yr=0),Yr=Date.now());function sf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(of(r,n.value),e,5,[r])};return n.value=t,n.attached=rf(),n}function of(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ji=/^on[a-z]/,af=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Gu(t,r,s):e==="style"?Ju(t,n,r):Ar(e)?Ds(e)||ef(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cf(t,e,r,s))?Qu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xu(t,e,r,s))};function cf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ji.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ji.test(e)&&re(n)?!1:e in t}const Qt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>tr(e,n):e};function lf(t){t.target.composing=!0}function Vi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Im={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Qt(s);const i=r||s.props&&s.props.type==="number";it(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ls(a)),t._assign(a)}),n&&it(t,"change",()=>{t.value=t.value.trim()}),e||(it(t,"compositionstart",lf),it(t,"compositionend",Vi),it(t,"change",Vi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Qt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ls(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wm={deep:!0,created(t,e,n){t._assign=Qt(n),it(t,"change",()=>{const r=t._modelValue,s=Ma(t),i=t.checked,o=t._assign;if(L(r)){const a=Bo(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Pr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(xa(t,i))})},mounted:Wi,beforeUpdate(t,e,n){t._assign=Qt(n),Wi(t,e,n)}};function Wi(t,{value:e,oldValue:n},r){t._modelValue=e,L(e)?t.checked=Bo(e,r.props.value)>-1:Pr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Gt(e,xa(t,!0)))}const Tm={created(t,{value:e},n){t.checked=Gt(e,n.props.value),t._assign=Qt(n),it(t,"change",()=>{t._assign(Ma(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Qt(r),e!==n&&(t.checked=Gt(e,r.props.value))}};function Ma(t){return"_value"in t?t._value:t.value}function xa(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const uf=["ctrl","shift","alt","meta"],ff={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uf.some(n=>t[`${n}Key`]&&!e.includes(n))},df=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=ff[e[s]];if(i&&i(n,e))return}return t(n,...r)},hf=oe({patchProp:af},qu);let Ki;function pf(){return Ki||(Ki=Cu(hf))}const gf=(...t)=>{const e=pf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mf(t){return re(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function _f(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Xr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Oe(s)?s.map(t):t(s)}return n}const En=()=>{},Oe=Array.isArray,vf=/\/$/,yf=t=>t.replace(vf,"");function Qr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function bf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ef(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zt(e.matched[r],n.matched[s])&&La(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function La(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!If(t[n],e[n]))return!1;return!0}function If(t,e){return Oe(t)?qi(t,e):Oe(e)?qi(e,t):t===e}function qi(t,e){return Oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var kn;(function(t){t.pop="pop",t.push="push"})(kn||(kn={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function Tf(t){if(!t)if(Bt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yf(t)}const Rf=/^[^#]+#/;function Cf(t,e){return t.replace(Rf,"#")+e}function Sf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $r=()=>({left:window.pageXOffset,top:window.pageYOffset});function Af(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Sf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gi(t,e){return(history.state?history.state.position-e:-1)+t}const Is=new Map;function Pf(t,e){Is.set(t,e)}function Of(t){const e=Is.get(t);return Is.delete(t),e}let kf=()=>location.protocol+"//"+location.host;function Ua(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),zi(c,"")}return zi(n,t)+r+s}function Nf(t,e,n,r){let s=[],i=[],o=null;const a=({state:g})=>{const y=Ua(t,location),S=n.value,P=e.value;let U=0;if(g){if(n.value=y,e.value=g,o&&o===S){o=null;return}U=P?g.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,S,{delta:U,type:kn.pop,direction:U?U>0?In.forward:In.back:In.unknown})})};function c(){o=n.value}function l(g){s.push(g);const y=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:$r()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ji(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$r():null}}function Df(t){const{history:e,location:n}=window,r={value:Ua(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:kf()+t+c;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(c,l){const u=q({},e.state,Ji(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=q({},s.value,e.state,{forward:c,scroll:$r()});i(u.current,u,!0);const h=q({},Ji(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Mf(t){t=Tf(t);const e=Df(t),n=Nf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:Cf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xf(t){return typeof t=="string"||t&&typeof t=="object"}function Fa(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ba=Symbol("");var Yi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yi||(Yi={}));function en(t,e){return q(new Error,{type:t,[Ba]:!0},e)}function We(t,e){return t instanceof Error&&Ba in t&&(e==null||!!(t.type&e))}const Xi="[^/]+?",Lf={sensitive:!1,strict:!1,start:!0,end:!0},Uf=/[.+*?^${}()[\]/\\]/g;function Ff(t,e){const n=q({},Lf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Uf,"\\$&"),y+=40;else if(g.type===1){const{value:S,repeatable:P,optional:U,regexp:k}=g;i.push({name:S,repeatable:P,optional:U});const M=k||Xi;if(M!==Xi){y+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+x.message)}}let j=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(j=U&&l.length<2?`(?:/${j})`:"/"+j),U&&(j+="?"),s+=j,y+=20,U&&(y+=-8),P&&(y+=-20),M===".*"&&(y+=-50)}u.push(y)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",S=i[g-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function c(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:S,repeatable:P,optional:U}=y,k=S in l?l[S]:"";if(Oe(k)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const M=Oe(k)?k.join("/"):k;if(!M)if(U)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Bf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $f(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qi(r))return 1;if(Qi(s))return-1}return s.length-r.length}function Qi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hf={type:0,value:""},jf=/[a-zA-Z0-9_]/;function Vf(t){if(!t)return[[]];if(t==="/")return[[Hf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:jf.test(c)?g():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Wf(t,e,n){const r=Ff(Vf(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kf(t,e){const n=[],r=new Map;e=to({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const y=!g,S=zf(u);S.aliasOf=g&&g.record;const P=to(e,u),U=[S];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of j)U.push(q({},S,{components:g?g.record.components:S.components,path:x,aliasOf:g?g.record:S}))}let k,M;for(const j of U){const{path:x}=j;if(h&&x[0]!=="/"){const te=h.record.path,ne=te[te.length-1]==="/"?"":"/";j.path=h.record.path+(x&&ne+x)}if(k=Wf(j,h,P),g?g.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),y&&u.name&&!eo(k)&&o(u.name)),S.children){const te=S.children;for(let ne=0;ne<te.length;ne++)i(te[ne],k,g&&g.children[ne])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return M?()=>{o(M)}:En}function o(u){if(Fa(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&$f(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$a(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!eo(u)&&r.set(u.record.name,u)}function l(u,h){let g,y={},S,P;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw en(1,{location:u});P=g.record.name,y=q(Zi(h.params,g.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Zi(u.params,g.keys.map(M=>M.name))),S=g.stringify(y)}else if("path"in u)S=u.path,g=n.find(M=>M.re.test(S)),g&&(y=g.parse(S),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw en(1,{location:u,currentLocation:h});P=g.record.name,y=q({},h.params,u.params),S=g.stringify(y)}const U=[];let k=g;for(;k;)U.unshift(k.record),k=k.parent;return{name:P,path:S,params:y,matched:U,meta:Gf(U)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Zi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function zf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function eo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function to(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $a(t,e){return e.children.some(n=>n===t||$a(t,n))}const Ha=/#/g,Jf=/&/g,Yf=/\//g,Xf=/=/g,Qf=/\?/g,ja=/\+/g,Zf=/%5B/g,ed=/%5D/g,Va=/%5E/g,td=/%60/g,Wa=/%7B/g,nd=/%7C/g,Ka=/%7D/g,rd=/%20/g;function Xs(t){return encodeURI(""+t).replace(nd,"|").replace(Zf,"[").replace(ed,"]")}function sd(t){return Xs(t).replace(Wa,"{").replace(Ka,"}").replace(Va,"^")}function ws(t){return Xs(t).replace(ja,"%2B").replace(rd,"+").replace(Ha,"%23").replace(Jf,"%26").replace(td,"`").replace(Wa,"{").replace(Ka,"}").replace(Va,"^")}function id(t){return ws(t).replace(Xf,"%3D")}function od(t){return Xs(t).replace(Ha,"%23").replace(Qf,"%3F")}function ad(t){return t==null?"":od(t).replace(Yf,"%2F")}function yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function cd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ja," "),o=i.indexOf("="),a=yr(o<0?i:i.slice(0,o)),c=o<0?null:yr(i.slice(o+1));if(a in e){let l=e[a];Oe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function no(t){let e="";for(let n in t){const r=t[n];if(n=id(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&ws(i)):[r&&ws(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ld(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ud=Symbol(""),ro=Symbol(""),Hr=Symbol(""),za=Symbol(""),Ts=Symbol("");function dn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function st(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(en(4,{from:n,to:e})):h instanceof Error?a(h):xf(h)?a(en(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Zr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(fd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(st(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=_f(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&st(g,n,r,i,o)()}))}}return s}function fd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function so(t){const e=Fe(Hr),n=Fe(za),r=Ee(()=>e.resolve(Ct(t.to))),s=Ee(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Zt.bind(null,u));if(g>-1)return g;const y=io(c[l-2]);return l>1&&io(u)===y&&h[h.length-1].path!==y?h.findIndex(Zt.bind(null,c[l-2])):g}),i=Ee(()=>s.value>-1&&gd(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&La(n.params,r.value.params));function a(c={}){return pd(c)?e[Ct(t.replace)?"replace":"push"](Ct(t.to)).catch(En):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const dd=ha({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:so,setup(t,{slots:e}){const n=Un(so(t)),{options:r}=Fe(Hr),s=Ee(()=>({[oo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Da("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),hd=dd;function pd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function io(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oo=(t,e,n)=>t??e??n,md=ha({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe(Ts),s=Ee(()=>t.route||r.value),i=Fe(ro,0),o=Ee(()=>{let l=Ct(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ee(()=>s.value.matched[o.value]);sr(ro,Ee(()=>o.value+1)),sr(ud,a),sr(Ts,s);const c=na();return rr(()=>[c.value,a.value,t.name],([l,u,h],[g,y,S])=>{u&&(u.instances[h]=l,y&&y!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),l&&u&&(!y||!Zt(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,g=h&&h.components[u];if(!g)return ao(n.default,{Component:g,route:l});const y=h.props[u],S=y?y===!0?l.params:typeof y=="function"?y(l):y:null,U=Da(g,q({},S,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ao(n.default,{Component:U,route:l})||U}}});function ao(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _d=md;function vd(t){const e=Kf(t.routes,t),n=t.parseQuery||cd,r=t.stringifyQuery||no,s=t.history,i=dn(),o=dn(),a=dn(),c=xl(tt);let l=tt;Bt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xr.bind(null,_=>""+_),h=Xr.bind(null,ad),g=Xr.bind(null,yr);function y(_,C){let T,O;return Fa(_)?(T=e.getRecordMatcher(_),O=C):O=_,e.addRoute(O,T)}function S(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(_=>_.record)}function U(_){return!!e.getRecordMatcher(_)}function k(_,C){if(C=q({},C||c.value),typeof _=="string"){const p=Qr(n,_,C.path),m=e.resolve({path:p.path},C),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:yr(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Qr(n,_.path,C.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),C.params=h(C.params)}const O=e.resolve(T,C),z=_.hash||"";O.params=u(g(O.params));const f=bf(r,q({},_,{hash:sd(z),path:O.path})),d=s.createHref(f);return q({fullPath:f,hash:z,query:r===no?ld(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function M(_){return typeof _=="string"?Qr(n,_,c.value.path):q({},_)}function j(_,C){if(l!==_)return en(8,{from:C,to:_})}function x(_){return _e(_)}function te(_){return x(q(M(_),{replace:!0}))}function ne(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function _e(_,C){const T=l=k(_),O=c.value,z=_.state,f=_.force,d=_.replace===!0,p=ne(T);if(p)return _e(q(M(p),{state:typeof p=="object"?q({},z,p.state):z,force:f,replace:d}),C||T);const m=T;m.redirectedFrom=C;let v;return!f&&Ef(r,O,T)&&(v=en(16,{to:m,from:O}),De(O,O,!0,!1)),(v?Promise.resolve(v):be(m,O)).catch(b=>We(b)?We(b,2)?b:Ze(b):K(b,m,O)).then(b=>{if(b){if(We(b,2))return _e(q({replace:d},M(b.to),{state:typeof b.to=="object"?q({},z,b.to.state):z,force:f}),C||m)}else b=_t(m,O,!0,d,z);return Qe(m,O,b),b})}function we(_,C){const T=j(_,C);return T?Promise.reject(T):Promise.resolve()}function ke(_){const C=Lt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(_):_()}function be(_,C){let T;const[O,z,f]=yd(_,C);T=Zr(O.reverse(),"beforeRouteLeave",_,C);for(const p of O)p.leaveGuards.forEach(m=>{T.push(st(m,_,C))});const d=we.bind(null,_,C);return T.push(d),ce(T).then(()=>{T=[];for(const p of i.list())T.push(st(p,_,C));return T.push(d),ce(T)}).then(()=>{T=Zr(z,"beforeRouteUpdate",_,C);for(const p of z)p.updateGuards.forEach(m=>{T.push(st(m,_,C))});return T.push(d),ce(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!C.matched.includes(p))if(Oe(p.beforeEnter))for(const m of p.beforeEnter)T.push(st(m,_,C));else T.push(st(p.beforeEnter,_,C));return T.push(d),ce(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Zr(f,"beforeRouteEnter",_,C),T.push(d),ce(T))).then(()=>{T=[];for(const p of o.list())T.push(st(p,_,C));return T.push(d),ce(T)}).catch(p=>We(p,8)?p:Promise.reject(p))}function Qe(_,C,T){for(const O of a.list())ke(()=>O(_,C,T))}function _t(_,C,T,O,z){const f=j(_,C);if(f)return f;const d=C===tt,p=Bt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},z)):s.push(_.fullPath,z)),c.value=_,De(_,C,T,d),Ze()}let Ne;function ln(){Ne||(Ne=s.listen((_,C,T)=>{if(!Kn.listening)return;const O=k(_),z=ne(O);if(z){_e(q(z,{replace:!0}),O).catch(En);return}l=O;const f=c.value;Bt&&Pf(Gi(f.fullPath,T.delta),$r()),be(O,f).catch(d=>We(d,12)?d:We(d,2)?(_e(d.to,O).then(p=>{We(p,20)&&!T.delta&&T.type===kn.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(T.delta&&s.go(-T.delta,!1),K(d,O,f))).then(d=>{d=d||_t(O,f,!1),d&&(T.delta&&!We(d,8)?s.go(-T.delta,!1):T.type===kn.pop&&We(d,20)&&s.go(-1,!1)),Qe(O,f,d)}).catch(En)}))}let Mt=dn(),se=dn(),J;function K(_,C,T){Ze(_);const O=se.list();return O.length?O.forEach(z=>z(_,C,T)):console.error(_),Promise.reject(_)}function Ve(){return J&&c.value!==tt?Promise.resolve():new Promise((_,C)=>{Mt.add([_,C])})}function Ze(_){return J||(J=!_,ln(),Mt.list().forEach(([C,T])=>_?T(_):C()),Mt.reset()),_}function De(_,C,T,O){const{scrollBehavior:z}=t;if(!Bt||!z)return Promise.resolve();const f=!T&&Of(Gi(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return oa().then(()=>z(_,C,f)).then(d=>d&&Af(d)).catch(d=>K(d,_,C))}const pe=_=>s.go(_);let xt;const Lt=new Set,Kn={currentRoute:c,listening:!0,addRoute:y,removeRoute:S,hasRoute:U,getRoutes:P,resolve:k,options:t,push:x,replace:te,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Ve,install(_){const C=this;_.component("RouterLink",hd),_.component("RouterView",_d),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(c)}),Bt&&!xt&&c.value===tt&&(xt=!0,x(s.location).catch(z=>{}));const T={};for(const z in tt)T[z]=Ee(()=>c.value[z]);_.provide(Hr,C),_.provide(za,Un(T)),_.provide(Ts,c);const O=_.unmount;Lt.add(_),_.unmount=function(){Lt.delete(_),Lt.size<1&&(l=tt,Ne&&Ne(),Ne=null,c.value=tt,xt=!1,J=!1),O()}}};function ce(_){return _.reduce((C,T)=>C.then(()=>ke(T)),Promise.resolve())}return Kn}function yd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zt(l,c))||s.push(c))}return[n,r,s]}function bd(){return Fe(Hr)}/**
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
 */const qa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ed=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(g=64)),r.push(n[u],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Id;const g=i<<2|a>>4;if(r.push(g),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wd=function(t){const e=qa(t);return Ga.encodeByteArray(e,!0)},Ja=function(t){return wd(t).replace(/\./g,"")},Ya=function(t){try{return Ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rd=()=>Td().__FIREBASE_DEFAULTS__,Cd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ya(t[1]);return e&&JSON.parse(e)},Qs=()=>{try{return Rd()||Cd()||Sd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ad=t=>{var e,n;return(n=(e=Qs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xa=()=>{var t;return(t=Qs())===null||t===void 0?void 0:t.config},Qa=t=>{var e;return(e=Qs())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function kd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Md(){try{return typeof indexedDB=="object"}catch{return!1}}function xd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ld="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ld,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ud(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mt(s,a,r)}}function Ud(t,e){return t.replace(Fd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fd=/\{\$([^}]+)}/g;function Bd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(co(i)&&co(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function co(t){return t!==null&&typeof t=="object"}/**
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
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $d(t,e){const n=new Hd(t,e);return n.subscribe.bind(n)}class Hd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=es),s.error===void 0&&(s.error=es),s.complete===void 0&&(s.complete=es);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function es(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bt="[DEFAULT]";/**
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
 */class Vd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kd(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wd(t){return t===bt?void 0:t}function Kd(t){return t.instantiationMode==="EAGER"}/**
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
 */class zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const qd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Gd=Y.INFO,Jd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Yd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Jd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=Gd,this._logHandler=Yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Xd=(t,e)=>e.some(n=>t instanceof n);let lo,uo;function Qd(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zd(){return uo||(uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ec=new WeakMap,Rs=new WeakMap,tc=new WeakMap,ts=new WeakMap,Zs=new WeakMap;function eh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ec.set(n,t)}).catch(()=>{}),Zs.set(e,t),e}function th(t){if(Rs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rs.set(t,e)}let Cs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nh(t){Cs=t(Cs)}function rh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ns(this),e,...n);return tc.set(r,e.sort?e.sort():[e]),dt(r)}:Zd().includes(t)?function(...e){return t.apply(ns(this),e),dt(ec.get(this))}:function(...e){return dt(t.apply(ns(this),e))}}function sh(t){return typeof t=="function"?rh(t):(t instanceof IDBTransaction&&th(t),Xd(t,Qd())?new Proxy(t,Cs):t)}function dt(t){if(t instanceof IDBRequest)return eh(t);if(ts.has(t))return ts.get(t);const e=sh(t);return e!==t&&(ts.set(t,e),Zs.set(e,t)),e}const ns=t=>Zs.get(t);function ih(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dt(o.result),c.oldVersion,c.newVersion,dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const oh=["get","getKey","getAll","getAllKeys","count"],ah=["put","add","delete","clear"],rs=new Map;function fo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rs.get(e))return rs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ah.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return rs.set(e,i),i}nh(t=>({...t,get:(e,n,r)=>fo(e,n)||t.get(e,n,r),has:(e,n)=>!!fo(e,n)||t.has(e,n)}));/**
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
 */class ch{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ss="@firebase/app",ho="0.9.13";/**
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
 */const Pt=new Za("@firebase/app"),uh="@firebase/app-compat",fh="@firebase/analytics-compat",dh="@firebase/analytics",hh="@firebase/app-check-compat",ph="@firebase/app-check",gh="@firebase/auth",mh="@firebase/auth-compat",_h="@firebase/database",vh="@firebase/database-compat",yh="@firebase/functions",bh="@firebase/functions-compat",Eh="@firebase/installations",Ih="@firebase/installations-compat",wh="@firebase/messaging",Th="@firebase/messaging-compat",Rh="@firebase/performance",Ch="@firebase/performance-compat",Sh="@firebase/remote-config",Ah="@firebase/remote-config-compat",Ph="@firebase/storage",Oh="@firebase/storage-compat",kh="@firebase/firestore",Nh="@firebase/firestore-compat",Dh="firebase",Mh="9.23.0";/**
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
 */const As="[DEFAULT]",xh={[Ss]:"fire-core",[uh]:"fire-core-compat",[dh]:"fire-analytics",[fh]:"fire-analytics-compat",[ph]:"fire-app-check",[hh]:"fire-app-check-compat",[gh]:"fire-auth",[mh]:"fire-auth-compat",[_h]:"fire-rtdb",[vh]:"fire-rtdb-compat",[yh]:"fire-fn",[bh]:"fire-fn-compat",[Eh]:"fire-iid",[Ih]:"fire-iid-compat",[wh]:"fire-fcm",[Th]:"fire-fcm-compat",[Rh]:"fire-perf",[Ch]:"fire-perf-compat",[Sh]:"fire-rc",[Ah]:"fire-rc-compat",[Ph]:"fire-gcs",[Oh]:"fire-gcs-compat",[kh]:"fire-fst",[Nh]:"fire-fst-compat","fire-js":"fire-js",[Dh]:"fire-js-all"};/**
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
 */const Er=new Map,Ps=new Map;function Lh(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Ps.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ps.set(e,t);for(const n of Er.values())Lh(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Uh={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new Fn("app","Firebase",Uh);/**
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
 */class Fh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
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
 */const $n=Mh;function rc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:As,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=Xa()),!n)throw ht.create("no-options");const i=Er.get(s);if(i){if(br(n,i.options)&&br(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new zd(s);for(const c of Ps.values())o.addComponent(c);const a=new Fh(n,r,o);return Er.set(s,a),a}function Bh(t=As){const e=Er.get(t);if(!e&&t===As&&Xa())return rc();if(!e)throw ht.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let s=(r=xh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Nn(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $h="firebase-heartbeat-database",Hh=1,Dn="firebase-heartbeat-store";let ss=null;function sc(){return ss||(ss=ih($h,Hh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}}).catch(t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})})),ss}async function jh(t){try{return await(await sc()).transaction(Dn).objectStore(Dn).get(ic(t))}catch(e){if(e instanceof mt)Pt.warn(e.message);else{const n=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function po(t,e){try{const r=(await sc()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(e,ic(t)),await r.done}catch(n){if(n instanceof mt)Pt.warn(n.message);else{const r=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(r.message)}}}function ic(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Vh=1024,Wh=30*24*60*60*1e3;class Kh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Wh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=go(),{heartbeatsToSend:n,unsentEntries:r}=zh(this._heartbeatsCache.heartbeats),s=Ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function go(){return new Date().toISOString().substring(0,10)}function zh(t,e=Vh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?xd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mo(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Gh(t){Nn(new tn("platform-logger",e=>new ch(e),"PRIVATE")),Nn(new tn("heartbeat",e=>new Kh(e),"PRIVATE")),Kt(Ss,ho,t),Kt(Ss,ho,"esm2017"),Kt("fire-js","")}Gh("");function ei(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function oc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jh=oc,ac=new Fn("auth","Firebase",oc());/**
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
 */const Ir=new Za("@firebase/auth");function Yh(t,...e){Ir.logLevel<=Y.WARN&&Ir.warn(`Auth (${$n}): ${t}`,...e)}function lr(t,...e){Ir.logLevel<=Y.ERROR&&Ir.error(`Auth (${$n}): ${t}`,...e)}/**
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
 */function Ie(t,...e){throw ti(t,...e)}function Be(t,...e){return ti(t,...e)}function cc(t,e,n){const r=Object.assign(Object.assign({},Jh()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function Xh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ie(t,"argument-error"),cc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ti(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ac.create(t,...e)}function F(t,e,...n){if(!t)throw ti(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function Ye(t,e){t||qe(e)}/**
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
 */function Os(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qh(){return _o()==="http:"||_o()==="https:"}function _o(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Zh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qh()||kd()||"connection"in navigator)?navigator.onLine:!0}function ep(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ye(n>e,"Short delay should be less than long delay!"),this.isMobile=Od()||Nd()}get(){return Zh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ni(t,e){Ye(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const np=new Hn(3e4,6e4);function an(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nt(t,e,n,r,s={}){return uc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lc.fetch()(fc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function uc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tp),e);try{const s=new rp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cc(t,u,l);Ie(t,u)}}catch(s){if(s instanceof mt)throw s;Ie(t,"network-request-failed",{message:String(s)})}}async function jn(t,e,n,r,s={}){const i=await Nt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ie(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ni(t.config,s):`${t.config.apiScheme}://${s}`}class rp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),np.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function sp(t,e){return Nt(t,"POST","/v1/accounts:delete",e)}async function ip(t,e){return Nt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function op(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=ri(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wn(is(s.auth_time)),issuedAtTime:wn(is(s.iat)),expirationTime:wn(is(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function is(t){return Number(t)*1e3}function ri(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ya(n);return s?JSON.parse(s):(lr("Failed to decode base64 JWT payload"),null)}catch(s){return lr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ap(t){const e=ri(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&cp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wn(this.lastLoginAt),this.creationTime=wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await nn(t,ip(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dp(i.providerUserInfo):[],a=fp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function up(t){const e=je(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dp(t){return t.map(e=>{var{providerId:n}=e,r=ei(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hp(t,e){const n=await uc(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
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
 */function nt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await nn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return op(this,e)}reload(){return up(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nn(this,sp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:x,isAnonymous:te,providerData:ne,stsTokenManager:_e}=n;F(j&&_e,e,"internal-error");const we=Mn.fromJSON(this.name,_e);F(typeof j=="string",e,"internal-error"),nt(h,e.name),nt(g,e.name),F(typeof x=="boolean",e,"internal-error"),F(typeof te=="boolean",e,"internal-error"),nt(y,e.name),nt(S,e.name),nt(P,e.name),nt(U,e.name),nt(k,e.name),nt(M,e.name);const ke=new At({uid:j,auth:e,email:g,emailVerified:x,displayName:h,isAnonymous:te,photoURL:S,phoneNumber:y,tenantId:P,stsTokenManager:we,createdAt:k,lastLoginAt:M});return ne&&Array.isArray(ne)&&(ke.providerData=ne.map(be=>Object.assign({},be))),U&&(ke._redirectEventId=U),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mn;s.updateFromServerResponse(n);const i=new At({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wr(i),i}}/**
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
 */const vo=new Map;function Ge(t){Ye(t instanceof Function,"Expected a class definition");let e=vo.get(t);return e?(Ye(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vo.set(t,e),e)}/**
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
 */class hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hc.type="NONE";const yo=hc;/**
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
 */function ur(t,e,n){return`firebase:${t}:${e}:${n}`}class zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ur(this.userKey,s.apiKey,i),this.fullPersistenceKey=ur("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zt(Ge(yo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(yo);const o=ur(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=At._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zt(i,e,r))}}/**
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
 */function bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vc(e))return"Blackberry";if(yc(e))return"Webos";if(si(e))return"Safari";if((e.includes("chrome/")||gc(e))&&!e.includes("edge/"))return"Chrome";if(_c(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pc(t=de()){return/firefox\//i.test(t)}function si(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gc(t=de()){return/crios\//i.test(t)}function mc(t=de()){return/iemobile/i.test(t)}function _c(t=de()){return/android/i.test(t)}function vc(t=de()){return/blackberry/i.test(t)}function yc(t=de()){return/webos/i.test(t)}function jr(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pp(t=de()){var e;return jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gp(){return Dd()&&document.documentMode===10}function bc(t=de()){return jr(t)||_c(t)||yc(t)||vc(t)||/windows phone/i.test(t)||mc(t)}function mp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ec(t,e=[]){let n;switch(t){case"Browser":n=bo(de());break;case"Worker":n=`${bo(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$n}/${r}`}async function Ic(t,e){return Nt(t,"GET","/v2/recaptchaConfig",an(t,e))}function Eo(t){return t!==void 0&&t.enterprise!==void 0}class wc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function _p(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_p().appendChild(r)})}function vp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yp="https://www.google.com/recaptcha/enterprise.js?render=",bp="recaptcha-enterprise",Ep="NO_RECAPTCHA";class Rc{constructor(e){this.type=bp,this.auth=Dt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ic(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new wc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Eo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ep)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Eo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tc(yp+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Tr(t,e,n,r=!1){const s=new Rc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class wp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Io(this),this.idTokenSubscription=new Io(this),this.beforeStateQueue=new Ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ac,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ep()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}async initializeRecaptchaConfig(){const e=await Ic(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new wc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Rc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dt(t){return je(t)}class Io{constructor(e){this.auth=e,this.observer=null,this.addObserver=$d(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Tp(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e??{}))return s;Ie(s,"already-initialized")}return n.initialize({options:e})}function Rp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Cp(t,e,n){const r=Dt(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Cc(e),{host:o,port:a}=Sp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ap()}function Cc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sp(t){const e=Cc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wo(o)}}}function wo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ap(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ii{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function Pp(t,e){return Nt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function os(t,e){return jn(t,"POST","/v1/accounts:signInWithPassword",an(t,e))}/**
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
 */async function Op(t,e){return jn(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}async function kp(t,e){return jn(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}/**
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
 */class xn extends ii{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Tr(e,r,"signInWithPassword");return os(e,s)}else return os(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Tr(e,r,"signInWithPassword");return os(e,i)}else return Promise.reject(s)});case"emailLink":return Op(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Pp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qt(t,e){return jn(t,"POST","/v1/accounts:signInWithIdp",an(t,e))}/**
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
 */const Np="http://localhost";class Ot extends ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ei(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ot(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:Np,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
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
 */function Dp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mp(t){const e=gn(mn(t)).link,n=e?gn(mn(e)).deep_link_id:null,r=gn(mn(t)).deep_link_id;return(r?gn(mn(r)).link:null)||r||n||e||t}class oi{constructor(e){var n,r,s,i,o,a;const c=gn(mn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Dp((s=c.mode)!==null&&s!==void 0?s:null);F(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Mp(e);try{return new oi(n)}catch{return null}}}/**
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
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,n){return xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oi.parseLink(n);return F(r,"argument-error"),xn._fromEmailAndCode(e,r.code,r.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends Vn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class at extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return at.credential(n,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class ct extends Vn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
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
 */class lt extends Vn{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
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
 */async function as(t,e){return jn(t,"POST","/v1/accounts:signUp",an(t,e))}/**
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
 */class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),o=To(r);return new kt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=To(r);return new kt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function To(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rr extends mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rr(e,n,r,s)}}function Sc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(t,i,e,r):i})}async function xp(t,e,n=!1){const r=await nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kt._forOperation(t,"link",r)}/**
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
 */async function Lp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await nn(t,Sc(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=ri(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),kt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),i}}/**
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
 */async function Ac(t,e,n=!1){const r="signIn",s=await Sc(t,r,e),i=await kt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Up(t,e){return Ac(Dt(t),e)}async function Rm(t,e,n){var r;const s=Dt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Tr(s,i,"signUpPassword");o=as(s,l)}else o=as(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Tr(s,i,"signUpPassword");return as(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await kt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Cm(t,e,n){return Up(je(t),cn.credential(e,n))}/**
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
 */async function Fp(t,e){return Nt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Sm(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await nn(r,Fp(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Bp(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function $p(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function Pc(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function Hp(t){return je(t).signOut()}const Cr="__sak";/**
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
 */class Oc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cr,"1"),this.storage.removeItem(Cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jp(){const t=de();return si(t)||jr(t)}const Vp=1e3,Wp=10;class kc extends Oc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jp()&&mp(),this.fallbackToPolling=bc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kc.type="LOCAL";const Kp=kc;/**
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
 */class Nc extends Oc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nc.type="SESSION";const Dc=Nc;/**
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
 */function zp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
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
 */function ci(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ci("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function Gp(t){$e().location.href=t}/**
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
 */function Mc(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Jp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xp(){return Mc()?self:null}/**
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
 */const xc="firebaseLocalStorageDb",Qp=1,Sr="firebaseLocalStorage",Lc="fbase_key";class Wn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wr(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function Zp(){const t=indexedDB.deleteDatabase(xc);return new Wn(t).toPromise()}function ks(){const t=indexedDB.open(xc,Qp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sr,{keyPath:Lc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sr)?e(r):(r.close(),await Zp(),e(await ks()))})})}async function Ro(t,e,n){const r=Wr(t,!0).put({[Lc]:e,value:n});return new Wn(r).toPromise()}async function eg(t,e){const n=Wr(t,!1).get(e),r=await new Wn(n).toPromise();return r===void 0?null:r.value}function Co(t,e){const n=Wr(t,!0).delete(e);return new Wn(n).toPromise()}const tg=800,ng=3;class Uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ks(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ng)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(Xp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jp(),!this.activeServiceWorker)return;this.sender=new qp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ks();return await Ro(e,Cr,"1"),await Co(e,Cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ro(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wr(s,!1).getAll();return new Wn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uc.type="LOCAL";const rg=Uc;new Hn(3e4,6e4);/**
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
 */function Fc(t,e){return e?Ge(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class li extends ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sg(t){return Ac(t.auth,new li(t),t.bypassAuthState)}function ig(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Lp(n,new li(t),t.bypassAuthState)}async function og(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),xp(n,new li(t),t.bypassAuthState)}/**
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
 */class Bc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sg;case"linkViaPopup":case"linkViaRedirect":return og;case"reauthViaPopup":case"reauthViaRedirect":return ig;default:Ie(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ag=new Hn(2e3,1e4);async function Am(t,e,n){const r=Dt(t);Xh(t,e,ai);const s=Fc(r,n);return new Tt(r,"signInViaPopup",e,s).executeNotNull()}class Tt extends Bc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ag.get())};e()}}Tt.currentPopupAction=null;/**
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
 */const cg="pendingRedirect",fr=new Map;class lg extends Bc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fr.get(this.auth._key());if(!e){try{const r=await ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fr.set(this.auth._key(),e)}return this.bypassAuthState||fr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ug(t,e){const n=hg(e),r=dg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fg(t,e){fr.set(t._key(),e)}function dg(t){return Ge(t._redirectPersistence)}function hg(t){return ur(cg,t.config.apiKey,t.name)}async function pg(t,e,n=!1){const r=Dt(t),s=Fc(r,e),o=await new lg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gg=10*60*1e3;class mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$c(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(So(e))}saveEventToCache(e){this.cachedEventUids.add(So(e)),this.lastProcessedEventTime=Date.now()}}function So(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $c({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $c(t);default:return!1}}/**
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
 */async function vg(t,e={}){return Nt(t,"GET","/v1/projects",e)}/**
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
 */const yg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bg=/^https?/;async function Eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vg(t);for(const n of e)try{if(Ig(n))return}catch{}Ie(t,"unauthorized-domain")}function Ig(t){const e=Os(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bg.test(n))return!1;if(yg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wg=new Hn(3e4,6e4);function Ao(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tg(t){return new Promise((e,n)=>{var r,s,i;function o(){Ao(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ao(),n(Be(t,"network-request-failed"))},timeout:wg.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const a=vp("iframefcb");return $e()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},Tc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw dr=null,e})}let dr=null;function Rg(t){return dr=dr||Tg(t),dr}/**
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
 */const Cg=new Hn(5e3,15e3),Sg="__/auth/iframe",Ag="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kg(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ni(e,Ag):`https://${t.config.authDomain}/${Sg}`,r={apiKey:e.apiKey,appName:t.name,v:$n},s=Og.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function Ng(t){const e=await Rg(t),n=$e().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:kg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=$e().setTimeout(()=>{i(o)},Cg.get());function c(){$e().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mg=500,xg=600,Lg="_blank",Ug="http://localhost";class Po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fg(t,e,n,r=Mg,s=xg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Dg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=gc(l)?Lg:n),pc(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(pp(l)&&a!=="_self")return Bg(e||"",a),new Po(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Po(h)}function Bg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $g="__/auth/handler",Hg="emulator/auth/handler",jg=encodeURIComponent("fac");async function Oo(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$n,eventId:s};if(e instanceof ai){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Vn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${jg}=${encodeURIComponent(c)}`:"";return`${Vg(t)}?${Bn(a).slice(1)}${l}`}function Vg({config:t}){return t.emulator?ni(t,Hg):`https://${t.authDomain}/${$g}`}/**
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
 */const cs="webStorageSupport";class Wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dc,this._completeRedirectFn=pg,this._overrideRedirectResult=fg}async _openPopup(e,n,r,s){var i;Ye((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Oo(e,n,r,Os(),s);return Fg(e,o,ci())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Oo(e,n,r,Os(),s);return Gp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ye(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ng(e),r=new mg(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cs];o!==void 0&&n(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bc()||si()||jr()}}const Kg=Wg;var ko="@firebase/auth",No="0.23.2";/**
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
 */class zg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gg(t){Nn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(t)},l=new wp(r,s,i,c);return Rp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new tn("auth-internal",e=>{const n=Dt(e.getProvider("auth").getImmediate());return(r=>new zg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(ko,No,qg(t)),Kt(ko,No,"esm2017")}/**
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
 */const Jg=5*60,Yg=Qa("authIdTokenMaxAge")||Jg;let Do=null;const Xg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yg)return;const s=n==null?void 0:n.token;Do!==s&&(Do=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hc(t=Bh()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tp(t,{popupRedirectResolver:Kg,persistence:[rg,Kp,Dc]}),r=Qa("authTokenSyncURL");if(r){const i=Xg(r);$p(n,i,()=>i(n.currentUser)),Bp(n,o=>i(o))}const s=Ad("auth");return s&&Cp(n,`http://${s}`),n}Gg("Browser");const Qg=[{title:"Home",url:"/"},{title:"List",url:"/list"}];const jc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Zg={class:"header"},em={class:"header__container container"},tm={class:"header__nav"},nm={class:"header__auth header-auth"},rm=["onClick"],sm={__name:"TheHeader",setup(t){const e=bd(),n=na(!1);let r;ma(()=>{r=Hc(),Pc(r,i=>{n.value=!!i})});const s=()=>{Hp(r).then(()=>{e.push("/"),console.log("Всё, вы не авторизованы")})};return(i,o)=>{const a=ya("RouterLink");return ze(),or("header",Zg,[Wt("div",em,[Wt("nav",tm,[(ze(!0),or(ye,null,du(Ct(Qg),c=>(ze(),bn(a,{to:c.url,class:"header__nav-item"},{default:nr(()=>[cr(sl(c.title),1)]),_:2},1032,["to"]))),256))]),Wt("div",nm,[n.value?Gr("",!0):(ze(),bn(a,{key:0,class:"header-auth__link",to:"/register"},{default:nr(()=>[cr(" Register ")]),_:1})),n.value?Gr("",!0):(ze(),bn(a,{key:1,class:"header-auth__link",to:"/sing-in"},{default:nr(()=>[cr(" Sing In ")]),_:1})),n.value?(ze(),or("a",{key:2,class:"header-auth__link link",onClick:df(s,["prevent"])}," Выйти ",8,rm)):Gr("",!0)])])])}}},im=jc(sm,[["__scopeId","data-v-b3c1a6dd"]]),om={};function am(t,e){return null}const cm=jc(om,[["render",am]]),lm={class:"main"},um={__name:"App",setup(t){return(e,n)=>{const r=ya("router-view");return ze(),or(ye,null,[ie(im),Wt("main",lm,[ie(r)]),ie(cm)],64)}}},fm="modulepreload",dm=function(t){return"/vue3-firebase-auth/"+t},Mo={},Zn=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=dm(i),i in Mo)return;Mo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":fm,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Vc=vd({history:Mf("/vue3-firebase-auth/"),routes:[{path:"/",component:()=>Zn(()=>import("./Home-8bcc4e28.js"),["assets/Home-8bcc4e28.js","assets/Section-74d785ce.js","assets/Section-fe41de33.css"])},{path:"/register",component:()=>Zn(()=>import("./Register-c32bf246.js"),["assets/Register-c32bf246.js","assets/Section-74d785ce.js","assets/Section-fe41de33.css","assets/Input-1fa9e89c.js","assets/Input-1ba5767f.css","assets/Register-97cb3ef4.css"]),meta:{requiresAuth:!1}},{path:"/sing-in",component:()=>Zn(()=>import("./SingIn-e9ab7cc6.js"),["assets/SingIn-e9ab7cc6.js","assets/Input-1fa9e89c.js","assets/Input-1ba5767f.css","assets/Section-74d785ce.js","assets/Section-fe41de33.css","assets/SingIn-358131d8.css"]),meta:{requiresAuth:!1}},{path:"/list",component:()=>Zn(()=>import("./List-e69955b8.js"),["assets/List-e69955b8.js","assets/Section-74d785ce.js","assets/Section-fe41de33.css","assets/List-94c561f8.css"]),meta:{requiresAuth:!0}}]}),hm=()=>new Promise((t,e)=>{const n=Pc(Hc(),r=>{n(),t(r)},e)});Vc.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=await hm();r&&!s?n("/"):n()});const pm={apiKey:"AIzaSyATrfY9lvCkHSanuu9PYLC4--hZKC5q0ME",authDomain:"kylekrylov-e6e6f.firebaseapp.com",projectId:"kylekrylov-e6e6f",storageBucket:"kylekrylov-e6e6f.appspot.com",messagingSenderId:"977235481792",appId:"1:977235481792:web:7c750923e77ef5d290c925"};var gm="firebase",mm="9.23.0";/**
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
 */Kt(gm,mm,"app");rc(pm);const Wc=gf(um);Wc.use(Vc);Wc.mount("#app");export{Us as A,wm as B,bm as C,ye as F,at as G,jc as _,Pc as a,ze as b,bn as c,Wt as d,ie as e,Rm as f,Hc as g,Sm as h,vm as i,Cm as j,or as k,Em as l,Ee as m,rr as n,ma as o,_m as p,df as q,na as r,Am as s,sl as t,bd as u,ym as v,nr as w,Im as x,Tm as y,du as z};
