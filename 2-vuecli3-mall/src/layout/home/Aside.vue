<template>
  <el-menu class="el-menu-vertical-demo el-menu-aside"
           background-color="#545c64"
           text-color="#fff"
           :collapse="isCollapse"
           @open="handleOpen"
           router
           @close="handleClose"
           @select="select"
           :default-openeds="defaultOpen"
           :default-active='getDefaultActive'
           active-text-color="#ffd04b">
    <template v-for="item in getRouterData" :key="item">
      <el-menu-item v-if="!item.children" :index="item.resolvePath" :key="item">
        <i :class="item.icon"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
      <el-submenu v-else :index="item.path">
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item v-for="citem in getChildRouterData(item.children)" :index="citem.resolvePath" :key="citem">
          <i :class="citem.icon"></i>
          <template #title>{{ citem.title }}</template>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      defaultOpen: ['digital'],
    }
  },
  computed: {
    getDefaultActive(){
      return this.$store.state.defaultActive
    },
    getRouterData() {
      return this.$store.state.adminRouterData.filter(item => item.title)
    },
    isCollapse(){
      return this.$store.state.isCollapse
    }
  },
  methods: {
    getChildRouterData(routerData) {
      return routerData.filter(item => item.title)
    },
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    select(index, index2) {
    }
  }

}
</script>

<style scoped>
.el-menu-aside:not(.el-menu--collapse) {
  min-height: 100%;
  width: 180px;
}
.el-menu-item{
  min-width: 0;
}
</style>
