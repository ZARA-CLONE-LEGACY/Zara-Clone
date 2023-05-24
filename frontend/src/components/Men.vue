

<template>
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-for="(product, index) in prod" :key="index">
            <router-link :to="{ name: 'Product', params: { element: product } }">
           <h2>{{ product.name }}</h2>
</router-link>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { ProductsDocument } from '../../../server/models/products';
  
  export default defineComponent({
    name: 'Men',
    data() {
      return {
        prod: [] as ProductsDocument[],
        isLoading: false,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData(): void {
        this.isLoading = true;
        axios
          .get('http://localhost:3000/product/gender/Men')
          .then((response) => {
            this.prod = response.data;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
      },
    },
  });
  </script>
  