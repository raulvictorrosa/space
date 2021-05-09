import Image from 'next/image';
import {
  Container as ContainerStyled,
  Navbar as NavbarStyled,
  NavItem as NavItemStyled
} from 'reactstrap';
import styled from 'styled-components';

export const HeaderBG = styled.div`
  @media (max-width: 767px) {
    &.is-open {
      min-height: 560px;
      background-color: #4a90e2 !important;
    }
  }

  &.type-1 {
    position: relative;
    top: 136px;
    margin-top: -136px;
    z-index: 1;

    .navbar {
      margin-top: 11px;
      margin-left: 8px;
      @media (min-width: 768px) {
        align-items: flex-start;
        margin-top: 38px;
        margin-left: 0;
      }
    }

    .navbar-nav {
      text-align: center;
      @media (min-width: 768px) {
        text-align: left;
      }
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

export const MenuIcon = styled.button`
  border: 0;
  padding: 0;
  position: relative;
  right: 15px;
`;
