import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill, SkillPropsType} from './skill/Skill';
import image from '../../../assets/images/skills.webp'
import {SectionTitle} from '../../../components/SectionTitle';
import {Container} from '../../../components/Container';
import {S} from './Skills_Styles'


const SkillData: SkillPropsType[] = [
    {iconId: 'typeScript', titleId: 'Type Script'},
    {iconId: 'javaScript', titleId: 'Java Script'},
    {iconId: 'react', titleId: 'React', viewBox: '0 0 40 38'},
    {iconId: 'redux', titleId: 'Redux'},
    {iconId: 'restAPI', titleId: 'Rest API'},
    {iconId: 'git', titleId: 'Git'},
    {iconId: 'html', titleId: 'HTML'},
    {iconId: 'css', titleId: 'CSS'},
    {iconId: 'sass', titleId: 'SASS'},
    {iconId: 'bootstrap', titleId: 'Bootstrap'},
    {iconId: 'styledComponents', titleId: 'Styled Components', viewBox: '0 0 32 32'},
    {iconId: 'materialUI', titleId: 'Material UI', viewBox: '0 0 256 204'},
]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>Навыки</SectionTitle>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <S.SkillsWrapper>
                        <S.Description>Имею опыт работы со следующими технологиями:</S.Description>
                        <FlexWrapper wrap={'wrap'} align={'center'} justify={'space-around'}>
                            {SkillData.map((s: SkillPropsType, index) => (
                                <Skill key={index} iconId={s.iconId} titleId={s.titleId}
                                       viewBox={s.viewBox ? s.viewBox : '0 0 48 48'}/>))}
                        </FlexWrapper>
                    </S.SkillsWrapper>
                    <S.Picture src={image} alt={'skills'}/>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};