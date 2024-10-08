import React, { useState } from "react";
import axios from "../services/api";
import { Container, TextField, Button, MenuItem, Grid } from "@mui/material";

const JobForm = ({ fetchJobs, authToken }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
    salary: "",
    jobType: "",
    location: "",
    url: "",
    appliedOn: "",
    deadline: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/jobs", formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setFormData({
        company: "",
        position: "",
        status: "Applied",
        salary: "",
        jobType: "",
        location: "",
        url: "",
        appliedOn: "",
        deadline: "",
        description: "",
      });
      fetchJobs();
    } catch (error) {
      console.error(
        "Error adding job:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      className="rounded-xl mx-auto mt-8 font-body-18"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="company"
              label="Company Name"
              name="company"
              autoComplete="company"
              autoFocus
              value={formData.company}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="position"
              label="Position"
              name="position"
              autoComplete="position"
              value={formData.position}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              variant="outlined"
              id="status"
              label="Column"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            >
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Interview">Interview</MenuItem>
              <MenuItem value="Offered">Offered</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
              <MenuItem value="Wishlist">Wishlist</MenuItem>
              <MenuItem value="Follow-up">Follow-up</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="salary"
              label="Salary"
              name="salary"
              autoComplete="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              variant="outlined"
              id="jobType"
              label="Job Type"
              name="jobType"
              required
              value={formData.jobType}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
              value={formData.location}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="url"
              label="URL"
              name="url"
              autoComplete="url"
              value={formData.url}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="appliedOn"
              label="Applied On"
              name="appliedOn"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.appliedOn}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="deadline"
              label="Deadline"
              name="deadline"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.deadline}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={1}
              id="description"
              label="Notes"
              name="description"
              autoComplete="description"
              value={formData.description}
              onChange={handleInputChange}
              className="bg-white rounded-md"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="text-white py-2 px-4 rounded-md mt-4 bg-gray-700 hover:bg-gray-600"
        >
          Save & Close
        </Button>
      </form>
    </Container>
  );
};

export default JobForm;
