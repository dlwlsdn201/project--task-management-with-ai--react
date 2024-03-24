import React from 'react';
import { ButtonProps } from './Button';

const DefaultButton = ({
  btnStyle,
  btnType,
  label,
  prefix = undefined,
  customStyle = '',
}: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType}
      className={`btn ${btnStyle} ${customStyle}`}
    >
      {prefix}
      {label}
    </button>
  );
};

export default DefaultButton;
