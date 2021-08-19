<template>
  <el-header class="el-header">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>{{ name }}</span>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      name: this.$store.state.userInfo.name
    }
  },
  methods:{
    logout(){
      sessionStorage.removeItem('v-token')
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
}
</style>
