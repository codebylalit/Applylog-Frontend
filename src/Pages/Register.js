import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Container, TextField, Button, Typography, Alert } from "@mui/material";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
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

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          history.push("/login");
        }, 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (error) {
      setError("Error during registration");
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && (
        <Alert severity="success">
          Registration successful! Redirecting to login...
        </Alert>
      )}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={formData.username}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
