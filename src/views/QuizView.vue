<template>
  <main>
    <Card label="Country quiz">
      <img class="upper-right-image" src="src/assets/undraw_adventure_4hum 1.svg">
      <div class="quiz-container" v-if="quiz">
        <template v-if="quiz?.type==='capital'">
          <h3 class="header-3 color-indigo">{{quiz.data.capital[0]}} is the capital of</h3>
        </template>
        <template v-if="quiz?.type==='flag'">
        <div class="row">
          <img class="flag" :src="quiz.data.flags.svg" alt="flag">
        </div>
          <h3 class="header-3 color-indigo">Which country does this flag belong to?</h3>
        </template>
          <div class="options">
            <Button :class-name="getClass(index)" :disabled="userAnswer!=undefined" v-on:click="submitAnswer(index)" :right-icon="getIcon(index)" v-for="option, index of quiz.options" :expanded="true">
              <div class="option-text">
                <span>{{toLetter(index)}}</span>
                <span>{{option}}</span>
              </div>
            </Button>
          </div>
          <Button :style="(userAnswer===undefined ? 'visibility: hidden;' : '')" v-on:click="handleNext()" class="align-self-end">Next</Button>
      </div>
    </Card>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import { getCountries } from '@/services/Country'
import { buildRandomCountryQuiz } from '@/utils/Quiz.utils'
import type { Quiz } from '@/models/Quiz.model'
import router from '@/router'

export default defineComponent({
    data(): { score: number, quiz?: Quiz, answer?: number, userAnswer?: number } {
      return {
        userAnswer: undefined,
        answer: undefined,
        score: 0,
        quiz: undefined
      }
    },
    methods: {
      toLetter(index:number) {
        return String.fromCharCode(index + 65);
      },
      generateRandomQuiz() {
        getCountries().then(buildRandomCountryQuiz).then(q => {
          this.answer = undefined;
          this.userAnswer = undefined;
          this.quiz = q;
        });
      },
      submitAnswer(index: number) {
        this.userAnswer = index;
        this.answer = this.quiz?.answerIndex;
        if(this.answer === this.userAnswer) {
          this.score += 1;
        }
      },
      getIcon(index: number) {
        if(index === this.answer) {
          return 'check_circle_outline';
        }
        if(index === this.userAnswer) {
          return 'highlight_off';
        }
      },
      getClass(index: number) {
        if(index === this.answer) {
          return 'success';
        }
        if(index === this.userAnswer) {
          return 'error';
        }
      },
      handleNext() {
        if(this.answer === this.userAnswer) {
          this.generateRandomQuiz();
        } else {
          router.push({ path: '/result', query: { score: this.score } });
        }
      }
    },
    setup() {
        return {};
    },
    mounted() {
      this.generateRandomQuiz();
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

  .upper-right-image {
    position: absolute;
    right: 0;
    top: -74px;
  }

  .quiz-container {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .option-text {
    display: flex;
    gap: 3rem;
  }

  .flag {
    height: 54px;
    width: auto;
    object-fit: contain;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

</style>
