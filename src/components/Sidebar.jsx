import React from "react";
import {
  LayoutDashboard,
  Users,
  Car,
  Settings,
  CreditCard,
  FileText,
  BarChart3,
  LogOut,
  Bell,
} from "lucide-react";

const Sidebar = () => {
  return (
    <section className="w-[25%] min-h-screen bg-gray-900 text-white flex flex-col p-4">
      {/* upper-half */}
      <div className="flex flex-col mb-2">
        <div className="flex  items-center">
          <img src="logo.png" alt="logo" className="w-12 h-12" />{" "}
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold">
            CAR RENT
          </span>
        </div>
        <ul className="mt-4 space-y-1">
          <li className="flex bg-blue-500 py-2 px-3 gap-2 items-center rounded-md relative">
            <span className="absolute left-0 top-1  w-1 h-8 bg-white rounded-r-md"></span>
            <LayoutDashboard /> <span className="text-xl">Dashboard</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <Users /> <span className="text-xl">Drivers</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <Car /> <span className="text-xl">Bookings</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <Bell /> <span className="text-xl">Notification</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <Settings /> <span className="text-xl">Settings</span>
          </li>
        </ul>
      </div>
      <hr />
      {/* Lower Half */}
      <div className="flex flex-col justify-between">
        <ul className="mt-4 space-y-1">
          <li className="py-2 px-3 text-gray-400">
            <span className="text-xl">Reports</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <CreditCard /> <span className="text-xl">Payment Details</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <BarChart3 /> <span className="text-xl">Transactions</span>
          </li>
          <li className="flex py-2 px-3 gap-2 items-center rounded-md">
            <FileText /> <span className="text-xl">Car Report</span>
          </li>
        </ul>
        <button className="flex gap-1 bg-gray-400 justify-center py-2 mx-3 rounded-md mt-8">
          <LogOut />
          Logout
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
