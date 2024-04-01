import React from 'react';
import photo from './../../../assets/images/photo.webp'
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Приветствую</span>
                    <Name>Меня зовут Тукарев Николай</Name>
                    <MainTitle>React frontend developer </MainTitle>
                </div>

                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
  background-color: #fff5e7;
`

const Photo = styled.img`
  width: 344px;
  height: 389px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`