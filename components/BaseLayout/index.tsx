import Banner from 'components/Banner';
import Header from 'components/Header';
import TrendingTrack from 'components/TrendingTrack';
import { captionTest, newsTest } from 'fakeData';
import React from 'react';
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
      <Header className="bg-primary d-none d-md-block" contained stickyTop />
      {children}
    </LayoutContainer>
  );
};

export default BaseLayout;
