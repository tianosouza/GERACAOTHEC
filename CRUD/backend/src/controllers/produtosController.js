const Produto = require('../models/produtoModel');
exports.listar = (req, res) => {
  res.status(200).json(Produto.listar());
};
exports.adicionar = (req, res) => {
  const novoProduto = req.body; Produto.adicionar(novoProduto); 
  res.status(201).json({ message: 'Produto adicionado com sucesso' });
};
exports.editar = (req, res) => {
  const id = req.params.id; 
  const dadosAtualizados = req.body; Produto.editar(id, dadosAtualizados); 
  res.status(200).json({
    message: 'Produto editado com sucesso' });
  }; 
exports.excluir = (req, res) => {
  const id = req.params.id; Produto.excluir(id); 
  res.status(200).json({
    message: 'Produto excluído com sucesso' 
  });
};