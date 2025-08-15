import { Divider } from "@mui/material";
import {
  Dashboard,
  AddCircle,
  Category,
  Home,
  LocalOffer,
  Store,
  LocalMall,
  AccountCircle,
  Logout,
} from "@mui/icons-material";
import Sidebar from "../../../components/Sidebar"; // adjust path as needed
import type { MenuItem } from "../../../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import { fetchHomeCategories } from "../../../redux/admin/actions/homeCategoryAction";

const upperMenu: MenuItem[] = [
  { name: "Dashboard", path: "/admin", icon: <Dashboard /> },
  { name: "Coupons", path: "/admin/coupon", icon: <LocalOffer /> },
  { name: "Add New Coupon", path: "/admin/add-coupon", icon: <AddCircle /> },
  { name: "Home Page", path: "/admin/home-page", icon: <Home /> },
  {
    name: "Electric Category",
    path: "/admin/electric-category",
    icon: <Category />,
  },
  {
    name: "Shop By Category",
    path: "/admin/shop-by-category",
    icon: <Store />,
  },
  { name: "Deals", path: "/admin/deal", icon: <LocalMall /> },
];

const lowerMenu: MenuItem[] = [
  { name: "Account", path: "/admin/account", icon: <AccountCircle /> },
  { name: "Logout", path: "/logout", icon: <Logout /> },
];

export default function Admin() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHomeCategories());
  }, []);
  return (
    <div className="px-4 sm:px-8 lg:px-20 w-full min-h-screen mt-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 pb-3">
          Hello, Admin 👋
        </h1>
      </div>

      <Divider className="border-gray-300" />

      <div className="flex flex-col lg:flex-row gap-6 py-6 items-start">
        {/* Sidebar */}
        <Sidebar upperMenu={upperMenu} lowerMenu={lowerMenu} />

        {/* Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
