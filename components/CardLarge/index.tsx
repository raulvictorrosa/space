import React, { useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { CardContainer, CardImage } from './styled';

type CardLargeType = {
  id: string;
  title: string;
  abstract: string;
  image: {
    id: number;
    path: string;
  };
};

type CardLargeFC = React.FC<{
  className?: string;
  data: CardLargeType[];
}>;

const CardLarge: CardLargeFC = ({ className, data }) => {
  const initialSize = { width: 368, height: 368 };
  const [imageSize, setImageSize] = useState<{
    width: number | string;
    height: number | string;
  }>(initialSize);
  const { width, ref } = useResizeDetector<HTMLDivElement>({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000
  });

  useEffect(() => {
    const size =
      Number(width) > 767 ? initialSize : { width: 272, height: 272 };
    setImageSize(size);
  }, [width]);

  return (
    <div ref={ref}>
      <CardContainer className={`pl-md-0 pr-md-0 ${className}`}>
        {data.map((item: CardLargeType) => (
          <Row key={item.id}>
            <Col>
              <Card>
                <Row key={item.id} className="no-gutters">
                  <Col
                    md={4}
                    className="d-flex justify-content-center d-md-block"
                  >
                    <CardImage
                      src={item.image.path}
                      alt={item.title}
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle tag="h4">{item.title}</CardTitle>
                      {item.abstract.split('\n').map((p, i) => (
                        <CardText key={i}>{p}</CardText>
                      ))}
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}
      </CardContainer>
    </div>
  );
};

export default CardLarge;
