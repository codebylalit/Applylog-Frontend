import React, { useState, useEffect } from "react";
import axios from "../services/api";
import JobForm from "../components/JobForm";
import Sidebar from "../components/Sidebar";
import TaskComponent from "./TaskBoard";
import { SearchIcon } from "@heroicons/react/outline";
import Column from "../components/ColumnComponent";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("User");
  const [currentView, setCurrentView] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchJobs(token);
      fetchUsername(token);
    }
  }, []);

  const fetchJobs = async (token) => {
    try {
      const response = await axios.get("/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchUsername = async (token) => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(response.data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      fetchJobs(authToken);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const updateJob = async (id, updatedData) => {
    try {
      await axios.put(`/api/jobs/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      fetchJobs(authToken);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken("");
    setJobs([]);
    window.location.href = "/";
  };

  if (!authToken) {
    return <p>Loading...</p>;
  }

  const categorizedJobs = {
    Applied: jobs.filter((job) => job.status === "Applied"),
    Interview: jobs.filter((job) => job.status === "Interview"),
    Offered: jobs.filter((job) => job.status === "Offered"),
    Rejected: jobs.filter((job) => job.status === "Rejected"),
    Wishlist: jobs.filter((job) => job.status === "Wishlist"),
    FollowUp: jobs.filter((job) => job.status === "Follow-up"),
  };

  // Function to highlight matching parts of the title or description
  const highlightSearchTerm = (text) => {
    const lowerText = text ? text.toLowerCase() : "";
    const lowerQuery = searchQuery.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    if (index === -1) return text;
    const highlightedText = (
      <>
        {text.substring(0, index)}
        <span className="bg-yellow-200">
          {text.substring(index, index + searchQuery.length)}
        </span>
        {text.substring(index + searchQuery.length)}
      </>
    );
    return highlightedText;
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2 focus:outline-none text-lg text-gray-300 bg-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-3">
            <span>{username}</span>
          </div>
        </div>
        <h1 className="text-2xl ml-7 font-bold mt-4">
          {currentView === "dashboard" ? "Dashboard" : "Tasks"}
        </h1>
        <div className="flex-1 p-4 grid grid-cols-3 gap-4">
          {currentView === "dashboard" ? (
            <>
              {Object.keys(categorizedJobs).map((category) => (
                <Column
                  key={category}
                  title={category}
                  jobs={categorizedJobs[category]}
                  updateJob={updateJob}
                  deleteJob={deleteJob}
                  toggleForm={toggleForm}
                  searchQuery={searchQuery} // Pass searchQuery down to Column component
                  highlightSearchTerm={highlightSearchTerm} // Pass highlightSearchTerm function down
                />
              ))}
            </>
          ) : (
            <TaskComponent />
          )}
        </div>
        <div className="p-6">
          <Modal
            open={showForm}
            onClose={toggleForm}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                bgcolor: "#333",
                boxShadow: 24,
                p: 4,
                borderRadius: 3,
              }}
              
            >
              <IconButton
                aria-label="close"
                onClick={toggleForm}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" component="h2" className="text-white">
                Create a new Job
              </Typography>
              <JobForm fetchJobs={fetchJobs} authToken={authToken} />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
