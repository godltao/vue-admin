<template>
  <div id="app">
    <br>-------------- 修改module中的state $store.state.a.name a后面没有state , 其他的都根外层使用方法一样--------------<br>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <br>-------------- 响应式info --------------<br>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">更新信息</button>
    <button @click="aUpdateInfo">异步更新信息</button>
    <br>-------------- 响应式info --------------<br>
    <h2> {{ $store.state.counter }}</h2>
    <h2> {{ $store.getters.powerCounter }}</h2>
    <button @click="add()">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="sub()">-</button>
    <First></First>
    <h2>{{ $store.getters.filterByAge(12) }}</h2>
  </div>
</template>

<script>
import First from './components/First'
import * as Type from './store/store-types'

export default {
  name: 'App',
  components: {
    First
  },
  methods: {
    add() {
      this.$store.commit(Type.INCREMENT, 1)
    },
    addCount(count) {
      //方式一 , payload = count
      this.$store.commit(Type.INCREMENT, count)

      //方式二 , payload = {  type: 'increment',   count }
      // this.$store.commit({
      //   type: 'increment',
      //   count
      // })
    },
    sub() {
      this.$store.commit('decrement')
    },
    updateInfo() {
      this.$store.commit({
        type: Type.UPDATEINFO
      })
    },
    aUpdateInfo() {
      this.$store.dispatch({
        type: Type.AUPDATEINFO,
        payload: '这是携带的信息'
      }).then(res => {
        console.log(res);
      })
    },
    updateName() {
      //和外部的一样,直接commit
      this.$store.commit('updateName', 'lisi')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
