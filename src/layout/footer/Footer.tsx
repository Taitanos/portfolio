import React from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/icon/Icon';
import {S} from './Footer_Styles'
import {Data} from '../../data/Data'

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.TextInfo>Мои социальные сети:</S.TextInfo>
                <S.SocialList>

                    {Data.socialItemData.map((s, index) => {
                       return (
                           <S.SocialItem key={index}>
                               <S.SocialLink>
                                   <Icon iconId={s.iconId}/>
                               </S.SocialLink>
                           </S.SocialItem>
                       )
                        }
                    )}
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
