import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SecondPage from '@/components/SecondPage'
import User from '@/components/User'
import Profile from '@/components/Profile'

Vue.use(Router)
const router = new Router({
    routes: [
      {
        path: '/',
        redirect: '/home',
        meta: {
          title: '首页'
        }
      },
      {
        path: '/home',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/secondPage',
        name: 'SecondPage',
        component: SecondPage,
        meta: {
          title: '第二个界面'
        }
      },
      {
        path: '/user/:userId',
        name: 'User',
        component: User,
        meta: {
          title: '用户'
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
          title: '资料'
        },
        //路由内的守卫
        beforeEnter: (to, from, next) => {
          next()
        }
      }
    ],
    //使用history模式,默认是hash模式,使得url上没有#号
    mode: 'history',
    linkActiveClass: 'active'
  }
)

//导航前置守卫动态修改标题
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  //或者(如果存在嵌套的话,就拿不到)
  // document.title = to.meta.title;
  //next方法必须调用,不然不会跳转到下一个界面
  //也可以通过参数,通过next跳转到对应界面 next('/login')
  next();
})

//导航后置守卫
router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
})

export default router
