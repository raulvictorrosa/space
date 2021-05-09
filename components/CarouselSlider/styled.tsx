import { Container } from 'reactstrap';
import styled from 'styled-components';

const CardBorderRadius = '8px';

export const CarouselContainer = styled(Container)`
  .carousel {
    margin-left: -32px;

    &__image {
      background-position: center;
    }
    &-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: 0;
      background: none;
      padding: 0;
      margin-top: -22px;
    }
    &__back-button {
      left: -28px;
    }
    &__next-button {
      right: 0;
    }
  }

  .card {
    max-width: 368px;
    margin-left: 32px;
    border: 0;
    border-radius: ${CardBorderRadius};

    &-body {
      padding: 1.45rem 1.55rem;
    }
    &-img-top {
      border-top-left-radius: ${CardBorderRadius};
      border-top-right-radius: ${CardBorderRadius};
      height: 309px;
    }
    &-title {
      color: #3e4d60;
      line-height: 30px;
    }
    &-text {
      color: #8c94a8;
    }
  }
`;

export const CarouselIcon = styled.div`
  &[data-icon]:before {
    display: block;
    color: #4a90e2;
    font-size: 72px;
    line-height: 32px;
    width: 16.5px;
    height: 32px;
  }
`;
