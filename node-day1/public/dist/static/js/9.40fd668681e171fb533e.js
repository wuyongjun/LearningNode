webpackJsonp([9],{"3igz":function(t,e){},FPQb:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEe0lEQVR4nN1bzbnqIBBlIegyBQhSgiVYgiVYgiXYgSVYgiVYAisDriwhJdy3EDUZhiQQSOI735eV9wJzGOaPgZCJoCQp7pJu75JulSTFVOvIDr1e7LRgJ8PpzQimjGBPI1hlBPtDvqfh9GY27KoFO90l3U69/mAoSQq9XuyMoGcrMCZoyFcZQc8lZ/upZWuFkqSwQvt2N9FHz7M6MgGCK7NhVyPoWQt2KsXyqNeLXcnZXnN60IKdHoJdXn/TR3PoeXLBtWAne6Zx1eX0VorlMeYsK0mKUiyPlpB5EaEkKbwL4/SmOT2kVtOSs30L2UrLlUw5nxcvA4cuRJViecx9PjWnB8/8lV4vdjnnJqVYHpGzXo0huGctDhGlWB6TT1YzdNOpnm9dr/gir13AhZ+PO0LXt2HXJINbVXNUPsngCYGs809zehg06F3SLTjz1ZwjMmugmyTEGkYtVxIamTnuPIR1l03vEGqncOMyceQVgIdgF0DCM2gAG+E1rP1cDF5fwA3Ugp16/ePL5TXO/XNKVxcLK8cz+CjA3f+Fc++DjRr7H2Ns939N9SGCtADufqgf/UaMaYOkb+YZPi70Cg/BLt5JwO6r0IUCApNoj12X6hSgBQbUF9B1QaZiAh4kJB1EAhQ+1h1D2VDNBr6zilk4vuA4EnxjxXqkhnZjeULDWAxIJFKQkFp4QtwNbvxoY/5krm8ICTmEJ8R1iY0ynWP9EwQ+MSTkEr42Nh4ZgvpesPXvmLQXCTmFf6Mxfv2YN+LmVIUEiz4kjCE8IY6XetZ+qEdL6bO+NhLGEp4Qh4Cq9kP+tNcn6FjCE+LaOiVJ8S58RIe/IfCQMIrwhCABkVxJ1wVmLnm1kJA97YYlM71e7FwNyHy50EZA9ksVjADoH3Pm/32OQE4SYDD00ThvgJAQIUYwFwmwdP6Zx9QShZh0swttri5lAtUFmK5/fjC+CCkB+vj5sUgACdE34gUV1KpljCCEBDljkNAI+Tm9fX8AhYycyVDb2DlJcCtetYAPusJc6XAfYnOR0FnxMpkLIiFalYMEkPG6FS9vohCAlIlNahI6N7hX4bADyJXaoPAWIyHGTcMIEA33YUTY8JM9AfPtLMY04ng694S+dcFb1dDESElSPAS7PAS7pExsPhcuG3YNHbf3xch3omFaMDfAGKezZ3Ho9dic4DZL9Cj2IFdkUZckUwMxoP07RRxrXg8bfwBYJ2tQlpvK/UwF5I4yvMMFOQo/YQ+wtr7ohxdJ285GANLWN7zG6baZzLNtButjTlbdQtrO+rmUEeDvYx6lX3ja9jn/u4VMfcxYP64R7DmFcfS8W8jfx2wnxt4HqTGIsPNjpfXx+phtBclX31epF/J9iuefc5JmTs+R+H4bdo3VCiVJUXK2twbY9yJtktcqDjwG0iHjIdhFC3bSgp00pwe9Xuzukm5LzvYvMunZCqxahP4z9jHlrFp437WATiKGfVVMTWB0aE4PCcmo3kdpclWPQcnZvvZ4GrotRLWZev0tPf/XL8u1XMm3DZhS0H9i8bmEmxyD4gAAAABJRU5ErkJggg=="},gzJb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("y6AG"),i=n("S6Tm"),r={created:function(){this.$store.dispatch("commitChangeTopTitles",["账户管理","账户信息"])},data:function(){return{company_id:"",balance:"",inputMoney:"",card_number:"",isShowAccount:!1,settingFormVisible:!1,form:{name:"",type:"persons",bank_name:"",bank_number:"",bank_people:"",bank_addr:"",bank_allname:""},formLabelWidth:"120px",choose_account:"",accountList:[],bankList:[],addrList:[],fullNumber:"",bankNumber:""}},methods:{inputMoneyLimitNumber:function(){this.inputMoney=this.inputMoney.replace(/[^\d]/g,"")},inputBankNumLimitNumber:function(){this.bankNumber=this.form.bank_number,this.bankNumber=this.bankNumber.replace(/[^\d]/g,""),this.form.bank_number=this.bankNumber},settingCard:function(){var t=this;this.settingFormVisible=!0,this.form={name:"",type:"persons",bank_name:"",bank_number:"",bank_people:"",bank_addr:"",bank_allname:""},Object(a.c)().then(function(e){e.data&&(t.bankList=e.data)}),Object(a.f)().then(function(e){e.data&&(t.addrList=e.data)})},confirm:function(){var t=this;if(!this.form.name)return this.$message({type:"warning",message:"请填写账户方机构名称"}),null;if(!this.form.type)return this.$message({type:"warning",message:"请选择账户类型"}),null;if(!this.form.bank_name)return this.$message({type:"warning",message:"请选择开户银行"}),null;if(!this.form.bank_number)return this.$message({type:"warning",message:"请输入银行卡号"}),null;if(!this.form.bank_people)return this.$message({type:"warning",message:"请输入开户名"}),null;if(!this.form.bank_addr)return this.$message({type:"warning",message:"请选择开户地区"}),null;if(!this.form.bank_allname)return this.$message({type:"warning",message:"请输入开户支行"}),null;var e={};e.company_name=this.form.name,e.account_type=this.form.type,e.bank_id=parseInt(this.form.bank_name),e.card_number=this.form.bank_number,e.card_name=this.form.bank_people,e.province_code=this.form.bank_addr,e.sub_branch_name=this.form.bank_allname,e.user_type="homemaking",e.user_type_id=this.company_id,Object(a.a)(e).then(function(e){"success"===e.status&&(t.accountList.length>0&&(t.substrCard(),t.isShowAccount=!0),t.settingFormVisible=!1,t.$message({type:"success",message:"添加银行卡成功"}),t.getCardList())}).catch(function(t){this.$message({type:"error",message:t})})},cancel:function(){this.settingFormVisible=!1},deleteCard:function(t,e){var n=this,i={};i.bank_card_id=e,i.company_id=this.company_id,this.$confirm("是否删除该账户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){Object(a.d)(i).then(function(e){n.accountList.splice(t,1),n.$message({type:"success",message:"删除成功!"}),0===n.accountList.length&&(n.isShowAccount=!1)}).catch(function(t){this.$message({type:"error",message:t})})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},clickWithdraw:function(){var t=this;if(!this.choose_account)return this.$alert("请选择您要提现的账户！","友情提示",{confirmButtonText:"确 定",callback:function(t){}}),null;if(this.inputMoney>this.balance)return this.$alert("不能超过可提现的最大余额！","友情提示",{confirmButtonText:"确 定",callback:function(t){}}),null;var e={};e.bank_card_id=parseInt(this.choose_account),e.company_id=this.company_id,e.price=this.inputMoney,Object(a.g)(e).then(function(e){"success"===e.status?(t.$message({type:"success",message:"提现成功"}),t.$router.push("/accountInfo")):t.$message({type:"warning",message:e.msg})}).catch(function(t){this.$message({type:"error",message:t})})},substrCard:function(){this.accountList.forEach(function(t,e){if(t.card_number&&t.card_number.length>8){t.fullNumber=t.card_number;for(var n=t.card_number.substring(0,4),a=t.card_number.substring(t.card_number.length-4,t.card_number.length),i=0;i<t.card_number.length-8;i++)n+="*";n+=a,t.card_number=n}})},getCardList:function(){var t=this,e=this.company_id;Object(a.b)(e).then(function(e){e.data&&e.data.length>0&&(t.isShowAccount=!0,t.accountList=e.data,t.substrCard())})}},mounted:function(){this.company_id=Object(i.e)("company_id"),this.balance=localStorage.getItem("balance"),this.getCardList()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"div1"},[a("span",{staticClass:"tv"},[t._v("请设置提现金额")]),t._v(" "),a("div",{staticStyle:{float:"left","text-align":"left","margin-left":"12px"}},[a("el-input",{staticClass:"input_money",attrs:{placeholder:"请输入提现金额",change:t.inputMoneyLimitNumber(),disabled:t.balance<=0},model:{value:t.inputMoney,callback:function(e){t.inputMoney=e},expression:"inputMoney"}}),a("br"),t._v(" "),a("span",{staticClass:"balance"},[t._v("您的可提现余额为"+t._s(t.balance)+"元")])],1)]),t._v(" "),t.isShowAccount?a("div",{staticClass:"have_account"},[a("span",{staticStyle:{color:"#333333"}},[t._v("请选择账户")]),t._v("    \n      "),a("button",{staticStyle:{color:"#3399ff","font-size":"14px",background:"inherit",border:"none"},on:{click:t.settingCard}},[t._v("继续设置提现账户")]),a("br"),t._v(" "),a("el-radio-group",{staticClass:"radio",staticStyle:{width:"25%","margin-top":"20px"},model:{value:t.choose_account,callback:function(e){t.choose_account=e},expression:"choose_account"}},[a("div",t._l(t.accountList,function(e,i){return a("el-radio",{key:e.id,attrs:{label:e.id}},[a("span",{staticStyle:{"font-weight":"800","font-size":"16px"}},[t._v(t._s(e.card_number))]),t._v(" "),a("el-popover",{attrs:{placement:"top",width:"200",trigger:"hover",content:e.fullNumber}},[a("button",{attrs:{slot:"reference"},slot:"reference"},[t._v("查看")])]),t._v(" "),a("img",{staticStyle:{"margin-left":"30px"},attrs:{src:n("FPQb"),width:"18px",height:"18px"},on:{click:function(n){return t.deleteCard(i,e.id)}}})],1)}),1)])],1):a("div",{staticClass:"no_account"},[a("span",{staticStyle:{color:"#3399ff"}},[t._v("请先设置您的提现账户")]),t._v("   \n      "),a("button",{staticClass:"setting",staticStyle:{color:"#3399ff",background:"none",border:"none","font-size":"16px"},on:{click:t.settingCard}},[t._v("设置")])]),t._v(" "),a("div",{staticClass:"div3"},[!t.isShowAccount||t.inputMoney<=0?a("el-button",{staticStyle:{background:"#f2f2f2",width:"71px",height:"31px",color:"#a1a1a1","font-size":"15px","border-radius":"5px","line-height":"5px"},attrs:{disabled:""}},[t._v("提现")]):a("el-button",{staticStyle:{background:"#fff",width:"71px",height:"31px",color:"#000","font-size":"15px","border-radius":"5px","line-height":"5px","border-color":"#000"},on:{click:t.clickWithdraw}},[t._v("提现")])],1),t._v(" "),a("el-dialog",{staticStyle:{"text-align":"center","text-size":"22px"},attrs:{title:"添加银行卡账户",visible:t.settingFormVisible,width:"500px"},on:{"update:visible":function(e){t.settingFormVisible=e}}},[a("div",{staticStyle:{width:"100%",height:"41px",background:"#f2f2f2",margin:"0 auto"}},[a("span",[t._v("\n         1. 请仔细填写银行卡信息，由于填写错误导致的资金流失，概不负责"),a("br"),t._v("\n         2. 只支持提现到借记卡， 不支持提现到信用卡\n       ")])]),t._v(" "),a("el-form",{model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"请填写账户方机构名称"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"账户类型"}},[a("el-radio-group",{staticStyle:{width:"100%"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-radio",{attrs:{label:"persons"}},[t._v("个人银行卡（对私账户）")]),t._v(" "),a("el-radio",{attrs:{label:"company"}},[t._v("公司账户（对公账户）")])],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"开户银行"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择开户银行"},model:{value:t.form.bank_name,callback:function(e){t.$set(t.form,"bank_name",e)},expression:"form.bank_name"}},t._l(t.bankList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"银行卡号"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini",maxlength:"22",change:t.inputBankNumLimitNumber()},model:{value:t.form.bank_number,callback:function(e){t.$set(t.form,"bank_number",e)},expression:"form.bank_number"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"开户名"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:t.form.bank_people,callback:function(e){t.$set(t.form,"bank_people",e)},expression:"form.bank_people"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"开户地区"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择开户地区"},model:{value:t.form.bank_addr,callback:function(e){t.$set(t.form,"bank_addr",e)},expression:"form.bank_addr"}},t._l(t.addrList,function(t){return a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}),1)],1),t._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"开户支行完整名称"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:t.form.bank_allname,callback:function(e){t.$set(t.form,"bank_allname",e)},expression:"form.bank_allname"}})],1)],1),t._v(" "),a("div",{staticStyle:{width:"100%",height:"21px","text-align":"left","padding-left":"20px","margin-top":"6px",color:"#333"}},[a("span",[t._v("\n         请对照银行对账单填写完整支行名称，如“广东省深圳市福田区福民支行”\n       ")])]),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("3igz")},"data-v-7ac188e4",null);e.default=o.exports},y6AG:function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return u});var a=n("vnhY"),i=function(t){return a.a.get("/admin/bank_card/balance?company_id="+t)},r=function(t){return a.a.post("/admin/bank_card",t)},s=function(t){return a.a.get("/admin/bank_card?company_id="+t)},o=function(t){return a.a.delete("/admin/bank_card?company_id="+t.company_id+"&bank_card_id="+t.bank_card_id)},c=function(){return a.a.get("/admin/bank_card/bank")},l=function(){return a.a.get("/admin/service/getProvinceRegionList?pid=-1")},u=function(t){return a.a.post("/admin/bank_card/withdraw",t)}}});
//# sourceMappingURL=9.40fd668681e171fb533e.js.map