import{_,r as u,o as p,c as g,w as m,a as t,b as s,g as b,s as v,f as I,p as f,e as h}from"./index-46760314.js";import{A as c,a as S,b as V}from"./Input-96437224.js";import{S as w}from"./Section-b931830a.js";const x=o=>(f("data-v-df1d90d2"),o=o(),h(),o),A=x(()=>t("h1",{class:"title1"}," Войти ",-1)),k={class:"register"},y={class:"register__buttons"},C={__name:"SingIn",setup(o){const a=u(""),n=u(""),i=()=>{const l=b();v(l,a.value,n.value).then(e=>{console.log(l.currentUser),I.push("/")}).catch(e=>{console.log(`
error: "${e.code}"
code: "${e.code}"
message:"${e.message}"
			`)})},r=()=>{};return(l,e)=>(p(),g(w,{center:""},{default:m(()=>[A,t("div",k,[s(c,{"input-type":"text",placeholder:"Email",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=d=>a.value=d)},null,8,["modelValue"]),s(c,{"input-type":"password",placeholder:"Password",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=d=>n.value=d)},null,8,["modelValue"]),t("div",null,[t("button",{class:"register__button button",onClick:i}," Войти ")]),t("div",y,[t("button",{class:"register__button button button-google",disabled:"",onClick:r},[s(S)]),t("button",{class:"register__button button button-google",disabled:"",onClick:e[2]||(e[2]=()=>{})},[s(V)])])])]),_:1}))}},E=_(C,[["__scopeId","data-v-df1d90d2"]]);export{E as default};
