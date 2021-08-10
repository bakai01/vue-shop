<template>
  <q-item>
    <q-item-section>
      <q-item-label>{{ product.title }}</q-item-label>
      <q-item-label caption>{{ product.amount }} шт.</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ product.price }} ₽</q-item-label>
      <q-btn
        class="right-sidebar__delete-btn"
        size="12px"
        flat
        dense
        round
        icon="delete"
      />
    </q-item-section>
  </q-item>

  <q-separator spaced inset />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightSidebarItem',
  props: { product: { type: Object, default: () => ({}) } },
  setup() { 
    return {}
  },
})
</script>

<style lang="scss">
.right-sidebar__delete-btn {
  color: rgb(53, 53, 53);
  transition: all 0.1s ease-in;

  &:hover {
    background-color: lighten(rgb(40, 40, 40), 73);
  }
}
</style>
