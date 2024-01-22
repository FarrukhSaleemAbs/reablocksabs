import{j as r}from"./jsx-runtime-9c4ae004.js";import{A as s}from"./Avatar-594bfd7f.js";import{r as n}from"./index-1b03fe98.js";import{c as h}from"./index-91038615.js";import{u as x}from"./InfinityList-ef38c2f8.js";const j="_group_1sbi4_1",N="_avatar_1sbi4_5",z="_overflow_1sbi4_9",o={group:j,avatar:N,overflow:z},t=n.forwardRef(({children:e,className:c,size:m,...d},p)=>{const v=n.Children.toArray(e),{data:f,hasMore:y,remaining:A}=x({items:v,size:m});return r.jsxs("div",{...d,ref:p,className:h(c,o.group),children:[f.map((_,g)=>r.jsx("div",{className:o.avatar,children:_},g)),y&&r.jsxs("span",{className:o.overflow,children:["+",A," more"]})]})});t.defaultProps={size:10};try{t.displayName="AvatarGroup",t.__docgenInfo={description:"",displayName:"AvatarGroup",props:{children:{defaultValue:null,description:"The avatars to display in the group.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes to apply to the avatar group",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"The maximum number of avatars to show before +x more",name:"size",required:!1,type:{name:"number"}}}}}catch{}const b={title:"Components/Elements/Avatar Group",component:t},a=()=>r.jsxs(t,{children:[[...Array(32).keys()].map(e=>e%3===0?r.jsx(s,{size:24,rounded:!0,src:"https://lh3.googleusercontent.com/a-/AAuE7mAtQVUnylKNBtevO2lU0S-a4X-nu0IwMIyVl0Qe"},e):e%3===1?r.jsx(s,{rounded:!0,size:24,name:"Austin McDaniel"},e):r.jsx(s,{rounded:!0,size:24,name:"amcdaniel2@gmail.com"},e)),")"]});var i,l,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <AvatarGroup>
    {[...Array(32).keys()].map(idx => {
    if (idx % 3 === 0) {
      return <Avatar key={idx} size={24} rounded src="https://lh3.googleusercontent.com/a-/AAuE7mAtQVUnylKNBtevO2lU0S-a4X-nu0IwMIyVl0Qe" />;
    } else if (idx % 3 === 1) {
      return <Avatar rounded key={idx} size={24} name="Austin McDaniel" />;
    } else {
      return <Avatar key={idx} rounded size={24} name="amcdaniel2@gmail.com" />;
    }
  })}
    )
  </AvatarGroup>`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const M=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,default:b},Symbol.toStringTag,{value:"Module"}));export{t as A,a as B,M as a};
//# sourceMappingURL=AvatarGroup.story-423a9d5f.js.map
