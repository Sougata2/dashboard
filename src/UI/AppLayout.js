import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
