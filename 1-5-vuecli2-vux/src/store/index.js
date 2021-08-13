import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态变量  一般状态变量不用抽取出来
  state: {
    counter: 0,
    students: [
      {id: 1, name: 'kobe', age: 24},
      {id: 1, name: 'ltao', age: 18},
      {id: 1, name: 'james', age: 30},
      {id: 1, name: 'curry', age: 10}
    ],
    info: {id: 1, name: 'kobe', age: 42}
  },
  //定义方法, 做同步操作, 如果做异步操作,那么devtools记录的消息会出错
  //使用的时候需要使用commit: this.$store.commit('increment')
  mutations,
  //响应动作 类似 mutations ,但是可以做异步操作
  actions,
  //模块
  //可以分模块来保存这些全局变量,里面也包含state mutatuibs...等等
  //最终 modules中所有的module都会放入state中,所以取出来时$store.state.a......
  modules: {
    a: moduleA,
    b: moduleB,
  },
  //类似于计算属性 computed
  getters: getters
});
