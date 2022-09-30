import { Typography } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { prototypeBorder, prototypeBoxShadow } from '../../theme';

const Placeholder = styled('div')(({ theme }) => ({
  border: prototypeBorder,
  minWidth: '20%',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  textAlign: 'center',
  marginTop: 10,
  borderRadius: 2,
  boxShadow: prototypeBoxShadow,
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

export function StyledPlaceholder(props: {
  title: string;
  onClickEvent?: () => void;
}) {
  const { title } = props;
  return (
    <Placeholder
      onClick={() => (props.onClickEvent ? props.onClickEvent() : null)}
    >
      <Typography variant="body1">{title}</Typography>
    </Placeholder>
  );
}

const PlaceholderRound = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hueRotation',
})<{ hueRotation?: number }>(({ theme, hueRotation }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  filter: `hue-rotate(${hueRotation}deg)`,
  width: 70,
  height: 70,
  textAlign: 'center',
  borderRadius: '50%',
  boxShadow: `${prototypeBoxShadow}, 0 0 6px  rgba(255,255,255,0.3)`,
  marginTop: 30,
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

export function StyledPlaceholderRound(props: {
  title: string;
  value: number;
  unit?: string;
  hueRotation?: number;
  onClickEvent?: () => void;
}) {
  const { title, value, unit, hueRotation } = props;
  return (
    <PlaceholderRound
      onClick={() => (props.onClickEvent ? props.onClickEvent() : null)}
      hueRotation={hueRotation}
    >
      <Typography
        variant="body1"
        style={{
          position: 'absolute',
          width: '200%',
          top: -20,
          fontSize: '0.6rem',
          fontWeight: 300,
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          left: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1">{value}</Typography>
        {unit && (
          <Typography
            variant="body1"
            style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}
          >
            {unit}
          </Typography>
        )}
      </div>
    </PlaceholderRound>
  );
}
