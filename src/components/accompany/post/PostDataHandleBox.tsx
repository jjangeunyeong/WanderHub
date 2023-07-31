import React, { useState } from 'react';
import ReactCalendar from '@components/common/ReactCalendar';
import PostForm from '@components/accompany/post/PostForm';
import usePostAccompany from '@/hooks/queryHooks/usePostAccompany';
import useRouter from '@/hooks/useRouter';
import { AxiosError } from 'axios';

export interface FormDataType {
  maxNum: number | string;
  placeTitle: string;
  accompanyTitle: string;
  accompanyContent: string;
  accompanyLocal: string;
  coordX: string;
  coordY: string;
}

const PostDataHandleBox = () => {
  const [accompanyDate, setAccompanyDate] = useState<string | null>('');
  const { mutate, isLoading } = usePostAccompany();
  const { goTo } = useRouter();
  console.log(isLoading);
  const getDate = (date: string | null) => setAccompanyDate(date);
  const handleSubmit = (formData: FormDataType) => {
    const params = { ...formData, accompanyDate };
    if (accompanyDate) {
      mutate(params, {
        onSuccess: () => {
          goTo(-1);
        },
        onError: (error: unknown) => {
          const axiosError = error as AxiosError;
          if (axiosError.message === 'Request failed with status code 500') {
            alert('로그인이 필요합니다.');
          }
        },
      });
      console.log({ ...formData, accompanyDate });
    } else {
      alert('날짜를 선택해주세요.');
    }
  };
  return (
    <>
      <div className="flex justify-around mt-[2rem] mb-[2rem]">
        <div className="w-[45%]">
          <ReactCalendar curDate={accompanyDate} getDate={getDate} />
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
