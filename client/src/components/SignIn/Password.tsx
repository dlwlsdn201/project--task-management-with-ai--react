import React from 'react';

const properties = {
  name: 'password',
  placeholder: '비밀번호 입력',
};

interface Props {
  updateInputPasswordValue: (value: string) => void;
}

const Password = ({ updateInputPasswordValue }: Props) => {
  return (
    <input
      id={properties.name}
      type='text'
      name={properties.name}
      onChange={e => updateInputPasswordValue(e.target.value)}
      placeholder={properties.placeholder}
      className='input input-bordered w-full max-w-xs'
    />
  );
};

export default Password;
