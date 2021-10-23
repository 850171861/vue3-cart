<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import header from "@/components/header.vue"
export default defineComponent({
  components:{
    Header:header
  }

});
</script>

<style lang="scss">

</style>
