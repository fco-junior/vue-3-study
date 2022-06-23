import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home';
import User from './components/User';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/user',
      component: User
    }
  ]
})

export default router;