import Image from '@components/Atoms/Image';
import React from 'react';

export type CardProps = {
  title: string;
  curPeople: number;
  maxPeople: number;
  location: string;
  imgPath: string;
};

const Card = ({ title, curPeople, maxPeople, location, imgPath }: CardProps) => {
  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden cursor-pointer">
      <div className="h-[65%]">
        <Image src={imgPath} alt={title} classNameProps="w-full h-full" />
      </div>
      <div className="p-4">
        <p>{location}</p>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="bt border-gray-300 text-end">
          현재인원 :&nbsp;{curPeople}/{maxPeople}
        </p>
      </div>
    </div>
  );
};
export default Card;
