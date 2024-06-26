// JobItem.js

import React, { useState } from "react";
import axios from "../services/api";

const JobItem = ({ job, updateJob, deleteJob }) => {
  const { _id, company, position, status, deadline } = job;
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    company,
    position,
    status,
    deadline: new Date(deadline).toISOString().split("T")[0], // Format date for input
  });

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/jobs/${_id}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEditMode(false); // Exit edit mode on successful update
      if (updateJob) {
        updateJob(_id, formData); // Update locally on success
      }
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const handleDelete = () => {
    if (deleteJob) {
      deleteJob(_id); // Example: Pass job id to delete function
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <li>
      {!editMode ? (
        <div>
          <h3>{company}</h3>
          <p>{position}</p>
          <p>Status: {status}</p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      )}
    </li>
  );
};

export default JobItem;
