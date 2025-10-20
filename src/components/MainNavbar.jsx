import React, { useEffect, useState } from "react";
import logo2 from "../assets/image/logo2.jpg";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDownIcon, Headset, LogIn, Mail, UserPen } from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
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
  const [categorySelected, setCategorySelected] = useState([]);

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  const [toggle, setToggle] = useState(false);
  const updateToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-[#3b74f0]">
      <div className="container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]">
        <div>
          <a href="#">
            <img
              src={logo2}
              className="h-10 rounded-2xl shadow-slate-100"
              alt=""
            />
          </a>
        </div>
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } flex flex-col my-5 md:flex md:flex-row`}
        >
          {/* <li className='my-2 md:mx-4'><a href="#">หน้าแรก</a></li> */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
                : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
            }
            to={"/"}
          >
            หน้าแรก
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
                : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
            }
            to={"/Catalog"}
          >
            CatalogProduct
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
                : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
            }
            to={"/AllProduct"}
          >
            รายละเอียดสินค้า
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
                : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
            }
            to={"/contact"}
          >
            ติดต่อเรา
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
                : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-xl font-medium"
            }
            to={"/123"}
          >
            FAQ
          </NavLink> */}
          {/* <li className="my-2 md:mx-4">
            <a href="#">แคตตาล็อกสินค้า</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">รายละเอียดสินค้า</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">FAQ</a>
          </li> */}
        </ul>
        {/* -----------------Start Profile dropdown---------------------- */}
        <Menu as="div" className="relative ml-3">
          {user ? (
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-800 text-base focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  className="size-8 rounded-full"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  {/* <a
                    href="#"
                    className="block px-4 py-2 text-base text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a> */}
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 text-base text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    History
                  </Link>
                </MenuItem>
                {/* <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-base text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem> */}
                <MenuItem>
                  <Link
                    onClick={() => logout()}
                    className="block px-4 py-2 text-base text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
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
              } flex flex-col my-5 md:flex md:flex-row`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-base font-medium"
                    : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-base font-medium "
                }
                to={"/login"}
              >
                Login
              </NavLink>
              <li className="my-2 md:mx-4">
                <a
                  className="inline-flex justify-center items-center py-2 px-4  bg-[#4CAF4F] text-white rounded-md"
                  href="#"
                >
                  Sign up
                </a>
              </li>
            </ul>
          )}
        </Menu>
        {/* -----------------End Profile dropdown--------------------- */}
        {/* <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } flex flex-col my-5 md:flex md:flex-row`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#717171] text-white px-3 py-2 my-2 md:mx-4 rounded-md text-base font-medium"
                : "hover:bg-slate-200 px-3 py-2 my-2 md:mx-4 rounded-md text-base font-medium "
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <li className="my-2 md:mx-4">
            <a
              className="inline-flex justify-center items-center py-2 px-4  bg-[#4CAF4F] text-white rounded-md"
              href="#"
            >
              Sign up
            </a>
          </li>
        </ul> */}
        {/* Hamberger Icon */}
        <FaBars
          onClick={updateToggle}
          className="absolute right-5 cursor-pointer text-xl md:hidden"
        />
      </div>
    </nav>
  );
}

export default MainNavbar;
