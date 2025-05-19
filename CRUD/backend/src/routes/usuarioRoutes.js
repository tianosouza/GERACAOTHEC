const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

// Listar todos os usuários
router.get('/usuarios', UsuarioController.listar);

// Consultar usuário por ID
router.get('/usuarios/:id', UsuarioController.consultarPorId);

// Criar novo usuário
router.post('/', UsuarioController.criar);

// Atualizar usuário
router.put('/:id', UsuarioController.atualizar);

// Excluir usuário
router.delete('/:id', UsuarioController.excluir);

module.exports = router;