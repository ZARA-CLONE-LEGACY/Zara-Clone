<template>
  <div class="help">
    <h4 class="head">HOW CAN WE HELP YOU?</h4>
    <input
      type="text"
      class="searchbar"
      placeholder="Look for"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Help {
  question: string;
  answer: string;
}

export default defineComponent({
  name: 'Helpbar',
  setup() {
    const query = ref('');
    const help = ref<Help[]>([]);

    const fetchHelp = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/help/${query.value}`);
        help.value = response.data;
        console.log(help)
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchHelp();
    });

    return {
      help,
      fetchHelp,
    };
  },
});
</script>


<style scoped>
.help {
  background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//w/1839/IMAGE-landscape-web-27470945-8c31-433a-9eaf-392114b6a91d-default_0.jpg?ts=1682518360676');
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.searchbar {
  margin-top: 1.6em;
  width: 40%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(8, 8, 8);
  padding: 0.2em 0em;
}
.head {
  margin-right: 1000px;
  margin-top: -120px;
}
</style>
