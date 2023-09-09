import { createRouter, createWebHistory } from "vue-router"
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
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

function checkToken() {
  let access_token = cookies.get('access_token')
  return false
}

export default router