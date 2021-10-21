<template>
  <div class="products-card">
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="../assets/e7caa50e14ea52b3.jpeg" />
    </template>
    <a-card-meta title="Apple 苹果 iPhone 13">
      <template #description>
        <p>¥7999.9</p>
        <a-button type="primary">加入购物车</a-button>
      </template>
    </a-card-meta>
  </a-card>

    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" src="../assets/mate.jpeg" />
      </template>
      <a-card-meta title="华为 Mate40 5G 手机">
        <template #description>
          <p>¥7999.9</p>
          <a-button type="primary">加入购物车</a-button>
        </template>
      </a-card-meta>
    </a-card>

    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" src="../assets/find.jpeg" />
      </template>
      <a-card-meta title="OPPO Find X3 Pro">
        <template #description>
          <p>¥7999.9</p>
          <a-button type="primary">加入购物车</a-button>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "productsList"
})
</script>

<style lang="scss" scoped>
.products-card{
  display: flex;
  justify-content: space-evenly;
}
</style>