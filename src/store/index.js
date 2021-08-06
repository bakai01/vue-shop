import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import dataJson from '../api/data.json'
import namesJson from '../api/names.json'

export default store(function () {
  const Store = createStore({
    state: {
      categories: []
    },
    actions: {
      fetchData: ({ commit }) => {
        const data = JSON.parse(JSON.stringify(dataJson.Value.Goods))
        const names = JSON.parse(JSON.stringify(namesJson))

        const obj = {}
        const arr = []

        for (const key in names) {
          const products = []

          for (const index in names[key].B) {
            let qop = data.find(product => product.T === +index)

            qop && products.push({
              id: qop.T,
              price: qop.C,
              amount: qop.P,
              title: names[key].B[index].N,
            })
          }

          if (!obj[key] && products.length) {
            obj[key] = {
              id: key,
              categoryTitle: names[key].G,
              products
            }
          }
        }

        for (const key in obj) arr.push(obj[key])
        commit('setCategories', arr)
      }
    },
    mutations: {
      setCategories: (state, payload) => state.categories = [...payload]
    },
    getters: {},
    strict: process.env.DEBUGGING
  })

  return Store
})
