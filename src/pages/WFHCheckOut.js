import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import WFHCheckOutForm from "../components/WFHCheckOutForm";

const WFHCheckOut = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/employees")
    .then((res) => res.json())
    .then((data) => setEmployees(data));
  }, []);

  return (
    <>
      <NavBar />
      <WFHCheckOutForm employees={employees}/>
    </>
  );
};

export default WFHCheckOut;
