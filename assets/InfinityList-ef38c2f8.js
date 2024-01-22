import{j as h}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";const y=({items:e,threshold:r=3,size:n=10,nextSize:o})=>{const[t,d]=s.useState(0),c=s.useMemo(()=>[...e].slice(0,t),[t,e]),i=t<e.length,l=e.length-t,p=s.useCallback(a=>{if(i){const u=o===1/0?l:o||a||n,f=Math.min(e.length,t+u);d(f)}},[i,t,n,e,l,o]);return s.useEffect(()=>{const a=(e==null?void 0:e.length)||0,u=a<=n+r?n+r:Math.min(a,n);d(u)},[e.length,n,r]),{data:c,hasMore:i,remaining:l,showNext:p}},m=({children:e,size:r,threshold:n,nextSize:o,buttonClassName:t})=>{const d=s.Children.toArray(e),{data:c,hasMore:i,remaining:l,showNext:p}=y({items:d,size:r,threshold:n,nextSize:o});return h.jsxs(h.Fragment,{children:[c.map((a,u)=>h.jsx(s.Fragment,{children:a},u)),i&&h.jsxs("button",{className:t,onClick:a=>{a.stopPropagation(),p()},children:["Show ",Math.min(r,l)," more"]})]})};m.defaultProps={size:10,threshold:3};try{m.displayName="InfinityList",m.__docgenInfo={description:"",displayName:"InfinityList",props:{children:{defaultValue:null,description:"The children to filter.",name:"children",required:!0,type:{name:"any"}},buttonClassName:{defaultValue:null,description:"CSS Classname to apply to the button.",name:"buttonClassName",required:!1,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"The page size. Combined with the threshold, this will determine the page size.",name:"size",required:!1,type:{name:"number"}},threshold:{defaultValue:{value:"3"},description:"The fuzzy threshold to use when calculating the next page size.",name:"threshold",required:!1,type:{name:"number"}},nextSize:{defaultValue:null,description:`The numer of items to show in the next page. If undefined, will use the size.
If you want to show all items, pass infinity.`,name:"nextSize",required:!1,type:{name:"number"}}}}}catch{}export{m as I,y as u};
//# sourceMappingURL=InfinityList-ef38c2f8.js.map
