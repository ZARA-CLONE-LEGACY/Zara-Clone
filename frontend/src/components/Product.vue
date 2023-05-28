<template>
  <div>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="data.length === 0">
      <p>No products found.</p>
    </div>
    <div v-else>
      <div v-for="(element, index) in data" :key="index">
        <router-link style="margin-top: 200px; margin-left: 100px" :to="{ path: '/details', query: { element: element._id } }">
          <img style="margin-left: 420px; margin-top: 150px; width: 340px; height: 500px" :src="element.image" />
        </router-link>
        <div class="subdivproduct" style="margin-left: 520px; margin-top: 15px; font-family: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif'; color: rgb(134, 134, 134); font-size: 10px">
          <h2>{{ element.name }}</h2>
          <h2 style="margin-right: 480px">{{ element.price }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Product {
  _id: string;
  image: string;
  name: string;
  price: string;
  quantity: {
    toString: (radix?: number | undefined) => string;
    toFixed: (fractionDigits?: number | undefined) => string;
    toExponential: (fractionDigits?: number | undefined) => string;
    toPrecision: (precision?: number | undefined) => string;
    valueOf: () => number;
    toLocaleString: () => string;
  };
  gender: string;
  category: string;
  color: string;
  comment: string;
}

export default defineComponent({
  name: 'Product', 
  data() {
    return {
      data: [] as Product[],
      isLoading: false,
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct(): void {
      const detail = window.location.href.split("=")[1];
      if (detail) {
        axios
          .get(`http://localhost:3000/product/category/${detail}`)
          .then((response) => {
            this.data = response.data;
          })
          .catch((error) => {0
            console.error(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        this.isLoading = true;
      }
    },
    
  },

});
</script>

<style>
  .subdivproduct {
    display: flex;
    font-size: 70%;
    justify-content: space-between;
    color: black;
    text-decoration: none;
  }

  .cart-price {
    text-decoration: none;
  
  }

  .render-data {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    width: 100%;
    margin: auto;
  }

  .Main {
    width: 90vw;
    /* border: 1px solid blue; */
    margin: auto;
    margin-top: 2%;
  }

  .Product_image_tri {
    width: 100%;
  }
</style>
