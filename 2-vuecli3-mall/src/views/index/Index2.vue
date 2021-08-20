<template>
  <Swiper :banners="banner"/>
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
body {
  width: 750px;
}
</style>
