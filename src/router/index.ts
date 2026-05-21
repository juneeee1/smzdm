import { createRouter, createWebHashHistory } from 'vue-router'
import { getSession } from '@/utils/storage'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: () => {
        const user = getSession()
        return user ? '/dashboard' : '/login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { guest: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, _from, next) => {
  const user = getSession()
  if (to.meta.requiresAuth && !user) {
    next('/login')
  } else if (to.meta.guest && user) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
