

<template>
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-for="(product, index) in prod" :key="index">
          <router-link :to="{ name: 'Product', props:{ element:product } }">
            <h2>{{ product.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { ProductsDocument } from '../../../server/models/products';
  
  export default defineComponent({
    name: 'Woman',
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
          .get('http://localhost:3000/product/gender/Woman')
          .then((response) => {
            this.prod = response.data;
            console.log(this.prod,"from woman")
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