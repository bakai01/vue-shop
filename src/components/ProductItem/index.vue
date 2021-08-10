<template>
  <q-item class="content__item">
    <q-item-section class="content__item-title">
      <q-item-label>{{ product.title }}</q-item-label>
    </q-item-section>

    <q-item-section class="content__item-price" side>
      <q-item-label style="margin-right: 5px">
        {{ product.amount }} шт.
      </q-item-label>
      <input
        type="number"
        class="content__item-price__input"
        v-model="inputValue"
        @input="onChangeInputValue"
        :disabled="product.amount ? false : true"
      />
      <q-item-label class="content__item-price__text" style="margin-left: 5px">
        {{ product.price }} ₽
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          class="gt-xs"
          size="12px"
          flat
          dense
          round
          icon="add"
          :disabled="product.amount ? false : true"
          @click="onAddProduct"
          style="color: rgb(40, 40, 40)"
        />
      </div>
    </q-item-section>
  </q-item>

  <q-separator spaced />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from 'vuex';

export default defineComponent({
  name: "ProductItem",
  data: () => ({
    inputValue: 1
  }),
  props: {
    product: { type: Object, default: () => ({}) },
  },
  methods: {
    ...mapActions(['addProductToCart']),
    onAddProduct() {
      this.addProductToCart({
        product: {
          id: this.product.id,
          price: this.product.price,
          title: this.product.title,
          amount: +this.inputValue
        },
        categoryId: +this.$router.currentRoute.value.params?.id,
        productId: this.product.id,
      })
      this.inputValue = 1
    },
    onChangeInputValue(e) {
      if (e.target.value > this.product.amount) this.inputValue = this.product.amount
      else if (e.target.value <= 0) this.inputValue = 1
      else this.inputValue = e.target.value
    }
  },
  mounted() {
    // this.inputValue = this.product.amount
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
    flex: 1;
    width: 100%;
  }

  &-price {
    display: flex;
    flex-direction: row;
    align-items: center !important;
    justify-content: flex-end;
    flex-wrap: nowrap;

    &__input {
      padding: 10px;
      background-color: rgb(228, 228, 228);
      border: 1px solid darken(rgb(228, 228, 228), 11);
      border-radius: 5px;
      outline: none;
    }

    &__text {
      white-space: nowrap;
    }
  }
}
</style>
