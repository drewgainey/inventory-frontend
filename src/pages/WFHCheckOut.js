import React, { useState, useEffect } from "react";
import postWFHCheckOut from "../api/postWFHCheckOut";
import NavBar from "../components/NavBar";
import WFHCheckOutForm from "../components/WFHCheckOutForm";

const WFHCheckOut = () => {
  const [employees, setEmployees] = useState([]);
  const [site, setSite] = useState("");
  const [currentEmployee, setCurrentEmployee] = useState({});
  const [newChecked, setNewChecked] = useState(false);
  const [computer, setComputer] = useState(false);
  const [computerYear, setComputerYear] = useState('2022');
  const [monitors, setMonitors] = useState(false);
  const [monitorQuantity, setMonitorQuantity] = useState(0);
  const [monitor1Style, setMonitor1Style] = useState("");
  const [monitor2Style, setMonitor2Style] = useState("");
  const [headset, setHeadset] = useState(false);
  const [headsetMono, setHeadsetMono] = useState(false);
  const [headsetDuo, setHeadsetDuo] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [mouse, setMouse] = useState(false);
  const location = "Work From Home";

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleSiteChange = (e) => {
    setSite(e.target.value);
  };
  const handleCurrentEmployeeChange = (e) => {
    setCurrentEmployee(e.target.value);
  };
  const handleNewChecked = () => {
    setNewChecked((prev) => !prev);
  };
  const handleComputerChange = () => {
    setComputer((prev) => !prev);
  };
  const handleComputerYearChange = (e) => {
    setComputerYear(e.target.value);
  }
  const handleMonitorsChange = () => {
    setMonitorQuantity(0);
    setMonitor1Style("");
    setMonitor2Style("")
    setMonitors((prev) => !prev);
  };
  const handleMonitorQuantityChange = (e) => {
    setMonitorQuantity(e.target.value);
  }
  const handleMonitor1StyleChange = (e) => {
    setMonitor1Style(e.target.value);
  }
  const handleMonitor2StyleChange = (e) => {
    setMonitor2Style(e.target.value);
  }
  const handleHeadsetChange = () => {
    setHeadsetDuo(false);
    setHeadsetMono(false);
    setHeadset((prev) => !prev);
  };
  const handleHeadsetMonoChange = () => {
    setHeadsetMono((prev) => !prev);
  };
  const handleHeadsetDuoChange = () => {
    setHeadsetDuo((prev) => !prev);
  };
  const handleKeyboardChange = () => {
    setKeyboard((prev) => !prev);
  };
  const handleMouseChange = () => {
    setMouse((prev) => !prev);
  };
  const wfhState = {
    employees,
    site,
    currentEmployee,
    newChecked,
    computer,
    computerYear,
    monitors,
    monitorQuantity,
    monitor1Style,
    monitor2Style,
    headset,
    headsetMono,
    headsetDuo,
    keyboard,
    mouse,
    location
  }
  const handleCheckoutClick = () => {
    postWFHCheckOut({...wfhState});
  };
  
  const formProps = {
    handleSiteChange,
    handleCurrentEmployeeChange,
    handleNewChecked,
    handleComputerChange,
    handleComputerYearChange,
    handleMonitorsChange,
    handleMonitorQuantityChange,
    handleMonitor1StyleChange,
    handleMonitor2StyleChange,
    handleHeadsetChange,
    handleHeadsetMonoChange,
    handleHeadsetDuoChange,
    handleKeyboardChange,
    handleMouseChange,
    handleCheckoutClick,
  };
  return (
    <>
      <NavBar />
      <WFHCheckOutForm {...wfhState} {...formProps} />
    </>
  );
};

export default WFHCheckOut;
