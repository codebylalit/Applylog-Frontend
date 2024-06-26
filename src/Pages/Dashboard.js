// Dashboard.js

import React, { useState, useEffect } from "react";
import axios from "../services/api";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      fetchJobs(token);
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
      fetchJobs(authToken); // Refresh jobs after update
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (!authToken) {
    return <p>Loading...</p>; // Or you could redirect to login
  }

  return (
    <div>
      <h1>Job Application Tracker</h1>
      {jobs.length > 0 ? (
        <JobList jobs={jobs} updateJob={updateJob} deleteJob={deleteJob} />
      ) : (
        <p>No job applications found. Click "Add Job" to create one.</p>
      )}
      <button onClick={toggleForm}>{showForm ? "Cancel" : "Add Job"}</button>
      {showForm && <JobForm fetchJobs={fetchJobs} authToken={authToken} />}
    </div>
  );
};

export default Dashboard;
