<script setup>
import { ref, onMounted } from 'vue'
import ProviderQuiz from '../Provider/ProviderQuiz.js'

const questionnaires = ref([])
const selectedQuiz = ref(null)

onMounted(async () => {
  questionnaires.value = await ProviderQuiz.getAllQuiz()
})

const selectQuiz = (quiz) => {
  selectedQuiz.value = quiz
}

defineExpose({
  questionnaires,
  selectedQuiz,
  selectQuiz
})
</script>

<template>
  <div>
    <h1>Questionnaires</h1>
    <div v-for="questionnaire in questionnaires" :key="questionnaire.quiz_id" @click="selectQuiz(questionnaire)">
      <h2>{{ questionnaire.name }}</h2>
      <ul>
        <li v-for="(question, index) in questionnaire.questions" :key="index">
          {{ question }}
        </li>
      </ul>
    </div>
    <div v-if="selectedQuiz">
      <h2>Selected Quiz: {{ selectedQuiz.name }}</h2>
      <!-- INFORMATIONS SUR LE QUIZ SELECTIONNÉ -->
    </div>
  </div>
</template>

<style scoped>

</style>