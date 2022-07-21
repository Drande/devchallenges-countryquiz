
<template>
  <main>
    <Card label="Country quiz">
      <div class="content-container">
        <img src="src/assets/undraw_winners_ao2o 2.svg">
        <div class="column align-items-center">
          <h3 class="header-1">Results</h3>
          <p class="body-copy">You got <span class="header-2 color-green">{{score}}</span> correct answers</p>
        </div>
        <Button v-on:click="handleTryAgain">Try again</Button>
      </div>
    </Card>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import router from '@/router';

export default defineComponent({
    data() {
      let score = router.currentRoute.value.query["score"];
      return {
        score: score
      }
    },
    setup() {
        return {};
    },
    methods:{
      handleTryAgain() {
        router.push({ path: '/' });
      }
    },
    components: { Card, Button }
})
</script>

<style scoped>
  main {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }
</style>
