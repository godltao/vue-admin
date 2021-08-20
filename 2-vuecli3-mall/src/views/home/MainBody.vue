<template>
  <Breadcrumb/>
  <el-main class="el-main">
    <router-view class="main-view-body"/>
  </el-main>
</template>

<script>
import Breadcrumb from '@/layout/home/Breadcrumb'

export default {
  name: "MainBody",
  components: {
    Breadcrumb
  }
}
</script>

<style scoped>
.el-main {
  height: 750px;
  border-bottom: 1px solid #cccccc;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  padding: 0;
}

.el-main::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.main-view-body{
  /*flex: 1;*/
  width: 100%;
}
</style>
