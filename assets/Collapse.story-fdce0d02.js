import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as a}from"./index-1b03fe98.js";import{C as s}from"./Collapse-ed6650c8.js";import"./index-91038615.js";import"./isFunction-2d8a1518.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";const f={title:"Components/Layout/Collapse",component:s},t=()=>{const[o,d]=a.useState(!1);return e.jsxs("div",{style:{height:300,textAlign:"center"},children:[e.jsx("button",{type:"button",onClick:()=>d(!o),children:"Expand Contents"}),e.jsxs(s,{expanded:o,children:[e.jsx("h1",{children:"Hello"}),e.jsx("p",{children:"The quick fox jumped over the fence"}),e.jsx("p",{children:"The quick fox jumped over the fence"}),e.jsx("p",{children:"The quick fox jumped over the fence"})]})]})};var n,p,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return <div style={{
    height: 300,
    textAlign: 'center'
  }}>
      <button type="button" onClick={() => setExpanded(!expanded)}>
        Expand Contents
      </button>
      <Collapse expanded={expanded}>
        <h1>Hello</h1>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
      </Collapse>
    </div>;
}`,...(r=(p=t.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};export{t as Simple,f as default};
//# sourceMappingURL=Collapse.story-fdce0d02.js.map
