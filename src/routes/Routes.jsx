import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OldPage from '../pages/OldPage/OldPage';
import HomePage from '../pages/Home/HomePage';

function Router() {
  return (
    <Routes>
      <Route path="/Yoga-LandingPage-React-Vite" element={<HomePage />} />
      <Route path="/old" element={<OldPage />} />
    </Routes>
  );
}

export default Router;
