import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as M}from"./index-1b03fe98.js";import"./Tooltip-850103b6.js";import"./Popover-4aefcab5.js";import"./useDialog-dcefdbdf.js";import"./useDrawer-397bebfd.js";import"./NestedMenu-a45dfd89.js";import"./ContextMenu-ef93ee68.js";import"./index-52d7376f.js";import{a as z}from"./Button-de41aa90.js";import"./ButtonGroup-fb133ea9.js";import{c as p}from"./index-91038615.js";import{a as A}from"./motion-a93435c4.js";import{N as H,a as O}from"./Notifications-22955338.js";const R="_container_d6on2_1",k="_disableMargins_d6on2_8",T="_badge_d6on2_13",Y="_top_d6on2_37",L="_left_d6on2_38",$="_bottom_d6on2_45",D="_right_d6on2_52",G="_primary_d6on2_65",J="_secondary_d6on2_70",K="_error_d6on2_75",r={container:R,disableMargins:k,badge:T,top:Y,left:L,bottom:$,right:D,default:"_default_d6on2_60",primary:G,secondary:J,error:K},t=M.forwardRef(({children:a,color:m,className:S,disableMargins:E,content:q,hidden:F,placement:n,...V},P)=>e.jsxs("span",{className:p(r.container,{[r.disableMargins]:E}),children:[a,!F&&e.jsx(A.span,{initial:{opacity:0,scale:1},animate:{opacity:1,scale:1},"aria-hidden":"true",children:e.jsx("span",{...V,ref:P,className:p(S,r.badge,r[m],{[r.top]:n==="top-start"||n==="top-end",[r.bottom]:n==="bottom-start"||n==="bottom-end",[r.left]:n==="top-start"||n==="bottom-start",[r.right]:n==="top-end"||n==="bottom-end"}),children:q})})]}));t.defaultProps={color:"default",placement:"top-end"};try{t.displayName="Badge",t.__docgenInfo={description:"",displayName:"Badge",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string | Element"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"primary"'},{value:'"secondary"'}]}},disableMargins:{defaultValue:null,description:"",name:"disableMargins",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top-end"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}}}catch{}const Q={title:"Components/Elements/Badge",component:t},i=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{content:"7",children:e.jsx(o,{height:22,width:22})}),e.jsx(t,{content:"7",color:"primary",children:e.jsx(o,{height:22,width:22})}),e.jsx(t,{content:"7",color:"secondary",children:e.jsx(o,{height:22,width:22})}),e.jsx(t,{content:"7",color:"error",children:e.jsx(o,{height:22,width:22})})]}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{content:"7",placement:"top-start",children:e.jsx(o,{height:22,width:22})}),e.jsx(t,{content:"7",placement:"top-end",children:e.jsx(o,{height:22,width:22})}),e.jsx(t,{content:"7",placement:"bottom-start",children:e.jsx(o,{height:22,width:22})}),e.jsx(t,{content:"7",placement:"bottom-end",children:e.jsx(o,{height:22,width:22})})]}),c=()=>e.jsx(t,{hidden:!0,children:e.jsx(o,{height:22,width:22})}),d=()=>e.jsx(t,{content:"7"}),l=()=>e.jsx(e.Fragment,{children:e.jsx(t,{content:"10",placement:"top-end",color:"error",children:e.jsx(H,{children:e.jsx(O.Consumer,{children:({notifyError:a})=>e.jsx(M.Fragment,{children:e.jsx(z,{color:"error",onClick:()=>a("You have 10 alerts!"),children:"Alerts"})})})})})}),o=({height:a,width:m})=>e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:m,height:a,fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"})})});var h,g,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => <>
    <Badge content="7">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" color="primary">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" color="secondary">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" color="error">
      <NotificationIcon height={22} width={22} />
    </Badge>
  </>`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,_,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
    <Badge content="7" placement="top-start">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" placement="top-end">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" placement="bottom-start">
      <NotificationIcon height={22} width={22} />
    </Badge>
    <Badge content="7" placement="bottom-end">
      <NotificationIcon height={22} width={22} />
    </Badge>
  </>`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var j,B,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Badge hidden={true}>
    <NotificationIcon height={22} width={22} />
  </Badge>`,...(y=(B=c.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var b,w,N;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:'() => <Badge content="7" />',...(N=(w=d.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,C,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => <>
    <Badge content="10" placement="top-end" color="error">
      <Notifications>
        <NotificationsContext.Consumer>
          {({
          notifyError
        }) => <Fragment>
              <Button color="error" onClick={() => notifyError('You have 10 alerts!')}>
                Alerts
              </Button>
            </Fragment>}
        </NotificationsContext.Consumer>
      </Notifications>
    </Badge>
  </>`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const le=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,Custom:l,HiddenContent:c,OnlyContent:d,Positions:s,default:Q},Symbol.toStringTag,{value:"Module"}));export{t as B,i as C,s as P,le as a};
//# sourceMappingURL=Badge.story-a9c4d2ee.js.map
