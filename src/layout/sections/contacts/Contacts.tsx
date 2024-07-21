import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import image from '../../../assets/images/contact.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {S} from './Contacts_Styled';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        
        if (!form.current) return

        emailjs
            .sendForm('service_an0r26x', 'template_40ay4ta', form.current, {
                publicKey: 'Rh7CaC_-kW9RqX6Xi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset()
    };

    return (
        <S.Contacts id={'contact'}>
            <Container>
                <SectionTitle>Для связи</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                    <S.Picture src={image} alt={'contact'}/>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'Имя'} name='user_name'/>
                        <S.Field required placeholder={'Ваша почта'} name='email'/>
                        <S.Field required placeholder={'Тема'} name={'subject'}/>
                        <S.Field required placeholder={'Ваш текст...'} as={'textarea'} name={'message'}/>
                        <Button type={'submit'}>Отправить</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};