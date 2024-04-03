<script setup>
import { ref, onMounted } from 'vue'
import ProviderQuiz from '../Provider/ProviderQuiz.js'
import Questionnaire from "@/components/Questionnaire.vue";
import Quest from "@/components/Quest.vue";

const questionnaires = ref([])
const selectedQuiz = ref(null)
const newQuizName = ref('') // Pour créer un nouveau quiz

onMounted(async () => {
  questionnaires.value = await ProviderQuiz.getAllQuiz()
})


const selectQuiz = (quiz) => {
  selectedQuiz.value = quiz
}

const createQuiz = async () => {
  if (newQuizName.value) {
    await ProviderQuiz.createQuiz(newQuizName.value)
    questionnaires.value = await ProviderQuiz.getAllQuiz() // Refresh the list
    newQuizName.value = '' // Reset the input field
  }
}
const deleteQuiz = async (quizId) => {
  await ProviderQuiz.deleteQuiz(quizId)
  questionnaires.value = await ProviderQuiz.getAllQuiz() // Refresh the list
}

defineExpose({
  questionnaires,
  selectedQuiz,
  selectQuiz,
  newQuizName,
  deleteQuiz,
  createQuiz
})
</script>

<template>
  <div class="container">
    <h1 class="text-center my-4">Questionnaires</h1>
    <div class="row">
      <div class="col-md-6" v-for="questionnaire in questionnaires" :key="questionnaire.quiz_id">
        <Quest :questionnaire="questionnaire" :questionnaires="questionnaires" :delete-quiz="deleteQuiz" />
      </div>
    </div>
    <div class="mt-4">
      <h2>Create a new quiz</h2>
      <input v-model="newQuizName" type="text" class="form-control" placeholder="Quiz name">
      <button class="btn btn-success" @click="createQuiz">Create</button>
    </div>
  </div>
</template>

<style scoped></style>