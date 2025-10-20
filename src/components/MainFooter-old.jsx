import React from "react";
import logo from "../assets/image/Logo.png";
import logo2 from "../assets/image/logo2.jpg";

const MainFooter = () => {
  return (
    <>
      {/* <div className="bg-white bg-gradient-to-r from-blue-900 to-sky-400 shadow-md">
        <div className="py-4">
          <div>
            <img src={logo2} className="h-20 w-56" alt="" />
          </div>
        </div>
      </div> */}
      {/* <footer className="  bg-gradient-to-r from-blue-900 to-sky-400 shadow-sm rounded-b-lg"> */}
      <footer className=" dark:bg-gray-900 shadow-sm rounded-b-lg">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-xl text-gray-500 sm:text-center dark:text-white">
            © 2023
            <a href="#" className="hover:underline">
              GoldFlow.com
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-xl font-medium text-white dark:text-white sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                หน้าแรก
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                เกี่ยวกับเรา
              </a>
            </li> */}
            <li>
              <a href="/AllProduct" className="hover:underline me-4 md:me-6">
                รายละเอียดสินค้า
              </a>
            </li>
            <li>
            <a href="/contact" className="hover:underline me-4 md:me-6">
              ติดต่อเรา
            </a>
          </li>
          </ul>
        </div>
        <div className="text-center text-white font-semibold">
          Powered by{" "}
          <a href="#" className="text-blue-900 hover:text-gray-400">
            Littlebug.dev
          </a>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
