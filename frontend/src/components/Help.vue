<!-- <template>
  <div class="help">
    <h4 class="head">HOW CAN WE HELP YOU?</h4>
    <ul>
      <li v-for="question in questions" :key="question._id">
        {{ question.question }}
      </li>
    </ul>
    <div v-if="selectedQuestion">
      <h2>Selected Question</h2>
      <p>{{ selectedQuestion.question }}</p>
    </div>
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

interface HelpQuestion {
  _id: string;
  question: string;
}

export default defineComponent({
  setup() {
    const questions = ref<HelpQuestion[]>([]);
    const selectedQuestion = ref<HelpQuestion | null>(null);

    onMounted(async () => {
      try {
        const response = await axios.get(`http://localhost:5000/help/${selectedQuestion}`);
        questions.value = response.data;
      } catch (error) {
        console.error(error);
        // Handle error
      }
    });

    const fetchQuestion = async (questionId: string) => {
      try {
        const response = await axios.get(`/api/help/${questionId}`);
        selectedQuestion.value = response.data;
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    return {
      questions,
      selectedQuestion,
      fetchQuestion,
    };
  },
});
</script> -->
<template>
  <div class="help">
    <h1>Help</h1>
    <input  type="text"
      class="searchbar" v-model="typedQuestion" placeholder="Type your question" />
    <button @click="fetchAnswer">Get Answer</button>
    <p v-if="answer">{{ answer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const typedQuestion = ref('');
    const answer = ref('');

    const fetchAnswer = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/help/${typedQuestion.value}`);
        answer.value = response.data.answer;
        console.log(answer)
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    return {
      typedQuestion,
      answer,
      fetchAnswer,
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
