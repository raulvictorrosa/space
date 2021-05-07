import styled from 'styled-components';

export const TrackWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 142px;
  padding-top: 27px;

  .col:last-child {
    div {
      border-right: 0;
    }
  }

  h4,
  p {
    color: #fff;
  }

  h4 {
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
  padding-bottom: 2px;
  padding-right: 28px;

  p {
    line-height: 32px;
    margin-top: -3px;
    margin-left: 2px;
  }
`;
