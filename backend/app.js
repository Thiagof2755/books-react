const express = require('express');
const rotaLivros = require('./routes/livros');
const rotaFavoritos = require('./routes/favoritos');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors({origin: "*"}));
app.use(express.json());
app.use('/livros', rotaLivros);
app.use('/favoritos', rotaFavoritos);
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
