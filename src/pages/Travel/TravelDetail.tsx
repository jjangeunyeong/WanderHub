import React, { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Container from '@components/common/Container';
import Modal from '@pages/Login/Modal';
import useGetTravelDetail from '@/hooks/queryHooks/useGetTravelDetail';
import { useParams } from 'react-router-dom';
import Spinner from '@components/common/Spinner';
import ContentLeftBox from '@components/travel/detail/ContentLeftBox';
import ContentRightBox from '@components/travel/detail/ContentRightBox';

const TravelDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();
  const { data, isLoading } = useGetTravelDetail(String(params.contentId));
  console.log(data);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        {isLoading && <Spinner />}
        {data && (
          <div className="flex items-start justify-center shadow-2xl rounded-2xl border border-primary p-2 ">
            <ContentLeftBox detailData={data} />
            <ContentRightBox detailData={data} />
          </div>
        )}
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default TravelDetail;
