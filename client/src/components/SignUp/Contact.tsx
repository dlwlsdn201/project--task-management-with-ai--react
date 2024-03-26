import React from 'react';

const properties = {
  name: 'userContact',
  placeholder: '전화번호 (ex_010-0000-0000)',
};

interface Props {
  updateUserContactValue: (args: string) => void;
}

const Contact = ({ updateUserContactValue }: Props) => {
  return (
    <input
      id={properties.name}
      type='text'
      name={properties.name}
      placeholder={properties.placeholder}
      onChange={e => updateUserContactValue(e.target.value)}
      className='input input-bordered w-full max-w-xs'
    />
  );
};

export default Contact;
