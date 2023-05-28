<template>
    <div class="ff">
      <h1 style="color : white">Product Details</h1>
      <template v-if="item">
        <div class="grid-container">

         
          <div class="image-container"  style="margin-top: 150px;" >
            <h1 class="h"> Product Details </h1>
            <img :src="item.image" :alt="item.name"  class="img" />
          </div>
          <div class="details-container">
            <h2>{{ item.name }}</h2>
            <p>Category: {{ item.category }}</p>
            <p>Price: {{ item.price }}</p>
            <p>Description: {{ item.description }}</p>
            <div class="button-container">
            <router-link :to="`/UpdateProduct?itemId=${item._id}&collection=${collection}`" v-if="isAdmin">
               <button class="buttondd">Update Product</button>
            </router-link>
              <button class="buttondd" v-if="isAdmin" @click="handleDelete">
                Delete Product
              </button>
              <router-link :to="`/Add?collection=${collection}`" v-if="isAdmin">
                <button class="buttondd">Add Product</button>
              </router-link>
            </div>
          </div>
        </div>
      </template>
      <p v-else>Loading item details...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  interface Item {
    _id: string;
    name: string;
    image: string;
    price: string;
    desc: string;
  }
  
  const getItemDetails = async (itemId: string, collection: string): Promise<Item> => {
    // const category = window.location.href.split("=")[1]
    try {
      const response = await axios.get<Item>(`http://localhost:3000/product/one/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching item details:', error);
      throw error;
    }
  };
  
  export default defineComponent({
    name: 'DetailsPage',

    setup() {
      const router = useRouter();
      const { itemId, collection } = router.currentRoute.value.query;
      const item = ref<Item | null>(null);
      const isAdmin = ref(false);
  
      const deleteItem = async (itemId: string, collection: string) => {
        try {
          const response = await axios.delete(`http://localhost:3000/product/${itemId}`, {
            headers: { Authorization: `Bearer ${localStorage.token}` },
          });
          console.log(response.data);
          router.push(`/${collection}`);
        } catch (error) {
          console.error('Error deleting item:', error);
          throw error;
        }
      };
  
      const handleDelete = async () => {
        try {
          if (typeof itemId === 'string' && typeof collection === 'string') {
            await deleteItem(itemId, collection);
          }
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };
  
      onMounted(async () => {
        try {
          if (typeof itemId === 'string' && typeof collection === 'string') {
            const data = await getItemDetails(itemId, collection);
            item.value = data;
          }
        } catch (error) {
          console.error('Error fetching item details:', error);
        }
        const checkAdmin = localStorage.getItem('isAdmin');
        if (checkAdmin) {
          isAdmin.value = checkAdmin === 'true';
        }
      });
  
      return {
        item,
        isAdmin,
        handleDelete,
      };
    },
  });
  </script>
  <style>

.ff {
  margin: 0 auto;
  max-width: 800px;
}

.buttondd {
  display: inline-block;
  padding: 10px 20px;
  font-size: 15px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.buttondd:hover {
  background-color: #333;
}


.h {
  text-align: center;
  margin: 30px 0;
  font-size: 40px;
  margin-top: 50px;
}

.img {
  display: block;
  margin: 0 auto;
  height: 400px;
  width: 420px;
  margin-left: -140px;
  margin-top: 50px;
}

p {
  margin: 10px 0;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin-left: -140px;
}
.button-container {
  margin-left: -120px;
}

</style>