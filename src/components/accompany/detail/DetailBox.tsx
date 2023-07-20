import React, { useEffect } from 'react';
import KakaoMap from '@components/common/KakaoMap';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';

const detailDummyData = {
  id: 1,
  nickname: '야호호3',
  accompanyLocal: '서울',
  accompanyDate: '2023-08-12',
  maxNum: 2,
  accompanyTitle: '예쁜카페',
  accompanyContent: '냠냠',
  openStatus: true,
  coordX: 126.984593106407,
  coordY: 37.5638788701134,
  placeTitle: '다이소',
  registeredMembers: 1,
  createdAt: '2023-06-29T06:25:00',
  modifiedAt: '2023-06-29T06:25:00',
};
const DetailBox = () => {
  const { accompanyId } = useParams();
  useEffect(() => {
    console.log(accompanyId);
  }, []);
  // detail api호출해서 데이타를 컴포넌트에 프롭스로 내려줘야함
  return (
    <>
      <div className="flex justify-between mt-[.5rem]">
        <button
          className={
            'text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary'
          }
        >
          이 여행자의 다른여행일정
        </button>
        <button
          onClick={() => console.log('click!')}
          className={
            'text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary'
          }
        >
          참여하기
        </button>
      </div>
      <div className="flex justify-around mt-[.5rem]">
        <div className="w-[45%] rounded-lg overflow-hidden">
          <KakaoMap
            mapX={detailDummyData.coordX}
            mapY={detailDummyData.coordY}
            placeTitle={detailDummyData.placeTitle}
          />
        </div>
        <div className="w-[45%] border-2 p-2 rounded-lg">
          <DetailInfo {...detailDummyData} />
        </div>
      </div>
    </>
  );
};

export default DetailBox;
