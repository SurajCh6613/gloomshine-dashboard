import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex  bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
