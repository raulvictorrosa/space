import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { TrackBox, TrackWrapper } from './styled';

type TrendType = {
  id: string;
  title: string;
};

export type TrendingTrackType = React.FC<{
  className?: string;
  title: string;
  data: TrendType[];
}>;

type SplitTitle = React.FC<
  React.PropsWithChildren<{
    children: string;
  }>
>;

const SplitTitle: SplitTitle = ({ children }) => {
  const splatted: string[] = children ? children.split(' ') : [''];

  return (
    <h4>
      {splatted.map((item, i) => {
        if (splatted.length == i + 1) {
          return (
            <span key={item.toLowerCase() + '-' + i} className="text-primary">
              {item}
            </span>
          );
        } else if (splatted.length == 1) {
          return <span key={item.toLowerCase() + '-' + i}>{item}</span>;
        } else {
          return <span key={item.toLowerCase() + '-' + i}>{item + ' '}</span>;
        }
      })}
    </h4>
  );
};

const TrendingTrack: TrendingTrackType = ({ title, data, className }) => (
  <TrackWrapper className={`trendingTrack${className ? ` ${className}` : ''}`}>
    <Container className="pl-md-0 pr-md-0">
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

export default TrendingTrack;
