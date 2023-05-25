import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import HomeView from '../components/Home.vue';
import SignupVue from '@/components/Signup.vue';
import HelpVue from '@/components/Help.vue';
import ProductDetailsVue from '@/components/ProductDetails.vue';
import ProductVue from '@/components/Product.vue';
<<<<<<< HEAD
const routes = [
  { path: '/', component : HomeView }, 
  { path: '/login', component: Login }, 
  { path: '/signup', component: SignupVue }, 
  {path: '/help', component: HelpVue},
  { path: '/product/one/:id', name: 'product-details', component: ProductDetailsVue },
  {path: '/product', component: ProductVue},
=======
import Search from '../components/Search.vue';
>>>>>>> 9290e82a246ce9687f08ace3c1af4534fb91cd3f

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: Login },
  { path: '/signup', component: SignupVue },
  { path: '/help', component: HelpVue },
  { path: '/details', component: ProductDetailsVue },
  { path: '/product', component: ProductVue },
  { path: '/search', component: Search }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
