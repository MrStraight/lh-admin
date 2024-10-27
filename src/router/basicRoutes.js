export const basicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录'
    }
  },

  {
    path: '/',
    name: 'Layout',
    component: () => import('@/Layout/mainLayout.vue'),
    children: [
      // {
      //   path: '',
      //   name: '名字1',
      //   component: () => import('@/views/main.vue')
      // },
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]
