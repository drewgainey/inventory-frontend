import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import AddInventory from "./pages/AddInventory";
import WFHCheckOut from "./pages/WFHCheckOut";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";
import LogInSignUp from "./pages/LogInSignUp";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#000000" },
    },
  });
  return (
    // <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route exact path="/" element={<LogInSignUp/>}/>
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/new" component={AddInventory} />
              <PrivateRoute path="/wfh" component={WFHCheckOut} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    // </AuthProvider>
  );
}

export default App;
