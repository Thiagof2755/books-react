import React, { useEffect, useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { getLivros } from '../../Services/livros';
import livroImg from '../../Images/livro.png'; 
import { postFavorito } from '../../Services/favoritos';

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 100px 0;
    width: 100%;
    font-family: 'Arial', sans-serif;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 60px;
`;

const ResultadoContainer = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 20px 0;
    justify-content: center;
`;

const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    p {
        font-size: 18px;
        margin-top: 10px;
        color: #FFF;
    }

    img {
        width: 100px;
        border: 2px solid #FFF;
        border-radius: 5px;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    
    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro de id:${id} inserido!`)
}

    const handleInputBlur = (evento) => {
        const textoDigitado = evento.target.value;
        const resultadoPesquisa = livros.filter((livro) => livro.nome.includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleInputBlur(event);
        }
    };

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={handleInputBlur}
                onKeyPress={handleKeyPress}
            />
            <ResultadoContainer>
                {livrosPesquisados.map((livro) => (
                    <Resultado key={livro.nome} onClick={() => insertFavorito(livro.id)}>
                        <img src={livroImg} alt={livro.nome} />
                        <p>{livro.nome}</p>
                    </Resultado>
                ))}
            </ResultadoContainer>
        </PesquisaContainer>
    );
    }
export default Pesquisa;
