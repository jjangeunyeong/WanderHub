import React, { useState } from 'react';
import { regionCode } from '@/constant/TravelCodes';
import useRouter from '@/hooks/useRouter';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { querystringToObject } from '@/utils/commonUtil';

const RegionBtns = () => {
  const btnSlideSet = {
    infinite: false,
    slidesToShow: 5.7,
    swipeToSlide: true,
    swipe: true,
    onSwipe: () => setIsClickGuard(true),
    afterChange: () => setIsClickGuard(false),
  };
  const { goTo } = useRouter();
  const location = useLocation();
  const [isClickGuard, setIsClickGuard] = useState(false);
  const handleLocation = (code: string | undefined) => {
    if (!isClickGuard) {
      typeof code === 'string' ? goTo(`?areaCode=${code}&pageNo=1`, true) : goTo(`?pageNo=1`);
    }
  };

  return (
    <ul className="px-10 text-sm font-medium text-center text-gray-500">
      <Slider {...btnSlideSet}>
        {regionCode.map(item => {
          return (
            <li key={item.id} className="mt-2 mr-5 mb-2 h-full">
              <button
                onClick={() => handleLocation(item.code)}
                className={
                  item.code === querystringToObject(location.search).areaCode
                    ? 'py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md outline-none ring-2 ring-offset-2 text-gray-800 rounded-full h-full'
                    : 'py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full h-full'
                }
              >
                {item.id}
              </button>
            </li>
          );
        })}
      </Slider>
    </ul>
  );
};

export default RegionBtns;
