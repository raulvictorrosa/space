import { Container } from 'reactstrap';
import styled from 'styled-components';

type BannerImage = {
  src: string;
  width: string;
  height: string;
};

const bannerHeight = 662;
const fontColor = '#fff';

export const BannerContainer = styled.div`
  position: absolute;
  height: ${bannerHeight}px;
  top: 0;
  width: 100%;

  .trendingTrack {
    position: relative;
    top: -142px;
  }
`;

export const BannerImage = styled.div`
  background-image: url(${({ src }: BannerImage) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: scaleX(-1);
  filter: brightness(0.5);
  width: ${({ width }: BannerImage) => width};
  height: ${bannerHeight}px;
  z-index: -1;
  position: relative;
`;

export const BannerCaption = styled(Container)`
  position: absolute;
  top: 195px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
  margin-left: 2px;

  h1,
  p,
  button {
    color: ${fontColor};
  }

  h1 {
    font-size: 118px;
    font-weight: normal;
    line-height: 67px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    margin-top: 31px;
    font-size: 18px;
    letter-spacing: 0.305085px;
  }
`;

export const BannerBtnStyle = styled.div`
  display: inline-flex;
  transition: 0.25s;
  transition-timing-function: cubic-bezier;
  margin-top: 37px;

  &:hover,
  &:focus {
    padding-left: 9px;
    padding-bottom: 6px;
  }

  button {
    font-weight: 600;
    font-size: 17.6px;
    line-height: 26px;
    font-size: 17.6px;
    padding: 0.675rem 2.55rem;
    letter-spacing: 0.2px;
  }
`;
