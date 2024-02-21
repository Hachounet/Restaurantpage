(()=>{"use strict";var e={11:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),o=n.n(r),i=n(314),a=n.n(i),c=n(417),d=n.n(c),l=new URL(n(979),n.b),s=a()(o()),p=d()(l);s.push([e.id,`@font-face{font-family:"Goligan";src:url(${p}) format("truetype")}*{margin:0;padding:0;box-sizing:border-box}html{width:100%;height:100%}body{background-color:#4d4855;background-image:linear-gradient(147deg, #4d4855 0%, #000000 74%);background-size:100%;width:100%;height:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:2fr 8fr;grid-template-areas:"header header header" "main main main"}body header{grid-area:header;grid-column:1/4;grid-row:1;display:grid;grid-template-columns:1fr 4fr;justify-items:center;align-items:center}body header img{width:150px;height:150px}body header button{padding:10px 70px;margin:16px;text-transform:uppercase;border-radius:8px;font-size:25px;font-weight:500;color:rgba(255,255,255,.5019607843);text-shadow:none;background:rgba(0,0,0,0);cursor:pointer;box-shadow:rgba(0,0,0,0);border:1px solid rgba(255,255,255,.5019607843);transition:.7s ease;user-select:none}body header button:hover,body header :focus{color:#faebd7;background:linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);border:1px solid #6495ed;text-shadow:0 0 5px #fff,0 0 10px #fff,0 0 20px #fff;box-shadow:0 0 5px #ff0,0 0 20px #ff8c00,0 0 50px #880808,0 0 100px darkred}body #content{grid-area:main;grid-column:1/4;grid-row:2;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;align-items:baseline;padding-top:16px}body #content .text-content1{width:100%;font-size:32px;display:flex;justify-content:center;align-self:center;padding-left:16px;grid-column:1/3}body #content .text-content2{width:100%;font-size:32px;display:flex;justify-content:center;align-self:center;padding-left:16px;grid-column:2/4}body #content #imgright{display:flex;align-self:center;grid-column:3;grid-row:1}body #content #imgleft{display:flex;justify-content:end;align-self:center;grid-row:2;grid-column:1}body #content #contact{grid-column:1/3;grid-row:2;display:grid;justify-content:center;align-self:center;font-size:xx-large}body #content #contact li{list-style:none}body #content #contact li ul{font-family:"Goligan";color:#faebd7;font-size:x-large}body #content #contact-ad-text{grid-column:2/4;grid-row:1;display:grid;justify-content:center;align-self:center;font-size:32px}body #content #contact-ad-img{justify-self:center;align-self:center}body #content #contact-ingr{grid-row:2;grid-column:2/4;justify-self:center;align-self:center}body #content span{font-family:"Goligan";background-color:#ffcb43;background-image:linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}body #content span:hover{text-shadow:0 0 1px #ff0,0 0 5px #ff8c00,0 0 8px #880808,0 0 15px darkred}body #content img{width:250px;height:250px}body #content p{font-family:"Goligan";color:#faebd7}`,""]);const u=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},979:(e,t,n)=>{e.exports=n.p+"724701397422e925ddb2.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),i=n(659),a=n.n(i),c=n(56),d=n.n(c),l=n(540),s=n.n(l),p=n(113),u=n.n(p),m=n(11),f={};function g(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("span"),r=document.createElement("p"),o=document.createElement("div"),i=document.createElement("img"),a=document.createElement("div"),c=document.createElement("img"),d=document.createElement("div"),l=document.createElement("p"),s=document.createElement("span");t.classList.add("text-content1"),n.textContent="Pepperonni",r.innerHTML="Life is all about "+n.outerHTML+". It will always be.",t.appendChild(r),o.setAttribute("id","imgright"),i.src="../src/imgs/pizzaslice.png",o.appendChild(i),c.src="../src/imgs/basil.png",a.setAttribute("id","imgleft"),a.appendChild(c),d.classList.add("text-content2"),s.textContent="we believe",l.innerHTML="At Tonyo's "+s.outerHTML+" in fresh and biological ingredients. Do you ?",d.appendChild(l),e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(d)}f.styleTagTransform=u(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals,g(),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll("button"),t=document.getElementById("content");e.forEach((e=>{e.addEventListener("focus",(function(){"Home"===e.textContent?(t.innerHTML="",g()):"Menu"===e.textContent?(t.innerHTML="",function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("span"),r=document.createElement("span"),o=document.createElement("p"),i=document.createElement("div"),a=document.createElement("img"),c=document.createElement("div"),d=document.createElement("img"),l=document.createElement("div"),s=document.createElement("p"),p=document.createElement("span");t.classList.add("text-content1"),n.textContent="Pepperonni",r.textContent="bestseller",o.innerHTML="The classic "+n.outerHTML+". Unrivaled and unparalleled, our absolute "+r.outerHTML+" crafted by the hands of Tonyo's, our head chef. Made with a perfect blend of premium ingredients, including high-qualit pizza dough, rich tomate sauce, gooey mozzarella cheese, and flavorful pepperoni slices, it's a taste sensation that stands alone.",t.appendChild(o),i.setAttribute("id","imgright"),a.src="../src/imgs/pepperonnipizza.png",i.appendChild(a),c.setAttribute("id","imgleft"),d.src="../src/imgs/coppapizza.png",c.appendChild(d),l.classList.add("text-content2"),p.textContent="Coppa",s.innerHTML="The "+p.outerHTML+" Carnival: A pizza party hosted by Tonyo's, our maestro of merriment in the kitchen. Picture this - primo pizza dough, a saucy soiree of tomato goodness, mozzarella doing the melty dance, and slices of coppa bringing the flavor fiesta. It's not just a pizza; it's a Coppa Cabana in your mouth!",l.appendChild(s),e.appendChild(t),e.appendChild(l),e.appendChild(c),e.appendChild(i),document.getElementById("imgleft").style.justifyContent="center",document.getElementById("imgright").style.justifyContent="center"}()):"About"===e.textContent&&(t.innerHTML="",function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("span"),r=document.createElement("p"),o=document.createElement("br"),i=document.createElement("div"),a=document.createElement("img"),c=document.createElement("div"),d=document.createElement("img"),l=document.createElement("div"),s=document.createElement("p"),p=document.createElement("li"),u=document.createElement("ul"),m=document.createElement("ul"),f=document.createElement("ul");t.setAttribute("id","contact-ad-text"),n.textContent="zero delivery charge",r.innerHTML="Double the pizzas, "+n.outerHTML+", plus a mind-blowing,<br> ice-cold Coca-Cola - because winning tastes even better when it's free ! <br>Unleash flavor domination now !",t.appendChild(r),i.setAttribute("id","contact-ad-img"),a.src="../src/imgs/coke.png",i.appendChild(a),c.setAttribute("id","contact-ingr"),d.src="../src/imgs/mozza2.png",c.appendChild(d),l.setAttribute("id","contact"),s.textContent="Contact us at: ",u.textContent="+51 25 75 89 55",m.textContent="27 Tonyo's Alley",f.textContent="Tonyo's City",p.appendChild(u),p.appendChild(m),p.appendChild(f),l.appendChild(s),l.appendChild(o),l.appendChild(p),e.appendChild(t),e.appendChild(i),e.appendChild(c),e.appendChild(l)}())}))}))}))})()})();