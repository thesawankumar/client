import { Divider } from "@mui/material";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const menu = [
  { name: "Profile", path: "/account/profile" },
  { name: "Saved Cards", path: "/account/save-card" },
  { name: "Address", path: "/account/address" },
  { name: "Orders", path: "/account/orders" },
  { name: "Logout", path: "/" },
];

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (item: { path: string }) => {
    setActivePath(item.path);
    navigate(item.path);
  };

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
        {/* Left Sidebar */}
        <aside className="bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-6 w-full lg:w-[280px] self-start">
          <h2 className="text-lg font-semibold text-gray-700">
            Account Settings
          </h2>
          <ul className="space-y-2 text-sm">
            {menu.map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-200
              ${
                activePath === item.path
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Content */}
        <section className="flex-1 bg-white rounded-xl shadow-md border border-gray-200 p-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
