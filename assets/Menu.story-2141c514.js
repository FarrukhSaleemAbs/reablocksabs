import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as l}from"./index-1b03fe98.js";import{C as M}from"./Card-8ea02f24.js";import{a as g,L as n}from"./ListHeader-a08ce4d4.js";import{M as R,N as p,u as y}from"./NestedMenu-a45dfd89.js";import"./index-91038615.js";import"./PageTitle-1952ce29.js";import"./Typography.module-7807aee1.js";import"./PrimaryHeading-4e6611e6.js";import"./SecondaryHeading-592ea5e4.js";import"./SmallHeading-dfdb1131.js";import"./Sub-113b2b10.js";import"./Text-21a4448a.js";import"./focus-trap-react-b3e8c062.js";import"./index-6fd5a17b.js";import"./index-f6b105ee.js";import"./rdk-b7736295.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";const Y={title:"Components/Layers/Menu",component:R,subComponents:{NestedMenu:p}},o=()=>{const{toggleOpen:s,ref:r,Menu:i}=y();return e.jsxs(l.Fragment,{children:[e.jsx("button",{type:"button",ref:r,onClick:s,children:"Open"}),e.jsxs(i,{style:{background:"var(--slate-50+0)"},children:[e.jsx("p",{children:"Unstyled Menu"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Austin"}),e.jsx("li",{children:"Mark"}),e.jsx("li",{children:"Jack"})]})]})]})},d=()=>{const{toggleOpen:s,ref:r,Menu:i}=y({open:!0}),t={padding:5,borderBottom:"solid 1px black"};return e.jsxs(l.Fragment,{children:[e.jsx("button",{type:"button",ref:r,onClick:s,children:"Open"}),e.jsxs(i,{style:{background:"var(--slate-500)"},children:[e.jsx("h5",{style:{margin:4},children:"My Menu"}),e.jsxs("div",{role:"list",children:[e.jsx("div",{role:"listitem",style:t,children:"1"}),e.jsxs(p,{label:"2",style:t,menuStyle:{background:"var(--slate-500)",marginLeft:4},children:[e.jsx("div",{role:"listitem",style:t,children:"2.1"}),e.jsx("div",{role:"listitem",style:t,children:"2.2"}),e.jsx("div",{role:"listitem",style:t,children:"2.3"}),e.jsx("div",{role:"listitem",style:t,children:"2.4"})]}),e.jsxs(p,{label:"3",style:t,menuStyle:{background:"var(--slate-500)",marginLeft:4},children:[e.jsx("div",{role:"listitem",style:t,children:"3.1"}),e.jsxs(p,{label:"3.2",style:t,menuStyle:{background:"var(--slate-500)",marginLeft:4},children:[e.jsx("div",{role:"listitem",style:t,children:"3.2.1"}),e.jsx("div",{role:"listitem",style:t,children:"3.2.2"}),e.jsx("div",{role:"listitem",style:t,children:"3.2.3"}),e.jsx("div",{role:"listitem",style:t,children:"3.2.4"})]}),e.jsx("div",{role:"listitem",style:t,children:"3.3"})]}),e.jsx("div",{role:"listitem",style:t,children:"4"})]})]})]})},m=()=>{const{toggleOpen:s,ref:r,Menu:i}=y();return e.jsxs(l.Fragment,{children:[e.jsx("button",{type:"button",ref:r,onClick:s,style:{width:"300px"},children:"Open"}),e.jsx(i,{style:{background:"var(--slate-500)"},autoWidth:!0,children:e.jsx(M,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(n,{children:"Menu Item 1"}),e.jsx(n,{children:"Menu Item 2"}),e.jsx(n,{children:"Menu Item 3"}),e.jsx(n,{children:"Menu Item 4"})]})})})]})},u=()=>{const{toggleOpen:s,ref:r,Menu:i}=y();return e.jsxs(l.Fragment,{children:[e.jsx("button",{type:"button",ref:r,onClick:s,style:{width:"300px"},children:"Open"}),e.jsx(i,{style:{background:"var(--slate-500)"},autoWidth:!0,modifiers:{offset:{offset:"-100, 25"}},children:e.jsx(M,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(n,{children:"Menu Item 1"}),e.jsx(n,{children:"Menu Item 2"}),e.jsx(n,{children:"Menu Item 3"}),e.jsx(n,{children:"Menu Item 4"})]})})})]})},a=()=>{const[s,r]=l.useState(!1),i=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",ref:i,onClick:()=>r(!s),children:"Open"}),e.jsx(R,{open:s,onClose:()=>r(!1),reference:i,children:e.jsx(M,{disablePadding:!0,children:e.jsxs(g,{children:[e.jsx(n,{start:e.jsx(c,{}),children:"Menu Item 1"}),e.jsx(n,{start:e.jsx(c,{}),children:"Menu Item 2"}),e.jsx(n,{start:e.jsx(c,{}),children:"Menu Item 3"}),e.jsx(n,{start:e.jsx(c,{}),children:"Menu Item 4"})]})})})]})},c=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z",fill:"#CACBD0"})});var h,x,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    ref,
    Menu: MenuComponent
  } = useMenu();
  return <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </button>
      <MenuComponent style={{
      background: 'var(--slate-50+0)'
    }}>
        <p>Unstyled Menu</p>
        <ul>
          <li>Austin</li>
          <li>Mark</li>
          <li>Jack</li>
        </ul>
      </MenuComponent>
    </Fragment>;
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,L,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    ref,
    Menu: MenuComponent
  } = useMenu({
    open: true
  });
  const itemStyle = {
    padding: 5,
    borderBottom: 'solid 1px black'
  };
  return <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </button>
      <MenuComponent style={{
      background: 'var(--slate-500)'
    }}>
        <h5 style={{
        margin: 4
      }}>My Menu</h5>
        <div role="list">
          <div role="listitem" style={itemStyle}>
            1
          </div>
          <NestedMenu label="2" style={itemStyle} menuStyle={{
          background: 'var(--slate-500)',
          marginLeft: 4
        }}>
            <div role="listitem" style={itemStyle}>
              2.1
            </div>
            <div role="listitem" style={itemStyle}>
              2.2
            </div>
            <div role="listitem" style={itemStyle}>
              2.3
            </div>
            <div role="listitem" style={itemStyle}>
              2.4
            </div>
          </NestedMenu>
          <NestedMenu label="3" style={itemStyle} menuStyle={{
          background: 'var(--slate-500)',
          marginLeft: 4
        }}>
            <div role="listitem" style={itemStyle}>
              3.1
            </div>
            <NestedMenu label="3.2" style={itemStyle} menuStyle={{
            background: 'var(--slate-500)',
            marginLeft: 4
          }}>
              <div role="listitem" style={itemStyle}>
                3.2.1
              </div>
              <div role="listitem" style={itemStyle}>
                3.2.2
              </div>
              <div role="listitem" style={itemStyle}>
                3.2.3
              </div>
              <div role="listitem" style={itemStyle}>
                3.2.4
              </div>
            </NestedMenu>
            <div role="listitem" style={itemStyle}>
              3.3
            </div>
          </NestedMenu>
          <div role="listitem" style={itemStyle}>
            4
          </div>
        </div>
      </MenuComponent>
    </Fragment>;
}`,...(v=(L=d.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var f,I,C;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    ref,
    Menu: MenuComponent
  } = useMenu();
  return <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen} style={{
      width: '300px'
    }}>
        Open
      </button>
      <MenuComponent style={{
      background: 'var(--slate-500)'
    }} autoWidth>
        <Card disablePadding>
          <List>
            <ListItem>Menu Item 1</ListItem>
            <ListItem>Menu Item 2</ListItem>
            <ListItem>Menu Item 3</ListItem>
            <ListItem>Menu Item 4</ListItem>
          </List>
        </Card>
      </MenuComponent>
    </Fragment>;
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var S,k,O;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const {
    toggleOpen,
    ref,
    Menu: MenuComponent
  } = useMenu();
  return <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen} style={{
      width: '300px'
    }}>
        Open
      </button>
      <MenuComponent style={{
      background: 'var(--slate-500)'
    }} autoWidth modifiers={{
      offset: {
        offset: '-100, 25'
      }
    }}>
        <Card disablePadding>
          <List>
            <ListItem>Menu Item 1</ListItem>
            <ListItem>Menu Item 2</ListItem>
            <ListItem>Menu Item 3</ListItem>
            <ListItem>Menu Item 4</ListItem>
          </List>
        </Card>
      </MenuComponent>
    </Fragment>;
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var F,w,N;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  return <>
      <button type="button" ref={buttonRef} onClick={() => setOpen(!open)}>
        Open
      </button>
      <Menu open={open} onClose={() => setOpen(false)} reference={buttonRef}>
        <Card disablePadding>
          <List>
            <ListItem start={<Icon />}>Menu Item 1</ListItem>
            <ListItem start={<Icon />}>Menu Item 2</ListItem>
            <ListItem start={<Icon />}>Menu Item 3</ListItem>
            <ListItem start={<Icon />}>Menu Item 4</ListItem>
          </List>
        </Card>
      </Menu>
    </>;
}`,...(N=(w=a.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};export{m as AutoWidth,u as AutoWidthModifiers,d as Nested,a as Simple,o as Unstyled,Y as default};
//# sourceMappingURL=Menu.story-2141c514.js.map
