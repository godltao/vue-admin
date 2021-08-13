import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      //路由懒加载. 使得生成出来的js文件为独立的文件
      component: () => import('../views/home/Home'),
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: () => import('../views/home/News')
        },
        {
          path: 'message',
          component: () => import('../views/home/Message')
        }
      ]
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('../views/category/Category')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/cart/Cart')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/profile/Profile')
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
