import React from 'react';
import TravelCard from '@/components/travel/TravelCard';
import { TravelListType } from '@/types/travelDataType';

interface TravelCardBoxTypes {
  travelList?: TravelListType[];
}

const TravelCardBox = ({ travelList }: TravelCardBoxTypes) => {
  return (
    <div>
      <ul className="grid mt-5 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {travelList?.map((item: TravelListType) => {
          return <TravelCard key={item.title} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default TravelCardBox;
