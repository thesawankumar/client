import { ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./customer/components/Navbar/Navbar";
import customTheme from "./Theme/customTheme";

import { Route, Routes, useNavigate } from "react-router-dom";
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
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import Coupon from "./admin/pages/Coupon/Coupon";
import AddCoupon from "./admin/pages/Coupon/AddCoupon";
import HomePage from "./admin/pages/Home/HomePage";
import Electronic from "./admin/pages/Home/Electronic";
import ShopCategory from "./admin/pages/Home/ShopCategory";
import Deal from "./admin/pages/Home/Deal/Deal";
import SellerTable from "./admin/pages/Seller/SellerTable";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { fetchSellerProfile } from "./redux/seller/actions/sellerAction";
import { fetchUserProfile } from "./redux/auth/AuthAction";
import Auth from "./customer/pages/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentSuccess from "./customer/pages/Payment/PaymentSuccess";

function App() {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, []);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  }, [seller.profile]);

  useEffect(() => {
    dispatch(
      fetchUserProfile({ jwt: auth.jwt || localStorage.getItem("user-jwt") })
    );
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={customTheme}>
      <ToastContainer position="top-right" autoClose={500} />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/reviews/:productId" element={<ReviewPage />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment-success/:orderId"
            element={<PaymentSuccess />}
          />
          <Route path="/auth" element={<Auth />} />

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

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<SellerTable />} />
            <Route path="coupon" element={<Coupon />} />
            <Route path="add-coupon" element={<AddCoupon />} />
            <Route path="home-page" element={<HomePage />} />
            <Route path="electric-category" element={<Electronic />} />
            <Route path="shop-by-category" element={<ShopCategory />} />
            <Route path="deal" element={<Deal />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
