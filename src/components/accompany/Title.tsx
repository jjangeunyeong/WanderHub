import React from 'react';
// import Button from '@/components/accompany/Button';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="border-2 shadow-md inset h-16 rounded-full flex items-center justify-between px-4">
      <h2 className="font-bold text-3xl flex-grow text-center ">{title}</h2>
    </div>
  );
};

export default Title;
