webpackJsonp([11],{FiGX:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),s=o.n(n),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer",attrs:{id:"footer-info"}},[e("div",[this._v("客服电话：010-04505029")]),this._v(" "),e("div",[this._v("Copyright © 北京得贤信息服务有限公司")])])}]};var a=o("VU/8")({name:"footerInfo"},c,!1,function(t){o("Zxfp")},"data-v-1daa7d84",null).exports,i=o("7S6e"),r=o("E9PD"),l={name:"regist",data:function(){return{account:{phone:"",code:"",password:"",repassword:""},countdown:0,isDisabled:!1,phoneReg:/^1(3|4|5|6|7|8|9)\d{9}$/,note:""}},computed:{isSendCode:function(){var t=!0;return this.account.phone&&(t=!1),t}},components:{"regist-footer":a},created:function(){sessionStorage.clear()},methods:{codeCountdown:function(){var t=this,e=60,o=setInterval(function(){t.isDisabled=!0,t.countdown=e+"秒后重试",0===e&&(t.isDisabled=!1,t.countdown="重新获取",clearInterval(o)),e--},1e3)},validate:function(t){return this.account.phone&&this.phoneReg.test(this.account.phone)?"regist"!==t||this.account.code?"regist"!==t||this.account.password?"regist"!==t||this.account.password===this.account.repassword||(this.note="两次设置的密码不一致",!1):(this.note="请设置新密码",!1):(this.note="请输入短信验证码",!1):(this.note="请填写正确的手机号码",!1)},getCode:function(){var t=this;this.validate("getCode")&&(this.codeCountdown(),Object(r.d)(this.account.phone).then(function(e){Object(i.d)("友情提示","短信验证码已发送，请注意查收。").then(function(o){e.data&&(t.account.code=e.data+"")})}))},regist:function(){var t=this;if(this.validate("regist")){this.note="";var e={};e.account_number=this.account.phone,e.password=this.account.password,e.code=this.account.code,Object(r.h)(e).then(function(e){var o=e.data;sessionStorage.setItem("userInfo",s()(o)),Object(i.d)("友情提示","您已注册成功，请填写入驻信息").then(function(e){"confirm"===e&&t.$router.replace("/settleIn")})})}},clearNote:function(){this.note=""}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"regist-container",attrs:{id:"regist"}},[o("el-card",{staticClass:"box-card"},[o("el-row",[o("el-col",[o("el-form",{attrs:{"status-icon":""}},[o("el-form-item",[o("el-input",{attrs:{type:"text","prefix-icon":"el-icon-mobile",placeholder:"请输入用户手机号"},model:{value:t.account.phone,callback:function(e){t.$set(t.account,"phone",e)},expression:"account.phone"}})],1),t._v(" "),o("el-form-item",[o("el-row",[o("el-col",{attrs:{span:11}},[o("el-input",{attrs:{type:"text","prefix-icon":"el-icon-warning-outline",placeholder:"请输入验证码"},model:{value:t.account.code,callback:function(e){t.$set(t.account,"code",e)},expression:"account.code"}})],1),t._v(" "),o("el-col",{staticStyle:{float:"right"},attrs:{span:11}},[o("el-button",{staticClass:"primary",attrs:{type:"primary",round:"",plain:"",disabled:t.isDisabled||t.isSendCode},on:{click:function(e){return t.getCode(t.countdown)}}},[t._v(t._s(t.countdown||"获取验证码"))])],1)],1)],1),t._v(" "),o("el-form-item",[o("el-input",{attrs:{type:"password","prefix-icon":"el-icon-lock",placeholder:"请设置密码"},model:{value:t.account.password,callback:function(e){t.$set(t.account,"password",e)},expression:"account.password"}})],1),t._v(" "),o("el-form-item",[o("el-input",{attrs:{type:"password","prefix-icon":"el-icon-lock",placeholder:"请再一次设置密码"},model:{value:t.account.repassword,callback:function(e){t.$set(t.account,"repassword",e)},expression:"account.repassword"}})],1)],1)],1)],1),t._v(" "),t.note?o("el-row",[o("el-col",[o("el-alert",{attrs:{title:t.note,type:"warning",effect:"light","show-icon":!0,"close-text":"知道了"},on:{close:t.clearNote}})],1)],1):t._e(),o("br"),t._v(" "),o("el-row",[o("el-col",[o("el-button",{staticClass:"regist-btn",attrs:{size:"medium",type:"primary"},on:{click:t.regist}},[t._v("注 册")])],1)],1)],1),t._v(" "),o("regist-footer",{staticClass:"regist-footer"})],1)},staticRenderFns:[]};var d=o("VU/8")(l,u,!1,function(t){o("aGuV")},"data-v-36bf4d50",null);e.default=d.exports},Zxfp:function(t,e){},aGuV:function(t,e){}});
//# sourceMappingURL=11.0ba0109aa75d60c6334c.js.map