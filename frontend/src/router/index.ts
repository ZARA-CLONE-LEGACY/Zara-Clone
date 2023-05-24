import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue' 
import HomeView from '../components/Home.vue'
import Signup from '../components/Signup.vue'
import Help from '../components/Help.vue'
import ProductDetails from '../components/ProductDetails.vue'
const routes = [
  { path: '/', component : HomeView }, 
  { path: '/login', component: Login }, 
  { path: '/signup', component: Signup }, 
  {path: '/help', component: Help},
  {path: '/details', component: ProductDetails},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


