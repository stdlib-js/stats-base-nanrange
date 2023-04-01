// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;function c(r){return r!=r}function f(r,e,t){var n,o,a,u,i;if(r<=0)return NaN;if(1===r||0===t)return c(e[0])?NaN:0;for(a=t<0?(1-r)*t:0,i=0;i<r&&(u=e[a])!=u;i++)a+=t;if(i===r)return NaN;for(n=o=u,i+=1;i<r;i++)c(u=e[a+=t])||(u<o?o=u:u>n&&(n=u));return n-o}e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e,t,n){var o,a,u,i,l;if(r<=0)return NaN;if(1===r||0===t)return c(e[n])?NaN:0;for(u=n,l=0;l<r&&(i=e[u])!=i;l++)u+=t;if(l===r)return NaN;for(o=a=i,l+=1;l<r;l++)c(i=e[u+=t])||(i<a?a=i:i>o&&(o=i));return o-a}});const{ndarray:_}=f;export{f as default,_ as ndarray};
//# sourceMappingURL=mod.js.map
