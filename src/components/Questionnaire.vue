<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProviderQuiz from '../Provider/ProviderQuiz.js'

const route = useRoute()
const questionnaire = ref(null)

onMounted(async () => {
  const id = route.params.id
  questionnaire.value = await ProviderQuiz.getQuizbyId(id)
})
</script>

<template>
  <div>
    <h1>Questionnaire</h1>
    <div v-if="questionnaire">
      <h2>{{ questionnaire.name }}</h2>
      <div v-for="question in questionnaire.questions" :key="question.id">
        <p>{{ question.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>