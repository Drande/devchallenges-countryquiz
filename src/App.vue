

<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  },
  components: { RouterView }
})

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
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 80px);
    overflow-y: auto;
  }
</style>
