import { TravelDetailType } from '@/types/travelDataType';
import KaKaoMap from '@components/Common/KaKaoMap';
import React from 'react';

interface ContentLeftBoxTypes {
  detailData: TravelDetailType;
}

const ContentLeftBox = ({ detailData }: ContentLeftBoxTypes) => {
  const { firstimage, mapx, mapy, title } = detailData;
  return (
    <div className="xl:w-2/6 lg:w-2/5 w-80 md:block">
      {firstimage && <img className="w-full mb-5" alt="image of a girl posing" src={firstimage} />}
      {Number(mapx) !== 0 && Number(mapy) !== 0 && (
        <KaKaoMap mapX={Number(mapx)} mapY={Number(mapy)} placeTitle={title} />
      )}
    </div>
  );
};

export default ContentLeftBox;
