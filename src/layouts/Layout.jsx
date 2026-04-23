import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

const Layout = () => {
  return (
    <div>
      <MainNavbar />
      <main className="h-full px-4 mt-2 mx-auto pt-[80px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
