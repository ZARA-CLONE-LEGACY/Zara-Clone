import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue' 
import HomeView from '../components/Home.vue'
import Signup from '../components/Signup.vue'
import Help from '../components/Help.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Product from '../components/Product.vue'
import Men from '../components/Men.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/help', component: Help },
  { path: '/details/:id', name: 'ProductDetails', component: ProductDetails },
  { path: '/product', name: 'Product', component: Product },
  { path: '/men', name: 'Men', component: Men },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


