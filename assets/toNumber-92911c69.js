import{a as s}from"./isFunction-2d8a1518.js";import{i as m}from"./isSymbol-4e2c7bff.js";var a=/\s/;function f(r){for(var t=r.length;t--&&a.test(r.charAt(t)););return t}var o=f,c=o,b=/^\s+/;function d(r){return r&&r.slice(0,c(r)+1).replace(b,"")}var p=d,I=p,e=s,x=m,n=0/0,y=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,_=/^0o[0-7]+$/i,$=parseInt;function N(r){if(typeof r=="number")return r;if(x(r))return n;if(e(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=e(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=I(r);var i=O.test(r);return i||_.test(r)?$(r.slice(2),i?2:8):y.test(r)?n:+r}var E=N;export{E as t};
//# sourceMappingURL=toNumber-92911c69.js.map
