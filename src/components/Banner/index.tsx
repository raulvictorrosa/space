import { motion } from 'framer-motion';
import React from 'react';
import { Col, Row } from 'reactstrap';
import {
  BannerBtnStyle,
  BannerCaption,
  BannerContainer,
  BannerImage
} from './styled';

export type BannerType = React.FC<
  React.PropsWithChildren<{
    className?: string;
    src: string;
    width?: string;
    height?: string;
    title: {
      primary: string;
      secondary?: string;
    };
    caption: string;
    // href: string;
  }>
>;

type BannerButton = React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
>;

const BannerButton: BannerButton = ({ className, children }) => {
  return (
    <BannerBtnStyle className={className}>
      <motion.button
        className="btn btn-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </BannerBtnStyle>
  );
};

const Banner: BannerType = (props) => {
  const {
    children,
    className = '',
    src,
    width = '100%',
    height = 'auto',
    title,
    caption
  } = props;

  return (
    <BannerContainer className={className}>
      <BannerImage src={src} width={width} height={height} />
      <BannerCaption className="pl-md-0 pr-md-0">
        <Row>
          <Col sm={6}>
            <h1>
              {title.primary}
              {title.secondary && (
                <span className="text-primary">{title.secondary}</span>
              )}
            </h1>
            <p>{caption}</p>
            <BannerButton>click</BannerButton>
          </Col>
        </Row>
      </BannerCaption>
      {children}
    </BannerContainer>
  );
};

export default Banner;
