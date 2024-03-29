<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProviderQuestion from '../Provider/ProviderQuestion.js'

const route = useRoute()
const questions = ref(null)

onMounted(async () => {
  const id = route.params.id
  questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(id)
  console.log(questions.value)
})
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Questionnaire</h1>
    <div v-if="questions">
      <h2 class="mb-3">Questions</h2>
      <div class="list-group">
        <div v-for="question in questions" :key="question.id" class="list-group-item">
          <p class="mb-0">{{ question.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>