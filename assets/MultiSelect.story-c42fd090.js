import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";import{S as r,a as t,b as fe,c as Oe,d as we}from"./Select-4c7011aa.js";import"./rdk-b7736295.js";import"./index-6fd5a17b.js";import"./index-91038615.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";import"./Input-c133f965.js";import"./InlineInput-40d8930e.js";import"./index-f6b105ee.js";import"./DebouncedInput-c9a27793.js";import"./RefreshIcon-686a4d31.js";import"./DotsLoader-62214099.js";import"./index-edf22f4f.js";import"./ListHeader-a08ce4d4.js";import"./PageTitle-1952ce29.js";import"./Typography.module-7807aee1.js";import"./PrimaryHeading-4e6611e6.js";import"./SecondaryHeading-592ea5e4.js";import"./SmallHeading-dfdb1131.js";import"./Sub-113b2b10.js";import"./Text-21a4448a.js";const _e={title:"Components/Form/Select/Multi",component:r,subcomponents:{SelectOption:t,SelectMenu:fe,SelectInput:Oe,SelectInputChip:we}},be=[{value:"facebook",label:"Facebook"},{value:"twitter",label:"Twitter"},{value:"github",label:"GitHub"},{value:"google",label:"Google"},{value:"azure",label:"Azure"}],p=()=>{const[a,o]=s.useState(null);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{multiple:!0,closeOnSelect:!1,placeholder:"Select a category...",value:a,onChange:l=>{o(l),console.log("onChange",l)},children:[e.jsx(t,{value:"facebook",children:"facebook"}),e.jsx(t,{value:"twitter",children:"twitter"}),e.jsx(t,{value:"twitch",children:"twitch"})]})})},m=()=>{const[a,o]=s.useState(["facebook"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{multiple:!0,disabled:!0,placeholder:"Select a category...",value:a,onChange:l=>{o(l),console.log("onChange",l)},children:[e.jsx(t,{value:"facebook",children:"facebook"}),e.jsx(t,{value:"twitter",children:"twitter"}),e.jsx(t,{value:"twitch",children:"twitch"})]})})},h=()=>{const[a,o]=s.useState(["facebook","twitter"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{multiple:!0,closeOnSelect:!1,placeholder:"Select a category...",value:a,onChange:l=>{o(l),console.log("onChange",l)},children:[e.jsx(t,{value:"facebook",children:"facebook"}),e.jsx(t,{value:"twitter",children:"twitter"}),e.jsx(t,{value:"twitch",children:"twitch"})]})})},v=()=>{const[a,o]=s.useState(["facebook"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{value:a,multiple:!0,placeholder:"Select a type...",onChange:l=>o(l),children:[e.jsx(t,{value:"facebook",inputLabel:e.jsx(s.Fragment,{children:"🔑 facebook"}),menuLabel:e.jsx(s.Fragment,{children:"🔑 facebook"}),children:"🔑 facebook"}),e.jsx(t,{value:"twitter",inputLabel:e.jsx(s.Fragment,{children:"🔐 twitter"}),menuLabel:e.jsx(s.Fragment,{children:"🔐 twitter"}),children:"🔐 twitter"}),e.jsx(t,{value:"twitch",inputLabel:e.jsx(s.Fragment,{children:"🔥 twitch"}),menuLabel:e.jsx(s.Fragment,{children:"🔥 twitch"}),children:"🔥 twitch"})]})})},S=()=>{const[a,o]=s.useState([]),[l,i]=s.useState(["chicken","cow","mouse"]);return e.jsx("div",{style:{width:300},children:e.jsx(r,{multiple:!0,closeOnSelect:!1,createable:!0,placeholder:"Add some categories or pick existing one...",value:a,onChange:n=>o(n),onOptionsChange:n=>i(n.map(u=>u.value)),children:l.map(n=>e.jsx(t,{value:n,children:n},n))})})},g=()=>{const[a,o]=s.useState(["dod"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{multiple:!0,closeOnSelect:!1,value:a,onChange:l=>o(l),children:[e.jsx(t,{value:"dod",children:"Department of Defense Logistic and Infrastucture Agency"}),e.jsx(t,{value:"dhs",children:"Department of Homeland Security Operations Center"}),e.jsx(t,{value:"soc",children:"Security Operations Center for Central Intel Agency"})]})})},f=()=>{const[a,o]=s.useState(["dod","dhs","soc"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{multiple:!0,closeOnSelect:!1,value:a,onChange:l=>o(l),children:[e.jsx(t,{value:"dod",children:"Department of Defense Logistic and Infrastucture Agency"}),e.jsx(t,{value:"dhs",children:"Department of Homeland Security Operations Center"}),e.jsx(t,{value:"soc",children:"Security Operations Center for Central Intel Agency"})]})})},O=()=>{const[a,o]=s.useState(["dod","dhs","soc"]);return e.jsx("div",{style:{width:500},children:e.jsxs(r,{multiple:!0,closeOnSelect:!1,value:a,onChange:l=>o(l),children:[e.jsx(t,{value:"dod",children:"Department of Defense Logistic and Infrastucture Agency"}),e.jsx(t,{value:"dhs",children:"Department of Homeland Security Operations Center"}),e.jsx(t,{value:"soc",children:"Security Operations Center for Central Intel Agency"})]})})},w=()=>{const[a,o]=s.useState(["dod"]);return e.jsx("div",{style:{minWidth:300},children:e.jsxs(r,{multiple:!0,closeOnSelect:!1,value:a,onChange:l=>o(l),children:[e.jsx(t,{value:"dod",children:"Department of Defense Logistic and Infrastucture Agency"}),e.jsx(t,{value:"dhs",children:"Department of Homeland Security Operations Center"}),e.jsx(t,{value:"soc",children:"Security Operations Center for Central Intel Agency"})]})})},b=()=>{const[a,o]=s.useState(["dod"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{filterable:!1,closeOnSelect:!1,multiple:!0,value:a,onChange:l=>o(l),children:[e.jsx(t,{value:"facebook",children:"facebook"}),e.jsx(t,{value:"twitter",children:"twitter"}),e.jsx(t,{value:"twitch",children:"twitch"})]})})},x=()=>e.jsx("div",{style:{width:300},children:e.jsx(r,{error:!0,multiple:!0})}),y=()=>{const[a,o]=s.useState(["gop"]);return e.jsx("div",{style:{width:300},children:e.jsxs(r,{closeOnSelect:!1,multiple:!0,value:a,onChange:l=>o(l),placeholder:"Pick a tool...",children:[e.jsx(t,{value:"facebook",children:"facebook"}),e.jsx(t,{value:"twitter",children:"twitter"}),e.jsx(t,{value:"twitch",children:"twitch"})]})})},j=()=>{const[a,o]=s.useState([]),[l,i]=s.useState([]);return e.jsx("div",{style:{width:300},children:e.jsx(r,{multiple:!0,createable:!0,placeholder:"Add some new categories...",value:a,menuDisabled:!0,onOptionsChange:n=>i(n.map(u=>u.value)),onChange:n=>{o(n),console.log("onChange",n)},children:l.map(n=>e.jsx(t,{value:n,children:n},n))})})},C=()=>{const[a,o]=s.useState("github"),[l,i]=s.useState(!1),[n,u]=s.useState(!1),[d,k]=s.useState(null);return s.useEffect(()=>{let c;async function ve(){const Se=await new Promise(ge=>{c=setTimeout(()=>{ge(be)},1500)});k(Se),i(!1),u(!0)}return d===null&&(i(!0),u(!1),ve()),()=>{clearTimeout(c)}},[d]),e.jsx("div",{style:{width:300},children:e.jsx(r,{placeholder:"Select an option...",refreshable:n,loading:l,multiple:!0,value:a,onChange:c=>o(c),onRefresh:()=>k(null),children:d==null?void 0:d.map(c=>e.jsx(t,{value:c.value,children:c.label},c.value))})})};var V,A,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | null>(null);
  return <div style={{
    width: 300
  }}>
      <Select multiple closeOnSelect={false} placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var L,F,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | null>(['facebook']);
  return <div style={{
    width: 300
  }}>
      <Select multiple disabled placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var H,R,E;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['facebook', 'twitter']);
  return <div style={{
    width: 300
  }}>
      <Select multiple closeOnSelect={false} placeholder="Select a category..." value={value} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,T,P;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | null>(['facebook']);
  return <div style={{
    width: 300
  }}>
      <Select value={value} multiple placeholder="Select a type..." onChange={v => setValue(v)}>
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
}`,...(P=(T=v.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var W,z,G;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>([]);
  const [animals, setAnimals] = useState<string[]>(['chicken', 'cow', 'mouse']);
  return <div style={{
    width: 300
  }}>
      <Select multiple closeOnSelect={false} createable placeholder="Add some categories or pick existing one..." value={value} onChange={v => setValue(v)} onOptionsChange={opts => setAnimals(opts.map(o => o.value))}>
        {animals.map(o => <SelectOption key={o} value={o}>
            {o}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(G=(z=S.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var N,B,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['dod']);
  return <div style={{
    width: 300
  }}>
      <Select multiple closeOnSelect={false} value={value} onChange={v => setValue(v)}>
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
}`,...(U=(B=g.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var _,q,J;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['dod', 'dhs', 'soc']);
  return <div style={{
    width: 300
  }}>
      <Select multiple closeOnSelect={false} value={value} onChange={v => setValue(v)}>
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
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['dod', 'dhs', 'soc']);
  return <div style={{
    width: 500
  }}>
      <Select multiple closeOnSelect={false} value={value} onChange={v => setValue(v)}>
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
}`,...(X=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['dod']);
  return <div style={{
    minWidth: 300
  }}>
      <Select multiple closeOnSelect={false} value={value} onChange={v => setValue(v)}>
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
}`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,le;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['dod']);
  return <div style={{
    width: 300
  }}>
      <Select filterable={false} closeOnSelect={false} multiple value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(le=(te=b.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,oe,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`() => <div style={{
  width: 300
}}>
    <Select error multiple />
  </div>`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,re,ce;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['gop']);
  return <div style={{
    width: 300
  }}>
      <Select closeOnSelect={false} multiple value={value} onChange={v => setValue(v)} placeholder="Pick a tool...">
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>;
}`,...(ce=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ie,ue,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>([]);
  const [animals, setAnimals] = useState<string[]>([]);
  return <div style={{
    width: 300
  }}>
      <Select multiple createable placeholder="Add some new categories..." value={value} menuDisabled onOptionsChange={opts => setAnimals(opts.map(o => o.value))} onChange={v => {
      setValue(v);
      console.log('onChange', v);
    }}>
        {animals.map(animal => <SelectOption key={animal} value={animal}>
            {animal}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(de=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
      <Select placeholder="Select an option..." refreshable={refreshable} loading={loading} multiple value={value} onChange={v => setValue(v)} onRefresh={() => setOpts(null)}>
        {opts?.map(o => <SelectOption key={o.value} value={o.value}>
            {o.label}
          </SelectOption>)}
      </Select>
    </div>;
}`,...(he=(me=C.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};export{C as Async,p as Basic,S as Createable,j as CreateableNoOptions,v as CustomLabels,h as DefaultValue,m as Disabled,x as Error,w as FluidWidth,y as InvalidValues,g as LongInputNames,O as MultipleValuesFixed,f as MultipleValuesOverflow,b as Unfilterable,_e as default};
//# sourceMappingURL=MultiSelect.story-c42fd090.js.map
