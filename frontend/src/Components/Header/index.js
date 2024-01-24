import styled from 'styled-components'
import Logo from '../Logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    &:hover {
        transform: scale(1.1);
    }
`

function Header () {
    return (
        <HeaderContainer>
            <StyledLink to={'/'}>
                <Logo className='logo' />
            </StyledLink>
            <OpcoesHeader className='opcoes' />
            <IconesHeader className='icones' />
        </HeaderContainer>
    )
}

export default Header
