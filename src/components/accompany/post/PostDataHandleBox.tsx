import React, { useState } from 'react';
import ReactCalendar from '@components/common/ReactCalendar';
import PostForm from '@components/accompany/post/PostForm';

export interface FormDataType {
  content: string;
  location: string;
  maxPeople: number | string;
  nickname: string;
  title: string;
}

const PostDataHandleBox = () => {
  const [accompanyDate, setAccompanyDate] = useState('');
  const handleSubmit = (formData: FormDataType) => {
    console.log({ ...formData, accompanyDate });
  };
  const getDate = (date: string) => {
    console.log(date);
    setAccompanyDate(date);
  };

  return (
    <>
      <div className="flex justify-around mt-[2rem] mb-[2rem]">
        <div className="w-[45%]">
          <ReactCalendar getDate={getDate} />
        </div>
        <div className="w-[45%] border-2 shadow-md inset p-2 rounded-md">
          <PostForm handleSubmit={handleSubmit} />
          <button
            type="submit"
            form="accompanyPostForm"
            className={
              'text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2 bg-primary w-[70%] m-auto block mt-[1rem]'
            }
          >
            등록
          </button>
        </div>
      </div>
    </>
  );
};

export default PostDataHandleBox;
