import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme();
export const theme = createMuiTheme({
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: 'filled'
    },
    MuiContainer: {
      maxWidth: false
    },
    MuiButton:{
      variant: 'contained'
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        [defaultTheme.breakpoints.up('sm')]: {
          paddingTop: defaultTheme.spacing(3),
          paddingBottom: defaultTheme.spacing(3)
        },
        paddingTop: defaultTheme.spacing(2),
        paddingBottom: defaultTheme.spacing(2)
      }
    }
  }
});
