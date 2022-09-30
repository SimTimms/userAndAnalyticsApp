import { styled } from '@mui/material/styles';
import { prototypeBorder } from '../../theme';
import { Typography } from '@mui/material';

const StyledDiv = styled(Typography)(({ theme }) => ({
  padding: '3px 10px 3px 10px',
  width: '90%',
  margin: 'auto',
  cursor: 'pointer',
  background: theme.palette.light.secondary,
  boxSizing: 'border-box',
  transition: 'all 500ms ease-in-out',
  color: '#222 !important',
  '&:hover': {
    transition: 'all 50ms ease-in-out',
    background: theme.palette.light.main,
  },
}));

export default function DropDownInput(props: {
  value: string;
  onClick: () => void;
  name: string;
}) {
  const { value, onClick, name } = props;
  return (
    <StyledDiv variant="body2" onClick={() => onClick()}>
      {name}
    </StyledDiv>
  );
}
