import React, { useEffect, useLayoutEffect, useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import SideBar, { myPageTabType } from '@components/mypage/SideBar';
import ControlBox from '@components/mypage/ControlBox';
import { useLocation, useNavigate } from 'react-router-dom';
import useRouter from '@/hooks/useRouter';
import { querystringToObject } from '@/utils/commonUtil';

const MyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [curTab, setCurTab] = useState<myPageTabType>('myInfo');
  const { goTo } = useRouter();
  const handleTab = (tabName: myPageTabType) => {
    goTo(`?curTab=${tabName}`);
    setCurTab(tabName);
  };
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/');
    }
  }, []);
  useLayoutEffect(() => {
    if (!querystringToObject(location.search).curTab) {
      goTo(`?curTab=${curTab}`, true);
    } else {
      setCurTab(querystringToObject(location.search).curTab);
    }
  }, [location]);
  return (
    <>
      <Header />
      <div className="w-[80%] min-h-[80vh] mx-auto grid grid-cols-5">
        <SideBar curTab={curTab} handleTab={handleTab} />
        <ControlBox curTab={curTab} />
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
