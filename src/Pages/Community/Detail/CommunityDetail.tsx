import React, { useState } from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import MainLogo from '@assets/logo.png';
import ViewIcon from '@assets/viewsIcon.png';

const CommunityDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Header setOpenModal={setOpenModal} />
      <div className="flex flex-col items-center min-h-[80vh]">
        <div className="w-[50%]">
          <div className="mt-20 mb-8 font-medium text-3xl text-gray-800 dark:text-white">
            제목을 보여주세요
          </div>
          <div className="font-bold text-[17px] mb-2">장은영</div>
          <div className="flex mb-3 border-b pb-6 mb-6">
            <div className="flex text-slate-500 text-[15px] mr-5">
              <div className="mr-2">작성일</div>
              <div>23.07.12</div>
            </div>
            <div className="flex text-slate-500 text-[15px] mr-4">
              <img src={ViewIcon} alt="view icon" className="w-5 h-3 mt-[5px] mr-2" />
              <div className="mr-2">조회수</div>
              <div>41</div>
            </div>
            <div className="flex text-slate-500 text-[15px]">
              <img src={MainLogo} alt="main logo" className="w-6 h-6 mr-1" />
              <div className="mr-2">여행지</div>
              <div>서울</div>
            </div>
          </div>
          <div>본문</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityDetail;
