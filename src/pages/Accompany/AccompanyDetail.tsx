import React, { useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Container from '@components/Common/Container';
import Modal from '@pages/Login/Modal';
import Title from '@components/accompany/Title';
import DetailBox from '@components/accompany/detail/DetailBox';
import CardSlide from '@components/Common/CardSlide';
import { accompanyList } from '@/constant/DummyData';

const AccompanyDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <Title title={'동행 디테일'} />
        <DetailBox />
        <div className="mt-[1rem]">
          <CardSlide list={accompanyList} />
        </div>
      </Container>
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default AccompanyDetail;
