import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as s}from"./index-02959eb3.js";import{u as t}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function r(n){const o=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre"},t(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Getting Started/Storybook"}),`
`,e.jsx(o.h1,{id:"storybook",children:"Storybook"}),`
`,e.jsx(o.p,{children:`If you read our Philosophy documentation, Reablocks is a Storybook-first library.
To set up Storybook with Reablocks, follow the steps below depending on your setup.`}),`
`,e.jsx(o.h3,{id:"design-tokens-approach",children:"Design Tokens Approach"}),`
`,e.jsxs(o.p,{children:["If you are choosing to use the ",e.jsx(o.code,{children:"DesignTokensProvider"}),`, we need import
it as a decorator. This will automatically apply your design tokens to
every story.`]}),`
`,e.jsxs(o.p,{children:[`To get started, if you don't already have a file called
`,e.jsx(o.code,{children:"preview.jsx"})," in your ",e.jsx(o.code,{children:".storybook"}),` folder, let's make one. Here is how
I typically structure my `,e.jsx(o.code,{children:"preview.jsx"})," file:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { DocsContainer } from '@storybook/addon-docs';
import { DesignTokensProvider } from 'reablocks';
import { theme } from '[INSERT_PATH_TO_YOUR_THEME]';

export const decorators = [
  Story => (
    <DesignTokensProvider value={theme}>
      <Story />
    </DesignTokensProvider>
  )
];

export const parameters = {
  layout: 'centered',
  docs: {
    container: ({ context, children }) => (
      <DocsContainer context={context}>
        <DesignTokensProvider value={theme}>
          {children}
        </DesignTokensProvider>
      </DocsContainer>
    )
  },
  controls: {
    hideNoControlsWarning: true
  }
};
`})}),`
`,e.jsx(o.h3,{id:"css-variables-approach",children:"CSS Variables Approach"}),`
`,e.jsxs(o.p,{children:[`If you choose to use the CSS variables approach, if you don't
already have a file called `,e.jsx(o.code,{children:"preview-head.html"})," in your ",e.jsx(o.code,{children:".storybook"}),`
folder, lets make one and define the design tokens you will
be using in your application like:`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<style>
  body {
    --spacing-md: 25px;
    --divider-bg: #ccc;
  }
</style>
`})})]})}function v(n={}){const{wrapper:o}=Object.assign({},t(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{v as default};
//# sourceMappingURL=Storybook-1921cd52.js.map
