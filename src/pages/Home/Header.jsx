import React from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import HeaderContainer from './HeaderStyles';
import logo from '../../images/yoga_iclub.svg';

function Header() {
  const tabletBreakpoint = useMediaQuery({ query: '(max-width: 960px)' });
  const handleAulasTxt = () => {
    let txt = 'aulas online';
    if (tabletBreakpoint) {
      txt = 'aulas';
    }
    return txt;
  };

  const handleEventosTxt = () => {
    let txt = 'eventos presencias';
    if (tabletBreakpoint) {
      txt = 'eventos';
    }
    return txt;
  };

  const defaultScrollProps = {
    spy: true,
    smooth: 'easeInOutQuart',
    duration: 900,
    offset: -68,
    delay: 300,
  };

  return (
    <HeaderContainer>
      <Link {...defaultScrollProps} to="aulas-online" className="link-header " type="button">{handleAulasTxt()}</Link>
      <Link {...defaultScrollProps} to="aulas-presenciais" className="link-header desktop-links" type="button">aulas presenciais</Link>
      <img src={logo} alt="Logo" className="logo-header-home" />
      <Link {...defaultScrollProps} to="eventos" className="link-header" type="button">{handleEventosTxt()}</Link>
      <Link {...defaultScrollProps} to="contatos" className="link-header desktop-links" type="button">contato</Link>
    </HeaderContainer>
  );
}

export default Header;
