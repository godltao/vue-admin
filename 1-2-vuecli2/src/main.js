// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


const cpn = {
  template: '<div>22222</div>'
}
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   //h 实际上是createElement函数的回调
//   render: (h) => h(
//     'h2',
//     {style: {color: 'red'}},
//     ['hello world', h(cpn)]
//   )
// })
new Vue({
  el: '#app',
  //h 实际上是createElement函数的回调
  render: h => h(App)
})
