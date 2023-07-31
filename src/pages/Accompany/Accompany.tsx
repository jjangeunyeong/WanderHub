import React from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@components/common/Container';
import Title from '@components/accompany/Title';
import DataHandleBox from '@components/accompany/main/DataHandleBox';
import useRouter from '@/hooks/useRouter';

const Accompany = () => {
  const { goTo } = useRouter();

  return (
    <>
      <Header />
      <Container>
        <div className="flex justify-end">
          <button
            className="text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-full px-4 py-2 bg-primary"
            onClick={() => goTo('/accompany/post')}
          >
            글쓰기
          </button>
        </div>
        <Title title={'동행'} />
        <DataHandleBox />
      </Container>
      <Footer />
    </>
  );
};

export default Accompany;
