import React from 'react';

import * as S from './styled';

export const Text = (props) => {
  const { variant = 'text', children } = props;

  if (!children) {
    return null;
  }

  return <S.Text variant={variant}>{children}</S.Text>;
};
