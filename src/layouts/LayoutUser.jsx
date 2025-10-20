import React from "react";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div>
      <h1>Hav</h1>
      <Outlet />
    </div>
  );
};

export default LayoutUser;