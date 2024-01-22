import{j as n}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as s}from"./index-02959eb3.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function t(e){const o=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Docs/Theme/Blocks"}),`
`,n.jsx(o.h1,{id:"theme-blocks",children:"Theme Blocks"}),`
`,n.jsx(o.p,{children:`A set of components to use in Storybook to display theme. It provides
the following block components:`}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Typography Block"}),`
`,n.jsx(o.li,{children:"Color Block"}),`
`,n.jsx(o.li,{children:"Spacing Block"}),`
`,n.jsx(o.li,{children:"Border Block"}),`
`,n.jsx(o.li,{children:"Shadow Block"}),`
`,n.jsx(o.li,{children:"Palette Block"}),`
`,n.jsx(o.li,{children:"Components Block"}),`
`,n.jsx(o.li,{children:"Gradients Block"}),`
`,n.jsx(o.li,{children:"Icons Block ( icons not included )"}),`
`]}),`
`,n.jsx(o.h2,{id:"example",children:"Example"}),`
`,n.jsx(o.p,{children:"Here is an example Storybook story that uses the theme Blocks."}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import React from 'react';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  PaletteBlocks,
  BorderBlocks,
  ShadowBlocks,
  ComponentBlocks,
  ThemeProvider,
  darkTheme,
  IconBlocks
} from 'reablocks';

export default {
  title: 'General/Theme',
  component: ThemeProvider,
  decorators: [
    Story => (
      <ThemeProvider theme={darkTheme}>
        <div style={{ width: '90vw' }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
};

export const Colors = () => (
  <ColorBlocks />
);

export const Palettes = () => (
  <PaletteBlocks />
);

export const Typography = () => (
  <TypographyBlocks />
);

export const Spacings = () => (
  <SpacingBlocks />
);

export const Borders = () => (
  <BorderBlocks />
);

export const Gradients = () => (
  <GradientBlocks />
);

export const Shadows = () => (
  <ShadowBlocks />
);

export const Components = () => (
  <ComponentBlocks />
);

const icons = [
  {
    name: 'favorite',
    src: favoriteIconSrc
  },
   {
    name: 'favorite',
    component: FavoriteIconComponent
  }
];

export const Icons = () => (
  <IconBlocks icons={icons} />
);
`})}),`
`,n.jsxs(o.p,{children:["NOTE: This example uses the ",n.jsx(o.code,{children:"ThemeProvider"}),` in the story decorator,
but you can also use it in the `,n.jsx(o.code,{children:"preview.js"})," file to wrap all stories."]})]})}function g(e={}){const{wrapper:o}=Object.assign({},r(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(t,e)})):t(e)}export{g as default};
//# sourceMappingURL=ThemeBlock-92a27fb1.js.map
