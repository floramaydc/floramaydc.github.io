import{g as R}from"./_commonjsHelpers.Cpj98o6Y.js";function c(o,u){for(var n=0;n<u.length;n++){const t=u[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in o)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(o,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function d(){if(l)return s;l=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function n(t,e,r){var i=null;if(r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),"key"in e){r={};for(var a in e)a!=="key"&&(r[a]=e[a])}else r=e;return e=r.ref,{$$typeof:o,type:t,key:i,ref:e!==void 0?e:null,props:r}}return s.Fragment=u,s.jsx=n,s.jsxs=n,s}var p;function v(){return p||(p=1,f.exports=d()),f.exports}var x=v();const j=R(x),_=c({__proto__:null,default:j},[x]);export{_ as R,x as j};
