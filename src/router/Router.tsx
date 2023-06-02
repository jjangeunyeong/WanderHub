import { Route, Routes } from 'react-router-dom';
import MainPage from '@components/Pages/Main/Main';
import AccompanyPage from '@components/Pages/Accompany/Accompany';
import React from 'react';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/accompany" element={<AccompanyPage />} />
    </Routes>
  );
};

export default Router;
