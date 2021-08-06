<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center	"> Online Shop </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
  methods: {
    ...mapActions(['fetchData']),
  },
  mounted() {
    this.fetchData()
  },

  setup() {
    return {}
  },
})
</script>
