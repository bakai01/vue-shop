<template>
  <q-item class="content__item">
    <q-item-section class="content__item-title">
      <q-item-label>{{ product.title }}</q-item-label>
    </q-item-section>

    <q-item-section class="content__item-price" side>
      <q-input class="content__item-price__input" type="number" filled />
      <q-item-label style="margin-left: 5px"
        >{{ product.price }} ₽</q-item-label
      >
    </q-item-section>

    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="add" />
      </div>
    </q-item-section>
  </q-item>

  <q-separator spaced />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductItem",
  data: () => ({}),
  props: {
    product: { type: Object, default: () => ({}) },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.content__item {
  align-items: center;

  &-title {
    flex: 1 1 auto;
    width: 100%;
  }

  &-price {
    display: flex;
    flex-direction: row;
    align-items: center !important;
    justify-content: flex-end;

    &__input {
      width: 50%;
    }
  }
}
</style>
