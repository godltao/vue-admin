<template>
<div>
  <h2>我是Second Page</h2>
  <p>哈哈哈</p>
</div>
</template>

<script>
export default {
  name: "SecondPage",
  created() {
    console.log('SecondPage created...')
  },
  deactivated() {
    console.log('SecondPage deactivated...')
  }
}
</script>

<style scoped>

</style>
