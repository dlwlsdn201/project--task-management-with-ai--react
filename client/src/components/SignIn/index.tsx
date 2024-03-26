import React, { useCallback, useEffect, useState } from 'react';
import Submit from '@components/common/Buttons/SubmitButton';
import ID from './ID';
import Password from './Password';
import { InnerWrapper, RootWrapper } from './SignIn.styled';
import SnsSignIn from './SNS';

export const Title = (): JSX.Element => (
  <div className='text-center'>
    <h1 className='text-3xl font-bold'>Welcome</h1>
  </div>
);

const SignIn = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [isValid, setIsValid] = useState<boolean>(false);

  console.log({ userId, password, isValid });
  const updateInputUserIdValue = (value: string) => {
    setUserId(value);
  };
  const updateInputPasswordValue = (value: string) => {
    setPassword(value);
  };

  const checkValidInputId = useCallback((): boolean => {
    if (
      userId &&
      userId.length > 6 &&
      userId.split('@').length === 2 &&
      userId.split('.').length === 2
    )
      return true;
    return false;
  }, [userId]);

  const checkValidInputPassword = useCallback((): boolean => {
    if (password && password.length >= 8) return true;
    return false;
  }, [password]);

  useEffect(() => {
    if (checkValidInputId() && checkValidInputPassword()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userId, password, checkValidInputId, checkValidInputPassword]);

  return (
    <RootWrapper>
      <section>
        <InnerWrapper>
          <Title />
          <ID updateInputUserIdValue={updateInputUserIdValue} />
          <Password updateInputPasswordValue={updateInputPasswordValue} />
          <Submit label='로그인' isValid={isValid} />
        </InnerWrapper>
      </section>
      <section>
        <InnerWrapper>
          <SnsSignIn />
        </InnerWrapper>
      </section>
      <section>
        <div className='text-center text-sm'>{`Don't have an account?`}</div>
      </section>
    </RootWrapper>
  );
};

export default SignIn;
