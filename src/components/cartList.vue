<template>
  <a-table
      :rowKey="(record) =>  record.id"
      :row-selection="rowSelection"  :selections="true" :columns="columns" :data-source="cartData"></a-table>
  <div class="total-price" style="padding: 20px 0">
    <span>已选{{sumTotalCount || 0}}件商品,</span>
    <span>总价：{{sumTotalPrice || 0}}</span>
  </div>
  <a-button type="primary" danger @click="close()">结算</a-button>
</template>
<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import { useStore } from "vuex";
import {cartProductsProps} from '@/productProps'
const columns = [
  {
    title: '商品',
    dataIndex: 'title',
  },
  {
    title: '单价',
    dataIndex: 'price',
  },
  {
    title: '数量',
    dataIndex: 'count',
  },
  {
    title: '小计',
    dataIndex: 'totalPrice',
  },
];
export default defineComponent({
  setup() {
    const store = useStore()
    // 获取购物车数
    let cartData = computed(() => store.state.cart.cartProducts)
    // 数量
    let sumTotalCount = ref<number>(0)
    // 计算总价
    let sumTotalPrice = ref<number>(0)
    // 选中的商品
    let selectedProduct = ref<cartProductsProps[]>([])

    const rowSelection = {
      // 选择商品
      onChange: (selectedRowKeys: string[], selectedRows:cartProductsProps[]) => {
        sumTotalCount.value = selectedRows.reduce((sum:number, e:cartProductsProps) => sum + Number(e.count || 0), 0)
        sumTotalPrice.value = selectedRows.reduce((sum:number, e:cartProductsProps) => sum + Number(e.totalPrice.toFixed(2) || 0), 0)
        selectedProduct.value = selectedRows
      }
    };

    // 结算
    const close = () => {
      store.commit("cart/delCart",selectedProduct.value)
      sumTotalCount.value = 0
      sumTotalPrice.value = 0
    }



    return {
      cartData,
      columns,
      rowSelection,
      sumTotalCount,
      sumTotalPrice,
      close
    };
  },
});
</script>