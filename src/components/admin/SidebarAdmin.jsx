import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCog,
  SquareChartGantt,
  ShoppingBasket,
  ListOrdered,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import useEcomStore from "../../store/ecom-store";
import "../../assets/brandproduct/Slide.css";

const SidebarAdmin = () => {
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "dashboard", icon: <LayoutDashboard className="mr-2" />, label: "Dashboard" },
    { to: "manage", icon: <UserCog className="mr-2" />, label: "Manage" },
    { to: "category", icon: <SquareChartGantt className="mr-2" />, label: "Category" },
    { to: "brand", icon: <SquareChartGantt className="mr-2" />, label: "Brand" },
    { to: "product", icon: <ShoppingBasket className="mr-2" />, label: "Product" },
    { to: "orders", icon: <ListOrdered className="mr-2" />, label: "Orders" },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white flex justify-between items-center px-4 py-3 shadow-lg fixed w-full z-50">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-200 hover:text-white transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="hidden md:flex h-24 bg-gray-900 items-center justify-center text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 pb-6 border-t border-gray-700">
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="flex w-full items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <LogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile when sidebar open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SidebarAdmin;
