webpackJsonp([16],{Kprv:function(e,t){},Unn8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("rrxO"),l=a("S6Tm"),i={name:"demandRecords",data:function(){return{tableData:[],updateGroup:0,updateGroupShow:0,updateGroupError:[],headerItemData:[],headerItemDataAll:[],headerItemDataFrame:[{id:"all",title:"不限"},{id:"soldout",title:"下架"},{id:"release",title:"上架"},{id:"complete",title:"已成单"}],addAdminAction:!1,addSeccesAction:!1,formLabelWidth:"160px",adminNumber:0,value:!1,page:1,perPage:10,activeName:"toAudit",radio:"5",seachgroup:"all",seachname:"",seachphone:"",seachFrame:"all",isHiddenAddBtn:!0,activityId:"",groupId:"",stop:!0,addRules:{},showExport:!1}},components:{},created:function(){this.$store.dispatch("commitChangeTopTitles",["需求管理","需求列表"])},mounted:function(){this.conditionsAction(),this.staffListAction(this.page)},methods:{needsStatusAction:function(e){var t=this,a="?id="+e;Object(n.e)(a).then(function(e){t.staffListAction(t.page)})},conditionsAction:function(){var e=this;Object(n.b)().then(function(t){e.headerItemDataAll=[{id:"all",title:"不限"}],e.headerItemDataAll=e.headerItemDataAll.concat(t.data.service_type_list)})},staffListAction:function(e){var t=this,a="?need_type=housekeep&page="+e+"&per_page="+this.perPage+"&housework_company_id="+Object(l.e)("company_id");""!==this.seachname&&(a+="&name="+this.seachname),""!==this.seachphone&&(a+="&phone="+this.seachphone),"all"!==this.seachgroup&&(a+="&service_type_id="+this.seachgroup),"all"!==this.seachFrame&&(a+="&status="+this.seachFrame),Object(n.c)(a).then(function(e){t.tableData=e.data.items,t.adminNumber=e.data.total,t.value=t.adminNumber<11})},indexRoleSingle:function(e){return this.roleTitleFrame(this.tableData[e].status)},indexRoleFrame:function(e){return this.roleTitle(this.tableData[e].status)},roleTitle:function(e){switch(e){case"soldout":return"下架";case"release":return"上架";case"complete":return"下架";default:return""}},roleTitleFrame:function(e){switch(e){case"soldout":case"release":return"未成单";case"complete":return"已成单";default:return""}},handleClick:function(e,t){this.page=1,this.staffListAction(this.page)},changePage:function(e){this.page=e,this.staffListAction(this.page)},queryData:function(){this.page=1,this.staffListAction(this.page)},cleanData:function(){this.seachtype="all",this.seachgroup="all",this.seachname="",this.seachphone="",this.seachFrame="all",this.page=1,this.staffListAction(this.page)},handleOpen:function(e){this.needsStatusAction(e.id)},handleShow:function(e){this.$router.push("/demandDetail/"+e.id)},handleDel:function(e){var t=this;this.$confirm("是否下架该需求","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){t.needsStatusAction(e.id)}).catch(function(){})},addAction:function(){this.$router.push("/releaseManagement")}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"header"},[a("div",{staticClass:"header_item",attrs:{id:"name"}},[a("el-col",{attrs:{span:12}},[a("label",[e._v("雇主姓名：")])]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入雇主姓名"},model:{value:e.seachname,callback:function(t){e.seachname=t},expression:"seachname"}})],1),e._v(" "),a("div",{staticClass:"header_item",attrs:{id:"phone"}},[a("el-col",{attrs:{span:12}},[a("label",[e._v("雇主手机号码：")])]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入雇主手机号"},model:{value:e.seachphone,callback:function(t){e.seachphone=t},expression:"seachphone"}})],1),e._v(" "),a("div",{staticClass:"header_item",attrs:{id:"name"}},[a("el-col",{attrs:{span:13}},[a("label",[e._v("需求类型：")])]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择需求类型"},model:{value:e.seachgroup,callback:function(t){e.seachgroup=t},expression:"seachgroup"}},e._l(e.headerItemDataAll,function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}),1)],1),e._v(" "),a("div",{staticClass:"header_item",attrs:{id:"name"}},[a("el-col",{attrs:{span:13}},[a("label",[e._v("上下架状态：")])]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择上下架状态"},model:{value:e.seachFrame,callback:function(t){e.seachFrame=t},expression:"seachFrame"}},e._l(e.headerItemDataFrame,function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}),1)],1),e._v(" "),a("div",{staticClass:"header_item",attrs:{id:"query"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.queryData}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"default"},on:{click:e.cleanData}},[e._v("清除筛选项")])],1)]),e._v(" "),a("el-divider"),e._v(" "),a("el-card",[a("div",{staticClass:"over-table"},[a("span",{staticClass:"count"},[e._v("数据统计：共"+e._s(e.adminNumber)+"个")]),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addAction}},[e._v("发布需求")])],1)]),e._v(" "),a("div",{attrs:{id:"tableDiv"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"publisher_name",label:"雇主姓名",width:"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"service_type.title",label:"需求类型",width:"130",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"service_salary.salary",width:"100",label:"需求金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"技能要求",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",e._l(t.row.service_babel,function(t,n){return a("el-tag",{key:n,staticStyle:{margin:"5px"}},[e._v(e._s(t.name))])}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"性格要求",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",e._l(t.row.nature,function(t,n){return a("el-tag",{key:n,staticStyle:{margin:"5px"}},[e._v(e._s(t.name))])}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"籍贯要求",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0!==t.row.region.length?a("div",e._l(t.row.region,function(t,n){return a("el-tag",{key:n,staticStyle:{margin:"5px"}},[e._v(e._s(t.name))])}),1):a("div",[a("el-tag",{staticStyle:{margin:"5px"}},[e._v("不限")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"service_age.name",label:"年龄要求",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"experience_id.name",label:"经验要求",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",index:e.indexRoleSingle,label:"是否成单",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",index:e.indexRoleFrame,label:"上下架状态",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["release"===t.row.status?a("div",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleShow(t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleDel(t.row)}}},[e._v("下架")])],1):"complete"===t.row.status?a("div",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleShow(t.row)}}},[e._v("详情")])],1):a("div",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleShow(t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleOpen(t.row)}}},[e._v("上架")])],1)]}}])})],1)],1)])],1)],1),e._v(" "),0!==e.tableData.length?a("div",{staticClass:"block",staticStyle:{height:"30px","text-align":"center"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.adminNumber,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":e.changePage}})],1):e._e()])],1)},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(e){a("Kprv")},"data-v-fedadf1a",null);t.default=r.exports}});
//# sourceMappingURL=16.6b7ffc0984be988e019f.js.map