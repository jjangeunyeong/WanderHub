import React from 'react';
import { accompanyList } from '@/constant/DummyData';
import KaKaoMap from '@components/common/KaKaoMap';
import Detail from './Detail';
import { useParams } from 'react-router-dom';

const DetailBox = () => {
  // detail api호출해서 데이타를 컴포넌트에 프롭스로 내려줘야함
  const { accompanyId } = useParams();
  // console.log('이값으로 api호출보내야함 :', accompanyId);
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
          <KaKaoMap />
        </div>
        <div className="w-[45%] border-2 p-2 rounded-lg">
          <Detail {...accompanyList[accompanyId - 1]} />
        </div>
      </div>
    </>
  );
};

export default DetailBox;
