import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
import Cart from "./customer/pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Home from "./customer/pages/Home/Home";
// import Footer from "./customer/components/Footer/Footer";
// import Product from "./customer/pages/Product/Product";
// import ProductDetails from "./customer/pages/Details/ProductDetails";
// import Review from "./customer/pages/Review/Review";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ToastContainer autoClose={1000} />
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Footer /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        <Cart />
      </div>
    </ThemeProvider>
  );
}

export default App;
