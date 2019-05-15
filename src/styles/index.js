export const COLOR_PRIMARY = '#e141f2';
export const COLOR_PRIMARY_2 = '#ff00ff';
export const COLOR_WHITE = '#ffffff';

import {
  createMuiTheme
} from '@material-ui/core/styles';
import button from './button';

export const VERTICAL_ALIGN = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)'
};

export const ANIMATION_SLIDE_HEIGHT = {
  slideHeight: {
    animationName: 'slide',
    animationDuration: '1.5s',
    overflowY: 'hidden',
    borderRadius: '10px',
  },
  '@keyframes slide': {
    from: {
      maxHeight: 0,
      maxWidth: '90vw'
    },
    to: {
      maxHeight: '200vh',
      maxWidth: '100vw'
    },
  },
};

export const theme = createMuiTheme({
  overrides: {
    MuiButton: button,
  },
  palette: {
    primary: {
      light: '#54BAED',
      main: '#54BAED',
      dark: '#54BAED',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000',
    },
    grey: {
      border: '#c4c4c4',
      navBackground: '#e5e5e5',
      textDark: '#4f4f4f',
    },
    background: {
      default: '#f2f2f2',
      error: '#d24135',
      errorDark: '#9a000d',
      info: '#04a9f5',
      infoDark: '#007ac2',
      warning1: '#ffcd40',
      warning1Dark: '#c89c00',
      warning2: '#e27030',
      warning2Dark : '#c87130'
    },
  },
});