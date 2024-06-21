import styled, {css} from 'styled-components';
import {theme} from '../../../styled/Theme';

//Menu styled

const Link = styled.a`
  font-family: "Be Vietnam", sans-serif;
  font-weight: 400;
  font-size: 28px;
  font-style: italic;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.fontTextDark};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const MenuItem = styled.li`
    position: relative;
  
  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.fontTextDark};
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }
  
  &:hover {

    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(3deg) translateX(2px);
      color: ${theme.colors.fontTitle};

      & + ${Mask} {
        transform: skewX(3deg) translateX(-2px);
      }
    }
  }
`

//Mobile styled

const MobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(131, 131, 131, 0.9);

  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.secondaryBg};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.secondaryBg};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.secondaryBg};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

//Desktop styled

const DesktopMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
      justify-content: center;
    }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`

export const S = {
    Link,
    Mask,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}