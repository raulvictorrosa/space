import Image from 'next/image';
import {
  Container as ContainerStyled,
  Navbar as NavbarStyled,
  NavItem as NavItemStyled
} from 'reactstrap';
import styled from 'styled-components';

export const HeaderBG = styled.div`
  &.type-1 {
    position: relative;
    top: 135px;
    margin-top: -135px;

    .navbar {
      align-items: flex-start;
      margin-top: 38px;
    }
  }
`;

export const Container = styled(ContainerStyled)``;

export const Navbar = styled(NavbarStyled)`
  align-items: center;

  &.space-default {
  }

  @media (min-width: 768px) {
    &.navbar-expand-md .navbar-nav {
      .nav-link {
        padding-right: 1.25rem;
        padding-left: 1.25rem;
      }

      .nav-item:last-child {
        .nav-link {
          padding-right: 0;
        }
      }
    }
  }
`;

export const ImageLogo = styled(Image)``;

export const NavItem = styled(NavItemStyled)`
  .nav-link {
    color: #fff;
    font-size: 14px;
    padding: 1.1rem 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.2px;
  }
`;
