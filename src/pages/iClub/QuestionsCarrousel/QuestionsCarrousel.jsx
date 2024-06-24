import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import questionsArray from '../../../utils/questionsArray';
import QuestionsCarrouselContainer from './styles';

export default function QuestionsCarrousel({ isMobile, isTabletAndMobile }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questionsArray.length);
        setIsTextVisible(true);
        setIsAnimating(true);
      }, 500); // Tempo da animação de opacidade em milissegundos

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Tempo da animação de troca de pergunta em milissegundos
    }, 5000); // Intervalo de 5 segundos de execução da função

    return () => clearInterval(interval);
  }, []);

  return (
    <QuestionsCarrouselContainer
      className="section-size"
      ismobile={isMobile}
      istabletandmobile={isTabletAndMobile}
      data-aos="fade"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="blur" />
      <p
        className={`${isMobile ? 'H5' : 'H3'} ${isAnimating ? 'translate' : ''} ${isTextVisible ? 'visible' : 'invisible'} question_text`}
        onAnimationEnd={() => setIsAnimating(false)}
      >
        {questionsArray[currentIndex]}
      </p>
    </QuestionsCarrouselContainer>
  );
}

QuestionsCarrousel.propTypes = ({
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
});
