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
    <button @click="add">Add to Bag</button>
    <p>Rate the product:</p>
    <form class="star-rating">
      <input class="radio-input" type="radio" id="star5" name="star-input" value="5" />
      <label class="radio-label" for="star5" title="5 stars">5 stars</label>

      <input class="radio-input" type="radio" id="star4" name="star-input" value="4" />
      <label class="radio-label" for="star4" title="4 stars">4 stars</label>

      <input class="radio-input" type="radio" id="star3" name="star-input" value="3" />
      <label class="radio-label" for="star3" title="3 stars">3 stars</label>

      <input class="radio-input" type="radio" id="star2" name="star-input" value="2" />
      <label class="radio-label" for="star2" title="2 stars">2 stars</label>

      <input class="radio-input" type="radio" id="star1" name="star-input" value="1" />
      <label class="radio-label" for="star1" title="1 star">1 star</label>
      <p>Product rating: <meter class="average-rating" min="0" max="5" value="4.3" title="4.3 out of 5 stars">4.3 out of 5</meter></p>
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
  setup() {
    const product = ref<Product>({
      _id: '',
      image: '',
      name: '',
      price: '',
      quantity: '',
      description: '',
      sizes: [],
    });

    onMounted(async () => {
      const productId = window.location.href.split('=')[1];
      await fetchProduct(productId);
    });

    async function fetchProduct(productId: string): Promise<void> {
      try {
        const response = await axios.get(`http://localhost:3000/product/one/${productId}`);
        product.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }

    async function add(): Promise<void> {
      const storedData = window.localStorage.getItem('User');
      const parsedData = JSON.parse(storedData);
      const userID = parsedData.user._id;
      const productId = window.location.href.split('=')[1];
      try {
        await axios.put('http://localhost:3000/cart/add', { userId: userID, productId: productId });
        console.log('Product added to cart successfully!');
      } catch (error) {
        console.log("this is userid",userID)
        console.log("this is product id",productId)
        console.error(error);
      }
    }

    return {
      product,
      add
    };
  }
});
</script>

<style>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.radio-input {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.radio-label {
  cursor: pointer;
  font-size: 0;
  color: rgba(0,0,0,0.2);
  transition: color 0.1s ease-in-out;
}

.radio-label:before {
  content: "★";
  display: inline-block;
  font-size: 32px;
}

.radio-input:checked ~ .radio-label {
  color: #ffc700;
  color: gold;
}

.radio-label:hover,
.radio-label:hover ~ .radio-label {
  color: goldenrod;
}

.radio-input:checked + .radio-label:hover,
.radio-input:checked + .radio-label:hover ~ .radio-label,
.radio-input:checked ~ .radio-label:hover,
.radio-input:checked ~ .radio-label:hover ~ .radio-label,
.radio-label:hover ~ .radio-input:checked ~ .radio-label {
  color: darkgoldenrod;
}


.average-rating {
  position: relative;
  appearance: none;
  color: transparent;
  width: auto;
  display: inline-block;
  vertical-align: baseline;
  font-size: 25px;
}

.average-rating::before {
  --percent: calc(4.3/5*100%);
  content: '★★★★★';
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(0,0,0,0.2);
  background: linear-gradient(90deg, gold var(--percent), rgba(0,0,0,0.2) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

form {
  margin: 0 0 50px;
}
</style>