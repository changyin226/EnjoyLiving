(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["FrontEnd-CheckOut"],{"06c3":function(t,e,a){},"0ead":function(t,e,a){"use strict";a("c000")},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function r(t,e,a,r,n,s,i){try{var o=t[s](i),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var i=t.apply(e,a);function o(t){r(i,n,s,o,c,"next",t)}function c(t){r(i,n,s,o,c,"throw",t)}o(void 0)}))}}},"4df4":function(t,e,a){"use strict";var r=a("0366"),n=a("7b0b"),s=a("9bdd"),i=a("e95a"),o=a("50c4"),c=a("8418"),l=a("35a1");t.exports=function(t){var e,a,u,d,p,m,v=n(t),f="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,_=void 0!==g,y=l(v),b=0;if(_&&(g=r(g,h>2?arguments[2]:void 0,2)),void 0==y||f==Array&&i(y))for(e=o(v.length),a=new f(e);e>b;b++)m=_?g(v[b],b):v[b],c(a,b,m);else for(d=y.call(v),p=d.next,a=new f;!(u=p.call(d)).done;b++)m=_?s(d,g,[u.value,b],!0):u.value,c(a,b,m);return a.length=b,a}},"60a7":function(t,e,a){"use strict";a("06c3")},"96cf":function(t,e,a){var r=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,a){return t[e]=a}}function l(t,e,a,r){var n=e&&e.prototype instanceof h?e:h,s=Object.create(n.prototype),i=new S(r||[]);return s._invoke=k(t,a,i),s}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var d="suspendedStart",p="suspendedYield",m="executing",v="completed",f={};function h(){}function g(){}function _(){}var y={};y[s]=function(){return this};var b=Object.getPrototypeOf,C=b&&b(b(N([])));C&&C!==a&&r.call(C,s)&&(y=C);var w=_.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function a(n,s,i,o){var c=u(t[n],t,s);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,o)}),(function(t){a("throw",t,i,o)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return a("throw",t,i,o)}))}o(c.arg)}var n;function s(t,r){function s(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(s,s):s()}this._invoke=s}function k(t,e,a){var r=d;return function(n,s){if(r===m)throw new Error("Generator is already running");if(r===v){if("throw"===n)throw s;return j()}a.method=n,a.arg=s;while(1){var i=a.delegate;if(i){var o=L(i,a);if(o){if(o===f)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=m;var c=u(t,e,a);if("normal"===c.type){if(r=a.done?v:p,c.arg===f)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=v,a.method="throw",a.arg=c.arg)}}}function L(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,L(t,a),"throw"===a.method))return f;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,f;var s=n.arg;return s?s.done?(a[t.resultName]=s.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):s:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var a=t[s];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function a(){while(++n<t.length)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=w.constructor=_,_.constructor=g,g.displayName=c(_,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x($.prototype),$.prototype[i]=function(){return this},t.AsyncIterator=$,t.async=function(e,a,r,n,s){void 0===s&&(s=Promise);var i=new $(l(e,a,r,n),s);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),c(w,o,"Generator"),w[s]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return o.type="throw",o.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),O(a),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:N(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},"9aed":function(t,e,a){"use strict";a("fee5")},"9bdd":function(t,e,a){var r=a("825a"),n=a("2a62");t.exports=function(t,e,a,s){try{return s?e(r(a)[0],a[1]):e(a)}catch(i){throw n(t),i}}},a630:function(t,e,a){var r=a("23e7"),n=a("4df4"),s=a("1c7e"),i=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:n})},b415:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"check-order-page"},[t.loadingSuccess?t._e():a("div",{staticClass:"blank"}),t.cart.carts&&t.cart.carts.length?a("div",[a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"row justify-content-center mb-5 animate__animated"},[a("div",{staticClass:"col-md-8 text-center"},[a("table",{staticClass:"table mb-4"},[t._m(0),a("tbody",t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("img",{staticClass:"w-100",attrs:{src:e.product.imgUrl2,alt:"商品圖片"}})]),a("td",{staticClass:"align-middle"},[a("router-link",{attrs:{to:"/product/"+e.product.id}},[t._v(" "+t._s(e.product.title)+" ")]),e.coupon?a("span",{staticClass:"d-block text-secondary mt-1"},[t._v(" 已套用優惠券 ")]):t._e()],1),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.qty)+t._s(e.product.unit)+" ")]),e.coupon?a("td",{staticClass:"align-middle text-right"},[a("del",[t._v(t._s(t._f("currency")(e.product.price*e.qty)))]),a("span",{staticClass:"d-block text-secondary mt-1"},[t._v(" "+t._s(t._f("currency")(e.final_total))+" ")])]):a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(e.product.price*e.qty))+" ")])])})),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v(" 總計 ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(t.cart.total))+" ")])]),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"text-right text-secondary",attrs:{colspan:"3"}},[t._v(" 折扣價 ")]),a("td",{staticClass:"text-right text-secondary"},[t._v(" "+t._s(t._f("currency")(t.cart.final_total))+" ")])]):t._e()])]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",name:"優惠碼",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCouponCode(e)},input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])])])]),a("h2",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"text-center py-5 animate__animated"},[t._v(" 收件人資料 ")]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"row justify-content-center animate__animated"},[a("form",{staticClass:"col-md-8",on:{submit:function(t){t.preventDefault()}}},[a("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,n=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v(" Email "),a("span",{staticClass:"badge badge-danger"},[t._v("必填*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:n,attrs:{id:"email",type:"email",name:"信箱",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(r[0]))])])]}}],null,!0)}),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,n=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v(" 姓名 "),a("span",{staticClass:"badge badge-danger"},[t._v("必填*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:n,attrs:{id:"username",type:"text",name:"姓名",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(r[0]))])])]}}],null,!0)}),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,n=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v(" 電話 "),a("span",{staticClass:"badge badge-danger"},[t._v("必填*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:n,attrs:{id:"usertel",type:"tel",name:"電話",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(r[0]))])])]}}],null,!0)}),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,n=e.classes;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v(" 地址 "),a("span",{staticClass:"badge badge-danger"},[t._v("必填*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:n,attrs:{id:"useraddress",type:"text",name:"地址",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"invalid-feedback"},[t._v(t._s(r[0]))])])]}}],null,!0)}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",name:"message",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"text-right mb-5"},[a("button",{staticClass:"btn",attrs:{type:"submit",disabled:r,"data-toggle":"modal","data-target":"#comfirmModal"}},[t._v(" 送出訂單 ")])])],1)])]}}],null,!1,3150361564)})],1):t._e(),t.loadingSuccess&&!t.cart.carts?a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"row justify-content-center py-5 animate__animated"},[a("div",{staticClass:"col-md-6 text-center border border-primary rounded py-5"},[t._m(1),a("router-link",{staticClass:"btn",attrs:{to:"/productlist/all/1"}},[t._v(" SHOP ")])],1)]):t._e(),a("comfirmModal",{on:{"create-order":t.createOrder}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"20%"}}),a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",[t._v("價格")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"notice mb-4"},[t._v(" 目前購物車是空的 "),a("br"),t._v(" 快去產品頁逛逛吧 "),a("br")])}],s=a("1da1"),i=(a("96cf"),a("99af"),a("159b"),a("d81d"),a("d3b7"),a("3ca3"),a("ddb0"),a("a630"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"comfirmModal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content border-0"},[t._m(0),t._m(1),a("div",{staticClass:"modal-footer bg-light"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary text-white",attrs:{type:"button"},on:{click:t.createOrder}},[t._v(" 送出訂單 ")])])])])])}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-white"},[a("h5",{staticClass:"modal-title"},[a("span",[t._v("送出訂單")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[a("span",[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body bg-light"},[a("p",{staticClass:"text-center mb-0"},[t._v(" 是否送出訂單? "),a("br"),t._v(" (若送出後資料將無法修改)。 ")])])}],c={methods:{createOrder:function(){this.$emit("create-order")}}},l=c,u=(a("60a7"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,null,null),p=d.exports,m=a("1157"),v=a.n(m),f={components:{comfirmModal:p},data:function(){return{cart:[],couponCode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},loadingSuccess:!1}},mounted:function(){this.postCartList(),this.$emit("change-step",1)},methods:{postCartList:function(){var t=this;this.$bus.$emit("update:loading",!0);var e=[],a="".concat("https://vue-course-api.hexschool.io","/api/").concat("changyin","/cart");this.$http.get(a).then((function(t){var a=t.data.data.carts;a.forEach((function(t){e.push(t.id)}))})).then((function(){var r=t;function n(t){return r.$http.delete("".concat(a,"/").concat(t))}var s=e.map((function(t){return n(t)}));return Promise.all(s)})).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=function(t){return r.$http.post(a,{data:t})},r=t,n=JSON.parse(localStorage.getItem("cartProducts"))||[],!n.length){e.next=14;break}i=0;case 5:if(!(i<n.length)){e.next=11;break}return e.next=8,s(n[i]);case 8:i+=1,e.next=5;break;case 11:t.getCartList(),e.next=16;break;case 14:t.loadingSuccess=!0,t.$bus.$emit("update:loading",!1);case 16:case"end":return e.stop()}}),e)}))))},getCartList:function(){var t=this;this.$bus.$emit("update:loading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("changyin","/cart");this.$http.get(e).then((function(e){e.data.success?(t.cart=e.data.data,t.loadingSuccess=!0,t.$bus.$emit("update:loading",!1)):(t.$bus.$emit("update:loading",!1),t.$router.push("/cart"),t.$bus.$emit("message:push",e.data.messages))}))},addCouponCode:function(){var t=this;this.$bus.$emit("update:loading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("changyin","/coupon"),a={code:this.couponCode};this.$http.post(e,{data:a}).then((function(e){e.data.success?(t.getCartList(),t.$bus.$emit("message:push",e.data.message,"primary")):(t.$bus.$emit("update:loading",!1),t.$bus.$emit("message:push",e.data.message))})),this.couponCode=""},createOrder:function(){var t=this;v()("#comfirmModal").modal("hide"),this.$bus.$emit("update:loading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("changyin","/order");this.$http.post(e,{data:this.form}).then((function(e){e.data.success?(t.$router.push("checkout/".concat(e.data.orderId)),localStorage.removeItem("cartProducts"),t.$bus.$emit("update:cartNum"),t.$bus.$emit("message:push",e.data.message,"primary")):(t.$bus.$emit("update:loading",!1),t.$bus.$emit("message:push",e.data.message))}))},onWaypointList:function(t){var e=t.el,a=t.going;if(a===this.$waypointMap.GOING_IN){var r=document.querySelectorAll("animate__animated"),n=Array.from(r),s=n.indexOf(e);setTimeout((function(){e.classList.add("animate__fadeInUp")}),300*s)}}}},h=f,g=(a("0ead"),Object(u["a"])(h,r,n,!1,null,null,null));e["default"]=g.exports},b84e:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-page"},["Order"===t.routeName?a("div",[t.loadingSuccess?t._e():a("div",{staticClass:"blank"}),t.order.id?a("div",[a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-md-8 text-center"},[a("table",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"table animate__animated"},[t._m(0),a("tbody",t._l(t.order.products,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("img",{staticClass:"w-100",attrs:{src:e.product.imgUrl2,alt:"商品圖片"}})]),a("td",{staticClass:"align-middle"},[a("router-link",{attrs:{to:"/product/"+e.product.id}},[t._v(" "+t._s(e.product.title)+" ")])],1),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(e.qty)+t._s(e.product.unit)+" ")]),a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(e.final_total))+" ")])])})),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v(" 總計 ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(t.order.total))+" ")])])])])])]),a("h2",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"text-center mb-5 animate__animated"},[t._v(" 收件人資料 ")]),a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointList},expression:"{ active: true, callback: onWaypointList }"}],staticClass:"row justify-content-center mb-5 animate__animated"},[a("div",{staticClass:"col-md-8 text-center"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v(" 訂單編號 ")]),a("td",[t._v(t._s(t.order.id))])]),a("tr",[a("th",[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("留言")]),a("td",[t._v(t._s(t.order.message))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),t.order.is_paid?t._e():a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.payOrder}},[t._v(" 確認付款去 ")])])])])]):t._e()]):t._e(),a("router-view",{attrs:{order:t.order}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"25%"}}),a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",[t._v("價格")])])}],s=(a("b0c0"),a("99af"),a("a630"),a("3ca3"),{data:function(){return{order:{user:{}},orderId:"",loadingSuccess:!1}},computed:{routeName:function(){return this.$route.name}},mounted:function(){this.orderId=this.$route.params.order_id,this.getOrders()},methods:{getOrders:function(){var t=this;this.$bus.$emit("update:loading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("changyin","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success?(t.order=e.data.order,t.order?(t.$emit("change-step",t.order.is_paid),t.loadingSuccess=!0,t.$bus.$emit("update:loading",!1)):(t.$bus.$emit("update:loading",!1),t.$router.push("/"),t.$bus.$emit("message:push","沒有此訂單ID"))):(t.$bus.$emit("update:loading",!1),t.$router.push("/"),t.$bus.$emit("message:push",e.data.message))}))},payOrder:function(){var t=this;this.$bus.$emit("update:loading",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("changyin","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){e.data.success?(t.$bus.$emit("update:loading",!1),t.$router.push("/checkout/".concat(t.orderId,"/finish")),t.$bus.$emit("message:push",e.data.message,"primary")):(t.$bus.$emit("update:loading",!1),t.$bus.$emit("message:push",e.data.message))}))},onWaypointList:function(t){var e=t.el,a=t.going;if(a===this.$waypointMap.GOING_IN){var r=document.querySelectorAll(".animate__animated"),n=Array.from(r),s=n.indexOf(e);setTimeout((function(){e.classList.add("animate__fadeInUp")}),300*s)}}},beforeRouteUpdate:function(t,e,a){this.orderId=t.params.order_id,this.getOrders(),a()}}),i=s,o=(a("e3d3"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,null,null);e["default"]=c.exports},c000:function(t,e,a){},ca3b:function(t,e,a){},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e3d3:function(t,e,a){"use strict";a("ca3b")},e5de:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint},expression:"{ active: true, callback: onWaypoint }"}],staticClass:"finish-page animate__animated"},[a("div",{staticClass:"container"},[a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint},expression:"{ active: true, callback: onWaypoint }"}],staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-md-8 text-center border border-primary rounded py-5"},[a("p",{staticClass:"notice mb-5"},[t._v(" 恭喜完成訂單！ ")]),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v(" 訂單編號 ")]),a("td",[t._v(t._s(t.order.id))])]),a("tr",[a("th",[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("留言")]),a("td",[t._v(t._s(t.order.message))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])])])]),a("div",{staticClass:"row justify-content-center text-center"},[a("div",{staticClass:"col-md-4"},[a("router-link",{staticClass:"btn d-block mb-3",attrs:{to:"/checkout/"+t.order.id}},[t._v(" 查看訂單細節 ")]),a("router-link",{staticClass:"btn d-block mb-3",attrs:{to:"/productlist/all/1"}},[t._v(" 繼續購物 ")]),a("router-link",{staticClass:"btn d-block mb-5",attrs:{to:"/"}},[t._v(" 回首頁 ")])],1)])])])},n=[],s={props:{order:{type:Object,required:!0}},methods:{onWaypoint:function(t){var e=t.el,a=t.going;a===this.$waypointMap.GOING_IN&&e.classList.add("animate__fadeInUp")}}},i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);e["default"]=c.exports},e890:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-page"},[a("div",{staticClass:"banner mb-5"}),a("div",{staticClass:"container py-5"},[a("div",{staticClass:"row justify-content-center text-center mb-5"},[a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"row order-step"},[a("div",{staticClass:"col"},[a("span",{staticClass:"rounded-pill py-2 px-3",class:{active:1===t.activeStep}},[t._v(" STEP 1 ")]),a("p",[t._v("確認資料")])]),a("div",{staticClass:"col"},[a("span",{staticClass:"rounded-pill py-2 px-3",class:{active:2===t.activeStep}},[t._v(" STEP 2 ")]),a("p",[t._v("確認付款")])]),a("div",{staticClass:"col"},[a("span",{staticClass:"border border-primary rounded-pill py-2 px-3",class:{active:3===t.activeStep}},[t._v(" STEP 3 ")]),a("p",[t._v("完成訂單")])])])])]),a("router-view",{on:{"change-step":function(e){return t.changeStep(e)}}})],1)])},n=[],s={data:function(){return{activeStep:0}},mounted:function(){this.$bus.$emit("hideOffCanvas")},methods:{changeStep:function(t){this.activeStep="boolean"===typeof t?t?3:2:t}},beforeRouteUpdate:function(t,e,a){this.activeStep=0,this.$bus.$emit("hideOffCanvas"),a()}},i=s,o=(a("9aed"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,null,null);e["default"]=c.exports},fee5:function(t,e,a){}}]);
//# sourceMappingURL=FrontEnd-CheckOut.db8ec731.js.map