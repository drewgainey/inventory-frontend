import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";

const WFHCheckOutForm = ({ employees }) => {
  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: "66%",
    margin: "20px auto",
  };
  return (
    <>
      <Grid container align="center">
        <Paper style={paperStyle} elevation={10}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Work From Home Inventory Checkout
          </Typography>
          <Grid item style={{ margin: "20px auto" }}>
            <Typography variant="p">
              Please fill out the below form to indicate what equipment the
              employee will be using outside of the office
            </Typography>
          </Grid>
          <Grid container spacing={2} align="left">
            <FormControl fullWidth>
              <InputLabel id="employee-select-label">Employee</InputLabel>
              <Select
              labelId="employee-select-label"
              id="employee-select"
              >
                {employees.map((employee) => (
                  <MenuItem>{employee.employeeName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default WFHCheckOutForm;
