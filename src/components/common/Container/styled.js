import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  ${({ flexDirection }) => `flex-direction: ${flexDirection};`}
`;
