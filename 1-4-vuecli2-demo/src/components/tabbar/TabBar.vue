<template>
  <div id="tab-bar">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;

  box-shadow: 0 -2px 10px rgba(100, 100, 100, .2);
}
</style>
