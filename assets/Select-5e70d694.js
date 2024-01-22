import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as r,C as i,A as s}from"./index-02959eb3.js";import{S as o,a as d,b as h,c as x,d as j}from"./Select-4c7011aa.js";import"./RefreshIcon-686a4d31.js";import"./index-1b03fe98.js";import{Basic as p,CustomLabels as a,Createable as m,Groups as u,Error as g,FluidWidth as f}from"./SingleSelect.story-40fe4732.js";import{Basic as S}from"./MultiSelect.story-c42fd090.js";import{u as t}from"./index-2ef8b458.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";import"./rdk-b7736295.js";import"./index-91038615.js";import"./index-cfaa9c30.js";import"./motion-a93435c4.js";import"./Input-c133f965.js";import"./InlineInput-40d8930e.js";import"./index-f6b105ee.js";import"./DebouncedInput-c9a27793.js";import"./DotsLoader-62214099.js";import"./index-edf22f4f.js";import"./ListHeader-a08ce4d4.js";import"./PageTitle-1952ce29.js";import"./Typography.module-7807aee1.js";import"./PrimaryHeading-4e6611e6.js";import"./SecondaryHeading-592ea5e4.js";import"./SmallHeading-dfdb1131.js";import"./Sub-113b2b10.js";import"./Text-21a4448a.js";import"./toNumber-92911c69.js";function c(l){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",h4:"h4",code:"code"},t(),l.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Components/Form/Select"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(n.p,{children:`A select component allows the users to select a value or multiple values from the given list of options. The
implementation features:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single Select"}),`
`,e.jsx(n.li,{children:"Multi Select"}),`
`,e.jsx(n.li,{children:"Flexible customization of the components"}),`
`,e.jsx(n.li,{children:"Tagging / Creation of options"}),`
`,e.jsxs(n.li,{children:["Filtering with Fuzzy Search via ",e.jsx(n.a,{href:"https://github.com/reaviz/react-use-fuzzy",target:"_blank",rel:"nofollow noopener noreferrer",children:"fuse.js"})]}),`
`,e.jsx(n.li,{children:"Highlighting of selected options"}),`
`,e.jsx(n.li,{children:"Async Support"}),`
`,e.jsx(n.li,{children:"Groups Support"}),`
`,e.jsx(n.li,{children:"Animation"}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"single-select",children:"Single Select"}),`
`,e.jsx(n.h4,{id:"basic",children:"Basic"}),`
`,e.jsx(i,{sourceState:"shown",of:p}),`
`,e.jsx(n.h4,{id:"custom-label",children:"Custom Label"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h4,{id:"create-value-if-not-available",children:"Create value if not available"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h4,{id:"values-with-sections",children:"Values with sections"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h4,{id:"state-error",children:"State: Error"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h4,{id:"state-full-width",children:"State: Full Width"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"multi-select",children:"Multi Select"}),`
`,e.jsx(i,{sourceState:"shown",of:S}),`
`,e.jsx(n.h2,{id:"css-classes",children:"CSS Classes"}),`
`,e.jsx(n.p,{children:`The select component exposes the following CSS class names for custom
styling.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-value"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-refresh"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-clear"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-toggle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-chip"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-create-option"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-empty-search"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-empty"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-group"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-group-header"})}),`
`]}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"This component uses the following design tokens:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-background"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-border"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-spacing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-error"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-placeholder-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-disabled-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-input-icon-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-background"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-border"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-border-radius"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-group-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item-spacing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item-active-background"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item-active-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item-selected-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-menu-item-selected-background"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-chip-background"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-chip-border"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-chip-color"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"select-chip-icon-color"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Learn more about design tokens in the ",e.jsx(n.a,{href:"?path=/story/docs-design-tokens-getting-startedpage",children:"design tokens documentation"}),"."]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"select-1",children:"Select"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h3,{id:"selectoption",children:"SelectOption"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"selectmenu",children:"SelectMenu"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"selectinput",children:"SelectInput"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"selectinputchip",children:"SelectInputChip"}),`
`,e.jsx(s,{of:j})]})}function ce(l={}){const{wrapper:n}=Object.assign({},t(),l.components);return n?e.jsx(n,Object.assign({},l,{children:e.jsx(c,l)})):c(l)}export{ce as default};
//# sourceMappingURL=Select-5e70d694.js.map
