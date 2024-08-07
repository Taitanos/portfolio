import {createGlobalStyle} from 'styled-components';
import { theme } from './Theme';

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;

    min-width: 360px;
  }
  
  section {
    padding: 110px 0;

    @media ${theme.media.mobile} {
      padding: 105px 0
    }
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }
`