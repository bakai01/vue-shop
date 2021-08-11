<template>
  <q-item class="content__item">
    <q-item-section class="content__item-title">
      <q-item-label>{{ product.productName }}</q-item-label>
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
      <q-item-label
        class="content__item-price__text"
        style="margin-left: 5px"
        :class="{
          red: product.isIncrease === 'increase',
          green: product.isIncrease === 'decrease',
        }"
      >
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
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'ProductItem',
  data: () => ({
    inputValue: 1,
  }),
  props: {
    product: { type: Object, default: () => ({}) },
  },
  watch: {
    inputValue(newValue, oldValue) {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }
  },
  methods: {
    ...mapActions(['addProductToCart']),
    onAddProduct() {
      this.addProductToCart({
        categoryId: this.product.categoryId,
        productId: this.product.productId,
        price: this.product.price,
        usdPrice: this.product.usdPrice,
        amount: +this.inputValue,
        productName: this.product.productName,
      })
      this.inputValue = 1
    },
    onChangeInputValue(e) {
      if (e.target.value > this.product.amount)
        this.inputValue = this.product.amount
      else if (e.target.value <= 0) this.inputValue = 1
      else this.inputValue = e.target.value
    },
  },
  setup() {
    return {}
  },
})
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
    &__text.green {
      color: green;
    }

    &__text.red {
      color: red;
    }
  }
}
</style>
