<template>
  <div class="view-body">
    <div class="content-body">
      <a class="content-item" v-for="good in goods" :key="good" :style="{backgroundImage: `url(${good.imgUrl})`}">
        <a class="goods-title">{{ good.title }}</a>
        <p class="goods-price">￥{{ good.price }}</p>
      </a>
    </div>
    <Paging class="paging-bar" :total="total" :currentPage="page" :pageSize="size" @goto-page="gotoPage"
            @change-page-size="changePageSize"/>
  </div>
</template>

<script>
import Paging from "@/layout/home/Paging";
import service from "@/service"
import {ElLoading, ElMessage} from 'element-plus'

export default {
  name: "ListAndPaging",
  data() {
    return {
      goods: [],
      page: 1,
      size: 9,
      total: 0,
    }
  },
  methods: {
    gotoPage(page) {
      this.page = page
      this.getData()
    },
    changePageSize(pageSize) {
      this.size = pageSize
      this.page = 1
      this.getData()
    },
    getData() {
      let loadingInstance = ElLoading.service({
        fullscreen: false,
        target: '.view-body'
      })
      service.goodsList(this.page, this.size)
        .then(resolveData => {
          this.goods = resolveData.data
          this.total = resolveData.total
        })
        .catch(err => {
          ElMessage.error('Service is unable, Please retry...')
        })
        .finally(() => {
          loadingInstance.close();
        })
    }
  },
  components: {
    Paging
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.view-body {
  width: 100%;
  height: 100%;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.content-body {
  width: 1100px;
  /*flex: 1;*/
  /*margin: auto;*/
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
}

.content-item {
  width: 350px;
  height: 220px;
  background-color: #f2f2f2;
  /*margin-top: 10px;*/
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #f6f6f6;
}

.goods-title {
  font-size: 23px;
  padding-bottom: 10px;
}

.goods-price {
  color: red;
  margin: 0;
}

.paging-bar {
}

</style>
