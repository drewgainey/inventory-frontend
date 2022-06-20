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
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Download } from "@mui/icons-material";

const InventorySummary = ({ computers, monitors, headsets, keyboards, mouses, handleExport }) => {
  
  const categories = [computers, monitors, headsets, keyboards, mouses];

  return (
    <TableContainer component={Paper}>
      <Toolbar sx={{ backgroundColor: "primary.main" }}>
        <Typography variant="h6" style={{ color: "#f3e5f5" }}>
          Current Inventory
        </Typography>
        <Tooltip title="Export To Excel">
          <IconButton onClick={handleExport}>
            <Download sx={{ color: "#f3e5f5" }}></Download>
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Table sx={{ minWidth: 650 }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">NYC Assigned</TableCell>
            <TableCell align="center">NYC Available</TableCell>
            <TableCell align="center">Ohio Assigned</TableCell>
            <TableCell align="center">Ohio Available</TableCell>
            <TableCell aligh="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories && categories.map((category) => {
            return (
              <TableRow>
                <TableCell>{category.type}</TableCell>
                <TableCell align="center">{category.nycAssigned}</TableCell>
                <TableCell align="center">{category.nycAvailable}</TableCell>
                <TableCell align="center">{category.ohioAssigned}</TableCell>
                <TableCell align="center">{category.ohioAvailable}</TableCell>
                <TableCell aligh="center">{category.total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventorySummary;
