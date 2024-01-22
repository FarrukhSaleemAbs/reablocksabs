import{j as r}from"./jsx-runtime-9c4ae004.js";import{P as e}from"./Pluralize-08be15aa.js";import"./index-1b03fe98.js";import"./pluralize-4978b660.js";import"./_commonjs-dynamic-modules-302442b1.js";const f={title:"Components/Data/Pluralize",component:e},n=()=>r.jsxs("div",{children:[r.jsx("div",{children:r.jsx(e,{count:1,singular:"Example"})}),r.jsx("div",{children:r.jsx(e,{count:5e3,singular:"Example"})})]}),s=()=>r.jsxs("div",{children:[r.jsx("div",{children:r.jsx(e,{count:1,singular:"Person",plural:"People"})}),r.jsx("div",{children:r.jsx(e,{count:5e3,singular:"Person",plural:"People"})})]}),a=()=>r.jsx("div",{children:r.jsx(e,{count:0,singular:"Example",zero:"No Examples"})}),i=()=>r.jsxs("div",{children:[r.jsx("div",{children:r.jsx(e,{count:0,singular:"Example"})}),r.jsx("div",{children:r.jsx(e,{count:0,singular:"Example",showCount:!1})})]});var o,l,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <div>
      <div>
        <Pluralize count={1} singular="Example" />
      </div>
      <div>
        <Pluralize count={5000} singular="Example" />
      </div>
    </div>;
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var t,c,d;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <div>
      <div>
        <Pluralize count={1} singular="Person" plural="People" />
      </div>
      <div>
        <Pluralize count={5000} singular="Person" plural="People" />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div>
      <Pluralize count={0} singular="Example" zero="No Examples" />
    </div>;
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,P,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <div>
      <div>
        <Pluralize count={0} singular="Example" />
      </div>
      <div>
        <Pluralize count={0} singular="Example" showCount={false} />
      </div>
    </div>;
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};export{i as HideCount,n as Simple,s as WithCustomPlural,a as ZeroCount,f as default};
//# sourceMappingURL=Pluralize.story-f08e1821.js.map
