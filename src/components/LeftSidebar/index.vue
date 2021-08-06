<template>
  <q-drawer class="left-sidebar" show-if-above side="left" bordered>
    <q-list>
      <q-item-label header class="left-sidebar__title">Categories</q-item-label>
      <q-item
        v-for="category in getCategories"
        :key="category.id"
        clickable
        exact
        v-ripple
        active-class="active"
        @click="$router.push(`/content/${category.id}`).catch()"
      >
        <q-item-section>
          <q-item-label>{{ category.categoryTitle }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'LeftSidebar',
  computed: {
    ...mapGetters(['getCategories'])
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
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>
