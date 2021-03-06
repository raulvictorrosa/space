import React from 'react';
import { Col, Row } from 'reactstrap';
import { FooterContainer } from './styled';

export type FooterFC = React.FC<{
  className?: string;
}>;

const Footer: FooterFC = ({ className }) => (
  <FooterContainer
    className={`pl-md-0 pr-md-0${className ? ' ' + className : ''}`}
  >
    <Row>
      <Col>
        <h6>© 2016 Created by Joyjet Digital Space Agency</h6>
      </Col>
    </Row>
  </FooterContainer>
);

export default Footer;
