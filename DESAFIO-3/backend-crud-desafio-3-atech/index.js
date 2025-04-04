// backend/index.js
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

let clients = []
let idCounter = 1

// Listar Clientes
app.get('/clients', (req, res) => {
    res.json(clients)
})

// Criar Cliente
app.post('/clients', (req, res) => {
    const user = { id: idCounter++, ...req.body }
    clients.push(user)
    res.status(201).json(user)
})

// Ver detalhes
app.get('/clients/:id', (req, res) => {
    const user = clients.find(p => p.id === parseInt(req.params.id))
    user ? res.json(user) : res.status(404).send()
})

// Editar
app.put('/clients/:id', (req, res) => {
    const index = clients.findIndex(p => p.id === parseInt(req.params.id))
    if (index !== -1) {
        clients[index] = { ...clients[index], ...req.body }
        res.json(clients[index])
    } else {
        res.status(404).send()
    }
})

// Deletar
app.delete('/clients/:id', (req, res) => {
    clients = clients.filter(p => p.id !== parseInt(req.params.id))
    res.status(204).send()
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
