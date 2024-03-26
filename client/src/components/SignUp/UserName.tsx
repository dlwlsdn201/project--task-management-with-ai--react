import React from 'react';

const properties = {
  name: 'userName',
  placeholder: '사용자 이름',
};

interface Props {
  updateInputUserNameValue: (args: string) => void;
}

const UserName = ({ updateInputUserNameValue }: Props) => {
  return (
    <input
      id={properties.name}
      type='text'
      name={properties.name}
      placeholder={properties.placeholder}
      onChange={e => updateInputUserNameValue(e.target.value)}
      className='input input-bordered w-full max-w-xs'
    />
  );
};

export default UserName;
