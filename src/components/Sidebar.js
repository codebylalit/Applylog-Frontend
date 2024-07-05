import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ClipboardListIcon,
  ChartBarIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { LocalCafe, LocalCafeOutlined } from "@mui/icons-material";

const Sidebar = ({ onLogout }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed w-50 bg-gray-100 h-full flex flex-col justify-between border-r-2 border-gray-200 shadow-2xl border-solid">
      <div>
        <div className="flex items-center justify-center h-16 px-4">
          <h2 className="text-xl font-bold text-white">ApplyLog</h2>
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
                to="/coffeetip"
                className={`flex items-center space-x-2 no-underline text-lg ${
                  isActive("/settings")
                    ? "text-white relative"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <div className="flex items-center relative pl-4">
                  {isActive("/coffeetip") && (
                    <span className="absolute inset-y-0 left-0 w-2 bg-red-500 rounded-full ml-[-23px]"></span>
                  )}
                  <LocalCafeOutlined className="h-6 w-6" />
                </div>
                <span>Coffee Tip</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-8 border-t ml-8 right-20 ">
        <button
          onClick={onLogout}
          className="mt-4 bg-gray-100 text-white px-2 py-1 rounded flex items-center space-x-2 no-underline text-lg"
        >
          <LogoutIcon className="h-6 w-6" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
