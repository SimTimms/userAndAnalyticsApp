import { Typography } from '@mui/material';
import { BreadcrumbsStyle } from './styles';
import { useNavigate } from 'react-router-dom';

export function Breadcrumbs(props: { crumbs?: string[] }) {
  const { crumbs } = props;
  let navigate = useNavigate();
  if (!crumbs) return null;
  return (
    <BreadcrumbsStyle>
      {crumbs &&
        ['/', ...crumbs.slice(-3)].map((crumb, index) => (
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => navigate(crumb)}
            key={`brcrmb_${index}`}
          >
            <Typography
              variant="body2"
              style={{
                color: 'rgba(255,255,255,0.5)',
                marginLeft: 2,
                marginRight: 2,
              }}
            >{` ${index > 0 ? ' - ' : ''}`}</Typography>
            <Typography
              variant="body2"
              style={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'underline',
              }}
            >{`${index === 0 ? 'Home' : crumb.replace('/', '')} `}</Typography>
          </div>
        ))}
    </BreadcrumbsStyle>
  );
}
