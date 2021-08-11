<template>
  <q-list bordered class="rounded-borders" style="margin-top: 25px;">

    <ProductItem
      v-for="product in getCurrentGoods"
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
    ...mapGetters(['getCurrentGoods'])
  },
  data: () => ({}),
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
