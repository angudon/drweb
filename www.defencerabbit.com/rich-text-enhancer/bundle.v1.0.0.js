!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WebflowTools=t():e.WebflowTools=t()}(self,(function(){return function(){"use strict";var e={966:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={tokens:[{prefix:"#",tag:"span",attr:"id"},{prefix:".",tag:"span",attr:"class"},{prefix:"$",tag:"span",attr:"$1",regex:/\[\$([^=]+)(=([^\]]+))?\](.*?)\[\$\1\]/gm}],tags:"p, li, h1, h2, h3, h4, h5, h6, blockquote, figcaption"}},154:function(e,t,r){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,f=n(r(966));i=f.default.tokens.map((function(e){return o({regex:new RegExp("\\[\\"+e.prefix+"([\\w-]+)\\](.*?)\\[\\"+e.prefix+"\\1\\]","gm")},e)})),document.querySelectorAll(".w-richtext").forEach((function(e){e.querySelectorAll(f.default.tags).forEach((function(e){var t=e.innerHTML;i.forEach((function(e){var r=e.regex,o=e.tag,n=e.attr,i=e.prefix;do{t="$"!==i?t.replace(r,"<"+o+" "+n+'="$1">$2</'+o+">"):t.replace(r,"<"+o+' $1="$3">$4</'+o+">")}while(r.test(t))})),e.innerHTML=t}))})),window.Webflow.destroy(),window.Webflow.ready(),window.Webflow.require("ix2").init()}},t={};return function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}(154)}()}));