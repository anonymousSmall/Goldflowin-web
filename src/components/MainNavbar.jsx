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
    <nav className="bg-[#3b74f0] shadow-md w-full z-50">
      <div className="container mx-auto max-w-[1320px] relative flex items-center justify-between py-4 px-6 lg:h-[80px]">

        {/* Logo */}
        <Link to={"/"}>
          <img src={logo3} className="h-10" alt="logo" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6 items-center">
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

        {/* Profile Desktop */}
        <div className="hidden lg:flex">
          {user ? (
            <Menu as="div" className="relative ml-3">
              <MenuButton className="flex rounded-full bg-gray-800 p-1">
                <img
                  alt=""
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="size-8 rounded-full"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
                <MenuItem>
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => logout()}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger icon – show for iPad and smaller */}
        <FaBars
          onClick={() => setToggle(!toggle)}
          className="text-2xl text-white cursor-pointer lg:hidden"
        />
      </div>

      {/* Mobile Menu with soft animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          toggle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-3 bg-[#3b74f0] px-6 pb-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setToggle(false)}
              className="text-white/90 hover:text-white py-2 text-lg"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Profile / Login on Mobile */}
          {user ? (
            <>
              <Link
                to={"/user/history"}
                onClick={() => setToggle(false)}
                className="text-white/90 hover:text-white py-2 text-lg"
              >
                History
              </Link>
              <button
                onClick={() => {
                  logout();
                  setToggle(false);
                }}
                className="text-white/90 hover:text-white py-2 text-lg"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setToggle(false)}
                className="text-white/90 hover:text-white py-2 text-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setToggle(false)}
                className="text-white/90 hover:text-white py-2 text-lg"
              >
                Sign up
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
