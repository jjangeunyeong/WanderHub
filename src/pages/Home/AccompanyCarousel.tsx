import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Title from './Title';
import WanderHubAPI from '@/api/WanderHubAPI';
import { AccompanyDetailDataType } from '@/types/accompanyType';
import { useNavigate } from 'react-router-dom';
import LocalImg from '@components/common/LocalImg';

const AccompanyCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const [accompanyList, setAccompanyList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAccompanyAll() {
      const res = await WanderHubAPI.get('/accompany');
      setAccompanyList(res.data.data);
    }
    getAccompanyAll();
  }, []);

  return (
    <div className="flex justify-center pb-[90px]">
      <div className="flex-col w-[70%]">
        <Title title="같이 여행할 친구를 찾아봐요!" />
        <Slider {...settings}>
          {accompanyList.map((e: AccompanyDetailDataType) => {
            return (
              <div key="e" className="px-2">
                <div
                  className="rounded-xl border-2 cursor-pointer"
                  onClick={() => navigate(`/accompany/${e.id}`)}
                >
                  <div className="h-22 w-full bg-gray-100 py-5 rounded-t-lg">
                    <LocalImg localName={e.accompanyLocal} />
                  </div>
                  <div className="h-56 w-full p-4 mt-2 rounded-b-xl">
                    <div className="flex">
                      <div className="p-1 text-slate-500">동행 날짜 : </div>
                      <div className="p-1">{e.accompanyDate}</div>
                    </div>
                    <div className="flex">
                      <div className="p-1 text-slate-500">동행 장소 : </div>
                      <div className="p-1">{e.accompanyTitle}</div>
                    </div>
                    <div className="flex">
                      <div className="p-1 text-slate-500">동행 인원 : </div>
                      <div className="py-1 pl-1 font-semibold">{e.registeredMembers}</div>
                      <div className="p-1">/{e.maxNum}</div>
                    </div>
                    <div className="absolute bottom-12 p-1 w-16 text-center bg-gray-200 rounded-full animate-pulse">
                      {e.placeTitle}
                    </div>
                    <p className="absolute bottom-5 ml-[5px] font-semibold text-slate-400 text-[12px] mr-5">
                      {e.nickname}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AccompanyCarousel;
