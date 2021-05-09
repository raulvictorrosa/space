import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { CarouselContainer, CarouselIcon } from './styled';

type ItemType = {
  id: string;
  title: string;
  description: string;
  image: {
    id: number;
    path: string;
  };
};

type CardItemType = React.PropsWithChildren<{ item: ItemType }>;

type CarouselSliderType = React.FC<{
  className?: string;
  data: ItemType[];
  isPlaying: boolean;
  infinite?: boolean;
}>;

const CardItem: React.FC<CardItemType> = ({
  item: { title, description, image }
}) => (
  <Card>
    <Image
      hasMasterSpinner
      isBgImage
      tag="div"
      className="card-img-top"
      src={image.path}
    />
    <CardBody>
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);

const CarouselSlider: CarouselSliderType = ({
  data,
  className,
  isPlaying,
  infinite = false
}) => {
  return (
    <CarouselContainer className={`pl-0 pr-0 ${className}`}>
      <Row>
        <Col>
          <CarouselProvider
            visibleSlides={3}
            totalSlides={data.length}
            naturalSlideWidth={368}
            naturalSlideHeight={462}
            hasMasterSpinner
            isPlaying={isPlaying}
            infinite={infinite}
          >
            <Slider>
              {data.map((item: ItemType, i: number) => (
                <Slide key={item.id} index={i}>
                  <CardItem item={item} />
                </Slide>
              ))}
            </Slider>
            <ButtonBack className="carousel-button">
              <CarouselIcon aria-hidden="true" data-icon="&#x34;" />
            </ButtonBack>
            <ButtonNext className="carousel-button">
              <CarouselIcon aria-hidden="true" data-icon="&#x35;" />
            </ButtonNext>
          </CarouselProvider>
        </Col>
      </Row>
    </CarouselContainer>
  );
};

export default CarouselSlider;
