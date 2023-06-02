import "./App.css";
import { SideBar } from "./components/sideBar/SideBar";
import { Home } from "./components/home/Home";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./styles/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <SideBar />
      </Box>
      <Home />
    </ThemeProvider>
  );
}

export default App;
