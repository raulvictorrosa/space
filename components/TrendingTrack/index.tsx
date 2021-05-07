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

const TrendingTrack: React.FC<TrendingTrackType> = ({ title, data }) => {
  return (
    <TrackWrapper className="trendingTrack">
      <Container className="pl-0 pr-0">
        <Row sm="4">
          <Col>
            <TrackBox>
              <h4>{title}</h4>
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
