(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-434a20ea"],{7277:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"sidebar-wrapper"},[t._m(0),a("div",{staticClass:"list-group"},[a("router-link",{staticClass:"list-group-item",attrs:{to:"/admin/"}},[t._v("首頁")]),a("router-link",{staticClass:"list-group-item",attrs:{to:"/admin/products"}},[t._v("產品列表")]),a("router-link",{staticClass:"list-group-item",attrs:{to:"/admin/orders"}},[t._v("訂單列表")])],1)]),a("div",{staticClass:"content-wrapper"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0 mr-5"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("回到前台")])],1),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:function(s){return s.preventDefault(),t.signout(s)}}},[t._v("登出")])])])])]),a("div",{staticClass:"router-view-wrapper"},["/admin/"===this.$route.path?a("div",{staticClass:"not-open d-flex align-items-center justify-content-center"},[a("div",[a("div",{staticClass:"under-construction mb-5"},[t._v("🚧 Under Construction 🚧")]),t._v(" 請至 "),a("router-link",{attrs:{to:"/admin/products"}},[t._v("產品列表")])],1)]):t._e(),t.checkSuccess?a("router-view",{attrs:{token:t.token}}):t._e()],1)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sidebar-heading text-align-center"},[a("div",{staticClass:"logo"})])}],n=(a("ac1f"),a("5319"),{name:"Dashboard",data:function(){return{token:"",checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token);var s="".concat("https://course-ec-api.hexschool.io/","api/auth/check");this.$http.post(s,{api_token:this.token}).then((function(s){s.data.success&&(t.checkSuccess=!0)})).catch((function(s){console.log(s),t.$router.push("/login")}))},signout:function(){document.cookie="hexToken=;expires=;",console.log("token 已清除"),this.$router.push("/login")}}}),c=n,o=(a("b985"),a("2877")),r=Object(o["a"])(c,e,i,!1,null,null,null);s["default"]=r.exports},b985:function(t,s,a){"use strict";var e=a("de7f"),i=a.n(e);i.a},de7f:function(t,s,a){}}]);
//# sourceMappingURL=chunk-434a20ea.38ad3c9f.js.map