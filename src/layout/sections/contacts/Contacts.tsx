import React from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import image from '../../../assets/images/contact.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {S} from './Contacts_Styled'

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Связаться</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={"wrap"}>
                    <S.Picture src={image} alt={'contact'}/>
                    <S.Form>
                        <S.Field placeholder={'Ваша почта'}/>
                        <S.Field placeholder={'Ваш текст...'} as={'textarea'}/>
                        <Button type={'submit'}>Отправить</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};