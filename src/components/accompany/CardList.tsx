import React from 'react';
import { AccompanyDataType } from '@/types/accompanyType';
import Card from '@components/accompany/Card';

type CardListProps = {
  cards: AccompanyDataType[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </ul>
  );
};
export default CardList;
