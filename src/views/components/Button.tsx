import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { prototypeBorder, prototypeBoxShadow } from '../../theme';

const Button = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isDanger',
})<{ isDanger?: boolean }>(({ theme, isDanger }) => ({
  border: prototypeBorder,
  padding: '3px 10px 3px 10px',
  marginTop: 10,
  borderRadius: 2,
  width: '100%',
  boxShadow: prototypeBoxShadow,
  background: theme.palette.background.default,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  color: `${theme.palette.light.main} `,
  '&:hover': {
    background: isDanger
      ? theme.palette.error.main
      : theme.palette.primary.main,
    color: `${theme.palette.dark.main} `,
  },
}));

export default function StyledButton(props: {
  title: string;
  onClick?: () => void;
  isDanger?: boolean;
  [propName: string]: any;
}) {
  const { title, onClick, isDanger, ...propName } = props;
  return (
    <Button
      onClick={() => (onClick ? onClick() : null)}
      {...propName}
      isDanger={isDanger || false}
    >
      <Typography variant="button">{title}</Typography>
    </Button>
  );
}
