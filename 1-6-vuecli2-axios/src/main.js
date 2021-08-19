import Vue from 'vue'

Vue.config.productionTip = false

import axios from 'axios'

// axios.defaults.baseURL='aaa'
axios.defaults.timeout = 5000
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJudnRlc3QtdmliZTAxIiwidXNlcl9uYW1lIjoibmF2ZXJfMTk0OTIxMDU1Iiwic2NvcGUiOlsiVVNFUlMiLCJQTEFZTElTVCIsIkxJQlJBUlkiLCJMSVNURU5JTkdfSElTVE9SWSIsIkZPTExPVyJdLCJjaGFubmVsIjoibmF2ZXIiLCJleHAiOjE2Mjc3OTkyNDIsInV1aWQiOiJjY2E3MTFmZDU5MmRkYjM0YWM3OTMxZjYxMTUxZjkwMSIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiUDVPUVFhRE5RcWxGZDhTMjdqU3lBa1VKdklZIiwiY2xpZW50X2lkIjoiZTVhMjg5OTRmOTk3In0.O0d97ncdD8EuzNVOM-vvSkZ0gAzd9jiVtSCzlptaQXc'
}
axios.interceptors.request.use(config => {
  config.withCredentials = true;
  return config;
});
console.log(111111111111)

// 导入依赖
import io from 'socket.io-client'

const socket = io('/api/ws') // 挂载依赖
socket.emit('send message', {
  msg: 'front end send message'
})
// 监听后端传过来的数据
socket.on('message', (data) => {
  console.log(data)
})
