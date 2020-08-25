/*!
 *  name: @feizheng/react-radio-group
 *  description: Abstract radio component for react.
 *  homepage: https://github.com/afeiship/react-radio-group#readme
 *  version: 1.0.2
 *  date: 2020-08-25T09:10:42.074Z
 *  license: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactRadioGroup=t():e.ReactRadioGroup=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@feizheng/noop")},function(e,t){e.exports=require("classnames")},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(3),u=n.n(a),i=n(0),c=n.n(i),f=n(1),l=n.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O="react-radio-group",j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,o=v(a);function a(){var e;m(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))).onChange=function(t){var n=t.target.dataset.value;(0,e.props.onChange)({target:{value:n}})},e}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.defaultValue,o=t.items,a=t.template,i=t.name,c=(t.onChange,y(t,["className","defaultValue","items","template","name","onChange"]));return l.a.createElement("section",s({"data-component":O,className:u()(O,n)},c),o.map((function(t,n){return a({item:t,index:n},(function(t,n){return l.a.createElement("input",s({onChange:e.onChange,type:"radio",name:i,"data-value":t,defaultChecked:r===t,className:"is-field"},n))}))})))}}])&&b(t.prototype,n),r&&b(t,r),a}(f.Component);j.displayName=O,j.version="1.0.2",j.propTypes={className:c.a.string,name:c.a.string.isRequired,value:c.a.string,items:c.a.array,template:c.a.func,onChange:c.a.func},j.defaultProps={items:[],onChange:o.a,template:function(e,t){var n=e.item,r=(e.index,n.value),o=n.label;return l.a.createElement("label",{key:r,className:"".concat(O,"__item")},t(r),l.a.createElement("span",{className:"is-label"},o))}};t.default=j}])}));
//# sourceMappingURL=index.js.map