webpackJsonp([14],{G7JD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("dW5l"),i={data:function(){return{tableData:[],detailsData:"",chatList:[{date:1}]}},created:function(){this.$store.dispatch("commitChangeTopTitles",["投诉管理","订单申诉","申诉详情"])},methods:{getComplainDetails:function(){var e=this;this.order_code=2019060316545451e4,Object(s.a)(this.order_code).then(function(t){e.detailsData=t.data.data?t.data.data:""})},showChat:function(){},clickDispose:function(){this.$router.push("/interveneDispose")}},mounted:function(){this.getComplainDetails()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"div_emploter"},[a("div",{staticClass:"employer"},[e._v("雇主信息")]),e._v(" "),a("div",{staticClass:"employer_info"},[a("span",[e._v("姓名："+e._s(e.detailsData.user?e.detailsData.user.name:""))]),e._v(" "),a("span",[e._v("手机号码："+e._s(e.detailsData.user?e.detailsData.user.phone:""))]),e._v(" "),a("span",[e._v("服务地址："+e._s(e.detailsData.addr_info?e.detailsData.addr_info.addr:""))])])]),e._v(" "),a("div",{staticClass:"div_aunt"},[a("div",{staticClass:"employer"},[e._v("阿姨信息")]),e._v(" "),a("div",{staticClass:"employer_info"},[a("span",[e._v("姓名："+e._s(e.detailsData.service?e.detailsData.service.name:""))]),e._v(" "),a("span",[e._v("手机号码："+e._s(e.detailsData.service?e.detailsData.service.phone:""))]),e._v(" "),a("span",[e._v("服务类型："+e._s(e.detailsData.service?e.detailsData.service.service_type.title:""))]),e._v(" "),a("span",[e._v("服务薪资："+e._s(e.detailsData.old_user_agency?e.detailsData.old_user_agency:""))])])]),e._v(" "),a("div",{staticClass:"div_service_order"},[a("div",{staticClass:"employer"},[e._v("服务订单信息")]),e._v(" "),a("div",{attrs:{id:"table"}},[a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"child_order",label:"子订单号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mother_order",label:"签约人",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号码",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"service_people",label:"服务人员",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"service_addr",label:"服务地址",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"service_type",label:"服务类型",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"aunt_salary",label:"阿姨工资",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"service_money",label:"服务费",align:"center",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"distribution1",label:"分销1",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"distribution2",label:"分销2",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"salary_pay",label:"薪资支付",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_status",label:"订单状态",align:"center"}})],1)],1)]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"div_result"},[t("div",{staticClass:"employer"},[this._v("申诉结果")]),this._v(" "),t("div",{staticClass:"employer_info"},[t("span",[this._v("2019-05-20  15：00")]),this._v(" "),t("span",[this._v("得贤管家介入")])])])}]};var r=a("VU/8")(i,l,!1,function(e){a("XoWG")},"data-v-c74cb67e",null);t.default=r.exports},XoWG:function(e,t){},dW5l:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return l}),a.d(t,"c",function(){return r});var s=a("vnhY"),i=function(e){return s.a.get("/admin/orders/complaint_orders?"+e)},l=function(e){return s.a.get("/admin/orders/complaint_order_info?order_code="+e)},r=function(){return s.a.get("/admin/service_type/index")}}});
//# sourceMappingURL=14.e32db8dded5883066425.js.map