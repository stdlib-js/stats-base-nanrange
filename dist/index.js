"use strict";var c=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var x=c(function(B,m){
var l=require('@stdlib/math-base-assert-is-nan/dist');function j(a,n,i,s){var v,u,t,f,e,r,o;if(v=n.data,u=n.accessors[0],a===1||i===0)return l(u(v,s))?NaN:0;for(e=s,o=0;o<a&&(r=u(v,e),r!==r);o++)e+=i;if(o===a)return NaN;for(f=r,t=f,o+=1,o;o<a;o++)e+=i,r=u(v,e),!l(r)&&(r<f?f=r:r>t&&(t=r));return t-f}m.exports=j
});var q=c(function(C,b){
var N=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/math-base-assert-is-nan/dist'),O=x();function P(a,n,i,s){var v,u,t,f,e,r;if(a<=0)return NaN;if(f=N(n),f.accessorProtocol)return O(a,f,i,s);if(a===1||i===0)return y(n[s])?NaN:0;for(t=s,r=0;r<a&&(e=n[t],e!==e);r++)t+=i;if(r===a)return NaN;for(u=e,v=u,r+=1,r;r<a;r++)t+=i,e=n[t],!y(e)&&(e<u?u=e:e>v&&(v=e));return v-u}b.exports=P
});var p=c(function(D,g){
var R=require('@stdlib/strided-base-stride2offset/dist'),d=q();function h(a,n,i){return d(a,n,i,R(a,i))}g.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=p(),z=q();w(k,"ndarray",z);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
