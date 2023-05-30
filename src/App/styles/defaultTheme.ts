import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1e1e1e'
    },
    secondary: {
      main: '#7c7c7c'
    },
    text: {
      primary: '#cbcbcb',
      secondary: '#1e1e1e',
    },
    background: {
      paper: '#1e1e1e'
    },
    action: {
      active: '#F98C3E'
    }
  }
});