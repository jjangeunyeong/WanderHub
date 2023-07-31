import React from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import FestivalCarousel from '@pages/Home/FestivalCarousel';
import AccompanyCarousel from '@pages/Home/AccompanyCarousel';

const Home = () => {
  return (
    <>
      <Header />
      <FestivalCarousel />
      <AccompanyCarousel />
      <Footer />
    </>
  );
};

export default Home;
