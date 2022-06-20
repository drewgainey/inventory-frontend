import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { utils, writeFile } from "xlsx";
import EmployeeDetails from "../components/Cards/EmployeeDetails";
import AddEmployeeDialog from "../components/Cards/AddEmployeeDialog";

const EmployeeListing = () => {
  const [employees, setEmployees] = useState([]);
  const [addEmployeeOpen, setAddEmployeeOpen] = useState(false);
  const [addEmployeeName, setAddEmployeeName] = useState("");
  const [addEmployeeSite, setAddEmployeeSite] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [addEmployeeOpen]);

  const rows = employees ? employees.map((employee) => {
    return {
      name: employee.employeeName,
      site: employee.site,
      location: employee.location,
      id: employee._id,
      edit: false,
    };
  }) : [];

  const handleExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(rows);

    utils.book_append_sheet(wb, ws, "Employees");
    writeFile(wb, "Employees.xlsx");
  };
  //doesn't work
  const handleEditEmployeeChange = (id) => {
    const indexToChange = rows.find((row) => row.id === id);
    console.log(indexToChange);
  }

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

  const employeeDetailprops = {
    handleExport,
    rows,
    handleEditEmployeeChange,
    addEmployeeToggle
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
      <EmployeeDetails {...employeeDetailprops} />
      <AddEmployeeDialog {...addEmployeeProps}/>
    </>
  );
};

export default EmployeeListing;
