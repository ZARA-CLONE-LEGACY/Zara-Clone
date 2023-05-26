
<template>
    <div class="a">
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-for="(el,i) in prod" :key="i">
            <router-link :to="{ path: '/product', query: { element:el.category} }">
                <h2 >{{el.category}}</h2>
          </router-link>
      </div>    
        </div>
      </div>  
  </template>
  
  
<script  lang="ts">
import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Kid',
  setup() {
    const state = reactive({
      prod: [],
      isLoading: false,
    });

    const fetchData = (): void => {
      state.isLoading = true;
      axios
        .get('http://localhost:3000/product/gender/kids')
        .then((response) => {
          state.prod = response.data;
          console.log(response.data,'from kid');
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          state.isLoading = false;
        });
    };

    onMounted(fetchData);
    return state;
  },
};

</script>
<style>
a{
    color: black;
    text-align: center;
}
</style>

