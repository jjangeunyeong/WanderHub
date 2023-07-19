import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@components/common/Container';
import Title from '@components/accompany/Title';
import PostDataHandleBox from '@components/accompany/post/PostDataHandleBox';
import Modal from '../Login/Modal';

const AccompanyPost = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <Title title={'동행 글쓰기'} />
        <PostDataHandleBox />
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default AccompanyPost;
