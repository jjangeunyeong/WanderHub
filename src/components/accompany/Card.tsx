import React from 'react';
import useRouter from '@/hooks/useRouter';
import { AccompanyDataType } from '@/types/accompanyType';
import LocalImg from '@components/common/LocalImg';

const Card = (props: AccompanyDataType) => {
  const {
    id,
    accompanyLocal,
    registeredMembers,
    maxNum,
    accompanyTitle,
    accompanyContent,
    accompanyDate,
  } = props;
  const { goTo } = useRouter();
  return (
    // <li
    //   onClick={() => goTo(`/accompany/${id}`)}
    //   className="h-[20vh] border border-gray-300 p-[.5rem] rounded-2xl overflow-hidden cursor-pointer"
    // >
    //   <div className="p-4 h-full bg-gray-200 overflow-y-auto rounded-2xl no-scrollbar">
    //     <div className="text-end">{accompanyLocal}</div>
    //     <h3 className="text-lg font-bold mb-2">{accompanyTitle}</h3>
    //     <p>{accompanyContent}</p>
    //     <p className="bt border-gray-300 text-end">현재인원 :&nbsp;{maxNum}</p>
    //   </div>
    // </li>

    <li
      onClick={() => goTo(`/accompany/${id}`)}
      className="w-64 h-[300px] m-auto bg-white shadow-lg rounded-2xl cursor-pointer"
    >
      <div className="h-[120px]">
        <LocalImg localName={accompanyLocal} />
      </div>
      <div className="p-4 m-3 h-[155px] bg-sky-200 rounded-lg overflow-y-auto">
        <span className="text-gray-400">{accompanyLocal}</span>
        <p className="text-xl font-bold text-gray-700 ">{accompanyTitle}</p>
        <p className="text-xs  text-gray-500">{accompanyContent}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{accompanyDate}</p>
          <p className="text-gray-600">
            인원 : {registeredMembers}/{maxNum}
          </p>
        </div>
      </div>
    </li>
  );
};
export default Card;
