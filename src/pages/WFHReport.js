import React, { useState, useEffect } from "react";
import WFHListing from "../components/Cards/WFHListing";
import NavBar from "../components/NavBar";
import { utils, writeFile } from "xlsx";

const WFHReport = () => {
  const [employees, setEmployees] = useState([]);
  const [computers, setComputers] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [headsets, setHeadsets] = useState([]);
  const [keyboards, setKeyboards] = useState([]);
  const [mouses, setMouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) =>
        setEmployees(
          data.filter((employee) => employee.location === "Work From Home")
        )
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/computers")
      .then((res) => res.json())
      .then((data) =>
        setComputers(
          data.filter((computer) => computer.location === "Work From Home")
        )
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/monitors")
      .then((res) => res.json())
      .then((data) =>
        setMonitors(
          data.filter((monitor) => monitor.location === "Work From Home")
        )
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/headsets")
      .then((res) => res.json())
      .then((data) =>
        setHeadsets(
          data.filter((headset) => headset.location === "Work From Home")
        )
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/keyboards")
      .then((res) => res.json())
      .then((data) =>
        setKeyboards(
          data.filter((keyboard) => keyboard.location === "Work From Home")
        )
      );
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/mouses")
      .then((res) => res.json())
      .then((data) =>
        setMouses(data.filter((mouse) => mouse.location === "Work From Home"))
      );
  }, []);

  const rows = employees ? employees.map((employee) => {
    let employeeComputer = computers.find(
      (computer) => computer.employee === employee._id
    );
    let employeeMonitors = monitors.filter((monitor) => monitor.employee === employee._id);
    let monitor1 = employeeMonitors.length > 0 ? employeeMonitors[0].style : "None";
    let monitor2 = employeeMonitors.length > 1 ? employeeMonitors[1].style : "None";

    let employeeHeadset = headsets.find(
      (headset) => headset.employee === employee._id
    );
    let employeeKeyboard = keyboards.find(
      (keyboard) => keyboard.employee === employee._id
    );
    let employeeMouse = mouses.find(
      (mouse) => mouse.employee === employee._id
    );
    return {
      employee: employee.employeeName,
      employeeComputer: employeeComputer?  employeeComputer.yearPurchased : "None",
      monitor1: monitor1,
      monitor2: monitor2,
      headset:  employeeHeadset ? employeeHeadset.style : "None",
      keyboard: employeeKeyboard ? "Yes" : "None",
      mouse: employeeMouse ? "Yes" : "None",
    };
  }) : [];

  const handleExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(rows);

    utils.book_append_sheet(wb, ws, "WFH Inventory");
    writeFile(wb, "WFHInventoryReport.xlsx");
  };

  const props = {
    handleExport,
    rows,
  };

  return (
    <>
      <NavBar />
      <WFHListing {...props} />
    </>
  );
};

export default WFHReport;
