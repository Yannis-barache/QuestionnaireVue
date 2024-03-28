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
  <div class="container">
    <h1 class="text-center my-4">Questionnaires</h1>
    <div class="row">
      <div class="col-md-6" v-for="questionnaire in questionnaires" :key="questionnaire.quiz_id">
        <div class="card mb-4" @click="selectQuiz(questionnaire)">
          <div class="card-header">
            {{ questionnaire.name }}
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
  </div>
</template>

<style scoped></style>