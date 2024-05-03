<template>
    <h1>Set a timer to study or to do work</h1>
    <h3>Your screen will lock until your time is up</h3>
    <h3 class="time">Hours: <input type="number" v-model="hours"></h3>
   <!--  v model creates a connection between the inputted value and something else, value of something else changes based on the input value -->
    <h3 class="time">Minutes: <input type="number" v-model="minutes"></h3>
    <h3 class="time">Seconds: <input type="number" v-model="seconds"></h3>
    <h1>Timer: {{ timertime }}</h1>
    <button @click = "starttimer">Start timer</button>
</template>

<script setup> 
import { ref } from 'vue';

let hours = ref(0)
let minutes = ref(0)
let seconds = ref(0)
//starts each input values at 0 originally 

function starttimer() {
    const addedtime = hours.value*3600 + minutes.value*60 + seconds.value
    //need to multply by 3600 and 60 b/c thats how many seconds are in a hour and minute respsectivley and need to add all the time values b/c it shows you the total amount of seconds (more convientent, think like common denominator)
    console.log(addedtime)
}

const timertime = reactive

</script>

<script setup>

</script>