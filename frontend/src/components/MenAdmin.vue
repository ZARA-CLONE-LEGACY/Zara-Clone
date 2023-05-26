<template>
    <div>
      <h1>Men Collections</h1>
      <div class="collection-grid">
        <div v-for="item in menData" :key="item._id" class="collection-box">
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
    components: {
      RouterLink,
    },
    setup() {
      const menData = ref<MenItem[]>([]);
      const navigate= (param : string)=>{
        window.location.href=`/DetailsPage/${param}`
      }
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
        navigate
      };
    },
  });
  </script>
  