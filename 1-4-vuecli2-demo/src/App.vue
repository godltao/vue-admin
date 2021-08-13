<template>
  <div id="app">
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/tabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/*使用@import, 在style中 导入css文件*/
@import "assets/css/base.css";
</style>
