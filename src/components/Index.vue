<script setup>
import { ref, onMounted } from 'vue'
import ProviderQuiz from '../Provider/ProviderQuiz.js'

const questionnaires = ref([])
const selectedQuiz = ref(null)
const newQuizName = ref('') // Pour créer un nouveau quiz

onMounted(async () => {
  questionnaires.value = await ProviderQuiz.getAllQuiz()
})

const selectQuiz = (quiz) => {
  selectedQuiz.value = quiz
}

const deleteQuiz = async (quizId) => {
  await ProviderQuiz.deleteQuiz(quizId)
  questionnaires.value = await ProviderQuiz.getAllQuiz() // Refresh the list
}

const updateQuiz = async (quiz) => {
  if (quiz.newName) {
    await ProviderQuiz.updateQuiz(quiz.quiz_id, quiz.newName)
    questionnaires.value = await ProviderQuiz.getAllQuiz() // Refresh the list
    quiz.newName = '' // Reset the input field
  }
}

const createQuiz = async () => {
  if (newQuizName.value) {
    await ProviderQuiz.createQuiz(newQuizName.value)
    questionnaires.value = await ProviderQuiz.getAllQuiz() // Refresh the list
    newQuizName.value = '' // Reset the input field
  }
}

defineExpose({
  questionnaires,
  selectedQuiz,
  selectQuiz,
  newQuizName,
  deleteQuiz,
  updateQuiz,
  createQuiz
})
</script>

<template>
  <div class="container">
    <h1 class="text-center my-4">Questionnaires</h1>
    <div class="row">
      <div class="col-md-6" v-for="questionnaire in questionnaires" :key="questionnaire.quiz_id">
        <div class="card mb-4" @click="selectQuiz(questionnaire)">
          <div class="card-header">
            {{ questionnaire.name }}
            <input v-model="questionnaire.newName" type="text" class="form-control" placeholder="New quiz name">
            <button class="btn btn-danger" @click.stop="deleteQuiz(questionnaire.quiz_id)">Delete</button>
            <button class="btn btn-primary" @click.stop="updateQuiz(questionnaire)">Update</button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Quiz Details</h5>
            <router-link :to="`/questionnaire/${questionnaire.quiz_id}`">
              <p class="card-text">Click to view more details about this quiz.</p>
            </router-link>
          </div>
        </div>
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