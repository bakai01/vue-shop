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
      <q-item-label class="right-sidebar__sum">
        Общая стоимость: <span>{{ getTotalCost }} ₽</span>
      </q-item-label>
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
    ...mapGetters(['getCart', 'getTotalCost']),
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.right-sidebar {
  border-left: 1px solid $grey-6;
  padding-bottom: 30px;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &__sum {
    font-size: .9rem;
    font-weight: 500;
    padding-left: 5px;
    color: #808080;

    span {
      color: #d1a000;
      font-weight: 400;
      font-size: 1rem;
    }
  }
}
</style>
