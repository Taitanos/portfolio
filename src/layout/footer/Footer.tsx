import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/icon/Icon';
import {theme} from '../../styled/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'} gap={'25px'}>
                <TextInfo>Мои социальные сети:</TextInfo>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedIn'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            <FlexWrapper direction={'column'} gap={'25px'}>
                <TextInfo>Больше проектов, над которыми я работал</TextInfo>
                <FlexWrapper align={'center'}>
                    <Text> на github <a href={'https://github.com/Taitanos'}>@Taitanos</a></Text>
                    <Icon iconId={'github'} viewBox={'0 0 31 35'}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const TextInfo = styled.span`
  color: ${theme.colors.fontText};
`

const Text = styled(TextInfo)`
  padding: 15px;

  a {
    color: ${theme.colors.fontGit};
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`
