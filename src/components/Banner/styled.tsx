import { Container } from 'reactstrap';
import styled from 'styled-components';

type BannerImage = {
  src: string;
  width: string;
  height: string;
};

const fontColor = '#fff';

export const BannerContainer = styled.div`
  width: 100%;
  height: 447px;
  @media (min-width: 768px) {
    height: 662px;
  }

  .trendingTrack {
    position: relative;
    top: -179px;
    @media (min-width: 1200px) {
      top: -142px;
    }
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
  height: 447px;

  @media (min-width: 768px) {
    height: 662px;
  }
`;

export const BannerCaption = styled(Container)`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
  padding-left: 24px;

  @media (min-width: 768px) {
    margin-left: 2px;
    top: 195px;
  }

  h1,
  p,
  button {
    color: ${fontColor};
  }

  h1 {
    font-size: 48px;
    font-weight: normal;
    line-height: 67px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 118px;
      letter-spacing: 2px;
      margin-bottom: 31px;
    }
  }

  p {
    font-size: 18px;
    letter-spacing: 0.305085px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      margin-bottom: 53px;
    }
  }
`;

export const BannerBtnStyle = styled.div`
  display: inline-flex;
  transition: 0.25s;
  transition-timing-function: cubic-bezier;

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
