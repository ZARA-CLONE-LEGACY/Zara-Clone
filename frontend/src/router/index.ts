import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue' 
import HomeView from '../components/Home.vue'
import Signup from '../components/Signup.vue'
import Search from '../components/Search.vue'
const routes = [
  { path: '/', component : HomeView }, 
  { path: '/login', component: Login }, 
  { path: '/signup', component: Signup }, 
  { path: '/search', component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


