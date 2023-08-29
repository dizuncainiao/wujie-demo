export const appRouter = {
  development: {
    BiCHart: 'http://127.0.0.1:5676/',
    BDSaasBc: 'http://127.0.0.1:5678/',
    DashBoard: 'http://127.0.0.1:5818/basic-bar-vertical-demo',
  }
  // demo: {
  //   BiCHart: 'http://127.0.0.1:5676/'
  // },
  // production: {
  //   BiCHart: 'http://127.0.0.1:5676/'
  // }
}

export type ModeType = keyof typeof appRouter

export type RouterType = keyof (typeof appRouter)['development']

export const useAppRouter = (appType: RouterType) => {
  const env = import.meta.env
  return appRouter[env.MODE as ModeType][appType]
}
