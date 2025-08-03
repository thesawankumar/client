import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/Details/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Home />
        <Footer />
        {/* <Product /> */}
        {/* <ProductDetails /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
