import React from 'react';
import { PageWrapper } from './styled';

type BasePageType = React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
>;

const BasePage: BasePageType = ({ className, children }) => {
  return (
    <PageWrapper className={className ? className : ''}>{children}</PageWrapper>
  );
};

export default BasePage;
