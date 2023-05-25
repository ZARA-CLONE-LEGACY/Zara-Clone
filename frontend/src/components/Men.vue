<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-for="(product, index) in prod" :key="index">
        <router-link :to="{ name: 'Product', params: { id: product.id } }">
          <h2>{{ product.name }}</h2>
        </router-link>
        <Product :element="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import axios from 'axios';
import { ProductsDocument } from '../../../server/models/products';
import Product from './Product.vue';

export default defineComponent({
  data() {
    return {
      prod: [] as ProductsDocument[],
      isLoading: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData(): void {
      this.isLoading = true;
      axios
        .get('http://localhost:3000/product/gender/Men')
        .then((response) => {
          this.prod = response.data.category;
          console.log(this.prod, 'from men');
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  components: {
    Product,
  },
});
</script>
