<template>
  <q-list bordered class="rounded-borders">
    <q-item-label header>Friends</q-item-label>

    <ProductItem />
    
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

import ProductItem from 'components/ProductItem'

export default defineComponent({
  name: "Content",
  components: { ProductItem },
  data: () => ({}),
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
