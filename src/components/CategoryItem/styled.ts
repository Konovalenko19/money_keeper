import styled from 'styled-components';

const colors = ['green', 'pink', 'lightblue', 'orange', 'orangered', 'yellow'];

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 2px;
  width: 120px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 12px;
  text-align: center;
  word-break: break-all;
`;
