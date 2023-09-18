<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view></router-view>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'App',
  setup() {
    const siteData = reactive({
      title: `E-manager`,
      description: `My beautiful website`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  }
}
</script>