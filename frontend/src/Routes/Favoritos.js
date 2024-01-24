import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import livroImg from '../Images/livro.png';
import { getFavoritos, deleteFavorito } from '../Services/favoritos';

const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px;
`;

const ResultadoContainer = styled.div`
   display: flex;
   overflow-x: auto;
   justify-content: center;
   padding: 20px 0;
`;

const Resultado = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 20px;
   cursor: pointer;
   text-align: center;
   padding: 0 20px;
   border: 1px solid transparent;
   transition: border 0.3s ease;

   p {
       width: 200px;
       color: #FFF;
       margin-bottom: 10px;
   }

   img {
       width: 100px;
       border: 2px solid #FFF;
       border-radius: 5px;
   }

   &:hover {
       border: 1px solid white;
   }
`;

function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        async function fetchFavoritos() {
            try {
                const favoritosDaAPI = await getFavoritos();
                setFavoritos(favoritosDaAPI);
            } catch (error) {
                console.error('Error fetching favoritos:', error);
            }
        }

        fetchFavoritos();
    }, []);

    async function deletarFavorito(id) {
        await deleteFavorito(id);
        try {
            const favoritosDaAPI = await getFavoritos();
            setFavoritos(favoritosDaAPI);
            alert(`Livro de id: ${id} deletado!`);
        } catch (error) {
            console.error('Error fetching favoritos:', error);
        }
    }

    return (
        <AppContainer>
            <Titulo>Aqui estão seus livros favoritos:</Titulo>
            <ResultadoContainer>
                {favoritos.map((favorito) => (
                    <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
                        <img src={livroImg} alt="livro" />
                        <p>{favorito.nome}</p>
                    </Resultado>
                ))}
            </ResultadoContainer>
        </AppContainer>
    );
}

export default Favoritos;