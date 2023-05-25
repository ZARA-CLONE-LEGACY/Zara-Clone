<template>
    <div>
      <h1>Men Collections</h1>
      <div class="collection-grid">
        <div v-for="item in menData" :key="item._id" class="collection-box">
            <h2>{{ item.name }}</h2>
            <img src={{ item.image }} >
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  interface MenItem {
    _id: string;
    name: string;
    image: string;
  }
  
  const getMenData = async (): Promise<MenItem[]> => {
    try {
      const response = await axios.get<MenItem[]>('http://localhost:3000/product/gender/Men');
      return response.data;
    } catch (error) {
      console.error('Error fetching men data:', error);
      throw error;
    }
  };
  
  export default defineComponent({
    name: 'MenPage',
    setup() {
      const menData = ref<MenItem[]>([]);
  
      onMounted(async () => {
        try {
          const data = await getMenData();
          menData.value = data;
        } catch (error) {
          console.error('Error fetching men data:', error);
        }
      });
  
      return {
        menData,
      };
    },
  });
  </script>
  