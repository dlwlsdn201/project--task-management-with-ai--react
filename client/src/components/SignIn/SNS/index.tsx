import React from 'react';
import GoogleSignIn from './Google';
import KakaoSignIn from './Kakao';

const SnsSignIn = () => {
  return (
    <>
      <GoogleSignIn />
      <KakaoSignIn />
    </>
  );
};

export default SnsSignIn;
