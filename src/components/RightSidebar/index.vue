<template>
  <q-drawer show-if-above side="right" bordered class="right-sidebar">
    <q-list>
      <q-item-label class="right-sidebar__title" header>
        Shopping cart
      </q-item-label>
      <RightSidebarItem
        v-for="product in getCart"
        :key="product.id"
        :product="product"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import RightSidebarItem from './RightSidebarItem'

export default defineComponent({
  name: 'RightSidebar',
  components: { RightSidebarItem },
  computed: {
    ...mapGetters(['getCart']),
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.right-sidebar {
  border-left: 1px solid $grey-6;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
</style>
