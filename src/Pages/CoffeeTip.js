import React, { useState, useEffect } from "react";
import axios from "../services/api";
import { SearchIcon } from "@heroicons/react/outline";
import Sidebar from "../components/Sidebar";

const BuyMeACoffeeButton = () => {
  const [authToken, setAuthToken] = useState("");
  const [username, setUsername] = useState("User");
  const [currentView, setCurrentView] = useState("coffeetip");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchUsername(token);
    }
  }, []);

  const fetchUsername = async (token) => {
    try {
      const response = await axios.get("/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(response.data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };
  
  if (!authToken) {
    return <p>Loading...</p>;
  }
  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken("");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen font-body-18 bg-gray-100 text-white">
      <Sidebar onLogout={logout} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col ml-56">
        <div className="flex items-center justify-between p-6 bg-gray-100">
          <div className="relative flex items-center rounded-lg">
            <SearchIcon className="absolute left-3 w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search Activity"
              className="pl-11 pr-4 py-2 focus:outline-none text-lg text-gray-300 bg-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-3">
            <span>{username}</span>
          </div>
        </div>
        <h1 className="text-2xl ml-7 font-bold mt-4">Coffee Treat</h1>
        <div className="flex justify-center mt-4">
          <a
            href="https://buymeacoffee.com/heylalit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 no-underline text-lg text-gray-500 hover:text-white"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: 40, width: 144 }}
            />
          </a>
        </div>
        <span className="text-center mt-10">
          "Your support means a latte! I'd really appreciate it if you could Buy
          Me A Coffee :)"
        </span>
      </div>
    </div>
  );
};

export default BuyMeACoffeeButton;
