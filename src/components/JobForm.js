import React, { useState } from "react";
import axios from "../services/api";
import { makeStyles } from "@mui/styles";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "gray",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
}));

const JobForm = ({ fetchJobs, authToken }) => {
  const classes = useStyles();
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
    <Container component="main" maxWidth="sm" className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
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
              value={formData.jobType}
              onChange={handleInputChange}
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
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Save & Close
        </Button>
      </form>
    </Container>
  );
};

export default JobForm;
