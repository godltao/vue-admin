<template>
  <div class="el-breadcrumb">
    <div class="el-breadcrumb-aside-ctl">
      <i :class="isCollapse" @click="asideCtl"></i>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbData" :to="{ path: item.path }">{{ item.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {},
  data() {
    return {}
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    },
    breadcrumbData() {
      return this.$store.state.breadcrumb
    }
  },
  methods: {
    asideCtl() {
      this.$store.commit('ctlIsCollapse')
    }
  }

}
</script>

<style scoped>
.el-breadcrumb {
  display: flex;
  line-height: 45px;
  background-color: #eeeeee;
}

.el-breadcrumb-aside-ctl {
  padding-right: 10px;
  padding-left: 10px;
}
</style>
