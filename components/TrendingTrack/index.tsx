import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { TrackBox, TrackWrapper } from './styled';

type TrendType = {
  id: string;
  title: string;
};

type TrendingTrackType = {
  className?: string;
  title: string;
  data: TrendType[];
};

type SplitTitle = React.PropsWithChildren<{
  children: string;
}>;

const SplitTitle: React.FC<SplitTitle> = ({ children }) => {
  const splatted = children.split(' ');

  return (
    <h4>
      {splatted.map((item, i) => {
        if (splatted.length == i + 1) {
          return <span className="text-primary">{item}</span>;
        } else if (splatted.length == 1) {
          return item;
        } else {
          return item + ' ';
        }
      })}
    </h4>
  );
};

const TrendingTrack: React.FC<TrendingTrackType> = ({ title, data }) => {
  return (
    <TrackWrapper className="trendingTrack">
      <Container className="pl-0 pr-0">
        <Row sm="4">
          <Col>
            <TrackBox>
              <div className="wrapText">
                <SplitTitle>{title}</SplitTitle>
              </div>
            </TrackBox>
          </Col>
          {data.map((trend: TrendType) => (
            <Col>
              <TrackBox>
                <p>{trend.title}</p>
              </TrackBox>
            </Col>
          ))}
        </Row>
      </Container>
    </TrackWrapper>
  );
};

export default TrendingTrack;
