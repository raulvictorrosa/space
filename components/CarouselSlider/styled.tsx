import { Container } from 'reactstrap';
import styled from 'styled-components';

const CardBorderRadius = '8px';

export const CarouselContainer = styled(Container)`
  @media (max-width: 1199px) {
    margin-top: 1px;
  }

  .carousel {
    @media (min-width: 1200px) {
      margin-left: -32px;
    }

    &__slider {
      &,
      &-tray {
        height: 388px;
        @media (min-width: 768px) {
          height: 407px;
        }
        @media (min-width: 1200px) {
          height: 462px;
        }
      }
    }
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
    &__dot {
      display: block;
      background-color: #9b9b9b;
      border: 0;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
      &--selected {
        background-color: #4a90e2;
      }

      &-group {
        display: flex;
        justify-content: center;
        margin-top: 24px;
      }
    }
  }

  .card {
    max-width: 272px;
    margin-left: 9px;
    border: 0;
    border-radius: ${CardBorderRadius};
    @media (max-width: 1199px) {
      left: 50%;
      transform: translate(-50%);
    }
    @media (min-width: 1200px) {
      max-width: 368px;
      margin-left: 32px;
    }

    &-body {
      padding: 22px 17px 14px;
    }

    &-img-top {
      border-top-left-radius: ${CardBorderRadius};
      border-top-right-radius: ${CardBorderRadius};
      height: 228px;
      @media (min-width: 1200px) {
        height: 309px;
      }
    }

    &-title {
      color: #3e4d60;
      font-size: 18px;
      line-height: 27px;
      padding-left: 1px;
      @media (max-width: 1199px) {
        margin-bottom: 6px;
      }
      @media (min-width: 1200px) {
        line-height: 30px;
      }
    }

    &-text {
      color: #8c94a8;
      @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 21px;
      }
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
