<template>
    <h2>{{ product.categoryTitle }}</h2>
</template>

<script>  
import { defineComponent } from 'vue'

import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Content',
  data: () => ({
    product: {
      id: null,
      categoryTitle: '',
      products: []
    }
  }),
  methods: {
    ...mapGetters(['getCategories']),
  },
  mounted() {
    const product = this.getCategories().find(item => item.id === +this.$route.params.id)
    this.product = product
    console.log(product);
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
</style>
