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

const NewInventory = ({
  site,
  handleSiteChange,
  computer,
  handleComputerChange,
  computerQuantity,
  handleComputerQuantityChange,
  monitors,
  handleMonitorsChange,
  monitorQuantity,
  handleMonitorQuantityChange,
  monoHeadset,
  handleMonoHeadsetChange,
  monoHeadsetQuantity,
  handleMonoHeadsetQuantityChange,
  duoHeadset,
  handleDuoHeadsetChange,
  duoHeadsetQuantity,
  handleDuoHeadsetQuantityChange,
  keyboard,
  handleKeyboardChange,
  keyboardQuantity,
  handleKeyboardQuantityChange,
  mouse,
  handleMouseChange,
  mouseQuantity,
  handleMouseQuantityChange,
  handleSubmit
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
            Add New Inventory
          </Typography>
          <Grid item style={{ margin: "20px auto" }}>
            <Typography variant="p">
              Please fill out the below form to each time new equipment is
              delivered
            </Typography>
          </Grid>
          {/* Form Start */}
          <Grid container spacing={2} align="left">
            {/* Form Header Start */}
            <Grid xs={12} item>
              <Card></Card>
            </Grid>
            {/* Form Table Header */}
            <Grid xs={12} item>
              <Card>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={1}>
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
                              <MenuItem value={"Ohio Office"}>
                                Ohio Office
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </TableCell>
                        <TableCell align="left">
                          <Button
                            variant="contained"
                            onClick={handleSubmit}
                          >
                            Submit
                          </Button>
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
                            label="Computers"
                            checked={computer}
                            onChange={handleComputerChange}
                          />
                        </TableCell>
                        <TableCell colSpan={3}>
                          <TextField
                            label="Quantity"
                            type="number"
                            disabled={!computer}
                            value={computerQuantity}
                            onChange={handleComputerQuantityChange}
                          />
                        </TableCell>
                      </TableRow>
                      {/* Monitor Info */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Monitors"
                            checked={monitors}
                            onChange={handleMonitorsChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 100 }} size="small">
                            <TextField
                              label="Quantity"
                              type="number"
                              value={monitorQuantity}
                              onChange={handleMonitorQuantityChange}
                              disabled={!monitors}
                            />
                          </FormControl>
                        </TableCell>
                      </TableRow>
                      {/* Headset Info */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Mono Headset"
                            checked={monoHeadset}
                            onChange={handleMonoHeadsetChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 100 }} size="small">
                            <TextField
                              label="Quantity"
                              type="number"
                              value={monoHeadsetQuantity}
                              onChange={handleMonoHeadsetQuantityChange}
                              disabled={!monoHeadset}
                            />
                          </FormControl>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Duo Headset"
                            checked={duoHeadset}
                            onChange={handleDuoHeadsetChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 100 }} size="small">
                            <TextField
                              label="Quantity"
                              type="number"
                              value={duoHeadsetQuantity}
                              onChange={handleDuoHeadsetQuantityChange}
                              disabled={!duoHeadset}
                            />
                          </FormControl>
                        </TableCell>
                      </TableRow>
                      {/* Keyboard Info */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Keyboards"
                            checked={keyboard}
                            onChange={handleKeyboardChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 100 }} size="small">
                            <TextField
                              label="Quantity"
                              type="number"
                              value={keyboardQuantity}
                              onChange={handleKeyboardQuantityChange}
                              disabled={!keyboard}
                            />
                          </FormControl>
                        </TableCell>
                      </TableRow>
                      {/* Mouse Info */}
                      <TableRow>
                        <TableCell>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Wireless Mouse"
                            checked={mouse}
                            onChange={handleMouseChange}
                          />
                        </TableCell>
                        <TableCell>
                          <FormControl sx={{ minWidth: 100 }} size="small">
                            <TextField
                              label="Quantity"
                              type="number"
                              value={mouseQuantity}
                              onChange={handleMouseQuantityChange}
                              disabled={!mouse}
                            />
                          </FormControl>
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

export default NewInventory;
