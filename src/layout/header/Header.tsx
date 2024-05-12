import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {Menu} from './menu/Menu';
import {Container} from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import {MobileMenu} from './mobileMenu/MobileMenu';

const items = ["Главная", 'Навыки', 'Проекты', 'Связаться']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #FCFCFC;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`