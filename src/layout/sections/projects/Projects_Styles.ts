import styled from 'styled-components';
import {theme} from '../../../styled/Theme';

// Projects Styles

const Projects = styled.section`
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

// Project Styles

const Project = styled.div`
  background-color: ${theme.colors.projectBg};
  max-width: 381px;
  width: 100%;
  border: 7px solid;
  border-image: linear-gradient(270deg, rgba(13, 84, 190, 0.50), rgba(32, 236, 211, 0.50)) 1;
  margin: 15px;
`

const Image = styled.img`
  width: 100%;
  height: 276px;
  object-fit: cover;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 20px;
`

const Title = styled.h3`
  color: ${theme.colors.fontText};
`

const Text = styled.p`
  color: ${theme.colors.fontText};
  margin: 19px 0;
  line-height: 1.4;
`

const Links = styled.a`
    text-decoration: none;
`

export const S = {
    Projects,
    Project,
    Image,
    Description,
    Title,
    Text,
    Links,
}