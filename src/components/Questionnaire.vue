<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProviderQuestion from '../Provider/ProviderQuestion.js'

const route = useRoute()
const questions = ref(null)
const newQuestionTitle = ref('') // Pour créer une nouvelle question

onMounted(async () => {
  const id = route.params.id
  questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(id)
})

const deleteQuestion = async (questionId) => {
  await ProviderQuestion.deleteQuestion(questionId)
  questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(route.params.id) // Refresh the list
}

const updateQuestion = async (question) => {
  const newTitle = question.newName
  if (newTitle) {
    await ProviderQuestion.updateQuestion(question.id, newTitle)
    questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(route.params.id) // Refresh the list
  }
}

const createQuestion = async () => {

  if (newQuestionTitle.value) {
    await ProviderQuestion.createQuestion(newQuestionTitle.value, route.params.id)
    questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(route.params.id) // Refresh the list
    newQuestionTitle.value = '' // Reset the input field
  }
}

defineExpose({
  questions,
  newQuestionTitle,
  deleteQuestion,
  updateQuestion,
  createQuestion
})
</script>

<template>
  <div class="container mt-5">
    <router-link to="/" class="btn btn-primary mb-4">Home</router-link>
    <h1 class="mb-4">Questionnaire</h1>
    <div v-if="questions">
      <h2 class="mb-3">Questions</h2>
      <div class="list-group">
        <div v-for="question in questions" :key="question.id" class="list-group-item">
          <p class="mb-0">{{ question.title }}</p>
          <input v-model="question.newName" type="text" class="form-control" placeholder="Nouveau nom pour la question">
          <button class="btn btn-danger" @click="deleteQuestion(question.id)">Delete</button>
          <button class="btn btn-primary" @click="updateQuestion(question)">Update</button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h2>Create a new question</h2>
      <input v-model="newQuestionTitle" type="text" class="form-control" placeholder="Question title">
      <button class="btn btn-success" @click="createQuestion">Create</button>
    </div>
  </div>
</template>

<style scoped></style>