import React from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@components/common/Container';
import Title from '@components/accompany/Title';
import DetailBox from '@components/accompany/detail/DetailBox';
import CardSlide from '@components/common/CardSlide';
import useGetAccompanyList from '@/hooks/queryHooks/useGetAccompanyList';

const AccompanyDetail = () => {
  const uri = '';
  const { data } = useGetAccompanyList({ uri });

  return (
    <>
      <Header />
      <Container>
        <Title title={'동행 디테일'} />
        <DetailBox />
        <div className="mt-[1rem]">
          <CardSlide list={data && data.data} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyDetail;
