(function(e){function n(n){for(var c,a,d=n[0],u=n[1],f=n[2],o=0,i=[];o<d.length;o++)a=d[o],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&i.push(r[a][0]),r[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(n);while(i.length)i.shift()();return s.push.apply(s,f||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],c=!0,a=1;a<t.length;a++){var d=t[a];0!==r[d]&&(c=!1)}c&&(s.splice(n--,1),e=u(u.s=t[0]))}return e}var c={},a={app:0},r={app:0},s=[];function d(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-017d6ada":"20e7db53","chunk-1253db6b":"d5a6095e","chunk-19316920":"c010f006","chunk-1e162bbc":"6dc177f5","chunk-2d0e2531":"d4fb3c4d","chunk-76fcd92c":"d6dea0ae","chunk-39b499f4":"92f34da6","chunk-39cd0dda":"d9067be4","chunk-4fa1ebda":"3062ca48","chunk-60ec7c64":"489d9d2b","chunk-6495d766":"18e282d8","chunk-086824ba":"36912274","chunk-0d3e1cca":"3b8fbabe","chunk-873bceec":"01976abb","chunk-5112329b":"1eb30650","chunk-64f18649":"52ca51d1","chunk-4f34a74e":"0efd8abe"}[e]+".js"}function u(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-017d6ada":1,"chunk-1253db6b":1,"chunk-19316920":1,"chunk-1e162bbc":1,"chunk-76fcd92c":1,"chunk-39b499f4":1,"chunk-39cd0dda":1,"chunk-4fa1ebda":1,"chunk-60ec7c64":1,"chunk-6495d766":1,"chunk-086824ba":1,"chunk-0d3e1cca":1,"chunk-5112329b":1,"chunk-64f18649":1,"chunk-4f34a74e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-017d6ada":"5ad387fb","chunk-1253db6b":"86d9d626","chunk-19316920":"b2198af4","chunk-1e162bbc":"5437ef2f","chunk-2d0e2531":"31d6cfe0","chunk-76fcd92c":"7669ab2b","chunk-39b499f4":"d5554173","chunk-39cd0dda":"847da534","chunk-4fa1ebda":"4f6f1ea2","chunk-60ec7c64":"8d0b1b97","chunk-6495d766":"96b74664","chunk-086824ba":"0f96a656","chunk-0d3e1cca":"8392ba21","chunk-873bceec":"31d6cfe0","chunk-5112329b":"10f34ca1","chunk-64f18649":"20014c08","chunk-4f34a74e":"853c33a6"}[e]+".css",r=u.p+c,s=document.getElementsByTagName("link"),d=0;d<s.length;d++){var f=s[d],o=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===c||o===r))return n()}var i=document.getElementsByTagName("style");for(d=0;d<i.length;d++){f=i[d],o=f.getAttribute("data-href");if(o===c||o===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete a[e],l.parentNode.removeChild(l),t(s)},l.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var s=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=s);var f,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=d(e);var i=new Error;f=function(n){o.onerror=o.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",i.name="ChunkLoadError",i.type=c,i.request=a,t[1](i)}r[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:o})}),12e4);o.onerror=o.onload=f,document.head.appendChild(o)}return Promise.all(n)},u.m=e,u.c=c,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)u.d(t,c,function(n){return e[n]}.bind(null,c));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/reshape/dist/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],o=f.push.bind(f);f.push=n,f=f.slice();for(var i=0;i<f.length;i++)n(f[i]);var l=o;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2849:function(e,n,t){"use strict";var c=t("8a88"),a=t.n(c);a.a},4678:function(e,n,t){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=r(e);return t(n)}function r(e){if(!t.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("4160"),t("b64b"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("159b"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=t("bc3a"),r=t.n(a),s=t("a7fe"),d=t.n(s),u={code:"zh_TW",messages:{alpha:"{_field_} 須以英文組成",alpha_dash:"{_field_} 須以英數、斜線及底線組成",alpha_num:"{_field_} 須以英數組成",alpha_spaces:"{_field_} 須以英文及空格組成",between:"{_field_} 須介於 {min} 至 {max}之間",confirmed:" {_field_} 不一致",digits:"{_field_} 須為 {length} 位數字",dimensions:"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素",email:"{_field_} 須為有效的電子信箱",excluded:"{_field_} 的選項無效",ext:"{_field_} 須為有效的檔案",image:"{_field_} 須為圖片",oneOf:"{_field_} 的選項無效",integer:"{_field_} 須為整數",length:"{_field_} 的長度須為 {length}",max:"{_field_} 不能大於 {length} 個字元",max_value:"{_field_} 不得大於 {max}",mimes:"{_field_} 須為有效的檔案類型",min:"{_field_} 不能小於 {length} 個字元",min_value:"{_field_} 不得小於 {min}",numeric:"{_field_} 須為數字",regex:"{_field_} 的格式錯誤",required:"{_field_} 為必填",required_if:"{_field_} 為必填",size:"{_field_} 的檔案須小於 {size}KB"}},f=t("9062"),o=t.n(f),i=t("4eb5"),l=t.n(i),b=t("d842"),h=t("30ef"),j=t.n(h),m=(t("1157"),t("4989"),t("15f5"),t("7051"),t("7bb1")),p=t("4c93"),k=(t("e40d"),function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),g=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"loading"},[t("i",{staticClass:"fas fa-circle-notch quick-spin"}),e._v(" Loading... ")])}],_={name:"MyLoading"},v=_,y=(t("2849"),t("2877")),w=Object(y["a"])(v,k,g,!1,null,null,null),z=w.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},x=[],P=(t("5c0b"),{}),q=Object(y["a"])(P,O,x,!1,null,null,null),E=q.exports,C=t("8c4f");c["a"].use(C["a"]);var S=[{path:"/",component:function(){return t.e("chunk-39b499f4").then(t.bind(null,"cea4"))},children:[{path:"/",name:"首頁",component:function(){return Promise.all([t.e("chunk-2d0e2531"),t.e("chunk-76fcd92c")]).then(t.bind(null,"3daa"))}},{path:"/product/:id",name:"商品頁面",component:function(){return t.e("chunk-39cd0dda").then(t.bind(null,"d2f1"))}},{path:"/cart",name:"購物車",component:function(){return t.e("chunk-19316920").then(t.bind(null,"b789"))}},{path:"/products",name:"所有商品",component:function(){return Promise.all([t.e("chunk-6495d766"),t.e("chunk-2d0e2531"),t.e("chunk-0d3e1cca")]).then(t.bind(null,"e6dc"))}},{path:"/category",name:"分類頁",component:function(){return Promise.all([t.e("chunk-6495d766"),t.e("chunk-086824ba")]).then(t.bind(null,"4886"))},props:function(e){return{query:e.query.n}}},{path:"/search",name:"搜尋",component:function(){return Promise.all([t.e("chunk-6495d766"),t.e("chunk-873bceec"),t.e("chunk-5112329b")]).then(t.bind(null,"2d3b"))},props:function(e){return{query:e.query.key}}},{path:"/about",name:"簡介",component:function(){return t.e("chunk-1253db6b").then(t.bind(null,"f820"))}}]},{path:"/login",component:function(){return t.e("chunk-1e162bbc").then(t.bind(null,"5d9f"))}},{path:"/admin",component:function(){return t.e("chunk-4fa1ebda").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return t.e("chunk-017d6ada").then(t.bind(null,"6d09"))},meta:{requiresAuth:!0}},{path:"orders",component:function(){return t.e("chunk-64f18649").then(t.bind(null,"b06d"))},meta:{requiresAuth:!0}},{path:"coupons",name:"優惠券",component:function(){return Promise.all([t.e("chunk-873bceec"),t.e("chunk-4f34a74e")]).then(t.bind(null,"2e25"))},meta:{requiresAuth:!0}},{path:"Storages",name:"圖片頁面",component:function(){return t.e("chunk-60ec7c64").then(t.bind(null,"ce5a"))},meta:{requiresAuth:!0}}]}],T=new C["a"]({routes:S,scrollBehavior:function(e,n,t){return{x:0,y:0}}}),A=T;c["a"].prototype.$bus=new c["a"],c["a"].use(b["a"].use(j.a)),c["a"].use(l.a),c["a"].use(d.a,r.a),c["a"].config.productionTip=!1,Object.keys(p).forEach((function(e){Object(m["d"])(e,p[e])})),Object(m["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(m["e"])("tw",u),c["a"].component("MyLoading",z),c["a"].component("Loading",o.a),c["a"].component("ValidationProvider",m["b"]),c["a"].component("ValidationObserver",m["a"]),c["a"].use(o.a,{loader:"spinner",opacity:.8,isFullPage:!1,height:32,width:32,color:"#00457C"}),c["a"].filter("priceFormat",(function(e){return"NT$ "+e.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,(function(e,n,t){return n+t.replace(/\d{3}/g,",$&")}))})),new c["a"]({router:A,render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),a=t.n(c);a.a},"8a88":function(e,n,t){},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.75a4400a.js.map