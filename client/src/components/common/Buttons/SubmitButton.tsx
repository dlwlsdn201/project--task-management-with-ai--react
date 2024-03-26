import DefaultButton from '@components/common/Buttons/DefaultButton';
import React from 'react';

interface Props {
  label: string;
  isValid: boolean;
}

const Submit = ({ label, isValid }: Props) => {
  const submitClassName = `btn-primary ${isValid ? '' : 'btn-disabled'} w-[100%]`;

  return (
    <DefaultButton
      label={label}
      btnStyle='primary'
      btnType='submit'
      customStyle={submitClassName}
    />
  );
};

export default Submit;
