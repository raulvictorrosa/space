import ActiveLink from 'components/ActiveLink';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { Col, Collapse, Nav, NavbarToggler, Row } from 'reactstrap';
import { Container, ImageLogo, Navbar, NavItem } from './styled';

type BsNavLinkType = {
  href: string;
  title: string;
  className?: string;
};

type BsNavBrandType = {
  className?: string;
  title?: string;
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

type HeaderType = {
  className?: string;
  contained?: boolean;
  transparent?: boolean;
  navBgColor?: string;
};

type WrapperType = React.PropsWithChildren<{
  contained?: boolean;
}>;

const BsNavLink: React.FC<BsNavLinkType> = ({
  href,
  title,
  className = ''
}) => {
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </ActiveLink>
  );
};

const BsNavBrand: React.FC<BsNavBrandType> = ({
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

const Wrapper = ({ children, contained = false }: WrapperType) =>
  !contained ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Container className="pl-0 pr-0">
      <Row>
        <Col className="pl-0 pr-0">{children}</Col>
      </Row>
    </Container>
  );

const Header: React.FC<HeaderType> = (props) => {
  const { className = '', contained, navBgColor, transparent } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper contained={contained}>
      <ReactResizeDetector handleWidth>
        {({ width }) => (
          <Navbar
            className={
              `align-items-start${className && ` ${className}`}` +
              `${transparent && ` bg-transparent`}` +
              `${Number(width) < 768 && isOpen ? ` is-open` : ` is-close`}`
            }
            // dark
            expand="md"
            style={
              navBgColor && !transparent ? { backgroundColor: navBgColor } : {}
            }
          >
            <BsNavBrand
              className="mr-auto"
              src="/images/logo.svg"
              alt="Picture of the author"
              width="64"
              height="64"
            />
            <NavbarToggler onClick={toggle} />
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
        )}
      </ReactResizeDetector>
    </Wrapper>
  );
};

export default Header;
