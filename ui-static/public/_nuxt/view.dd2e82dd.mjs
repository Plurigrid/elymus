import{s as d,a as h,r as a,t as v,l as p,o as _,b as f,e,w as m,p as w,v as b,u as r,q as g,f as x}from"./entry.c4173bb9.mjs";const k={class:"w-full flex flex-col justify-items-stretch items-start min-h-screen"},y={class:"bg-neutral navbar"},R={class:"flex-1 flex-row items-center"},B=e("div",{class:"navbar-start"},[e("a",{class:"btn btn-ghost normal-case text-xl"},"Elymus "),e("div",{class:"badge badge-warning"},"alpha")],-1),E={class:"form-control navbar-center"},M=["onSubmit"],N=e("button",{class:"btn btn-square rounded-none btn-primary",type:"submit"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),V=e("div",{class:"navbar-end"},null,-1),S={__name:"view",setup(j){let t=d(),i=h(),s=a(t.hash.slice(1)),o=a(a(t.hash.slice(1)));v(()=>{s.value=t.hash.slice(1),o.value=t.hash.slice(1)});function c(){i.replace({hash:"#"+s.value})}return(q,l)=>{const u=p("webview");return _(),f("div",k,[e("div",y,[e("div",R,[B,e("div",E,[e("form",{class:"input-group",onSubmit:m(c,["prevent"])},[w(e("input",{type:"text",placeholder:"Enter Repens or usual URL","onUpdate:modelValue":l[0]||(l[0]=n=>g(s)?s.value=n:s=n),class:"input input-bordered"},null,512),[[b,r(s)]]),N],40,M)]),V])]),x(u,{id:"site",src:r(o),class:"bg-white w-full h-full flex-grow"},null,8,["src"])])}}};export{S as default};
