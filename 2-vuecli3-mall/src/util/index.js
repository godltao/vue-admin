const util = {
  packingRouterData: (originData) => {
    return originData.map(item => {
      let router = {
        path: item.path,
        name: item.name,
        component: () => import(`@/views${item.component}.vue`),
        meta: {
          title: item.title,
          roles: item.role
        }
      };
      if (item.redirect) {
        router.redirect = item.redirect
      }

      if (item.children) {
        router.children = util.packingRouterData(item.children)
      }
      return router
    })
  }
}

export default util

