import { Container } from 'reactstrap';
import styled from 'styled-components';

export const FooterContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 66px;
  @media (max-width: 767px) {
    padding-top: 63px;
  }

  h6 {
    color: #908c8c;
    border-top: 1px solid #f1f1f2;
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    opacity: 0.55;
    padding-top: 8px;
    padding-left: 6px;
    @media (max-width: 767px) {
      text-align: center;
      padding-left: 60px;
      padding-right: 60px;
    }
  }
`;
