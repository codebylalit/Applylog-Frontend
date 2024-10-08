import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ClipboardListIcon,
  ChartBarIcon,
  LogoutIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { Face2Outlined } from "@mui/icons-material";

const Sidebar = ({ onLogout }) => {
  const location = useLocation();
    const [logoVisible, setLogoVisible] = useState(false);

    const handleMouseEnter = () => {
      setLogoVisible(true);
    };

    const handleMouseLeave = () => {
      setLogoVisible(false);
    };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed w-50 bg-gray-100 h-full flex flex-col justify-between border-r-2 border-gray-200 shadow-2xl border-solid">
      <div>
        <div
          className="flex items-center justify-center h-16 px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-xl font-bold text-white cursor-pointer relative">
            ApplyLog
            {logoVisible && (
              <span className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Face2Outlined className="h-6 w-6" />
              </span>
            )}
          </h2>
        </div>
        <nav className="flex-1 px-2 py-2">
          <ul className="space-y-8 list-none">
            <li className="ml-[-25px]">
              <Link
                to="/dashboard"
                className={`flex items-center space-x-2 no-underline text-lg ${
                  isActive("/dashboard")
                    ? "text-white relative"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <div className="flex items-center relative pl-4">
                  {isActive("/dashboard") && (
                    <span className="absolute inset-y-0 left-0 w-2 bg-red-500 rounded-full ml-[-23px]"></span>
                  )}
                  <HomeIcon className="h-6 w-6" />
                </div>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="ml-[-25px]">
              <Link
                to="/taskboard"
                className={`flex items-center space-x-2 no-underline text-lg ${
                  isActive("/taskboard")
                    ? "text-white relative"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <div className="flex items-center relative pl-4">
                  {isActive("/taskboard") && (
                    <span className="absolute inset-y-0 left-0 w-2 bg-red-500 rounded-full ml-[-23px]"></span>
                  )}
                  <ClipboardListIcon className="h-6 w-6" />
                </div>
                <span>Tasks</span>
              </Link>
            </li>
            <li className="ml-[-25px]">
              <Link
                to="/analysis"
                className={`flex items-center space-x-2 no-underline text-lg ${
                  isActive("/analysis")
                    ? "text-white relative"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <div className="flex items-center relative pl-4">
                  {isActive("/analysis") && (
                    <span className="absolute inset-y-0 left-0 w-2 bg-red-500 rounded-full ml-[-23px]"></span>
                  )}
                  <ChartBarIcon className="h-6 w-6" />
                </div>
                <span>Analytics</span>
              </Link>
            </li>
            <li className="ml-[-25px]">
              <Link
                to="/calender"
                className={`flex items-center space-x-2 no-underline text-lg ${
                  isActive("/calender")
                    ? "text-white relative"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <div className="flex items-center relative pl-4">
                  {isActive("/calender") && (
                    <span className="absolute inset-y-0 left-0 w-2 bg-red-500 rounded-full ml-[-23px]"></span>
                  )}
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <span>Calendar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-8 border-t ml-8 right-20 ">
        <button
          onClick={onLogout}
          className="mt-4 bg-gray-100 cursor-pointer text-white px-2 py-1 rounded flex items-center space-x-2 no-underline text-lg"
        >
          <LogoutIcon className="h-6 w-6" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
