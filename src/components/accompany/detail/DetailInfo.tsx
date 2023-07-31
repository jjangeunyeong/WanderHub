import React from 'react';
import { AccompanyDetailDataType } from '@/types/accompanyType';
import { FcCalendar, FcLinux, FcConferenceCall } from 'react-icons/fc';
import { IoLocation } from 'react-icons/io5';

const DetailInfo = (props: AccompanyDetailDataType) => {
  const {
    nickname,
    accompanyLocal,
    accompanyDate,
    maxNum,
    registeredMembers,
    accompanyTitle,
    accompanyContent,
  } = props;
  console.log(props);

  return (
    <>
      <div className="flex items-center font-bold ">제목 : {accompanyTitle}</div>
      <div className="flex items-center font-bold ">내용 : {accompanyContent}</div>
      <div className="flex items-center text-sm font-bold mb-[.5rem]">
        <div className="flex items-center w-[50%]">
          <FcLinux size={'2rem'} />
          &nbsp;작성자 : &nbsp; {nickname}
        </div>
        <div className="flex items-center w-[50%]">
          <IoLocation size={'2rem'} />
          &nbsp;지역 : &nbsp; {accompanyLocal}
        </div>
      </div>
      <div className="flex items-center text-sm font-bold mb-[.5rem]">
        <div className="flex items-center w-[50%]">
          <FcCalendar size={'2rem'} />
          <div className="text-[.7rem]">&nbsp;날짜 : &nbsp;{accompanyDate}</div>
        </div>
        <div className="flex items-center w-[50%]">
          <FcConferenceCall size={'2rem'} />
          <div>
            &nbsp;참여인원 : {registeredMembers}/{maxNum}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
