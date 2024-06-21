import React from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/icon/Icon';
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.TextInfo>Мои социальные сети:</S.TextInfo>
                <S.SocialList>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={'telegram'}/>
                        </S.SocialLink>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={'vk'}/>
                        </S.SocialLink>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={'linkedIn'}/>
                        </S.SocialLink>
                    </S.SocialItem>
                </S.SocialList>
            </FlexWrapper>
            <FlexWrapper direction={'column'}>
                <S.TextInfo>Больше проектов, над которыми я работал</S.TextInfo>
                <FlexWrapper align={'center'}>
                    <S.Text> на github <a href={'https://github.com/Taitanos'}>@Taitanos</a></S.Text>
                    <Icon iconId={'github'} viewBox={'0 0 31 35'}/>
                </FlexWrapper>
            </FlexWrapper>
        </S.Footer>
    );
};
