import { NavBarStyle } from './styles';
import { Breadcrumbs } from './Breadcrumbs';
import { Typography } from '@mui/material';
export function StyledNavBar(props: {
  children?: any;
  breadcrumbs?: string[];
  title?: string;
}) {
  const { children, breadcrumbs, title } = props;

  return (
    <NavBarStyle>
      <Breadcrumbs crumbs={breadcrumbs} />
      {children}
      <Typography variant="body2" color="#fff">
        {title}
      </Typography>
    </NavBarStyle>
  );
}
