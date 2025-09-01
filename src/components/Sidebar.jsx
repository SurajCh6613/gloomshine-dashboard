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
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard /> },
    { name: "Drivers", path: "/drivers", icon: <Users /> },
    { name: "Bookings", path: "/bookings", icon: <Car /> },
    { name: "Notifications", path: "/notifications", icon: <Bell /> },
    { name: "Settings", path: "/settings", icon: <Settings /> },
  ];

  const lowerMenuItems = [
    { name: "Payment Details", path: "/payments", icon: <CreditCard /> },
    { name: "Transactions", path: "/transactions", icon: <BarChart3 /> },
    { name: "Car Report", path: "/car-report", icon: <FileText /> },
  ];

  return (
    <section className="group w-[8%] hover:w-1/4  h-screen bg-gray-900 text-white flex flex-col p-4 duration-300">
      {/* upper-half */}
      <div className="flex flex-col mb-2">
        <NavLink to={"/"} className="flex  items-center">
          <img src="logo.png" alt="logo" className="w-12 h-12" />{" "}
          <span className="hidden group-hover:flex text-xs md:text-xl lg:text-2xl font-semibold">
            CAR RENT
          </span>
        </NavLink>
        <ul className="mt-4 space-y-1">
          {menuItems.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex  py-2 px-3 gap-2 items-center rounded-md relative ${
                  isActive ? "bg-blue-600" : "bg-transparent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1 w-1 h-8 bg-white rounded-r-md"></span>
                  )}
                  {menu.icon}
                  <div className="text-sm hidden group-hover:inline">{menu.name}</div>
                </>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
      <hr />
      {/* Lower Half */}
      <div className="flex flex-col justify-between">
        <h3 className="py-2 px-3 text-gray-400">
          <span className="text-sm lg:text-xl">Reports</span>
        </h3>
        <ul className="mt-4 space-y-1">
              {lowerMenuItems.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex  py-2 px-3 gap-2 items-center rounded-md relative ${
                  isActive ? "bg-blue-600" : "bg-transparent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1 w-1 h-8 bg-white rounded-r-md"></span>
                  )}
                  {menu.icon}
                  <span className="hidden text-sm group-hover:inline">{menu.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </ul>
        <button className="flex gap-1 text-sm bg-gray-400 justify-center py-2  rounded-md mt-8 cursor-pointer hover:bg-orange-600 duration-300">
          <LogOut />
          Logout
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
