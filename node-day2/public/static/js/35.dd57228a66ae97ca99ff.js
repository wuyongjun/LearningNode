webpackJsonp([35],{E31p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("9P38"),n={data:function(){return{activeName:"first",searchName:"",searchPhone:"",data:[{type:"育婴师",money:"10000",num:"159034",phone:"15949084032",id:"1",image:"http://b-ssl.duitang.com/uploads/item/201601/14/20160114163533_CV5tY.jpeg",company:"管家帮",status:"上户中",create_date:"2016-05-02",name:"王小虎"},{type:"育婴师",money:"10000",image:"http://b-ssl.duitang.com/uploads/item/201601/14/20160114163533_CV5tY.jpeg",num:"159034",status:"上户中",phone:"15949084032",id:"2",company:"管家帮",create_date:"2016-05-02",name:"王小虎"},{type:"育婴师",money:"10000",status:"上户中",image:"http://b-ssl.duitang.com/uploads/item/201601/14/20160114163533_CV5tY.jpeg",num:"159034",phone:"15949084032",id:"3",company:"管家帮",create_date:"2016-05-02",name:"王小虎"}],optionsType:[{value:"选项1",label:"母婴护理师"},{value:"选项2",label:"育婴嫂"},{value:"选项3",label:"育儿嫂"},{value:"选项4",label:"家政工"},{value:"选项5",label:"病人陪护"},{value:"选项6",label:"老人陪护"}],typeValue:"",optionsStatus:[{value:"选项1",label:"上户中"},{value:"选项2",label:"待岗"}],statusValue:"",optionsAffiliatedUnit:[{value:"选项1",label:"得贤家政"},{value:"选项2",label:"爱家家政"},{value:"选项3",label:"管家帮"},{value:"选项4",label:"保姆家政"}],affiliatedUnitValue:"全部",page:1,per_page:10,total:0}},created:function(){this._getAuntList()},methods:{handleClick:function(){},appBlacklist:function(t){},getDate:function(t){this.start=this.dateToStr(new Date(t[0])),this.end=this.dateToStr(new Date(t[1]))},pageChange:function(t){this.page=t,this._getAuntList()},_getAuntList:function(){Object(l.d)().then(function(t){})},dateToStr:function(t){var e=t.getFullYear(),a=t.getMonth()+1,l=t.getDate();return e+"-"+(a=a<10?"0"+a:a)+"-"+(l=l<10?"0"+l:l)},search:function(){this._getAuntList()},clear:function(){this.name="",this.phone="",this.statusValue="",this.affiliatedUnitValue="",this.typeValue="",this._getAuntList()},getDetail:function(t){this.$router.push("/v2/AuntDetail/"+t.id)},addAunt:function(){this.$router.push("/v2/createAunt/-1")}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"aunt_list"}},[a("el-row",[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:8}},[a("label",{staticClass:"filt-name"},[t._v("阿姨名称：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchName,expression:"searchName"}],staticClass:"input-form",attrs:{type:"text",placeholder:"输入阿姨名称"},domProps:{value:t.searchName},on:{input:function(e){e.target.composing||(t.searchName=e.target.value)}}})]),t._v(" "),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:8}},[a("label",{staticClass:"filt-name"},[t._v("手机号码：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchPhone,expression:"searchPhone"}],staticClass:"input-form",attrs:{type:"text",placeholder:"输入手机号码"},domProps:{value:t.searchPhone},on:{input:function(e){e.target.composing||(t.searchPhone=e.target.value)}}})]),t._v(" "),a("el-col",{attrs:{sm:24,lg:12,xl:8}},[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1),t._v(" "),a("div",{ref:"table",staticClass:"table-wrap"},[a("div",{staticClass:"over-table"},[a("span",{staticClass:"count"},[t._v("数据统计：共"+t._s(t.total)+"个")])]),t._v(" "),a("el-scrollbar",[a("el-table",{attrs:{data:t.data,stripe:"",border:"",fit:"","header-row-class-name":"table-head"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"阿姨姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),t._v(" "),a("el-table-column",{attrs:{label:"阿姨头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[a("img",{staticStyle:{width:"100%",height:"90px"},attrs:{src:t.row.image}})])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"录入时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("p",[t._v(t._s(e.row.create_date))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"服务类型",prop:"type"}}),t._v(" "),a("el-table-column",{attrs:{label:"服务薪资",prop:"money"}}),t._v(" "),a("el-table-column",{attrs:{label:"服务订单数",prop:"num"}}),t._v(" "),a("el-table-column",{attrs:{label:"服务状态",prop:"status"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.getDetail(e.row)}}},[t._v("查看详情")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.appBlacklist(e.row)}}},[t._v("解除黑名单")])]}}])})],1)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.pageChange}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,s,!1,function(t){a("Thx0")},"data-v-24eb0853",null);e.default=o.exports},Thx0:function(t,e){}});
//# sourceMappingURL=35.dd57228a66ae97ca99ff.js.map