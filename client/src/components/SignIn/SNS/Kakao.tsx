import React from 'react';
import DefaultButton from '@components/common/Buttons/DefaultButton';
import { RiKakaoTalkFill } from 'react-icons/ri';
// import { translateToStyleClassnames } from '@components/common/Buttons/Handlers';

const KakaoSignIn = () => {
  // const classname = translateToStyleClassnames({
  //   btnStyle: 'default',
  //   btnColor: '#f5e00f',
  //   textColor: 'black',
  //   disabled: false,
  // });

  const kakaoClassName = 'bg-[#f5e00f] text-[black] hover:text-[white]';

  return (
    <DefaultButton
      btnStyle='default'
      btnType='button'
      customStyle={kakaoClassName}
      // classname='btn btn-neutral enable bg-[#f5e00f] text-[black]'
      label='카카오 게정으로 로그인'
      prefix={<RiKakaoTalkFill />}
    />
  );
};

export default KakaoSignIn;
