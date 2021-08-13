<template>
  <div>
    <h2>我是用户界面</h2>
    <p>biubiubiu</p>
    <br>-------------- 拿动态路由的参数, 使用this.$route.params.userId --------------<br>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //活跃的路由, $router指我们实例化出来的router对象
      return this.$route.params.userId
    }
  },
  created() {
    console.log('User created...')
  },
  deactivated() {
    console.log('User deactivated...')
  },
  //组件内守卫
  beforeRouteEnter(to, from, next) {
    next();
  }
}
</script>

<style scoped>

</style>
