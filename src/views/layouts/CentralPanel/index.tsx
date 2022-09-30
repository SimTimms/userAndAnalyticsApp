import { StyledPageWrapper, StyledCentralPanel } from './styledComponents';

export const CentralPanelLayout = (props: {
  children?: any;
  title?: string;
  description?: string;
}) => {
  const { children, title, description } = props;
  return (
    <StyledPageWrapper>
      <StyledCentralPanel title={title} description={description}>
        {children}
      </StyledCentralPanel>
    </StyledPageWrapper>
  );
};
