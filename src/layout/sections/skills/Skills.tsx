import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill, SkillPropsType} from './skill/Skill';
import image from '../../../assets/images/skills.webp'
import {SectionTitle} from '../../../components/SectionTitle';
import {Container} from '../../../components/Container';
import {S} from './Skills_Styles'
import {Data} from '../../../data/Data'

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>Навыки</SectionTitle>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'}>
                    <S.SkillsWrapper>
                        <S.Description>Имею опыт работы со следующими технологиями:</S.Description>
                        <FlexWrapper wrap={'wrap'} align={'center'} justify={'space-around'}>
                            {Data.skillData.map((s: SkillPropsType, index) => (
                                    <Skill key={index} iconId={s.iconId} titleId={s.titleId}
                                           viewBox={s.viewBox ? s.viewBox : '0 0 48 48'}/>
                                )
                            )}
                        </FlexWrapper>
                    </S.SkillsWrapper>
                    <S.Picture src={image} alt={'skills'}/>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};