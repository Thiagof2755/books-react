import React from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

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

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    p {
        font-size: 18px;
        margin-left: 15px;
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
    const [textoPesquisa, setTextoPesquisa] = useState('');

const handlePesquisa = () => {
    const resultadoPesquisa = livros.filter((livro) => livro.nome.toLowerCase().includes(textoPesquisa.toLowerCase()));
    setLivrosPesquisados(resultadoPesquisa);
};

    const handleKeyDown = (evento) => {
        if (evento.key === 'Enter') {
            handlePesquisa();
        }
    };

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputContainer>
                <Input
                    placeholder="Escreva sua próxima leitura"
                    onChange={(evento) => setTextoPesquisa(evento.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </InputContainer>
            {livrosPesquisados.map((livro) => (
                <Resultado key={livro.id}>
                    <img src={livro.src} alt={livro.nome} />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;