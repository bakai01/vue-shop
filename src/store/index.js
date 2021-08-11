import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import dataJson from '../api/data.json'
import namesJson from '../api/names.json'

export default store(function () {
  const Store = createStore({
    state: {
      categories: [{
        id: 0,
        categoryTitle: "",
        products: [{
          id: 0,
          amount: 0,
          price: 0,
          title: '',
          isIncrease: ''
        }]
      }
      ],
      currentProduct: {
        id: 0,
        categoryTitle: "",
        products: [{
          id: 0,
          amount: 0,
          price: 0,
          title: ''
        }]
      },
      cart: []
    },
    actions: {
      fetchData: () => {
        const data = JSON.parse(JSON.stringify(dataJson.Value.Goods))
        const names = JSON.parse(JSON.stringify(namesJson))

        const obj = {}
        const arr = []

        const rate = Math.floor(Math.random() * (81 - 20) + 20)

        data.forEach(item => {
          const product = {
            id: item.T,
            price: (item.C * rate).toFixed(2),
            amount: item.P,
            title: names[item.G].B[item.T].N
          }

          if (!obj[item.G]) {
            obj[item.G] = {
              id: item.G,
              categoryTitle: names[item.G].G,
              products: [product]
            }
          } else {
            obj[item.G].products.push(product)
          }
        })

        for (const key in obj) arr.push(obj[key])
        return arr
      },
      fetchFirstTimeData: async ({ dispatch, commit }) => {
        const res = await dispatch('fetchData')
        commit('setCategories', res)
      },
      fetchDataInterval: ({ commit, state, dispatch }) => {
        setInterval(async () => {
          const updatedCategories = await dispatch('fetchData')

          updatedCategories.forEach((category, index) => {
            category.products.forEach((product, productIndex) => {

              const isOutOfStock = state.categories[index].products[productIndex]

              if (product.price > isOutOfStock.price) product.isIncrease = true
              else product.isIncrease = false

              if (isOutOfStock.amount !== product.amount) {
                product.amount = isOutOfStock.amount
              }
            })
          })

          commit('setCategories', updatedCategories)
          commit('setCurrentProduct', state.currentProduct.id)
        }, 5000)
      },
      addProductToCart: ({ commit }, payload) => {
        commit('addProduct', payload.product)
        commit('cutProducts', {
          categoryId: payload.categoryId,
          productId: payload.productId,
          productAmount: payload.product.amount
        })
      },
      deleteProductFromCart: ({ commit }, payload) => {
        commit('deleteFromCart', payload)
      }
    },
    mutations: {
      setCategories: (state, payload) => state.categories = [...payload],
      setCurrentProduct: (state, payload) => {
        payload
          ? state.currentProduct = state.categories.find(product => product.id === payload)
          : state.currentProduct = {
            id: 0,
            categoryTitle: "",
            products: [{
              id: 0,
              amount: 0,
              price: 0,
              title: ''
            }]
          }
      },
      addProduct: (state, payload) => {
        let index = null
        const isExist = state.cart.find((product, indexProduct) => {
          if (product.id === payload.id) {
            index = indexProduct
            return product
          }
        })

        if (isExist) state.cart[index].amount += payload.amount
        else state.cart.push(payload)
      },
      cutProducts: (state, payload) => {
        state.categories.forEach(goods => {
          if (goods.id === payload.categoryId) {
            goods.products.forEach(product => {
              if (product.id === payload.productId) product.amount -= payload.productAmount
            })
          }
        })
      },
      deleteFromCart: (state, payload) => {
        state.cart = state.cart.filter(product => product.id !== payload)
      },
    },
    getters: {
      getCategories: state => state.categories,
      getCurrentProduct: state => state.currentProduct,
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
