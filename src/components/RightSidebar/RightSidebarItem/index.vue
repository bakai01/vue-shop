<template>
  <q-item>
    <q-item-section>
      <q-item-label>{{ product.productName }}</q-item-label>
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
        @click="onDelete(product)"
      />
      <q-btn
        class="right-sidebar__minus-btn"
        size="12px"
        flat
        dense
        round
        icon="remove"
        @click="onMinus(product.productId)"
      />
    </q-item-section>
  </q-item>

  <q-separator spaced inset />
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'RightSidebarItem',
  methods: {
    ...mapActions(['deleteProductFromCart', 'reduceQuantityGoodsCart']),
    onDelete(product) {
      this.deleteProductFromCart({
        id: product.productId,
        amount: product.amount
      })
    },
    onMinus(id) {
      this.reduceQuantityGoodsCart({ id, amount: 1 })
    }
  },
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

.right-sidebar__minus-btn {
  color: rgb(53, 53, 53);
  transition: all 0.1s ease-in;

  &:hover {
    background-color: lighten(rgb(40, 40, 40), 73);
  }
}
</style>
