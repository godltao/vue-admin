<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button>按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: '第一个vue'
    }
  },
}
</script>

<style>
.title {
  color: green;
}
</style>