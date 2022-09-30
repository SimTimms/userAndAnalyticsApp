import { StyledButton } from 'views/components';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export function VMINoticePage(props: { str: string; backTo?: string }) {
  let navigate = useNavigate();

  return (
    <div>
      <Typography variant="h2">{props.str}</Typography>
      {props.backTo && (
        <StyledButton
          title="Back"
          onClick={() => navigate(`${props.backTo}`)}
        />
      )}
    </div>
  );
}
