import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import image from '../../../assets/images/contact.webp'
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Button} from '../../../components/Button';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <FlexWrapper justify={"space-around"}>
                <Picture src={image} alt={"contact"}/>
                <StyledForm>
                    <Field placeholder={"Enter email address"}/>
                    <Field placeholder={"Enter message..."} as={'textarea'}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
  background-color: #fffae1;
`

const StyledForm = styled.form`
    max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Field = styled.input`
`

const Picture = styled.img`
  width: 511px;
  height: 414px;
  object-fit: cover;
`