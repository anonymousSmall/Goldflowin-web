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
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md backdrop-blur-md">
      <div className="container mx-auto max-w-[1320px] px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <img src={logo3} alt="Logo" className="h-10 rounded-xl shadow-md" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-900 px-4 py-2 rounded-lg font-medium shadow-sm transition-all"
                  : "text-white/90 hover:text-white hover:bg-blue-800/60 px-4 py-2 rounded-lg transition-all"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Desktop Auth Section */}
        <div className="hidden md:block">
          {user ? (
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-2 focus:outline-none">
                <img
                  alt="User"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="w-10 h-10 rounded-full border-2 border-white hover:shadow-md transition"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/5 focus:outline-none origin-top-right data-[closed]:scale-95 data-[closed]:opacity-0 transition duration-200"
              >
                <MenuItem>
                  <Link
                    to="/user/history"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl"
                  >
                    History
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => logout()}
                    className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-xl"
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
          className="text-white text-3xl md:hidden focus:outline-none transition-transform duration-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Animated Dropdown) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-blue-800/90 backdrop-blur-md px-6 py-4 space-y-3 border-t border-white/20">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-white bg-blue-900 px-4 py-2 rounded-md font-medium shadow-sm"
                  : "block text-white/90 hover:text-white hover:bg-blue-700/70 px-4 py-2 rounded-md"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Auth for Mobile */}
          <div className="pt-4 border-t border-white/20">
            {user ? (
              <>
                <Link
                  to="/user/history"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/90 hover:text-white py-2"
                >
                  History
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left text-white/90 hover:text-white py-2"
                >
                  Sign out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 mt-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-center bg-white text-blue-700 rounded-md py-2 font-medium hover:bg-blue-100 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="text-center bg-green-500 text-white rounded-md py-2 font-medium hover:bg-green-600 transition"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
