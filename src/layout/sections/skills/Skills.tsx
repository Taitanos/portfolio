import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill';
import image from '../../../assets/images/skills.webp'
import {SectionTitle} from '../../../components/SectionTitle';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper>
                <FlexWrapper wrap={'wrap'}>
                    <Skill iconId={'typeScript'} titleId={'Type Script'}/>
                    <Skill iconId={'react'} titleId={'React'}/>
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
                <Picture src={image} alt={'skills'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Picture = styled.img`
  width: 511px;
  height: 414px;
  object-fit: cover;
`