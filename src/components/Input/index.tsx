import React, { FC } from 'react';

interface IProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: FC<IProps> = (props) => {
  const { type = 'text', placeholder = '', value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
    />
  );
};
