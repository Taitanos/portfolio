import React from 'react';
import photo from './../../../assets/images/photo.webp'
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {theme} from '../../../styled/Theme';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <Greeting>Приветствую, я </Greeting>
                        <MainTitle>React frontend developer </MainTitle>
                        <Name>Меня зовут <span>Тукарев Николай</span>, разработкой занимаюсь с 2022 года</Name>
                    </div>

                    <PhotoWrapper>
                        <Photo src={photo} alt="photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.color.primaryBg};
  display: flex;

`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.fontGreeting};

    position: absolute;
    top: -24px;
    left: 24px;
    
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const Greeting = styled.h2`
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${theme.color.fontGreeting}
`

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${theme.color.fontGreeting};
  margin: 10px 0;
`

const Name = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: ${theme.color.fontText};

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 5px;
      background-color: ${theme.color.fontGreeting};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`