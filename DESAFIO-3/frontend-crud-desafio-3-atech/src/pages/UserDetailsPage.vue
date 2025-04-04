<template>
    <div class="container mt-4">
      <h2>Detalhes do Cliente</h2>
      <UserDatails v-if="user" :user="user" @close="goBack" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getUser } from '../services/api'
  import UserDatails from '../components/UserDatails.vue'
  
  const route = useRoute()
  const router = useRouter()
  const user = ref(null)
  
  onMounted(async () => {
    const res = await getUser(route.params.id)
    user.value = res.data
  })
  
  function goBack() {
    router.push('/')
  }
  </script>
  