import WuJieVue from 'wujie-vue3'
import type { Router } from 'vue-router'

const { bus } = WuJieVue

// 子应用路由重置：适用于将设为保活模式的子应用的路由重置为第一个路由
export function childAppRouteReset(router: Router) {
  // 子应用路由重定向
  bus.$on('redirectDefault', () => {
    if (router.currentRoute.value.name !== 'CloudCall') {
      router.push('/cloud-call')
    }
  })
}
