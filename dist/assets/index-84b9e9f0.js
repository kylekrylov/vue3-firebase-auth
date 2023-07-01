(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Vs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},qt=[],xe=()=>{},ml=()=>!1,_l=/^on[^a-z]/,Mr=t=>_l.test(t),Ws=t=>t.startsWith("onUpdate:"),ue=Object.assign,Ks=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vl=Object.prototype.hasOwnProperty,K=(t,e)=>vl.call(t,e),F=Array.isArray,Gt=t=>Wn(t)==="[object Map]",Lr=t=>Wn(t)==="[object Set]",Pi=t=>Wn(t)==="[object Date]",V=t=>typeof t=="function",ce=t=>typeof t=="string",Nn=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",sa=t=>re(t)&&V(t.then)&&V(t.catch),ia=Object.prototype.toString,Wn=t=>ia.call(t),yl=t=>Wn(t).slice(8,-1),oa=t=>Wn(t)==="[object Object]",zs=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ar=Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bl=/-(\w)/g,qe=xr(t=>t.replace(bl,(e,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,hn=xr(t=>t.replace(El,"-$1").toLowerCase()),Ur=xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qr=xr(t=>t?`on${Ur(t)}`:""),Dn=(t,e)=>!Object.is(t,e),cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vs=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Il=t=>{const e=ce(t)?Number(t):NaN;return isNaN(e)?t:e};let ki;const ys=()=>ki||(ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?Rl(r):qs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(re(t))return t}}const wl=/;(?![^(]*\))/g,Tl=/:([^]+)/,Cl=/\/\*[^]*?\*\//g;function Rl(t){const e={};return t.replace(Cl,"").split(wl).forEach(n=>{if(n){const r=n.split(Tl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gs(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Gs(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sl=Vs(Al);function aa(t){return!!t||t===""}function Pl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=sn(t[r],e[r]);return n}function sn(t,e){if(t===e)return!0;let n=Pi(t),r=Pi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Nn(t),r=Nn(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?Pl(t,e):!1;if(n=re(t),r=re(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!sn(t[o],e[o]))return!1}}return String(t)===String(e)}function ca(t,e){return t.findIndex(n=>sn(n,e))}const kl=t=>ce(t)?t:t==null?"":F(t)||re(t)&&(t.toString===ia||!V(t.toString))?JSON.stringify(t,la,2):String(t),la=(t,e)=>e&&e.__v_isRef?la(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Lr(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!F(e)&&!oa(e)?String(e):e;let De;class Ol{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nl(t,e=De){e&&e.active&&e.effects.push(t)}function Dl(){return De}const Js=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ua=t=>(t.w&Et)>0,fa=t=>(t.n&Et)>0,Ml=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Et},Ll=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ua(s)&&!fa(s)?s.delete(t):e[n++]=s,s.w&=~Et,s.n&=~Et}e.length=n}},bs=new WeakMap;let In=0,Et=1;const Es=30;let Me;const Mt=Symbol(""),Is=Symbol("");class Ys{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nl(this,r)}run(){if(!this.active)return this.fn();let e=Me,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Me,Me=this,_t=!0,Et=1<<++In,In<=Es?Ml(this):Oi(this),this.fn()}finally{In<=Es&&Ll(this),Et=1<<--In,Me=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(Oi(this),this.onStop&&this.onStop(),this.active=!1)}}function Oi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const da=[];function pn(){da.push(_t),_t=!1}function gn(){const t=da.pop();_t=t===void 0?!0:t}function Ce(t,e,n){if(_t&&Me){let r=bs.get(t);r||bs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Js()),ha(s)}}function ha(t,e){let n=!1;In<=Es?fa(t)||(t.n|=Et,n=!ua(t)):n=!t.has(Me),n&&(t.add(Me),Me.deps.push(t))}function tt(t,e,n,r,s,i){const o=bs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?zs(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),Gt(t)&&a.push(o.get(Is)));break;case"delete":F(t)||(a.push(o.get(Mt)),Gt(t)&&a.push(o.get(Is)));break;case"set":Gt(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&ws(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ws(Js(c))}}function ws(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Ni(r);for(const r of n)r.computed||Ni(r)}function Ni(t,e){(t!==Me||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const xl=Vs("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn)),Ul=Xs(),Fl=Xs(!1,!0),Bl=Xs(!0),Di=$l();function $l(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=z(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const r=z(this)[e].apply(this,n);return gn(),r}}),t}function Hl(t){const e=z(this);return Ce(e,"has",t),e.hasOwnProperty(t)}function Xs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ru:ya:e?va:_a).get(r))return r;const o=F(r);if(!t){if(o&&K(Di,s))return Reflect.get(Di,s,i);if(s==="hasOwnProperty")return Hl}const a=Reflect.get(r,s,i);return(Nn(s)?pa.has(s):xl(s))||(t||Ce(r,"get",s),e)?a:ve(a)?o&&zs(s)?a:a.value:re(a)?t?ba(a):Kn(a):a}}const jl=ga(),Vl=ga(!0);function ga(t=!1){return function(n,r,s,i){let o=n[r];if(on(o)&&ve(o)&&!ve(s))return!1;if(!t&&(!br(s)&&!on(s)&&(o=z(o),s=z(s)),!F(n)&&ve(o)&&!ve(s)))return o.value=s,!0;const a=F(n)&&zs(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===z(i)&&(a?Dn(s,o)&&tt(n,"set",r,s):tt(n,"add",r,s)),c}}function Wl(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&tt(t,"delete",e,void 0),r}function Kl(t,e){const n=Reflect.has(t,e);return(!Nn(e)||!pa.has(e))&&Ce(t,"has",e),n}function zl(t){return Ce(t,"iterate",F(t)?"length":Mt),Reflect.ownKeys(t)}const ma={get:Ul,set:jl,deleteProperty:Wl,has:Kl,ownKeys:zl},ql={get:Bl,set(t,e){return!0},deleteProperty(t,e){return!0}},Gl=ue({},ma,{get:Fl,set:Vl}),Qs=t=>t,Fr=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,r=!1){t=t.__v_raw;const s=z(t),i=z(e);n||(e!==i&&Ce(s,"get",e),Ce(s,"get",i));const{has:o}=Fr(s),a=r?Qs:n?ti:Mn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,r=z(n),s=z(t);return e||(t!==s&&Ce(r,"has",t),Ce(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&Ce(z(t),"iterate",Mt),Reflect.get(t,"size",t)}function Mi(t){t=z(t);const e=z(this);return Fr(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Li(t,e){e=z(e);const n=z(this),{has:r,get:s}=Fr(n);let i=r.call(n,t);i||(t=z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Dn(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function xi(t){const e=z(this),{has:n,get:r}=Fr(e);let s=n.call(e,t);s||(t=z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tt(e,"delete",t,void 0),i}function Ui(){const t=z(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=z(o),c=e?Qs:t?ti:Mn;return!t&&Ce(a,"iterate",Mt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=Gt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Qs:e?ti:Mn;return!e&&Ce(i,"iterate",c?Is:Mt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return t==="delete"?!1:this}}function Jl(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:Mi,set:Li,delete:xi,clear:Ui,forEach:rr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add:Mi,set:Li,delete:xi,clear:Ui,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[Yl,Xl,Ql,Zl]=Jl();function Zs(t,e){const n=e?t?Zl:Ql:t?Xl:Yl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const eu={get:Zs(!1,!1)},tu={get:Zs(!1,!0)},nu={get:Zs(!0,!1)},_a=new WeakMap,va=new WeakMap,ya=new WeakMap,ru=new WeakMap;function su(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iu(t){return t.__v_skip||!Object.isExtensible(t)?0:su(yl(t))}function Kn(t){return on(t)?t:ei(t,!1,ma,eu,_a)}function ou(t){return ei(t,!1,Gl,tu,va)}function ba(t){return ei(t,!0,ql,nu,ya)}function ei(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=iu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jt(t){return on(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function on(t){return!!(t&&t.__v_isReadonly)}function br(t){return!!(t&&t.__v_isShallow)}function Ea(t){return Jt(t)||on(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Ia(t){return yr(t,"__v_skip",!0),t}const Mn=t=>re(t)?Kn(t):t,ti=t=>re(t)?ba(t):t;function wa(t){_t&&Me&&(t=z(t),ha(t.dep||(t.dep=Js())))}function Ta(t,e){t=z(t);const n=t.dep;n&&ws(n)}function ve(t){return!!(t&&t.__v_isRef===!0)}function Ca(t){return Ra(t,!1)}function au(t){return Ra(t,!0)}function Ra(t,e){return ve(t)?t:new cu(t,e)}class cu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:Mn(e)}get value(){return wa(this),this._value}set value(e){const n=this.__v_isShallow||br(e)||on(e);e=n?e:z(e),Dn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mn(e),Ta(this))}}function Yt(t){return ve(t)?t.value:t}const lu={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Aa(t){return Jt(t)?t:new Proxy(t,lu)}class uu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ys(e,()=>{this._dirty||(this._dirty=!0,Ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=z(this);return wa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fu(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=xe):(r=t.get,s=t.set),new uu(r,s,i||!s,n)}function vt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Br(i,e,n)}return s}function Pe(t,e,n,r){if(V(t)){const i=vt(t,e,n,r);return i&&sa(i)&&i.catch(o=>{Br(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Br(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vt(c,null,10,[t,o,a]);return}}du(t,n,s,r)}function du(t,e,n,r=!0){console.error(t)}let Ln=!1,Ts=!1;const _e=[];let Ve=0;const Xt=[];let Qe=null,Pt=0;const Sa=Promise.resolve();let ni=null;function Pa(t){const e=ni||Sa;return t?e.then(this?t.bind(this):t):e}function hu(t){let e=Ve+1,n=_e.length;for(;e<n;){const r=e+n>>>1;xn(_e[r])<t?e=r+1:n=r}return e}function ri(t){(!_e.length||!_e.includes(t,Ln&&t.allowRecurse?Ve+1:Ve))&&(t.id==null?_e.push(t):_e.splice(hu(t.id),0,t),ka())}function ka(){!Ln&&!Ts&&(Ts=!0,ni=Sa.then(Na))}function pu(t){const e=_e.indexOf(t);e>Ve&&_e.splice(e,1)}function gu(t){F(t)?Xt.push(...t):(!Qe||!Qe.includes(t,t.allowRecurse?Pt+1:Pt))&&Xt.push(t),ka()}function Fi(t,e=Ln?Ve+1:0){for(;e<_e.length;e++){const n=_e[e];n&&n.pre&&(_e.splice(e,1),e--,n())}}function Oa(t){if(Xt.length){const e=[...new Set(Xt)];if(Xt.length=0,Qe){Qe.push(...e);return}for(Qe=e,Qe.sort((n,r)=>xn(n)-xn(r)),Pt=0;Pt<Qe.length;Pt++)Qe[Pt]();Qe=null,Pt=0}}const xn=t=>t.id==null?1/0:t.id,mu=(t,e)=>{const n=xn(t)-xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Na(t){Ts=!1,Ln=!0,_e.sort(mu);const e=xe;try{for(Ve=0;Ve<_e.length;Ve++){const n=_e[Ve];n&&n.active!==!1&&vt(n,null,14)}}finally{Ve=0,_e.length=0,Oa(),Ln=!1,ni=null,(_e.length||Xt.length)&&Na()}}function _u(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ie;p&&(s=n.map(_=>ce(_)?_.trim():_)),h&&(s=n.map(vs))}let a,c=r[a=Qr(e)]||r[a=Qr(qe(e))];!c&&i&&(c=r[a=Qr(hn(e))]),c&&Pe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,s)}}function Da(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const u=Da(l,e,!0);u&&(a=!0,ue(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ue(o,i),re(t)&&r.set(t,o),o)}function $r(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,hn(e))||K(t,e))}let ge=null,Hr=null;function Er(t){const e=ge;return ge=t,Hr=t&&t.type.__scopeId||null,e}function Ym(t){Hr=t}function Xm(){Hr=null}function Qt(t,e=ge,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yi(-1);const i=Er(e);let o;try{o=t(...s)}finally{Er(i),r._d&&Yi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:_,ctx:T,inheritAttrs:R}=t;let L,P;const N=Er(t);try{if(n.shapeFlag&4){const k=s||r;L=je(u.call(k,k,h,i,_,p,T)),P=c}else{const k=e;L=je(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),P=e.props?c:vu(c)}}catch(k){Sn.length=0,Br(k,t,1),L=he(ke)}let H=L;if(P&&R!==!1){const k=Object.keys(P),{shapeFlag:Y}=H;k.length&&Y&7&&(o&&k.some(Ws)&&(P=yu(P,o)),H=It(H,P))}return n.dirs&&(H=It(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),L=H,Er(N),L}const vu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},yu=(t,e)=>{const n={};for(const r in t)(!Ws(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!$r(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bi(r,o,l):!0:!!o;return!1}function Bi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$r(n,i))return!0}return!1}function Eu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Iu=t=>t.__isSuspense;function wu(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):gu(t)}const ir={};function lr(t,e,n){return Ma(t,e,n)}function Ma(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ie){var a;const c=Dl()===((a=pe)==null?void 0:a.scope)?pe:null;let l,u=!1,h=!1;if(ve(t)?(l=()=>t.value,u=br(t)):Jt(t)?(l=()=>t,r=!0):F(t)?(h=!0,u=t.some(k=>Jt(k)||br(k)),l=()=>t.map(k=>{if(ve(k))return k.value;if(Jt(k))return Nt(k);if(V(k))return vt(k,c,2)})):V(t)?e?l=()=>vt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Pe(t,c,3,[_])}:l=xe,e&&r){const k=l;l=()=>Nt(k())}let p,_=k=>{p=N.onStop=()=>{vt(k,c,4)}},T;if(Fn)if(_=xe,e?n&&Pe(e,c,3,[l(),h?[]:void 0,_]):l(),s==="sync"){const k=yf();T=k.__watcherHandles||(k.__watcherHandles=[])}else return xe;let R=h?new Array(t.length).fill(ir):ir;const L=()=>{if(N.active)if(e){const k=N.run();(r||u||(h?k.some((Y,oe)=>Dn(Y,R[oe])):Dn(k,R)))&&(p&&p(),Pe(e,c,3,[k,R===ir?void 0:h&&R[0]===ir?[]:R,_]),R=k)}else N.run()};L.allowRecurse=!!e;let P;s==="sync"?P=L:s==="post"?P=()=>we(L,c&&c.suspense):(L.pre=!0,c&&(L.id=c.uid),P=()=>ri(L));const N=new Ys(l,P);e?n?L():R=N.run():s==="post"?we(N.run.bind(N),c&&c.suspense):N.run();const H=()=>{N.stop(),c&&c.scope&&Ks(c.scope.effects,N)};return T&&T.push(H),H}function Tu(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?La(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=pe;an(this);const a=Ma(s,i.bind(r),n);return o?an(o):Lt(),a}function La(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nt(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ve(t))Nt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Nt(t[n],e);else if(Lr(t)||Gt(t))t.forEach(n=>{Nt(n,e)});else if(oa(t))for(const n in t)Nt(t[n],e);return t}function Qm(t,e){const n=ge;if(n===null)return t;const r=zr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ie]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Tt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pn(),Pe(c,n,8,[t.el,a,t,e]),gn())}}function Cu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return si(()=>{t.isMounted=!0}),Ha(()=>{t.isUnmounting=!0}),t}const Se=[Function,Array],xa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Se,onEnter:Se,onAfterEnter:Se,onEnterCancelled:Se,onBeforeLeave:Se,onLeave:Se,onAfterLeave:Se,onLeaveCancelled:Se,onBeforeAppear:Se,onAppear:Se,onAfterAppear:Se,onAppearCancelled:Se},Ru={name:"BaseTransition",props:xa,setup(t,{slots:e}){const n=ff(),r=Cu();let s;return()=>{const i=e.default&&Fa(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const R of i)if(R.type!==ke){o=R;break}}const a=z(t),{mode:c}=a;if(r.isLeaving)return es(o);const l=$i(o);if(!l)return es(o);const u=Cs(l,a,r,n);Rs(l,u);const h=n.subTree,p=h&&$i(h);let _=!1;const{getTransitionKey:T}=l.type;if(T){const R=T();s===void 0?s=R:R!==s&&(s=R,_=!0)}if(p&&p.type!==ke&&(!kt(l,p)||_)){const R=Cs(p,a,r,n);if(Rs(p,R),c==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},es(o);c==="in-out"&&l.type!==ke&&(R.delayLeave=(L,P,N)=>{const H=Ua(r,p);H[String(p.key)]=p,L._leaveCb=()=>{P(),L._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},Au=Ru;function Ua(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Cs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:R,onAppear:L,onAfterAppear:P,onAppearCancelled:N}=e,H=String(t.key),k=Ua(n,t),Y=(j,X)=>{j&&Pe(j,r,9,X)},oe=(j,X)=>{const q=X[1];Y(j,X),F(j)?j.every(de=>de.length<=1)&&q():j.length<=1&&q()},fe={mode:i,persisted:o,beforeEnter(j){let X=a;if(!n.isMounted)if(s)X=R||a;else return;j._leaveCb&&j._leaveCb(!0);const q=k[H];q&&kt(t,q)&&q.el._leaveCb&&q.el._leaveCb(),Y(X,[j])},enter(j){let X=c,q=l,de=u;if(!n.isMounted)if(s)X=L||c,q=P||l,de=N||u;else return;let D=!1;const Q=j._enterCb=be=>{D||(D=!0,be?Y(de,[j]):Y(q,[j]),fe.delayedLeave&&fe.delayedLeave(),j._enterCb=void 0)};X?oe(X,[j,Q]):Q()},leave(j,X){const q=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return X();Y(h,[j]);let de=!1;const D=j._leaveCb=Q=>{de||(de=!0,X(),Q?Y(T,[j]):Y(_,[j]),j._leaveCb=void 0,k[q]===t&&delete k[q])};k[q]=t,p?oe(p,[j,D]):D()},clone(j){return Cs(j,e,n,r)}};return fe}function es(t){if(jr(t))return t=It(t),t.children=null,t}function $i(t){return jr(t)?t.children?t.children[0]:void 0:t}function Rs(t,e){t.shapeFlag&6&&t.component?Rs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fa(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Te?(o.patchFlag&128&&s++,r=r.concat(Fa(o.children,e,a))):(e||o.type!==ke)&&r.push(a!=null?It(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ba(t,e){return V(t)?(()=>ue({name:t.name},e,{setup:t}))():t}const Rn=t=>!!t.type.__asyncLoader,jr=t=>t.type.__isKeepAlive;function Su(t,e){$a(t,"a",e)}function Pu(t,e){$a(t,"da",e)}function $a(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jr(s.parent.vnode)&&ku(r,e,n,s),s=s.parent}}function ku(t,e,n,r){const s=Vr(e,t,r,!0);ja(()=>{Ks(r[e],s)},n)}function Vr(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pn(),an(n);const a=Pe(e,n,t,o);return Lt(),gn(),a});return r?s.unshift(i):s.push(i),i}}const rt=t=>(e,n=pe)=>(!Fn||t==="sp")&&Vr(t,(...r)=>e(...r),n),Ou=rt("bm"),si=rt("m"),Nu=rt("bu"),Du=rt("u"),Ha=rt("bum"),ja=rt("um"),Mu=rt("sp"),Lu=rt("rtg"),xu=rt("rtc");function Uu(t,e=pe){Vr("ec",t,e)}const ii="components";function Va(t,e){return Ka(ii,t,!0,e)||t}const Wa=Symbol.for("v-ndc");function Fu(t){return ce(t)?Ka(ii,t,!1)||t:t||Wa}function Ka(t,e,n=!0,r=!1){const s=ge||pe;if(s){const i=s.type;if(t===ii){const a=mf(i,!1);if(a&&(a===e||a===qe(e)||a===Ur(qe(e))))return i}const o=Hi(s[t]||i[t],e)||Hi(s.appContext[t],e);return!o&&r?i:o}}function Hi(t,e){return t&&(t[e]||t[qe(e)]||t[Ur(qe(e))])}function Bu(t,e,n,r){let s;const i=n&&n[r];if(F(t)||ce(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(re(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Zm(t,e,n={},r,s){if(ge.isCE||ge.parent&&Rn(ge.parent)&&ge.parent.isCE)return e!=="default"&&(n.name=e),he("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),He();const o=i&&za(i(n)),a=Zt(Te,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function za(t){return t.some(e=>Tr(e)?!(e.type===ke||e.type===Te&&!za(e.children)):!0)?t:null}const As=t=>t?rc(t)?zr(t)||t.proxy:As(t.parent):null,An=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>As(t.parent),$root:t=>As(t.root),$emit:t=>t.emit,$options:t=>oi(t),$forceUpdate:t=>t.f||(t.f=()=>ri(t.update)),$nextTick:t=>t.n||(t.n=Pa.bind(t.proxy)),$watch:t=>Tu.bind(t)}),ts=(t,e)=>t!==ie&&!t.__isScriptSetup&&K(t,e),$u={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ts(r,e))return o[e]=1,r[e];if(s!==ie&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==ie&&K(n,e))return o[e]=4,n[e];Ss&&(o[e]=0)}}const u=An[e];let h,p;if(u)return e==="$attrs"&&Ce(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ts(s,e)?(s[e]=n,!0):r!==ie&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&K(t,o)||ts(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(An,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ji(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ss=!0;function Hu(t){const e=oi(t),n=t.proxy,r=t.ctx;Ss=!1,e.beforeCreate&&Vi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:_,updated:T,activated:R,deactivated:L,beforeDestroy:P,beforeUnmount:N,destroyed:H,unmounted:k,render:Y,renderTracked:oe,renderTriggered:fe,errorCaptured:j,serverPrefetch:X,expose:q,inheritAttrs:de,components:D,directives:Q,filters:be}=e;if(l&&ju(l,r,null),o)for(const te in o){const G=o[te];V(G)&&(r[te]=G.bind(n))}if(s){const te=s.call(n,n);re(te)&&(t.data=Kn(te))}if(Ss=!0,i)for(const te in i){const G=i[te],Ye=V(G)?G.bind(n,n):V(G.get)?G.get.bind(n,n):xe,st=!V(G)&&V(G.set)?G.set.bind(n):xe,Fe=Ae({get:Ye,set:st});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Ie=>Fe.value=Ie})}if(a)for(const te in a)qa(a[te],r,n,te);if(c){const te=V(c)?c.call(n):c;Reflect.ownKeys(te).forEach(G=>{ur(G,te[G])})}u&&Vi(u,t,"c");function ae(te,G){F(G)?G.forEach(Ye=>te(Ye.bind(n))):G&&te(G.bind(n))}if(ae(Ou,h),ae(si,p),ae(Nu,_),ae(Du,T),ae(Su,R),ae(Pu,L),ae(Uu,j),ae(xu,oe),ae(Lu,fe),ae(Ha,N),ae(ja,k),ae(Mu,X),F(q))if(q.length){const te=t.exposed||(t.exposed={});q.forEach(G=>{Object.defineProperty(te,G,{get:()=>n[G],set:Ye=>n[G]=Ye})})}else t.exposed||(t.exposed={});Y&&t.render===xe&&(t.render=Y),de!=null&&(t.inheritAttrs=de),D&&(t.components=D),Q&&(t.directives=Q)}function ju(t,e,n=xe){F(t)&&(t=Ps(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vi(t,e,n){Pe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qa(t,e,n,r){const s=r.includes(".")?La(n,r):()=>n[r];if(ce(t)){const i=e[t];V(i)&&lr(s,i)}else if(V(t))lr(s,t.bind(n));else if(re(t))if(F(t))t.forEach(i=>qa(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&lr(s,i,t)}}function oi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ir(c,l,o,!0)),Ir(c,e,o)),re(e)&&i.set(e,c),c}function Ir(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ir(t,i,n,!0),s&&s.forEach(o=>Ir(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Vu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vu={data:Wi,props:Ki,emits:Ki,methods:wn,computed:wn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:wn,directives:wn,watch:Ku,provide:Wi,inject:Wu};function Wi(t,e){return e?t?function(){return ue(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Wu(t,e){return wn(Ps(t),Ps(e))}function Ps(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?ue(Object.create(null),t,e):e}function Ki(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ue(Object.create(null),ji(t),ji(e??{})):e}function Ku(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=Ee(t[r],e[r]);return n}function Ga(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zu=0;function qu(t,e){return function(r,s=null){V(r)||(r=ue({},r)),s!=null&&!re(s)&&(s=null);const i=Ga(),o=new Set;let a=!1;const c=i.app={_uid:zu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=he(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,zr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){wr=c;try{return l()}finally{wr=null}}};return c}}let wr=null;function ur(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=pe||ge;if(r||wr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}function Gu(t,e,n,r=!1){const s={},i={};yr(i,Kr,1),t.propsDefaults=Object.create(null),Ja(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ou(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ju(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if($r(t.emitsOptions,p))continue;const _=e[p];if(c)if(K(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const T=qe(p);s[T]=ks(c,a,T,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Ja(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!K(e,h)&&((u=hn(h))===h||!K(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ks(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!K(e,h))&&(delete i[h],l=!0)}l&&tt(t,"set","$attrs")}function Ja(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ar(c))continue;const l=e[c];let u;s&&K(s,u=qe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:$r(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=z(n),l=a||ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ks(s,c,h,l[h],t,!K(l,h))}}return o}function ks(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(an(s),r=l[n]=c.call(null,e),Lt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hn(n))&&(r=!0))}return r}function Ya(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const u=h=>{c=!0;const[p,_]=Ya(h,e,!0);ue(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return re(t)&&r.set(t,qt),qt;if(F(i))for(let u=0;u<i.length;u++){const h=qe(i[u]);zi(h)&&(o[h]=ie)}else if(i)for(const u in i){const h=qe(u);if(zi(h)){const p=i[u],_=o[h]=F(p)||V(p)?{type:p}:ue({},p);if(_){const T=Ji(Boolean,_.type),R=Ji(String,_.type);_[0]=T>-1,_[1]=R<0||T<R,(T>-1||K(_,"default"))&&a.push(h)}}}const l=[o,a];return re(t)&&r.set(t,l),l}function zi(t){return t[0]!=="$"}function qi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gi(t,e){return qi(t)===qi(e)}function Ji(t,e){return F(e)?e.findIndex(n=>Gi(n,t)):V(e)&&Gi(e,t)?0:-1}const Xa=t=>t[0]==="_"||t==="$stable",ai=t=>F(t)?t.map(je):[je(t)],Yu=(t,e,n)=>{if(e._n)return e;const r=Qt((...s)=>ai(e(...s)),n);return r._c=!1,r},Qa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xa(s))continue;const i=t[s];if(V(i))e[s]=Yu(s,i,r);else if(i!=null){const o=ai(i);e[s]=()=>o}}},Za=(t,e)=>{const n=ai(e);t.slots.default=()=>n},Xu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),yr(e,"_",n)):Qa(e,t.slots={})}else t.slots={},e&&Za(t,e);yr(t.slots,Kr,1)},Qu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ue(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Qa(e,s)),o=e}else e&&(Za(t,e),o={default:1});if(i)for(const a in s)!Xa(a)&&!(a in o)&&delete s[a]};function Os(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>Os(p,e&&(F(e)?e[_]:e),n,r,s));return}if(Rn(r)&&!s)return;const i=r.shapeFlag&4?zr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ce(l)?(u[l]=null,K(h,l)&&(h[l]=null)):ve(l)&&(l.value=null)),V(c))vt(c,a,12,[o,u]);else{const p=ce(c),_=ve(c);if(p||_){const T=()=>{if(t.f){const R=p?K(h,c)?h[c]:u[c]:c.value;s?F(R)&&Ks(R,i):F(R)?R.includes(i)||R.push(i):p?(u[c]=[i],K(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,K(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,we(T,n)):T()}}}const we=wu;function Zu(t){return ef(t)}function ef(t,e){const n=ys();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:_=xe,insertStaticContent:T}=t,R=(f,d,g,m=null,y=null,b=null,A=!1,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!kt(f,d)&&(m=v(f),Ie(f,y,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:x,shapeFlag:O}=d;switch(E){case Wr:L(f,d,g,m);break;case ke:P(f,d,g,m);break;case fr:f==null&&N(d,g,m,A);break;case Te:D(f,d,g,m,y,b,A,I,w);break;default:O&1?Y(f,d,g,m,y,b,A,I,w):O&6?Q(f,d,g,m,y,b,A,I,w):(O&64||O&128)&&E.process(f,d,g,m,y,b,A,I,w,C)}x!=null&&y&&Os(x,f&&f.ref,b,d||f,!d)},L=(f,d,g,m)=>{if(f==null)r(d.el=a(d.children),g,m);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},P=(f,d,g,m)=>{f==null?r(d.el=c(d.children||""),g,m):d.el=f.el},N=(f,d,g,m)=>{[f.el,f.anchor]=T(f.children,d,g,m,f.el,f.anchor)},H=({el:f,anchor:d},g,m)=>{let y;for(;f&&f!==d;)y=p(f),r(f,g,m),f=y;r(d,g,m)},k=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},Y=(f,d,g,m,y,b,A,I,w)=>{A=A||d.type==="svg",f==null?oe(d,g,m,y,b,A,I,w):X(f,d,y,b,A,I,w)},oe=(f,d,g,m,y,b,A,I)=>{let w,E;const{type:x,props:O,shapeFlag:U,transition:$,dirs:W}=f;if(w=f.el=o(f.type,b,O&&O.is,O),U&8?u(w,f.children):U&16&&j(f.children,w,null,m,y,b&&x!=="foreignObject",A,I),W&&Tt(f,null,m,"created"),fe(w,f,f.scopeId,A,m),O){for(const ee in O)ee!=="value"&&!ar(ee)&&i(w,ee,null,O[ee],b,f.children,m,y,me);"value"in O&&i(w,"value",null,O.value),(E=O.onVnodeBeforeMount)&&$e(E,m,f)}W&&Tt(f,null,m,"beforeMount");const se=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;se&&$.beforeEnter(w),r(w,d,g),((E=O&&O.onVnodeMounted)||se||W)&&we(()=>{E&&$e(E,m,f),se&&$.enter(w),W&&Tt(f,null,m,"mounted")},y)},fe=(f,d,g,m,y)=>{if(g&&_(f,g),m)for(let b=0;b<m.length;b++)_(f,m[b]);if(y){let b=y.subTree;if(d===b){const A=y.vnode;fe(f,A,A.scopeId,A.slotScopeIds,y.parent)}}},j=(f,d,g,m,y,b,A,I,w=0)=>{for(let E=w;E<f.length;E++){const x=f[E]=I?ut(f[E]):je(f[E]);R(null,x,d,g,m,y,b,A,I)}},X=(f,d,g,m,y,b,A)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:x}=d;w|=f.patchFlag&16;const O=f.props||ie,U=d.props||ie;let $;g&&Ct(g,!1),($=U.onVnodeBeforeUpdate)&&$e($,g,d,f),x&&Tt(d,f,g,"beforeUpdate"),g&&Ct(g,!0);const W=y&&d.type!=="foreignObject";if(E?q(f.dynamicChildren,E,I,g,m,W,b):A||G(f,d,I,null,g,m,W,b,!1),w>0){if(w&16)de(I,d,O,U,g,m,y);else if(w&2&&O.class!==U.class&&i(I,"class",null,U.class,y),w&4&&i(I,"style",O.style,U.style,y),w&8){const se=d.dynamicProps;for(let ee=0;ee<se.length;ee++){const le=se[ee],Ne=O[le],Wt=U[le];(Wt!==Ne||le==="value")&&i(I,le,Ne,Wt,y,f.children,g,m,me)}}w&1&&f.children!==d.children&&u(I,d.children)}else!A&&E==null&&de(I,d,O,U,g,m,y);(($=U.onVnodeUpdated)||x)&&we(()=>{$&&$e($,g,d,f),x&&Tt(d,f,g,"updated")},m)},q=(f,d,g,m,y,b,A)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],x=w.el&&(w.type===Te||!kt(w,E)||w.shapeFlag&70)?h(w.el):g;R(w,E,x,null,m,y,b,A,!0)}},de=(f,d,g,m,y,b,A)=>{if(g!==m){if(g!==ie)for(const I in g)!ar(I)&&!(I in m)&&i(f,I,g[I],null,A,d.children,y,b,me);for(const I in m){if(ar(I))continue;const w=m[I],E=g[I];w!==E&&I!=="value"&&i(f,I,E,w,A,d.children,y,b,me)}"value"in m&&i(f,"value",g.value,m.value)}},D=(f,d,g,m,y,b,A,I,w)=>{const E=d.el=f?f.el:a(""),x=d.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),f==null?(r(E,g,m),r(x,g,m),j(d.children,g,x,y,b,A,I,w)):O>0&&O&64&&U&&f.dynamicChildren?(q(f.dynamicChildren,U,g,y,b,A,I),(d.key!=null||y&&d===y.subTree)&&ec(f,d,!0)):G(f,d,g,x,y,b,A,I,w)},Q=(f,d,g,m,y,b,A,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?y.ctx.activate(d,g,m,A,w):be(d,g,m,y,b,A,w):Je(f,d,w)},be=(f,d,g,m,y,b,A)=>{const I=f.component=uf(f,m,y);if(jr(f)&&(I.ctx.renderer=C),df(I),I.asyncDep){if(y&&y.registerDep(I,ae),!f.el){const w=I.subTree=he(ke);P(null,w,d,g)}return}ae(I,f,d,g,y,b,A)},Je=(f,d,g)=>{const m=d.component=f.component;if(bu(f,d,g))if(m.asyncDep&&!m.asyncResolved){te(m,d,g);return}else m.next=d,pu(m.update),m.update();else d.el=f.el,m.vnode=d},ae=(f,d,g,m,y,b,A)=>{const I=()=>{if(f.isMounted){let{next:x,bu:O,u:U,parent:$,vnode:W}=f,se=x,ee;Ct(f,!1),x?(x.el=W.el,te(f,x,A)):x=W,O&&cr(O),(ee=x.props&&x.props.onVnodeBeforeUpdate)&&$e(ee,$,x,W),Ct(f,!0);const le=Zr(f),Ne=f.subTree;f.subTree=le,R(Ne,le,h(Ne.el),v(Ne),f,y,b),x.el=le.el,se===null&&Eu(f,le.el),U&&we(U,y),(ee=x.props&&x.props.onVnodeUpdated)&&we(()=>$e(ee,$,x,W),y)}else{let x;const{el:O,props:U}=d,{bm:$,m:W,parent:se}=f,ee=Rn(d);if(Ct(f,!1),$&&cr($),!ee&&(x=U&&U.onVnodeBeforeMount)&&$e(x,se,d),Ct(f,!0),O&&J){const le=()=>{f.subTree=Zr(f),J(O,f.subTree,f,y,null)};ee?d.type.__asyncLoader().then(()=>!f.isUnmounted&&le()):le()}else{const le=f.subTree=Zr(f);R(null,le,g,m,f,y,b),d.el=le.el}if(W&&we(W,y),!ee&&(x=U&&U.onVnodeMounted)){const le=d;we(()=>$e(x,se,le),y)}(d.shapeFlag&256||se&&Rn(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&we(f.a,y),f.isMounted=!0,d=g=m=null}},w=f.effect=new Ys(I,()=>ri(E),f.scope),E=f.update=()=>w.run();E.id=f.uid,Ct(f,!0),E()},te=(f,d,g)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,Ju(f,d.props,m,g),Qu(f,d.children,g),pn(),Fi(),gn()},G=(f,d,g,m,y,b,A,I,w=!1)=>{const E=f&&f.children,x=f?f.shapeFlag:0,O=d.children,{patchFlag:U,shapeFlag:$}=d;if(U>0){if(U&128){st(E,O,g,m,y,b,A,I,w);return}else if(U&256){Ye(E,O,g,m,y,b,A,I,w);return}}$&8?(x&16&&me(E,y,b),O!==E&&u(g,O)):x&16?$&16?st(E,O,g,m,y,b,A,I,w):me(E,y,b,!0):(x&8&&u(g,""),$&16&&j(O,g,m,y,b,A,I,w))},Ye=(f,d,g,m,y,b,A,I,w)=>{f=f||qt,d=d||qt;const E=f.length,x=d.length,O=Math.min(E,x);let U;for(U=0;U<O;U++){const $=d[U]=w?ut(d[U]):je(d[U]);R(f[U],$,g,null,y,b,A,I,w)}E>x?me(f,y,b,!0,!1,O):j(d,g,m,y,b,A,I,w,O)},st=(f,d,g,m,y,b,A,I,w)=>{let E=0;const x=d.length;let O=f.length-1,U=x-1;for(;E<=O&&E<=U;){const $=f[E],W=d[E]=w?ut(d[E]):je(d[E]);if(kt($,W))R($,W,g,null,y,b,A,I,w);else break;E++}for(;E<=O&&E<=U;){const $=f[O],W=d[U]=w?ut(d[U]):je(d[U]);if(kt($,W))R($,W,g,null,y,b,A,I,w);else break;O--,U--}if(E>O){if(E<=U){const $=U+1,W=$<x?d[$].el:m;for(;E<=U;)R(null,d[E]=w?ut(d[E]):je(d[E]),g,W,y,b,A,I,w),E++}}else if(E>U)for(;E<=O;)Ie(f[E],y,b,!0),E++;else{const $=E,W=E,se=new Map;for(E=W;E<=U;E++){const Re=d[E]=w?ut(d[E]):je(d[E]);Re.key!=null&&se.set(Re.key,E)}let ee,le=0;const Ne=U-W+1;let Wt=!1,Ri=0;const vn=new Array(Ne);for(E=0;E<Ne;E++)vn[E]=0;for(E=$;E<=O;E++){const Re=f[E];if(le>=Ne){Ie(Re,y,b,!0);continue}let Be;if(Re.key!=null)Be=se.get(Re.key);else for(ee=W;ee<=U;ee++)if(vn[ee-W]===0&&kt(Re,d[ee])){Be=ee;break}Be===void 0?Ie(Re,y,b,!0):(vn[Be-W]=E+1,Be>=Ri?Ri=Be:Wt=!0,R(Re,d[Be],g,null,y,b,A,I,w),le++)}const Ai=Wt?tf(vn):qt;for(ee=Ai.length-1,E=Ne-1;E>=0;E--){const Re=W+E,Be=d[Re],Si=Re+1<x?d[Re+1].el:m;vn[E]===0?R(null,Be,g,Si,y,b,A,I,w):Wt&&(ee<0||E!==Ai[ee]?Fe(Be,g,Si,2):ee--)}}},Fe=(f,d,g,m,y=null)=>{const{el:b,type:A,transition:I,children:w,shapeFlag:E}=f;if(E&6){Fe(f.component.subTree,d,g,m);return}if(E&128){f.suspense.move(d,g,m);return}if(E&64){A.move(f,d,g,C);return}if(A===Te){r(b,d,g);for(let O=0;O<w.length;O++)Fe(w[O],d,g,m);r(f.anchor,d,g);return}if(A===fr){H(f,d,g);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,g),we(()=>I.enter(b),y);else{const{leave:O,delayLeave:U,afterLeave:$}=I,W=()=>r(b,d,g),se=()=>{O(b,()=>{W(),$&&$()})};U?U(b,W,se):se()}else r(b,d,g)},Ie=(f,d,g,m=!1,y=!1)=>{const{type:b,props:A,ref:I,children:w,dynamicChildren:E,shapeFlag:x,patchFlag:O,dirs:U}=f;if(I!=null&&Os(I,null,g,f,!0),x&256){d.ctx.deactivate(f);return}const $=x&1&&U,W=!Rn(f);let se;if(W&&(se=A&&A.onVnodeBeforeUnmount)&&$e(se,d,f),x&6)Zn(f.component,g,m);else{if(x&128){f.suspense.unmount(g,m);return}$&&Tt(f,null,d,"beforeUnmount"),x&64?f.type.remove(f,d,g,y,C,m):E&&(b!==Te||O>0&&O&64)?me(E,d,g,!1,!0):(b===Te&&O&384||!y&&x&16)&&me(w,d,g),m&&jt(f)}(W&&(se=A&&A.onVnodeUnmounted)||$)&&we(()=>{se&&$e(se,d,f),$&&Tt(f,null,d,"unmounted")},g)},jt=f=>{const{type:d,el:g,anchor:m,transition:y}=f;if(d===Te){Vt(g,m);return}if(d===fr){k(f);return}const b=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:I}=y,w=()=>A(g,b);I?I(f.el,b,w):w()}else b()},Vt=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},Zn=(f,d,g)=>{const{bum:m,scope:y,update:b,subTree:A,um:I}=f;m&&cr(m),y.stop(),b&&(b.active=!1,Ie(A,f,d,g)),I&&we(I,d),we(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},me=(f,d,g,m=!1,y=!1,b=0)=>{for(let A=b;A<f.length;A++)Ie(f[A],d,g,m,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),S=(f,d,g)=>{f==null?d._vnode&&Ie(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,g),Fi(),Oa(),d._vnode=f},C={p:R,um:Ie,m:Fe,r:jt,mt:be,mc:j,pc:G,pbc:q,n:v,o:t};let M,J;return e&&([M,J]=e(C)),{render:S,hydrate:M,createApp:qu(S,M)}}function Ct({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ec(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ut(s[i]),a.el=o.el),n||ec(o,a)),a.type===Wr&&(a.el=o.el)}}function tf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nf=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),Wr=Symbol.for("v-txt"),ke=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),Sn=[];let Le=null;function He(t=!1){Sn.push(Le=t?null:[])}function rf(){Sn.pop(),Le=Sn[Sn.length-1]||null}let Un=1;function Yi(t){Un+=t}function tc(t){return t.dynamicChildren=Un>0?Le||qt:null,rf(),Un>0&&Le&&Le.push(t),t}function dr(t,e,n,r,s,i){return tc(en(t,e,n,r,s,i,!0))}function Zt(t,e,n,r,s){return tc(he(t,e,n,r,s,!0))}function Tr(t){return t?t.__v_isVNode===!0:!1}function kt(t,e){return t.type===e.type&&t.key===e.key}const Kr="__vInternal",nc=({key:t})=>t??null,hr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||ve(t)||V(t)?{i:ge,r:t,k:e,f:!!n}:t:null);function en(t,e=null,n=null,r=0,s=null,i=t===Te?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nc(e),ref:e&&hr(e),scopeId:Hr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ge};return a?(ci(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),Un>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const he=sf;function sf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Wa)&&(t=ke),Tr(t)){const a=It(t,e,!0);return n&&ci(a,n),Un>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(_f(t)&&(t=t.__vccOpts),e){e=of(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=Gs(a)),re(c)&&(Ea(c)&&!F(c)&&(c=ue({},c)),e.style=qs(c))}const o=ce(t)?1:Iu(t)?128:nf(t)?64:re(t)?4:V(t)?2:0;return en(t,e,n,r,s,o,i,!0)}function of(t){return t?Ea(t)||Kr in t?ue({},t):t:null}function It(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?af(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&nc(a),ref:e&&e.ref?n&&s?F(s)?s.concat(hr(e)):[s,hr(e)]:hr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&It(t.ssContent),ssFallback:t.ssFallback&&It(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pr(t=" ",e=0){return he(Wr,null,t,e)}function e_(t,e){const n=he(fr,null,t);return n.staticCount=e,n}function ns(t="",e=!1){return e?(He(),Zt(ke,null,t)):he(ke,null,t)}function je(t){return t==null||typeof t=="boolean"?he(ke):F(t)?he(Te,null,t.slice()):typeof t=="object"?ut(t):he(Wr,null,String(t))}function ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:It(t)}function ci(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ci(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Kr in e)?e._ctx=ge:s===3&&ge&&(ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:ge},n=32):(e=String(e),r&64?(n=16,e=[pr(e)]):n=8);t.children=e,t.shapeFlag|=n}function af(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gs([e.class,r.class]));else if(s==="style")e.style=qs([e.style,r.style]);else if(Mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){Pe(t,e,7,[n,r])}const cf=Ga();let lf=0;function uf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cf,i={uid:lf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ya(r,s),emitsOptions:Da(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_u.bind(null,i),t.ce&&t.ce(i),i}let pe=null;const ff=()=>pe||ge;let li,Kt,Xi="__VUE_INSTANCE_SETTERS__";(Kt=ys()[Xi])||(Kt=ys()[Xi]=[]),Kt.push(t=>pe=t),li=t=>{Kt.length>1?Kt.forEach(e=>e(t)):Kt[0](t)};const an=t=>{li(t),t.scope.on()},Lt=()=>{pe&&pe.scope.off(),li(null)};function rc(t){return t.vnode.shapeFlag&4}let Fn=!1;function df(t,e=!1){Fn=e;const{props:n,children:r}=t.vnode,s=rc(t);Gu(t,n,s,e),Xu(t,r);const i=s?hf(t,e):void 0;return Fn=!1,i}function hf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ia(new Proxy(t.ctx,$u));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?gf(t):null;an(t),pn();const i=vt(r,t,0,[t.props,s]);if(gn(),Lt(),sa(i)){if(i.then(Lt,Lt),e)return i.then(o=>{Qi(t,o,e)}).catch(o=>{Br(o,t,0)});t.asyncDep=i}else Qi(t,i,e)}else sc(t,e)}function Qi(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Aa(e)),sc(t,n)}let Zi;function sc(t,e,n){const r=t.type;if(!t.render){if(!e&&Zi&&!r.render){const s=r.template||oi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ue(ue({isCustomElement:i,delimiters:a},o),c);r.render=Zi(s,l)}}t.render=r.render||xe}an(t),pn(),Hu(t),gn(),Lt()}function pf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ce(t,"get","$attrs"),e[n]}}))}function gf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return pf(t)},slots:t.slots,emit:t.emit,expose:e}}function zr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Aa(Ia(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in An)return An[n](t)},has(e,n){return n in e||n in An}}))}function mf(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function _f(t){return V(t)&&"__vccOpts"in t}const Ae=(t,e)=>fu(t,e,Fn);function ui(t,e,n){const r=arguments.length;return r===2?re(e)&&!F(e)?Tr(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),he(t,e,n))}const vf=Symbol.for("v-scx"),yf=()=>We(vf),bf="3.3.4",Ef="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,eo=Ot&&Ot.createElement("template"),If={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ot.createElementNS(Ef,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{eo.innerHTML=r?`<svg>${t}</svg>`:t;const a=eo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Tf(t,e,n){const r=t.style,s=ce(n);if(n&&!s){if(e&&!ce(e))for(const i in e)n[i]==null&&Ns(r,i,"");for(const i in n)Ns(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const to=/\s*!important$/;function Ns(t,e,n){if(F(n))n.forEach(r=>Ns(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Cf(t,e);to.test(n)?t.setProperty(hn(r),n.replace(to,""),"important"):t[r]=n}}const no=["Webkit","Moz","ms"],rs={};function Cf(t,e){const n=rs[e];if(n)return n;let r=qe(e);if(r!=="filter"&&r in t)return rs[e]=r;r=Ur(r);for(let s=0;s<no.length;s++){const i=no[s]+r;if(i in t)return rs[e]=i}return e}const ro="http://www.w3.org/1999/xlink";function Rf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ro,e.slice(6,e.length)):t.setAttributeNS(ro,e,n);else{const i=Sl(e);n==null||i&&!aa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Af(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=aa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function dt(t,e,n,r){t.addEventListener(e,n,r)}function Sf(t,e,n,r){t.removeEventListener(e,n,r)}function Pf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=kf(e);if(r){const l=i[e]=Df(r,s);dt(t,a,l,c)}else o&&(Sf(t,a,o,c),i[e]=void 0)}}const so=/(?:Once|Passive|Capture)$/;function kf(t){let e;if(so.test(t)){e={};let r;for(;r=t.match(so);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),e]}let ss=0;const Of=Promise.resolve(),Nf=()=>ss||(Of.then(()=>ss=0),ss=Date.now());function Df(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Mf(r,n.value),e,5,[r])};return n.value=t,n.attached=Nf(),n}function Mf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const io=/^on[a-z]/,Lf=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?wf(t,r,s):e==="style"?Tf(t,n,r):Mr(e)?Ws(e)||Pf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xf(t,e,r,s))?Af(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rf(t,e,r,s))};function xf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&io.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||io.test(e)&&ce(n)?!1:e in t}const ot="transition",yn="animation",fi=(t,{slots:e})=>ui(Au,Uf(t),e);fi.displayName="Transition";const ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};fi.props=ue({},xa,ic);const Rt=(t,e=[])=>{F(t)?t.forEach(n=>n(...e)):t&&t(...e)},oo=t=>t?F(t)?t.some(e=>e.length>1):t.length>1:!1;function Uf(t){const e={};for(const D in t)D in ic||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,T=Ff(s),R=T&&T[0],L=T&&T[1],{onBeforeEnter:P,onEnter:N,onEnterCancelled:H,onLeave:k,onLeaveCancelled:Y,onBeforeAppear:oe=P,onAppear:fe=N,onAppearCancelled:j=H}=e,X=(D,Q,be)=>{At(D,Q?u:a),At(D,Q?l:o),be&&be()},q=(D,Q)=>{D._isLeaving=!1,At(D,h),At(D,_),At(D,p),Q&&Q()},de=D=>(Q,be)=>{const Je=D?fe:N,ae=()=>X(Q,D,be);Rt(Je,[Q,ae]),ao(()=>{At(Q,D?c:i),at(Q,D?u:a),oo(Je)||co(Q,r,R,ae)})};return ue(e,{onBeforeEnter(D){Rt(P,[D]),at(D,i),at(D,o)},onBeforeAppear(D){Rt(oe,[D]),at(D,c),at(D,l)},onEnter:de(!1),onAppear:de(!0),onLeave(D,Q){D._isLeaving=!0;const be=()=>q(D,Q);at(D,h),Hf(),at(D,p),ao(()=>{D._isLeaving&&(At(D,h),at(D,_),oo(k)||co(D,r,L,be))}),Rt(k,[D,be])},onEnterCancelled(D){X(D,!1),Rt(H,[D])},onAppearCancelled(D){X(D,!0),Rt(j,[D])},onLeaveCancelled(D){q(D),Rt(Y,[D])}})}function Ff(t){if(t==null)return null;if(re(t))return[is(t.enter),is(t.leave)];{const e=is(t);return[e,e]}}function is(t){return Il(t)}function at(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function At(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ao(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Bf=0;function co(t,e,n,r){const s=t._endId=++Bf,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=$f(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,p),i()},p=_=>{_.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,p)}function $f(t,e){const n=window.getComputedStyle(t),r=T=>(n[T]||"").split(", "),s=r(`${ot}Delay`),i=r(`${ot}Duration`),o=lo(s,i),a=r(`${yn}Delay`),c=r(`${yn}Duration`),l=lo(a,c);let u=null,h=0,p=0;e===ot?o>0&&(u=ot,h=o,p=i.length):e===yn?l>0&&(u=yn,h=l,p=c.length):(h=Math.max(o,l),u=h>0?o>l?ot:yn:null,p=u?u===ot?i.length:c.length:0);const _=u===ot&&/\b(transform|all)(,|$)/.test(r(`${ot}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:_}}function lo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>uo(n)+uo(t[r])))}function uo(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Hf(){return document.body.offsetHeight}const cn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>cr(e,n):e};function jf(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const t_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=cn(s);const i=r||s.props&&s.props.type==="number";dt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vs(a)),t._assign(a)}),n&&dt(t,"change",()=>{t.value=t.value.trim()}),e||(dt(t,"compositionstart",jf),dt(t,"compositionend",fo),dt(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=cn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&vs(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},n_={deep:!0,created(t,e,n){t._assign=cn(n),dt(t,"change",()=>{const r=t._modelValue,s=oc(t),i=t.checked,o=t._assign;if(F(r)){const a=ca(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Lr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(ac(t,i))})},mounted:ho,beforeUpdate(t,e,n){t._assign=cn(n),ho(t,e,n)}};function ho(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=ca(e,r.props.value)>-1:Lr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=sn(e,ac(t,!0)))}const r_={created(t,{value:e},n){t.checked=sn(e,n.props.value),t._assign=cn(n),dt(t,"change",()=>{t._assign(oc(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=cn(r),e!==n&&(t.checked=sn(e,r.props.value))}};function oc(t){return"_value"in t?t._value:t.value}function ac(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Vf=["ctrl","shift","alt","meta"],Wf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vf.some(n=>t[`${n}Key`]&&!e.includes(n))},Kf=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Wf[e[s]];if(i&&i(n,e))return}return t(n,...r)},zf=ue({patchProp:Lf},If);let po;function qf(){return po||(po=Zu(zf))}const Gf=(...t)=>{const e=qf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Jf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Jf(t){return ce(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function Yf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function os(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const Pn=()=>{},Ue=Array.isArray,Xf=/\/$/,Qf=t=>t.replace(Xf,"");function as(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=nd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Zf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function go(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ed(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&cc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!td(t[n],e[n]))return!1;return!0}function td(t,e){return Ue(t)?mo(t,e):Ue(e)?mo(e,t):t===e}function mo(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kn||(kn={}));function rd(t){if(!t)if(zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qf(t)}const sd=/^[^#]+#/;function id(t,e){return t.replace(sd,"#")+e}function od(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ad(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=od(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _o(t,e){return(history.state?history.state.position-e:-1)+t}const Ds=new Map;function cd(t,e){Ds.set(t,e)}function ld(t){const e=Ds.get(t);return Ds.delete(t),e}let ud=()=>location.protocol+"//"+location.host;function lc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),go(c,"")}return go(n,t)+r+s}function fd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=lc(t,location),T=n.value,R=e.value;let L=0;if(p){if(n.value=_,e.value=p,o&&o===T){o=null;return}L=R?p.position-R.position:0}else r(_);s.forEach(P=>{P(n.value,T,{delta:L,type:Bn.pop,direction:L?L>0?kn.forward:kn.back:kn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const T=s.indexOf(p);T>-1&&s.splice(T,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:qr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function vo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qr():null}}function dd(t){const{history:e,location:n}=window,r={value:lc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ud()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,vo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:qr()});i(u.current,u,!0);const h=Z({},vo(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function hd(t){t=rd(t);const e=dd(t),n=fd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:id.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pd(t){return typeof t=="string"||t&&typeof t=="object"}function uc(t){return typeof t=="string"||typeof t=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fc=Symbol("");var yo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yo||(yo={}));function un(t,e){return Z(new Error,{type:t,[fc]:!0},e)}function Xe(t,e){return t instanceof Error&&fc in t&&(e==null||!!(t.type&e))}const bo="[^/]+?",gd={sensitive:!1,strict:!1,start:!0,end:!0},md=/[.+*?^${}()[\]/\\]/g;function _d(t,e){const n=Z({},gd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(md,"\\$&"),_+=40;else if(p.type===1){const{value:T,repeatable:R,optional:L,regexp:P}=p;i.push({name:T,repeatable:R,optional:L});const N=P||bo;if(N!==bo){_+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${T}" (${N}): `+k.message)}}let H=R?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(H=L&&l.length<2?`(?:/${H})`:"/"+H),L&&(H+="?"),s+=H,_+=20,L&&(_+=-8),R&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",T=i[p-1];h[T.name]=_&&T.repeatable?_.split("/"):_}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:T,repeatable:R,optional:L}=_,P=T in l?l[T]:"";if(Ue(P)&&!R)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const N=Ue(P)?P.join("/"):P;if(!N)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function vd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Eo(r))return 1;if(Eo(s))return-1}return s.length-r.length}function Eo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bd={type:0,value:""},Ed=/[a-zA-Z0-9_]/;function Id(t){if(!t)return[[]];if(t==="/")return[[bd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ed.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function wd(t,e,n){const r=_d(Id(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Td(t,e){const n=[],r=new Map;e=To({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const _=!p,T=Cd(u);T.aliasOf=p&&p.record;const R=To(e,u),L=[T];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of H)L.push(Z({},T,{components:p?p.record.components:T.components,path:k,aliasOf:p?p.record:T}))}let P,N;for(const H of L){const{path:k}=H;if(h&&k[0]!=="/"){const Y=h.record.path,oe=Y[Y.length-1]==="/"?"":"/";H.path=h.record.path+(k&&oe+k)}if(P=wd(H,h,R),p?p.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),_&&u.name&&!wo(P)&&o(u.name)),T.children){const Y=T.children;for(let oe=0;oe<Y.length;oe++)i(Y[oe],P,p&&p.children[oe])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return N?()=>{o(N)}:Pn}function o(u){if(uc(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&yd(u,n[h])>=0&&(u.record.path!==n[h].record.path||!dc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wo(u)&&r.set(u.record.name,u)}function l(u,h){let p,_={},T,R;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw un(1,{location:u});R=p.record.name,_=Z(Io(h.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Io(u.params,p.keys.map(N=>N.name))),T=p.stringify(_)}else if("path"in u)T=u.path,p=n.find(N=>N.re.test(T)),p&&(_=p.parse(T),R=p.record.name);else{if(p=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!p)throw un(1,{location:u,currentLocation:h});R=p.record.name,_=Z({},h.params,u.params),T=p.stringify(_)}const L=[];let P=p;for(;P;)L.unshift(P.record),P=P.parent;return{name:R,path:T,params:_,matched:L,meta:Ad(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Io(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function wo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ad(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function To(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dc(t,e){return e.children.some(n=>n===t||dc(t,n))}const hc=/#/g,Sd=/&/g,Pd=/\//g,kd=/=/g,Od=/\?/g,pc=/\+/g,Nd=/%5B/g,Dd=/%5D/g,gc=/%5E/g,Md=/%60/g,mc=/%7B/g,Ld=/%7C/g,_c=/%7D/g,xd=/%20/g;function di(t){return encodeURI(""+t).replace(Ld,"|").replace(Nd,"[").replace(Dd,"]")}function Ud(t){return di(t).replace(mc,"{").replace(_c,"}").replace(gc,"^")}function Ms(t){return di(t).replace(pc,"%2B").replace(xd,"+").replace(hc,"%23").replace(Sd,"%26").replace(Md,"`").replace(mc,"{").replace(_c,"}").replace(gc,"^")}function Fd(t){return Ms(t).replace(kd,"%3D")}function Bd(t){return di(t).replace(hc,"%23").replace(Od,"%3F")}function $d(t){return t==null?"":Bd(t).replace(Pd,"%2F")}function Cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Hd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(pc," "),o=i.indexOf("="),a=Cr(o<0?i:i.slice(0,o)),c=o<0?null:Cr(i.slice(o+1));if(a in e){let l=e[a];Ue(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Co(t){let e="";for(let n in t){const r=t[n];if(n=Fd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&Ms(i)):[r&&Ms(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function jd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Vd=Symbol(""),Ro=Symbol(""),Gr=Symbol(""),vc=Symbol(""),Ls=Symbol("");function bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ft(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(un(4,{from:n,to:e})):h instanceof Error?a(h):pd(h)?a(un(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function cs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Wd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ft(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Yf(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ft(p,n,r,i,o)()}))}}return s}function Wd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ao(t){const e=We(Gr),n=We(vc),r=Ae(()=>e.resolve(Yt(t.to))),s=Ae(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(ln.bind(null,u));if(p>-1)return p;const _=So(c[l-2]);return l>1&&So(u)===_&&h[h.length-1].path!==_?h.findIndex(ln.bind(null,c[l-2])):p}),i=Ae(()=>s.value>-1&&Gd(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&cc(n.params,r.value.params));function a(c={}){return qd(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Pn):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Kd=Ba({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ao,setup(t,{slots:e}){const n=Kn(Ao(t)),{options:r}=We(Gr),s=Ae(()=>({[Po(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Po(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ui("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zd=Kd;function qd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function So(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Po=(t,e,n)=>t??e??n,Jd=Ba({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(Ls),s=Ae(()=>t.route||r.value),i=We(Ro,0),o=Ae(()=>{let l=Yt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ae(()=>s.value.matched[o.value]);ur(Ro,Ae(()=>o.value+1)),ur(Vd,a),ur(Ls,s);const c=Ca();return lr(()=>[c.value,a.value,t.name],([l,u,h],[p,_,T])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!ln(u,_)||!p)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return ko(n.default,{Component:p,route:l});const _=h.props[u],T=_?_===!0?l.params:typeof _=="function"?_(l):_:null,L=ui(p,Z({},T,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ko(n.default,{Component:L,route:l})||L}}});function ko(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Yd=Jd;function Xd(t){const e=Td(t.routes,t),n=t.parseQuery||Hd,r=t.stringifyQuery||Co,s=t.history,i=bn(),o=bn(),a=bn(),c=au(ct);let l=ct;zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=os.bind(null,v=>""+v),h=os.bind(null,$d),p=os.bind(null,Cr);function _(v,S){let C,M;return uc(v)?(C=e.getRecordMatcher(v),M=S):M=v,e.addRoute(M,C)}function T(v){const S=e.getRecordMatcher(v);S&&e.removeRoute(S)}function R(){return e.getRoutes().map(v=>v.record)}function L(v){return!!e.getRecordMatcher(v)}function P(v,S){if(S=Z({},S||c.value),typeof v=="string"){const g=as(n,v,S.path),m=e.resolve({path:g.path},S),y=s.createHref(g.fullPath);return Z(g,m,{params:p(m.params),hash:Cr(g.hash),redirectedFrom:void 0,href:y})}let C;if("path"in v)C=Z({},v,{path:as(n,v.path,S.path).path});else{const g=Z({},v.params);for(const m in g)g[m]==null&&delete g[m];C=Z({},v,{params:h(g)}),S.params=h(S.params)}const M=e.resolve(C,S),J=v.hash||"";M.params=u(p(M.params));const f=Zf(r,Z({},v,{hash:Ud(J),path:M.path})),d=s.createHref(f);return Z({fullPath:f,hash:J,query:r===Co?jd(v.query):v.query||{}},M,{redirectedFrom:void 0,href:d})}function N(v){return typeof v=="string"?as(n,v,c.value.path):Z({},v)}function H(v,S){if(l!==v)return un(8,{from:S,to:v})}function k(v){return fe(v)}function Y(v){return k(Z(N(v),{replace:!0}))}function oe(v){const S=v.matched[v.matched.length-1];if(S&&S.redirect){const{redirect:C}=S;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=N(M):{path:M},M.params={}),Z({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function fe(v,S){const C=l=P(v),M=c.value,J=v.state,f=v.force,d=v.replace===!0,g=oe(C);if(g)return fe(Z(N(g),{state:typeof g=="object"?Z({},J,g.state):J,force:f,replace:d}),S||C);const m=C;m.redirectedFrom=S;let y;return!f&&ed(r,M,C)&&(y=un(16,{to:m,from:M}),Fe(M,M,!0,!1)),(y?Promise.resolve(y):q(m,M)).catch(b=>Xe(b)?Xe(b,2)?b:st(b):G(b,m,M)).then(b=>{if(b){if(Xe(b,2))return fe(Z({replace:d},N(b.to),{state:typeof b.to=="object"?Z({},J,b.to.state):J,force:f}),S||m)}else b=D(m,M,!0,d,J);return de(m,M,b),b})}function j(v,S){const C=H(v,S);return C?Promise.reject(C):Promise.resolve()}function X(v){const S=Vt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(v):v()}function q(v,S){let C;const[M,J,f]=Qd(v,S);C=cs(M.reverse(),"beforeRouteLeave",v,S);for(const g of M)g.leaveGuards.forEach(m=>{C.push(ft(m,v,S))});const d=j.bind(null,v,S);return C.push(d),me(C).then(()=>{C=[];for(const g of i.list())C.push(ft(g,v,S));return C.push(d),me(C)}).then(()=>{C=cs(J,"beforeRouteUpdate",v,S);for(const g of J)g.updateGuards.forEach(m=>{C.push(ft(m,v,S))});return C.push(d),me(C)}).then(()=>{C=[];for(const g of v.matched)if(g.beforeEnter&&!S.matched.includes(g))if(Ue(g.beforeEnter))for(const m of g.beforeEnter)C.push(ft(m,v,S));else C.push(ft(g.beforeEnter,v,S));return C.push(d),me(C)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),C=cs(f,"beforeRouteEnter",v,S),C.push(d),me(C))).then(()=>{C=[];for(const g of o.list())C.push(ft(g,v,S));return C.push(d),me(C)}).catch(g=>Xe(g,8)?g:Promise.reject(g))}function de(v,S,C){for(const M of a.list())X(()=>M(v,S,C))}function D(v,S,C,M,J){const f=H(v,S);if(f)return f;const d=S===ct,g=zt?history.state:{};C&&(M||d?s.replace(v.fullPath,Z({scroll:d&&g&&g.scroll},J)):s.push(v.fullPath,J)),c.value=v,Fe(v,S,C,d),st()}let Q;function be(){Q||(Q=s.listen((v,S,C)=>{if(!Zn.listening)return;const M=P(v),J=oe(M);if(J){fe(Z(J,{replace:!0}),M).catch(Pn);return}l=M;const f=c.value;zt&&cd(_o(f.fullPath,C.delta),qr()),q(M,f).catch(d=>Xe(d,12)?d:Xe(d,2)?(fe(d.to,M).then(g=>{Xe(g,20)&&!C.delta&&C.type===Bn.pop&&s.go(-1,!1)}).catch(Pn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),G(d,M,f))).then(d=>{d=d||D(M,f,!1),d&&(C.delta&&!Xe(d,8)?s.go(-C.delta,!1):C.type===Bn.pop&&Xe(d,20)&&s.go(-1,!1)),de(M,f,d)}).catch(Pn)}))}let Je=bn(),ae=bn(),te;function G(v,S,C){st(v);const M=ae.list();return M.length?M.forEach(J=>J(v,S,C)):console.error(v),Promise.reject(v)}function Ye(){return te&&c.value!==ct?Promise.resolve():new Promise((v,S)=>{Je.add([v,S])})}function st(v){return te||(te=!v,be(),Je.list().forEach(([S,C])=>v?C(v):S()),Je.reset()),v}function Fe(v,S,C,M){const{scrollBehavior:J}=t;if(!zt||!J)return Promise.resolve();const f=!C&&ld(_o(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return Pa().then(()=>J(v,S,f)).then(d=>d&&ad(d)).catch(d=>G(d,v,S))}const Ie=v=>s.go(v);let jt;const Vt=new Set,Zn={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,hasRoute:L,getRoutes:R,resolve:P,options:t,push:k,replace:Y,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Ye,install(v){const S=this;v.component("RouterLink",zd),v.component("RouterView",Yd),v.config.globalProperties.$router=S,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),zt&&!jt&&c.value===ct&&(jt=!0,k(s.location).catch(J=>{}));const C={};for(const J in ct)C[J]=Ae(()=>c.value[J]);v.provide(Gr,S),v.provide(vc,Kn(C)),v.provide(Ls,c);const M=v.unmount;Vt.add(v),v.unmount=function(){Vt.delete(v),Vt.size<1&&(l=ct,Q&&Q(),Q=null,c.value=ct,jt=!1,te=!1),M()}}};function me(v){return v.reduce((S,C)=>S.then(()=>X(C)),Promise.resolve())}return Zn}function Qd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ln(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ln(l,c))||s.push(c))}return[n,r,s]}function Zd(){return We(Gr)}/**
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
 */const yc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new th;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class th extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nh=function(t){const e=yc(t);return bc.encodeByteArray(e,!0)},Ec=function(t){return nh(t).replace(/\./g,"")},Ic=function(t){try{return bc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sh=()=>rh().__FIREBASE_DEFAULTS__,ih=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ic(t[1]);return e&&JSON.parse(e)},hi=()=>{try{return sh()||ih()||oh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ah=t=>{var e,n;return(n=(e=hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wc=()=>{var t;return(t=hi())===null||t===void 0?void 0:t.config},Tc=t=>{var e;return(e=hi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function uh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dh(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hh(){try{return typeof indexedDB=="object"}catch{return!1}}function ph(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const gh="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gh,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,r)}}function mh(t,e){return t.replace(_h,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _h=/\{\$([^}]+)}/g;function vh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Oo(i)&&Oo(o)){if(!Rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Oo(t){return t!==null&&typeof t=="object"}/**
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
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yh(t,e){const n=new bh(t,e);return n.subscribe.bind(n)}class bh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Eh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ls),s.error===void 0&&(s.error=ls),s.complete===void 0&&(s.complete=ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class Ih{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ch;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Th(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wh(t){return t===St?void 0:t}function Th(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ch{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ih(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Rh={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Ah=ne.INFO,Sh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Ph=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=Ah,this._logHandler=Ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const kh=(t,e)=>e.some(n=>t instanceof n);let No,Do;function Oh(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nh(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rc=new WeakMap,xs=new WeakMap,Ac=new WeakMap,us=new WeakMap,pi=new WeakMap;function Dh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rc.set(n,t)}).catch(()=>{}),pi.set(e,t),e}function Mh(t){if(xs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xs.set(t,e)}let Us={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ac.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lh(t){Us=t(Us)}function xh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fs(this),e,...n);return Ac.set(r,e.sort?e.sort():[e]),yt(r)}:Nh().includes(t)?function(...e){return t.apply(fs(this),e),yt(Rc.get(this))}:function(...e){return yt(t.apply(fs(this),e))}}function Uh(t){return typeof t=="function"?xh(t):(t instanceof IDBTransaction&&Mh(t),kh(t,Oh())?new Proxy(t,Us):t)}function yt(t){if(t instanceof IDBRequest)return Dh(t);if(us.has(t))return us.get(t);const e=Uh(t);return e!==t&&(us.set(t,e),pi.set(e,t)),e}const fs=t=>pi.get(t);function Fh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=yt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Bh=["get","getKey","getAll","getAllKeys","count"],$h=["put","add","delete","clear"],ds=new Map;function Mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$h.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ds.set(e,i),i}Lh(t=>({...t,get:(e,n,r)=>Mo(e,n)||t.get(e,n,r),has:(e,n)=>!!Mo(e,n)||t.has(e,n)}));/**
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
 */class Hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fs="@firebase/app",Lo="0.9.13";/**
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
 */const Ut=new Cc("@firebase/app"),Vh="@firebase/app-compat",Wh="@firebase/analytics-compat",Kh="@firebase/analytics",zh="@firebase/app-check-compat",qh="@firebase/app-check",Gh="@firebase/auth",Jh="@firebase/auth-compat",Yh="@firebase/database",Xh="@firebase/database-compat",Qh="@firebase/functions",Zh="@firebase/functions-compat",ep="@firebase/installations",tp="@firebase/installations-compat",np="@firebase/messaging",rp="@firebase/messaging-compat",sp="@firebase/performance",ip="@firebase/performance-compat",op="@firebase/remote-config",ap="@firebase/remote-config-compat",cp="@firebase/storage",lp="@firebase/storage-compat",up="@firebase/firestore",fp="@firebase/firestore-compat",dp="firebase",hp="9.23.0";/**
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
 */const Bs="[DEFAULT]",pp={[Fs]:"fire-core",[Vh]:"fire-core-compat",[Kh]:"fire-analytics",[Wh]:"fire-analytics-compat",[qh]:"fire-app-check",[zh]:"fire-app-check-compat",[Gh]:"fire-auth",[Jh]:"fire-auth-compat",[Yh]:"fire-rtdb",[Xh]:"fire-rtdb-compat",[Qh]:"fire-fn",[Zh]:"fire-fn-compat",[ep]:"fire-iid",[tp]:"fire-iid-compat",[np]:"fire-fcm",[rp]:"fire-fcm-compat",[sp]:"fire-perf",[ip]:"fire-perf-compat",[op]:"fire-rc",[ap]:"fire-rc-compat",[cp]:"fire-gcs",[lp]:"fire-gcs-compat",[up]:"fire-fst",[fp]:"fire-fst-compat","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const Ar=new Map,$s=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if($s.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;$s.set(e,t);for(const n of Ar.values())gp(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mp={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new zn("app","Firebase",mp);/**
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
 */class _p{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=hp;function Pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(n||(n=wc()),!n)throw bt.create("no-options");const i=Ar.get(s);if(i){if(Rr(n,i.options)&&Rr(r,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const o=new Ch(s);for(const c of $s.values())o.addComponent(c);const a=new _p(n,r,o);return Ar.set(s,a),a}function vp(t=Bs){const e=Ar.get(t);if(!e&&t===Bs&&wc())return Pc();if(!e)throw bt.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=pp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}$n(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yp="firebase-heartbeat-database",bp=1,Hn="firebase-heartbeat-store";let hs=null;function kc(){return hs||(hs=Fh(yp,bp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),hs}async function Ep(t){try{return await(await kc()).transaction(Hn).objectStore(Hn).get(Oc(t))}catch(e){if(e instanceof wt)Ut.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function xo(t,e){try{const r=(await kc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,Oc(t)),await r.done}catch(n){if(n instanceof wt)Ut.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function Oc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ip=1024,wp=30*24*60*60*1e3;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uo(),{heartbeatsToSend:n,unsentEntries:r}=Cp(this._heartbeatsCache.heartbeats),s=Ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uo(){return new Date().toISOString().substring(0,10)}function Cp(t,e=Ip){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hh()?ph().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ep(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fo(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ap(t){$n(new fn("platform-logger",e=>new Hh(e),"PRIVATE")),$n(new fn("heartbeat",e=>new Tp(e),"PRIVATE")),tn(Fs,Lo,t),tn(Fs,Lo,"esm2017"),tn("fire-js","")}Ap("");function gi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Nc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sp=Nc,Dc=new zn("auth","Firebase",Nc());/**
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
 */const Sr=new Cc("@firebase/auth");function Pp(t,...e){Sr.logLevel<=ne.WARN&&Sr.warn(`Auth (${Gn}): ${t}`,...e)}function gr(t,...e){Sr.logLevel<=ne.ERROR&&Sr.error(`Auth (${Gn}): ${t}`,...e)}/**
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
 */function Oe(t,...e){throw mi(t,...e)}function Ke(t,...e){return mi(t,...e)}function Mc(t,e,n){const r=Object.assign(Object.assign({},Sp()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function kp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Oe(t,"argument-error"),Mc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dc.create(t,...e)}function B(t,e,...n){if(!t)throw mi(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function nt(t,e){t||Ze(e)}/**
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
 */function Hs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Op(){return Bo()==="http:"||Bo()==="https:"}function Bo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Np(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Op()||uh()||"connection"in navigator)?navigator.onLine:!0}function Dp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,nt(n>e,"Short delay should be less than long delay!"),this.isMobile=lh()||fh()}get(){return Np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _i(t,e){nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lp=new Jn(3e4,6e4);function mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $t(t,e,n,r,s={}){return xc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Lc.fetch()(Uc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mp),e);try{const s=new xp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Mc(t,u,l);Oe(t,u)}}catch(s){if(s instanceof wt)throw s;Oe(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await $t(t,e,n,r,s);return"mfaPendingCredential"in i&&Oe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Uc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_i(t.config,s):`${t.config.apiScheme}://${s}`}class xp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Lp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Up(t,e){return $t(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return $t(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bp(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=vi(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(ps(s.auth_time)),issuedAtTime:On(ps(s.iat)),expirationTime:On(ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ps(t){return Number(t)*1e3}function vi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ic(n);return s?JSON.parse(s):(gr("Failed to decode base64 JWT payload"),null)}catch(s){return gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $p(t){const e=vi(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&Hp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await dn(t,Fp(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kp(i.providerUserInfo):[],a=Wp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Vp(t){const e=Ge(t);await Pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kp(t){return t.map(e=>{var{providerId:n}=e,r=gi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zp(t,e){const n=await xc(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Uc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function lt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await dn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bp(this,e)}reload(){return Vp(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dn(this,Up(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:k,isAnonymous:Y,providerData:oe,stsTokenManager:fe}=n;B(H&&fe,e,"internal-error");const j=jn.fromJSON(this.name,fe);B(typeof H=="string",e,"internal-error"),lt(h,e.name),lt(p,e.name),B(typeof k=="boolean",e,"internal-error"),B(typeof Y=="boolean",e,"internal-error"),lt(_,e.name),lt(T,e.name),lt(R,e.name),lt(L,e.name),lt(P,e.name),lt(N,e.name);const X=new xt({uid:H,auth:e,email:p,emailVerified:k,displayName:h,isAnonymous:Y,photoURL:T,phoneNumber:_,tenantId:R,stsTokenManager:j,createdAt:P,lastLoginAt:N});return oe&&Array.isArray(oe)&&(X.providerData=oe.map(q=>Object.assign({},q))),L&&(X._redirectEventId=L),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new jn;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pr(i),i}}/**
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
 */const $o=new Map;function et(t){nt(t instanceof Function,"Expected a class definition");let e=$o.get(t);return e?(nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$o.set(t,e),e)}/**
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
 */class Bc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bc.type="NONE";const Ho=Bc;/**
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
 */function mr(t,e,n){return`firebase:${t}:${e}:${n}`}class nn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nn(et(Ho),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(Ho);const o=mr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new nn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new nn(i,e,r))}}/**
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
 */function jo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($c(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wc(e))return"Blackberry";if(Kc(e))return"Webos";if(yi(e))return"Safari";if((e.includes("chrome/")||Hc(e))&&!e.includes("edge/"))return"Chrome";if(Vc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $c(t=ye()){return/firefox\//i.test(t)}function yi(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hc(t=ye()){return/crios\//i.test(t)}function jc(t=ye()){return/iemobile/i.test(t)}function Vc(t=ye()){return/android/i.test(t)}function Wc(t=ye()){return/blackberry/i.test(t)}function Kc(t=ye()){return/webos/i.test(t)}function Jr(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qp(t=ye()){var e;return Jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gp(){return dh()&&document.documentMode===10}function zc(t=ye()){return Jr(t)||Vc(t)||Kc(t)||Wc(t)||/windows phone/i.test(t)||jc(t)}function Jp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qc(t,e=[]){let n;switch(t){case"Browser":n=jo(ye());break;case"Worker":n=`${jo(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}async function Gc(t,e){return $t(t,"GET","/v2/recaptchaConfig",mn(t,e))}function Vo(t){return t!==void 0&&t.enterprise!==void 0}class Jc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Yp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Yp().appendChild(r)})}function Xp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qp="https://www.google.com/recaptcha/enterprise.js?render=",Zp="recaptcha-enterprise",eg="NO_RECAPTCHA";class Xc{constructor(e){this.type=Zp,this.auth=Ht(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Gc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Vo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(eg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Vo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Yc(Qp+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function kr(t,e,n,r=!1){const s=new Xc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class tg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ng{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wo(this),this.idTokenSubscription=new Wo(this),this.beforeStateQueue=new tg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}async initializeRecaptchaConfig(){const e=await Gc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Jc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Xc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ht(t){return Ge(t)}class Wo{constructor(e){this.auth=e,this.observer=null,this.addObserver=yh(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function rg(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rr(i,e??{}))return s;Oe(s,"already-initialized")}return n.initialize({options:e})}function sg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ig(t,e,n){const r=Ht(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Qc(e),{host:o,port:a}=og(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ag()}function Qc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function og(t){const e=Qc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ko(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ko(o)}}}function Ko(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ag(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function cg(t,e){return $t(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gs(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",mn(t,e))}/**
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
 */async function lg(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}async function ug(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}/**
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
 */class Vn extends bi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await kr(e,r,"signInWithPassword");return gs(e,s)}else return gs(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await kr(e,r,"signInWithPassword");return gs(e,i)}else return Promise.reject(s)});case"emailLink":return lg(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ug(e,{idToken:n,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rn(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",mn(t,e))}/**
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
 */const fg="http://localhost";class Ft extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rn(e,n)}buildRequest(){const e={requestUri:fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
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
 */function dg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hg(t){const e=Tn(Cn(t)).link,n=e?Tn(Cn(e)).deep_link_id:null,r=Tn(Cn(t)).deep_link_id;return(r?Tn(Cn(r)).link:null)||r||n||e||t}class Ei{constructor(e){var n,r,s,i,o,a;const c=Tn(Cn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=dg((s=c.mode)!==null&&s!==void 0?s:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hg(e);try{return new Ei(n)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return Vn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ei.parseLink(n);return B(r,"argument-error"),Vn._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ii{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xn extends Ii{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends Xn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends Xn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */async function ms(t,e){return Yn(t,"POST","/v1/accounts:signUp",mn(t,e))}/**
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
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=zo(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=zo(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function zo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Or extends wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Or.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Or(e,n,r,s)}}function Zc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Or._fromErrorAndOperation(t,i,e,r):i})}async function pg(t,e,n=!1){const r=await dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
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
 */async function gg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await dn(t,Zc(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=vi(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),Bt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),i}}/**
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
 */async function el(t,e,n=!1){const r="signIn",s=await Zc(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mg(t,e){return el(Ht(t),e)}async function s_(t,e,n){var r;const s=Ht(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await kr(s,i,"signUpPassword");o=ms(s,l)}else o=ms(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await kr(s,i,"signUpPassword");return ms(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Bt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function i_(t,e,n){return mg(Ge(t),_n.credential(e,n))}/**
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
 */async function _g(t,e){return $t(t,"POST","/v1/accounts:update",e)}/**
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
 */async function o_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ge(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await dn(r,_g(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vg(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function yg(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function tl(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function bg(t){return Ge(t).signOut()}const Nr="__sak";/**
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
 */class nl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Eg(){const t=ye();return yi(t)||Jr(t)}const Ig=1e3,wg=10;class rl extends nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Eg()&&Jp(),this.fallbackToPolling=zc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const Tg=rl;/**
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
 */class sl extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sl.type="SESSION";const il=sl;/**
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
 */function Cg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Cg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yr.receivers=[];/**
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
 */function wi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Rg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=wi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Ag(t){ze().location.href=t}/**
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
 */function ol(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Sg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kg(){return ol()?self:null}/**
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
 */const al="firebaseLocalStorageDb",Og=1,Dr="firebaseLocalStorage",cl="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xr(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function Ng(){const t=indexedDB.deleteDatabase(al);return new Qn(t).toPromise()}function js(){const t=indexedDB.open(al,Og);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dr,{keyPath:cl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dr)?e(r):(r.close(),await Ng(),e(await js()))})})}async function qo(t,e,n){const r=Xr(t,!0).put({[cl]:e,value:n});return new Qn(r).toPromise()}async function Dg(t,e){const n=Xr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Go(t,e){const n=Xr(t,!0).delete(e);return new Qn(n).toPromise()}const Mg=800,Lg=3;class ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yr._getInstance(kg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sg(),!this.activeServiceWorker)return;this.sender=new Rg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await js();return await qo(e,Nr,"1"),await Go(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Dg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Go(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ll.type="LOCAL";const xg=ll;new Jn(3e4,6e4);/**
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
 */function ul(t,e){return e?et(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ti extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ug(t){return el(t.auth,new Ti(t),t.bypassAuthState)}function Fg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gg(n,new Ti(t),t.bypassAuthState)}async function Bg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),pg(n,new Ti(t),t.bypassAuthState)}/**
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
 */class fl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ug;case"linkViaPopup":case"linkViaRedirect":return Bg;case"reauthViaPopup":case"reauthViaRedirect":return Fg;default:Oe(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $g=new Jn(2e3,1e4);async function a_(t,e,n){const r=Ht(t);kp(t,e,Ii);const s=ul(r,n);return new Dt(r,"signInViaPopup",e,s).executeNotNull()}class Dt extends fl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=wi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$g.get())};e()}}Dt.currentPopupAction=null;/**
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
 */const Hg="pendingRedirect",_r=new Map;class jg extends fl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const r=await Vg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vg(t,e){const n=zg(e),r=Kg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Wg(t,e){_r.set(t._key(),e)}function Kg(t){return et(t._redirectPersistence)}function zg(t){return mr(Hg,t.config.apiKey,t.name)}async function qg(t,e,n=!1){const r=Ht(t),s=ul(r,e),o=await new jg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gg=10*60*1e3;class Jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jo(e))}saveEventToCache(e){this.cachedEventUids.add(Jo(e)),this.lastProcessedEventTime=Date.now()}}function Jo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(t);default:return!1}}/**
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
 */async function Xg(t,e={}){return $t(t,"GET","/v1/projects",e)}/**
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
 */const Qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zg=/^https?/;async function em(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xg(t);for(const n of e)try{if(tm(n))return}catch{}Oe(t,"unauthorized-domain")}function tm(t){const e=Hs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zg.test(n))return!1;if(Qg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nm=new Jn(3e4,6e4);function Yo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rm(t){return new Promise((e,n)=>{var r,s,i;function o(){Yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yo(),n(Ke(t,"network-request-failed"))},timeout:nm.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Xp("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},Yc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vr=null,e})}let vr=null;function sm(t){return vr=vr||rm(t),vr}/**
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
 */const im=new Jn(5e3,15e3),om="__/auth/iframe",am="emulator/auth/iframe",cm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function um(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_i(e,am):`https://${t.config.authDomain}/${om}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=lm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function fm(t){const e=await sm(t),n=ze().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:um(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},im.get());function c(){ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hm=500,pm=600,gm="_blank",mm="http://localhost";class Xo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _m(t,e,n,r=hm,s=pm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ye().toLowerCase();n&&(a=Hc(l)?gm:n),$c(l)&&(e=e||mm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(qp(l)&&a!=="_self")return vm(e||"",a),new Xo(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Xo(h)}function vm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ym="__/auth/handler",bm="emulator/auth/handler",Em=encodeURIComponent("fac");async function Qo(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Ii){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Em}=${encodeURIComponent(c)}`:"";return`${Im(t)}?${qn(a).slice(1)}${l}`}function Im({config:t}){return t.emulator?_i(t,bm):`https://${t.authDomain}/${ym}`}/**
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
 */const _s="webStorageSupport";class wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=qg,this._overrideRedirectResult=Wg}async _openPopup(e,n,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qo(e,n,r,Hs(),s);return _m(e,o,wi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qo(e,n,r,Hs(),s);return Ag(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fm(e),r=new Jg(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_s,{type:_s},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_s];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=em(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zc()||yi()||Jr()}}const Tm=wm;var Zo="@firebase/auth",ea="0.23.2";/**
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
 */class Cm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Am(t){$n(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qc(t)},l=new ng(r,s,i,c);return sg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new fn("auth-internal",e=>{const n=Ht(e.getProvider("auth").getImmediate());return(r=>new Cm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Zo,ea,Rm(t)),tn(Zo,ea,"esm2017")}/**
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
 */const Sm=5*60,Pm=Tc("authIdTokenMaxAge")||Sm;let ta=null;const km=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pm)return;const s=n==null?void 0:n.token;ta!==s&&(ta=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hl(t=vp()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rg(t,{popupRedirectResolver:Tm,persistence:[xg,Tg,il]}),r=Tc("authTokenSyncURL");if(r){const i=km(r);yg(n,i,()=>i(n.currentUser)),vg(n,o=>i(o))}const s=ah("auth");return s&&ig(n,`http://${s}`),n}Am("Browser");const na=[{title:"Home",url:"/"},{title:"List",url:"/list"},{title:"Fetch",url:"/fetch"}];const Ci=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Om={class:"header"},Nm={class:"header__container container"},Dm={class:"header__nav"},Mm={class:"header__auth header-auth"},Lm=["onClick"],xm={__name:"TheHeader",setup(t){const e=Zd(),n=Ca(!1);let r;si(()=>{r=hl(),tl(r,o=>{n.value=!!o})});const s=Ae(()=>n.value?na:[na[0]]),i=()=>{bg(r).then(()=>{e.push("/"),console.log("Всё, вы не авторизованы")})};return(o,a)=>{const c=Va("RouterLink");return He(),dr("header",Om,[en("div",Nm,[en("nav",Dm,[(He(!0),dr(Te,null,Bu(s.value,l=>(He(),Zt(c,{to:l.url,class:"header__nav-item"},{default:Qt(()=>[pr(kl(l.title),1)]),_:2},1032,["to"]))),256))]),en("div",Mm,[n.value?ns("",!0):(He(),Zt(c,{key:0,class:"header-auth__link",to:"/register"},{default:Qt(()=>[pr(" Register ")]),_:1})),n.value?ns("",!0):(He(),Zt(c,{key:1,class:"header-auth__link",to:"/sing-in"},{default:Qt(()=>[pr(" Sing In ")]),_:1})),n.value?(He(),dr("a",{key:2,class:"header-auth__link link",onClick:Kf(i,["prevent"])}," Выйти ",8,Lm)):ns("",!0)])])])}}},Um=Ci(xm,[["__scopeId","data-v-ef9e4bf0"]]),Fm={};function Bm(t,e){return null}const $m=Ci(Fm,[["render",Bm]]);const Hm={class:"main"},jm={__name:"App",setup(t){return(e,n)=>{const r=Va("router-view");return He(),dr(Te,null,[he(Um),en("main",Hm,[he(r,null,{default:Qt(({Component:s})=>[he(fi,{name:"page",mode:"out-in"},{default:Qt(()=>[(He(),Zt(Fu(s)))]),_:2},1024)]),_:1})]),he($m)],64)}}},Vm=Ci(jm,[["__scopeId","data-v-9ec96a5b"]]),Wm="modulepreload",Km=function(t){return"/vue3-firebase-auth/"+t},ra={},En=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Km(i),i in ra)return;ra[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Wm,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},pl=Xd({history:hd("/vue3-firebase-auth/"),linkActiveClass:"--active",linkExactActiveClass:"--exact-active",routes:[{path:"/",component:()=>En(()=>import("./Home-05970239.js"),["assets/Home-05970239.js","assets/Section-dc64fcf0.js","assets/Section-fe41de33.css"])},{path:"/register",component:()=>En(()=>import("./Register-12fa102f.js"),["assets/Register-12fa102f.js","assets/Section-dc64fcf0.js","assets/Section-fe41de33.css","assets/Input-7e82bd2d.js","assets/Input-1ba5767f.css","assets/Register-97cb3ef4.css"]),meta:{requiresAuth:!1}},{path:"/sing-in",component:()=>En(()=>import("./SingIn-afe10d0f.js"),["assets/SingIn-afe10d0f.js","assets/Input-7e82bd2d.js","assets/Input-1ba5767f.css","assets/Section-dc64fcf0.js","assets/Section-fe41de33.css","assets/SingIn-358131d8.css"]),meta:{requiresAuth:!1}},{path:"/list",component:()=>En(()=>import("./List-538d3c25.js"),["assets/List-538d3c25.js","assets/Section-dc64fcf0.js","assets/Section-fe41de33.css","assets/List-94c561f8.css"]),meta:{requiresAuth:!0}},{path:"/fetch",component:()=>En(()=>import("./Fetch-6cb0e5c6.js"),[]),meta:{requiresAuth:!0}}]}),zm=()=>new Promise((t,e)=>{const n=tl(hl(),r=>{n(),t(r)},e)});pl.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=await zm();r&&!s?n("/"):n()});const qm={apiKey:"AIzaSyATrfY9lvCkHSanuu9PYLC4--hZKC5q0ME",authDomain:"kylekrylov-e6e6f.firebaseapp.com",projectId:"kylekrylov-e6e6f",storageBucket:"kylekrylov-e6e6f.appspot.com",messagingSenderId:"977235481792",appId:"1:977235481792:web:7c750923e77ef5d290c925"};var Gm="firebase",Jm="9.23.0";/**
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
 */tn(Gm,Jm,"app");Pc(qm);const gl=Gf(Vm);gl.use(pl);gl.mount("#app");export{Gs as A,n_ as B,Zm as C,Te as F,pt as G,Ci as _,tl as a,He as b,Zt as c,en as d,he as e,s_ as f,hl as g,o_ as h,Xm as i,i_ as j,dr as k,e_ as l,Ae as m,lr as n,si as o,Ym as p,Kf as q,Ca as r,a_ as s,kl as t,Zd as u,Qm as v,Qt as w,t_ as x,r_ as y,Bu as z};
