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
  Alert,
  Card,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TextField,
} from "@mui/material";
import React from "react";

const WFHCheckOutForm = ({
  employees,
  site,
  currentEmployee,
  newChecked,
  handleSiteChange,
  handleCurrentEmployeeChange,
  handleNewChecked,
  computer,
  handleComputerChange,
  computerYear,
  handleComputerYearChange,
  monitors,
  handleMonitorsChange,
  monitorQuantity,
  handleMonitorQuantityChange,
  monitor1Style,
  handleMonitor1StyleChange,
  monitor2Style,
  handleMonitor2StyleChange,
  headset,
  handleHeadsetChange,
  headsetMono,
  handleHeadsetMonoChange,
  headsetDuo,
  handleHeadsetDuoChange,
  keyboard,
  handleKeyboardChange,
  mouse,
  handleMouseChange,
}) => {
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
          {/* Header Start */}
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Work From Home Inventory Checkout
          </Typography>
          <Grid item style={{ margin: "20px auto" }}>
            <Typography variant="p">
              Please fill out the below form to indicate what equipment the
              employee will be using outside of the office
            </Typography>
          </Grid>
          {/* Form Start */}
          <Grid container spacing={2} align="left">
            {/* Form Header Start */}
            <Grid xs={12} item>
              <Card>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="site-select-label">Site</InputLabel>
                  <Select
                    labelId="site-select-label"
                    id="site-select"
                    value={site}
                    onChange={handleSiteChange}
                  >
                    <MenuItem value={"New York Office"}>
                      New York Office
                    </MenuItem>
                    <MenuItem value={"Ohio Office"}>Ohio Office</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="employee-select-label">Employee</InputLabel>
                  <Select
                    labelId="employee-select-label"
                    id="employee-select"
                    value={currentEmployee}
                    onChange={handleCurrentEmployeeChange}
                  >
                    {employees
                      .filter((employee) => employee.site === site)
                      .map((employee) => (
                        <MenuItem value={employee.employeeName}>
                          {employee.employeeName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Card>
            </Grid>
            {/* Form Table Header */}
            <Grid xs={12} item>
              <Card>
                {newChecked && (
                  <Alert severity="info">
                    Only check "New Inventory" for Inventory not previously
                    assigned. Checking this box will both add new inventory and
                    assign it to a WFH employee
                  </Alert>
                )}
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={3}>
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
                        </TableCell>
                        <TableCell align="left">
                          <Button variant="contained">Check Out</Button>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {/* Form Table Body */}
                    <TableBody>
                      {/* Computer Infor */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Computer"
                            checked={computer}
                            onChange={handleComputerChange}
                          />
                        </TableCell>
                        <TableCell colSpan={3}>
                          <TextField
                            label="Year Purchased"
                            type="number"
                            disabled={!computer}
                            value={computerYear}
                            onChange={handleComputerYearChange}
                          />
                        </TableCell>
                      </TableRow>
                      {/* Monitor Info */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Monitor"
                            checked={monitors}
                            onChange={handleMonitorsChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 100 }} size="small">
                            <InputLabel id="monitorQuantity-select-label">
                              Quantity
                            </InputLabel>
                            <Select
                              labelId="monitorQuantity-select-label"
                              id="monitorQuantity-select"
                              value={monitorQuantity}
                              onChange={handleMonitorQuantityChange}
                              disabled={!monitors}
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 180 }} size="small">
                            <InputLabel id="monitor1Style-select-label">
                              Monitor 1 Style
                            </InputLabel>
                            <Select
                              labelId="monitor1Style-select-label"
                              id="monitor1Style--select"
                              value={monitor1Style}
                              onChange={handleMonitor1StyleChange}
                              disabled={!monitors}
                            >
                              <MenuItem value={"2022 Purchased"}>
                                2022 Purchased
                              </MenuItem>
                              <MenuItem value={"Pre 2022 Purchased"}>
                                Pre 2022 Purchased
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 180 }} size="small">
                            <InputLabel id="monitor2Style-select-label">
                              Monitor 2 Style
                            </InputLabel>
                            <Select
                              labelId="monitor2Style-select-label"
                              id="monitor2Style--select"
                              value={monitor2Style}
                              onChange={handleMonitor2StyleChange}
                              disabled={monitorQuantity !== 2}
                            >
                              <MenuItem value={"2022 Purchased"}>
                                2022 Purchased
                              </MenuItem>
                              <MenuItem value={"Pre 2022 Purchased"}>
                                Pre 2022 Purchased
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                      </TableRow>
                      {/* Headset Info */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Headset"
                            checked={headset}
                            onChange={handleHeadsetChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="primary"
                                disabled={!headset || headsetDuo}
                              />
                            }
                            checked={headsetMono}
                            onChange={handleHeadsetMonoChange}
                            label="Mono"
                          />
                        </TableCell>
                        <TableCell colSpan={2}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="primary"
                                disabled={!headset || headsetMono}
                              />
                            }
                            checked={headsetDuo}
                            onChange={handleHeadsetDuoChange}
                            label="Duo"
                          />
                        </TableCell>
                      </TableRow>
                      {/* Keyboard Info */}
                      <TableRow>
                        <TableCell colSpan={4}>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Keyboard"
                            checked={keyboard}
                            onChange={handleKeyboardChange}
                          />
                        </TableCell>
                      </TableRow>
                      {/* Mouse Info */}
                      <TableRow>
                        <TableCell colSpan={4}>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Wireless Mouse"
                            checked={mouse}
                            onChange={handleMouseChange}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default WFHCheckOutForm;
