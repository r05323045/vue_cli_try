(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b499f4"],{"0d10":function(t,a,e){},8418:function(t,a,e){"use strict";var s=e("c04e"),n=e("9bf2"),r=e("5c6c");t.exports=function(t,a,e){var i=s(a);i in t?n.f(t,i,r(0,e)):t[i]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),n=e("d039"),r=e("e8b5"),i=e("861d"),c=e("7b0b"),o=e("50c4"),l=e("8418"),u=e("65f0"),f=e("1dde"),v=e("b622"),d=e("2d00"),p=v("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",C=d>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),_=f("concat"),b=function(t){if(!i(t))return!1;var a=t[p];return void 0!==a?!!a:r(t)},g=!C||!_;s({target:"Array",proto:!0,forced:g},{concat:function(t){var a,e,s,n,r,i=c(this),f=u(i,0),v=0;for(a=-1,s=arguments.length;a<s;a++)if(r=-1===a?i:arguments[a],b(r)){if(n=o(r.length),v+n>h)throw TypeError(m);for(e=0;e<n;e++,v++)e in r&&l(f,v,r[e])}else{if(v>=h)throw TypeError(m);l(f,v++,r)}return f.length=v,f}})},cea4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"navbar w-100 p-0 d-flex justify-content-center",attrs:{id:"nav"}},[e("announcement"),e("div",{staticClass:"nav-header w-100 mx-auto flex-row"},[e("router-link",{staticClass:"mr-3 brand-name",attrs:{to:"/"}},[t._v("Reshape")]),t._m(0),e("div",{staticClass:"header-right d-flex flex-row justify-content-center align-items-center"},[e("router-link",{staticClass:"text mr-3",attrs:{to:"/admin/"}},[t._v("後台列表")]),e("router-link",{staticClass:"icon",attrs:{to:"/cart"}},[e("div",{staticClass:"d-flex align-items-center nav-shopping-cart-wrapper"},[e("div",{staticClass:"badge"},[t.cart.length?e("span",{staticClass:"badge-wrapper"},[t._v(" "+t._s(t.cart.length)+" ")]):t._e()]),e("div",{staticClass:"fa-wrapper"},[e("i",{staticClass:"fas fa-shopping-cart"})])])])],1)],1),e("div",{staticClass:"navbar-navigation w-100 mx-auto d-flex flex-row justify-content-between"},[e("router-link",{staticClass:"mr-3",attrs:{to:"/home"}},[t._v("廚房餐桌")]),e("router-link",{staticClass:"mr-3",attrs:{to:"/"}},[t._v("空間佈置")]),e("router-link",{staticClass:"mr-3",attrs:{to:"/"}},[t._v("質感生活")]),e("router-link",{staticClass:"mr-3",attrs:{to:"/"}},[t._v("品味衣著")]),e("router-link",{staticClass:"mr-3",attrs:{to:"/"}},[t._v("文具小物")]),e("router-link",{staticClass:"mr-3",attrs:{to:"/"}},[t._v("食品飲料")])],1)],1),e("router-view"),t._m(1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-bar input-group align-items-center"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"重塑你的生活"}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn",attrs:{type:"button"}},[t._v(" 搜尋 ")])]),e("div",{staticClass:"search-advice"},[e("span",{staticClass:"text"},[t._v("玻璃杯")]),e("span",{staticClass:"text"},[t._v("夏日嚴選")]),e("span",{staticClass:"text"},[t._v("免運")]),e("span",{staticClass:"text"},[t._v("抒壓小物")]),e("span",{staticClass:"text"},[t._v("工程師必備")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"mt-5 w-100 d-flex justify-content-center align-items-center"},[e("p",[t._v("© 2020-2020 vue-cli-try · "),e("a",{staticClass:"fab fa-github",attrs:{href:"https://github.com/r05323045/vue_cli_try"}})])])}],r=(e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return 0===t.scrollY?e("div",{staticClass:"announcement d-flex justify-content-center align-items-center"},[t._m(0)]):t._e()}),i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message"},[e("i",{staticClass:"fas fa-bell"}),e("span",{staticClass:"text ml-2"},[t._v("歡慶父親節 ! 現在輸入優惠碼【 LOVE88 】，結帳優惠88折")])])}],c={data:function(){return{scrollY:0}}},o=c,l=(e("f048"),e("2877")),u=Object(l["a"])(o,r,i,!1,null,null,null),f=u.exports,v={name:"Navbar",data:function(){return{cart:{}}},components:{announcement:f},created:function(){this.getCart()},methods:{getCart:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping");this.$http.get(e).then((function(e){a.cart=e.data.data,t&&t.hide()}))}}},d=v,p=(e("e8b1"),Object(l["a"])(d,s,n,!1,null,null,null));a["default"]=p.exports},cffb:function(t,a,e){},e8b1:function(t,a,e){"use strict";var s=e("cffb"),n=e.n(s);n.a},f048:function(t,a,e){"use strict";var s=e("0d10"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-39b499f4.b0b8f826.js.map