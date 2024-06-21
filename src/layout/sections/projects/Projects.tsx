import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Project, ProjectPropsType} from './project/Project';
import ProjectImg from './../../../assets/images/project.webp'
import {Container} from '../../../components/Container';
import {S} from './Projects_Styles'

const ProjectData: ProjectPropsType[] = [
    {title:'Social Network', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
    {title:'Fast Company', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
    {title:'Counter', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
    {title:'TodoList', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', src: ProjectImg},
]

export const Projects = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Проекты</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} align={'flex-start'}>
                    {ProjectData.map((p: ProjectPropsType, index) => (
                        <Project key={index} title={p.title} text={p.text} src={p.src}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};