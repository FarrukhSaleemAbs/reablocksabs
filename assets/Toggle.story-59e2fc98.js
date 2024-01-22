import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{c as x}from"./index-91038615.js";import{a as z}from"./motion-a93435c4.js";const C="_disabled_1jog0_11",M="_handle_1jog0_16",L="_checked_1jog0_20",q="_small_1jog0_29",N="_medium_1jog0_40",V="_large_1jog0_51",n={switch:"_switch_1jog0_1",disabled:C,handle:M,checked:L,small:q,medium:N,large:V},s=o.forwardRef(({checked:t,disabled:a,onChange:r,onBlur:i,className:u,size:m,...k},T)=>e.jsx("div",{...k,ref:T,tabIndex:0,className:x(n.switch,{[n.disabled]:a,[n.checked]:t,[n[m]]:!0},u),onClick:()=>{!a&&r&&r(!t)},onBlur:i,onKeyDown:v=>{!a&&r&&v.code==="Space"&&r(!t)},children:e.jsx(z.div,{className:n.handle,layout:!0,transition:{type:"spring",stiffness:700,damping:30}})}));s.defaultProps={size:"medium"};try{s.displayName="Toggle",s.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"Whether the toggle is checked or not.",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the toggle is disabled or not.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional class names to apply to the toggle.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onChange:{defaultValue:null,description:"When the toggle is changed.",name:"onChange",required:!1,type:{name:"(value: boolean) => void"}},onBlur:{defaultValue:null,description:"When the toggle was blurred.",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLDivElement, Element>) => void"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const w={title:"Components/Form/Toggle",component:s},l=()=>{const[t,a]=o.useState(!0);return e.jsx(s,{checked:t,onChange:a})},c=()=>{const[t,a]=o.useState(!0);return e.jsx(s,{disabled:!0,checked:t,onChange:a})},d=()=>{const[t,a]=o.useState(!0),[r,i]=o.useState(!0),[u,m]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(s,{checked:t,onChange:a,size:"small"}),e.jsx("br",{}),e.jsx(s,{checked:r,onChange:i,size:"medium"}),e.jsx("br",{}),e.jsx(s,{checked:u,onChange:m,size:"large"})]})};var g,p,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Toggle checked={state} onChange={setState} />;
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var S,_,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Toggle disabled checked={state} onChange={setState} />;
}`,...(f=(_=c.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var b,j,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [stateSmall, setStateSmall] = useState(true);
  const [stateMedium, setStateMedium] = useState(true);
  const [stateLarge, setStateLarge] = useState(true);
  return <>
      <Toggle checked={stateSmall} onChange={setStateSmall} size="small" />
      <br />
      <Toggle checked={stateMedium} onChange={setStateMedium} size="medium" />
      <br />
      <Toggle checked={stateLarge} onChange={setStateLarge} size="large" />
    </>;
}`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const R=Object.freeze(Object.defineProperty({__proto__:null,Disabled:c,Simple:l,Sizes:d,default:w},Symbol.toStringTag,{value:"Module"}));export{c as D,l as S,s as T,d as a,R as b};
//# sourceMappingURL=Toggle.story-59e2fc98.js.map
