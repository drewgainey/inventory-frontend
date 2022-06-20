import React, { useState } from "react";
import postNewInventory from "../api/postNewInventory";
import NewInventory from "../components/Cards/NewInventory";
import NavBar from "../components/NavBar";

const AddInventory = () => {
  const [site, setSite] = useState("");
  const [computer, setComputer] = useState(false);
  const [computerQuantity, setComputerQuantity] = useState(0);
  const [monitors, setMonitors] = useState(false);
  const [monitorQuantity, setMonitorQuantity] = useState(0);
  const [monoHeadset, setMonoHeadset] = useState(false);
  const [monoHeadsetQuantity, setMonoHeadsetQuantity] = useState(0);
  const [duoHeadset, setDuoHeadset] = useState(false);
  const [duoHeadsetQuantity, setDuoHeadsetQuantity] = useState(0);
  const [keyboard, setKeyboard] = useState(false);
  const [keyboardQuantity, setKeyboardQuantity] = useState(0);
  const [mouse, setMouse] = useState(false);
  const [mouseQuantity, setMouseQuantity] = useState(0);


  const handleSiteChange = (e) => {
    setSite(e.target.value);
  };

  const handleComputerChange = () => {
    setComputerQuantity(0);
    setComputer((prev) => !prev);
  };
  const handleComputerQuantityChange = (e) => {
    setComputerQuantity(e.target.value);
  }
  const handleMonitorsChange = () => {
    setMonitorQuantity(0);
    setMonitors((prev) => !prev);
  };
  const handleMonitorQuantityChange = (e) => {
    setMonitorQuantity(e.target.value);
  }
  const handleMonoHeadsetChange = () => {
    setMonoHeadsetQuantity(0);
    setMonoHeadset((prev) => !prev);
  };
  const handleMonoHeadsetQuantityChange = (e) => {
    setMonoHeadsetQuantity(e.target.value);
  }
  const handleDuoHeadsetChange = () => {
    setDuoHeadsetQuantity(0);
    setDuoHeadset((prev) => !prev);
  };
  const handleDuoHeadsetQuantityChange = (e) => {
    setDuoHeadsetQuantity(e.target.value);
  }
  
  const handleKeyboardChange = () => {
    setKeyboardQuantity(0);
    setKeyboard((prev) => !prev);
  };
  const handleKeyboardQuantityChange = (e) => {
    setKeyboardQuantity(e.target.value);
  }
  const handleMouseChange = () => {
    setMouseQuantity(0);
    setMouse((prev) => !prev);
  };
  const handleMouseQuantityChange = (e) => {
    setMouseQuantity(e.target.value);
  }
  const newInventory = {
    site,
    computer,
    computerQuantity,
    monitors,
    monitorQuantity,
    monoHeadset,
    monoHeadsetQuantity,
    duoHeadset,
    duoHeadsetQuantity,
    keyboard,
    keyboardQuantity,
    mouse,
    mouseQuantity,
  }
  const handleSubmit = () => {
    postNewInventory({...newInventory});
  }
  
  const formProps = {
    handleSiteChange,
    handleComputerChange,
    handleComputerQuantityChange,
    handleMonitorsChange,
    handleMonitorQuantityChange,
    handleMonoHeadsetChange,
    handleMonoHeadsetQuantityChange,
    handleDuoHeadsetChange,
    handleDuoHeadsetQuantityChange,
    handleKeyboardChange,
    handleKeyboardQuantityChange,
    handleMouseChange,
    handleMouseQuantityChange,
    handleSubmit
  };
  return (
    <>
      <NavBar />
      <NewInventory {...newInventory} {...formProps} />
    </>
  );
};

export default AddInventory;

