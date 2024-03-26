import ID from '@components/SignIn/ID';
import Password from '@components/SignIn/Password';
import { InnerWrapper, RootWrapper } from '@components/SignIn/SignIn.styled';
import React from 'react';
import Submit from '@components/common/Buttons/SubmitButton';
import UserName from './UserName';
import Contact from './Contact';

const SignUp = () => {
  return (
    <RootWrapper>
      <div className='flex flex-col h-screen'>
        <main className='flex-1 grid items-center justify-center gap-4 px-4 text-center'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold'>회원가입</h1>
            </div>
            <InnerWrapper>
              <div className='space-y-2'>
                {/* <strong>사용자 이름</strong> */}
                <UserName updateInputUserNameValue={() => {}} />
              </div>
              <div className='space-y-2'>
                {/* <strong>아이디</strong> */}
                <ID updateInputUserIdValue={() => {}} />
              </div>
              <div className='space-y-2'>
                {/* <strong>비밀번호</strong> */}
                <Password updateInputPasswordValue={() => {}} />
              </div>
              <div className='space-y-2'>
                {/* <strong>비밀번호 확인</strong> */}
                <Password
                  placeholder='비밀번호 재입력'
                  updateInputPasswordValue={() => {}}
                />
              </div>
              <div className='space-y-2'>
                {/* <strong>비밀번호 확인</strong> */}
                <Contact updateUserContactValue={() => {}} />
              </div>
              <div className='space-y-2'>
                <Submit label='회원가입' isValid />
              </div>
            </InnerWrapper>
          </div>
        </main>
      </div>
    </RootWrapper>
  );
};

export default SignUp;
