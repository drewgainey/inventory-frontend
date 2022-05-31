import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const InventorySummary = ({ data }) => {
  
  return (
    <TableContainer component={Paper}>
      <Toolbar sx={{ backgroundColor: "primary.main" }}>
        <Typography variant="h6" style={{ color: "#f3e5f5" }}>
          Current Inventory By Location
        </Typography>
        <Tooltip title="expand">
          <IconButton>
            <AspectRatioOutlinedIcon sx={{ color: "#f3e5f5" }} />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Table sx={{ minWidth: 650 }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">NYC Assigned</TableCell>
            <TableCell align="center">NYC Storage</TableCell>
            <TableCell align="center">Ohio Assigned</TableCell>
            <TableCell align="center">Ohio Storage</TableCell>
            <TableCell aligh="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.inventorySummary.map((type) => {
            return (
              <TableRow>
                <TableCell>{type.itemType}</TableCell>
                <TableCell align="center">{type.nycAssigned}</TableCell>
                <TableCell align="center">{type.nycStorage}</TableCell>
                <TableCell align="center">{type.ohioAssigned}</TableCell>
                <TableCell align="center">{type.ohioStorage}</TableCell>
                <TableCell aligh="center">{type.total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventorySummary;
