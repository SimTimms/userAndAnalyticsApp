import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { prototypeBorder, prototypeBoxShadow } from '../../../theme';

const PageWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CentralPanel = styled('div')(() => ({
  border: prototypeBorder,
  boxShadow: prototypeBoxShadow,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export function StyledPageWrapper(props: { children?: any }) {
  return <PageWrapper>{props.children}</PageWrapper>;
}

export function StyledCentralPanel(props: {
  children?: any;
  title?: string;
  description?: string;
}) {
  const { title, description } = props;
  return (
    <CentralPanel>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{description}</Typography>
      {props.children}
    </CentralPanel>
  );
}
