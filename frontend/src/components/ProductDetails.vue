

<template>

  <div style=" margin-top: 4px;" >
  <div class="product-details"  >
    
    <img :src="product.image" class="fof" />
 
    <h2 style=" font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px; margin-top : -400px ; margin-left: 1000px;" >{{ product.name }}</h2>
      <p  style="margin-left: 1000px; margin-top: 20px;" >{{ product.price }} TND</p>
  <h1> Materials care and origin  </h1>
    <h3 style="  word-wrap: break-word; margin-left: 1000px; font-size: 15px; " >Lapelless blazer made of a linen blend fabric. Long sleeves. Flap pockets on the front. Tie belt in the same fabric. Matching lining. Double-breasted fastening with hidden button.</h3>
            <br />


    <p>{{ product.quantity }}</p>
    <p style="  word-wrap: break-word; margin-right : 900px ; margin-left: 5px; margin-top: -90px; font-size: 14px;" >{{ product.description }}</p>
    <ul>
      <li v-for="size in product.sizes" :key="size">{{ size }}</li>        </ul>
      <select name="" id="prodsize"  style="margin-left: 1000px; margin-top: -400px;">
              <option value="null">Select your size</option>
              <option value="EU 36 (UK 29)">EU 36 (UK 29)</option>
              <option value="EU 38 (UK 38)">EU 38 (UK 38)</option>
              <option value="EU 40 (UK 40)">EU 40 (UK 40)</option>
              <option value="EU 42 (UK 42)">EU 42 (UK 42)</option>
              <option value="EU 44 (UK 34)">EU 44 (UK 34)</option>
            </select>
   
    
          <button @click="add" class="add-to-bag-button">Add to Bag</button>

    <p  style="margin-left: 20px;">Rate the product:</p>
    <form class="star-rating" style="margin-left: 160px;">
      <input class="radio-input" type="radio" id="star5" name="star-input" value="5" />
      <label class="radio-label" for="star5" title="5 stars">5 stars</label>

      <input class="radio-input" type="radio" id="star4" name="star-input" value="4" />
      <label class="radio-label" for="star4" title="4 stars">4 stars</label>

      <input class="radio-input" type="radio" id="star3" name="star-input" value="3" />
      <label class="radio-label" for="star3" title="3 stars">3 stars</label>

      <input class="radio-input" type="radio" id="star2" name="star-input" value="2" />
      <label class="radio-label" for="star2" title="2 stars">2 stars</label>

      <input class="radio-input" type="radio" id="star1" name="star-input" value="1" />
      <label class="radio-label" for="star1" title="1 star">1 star</label>
      <p>Product rating: <meter class="average-rating" min="0" max="5" value="4.3" title="4.3 out of 5 stars">4.3 out of 5</meter></p>
    </form>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Product {
  _id: string;
  image: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  sizes: string[];
}

export default defineComponent({
  name: 'ProductDetails',
  setup() {
    const product = ref<Product>({
      _id: '',
      image: '',
      name: '',
      price: '',
      quantity: '',
      description: '',
      sizes: [],
    });
    const newUser = ref<any>({});
    onMounted(async () => {
      const productId = window.location.href.split('=')[1];
      await fetchProduct(productId);
    });

    async function fetchProduct(productId: string): Promise<void> {
      try {
        const response = await axios.get(`http://localhost:3000/product/one/${productId}`);
        product.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }
    async function getUser(id: number): Promise<void> {
  try {
    const response = await axios.get(`http://localhost:3000/one/${id}`);
    newUser.value = response.data;
    console.log( response.data,'this is response');
  } catch (error) {
    console.error(error);
  }
}
async function add(): Promise<void> {
  const storedData = window.localStorage.getItem('User');
  const parsedData = JSON.parse(storedData);
  const userID = parsedData.user._id;
  const productId = window.location.href.split('=')[1];
  console.log(parsedData.user,'bf')
  try {
    await axios.put('http://localhost:3000/cart/add', { userId: userID, productId: productId })
      await  getUser(userID)//get the new object with the updated cart ;
      console.log(newUser.value,'new')
      window.localStorage.setItem('User',JSON.stringify(newUser.value));


      }
   catch (error) {
    console.error(error);
  }
}


    return {
      product,
      add
    };
  }
});
</script>

<style>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.radio-input {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.radio-label {
  cursor: pointer;
  font-size: 0;
  color: rgba(0,0,0,0.2);
  transition: color 0.1s ease-in-out;
}

.radio-label:before {
  content: "★";
  display: inline-block;
  font-size: 32px;
}

.radio-input:checked ~ .radio-label {
  color: #ffc700;
  color: gold;
}

.radio-label:hover,
.radio-label:hover ~ .radio-label {
  color: goldenrod;
}

.radio-input:checked + .radio-label:hover,
.radio-input:checked + .radio-label:hover ~ .radio-label,
.radio-input:checked ~ .radio-label:hover,
.radio-input:checked ~ .radio-label:hover ~ .radio-label,
.radio-label:hover ~ .radio-input:checked ~ .radio-label {
  color: rgb(209, 153, 11);

}


.average-rating {
  position: relative;
  appearance: none;
  color: transparent;
  width: auto;
  display: inline-block;
  vertical-align: baseline;
  font-size: 25px;
}

.average-rating::before {
  --percent: calc(4.3/5*100%);
  content: '★★★★★';
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(0,0,0,0.2);
  background: linear-gradient(90deg, gold var(--percent), rgba(0,0,0,0.2) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

form {
  margin: 0 0 50px;
}
li {
  list-style: none;
  margin-bottom: 5px;
}

select {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  width:200px;
  margin-bottom: 10px;
}

option {
  font-size: 14px;
}
.fof {
margin-top: 140px;
  width: 350px;
  height : 450px;
  margin-left: 600px;
}

.add-to-bag-button {
  background-color: black;
  color: white;
  padding: 10px 60px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1000px;
}

</style> 