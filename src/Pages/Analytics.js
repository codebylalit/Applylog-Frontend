import React, { useState, useEffect } from "react";
import axios from "../services/api";
import Sidebar from "../components/Sidebar";
import Column from "../components/ColumnComponent";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { SearchIcon } from "@heroicons/react/outline";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Analytics = () => {
  const [tasks, setTasks] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [username, setUsername] = useState("User");
  const [currentView, setCurrentView] = useState("analytics");

 useEffect(() => {
   const token = localStorage.getItem("token");
   if (token) {
     setAuthToken(token);
     fetchTasks(token);
     fetchJobs(token);
     fetchUsername(token);
   }
 }, []);

 const fetchTasks = async (token) => {
   try {
     const response = await axios.get("/api/tasks", {
       headers: { Authorization: `Bearer ${token}` },
     });
     const fetchedTasks = response.data;
     console.log("Fetched tasks:", fetchedTasks); // Add this line
     setTasks(fetchedTasks);
   } catch (error) {
     console.error("Error fetching tasks:", error);
   }
 };


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
      const response = await axios.get("/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(response.data.username);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken("");
    setTasks([]);
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

  const jobDoughnutData = {
    labels: [
      "Applied",
      "Interview",
      "Offered",
      "Rejected",
      "Wishlist",
      "Follow-up",
    ],
    datasets: [
      {
        data: Object.values(categorizedJobs).map((category) => category.length),
        backgroundColor: [
          "#4BC0C0",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#4BC0C0",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

const categorizedTasks = {
  Todo: tasks.filter(
    (task) =>
      task.status.toLowerCase() === "to do" ||
      task.status.toLowerCase() === "todo"
  ),
  InProgress: tasks.filter(
    (task) =>
      task.status.toLowerCase() === "in progress" ||
      task.status.toLowerCase() === "inprogress"
  ),
  Done: tasks.filter((task) => task.status.toLowerCase() === "done"),
};

const taskDoughnutData = {
  labels: ["Todo", "In Progress", "Done"],
  datasets: [
    {
      data: [
        categorizedTasks.Todo.length,
        categorizedTasks.InProgress.length,
        categorizedTasks.Done.length,
      ],
      backgroundColor: [
         "#2196F3", // Blue for "To do"
        "#FF9800",  // Orange for "In progress"
        "#F44336", // Red for other statuses (assuming there's no other status)
      ],
      hoverBackgroundColor: [
         "#64B5F6" ,// Lighter blue on hover
          "#FFB74D", // Lighter orange on hover
        "#EF9A9A", // Lighter red on hover
      ],
    },
  ],
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
        <h1 className="text-2xl ml-7 font-bold mt-4">
          Analytics Overview
        </h1>
        <div className="p-6">
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                className="p-4"
                sx={{ backgroundColor: "#333", color: "#fff" }}
              >
                <Typography variant="h6" className="mb-8">
                  Job Status
                </Typography>
                <Doughnut data={jobDoughnutData} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                className="p-4"
                sx={{ backgroundColor: "#333", color: "#fff" }}
              >
                <Typography variant="h6" className="mb-8">
                  Task Status
                </Typography>
                <Doughnut data={taskDoughnutData} />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default Analytics;
