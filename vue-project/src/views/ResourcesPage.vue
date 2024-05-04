<template>
  <div>
    <h1>Select the subject you want to study, then answer the questions!</h1>
    <button class="btn" @click="showQ('Russian')">Russian</button>
    <button class="btn" @click="showQ('World')">AP World History</button>
    <button class="btn" @click="showQ('US')">AP United States History</button>
    <button class="btn" @click="showQ('Psych')">AP Psychology</button>
  </div>
  <div class="cardcontainer">
    <div class="card" v-for="(question, index) in filteredQ" :key="index">
      <h3 class="name">{{ question.question }}</h3>
      <button v-for="(choice, i) in question.choice" :key="i" @click="check(choice, question)">{{ choice }}</button>
      <p v-if="question.answered">Your answer: {{ question.selectedAnswer }} | Correct answer: {{ question.answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { questions } from '@/stores/Questions';

const studiedsub = ref('');
const filteredQ = ref([]);

function showQ(subject) {
  studiedsub.value = subject;
  filteredQ.value = [];
  questions.forEach(question => {
    if (question.type === subject) {
      filteredQ.value.push({
        type: question.type,
        question: question.question,
        choice: question.choice,
        answer: question.answer,
        selectedAnswer: '',
        answered: false
      });
    }
  });
}

console.log(questions)
function check(choice, question) {
  question.selectedAnswer = choice;
  question.answered = true;
}
</script>

<style scoped>
.card{
  background-color: beige;
  color: black;
}

.btn {
  background-color: lightgreen;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  color: black;
}
</style>

