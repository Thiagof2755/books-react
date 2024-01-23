const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro} = require('../services/livros');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;
        const livro = getLivroPorId(id);
        if (!livro) {
            res.status(404).send("Livro não encontrado");
        } else {
            res.send(livro);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        if (!livroNovo) {
            res.status(400).send("Dados do livro não fornecidos");
        } else if (!livroNovo.nome) {
            res.status(422).send("O campo nome é obrigatório");
        } else {
            insereLivro(livroNovo);
            res.status(201).send("Livro inserido com sucesso");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        
        if (!id || !body) {
            res.status(400).send("Dados inválidos");
        } else if (isNaN(id)) {
            res.status(400).send("ID inválido");
        } else {
            const livro = getLivroPorId(id);
            if (!livro) {
                res.status(404).send("Livro não encontrado");
            } else {
                modificaLivro(body, id);
                res.send("Item modificado com sucesso");
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send("ID do livro não fornecido");
        } else if (isNaN(id)) {
            res.status(400).send("ID inválido");
        } else {
            const livro = getLivroPorId(id);
            if (!livro) {
                res.status(404).send("Livro não encontrado");
            } else {
                removeLivro(id);
                res.send("Item removido com sucesso");
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};
