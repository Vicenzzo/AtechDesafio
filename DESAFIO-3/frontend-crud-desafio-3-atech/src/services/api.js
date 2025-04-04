// src/services/api.js
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getPeople = () => api.get('/clients')
export const getUser = (id) => api.get(`/clients/${id}`)
export const createUser = (user) => api.post('/clients', user)
export const updateUser = (id, user) => api.put(`/clients/${id}`, user)
export const deleteUser = (id) => api.delete(`/clients/${id}`)
