
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Rota principal do Universal Geek
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Disponibilização dos arquivos HTML, CSS, JS e imagens
app.use(express.static(path.join(__dirname, 'public')));

// Rota de verificação do servidor
app.get('/status', (req, res) => {
    res.send('Servidor Universal Geek funcionando!');
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
