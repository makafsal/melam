import React from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import { Player } from "./components/player/Player";
import { SideBar } from "./components/sideBar/SideBar";
import { Box, Container, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./styles/defaultTheme";

function App() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
