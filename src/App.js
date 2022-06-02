import Home from "./pages/Home";
import AddInventory from "./pages/AddInventory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#000000" },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/new" element={<AddInventory/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
