<template>
    <div>
      <h1>Woman Collections</h1>
      <div class="collection-grid">
        <div v-for="item in womanData" :key="item._id" class="collection-box">
          <img :src="item.image" :alt="item.name" @click="(navigate(item._id))  " />
            <h2>{{ item.name }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { RouterLink } from 'vue-router';
  
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
      console.error('Error fetching men data:', error);
      throw error;
    }
  };
  
  export default defineComponent({
    name: 'WomanPage',
    components: {
      RouterLink,
    },
    setup() {
      const womanData = ref<WomanItem[]>([]);
      const navigate= (param: string)=>{
        window.location.href=`/DetailsPage?itemId=${param}&collection=women`
      }
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
        navigate
      };
    },
  });
  </script>
  