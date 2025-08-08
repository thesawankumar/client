// src/pages/account/Account.tsx (or wherever Account component is)

import { Divider } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../../../components/Sidebar"; // Adjust path
import {
  AccountCircle,
  CreditCard,
  LocationOn,
  ShoppingBag,
  Logout,
} from "@mui/icons-material";

const upperMenu = [
  { name: "Profile", path: "/account/profile", icon: <AccountCircle /> },
  { name: "Saved Cards", path: "/account/save-card", icon: <CreditCard /> },
  { name: "Address", path: "/account/address", icon: <LocationOn /> },
  { name: "Orders", path: "/account/orders", icon: <ShoppingBag /> },
];

const lowerMenu = [{ name: "Logout", path: "/logout", icon: <Logout /> }];

export default function Account() {
  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 pb-3">
          Hello, Sawan 👋
        </h1>
      </div>

      <Divider className="border-gray-300" />

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6 py-6 items-start">
        {/* Sidebar */}
        <Sidebar upperMenu={upperMenu} lowerMenu={lowerMenu} />

        {/* Main Content */}
        <section className="flex-1 bg-white rounded-xl shadow-md border border-gray-200 p-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
