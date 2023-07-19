import { travelContent } from '@/constant/TravelCodes';
import useRouter from '@/hooks/useRouter';
import { objectToQuerystring, querystringToObject } from '@/utils/commonUtil';
import React from 'react';
import { useLocation } from 'react-router-dom';

const PlaceTypeBtn = () => {
  const { goTo } = useRouter();
  const location = useLocation();

  const handleLocation = (code: string) => {
    const beforeQuery = querystringToObject(location.search);
    if ('contentTypeId' in beforeQuery && beforeQuery.contentTypeId === code) {
      delete beforeQuery.contentTypeId;
    } else {
      beforeQuery.pageNo = '1';
      beforeQuery.contentTypeId = code;
    }
    console.log(objectToQuerystring(beforeQuery));
    goTo(objectToQuerystring(beforeQuery), true);
  };

  return (
    <ul className="flex w-full justify-center items-center my-4">
      {travelContent.map(item => {
        return (
          <li key={item.name} className="cursor-pointer py-2 mx-4 text-lg text-gray-500">
            {/* <li key={item.name} className="cursor-pointer py-2 px-4 text-lg text-gray-500"> */}
            <button
              onClick={() => handleLocation(item.code)}
              className={
                querystringToObject(location.search).contentTypeId === item.code
                  ? 'text-blue-400 ring-2 ring-offset-2 rounded'
                  : 'text-pink-400 hover:ring-2 hover:ring-offset-2 hover:rounded'
              }
            >
              #{item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PlaceTypeBtn;
