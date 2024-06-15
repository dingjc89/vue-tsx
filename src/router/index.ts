import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id?',
      components: {
        default: () => import('@/views/Home.vue'),
        about: () => import('@/views/About.vue')
      },
      props: {
        default: (route: any) => {
          return { query: route.query.q, id: route.params.id }
        },
        about: true
      }
    },
    {
      path: '/home',
      name: 'home',
      // redirect: '/',
      redirect: (to: any) => {
        return '/'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/user/:id',
      component: () => import('@/views/User.vue'),
      props: true
    }
  ]
})

export default router
