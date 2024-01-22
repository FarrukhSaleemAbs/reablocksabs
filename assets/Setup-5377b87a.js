import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as s}from"./index-02959eb3.js";import{u as t}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function o(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre"},t(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Getting Started/Setup"}),`
`,e.jsx(n.h1,{id:"setup",children:"Setup"}),`
`,e.jsx(n.h2,{id:"installing",children:"Installing"}),`
`,e.jsxs(n.p,{children:["You can install reablocks with ",e.jsx(n.a,{href:"https://www.npmjs.com/package/reablocks",target:"_blank",rel:"nofollow noopener noreferrer",children:"NPM"})," or Yarn."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["NPM: ",e.jsx(n.code,{children:"npm install reablocks --save"})]}),`
`,e.jsxs(n.li,{children:["YARN: ",e.jsx(n.code,{children:"yarn add reablocks"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:`Reablocks aims to be design system agnostic. Out of the box, Reablocks includes a
lightweight design token system, however, that is optional.`}),`
`,e.jsx(n.p,{children:`Not all of the components require design tokens, but the more visual-based ones do.
If a component requires a design token, it will be called out in the documentation
so that developers are aware.`}),`
`,e.jsx(n.p,{children:"As a result, there are two different approaches for setting up Reablocks:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Design Token Provider"}),`
`,e.jsx(n.li,{children:"CSS Variables"}),`
`]}),`
`,e.jsx(n.h3,{id:"design-token-provider",children:"Design Token Provider"}),`
`,e.jsx(n.p,{children:`The design token provider gives you a standard system to define spacing, colors,
and themes. It comes with a React provider and hook so you can get started
with Reablocks easily and in a standard way.`}),`
`,e.jsx(n.p,{children:`You don't have to use this provider; one reason is if you already
have a design system in place and just want to use pieces of Reablocks.`}),`
`,e.jsx(n.p,{children:`To get started with the design tokens provider, you can simply import
it at the top of your application.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DesignTokensProvider, lightTheme } from 'reablocks';

export const App = () => (
  <>
    <DesignTokensProvider theme={lightTheme}>
      Your Application Code
    </DesignTokensProvider>
  </>
);
`})}),`
`,e.jsx(n.p,{children:`To learn more about the design tokens, visit the documentation
specific for the design tokens.`}),`
`,e.jsx(n.h3,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:`If you are using the CSS variables approach, simply
define each design token ( called out in each component documentation )
to the body element like:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`body {
  --divider-bg: #ccc;
  --divider-spacing: 25px;
}
`})}),`
`,e.jsx(n.h2,{id:"developing",children:"Developing"}),`
`,e.jsx(n.p,{children:"If you want to run the project locally, its really easy!"}),`
`,e.jsx(n.p,{children:`The project uses Storybook for its demos and development
environment. To run it locally:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clone repo"}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm install"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"npm start"})}),`
`]}),`
`,e.jsx(n.p,{children:`Once started the browser will open to the storybook url.
From here you can tweak components and see them build
and reload in real time.`}),`
`,e.jsxs(n.p,{children:[`We use Rollup to build and package for distribution.
You can run this by doing `,e.jsx(n.code,{children:"npm run build"}),` and it will
create a `,e.jsx(n.code,{children:"dist"}),` folder with the type definitions, bundled
javascript and css files.`]})]})}function v(i={}){const{wrapper:n}=Object.assign({},t(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{v as default};
//# sourceMappingURL=Setup-5377b87a.js.map
