import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
