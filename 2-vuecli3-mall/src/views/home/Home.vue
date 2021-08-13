<template>
  <div>
    <Header/>

    <el-container>

      <Aside/>

      <el-container class="el-container-main">
        <MainBody/>

        <Footer/>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/layout/home/Header'
import Aside from '@/layout/home/Aside'
import Footer from '@/layout/home/Footer'
import MainBody from '@/views/home/MainBody'

export default {
  name: "First",
  components: {
    Header,
    Aside,
    Footer,
    MainBody
  }
}
</script>

<style>

body {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}

body::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

</style>

<style scoped>
.el-container-main {
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
}
</style>
