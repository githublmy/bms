import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  // mode:'history',
  routes: [{
      path: '/',
      meta: {
        title: "首页"
      },
      redirect: "/role",
      component: () => import('@/views/Index'),
      children: [{
          path: "role",
          meta: {
            title: "角色管理"
          },
          component: () => import('@/views/role/Role')
        },
        {
          path: "account",
          meta: {
            title: "账号管理"
          },
          component: () => import('@/views/account/Account')
        },
        {
          path: "kefang",
          meta: {
            title: "客房管理"
          },
          component: () => import('@/views/kefang/Kefang')
        },
        {
          path: "class",
          meta: {
            title: "类型管理"
          },
          component: () => import('@/views/class/Class')
        },
      ]
    },

    {
      path: '/login',
      component: () => import('@/views/Login')
    }
  ]
})
