import Image from 'next/image';
import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { CardContainer } from './styled';

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

const CardLarge: CardLargeFC = ({ className, data }) => (
  <CardContainer className={`pl-0 pr-0 ${className}`}>
    {data.map((item: CardLargeType) => (
      <Row key={item.id}>
        <Col>
          <Card>
            <Row key={item.id} className="no-gutters">
              <Col md={4}>
                <Image
                  src={item.image.path}
                  alt={item.title}
                  width="368"
                  height="368"
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
);

export default CardLarge;
