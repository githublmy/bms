webpackJsonp([0],{"1alW":function(e,r,t){var o=t("kM2E");o(o.S,"Number",{isInteger:t("AKgy")})},AKgy:function(e,r,t){var o=t("EqjI"),s=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&s(e)===e}},"RRo+":function(e,r,t){e.exports={default:t("c45H"),__esModule:!0}},c45H:function(e,r,t){t("1alW"),e.exports=t("FeBl").Number.isInteger},lmfZ:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("RRo+"),s=t.n(o),l={data:function(){var e=this;return{ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),o())},trigger:"blur"}],checkPass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}],age:[{validator:function(e,r,t){if(!r)return t(new Error("年龄不能为空"));setTimeout(function(){s()(r)?r<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))},1e3)},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},a={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login clearfix"},[t("div",{staticClass:"login-form"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{model:{value:e.ruleForm.age,callback:function(r){e.$set(e.ruleForm,"age",e._n(r))},expression:"ruleForm.age"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),t("span",[e._v("jjj")])])},staticRenderFns:[]};var n=t("VU/8")(l,a,!1,function(e){t("pqZg")},"data-v-c9801ce0",null);r.default=n.exports},pqZg:function(e,r){}});