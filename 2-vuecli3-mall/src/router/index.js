import {createRouter, createWebHistory} from 'vue-router'
import {defaultRouterData, adminRouterData} from "@/data/data";
import store from '@/store'

const routes = []

//添加默认路由
defaultRouterData.forEach(item => {
  routes.push({
    path: item.path,
    name: item.name,
    component: () => import(`@/views${item.component}.vue`),
    meta: {
      roles: item.role,
      title: item.title
    }
  })
})
//动态路由
//后面可以在app中从后台拉取的数据,放入到vuex中,然后使用数据
//find home
let home = routes.find(item => item.path === '/');
let homeChildren = [];
home.children = homeChildren;

adminRouterData.forEach(item => {
  let rout = {
    path: item.path,
    name: item.name,
    component: () => import(`@/views${item.component}.vue`),
    meta: {
      title: item.title,
      roles: item.role
    }
  };
  if (item.redirect) {
    rout.redirect = item.redirect
  }

  if (item.children) {
    rout.children = [];
    item.children.forEach(citem => {
      let crout = {
        path: citem.path,
        name: citem.name,
        component: () => import(`@/views${citem.component}.vue`),
        meta: {
          title: citem.title,
          roles: citem.role
        }
      }
      if (citem.redirect) {
        crout.redirect = citem.redirect
      }
      rout.children.push(crout)
    })
  }
  homeChildren.push(rout)
})
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: history
})

router.beforeEach((to, from, next) => {
  let breadcrumb = to.matched.map(item => {
    return {
      path: item.path,
      title: item.meta.title
    }
  })
  store.commit('setBreadcrumb', breadcrumb)
  //set default active
  store.commit('setDefaultActive', to.path)
  next();
})

export default router
