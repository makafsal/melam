import React from "react";
import logo from "../../../assets/logo_horizontal.svg";
import "./SideBar.css";
import AppBar from "@mui/material/AppBar";
import { Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box component="img" src={logo} width="150px" />
      </Toolbar>
    </AppBar>
    </>
  );
};
