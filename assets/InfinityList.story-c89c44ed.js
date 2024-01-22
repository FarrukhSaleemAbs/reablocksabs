import{j as t}from"./jsx-runtime-9c4ae004.js";import{I as p,u as y}from"./InfinityList-ef38c2f8.js";import"./index-1b03fe98.js";const v={title:"Components/Data/InfinityList",component:p},u=[...Array(50).keys()],e=()=>t.jsx(p,{children:u.map(s=>t.jsxs("div",{children:["Item ",s]},s))}),i=()=>{const{data:s,hasMore:h,showNext:l}=y({items:u});return t.jsxs("div",{children:[s.map(n=>t.jsxs("div",{children:["Item ",n]},n)),h&&t.jsx("button",{onClick:()=>l(),children:"Show More"})]})};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => <InfinityList>
    {items.map(i => <div key={i}>Item {i}</div>)}
  </InfinityList>`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var m,c,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    data,
    hasMore,
    showNext
  } = useInfinityList({
    items
  });
  return <div>
      {data.map(i => <div key={i}>Item {i}</div>)}
      {hasMore && <button onClick={() => showNext()}>Show More</button>}
    </div>;
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{i as Hook,e as Simple,v as default};
//# sourceMappingURL=InfinityList.story-c89c44ed.js.map
