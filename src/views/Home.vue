<template>
  <div class="home-container">
  <div class="products-header">
    <span class="products-text">商品列表</span>
    <span class="cart-button">
      <a-badge class="tips-count" :count="5"></a-badge>
      <a-button type="primary">我的购物车</a-button></span>
  </div>
  </div>
  <productsList />
</template>

<script lang="ts">


import { defineComponent } from "vue";
import productsList from "@/components/productsList.vue"
export default defineComponent({
  name: "Home",
  components: {
    productsList
  },
});
</script>

<style lang="scss" scoped>
.home-container{
  .products-header{
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .products-text{
      font-size: 20px;
      color: #333;
    }
    .cart-button{
      position: relative;
      .tips-count{
        position: absolute;
        right: -10px;
        top: -12px;
      }
    }

  }
}

</style>
