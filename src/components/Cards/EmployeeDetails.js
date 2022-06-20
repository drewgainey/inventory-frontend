import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  IconButton,
  Tooltip,
  FormControlLabel,
  Checkbox,
  Toolbar,
} from "@mui/material";
import { Download, AddCircle } from "@mui/icons-material";

const EmployeeDetails = ({
  handleExport,
  rows,
  handleEditEmployeeChange,
  addEmployeeToggle,
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography variant="h6">Current Employees</Typography>
          <Tooltip title="Export To Excel">
            <IconButton onClick={handleExport}>
              <Download />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add Employee">
            <IconButton onClick={addEmployeeToggle}>
              <AddCircle />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Table sx={{ minWidth: 650 }} stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Employee</TableCell>
              <TableCell align="left">Site</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="left">{row.site}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      onChange={() => handleEditEmployeeChange(row.id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeDetails;
