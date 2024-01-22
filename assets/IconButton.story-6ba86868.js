import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as b}from"./index-1b03fe98.js";import{a as S}from"./Button-de41aa90.js";import"./ButtonGroup-fb133ea9.js";const n=b.forwardRef(({children:s,...w},_)=>e.jsx(S,{...w,ref:_,children:s}));try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{color:{defaultValue:null,description:"Color variation of the button.",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"primaryDates"'}]}},size:{defaultValue:null,description:"The size variation of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disablePadding:{defaultValue:null,description:"If true, the padding of the button will be disabled.",name:"disablePadding",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Style variant of the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outline"'},{value:'"filled"'},{value:'"filledDates"'}]}},disableMargins:{defaultValue:null,description:"If true, the margins of the button will be disabled.",name:"disableMargins",required:!1,type:{name:"boolean"}},disableAnimation:{defaultValue:null,description:"If true, the animation of the button will be disabled.",name:"disableAnimation",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}const V={title:"Components/Elements/IconButton",component:n},t=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"})}),o=()=>e.jsxs(b.Fragment,{children:[e.jsx(n,{size:"small",children:e.jsx(t,{})})," ",e.jsx(n,{size:"medium",children:e.jsx(t,{})})," ",e.jsx(n,{size:"large",children:e.jsx(t,{})})]}),i=()=>e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(n,{size:"medium",variant:"filled",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"filled",color:"primary",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"filled",color:"secondary",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"filled",color:"success",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"filled",color:"warning",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"filled",color:"error",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"filled",disabled:!0,children:e.jsx(t,{})})]}),a=()=>e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(n,{size:"medium",variant:"text",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",color:"primary",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",color:"secondary",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",color:"success",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",color:"warning",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",color:"error",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",disabled:!0,children:e.jsx(t,{})})]}),l=()=>e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(n,{size:"medium",variant:"outline",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",color:"primary",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",color:"secondary",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",color:"success",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",color:"warning",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",color:"error",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",disabled:!0,children:e.jsx(t,{})})]}),r=()=>e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(n,{size:"medium",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"outline",children:e.jsx(t,{})}),e.jsx(n,{size:"medium",variant:"text",children:e.jsx(t,{})})]});var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Fragment>
    <IconButton size="small">
      <BellIcon />
    </IconButton>
    {\` \`}
    <IconButton size="medium">
      <BellIcon />
    </IconButton>
    {\` \`}
    <IconButton size="large">
      <BellIcon />
    </IconButton>
  </Fragment>`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,I,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 10,
  alignItems: 'center'
}}>
    <IconButton size="medium" variant="filled">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="success">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="warning">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="error">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" disabled>
      <BellIcon />
    </IconButton>
  </div>`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,v,p;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 10,
  alignItems: 'center'
}}>
    <IconButton size="medium" variant="text">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="success">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="warning">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="error">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" disabled>
      <BellIcon />
    </IconButton>
  </div>`,...(p=(v=a.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var j,f,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 10,
  alignItems: 'center'
}}>
    <IconButton size="medium" variant="outline">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="success">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="warning">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="error">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" disabled>
      <BellIcon />
    </IconButton>
  </div>`,...(z=(f=l.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var h,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 10,
  alignItems: 'center'
}}>
    <IconButton size="medium">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text">
      <BellIcon />
    </IconButton>
  </div>`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const A=Object.freeze(Object.defineProperty({__proto__:null,ColorsBackground:i,ColorsIcons:a,ColorsOutline:l,Sizes:o,Variants:r,default:V},Symbol.toStringTag,{value:"Module"}));export{i as C,n as I,o as S,r as V,a,l as b,A as c};
//# sourceMappingURL=IconButton.story-6ba86868.js.map
