<template>
  <div>
    <h2>我是profile界面</h2>
    <br>-------------- 路由参数传递 --------------<br>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log('Profile created...')
  },
  deactivated() {
    console.log('Profile deactivated...')
  }
}
</script>

<style scoped>

</style>
