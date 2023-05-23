import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../components/Login.vue' 
import HomeView from '../components/Home.vue'
import Signup from '../components/Signup.vue'
import Help from '../components/Help.vue'
const routes = [
  { path: '/', component : HomeView }, 
  { path: '/login', component: LoginView }, 
  { path: '/signup', component: Signup }, 
  {path: '/help', component: Help},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


