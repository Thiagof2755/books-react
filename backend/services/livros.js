const fs = require('fs');

function getTodosLivros(req, res) {
    return JSON.parse(fs.readFileSync('./livros.json', 'utf8'));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.find(livro => livro.id === id);
    return livroFiltrado;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function removeLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceRemovido = livrosAtuais.findIndex(livro => livro.id === id);
    livrosAtuais.splice(indiceRemovido, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removeLivro
};
