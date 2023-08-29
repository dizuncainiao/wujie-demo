<script setup lang="ts">
import WuJieVue from 'wujie-vue3'
import { computed } from 'vue'
import { useAppRouter } from '@/plugins/wujie-vue3/config'

const wuJieOptions = computed(() => ({
  width: '100%',
  height: '100%',
  name: 'DashBoard',
  url: useAppRouter('DashBoard'),
  sync: true,
  fetch: fetch,
  props: {},
  beforeLoad() {},
  beforeMount() {},
  afterMount() {},
  beforeUnmount() {},
  afterUnmount() {}
}))
</script>

<template>
  <WuJieVue v-bind="wuJieOptions" />
</template>

<style lang="less"></style>
