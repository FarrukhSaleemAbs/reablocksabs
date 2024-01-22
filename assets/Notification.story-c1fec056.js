import{j as n}from"./jsx-runtime-9c4ae004.js";import{r}from"./index-1b03fe98.js";import{N as i,a as s}from"./Notifications-22955338.js";import"./index-91038615.js";import"./motion-a93435c4.js";import"./index-cfaa9c30.js";const M={title:"Components/Layers/Notification",component:i},c=({message:o,variant:t,onClose:e})=>n.jsxs("div",{className:t,style:{width:"200px",height:"50px",borderRadius:"5px",display:"flex",alignItems:"center",padding:"10px",boxSizing:"border-box",...t==="default"?{backgroundColor:"lightblue",color:"black"}:null,...t==="success"?{backgroundColor:"lightgreen",color:"black"}:null,...t==="warning"?{backgroundColor:"lightsalmon",color:"black"}:null,...t==="error"?{backgroundColor:"lightcoral",color:"black"}:null},onClick:e,children:[o,n.jsx("div",{style:{marginLeft:"5px",fontSize:"12px"},children:"(Click me to close!)"})]}),a=()=>n.jsx(i,{children:n.jsx(s.Consumer,{children:({notify:o,clearAllNotifications:t})=>n.jsxs(r.Fragment,{children:[n.jsx("button",{onClick:()=>o(`Hello! ${Math.random()}`),children:"Show"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("button",{onClick:()=>t(),children:"Clear"})]})})}),l=()=>n.jsx(i,{children:n.jsx(s.Consumer,{children:({notify:o,clearAllNotifications:t})=>n.jsxs(r.Fragment,{children:[n.jsx("button",{onClick:()=>o("New Message Alert!",{body:"You have a new message"}),children:"Title + Text Body"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("button",{onClick:()=>o("Welcome",{body:n.jsx("h3",{children:"Hello Friend!"})}),children:"Title and Body Content"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("button",{onClick:()=>t(),children:"Clear"})]})})}),u=()=>n.jsx(i,{children:n.jsx(s.Consumer,{children:({notifySuccess:o,notifyError:t,notifyWarning:e,clearAllNotifications:E})=>n.jsxs(r.Fragment,{children:[n.jsx("button",{onClick:()=>o("Something good happened!"),children:"Success"}),n.jsx("button",{onClick:()=>t("Something bad happened!"),children:"Error"}),n.jsx("button",{onClick:()=>e("Something questionable happened!"),children:"Warning"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("button",{onClick:()=>E(),children:"Clear"})]})})}),m=()=>n.jsx(i,{children:n.jsx(s.Consumer,{children:({notify:o,clearAllNotifications:t})=>n.jsxs(r.Fragment,{children:[n.jsx("button",{onClick:()=>{for(let e=0;e<20;e++)setTimeout(()=>o("Something bad happened!"),50)},children:"Flood"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("button",{onClick:()=>t(),children:"Clear"})]})})}),d=()=>n.jsx(i,{components:{default:c,success:c,warning:c,error:c},children:n.jsx(s.Consumer,{children:({notify:o,clearAllNotifications:t})=>n.jsxs(r.Fragment,{children:[n.jsx("button",{onClick:()=>o("Default"),children:"Custom Default"}),n.jsx("button",{onClick:()=>o("Success",{variant:"success"}),children:"Custom Success"}),n.jsx("button",{onClick:()=>o("Warning",{variant:"warning"}),children:"Custom Warning"}),n.jsx("button",{onClick:()=>o("Error",{variant:"error"}),children:"Custom Error"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("button",{onClick:()=>t(),children:"Clear"})]})})});var b,C,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Notifications>
    <NotificationsContext.Consumer>
      {({
      notify,
      clearAllNotifications
    }) => <Fragment>
          <button onClick={() => notify(\`Hello! \${Math.random()}\`)}>
            Show
          </button>
          <br />
          <br />
          <button onClick={() => clearAllNotifications()}>Clear</button>
        </Fragment>}
    </NotificationsContext.Consumer>
  </Notifications>`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,h,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Notifications>
    <NotificationsContext.Consumer>
      {({
      notify,
      clearAllNotifications: clearAll
    }) => <Fragment>
          <button onClick={() => notify('New Message Alert!', {
        body: 'You have a new message'
      })}>
            Title + Text Body
          </button>
          <br />
          <br />
          <button onClick={() => notify('Welcome', {
        body: <h3>Hello Friend!</h3>
      })}>
            Title and Body Content
          </button>
          <br />
          <br />
          <button onClick={() => clearAll()}>Clear</button>
        </Fragment>}
    </NotificationsContext.Consumer>
  </Notifications>`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,j,N;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Notifications>
    <NotificationsContext.Consumer>
      {({
      notifySuccess,
      notifyError,
      notifyWarning,
      clearAllNotifications: clearAll
    }) => <Fragment>
          <button onClick={() => notifySuccess('Something good happened!')}>
            Success
          </button>
          <button onClick={() => notifyError('Something bad happened!')}>
            Error
          </button>
          <button onClick={() => notifyWarning('Something questionable happened!')}>
            Warning
          </button>
          <br />
          <br />
          <button onClick={() => clearAll()}>Clear</button>
        </Fragment>}
    </NotificationsContext.Consumer>
  </Notifications>`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var k,y,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Notifications>
    <NotificationsContext.Consumer>
      {({
      notify,
      clearAllNotifications: clearAll
    }) => <Fragment>
          <button onClick={() => {
        for (let i = 0; i < 20; i++) {
          setTimeout(() => notify('Something bad happened!'), 50);
        }
      }}>
            Flood
          </button>
          <br />
          <br />
          <button onClick={() => clearAll()}>Clear</button>
        </Fragment>}
    </NotificationsContext.Consumer>
  </Notifications>`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,A,w;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`() => <Notifications components={{
  default: CustomNotification,
  success: CustomNotification,
  warning: CustomNotification,
  error: CustomNotification
}}>
    <NotificationsContext.Consumer>
      {({
      notify,
      clearAllNotifications
    }) => <Fragment>
          <button onClick={() => notify('Default')}>Custom Default</button>
          <button onClick={() => notify('Success', {
        variant: 'success'
      })}>
            Custom Success
          </button>
          <button onClick={() => notify('Warning', {
        variant: 'warning'
      })}>
            Custom Warning
          </button>
          <button onClick={() => notify('Error', {
        variant: 'error'
      })}>
            Custom Error
          </button>
          <br />
          <br />
          <button onClick={() => clearAllNotifications()}>Clear</button>
        </Fragment>}
    </NotificationsContext.Consumer>
  </Notifications>`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};export{d as CustomComponent,m as FloodPrevention,a as Title,l as TitleAndBody,u as Variants,M as default};
//# sourceMappingURL=Notification.story-c1fec056.js.map
