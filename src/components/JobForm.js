import React, { useState } from "react";
import axios from "../services/api";
import { makeStyles } from "@mui/styles";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
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
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
}));

const JobForm = ({ fetchJobs, authToken }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
    deadline: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData);
      console.log("Using token:", authToken); // Log token
      const response = await axios.post("/api/jobs", formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log("Response from adding job:", response.data);
      setFormData({
        company: "",
        position: "",
        status: "Applied",
        deadline: "",
        notes: "",
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
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Typography component="h1" variant="h5">
        Add Job
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="company"
          label="Company"
          name="company"
          autoComplete="company"
          autoFocus
          value={formData.company}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="position"
          label="Position"
          name="position"
          autoComplete="position"
          value={formData.position}
          onChange={handleInputChange}
        />
        <TextField
          select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        >
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Offered">Offered</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </TextField>

        <TextField
          variant="outlined"
          margin="normal"
          required
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
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
          id="notes"
          label="Notes"
          name="notes"
          autoComplete="notes"
          value={formData.notes}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Add Job
        </Button>
      </form>
    </Container>
  );
};

export default JobForm;
