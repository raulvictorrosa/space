import { Wrapper } from 'components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { PageWrapper } from './styled';

export type BasePageType = React.FC<
  React.PropsWithChildren<{
    className?: string;
    indexPage?: boolean;
    title?: string;
    metaTitle?: string;
    metaDescription?: string;
    canonicalPath?: any;
  }>
>;

export type PageHeaderType = React.FC<{
  className?: string;
  title?: string;
  contained?: boolean;
}>;

export const PageHeader: PageHeaderType = ({ className, title, contained }) => (
  <Wrapper contained={contained}>
    <div className={`page-header${className ? ` ${className}` : ''}`}>
      <h1 className="page-header-title">{title}</h1>
    </div>
  </Wrapper>
);

const BasePage: BasePageType = (props) => {
  const router = useRouter();
  const {
    children,
    className,
    indexPage,
    title,
    metaTitle = 'Space',
    metaDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie elit at lacus.',
    canonicalPath
  } = props;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={metaTitle} key="title" />
        <meta name="description" content={metaDescription} key="description" />
        <meta property="og:title" content={metaTitle} key="og:title" />
        <meta
          property="og:description"
          content={metaDescription}
          key="og:description"
        />
        <meta property="og:locale" content="en_US" key="og:locale" />
        <meta
          property="og:url"
          content={`${process.env.BASE_URL}${router.asPath}`}
          key="og:url"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:image"
          content={`${process.env.BASE_URL}/images/image1.jpg`}
          key="og:image"
        />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
        <link rel="icon" type="image/x-ixon" href="/images/favicon.ico" />
      </Head>
      <PageWrapper className={className ? className : ''}>
        {!indexPage && <PageHeader contained title={title} />}
        {children}
      </PageWrapper>
    </>
  );
};

export default BasePage;
