<template>
  <div v-if="user" class="card mt-3">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <p class="card-text"><strong>Email:</strong> {{ user.email }}</p>
      <p class="card-text">
        <strong>Telefone:</strong>
        {{ user.phone || 'Não informado' }}
      </p>
      <router-link to="/" class="btn btn-secondary">Voltar</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>
