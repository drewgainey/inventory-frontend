import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip } from "@mui/material";
import { Download } from "@mui/icons-material";

const WFHListing = ({ handleExport, rows }) => {
  return (
    <TableContainer component={Paper}>
      <TableHead>
          <Typography variant="h6">Current Work From Home Inventory</Typography>
          <Tooltip title="Export To Excel">
          <IconButton onClick={handleExport}>
            <Download />
          </IconButton>
          </Tooltip>
      </TableHead>
      <Table sx={{ minWidth: 650 }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell align="left">Computer - Year Purchased</TableCell>
            <TableCell align="left">Monitor 1</TableCell>
            <TableCell align="left">Monitor 2</TableCell>
            <TableCell align="left">Headset</TableCell>
            <TableCell align="left">Keyboard</TableCell>
            <TableCell align="left">Mouse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow>
                <TableCell>{row.employee}</TableCell>
                <TableCell align="left">{row.employeeComputer}</TableCell>
                <TableCell>{row.monitor1}</TableCell>
                <TableCell>{row.monitor2}</TableCell>
                <TableCell align="left">{row.headset}</TableCell>
                <TableCell align="left">{row.keyboard}</TableCell>
                <TableCell align="left">{row.mouse}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WFHListing;
