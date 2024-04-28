import React from 'react';
import HeaderContainer from './HeaderStyles';
import logo from '../../images/yoga_iclub.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" className="logo-header" />
    </HeaderContainer>
  );
}

export default Header;
