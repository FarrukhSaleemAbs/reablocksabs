import{j as r}from"./jsx-runtime-9c4ae004.js";import{r as p}from"./index-1b03fe98.js";import{I as s}from"./InlineInput-40d8930e.js";import"./index-f6b105ee.js";import"./index-91038615.js";const x={title:"Components/Form/Inline Input",component:s},e=()=>{const[n,d]=p.useState("");return r.jsx("div",{style:{border:"var(--input-border)",borderRadius:"var(--border-radius-md)",padding:"var(--spacing-sm)"},children:r.jsx(s,{value:n,onChange:i=>d(i.target.value),placeholder:"Type here..."})})};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [text, setText] = useState('');
  return <div style={{
    border: 'var(--input-border)',
    borderRadius: 'var(--border-radius-md)',
    padding: 'var(--spacing-sm)'
  }}>
      <InlineInput value={text} onChange={event => setText(event.target.value)} placeholder="Type here..." />
    </div>;
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as Basic,x as default};
//# sourceMappingURL=InlineInput.story-a3865f24.js.map
