export const appRouter = {
  development: {
    BiChart: 'http://127.0.0.1:5676/',
    BDSaasBc: 'http://127.0.0.1:5678/',
    DashBoard: 'http://127.0.0.1:5818/basic-bar-vertical-demo'
  },
  demo: {
    BiChart: 'http://127.0.0.1:5676/',
    BDSaasBc: 'http://127.0.0.1:5678/',
    DashBoard: 'http://127.0.0.1:5818/basic-bar-vertical-demo'
  },
  beta: {
    BiChart: 'http://127.0.0.1:5676/',
    BDSaasBc: 'http://127.0.0.1:5678/',
    DashBoard: 'http://127.0.0.1:5818/basic-bar-vertical-demo'
  },
  production: {
    BiChart: 'http://127.0.0.1:5676/',
    BDSaasBc: 'http://127.0.0.1:5678/',
    DashBoard: 'http://127.0.0.1:5818/basic-bar-vertical-demo'
  }
}

export type ModeType = keyof typeof appRouter

export type RouterType = keyof (typeof appRouter)['development']

export const useAppRouter = (appType: RouterType) => {
  const env = import.meta.env
  console.log(env.MODE, 'env env env env env ')
  return appRouter[env.MODE as ModeType][appType]
}
