!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.buyvsrent=t():e.buyvsrent=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var n=function(e){var t=e.loan,o=e.loanRate,n=e.months;return t*o*Math.pow(1+o,n)/(Math.pow(1+o,n)-1)};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.loan,o=void 0===t?300:t,r=e.loanRate,i=void 0===r?.049:r,a=e.months,u=void 0===a?360:a,c=e.cash,f=void 0===c?100:c,d=e.cashRate,s=void 0===d?.04:d,p=e.rent,l=void 0===p?.4:p,v=e.rentRate,x=void 0===v?.1:v,b=e.inflationRate,h=void 0===b?.05:b,y=f+o;s/=12,x/=12;for(var m=n({loan:o,loanRate:i/=12,months:u}),w=0;w<u;w+=1)f=(f+m-l*(1+x))*(1+s);f=f.toFixed(2);var j=Math.pow(1+h,u/12).toFixed(2),R=(f/j).toFixed(2);return{housePrice:y,cash:f,inflation:j,power:R,msg:(u/12).toFixed()+'年后：<br>买房者获得当年总价"'+y+'万"的一套房子；租房者获得"'+f+'万"现金（购买力相当于当年的"'+R+'万"）；<br>当年买的房子需要涨至"'+(f/y).toFixed(2)+'倍"持平租房者现金流；<br>由于通货膨胀，物价已经是原来的"'+j+'倍"。'}}}])});
//# sourceMappingURL=buy-vs-rent.js.map