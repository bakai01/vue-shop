<template>
  <q-drawer class="whatever" show-if-above side="left" bordered>
    <q-list>
      <q-item-label header> Categories </q-item-label>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LeftSidebar',

  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped></style>
