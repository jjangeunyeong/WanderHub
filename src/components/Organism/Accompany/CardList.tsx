import Card, { CardProps } from '@components/Molecules/Card';
import React from 'react';

type CardListProps = {
  cards: CardProps[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};
export default CardList;
