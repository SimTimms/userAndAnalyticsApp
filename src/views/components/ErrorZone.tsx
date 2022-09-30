import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';
const StyledDiv = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  padding: theme.spacing(2),
  marginTop: 10,
  borderRadius: 2,
  width: '100%',
  background: theme.palette.warning.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  color: `${theme.palette.light.main} `,
  '&:hover': {
    color: `${theme.palette.dark.main} `,
  },
}));

export default function ErrorZone(props: {
  children: any;
  [propName: string]: any;
}) {
  const { children, ...propName } = props;
  return (
    <StyledDiv {...propName}>
      <ErrorIcon />
      <Typography style={{ marginBottom: 10 }} variant="body2">
        That didn't work
      </Typography>
      <Typography variant="body2">{children}</Typography>
    </StyledDiv>
  );
}
