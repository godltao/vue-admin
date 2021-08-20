let defaultRouterData = [
  {name: 'login', path: '/login', component: '/auth/Login', icon: ''},
  {name: 'register', path: '/register', component: '/auth/Register', icon: ''},
  {
    name: 'index2',
    title: '首页',
    path: '/index2',
    component: '/index/Index2',
    role: ['admin'],
    icon: 'el-icon-s-goods'
  },
  {name: 'home', title: '首页', path: '/', component: '/home/Home', role: ['admin'], icon: ''},
]

let adminRouterData = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    title: '首页',
    path: 'index',
    resolvePath: '/index',
    component: '/index/Index',
    role: ['admin'],
    icon: 'el-icon-s-goods'
  },
  {
    name: 'Digital',
    title: 'Digital/数码',
    path: 'digital',
    resolvePath: '/digital',
    component: '/digital/Index',
    children: [
      {
        path: '',
        redirect: '/digital/phone'
      },
      {
        name: 'phone',
        title: '手机',
        path: 'phone',
        resolvePath: '/digital/phone',
        component: '/digital/Phone',
        role: ['admin'],
        icon: 'el-icon-mobile-phone'
      },
      {
        name: 'computer',
        title: '电脑',
        path: 'computer',
        resolvePath: '/digital/computer',
        component: '/digital/Computer',
        role: ['admin'],
        icon: 'el-icon-s-platform'
      },
    ],
    role: ['admin'],
    icon: 'el-icon-camera-solid'
  },
  {
    name: 'cart',
    title: '购物车',
    path: 'cart',
    resolvePath: '/cart',
    component: '/cart/Cart',
    role: ['admin'],
    icon: 'el-icon-s-custom',
  },
  {
    name: 'loading',
    title: '加载中',
    path: 'loading',
    resolvePath: '/loading',
    component: '/loading/Loading',
    role: ['admin'],
    icon: 'el-icon-loading',
  },
  {
    name: 'listAndPaging',
    title: '分页列表',
    path: 'listAndPaging',
    resolvePath: '/listAndPaging',
    component: '/list/ListAndPaging',
    role: ['admin'],
    icon: 'el-icon-s-grid',
  },
]

export {defaultRouterData, adminRouterData}
