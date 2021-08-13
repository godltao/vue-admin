<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <!--    默认渲染为a标签-->
    <!--    <router-link to="/home" tag="button">首页</router-link>-->
    <!--    使用replace 使用history的replaceState方法来操作history栈,使得用户不能使用浏览器的返回来做页面的奇幻-->
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    active-class="active" 为活跃的链接设置class属性 会替换默认的 还可以通过router.js来统一修改 linkActiveClass-->
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/secondPage" replace>第二个界面</router-link>
    <!--    动态路由-->
    <router-link :to="'/user/' + userId" tag="button" replace>User</router-link>
    <!--   拼接出来的效果 http://localhost:8080/profile?name=ltao&age=18-->
    <router-link :to="{path: '/profile', query:{name: 'ltao', age: 18}}" tag="button" replace>Profile</router-link>

    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>

    <br>-------------- 使用按钮来做router-link 但是会没有router-link相关的属性和class--------------<br>
    <button @click="homeClick()">首页</button>
    <button @click="secondPageClick()">第二个界面</button>
    <button @click="userClick()">用户</button>
    <button @click="profileClick()">档案</button>
    <br>-------------- router-view 占位, 页面需要显示在哪里 ,如果有多个router-view, 界面就会显示多次 --------------<br>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'ltao'
    }
  },
  methods: {
    homeClick() {
      //内置$router对象来操作router
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    secondPageClick() {
      // this.$router.push('/secondPage')
      this.$router.replace('/secondPage')
    },
    userClick() {
      this.$router.replace('/user/' + this.userId)
    },
    profileClick() {
      this.$router.replace({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19
        }
      })
    }
  },
  //Vue生命周期函数
  created() {
    //组建创建出来后
  },
  mounted() {

  },
  //界面发生刷新的时候执行
  updated() {

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

/*为自动生成的class设置点击显示红色字体*/
.active {
  color: red;
}
</style>
