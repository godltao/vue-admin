import axios from "axios";
//创建实例
const localInstance = axios.create({
  timeout: 5000
});

//实例的拦截器
localInstance.interceptors.request.use(
  //请求成功
  config => {
    console.log(config);
    //1. config中的一些不符合服务器要求的数据处理
    //2. 增加缓冲图层效果
    //3. 设置一些token或者携带一些其他公用的数据
    //拦截后,要返回config,否则不能正常执行
    return config;
  },
  //请求失败
  err => {
    console.log(err);
  })

localInstance.interceptors.response.use(
  //响应的数据
  res => {
    console.log(res);
    //结果也要返回,否则前端拿不到结果
    //直接返回data,使用这个api的就不用再拿data
    return res.data;
  },
  //响应失败
  err => {
    console.log(err)
  })

//执行请求
export function localRequest(config) {
  return localInstance(config);
}
