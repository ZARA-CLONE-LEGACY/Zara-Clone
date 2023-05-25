<template>
  <div class="product-details">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" />
    <p>{{ product.price }} TND</p>
    <p>{{ product.quantity }}</p>
    <p>{{ product.description }}</p>
    <ul>
      <li v-for="size in product.sizes" :key="size">{{ size }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Product {
  _id: string;
  image: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  sizes: string[];
}

export default defineComponent({
  name: 'ProductDetails',
  data() {
    return {
      product: {} as Product,
    };
  },
  setup() {
    const product = ref<Product>({
      _id: '',
      image: '',
      name: '',
      price: '',
      quantity: '',
      description: '',
      sizes: []
    }); // Change the variable name to 'product'

    onMounted(async () => {
      const productId = this.$route.query.element as string; // Access the product ID from the route query
      await fetchProduct(productId);
    });

    async function fetchProduct(productId: string): Promise<void> { // Accept productId as a parameter
      try {
        const response = await axios.get(`http://localhost:3000/product/${productId}`);
        product.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }

    return {
      product,
    };
  },
});
</script>
