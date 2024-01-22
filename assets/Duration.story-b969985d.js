import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as j}from"./index-1b03fe98.js";import{h as x}from"./index-ccb4d992.js";import{p as D}from"./pluralize-4978b660.js";const b=new x.Scale({ms:1,s:1*1e3,min:60*1e3,hr:3600*1e3,day:86400*1e3,month:2592e3*1e3});function g(a,s="N/A"){let l=a;if(typeof a=="string")l=parseFloat(a);else if(a==null)return[s];const i=x(l,{scale:b}),[y,u]=i.split(" "),t=parseFloat(y);return t===1?i:u==null||t===null||t===void 0?[s]:`${t} ${D(u,t)}`}const r=({value:a,emptyValue:s})=>e.jsx(e.Fragment,{children:g(a,s)});r.defaultProps={emptyValue:"N/A"};try{r.displayName="Duration",r.__docgenInfo={description:"",displayName:"Duration",props:{value:{defaultValue:null,description:"Size to pass to the formatter.",name:"value",required:!0,type:{name:"DurationFormatTypes"}},emptyValue:{defaultValue:{value:"N/A"},description:"If the value is undefined/null it will return this value.",name:"emptyValue",required:!1,type:{name:"string"}}}}}catch{}const h={title:"Components/Data/Duration",component:r},n=()=>e.jsxs(j.Fragment,{children:[e.jsx(r,{value:"125"}),e.jsx("br",{}),e.jsx(r,{value:"256"}),e.jsx("br",{}),e.jsx(r,{value:"1234567"}),e.jsx("br",{}),e.jsx(r,{value:"123456789101"}),e.jsx("br",{}),e.jsx(r,{value:0x2bdc545df2e562})]}),o=()=>e.jsxs(j.Fragment,{children:[e.jsx(r,{value:null}),e.jsx("br",{}),e.jsx(r,{value:void 0}),e.jsx("br",{}),e.jsx(r,{value:null,emptyValue:"Nothing to see"}),e.jsx("br",{})]});var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Fragment>
    <Duration value="125" />
    <br />
    <Duration value="256" />
    <br />
    <Duration value="1234567" />
    <br />
    <Duration value="123456789101" />
    <br />
    <Duration value={12345678910121314} />
  </Fragment>`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,v,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Fragment>
    <Duration value={null} />
    <br />
    <Duration value={undefined} />
    <br />
    <Duration value={null} emptyValue="Nothing to see" />
    <br />
  </Fragment>`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const V=Object.freeze(Object.defineProperty({__proto__:null,Empty:o,Simple:n,default:h},Symbol.toStringTag,{value:"Module"}));export{r as D,n as S,V as a};
//# sourceMappingURL=Duration.story-b969985d.js.map
