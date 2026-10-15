# 🏢 Portal Singapura

Este projeto é uma aplicação full stack composta por um frontend em React para apresentar a identidade visual e os projetos da empresa Singapura, além de uma API em Node.js/Express com PostgreSQL para autenticação e gestão de dados.

O objetivo principal é criar um portal institucional moderno, com uma apresentação visual de áreas de atuação, projetos e informações da empresa, ao mesmo tempo em que oferece uma API segura para operações administrativas.

## ✨ Visão geral

O repositório está dividido em duas partes principais:

- Frontend: construído com React + Vite + Tailwind, responsável pela landing page, navegação, áreas de atuação, projetos e informações institucionais.
- Backend: construído com Node.js + Express, responsável por autenticação, validação de usuários e operações com tabelas, além de integração com PostgreSQL.

Essa estrutura permite separar a camada de apresentação da camada de negócio e facilitar a evolução do projeto em etapas futuras.

## 🧩 Funcionalidades principais

### Frontend

- Página inicial com visual institucional e identidade da empresa
- Seção de áreas de atuação
- Listagem de projetos com filtro por categoria
- Seção “Sobre” com apresentação da empresa
- Rodapé com informações de contato e links de navegação
- Estrutura de rotas para navegação interna

### Backend

- Autenticação de usuários com JWT
- Cadastro e login de usuários
- Proteção de rotas via middleware de autenticação
- CRUD de tabelas do banco
- Integração com banco PostgreSQL
- Validação básica de campos e respostas HTTP

## 🛠️ Tecnologias utilizadas

### Frontend

- React
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript

### Backend

- Node.js
- Express
- PostgreSQL
- pg
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

## 📁 Estrutura do projeto

```bash
projeto_portal_singa/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   └── routes/
│   ├── app.js
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── package-lock.json
├── README.md
└── .gitignore
```

## 🚀 Como executar o projeto

### 1) Backend

Acesse a pasta do backend e instale as dependências:

```bash
cd backend
npm install
```

Crie um arquivo `.env` com base no `.env.example` e configure suas credenciais do PostgreSQL e o segredo JWT:

```bash
cp .env.example .env
```

Exemplo de configuração:

```env
DB_USER=seu_usuario_postgres
DB_HOST=localhost
DB_NAME=nome_do_banco
DB_PASSWORD=sua_senha
DB_PORT=5432
JWT_SECRET=sua_chave_secreta
PORT=3000
NODE_ENV=development
```

Inicie a API:

```bash
npm start
```

Se quiser rodar em modo de desenvolvimento com reinicialização automática:

```bash
npm run nodemon
```

### 2) Frontend

Em outro terminal, execute:

```bash
cd frontend
npm install
npm run dev
```

O app estará disponível em um endereço local do Vite, normalmente:

```bash
http://localhost:5173
```

## 🔐 Endpoints principais da API

### Autenticação

- `POST /api/auth/cadastro` — cadastro de usuário
- `POST /api/auth/login` — login e geração de token JWT

Para rotas protegidas, envie o token no header:

```http
Authorization: Bearer SEU_TOKEN_JWT
```

## 📌 Observações do projeto

- O frontend foi pensado como um portal institucional para a empresa Singapura, com foco em apresentação visual e navegação.
- O backend foi estruturado para servir como base para autenticação e operações administrativas.
- A API pode ser expandida para outros módulos do sistema, como estoque, clientes, relatórios ou gestão interna.
- O projeto já possui a base para evoluir em uma solução maior, com arquitetura modular e separação entre frontend e backend.

## ✅ Status

Este projeto está em desenvolvimento e funcionando como base para um portal institucional com integração de API e banco de dados.

## 👨‍💻 Equipe de Desenvolvimento

Desenvolvido pelo time de TI (Tecnologia da Informação) da Singapura Construções e Montagens Industriais, composto pelos desenvolvedores Gustavo Millamonte e Judisson Mateus Aguiar dos Anjos.
