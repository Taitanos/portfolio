import React from 'react';
import {Icon} from '../../../components/icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
    iconId: string
    titleId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                <SkillTitle>{props.titleId}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
`

const SkillTitle = styled.h3`

`