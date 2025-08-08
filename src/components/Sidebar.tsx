import { Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useAppDispatch } from "../redux/store";
import { logout } from "../redux/AuthSlice";

export interface MenuItem {
  name: string;
  path: string;
  icon: ReactNode;
}

interface SidebarProps {
  upperMenu: MenuItem[];
  lowerMenu: MenuItem[];
}

export default function Sidebar({ upperMenu, lowerMenu }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    setActivePath(path);
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <aside className="bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-6 w-full lg:w-[280px] self-start">
      <ul className="space-y-2 text-sm">
        {upperMenu.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              handleNavigation(item.path);
              if (item.path == "/") handleLogout();
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
              activePath === item.path
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>

      <div className="h-4" />
      <Divider />

      <ul className="space-y-2 text-sm pt-2">
        {lowerMenu.map((item) => (
          <li
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
              activePath === item.path
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
