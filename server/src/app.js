// Importa os módulos necessários
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes'); // Importa as rotas da aplicação

// Carrega as variáveis de ambiente a partir do arquivo .env
require("dotenv").config();

// Cria uma instância do servidor Express
const app = express();

// Configura o Express para parsear requisições com corpo JSON
app.use(express.json());

// Habilita o CORS para permitir solicitações de diferentes origens
app.use(cors());

// Configura as rotas para serem usadas pela aplicação
app.use(routes);

// Exporta a instância do app para ser usada em outros arquivos, como no arquivo principal
module.exports = app;
