class Usuario { 
  static usuarios = []; 
  static listar() { 
    return this.usuarios; 
  } 
  static consultarPorId(id) { 
    return this.usuarios.find(usuario => usuario.id == id); 
  } 
  static criar(usuario) { 
    this.usuarios.push(usuario); 
  } 
  static atualizar(id, dadosAtualizados) { 
    const index = this.usuarios.findIndex(usuario => usuario.id == id); 
    if (index !== -1) { 
      this.usuarios[index] = { 
        ...this.usuarios[index], ...dadosAtualizados
      }; 
    } 
  } 
  static excluir(id) { 
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id); 
  } 
} 
module.exports = Usuario;