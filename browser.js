// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;function c(e){return e!=e}function _(e,r,t){var n,o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return c(r[0])?NaN:0;for(a=t<0?(1-e)*t:0,u=0;u<e&&(i=r[a])!=i;u++)a+=t;if(u===e)return NaN;for(n=o=i,u+=1;u<e;u++)c(i=r[a+=t])||(i<o?o=i:i>n&&(n=i));return n-o}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},r(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,i,u,l;if(e<=0)return NaN;if(1===e||0===t)return c(r[n])?NaN:0;for(i=n,l=0;l<e&&(u=r[i])!=u;l++)i+=t;if(l===e)return NaN;for(o=a=u,l+=1;l<e;l++)c(u=r[i+=t])||(u<a?a=u:u>o&&(o=u));return o-a}});const{ndarray:p}=_;e.default=_,e.ndarray=p,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).nanrange={});
//# sourceMappingURL=browser.js.map
