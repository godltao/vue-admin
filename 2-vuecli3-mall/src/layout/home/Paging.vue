<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[9, 12, 15, 18]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: "Paging",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default:
        0
    },
    pageSize: {
      type: Number,
      default: 9
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('change-page-size', val)
    },
    handleCurrentChange(val) {
      this.$emit('goto-page', val)
    }
  },
}
</script>

<style scoped>

</style>
