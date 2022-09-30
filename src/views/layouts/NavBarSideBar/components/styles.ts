import { styled } from '@mui/material/styles';
import { prototypeBorder, prototypeBoxShadow, theme } from 'theme';

const navBarHeight = 40;
const sideBarWidth = '30%';

export const PageWrapperStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'space-between',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const NavBarStyle = styled('div')(() => ({
  border: prototypeBorder,
  boxShadow: prototypeBoxShadow,
  padding: 5,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: navBarHeight,
  boxSizing: 'border-box',
}));

export const SideBarStyle = styled('div')(() => ({
  border: prototypeBorder,
  boxShadow: prototypeBoxShadow,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: sideBarWidth,
  height: '100%',
}));

export const SideBarButtonStyle = styled('button')(() => ({
  border: 'none',
  borderBottom: prototypeBorder,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  cursor: 'pointer',
  background: 'transparent',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

export const RowStyle = styled('div')(() => ({
  border: prototypeBorder,
  boxShadow: prototypeBoxShadow,
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100% - ${navBarHeight}px)`,
}));

export const ContentStyle = styled('div')(() => ({
  border: prototypeBorder,
  boxShadow: prototypeBoxShadow,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: `calc(100% - ${sideBarWidth})`,
  height: '100%',
  overflow: 'auto',
  boxSizing: 'border-box',
}));

export const BreadcrumbsStyle = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));
