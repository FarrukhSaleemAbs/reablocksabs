import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as s}from"./index-02959eb3.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function t(n){const o=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Theme/Getting Started"}),`
`,e.jsx(o.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(o.p,{children:`A provider for design tokens in your application. It has no opinions about
the UI libraries you use, and it's agnostic to the design system you use.`}),`
`,e.jsx(o.p,{children:"It also provides Storybook blocks for you to use in your storybook."}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.p,{children:"Initalize it in the root of your application like:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { ThemeProvider } from 'reablocks';

export const App = () => (
  <ThemeProvider theme={myTheme}>
    <YourComponents />
  </ThemeProvider>
);
`})}),`
`,e.jsx(o.p,{children:"Later on you can use the hook to get the design tokens:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { useTheme } from 'reablocks';

export const MyComponent = () => {
  //-> All tokens available
  const tokens = useTheme();
};
`})}),`
`,e.jsx(o.p,{children:"You can also use it via CSS variables like:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.body {
  color: var(--body-color);
}
`})})]})}function v(n={}){const{wrapper:o}=Object.assign({},r(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{v as default};
//# sourceMappingURL=Theme-d18cdb41.js.map
