import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      {/* Top bar (mobile only) */}
      <div className="md:hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white flex justify-between items-center px-4 py-3 shadow-md fixed w-full z-50">
        <h1 className="text-lg font-semibold tracking-wide">Admin Panel</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-100 hover:text-white transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-screen w-64 
        bg-gradient-to-b from-blue-700 to-gray-900 text-gray-100 
        shadow-xl transform transition-transform duration-300 ease-in-out 
        z-40 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="hidden md:flex h-24 bg-blue-800 items-center justify-center text-2xl font-bold border-b border-blue-600 shadow-md">
          Admin Panel
        </div>

        {/* Nav Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-300 hover:bg-blue-600/70 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 pb-6 border-t border-blue-600">
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="flex w-full items-center px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <LogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SidebarAdmin;
