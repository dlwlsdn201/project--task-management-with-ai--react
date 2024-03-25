import DefaultButton from '@components/common/Buttons/DefaultButton';
import React from 'react';

interface Props {
  isValid: boolean;
}

const Submit = ({ isValid }: Props) => {
  const submitClassName = `btn-primary ${isValid ? '' : 'btn-disabled'}`;

  return (
    <DefaultButton
      label='로그인'
      btnStyle='primary'
      btnType='submit'
      customStyle={submitClassName}
    />
  );
};

export default Submit;
