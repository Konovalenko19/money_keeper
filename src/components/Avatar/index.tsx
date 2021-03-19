import React, { FC, ReactNode } from 'react';

import { Wrap } from './styled';

interface IProps {
  children?: ReactNode;
}

export const Avatar: FC<IProps> = (props) => {
  const { children } = props;

  return <Wrap>{children}</Wrap>;
};
