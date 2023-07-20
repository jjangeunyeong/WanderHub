import React from 'react';
import Slider from 'react-slick';
import data from '../../data.json';
import Title from './Title';

const AccompanyCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="flex justify-center pb-[47px]">
      <div className="flex-col w-[70%]">
        <Title title="같이 여행할 친구를 찾아봐요!" />
        <Slider className="h-72" {...settings}>
          {data.festival.map(e => {
            return (
              <div key="e" className="px-2">
                <div className="rounded-xl border-2">
                  <img src={e.imgSrc} alt={e.name} className="h-48 rounded-t-xl" />
                  <div className="h-28 w-full p-4 rounded-b-xl">
                    <p>동행 구해요</p>
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
