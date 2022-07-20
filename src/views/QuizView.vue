<template>
  <main>
    <Card label="Country quiz">
      <img class="upper-right-image" src="src/assets/undraw_adventure_4hum 1.svg">
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

  .upper-right-image {
    position: absolute;
    right: 0;
    top: -74px;
  }
</style>
