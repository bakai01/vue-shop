
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Main.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
