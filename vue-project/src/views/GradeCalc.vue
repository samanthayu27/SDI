<template>
    <div class="box">
        <h3>
            Responsibility (10% of Grade)
        </h3>
        <button @click="newrow('box')">Add new assignment</button>
    </div>
    <div class="box1">
        <h3>
            Engagement (10% of Grade)
        </h3>
        <button @click="newrow('box1')">Add new assignment</button>
    </div>
    <div class="box2">
        <h3>
            Learning Progress (80% of Grade)
        </h3>
        <button @click="newrow('box2')">Add new assignment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const rows = ref([]);

function newrow(selector) {
    const targetBox = document.querySelector(`.${selector}`);
    targetBox.insertAdjacentHTML(
        'beforeend', 
        `<div class="card">
            <form>
                <h5>Assignment Name: <input type="text"></h5>
                <h5>Points Recieved: <input type="text"></h5>
                <h5>Total Points: <input type="text"></h5>
            </form>
        </div>`
    );
}
</script>

<style scoped>
.box, .box1, .box2 {
    background-color: #BACBA9;
    color: black;
    margin-bottom: 10px;
    padding: 10px;
    width: 800px;
}

.card{
    background-color:antiquewhite;
}
</style>
