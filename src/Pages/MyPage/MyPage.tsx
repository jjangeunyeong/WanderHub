import React, { useLayoutEffect, useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import SideBar, { myPageTabType } from '@components/mypage/SideBar';
import ControlBox from '@components/mypage/ControlBox';
import Modal from '@pages/Login/Modal';
import { useLocation } from 'react-router-dom';
import useRouter from '@/hooks/useRouter';
import { querystringToObject } from '@/utils/commonUtil';

const MyPage = () => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [curTab, setCurTab] = useState<myPageTabType>('myInfo');
  const { goTo } = useRouter();
  const handleTab = (tabName: myPageTabType) => {
    goTo(`?curTab=${tabName}`);
    setCurTab(tabName);
  };
  useLayoutEffect(() => {
    if (!querystringToObject(location.search).curTab) {
      goTo(`?curTab=${curTab}`, true);
    } else {
      setCurTab(querystringToObject(location.search).curTab);
    }
  }, [location]);
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <div className="w-[80%] min-h-[80vh] mx-auto grid grid-cols-5">
        <SideBar curTab={curTab} handleTab={handleTab} />
        <ControlBox curTab={curTab} />
      </div>
      <Footer />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </>
  );
};

export default MyPage;
