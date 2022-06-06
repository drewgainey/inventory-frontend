import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert
} from "@mui/material";
import React from "react";

const WFHCheckOutForm = ({ employees, newChecked, handleNewChecked }) => {
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
            <Grid xs={7} item>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={newChecked}
                    onChange={handleNewChecked}
                  />
                }
                label="New Inventory"
              />
            </Grid>
            {
              newChecked && (<Alert severity="info">Use only for Inventory not previously assigned. Checking this box will both add new inventory and assign it to a WFH employee</Alert>)
            }
            <Grid xs={6} item>
              <FormControl fullWidth>
                <InputLabel id="site-select-label">Site</InputLabel>
                <Select labelId="site-select-label" id="site-select">
                    <MenuItem>NYC Office</MenuItem>
                    <MenuItem>Ohio Office</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={6} item>
              <FormControl fullWidth>
                <InputLabel id="employee-select-label">Employee</InputLabel>
                <Select labelId="employee-select-label" id="employee-select">
                  {employees.map((employee) => (
                    <MenuItem>{employee.employeeName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default WFHCheckOutForm;
