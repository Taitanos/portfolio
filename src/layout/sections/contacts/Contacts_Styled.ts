import styled from 'styled-components';
import {theme} from '../../../styled/Theme';

const Contacts = styled.section`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding-bottom: 150px;
`

const Picture = styled.img`
  width: 511px;
  height: 414px;
  object-fit: cover;
  margin-bottom: 25px;
  
  @media ${theme.media.mobile} {
    width: 280px;
    height: 230px;
  }
`

const Form = styled.form`
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

export const S = {
    Contacts,
    Picture,
    Form,
    Field,
}