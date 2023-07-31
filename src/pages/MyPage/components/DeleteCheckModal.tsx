import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthAPI from '@/api/AuthAPI';
import { useResetRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';

interface DeleteCheckModalProps {
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCheckModal = ({ setIsOpenDeleteModal }: DeleteCheckModalProps) => {
  const navigate = useNavigate();
  const resetUserInfoAtoms = useResetRecoilState(userInfoAtom);

  const handleDeleteUser = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    await AuthAPI.patch('/members/quit');
    localStorage.removeItem('accessToken');
    resetUserInfoAtoms();
    navigate('/');
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center">
          <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="w-full h-full text-center">
              <div className="flex flex-col justify-between h-full">
                <svg
                  width="50"
                  height="50"
                  className="w-12 h-12 m-auto mt-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
                </svg>
                <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">회원 탈퇴</p>
                <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
                  정말 계정을 삭제하시겠습니까?
                </p>
                <div className="flex items-center justify-between w-full gap-4 mt-8">
                  <button
                    type="button"
                    onClick={handleDeleteUser}
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    삭제
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpenDeleteModal(false)}
                    className="py-2 px-4 bg-gray-400 hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCheckModal;
