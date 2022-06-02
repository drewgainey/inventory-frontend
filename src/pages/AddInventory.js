import {
  Grid,
  Paper,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";

const AddInventory = () => {
  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: "66%",
    margin: "20px auto",
  };
  const types = ["computers", "monitors", "head phones"];
  return (
    <>
      <NavBar />
      <Grid container align="center">
        <Paper style={paperStyle} elevation={10}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Add Inventory
          </Typography>
          <Grid item style={{ margin: "20px auto" }}>
            <Typography variant="p">
              Please fill out the below form each time there is a delivery of
              new inventory 
            </Typography>
          </Grid>
          <Grid container spacing={2} align="left">
            <Grid xs={6} item>
              <FormControl fullWidth>
                <InputLabel id="type-select-label">Type</InputLabel>
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  label="type"
                >
                  {types.map((type) => (
                    <MenuItem value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={6} item>
              <TextField
                id="Quantity"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default AddInventory;
