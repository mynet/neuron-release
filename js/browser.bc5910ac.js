(function(e){function n(n){for(var t,c,s=n[0],l=n[1],u=n[2],p=0,a=[];p<s.length;p++)c=s[p],r[c]&&a.push(r[c][0]),r[c]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);d&&d(n);while(a.length)a.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,n=0;n<i.length;n++){for(var o=i[n],t=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(t=!1)}t&&(i.splice(n--,1),e=c(c.s=o[0]))}return e}var t={},r={browser:0},i=[];function c(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=t,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(o,t,function(n){return e[n]}.bind(null,t));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var d=l;i.push([2,"chunk-vendors"]),o()})({2:function(e,n,o){e.exports=o("f8de")},f8de:function(e,n,o){window.BrowserWindow=o("bdb9").remote.BrowserWindow,window.env=Object({NODE_ENV:"production",VUE_APP_BUILD_ENV:"development",VUE_APP_LMS_VERSION:"v0.0.5",VUE_APP_NEURON_VERSION:"v0.0.5",VUE_APP_CURRENT_NODE_IDENTITY:"dd157880b7-28036-39768292",BASE_URL:"/"});var t=void 0;o("bdb9").ipcRenderer.on("message",function(e,n){console.log("ipcRenderer on message: ",n),n.length<=150&&document.getElementById("ipc_messages")&&(document.getElementById("ipc_messages").textContent=n,document.getElementById("ipc_messages").style.display="block",clearTimeout(t),t=setTimeout(function(){document.getElementById("ipc_messages").style.display="none",document.getElementById("ipc_messages").textContent=""},2e3))}),o("bdb9").ipcRenderer.on("serialport",function(e,n){console.log("ipcRenderer on serialport: ",n),window.current_serialport=n}),o("bdb9").ipcRenderer.on("license_key",function(e,n){console.log("ipcRenderer on license_key: ",n),window.LICENSE_KEY=n}),o("bdb9").ipcRenderer.on("current_scope",function(e,n){console.log("ipcRenderer on current_scope: ",n),window.CURRENT_SCOPE=n}),console.log("browser.js is loaded")}});
//# sourceMappingURL=browser.bc5910ac.js.map