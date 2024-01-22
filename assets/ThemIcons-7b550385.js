import{j as n}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as r}from"./index-02959eb3.js";import{u as s}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function t(e){const o=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre"},s(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Docs/Theme/Icons"}),`
`,n.jsx(o.h1,{id:"theme-icons",children:"Theme Icons"}),`
`,n.jsx(o.p,{children:`Out of the box, reablocks doesn't include any icons, however, you
can you use any icon library you want. This is because reablocks
wants to stay true to our core values of being unopinionated and
lightweight.`}),`
`,n.jsx(o.p,{children:`reablocks offers helpers to make it easier to document icons
in your Storybook. Below is an example of how to use the helper components.`}),`
`,n.jsxs(o.p,{children:["To get started, let's create a file called ",n.jsx(o.code,{children:"icons.ts"}),` that
will glob and load all of your icons. Below is an example of how
to do this in `,n.jsx(o.a,{href:"https://vitejs.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vite"}),"."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import React from 'react';

const iconPaths = import.meta.glob('./*.svg');

export const icons = Object.keys(iconPaths).map(key => ({
  name: key.replace('.svg', '').replace('./', ''),
  component: React.lazy(async () => {
    const lazy: any = await iconPaths[key]();
    return { default: lazy.ReactComponent };
  })
}));
`})}),`
`,n.jsxs(o.p,{children:["then later create a file called ",n.jsx(o.code,{children:"Icons.stories.mdx"}),` and import
the icons and the `,n.jsx(o.code,{children:"IconBlocks"})," component."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Meta } from '@storybook/addon-docs';
import { IconBlocks } from 'reablocks';
import { icons } from './icons';

<Meta title="General/Icons" />

<style>
body {
  --icon-block-color: #fff;
  --icon-block-background: #000;
}
</style>

## Icons
<IconBlocks icons={icons} />
`})}),`
`,n.jsx(o.p,{children:"and now you have a icons library list in your Storybook."})]})}function w(e={}){const{wrapper:o}=Object.assign({},s(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(t,e)})):t(e)}export{w as default};
//# sourceMappingURL=ThemIcons-7b550385.js.map
