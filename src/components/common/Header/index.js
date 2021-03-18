import React from 'react';

import { Container } from '../Container';
import { Wrapper } from './styled';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <div>Баланс</div>
          <div>0 руб</div>
        </div>
        <div>
          <div>Траты</div>
          <div>1.670 руб</div>
        </div>
        <div>
          <div>Запланировано</div>
          <div>3.450 руб</div>
        </div>
      </Container>
    </Wrapper>
  );
};
