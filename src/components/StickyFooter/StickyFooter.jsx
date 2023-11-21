import React, { useState } from 'react';
import { Link } from 'react-scroll';
import BlackImage from '../../images/BlackImage.svg';
import HeaderContainer from './styles';
import defaultScrollProps from '../../utils/defaultScrollProps';

function StickyFooter() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY >= 130) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (

    <HeaderContainer scrolled={scrolled}>
      <div className="subContainer">
        <div className="yogaText">
          <span>Yoga iClub com</span>
          <span>50% de desconto</span>
        </div>

        <img src={BlackImage} alt="Black img" />

        <button className="button" type="button">
          <Link className="link" to="prices" {...defaultScrollProps}>
            <span>QUERO meus</span>
            <span>50% off</span>
          </Link>

        </button>
      </div>

    </HeaderContainer>
  );
}

export default StickyFooter;
