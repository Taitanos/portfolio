import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Project, ProjectPropsType} from './project/Project';
import {Container} from '../../../components/Container';
import {S} from './Projects_Styles'
import {Data} from '../../../data/Data'

export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle>Проекты</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} align={'flex-start'}>
                    {Data.projectData.map((p: ProjectPropsType, index) => (
                            <Project key={index} title={p.title} text={p.text} src={p.src}/>
                        )
                    )}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};