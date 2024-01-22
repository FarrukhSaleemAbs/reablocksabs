import{j as t}from"./jsx-runtime-9c4ae004.js";import{r as a}from"./index-1b03fe98.js";import{D as e}from"./DebouncedInput-c9a27793.js";import"./Input-c133f965.js";import"./index-91038615.js";const v={title:"Components/Form/Debounced Input",component:e},n=()=>{const[s,l]=a.useState(""),[u,I]=a.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(e,{value:s,onValueChange:l}),"Instant input value: ",s,t.jsx("br",{}),t.jsx(e,{value:u,onValueChange:I,debounce:500}),"Delayed input value: ",u]})};var o,p,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [instantInput, setInstantInput] = useState('');
  const [slowInput, setSlowInput] = useState('');
  return <>
      <DebouncedInput value={instantInput} onValueChange={setInstantInput} />
      Instant input value: {instantInput}
      <br />
      <DebouncedInput value={slowInput} onValueChange={setSlowInput} debounce={500} />
      Delayed input value: {slowInput}
    </>;
}`,...(r=(p=n.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};export{n as Basic,v as default};
//# sourceMappingURL=DebouncedInput.story-f18000ae.js.map
