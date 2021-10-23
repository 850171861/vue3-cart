<template>
  <div class="products-card">
  <a-card hoverable style="width: 240px" v-for="item in productsData" :key="item.id">
    <template #cover>
      <img alt="example" :src="item.url" />
    </template>
    <a-card-meta :title="item.title">
      <template #description>
        <p>¥{{item.price}}</p>
        <a-button type="primary" @click="addToCart(item)">加入购物车</a-button>
      </template>
    </a-card-meta>
  </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent,onMounted,ref } from "vue";
import { useStore } from "vuex";
import {productsProps,AxiosResponseProps} from '@/productProps'
import axios from 'axios';
export default defineComponent({
  name: "productsList",
  setup: function () {
    const store = useStore()
    // 获取商品数据
    let productsData = ref<productsProps[]>([])
    const getProductsData = async () => {
      const {data} = await axios.get<AxiosResponseProps>('/product.json')
      if (data.code !== 0) return alert("请求错误")
      productsData.value = data.data
    }

    const addToCart = (item:productsProps) => {
      store.commit("cart/addToCart",item)
    }
    onMounted(() => {
      getProductsData()
    })

    return {
      productsData,
      addToCart
    }
  }
})
</script>

<style lang="scss" scoped>
.products-card{
  display: flex;
  justify-content: space-evenly;
}
</style>