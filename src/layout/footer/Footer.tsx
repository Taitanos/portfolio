import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/icon/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} gap={'25px'}>
                <TextInfo>My social media links:</TextInfo>
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
                <TextInfo>More projects I’ve worked on</TextInfo>
                <FlexWrapper align={'center'}>
                    <Icon iconId={'github'} viewBox={'0 0 35 37'}/>
                    <TextInfo>@Taitanos on github</TextInfo>
                </FlexWrapper>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: #613cee;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const TextInfo = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`