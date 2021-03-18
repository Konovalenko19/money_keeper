import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    body, input, button, textarea {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 1.2;
    }
    * {
        box-sizing: border-box;
    }
`;
