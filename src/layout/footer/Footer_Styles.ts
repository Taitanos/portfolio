import styled from 'styled-components';
import {theme} from '../../styled/Theme';

const Footer = styled.footer`
  padding: 40px 0;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const TextInfo = styled.span`
  color: ${theme.colors.fontText};
`

const Text = styled(TextInfo)`
  padding: 15px;

  a {
    color: ${theme.colors.fontGit};
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`

export const S = {
    Footer,
    TextInfo,
    Text,
    SocialList,
    SocialItem,
    SocialLink,
}