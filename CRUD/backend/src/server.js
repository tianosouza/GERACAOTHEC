const express = require('express'); 
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const userRoutes = require('./routes/usuarioRoutes');

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/usuarios', userRoutes);
app.use('/usuarios/:id', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API de Produtos');
});
