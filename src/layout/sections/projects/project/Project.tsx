import React from 'react';
import {Button} from '../../../../components/Button';
import {S} from '../Projects_Styles'

export type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt=""/>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Button>Посмотреть проект</Button>
            </S.Description>
        </S.Project>
    );
};