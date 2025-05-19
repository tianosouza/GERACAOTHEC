const express = require('express'); 
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
app.use(express.json());
app.use('/produtos', produtoRoutes);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API de Produtos');
});
