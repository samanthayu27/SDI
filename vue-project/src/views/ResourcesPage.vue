<template>
<h1>Select the subject you want to study, then answer the questions!</h1>
<button @click="showQ">Russian</button>
<button @click="showQ">AP World History</button>
<button @click="showQ">AP United States History</button>
<button @click="showQ">AP Psychology</button>
</template>

<script setup>
import {Russian, Psychology, World, US} from '../stores/Questions'
import { ref } from 'vue';
const question = ref([])
const subject = ref('')
//initializes questions/subject name as nothing if nothing is interacted with
const subjects = {
  'Russian' : Russian, 
  'AP World History' : World, 
  'AP United States History': US, 
  'AP Psychology': Psychology,
  //makes the button and the title of the array = to each other
}

function showQ() {

}
</script>