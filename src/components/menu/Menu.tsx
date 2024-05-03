import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styled/Theme';

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const Link = styled.a`
  font-family: "Be Vietnam", sans-serif;
  font-weight: 400;
  font-size: 20px;
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
  //outline: 1px solid red;
  color: ${theme.colors.fontTextDark};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  
  &::before {
    content: "";
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
      transform: skewX(7deg) translateX(2px);
      color: ${theme.colors.fontTitle};

      & + ${Mask} {
        transform: skewX(7deg) translateX(-2px);
      }
    }
  }
`