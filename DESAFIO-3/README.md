# 📋 VUE.JS + NODE.JS – CRUD de Pessoas

Aplicação CRUD para cadastro de pessoas, com **Vue.js** no frontend e **Node.js** no backend. A interface permite **cadastrar, visualizar, editar e excluir** registros de pessoas com nome, e-mail e telefone.

> 🌎 Disponível em: **Português brasileiro**

---

## 🌐🚀 Instalação

Você precisa ter o **Node.js** instalado na sua máquina.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Vá para a pasta do backend
cd backend-crud-desafio-3-atech

# Instale as dependências do backend
npm install

# Inicie o backend
node index.js

# Vá para a pasta do frontend
cd ../frontend-crud-desafio-3-atech

# Instale as dependências do frontend
npm install

# Rode o frontend
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

O backend estará rodando em: `http://localhost:3000`

---

## ✅ Funcionalidades

- Cadastrar nova pessoa (nome, e-mail e telefone)
- Listar todas as pessoas cadastradas
- Visualizar os detalhes de uma pessoa
- Editar informações de uma pessoa existente
- Excluir uma pessoa

---

## ⚙️ Como funciona

A aplicação é dividida em dois projetos independentes:

### 🔧 Backend (API REST)

- Desenvolvido em **Node.js** com **Express**
- Armazena os dados em memória (sem banco de dados)
- Rotas disponíveis:
  - `GET /clients` – Lista todas as pessoas
  - `POST /clients` – Cadastra nova pessoa
  - `GET /clients/:id` – Busca uma pessoa específica
  - `PUT /clients/:id` – Atualiza uma pessoa existente
  - `DELETE /clients/:id` – Remove uma pessoa

### 💻 Frontend (Vue.js + Vue Router + Axios)

- Desenvolvido com **Vue 3** usando **Vite**
- Navegação com **Vue Router**
- Comunicação com o backend via **Axios**
- Organização por componentes:
  - `UserForm.vue`: Formulário de cadastro/edição
  - `UserList.vue`: Tabela de listagem
  - `UserDetails.vue`: Visualização de detalhes

---

## 🎨 Estilo

- Estilizado com **Bootstrap 5**
- Layout responsivo e limpo

---

## 🧩 Tecnologias usadas

- **Vue.js** – Framework JavaScript progressivo
- **Bootstrap** – Framework CSS para responsividade
- **Node.js** – Ambiente JavaScript para o backend
- **Express** – Framework web para o Node
- **Axios** – Cliente HTTP para comunicação entre frontend e backend
- **Vite** – Ferramenta moderna de build para Vue
