(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b499f4"],{"0d10":function(t,s,a){},8418:function(t,s,a){"use strict";var r=a("c04e"),e=a("9bf2"),i=a("5c6c");t.exports=function(t,s,a){var n=r(s);n in t?e.f(t,n,i(0,a)):t[n]=a}},"99af":function(t,s,a){"use strict";var r=a("23e7"),e=a("d039"),i=a("e8b5"),n=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),f=a("1dde"),p=a("b622"),d=a("2d00"),h=p("isConcatSpreadable"),g=9007199254740991,C="Maximum allowed index exceeded",v=d>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=f("concat"),k=function(t){if(!n(t))return!1;var s=t[h];return void 0!==s?!!s:i(t)},b=!v||!m;r({target:"Array",proto:!0,forced:b},{concat:function(t){var s,a,r,e,i,n=c(this),f=u(n,0),p=0;for(s=-1,r=arguments.length;s<r;s++)if(i=-1===s?n:arguments[s],k(i)){if(e=o(i.length),p+e>g)throw TypeError(C);for(a=0;a<e;a++,p++)a in i&&l(f,p,i[a])}else{if(p>=g)throw TypeError(C);l(f,p++,i)}return f.length=p,f}})},cea4:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"navbar w-100 p-0 d-flex justify-content-md-center",class:{windowTop:0===t.scrollY},attrs:{id:"nav"}},[a("announcement"),a("div",{staticClass:"nav-header w-100 mx-md-auto flex-row"},[a("router-link",{staticClass:"brand-name",attrs:{to:"/"}},[t._v("Reshape")]),a("nav",{staticClass:"navbar-expand-md search-expand"},[a("div",{staticClass:"search-bar input-group align-items-md-center collapse navbar-collapse",attrs:{id:"searchBar"}},[a("div",{staticClass:"input-wrapper d-flex flex-row align-items-center"},[a("i",{staticClass:"fas fa-search"}),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.searchKey,expression:"searchKey",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"重塑你的生活"},domProps:{value:t.searchKey},on:{change:[function(s){t.searchKey=s.target.value},function(s){return t.$router.push("/search?key="+t.searchKey)}]}}),a("button",{staticClass:"close",on:{click:function(s){return t.collapseToggle("searchBar")}}},[a("i",{staticClass:"fa fa-times"})])]),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/search?key="+t.searchKey)}}},[t._v(" 搜尋 ")])]),a("div",{staticClass:"search-advice"},[a("span",{staticClass:"text",on:{click:function(s){return t.$router.push("/search?key=外套")}}},[t._v("外套")]),a("span",{staticClass:"text",on:{click:function(s){return t.$router.push("/search?key=夏日嚴選")}}},[t._v("夏日嚴選")]),a("span",{staticClass:"text",on:{click:function(s){return t.$router.push("/search?key=免運")}}},[t._v("免運")]),a("span",{staticClass:"text",on:{click:function(s){return t.$router.push("/search?key=抒壓小物")}}},[t._v("抒壓小物")]),a("span",{staticClass:"text",on:{click:function(s){return t.$router.push("/search?key=工程師必備")}}},[t._v("工程師必備")])]),a("div",{staticClass:"collapse-bottom d-md-none",on:{click:function(s){return t.collapseToggle("searchBar")}}})])]),a("div",{staticClass:"header-right d-flex flex-row"},[t._m(0),a("button",{staticClass:"login d-none d-md-block disabled",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/admin/")}}},[t._v(" 我要登入 ")]),a("button",{staticClass:"fa-wrapper navbar-toggler",attrs:{type:"button"},on:{click:function(s){return t.$router.push("/cart")}}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("div",{staticClass:"badge"},[t.cart.length?a("span",{staticClass:"badge-wrapper"},[t._v(" "+t._s(t.cart.length)+" ")]):t._e()])]),t._m(1)])],1),a("nav",{staticClass:"navbar-expand-md category-expand"},[a("div",{staticClass:"collapse navbar-collapse category-collapse",attrs:{id:"navbarCategory"}},[a("div",{staticClass:"navbar-navigation w-100 d-flex flex-column flex-md-row mx-md-auto"},[a("div",{staticClass:"laptop"},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=1"}},[t._v("廚房餐桌")]),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=2"}},[t._v("空間佈置")]),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=3"}},[t._v("質感生活")]),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=4"}},[t._v("品味衣著")]),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/products"}},[t._v("所有分類")]),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/about"}},[t._v("關於我們")])],1),a("div",{staticClass:"mobile"},[a("ul",{staticClass:"list-group section"},[a("li",{staticClass:"list-group-item"},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:""}},[t._v("登入 / 註冊")])],1)]),a("ul",{staticClass:"list-group section"},[t._m(2),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/products")}}},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/products"}},[a("span",{staticClass:"badge hot"},[t._v("Hot")]),a("span",{staticClass:"text"},[t._v("熱門排行")])])],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/search?key=夏日嚴選")}}},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/search?key=夏日嚴選"}},[a("span",{staticClass:"badge new"},[t._v("new")]),a("span",{staticClass:"text"},[t._v("夏日嚴選")])])],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/search?key=免運")}}},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/search?key=免運"}},[t._v(" 免運專區 ")])],1)]),a("ul",{staticClass:"list-group section"},[t._m(3),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=1")}}},[a("i",{staticClass:"fas fa-utensils"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=1"}},[t._v(" 廚房餐桌 ")]),a("i",{staticClass:"fas fa-angle-right"})],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=2")}}},[a("i",{staticClass:"fas fa-couch"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=2"}},[t._v(" 空間佈置 ")]),a("i",{staticClass:"fas fa-angle-right"})],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=3")}}},[a("i",{staticClass:"fas fa-laptop-house"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=3"}},[t._v(" 質感生活 ")]),a("i",{staticClass:"fas fa-angle-right"})],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=4")}}},[a("i",{staticClass:"fas fa-tshirt"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=4"}},[t._v(" 品味衣著 ")]),a("i",{staticClass:"fas fa-angle-right"})],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=5")}}},[a("i",{staticClass:"fas fa-pencil-ruler"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=5"}},[t._v(" 文具小物 ")]),a("i",{staticClass:"fas fa-angle-right"})],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=6")}}},[a("i",{staticClass:"fas fa-cocktail"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=6"}},[t._v(" 食品飲料 ")]),a("i",{staticClass:"fas fa-angle-right"})],1),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/category?n=7")}}},[a("i",{staticClass:"fas fa-hiking"}),a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/category?n=7"}},[t._v(" 戶外休閒 ")]),a("i",{staticClass:"fas fa-angle-right"})],1)]),a("ul",{staticClass:"list-group section"},[a("div",{staticClass:"section-title"},[a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/about")}}},[t._v(" 關於我們 ")])]),a("li",{staticClass:"list-group-item",on:{click:function(s){return t.$router.push("/about")}}},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:"/"}},[t._v("品牌故事")])],1),a("li",{staticClass:"list-group-item",on:{click:t.goToGithub}},[a("router-link",{staticClass:"router-link mr-3",attrs:{to:""}},[t._v("作者")])],1)])])]),a("div",{staticClass:"collapse-right d-md-none",on:{click:function(s){return t.collapseToggle("navbarCategory")}}})])])],1),a("router-view"),a("footer",{staticClass:"w-100 d-flex flex-column justify-content-center align-items-center"},[a("div",[a("div",{staticClass:"brand-name"},[a("span",{staticClass:"title",on:{click:t.goToGithub}},[t._v("Reshape ")]),a("span",{staticClass:"text"},[t._v("| Reshape Your Life")])]),t._m(4)])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"navbar-toggler d-md-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#searchBar"}},[a("span",[a("i",{staticClass:"fas fa-search"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"navbar-toggler d-md-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCategory"}},[a("span",[a("i",{staticClass:"fas fa-align-justify"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section-title"},[a("li",{staticClass:"list-group-item"},[t._v(" 主題活動 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section-title"},[a("li",{staticClass:"list-group-item"},[t._v(" 商品分類 ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("p",[t._v("© 2020 Reshape. All Rights Reserved")])])}],i=(a("99af"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return 0===t.scrollY?a("div",{staticClass:"announcement"},[t._m(0)]):t._e()}),n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message"},[a("i",{staticClass:"fas fa-bell"}),a("span",{staticClass:"text ml-2"},[t._v("歡慶父親節 ! 現在輸入優惠碼【 LOVE88 】，結帳優惠88折")])])}],c={data:function(){return{scrollY:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.scrollY=window.top.scrollY}}},o=c,l=(a("f048"),a("2877")),u=Object(l["a"])(o,i,n,!1,null,null,null),f=u.exports,p=a("1157"),d=a.n(p),h={name:"Navbar",data:function(){return{cart:{},scrollY:0,searchKey:""}},mounted:function(){window.addEventListener("scroll",this.onScroll)},components:{announcement:f},created:function(){var t=this;this.getCart(),this.$bus.$on("cartUpdate",(function(s){t.cart=s.cart}))},watch:{$route:function(){d()("#navbarCategory").collapse("hide"),d()("#searchBar").collapse("hide"),this.searchKey=""}},methods:{getCart:function(t){var s=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping");this.$http.get(a).then((function(a){s.cart=a.data.data,s.$bus.$emit("cartUpdate",{cart:s.cart}),t&&t.hide()}))},collapseToggle:function(t){d()("#".concat(t)).collapse("toggle")},onScroll:function(t){this.scrollY=window.top.scrollY},goToGithub:function(){window.location.href="https://github.com/r05323045/reshape"}}},g=h,C=(a("e8b1"),Object(l["a"])(g,r,e,!1,null,null,null));s["default"]=C.exports},cffb:function(t,s,a){},e8b1:function(t,s,a){"use strict";var r=a("cffb"),e=a.n(r);e.a},f048:function(t,s,a){"use strict";var r=a("0d10"),e=a.n(r);e.a}}]);
//# sourceMappingURL=chunk-39b499f4.92f34da6.js.map