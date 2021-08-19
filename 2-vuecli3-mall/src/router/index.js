import {createRouter, createWebHistory} from 'vue-router'
import {defaultRouterData, adminRouterData} from "@/data/data";
import store from '@/store'
import utils from '@/util'

//添加默认路由
const routes = utils.packingRouterData(defaultRouterData)
//动态路由
//后面可以在app中从后台拉取的数据,放入到vuex中,然后使用数据
//find home
let home = routes.find(item => item.path === '/');
//DEBUG
if (home) {
  home.children = utils.packingRouterData(adminRouterData)
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: history
})

router.beforeEach((to, from, next) => {
  //路由权限判断
  let vToken = sessionStorage.getItem('v-token');
  if (to.path === '/login') {
    sessionStorage.removeItem('v-token');
    next()
  } else if (vToken) {
    next();
  } else {
    next({path: '/login'})
  }

  //封装面包屑导航
  let breadcrumb = to.matched.map(item => {
    return {
      path: item.path,
      title: item.meta.title
    }
  })
  store.commit('setBreadcrumb', breadcrumb)
  //set default active
  store.commit('setDefaultActive', to.path)
})

export default router
