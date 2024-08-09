import React from 'react';
import {Button} from '../../../../components/Button';
import {S} from '../Projects_Styles'

export type ProjectPropsType = {
    title: string
    text: string
    stack: string
    src: string
    link: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt=""/>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.stack}</S.Text>
                <S.Text>{props.text}</S.Text>
                <S.Links href={props.link} target={'_blank'}><Button>Посмотреть проект</Button></S.Links>
            </S.Description>
        </S.Project>
    );
};