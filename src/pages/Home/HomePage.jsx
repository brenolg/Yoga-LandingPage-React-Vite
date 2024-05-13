import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import OnlineClasses from './OnlineClasses/OnlineClasses';
import PresencialClasses from './PresencialClasses/PresencialClassesSection';
import EventsSection from './EventsSection/EventsSection';
import PartnersSection from './PartnersSection';
import Footer from './Footer';
import MainContainer from './HomePagesStyles';

function Router() {
  return (
    <MainContainer>
      <Header />
      <HeroSection />
      <OnlineClasses />
      <PresencialClasses />
      <EventsSection />
      <PartnersSection />
      <Footer />
    </MainContainer>
  );
}

export default Router;
