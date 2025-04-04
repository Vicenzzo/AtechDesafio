<template>
    <div class="container mt-4">
      <h2>{{ isEdit ? 'Editar Cliente' : 'Cadastrar Cliente' }}</h2>
      <UserForm :user="user" @submit="handleSave" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getUser, createUser, updateUser } from '../services/api'
  import UserForm from '../components/UserForm.vue'
  
  const route = useRoute()
  const router = useRouter()
  const user = ref(null)
  const isEdit = !!route.params.id
  
  onMounted(async () => {
    if (isEdit) {
      const res = await getUser(route.params.id)
      user.value = res.data
    }
  })
  
  async function handleSave(data) {
    if (isEdit) {
      await updateUser(route.params.id, data)
    } else {
      await createUser(data)
    }
    router.push('/')
  }
  </script>
  