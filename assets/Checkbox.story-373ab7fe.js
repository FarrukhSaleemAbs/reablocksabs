import{j as a}from"./jsx-runtime-9c4ae004.js";import{r as d}from"./index-1b03fe98.js";import{c as S}from"./index-91038615.js";import{u as $}from"./IconBlocks-34ec627d.js";import{u as H}from"./use-motion-value-ed8c6af9.js";import{i as G,b as J,c as Q,f as X,d as _,u as Y,a as m}from"./motion-a93435c4.js";const ee=e=>typeof e=="object"&&e.mix,te=e=>ee(e)?e.mix:void 0;function ae(...e){const t=!Array.isArray(e[0]),n=t?0:-1,s=e[0+n],c=e[1+n],r=e[2+n],i=e[3+n],x=G(c,r,{mixer:te(r[0]),...i});return t?x(s):x}function P(e,t){const n=H(t()),s=()=>n.set(t());return s(),J(()=>{const c=()=>X.update(s,!1,!0),r=e.map(i=>i.on("change",c));return()=>{r.forEach(i=>i()),Q(s)}}),n}function se(e){_.current=[],e();const t=P(_.current,e);return _.current=void 0,t}function ne(e,t,n,s){if(typeof e=="function")return se(e);const c=typeof t=="function"?t:ae(t,n,s);return Array.isArray(e)?j(e,c):j([e],([r])=>c(r))}function j(e,t){const n=Y(()=>[]);return P(e,()=>{n.length=0;const s=e.length;for(let c=0;c<s;c++)n[c]=e[c].get();return t(n)})}const re="_container_1m42y_1",ce="_label_1m42y_6",oe="_clickable_1m42y_11",le="_check_1m42y_17",ie="_checkbox_1m42y_21",de="_small_1m42y_27",ue="_medium_1m42y_32",me="_large_1m42y_37",he="_disabled_1m42y_46",l={container:re,label:ce,clickable:oe,check:le,checkbox:ie,small:de,medium:ue,large:me,disabled:he},o=d.forwardRef(({checked:e,intermediate:t,label:n,disabled:s,size:c,onChange:r,onBlur:i,className:x,containerClassName:R,labelClassName:K,...O},U)=>{const g=$(),y=H(0),v=ne(y,[.05,.15],[0,1]),C={pressed:u=>({pathLength:u?.85:.3}),checked:{pathLength:1},unchecked:{pathLength:0}},Z={hover:{strokeWidth:1,stroke:g.components.checkbox["checkbox-box-checked-stroke"]},pressed:{scale:.95},checked:{stroke:g.components.checkbox["checkbox-box-checked-stroke"]},unchecked:{stroke:g.components.checkbox["checkbox-box-unchecked-stroke"]}};return a.jsxs("div",{className:S(l.container,R),children:[a.jsx(m.div,{...O,ref:U,tabIndex:s?-1:0,className:S(l.checkbox,x,{[l.disabled]:s,[l.small]:c==="small",[l.medium]:c==="medium",[l.large]:c==="large"}),onClick:u=>{!s&&r&&(u.stopPropagation(),r(!e))},onBlur:i,onKeyDown:u=>{!s&&r&&u.code==="Space"&&r(!e)},children:a.jsxs(m.svg,{animate:e?"checked":"unchecked",whileHover:s?void 0:"hover",whileTap:s?void 0:"pressed",viewBox:"0 0 16 16",children:[a.jsx(m.path,{d:"M 0 0 L 0 16 L 16 16 L 16 0 Z",variants:Z}),t?a.jsx(m.path,{d:"M 5.36396 8.17792 L 10.6044 8.17792",fill:"transparent",strokeWidth:"1",className:l.check,variants:C,style:{pathLength:y,opacity:v},custom:e}):a.jsx(m.path,{d:"M 5.36396 8.17792 L 7.34236 9.91424 L 10.6044 5.832",fill:"transparent",strokeWidth:"1",className:l.check,variants:C,style:{pathLength:y,opacity:v},custom:e})]})}),n&&a.jsx("span",{className:S(l.label,K,{[l.clickable]:!s&&r}),onClick:()=>{!s&&r&&(r==null||r(!e))},children:n})]})});o.defaultProps={checked:!1,intermediate:!1,size:"medium"};try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:{value:"false"},description:"Whether the checkbox is checked or not.",name:"checked",required:!1,type:{name:"boolean"}},intermediate:{defaultValue:{value:"false"},description:"Whether the checkbox is in an intermediate state or not.",name:"intermediate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the checkbox.",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether the checkbox is disabled or not.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Size of the checkbox.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"Additional class names to apply to the checkbox.",name:"className",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Additional class names to apply to the container.",name:"containerClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional class names to apply to the label.",name:"labelClassName",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Event handler for when the checkbox is changed.",name:"onChange",required:!1,type:{name:"(value: boolean) => void"}},onBlur:{defaultValue:null,description:"Event handler for when the checkbox is blurred.",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLDivElement, Element>) => void"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}}}catch{}const pe={title:"Components/Form/Checkbox",component:o},h=()=>{const[e,t]=d.useState(!0);return a.jsx(o,{checked:e,label:"Check me",onChange:t})},p=()=>{const[e,t]=d.useState(!0);return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(o,{checked:e,label:"¯\\_(ツ)_/¯",onChange:t,intermediate:!0}),a.jsx(o,{checked:e,label:"Disabled",onChange:t,disabled:!0}),a.jsx(o,{checked:e,label:"Intermediate",onChange:t,intermediate:!0})]})},b=()=>{const[e,t]=d.useState(!0);return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx(o,{checked:e,label:"Disabled",onChange:t,disabled:!0}),a.jsx(o,{checked:e,label:"Intermediate",onChange:t,intermediate:!0})]})},k=()=>{const[e,t]=d.useState(!0);return a.jsxs(d.Fragment,{children:[a.jsx("div",{style:{padding:20},children:a.jsx(o,{checked:e,size:"small",label:"Small",onChange:t})}),a.jsx("div",{style:{padding:20},children:a.jsx(o,{checked:e,size:"medium",label:"Medium",onChange:t})}),a.jsx("div",{style:{padding:20},children:a.jsx(o,{checked:e,size:"large",label:"Large",onChange:t})})]})},f=()=>{const[e,t]=d.useState(!0);return a.jsx(o,{checked:e,label:"Disabled",onChange:t,disabled:!0})};var V,L,N;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Checkbox checked={state} label="Check me" onChange={setState} />;
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var I,M,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }}>
      <Checkbox checked={state} label="¯\\_(ツ)_/¯" onChange={setState} intermediate />
      <Checkbox checked={state} label="Disabled" onChange={setState} disabled />
      <Checkbox checked={state} label="Intermediate" onChange={setState} intermediate />
    </div>;
}`,...(q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var z,D,E;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }}>
      <Checkbox checked={state} label="Disabled" onChange={setState} disabled />
      <Checkbox checked={state} label="Intermediate" onChange={setState} intermediate />
    </div>;
}`,...(E=(D=b.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,A,F;k.parameters={...k.parameters,docs:{...(w=k.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Fragment>
      <div style={{
      padding: 20
    }}>
        <Checkbox checked={state} size="small" label="Small" onChange={setState} />
      </div>
      <div style={{
      padding: 20
    }}>
        <Checkbox checked={state} size="medium" label="Medium" onChange={setState} />
      </div>
      <div style={{
      padding: 20
    }}>
        <Checkbox checked={state} size="large" label="Large" onChange={setState} />
      </div>
    </Fragment>;
}`,...(F=(A=k.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var T,W,B;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [state, setState] = useState(true);
  return <Checkbox checked={state} label="Disabled" onChange={setState} disabled />;
}`,...(B=(W=f.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const Se=Object.freeze(Object.defineProperty({__proto__:null,Disabled:f,Intermediate:p,Simple:h,Sizes:k,States:b,default:pe},Symbol.toStringTag,{value:"Module"}));export{o as C,h as S,k as a,b,Se as c};
//# sourceMappingURL=Checkbox.story-373ab7fe.js.map
