<template>
  <header>
      <router-view />
  </header>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  const router = useRouter()
  router.push('/') // Redirige vers la page d'accueil au chargement de l'application
})
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');
</style>
