// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r){return r!=r},v=p;var b=p;var y=function(r,e,t){var n,a,o,u,i;if(r<=0)return NaN;if(1===r||0===t)return v(e[0])?NaN:0;for(o=t<0?(1-r)*t:0,i=0;i<r&&(u=e[o])!=u;i++)o+=t;if(i===r)return NaN;for(n=a=u,i+=1;i<r;i++)u=e[o+=t],v(u)||(u<a?a=u:u>n&&(n=u));return n-a};(function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})})(y,"ndarray",(function(r,e,t,n){var a,o,u,i,l;if(r<=0)return NaN;if(1===r||0===t)return b(e[n])?NaN:0;for(u=n,l=0;l<r&&(i=e[u])!=i;l++)u+=t;if(l===r)return NaN;for(a=o=i,l+=1;l<r;l++)i=e[u+=t],b(i)||(i<o?o=i:i>a&&(a=i));return a-o}));var d=y;export{d as default};
//# sourceMappingURL=mod.js.map