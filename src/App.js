import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AddInventory from "./pages/AddInventory";
import WFHCheckOut from "./pages/WFHCheckOut";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";
import LogInSignUp from "./pages/LogInSignUp";
import { Fragment } from "react";
import WFHReport from "./pages/WFHReport";
import InventoryListing from "./pages/InventoryListing";
import EmployeeListing from "./pages/EmployeeListing";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#000000" },
    },
  });
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Fragment>
              <Routes>
                <Route path="/" element={<LogInSignUp />}></Route>
                <Route path="/home" element={<PrivateRoute />}>
                  <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/new" element={<PrivateRoute />}>
                  <Route path="/new" element={<AddInventory />} />
                </Route>
                <Route path="/wfh" element={<PrivateRoute />}>
                  <Route path="/wfh" element={<WFHCheckOut />} />
                </Route>
                <Route path="/wfhreport" element={<PrivateRoute />}>
                  <Route path="/wfhreport" element={<WFHReport />} />
                </Route>
                <Route path="/inventory" element={<PrivateRoute />}>
                  <Route path="/inventory" element={<InventoryListing />} />
                </Route>
                <Route path="/employees" element={<PrivateRoute />}>
                  <Route path="/employees" element={<EmployeeListing />} />
                </Route>
              </Routes>
            </Fragment>
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
