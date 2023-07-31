import React from 'react';
import AuthAPI from '@/api/AuthAPI';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBtn = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();

  const deletePosting = async () => {
    await AuthAPI.delete(`community/${boardId}`);
    alert('해당글이 삭제되었습니다.');
    navigate('/community');
  };

  return (
    <button
      type="button"
      onClick={() => deletePosting()}
      className="float-right mt-2 h-10 w-32 flex justify-center items-center bg-red-500 hover:bg-red-700 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="mr-2"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>{' '}
      </svg>
      삭제하기
    </button>
  );
};

export default DeleteBtn;
