import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { utils, writeFile } from "xlsx";
import InventoryDetails from "../components/Cards/InventoryDetails";

const InventoryListing = () => {
  const [inventory, setInventory] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetch("http://localhost:3001/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data.inventory));
  }, []);

  const rows = [];
  for (let [key, category] of Object.entries(inventory)) {
    category.forEach((item) => {
      let row = { itemType: key, ...item };
      rows.push(row);
    });
  }
  const handleOnPageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  const handleExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(rows);

    utils.book_append_sheet(wb, ws, "Current Inventory");
    writeFile(wb, "InventoryReport.xlsx");
  };

  const props = {
    handleExport,
    rows,
    page,
    handleOnPageChange,
    rowsPerPage,
    handleOnRowsPerPageChange,
  };

  return (
    <>
      <NavBar />
      <InventoryDetails {...props} />
    </>
  );
};

export default InventoryListing;
