

<template>
    <div>
      <div v-for="(product, index) in prod" :key="index">
        <router-link :to="{ name: 'Product', query: { product: product } }">
          <h2>{{ product.name }}</h2>
        </router-link>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  interface ClothesDocument {
    image: string;
    name: string;
    desc: string;
    price: string;
  }
  
  export default defineComponent({
    name: 'Men',
    data() {
      return {
        prod: [] as ClothesDocument[]
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData(): void {
        axios
          .get('http://localhost:3000/clothes/')
          .then((response) => {
            this.prod = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  });
  </script>