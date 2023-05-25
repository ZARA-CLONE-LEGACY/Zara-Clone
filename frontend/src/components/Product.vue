<template>
  <div>
    <div>
      <h2>{{ element.name }}</h2>
      <h2>{{ element.price }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProductsDocument } from '../../../server/models/products';

export default defineComponent({
  name: 'Product',
  props: {
    element: {
      type: Object as PropType<ProductsDocument>,
      required: true,
    },
  },
});
</script>
