<template>
  <div class="home-container">
    <div class="products-header">
      <router-link :to="{name:'Home'}" tag="span" class="products-text">商品列表</router-link>
      <router-link :to="{name:'Cart'}" tag="span" class="cart-button">
      <a-badge class="tips-count" :count="totalCount"></a-badge>
      <a-button type="primary">我的购物车</a-button></router-link>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, computed} from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  name: "header",
  setup(){
    const store = useStore()
    const totalCount = computed(() => store.getters["cart/totalCount"])
    return {
      totalCount
    }
  }
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
