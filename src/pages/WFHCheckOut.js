import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import WFHCheckOutForm from "../components/WFHCheckOutForm";

const WFHCheckOut = () => {
  const [employees, setEmployees] = useState([]);
  const [newChecked, setNewChecked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleNewChecked = () => {
    setNewChecked((prev) => !prev);
  }

  return (
    <>
      <NavBar />
      <WFHCheckOutForm
        employees={employees}
        newChecked={newChecked}
        handleNewChecked={handleNewChecked}
      />
    </>
  );
};

export default WFHCheckOut;
