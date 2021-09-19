<template>
  <div class="index">
    <div
      class="side-nav"
      :style="{ background: themeColor, width: !isCollapse ? '200px' : 'auto' }"
    >
      <div class="time">
        <span>{{ nowDate }}</span>
        <span>{{ nowWeek }}</span>
        <span>{{ nowTime }}</span>
      </div>
      <el-menu
        :default-active="$route.path"
        exact
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :background-color="themeColor"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        router
      >
        <el-submenu index="/role">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>账户管理</span>
          </template>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/account">账号管理</el-menu-item>
        </el-submenu>
        <el-submenu index="/kefang">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>客房管理</span>
          </template>
          <el-menu-item index="/kefang">客房管理</el-menu-item>
          <el-menu-item index="2-2">类型管理</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>客户管理</span>
          </template>
          <el-menu-item index="3-1">客户管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item index="4-1">权限管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="side-top">
      <div class="top-nav" :style="{ background: themeColor }">
        <div class="nav">
          <!-- 点击折叠左侧导航 -->
          <div class="icon" @click="btnChange">
            <i v-show="isShow" class="el-icon-s-fold"></i>
            <i v-show="!isShow" class="el-icon-s-unfold"></i>
          </div>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              :to="item.path"
              v-for="(item, index) in list"
              :key="index"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>

        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          :background-color="themeColor"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Message</el-menu-item>
          <el-menu-item index="3">Email</el-menu-item>
          <el-submenu index="4">
            <template slot="title">Theme</template>
            <el-menu-item
              @click="changeTheme(item.value)"
              v-for="(item, index) in theme"
              :key="index"
              >{{ item.name }}</el-menu-item
            >
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">管理员</template>
            <el-menu-item index="5-1">个人中心</el-menu-item>
            <el-menu-item index="5-2">修改密码</el-menu-item>
            <el-menu-item index="5-3">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      nowTime: "",
      nowDate: "",
      nowWeek: "",
      activeIndex2: "1",
      isCollapse: false,
      isShow: true,
      themeColor: localStorage.getItem("theme") || "rgb(26, 99, 138)",
      list: [],
    };
  },
  computed: {
    ...mapState("theme", ["theme"]),
  },
  mounted() {
    this.list = this.$route.matched;
  },
  watch: {
    $route(to, from) {
      this.list = to.matched;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      this.$router.push(key);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    changeTheme(color) {
      // 设置主题颜色并且使用localStorage.setItem保存到浏览器缓存中
      this.themeColor = color;
      localStorage.setItem("theme", color);
    },
    btnChange() {
      this.isCollapse = !this.isCollapse;
      this.isShow = !this.isShow;
    },
    getTime() {
      let time = new Date();
      let y = time.getFullYear();
      let mon = time.getMonth() + 1;
      if (mon < 10) {
        mon = "0" + mon;
      }
      let day = time.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      let week = time.getDay();
      switch (week) {
        case 0:
          week = "星期天";
          break;
        case 1:
          week = "星期一";
          break;
        case 2:
          week = "星期二";
          break;
        case 3:
          week = "星期三";
          break;
        case 4:
          week = "星期四";
          break;
        case 5:
          week = "星期五";
          break;
        case 6:
          week = "星期六";
          break;
      }
      let h = time.getHours();
      if (h < 10) {
        h = "0" + h;
      }
      let min = time.getMinutes();
      if (min < 10) {
        min = "0" + min;
      }
      let sec = time.getSeconds();
      if (sec < 10) {
        sec = "0" + sec;
      }
      this.nowDate = y + "/" + mon + "/" + day;
      this.nowWeek = week;
      this.nowTime = h + ":" + min + ":" + sec;
    },
    currentTime() {
      let timer;
      clearInterval(timer);
      timer = setInterval(this.getTime, 1000);
    },
  },
  created() {
    this.currentTime();
  },
};
</script>
<style>
.el-breadcrumb {
  line-height: 60px !important;
  color: aliceblue;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: aliceblue !important;
}
.el-breadcrumb__inner {
  color: aliceblue !important;
}
.nav {
  display: flex;
}
.content {
  background-color: aquamarine;
}
</style>
<style lang="sass" scoped>
.index
  width: 100vw
  height: 100vh
  display: flex
  .side-top
    flex: 1
    min-width: 1000px
    width: 100%
    height: 100%
    overflow: hidden
    .top-nav
      display: flex
      justify-content: space-between
      height: 60px
      .icon
        line-height: 60px
        padding-left: 6px
        margin-right: 40px
        i
          font-size: 22px
          color: white
          cursor: pointer
    .content
      padding: 10px
      height: calc( 100% - 60px )
  .side-nav
    height: 100%
    i
      color: white
    .time
      font-size: 14px
      color: white
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 60px
      padding-left: 4px
    ul
      border: none
      .el-menu-item
        padding-left: 66px!important
</style>
