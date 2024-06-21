import React from 'react';
import photo from './../../../assets/images/photo1.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Button} from '../../../components/Button';
import {S} from './Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <S.InfoWrapper>
                        <div>
                            <S.Name>Приветствую, меня зовут <span>Тукарев Николай</span></S.Name>
                            <S.MainTitle>Frontend разработчик</S.MainTitle>
                            <S.Description>Разработкой занимаюсь с 2022 года, я бы описал себя как целеустремленного и
                                трудолюбивого человека с опытом создания SPA с использованием React/Redux/TypeScript.
                                Мне нравится создавать вещи, с которыми пользователям интересно взаимодействовать. Как
                                разработчик, я стремлюсь создавать простые, понятные и красивые решения для интернета.
                                Обычно я предпочитаю тратить свободное время на улучшение и изучение новых технологий, а
                                также активно занимаюсь спортом для поддержания себя в форме. Готов рассмотреть
                                проектную работу и полную занятость.
                            </S.Description>
                        </div>
                        <div>
                            <Button>Загрузить CV</Button>
                        </div>
                    </S.InfoWrapper>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};