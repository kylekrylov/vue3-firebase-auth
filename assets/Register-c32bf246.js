import{_ as V,u as f,r as i,b as w,c as I,w as x,d as o,e as a,g as m,f as A,h as y,G as U,s as k,p as P,i as R}from"./index-8300ca3f.js";import{S}from"./Section-74d785ce.js";import{A as p,a as C,b as G}from"./Input-1fa9e89c.js";const N=l=>(P("data-v-b0c1d0a5"),l=l(),R(),l),$=N(()=>o("h1",{class:"title1"}," Регистрация ",-1)),B={class:"register"},W={class:"register__buttons"},E={__name:"Register",setup(l){const g=f(),u=i(""),r=i(""),c=i(""),h=()=>{const n=m(),e=u.value,t=r.value,d=c.value;A(n,e,t).then(s=>{const b=s.user;d?y(b,{displayName:d}).then(()=>{alert(`${d}! Вы зарегистрированы`)}).catch(v=>{console.log("Ошибка при обновлении профиля:",v)}):alert("Вы зарегистрированы")}).catch(s=>{console.log(`
error: ${s.code}
code: ${s.code}
message: ${s.message}
			`)})},_=()=>{const n=new U;k(m(),n).then(e=>{g.push("/")}).catch(e=>{console.log(e)})};return(n,e)=>(w(),I(S,{center:""},{default:x(()=>[$,o("div",B,[a(p,{"input-type":"text",placeholder:"Email",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t)},null,8,["modelValue"]),a(p,{"input-type":"password",placeholder:"Password",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t)},null,8,["modelValue"]),a(p,{"input-type":"text",placeholder:"Name",modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=t=>c.value=t)},null,8,["modelValue"]),o("div",null,[o("button",{class:"register__button button",onClick:h}," Register ")]),o("div",W,[o("button",{class:"register__button button button-google",onClick:_},[a(C)]),o("button",{class:"register__button button button-google",disabled:"",onClick:_},[a(G)])])])]),_:1}))}},z=V(E,[["__scopeId","data-v-b0c1d0a5"]]);export{z as default};
