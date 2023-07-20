import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Card from '@components/accompany/Card';
import { AccompanyDataType } from '@/types/accompanyType';

const cardSlideSet = {
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CardSlidePropsType {
  list: AccompanyDataType[];
  // list: any[];
}

const CardSlide = ({ list }: CardSlidePropsType) => {
  return (
    <div>
      <Slider {...cardSlideSet}>
        {list?.map(item => {
          return (
            <div key={item.id}>
              <div className="w-[95%] mx-auto">
                <Card key={item.id} {...item} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSlide;
