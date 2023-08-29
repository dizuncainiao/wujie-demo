import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cloud-call'
  },
  {
    path: '/cloud-call',
    name: 'CloudCall',
    component: () => import('@/views/grand-son-app/CloudCall.vue')
  },
  {
    path: '/thing-phone',
    name: 'ThingPhone',
    component: () => import('@/views/grand-son-app/ThingPhone.vue')
  },
  {
    path: '/audio-play-demo',
    name: 'AudioPlayDemo',
    component: () => import('@/views/bc-demo/audio-play-demo/AudioPlayDemo.vue')
  },
  {
    path: '/chart-config-modal-demo',
    name: 'BcChartConfigModalDemo',
    component: () => import('@/views/bc-demo/chart-config-modal-demo/BcChartConfigModalDemo.vue')
  },
  {
    path: '/dial-bar-demo',
    name: 'DialBarDemo',
    component: () => import('@/views/bc-demo/dial-bar-demo/DialBarDemo.vue')
  },
  {
    path: '/download-demo',
    name: 'DownloadDemo',
    component: () => import('@/views/bc-demo/download-demo/DownloadDemo.vue')
  },
  {
    path: '/list-search-demo',
    name: 'ListSearchDemo',
    component: () => import('@/views/bc-demo/list-search-demo/ListSearchDemo.vue')
  },
  {
    path: '/table-util-demo',
    name: 'TableUtilDemo',
    component: () => import('@/views/bc-demo/table-util-demo/TableUtilDemo.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from)
    return savedPosition || { top: 0 }
  }
})
