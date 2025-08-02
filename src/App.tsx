import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Footer from "./customer/components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
