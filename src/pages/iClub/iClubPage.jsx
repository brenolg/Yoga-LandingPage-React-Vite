import React from 'react';
import { useMediaQuery } from 'react-responsive';
import About from './About/About';
import Access from './Access/Access';
import Doubts from './Doubts/Doubts';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Moment from './Moment/Moment';
import Pillars from './Pillars/Pillars';
import Prices from './Prices/Prices';
import QuestionsCarrousel from './QuestionsCarrousel/QuestionsCarrousel';
import ReviewsCarrousel from './ReviewsCarrousel/ReviewsCarrousel';
import Seal from './Seal/Seal';

function iClubPage() {
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

export default iClubPage;
