import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";
// import Cart from "./customer/pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Account from "./customer/pages/Account/Account";
import { Route, Routes } from "react-router-dom";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ReviewPage from "./customer/pages/Review/Review";
import ProductDetails from "./customer/pages/Details/ProductDetails";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Account from "./customer/pages/Account/Account";
import UserDetails from "./customer/pages/Account/User/UserDetails";
import Address from "./customer/pages/Account/User/Address";
import Order from "./customer/pages/Account/Order/Order";
import OrderDetails from "./customer/pages/Account/Order/OrderDetails";
import SellerPage from "./customer/pages/SellerPage/SellerPage";
// import Checkout from "./customer/pages/Checkout/Checkout";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<ReviewPage />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />}>
            <Route path="profile" element={<UserDetails />} />
            <Route path="/account/save-card" element={<div>Saved Card</div>} />
            <Route path="address" element={<Address />} />
            <Route path="orders" element={<Order />} />
            <Route
              path="orders/:orderId/:orderItemId"
              element={<OrderDetails />}
            />
          </Route>
          <Route path="/become-seller" element={<SellerPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
