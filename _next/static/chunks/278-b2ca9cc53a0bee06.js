"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{3571:function(e,t,r){var n=r(5862),s=r(4231);t.Z=e=>{let t=e.href.toString().startsWith("https");return(0,n.jsx)(s.default,{rel:t?"noopener noreferrer":void 0,target:t?"_blank":void 0,...e})}},3597:function(e,t,r){r.d(t,{UH:function(){return c},lL:function(){return i}});var n=r(5862),s=r(506);let a=(0,s.tv)({base:"flex flex-col items-center",variants:{bgColor:{black:"bg-black",white:"bg-white",neutral:"bg-neutral-200",secondary:"bg-secondary-100"},height:{full:"min-h-screen",firstFull:"min-h-[calc(100vh-64px)]"},gap:{true:"gap-4 sm:gap-8 md:gap-16"},padding:{true:"p-4 pb-8 sm:p-8 md:p-16"},shadow:{true:"drop-shadow-md"}}}),i=e=>{let{children:t,as:r,id:s,className:i,...l}=e;return(0,n.jsx)(r||"article",{className:a({...l,className:i}),id:s,children:t})},{wrapper:l,strap:o,title:u}=(0,s.tv)({slots:{wrapper:"flex flex-col gap-4 text-center",strap:"text-2xl font-medium text-primary-800 sm:text-3xl",title:"text-4xl font-semibold uppercase md:text-5xl lg:text-6xl"}})(),c=e=>{let{strap:t,className:r,children:s}=e;return(0,n.jsxs)("div",{className:l({className:null==r?void 0:r.wrapper}),children:[o&&(0,n.jsx)("span",{className:o({className:null==r?void 0:r.strap}),children:t}),(0,n.jsx)("h2",{className:u({className:null==r?void 0:r.title}),children:s})]})};t.ZP=i},351:function(e,t,r){var n=r(5862);let s=(0,r(506).tv)({base:"flex items-center gap-2 whitespace-nowrap rounded-full",variants:{variant:{filled:"bg-primary-800 fill-white text-white hover:bg-primary-700 hover:shadow-md active:bg-primary-900 active:shadow-none",outlined:"border-2 border-primary-800 text-primary-800",text:"bg-neutral-900/0 hover:bg-neutral-900/10 active:bg-neutral-900/20"},size:{normal:"min-h-10 p-4 py-2 text-xl leading-0"}},defaultVariants:{variant:"filled",size:"normal"}});t.Z=e=>{let{as:t,size:r,variant:a,className:i,...l}=e;return(0,n.jsx)(t||"button",{className:s({size:r,variant:a,className:i}),...l})}},8578:function(e,t,r){r.d(t,{Zb:function(){return i},ll:function(){return o}});var n=r(5862),s=r(506);let a=(0,s.tv)({base:"rounded-3xl shadow-md",variants:{bgColor:{white:"bg-white",neutral:"bg-neutral-200"}},defaultVariants:{bgColor:"neutral"}}),i=e=>{let{as:t,className:r,bgColor:s,...i}=e;return(0,n.jsx)(t||"div",{className:a({bgColor:s,className:r}),...i})},l=(0,s.tv)({base:"text-2xl/none font-bold uppercase text-primary-800"}),o=e=>{let{as:t,className:r,children:s}=e;return(0,n.jsx)(t||"h3",{className:l({className:r}),children:s})};t.ZP=i},7398:function(e,t){t.default={SITE_URL:"https://optimusjr.com.br",QUOTE_URL:"/quote",IS_PROSEL:!0,PROSEL_FORM_URL:"https://forms.gle/YYviJ7yPabRXaSZn8",EMAIL:"contato@optimusjr.com.br",PHONE_NUMBER:"(71) 99610-0916",WHATSAPP:"+55 71 9610-0916",WHATSAPP_LINK:"https://wa.me/557196100916",INSTAGRAM:"https://www.instagram.com/optimusjrautomacao/",LINKEDIN:"https://br.linkedin.com/company/optimusjr",FACEBOOK:"https://pt-br.facebook.com/OptimusJrAutomacao/",STATIC_FORMS_ACCESS_KEY:"b7d363fa-7422-4f28-8e6a-e3d08e276a21"}},4778:function(e,t,r){r.d(t,{M:function(){return g}});var n=r(5862),s=r(7058),a=r(6918);function i(){let e=(0,s.useRef)(!1);return(0,a.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var l=r(7896),o=r(5039),u=r(6916),c=r(9427);class d extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:e,isPresent:t}){let r=(0,s.useId)(),a=(0,s.useRef)(null),i=(0,s.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,s.useContext)(c._);return(0,s.useInsertionEffect)(()=>{let{width:e,height:n,top:s,left:o}=i.current;if(t||!a.current||!e||!n)return;a.current.dataset.motionPopId=r;let u=document.createElement("style");return l&&(u.nonce=l),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${s}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),(0,n.jsx)(d,{isPresent:t,childRef:a,sizeRef:i,children:s.cloneElement(e,{ref:a})})}let f=({children:e,initial:t,isPresent:r,onExitComplete:a,custom:i,presenceAffectsLayout:l,mode:c})=>{let d=(0,u.h)(m),f=(0,s.useId)(),h=(0,s.useMemo)(()=>({id:f,initial:t,isPresent:r,custom:i,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;a&&a()},register:e=>(d.set(e,!1),()=>d.delete(e))}),l?[Math.random()]:[r]);return(0,s.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[r]),s.useEffect(()=>{r||d.size||!a||a()},[r]),"popLayout"===c&&(e=(0,n.jsx)(p,{isPresent:r,children:e})),(0,n.jsx)(o.O.Provider,{value:h,children:e})};function m(){return new Map}var h=r(1375),x=r(230);let b=e=>e.key||"",g=({children:e,custom:t,initial:r=!0,onExitComplete:o,exitBeforeEnter:u,presenceAffectsLayout:c=!0,mode:d="sync"})=>{var p;(0,x.k)(!u,"Replace exitBeforeEnter with mode='wait'");let m=(0,s.useContext)(h.p).forceRender||function(){let e=i(),[t,r]=(0,s.useState)(0),n=(0,s.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,s.useCallback)(()=>l.Wi.postRender(n),[n]),t]}()[0],g=i(),v=function(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}(e),w=v,E=(0,s.useRef)(new Map).current,R=(0,s.useRef)(w),y=(0,s.useRef)(new Map).current,j=(0,s.useRef)(!0);if((0,a.L)(()=>{j.current=!1,function(e,t){e.forEach(e=>{let r=b(e);t.set(r,e)})}(v,y),R.current=w}),p=()=>{j.current=!0,y.clear(),E.clear()},(0,s.useEffect)(()=>()=>p(),[]),j.current)return(0,n.jsx)(n.Fragment,{children:w.map(e=>(0,n.jsx)(f,{isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:c,mode:d,children:e},b(e)))});w=[...w];let C=R.current.map(b),P=v.map(b),N=C.length;for(let e=0;e<N;e++){let t=C[e];-1!==P.indexOf(t)||E.has(t)||E.set(t,void 0)}return"wait"===d&&E.size&&(w=[]),E.forEach((e,r)=>{if(-1!==P.indexOf(r))return;let s=y.get(r);if(!s)return;let a=C.indexOf(r),i=e;i||(i=(0,n.jsx)(f,{isPresent:!1,onExitComplete:()=>{E.delete(r);let e=Array.from(y.keys()).filter(e=>!P.includes(e));if(e.forEach(e=>y.delete(e)),R.current=v.filter(t=>{let n=b(t);return n===r||e.includes(n)}),!E.size){if(!1===g.current)return;m(),o&&o()}},custom:t,presenceAffectsLayout:c,mode:d,children:s},b(s)),E.set(r,i)),w.splice(a,0,i)}),w=w.map(e=>{let t=e.key;return E.has(t)?e:(0,n.jsx)(f,{isPresent:!0,presenceAffectsLayout:c,mode:d,children:e},b(e))}),(0,n.jsx)(n.Fragment,{children:E.size?w:w.map(e=>(0,s.cloneElement)(e))})}}}]);