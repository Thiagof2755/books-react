const fs = require('fs');

function getTodosFavoritos(req, res) {
    return JSON.parse(fs.readFileSync('./favoritos.json', 'utf8'));// ler o arquivo
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));// ler o arquivo
    const livrosFiltrados = livros.filter(livros => livros.id !== id);// filtrar o id criando a lista sem o id selecionado
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));// sobre-escrever o arquivo filtrado
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));// ler o arquivo
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));// ler o arquivo
    const livroInserido = livros.find(livro => livro.id === id);// filtrar o id 
    fs.writeFileSync("favoritos.json", JSON.stringify([...favoritos, livroInserido]));// sobre-escrever o arquivo inserindo o id


}
    



module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito

};
