import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import data from '../api/data.json'

export default store(function () {
  const Store = createStore({
    state: {},
    actions: {
      fetchData: () => {
        console.log(data)
      }
    },
    mutations: {},
    getters: {},
    strict: process.env.DEBUGGING
  })

  return Store
})
