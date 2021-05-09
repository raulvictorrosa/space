import { Container } from 'reactstrap';
import styled from 'styled-components';

export const CardContainer = styled(Container)`
  .card {
    background-color: transparent;
    border: 0px;

    &,
    img {
      border-radius: 8px;
    }
    &-body {
      padding: 0.75rem;
      padding-top: 3px;
    }
    &-title {
      text-transform: uppercase;
      color: #4a90e2;
      font-weight: normal;
      letter-spacing: 1.2px;
      line-height: 39px;
      margin-bottom: 17px;
    }
    &-text {
      color: #3e4d60;
      line-height: 32px;
      margin-right: -4px;
    }
  }
`;
