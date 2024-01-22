import{j as n}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as s}from"./index-02959eb3.js";import{u as o}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function r(t){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Docs/Theme/API"}),`
`,n.jsx(e.h1,{id:"theme-api",children:"Theme API"}),`
`,n.jsx(e.p,{children:`Below is the TypeScript API for the theme. You can
use this to define your theme and pass it to the provider.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`export interface Palette {
  background?: string;
  color?: string;
}

export interface Palettes {
  body?: Palette;
  primary?: Palette;
  secondary?: Palette;
  error?: Palette;
  warning?: Palette;
  success?: Palette;
}

export interface Scale {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface Sizes {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
}

export interface Weights {
  thin?: string;
  normal?: string;
  bold?: string;
  extraBold?: string;
}

export type Color = Scale;

export type Spacings = Sizes;

export interface Borders {
  radius?: Sizes;
}

export type Shadows = Scale;

export interface Colors {
  red?: Color;
  purple?: Color;
  blue?: Color;
  green?: Color;
  yellow?: Color;
  orange?: Color;
  gray?: Color;
  pink?: Color;
  slate?: Color;
  overlay?: Color;
}

export interface FontFamilies {
  fontFamily?: string;
  monoFontFamily?: string;
}

export interface Typography {
  families?: FontFamilies;
  sizes?: Sizes;
  weights?: Weights;
}

export interface Components {
  [key: string]: {
    [key: string]: string;
  };
}

export type Gradients = Omit<Colors, 'overlay'>;

export interface DesignTokens {
  palettes?: Palettes;
  colors?: Colors;
  spacings?: Spacings;
  borders?: Borders;
  gradients?: Gradients;
  shadows?: Shadows;
  typography?: Typography;
  components?: Components;
}
`})})]})}function P(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{P as default};
//# sourceMappingURL=ThemeAPI-f6c3dda3.js.map
