<template>
  <div class="body-class">
    {{ message }}<br>
    <ul>
      <li v-for="(item, index) in movies"
          :class="{read: currentIndex === index}"
          style="cursor: pointer"
          :key="item"
          @click="liClick(index)">{{ item }}
      </li>
    </ul>
    <button @click="changeBg()">切换背景</button>
  </div>
</template>

<script>
export default {
  name: "FirstVuePage",
  data() {
    return {
      message: '你好,李焕英',
      movies: ['海王', '海贼王', '海扁王'],
      currentIndex: 0
    }
  },
  methods: {
    liClick(index) {
      this.currentIndex = index;
    },
    changeBg(event) {
      console.log(this.$root);
    }
  }
}
</script>

<style scoped>

.read {
  color: red;
}

/*外层 text-align: center; 所以使用inline-block*/
ul {
  display: inline-block;
  text-align: left;
}

.body-class {
  background: url("../../public/img/111.jpg");
}
</style>
