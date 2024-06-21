import styled from 'styled-components';
import {theme} from '../../../styled/Theme';

// Skills Styled

const Skills = styled.section`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Description = styled.span`
  display: block;
  font-family: "Be Vietnam", sans-serif;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 30px;
  color: ${theme.colors.fontDescription};
`

const SkillsWrapper = styled.div`
  margin-top: 15px;
  max-width: 600px;
  flex-direction: column;
`

const Picture = styled.img`
  max-width: 511px;
  max-height: 414px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 280px;
    height: 230px;
  }
`

// Skill Styled

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
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

const SkillTitle = styled.h3`
  font-family: "Be Vietnam", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: ${theme.colors.fontTextDark};
  margin: 25px 0 5px;
`

export const S = {
    Skills,
    Description,
    SkillsWrapper,
    Picture,
    Skill,
    IconWrapper,
    SkillTitle,
}