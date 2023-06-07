import React from 'react';
import Footer from '@components/Organism/Common/Footer';
import Header from '@components/Organism/Common/Header';
import Container from '@components/Atoms/Container';
import Title from '@components/Molecules/Title';

const AccompanyPost = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title={'동행 글쓰기'} isWithBtn={false} />
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyPost;
