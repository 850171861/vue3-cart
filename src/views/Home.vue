<template>
  <productsList />
</template>

<script lang="ts">


import {defineComponent} from "vue";
import productsList from "@/components/productsList.vue"
export default defineComponent({
  name: "Home",
  components: {
    productsList
  }
})
</script>


