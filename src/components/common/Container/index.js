import React from 'react';

import * as S from './styled';

export const Container = (props) => {
  const { children, flexDirection = 'row', ...other } = props;

  return (
    <S.Container flexDirection={flexDirection} {...other}>
      {children}
    </S.Container>
  );
};
