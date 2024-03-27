<script setup>
import { ref } from 'vue'
import Questionnaire from "@/components/Questionnaire.js";

const Questionnaires = [
    new Questionnaire("Questionnaire 1"),
    new Questionnaire("Questionnaire 2"),
    new Questionnaire("Questionnaire 3"),
]

for (let i = 0; i < Questionnaires.length; i++) {
    Questionnaires[i].addQuestion("Question 1")
    Questionnaires[i].addQuestion("Question 2")
    Questionnaires[i].addQuestion("Question 3")
}

const questionnaires = ref(Questionnaires)


</script>

<template>
  <div>
    <h1>Questionnaires</h1>
    <div v-for="questionnaire in questionnaires" :key="questionnaire.text">
      <h2>{{ questionnaire.text }}</h2>
      <div v-for="question in questionnaire.getQuestions()" :key="question.id">
        <p>{{ question.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
