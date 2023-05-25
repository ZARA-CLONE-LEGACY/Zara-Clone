<template>
  <div>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="data.length === 0">
      <p>No products found.</p>
    </div>
    <div v-else>
      <div v-for="(element,index) in data" :key="index">
        <router-link :to="{ path: '/details', query: { element:element._id} }">
          <img :src="element.image" />
          </router-link>
        <h2>{{ element.name }}</h2>
        <h2>{{ element.price }}</h2>
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
    console.log(this.data,'ff')
  },
  methods: {
    fetchProduct(): void {
      const category = window.location.href.split("=")[1]
      console.log(this.$route.query.element as string,'rout')
      console.log(category,'cat')  
      if(category){     
        axios
          .get(`http://localhost:3000/product/category/${category}`)
          .then((response) => {
            this.data = response.data;
          })
          .catch((error) => {0
            console.error(error);
          })
          .finally(() => {
            this.isLoading = false;
          })
    }
  else{ 
    this.isLoading = true;
  }}    
  },
});
</script>
