<template>
  <div class="main-view-body">
    <div class="index-header">
      <div class="header-logo"></div>
    </div>
    <div class="index-base">
      <ul>
        <li v-for="item in indexBaseData">
          <el-dropdown>
          <span class="el-dropdown-link">{{ item.title }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <template #dropdown>
              <el-dropdown-menu class="el-dropdown-menu">
                <el-dropdown-item v-for="i in item.dropDown">{{ i.title }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <div>
      <el-carousel :interval="100000" arrow="always" ref="cardShow">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <button @click="next2">切换下一张</button>
    </div>
    <!--    <Swiper :banners="banner"/>-->
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper";

export default {
  name: "Index",
  data() {
    return {
      indexBaseData: [
        {title: '美食1', dropDown: [{title: '黄金糕'}, {title: '狮子头'}, {title: '螺蛳粉'}, {title: '双皮奶'}, {title: '蚵仔煎'}]},
        {title: '美食2', dropDown: [{title: '黄金糕'}, {title: '狮子头'}, {title: '螺蛳粉'}, {title: '双皮奶'}, {title: '蚵仔煎'}]},
        {title: '美食3', dropDown: [{title: '黄金糕'}, {title: '狮子头'}, {title: '螺蛳粉'}, {title: '双皮奶'}, {title: '蚵仔煎'}]},
      ],
      banner: [
        {
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          "link": "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          "title": "焕新女装节",
        },
        {
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
          "link": "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
          "title": "入秋穿搭指南",
        },
        {
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
          "link": "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "title": "秋季护肤大作战",
        },
        {
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
          "link": "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
          "title": "流行抢先一步",
        }
      ]
    }
  },
  methods: {
    next2() {
      this.$refs.cardShow.next()
    }
  },
  components: {
    Swiper
  }
}
</script>

<style>
.index-base ul li div {
  font-size: 15px;
  width: 100%;
  text-align: center;
}

.el-dropdown-link {
  color: white !important;
}
</style>

<style scoped>
.index-header {
  min-width: 980px;
  max-width: 1180px;
  background-color: #42b983;
  height: 80px;
  margin: 0 auto;
}

.header-logo {
  display: block;
  width: 203px;
  height: 100%;
  background-color: #cccccc;
}

.index-base {
  width: 100%;
  height: 40px;
  background-color: #2577e3;
  margin: 0 auto;
}

.index-base ul {
  min-width: 980px;
  max-width: 1180px;
  margin: 0 auto;
  height: 100%;
  display: flex;
}

.index-base ul li {
  display: inline-block;
  margin: auto 0;
  float: left;
  /*flex: 1;*/
  width: 80px;
  box-sizing: border-box;
}

.index-base ul li:nth-child(n+2) {
  border-left: 1px solid #409EFF;
}

.el-dropdown-menu {
  display: flex;
}

.el-dropdown-menu__item {
  flex: 1;
  flex-direction: row;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

</style>
