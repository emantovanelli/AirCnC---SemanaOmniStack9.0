const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// req.query = acessar os query params (filtro)
// req.params = acessar route params (edição e delete)
// req.body = acessar o corpo da mensagem (criacao e edicao)

routes.post('/sessions', SessionController.store);

module.exports = routes;