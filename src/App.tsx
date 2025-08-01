import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
