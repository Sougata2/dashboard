import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ paddingTop: "60px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
