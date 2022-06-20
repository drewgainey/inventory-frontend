import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { IconButton, TablePagination, Toolbar, Tooltip } from "@mui/material";
import { Download } from "@mui/icons-material";

const InventoryDetails = ({
  handleExport,
  rows,
  page,
  handleOnPageChange,
  rowsPerPage,
  handleOnRowsPerPageChange,
}) => {
  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography variant="h6">Current Inventory</Typography>
        <Tooltip title="Export To Excel">
          <IconButton onClick={handleExport}>
            <Download />
          </IconButton>
        </Tooltip>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleOnPageChange}
          onRowsPerPageChange={handleOnRowsPerPageChange}
        />
      </Toolbar>
      <Table sx={{ minWidth: 650 }} stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Item Type</TableCell>
            <TableCell align="left">Site</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Employee</TableCell>
            <TableCell align="left">Year Purchased</TableCell>
            <TableCell align="left">Style</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow key={row._id}>
                  <TableCell>{row.itemType}</TableCell>
                  <TableCell align="left">{row.site}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    {row.employee ? row.employee.employeeName : ""}
                  </TableCell>
                  <TableCell align="left">{row.yearPurchased}</TableCell>
                  <TableCell align="left">{row.style}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventoryDetails;
