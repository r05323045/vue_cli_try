(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-062ef31c"],{"057f":function(t,e,a){var n=a("fc6a"),r=a("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?o(t):r(n(t))}},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"mt-5 pagination d-flex justify-content-center"},[a("li",{directives:[{name:"show",rawName:"v-show",value:1!==t.pages.current_page,expression:"pages.current_page !== 1"}],staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Go to first page"},on:{click:function(e){return e.preventDefault(),t.emitPages(1)}}},[t._m(0)])]),a("li",{directives:[{name:"show",rawName:"v-show",value:1!==t.pages.current_page,expression:"pages.current_page !== 1"}],staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[t._m(1)])]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.pages.current_page>Math.ceil(t.numOfShown/2)&&t.pages.total_pages>t.numOfShown+1,expression:"pages.current_page > Math.ceil(numOfShown/2) && pages.total_pages > numOfShown + 1"}],staticClass:"page-item disabled"},[t._m(2)]),t._l(t.pagesShown,(function(e,n){return a("li",{key:n,staticClass:"page-item",class:{active:e===t.pages.current_page,disabled:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{directives:[{name:"show",rawName:"v-show",value:t.pages.current_page<t.pages.total_pages-Math.floor(t.numOfShown/2)&&t.pages.total_pages>t.numOfShown+1,expression:"pages.current_page < pages.total_pages - Math.floor(numOfShown/2) && pages.total_pages > numOfShown + 1"}],staticClass:"page-item disabled"},[t._m(3)]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.pages.current_page!==t.pages.total_pages,expression:"pages.current_page !== pages.total_pages"}],staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[t._m(4)])]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.pages.current_page!==t.pages.total_pages,expression:"pages.current_page !== pages.total_pages"}],staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.total_pages)}}},[t._m(5)])])],2)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-angle-double-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-angle-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{"aria-label":"hide pages"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{"aria-label":"hide pages"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-angle-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-angle-double-right"})])}],i=(a("a630"),a("3ca3"),{data:function(){return{numOfShown:5}},computed:{pagesShown:function(){var t=this;return this.pages.total_pages<=this.numOfShown+1?Array.from({length:this.pages.total_pages},(function(t,e){return e+1})):this.pages.current_page<Math.ceil(this.numOfShown/2)?Array.from({length:this.numOfShown},(function(t,e){return e+1})):this.pages.current_page>this.pages.total_pages-Math.floor(this.numOfShown/2)?Array.from({length:this.numOfShown},(function(e,a){return a+t.pages.total_pages-t.numOfShown+1})):Array.from({length:this.numOfShown},(function(e,a){return a+t.pages.current_page-Math.floor(t.numOfShown/2)}))}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}}),s=i,o=(a("5eaf"),a("2877")),c=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=c.exports},"2aa4":function(t,e,a){},"3ca3":function(t,e,a){"use strict";var n=a("6547").charAt,r=a("69f3"),i=a("7dd0"),s="String Iterator",o=r.set,c=r.getterFor(s);i(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),a=e.string,r=e.index;return r>=a.length?{value:void 0,done:!0}:(t=n(a,r),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,a){"use strict";var n=a("0366"),r=a("7b0b"),i=a("9bdd"),s=a("e95a"),o=a("50c4"),c=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,f,p,g,d=r(t),h="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,y=u(d),w=0;if(b&&(v=n(v,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&s(y))for(e=o(d.length),a=new h(e);e>w;w++)g=b?v(d[w],w):d[w],c(a,w,g);else for(f=y.call(d),p=f.next,a=new h;!(l=p.call(f)).done;w++)g=b?i(f,v,[l.value,w],!0):l.value,c(a,w,g);return a.length=w,a}},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"5eaf":function(t,e,a){"use strict";var n=a("2aa4"),r=a.n(n);r.a},"746f":function(t,e,a){var n=a("428f"),r=a("5135"),i=a("e538"),s=a("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||s(e,t,{value:i.f(t)})}},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var s=n(e);s in t?r.f(t,s,i(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),i=a("e8b5"),s=a("861d"),o=a("7b0b"),c=a("50c4"),u=a("8418"),l=a("65f0"),f=a("1dde"),p=a("b622"),g=a("2d00"),d=p("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",v=g>=51||!r((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!s(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)},w=!v||!b;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,r,i,s=o(this),f=l(s,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?s:arguments[e],y(i)){if(r=c(i.length),p+r>h)throw TypeError(m);for(a=0;a<r;a++,p++)a in i&&u(f,p,i[a])}else{if(p>=h)throw TypeError(m);u(f,p++,i)}return f.length=p,f}})},a30a:function(t,e,a){},a4d3:function(t,e,a){"use strict";var n=a("23e7"),r=a("da84"),i=a("d066"),s=a("c430"),o=a("83ab"),c=a("4930"),u=a("fdbf"),l=a("d039"),f=a("5135"),p=a("e8b5"),g=a("861d"),d=a("825a"),h=a("7b0b"),m=a("fc6a"),v=a("c04e"),b=a("5c6c"),y=a("7c73"),w=a("df75"),_=a("241c"),O=a("057f"),C=a("7418"),S=a("06cf"),x=a("9bf2"),j=a("d1e7"),P=a("9112"),k=a("6eeb"),D=a("5692"),E=a("f772"),N=a("d012"),M=a("90e3"),$=a("b622"),A=a("e538"),L=a("746f"),T=a("d44e"),F=a("69f3"),J=a("b727").forEach,I=E("hidden"),G="Symbol",Q="prototype",W=$("toPrimitive"),q=F.set,z=F.getterFor(G),B=Object[Q],H=r.Symbol,K=i("JSON","stringify"),R=S.f,U=x.f,V=O.f,X=j.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),at=D("wks"),nt=r.QObject,rt=!nt||!nt[Q]||!nt[Q].findChild,it=o&&l((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,a){var n=R(B,e);n&&delete B[e],U(t,e,a),n&&t!==B&&U(B,e,n)}:U,st=function(t,e){var a=Y[t]=y(H[Q]);return q(a,{type:G,tag:t,description:e}),o||(a.description=e),a},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,a){t===B&&ct(Z,e,a),d(t);var n=v(e,!0);return d(a),f(Y,n)?(a.enumerable?(f(t,I)&&t[I][n]&&(t[I][n]=!1),a=y(a,{enumerable:b(0,!1)})):(f(t,I)||U(t,I,b(1,{})),t[I][n]=!0),it(t,n,a)):U(t,n,a)},ut=function(t,e){d(t);var a=m(e),n=w(a).concat(dt(a));return J(n,(function(e){o&&!ft.call(a,e)||ct(t,e,a[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=v(t,!0),a=X.call(this,e);return!(this===B&&f(Y,e)&&!f(Z,e))&&(!(a||!f(this,e)||!f(Y,e)||f(this,I)&&this[I][e])||a)},pt=function(t,e){var a=m(t),n=v(e,!0);if(a!==B||!f(Y,n)||f(Z,n)){var r=R(a,n);return!r||!f(Y,n)||f(a,I)&&a[I][n]||(r.enumerable=!0),r}},gt=function(t){var e=V(m(t)),a=[];return J(e,(function(t){f(Y,t)||f(N,t)||a.push(t)})),a},dt=function(t){var e=t===B,a=V(e?Z:m(t)),n=[];return J(a,(function(t){!f(Y,t)||e&&!f(B,t)||n.push(Y[t])})),n};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),a=function(t){this===B&&a.call(Z,t),f(this,I)&&f(this[I],e)&&(this[I][e]=!1),it(this,e,b(1,t))};return o&&rt&&it(B,e,{configurable:!0,set:a}),st(e,t)},k(H[Q],"toString",(function(){return z(this).tag})),k(H,"withoutSetter",(function(t){return st(M(t),t)})),j.f=ft,x.f=ct,S.f=pt,_.f=O.f=gt,C.f=dt,A.f=function(t){return st($(t),t)},o&&(U(H[Q],"description",{configurable:!0,get:function(){return z(this).description}}),s||k(B,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),J(w(at),(function(t){L(t)})),n({target:G,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var a=H(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:gt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(h(t))}}),K){var ht=!c||l((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,a){var n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e,(g(e)||void 0!==t)&&!ot(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),r[1]=e,K.apply(null,r)}})}H[Q][W]||P(H[Q],W,H[Q].valueOf),T(H,G),N[I]=!0},a630:function(t,e,a){var n=a("23e7"),r=a("4df4"),i=a("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:r})},ca4a:function(t,e,a){"use strict";var n=a("a30a"),r=a.n(n);r.a},ce5a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backend-storages-wrapper"},[a("loading",{attrs:{active:t.isLoading,loader:"bars","is-full-page":!1,opacity:1,"background-color":"#e5e5e5"},on:{"update:active":function(e){t.isLoading=e}}}),t.storages.length?a("div",{staticClass:"backend-storages"},[t._l(3,(function(e){return a("div",{key:"row_"+e},[t.storages.slice(3*(e-1),3*e).length>0?a("div",{staticClass:"card-deck mx-auto"},[t._l(t.storages.slice(3*(e-1),3*e),(function(e){return a("div",{key:e.id,staticClass:"card my-5",attrs:{id:e.id}},[a("img",{staticClass:"card-img-top",attrs:{src:e.path}}),a("button",{staticClass:"close delete-badge",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.openModel(e)}}},[a("i",{staticClass:"fa fa-times-circle"})]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"input-group input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.path,expression:"item.path"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.path},on:{input:function(a){a.target.composing||t.$set(e,"path",a.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.path,expression:"item.path",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"btn btn-secondary",attrs:{type:"button"}},[a("i",{staticClass:"far fa-copy"})])])])])])})),t._l(3-t.storages.slice(3*(e-1),3*e).length,(function(t){return a("div",{key:"surplus_"+t,staticClass:"card my-5 border-0 no-use"})}))],2):t._e()])})),a("pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getData}})],2):t._e(),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(0),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除該筆資料 (刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteData}},[t._v(" 確認刪除 ")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{attrs:{lass:"modal-title"}},[a("span",[t._v("刪除圖片")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[a("i",{staticClass:"fa fa-times-circle"})])])}],i=(a("99af"),a("5530")),s=a("1157"),o=a.n(s),c=a("1799"),u={name:"Storages",components:{pagination:c["a"]},data:function(){return{storages:{},tempData:{},pagination:{},isLoading:!1,message:"Copy These Text"}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/admin/storage?page=").concat(e);this.$http.get(a).then((function(e){t.storages=e.data.data,t.pagination=e.data.meta.pagination,t.isLoading=!1}))},openModel:function(t){o()("#deleteModal").modal("show"),this.tempData=Object(i["a"])({},t)},deleteData:function(){var t=this;o()("#deleteModal").modal("hide"),setTimeout((function(){t.isLoading=!0}),500);var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/admin/storage/").concat(this.tempData.id);this.$http.delete(e).then((function(){t.isLoading=!1,t.getData()}))},onCopy:function(t){alert("Successfully copied image url to your Clipboard!")},onError:function(t){alert("Failed to copy url")}}},l=u,f=(a("ca4a"),a("2877")),p=Object(f["a"])(l,n,r,!1,null,null,null);e["default"]=p.exports},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),i=a("56ef"),s=a("fc6a"),o=a("06cf"),c=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=s(t),r=o.f,u=i(n),l={},f=0;while(u.length>f)a=r(n,e=u[f++]),void 0!==a&&c(l,e,a);return l}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),i=a("fc6a"),s=a("06cf").f,o=a("83ab"),c=r((function(){s(1)})),u=!o||c;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},e538:function(t,e,a){var n=a("b622");e.f=n}}]);
//# sourceMappingURL=chunk-062ef31c.ae2ce5c1.js.map