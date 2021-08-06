<template>
  <q-header bordered class="header text-white">
    <q-toolbar>
      <q-toolbar-title @click="$router.push(`/`).catch()" class="absolute-center header__title"> Online Shop </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>  
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.header__title {
  cursor: pointer
}
</style>
