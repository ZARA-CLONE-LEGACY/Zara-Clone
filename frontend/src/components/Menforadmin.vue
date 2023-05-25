<template>
    <div>
      <Navbar />
      <h1>Men Collections</h1>
      <div class="collection-grid">
        <div v-for="item in menData" :key="item._id" class="collection-box">
          <img :src="item.image" :alt="item.name" />
          <router-link :to="`/DetailsPage?itemId=${item._id}&collection=men`">
            <h2>{{ item.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Navbar from './Navbar.vue';
  
  export default {
    name: 'MenPage',
    data() {
      return {
        menData: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const data = await this.getMenData();
          this.menData = data;
        } catch (error) {
          console.error('Error fetching men data:', error);
        }
      },
      async getMenData() {
        try {
          const response = await axios.get('http://localhost:3000/product/gender/Men');
          return response.data;
        } catch (error) {
          console.error('Error fetching men data:', error);
          throw error;
        }
      },
    },
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  