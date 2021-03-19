import styled from 'styled-components';

import { THEME } from '../../theme';

export const Wrapper = styled.header`
  height: 48px;
  background-color: ${THEME.white};
  color: ${THEME.text.gray};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
