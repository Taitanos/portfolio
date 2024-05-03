import React from 'react';
import photo from './../../../assets/images/photo.webp'
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {theme} from '../../../styled/Theme';
import {Button} from '../../../components/Button';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <FlexWrapper justify={'center'} direction={'column'}>
                        <div>
                            <Name>Приветствую, меня зовут <span>Тукарев Николай</span> и я</Name>
                            <MainTitle>Frontend разработчик</MainTitle>
                            <Description>Разработкой занимаюсь с 2022 года, я бы описал себя как целеустремленного и трудолюбивого человека с опытом создания SPA с использованием React/Redux/TypeScript. Мне нравится создавать вещи, с которыми пользователям интересно взаимодействовать. Как разработчик, я стремлюсь создавать простые, понятные и красивые решения для интернета. Обычно я предпочитаю тратить свободное время на улучшение и изучение новых технологий, а также активно занимаюсь спортом для поддержания себя в форме. Готов рассмотреть проектную работу и полную занятость. </Description>

                        </div>
                        <div>
                            <Button>Загрузить CV</Button>
                        </div>
                    </FlexWrapper>

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
  background-color: ${theme.colors.primaryBg};
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.fontGreeting};

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

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${theme.colors.fontGreeting};
  margin: 10px 0;
`

const Description = styled.h2`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  padding: 15px 25px 15px 0;
  letter-spacing: 0.01em;
  line-height: 2em;
  margin-bottom: 20px;
  color: ${theme.colors.fontDescription}
`

const Name = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${theme.colors.fontGreeting};

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 3px;
      background-color: ${theme.colors.fontGreeting};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`