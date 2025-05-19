class Produto {
  static produtos = []; 
  static listar() { 
    return this.produtos;
  } 
  static adicionar(produto) {
    this.produtos.push(produto); 
  } 
  static editar(id, dadosAtualizados) {
    const index = this.produtos.findIndex(p => p.id == id); 
    if (index !== -1) { 
      this.produtos[index] = { 
        ...this.produtos[index], ...dadosAtualizados 
      }; 
    } 
  } 
  static excluir(id) { 
    this.produtos = this.produtos.filter(p => p.id != id);
  } 
} 
module.exports = Produto;