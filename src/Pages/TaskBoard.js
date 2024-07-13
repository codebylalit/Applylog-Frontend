import React, { useState, useEffect } from "react";
import axios from "../services/api";
import Sidebar from "../components/Sidebar";
import { SearchIcon } from "@heroicons/react/outline";
import {
  Modal,
  Box,
  Button,
  Typography,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const TaskBoard = () => {
  
  const [tasks, setTasks] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("User");
  const [editTaskData, setEditTaskData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentView, setCurrentView] = useState("tasks");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchTasks(token);
      fetchUsername(token);
    }
  }, []);

const fetchTasks = async (token) => {
  try {
    const response = await axios.get("/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(response.data);
  } catch (error) {
    alert("Error fetching tasks. Please try again later.");
    console.error("Error fetching tasks:", error);
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

const createTask = async (newData) => {
  try {
    const response = await axios.post("/api/tasks", newData, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    fetchTasks(authToken);
    setShowForm(false); // Close the form after creating a task
  } catch (error) {
    if (error.response) {
      console.error("Error creating task:", error.response.data.message);
    } else {
      console.error("Error creating task:", error.message);
    }
  }
};


  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      fetchTasks(authToken);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      await axios.put(`/api/tasks/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      fetchTasks(authToken);
      setShowForm(false); // Close the form after updating a task
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleForm = (status) => {
    setSelectedStatus(status);
    setShowForm(true);
  };

  const handleEditTask = (task) => {
    setEditTaskData(task);
    setSelectedStatus(task.status); // Set selected status for edit form
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskData = {
      title: form.title.value,
      description: form.description.value,
      status: selectedStatus || "To do",
      deadline: form.deadline.value, // Use selectedStatus or default to "To do"
    };

    if (editTaskData) {
      updateTask(editTaskData._id, taskData);
    } else {
      createTask(taskData);
    }

    setEditTaskData(null);
    form.reset(); // Reset the form fields after submission
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken("");
    setTasks([]);
    window.location.href = "/";
  };

  if (!authToken) {
    return <p>Loading...</p>;
  }

  // Filter and categorize tasks
  const categorizedTasks = {
    "To do": tasks.filter((task) => task.status === "To do"),
    "In progress": tasks.filter((task) => task.status === "In progress"),
    Done: tasks.filter((task) => task.status === "Done"),
  };

  // Function to highlight matching parts of the title or description
  const highlightSearchTerm = (text) => {
    const lowerText = text.toLowerCase();
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
  // Modal style
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "#333",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    alignItems: "center",
  };
  return (
    <div className="flex min-h-screen font-body-18 bg-gray-100 text-black">
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
              className="pl-11 pr-4 py-2 focus:outline-none text-lg text-gray-500 bg-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-3 text-white">
            <span>{username}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mx-7 mt-4">
          <h1 className="text-2xl text-white font-bold">Tasks</h1>
          <button
            onClick={() => toggleForm("To do")}
            className="flex items-center text-gray-100 px-4 py-2 rounded-lg font-semibold "
          >
            <AddIcon className="mr-1" />
            New task
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(categorizedTasks).map((status) => (
              <div
                key={status}
                className="p-4 rounded-lg bg-gray-300 text-gray-100"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold">{status}</div>
                  <IconButton onClick={() => toggleForm(status)}>
                    <AddIcon />
                  </IconButton>
                </div>
                {categorizedTasks[status]
                  .filter(
                    (task) =>
                      task.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      task.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                  )
                  .map((task) => (
                    <div
                      key={task._id}
                      className={`p-4 rounded-lg mb-2 shadow-md ${
                        status === "To do"
                          ? "bg-blue-400"
                          : status === "In progress"
                          ? "bg-orange-400"
                          : "bg-red-400"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div>
                            <div className="font-bold">
                              {highlightSearchTerm(task.title)}
                            </div>
                            <div>{highlightSearchTerm(task.description)}</div>
                            <div>
                              {task.deadline
                                ? `Deadline: ${new Date(
                                    task.deadline
                                  ).toLocaleDateString()}`
                                : ""}
                            </div>
                          </div>
                        </div>
                        <div>
                          <EditIcon
                            className="mr-2 cursor-pointer"
                            onClick={() => handleEditTask(task)}
                          />
                          <DeleteIcon
                            className="cursor-pointer"
                            onClick={() => deleteTask(task._id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <Modal open={showForm} onClose={() => setShowForm(false)}>
            <Box sx={modalStyle}>
              <IconButton
                onClick={() => setShowForm(false)}
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="h2"
                className="text-center font-body-18 text-gray-800 text-white"
              >
                {editTaskData ? "Edit Task" : "Create a New Task"}
              </Typography>
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 font-body-18 flex flex-col items-center p-4"
              >
                <div className="w-full">
                  <label
                    className="block text-white text-sm font-medium mb-1"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    name="title"
                    placeholder="Title"
                    required
                    defaultValue={editTaskData?.title || ""}
                    className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-white text-sm font-medium mb-1"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    name="description"
                    placeholder="Description"
                    required
                    defaultValue={editTaskData?.description || ""}
                    className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-white text-sm font-medium mb-1"
                    htmlFor="deadline"
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    placeholder="Deadline"
                    defaultValue={editTaskData?.deadline || ""}
                    className={`w-full p-2 border border-gray-300 rounded bg-white focus:outline-none ${
                      editTaskData && !editTaskData.deadline
                        ? "border-red-500"
                        : ""
                    }`}
                    required // Ensure the field is required
                  />
                  {editTaskData && !editTaskData.deadline && (
                    <p className="text-red-500 text-sm mt-1">
                      Deadline is required
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    className="block text-white text-sm font-medium mb-1"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <Select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded bg-white focus:outline-none"
                  >
                    <MenuItem value="To do">To do</MenuItem>
                    <MenuItem value="In progress">In progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                  sx={{ backgroundColor: "gray", color: "black" }}
                >
                  {editTaskData ? "Update" : "Create"}
                </Button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
