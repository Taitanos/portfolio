import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Project} from './project/Project';
import ProjectImg from './../../../assets/images/project.webp'
import {Container} from '../../../components/Container';
import {theme} from '../../../styled/Theme';

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Container>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} align={'flex-start'}>
                    <Project title={'Social Network'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             src={ProjectImg}/>
                    <Project title={'Fast Company'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             src={ProjectImg}/>
                    <Project title={'Counter'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             src={ProjectImg}/>
                    <Project title={'TodoList'}
                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             src={ProjectImg}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
`