import React from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@components/common/Container';
import Title from '@components/accompany/Title';
import PostDataHandleBox from '@components/accompany/post/PostDataHandleBox';

const AccompanyPost = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title={'동행 글쓰기'} />
        <PostDataHandleBox />
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyPost;
