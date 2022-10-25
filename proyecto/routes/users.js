var express = require('express');
var router = express.Router();

let usuarioController = require('../controllers/usuario')

//Crear un nuevo administrador
router.get('/create', usuarioController.registro_create_get);
router.post('/create',usuarioController.registro_create_post);

module.exports = router;

