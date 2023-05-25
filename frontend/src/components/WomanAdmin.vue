<template>
    <div>
      <h1>Woman Collections</h1>
      <div class="collection-grid">
        <div v-for="item in womanData" :key="item._id" class="collection-box">
            <h2>{{ item.name }}</h2>
            <img src={{ item.image }} >
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  interface WomanItem {
    _id: string;
    name: string;
    image: string;
  }
  
  const getWomanData = async (): Promise<WomanItem[]> => {
    try {
      const response = await axios.get<WomanItem[]>('http://localhost:3000/product/gender/Women');
      return response.data;
    } catch (error) {
      console.error('Error fetching woman data:', error);
      throw error;
    }
  };
  
  export default defineComponent({
    name: 'WomanPage',
    setup() {
      const womanData = ref<WomanItem[]>([]);
  
      onMounted(async () => {
        try {
          const data = await getWomanData();
          womanData.value = data;
        } catch (error) {
          console.error('Error fetching men data:', error);
        }
      });
  
      return {
        womanData,
      };
    },
  });
  </script>
  