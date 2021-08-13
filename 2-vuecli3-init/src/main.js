import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//执行use,实际上是执行对象的install方法
// createApp(App)
//   .use(store)
//   .use(router)
//   .mount('#app')

import axios from 'axios'

// axios.defaults.timeout = 5000
// axios.defaults.headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJudnRlc3QtdmliZTAxIiwidXNlcl9uYW1lIjoibmF2ZXJfMTk0OTIxMDU1Iiwic2NvcGUiOlsiVVNFUlMiLCJQTEFZTElTVCIsIkxJQlJBUlkiLCJMSVNURU5JTkdfSElTVE9SWSIsIkZPTExPVyJdLCJjaGFubmVsIjoibmF2ZXIiLCJleHAiOjE2Mjc3OTkyNDIsInV1aWQiOiJjY2E3MTFmZDU5MmRkYjM0YWM3OTMxZjYxMTUxZjkwMSIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiUDVPUVFhRE5RcWxGZDhTMjdqU3lBa1VKdklZIiwiY2xpZW50X2lkIjoiZTVhMjg5OTRmOTk3In0.O0d97ncdD8EuzNVOM-vvSkZ0gAzd9jiVtSCzlptaQXc'
// }
//
// axios.get('/api/hello', {
//   withCredentials: true,
//   // data: {
//   //   query: '{Tracks(id:1494){id title album{id title} playTime  audio(type: "PD"){ playType }}}'
//   // }
// }).then(res => {
//   console.log(res);
// })


import {localRequest} from "@/network/axiosRequest";

localRequest({
  url: '/api/hello',
  methods: 'GET'
}).then(res => console.log(res))
