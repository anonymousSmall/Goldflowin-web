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
    <nav className="
      backdrop-blur-2xl 
      bg-gradient-to-r from-white/60 via-blue-100/40 to-purple-200/40
      shadow-[0_8px_25px_rgb(0,0,0,0.10)] 
      border-b border-white/40 
      sticky top-0 z-50
    ">
      <div className="container mx-auto max-w-[1320px] flex items-center justify-between py-4 px-6 lg:h-[80px]">

        {/* Logo */}
        <Link to={"/"}>
          <img 
            src={logo3} 
            className="h-10 drop-shadow-md transition-all hover:scale-[1.04]" 
            alt="logo" 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-[17px] transition-all duration-300 font-medium tracking-wide 
                ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-400/30"
                    : "text-white/90 hover:text-white hover:bg-white/30 backdrop-blur-md shadow-sm"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Profile (Desktop) */}
        <div className="hidden lg:flex">
          {user ? (
            <Menu as="div" className="relative ml-4">
              <MenuButton className="flex items-center rounded-full bg-white/40 p-1 backdrop-blur-lg shadow-md hover:bg-white/60 transition-all">
                <img
                  alt=""
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="size-9 rounded-full shadow-sm"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-3 w-52 bg-white/80 backdrop-blur-xl shadow-xl rounded-xl py-2 border border-white/50">
                <MenuItem>
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50/60 rounded-lg transition-all"
                  >
                    History
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={() => logout()}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 rounded-lg transition-all"
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
                className="px-4 py-2 bg-white/30 text-white rounded-xl shadow-md backdrop-blur-lg hover:bg-white/40 transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-blue-400/40 transition-all"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <FaBars
          onClick={() => setToggle(!toggle)}
          className="text-3xl text-white cursor-pointer lg:hidden drop-shadow-md active:scale-90 transition-all"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] 
          ${toggle ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="
          flex flex-col gap-2 px-6 pb-6 
          bg-gradient-to-b from-white/70 via-blue-100/50 to-purple-200/40 
          backdrop-blur-2xl shadow-inner rounded-b-2xl
        ">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setToggle(false)}
              className="
                text-white/95 text-lg py-3 px-3 rounded-xl 
                hover:bg-white/30 transition-all tracking-wide
              "
            >
              {item.name}
            </NavLink>
          ))}

          {/* Auth Mobile */}
          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <>
                <Link
                  to="/user/history"
                  onClick={() => setToggle(false)}
                  className="text-white/95 text-lg py-3 px-3 rounded-xl bg-white/20 hover:bg-white/30"
                >
                  History
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setToggle(false);
                  }}
                  className="text-white/95 text-lg py-3 px-3 rounded-xl bg-red-500/20 hover:bg-red-500/30"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setToggle(false)}
                  className="text-white/95 text-lg py-3 px-3 rounded-xl bg-white/20 hover:bg-white/30"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setToggle(false)}
                  className="text-white text-lg py-3 px-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:shadow-blue-400/40"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
