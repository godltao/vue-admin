<template>
  <div>
    <button @click="btnLoading">加载中...</button>
  </div>
</template>

<script>
import {ElLoading} from 'element-plus';

export default {
  name: "Loading",
  data() {
    return {}
  },
  methods: {
    btnLoading() {
      let loadingInstance = ElLoading.service({
        fullscreen: true,
        text: '加载中,请稍后...'
      })
      //this.$nextTick 关闭loading遮盖, 所以需要异步调用, setTimeout中, 需要使用箭头函数才能拿到最近作用域中的this
      //从而找到 loadingInstance 中的 loadingInstance 单例来关闭loading状态
      setTimeout(() => {
        this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          loadingInstance.close();
        });
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
