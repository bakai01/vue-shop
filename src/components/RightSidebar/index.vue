<template>
  <q-drawer show-if-above side="right" bordered class="right-sidebar">
    <q-list>
      <q-item-label class="right-sidebar__title" header>
        Shopping cart
      </q-item-label>

      <q-item
        clickable
        exact
        v-ripple
        active-class="active"
      >
        <q-item-section>
          <q-item-label>qwe</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightSidebar',

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
