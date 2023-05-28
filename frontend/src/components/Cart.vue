


<template>
    <div>
      <div v-if="data.length === 0">
        <p>Cart is Empty</p>
      </div>
      <div v-else>
        <div v-for="(element, index) in data" :key="index">
          <router-link style="margin-top: 200px; margin-left: 100px" :to="{ path: '/details', query: { element: element._id } }">
            <img style="margin-left: 420px; margin-top: 180px; width: 340px; height: 500px" :src="element.image" />
          </router-link>
          <div class="subdivproduct" style="margin-left: 520px; margin-top: 15px; font-family: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif'; color: rgb(134, 134, 134); font-size: 10px">
            <h2>{{ element.name }}</h2>
            <h2 style="margin-right: 480px;" >{{ element.price }}</h2>
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
    name: 'Cart',
    data() {
      return {
        data: [] as Product[],
      };
    },
    mounted() {
      this.fetchProduct();
      console.log(this.data,'this is data from cart ')
    },
    methods: {
      fetchProduct(): void {
        const storedData = JSON.parse(window.localStorage.getItem('User'));
        console.log(storedData,'stored data')
        const cart = storedData.cart;
        console.log(cart,'this is the cart')
        // console.log(parsedData.user,"from cart")
        cart.forEach((e: string) => {
          axios
            .get(`http://localhost:3000/product/one/${e}`)
            .then((response) => {
              this.data.push(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      },
    },
  });
  </script>
  