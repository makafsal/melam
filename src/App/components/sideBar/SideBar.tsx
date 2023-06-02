import React from "react";
import logo from "../../../assets/logo_horizontal.svg";
import "./SideBar.css";
import AppBar from "@mui/material/AppBar";
import { Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SideNav } from "../sideNav/SideNav";

export const SideBar = () => {
  const [open, setOpen] = React.useState(false);
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
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Box component="img" src={logo} width="150px" />
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => toggleDrawer()}
        PaperProps={{
          sx: {
            color: "#999999",
            opacity: "0.75",
          },
        }}
      >
        <SideNav onClose={() => toggleDrawer()} />
      </Drawer>
    </>
  );
};
