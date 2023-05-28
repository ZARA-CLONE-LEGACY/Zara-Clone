<template>
    <div>
      <Navbar />
      
      <div class="collection-grid">

      
       
        <div v-for="item in menData" :key="item._id" class="collection-box">
          <router-link :to="`/DetailsPage?itemId=${item._id}&collection=men`">
          <img :src="item.image" :alt="item.name" class="imge"  />
      
         
            <h2>{{ item.name }}</h2>
          </router-link>
        </div>
        <h1 class="hf" >Men Collections</h1>
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

.imge {
  width: 350px;
  height : 500px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-top: 240px;
  margin-left: 480px;
}

.imge:hover {
  transform: scale(1.05);
}



.bi{

  position: relative;
 

  padding: 4px 12px;
  font-size: 25px;
  background-color : black;
  color : white; 
  border-radius: 5px;
  border-color: none;
  
}

.hf {
  position: relative;
  top: -4700px;
  left: 550px;
  font-size: 30px;
  color: #333;
  margin-top: -10px;
}

  </style>
  