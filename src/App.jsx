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
import { PricesSection } from './components/PricesSection';
import QuestionsCarrousel from './components/QuestionsCarrousel/QuestionsCarrousel';
import { ReviewsCarrousel } from './components/ReviewsCarrousel';
import { SealSection } from './components/SealSection';

function App() {
  const isTablet = useMediaQuery({ query: '(max-width: 1127px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' });

  return (
    <>
      <Header isTablet={isTablet} isMobile={isMobile} />
      <Hero isTablet={isTablet} isMobile={isMobile} />
      <QuestionsCarrousel isMobile={isMobile} />
      <Pillars isTablet={isTablet} />
      <Access isMobile={isMobile} />
      <MomentSection />
      {!isMobile && <ReviewsCarrousel />}
      <PricesSection />
      <DoubtsSection />
      <SealSection />
      <DescriptionSection />
      <Footer />
    </>
  );
}

export default App;
