import React, { useEffect, useState } from "react";
import logo3 from "../assets/image/Logo3.png";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
    <nav className="bg-[#1e3a8a]/95 backdrop-blur-md shadow-xl border-b border-[#1e3a8a]/50 sticky top-0 z-50">
      <div className="container mx-auto max-w-[1320px] flex items-center justify-between py-4 px-6 lg:h-[80px]">

        {/* Logo */}
        <Link to={"/"}>
          <img
            src={logo3}
            className="h-10 drop-shadow-md transition-transform hover:scale-105"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 text-[17px] tracking-wide
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] shadow-lg shadow-blue-700/50"
                    : "hover:bg-white/10 hover:shadow-lg hover:scale-[1.02]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Profile Desktop */}
        <div className="hidden lg:flex">
          {user ? (
            <Menu as="div" className="relative ml-4">
              <MenuButton className="flex items-center rounded-full bg-white/20 p-1 backdrop-blur-md shadow-md hover:bg-white/30 transition-all hover:shadow-lg">
                <img
                  alt=""
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="size-8 rounded-full shadow-sm"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-3 w-52 bg-white/90 backdrop-blur-md shadow-xl rounded-xl py-2 border border-white/40 transition-all duration-300">
                <MenuItem>
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100/40 rounded-lg transition-all hover:shadow-md hover:scale-[1.02]"
                  >
                    History
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => logout()}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-red-100/40 rounded-lg transition-all hover:shadow-md hover:scale-[1.02]"
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
                className="px-4 py-2 bg-white/20 text-white rounded-xl shadow-md backdrop-blur-md hover:bg-white/30 hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white rounded-xl shadow-lg hover:shadow-blue-700/50 transition-all hover:scale-[1.03] animate-glow"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger icon */}
        <FaBars
          onClick={() => setToggle(!toggle)}
          className="text-2xl text-white cursor-pointer lg:hidden drop-shadow-md transition-transform active:scale-90"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
          toggle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-3 bg-[#1e3a8a]/90 backdrop-blur-md px-6 pb-5 rounded-b-xl shadow-inner transition-all">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setToggle(false)}
              className="text-white/95 text-lg py-2 px-3 rounded-lg hover:bg-white/10 transition-all hover:shadow-md hover:scale-[1.02]"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Profile / Auth Mobile */}
          {user ? (
            <>
              <Link
                to={"/user/history"}
                onClick={() => setToggle(false)}
                className="text-white/95 text-lg py-2 px-3 rounded-lg hover:bg-white/10 transition-all hover:shadow-md hover:scale-[1.02]"
              >
                History
              </Link>
              <button
                onClick={() => {
                  logout();
                  setToggle(false);
                }}
                className="text-white/95 text-lg py-2 px-3 rounded-lg hover:bg-red-500/30 transition-all hover:shadow-md hover:scale-[1.02]"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setToggle(false)}
                className="text-white/95 text-lg py-2 px-3 rounded-lg hover:bg-white/10 transition-all hover:shadow-md hover:scale-[1.02]"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setToggle(false)}
                className="text-white/95 text-lg py-2 px-3 rounded-lg bg-gradient-to-r from-[#1e40af] to-[#3b82f6] shadow-md hover:shadow-blue-700/50 transition-all hover:scale-[1.03] animate-glow"
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
