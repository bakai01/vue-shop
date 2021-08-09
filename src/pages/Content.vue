<template>
  <q-list bordered class="rounded-borders">
    <q-item-label header>{{ getCurrentProduct.categoryTitle }}</q-item-label>

    <ProductItem
      v-for="product in getCurrentProduct.products"
      :key="product.id"
      :product="product"
    />
    
  </q-list>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from 'vuex'

import ProductItem from 'components/ProductItem'

export default defineComponent({
  name: "Content",
  components: { ProductItem },
  computed: {
    ...mapGetters(['getCurrentProduct'])
  },
  data: () => ({}),
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
