import React, { useState, useEffect } from "react";
import WFHListing from "../components/Cards/WFHListing";
import NavBar from "../components/NavBar";

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
        setMouses(
          data.filter((mouse) => mouse.location === "Work From Home")
        )
      );
  }, []);

  const props = {
    employees,
    computers,
    monitors,
    headsets,
    keyboards,
    mouses
  };
  return (
    <>
      <NavBar />
      <WFHListing {...props} />
    </>
  );
};

export default WFHReport;
