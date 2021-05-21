
const routes = [
  {
    path: '/',
    component: () => import('layouts/indexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/exemplo', component: () => import('src/pages/Login.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/indexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
