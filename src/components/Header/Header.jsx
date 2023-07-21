import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';
import yogaLogo from '../../images/yoga_iclub.svg';
import defaultScrollProps from '../../utils/defaultScrollProps';
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
          <Link to="start" {...defaultScrollProps}> início </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="iclub" {...defaultScrollProps}> yoga iclub </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="students" {...defaultScrollProps}> alunos </Link>
        </button>

        <Link className="link" to="prices" {...defaultScrollProps}>
          <img alt="logo" src={yogaLogo} />
        </Link>

        <button className={handleButtonClass()} type="button">
          <Link to="prices" {...defaultScrollProps}> preços </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="doubts" {...defaultScrollProps}> dúvidas </Link>
        </button>
        <button className={handleButtonClass()} type="button">
          <Link to="contact" {...defaultScrollProps}> contato </Link>
        </button>
      </nav>

    </HeaderContainer>
  );
}

Header.propTypes = ({
  isTablet: PropTypes.bool.isRequired,
});

export default Header;
