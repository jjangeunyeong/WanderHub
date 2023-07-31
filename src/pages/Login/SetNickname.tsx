import React, { useState } from 'react';
import Logo from '@assets/white_bg_logo.png';
import XMarkIcon from '@assets/cross.png';
import AuthAPI from '@/api/WanderHubAPI';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';
import { AxiosError } from 'axios';

const SetNickname = () => {
  const [nickName, setNickName] = useState('');
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const getUserInfo = async () => {
    const { data } = await AuthAPI.get('/members');
    setUserInfo(data.data);
  };

  const patchNickName = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const postData = { name: '', nickName, local: '' };
      const res = await AuthAPI.patch('/members', postData);

      if (res.status === 200) {
        alert('닉네임이 설정되었습니다.');
        getUserInfo();
        navigate('/');
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.data.message === 'Nickname is never update') {
          alert('이미 닉네임이 설정된 사용자입니다.');
        } else if (error.response?.data.message === 'Nickname Duplicated') {
          alert('이미 사용중인 닉네임입니다.');
        }
      }
    }
  };

  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
              <div className="bg-white w-[450px] h-[400px] sm:px-8 sm:pl sm:py-12">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <button
                    type="button"
                    className="absolute right-8 top-6"
                    onClick={() => window.alert('닉네임 설정은 필수입니다.')}
                  >
                    <img src={XMarkIcon} alt="close button" className="h-4 w-4" />
                  </button>
                  <div className=" sm:w-full sm:max-w-sm">
                    <img className="w-52 h-19 mb-5" src={Logo} alt="WanderHub Logo" />
                    <h2 className="mb-3 text-3xl font-bold leading-9 tracking-tight text-gray-900">
                      닉네임 설정
                    </h2>
                  </div>
                  <p className="mb-large text-base text-gray-900 mb-[96px]">
                    사용할 닉네임을 입력해주세요
                  </p>
                  <input
                    className="border w-[380px] h-10 rounded-lg pl-3"
                    value={nickName}
                    onChange={e => setNickName(e.target.value)}
                  />
                  <button
                    onClick={e => patchNickName(e)}
                    className="mt-3 w-[380px] h-10 rounded-lg bg-primary text-white text-[16px] hover:bg-[#45614b]"
                  >
                    설정
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

export default SetNickname;
