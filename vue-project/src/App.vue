<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/resources">Resources</RouterLink>
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