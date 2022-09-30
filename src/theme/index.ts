import { createTheme, Theme } from '@mui/material/styles';

export const prototypeBorder = `1px dashed rgba(255,255,255,0.2)`;
export const prototypeBoxShadow =
  'inset 3px 3px 6px rgba(255,255,255,0.1),inset -3px -3px 6px rgba(0,0,0,0.3)';

//Required for theme modifications to work with TypeScript
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    dark: { main: string };
    light: { main: string; secondary: string };
  }

  interface PaletteOptions {
    dark?: { main: string };
    light?: { main: string; secondary: string };
  }
}

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#cefa05',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f03a5b',
    },
    background: {
      default: '#353a43',
    },
    dark: { main: '#222' },
    light: {
      main: 'rgba(255,255,255,0.8)',
      secondary: 'rgba(255,255,255,0.7)',
    },
    warning: { main: '#f03a5b' },
  },
  typography: {
    h1: { fontSize: '1.6rem', color: '#fafafa' },
    h2: { fontSize: '1.2rem', color: '#aaa ' },
    body1: { fontSize: '1rem', color: 'rgba(255,255,255,0.7)' },
    body2: { fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' },
    button: { fontSize: '0.8rem' },
  },
});
