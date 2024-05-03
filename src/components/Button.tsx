import styled from 'styled-components';
import {theme} from '../styled/Theme';

export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 200px;
  height: 50px;
  position: relative;
  color: ${theme.colors.fontGreeting};
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
      border: 2px solid #fff;
      border-radius: 4px;
      color: ${theme.colors.fontText};
    }
    color: ${theme.colors.fontText};
  }

  &::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.fontGreeting};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`