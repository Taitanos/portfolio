import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import {S} from '../Skills_Styles'

export type SkillPropsType = {
    iconId: string
    titleId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <S.IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            </S.IconWrapper>
            <S.SkillTitle>{props.titleId}</S.SkillTitle>
        </S.Skill>
    );
};