import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as u}from"./index-1b03fe98.js";import{h as b}from"./index-ccb4d992.js";function _(r,i="N/A",c=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=2){let m=r;var h=b.Scale.create(c,1024);if(typeof r=="string")m=parseFloat(r);else if(r==null)return[i];return b(m,{scale:h,decimals:o})}const a=({value:r,emptyValue:i,scale:c,decimals:o})=>e.jsx(e.Fragment,{children:_(r,i,c,o)});try{a.displayName="DataSize",a.__docgenInfo={description:"",displayName:"DataSize",props:{value:{defaultValue:null,description:"The size value to render.",name:"value",required:!0,type:{name:"FormatSizeTypes"}},emptyValue:{defaultValue:null,description:"If the value is undefined/null it will return this value.",name:"emptyValue",required:!1,type:{name:"string"}},scale:{defaultValue:null,description:"Customize scale for displaying units.",name:"scale",required:!1,type:{name:"string[]"}},decimals:{defaultValue:null,description:"The number of decimals to be set.",name:"decimals",required:!1,type:{name:"number"}}}}}catch{}const B={title:"Components/Data/Data Size",component:a},s=()=>e.jsxs(u.Fragment,{children:[e.jsx(a,{value:"99"}),e.jsx("br",{}),e.jsx(a,{value:"4500"}),e.jsx("br",{}),e.jsx(a,{value:"34343233"}),e.jsx("br",{}),e.jsx(a,{value:"434334434123"}),e.jsx("br",{}),e.jsx(a,{value:324344535345232}),e.jsx("br",{}),e.jsx(a,{value:0x4804da2ee177a80}),e.jsx("br",{}),e.jsx(a,{value:3243445353452325e5}),e.jsx("br",{}),e.jsx(a,{value:32434453534523246e6}),e.jsx("br",{}),e.jsx(a,{value:3243445353452325e10})]}),t=()=>{const r=["b","kb","mb","gb","tb","pb","eb","zb","yb"];return e.jsxs(u.Fragment,{children:[e.jsx(a,{value:"99",scale:r}),e.jsx("br",{}),e.jsx(a,{value:"4500",scale:r}),e.jsx("br",{}),e.jsx(a,{value:"34343233",scale:r}),e.jsx("br",{}),e.jsx(a,{value:"434334434123",scale:r}),e.jsx("br",{}),e.jsx(a,{value:324344535345232,scale:r}),e.jsx("br",{}),e.jsx(a,{value:0x4804da2ee177a80,scale:r}),e.jsx("br",{}),e.jsx(a,{value:3243445353452325e5,scale:r}),e.jsx("br",{}),e.jsx(a,{value:32434453534523246e6,scale:r}),e.jsx("br",{}),e.jsx(a,{value:3243445353452325e10,scale:r})]})},l=()=>e.jsxs(u.Fragment,{children:[e.jsx(a,{value:34343233,decimals:0}),e.jsx("br",{}),e.jsx(a,{value:34343233,decimals:5})]}),n=()=>e.jsxs(u.Fragment,{children:[e.jsx(a,{value:void 0}),e.jsx("br",{}),e.jsx(a,{value:null,emptyValue:"Nothing to see"}),e.jsx("br",{})]});var d,p,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Fragment>
    <DataSize value="99" />
    <br />
    <DataSize value="4500" />
    <br />
    <DataSize value="34343233" />
    <br />
    <DataSize value="434334434123" />
    <br />
    <DataSize value={324344535345232} />
    <br />
    <DataSize value={324344535345232482} />
    <br />
    <DataSize value={324344535345232482281} />
    <br />
    <DataSize value={32434453534523248228135} />
    <br />
    <DataSize value={32434453534523248228123412} />
  </Fragment>`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var j,x,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const scale = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
  return <Fragment>
      <DataSize value="99" scale={scale} />
      <br />
      <DataSize value="4500" scale={scale} />
      <br />
      <DataSize value="34343233" scale={scale} />
      <br />
      <DataSize value="434334434123" scale={scale} />
      <br />
      <DataSize value={324344535345232} scale={scale} />
      <br />
      <DataSize value={324344535345232482} scale={scale} />
      <br />
      <DataSize value={324344535345232482281} scale={scale} />
      <br />
      <DataSize value={32434453534523248228135} scale={scale} />
      <br />
      <DataSize value={32434453534523248228123412} scale={scale} />
    </Fragment>;
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var z,D,g;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Fragment>
    <DataSize value={34343233} decimals={0} />
    <br />
    <DataSize value={34343233} decimals={5} />
  </Fragment>`,...(g=(D=l.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var f,y,F;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Fragment>
    <DataSize value={undefined} />
    <br />
    <DataSize value={null} emptyValue="Nothing to see" />
    <br />
  </Fragment>`,...(F=(y=n.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const T=Object.freeze(Object.defineProperty({__proto__:null,CustomDecimals:l,CustomScale:t,Empty:n,Simple:s,default:B},Symbol.toStringTag,{value:"Module"}));export{a as D,n as E,s as S,T as a};
//# sourceMappingURL=DataSize.story-ddcf0ce7.js.map
