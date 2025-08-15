import { Divider } from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  Inventory2,
  AddBox,
  Payment,
  ReceiptLong,
  AccountCircle,
  Logout,
} from "@mui/icons-material";
import Sidebar from "../../../components/Sidebar"; // 👈 adjust path if needed
import type { MenuItem } from "../../../components/Sidebar";
import { Outlet } from "react-router-dom";

const upperMenu: MenuItem[] = [
  { name: "Dashboard", path: "/seller", icon: <Dashboard /> },
  { name: "Orders", path: "/seller/orders", icon: <ShoppingCart /> },
  { name: "Products", path: "/seller/products", icon: <Inventory2 /> },
  { name: "Add Product", path: "/seller/add-product", icon: <AddBox /> },
  { name: "Payment", path: "/seller/payment", icon: <Payment /> },
  { name: "Transaction", path: "/seller/transaction", icon: <ReceiptLong /> },
];

const lowerMenu: MenuItem[] = [
  { name: "Account", path: "/seller/account", icon: <AccountCircle /> },
  { name: "Logout", path: "/logout", icon: <Logout /> },
];

export default function Seller() {
  return (
    <div className="px-4 sm:px-8 lg:px-20 w-full min-h-screen mt-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 pb-3">
          Hello, Sawan 👋
        </h1>
      </div>

      <Divider className="border-gray-300" />

      <div className="flex flex-col lg:flex-row gap-6 py-6 items-start">
        {/* Sidebar from reusable component */}
        <Sidebar upperMenu={upperMenu} lowerMenu={lowerMenu} />

        {/* Right Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
