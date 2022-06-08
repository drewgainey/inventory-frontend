import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const MenuDrawer = ({ menuOpen, closeMenu }) => {

  return (
    <Drawer variant="persistent" anchor="left" open={menuOpen}>
      <List>
        <ListItemButton onClick={closeMenu}>
          <ListItemText primary="Close Menu" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/new">
          <ListItemText primary="Add Inventory" />
        </ListItemButton>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Inventory Listing" />
        </ListItemButton>
        <ListItemButton component={Link} to="/wfh">
          <ListItemText primary="Work From Home Checkout" />
        </ListItemButton>
        <ListItemButton component={Link} to="/wfhreport">
          <ListItemText primary="Work From Home Report" />
        </ListItemButton>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Employee Admin" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;