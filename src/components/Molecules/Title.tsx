import React from 'react';
import Button from '@/components/Atoms/Button';

interface TitleProps {
  title: string;
  isWithBtn: boolean;
  btnTxt?: string;
  clickEvent?: () => void;
}

const Title = ({ title, isWithBtn, btnTxt, clickEvent }: TitleProps) => {
  return (
    <div className="border-2 shadow-md inset h-16 rounded-full flex items-center justify-between px-4">
      <h2 className="font-bold text-3xl flex-grow text-center ">{title}</h2>
      {isWithBtn && clickEvent && <Button clickEvent={clickEvent}>{btnTxt ?? ''}</Button>}
    </div>
  );
};

export default Title;
