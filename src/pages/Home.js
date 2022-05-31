import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Grid, Card } from "@mui/material";
import InventorySummary from "../components/Cards/InventorySummary";

const Home = () => {
  const [inventorySummaryData, setInventorySummaryData] = useState();
  const [inventoryDetails, setInventoryDetails] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setInventorySummaryData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/details")
      .then((res) => res.json())
      .then((data) => setInventoryDetails(data));
  });

  return (
    <>
      <NavBar />
      <div style={{ marginRight: "20px" }}>
        <Grid container spacing={2} style={{ margin: "10px 0px 10px auto" }}>
          <Grid item xs={6}>
            <Card variant="outlined">
              <InventorySummary data={inventorySummaryData} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
