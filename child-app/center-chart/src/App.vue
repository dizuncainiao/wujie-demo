<script setup lang="ts">
import { BcLayout } from 'bdsaas-bc'
import { ref } from 'vue'

defineOptions({
  name: 'App'
})
const options = ref({
  showMenu: false
})
</script>

<template>
  <BcLayout class="center-chart-bc-layout" :options="options as any">
    <router-view />
  </BcLayout>
</template>

<style>
.center-chart-bc-layout .bc-layout-container {
  padding: 0;
}
</style>
