import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as O}from"./index-1b03fe98.js";import{C as r}from"./Chip-85e5b3a5.js";import"./index-91038615.js";const _={title:"Components/Elements/Chip",component:r},o=()=>e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(r,{children:"Default"}),e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"secondary",children:"Secondary"}),e.jsx(r,{color:"error",children:"Error"}),e.jsx(r,{color:"success",children:"Warning"}),e.jsx(r,{color:"warning",children:"Warning"}),e.jsx(r,{color:"info",children:"Info"})]}),a=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx(r,{size:"small",children:"Small"}),e.jsx(r,{children:"Medium"}),e.jsx(r,{size:"large",children:"Large"})]}),i=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx(r,{start:e.jsx(s,{}),children:"Icon"}),e.jsx(r,{end:e.jsx(s,{}),children:"Icon"}),e.jsx(r,{start:"$",end:e.jsx(s,{}),children:"Icon"})]}),n=()=>e.jsx(r,{start:e.jsx(s,{}),children:"Icon"}),t=()=>e.jsx(r,{end:e.jsx(s,{}),children:"Icon"}),c=()=>e.jsx(r,{start:"$",end:e.jsx(s,{}),children:"Icon"}),l=()=>e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(r,{variant:"filled",children:"Filled"}),e.jsx(r,{variant:"outline",children:"Outline"})]}),p=()=>{const[d,F]=O.useState(!1);return e.jsx(r,{onClick:()=>F(!d),selected:d,children:"Selectable"})},s=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z"})});var h,m,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 10
}}>
    <Chip>Default</Chip>
    <Chip color="primary">Primary</Chip>
    <Chip color="secondary">Secondary</Chip>
    <Chip color="error">Error</Chip>
    <Chip color="success">Warning</Chip>
    <Chip color="warning">Warning</Chip>
    <Chip color="info">Info</Chip>
  </div>`,...(C=(m=o.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var x,u,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: 10
}}>
    <Chip size="small">Small</Chip>
    <Chip>Medium</Chip>
    <Chip size="large">Large</Chip>
  </div>`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var j,y,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: 10
}}>
    <Chip start={<DemoIcon />}>Icon</Chip>
    <Chip end={<DemoIcon />}>Icon</Chip>
    <Chip start={'$'} end={<DemoIcon />}>
      Icon
    </Chip>
  </div>`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var f,S,L;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"() => <Chip start={<DemoIcon />}>Icon</Chip>",...(L=(S=n.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var v,D,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"() => <Chip end={<DemoIcon />}>Icon</Chip>",...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var E,z,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Chip start={'$'} end={<DemoIcon />}>
    Icon
  </Chip>`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var M,W,$;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 10
}}>
    <Chip variant="filled">Filled</Chip>
    <Chip variant="outline">Outline</Chip>
  </div>`,...($=(W=l.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var b,R,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [state, setState] = useState(false);
  return <Chip onClick={() => setState(!state)} selected={state}>
      Selectable
    </Chip>;
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};export{i as Adornment,o as Colors,t as EndAdornment,p as Selectable,a as Sizes,n as StartAdornment,c as StartEndAdornment,l as Variants,_ as default};
//# sourceMappingURL=Chip.story-893b549a.js.map
