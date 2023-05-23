import { createRouter, createWebHistory } from 'vue-router';
import LoginView from './views/Login.View.vue' 
import HomeView from './views/HomeView.vue'
import Signup from './views/Signup.view.vue'
const routes = [
  { path: '/', component : HomeView }, 
  { path: '/login', component: LoginView }, 
  { path: '/signup', component: Signup }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
