
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Main.vue'),
    children: [
      { path: '/content/:id', component: () => import('src/pages/Content.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
