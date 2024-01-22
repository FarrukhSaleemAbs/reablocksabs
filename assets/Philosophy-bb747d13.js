import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-S4VUQJ4A-9d1244f5.js";import{M as i}from"./index-02959eb3.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-fe8dba03.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./extends-98964cd2.js";import"./index-a9f1da4e.js";import"./isFunction-2d8a1518.js";import"./isSymbol-4e2c7bff.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Getting Started/Philosophy"}),`
`,e.jsx(n.h1,{id:"philosophy",children:"Philosophy"}),`
`,e.jsx(n.p,{children:`When you first see this library, one of the first questions you
might ask yourself is why another component library; don't we have enough? It's true,
there are a LOT of component libraries out there such as MUI, AntD,
Tailwind, and the list continues. These libraries are very mature and
can help you build a great looking application without too much work,
but they come with a number of drawbacks. Let's dive into why we created
this now.`}),`
`,e.jsx(n.h2,{id:"design-style-opinions",children:"Design Style Opinions"}),`
`,e.jsx(n.p,{children:`Libraries such as MUI look great out of the box, but they are extremely
opinionated about their design philosophy and that's OK. Those design
philosophies can help you build a nice looking application very quickly
without the need for a designer.`}),`
`,e.jsx(n.p,{children:`The problem is if you want a more customized design than say just changing
some colors, it becomes more of a challenge and the benefits begin to dwindle.
Most all offer customization ability but those customizations like disabling the
ripple of a material button come at a cost:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Download bloat (ripples/animations are hard)"}),`
`,e.jsx(n.li,{children:`Internal breaking changes (once you start customizing internal styles which
almost always happens)`}),`
`,e.jsx(n.li,{children:"Increased complexity with overrides"}),`
`]}),`
`,e.jsx(n.p,{children:`Reablocks is designed to not have a design out of the box. We plan to offer
themes and provide lots of examples of how to make them beautiful but not having
a design is our priority. This lets you avoid all the nasty overrides and focus
on building the product your team needs.`}),`
`,e.jsx(n.h2,{id:"css-in-js",children:"CSS-IN-JS"}),`
`,e.jsx(n.p,{children:`When CSS-IN-JS first came out, it was a game changer. It allowed developers the
ability to write runtime CSS which allowed us to break away from the build time
variables we had in LESS/SASS. The ability to do calculations on sizes, dynamically
change colors for dark themes and provide a nice type-safe API.`}),`
`,e.jsx(n.p,{children:`CSS has matured so much since then, literally almost everything I listed above and
more can be done with native CSS now. By using the native CSS you also get some
other advantages:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Better performance"}),`
`,e.jsx(n.li,{children:"Standard language for styling no matter the project"}),`
`,e.jsx(n.li,{children:"Separation of concerns (styles and code belong in different places)"}),`
`]}),`
`,e.jsx(n.p,{children:`To this day, almost every React-based component library still uses CSS-IN-JS.
There are many die-hard CSS-IN-JS fans out there that could debate this all day long,
it's almost like debating React vs Angular vs Vue though.`}),`
`,e.jsx(n.p,{children:`Reablocks is designed to use native CSS features such as CSS variables.
Out of the box, we provide helpers such as our design tokens provider to
help you standardize and provide a convenient way to define those variables
but you don't have to use it and under the hood it's just printing out standard CSS.`}),`
`,e.jsx(n.p,{children:`The one drawback to this approach is if you have to support really old browsers,
then this won't work. If that's the case, this library isn't for you. Once you don't
have to support those, please give us a look again though!`}),`
`,e.jsx(n.h2,{id:"documentation",children:"Documentation"}),`
`,e.jsx(n.p,{children:`Almost all of the libraries I mentioned have great documentation and examples.
The challenge begins once you start customizing the components. Some of them let
you change the colors inline but if you start adding custom CSS styles and such
all that goes out the window. Outside of that, maintaining legacy documentation
for open-source developers is difficult at each version point.`}),`
`,e.jsx(n.p,{children:`Often times developers will take the examples from the libraries' website and
build out Storybook stories for them so you can have the examples customized to your usage.`}),`
`,e.jsx(n.p,{children:`Rather than build a fancy documentation site, Reablocks' documentation is
all built inside Storybook. By doing this, all the documentation is in an
easy to consume and standard format that any consumer can import into
their Storybook. We've even built Storybook story helpers and specific
documentation on how to set it up in your application.`}),`
`,e.jsx(n.p,{children:`Reablocks is the first component library to take a Storybook-first approach.
This is a core principle of ours so we are dedicated to making this as smooth as possible.`}),`
`,e.jsx(n.h2,{id:"agnostic-framework-pitfalls",children:"Agnostic Framework Pitfalls"}),`
`,e.jsx(n.p,{children:`A recent trend in the UI component libraries is to make vanilla JavaScript
components and then create wrappers for them. As an open-source developer,
I understand the reasoning, however, it comes with sacrifices.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Developers are not able to take advantage of native capabilities and instead
monkey patch to support the various frameworks. This can result in oddities due
to multiple scripts accessing the DOM not in sync with each other.`}),`
`,e.jsx(n.li,{children:`The APIs have to make sacrifices, for example, it becomes more difficult to
design APIs that take advantage of some of the awesome React features like JSX inputs.`}),`
`,e.jsx(n.li,{children:"The documentation and examples suffer because it's so much to maintain."}),`
`,e.jsx(n.li,{children:`Download bloat is increased because you have to handle things that React just
does manually resulting in a larger download size.`}),`
`]}),`
`,e.jsx(n.p,{children:"Reablocks is dedicated to React and we are going to be focusing on it exclusively."}),`
`,e.jsx(n.h2,{id:"animations",children:"Animations"}),`
`,e.jsx(n.p,{children:`Most of the libraries have their own animation frameworks
they use internally (or don't even do animations natively).
Animations are not just important for user experience but can provide
valuable experiences to see how data changes over time.`}),`
`,e.jsx(n.p,{children:`The challenge begins when you need to synchronize animations between
all the various components. For example, you have a drawer component
and when it opens you want to animate in the child components. Usually
developers handle this by doing \`setTimeout\`\` for the duration the drawer
takes to open which is bad for a few reasons.`}),`
`,e.jsx(n.p,{children:`It's brittle since the timing is based on the ideal system that can animate at that speed
This assumes the animations are all linear, good animations are
spring-based since they feel more natural`}),`
`,e.jsxs(n.p,{children:["Reablocks (and all the Reaviz projects for that matter) are all built on ",e.jsx(n.a,{href:"https://www.framer.com/docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"framer-motion"}),`.
Framer Motion is amazing, it performs spring (and linear if you want) based animations
that happen at 60 FPS and can synchronize between desperate components.
It's a big bet, but Framer-Motion has been out for a while (previously named
React-Pose and based on Popmotion) and is supported by Framer, so as far as bets
are concerned in technology, it's about as good one as you can make.`]}),`
`,e.jsx(n.h2,{id:"enterprise-focused",children:"Enterprise-focused"}),`
`,e.jsx(n.p,{children:`One unique attribute of this library is that we aren't trying to make a
library that is everything to everyone. We are focusing on only on
enterprise web applications and more specifically data-intensive applications.
You won't find any hero banners or similar components, instead components like
displaying large numbers, formatting data sizes, and so on.`}),`
`,e.jsx(n.h2,{id:"wrap-up",children:"Wrap up"}),`
`,e.jsxs(n.p,{children:[`Reablocks is built by industry-leading professionals and the lead developer
`,e.jsx(n.a,{href:"https://github.com/amcdnl",target:"_blank",rel:"nofollow noopener noreferrer",children:"Austin McDaniel"}),` was a former Angular Material team
member. The team has built  more than half a dozen component libraries and the project
is supported by `,e.jsx(n.a,{href:"https://goodcode.us",target:"_blank",rel:"nofollow noopener noreferrer",children:"Good Code"}),"."]}),`
`,e.jsx(n.p,{children:`We hope you enjoy our hard work, please share with others and let's
make the web a better place.`})]})}function j(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{j as default};
//# sourceMappingURL=Philosophy-bb747d13.js.map
