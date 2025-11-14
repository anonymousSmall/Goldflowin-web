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
    <nav className="bg-[#3b74f0]">
      <div className="container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:h-[80px]">

        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src={logo3} className="h-10 shadow-slate-100" alt="" />
          </Link>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } flex flex-col my-5 lg:flex lg:flex-row gap-6 items-center`}
        >
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

        {/* Profile Dropdown */}
        <Menu as="div" className="relative ml-3">
          {user ? (
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-800 text-base focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img
                  alt=""
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="size-8 rounded-full"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg"
              >
                <MenuItem>
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 text-base text-gray-700"
                  >
                    History
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => logout()}
                    className="block px-4 py-2 text-base text-gray-700"
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </div>
          ) : (
            <ul
              className={`${
                !toggle ? "hidden" : "flex"
              } flex flex-col lg:flex lg:flex-row`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#717171] text-white px-3 py-2 my-2 lg:mx-4 rounded-md text-base font-medium"
                    : "hover:bg-slate-200 px-3 py-2 my-2 lg:mx-4 rounded-md text-base font-medium"
                }
                to={"/login"}
              >
                Login
              </NavLink>
              <li className="my-2 lg:mx-4">
                <a
                  className="inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md"
                  href="/register"
                >
                  Sign up
                </a>
              </li>
            </ul>
          )}
        </Menu>

        {/* Hamburger Icon – SHOW from iPad down */}
        <FaBars
          onClick={() => setToggle(!toggle)}
          className="absolute right-5 cursor-pointer text-xl lg:hidden"
        />
      </div>
    </nav>
  );
}

export default MainNavbar;
