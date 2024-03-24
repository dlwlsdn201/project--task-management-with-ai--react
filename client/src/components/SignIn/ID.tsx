import React from 'react';

const properties = {
  name: 'userId',
  placeholder: '아이디 입력 (sample@gmail.com)',
};

interface Props {
  updateInputUserIdValue: (args: string) => void;
}

const ID = ({ updateInputUserIdValue }: Props) => {
  return (
    <input
      id={properties.name}
      type='text'
      name={properties.name}
      placeholder={properties.placeholder}
      onChange={e => updateInputUserIdValue(e.target.value)}
      className='input input-bordered w-full max-w-xs'
    />
  );
};

export default ID;
