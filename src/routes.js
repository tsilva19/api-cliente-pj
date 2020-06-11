const express = require('express');
const ConsultaController = require('./controllers/ConsultaController')


const routes = express.Router();

routes.get('/', ConsultaController.show);

routes.get('/clientes', ConsultaController.showOne);



module.exports = routes;