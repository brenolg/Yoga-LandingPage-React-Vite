import React from 'react';
import { useMediaQuery } from 'react-responsive';
import About from './components/About/About';
import Access from './components/Access/Access';
import Doubts from './components/Doubts/Doubts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Moment from './components/Moment/Moment';
import Pillars from './components/Pillars/Pillars';
import Prices from './components/Prices/Prices';
import QuestionsCarrousel from './components/QuestionsCarrousel/QuestionsCarrousel';
import ReviewsCarrousel from './components/ReviewsCarrousel/ReviewsCarrousel';
import Seal from './components/Seal/Seal';
// Responsive check:  Header/ hero / Questions / pillars /
function App() {
  const isTabletAndMobile = useMediaQuery({ query: '(max-width: 1127px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' });

  function isTablet() {
    return isTabletAndMobile && !isMobile;
  }

  return (
    <>
      <Header
        isTablet={isTabletAndMobile}
        isMobile={isMobile}
      />

      <Hero
        isTabletAndMobile={isTabletAndMobile}
        isMobile={isMobile}
      />

      <QuestionsCarrousel isMobile={isMobile} isTabletAndMobile={isTabletAndMobile} />

      <Pillars isTablet={isTabletAndMobile} />

      <Access isMobile={isMobile} />

      <Moment isMobile={isMobile} isTabletAndMobile={isTabletAndMobile} />

      {!isMobile && (<ReviewsCarrousel />)}

      <Prices
        isTablet={isTablet()}
        isMobile={isMobile}
        isTabletAndMobile={isTabletAndMobile}
      />

      <Doubts isMobile={isMobile} />

      <Seal />

      <About
        isTablet={isTablet()}
        isMobile={isMobile}
      />

      <Footer />
    </>
  );
}

export default App;
