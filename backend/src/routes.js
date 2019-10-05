const express = require('express');

const routes = express.Router();

// req.query = acessar os query params (filtro)
// req.params = acessar route params (edição e delete)
// req.body = acessar o corpo da mensagem (criacao e edicao)

routes.get('/users', (req, res) =>{
    return res.json(req.body);
});

module.exports = routes;