import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthAPI from '@/api/AuthAPI';
import WanderHubAPI from '@/api/WanderHubAPI';

const Redirection = () => {
  const code = new URL(window.location.href);
  const navigate = useNavigate();
  const accessToken: string | null = code.searchParams.get('access_token');
  const isNewbie = code.searchParams.get('newbie');
  const [nickName, setNickName] = useState('');

  if (accessToken !== null) {
    localStorage.setItem('accessToken', accessToken);
    /*if (isNewbie === 'false') {
      navigate('/');
    }*/
  }

  const patchNickName = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const postData = { name: '', nickName, local: '' };
    console.log(postData);
    const res = await WanderHubAPI.patch('/members', postData);

    if (res.status === 200) {
      window.alert('닉네임이 설정되었습니다.');
      navigate('/');
    } else {
      console.log(res);
      if (res.data.message === 'Nickname Duplicated') {
        window.alert('이미 존재하는 닉네임입니다.');
      } else if (res.data.message === 'Nickname is never update') {
        window.alert('가입 시 설정한 닉네임은 수정할 수 없습니다.');
      }
    }
  };

  return (
    <div className="flex flex-col">
      닉네임을 입력해주세요
      <input className="border" value={nickName} onChange={e => setNickName(e.target.value)} />
      <button
        onClick={e => patchNickName(e)}
        className="mt-3 w-full h-10 rounded-lg bg-primary text-white text-[16px] hover:bg-[#45614b]"
      >
        설정
      </button>
    </div>
  );
};

export default Redirection;
