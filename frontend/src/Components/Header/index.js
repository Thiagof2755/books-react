import styled from 'styled-components'
import Logo from '../Logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';


const HeaderContainer = styled.header`

    background-color: #FFF;
    display: flex;
    justify-content: center;

`


function Header (){

    return (
        <HeaderContainer>
            <Logo className = 'logo' />
            <OpcoesHeader className = 'opcoes' />
            <IconesHeader className = 'icones' />
        </HeaderContainer>
    )
}

export default Header 