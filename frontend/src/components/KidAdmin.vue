<template>
    <div>
      
      <div class="collection-grid">
        <div v-for="item in kidData" :key="item._id" class="collection-box">
            <img :src="item.image" :alt="item.name" @click="(navigate(item._id))  " class="ddd"/>
            <h2  class="dd" >{{ item.name }}</h2>
        </div>
        <h1 class="bo" >kid Collections</h1>
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
  
  
  
 <style> 

.ddd{


  height: 500px;
width: 350px;
margin-left: 510px;
margin-top: 230px;
object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.ddd:hover {
  transform: scale(1.05);
}
.dd{
  margin-left: 530px;

}
.bo {
  position: relative;
  top: -3850px;
  left: 580px;
  font-size: 30px;
  color: #333;
  margin-top: -10px;
}
</style>
  
  