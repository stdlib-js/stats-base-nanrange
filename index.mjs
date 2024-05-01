// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";function e(r,e,t){var a,i,s,f,o;if(r<=0)return NaN;if(1===r||0===t)return n(e[0])?NaN:0;for(s=t<0?(1-r)*t:0,o=0;o<r&&(f=e[s])!=f;o++)s+=t;if(o===r)return NaN;for(a=i=f,o+=1;o<r;o++)f=e[s+=t],n(f)||(f<i?i=f:f>a&&(a=f));return a-i}r(e,"ndarray",(function(r,e,t,a){var i,s,f,o,d;if(r<=0)return NaN;if(1===r||0===t)return n(e[a])?NaN:0;for(f=a,d=0;d<r&&(o=e[f])!=o;d++)f+=t;if(d===r)return NaN;for(i=s=o,d+=1;d<r;d++)o=e[f+=t],n(o)||(o<s?s=o:o>i&&(i=o));return i-s}));const{ndarray:t}=e;export{e as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
