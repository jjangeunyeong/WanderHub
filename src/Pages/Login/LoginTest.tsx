import React from 'react';

const LoginTest = () => {
  return (
    <button
      onClick={() => {
        window.location.href =
          'http://ec2-3-34-80-242.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao';
      }}
    >
      로그인
    </button>
  );
};

export default LoginTest;
