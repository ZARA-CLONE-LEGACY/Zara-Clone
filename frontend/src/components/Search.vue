<template>
  <div>
    <input
      class="searchbar"
      type="text"
      placeholder="Search for an item"
      v-model="search"
      @input="handleSearch"
    />

    <div v-if="filteredItems !== null" v-for="result in filteredItems" :key="result.productId">
      <img
        :src="result.image"
        alt="image"
        style="width: 230px; height: 350px"
      />
      <div>Product Name: {{ result.name }}</div>
      <div>Product Price: {{ result.price }}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
  return {
    search: "",
    results: [],
    filteredItems: null, 
  };
},

  methods: {
    handleSearch() {
  if (this.search === "") {
    this.filteredItems = [];
  } else {
    const filtered = this.results.filter(
      (item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase()) ||
        item.description.toLowerCase().includes(this.search.toLowerCase())
    );

    this.filteredItems = filtered;
  }
},


fetchData() {
  axios
    .get(`http://localhost:3000/product/${name}`)
    .then((response) => {
      this.results = response.data;
      console.log(response.data);
      console.log('hi');
      this.handleSearch();
    })
    .catch((error) => {
      console.error(error);
    });
},

},
created() {
  this.fetchData();
},


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
