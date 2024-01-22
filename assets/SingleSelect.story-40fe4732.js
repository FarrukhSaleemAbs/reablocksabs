import{j as e}from"./jsx-runtime-9c4ae004.js";import{g as dt,r}from"./index-1b03fe98.js";import{S as s,a,b as pt,c as ht,d as vt}from"./Select-4c7011aa.js";import{e as St,a as gt,_ as mt}from"./isSymbol-4e2c7bff.js";import{a as ft}from"./isFunction-2d8a1518.js";import{t as wt}from"./toNumber-92911c69.js";import"./rdk-b7736295.js";import"./index-6fd5a17b.js";import"./index-91038615.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";import"./Input-c133f965.js";import"./InlineInput-40d8930e.js";import"./index-f6b105ee.js";import"./DebouncedInput-c9a27793.js";import"./RefreshIcon-686a4d31.js";import"./DotsLoader-62214099.js";import"./index-edf22f4f.js";import"./ListHeader-a08ce4d4.js";import"./PageTitle-1952ce29.js";import"./Typography.module-7807aee1.js";import"./PrimaryHeading-4e6611e6.js";import"./SecondaryHeading-592ea5e4.js";import"./SmallHeading-dfdb1131.js";import"./Sub-113b2b10.js";import"./Text-21a4448a.js";var bt=Math.ceil,Ot=Math.max;function xt(l,o,t,n){for(var u=-1,d=Ot(bt((o-l)/(t||1)),0),c=Array(d);d--;)c[n?d:++u]=l,l+=t;return c}var yt=xt,jt=St,Ct=gt,kt=mt,Ft=ft;function Vt(l,o,t){if(!Ft(t))return!1;var n=typeof o;return(n=="number"?Ct(t)&&kt(o,t.length):n=="string"&&o in t)?jt(t[o],l):!1}var At=Vt,It=wt,z=1/0,Lt=17976931348623157e292;function Mt(l){if(!l)return l===0?l:0;if(l=It(l),l===z||l===-z){var o=l<0?-1:1;return o*Lt}return l===l?l:0}var Dt=Mt,Rt=yt,Et=At,W=Dt;function Pt(l){return function(o,t,n){return n&&typeof n!="number"&&Et(o,t,n)&&(t=n=void 0),o=W(o),t===void 0?(t=o,o=0):t=W(t),n=n===void 0?o<t?1:-1:W(n),Rt(o,t,n,l)}}var Tt=Pt,Gt=Tt,Nt=Gt(),Ut=Nt;const Wt=dt(Ut),va={title:"Components/Form/Select/Single",component:s,subcomponents:{SelectOption:a,SelectMenu:pt,SelectInput:ht,SelectInputChip:vt}},_=[{value:"facebook",label:"Facebook"},{value:"twitter",label:"Twitter"},{value:"github",label:"GitHub"},{value:"google",label:"Google"},{value:"azure",label:"Azure"}],h=()=>{const[l,o]=r.useState(null);return e.jsx("div",{style:{width:300},children:e.jsxs(s,{placeholder:"Select a category...",value:l,onChange:t=>{o(t),console.log("onChange",t)},children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},v=()=>{const[l,o]=r.useState(null);return e.jsx("div",{style:{width:300,fontFamily:'"Electrolux Sans", system-ui, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji'},children:e.jsxs(s,{placeholder:"Select a category...",value:l,onChange:t=>{o(t),console.log("onChange",t)},children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},S=()=>e.jsx("div",{style:{width:300},children:e.jsx(s,{placeholder:"Select a category..."})}),g=()=>{const[l,o]=r.useState(null),t=Wt(0,300);return e.jsx("div",{style:{width:300},children:e.jsx(s,{placeholder:"Select a category...",value:l,onChange:n=>{o(n),console.log("onChange",n)},children:t.map(n=>e.jsx(a,{value:`${n}`,children:`Option ${n}`},n))})})},m=()=>{const[l,o]=r.useState("facebook");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{placeholder:"Select a category...",value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},f=()=>{const[l,o]=r.useState("gop");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{placeholder:"Select a category...",value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},w=()=>{const[l,o]=r.useState("github");return e.jsx("div",{style:{width:300},children:e.jsx(s,{value:l,onChange:t=>o(t),children:_.map(t=>e.jsx(a,{value:t.value,children:t.label},t.value))})})},b=()=>{const[l,o]=r.useState("facebook");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{autoFocus:!0,value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},O=()=>{const[l,o]=r.useState("dod");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"dod",children:"Department of Defense Logistic and Infrastucture Agency"}),e.jsx(a,{value:"dhs",children:"Department of Homeland Security Operations Center"}),e.jsx(a,{value:"soc",children:"Security Operations Center for Central Intel Agency"})]})})},x=()=>{const[l,o]=r.useState("dod");return e.jsx("div",{style:{minWidth:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"dod",children:"Department of Defense Logistic and Infrastucture Agency"}),e.jsx(a,{value:"dhs",children:"Department of Homeland Security Operations Center"}),e.jsx(a,{value:"soc",children:"Security Operations Center for Central Intel Agency"})]})})},y=()=>{const[l,o]=r.useState("twitch");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"facebook",group:"Social Media",children:"Facebook"}),e.jsx(a,{value:"twitter",group:"Social Media",children:"Twitter"}),e.jsx(a,{value:"azure",group:"Cloud",children:"Azure"}),e.jsx(a,{value:"aws",group:"Cloud",children:"AWS"}),e.jsx(a,{value:"gcp",group:"Cloud",children:"GCP"})]})})},j=()=>{const[l,o]=r.useState("twitch");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"twitch",group:"Palo Alto Interior Office with International Space",children:"twitch"}),e.jsx(a,{value:"soar",group:"Palo Alto Interior Office with International Space",children:"SOAR"}),e.jsx(a,{value:"twitter",group:"AWS Federal Accredited Program with International Space",children:"twitter"}),e.jsx(a,{value:"lambda",group:"AWS Federal Accredited Program with International Space",children:"Lambda"}),e.jsx(a,{value:"db",group:"AWS Department of Human Resources with International Space",children:"Database"})]})})},C=()=>{const[l,o]=r.useState("twitch");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"twitch",children:"Twitch"}),e.jsx(a,{value:"facebook",group:"Social Media",children:"facebook"}),e.jsx(a,{value:"twitter",group:"Social Media",children:"twitter"}),e.jsx(a,{value:"aws",group:"Cloud",children:"AWS"}),e.jsx(a,{value:"azure",group:"Cloud",children:"Azure"})]})})},k=()=>e.jsx("div",{style:{width:300},children:e.jsx(s,{loading:!0})}),F=()=>e.jsx("div",{style:{width:300},children:e.jsx(s,{error:!0})}),V=()=>e.jsx("div",{style:{width:300},children:e.jsx(s,{refreshable:!0})}),A=()=>{const[l,o]=r.useState("github"),[t,n]=r.useState(!1),[u,d]=r.useState(!1),[c,p]=r.useState(null);return r.useEffect(()=>{let i;async function G(){const N=await new Promise(U=>{i=setTimeout(()=>{U(_)},1500)});p(N),n(!1),d(!0)}return c===null&&(n(!0),d(!1),G()),()=>{clearTimeout(i)}},[c]),e.jsx("div",{style:{width:300},children:e.jsx(s,{placeholder:"Select an option...",refreshable:u,loading:t,value:l,onChange:i=>o(i),onRefresh:()=>p(null),children:c==null?void 0:c.map(i=>e.jsx(a,{value:i.value,children:i.label},i.value))})})},I=()=>{const[l,o]=r.useState("github"),[t,n]=r.useState(!1),[u,d]=r.useState(!1),[c,p]=r.useState(null);return r.useEffect(()=>{let i;async function G(){const N=await new Promise(U=>{i=setTimeout(()=>{U([..._])},1500)});p(N),n(!1),d(!0)}return c===null&&(n(!0),d(!1),G()),()=>{clearTimeout(i)}},[c]),e.jsx("div",{style:{width:300},children:e.jsx(s,{placeholder:"Select an option...",refreshable:u,loading:t,value:l,onChange:i=>o(i),onRefresh:()=>p(null),children:c==null?void 0:c.map(i=>e.jsx(a,{value:i.value,children:i.label},i.value))})})},L=()=>{const[l,o]=r.useState("facebook");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),placeholder:"Select a type...",children:[e.jsx(a,{value:"facebook",inputLabel:e.jsx(r.Fragment,{children:"🔑 facebook"}),menuLabel:e.jsx(r.Fragment,{children:"🔑 facebook"}),children:"🔑 facebook"}),e.jsx(a,{value:"twitter",inputLabel:e.jsx(r.Fragment,{children:"🔐 twitter"}),menuLabel:e.jsx(r.Fragment,{children:"🔐 twitter"}),children:"🔐 twitter"}),e.jsx(a,{value:"twitch",inputLabel:e.jsx(r.Fragment,{children:"🔥 twitch"}),menuLabel:e.jsx(r.Fragment,{children:"🔥 twitch"}),children:"🔥 twitch"})]})})},M=()=>{const[l,o]=r.useState("facebook");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{value:l,onChange:t=>o(t),placeholder:"Select a type...",children:[e.jsx(a,{value:"facebook",inputLabel:e.jsx(r.Fragment,{children:"🔥 Data Loss Prevention for Military Sector"}),menuLabel:e.jsx(r.Fragment,{children:"🔥 Data Loss Prevention for Military Sector"}),children:"Data Loss Prevention for Military Sector"}),e.jsx(a,{value:"twitter",inputLabel:e.jsx(r.Fragment,{children:"🔥 Identity Access Management for Federal Gov"}),menuLabel:e.jsx(r.Fragment,{children:"🔥 Identity Access Management for Federal Gov"}),children:"Identity Access Management for Federal Gov"}),e.jsx(a,{value:"twitch",inputLabel:e.jsx(r.Fragment,{children:"🔥 Enterprise twitch Integration for US"}),menuLabel:e.jsx(r.Fragment,{children:"🔥 Enterprise twitch Integration for US"}),children:"Enterprise twitch Integration for US"})]})})},D=()=>e.jsx("div",{style:{width:300},children:e.jsxs(s,{disabled:!0,value:"facebook",children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})}),R=()=>{const[l,o]=r.useState("facebook");return e.jsx("div",{style:{width:300},children:e.jsxs(s,{filterable:!1,value:l,onChange:t=>o(t),children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},E=()=>{const[l,o]=r.useState(null),[t,n]=r.useState(["chicken","cow","mouse"]);return e.jsx("div",{style:{width:300},children:e.jsx(s,{createable:!0,placeholder:"Add a category or pick existing one...",value:l,onChange:u=>o(u),onOptionsChange:u=>n(u.map(d=>d.value)),children:t.map(u=>e.jsx(a,{value:u,children:u},u))})})},P=()=>{const[l,o]=r.useState(null);return e.jsx("div",{style:{width:300},children:e.jsxs(s,{placeholder:"Select a category...",value:l,onChange:t=>o(t),tabToSelect:!0,children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})},T=()=>{const[l,o]=r.useState(null);return e.jsx("div",{style:{width:300},children:e.jsxs(s,{placeholder:"Select a category...",value:l,onChange:t=>{o(t),console.log("onChange",t)},defaultFilterValue:"twi",children:[e.jsx(a,{value:"facebook",children:"facebook"}),e.jsx(a,{value:"twitter",children:"twitter"}),e.jsx(a,{value:"twitch",children:"twitch"})]})})};var H,$,B;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(B=($=h.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var q,X,Y;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  return <div style={{
    width: 300,
    fontFamily: \`"Electrolux Sans", system-ui, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji\`
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`() => <div style={{
  width: 300
}}>
    <Select placeholder="Select a category..." />
  </div>`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  const options = range(0, 300);
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        {options.map(o => <SelectOption key={o} value={\`\${o}\`}>
            {\`Option \${o}\`}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,oe;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('facebook');
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(oe=(le=m.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var re,ne,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('gop');
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,ce,ue;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('github');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)}>
        {options.map(o => <SelectOption key={o.value} value={o.value}>
            {o.label}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(ue=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,he;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('facebook');
  return <div style={{
    width: 300
  }}>
      <Select autoFocus value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(he=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ve,Se,ge;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('dod');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="dod">
          Department of Defense Logistic and Infrastucture Agency
        </SelectOption>
        <SelectOption value="dhs">
          Department of Homeland Security Operations Center
        </SelectOption>
        <SelectOption value="soc">
          Security Operations Center for Central Intel Agency
        </SelectOption>
      </Select>
    </div>;
}`,...(ge=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var me,fe,we;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('dod');
  return <div style={{
    minWidth: 300
  }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="dod">
          Department of Defense Logistic and Infrastucture Agency
        </SelectOption>
        <SelectOption value="dhs">
          Department of Homeland Security Operations Center
        </SelectOption>
        <SelectOption value="soc">
          Security Operations Center for Central Intel Agency
        </SelectOption>
      </Select>
    </div>;
}`,...(we=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var be,Oe,xe;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('twitch');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook" group="Social Media">
          Facebook
        </SelectOption>
        <SelectOption value="twitter" group="Social Media">
          Twitter
        </SelectOption>
        <SelectOption value="azure" group="Cloud">
          Azure
        </SelectOption>
        <SelectOption value="aws" group="Cloud">
          AWS
        </SelectOption>
        <SelectOption value="gcp" group="Cloud">
          GCP
        </SelectOption>
      </Select>
    </div>;
}`,...(xe=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:xe.source}}};var ye,je,Ce;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('twitch');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="twitch" group="Palo Alto Interior Office with International Space">
          twitch
        </SelectOption>
        <SelectOption value="soar" group="Palo Alto Interior Office with International Space">
          SOAR
        </SelectOption>
        <SelectOption value="twitter" group="AWS Federal Accredited Program with International Space">
          twitter
        </SelectOption>
        <SelectOption value="lambda" group="AWS Federal Accredited Program with International Space">
          Lambda
        </SelectOption>
        <SelectOption value="db" group="AWS Department of Human Resources with International Space">
          Database
        </SelectOption>
      </Select>
    </div>;
}`,...(Ce=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var ke,Fe,Ve;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('twitch');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="twitch">Twitch</SelectOption>
        <SelectOption value="facebook" group="Social Media">
          facebook
        </SelectOption>
        <SelectOption value="twitter" group="Social Media">
          twitter
        </SelectOption>
        <SelectOption value="aws" group="Cloud">
          AWS
        </SelectOption>
        <SelectOption value="azure" group="Cloud">
          Azure
        </SelectOption>
      </Select>
    </div>;
}`,...(Ve=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Ae,Ie,Le;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => <div style={{
  width: 300
}}>
    <Select loading />
  </div>`,...(Le=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Me,De,Re;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`() => <div style={{
  width: 300
}}>
    <Select error />
  </div>`,...(Re=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,Pe,Te;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => <div style={{
  width: 300
}}>
    <Select refreshable />
  </div>`,...(Te=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Ge,Ne,Ue;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('github');
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshable, setRefreshable] = useState<boolean>(false);
  const [opts, setOpts] = useState<{
    value: string;
    label: string;
  }[] | null>(null);
  useEffect(() => {
    let timeout;
    async function getOptions() {
      const next = await new Promise<any>(resolve => {
        timeout = setTimeout(() => {
          resolve(options);
        }, 1500);
      });
      setOpts(next);
      setLoading(false);
      setRefreshable(true);
    }
    if (opts === null) {
      setLoading(true);
      setRefreshable(false);
      getOptions();
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [opts]);
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select an option..." refreshable={refreshable} loading={loading} value={value} onChange={v => setValue(v)} onRefresh={() => setOpts(null)}>
        {opts?.map(o => <SelectOption key={o.value} value={o.value}>
            {o.label}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(Ue=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var We,_e,ze;I.parameters={...I.parameters,docs:{...(We=I.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('github');
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshable, setRefreshable] = useState<boolean>(false);
  const [opts, setOpts] = useState<{
    value: string;
    label: string;
  }[] | null>(null);
  useEffect(() => {
    let timeout;
    async function getOptions() {
      const next = await new Promise<any>(resolve => {
        timeout = setTimeout(() => {
          resolve([...options]);
        }, 1500);
      });
      setOpts(next);
      setLoading(false);
      setRefreshable(true);
    }
    if (opts === null) {
      setLoading(true);
      setRefreshable(false);
      getOptions();
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [opts]);
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select an option..." refreshable={refreshable} loading={loading} value={value} onChange={v => setValue(v)} onRefresh={() => setOpts(null)}>
        {opts?.map(o => <SelectOption key={o.value} value={o.value}>
            {o.label}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(ze=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var He,$e,Be;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('facebook');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)} placeholder="Select a type...">
        <SelectOption value="facebook" inputLabel={<Fragment>🔑 facebook</Fragment>} menuLabel={<Fragment>🔑 facebook</Fragment>}>
          🔑 facebook
        </SelectOption>
        <SelectOption value="twitter" inputLabel={<Fragment>🔐 twitter</Fragment>} menuLabel={<Fragment>🔐 twitter</Fragment>}>
          🔐 twitter
        </SelectOption>
        <SelectOption value="twitch" inputLabel={<Fragment>🔥 twitch</Fragment>} menuLabel={<Fragment>🔥 twitch</Fragment>}>
          🔥 twitch
        </SelectOption>
      </Select>
    </div>;
}`,...(Be=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var qe,Xe,Ye;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('facebook');
  return <div style={{
    width: 300
  }}>
      <Select value={value} onChange={v => setValue(v)} placeholder="Select a type...">
        <SelectOption value="facebook" inputLabel={<Fragment>🔥 Data Loss Prevention for Military Sector</Fragment>} menuLabel={<Fragment>🔥 Data Loss Prevention for Military Sector</Fragment>}>
          Data Loss Prevention for Military Sector
        </SelectOption>
        <SelectOption value="twitter" inputLabel={<Fragment>🔥 Identity Access Management for Federal Gov</Fragment>} menuLabel={<Fragment>🔥 Identity Access Management for Federal Gov</Fragment>}>
          Identity Access Management for Federal Gov
        </SelectOption>
        <SelectOption value="twitch" inputLabel={<Fragment>🔥 Enterprise twitch Integration for US</Fragment>} menuLabel={<Fragment>🔥 Enterprise twitch Integration for US</Fragment>}>
          Enterprise twitch Integration for US
        </SelectOption>
      </Select>
    </div>;
}`,...(Ye=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Je,Ke,Qe;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`() => <div style={{
  width: 300
}}>
    <Select disabled value="facebook">
      <SelectOption value="facebook">facebook</SelectOption>
      <SelectOption value="twitter">twitter</SelectOption>
      <SelectOption value="twitch">twitch</SelectOption>
    </Select>
  </div>`,...(Qe=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ze,et,tt;R.parameters={...R.parameters,docs:{...(Ze=R.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>('facebook');
  return <div style={{
    width: 300
  }}>
      <Select filterable={false} value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(tt=(et=R.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,lt,ot;E.parameters={...E.parameters,docs:{...(at=E.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  const [animals, setAnimals] = useState<string[]>(['chicken', 'cow', 'mouse']);
  return <div style={{
    width: 300
  }}>
      <Select createable placeholder="Add a category or pick existing one..." value={value} onChange={v => setValue(v)} onOptionsChange={opts => setAnimals(opts.map(o => o.value))}>
        {animals.map(o => <SelectOption key={o} value={o}>
            {o}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(ot=(lt=E.parameters)==null?void 0:lt.docs)==null?void 0:ot.source}}};var rt,nt,st;P.parameters={...P.parameters,docs:{...(rt=P.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => setValue(v)} tabToSelect>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(st=(nt=P.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var it,ct,ut;T.parameters={...T.parameters,docs:{...(it=T.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  return <div style={{
    width: 300
  }}>
      <Select placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }} defaultFilterValue="twi">
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(ut=(ct=T.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};export{A as Async,I as AsyncDefaultValue,b as Autofocus,h as Basic,E as Createable,L as CustomLabels,M as CustomLongLabels,T as DefaultFilter,m as DefaultValue,D as Disabled,F as Error,x as FluidWidth,v as Fonts,y as Groups,f as InvalidValues,k as LoadingIcon,j as LongGroupNames,O as LongInputNames,g as ManyOptions,C as MixedGroups,S as NoOptions,w as OptionsArray,V as RefreshIcon,P as TabToSelect,R as Unfilterable,va as default};
//# sourceMappingURL=SingleSelect.story-40fe4732.js.map
