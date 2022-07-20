
<template>
  <main>
    <Card label="Country quiz">
      <div class="content-container">
        <img src="src/assets/undraw_winners_ao2o 2.svg">
        <div class="column align-items-center">
          <h3 class="header-1">Results</h3>
          <p class="body-copy">You got <span class="header-2 color-green">4</span> correct answers</p>
        </div>
      </div>
    </Card>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'

export default defineComponent({
    setup() {
        return {};
    },
    components: { Card }
})
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
</style>
