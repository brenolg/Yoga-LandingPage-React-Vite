import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OldPage from '../pages/iClub/iClubPage';
import HomePage from '../pages/Home/HomePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/iclub" element={<OldPage />} />
    </Routes>
  );
}

export default Router;
