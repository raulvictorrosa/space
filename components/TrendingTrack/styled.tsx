import styled from 'styled-components';

export const TrackWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  /* height: 142px; */
  padding-block: 27px;
  /* @media (max-width: 1199px) {
    height: 170px;
  } */

  .col {
    &:last-child {
      div {
        border-right: 0;
      }
    }
  }

  h4,
  p {
    color: #fff;
  }

  h4 {
    display: table-caption;
    font-size: 20px;
    font-weight: normal;
    line-height: 30px;
    text-align: right;
  }
`;

export const TrackBox = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  border-right: 1px solid white;
  padding-right: 28px;
  max-height: 179px;
  @media (min-width: 1200px) {
    max-height: 88px;
  }

  h4,
  p {
    margin-bottom: 0;
  }
  h4 {
    position: relative;
    right: 4px;
    margin-top: 16px;
  }

  p {
    line-height: 32px;
    margin-top: -3px;
    margin-left: 2px;
  }
`;
