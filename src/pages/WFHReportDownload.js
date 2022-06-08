import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { utils, writeFile } from "xlsx";

const WFHReportDownload = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  const onClick = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(employees);

    utils.book_append_sheet(wb, ws, "Employees");
    writeFile(wb, "WFHReport.xlsx");
  };

  return (
    <Button variant="contained" onClick={onClick}>
      Download
    </Button>
  );
};

export default WFHReportDownload;
