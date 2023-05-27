import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import HomeView from '../components/Home.vue';
import SignupVue from '@/components/Signup.vue';
import HelpVue from '@/components/Help.vue';
import ProductDetailsVue from '@/components/ProductDetails.vue';
import ProductVue from '@/components/Product.vue';
import Search from '../components/Search.vue';
import Dashboard from '../components/Dashboard.vue'
import Cart from '../components/Cart.vue'
import MenAdmin from '../components/Menforadmin.vue';
import WomanAdmin from '../components/WomanAdmin.vue';
import KidAdmin from '../components/KidAdmin.vue';
import ProductAdmin from '../components/DetailsPage.vue';
import AddItem from '../components/AddItem.vue'
import UpdateProduct from '../components/UpdateProduct.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: Login },
  { path: '/signup', component: SignupVue },
  { path: '/help', component: HelpVue },
  { path: '/details', component: ProductDetailsVue },
  { path: '/product', component: ProductVue },
  { path: '/search', component: Search },
  { path: '/dashboard', component: Dashboard },
  { path: '/Cart', component:Cart },
  { path: '/menAdmin', component:MenAdmin },
  { path: '/womanAdmin', component:WomanAdmin },
  { path: '/kidAdmin', component:KidAdmin },
  { path: '/DetailsPage', component:ProductAdmin },
  { path: '/UpdateProduct', component:UpdateProduct },
  { path: '/Add', component:AddItem },



];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
