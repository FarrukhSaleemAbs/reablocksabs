import{j as e}from"./jsx-runtime-9c4ae004.js";import{D as W,u as o}from"./useDialog-dcefdbdf.js";import"./index-1b03fe98.js";import"./index-91038615.js";import"./rdk-b7736295.js";import"./index-6fd5a17b.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";import"./focus-trap-react-b3e8c062.js";import"./index-f6b105ee.js";const q={title:"Components/Layers/Dialog",component:W},r=()=>{const{toggleOpen:n,Dialog:t}=o();return e.jsxs("div",{style:{textAlign:"center",margin:"50px"},children:[e.jsx("button",{onClick:n,children:"Open"}),e.jsx(t,{header:"Whats up",children:"Hello"})]})},l=()=>{const{toggleOpen:n,Dialog:t}=o();return e.jsxs("div",{style:{textAlign:"center",margin:"50px"},children:[e.jsx("button",{onClick:n,children:"Open"}),e.jsx(t,{header:e.jsx("h3",{children:"What's up"}),children:"Hello"})]})},f=({children:n})=>e.jsx("div",{children:n}),i=()=>{const{toggleOpen:n,Dialog:t}=o();return e.jsxs("div",{style:{textAlign:"center",margin:"50px"},children:[e.jsx("button",{onClick:n,children:"Open"}),e.jsx(t,{header:"My Custom Header",headerElement:e.jsx(f,{}),children:"Body Content"})]})},a=()=>{const{toggleOpen:n,Dialog:t}=o();return e.jsxs("div",{style:{textAlign:"center",margin:"50px"},children:[e.jsx("button",{onClick:n,children:"Open"}),e.jsx(t,{header:null,children:"Hello"})]})},s=()=>{const{toggleOpen:n,Dialog:t}=o();return e.jsxs("div",{style:{textAlign:"center",margin:"50px"},children:[e.jsx("button",{onClick:n,children:"Open"}),e.jsx(t,{header:null,disablePadding:!0,children:"Hello"})]})},g=()=>{const{toggleOpen:n,Dialog:t}=o();return e.jsxs("div",{style:{textAlign:"center",margin:"50px"},children:[e.jsx("button",{onClick:n,children:"Open"}),e.jsx(t,{header:"Whats up",footer:e.jsx("div",{children:e.jsx("button",{children:"Save"})}),children:e.jsx("div",{style:{height:"300px",backgroundColor:"white"},children:"Hello"})})]})};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Dialog
  } = useDialog();
  return <div style={{
    textAlign: 'center',
    margin: '50px'
  }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header="Whats up">Hello</Dialog>
    </div>;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Dialog
  } = useDialog();
  return <div style={{
    textAlign: 'center',
    margin: '50px'
  }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header={<h3>What's up</h3>}>Hello</Dialog>
    </div>;
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,D,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Dialog
  } = useDialog();
  return <div style={{
    textAlign: 'center',
    margin: '50px'
  }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header="My Custom Header" headerElement={<MyHeader />}>
        Body Content
      </Dialog>
    </div>;
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var v,j,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Dialog
  } = useDialog();
  return <div style={{
    textAlign: 'center',
    margin: '50px'
  }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header={null}>Hello</Dialog>
    </div>;
}`,...(b=(j=a.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,C,H;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Dialog
  } = useDialog();
  return <div style={{
    textAlign: 'center',
    margin: '50px'
  }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header={null} disablePadding={true}>
        Hello
      </Dialog>
    </div>;
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,A,S;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Dialog
  } = useDialog();
  return <div style={{
    textAlign: 'center',
    margin: '50px'
  }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header="Whats up" footer={<div>
            <button>Save</button>
          </div>}>
        <div style={{
        height: '300px',
        backgroundColor: 'white'
      }}>Hello</div>
      </Dialog>
    </div>;
}`,...(S=(A=g.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};export{l as CustomHeader,i as CustomHeaderElement,g as Footer,a as NoHeader,s as NoPadding,r as Simple,q as default};
//# sourceMappingURL=Dialog.story-81806a5d.js.map
