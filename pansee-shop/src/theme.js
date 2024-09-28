import { experimental_extendTheme as extendTheme } from '@mui/material/styles'; // `extendTheme` is a new API

const APP_BAR_HEIGHT = '70px';
const DRAWER_HEIGHT = 'calc(100vh - APP_BAR_HEIGHT)';

const theme = extendTheme({
  pansee: {
    navBar: {
      height: APP_BAR_HEIGHT,
    },
    drawer: {
      height: DRAWER_HEIGHT,
    },
  },
  colorSchemes: {
    light: {
      // palette for light mode
      palette: {
        primary: {
          main: '#ff9800',
        },
        secondary: {
          main: '#fff',
        },
      },
    },
    dark: {
      // palette for dark mode
      palette: {
        primary: {
          main: '#fff',
        },
        secondary: {
          main: '#000',
        },
      },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          textColor: 'primary.main',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
          '& fieldset': {
            borderWidth: '2px !important',
            color: theme.palette.primary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});

export default theme;
