const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtosController');
router.get('/', produtoController.listar);
router.post('/', produtoController.adicionar);
router.put('/:id', produtoController.editar);
router.delete('/:id', produtoController.excluir); 

module.exports = router;