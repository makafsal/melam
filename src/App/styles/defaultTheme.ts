import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1e1f26'
    },
    secondary: {
      main: '#7c7c7c'
    },
    text: {
      primary: '#999999',
      secondary: '#1e1f26',
    },
    background: {
      paper: '#1e1f26'
    },
    action: {
      active: '#F98C3E'
    }
  }
});