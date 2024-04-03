<script setup>
import ProviderQuiz from "@/Provider/ProviderQuiz.js";
import {ref} from "vue";

defineProps({
  questionnaire: Object,
  questionnaires: Array,
  deleteQuiz: Function,
})

const questionnaires =  ref([])
const selectedQuiz = ref(null)
const newQuizName = ref('') // Pour créer un nouveau quiz


const selectQuiz = (quiz) => {
  selectedQuiz.value = quiz
}


const updateQuiz = async (quiz) => {
  if (quiz.newName) {
    await ProviderQuiz.updateQuiz(quiz.quiz_id, quiz.newName)
    quiz.name = quiz.newName
    questionnaires.value = await ProviderQuiz.getAllQuiz() // Refresh the list
    quiz.newName = '' // Reset the input field
  }
}

defineExpose({
  selectQuiz,
  updateQuiz,

})
</script>

<template>
  <div class="card mb-4" @click="selectQuiz(questionnaire)">
          <div class="card-header">
            {{ questionnaire.name }}
            <input v-model="questionnaire.newName" type="text" class="form-control" placeholder="Nouveau nom pour la question">
            <button class="btn btn-danger" @click.stop="deleteQuiz(questionnaire.quiz_id)">Delete</button>
            <button class="btn btn-primary" @click.stop="updateQuiz(questionnaire)">Update</button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Quiz Details</h5>
            <router-link :to="`/questionnaire/${questionnaire.quiz_id}`">
              <p class="card-text">Cliquez pour voir les questions.</p>
            </router-link>
          </div>
        </div>

</template>

<style scoped>

</style>