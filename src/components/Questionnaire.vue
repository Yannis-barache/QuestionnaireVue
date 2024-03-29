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
  console.log(questions.value)
})

const createQuestion = async () => {
  const id = route.params.id
  await ProviderQuestion.createQuestion(id, newQuestionTitle.value)
  questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(id) // Refresh the list
}

const deleteQuestion = async (questionId) => {
  const id = route.params.id
  await ProviderQuestion.deleteQuestion(id, questionId)
  questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(id) // Refresh the list
}

const updateQuestion = async (questionId, newTitle) => {
  const id = route.params.id
  await ProviderQuestion.updateQuestion(id, questionId, newTitle)
  questions.value = await ProviderQuestion.getAllQuestionsQuestionnaire(id) // Refresh the list
}
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
          <button class="btn btn-danger" @click="deleteQuestion(question.id)">Delete</button>
          <button class="btn btn-primary" @click="updateQuestion(question.id, 'New title')">Update</button> <!-- Replace 'New title' with the new title -->
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