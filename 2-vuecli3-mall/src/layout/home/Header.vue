<template>
  <el-header class="el-header">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>王小虎</span>
  </el-header>
</template>

<script>
export default {
  name: "Header"
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
