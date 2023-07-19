import React from 'react';
import useRouter from '@/hooks/useRouter';
import { AccompanyDataType } from '@/types/accompanyType';

const Card = (props: AccompanyDataType) => {
  const { id, accompanyLocal, maxNum, accompanyTitle, accompanyContent } = props;
  const { goTo } = useRouter();
  return (
    <li
      onClick={() => goTo(`/accompany/${id}`)}
      className="h-[20vh] border border-gray-300 p-[.5rem] rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="p-4 h-full bg-gray-200 overflow-y-auto rounded-2xl no-scrollbar">
        <div className="text-end">{accompanyLocal}</div>
        <h3 className="text-lg font-bold mb-2">{accompanyTitle}</h3>
        <p>{accompanyContent}</p>
        <p className="bt border-gray-300 text-end">현재인원 :&nbsp;{maxNum}</p>
      </div>
    </li>
  );
};
export default Card;
