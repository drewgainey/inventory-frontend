import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./MenuDrawer";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IT Inventory
        </Typography>
        <Button color="inherit">Logout</Button>
        <MenuDrawer menuOpen={menuOpen} closeMenu={handleClick}></MenuDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
