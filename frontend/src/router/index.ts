import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue' 
import HomeView from '../components/Home.vue'
import SignupVue from '@/components/Signup.vue';
import HelpVue from '@/components/Help.vue';
import ProductDetailsVue from '@/components/ProductDetails.vue';
import ProductVue from '@/components/Product.vue';
const routes = [
  { path: '/', component : HomeView }, 
  { path: '/login', component: Login }, 
  { path: '/signup', component: SignupVue }, 
  {path: '/help', component: HelpVue},
  {path: '/details', component: ProductDetailsVue},
  {path: '/product', component: ProductVue},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


