import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill';
import image from '../../../assets/images/skills.webp'
import {SectionTitle} from '../../../components/SectionTitle';
import {theme} from '../../../styled/Theme';
import {Container} from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <Container>
                <FlexWrapper align={'center'}>
                    <FlexWrapper direction={'column'}>
                        <Description>Имею опыт работы со следующими технологиями:</Description>
                        <FlexWrapper wrap={'wrap'} align={'center'}>
                            <Skill iconId={'typeScript'} titleId={'Type Script'}/>
                            <Skill iconId={'react'} titleId={'React'} viewBox={'0 0 40 38'}/>
                            <Skill iconId={'redux'} titleId={'Redux'}/>
                            <Skill iconId={'restAPI'} titleId={'Rest API'}/>
                            <Skill iconId={'javaScript'} titleId={'Java Script'}/>
                            <Skill iconId={'git'} titleId={'Git'}/>
                            <Skill iconId={'html'} titleId={'HTML'}/>
                            <Skill iconId={'css'} titleId={'CSS'}/>
                            <Skill iconId={'sass'} titleId={'SASS'}/>
                            <Skill iconId={'bootstrap'} titleId={'Bootstrap'}/>
                            <Skill iconId={'styledComponents'} titleId={'Styled Components'} viewBox={'0 0 32 32'}/>
                            <Skill iconId={'materialUI'} titleId={'Material UI'} viewBox={'0 0 256 204'}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Picture src={image} alt={'skills'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: ${theme.color.primaryBg};
  display: flex;
  flex-direction: column;
`

const Description = styled.span`
  font-family: "Be Vietnam", sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 30px;
  color: ${theme.color.fontDescription};
`

const Picture = styled.img`
  max-width: 511px;
  max-height: 414px;
  object-fit: cover;
`