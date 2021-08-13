export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {},
  getters: {
    fullName(state) {
      return state.name + ' last Name'
    },
    //使用第三个参数 拿到外层的state
    fullName2(state, getter, rootState) {
      //直接使用getter就可以拿到所有的getter,包括里面和外面的
      console.log(getter.powerCounter);
      return state.name + ' ' + rootState.counter
    },
  }
}
