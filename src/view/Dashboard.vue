<template>
  <div class="w-full h-full flex">
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
}
</script>