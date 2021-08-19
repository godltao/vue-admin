import {createStore} from 'vuex'
//todo from backend
import {adminRouterData} from "@/data/data";

export default createStore({
  state: {
    isCollapse: false,
    breadcrumb: [],
    adminRouterData,
    defaultActive: '/index',
    userInfo: {}
  },
  mutations: {
    ctlIsCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    setBreadcrumb(state, payload) {
      state.breadcrumb = payload
    },
    setDefaultActive(state, path) {
      state.defaultActive = path
    },
    setUserInfo(state, user) {
      state.userInfo = user
    },
  },
  actions: {},
  modules: {}
})
