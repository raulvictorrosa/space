import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
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

type CardItemType = React.FC<
  React.PropsWithChildren<{
    item: ItemType;
  }>
>;

export type CarouselSliderType = React.FC<{
  className?: string;
  data: ItemType[];
  isPlaying: boolean;
  infinite?: boolean;
}>;

const CardItem: CardItemType = ({ item: { title, description, image } }) => (
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
  const [visibleSlides, setVisibleSlides] = useState<number>(1);
  const { width, ref } = useResizeDetector<HTMLDivElement>({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000
  });

  useEffect(() => {
    let slides = 1;
    if (Number(width) >= 768) {
      slides = 3;
    }
    if (Number(width) >= 576 && Number(width) <= 767) {
      slides = 2;
    }
    setVisibleSlides(slides);
  }, [width]);

  return (
    <div ref={ref}>
      <CarouselContainer className={`pl-md-0 pr-md-0 ${className}`}>
        <Row>
          <Col>
            <CarouselProvider
              visibleSlides={visibleSlides}
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
              <ButtonBack
                className={`carousel-button d-none${
                  Number(width) >= 1300 ? ' d-xl-block' : ''
                }`}
              >
                <CarouselIcon aria-hidden="true" data-icon="&#x34;" />
              </ButtonBack>
              <ButtonNext
                className={`carousel-button d-none${
                  Number(width) >= 1300 ? ' d-xl-block' : ''
                }`}
              >
                <CarouselIcon aria-hidden="true" data-icon="&#x35;" />
              </ButtonNext>

              <DotGroup className="d-xl-none" />
            </CarouselProvider>
          </Col>
        </Row>
      </CarouselContainer>
    </div>
  );
};

export default CarouselSlider;
