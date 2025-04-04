<!-- src/pages/Home.vue -->
<template>
    <div class="container mt-4">
      <h2>Cadastro de Clientes</h2>
  
      <router-link to="/adicionar" class="btn btn-success mb-3">Cadastrar Cliente</router-link>
  
      <UserList
        :clients="clients"
        @delete="handleDelete"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getPeople, deleteUser } from '../services/api'
  import UserList from '../components/UserList.vue'
  
  const clients = ref([])
  
  async function loadPeople() {
    const res = await getPeople()
    clients.value = res.data
  }
  
  async function handleDelete(id) {
    await deleteUser(id)
    await loadPeople()
  }
  
  onMounted(loadPeople)
  </script>
  