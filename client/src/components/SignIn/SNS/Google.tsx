import React from 'react';
import DefaultButton from '@components/common/Buttons/DefaultButton';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignIn = () => {
  const googleClassName = 'enable bg-[white] text-[black] hover:text-[white]';

  return (
    <DefaultButton
      label='Google 게정으로 로그인'
      btnStyle='default'
      btnType='button'
      customStyle={googleClassName}
      prefix={<FcGoogle />}
    />
  );
};

export default GoogleSignIn;
