(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67838b96"],{"9fb0":function(t,s,a){t.exports=a.p+"img/jam.00f7b109.png"},b275:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mt-7"},[a("div",{staticClass:"container p-3 p-md-4 auto-height"},[t._m(0),a("h2",{staticClass:"jam-title"},[t._v("訂單付款")]),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v(" 1.填寫訂單 "),a("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"check"}})],1)]),t._m(1),t._m(2)]),a("div",{staticClass:"my-4 row"},[a("table",{staticClass:"table border mx-auto col-10 col-md-8"},[t._m(3),a("tbody",[a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("收件人姓名")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("收件人電話")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("Email")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("收件人地址")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("備註")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t.order.message))])])])])]),a("div",{staticClass:"my-4 row"},[a("table",{staticClass:"table border mx-auto col-10 col-md-8"},[t._m(4),a("tbody",[a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("訂單成立時間")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t._f("turnTime")(t.order.create_at)))])]),a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("訂單編號")]),a("td",{staticClass:"align-middle"},[t._v(t._s(t.order.id))])]),a("tr",[a("th",{staticClass:"align-middle",attrs:{width:"200"}},[t._v("總金額")]),a("td",{staticClass:"align-middle text-danger"},[t._v(t._s(t._f("currency")(t.order.total))+" 元")])])])])]),a("div",{staticClass:"my-4 row justify-content-center"},[a("div",{staticClass:"text-right col-10 col-md-8 px-0"},[a("button",{staticClass:"btn btn-light-red",on:{click:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._v("確認付款")])])])]),t._m(5)])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"jam-icon text-center"},[e("img",{attrs:{src:a("9fb0")}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-success rounded-pill text-center",attrs:{role:"alert"}},[t._v("2.確認付款")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"alert alert-light rounded-pill text-center",attrs:{role:"alert"}},[t._v("3.訂單完成")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"bg-gray-100",staticStyle:{"border-top":"5px solid #87A861"}},[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("訂單訊息")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"bg-gray-100",staticStyle:{"border-top":"5px solid #EB8489"}},[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("訂單資料")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal fade",attrs:{id:"CreateOrder",tabindex:"-1",role:"dialog","aria-labelledby":"CreateOrderCenterTitle","aria-hidden":"true","data-backdrop":"static"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body leave-modal"},[a("p",[t._v("您的訂單尚未付款，確定要離開此頁?")]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-outline-secondary mr-2 confirm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("確定")]),a("button",{staticClass:"btn btn-danger cancel",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")])])])])])])}],i=a("5530"),l=a("2f62"),d={data:function(){return{orderId:"",isLeave:!1}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()},computed:Object(i["a"])({},Object(l["c"])("orderModules",["order"])),methods:{getOrder:function(){this.$store.dispatch("orderModules/getOrder",this.orderId),this.$store.dispatch("cartModules/getCart")},payOrder:function(){this.$store.dispatch("orderModules/payOrder",this.orderId),this.isLeave=!0}},beforeRouteLeave:function(t,s,a){var e=this;e.isLeave?a():($("#CreateOrder").modal("show"),$(".confirm").on("click",(function(){a()})),$(".cancel").on("click",(function(){a(!1)})))}},c=d,n=a("2877"),o=Object(n["a"])(c,e,r,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-67838b96.74d32578.js.map