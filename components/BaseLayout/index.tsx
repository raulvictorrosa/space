import Banner from 'components/Banner';
import Header from 'components/Header';
import TrendingTrack from 'components/TrendingTrack';
import { captionTest, newsTest } from 'fakeData';
import React, { useState } from 'react';
// import useWindowDimensions from 'hook/useWindowDimensions';
import { LayoutContainer } from './styled';

export type BaseLayoutType = React.FC<
  React.PropsWithChildren<{
    className?: string;
    indexPage?: boolean;
  }>
>;

const getWindowDimensions = (): any => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const BaseLayout: BaseLayoutType = ({ children, className, indexPage }) => {
  const [headerTop, setHeaderTop] = useState(0); // Height from header
  const [fixScroll, setFixScroll] = useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    function handleScroll() {
      if (headerRef.current !== null) {
        const { top } = headerRef.current.getBoundingClientRect();
        if (top != 0) {
          setHeaderTop(top);
          // top >= 0 ? setFixScroll(false) : setFixScroll(true);
          console.log(headerTop);
        }
      }
    }

    if (headerTop > 0) {
      setFixScroll(false);
    } else {
      setFixScroll(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LayoutContainer className={`${className ? className : ''}`}>
      {indexPage && (
        <>
          <Header transparent contained type="1" />
          <Banner
            src="/images/image1.jpg"
            title={{ primary: 'Space', secondary: '.' }}
            caption={captionTest}
          >
            <TrendingTrack
              className="d-none d-lg-block"
              title="Trending Today"
              data={newsTest}
            />
          </Banner>
        </>
      )}
      <Header
        refPosition={headerRef}
        className="bg-primary d-none d-md-block"
        contained
        fixScroll={fixScroll}
      />
      {children}
    </LayoutContainer>
  );
};

export default BaseLayout;
