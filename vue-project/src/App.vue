<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/todolist">To Do List</RouterLink>
        <RouterLink to="/resources">Resources</RouterLink>
        <RouterLink to="/timer">Timer</RouterLink>
        <RouterLink to="/GradeCalculator">Grade Calculator</RouterLink>
        <RouterLink to="/"></RouterLink>
      </nav>
    </header>
    <div class="routerstuff">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>