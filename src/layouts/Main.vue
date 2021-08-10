<template>
  <q-layout view="hHh lpR fFf">
    <Header />

    <LeftSidebar />

    <RightSidebar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import { defineComponent } from 'vue'

import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import Header from '../components/Header'

export default defineComponent({
  name: 'Main',
  components: { LeftSidebar, Header, RightSidebar },
  methods: {
    ...mapActions(['fetchFirstTimeData', 'fetchDataInterval']),
  },
  mounted() {
    this.fetchFirstTimeData()
    this.fetchDataInterval()
  },

  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.header {
  background: $grey-8;
}
</style>
