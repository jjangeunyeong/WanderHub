import React, { useState } from 'react';
import ReactCalendar from '@components/common/ReactCalendar';
import SvgMap from '@components/accompany/main/SvgMap';
import CardList from '@components/accompany/CardList';
import { mapList } from '@/constant/MapPath';
import { accompanyList } from '@/constant/DummyData';

const DataHandleBox = () => {
  // 타겟지역스테이트, 날짜스테이트, 데이터리스트스테이트
  const [curLocal, setCurLcocal] = useState<null | string>(null);
  const [curDate, setCurDate] = useState<null | string>(null);
  const getDate = (date: string) => {
    console.log(date);
    setCurDate(date);
  };
  const getLocalName = (name: string) => {
    console.log(name);
    setCurLcocal(name);
  };

  return (
    <section className="my-3">
      <div className="flex justify-around">
        <div className="w-[45%] max-h-[50vh]">
          <SvgMap pathList={mapList} curLocal={curLocal} getLocalName={getLocalName} />
        </div>
        <div className="w-[45%] max-h-[50vh]">
          <ReactCalendar getDate={getDate} />
        </div>
      </div>
      {(curDate || curLocal) && (
        <div className="mt-[2rem] pt-[1rem] border-t-2 border-gray-300 ">
          <p className="text-3xl font-bold text-center mb-4">
            <span>{curDate}</span>
            <span>{curLocal}</span>
            <br />
            이런 여행이 기다리고 있어요!
          </p>
          <CardList cards={accompanyList} />
          <button
            onClick={() => console.log('getMore')}
            className="bg-white w-full text-gray-300 hover:text-black border-2 border-lightgrey rounded-full mt-4 h-[3rem]"
          >
            더보기
          </button>
        </div>
      )}
    </section>
  );
};

export default DataHandleBox;
