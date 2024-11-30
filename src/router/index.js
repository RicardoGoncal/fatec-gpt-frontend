import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import FatecGptPage from '@/views/FatecGptPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';


const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/fatec_gpt',
      name: 'FatecGptPage',
      component: FatecGptPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }

  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  export default router;