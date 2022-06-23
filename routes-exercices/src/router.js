import { createWebHistory, createRouter } from 'vue-router';

function lazyLoad(page) {
  return () => import(`./components/${page}.vue`);
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: lazyLoad('Home')
    },
    {
      path: '/user/:id',
      component: lazyLoad('User'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router;