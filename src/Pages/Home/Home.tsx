import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Modal from '@pages/Login/Modal';
import FestivalCarousel from '@pages/Home/FestivalCarousel';
import AccompanyCarousel from '@pages/Home/AccompanyCarousel';

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
