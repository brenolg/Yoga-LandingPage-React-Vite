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

function App() {
  const isTabletAndMobile = useMediaQuery({ query: '(max-width: 1127px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 744px)' });
  const isTablet = useMediaQuery({ minWidth: 745, maxWidth: 1127 });

  const devicesProps = {
    isTabletAndMobile,
    isMobile,
    isTablet,
  };

  return (
    <>
      <Header {...devicesProps} />
      <Hero {...devicesProps} />
      <QuestionsCarrousel {...devicesProps} />
      <Pillars {...devicesProps} />
      <Access {...devicesProps} />
      <Moment {...devicesProps} />

      {!isMobile && (
      <ReviewsCarrousel {...devicesProps} />
      )}

      <Prices {...devicesProps} />
      <Doubts {...devicesProps} />
      <Seal {...devicesProps} />
      <About {...devicesProps} />
      <Footer {...devicesProps} />
    </>
  );
}

export default App;
