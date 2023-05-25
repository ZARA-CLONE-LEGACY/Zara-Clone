<template>
    <div>
      <div v-if="data.length === 0">
       <p>No products found.</p>
      </div>
      <div v-else>
        <div v-for="(element, index) in data" :key="index">
          <router-link style="margin-top: 200px; margin-left: 100px" :to="{ path: '/details', query: { element: element._id } }">
            <img style="margin-left: 420px; margin-top: 150px; width: 340px; height: 500px" :src="element.image" />
          </router-link>
          <div class="subdivproduct" style="margin-left: 520px; margin-top: 15px; font-family: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif'; color: rgb(134, 134, 134); font-size: 15px">
            <h2>{{ element.name }}</h2>
            <h2>{{ element.price }}</h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
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
    name: 'Cart',
    data() {
    return {
      data: [] as Product[],
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct(): void {
        const storedData = window.localStorage.getItem('User');
        const parsedData = JSON.parse(storedData);
        console.log(storedData)
        const cart = parsedData.user?.[0].cart;
        this.data=cart
      } 
    },   
  })

   
  </script>
  