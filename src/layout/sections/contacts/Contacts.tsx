import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import image from '../../../assets/images/contact.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {theme} from '../../../styled/Theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <Container>
                <FlexWrapper justify={'space-around'}>
                    <Picture src={image} alt={'contact'}/>
                    <StyledForm>
                        <Field placeholder={'Enter email address'}/>
                        <Field placeholder={'Enter message...'} as={'textarea'}/>
                        <Button type={'submit'}>Send Message</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`

const Picture = styled.img`
  width: 511px;
  height: 414px;
  object-fit: cover;
`

const StyledForm = styled.form`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;
  
  textarea {
    resize: none;
    height: 160px;
  }
`

const Field = styled.input`
  font-family: "Be Vietnam", sans-serif;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 207%;
  border: 1px solid ${theme.colors.borderBg};
  color: ${theme.colors.fontDescription};
  padding: 7px 15px;
  
  &::placeholder {
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderBg};
  }
`