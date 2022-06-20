import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Grid, Card } from "@mui/material";
import { utils, writeFile } from "xlsx";
import InventorySummary from "../components/Cards/InventorySummary";
import QuickActions from "../components/Cards/QuickActions";
import AddEmployeeDialog from "../components/Cards/AddEmployeeDialog";

const Home = () => {
  const [inventory, setInventory] = useState({});
  const [addEmployeeOpen, setAddEmployeeOpen] = useState(false);
  const [addEmployeeName, setAddEmployeeName] = useState("");
  const [addEmployeeSite, setAddEmployeeSite] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data.inventory));
  }, []);

  const data = {
    computers: {
      type: "Computers",
      nycAssigned: 0,
      nycAvailable: 0,
      ohioAssigned: 0,
      ohioAvailable: 0,
      total: 0,
    },
    monitors: {
      type: "Monitors",
      nycAssigned: 0,
      nycAvailable: 0,
      ohioAssigned: 0,
      ohioAvailable: 0,
      total: 0,
    },
    headsets: {
      type: "Headsets",
      nycAssigned: 0,
      nycAvailable: 0,
      ohioAssigned: 0,
      ohioAvailable: 0,
      total: 0,
    },
    keyboards: {
      type: "Keyboards",
      nycAssigned: 0,
      nycAvailable: 0,
      ohioAssigned: 0,
      ohioAvailable: 0,
      total: 0,
    },
    mouses: {
      type: "Mouses",
      nycAssigned: 0,
      nycAvailable: 0,
      ohioAssigned: 0,
      ohioAvailable: 0,
      total: 0,
    },
  };

  const detailRows = [];
  for (let [key, category] of Object.entries(inventory)) {
    category.forEach((item) => {
      let row = { itemType: key, ...item };
      detailRows.push(row);
    });
  }

  for (let [key, category] of Object.entries(inventory)) {
    category.forEach((item) => {
      if (item.site === "New York Office") {
        item.employee
          ? (data[key].nycAssigned += 1)
          : (data[key].nycAvailable += 1);
      }
      if (item.site === "Ohio Office") {
        item.employee
          ? (data[key].ohioAssigned += 1)
          : (data[key].ohioAvailable += 1);
      }
      data[key].total += 1;
    });
  }

  const handleSummaryExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([
      data.computers,
      data.monitors,
      data.headsets,
      data.keyboards,
      data.mouses,
    ]);

    utils.book_append_sheet(wb, ws, "Inventory Summary");
    writeFile(wb, "InventorySummary.xlsx");
  };

  const handleDetailExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(detailRows);

    utils.book_append_sheet(wb, ws, "Current Inventory");
    writeFile(wb, "InventoryReport.xlsx");
  };
  const addEmployeeToggle = () => {
    setAddEmployeeOpen((prev) => !prev);
  };
  const handleAddEmployeeNameChange = (e) => {
    setAddEmployeeName(e.target.value);
  };
  const handleAddEmployeeSiteChange = (e) => {
    setAddEmployeeSite(e.target.value);
  };
  const handleAddEmployeeSubmit = () => {
    fetch("http://localhost:3001/employees", {
      method: "POST",
      body: JSON.stringify({
        employeeName: addEmployeeName,
        site: addEmployeeSite,
        location: "Work From Home",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    addEmployeeToggle();
  };
  const actions = {
    handleDetailExport,
    addEmployeeToggle,
  };
  const addEmployeeProps = {
    addEmployeeOpen,
    addEmployeeToggle,
    addEmployeeName,
    handleAddEmployeeNameChange,
    addEmployeeSite,
    handleAddEmployeeSiteChange,
    handleAddEmployeeSubmit,
  };
  return (
    <>
      <NavBar />
      <div style={{ marginRight: "20px" }}>
        <Grid container spacing={2} style={{ margin: "10px 0px 10px auto" }}>
          <Grid item xs={6}>
            <Card variant="outlined">
              <InventorySummary {...data} handleExport={handleSummaryExport} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card variant="outlined">
              <QuickActions {...actions} />
            </Card>
          </Grid>
          <AddEmployeeDialog {...addEmployeeProps}/>
        </Grid>
      </div>
    </>
  );
};

export default Home;
