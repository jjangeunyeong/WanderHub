import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Modal from '@/pages/Login/Modal';
import FestivalCarousel from '@/pages/Home/FestivalCarousel';
import AccompanyCarousel from '@/pages/Home/AccompanyCarousel';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <FestivalCarousel />
      <AccompanyCarousel />
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default Home;
