<template>
    <div>
      <h1>kid Collections</h1>
      <div class="collection-grid">
        <div v-for="item in kidData" :key="item._id" class="collection-box">
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

  interface kidItem {
    _id: string;
    name: string;
    image: string;
  }
  
  const getkidData = async (): Promise<kidItem[]> => {
    try {
      const response = await axios.get<kidItem[]>('http://localhost:3000/product/gender/kids');
      return response.data;
    } catch (error) {
      console.error('Error fetching kid data:', error);
      throw error;
    }
  };
  
  export default defineComponent({
    name: 'kidPage',
    components: {
      RouterLink,
    },
    setup() {
      const kidData = ref<kidItem[]>([]);
        const navigate= (param : string)=>{
        window.location.href=`/DetailsPage?itemId=${param}&collection=kids`
      }
  
      onMounted(async () => {
        try {
          const data = await getkidData();
          kidData.value = data;
        } catch (error) {
          console.error('Error fetching men data:', error);
        }
      });
  
      return {
        kidData,
        navigate,
      };
    },
  });
  </script>
  
  
  
 
  
  