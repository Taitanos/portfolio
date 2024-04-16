import styled from 'styled-components';
import {theme} from '../styled/Theme';

export const Button = styled.button`
  border: 2px solid #fff;
  border-radius: 4px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  background-color: ${theme.colors.fontGreeting};
`