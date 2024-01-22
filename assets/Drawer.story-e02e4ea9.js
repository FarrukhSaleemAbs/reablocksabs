import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{D as C,u as o}from"./useDrawer-397bebfd.js";import"./index-91038615.js";import"./focus-trap-react-b3e8c062.js";import"./index-6fd5a17b.js";import"./index-f6b105ee.js";import"./rdk-b7736295.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";const q={title:"Components/Layers/Drawer",component:C},a=()=>{const{toggleOpen:r,Drawer:n}=o();return e.jsxs(t.Fragment,{children:[e.jsx(n,{children:e.jsx("p",{children:"Hello There!"})}),e.jsx("button",{type:"button",onClick:r,children:"Open"})]})},s=()=>{const{toggleOpen:r,Drawer:n}=o();return e.jsxs(t.Fragment,{children:[e.jsx(n,{position:"bottom",children:e.jsx("p",{children:"Hello There!"})}),e.jsx("button",{type:"button",onClick:r,children:"Open"})]})},k=()=>e.jsx("div",{children:"hello!"}),l=()=>{const{toggleOpen:r,Drawer:n}=o();return e.jsxs(t.Fragment,{children:[e.jsx(n,{headerElement:e.jsx(k,{}),children:e.jsx("p",{children:"Hello There!"})}),e.jsx("button",{type:"button",onClick:r,children:"Open"})]})},p=()=>{const{toggleOpen:r,Drawer:n}=o();return e.jsxs(t.Fragment,{children:[e.jsx(n,{header:"Hello!!!!",children:e.jsx("p",{children:"Hello There!"})}),e.jsx("button",{type:"button",onClick:r,children:"Open"})]})},c=()=>{const{toggleOpen:r,Drawer:n}=o();return e.jsxs(t.Fragment,{children:[e.jsx(n,{header:e.jsx("h3",{children:"Hello!!!!"}),children:e.jsx("p",{children:"Hello There!"})}),e.jsx("button",{type:"button",onClick:r,children:"Open"})]})};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Drawer
  } = useDrawer();
  return <Fragment>
      <Drawer>
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>;
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,g,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Drawer
  } = useDrawer();
  return <Fragment>
      <Drawer position="bottom">
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>;
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var D,w,b;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Drawer
  } = useDrawer();
  return <Fragment>
      <Drawer headerElement={<MyHeader />}>
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>;
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,j,O;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Drawer
  } = useDrawer();
  return <Fragment>
      <Drawer header="Hello!!!!">
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>;
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var H,F,y;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    Drawer
  } = useDrawer();
  return <Fragment>
      <Drawer header={<h3>Hello!!!!</h3>}>
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>;
}`,...(y=(F=c.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};export{s as BottomSheet,c as CustomHeader,l as CustomHeaderElement,p as Header,a as Simple,q as default};
//# sourceMappingURL=Drawer.story-e02e4ea9.js.map
