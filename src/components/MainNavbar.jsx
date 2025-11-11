import React, { useEffect, useState } from "react";
import logo3 from "../assets/image/Logo3.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function MainNavbar() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  const getCategory = useEcomStore((state) => state.getCategory);
  const getProduct = useEcomStore((state) => state.getProduct);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  const navItems = [
    { name: "หน้าแรก", to: "/" },
    { name: "CatalogProduct", to: "/Catalog" },
    { name: "รายละเอียดสินค้า", to: "/AllProduct" },
    { name: "ติดต่อเรา", to: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-[1320px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo3} alt="Logo" className="h-10 rounded-xl" />
          <span className="text-white text-2xl font-semibold hidden sm:block">
            SafePlay
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-800 px-4 py-2 rounded-lg font-medium transition"
                  : "text-white/90 hover:text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Profile / Auth Section */}
        <div className="hidden md:block">
          {user ? (
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-2 focus:outline-none">
                <img
                  alt="User"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="w-9 h-9 rounded-full border-2 border-white"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  <Link
                    to="/user/history"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
                  >
                    History
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => logout()}
                    className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="text-white border border-white/70 px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700/95 backdrop-blur-md px-6 py-4 space-y-4 animate-slideDown">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-white bg-blue-900 px-4 py-2 rounded-md"
                  : "block text-white/90 hover:text-white hover:bg-blue-800 px-4 py-2 rounded-md"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Auth */}
          {user ? (
            <div className="pt-3 border-t border-white/30">
              <Link
                to="/user/history"
                className="block text-white/90 hover:text-white py-2"
                onClick={() => setMenuOpen(false)}
              >
                History
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="block text-left text-white/90 hover:text-white py-2 w-full"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 pt-3 border-t border-white/30">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-white text-blue-700 rounded-md py-2 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-green-500 text-white rounded-md py-2 font-medium hover:bg-green-600 transition"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default MainNavbar;
