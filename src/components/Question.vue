<script setup>
import { ref } from 'vue'
defineProps({
  question: Object,
  deleteQuestion: Function,
  updateQuestion: Function,
})


</script>

<template>
  <p class="mb-0">{{ question.title }}</p>
  <input v-model="question.newName" type="text" class="form-control" placeholder="Nouveau nom pour la question">
  <button class="btn btn-danger" @click="deleteQuestion(question.id)">Delete</button>
  <button class="btn btn-primary" @click="updateQuestion(question)">Update</button>


</template>

<style scoped>

</style>