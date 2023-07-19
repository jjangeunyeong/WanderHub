import React from 'react';
import { AccompanyDataType } from '@/types/accompanyType';
import { FcCalendar, FcLinux, FcConferenceCall } from 'react-icons/fc';
import { IoLocation } from 'react-icons/io5';

const Detail = (props: AccompanyDataType) => {
  const { writerName, accompanyLocal, accompanyDate, maxNum, accompanyTitle, accompanyContent } =
    props;
  return (
    <>
      <div className="flex items-center font-serif font-bold ">제목 :</div>
      <div className="mb-[.5rem]">{accompanyTitle}</div>
      <div className="flex items-center font-serif font-bold ">내용 :</div>
      <div className="mb-[.5rem]">{accompanyContent}</div>
      <div className="flex items-center text-sm font-serif font-bold mb-[.5rem]">
        <div className="flex items-center w-[50%]">
          <FcLinux size={'2rem'} />
          &nbsp;작성자 : &nbsp; {writerName}
        </div>
        <div className="flex items-center w-[50%]">
          <IoLocation size={'2rem'} />
          &nbsp;지역 : &nbsp; {accompanyLocal}
        </div>
      </div>
      <div className="flex items-center text-sm font-serif font-bold mb-[.5rem]">
        <div className="flex items-center w-[50%]">
          <FcCalendar size={'2rem'} />
          <div className="text-[.7rem]">&nbsp;날짜 : &nbsp;{accompanyDate}</div>
        </div>
        <div className="flex items-center w-[50%]">
          <FcConferenceCall size={'2rem'} />
          <div>&nbsp;참여인원 : &nbsp; {maxNum}</div>
        </div>
      </div>
      <div className="flex items-center font-serif font-bold mb-[.5rem]"></div>
      {/* <div className="flex">
        <FcLike />
        &nbsp; : &nbsp; {openStatus}
      </div> */}
      {/* 
        작성자
        날짜
        지역
        참여인원
        타이틀
        컨텐츠
      */}
    </>
  );
};

export default Detail;
