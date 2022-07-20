<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
  </header>
  
  <div class="router-content">
    <RouterView />
  </div>
  <footer className='footer'><span className="credits">created by <b><u>Drande</u></b> - devChallenges.io</span></footer>
</template>

<style scoped>
  .router-content {
    width: 100vw;
    height: calc(100vh - 80px);
  }
</style>
