import Home from "./pages/Home";
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {main : "#000000"},
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
