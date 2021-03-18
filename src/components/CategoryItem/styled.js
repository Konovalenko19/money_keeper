import styled from 'styled-components';

const colors = ['green', 'pink', 'lightblue', 'orange', 'orangered', 'yellow'];

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  width: 120px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin-bottom: 12px;
  background-color: ${({ colorIndex }) => colors[colorIndex]};
`;

export const Title = styled.div``;
