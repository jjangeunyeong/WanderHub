import React, { useEffect, useState } from 'react';
import Footer from '@components/Common/Footer';
import Header from '@components/Common/Header';
import Container from '@components/Common/Container';
import Modal from '@pages/Login/Modal';
import { useLocation } from 'react-router-dom';
import RegionBtns from '@components/travel/main/RegionBtns';
import TravelCardBox from '@components/travel/TravelCardBox';
import useGetTravelList from '@/hooks/queryHooks/useGetTravelList';
import Spinner from '@components/Common/Spinner';
import PlaceTypeBtn from '@components/travel/main/PlaceTypeBtn';
import Pagenation from '@components/Common/Pagenation';
import { objectToQuerystring, querystringToObject } from '@/utils/commonUtil';
import useRouter from '@/hooks/useRouter';

const Travel = () => {
  const [openModal, setOpenModal] = useState(false);
  const [curPage, setCurPage] = useState<number>(1);
  const { goTo } = useRouter();
  const location = useLocation();
  const { data, isLoading, error } = useGetTravelList(location.search);
  const handlePageNation = (page: number) => {
    console.log(page);
    setCurPage(page);
    const beforeQuery = querystringToObject(location.search);
    beforeQuery.pageNo = String(page);
    goTo(objectToQuerystring(beforeQuery), true);
  };
  useEffect(() => {
    if (location.search.includes('pageNo'))
      setCurPage(parseInt(querystringToObject(location.search).pageNo));
  }, [location]);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Container>
        <RegionBtns />
        <PlaceTypeBtn />
        {isLoading && <Spinner />}
        {data && (
          <>
            <TravelCardBox travelList={data.items.item} />
            <Pagenation
              totalPages={Math.ceil(data.totalCount / 20)}
              curPage={curPage}
              handlePageNation={handlePageNation}
            />
          </>
        )}
      </Container>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
      <Footer />
    </>
  );
};

export default Travel;
