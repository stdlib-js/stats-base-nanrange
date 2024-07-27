"use strict";var o=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var q=o(function(j,c){
var s=require('@stdlib/math-base-assert-is-nan/dist');function N(e,n,f){var v,u,i,a,r;if(e<=0)return NaN;if(e===1||f===0)return s(n[0])?NaN:0;for(f<0?i=(1-e)*f:i=0,r=0;r<e&&(a=n[i],a!==a);r++)i+=f;if(r===e)return NaN;for(u=a,v=u,r+=1,r;r<e;r++)i+=f,a=n[i],!s(a)&&(a<u?u=a:a>v&&(v=a));return v-u}c.exports=N
});var p=o(function(w,l){
var m=require('@stdlib/math-base-assert-is-nan/dist');function b(e,n,f,v){var u,i,a,r,t;if(e<=0)return NaN;if(e===1||f===0)return m(n[v])?NaN:0;for(a=v,t=0;t<e&&(r=n[a],r!==r);t++)a+=f;if(t===e)return NaN;for(i=r,u=i,t+=1,t;t<e;t++)a+=f,r=n[a],!m(r)&&(r<i?i=r:r>u&&(u=r));return u-i}l.exports=b
});var y=o(function(z,g){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),O=p();k(x,"ndarray",O);g.exports=x
});var R=y();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
