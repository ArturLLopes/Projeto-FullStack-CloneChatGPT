// Importa o módulo express e o controlador responsável pelo envio do texto
const express = require("express");
const promptController = require("../controllers/prompt-controller");

// Cria um novo roteador do Express
const routes = express.Router();

// Define a rota POST para a URL '/api/prompt', que chama o método 'sendText' do controlador
routes.post('/api/prompt', promptController.sendText);

// Exporta as rotas para serem utilizadas em outros arquivos
module.exports = routes;
