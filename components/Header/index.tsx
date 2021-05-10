import Link from 'next/link';
import React, { useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { Col, Collapse, Nav, Row } from 'reactstrap';
import ActiveLink from '../../components/ActiveLink';
import { ElegIcon } from '../../components/ElegantIcon';
import {
  Container,
  HeaderBG,
  ImageLogo,
  MenuIcon,
  Navbar,
  NavItem
} from './styled';

type BsNavLinkType = React.FC<{
  href: string;
  title: string;
  className?: string;
}>;

type BsNavBrandType = React.FC<{
  className?: string;
  title?: string;
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}>;

export type HeaderType = React.FC<{
  refPosition?: React.RefObject<HTMLDivElement>;
  className?: string;
  contained?: boolean;
  transparent?: boolean;
  navBgColor?: string;
  type?: string;
  stickyTop?: boolean;
}>;

type WrapperType = React.FC<
  React.PropsWithChildren<{
    contained?: boolean;
  }>
>;

const BsNavLink: BsNavLinkType = ({ href, title, className = '' }) => (
  <ActiveLink activeClassName="active" href={href}>
    <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
  </ActiveLink>
);

const BsNavBrand: BsNavBrandType = ({
  title,
  src,
  alt,
  width = 'auto',
  height = 'auto'
}) => (
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">
      {src && width && height ? (
        <ImageLogo src={src} alt={alt} width={width} height={height} />
      ) : (
        title
      )}
    </a>
  </Link>
);

export const Wrapper: WrapperType = ({ children, contained = false }) =>
  !contained ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Container className="pl-md-0 pr-md-0">
      <Row>
        <Col className="pl-0 pr-0">{children}</Col>
      </Row>
    </Container>
  );

const Header: HeaderType = (props) => {
  const {
    className = '',
    contained,
    navBgColor,
    transparent,
    type,
    stickyTop = false
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width, height, ref } = useResizeDetector();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderBG
      ref={ref}
      className={
        `${className ? ` ${className}` : ''}` +
        `${stickyTop ? ` sticky-top` : ''}` +
        `${transparent ? ` bg-transparent` : ''}` +
        `${type ? ` type-${type}` : ''}` +
        `${Number(width) < 768 && isOpen ? ` is-open` : ` is-close`}`
      }
      style={navBgColor && !transparent ? { backgroundColor: navBgColor } : {}}
    >
      <Wrapper contained={contained}>
        <Navbar expand="md">
          <BsNavBrand
            className="mr-auto"
            src="/images/logo.svg"
            alt="Picture of the author"
            width="64"
            height="64"
          />
          {/* <NavbarToggler onClick={toggle} /> */}
          <MenuIcon
            aria-label="Toggle navigation"
            type="button"
            className="navbar-toggler"
            onClick={toggle}
          >
            {!isOpen ? (
              <ElegIcon aria-hidden="true" dataIcon="&#x61;" />
            ) : (
              <ElegIcon aria-hidden="true" dataIcon="&#x4d;" />
            )}
          </MenuIcon>

          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar>
              <NavItem>
                <BsNavLink href="/blog" title="Blog" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/popular" title="Popular" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/archive" title="Archive" />
              </NavItem>
              <NavItem>
                <BsNavLink href="/about" title="About" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Wrapper>
    </HeaderBG>
  );
};

export default Header;
