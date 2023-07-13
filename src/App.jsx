import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Access from './components/Access/Access';
import { DescriptionSection } from './components/DescriptionSection';
import { DoubtsSection } from './components/DoubtsSection';
import { Footer } from './components/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { MomentSection } from './components/MomentSection';
import Pillars from './components/Pillars/Pillars';
import Prices from './components/Prices/Prices';
import QuestionsCarrousel from './components/QuestionsCarrousel/QuestionsCarrousel';
import ReviewsCarrousel from './components/ReviewsCarrousel/ReviewsCarrousel';
import { SealSection } from './components/SealSection';

function App() {
  const isTabletAndMobile = useMediaQuery({ query: '(max-width: 1127px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' });

  function isTablet() {
    return isTablet && !isMobile;
  }

  return (
    <>
      <Header isTablet={isTabletAndMobile} isMobile={isMobile} />
      <Hero isTablet={isTabletAndMobile} isMobile={isMobile} />
      <QuestionsCarrousel isMobile={isMobile} />
      <Pillars isTablet={isTabletAndMobile} />
      <Access isMobile={isMobile} />
      <MomentSection />
      {!isMobile && <ReviewsCarrousel />}
      <Prices
        isTablet={isTablet()}
        isMobile={isMobile}
        isTabletAndMobile={isTabletAndMobile}
      />
      <DoubtsSection />
      <SealSection />
      <DescriptionSection />
      <Footer />
    </>
  );
}

export default App;
