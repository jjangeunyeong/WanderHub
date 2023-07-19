import React from 'react';
import { travelCategory } from '@/constant/TravelCodes';
import useRouter from '@/hooks/useRouter';
import { TravelListType } from '@/types/travelDataType';

const TravelCard = (props: TravelListType) => {
  const { goTo } = useRouter();
  const findCateName = (cateCode: string) => {
    const idx = travelCategory.findIndex(item => item.code === cateCode);
    if (idx === -1) return '';
    return travelCategory[idx].name;
  };

  return (
    <li
      onClick={() => goTo(props.contentid)}
      className="w-64 h-full m-auto overflow-hidden shadow-lg rounded-2xl cursor-pointer"
    >
      {props.firstimage ? (
        <div className="rounded-t-lg h-[50%] w-full">
          <img alt={props.title} src={props.firstimage} className="w-full h-full" />
        </div>
      ) : (
        <div className="rounded-t-lg h-[50%] w-full flex justify-center items-center text-3xl">
          <span className="border-[5px] p-[2%]">{props.title}</span>
        </div>
      )}
      <div className="w-full p-4 bg-white">
        <p className="mb-2 text-xl font-medium text-gray-800">{props.title}</p>
        <p className="text-xs text-gray-600">
          {props.addr1} {props.addr2}
        </p>
        <div className="flex flex-wrap items-center mt-6 justify-starts">
          {[props.cat1, props.cat2, props.cat3].map(item => {
            return findCateName(item) ? (
              <div
                key={item}
                className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl"
              >
                #{findCateName(item).replace(' ', '')}
              </div>
            ) : (
              ''
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default TravelCard;
