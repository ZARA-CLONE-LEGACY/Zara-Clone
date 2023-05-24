<template>
    <div>
      <input
        class="searchbar"
        type="text"
        placeholder="Search for an item"
        v-model="search"
        @input="handleSearch"
      />
  
      <div v-for="result in filteredItems" :key="result.productId">
        <img :src="result.productimage" alt="image" style="width: 230px; height: 350px" />
        <div>Product Name: {{ result.productname }}</div>
        <div>Product Price: {{ result.productprice }}</div>
      </div>
    </div>
  </template>
  
  <script >
  import axios from 'axios';
  
  export default {
    data() {
      return {
        search: '',
        results: [],
        filteredItems: []
      };
    },
    methods: {
      handleSearch() {
        const filtered = this.results.filter((item) =>
          item.productname.toLowerCase().includes(this.search.toLowerCase())
        );
        this.filteredItems = filtered;
        console.log(this.filteredItems, 'this is data');
      },
      fetchData(searchTerm) {
        axios
          .get(`localhost:5000/clothes/name`)
          .then((response) => {
            this.results = response.data;
            console.log(response.data);
            console.log('hi');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    mounted() {
      let searchTimer = null;
  
      if (typeof window !== 'undefined') {
        this.fetchData(this.search);
      }
  
      this.$watch('search', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
          this.fetchData(this.search);
        }, 300);
      });
    }
  };
  </script>
  
  <style scoped>
  .searchbar {
    margin-top: 200px;
    width: 98%;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(8, 8, 8);
    padding: 0.2em 0em;
  }
  
  .searchbar::placeholder {
    color: rgb(30, 80, 95);
    margin-bottom: 20px;
  }
  </style>
  