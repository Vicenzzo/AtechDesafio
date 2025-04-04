<!-- src/components/UserList.vue -->
<template>
    <div v-if="clients.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in clients" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="`/detalhes/${user.id}`" class="btn btn-sm btn-info me-2">Detalhes</router-link>
              <router-link :to="`/editar/${user.id}`" class="btn btn-sm btn-warning me-2">Editar</router-link>
              <button class="btn btn-sm btn-danger" @click="$emit('delete', user.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-muted">Nenhum Cliente cadastrado.</div>
  </template>
  
  <script setup>
  defineProps({
    clients: {
      type: Array,
      required: true
    }
  })
  </script>
  