import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AddEmployeeDialog = ({
  addEmployeeOpen,
  addEmployeeToggle,
  addEmployeeName,
  handleAddEmployeeNameChange,
  addEmployeeSite,
  handleAddEmployeeSiteChange,
  handleAddEmployeeSubmit,
}) => {
  return (
    <Dialog
      open={addEmployeeOpen}
      onClose={addEmployeeToggle}
      minWidth="md"
      fullWidth
    >
      <DialogContent>
        <DialogContentText>Add New Employee</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Employee Name"
          fullWidth
          variant="standard"
          value={addEmployeeName}
          onChange={handleAddEmployeeNameChange}
        />
        <InputLabel id="site-select-label">Site</InputLabel>
        <Select
          labelId="site-select-label"
          id="site-select"
          fullWidth
          value={addEmployeeSite}
          onChange={handleAddEmployeeSiteChange}
        >
          <MenuItem value={"New York Office"}>New York Office</MenuItem>
          <MenuItem value={"Ohio Office"}>Ohio Office</MenuItem>
        </Select>
        <InputLabel id="location-select-label">Office</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          fullWidth
          value={"Work From Home"}
        >
          <MenuItem value={"Work From Home"}>Work From Home</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={addEmployeeToggle}>Cancel</Button>
        <Button onClick={handleAddEmployeeSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeDialog;
