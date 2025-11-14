import React, { useEffect, useState } from "react";
import logo3 from "../assets/image/Logo3.png";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

function MainNavbar() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  const getCategory = useEcomStore((state) => state.getCategory);
  const getProduct = useEcomStore((state) => state.getProduct);

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

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-[#3b74f0] shadow-md">
      <div className="container mx-auto max-w-[1320px] px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img src={logo3} className="h-10" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-900 px-4 py-2 rounded-lg font-medium shadow-sm"
                  : "text-white/90 hover:text-white hover:bg-blue-800/60 px-4 py-2 rounded-lg"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Profile (Desktop Only) */}
        <div className="hidden md:block">
          <Menu as="div" className="relative">
            {user ? (
              <>
                <MenuButton className="flex rounded-full bg-gray-900">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                    className="size-9 rounded-full"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 mt-3 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-1">
                  <MenuItem>
                    <Link
                      to="/user/history"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      History
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </>
            ) : (
              <div className="flex gap-3">
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-white/90 text-gray-800 rounded-md hover:bg-white"
                >
                  Login
                </NavLink>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Sign up
                </Link>
              </div>
            )}
          </Menu>
        </div>

        {/* Mobile Toggle Button */}
        <FaBars
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden cursor-pointer"
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="md:hidden bg-[#3b74f0] px-6 pb-5 animate-slideDown">
          <ul className="flex flex-col gap-3 mt-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setToggle(false)}
                className="text-white py-2 px-3 rounded-lg hover:bg-blue-800/50"
              >
                {item.name}
              </NavLink>
            ))}

            {/* Login / Profile in Mobile */}
            {user ? (
              <>
                <Link
                  to="/user/history"
                  onClick={() => setToggle(false)}
                  className="text-white py-2 px-3 hover:bg-blue-800/50 rounded-lg"
                >
                  History
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setToggle(false);
                  }}
                  className="text-white text-left py-2 px-3 hover:bg-blue-800/50 rounded-lg"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setToggle(false)}
                  className="text-white py-2 px-3 hover:bg-blue-800/50 rounded-lg"
                >
                  Login
                </NavLink>
                <Link
                  to="/register"
                  onClick={() => setToggle(false)}
                  className="py-2 px-4 bg-green-600 text-white rounded-md w-fit"
                >
                  Sign up
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MainNavbar;
