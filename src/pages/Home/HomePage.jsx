import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import OnlineClassesSection from './OnlineClassesSection';
import PresencialClassesSection from './PresencialClassesSection';
import EventsSection from './EventsSection';
import PartnersSection from './PartnersSection';
import Footer from './Footer';

function Router() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OnlineClassesSection />
      <PresencialClassesSection />
      <EventsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}

export default Router;
