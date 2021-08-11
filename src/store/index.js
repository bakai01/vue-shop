import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import dataJson from '../api/data.json'
import namesJson from '../api/names.json'

const data = JSON.parse(JSON.stringify(dataJson.Value.Goods))
const names = JSON.parse(JSON.stringify(namesJson))

export default store(function () {
  const Store = createStore({
    state: {
      categories: [{
        id: 0,
        categoryTitle: ""
      }],
      goods: [{
        categoryId: 0,
        productId: 0,
        price: 0,
        amount: 0,
        productName: ''
      }],
      currentGoods: [],
      cart: []
    },
    actions: {
      fetchCategories: () => {
        const categories = []

        data.forEach(item => {
          const category = {
            id: item.G,
            categoryTitle: names[item.G].G
          }
          if (!categories.find(item => item.id === category.id)) categories.push(category)
        })

        return categories
      },
      fetchGoods: () => {
        const goods = []
        const rate = Math.floor(Math.random() * (81 - 20) + 20)

        data.forEach(item => {
          const product = {
            categoryId: item.G,
            productId: item.T,
            price: (item.C * rate).toFixed(2),
            amount: item.P,
            productName: names[item.G].B[item.T].N,
            rate,
            isIncrease: ''
          }

          goods.push(product)
        })
        return goods
      },
      fetchData: async ({ dispatch, commit }) => {
        const categories = await dispatch('fetchCategories')
        const goods = await dispatch('fetchGoods')

        commit('setCategories', categories)
        commit('setGoods', goods)
      },
      fetchDataInterval: ({ commit, state, dispatch }) => {
        setInterval(async () => {
          let goods = await dispatch('fetchGoods')

          if (goods[0].rate > state.goods[0].rate) {
            goods = goods.map(product => {
              return { ...product, isIncrease: 'increase' }
            })
          }
          else if (goods[0].rate <= state.goods[0].rate) {
            goods = goods.map(product => {
              return { ...product, isIncrease: 'decrease' }
            })
          }

          commit('setGoods', goods)
          state.currentGoods.length && commit('setCurrentGoods', state.currentGoods[0].categoryId)
        }, 5000)
      },
      addProductToCart: ({ commit }, payload) => {
        commit('addProduct', payload)
        commit('cutProductFromStore', {
          productId: payload.productId,
          amount: payload.amount
        })
      },
      deleteProductFromCart: ({ commit }, payload) => {
        commit('deleteFromCart', payload.id)
        commit('increaseAmountGoods', payload)
      },
      reduceQuantityGoodsCart: ({ commit, state, dispatch }, payload) => {
        const productIntoCart = state.cart.find(product => product.productId === payload.id)
        if (productIntoCart.amount === 1) dispatch('deleteProductFromCart', payload)
        else {
          commit('cutProductFromCart', payload)
          commit('increaseAmountGoods', payload)
        }
      }
    },
    mutations: {
      setCategories: (state, payload) => state.categories = [...payload],
      setGoods: (state, payload) => state.goods = [...payload],
      setCurrentGoods: (state, payload) => {
        state.currentGoods = state.goods.filter(product => product.categoryId === payload)
      },
      addProduct: (state, payload) => {
        let index = null
        const isExist = state.cart.find((product, indexProduct) => {
          if (product.productId === payload.productId) {
            index = indexProduct
            return product
          }
        })

        if (isExist) state.cart[index].amount += payload.amount
        else state.cart.push(payload)
      },
      cutProductFromStore: (state, payload) => {
        state.goods.forEach(product => {
          if (product.productId === payload.productId) {
            product.amount -= payload.amount
          }
        })
      },
      cutProductFromCart: (state, payload) => {
        state.cart.forEach(product => {
          if (product.productId === payload.id) product.amount -= payload.amount
        })
      },
      deleteFromCart: (state, payload) => {
        state.cart = state.cart.filter(product => product.productId !== payload)
      },
      increaseAmountGoods: (state, payload) => {
        state.goods.forEach(product => {
          if (product.productId === payload.id) product.amount += payload.amount
        })
      }
    },
    getters: {
      getCategories: state => state.categories,
      getCurrentGoods: state => state.currentGoods,
      getCart: state => state.cart,
      getTotalCost: state => {
        let cost = 0
        state.cart.forEach(product => cost += product.price * product.amount)
        return Math.round(cost).toFixed(2)
      }
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
