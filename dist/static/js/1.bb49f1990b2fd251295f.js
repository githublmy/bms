webpackJsonp([1],{h6GS:function(e,t){},mlqX:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("NYxO"),l={data:function(){return{nowTime:"",nowDate:"",nowWeek:"",activeIndex2:"1",isCollapse:!1,isShow:!0,themeColor:localStorage.getItem("theme")||"rgb(26, 99, 138)",list:[]}},computed:i()({},Object(n.b)("theme",["theme"])),mounted:function(){this.list=this.$route.matched},watch:{$route:function(e,t){this.list=e.matched}},methods:{handleOpen:function(e,t){this.$router.push(e)},handleClose:function(e,t){},changeTheme:function(e){this.themeColor=e,localStorage.setItem("theme",e)},btnChange:function(){this.isCollapse=!this.isCollapse,this.isShow=!this.isShow},getTime:function(){var e=new Date,t=e.getFullYear(),s=e.getMonth()+1;s<10&&(s="0"+s);var a=e.getDate();a<10&&(a="0"+a);var i=e.getDay();switch(i){case 0:i="星期天";break;case 1:i="星期一";break;case 2:i="星期二";break;case 3:i="星期三";break;case 4:i="星期四";break;case 5:i="星期五";break;case 6:i="星期六"}var n=e.getHours();n<10&&(n="0"+n);var l=e.getMinutes();l<10&&(l="0"+l);var o=e.getSeconds();o<10&&(o="0"+o),this.nowDate=t+"/"+s+"/"+a,this.nowWeek=i,this.nowTime=n+":"+l+":"+o},currentTime:function(){var e=void 0;clearInterval(e),e=setInterval(this.getTime,1e3)}},created:function(){this.currentTime()}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index"},[s("div",{staticClass:"side-nav",style:{background:e.themeColor,width:e.isCollapse?"auto":"200px"}},[s("div",{staticClass:"time"},[s("span",[e._v(e._s(e.nowDate))]),e._v(" "),s("span",[e._v(e._s(e.nowWeek))]),e._v(" "),s("span",[e._v(e._s(e.nowTime))])]),e._v(" "),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,exact:"","background-color":e.themeColor,"text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse,router:""},on:{open:e.handleOpen,close:e.handleClose}},[s("el-submenu",{attrs:{index:"/role"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-location"}),e._v(" "),s("span",[e._v("账户管理")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/role"}},[e._v("角色管理")]),e._v(" "),s("el-menu-item",{attrs:{index:"/account"}},[e._v("账号管理")])],2),e._v(" "),s("el-submenu",{attrs:{index:"/kefang"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-menu"}),e._v(" "),s("span",[e._v("客房管理")])]),e._v(" "),s("el-menu-item",{attrs:{index:"/kefang"}},[e._v("客房管理")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-2"}},[e._v("类型管理")])],2),e._v(" "),s("el-submenu",{attrs:{index:"3"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-document"}),e._v(" "),s("span",[e._v("客户管理")])]),e._v(" "),s("el-menu-item",{attrs:{index:"3-1"}},[e._v("客户管理")])],2),e._v(" "),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-setting"}),e._v(" "),s("span",[e._v("权限管理")])]),e._v(" "),s("el-menu-item",{attrs:{index:"4-1"}},[e._v("权限管理")])],2)],1)],1),e._v(" "),s("div",{staticClass:"side-top"},[s("div",{staticClass:"top-nav",style:{background:e.themeColor}},[s("div",{staticClass:"nav"},[s("div",{staticClass:"icon",on:{click:e.btnChange}},[s("i",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"el-icon-s-fold"}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"el-icon-s-unfold"})]),e._v(" "),s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.list,function(t,a){return s("el-breadcrumb-item",{key:a,attrs:{to:t.path}},[e._v(e._s(t.meta.title))])}),1)],1),e._v(" "),s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.$route.path,mode:"horizontal","background-color":e.themeColor,"text-color":"#fff","active-text-color":"#ffd04b"}},[s("el-menu-item",{attrs:{index:"1"}},[e._v("Home")]),e._v(" "),s("el-menu-item",{attrs:{index:"2"}},[e._v("Message")]),e._v(" "),s("el-menu-item",{attrs:{index:"3"}},[e._v("Email")]),e._v(" "),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[e._v("Theme")]),e._v(" "),e._l(e.theme,function(t,a){return s("el-menu-item",{key:a,on:{click:function(s){return e.changeTheme(t.value)}}},[e._v(e._s(t.name))])})],2),e._v(" "),s("el-submenu",{attrs:{index:"5"}},[s("template",{slot:"title"},[e._v("管理员")]),e._v(" "),s("el-menu-item",{attrs:{index:"5-1"}},[e._v("个人中心")]),e._v(" "),s("el-menu-item",{attrs:{index:"5-2"}},[e._v("修改密码")]),e._v(" "),s("el-menu-item",{attrs:{index:"5-3"}},[e._v("退出登录")])],2)],1)],1),e._v(" "),s("div",{staticClass:"content"},[s("router-view")],1)])])},staticRenderFns:[]};var r=s("VU/8")(l,o,!1,function(e){s("vk+U"),s("h6GS")},"data-v-f1feafa4",null);t.default=r.exports},"vk+U":function(e,t){}});