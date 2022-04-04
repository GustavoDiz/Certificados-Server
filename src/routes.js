const express = require('express');

const routes = express.Router();
const Cursos = require('./controllers/cursoController');

routes.get('/',Cursos.index);

//Rotas Cursos
routes.post('/api/cursos/',Cursos.create)
routes.get('/api/cursos/',Cursos.list)
routes.get('/api/cursos.details/:id',Cursos.details)
routes.delete('/api/cursos/:id',Cursos.remove)
routes.put('/api/cursos/:id',Cursos.update)

module.exports = routes;