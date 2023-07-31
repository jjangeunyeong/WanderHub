import React from 'react';
import { AccompanyDataType } from '@/types/accompanyType';
import Card from '@components/accompany/Card';

type CardListProps = {
  cards?: AccompanyDataType[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <ul className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2">
      {cards?.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </ul>
  );
};
export default CardList;
