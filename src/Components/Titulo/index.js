import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${proops=>proops.cor  || '#000'};
    font-size: ${proops=>proops.tamanhoFonte || '18px'};
    text-align: ${proops=>proops.alinhamento || 'center'};
    margin: 0;
`