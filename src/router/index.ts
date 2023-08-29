import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/bi-chart'
    },
    {
      path: '/bi-chart',
      name: 'BiCHart',
      meta: {
        title: 'BI图表',
      },
      component: () => import('../views/BiCHart.vue')
    },
    {
      path: '/bdsaas-bc',
      name: 'BDSaasBc',
      meta: {
        title: '业务组件',
      },
      component: () => import('../views/BDSaasBc.vue')
    },
    {
      path: '/dash-board',
      name: 'DashBoard',
      meta: {
        title: '3.0控制台',
      },
      component: () => import('../views/DashBoard.vue')
    }
  ]
})

export default router
