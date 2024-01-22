import{j as o}from"./jsx-runtime-9c4ae004.js";import{r as M}from"./index-1b03fe98.js";import{M as s,a as n}from"./MotionItem-63c193b4.js";import"./motion-a93435c4.js";const y={title:"Components/Layout/Motion",component:s,subcomponents:{MotionItem:n}},e=()=>o.jsx(s,{children:[1,2,3,4,5,6,7,8,9,10].map(t=>o.jsxs(n,{children:["Hello ",t]},t))}),r=()=>{const[t,d]=M.useState([1,2,3,4,5,6,7,8,9,10]);return o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>d([...t].reverse()),children:"Update List Order"}),o.jsx("hr",{}),o.jsx(s,{children:t.map(i=>o.jsxs(n,{layout:!0,children:["Hello ",i]},i))})]})};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <MotionGroup>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <MotionItem key={i}>Hello {i}</MotionItem>)}
  </MotionGroup>`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return <>
      <button onClick={() => setItems([...items].reverse())}>
        Update List Order
      </button>
      <hr />
      <MotionGroup>
        {items.map(i => <MotionItem key={i} layout>
            Hello {i}
          </MotionItem>)}
      </MotionGroup>
    </>;
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{e as Simple,r as Sorting,y as default};
//# sourceMappingURL=Motion.story-17122df2.js.map
