//commonjs 规范
const {add} = require('./js/mathUtils')

console.log(add(100, 200))

//es6 规范
import {name, age} from './js/info'

console.log(name)
console.log(age)

//图片引用
require('./css/base')
require('./css/special')

document.writeln('你好,李焕英')

//使用vue进行开发
import Vue from 'vue'
import App from './vue/App'

console.log(App)
new Vue({
  el: '#app',
  //会直接使用template替换掉app标签
  template: '<App></App>',
  components: {
    App
  }
})