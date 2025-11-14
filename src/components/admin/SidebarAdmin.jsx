import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
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
import { toast } from "react-toastify";

const SidebarAdmin = () => {
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  
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
      {/* Top Bar (Mobile) */}
      <div className="md:hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white flex justify-between items-center px-4 py-3 shadow-md fixed w-full z-50">
        <h1 className="text-lg font-semibold tracking-wide">Admin Panel</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:opacity-80 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-screen w-64 
        bg-gradient-to-b from-white to-gray-100 text-gray-800 
        shadow-xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div className="hidden md:flex h-24 bg-blue-600 items-center justify-center text-2xl font-bold text-white shadow-md">
          Admin Panel
        </div>

        {/* Nav Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
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
        <div className="px-4 pb-6 border-t border-gray-200">
          <button
            onClick={() => {
                logout();          // ลบ token หรือข้อมูลผู้ใช้
                setIsOpen(false);  // ปิดเมนู
                toast.success("ออกจากระบบสำเร็จ!", {
                      position: "top-right",
                      autoClose: 1200,
                });
               setTimeout(() => {
        navigate("/");   // Redirect ไปหน้า Home
      }, 1200);          // ดีเลย์ให้ Toast แสดงก่อน
    }}
            className="flex w-full items-center px-4 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-red-100 hover:text-red-600 transition-all duration-200"
          >
            <LogOut className="mr-2" />
            Logout
          </button>
        </div>
      </div>


      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SidebarAdmin;






