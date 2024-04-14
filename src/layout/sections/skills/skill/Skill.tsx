import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import styled from 'styled-components';
import {theme} from '../../../../styled/Theme';

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
            <IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            </IconWrapper>
            <SkillTitle>{props.titleId}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 15px;
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 70px;
    height: 70px;
    background-image: linear-gradient(270deg, rgba(79, 71, 200, 0.15), rgba(29, 213, 208, 0.15));
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.p`
  font-family: "Be Vietnam", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: ${theme.color.fontText};
  margin: 25px 0 5px;
`