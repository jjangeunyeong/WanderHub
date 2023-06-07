import React from 'react';
import Footer from '@components/Organism/Common/Footer';
import Header from '@components/Organism/Common/Header';
import Container from '@/components/Atoms/Container';
import Title from '@/components/Molecules/Title';
import DataHandleBox from '@components/Organism/Accompany/DataHandleBox';
import useRouter from '@/hooks/useRouter';

const AccompanyPage = () => {
  const { goTo } = useRouter();

  return (
    <>
      <Header />
      <Container>
        <Title
          title={'동행'}
          isWithBtn={true}
          btnTxt={'글쓰기'}
          clickEvent={() => goTo('/accompany/post')}
        />
        <DataHandleBox />
      </Container>
      <Footer />
    </>
  );
};

export default AccompanyPage;
