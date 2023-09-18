import { createRouter, createWebHistory } from "vue-router"
import { useCookies } from "vue3-cookies";
import { useApiget } from '@/common/fetch'
import Vue from 'vue';

const BACKEND_URL = process.env.VUE_APP_BACKEND_URL
const { cookies } = useCookies();

const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/login',
    component: () => import('@/view/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/view/Dashboard.vue'),
    redirect: { name: 'homepage' },
    children: [
      {
        path: '',
        name: 'homepage',
        component: () => import('@/components/Homepage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path != '/login') {
    if(checkToken()) { 
        next();
    } else {
        next('login');
    }
  } else {
      next(); // This is where it should have been
  }
})

const DEFAULT_TITLE= "E-manage"
router.afterEach((to, from) => {
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

function checkToken() {
  let access_token = cookies.get('access_token')
  if (access_token) return true
  return false
}

export default router