import React, { useState, useEffect } from "react";
import axios from "../services/api";
import JobForm from "../components/JobForm";
import Sidebar from "../components/Sidebar";
import { SearchIcon } from "@heroicons/react/outline";
import Column from "../components/ColumnComponent";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("User");

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };

  return (
    <div className="flex min-h-screen font-body-18 bg-gray-100 text-white">
      <Sidebar onLogout={logout} />
      <div className="flex-1 flex flex-col ml-56">
        <div className="flex items-center justify-between p-6  bg-gray-100 ">
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
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-2xl ml-7 font-bold mt-4">Dashboard</h1>
        <div className="flex-1 p-4 grid grid-cols-3 gap-4">
          <Column
            title="Wishlist"
            jobs={categorizedJobs.Wishlist}
            updateJob={updateJob}
            deleteJob={deleteJob}
            toggleForm={toggleForm}
          />
          <Column
            title="Applied"
            jobs={categorizedJobs.Applied}
            updateJob={updateJob}
            deleteJob={deleteJob}
            toggleForm={toggleForm}
          />
          <Column
            title="Interview"
            jobs={categorizedJobs.Interview}
            updateJob={updateJob}
            deleteJob={deleteJob}
            toggleForm={toggleForm}
          />
          <Column
            title="Offered"
            jobs={categorizedJobs.Offered}
            updateJob={updateJob}
            deleteJob={deleteJob}
            toggleForm={toggleForm}
          />
          <Column
            title="Rejected"
            jobs={categorizedJobs.Rejected}
            updateJob={updateJob}
            deleteJob={deleteJob}
            toggleForm={toggleForm}
          />
          <Column
            title="Follow-up"
            jobs={categorizedJobs.FollowUp}
            updateJob={updateJob}
            deleteJob={deleteJob}
            toggleForm={toggleForm}
          />
        </div>
        <div className="p-6">
          <Modal
            open={showForm}
            onClose={toggleForm}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={style}>
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
              <Typography id="modal-title" variant="h6" component="h2">
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
