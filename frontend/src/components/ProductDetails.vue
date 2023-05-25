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
    <p>Rate the product:</p>
<form class="star-rating">
  <input class="radio-input" type="radio" id="star5" name="star-input" value="5" />
  <label class="radio-label" class for="star5" title="5 stars">5 stars</label>

  <input class="radio-input" type="radio" id="star4" name="star-input" value="4" />
  <label class="radio-label" for="star4" title="4 stars">4 stars</label>

  <input class="radio-input" type="radio" id="star3" name="star-input" value="3" />
  <label class="radio-label" for="star3" title="3 stars">3 stars</label>

  <input class="radio-input" type="radio" id="star2" name="star-input" value="2" />
  <label class="radio-label" for="star2" title="2 stars">2 stars</label>

  <input class="radio-input" type="radio" id="star1" name="star-input" value="1" />
  <label class="radio-label" for="star1" title="1 star">1 star</label>
  <p>Product rating: <meter class="average-rating" min="0" max="5" value="4.3" title="4.3 out of 5 stars">4.3 out of 5</meter>
</p>
</form>
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
