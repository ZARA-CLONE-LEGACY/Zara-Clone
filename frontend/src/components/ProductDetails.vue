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
    const productId = ref('');

    onMounted(async () => {
      productId.value = $route.params.id;
      await fetchProduct();
    });

    async function fetchProduct(): Promise<void> {
      try {
        const response = await axios.get(`http://localhost:3000/product/${productId.value}`);
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
