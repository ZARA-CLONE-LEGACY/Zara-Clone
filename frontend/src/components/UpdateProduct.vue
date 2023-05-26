<template>
    <div class="container">
      <h1>EDIT Product</h1>
      <form @submit="handleFormSubmit">
        <label>
        Name:
        <input type="text" v-model="name" />
      </label>
      <label>
        Image :
        <input type="file" id="file" placeholder="Image" @change="uploadImage" />
      </label>
      <label>
        Gender:
        <input type="text" v-model="gender" />
      </label>
      <label>
        Category:
        <input type="text" v-model="category" />
      </label>
      <label>
        Quantity:
        <input type="text" v-model="quantity" />
      </label>
      <label>
        Price:
        <input type="text" v-model="price" />
      </label>
      <label>
        Description:
        <textarea v-model="description"></textarea>
      </label>
        <button type="submit" class="submitButton">
          UPDATE
        </button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  interface Item {
    _id: string;
    name: string;
    image: string;
    gender: string;
    category: string;
    price: string;
    description: string;
    quantity: string;
  }
  
 

  const getItemDetails = async (itemId: string): Promise<Item> => {
    try {
      const response = await axios.get<Item>(`http://localhost:3000/product/one/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching item details:', error);
      throw error;
    }
  };
  
  export default defineComponent({
    name: 'UpdateProduct',
    setup() {
      const router = useRouter();
      const { itemId } = router.currentRoute.value.query;
  
      const name = ref('');
      const image = ref('');
      const gender = ref('');
      const category = ref('');
      const price = ref('');
      const description = ref('');
      const quantity = ref('');
      const uploadImage=(e: Event)=> {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const form = new FormData();
        form.append('file', file);
        form.append('upload_preset', 'SAN_project');

        axios
          .post('https://api.cloudinary.com/v1_1/dhvhvswmj/upload', form)
          .then((response) => {
            image.value = response.data.secure_url;
          });
      }
    }
  
      const handleFormSubmit = (e: Event) => {
        e.preventDefault();
        axios
          .put(`http://localhost:3000/product/${itemId}`, {
            name: name.value,
            image: image.value,
            gender: gender.value,
            category: category.value,
            price: price.value,
            description: description.value,
            quantity: quantity.value,
          }, { headers: { Authorization: `Bearer ${localStorage.token}` } })
          .then((res) => {
            console.log(res);
            router.push(`/DetailsPage?itemId=${itemId}`);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
      onMounted(async () => {
        try {
          if (typeof itemId === 'string') {
            const data = await getItemDetails(itemId);
            name.value = data.name;
            image.value = data.image;
            gender.value = data.gender;
            category.value = data.category;
            price.value = data.price;
            description.value = data.description;
            quantity.value = data.quantity;
          }
        } catch (error) {
          console.error('Error fetching item details:', error);
        }
      });
  
      return {
        name,
        image,
        gender,
        category,
        price,
        description,
        quantity,
        handleFormSubmit,
        uploadImage,
      };
    },
  });
  </script>
  
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 10px;
  }
  
  input[type="text"],
  textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 100%;
  }
  
  button[type="submit"] {
    padding: 10px;
    background-color: #010101;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  