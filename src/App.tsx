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
import Seller from "./seller/pages/Dashboard/Seller";
import Dashboard from "./seller/pages/Dashboard/Dashboard";
import Products from "./seller/pages/Products/Products";
import AddProduct from "./seller/pages/Products/AddProduct";
import Orders from "./seller/pages/Orders/Orders";
import Profile from "./seller/pages/Account/Profile";
import Payment from "./seller/pages/Payment/Payment";
import Transaction from "./seller/pages/Payment/Transaction";

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

          {/* Account Routes */}
          <Route path="/account" element={<Account />}>
            <Route path="profile" element={<UserDetails />} />
            <Route path="save-card" element={<div>Saved Card</div>} />
            <Route path="address" element={<Address />} />
            <Route path="orders" element={<Order />} />
            <Route
              path="orders/:orderId/:orderItemId"
              element={<OrderDetails />}
            />
          </Route>

          {/* Seller Routes */}
          <Route path="/become-seller" element={<SellerPage />} />
          <Route path="/seller" element={<Seller />}>
            <Route index element={<Dashboard />} /> {/* default */}
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<Orders />} />
            <Route path="account" element={<Profile />} />
            <Route path="payment" element={<Payment />} />
            <Route path="transaction" element={<Transaction />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
