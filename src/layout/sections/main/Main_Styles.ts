import styled from 'styled-components';
import {theme} from '../../../styled/Theme';
import {font} from '../../../styled/Common';

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  padding-top: 160px;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.fontGreeting};

    position: absolute;
    top: -24px;
    left: 24px;

    z-index: -1;

    @media ${theme.media.mobile} {
      width: 300px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 300px;
    height: 370px;
  }
`

const InfoWrapper = styled.div`
  text-align: center;
  max-width: 710px;
  margin-top: 15px;
`

const MainTitle = styled.h1`
  ${font({weight: 600, Fmax: 48, Fmin: 28})};
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${theme.colors.fontGreeting};
  margin: 10px 0;
`

const Description = styled.h2`
  ${font({weight: 500, Fmax: 18, Fmin: 16})};
  text-align: center;
  padding: 15px 25px 15px 0;
  letter-spacing: 0.01em;
  line-height: 2em;
  margin-bottom: 20px;
  color: ${theme.colors.fontDescription};
`

const Name = styled.h2`
  ${font({family: '\'Be Vietnam Pro\', \'sans-serif\'', weight: 600, Fmax: 32, Fmin: 22})};
  color: ${theme.colors.fontGreeting};
  margin-top: 18px;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 3px;
      background-color: ${theme.colors.fontGreeting};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

export const S = {
    StyledMain,
    PhotoWrapper,
    Photo,
    InfoWrapper,
    MainTitle,
    Description,
    Name,
}