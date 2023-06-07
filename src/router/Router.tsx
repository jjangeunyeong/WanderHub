import { Route, Routes } from 'react-router-dom';
import MainPage from '@components/Pages/Main/Main';
import Accompany from '@components/Pages/Accompany/Accompany';
import React from 'react';
import AccompanyPost from '@components/Pages/Accompany/AccompanyPost';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
    </Routes>
  );
};

export default Router;
