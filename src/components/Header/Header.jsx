import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import yogaLogo from '../../images/yoga_iclub.svg';
import HeaderContainer from './styles';

function Header({ isTablet }) {
  const handleButtonClass = () => {
    if (isTablet) {
      return 'text-lg button';
    }
    return 'text-xl button';
  };

  return (

    <HeaderContainer>
      <nav className="section-size headerNav">
        <button className={handleButtonClass()} type="button">
          <Link to="start" duration={4000} delay={100} offset={-96}> início </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="iclub" duration={4000} delay={100} offset={-96}> yoga iclub </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="students" duration={4000} delay={100} offset={-96}> alunos </Link>
        </button>

        <Link className="link" to="prices" duration={4000} delay={100} offset={-96}>
          <img alt="logo" src={yogaLogo} />
        </Link>

        <button className={handleButtonClass()} type="button">
          <Link to="prices" duration={4000} delay={100} offset={-96}> preços </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="doubts" duration={4000} delay={100} offset={-96}> dúvidas </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="contact" duration={4000} delay={100} offset={-96}> contato </Link>
        </button>
      </nav>

    </HeaderContainer>
  );
}

Header.propTypes = ({
  isTablet: PropTypes.bool.isRequired,
});

export default Header;
