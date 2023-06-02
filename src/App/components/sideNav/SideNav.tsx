import { ChevronLeft, Home, Explore } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import "./SideNav.css";

export const SideNav = (props: { onClose: () => void }) => {
  return (
    <Box sx={{ width: "260px" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => props.onClose()}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <List subheader={<ListSubheader>Menu</ListSubheader>}>
        <ListItem className="active">
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Discover" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
