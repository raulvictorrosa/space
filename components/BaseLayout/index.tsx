import { LayoutContainer } from './styled';

type BaseLayoutType = React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
>;

const BaseLayout: BaseLayoutType = ({ children, className }) => (
  <LayoutContainer className={`${className ? className : ''}`}>
    {children}
  </LayoutContainer>
);

export default BaseLayout;
