import { Module } from 'vuex'
import {cartProductsProps,productsProps} from '@/productProps'

const cartProducts:cartProductsProps[] = JSON.parse(<string>localStorage.getItem('cartProducts')) || []

interface stateProps{
    cartProducts:cartProductsProps[]
}

const cart = {
    namespaced: true,
    state:{
        cartProducts: cartProducts
    },
    getters:{
        totalCount : (state:stateProps) => {
            return state.cartProducts.reduce((sum, e) => sum + Number(e.count || 0), 0)
        }
    },
    mutations: {
        addToCart: (state:stateProps, product: productsProps) => {
            const findProducts = state.cartProducts.find(item => item.id === product.id)
            // 有该商品时把商品数量加1，选中，计算小计
            // 没有商品时把该商品添加到数组中，并增加count，isChecked，totalPrice
            if (findProducts) {
                findProducts.count++
                findProducts.isChecked = true
                findProducts.totalPrice = Number((findProducts.count * findProducts.price).toFixed(2))
            } else {
                state.cartProducts = [{...product,totalPrice:product.price,count:1,isChecked: true},...state.cartProducts]
            }
            // 购物车数据存储到本地
            window.localStorage.setItem("cartProducts",JSON.stringify(state.cartProducts))
        },
        // 删除选中删除
        delCart:(state:stateProps, selectedProduct: productsProps[]) => {
            state.cartProducts = state.cartProducts.filter(item => !selectedProduct.some(ele=>ele.id===item.id))
            window.localStorage.setItem("cartProducts",JSON.stringify(state.cartProducts))
        }
    }
}

export default cart