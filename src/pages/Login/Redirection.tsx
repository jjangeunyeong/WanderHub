import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthAPI from '@/api/AuthAPI';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';
import SetNickname from './SetNickname';

const Redirection = () => {
  const code = new URL(window.location.href);
  const navigate = useNavigate();
  const accessToken: string | null = code.searchParams.get('access_token');

  const isNewbie = code.searchParams.get('newbie');
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const getUserInfo = async () => {
    const { data } = await AuthAPI.get('/members');
    setUserInfo(data.data);
  };

  useEffect(() => {
    if (isNewbie === null) {
      navigate('/');
    } else if (accessToken !== null) {
      localStorage.setItem('accessToken', accessToken);

      if (isNewbie === 'false') {
        getUserInfo();
        navigate('/');
      }
    }
  }, []);

  return <>{isNewbie !== 'false' && <SetNickname />}</>;
};

export default Redirection;
