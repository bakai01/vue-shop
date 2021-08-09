<template>
  <q-drawer class="left-sidebar" show-if-above side="left" bordered>
    <q-list>
      <q-item-label header class="left-sidebar__title">Categories</q-item-label>

      <SidebarItem
        v-for="category in getCategories"
        :key="category.id"
        :id="category.id"
        :title="category.categoryTitle"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

import SidebarItem from './SidebarItem'

export default defineComponent({
  name: 'LeftSidebar',
  components: { SidebarItem },
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods: {
    ...mapMutations(['setCurrentProduct']),
  },
  watch: {
    $route(to) {
      this.setCurrentProduct(+to.params?.id)
    }
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.left-sidebar {
  border-right: 1px solid $grey-6;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
</style>
