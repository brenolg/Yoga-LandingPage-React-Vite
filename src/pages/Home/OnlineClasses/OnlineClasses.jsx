import React, { useEffect, useRef, useState } from 'react';
import OnlineClassesMainContainer from './OnlineClassesStyles';
import Card from './Card';
import ArrowCarrousel from '../../../images/ArrowCarrousel.svg';

function OnlineClasses() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carouselRef = useRef(null);

  function getCarouselSection(currentIndex, totalCards) {
    const thirds = Math.floor(totalCards / 3);
    if (currentIndex < thirds) {
      return 1;
    } if (currentIndex < thirds * 2) {
      return 2;
    }
    return 3;
  }

  useEffect(() => {
    getCarouselSection(currentCardIndex, 7);
  }, [currentCardIndex]);

  const handleClickGoAhead = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 384;
      setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, 6));
    }
  };

  const handleClickGoBack = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 384;
      setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  function getCircleColor(section) {
    const currentSection = getCarouselSection(currentCardIndex, 7);

    return section === currentSection ? '#12393985' : '#8CA09A75';
  }
  return (
    <OnlineClassesMainContainer>
      <h1 className="online-classes-title">Aulas online</h1>
      <div id="wrapper">
        <div id="carousel" ref={carouselRef}>

          <Card text="Práticas constituídas por ásanas (posturas) com permanência, alinhamento, técnicas de respiração (pranayamas) e purificação interna, relaxamento e meditação." className="two" subText="Hatha Yoga" />

          <Card text="Práticas que combinam ásanas (posturas) e pranayamas (respirações) de forma fluída, sendo considerada a melhor meditação ativa em movimento." className="third" subText="Vinyasa Yoga" />

          <Card text="Aulas exclusivas para iniciantes e para quem nunca praticou, bem detalhadas e mais explicativas para se sentir seguro, confiante e evoluir em suas práticas." className="one" subText="Jornada Iniciante" />

          <Card text=" Aulas com maior intensidade, posturas mais desafiadoras e pranayamas mais avançados, buscando lapidar ainda mais a sua prática e meditação." className="fourth" subText="Aulas intermediarias" />

          <Card text="Aulas com práticas longas e desafiadoras,  ásanas avançados,  pranayama intensos, mudras e laya." className="fifth" subText="Trilhas do avançado" />

          <Card text="Técnicas de respirações guiadas que buscam ativar o seu estado de leveza, bem estar, calma e clareza mental em poucos minutos." className="sixth" subText="Pranayamas guiados" />

          <Card text="Técnicas de mindfulness para liberar sentimentos e pensamentos negativos, bem como despertar e cultivar mais sentimentos e pensamentos positivos." className="seventh" subText="Meditações guiadas" />
        </div>
      </div>

      <button onClick={handleClickGoBack} type="button" className="return-button">
        <img src={ArrowCarrousel} alt="Voltar" />
      </button>
      <button onClick={handleClickGoAhead} type="button" className="forward-button">
        <img src={ArrowCarrousel} alt="Proximo" />
      </button>
      <div className="counter">
        <div className="counter-circle one" style={{ backgroundColor: getCircleColor(1) }} />
        <div className="counter-circle two" style={{ backgroundColor: getCircleColor(2) }} />
        <div className="counter-circle three" style={{ backgroundColor: getCircleColor(3) }} />
      </div>

    </OnlineClassesMainContainer>
  );
}

export default OnlineClasses;
