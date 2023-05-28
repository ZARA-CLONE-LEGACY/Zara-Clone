<template>
    <div>
     
      <div class="collection-grid">
        <div v-for="item in womanData" :key="item._id" class="collection-box">
          <img :src="item.image" :alt="item.name" @click="(navigate(item._id))  " class="ffm"/>
            <h2 class="dd" >{{ item.name }}</h2>
        </div>
        <h1 class="wom" >Woman Collections</h1>
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
  <style>
.ffm{


  width: 350px;
  height : 500px;
  object-fit: cover;
 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-top: 320px;
  margin-left: 480px;
  cursor: pointer;
}
.ffm:hover {
  transform: scale(1.05);
}


.dd {
  margin-left: 560px;


}
.wom {
  position: relative;
  top: -4300px;
  left: 480px;
  font-size: 40px;
  color: #333;

}

</style>