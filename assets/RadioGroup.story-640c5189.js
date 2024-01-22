import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{a as C,R as n}from"./Radio-a961493d.js";const s=({children:l,className:r,onChange:a,selectedValue:h})=>{const[d,m]=t.useState(h),i=t.useCallback(u=>{m(u),a(u)},[a]),y=t.useMemo(()=>({onChange:i,selectedValue:d}),[i,d]);return e.jsx(C.Provider,{value:y,children:l})};try{s.displayName="RadioGroup",s.__docgenInfo={description:"",displayName:"RadioGroup",props:{children:{defaultValue:null,description:"The Radio Buttons to display in the group.",name:"children",required:!0,type:{name:"any"}},className:{defaultValue:null,description:"Additional CSS classes to apply to the Radio group",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Event handler for when the radio selection is changed.",name:"onChange",required:!0,type:{name:"(value: any) => void"}},selectedValue:{defaultValue:null,description:"Default value of the Radio Button which is checked",name:"selectedValue",required:!0,type:{name:"any"}}}}}catch{}const R={title:"Components/Form/Radio/Group",component:s},o=()=>{const l="blue",[r,a]=t.useState(l);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onChange:a,selectedValue:l,children:e.jsxs("div",{style:{gap:"10px",display:"flex",width:"250px"},children:[e.jsx(n,{value:"red",onChange:()=>console.log("Optionally do something else as well onRedSelected "),label:"Red"}),e.jsx(n,{value:"blue",onChange:()=>console.log("Optionally do something else as well onBlueSelected "),label:"Blue"}),e.jsx(n,{value:"green",onChange:()=>console.log("Optionally do something else as well onGreenSelected "),label:"Green"})]})}),e.jsx("br",{}),e.jsxs("div",{children:["Selected Color: ",r]})]})};var c,p,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const defaultValue = 'blue';
  const [selectedColor, setSelectedColor] = useState<string>(defaultValue);
  return <>
      <RadioGroup onChange={setSelectedColor} selectedValue={defaultValue}>
        <div style={{
        gap: '10px',
        display: 'flex',
        width: '250px'
      }}>
          <Radio value="red" onChange={() => console.log('Optionally do something else as well onRedSelected ')} label="Red" />
          <Radio value="blue" onChange={() => console.log('Optionally do something else as well onBlueSelected ')} label="Blue" />
          <Radio value="green" onChange={() => console.log('Optionally do something else as well onGreenSelected ')} label="Green" />
        </div>
      </RadioGroup>
      <br />
      <div>Selected Color: {selectedColor}</div>
    </>;
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const v=Object.freeze(Object.defineProperty({__proto__:null,Simple:o,default:R},Symbol.toStringTag,{value:"Module"}));export{s as R,o as S,v as a};
//# sourceMappingURL=RadioGroup.story-640c5189.js.map
