<template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Nome completo</label>
        <input v-model="form.name" type="text" class="form-control" id="name" required />
      </div>
  
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input v-model="form.email" type="email" class="form-control" id="email" required />
      </div>
  
      <div class="mb-3">
        <label for="phone" class="form-label">Telefone</label>
        <input v-model="form.phone" type="tel" class="form-control" id="phone" />
      </div>
  
      <button type="submit" class="btn btn-primary me-2">
        {{ isEdit ? 'Salvar alterações' : 'Cadastrar' }}
      </button>
  
      <router-link to="/" class="btn btn-secondary">Voltar</router-link>

    </form>
  </template>
  
  <script setup>
  import { reactive, watch, toRefs } from 'vue'
  import { computed } from 'vue'
  
  const props = defineProps({
    user: {
      type: Object,
      default: () => ({ name: '', email: '', phone: '' })
    }
  })
  
  const emit = defineEmits(['submit'])
  
  const form = reactive({ ...props.user })
  
  watch(() => props.user, (newUser) => {
    Object.assign(form, newUser)
  })
  
  const isEdit = computed(() => !!props.user?.id)
  
  function handleSubmit() {
    emit('submit', { ...form })
  }
  </script>
  