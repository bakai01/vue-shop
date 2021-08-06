<template>
    <h2>Books</h2>
    <button @click="getData">OK</button>
</template>

<script>  
import { defineComponent } from 'vue'

import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Content',
  methods: {
    ...mapGetters(['getCategories']),
    getData() {
      const product = this.getCategories().find(item => item.id === this.$route.params.id)
      console.log(product)
    }
  },
  mounted() {
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
</style>
