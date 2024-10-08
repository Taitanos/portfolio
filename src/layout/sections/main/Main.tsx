import React from 'react';
import photo from './../../../assets/images/photo1.webp';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Button} from '../../../components/Button';
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';



export const Main: React.FC = () => {
    return (
        <S.Main id={'main'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <S.InfoWrapper>
                        <div>
                            <S.Name>Приветствую, меня зовут <span>Тукарев Николай</span></S.Name>
                            <S.MainTitle>Frontend разработчик</S.MainTitle>
                            <S.Description>
                                <Typewriter
                                    options={{
                                        strings: ['Разработкой занимаюсь с 2022 года, я целеустремленный и трудолюбивый человек с опытом создания SPA с использованием React/Redux/TypeScript. Мне нравится создавать вещи, с которыми пользователям интересно взаимодействовать. Как разработчик, я стремлюсь создавать простые, понятные и красивые решения для интернета. Свободное время использую для улучшение и изучение новых технологий, саморазвитие, а так же занимаюсь спортом для поддержания себя в форме. Готов рассмотреть проектную работу и полную занятость.'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                        deleteSpeed: 25,
                                    }}
                                />
                            </S.Description>
                        </div>
                        <div>
                            <S.Links href={'https://drive.google.com/file/d/1TMVmdOT8QMqMH8ibk3ApbJ6TSmao5CKm/view?usp=sharing'} target={'_blank'}><Button>Посмотреть CV</Button></S.Links>
                        </div>
                    </S.InfoWrapper>

                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="photo"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};