webpackJsonp([6],{"98gX":function(e,t,a){"use strict";var n=a("dE1y"),o=a.n(n),c=a("S6Tm"),i=a("0GCx"),s=a("E9PD"),r={data:function(){return{date:"",nowTime:"",roleName:{admin:"超级管理员"},manageName:"",userHeaderImg:o.a}},mounted:function(){var e=this;i.a.$on("updateUserHeader",function(t){e.userHeaderImg=Object(c.e)("url"),e.$forceUpdate()}),i.a.$on("updateUserName",function(t){e.name=t,e.$forceUpdate()})},created:function(){this.getDate(),this.name=Object(c.e)("real_name")||Object(c.e)("account_number");var e=Object(c.e)("url");e&&"null"!==e&&(this.userHeaderImg=Object(c.e)("url"))},methods:{getDate:function(){this.nowTime=Object(c.d)()},logout:function(){var e=this;Object(s.f)().then(function(t){sessionStorage.clear(),e.$router.replace("/")})},goback:function(){this.$router.go(-1)},goHome:function(){this.$router.replace({name:"home"})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"headerTop",attrs:{gutter:0}},[a("el-col",{staticClass:"title",attrs:{span:9}},[a("div",{staticClass:"back",on:{click:e.goback}},[a("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),"settleIn"!==this.$route.name?a("div",{staticClass:"home",on:{click:e.goHome}},[a("i",{staticClass:"fa fa-home"}),e._v(" "),a("font",[e._v("首页")])],1):e._e()]),e._v(" "),a("el-col",{staticClass:"text-left",attrs:{span:15}},[a("div",{staticClass:"admin-name"},[a("p",[e._v("  您好, "+e._s(e.name))]),e._v(" "),a("p",[e._v(e._s(e.nowTime))])])])],1)},staticRenderFns:[]};var p=a("VU/8")(r,l,!1,function(e){a("tu45")},"data-v-870783e2",null);t.a=p.exports},YddO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("98gX"),o=a("5gKc"),c=/^1(3|4|5|6|7|8|9)\d{9}$/,i={companyName:[{required:!0,message:"请输入家政公司名称",trigger:"blur"}],managerName:[{required:!0,message:"请输入公司管理员姓名",trigger:"blur"}],phone:[{required:!0,validator:function(e,t,a){null===t||""===t?a(new Error("请输入公司管理员电话")):t&&!c.test(t)?a(new Error("请输入格式正确的手机号码")):a()},trigger:"blur"}],province:[{required:!0,message:"请选择公司所在省份",trigger:"change"}],city:[{required:!0,message:"请选择公司所在城市",trigger:"change"}],country:[{required:!0,message:"请选择公司所在区县",trigger:"change"}],addr:[{required:!0,message:"请输入公司具体地址",trigger:"blur"}],businessLicence:[{required:!0,message:"请上传公司营业执照照片",trigger:"blur"}],logo:[{required:!0,message:"请上传公司logo",trigger:"blur"}],decription:[{required:!0,message:"请上传500字以内的公司介绍",trigger:"blur"}]},s={id:-1,companyName:"",managerName:"",phone:"",province:"",city:"",country:"",addr:"",logo:"",businessLicence:"",decription:""},r=a("7S6e"),l=a("S6Tm"),p=a("E9PD"),m={name:"settleIn",components:{"header-top":n.a,"upload-image":o.a},data:function(){return{company:s,rules:i,provinces:[],cities:[],countries:[],editorOption:{},succNote:"您的申请审核已提交，得贤工作人员将会在1-3个工作日内与您沟通进行审核，请耐心等待。",ossHost:""}},computed:{sbIsdisabled:function(){var e=!0,t=this.company,a=t.companyName,n=t.managerName,o=t.phone,c=t.province,i=t.city,s=t.country,r=t.addr,l=t.logo,p=t.businessLicence,m=t.decription;return a&&n&&o&&c&&i&&s&&r&&l&&p&&m&&(e=!1),e}},beforeRouteEnter:function(e,t,a){var n=Object(l.e)("company_id"),o=Object(l.e)("company_object");!n||o&&"approved"!==o.audit_status?a():a("/app")},created:function(){var e=Object(l.e)("company_object");e?this.fetchCompany(e):(this.company={id:-1,companyName:"",managerName:"",phone:"",province:"",city:"",country:"",addr:"",logo:"",businessLicence:"",decription:""},this.fetchProvinces())},methods:{fetchProvinces:function(){var e=this;Object(p.c)().then(function(t){e.provinces=t.data})},changeProvince:function(e){var t=this,a=e.split("-")[0];this.company.city="",this.company.country="",Object(p.a)(a).then(function(e){t.cities=e.data})},changeCity:function(e){var t=this,a=e.split("-")[0];this.company.country="",Object(p.b)(a).then(function(e){t.countries=e.data})},uploadSuccess:function(e){this.ossHost=e.host,"licence"===e.use?this.company.businessLicence=e.path:this.company.logo=e.path},submitCompanyInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var a=function(e,t){var a={};return-1!==e.id&&(a.id=e.id),a.title=e.companyName,a.admin_name=e.managerName,a.admin_phone=e.phone,a.province_code=e.province.split("-")[1],a.city_code=e.city.split("-")[1],a.cd_code=e.country,a.addr_info=e.addr,a.logo=e.logo.split(t)[1],a.business_license_img=e.businessLicence.split(t)[1],a.remark=e.decription,a}(t.company,t.ossHost);Object(p.i)(a).then(function(e){Object(r.d)("友情提示",t.succNote,"退 出").then(function(e){"confirm"===e&&(sessionStorage.clear(),t.$router.replace("/login"))})})}})},fetchCompany:function(e){var t=this,a=e;Object(p.c)().then(function(e){return t.provinces=e.data,Object(p.a)(a.province_info.id)}).then(function(e){return t.cities=e.data,Object(p.b)(a.city_info.id)}).then(function(e){var n,o;t.countries=e.data,t.company=((o={}).id=(n=a).id,o.companyName=n.title,o.managerName=n.admin_name,o.phone=n.admin_phone,o.province=n.province_info.id+"-"+n.province_code,o.city=n.city_info.id+"-"+n.city_code,o.country=n.cd_code,o.addr=n.addr_info,o.logo=n.logo,o.businessLicence=n.business_license_img,o.decription=n.remark,o)})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"settleIn"}},[a("el-container",{staticClass:"header-bg"},[a("header-top")],1),e._v(" "),a("div",{staticClass:"settle-in-container"},[a("el-card",{staticClass:"box-card box-card-top",attrs:{shadow:"never"}},[a("strong",[e._v("申请入驻")])]),e._v(" "),a("el-card",{staticClass:"box-card box-card-content",attrs:{shadow:"hover"}},[a("el-row",[a("el-col",{attrs:{span:22,offset:1}},[a("el-form",{ref:"companyForm",attrs:{model:e.company,rules:e.rules,"label-width":"150px","label-position":"top"}},[a("el-form-item",{staticClass:"t-a-left",attrs:{label:"您的家政公司名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入家政公司名称"},model:{value:e.company.companyName,callback:function(t){e.$set(e.company,"companyName",t)},expression:"company.companyName"}})],1),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"公司管理员姓名",prop:"managerName"}},[a("el-input",{attrs:{placeholder:"请输入公司管理员姓名"},model:{value:e.company.managerName,callback:function(t){e.$set(e.company,"managerName",t)},expression:"company.managerName"}})],1),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"公司管理员电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入公司管理员电话"},model:{value:e.company.phone,callback:function(t){e.$set(e.company,"phone",t)},expression:"company.phone"}})],1),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"公司所在城市",required:""}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"t-a-left",attrs:{prop:"province"}},[a("el-select",{attrs:{placeholder:"请选择所在省"},on:{change:e.changeProvince},model:{value:e.company.province,callback:function(t){e.$set(e.company,"province",t)},expression:"company.province"}},e._l(e.provinces,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"-"+e.code}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"t-a-left",attrs:{prop:"city"}},[a("el-select",{attrs:{placeholder:"请选择所在市"},on:{change:e.changeCity},model:{value:e.company.city,callback:function(t){e.$set(e.company,"city",t)},expression:"company.city"}},e._l(e.cities,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"-"+e.code}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"t-a-left",attrs:{prop:"country"}},[a("el-select",{attrs:{placeholder:"请选择所在区"},model:{value:e.company.country,callback:function(t){e.$set(e.company,"country",t)},expression:"company.country"}},e._l(e.countries,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}),1)],1)],1)],1),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"公司具体地址",prop:"addr"}},[a("el-input",{attrs:{placeholder:"请输入公司具体地址"},model:{value:e.company.addr,callback:function(t){e.$set(e.company,"addr",t)},expression:"company.addr"}})],1),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"请上传公司营业执照",prop:"businessLicence"}},[a("div",{staticClass:"image-note"},[a("span",[e._v("图片格式只支持：BMP、JPEG、JPG、PNG，大小不超过50M")])]),e._v(" "),a("div",[a("upload-image",{attrs:{use:"licence","image-size":"50"},on:{uploadSucc:e.uploadSuccess}},[e.company.businessLicence?a("img",{staticClass:"avatar needsclick",attrs:{src:e.company.businessLicence}}):a("div",[a("i",{staticClass:"el-icon-plus avatar-uploader-icon needsclick"})])])],1)]),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"请上传公司logo",prop:"logo"}},[a("div",{staticClass:"image-note"},[a("span",[e._v("图片格式只支持：BMP、JPEG、JPG、PNG，大小不超过50M")])]),e._v(" "),a("div",[a("upload-image",{attrs:{use:"logo","image-size":"50"},on:{uploadSucc:e.uploadSuccess}},[e.company.logo?a("img",{staticClass:"avatar needsclick",attrs:{src:e.company.logo}}):a("div",[a("i",{staticClass:"el-icon-plus avatar-uploader-icon needsclick"})])])],1)]),e._v(" "),a("el-form-item",{staticClass:"t-a-left",attrs:{label:"请输入公司介绍",prop:"decription"}},[a("el-input",{attrs:{type:"textarea",rows:6,maxlength:"500",placeholder:"请上传500字以内的公司介绍"},model:{value:e.company.decription,callback:function(t){e.$set(e.company,"decription",t)},expression:"company.decription"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",disabled:e.sbIsdisabled},on:{click:function(t){return e.submitCompanyInfo("companyForm")}}},[e._v("提交入驻申请")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(m,u,!1,function(e){a("ZJj1")},"data-v-8ab8b896",null);t.default=d.exports},ZJj1:function(e,t){},tu45:function(e,t){}});
//# sourceMappingURL=6.7f6f0b308e7c12a52ffe.js.map