<script setup lang="ts">
import WuJieVue from 'wujie-vue3'
import { computed } from 'vue'

const wuJieOptions = computed(() => ({
  width: '100%',
  height: '100%',
  name: 'CloudCall',
  url: 'http://127.0.0.1:5818/basic-line-area-stack-demo',
  sync: true,
  // alive: true,
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
