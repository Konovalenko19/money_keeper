import React from 'react';

export const Input = (props) => {
  const { type = 'text', placeholder = '', value, onChange, ...other } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...other}
    />
  );
};
