import styled from 'styled-components';

export const Text = styled.div`
  display: flex;
  color: #000;

  ${({ variant }) => {
    switch (variant) {
      case 'text':
        return `
            font-size: 16px;
        `;
      case 'h1':
        return `
            font-size: 26px;
            margin-bottom: 12px;
        `;
    }
  }}
`;
