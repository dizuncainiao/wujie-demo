<script setup lang="ts">
import { BcLayout } from 'bdsaas-bc'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { menuData } from '@/utils/menu.ts'
import { childAppRouteReset } from '@/plugins/wujie-vue3'

defineOptions({
  name: 'App'
})
const router = useRouter()
const options = ref({
  menuData,
  showMenu: true
})

childAppRouteReset(router)
</script>

<template>
  <BcLayout :options="options as any">
    <router-view />
  </BcLayout>
</template>
