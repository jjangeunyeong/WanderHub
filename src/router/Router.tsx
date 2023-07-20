import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Accompany from '@pages/Accompany/Accompany';
import AccompanyPost from '@pages/Accompany/AccompanyPost';
import AccompanyDetail from '@pages/Accompany/AccompanyDetail';
import Comunity from '@pages/Community/Community';
import Writing from '@pages/Community/Writing/Writing';
import NotFound from '@pages/NotFound.tsx/NotFound';
import MyPage from '@pages/MyPage/MyPage';
import Redirection from '@pages/Login/Redirection';
import LoginTest from '@pages/Login/LoginTest';
import Travel from '@pages/Travel/Travel';
import TravelDetail from '@pages/Travel/TravelDetail';
import CommunityDetail from '@pages/Community/Detail/CommunityDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginTest />} />
      <Route path="/accompany" element={<Accompany />} />
      <Route path="/accompany/post" element={<AccompanyPost />} />
      <Route path="/accompany/:accompanyId" element={<AccompanyDetail />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/community" element={<Comunity />} />
      <Route path="/community/writing" element={<Writing />} />
      <Route path="/community/detail" element={<CommunityDetail />} />
      <Route path="/oauth/redirect" element={<Redirection />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/travel/:contentId" element={<TravelDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
