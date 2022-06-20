import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const QuickActions = ({handleDetailExport, addEmployeeToggle}) => {
  return (
    <>
      <Toolbar sx={{ backgroundColor: "primary.main" }}>
        <Typography variant="h6" style={{ color: "#f3e5f5" }}>
          Quick Actions
        </Typography>
      </Toolbar>
      <List>
      <ListItemButton component={Link} to="/new">
          <ListItemText primary="Add Inventory" />
        </ListItemButton>
      </List>
      <ListItemButton onClick={handleDetailExport}>
          <ListItemText primary="Download Current Inventory" />
        </ListItemButton>
      <List>
      <ListItemButton component={Link} to="/wfh">
          <ListItemText primary="Work From Home Checkout" />
        </ListItemButton>
        <ListItemButton onClick={addEmployeeToggle}>
          <ListItemText primary="Add Employee" />
        </ListItemButton>
      </List>
      <Divider />
    </>
  );
};

export default QuickActions;
