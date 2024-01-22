import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as n}from"./index-1b03fe98.js";import{R as t}from"./Radio-a961493d.js";import"./index-91038615.js";import"./motion-a93435c4.js";const f={title:"Components/Form/Radio",component:t},r=()=>{const[a,s]=n.useState(!0);return e.jsx(t,{checked:a,label:"Label",onChange:s})},o=()=>{const[a,s]=n.useState(!0);return e.jsx(t,{disabled:!0,checked:a,onChange:s})},l=()=>{const[a,s]=n.useState("small"),c=b=>{s(b)};return e.jsxs(n.Fragment,{children:[e.jsx(t,{checked:a==="small",onChange:()=>c("small"),size:"small",label:"Small"}),e.jsx("br",{}),e.jsx(t,{checked:a==="medium",onChange:()=>c("medium"),size:"medium",label:"Medium"}),e.jsx("br",{}),e.jsx(t,{checked:a==="large",onChange:()=>c("large"),size:"large",label:"Large"})]})};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Radio checked={state} label="Label" onChange={setState} />;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,S,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Radio disabled checked={state} onChange={setState} />;
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var g,p,z;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [selectedSize, setSelectedSize] = useState('small');
  const handleSizeChange = size => {
    setSelectedSize(size);
  };
  return <Fragment>
      <Radio checked={selectedSize === 'small'} onChange={() => handleSizeChange('small')} size="small" label="Small" />
      <br />
      <Radio checked={selectedSize === 'medium'} onChange={() => handleSizeChange('medium')} size="medium" label="Medium" />
      <br />
      <Radio checked={selectedSize === 'large'} onChange={() => handleSizeChange('large')} size="large" label="Large" />
    </Fragment>;
}`,...(z=(p=l.parameters)==null?void 0:p.docs)==null?void 0:z.source}}};export{o as Disabled,r as Simple,l as Sizes,f as default};
//# sourceMappingURL=Radio.story-36736cab.js.map
