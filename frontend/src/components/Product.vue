<!-- <template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      <div>
        <h2>{{ product.name }}</h2>
        <h2>{{ product.price }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { ClothesDocument } from '../../../server/models/clothes';
export default defineComponent({
  name: 'Product',
  data() {
    return {
      products: [] as ClothesDocument[]
    };
  },
  mounted() {
    this.fetchProductData();
  },
  methods: {
    fetchProductData(): void {
      const product = this.$route.query.product;
      // this.products = product;
    }
  }
});
</script> -->
