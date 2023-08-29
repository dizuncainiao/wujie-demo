<script setup lang="ts">
import { BcLayout } from 'bdsaas-bc'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { childAppRouteReset } from '@/plugins/wujie-vue3'

defineOptions({
  name: 'App'
})

const route = useRoute()
const menuData = [
  {
    groupName: '子应用',
    showGroup: true,
    children: [
      {
        icon: 'icon-things-icon-2',
        title: 'BI图表',
        routeName: 'BiCHart',
        showItem: true,
        authKeys: []
      },
      {
        icon: 'icon-things-icon-2',
        title: '业务组件',
        routeName: 'BDSaasBc',
        showItem: true,
        authKeys: []
      },
      {
        icon: 'icon-things-icon-2',
        title: '3.0控制台',
        routeName: 'DashBoard',
        showItem: true,
        authKeys: []
      }
    ]
  },
  {
    groupName: '设置中心',
    showGroup: true,
    children: [
      {
        icon: 'icon-things-icon-5',
        title: '个人设置',
        routeName: 'CallRecord',
        showItem: true,
        authKeys: [],
        notice: true
      }
    ]
  }
]
const breadcrumb = ref('')
const options = ref({
  menuData,
  showMenu: true,
  beforeJump: (to: any, from: any, next: any) => {
    console.log('beforeJump', to)

    breadcrumb.value = to.title

    // if (to.routeName === 'BDSaasBc') {
    //   next(false)
    //   // fixme 解决方案一：解决子应用重建模式其嵌套子应用加载空白问题（实际原理跟刷新页面差不多，只是需要监听每个嵌套子应用的路由进行处理）
    //   location.href = window.origin + '/bdsaas-bc?BDSaasBc=/#/cloud-call'
    //   return
    // }

    if (to.routeName === 'BDSaasBc') {
      next()
      // fixme 解决方案二：解决子应用重建模式其嵌套子应用加载空白问题（子应用设为保活后，嵌套子应用就加载正常了，重新进入子应用时将子应用的路由重置为第一个）
      childAppRouteReset()
      return
    }

    next()
  }
})
watchEffect(() => {
  breadcrumb.value = route.meta.title
})
</script>

<template>
  <BcLayout :options="options as any">
    <header>路由导航：{{ breadcrumb }}</header>
    <router-view />
  </BcLayout>
</template>

<style>
header {
  padding-bottom: 30px;
  font-size: 20px;
}
</style>
