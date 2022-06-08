import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const WFHListing = ({
  employees,
  computers,
  monitors,
  headsets,
  keyboards,
  mouses,
}) => {
  return (
    <TableContainer component={Paper}>
      <TableHead>
        <Typography variant="h6">Current Work From Home Inventory</Typography>
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
          {employees &&
            computers &&
            headsets &&
            employees.map((employee) => {
              let computerYear = "";
              let employeeComputer = computers.find(
                (computer) => computer.employee === employee._id
              );
              employeeComputer ? computerYear = employeeComputer.yearPurchased : computerYear = "None";

              let headsetStyle = "";
              let employeeHeadset = headsets.find(
                (headset) => headset.employee === employee._id
              );
              employeeHeadset ? headsetStyle = employeeHeadset.style : headsetStyle = "None";

              let keyboard = "";
              let employeekeyboard = keyboards.find(
                (keyboard) => keyboard.employee === employee._id
              );
              employeekeyboard ? keyboard = "Yes" : keyboard = "No";

              let mouse = "";
              let employeemouse = mouses.find(
                (mouse) => mouse.employee === employee._id
              );
              employeemouse ? mouse = "Yes" : mouse = "No";

              return (
                <TableRow>
                  <TableCell>{employee.employeeName}</TableCell>
                  <TableCell align="left">{computerYear}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="left">{headsetStyle}</TableCell>
                  <TableCell align="left">{keyboard}</TableCell>
                  <TableCell align="left">{mouse}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WFHListing;
