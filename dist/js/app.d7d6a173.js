(function(t){function e(e){for(var r,i,u=e[0],a=e[1],l=e[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);s&&s(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/micro-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"counter-container"}},[n("div",{staticClass:"button counter-control",on:{click:t.decrement}},[t._v("-")]),n("div",[t._v(t._s(t.counter))]),n("div",{staticClass:"button counter-control",on:{click:t.increment}},[t._v("+")]),n("div",{staticClass:"button",attrs:{id:"dispatch"},on:{click:t.dispatch}},[t._v("Dispatch")])])])},c=[],i={name:"App",data:function(){return{counter:0}},created:function(){var t=this;window.addEventListener("increment_evt",(function(e){t.counter++,console.log("event received",e.detail,t)}))},methods:{increment:function(){this.counter++},decrement:function(){this.counter--},dispatch:function(){var t={target:"vue"},e=new CustomEvent("increment",{detail:t});window.dispatchEvent(e),console.log("event sent",t)}}},u=i,a=(n("034f"),n("2877")),l=Object(a["a"])(u,o,c,!1,null,null,null),s=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(s)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.d7d6a173.js.map