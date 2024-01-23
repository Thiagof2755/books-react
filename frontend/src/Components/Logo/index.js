import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/Logo.svg';

const LogoWrapper = styled.div`
   display: flex;
   font-size: 30px;
   margin-left: 1%;
`;

const LogoImg = styled.img`
   margin-right: 10px;
   width: 60px;
`;

function Logo() {
   return (
      <LogoWrapper>
         <LogoImg src={logo} alt='logo' />
         <p><strong>Books</strong>React</p>
      </LogoWrapper>
   );
}

export default Logo;