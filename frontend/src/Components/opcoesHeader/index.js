import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const Opcoes = styled.ul`
    display: flex;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao key={texto}>
                    <StyledLink to={`/${texto.toLocaleLowerCase()}`}>{texto}</StyledLink>
                </Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;