<script setup>
import { ref, onMounted } from 'vue'

</script>

<template>
  <div>
    <h1>Questionnaires</h1>
    <div v-for="questionnaire in questionnaires" :key="questionnaire.text">
      <h2>{{ questionnaire.text }}</h2>
      <div v-for="question in questionnaire.getQuestions()" :key="question.getId()">
        <p>{{ question.getQuestion() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>