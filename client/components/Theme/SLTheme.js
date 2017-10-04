import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';

const SLMainGreen = {
  '50': '#e4f4eb',
  '100': '#bce3cd',
  '200': '#8fd0ac',
  '300': '#62bd8a',
  '400': '#41af71',
  '500': '#1fa158',
  '600': '#1b9950',
  '700': '#178f47',
  '800': '#12853d',
  '900': '#0a742d',
  'A100': '#a5ffbe',
  'A200': '#72ff99',
  'A400': '#3fff74',
  'A700': '#25ff61',
  'contrastDefaultColor': 'light',
};

export const SLSecondaryGreen = {
  '50': '#e7ede7',
  '100': '#c4d1c4',
  '200': '#9db39d',
  '300': '#759475',
  '400': '#587d58',
  '500': '#3a663a',
  '600': '#345e34',
  '700': '#2c532c',
  '800': '#254925',
  '900': '#183818',
  'A100': '#7aff7a',
  'A200': '#47ff47',
  'A400': '#14ff14',
  'A700': '#00f900',
  'contrastDefaultColor': 'light',
};

const SLTheme = createMuiTheme({
  palette: {
    primary: SLMainGreen,
    secondary: SLSecondaryGreen
  },
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
});

function OverridesTheme() {
  return (
    <MuiThemeProvider theme={SLTheme}>
      <Button>{'Overrides'}</Button>
    </MuiThemeProvider>
  );
}

export default SLTheme;