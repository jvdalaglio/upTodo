import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primaryColor: Palette['primary'];
    secondaryColor: Palette['secondary'];
  }

  interface PaletteOptions {
    primaryColor?: PaletteOptions['primary'];
    secondaryColor?: PaletteOptions['secondary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryColor: true;
    secondaryColor: true;
  }
}

const theme = createTheme({
  palette: {
    primaryColor: {
      main: '#8875FF',
    },
    secondaryColor: {
      main: '#D9D9D9',
    },
  }
})

export default theme;