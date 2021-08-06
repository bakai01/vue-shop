<template>
  <q-item
    clickable
    exact
    v-ripple
    active-class="active"
    :to="`/content/${id}`"
  >
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true }
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.active {
  color: #000;
  background-color: rgba(50, 71, 167, 0.226);
}
</style>
